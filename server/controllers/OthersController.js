import Others from "../models/Others.js";
import md5 from "md5";
import fs from "fs";

const OthersController = {
 get: async (req, res, next) => {
  try {
   const other = await Others.findById(req.params.id);
   res.status(200).json(other);
  } catch (error) {
   res.status(500).json({ message: error.message });
  }
 },
 result: async (req, res, next) => {
  try {
   const other = await Others.find();
   res.status(200).json(other);
  } catch (error) {
   res.status(500).json({ message: error.message });
  }
 },
 save: async (req, res, next) => {
  const img = req.file;
  // const { mimetype, size, filename, encoding } = img;

  if (!img) {
   res
    .status(422)
    .json({ message: "Tidak ada gambar yang terupload!" });
   return false;
  }

  if (img.size >= 2 * 1024 * 1024) {
   res
    .status(422)
    .json({ message: "Gambar tidak bisa melebihi 2mb!" });
   return false;
  }

  if (
   !img.mimetype === "image/png" ||
   !img.mimetype === "image/jpg" ||
   !img.mimetype === "image/jpeg"
  ) {
   res
    .status(422)
    .json({ message: "Format gambar tidak didukung!" });
   return false;
  }

  try {
   const others = new Others({
    title: req.body.title,
    description: req.body.description,
    image: {
     data: img.encoding,
     originalName: img.filename,
     ContentType: img.mimetype,
    },
    url: `${req.protocol}://${req.get("host")}/images/${
     img.filename
    }`,
    price: req.body.price,
    stock: req.body.stock,
   });
   await others.save();
   res.status(201).json(others);
   console.log(others);
  } catch (error) {
   res.status(500).json({ message: error.message });
   console.log(error);
  }
 },
 update: async (req, res, next) => {
  const img = req.file;
  const by_id = await Others.findById(req.params.id);
  const { originalName } = by_id.image;

  if (!img) {
   res
    .status(422)
    .json({ message: "Tidak ada gambar yang di upload!" });
   return false;
  }
  if (img.size >= 2 * 1024 * 1024) {
   res.status(422).json({ message: "Gambar max 2mb!" });
   return false;
  }
  if (
   !img.mimetype === "image/png" ||
   !img.mimetype === "image/jpg" ||
   !img.mimetype === "image/jpeg"
  ) {
   res
    .status(422)
    .json({ message: "Format gambar tidak didukung!" });
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
      console.log(`Gambar promo berhasil di update`);
     });
    }
   });
  }

  try {
   const update = await Others.findByIdAndUpdate(
    req.params.id,
    {
     title: req.body.title,
     description: req.body.description,
     image: {
      data: img.fieldname,
      originalName: changedNameFile,
      ContentType: img.mimetype,
     },
     url: `${req.protocol}://${req.get(
      "host"
     )}/images/${changedNameFile}`,
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

 drop: async (req, res, next) => {
  try {
   const other = await Others.findById(req.params.id);
   const { originalName } = other.image;

   fs.access("public/images/", fs.constants.F_OK, (err) => {
    if (!err) {
     fs.unlink(`public/images/${originalName}`, (err) => {
      if (err) throw err;
      console.log(`Gambar other produk berhasil dihapus!`);
     });
    }
   });

   const drop = await Others.deleteOne({
    _id: req.params.id,
   });
   res.status(200).json(drop);
  } catch (error) {
   res.status(500).json({ message: error.message });
  }
 },
};

export default OthersController;
