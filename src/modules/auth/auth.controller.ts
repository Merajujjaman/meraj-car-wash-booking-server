/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { authServices } from "./auth.service";

const signup = async (req: Request, res: Response) => {
  try {
    const result = await authServices.signupDB(req.body);

    res.status(200).json({
      success: true,
      message: "user sign up successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

export const authControllers = {
  signup,
};
