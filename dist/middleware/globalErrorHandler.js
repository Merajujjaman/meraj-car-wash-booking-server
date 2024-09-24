"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handleValidationError_1 = __importDefault(require("../errors/handleValidationError"));
const handleZodError_1 = __importDefault(require("../errors/handleZodError"));
const handleDuplicateError_1 = __importDefault(require("../errors/handleDuplicateError"));
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = "Something went wrong";
    let errorMessages = [
        {
            path: "",
            message: "Something went wrong",
        },
    ];
    if (err.name === "ZodError") {
        const error = (0, handleZodError_1.default)(err);
        statusCode = error.statusCode;
        message = error.message;
        errorMessages = error.simplifiedError;
    }
    else if (err.name === "ValidationError") {
        const error = (0, handleValidationError_1.default)(err);
        statusCode = error.statusCode;
        message = error.message;
        errorMessages = error.simplifiedError;
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
        const error = (0, handleDuplicateError_1.default)(err);
        statusCode = error.statusCode;
        message = error.message;
        errorMessages = error.simplifiedError;
    }
    else if (err instanceof Error) {
        message = err === null || err === void 0 ? void 0 : err.message;
        errorMessages = [
            {
                path: "",
                message: err === null || err === void 0 ? void 0 : err.message,
                stack: (err === null || err === void 0 ? void 0 : err.stack) ? err.stack : "",
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
exports.default = globalErrorHandler;
