import mongoose from "mongoose";
const { Schema, model } = mongoose;

const OthersSchema = Schema({
 title: {
  type: String,
  required: true,
  min: 5,
  max: 24,
 },
 description: {
  type: String,
  required: true,
  min: 5,
  max: 48,
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
  min: 3,
  max: 24,
 },
 stock: {
  type: Number,
  required: true,
  min: 1,
  max: 9999,
 },
});

const Others = model("produk_lain", OthersSchema);
export default Others;
