import express from "express";
import YoghurtController from "../controllers/YoghurtController.js";
import Upload from "../middlewares/Images.js";
import Token from "../middlewares/VerifyToken.js";

const router = express.Router();

//results
router.get(
  "/api/product/yoghurt/",
  Token.verifyToken,
  YoghurtController.getYoghurts
);
//create
router.post(
  "/api/product/yoghurt/",
  Upload.single("image"),
  Token.verifyToken,
  YoghurtController.createYoghurt
);
//update
router.put(
  "/api/product/yoghurt/:id",
  Upload.single("image"),
  Token.verifyToken,
  YoghurtController.updateYoghurt
);
// //get
router.get(
  "/api/product/yoghurt/:id",
  Token.verifyToken,
  YoghurtController.getYoghurt
);
//delete
router.delete(
  "/api/product/yoghurt/:id",
  Token.verifyToken,
  YoghurtController.removeYoghurt
);
export default router;
