import multer from "multer";
import path from 'path'
import { AppError } from "./AppError.js";

export const multerValidation = {
    image: ['image/jpeg', 'image/png', "image/gif"],
    pdf: ["application/pdf"]
}


export function myMulterCloud() {
    // if (!customValidation){
    //     customValidation=multerValidation.pdf
    // }
    const storage = multer.diskStorage({})
    function fileFilter(req, file, cb) {
        // if (customValidation.includes(file.mimetype)) {
        //     cb(null, true)
        // } else {
        //     cb('invalid format', false)
        // }
        const ext = path.extname(file.originalname).toLowerCase()
        console.log(ext);
        if (ext !== '.zip' || ext !== '.xcel' || ext !== '.xlsx' || ext !== '.pdf') {
            return cb(new AppError('Error only photos can be uploaded', 400), false);
        }else{

            cb(null, true)
        }
    }
    const upload = multer({ fileFilter, storage })
    return upload
}