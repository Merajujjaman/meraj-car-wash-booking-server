import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
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
        enum: ["admin", "users"],
        required: [true, 'role is required']
    }
},{
    timestamps: true
})

export const User = model<TUser>('User', userSchema)