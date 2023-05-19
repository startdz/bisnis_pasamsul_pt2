import Yoghurt from "../models/Yoghurt.js"

export const SaveDataImageYoghurt = async file => {
    const img = new Yoghurt({
        image: {
            data: file.filename,
            imgName: file.originalname,
            ContentType: file.mimetype,
            size: file.size,
            path: file.path
        }
    })
    await img.save()
}