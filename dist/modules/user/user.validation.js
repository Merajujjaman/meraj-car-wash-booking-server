"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidations = void 0;
const zod_1 = require("zod");
const createUserValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }),
    email: zod_1.z
        .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    })
        .email("Invalid email address format"),
    phone: zod_1.z.string({
        required_error: "Phone number is required",
        invalid_type_error: "Phone number must be a string",
    }),
    password: zod_1.z
        .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    })
        .min(6, "Password must be at least 6 characters long"),
    address: zod_1.z.string({
        required_error: "Address is required",
        invalid_type_error: "Address must be a string",
    }),
    role: zod_1.z.enum(["admin", "user"], {
        required_error: "Role is required",
        invalid_type_error: 'Role must be either "admin" or "user"',
    }),
});
exports.userValidations = {
    createUserValidationSchema,
};
