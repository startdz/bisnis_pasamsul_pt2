import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

const RefreshTokenController = {
  refresh: async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken) return res.sendStatus(401);
      const admin = await Admin.findOne({ refreshToken });
      if (!admin) return res.sendStatus(403);
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
          if (err) return res.sendStatus(403);
          const adminID = admin._id;
          const username = admin.username;
          const email = admin.email;
          const accessToken = jwt.sign(
            {
              adminID,
              username,
              email,
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
              expiresIn: "59s",
            }
          );
          res.json({ accessToken });
        }
      );
    } catch (error) {}
  },
};

export default RefreshTokenController;
