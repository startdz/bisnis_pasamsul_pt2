import Others from "../models/Others.js";

const OthersController = {
 get: async (req, res, next) => {},
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
  const { mimetype, size, filename, encoding } = img;

  if (!img) {
   res
    .status(422)
    .json({ message: "Tidak ada gambar yang terupload!" });
   return false;
  }

  if (size >= 2000000) {
   res
    .status(422)
    .json({ message: "Gambar tidak bisa melebihi 2mb!" });
   return false;
  }

  if (
   !mimetype === "image/png" ||
   !mimetype === "image/jpg" ||
   !mimetype === "image/jpeg"
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
     data: encoding,
     originalName: filename,
     ContentType: mimetype,
    },
    url: `${req.protocol}://${req.get("host")}/images/${
     img.filename
    }`,
    price: req.body.price,
    stock: req.body.stock,
   });
   await others.save();
   res.status(201).json(others);
  } catch (error) {
   res.status(500).json({ message: error.message });
  }
 },
 update: async (req, res, next) => {},
 drop: async (req, res, next) => {},
};

export default OthersController;
