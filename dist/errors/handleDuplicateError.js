"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError = (err) => {
    const match = err.message.match(/"([^"]*)"/);
    const simpleMessage = match && match[1];
    const simplifiedError = [
        {
            path: "",
            message: `${simpleMessage} is already exists`,
        },
    ];
    const statusCode = 500;
    return {
        statusCode,
        message: "Maybe you can not post duplicate",
        simplifiedError,
    };
};
exports.default = handleDuplicateError;
