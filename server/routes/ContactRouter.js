import express from "express";
import ContactController from "../controllers/ContactController.js";
import Update from "../middlewares/Images.js";
import Token from "../middlewares/VerifyToken.js";

const router = express.Router();

router.get(
  "/api/owner/contact",
  Token.verifyToken,
  ContactController.getContacts
);
router.get(
  "/api/owner/contact/:id",
  Token.verifyToken,
  ContactController.getContact
);
router.post(
  "/api/owner/contact",
  Update.single("image"),
  Token.verifyToken,
  ContactController.createContact
);
router.put(
  "/api/owner/contact/:id",
  Update.single("image"),
  Token.verifyToken,
  ContactController.updateContact
);
router.delete(
  "/api/owner/contact/:id",
  Token.verifyToken,
  ContactController.removeContact
);

export default router;
