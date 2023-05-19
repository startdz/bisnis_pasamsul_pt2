import express from "express";
import PromoController from "../controllers/PromoController.js";
import Upload from "../middlewares/Images.js";
import Token from "../middlewares/VerifyToken.js";

const router = express.Router();

router.get(
  "/api/promo/product/",
  Token.verifyToken,
  PromoController.getListPromo
);
router.post(
  "/api/promo/product/",
  Upload.single("image"),
  Token.verifyToken,
  PromoController.createPromo
);
router.put(
  "/api/promo/product/:id",
  Upload.single("image"),
  Token.verifyToken,
  PromoController.updatePromo
);
router.delete(
  "/api/promo/product/:id",
  Token.verifyToken,
  PromoController.removePromo
);
router.get(
  "/api/promo/product/:id",
  Token.verifyToken,
  PromoController.getPromo
);

export default router;
