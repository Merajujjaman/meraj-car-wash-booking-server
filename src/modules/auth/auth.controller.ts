import { NextFunction, Request, Response } from "express";
import { authServices } from "./auth.service";

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authServices.signupDB(req.body);

    res.status(200).json({
      success: true,
      message: "user sign up successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const authControllers = {
  signup,
};
