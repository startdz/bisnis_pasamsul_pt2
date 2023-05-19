import Kurma from "../models/Kurma.js";
import fs from "fs";
import md5 from "md5";

const KurmaController = {
  getKurma: async (req, res, next) => {
    try {
      const kurma = await Kurma.findById(req.params.id);
      res.status(200).json(kurma);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  listsKurma: async (req, res, next) => {
    try {
      const kurma = await Kurma.find();
      res.status(200).json(kurma);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createKurma: async (req, res, next) => {
    const img = req.file;
    if (!img) {
      res.status(422).json({ message: "Tidak ada gambar yang di upload!" });
      return false;
    }
    if (img.size >= 2000000) {
      res.status(422).json({ message: "Gambar max 2mb!" });
      return false;
    }
    if (
      !img.mimetype === "image/png" ||
      !img.mimetype === "image/jpg" ||
      !img.mimetype === "image/jpeg"
    ) {
      res.status(422).json({ message: "Format gambar tidak didukung!" });
      return false;
    }
    try {
      const create = new Kurma({
        title: req.body.title,
        description: req.body.description,
        image: {
          data: img.fieldname,
          originalName: img.filename,
          ContentType: img.mimetype,
        },
        url: `${req.protocol}://${req.get("host")}/images/${img.filename}`,
        price: req.body.price,
        stock: req.body.stock,
      });
      await create.save();
      res.status(201).json(create);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateKurma: async (req, res, next) => {
    const img = req.file;
    const kurma = await Kurma.findById(req.params.id);
    const { originalName } = kurma.image;

    if (!img) {
      res.status(422).json({ message: "Tidak ada gambar yang di upload!" });
      return false;
    }
    if (img.size >= 2000000) {
      res.status(422).json({ message: "Gambar max 2mb!" });
      return false;
    }
    if (
      !img.mimetype === "image/png" ||
      !img.mimetype === "image/jpg" ||
      !img.mimetype === "image/jpeg"
    ) {
      res.status(422).json({ message: "Format gambar tidak didukung!" });
      return false;
    }

    fs.access("public/images/", fs.constants.F_OK, (err) => {
      if (!err) {
        fs.unlink(`public/images/${originalName}`, (err) => {
          err && new Error("Gambar Kurma gagal di update!");
          console.log(`Gambar berhasil di update!`);
        });
      }
    });

    const { originalname } = img;
    const [...ex] = originalname.split(".");
    const updatedImage = `${md5(ex[0])}.${ex.pop()}`;

    try {
      const update = await Kurma.findByIdAndUpdate(
        kurma,
        {
          title: req.body.title,
          description: req.body.description,
          image: {
            data: img.fieldname,
            originalName: updatedImage,
            ContentType: img.mimetype,
          },
          url: `${req.protocol}://${req.get("host")}/images/${updatedImage}`,
          price: req.body.price,
          stock: req.body.stock,
        },
        { new: true }
      );
      res.status(200).json(update);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  removeKurma: async (req, res, next) => {
    try {
      const kurma = await Kurma.findById(req.params.id);
      const { originalName } = kurma.image;
      fs.access("public/images/", fs.constants.F_OK, (err) => {
        if (!err) {
          fs.unlink(`public/images/${originalName}`, (err) => {
            err && new Error("Gambar gagal terhapus!");
            console.log(`Gambar ${originalName} berhasil terhapus`);
          });
        }
      });
      const drop = await Kurma.deleteOne({ _id: req.params.id });
      res.status(200).json(drop);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default KurmaController;
