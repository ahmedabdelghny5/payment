import multer from "multer";
import { nanoid } from 'nanoid'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'
import { AppError } from "./AppError.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const multerValidation = {
    image: ['image/png', 'image/jpeg'],
    pdf: ['application/pdf']
}



export function myMulter(customPath, customValidation) {
    if (!customPath) {
        customPath = 'general'
    }
    if (!customValidation) {
        customValidation = customValidation.image
    }
    const fullPath = path.join(__dirname, `../upload/${customPath}`)
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true })
    }
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `upload/${customPath}`)
        },
        filename: function (req, file, cb) {
            cb(null, nanoid() + '_' + file.originalname)
        }
    })
    function fileFilter(req, file, cb) {
        if (customValidation.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new AppError("invalid format",400), false)
        }
    }
    const upload = multer({ dest: "upload", fileFilter, storage })
    return upload
}

