import multer from "multer";
import md5 from "md5";
import fs from "fs";
import path from "path";
import { error } from "console";

const Storage = multer.diskStorage({
   destination: (req, file, cb) => {
      const { fieldname, mimetype, originalname } = file;
      const size = req.headers["content-length"];

      if (size <= 2 * 1024 * 1024) {
         cb(null, "public/images");
      } else {
         cb(
            error("Ukuran gambar max 2mb!"),
            "public/assets/dump");
         fs.access(
            "public/assets/dump/",
            fs.constants.F_OK,
            (err) => {
               if (!err) {
                  if (
                     mimetype === "image/png" ||
                     mimetype === "image/jpg" ||
                     mimetype === "image/jpeg"
                  ) {
                     const [...et] = mimetype.split("/");
                     const [...ex] = originalname.split(".");

                     const mimetypeExt = et.pop();
                     const originalNameExt = ex.pop();

                     fs.readdir("public/assets/dump/", (err, files) => {
                        if (err) console.log(err);
                        for (const file of files) {
                           if (
                              path.extname(file) === `.${mimetypeExt}` ||
                              path.extname(file) === `.${originalNameExt}`
                           ) {
                              fs.unlink(
                                 path.join(`public/assets/dump/`, file),
                                 (err) => {
                                    if (err) console.log(err);
                                    console.log(`Masukan data yang benar`);
                                 }
                              );
                           }
                        }
                     });
                  }
               }
            }
         );
      }
   },
   filename: (req, file, cb) => {
      const asli = file.originalname;
      const [...data] = asli.split(".");
      const ubah = `${md5(data[0])}.${data.pop()}`;

      cb(null, ubah);
   },
});

const fileFilter = (req, file, cb) => {
   const { mimetype, originalname } = file;
   if (
      mimetype === "image/png" ||
      mimetype === "image/jpg" ||
      mimetype === "image/jpeg"
   ) {
      cb(null, true);
   } else {
      cb(error("Format gambar tidak di dukung!"), false);
   }
};

const Upload = multer({
   storage: Storage,
   fileFilter,
   limits: {
      /**
       * fieldSize bukan masalah terkait file yang teruplaod
       * namun itu merupakan total besar binary / encoding dari suatu data terkirim.
       */
      fieldSize: 20 * 1024 * 1024, //20mb
   },
});

export default Upload;
