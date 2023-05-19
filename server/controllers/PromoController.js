import md5 from "md5";
import Promo from "../models/Promo.js";
import fs from "fs";

const PromoController = {
  getPromo: async (req, res, next) => {
    try {
      const promo = await Promo.findById(req.params.id);
      res.status(200).json(promo);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  getListPromo: async (req, res, next) => {
    try {
      const result = await Promo.find();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  createPromo: async (req, res, next) => {
    const img = req.file;

    if (!img) {
      res
        .status(422)
        .json({ message: "Tidak ada gambar promo yang di upload!" });
      return false;
    }
    if (img.size >= 2000000) {
      res.status(422).json({ message: "Gambar tidak bisa melebihi 2mb" });
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
      const create = new Promo({
        title: req.body.title,
        description: req.body.description,
        image: {
          data: img.encoding,
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

  updatePromo: async (req, res, next) => {
    const promo = await Promo.findById(req.params.id);
    const { originalName } = promo.image;

    const img = req.file;

    if (!img) {
      res.status(422).json({ message: "Tidak ada gambar yang di upload!" });
      return false;
    }
    if (img.size >= 2000000) {
      res.status(422).json({ message: "Gambar tidak dapat melebihi 2mb" });
      return false;
    }
    if (
      !img.mimetype === "image/png" ||
      !img.mimetype === "image/jpg" ||
      !img.mimetype === "image/jpeg"
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
            console.log(`Gambar promo berhasil di update`);
          });
        }
      });
    }

    try {
      const update = await Promo.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.title,
          description: req.body.description,
          image: {
            data: img.fieldname,
            originalName: changedNameFile,
            ContentType: img.mimetype,
          },
          url: `${req.protocol}://${req.get("host")}/images/${changedNameFile}`,
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

  removePromo: async (req, res, next) => {
    try {
      const promo = await Promo.findById(req.params.id);
      const { originalName } = promo.image;

      fs.access("public/images/", fs.constants.F_OK, (err) => {
        if (!err) {
          fs.unlink(`public/images/${originalName}`, (err) => {
            if (err) throw err;
            console.log(`Gambar promo berhasil dihapus!`);
          });
        }
      });

      const drop = await Promo.deleteOne({ _id: req.params.id });
      res.status(200).json(drop);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default PromoController;
