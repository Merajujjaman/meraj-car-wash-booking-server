import mongoose from "mongoose";

const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const simplifiedError = Object.values(err.errors).map((item) => {
    return {
      path: item.path,
      message: item.message,
    };
  });

  const statusCode = 400;
  const message = 'validation Error'
  return {
    statusCode,
    message,
    simplifiedError
  };
};

export default handleValidationError