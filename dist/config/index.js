"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    mongodb_url: process.env.MONGODB_URI,
    port: process.env.PORT,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_access_expiresIn: process.env.JWT_ACCESS_EXPIRES_IN
};
