import mongoose from "mongoose";
const { Schema, model } = mongoose;

const yoghurtSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  taste: {
    type: String,
    required: true
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
    min: 1,
    max: 9999,
    required: true,
  },
});

const PaketYoghurtSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  harga: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const UlasanYoghurt = Schema({
  
})

const Yoghurt = model("yoghurt", yoghurtSchema);
export default Yoghurt;
