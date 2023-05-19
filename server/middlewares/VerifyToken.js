import jwt from "jsonwebtoken";

const Token = {
  verifyToken: (req, res, next) => {
    const authHeader = req.headers["authorization"];
    /**
     * jika admin tidak mengirim token,
     * maka token = null
     * jika ada token maka ambil dan split lalu ambil tokenya pada index ke 1 [1]
     */
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(403);
      req.email = decoded.email;
      next();
    });
  },
};

export default Token;
