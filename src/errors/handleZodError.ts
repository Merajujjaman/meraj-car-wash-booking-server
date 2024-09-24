import { ZodError, ZodIssue } from "zod";

const handleZodError = (err: ZodError) => {
  const simplifiedError = err.issues.map((item: ZodIssue) => {
    return {
      path: item?.path[item.path.length - 1],
      message: item?.message
    };
  });

  const statusCode = 400;
  const message = 'Zod validation error'

  return {
    statusCode,
    message,
    simplifiedError
  }
};

export default handleZodError;
