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
 update: async (req, res, next) => {},
 drop: async (req, res, next) => {},
};

export default OthersController;
