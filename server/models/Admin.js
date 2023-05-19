import mongoose from "mongoose";
const { Schema, model } = mongoose;

const adminSchema = Schema(
  {
    username: {
      type: String,
      min: 5,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      unique: true,
    },
  },
  { timestamp: true }
);

const Admin = model("Admin", adminSchema);

export default Admin;
