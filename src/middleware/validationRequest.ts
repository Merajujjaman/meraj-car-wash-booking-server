/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validationRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next()
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.name,
        error
      });
    }
  };
};

export default validationRequest;
