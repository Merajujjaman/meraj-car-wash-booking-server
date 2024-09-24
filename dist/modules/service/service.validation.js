"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceValidations = void 0;
const zod_1 = require("zod");
const createServiceValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: 'Service name is required',
        invalid_type_error: 'Service name must be a string',
    }),
    description: zod_1.z.string({
        required_error: 'Service description is required',
        invalid_type_error: 'Service description must be a string',
    }),
    price: zod_1.z.number({
        required_error: 'Service price is required',
        invalid_type_error: 'Service price must be a number',
    }),
    duration: zod_1.z.number({
        required_error: 'Service duration is required',
        invalid_type_error: 'Service duration must be a number',
    }),
    isDeleted: zod_1.z.boolean({
        invalid_type_error: 'isDeleted must be a boolean',
    }).optional(),
});
exports.serviceValidations = {
    createServiceValidationSchema
};
