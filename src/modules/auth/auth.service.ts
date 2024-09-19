import { TUser } from "../user/user.interface"
import { User } from "../user/user.model"

const signupDB = async(paylod: TUser) => {
    const result = await User.create(paylod)
    return result
}

export const authServices = {
    signupDB
}