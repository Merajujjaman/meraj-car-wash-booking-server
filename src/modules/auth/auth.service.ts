import config from "../../config";
import { TUser } from "../user/user.interface"
import { User } from "../user/user.model"
import { TLogin } from "./auth.interface"
import { comparePassword } from "./auth.utils"
import jwt from "jsonwebtoken";

const signupDB = async(payload: TUser) => {
    const isUserExist = await User.findOne({email: payload.email})
    if(isUserExist) {
        throw new Error("Already have an acount using this email, please login")
    }
    const result = await User.create(payload)
    return result
}

const loginDB = async(payload: TLogin) => {
    const user = await User.findOne({email: payload.email})
    if(!user) {
        throw new Error ("User not found")
    }
    const isMatchPassword = await comparePassword(payload.password, user.password)
    if(!isMatchPassword){
        throw new Error ('Incorrect Password')
    }

    const jwtPayload = {
        email : user.email,
        role: user.role
    }
    const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string,{expiresIn:config.jwt_access_expiresIn})

    return{
        token: accessToken,
        user
    }
}  




export const authServices = {
    signupDB,
    loginDB
}