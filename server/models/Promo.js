import mongoose from "mongoose";
const { Schema, model } = mongoose;

const promoSchema = Schema({
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
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const Promo = model("promo", promoSchema);
export default Promo;
