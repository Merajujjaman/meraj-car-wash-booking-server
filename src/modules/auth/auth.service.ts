import { TUser } from "../user/user.interface"
import { User } from "../user/user.model"

const signupDB = async(payload: TUser) => {
    const isUserExist = await User.findOne({email: payload.email})
    if(isUserExist) {
        throw new Error("Already have an acount using this email, please login")
    }
    const result = await User.create(payload)
    return result
}

export const authServices = {
    signupDB
}