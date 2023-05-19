import express from "express";
import Administrator from "../controllers/Administrator.js";
import Token from "../middlewares/VerifyToken.js";
import RefreshTokenController from "../controllers/RefreshTokenController.js";

const routes = express.Router();

/**
 * @method Register -----------
 * @method login --------------
 * @method Logout -------------
 */
routes.post("/api/business/auth/register", Administrator.register);
routes.post("/api/business/auth/login", Administrator.login);
routes.delete("/api/business/auth/logout", Administrator.logout);
/**
 * Get Admin Account can't implements in system.
 */
routes.get("/api/business/account/", Token.verifyToken, Administrator.list);
routes.get("/api/business/account/:id", Token.verifyToken, Administrator.get);
/**
 * @method RefreshTokenController # To get new token or can sign in
 */
routes.get("/api/auth/security/", RefreshTokenController.refresh);

export default routes;
