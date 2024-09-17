import dotenv from 'dotenv';
dotenv.config()
export default {
    mongodb_url : process.env.MONGODB_URI,
    port: process.env.PORT
}