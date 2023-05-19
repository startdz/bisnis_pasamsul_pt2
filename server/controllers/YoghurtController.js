import Yoghurt from "../models/Yoghurt.js";
import fs from "fs";
import md5 from "md5";

const YoghurtController = {
  createYoghurt: async (req, res, next) => {
    const img = req.file;

    if (!img) {
      res.status(422).json({ message: "Tidak ada gambar yang ter-upload!" });
      return false;
    } else if (img.size >= 2000000) {
      res.status(422).json({ message: "Ukuran gambar max 2mb" });
      return false;
    } else if (
      !img.mimetype === "image/png" ||
      !img.mimetype === "image/jpg" ||
      !img.mimetype === "image/jpeg"
    ) {
      res
        .status(422)
        .json({
          message: "Format gambar tidak didukung!, Isi data yang benar",
        });
      return false;
    }

    try {
      const create = new Yoghurt({
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

  getYoghurts: async (req, res, next) => {
    try {
      const results = await Yoghurt.find();
      res.status(200).json(results);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  getYoghurt: async (req, res, next) => {
    try {
      const result = await Yoghurt.findById(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  updateYoghurt: async (req, res, next) => {
    const yoID = await Yoghurt.findById(req.params.id);
    const { originalName } = yoID.image;

    const img = req.file;

    if (!img) {
      res.status(422).json({ message: "Tidak ada gambar yang di upload!" });
      return false;
    }
    if (img.size >= 2000000) {
      res
        .status(422)
        .json({ message: "Gambar tidak bisa melebihi ukuran 2mb" });
      return false;
    }
    if (
      !img.mimetype === "image/jpg" ||
      !img.mimetype === "image/png" ||
      !img.mimetype === "image/jpeg"
    ) {
      res.status(422).json({ message: "Format gambar tidak didukung!" });
      return false;
    }

    const { originalname } = img;
    const [...ex] = originalname.split(".");
    const changedNameFile = `${md5(ex[0])}.${ex.pop()}`;

    if (img) {
      fs.access("public/images/", fs.constants.F_OK, (err) => {
        if (!err) {
          fs.unlink(`public/images/${originalName}`, (err) => {
            if (err) throw err;
            console.log(`Gambar lama berhasil di update`);
          });
        }
      });
    }

    try {
      const update = await Yoghurt.findByIdAndUpdate(
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

  removeYoghurt: async (req, res, next) => {
    try {
      const yoghurt = await Yoghurt.findById(req.params.id);
      const { originalName } = yoghurt.image;

      fs.access("public/images/", fs.constants.F_OK, (err) => {
        if (!err) {
          fs.unlink(`public/images/${originalName}`, (err) => {
            if (err) throw err;
            console.log(`Gambar berhasil dihapus!`);
          });
        }
      });
      const drop = await Yoghurt.deleteOne({ _id: req.params.id });
      res.status(200).json(drop);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  /**
   * Method for Debugging, Below :
   * Posting
   * Update
   * Get
   * @getDebugYoghurt
   * @postDebugYoghurt
   */

  getDebugYoghurt: async (req, res, next) => {
    try {
      // const _dataID = await Yoghurt.findById(req.params.id)
      const FindOne = await Yoghurt.findOne({ _id: req.params.id });
      res.status(200).json(FindOne);
      // console.log(first)
      // const { image: { data, originalName, ContentType } } = _dataID
      // console.log(originalName)

      // fs.readdir('public/images/', (err, file) => {
      //     err ? console.log(`file ga ada bro`) : console.log(file)
      //     const [...results] = file
      //     const fileInLocal = results.includes(originalName)
      //     console.log(fileInLocal)
      // })
      // // hasil dari fs.readdir
      // /*[
      //     '30f9a59a4d7782fd2b9fece50e377a9c.jpg',
      //     'c7afebb736c2ca4b46d92d639ec687a9.jpg'
      // ]
      // */

      res.json(_dataID);
    } catch (error) {}
  },

  postDebugYoghurt: async (req, res, next) => {
    try {
      const _postDebugImage = req.file;
      console.log(_postDebugImage.originalname);
    } catch (error) {}
  },
};

export default YoghurtController;
