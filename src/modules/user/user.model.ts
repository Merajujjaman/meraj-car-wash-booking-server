/* eslint-disable @typescript-eslint/no-unused-expressions */
import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcryptjs';

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
        enum: ["admin", "user"],
        required: [true, 'role is required']
    }
},{
    timestamps: true
})

userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password, 8,);
    next()
})

userSchema.post('save',  function (doc, next) {
    doc.password = '',
    next()
})

export const User = model<TUser>('User', userSchema)