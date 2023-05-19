import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Administrator = {
  register: async (req, res, next) => {
    const { username, email, password, secondPassword } = req.body;

    if (password !== secondPassword) {
      res.status(400).json({ message: "Password salah atau tidak cocok!" });
      console.log(password, secondPassword)
      return false;
    }

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    try {
      const signup = new Admin({
        username,
        email,
        password: hash,
      });
      await signup.save();
      res.status(201).json(signup);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  login: async (req, res, next) => {
    try {
      const admin = await Admin.findOne({
        email: req.body.email,
      });
      if (!admin) {
        res.status(404).json({ message: "Email tidak ditemukan!" });
        return false;
      }

      const match = await bcrypt.compare(req.body.password, admin.password);
      if (!match) {
        res
          .status(400)
          .json({ message: "Password salah atau akun tidak ditemukan!" });
        return false;
      }

      const adminID = admin._id;
      const username = admin.username;
      const email = admin.email;

      const accessToken = jwt.sign(
        { adminID, username, email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "10s" }
      );

      const refreshToken = jwt.sign(
        { adminID, username, email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      await Admin.findOneAndUpdate(
        { email: req.body.email },
        { $set: { refreshToken } },
        { new: true }
      )
        .then((update) => {
          console.log(update);
        })
        .catch((err) => {
          console.log(err);
        });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        // secure: true (jika https)
      });
      res.json({ accessToken });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  get: async (req, res, next) => {
    try {
      const admin = await Admin.findById(req.params.id).select(
        "-password -refreshToken"
      );
      res.status(200).json(admin);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  list: async (req, res, next) => {
    try {
      const admin = await Admin.find().select("-password -refreshToken");
      res.status(200).json(admin);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res, next) => {},
  drop: async (req, res, next) => {},
  logout: async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const admin = await Admin.findOne({ refreshToken });
    if (!admin) return res.sendStatus(204);
    const adminID = admin._id;
    await Admin.findOneAndUpdate(
      { _id: adminID },
      { $set: { refreshToken: null } },
      { new: true }
    )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    res.clearCookie("refreshToken");
    return res.sendStatus(200);
  },
};

export default Administrator;
