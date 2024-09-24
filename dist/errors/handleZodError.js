"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (err) => {
    const simplifiedError = err.issues.map((item) => {
        return {
            path: item === null || item === void 0 ? void 0 : item.path[item.path.length - 1],
            message: item === null || item === void 0 ? void 0 : item.message
        };
    });
    const statusCode = 400;
    const message = 'Zod validation error';
    return {
        statusCode,
        message,
        simplifiedError
    };
};
exports.default = handleZodError;
