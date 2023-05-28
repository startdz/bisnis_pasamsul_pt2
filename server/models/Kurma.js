import mongoose from "mongoose";
const { Schema, model } = mongoose;

const kurmaSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  jenis: {
    type: String,
    required: true
  },
  image: {
    data: Buffer,
    originalName: String,
    ContentType: String,
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

const Kurma = model("kurma", kurmaSchema);
export default Kurma;
