import mongoose from "mongoose";
const { Schema, model } = mongoose

const contactSchema = Schema({
    sosmed: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        originalName: String,
        ContentType: String
    },
    url: {
        type: String,
        required: true
    }
})

const Contact = model('contact', contactSchema)
export default Contact