import { NextFunction, Request, RequestHandler, Response } from "express";
import { authServices } from "./auth.service";

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authServices.signupDB(req.body);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "user sign up successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const login: RequestHandler = async (req, res, next) => {
  try {
    const {token, user} = await authServices.loginDB(req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "user logged in successfully",
      token,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const authControllers = {
  signup,
  login,
};
