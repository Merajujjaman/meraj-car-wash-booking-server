import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { User } from "../modules/user/user.model";

const authAllowedFor =(...allowedFor: string[])=>{
    return  async(req:Request, res:Response, next: NextFunction) =>{
       try {
        const token = req.headers.authorization?.split(" ")[1]
        if (!token){
            throw new Error ("Please provide an Admin token")
        }
        const decodedToken = jwt.verify(token, config.jwt_access_secret as string)
        const {email, role} = decodedToken as JwtPayload;
        const user = await User.findOne({email})
        if(!user){
            throw new Error ("email not found")
        }
        if(role !== user?.role){
            throw new Error ("You are not authorized to access this route")
        }
    
        if(!allowedFor.includes(role)){
            throw new Error ("You are not authorized to access this route")
        }
        next()

       } catch (error) {
        next(error)
       }
            
    } 
}

export default authAllowedFor