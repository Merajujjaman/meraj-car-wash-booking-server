/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from "express";
import handleValidationError from "../errors/handleValidationError";
import handleZodError from "../errors/handleZodError";
import handleDuplicateError from "../errors/handleDuplicateError";

export type TErrorMessages = {
  path: string | number;
  message: string;
  stack?: string;
};

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something went wrong";
  let errorMessages: TErrorMessages[] = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  if (err.name === "ZodError") {
    const error = handleZodError(err);
    statusCode = error.statusCode;
    message = error.message;
    errorMessages = error.simplifiedError;
  } else if (err.name === "ValidationError") {
    const error = handleValidationError(err);
    statusCode = error.statusCode;
    message = error.message;
    errorMessages = error.simplifiedError;
  } else if (err?.code === 11000) {
    const error = handleDuplicateError(err);
    statusCode = error.statusCode;
    message = error.message;
    errorMessages = error.simplifiedError;
  } else if (err instanceof Error) {
    message = err?.message;
    errorMessages = [
      {
        path: "",
        message: err?.message,
        stack: err?.stack ? err.stack : "",
      },
    ];
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    // error: Object.values(err.errors),
    err,
  });
};
export default globalErrorHandler;
