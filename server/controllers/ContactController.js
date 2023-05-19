import Contact from "../models/Contact.js";
import fs from "fs";
import md5 from "md5";

const ContactController = {
  getContact: async (req, res, next) => {
    try {
      const contact = await Contact.findById(req.params.id);
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getContacts: async (req, res, next) => {
    try {
      const contact = await Contact.find();
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createContact: async (req, res, next) => {
    const img = req.file;
    if (!img) {
      res.status(422).json({ message: "Tidak ada gambar yang di upload!" });
      return false;
    }
    if (img.size >= 2000000) {
      res.status(422).json({ message: "Ukuran gambar max 2mb" });
      return false;
    }
    if (
      !img.mimetype === "image/jpg" ||
      !img.mimetype === "image/jpeg" ||
      !img.mimetype === "image/png"
    ) {
      res.status(422).json({ message: "Format gambar tidak didukung!" });
    }

    try {
      const create = new Contact({
        sosmed: req.body.sosmed,
        link: req.body.link,
        image: {
          data: img.fieldname,
          originalName: img.filename,
          ContentType: img.mimetype,
        },
        url: `${req.protocol}://${req.get("host")}/images/${img.filename}`,
      });
      await create.save();
      res.status(201).json(create);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateContact: async (req, res, next) => {
    const contactID = await Contact.findById(req.params.id);
    const { originalName } = contactID.image;

    const img = req.file;

    if (!img) {
      res.status(422).json({ message: "Tidak ada gambar yang di upload!" });
      return false;
    }
    if (img.size >= 2000000) {
      res.status(422).json({ message: "Ukuran gambar max 2mb" });
      return false;
    }
    if (
      !img.mimetype === "image/jpg" ||
      !img.mimetype === "image/jpeg" ||
      !img.mimetype === "image/png"
    ) {
      res.status(422).json({ message: "Format gambar tidak didukung!" });
    }

    const { originalname } = img;
    const [...ex] = originalname.split(".");
    const changedNameFile = `${md5(ex[0])}.${ex.pop()}`;

    if (img) {
      fs.access("public/images/", fs.constants.F_OK, (err) => {
        if (!err) {
          fs.unlink(`public/images/${originalName}`, (err) => {
            if (err) throw err;
            console.log(`Gambar berhasil dirubah!`);
          });
        }
      });
    }

    try {
      const update = await Contact.findByIdAndUpdate(
        req.params.id,
        {
          sosmed: req.body.sosmed,
          link: req.body.link,
          image: {
            data: img.fieldname,
            originalName: changedNameFile,
            ContentType: img.mimetype,
          },
          url: `${req.protocol}://${req.get("host")}/images/${changedNameFile}`,
        },
        { new: true }
      );
      res.status(200).json(update);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  removeContact: async (req, res, next) => {
    try {
      const contact = await Contact.findById(req.params.id);
      const { originalName } = contact.image;

      fs.access(`public/images`, fs.constants.F_OK, (err) => {
        if (!err) {
          fs.unlink(`public/images/${originalName}`, (err) => {
            err && new Error("Gambar gagal terhapus!");
            console.log(`Gambar ${originalName} berhasil terhapus!`);
          });
        }
      });

      const drop = await Contact.deleteOne({ _id: req.params.id });
      res.status(200).json(drop);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default ContactController;
