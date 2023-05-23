import mongoose from "mongoose";
const { Schema, model } = mongoose;

const OthersSchema = Schema({
 title: {
  type: String,
  required: true,
 },
 description: {
  type: String,
  required: true,
 },
 image: {
  data: Buffer,
  originalName: String,
  ContentType: String,
  createdAt: { type: Date, default: Date.now() },
 },
 url: {
  type: String,
  required: true,
 },
 price: {
  type: String,
  required: true,
 },
 stock: {
  type: Number,
  required: true,
 },
});

const Others = model("produk_lain", OthersSchema);
export default Others;
