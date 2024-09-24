"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleValidationError = (err) => {
    const simplifiedError = Object.values(err.errors).map((item) => {
        return {
            path: item.path,
            message: item.message,
        };
    });
    const statusCode = 400;
    const message = 'validation Error';
    return {
        statusCode,
        message,
        simplifiedError
    };
};
exports.default = handleValidationError;
