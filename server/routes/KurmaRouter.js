import express from "express";
import KurmaController from "../controllers/KurmaController.js";
import Upload from "../middlewares/Images.js";
import Token from "../middlewares/VerifyToken.js";

const router = express.Router();

router.get("/api/product/kurma", Token.verifyToken, KurmaController.listsKurma);
router.get(
  "/api/product/kurma/:id",
  Token.verifyToken,
  KurmaController.getKurma
);
router.post(
  "/api/product/kurma",
  Upload.single("image"),
  Token.verifyToken,
  KurmaController.createKurma
);
router.put(
  "/api/product/kurma/:id",
  Upload.single("image"),
  Token.verifyToken,
  KurmaController.updateKurma
);
router.delete(
  "/api/product/kurma/:id",
  Token.verifyToken,
  KurmaController.removeKurma
);

export default router;
