import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../modules/user/user.model";
import config from "../config";

const getCustomerId: RequestHandler = async(req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        if (!token){
            throw new Error ("Please provide an Admin token")
        }
        const decodedToken = jwt.verify(token, config.jwt_access_secret as string)
        const {email} = decodedToken as JwtPayload;
        const user = await User.findOne({email})
        if(!user){
            throw new Error ("email not found")
        }
        req.body.customer = user._id.toString();
        
        next()
    } catch (error) {
        next(error)
    }
}

export default getCustomerId