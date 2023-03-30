
import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: "user" },
    gender: { type: String, enum: ['Male', 'Female'], default: 'Male' },
    address: String,
    jobTitle: String,
    hireDate: String,
    branch: String,
    confirmEmail: { type: Boolean, default: false },
    isLoggedIn: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    code: { type: String, default: "" },
    allFiles: [String],
    publicId: [String],
    FilesUrl: [String]
}, {
    timestamps: true
})

const userModel = mongoose.model('user', userSchema)
export default userModel