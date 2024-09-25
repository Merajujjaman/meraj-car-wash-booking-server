import dotenv from 'dotenv';
dotenv.config()
export default {
    mongodb_url : process.env.MONGODB_URI,
    port: process.env.PORT,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_access_expiresIn: process.env.JWT_ACCESS_EXPIRES_IN

}