"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        required: [true, 'phone number is required'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    address: {
        type: String,
        required: [true, 'address is required']
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        required: [true, 'role is required']
    }
}, {
    timestamps: true
});
exports.User = (0, mongoose_1.model)('User', userSchema);
