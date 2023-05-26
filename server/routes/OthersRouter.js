import express from "express";
import Upload from "../middlewares/Images.js";
import Token from "../middlewares/VerifyToken.js";
import OthersController from "../controllers/OthersController.js";

const router = express.Router();

router.get(
 "/api/product/others/",
 Token.verifyToken,
 OthersController.result
);
router.get(
 "/api/product/others/:id",
 Token.verifyToken,
 OthersController.get
);
router.post(
 "/api/product/others",
 Upload.single("image"),
 Token.verifyToken,
 OthersController.save
);
router.put(
 "/api/product/others/:id",
 Upload.single("image"),
 Token.verifyToken,
 OthersController.update
);

export default router;
