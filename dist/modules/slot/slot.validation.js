"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotValidations = void 0;
const zod_1 = require("zod");
const createSlotValidationSchema = zod_1.z.object({
    service: zod_1.z.string({
        required_error: 'Service reference is required',
        invalid_type_error: 'Service reference must be a string',
    }),
    date: zod_1.z.string({
        required_error: 'Date is required',
        invalid_type_error: 'Date must be a valid date string',
    }),
    startTime: zod_1.z.string({
        required_error: 'Start time is required',
        invalid_type_error: 'Start time must be a string',
    }),
    endTime: zod_1.z.string({
        required_error: 'End time is required',
        invalid_type_error: 'End time must be a string',
    }),
    isBooked: zod_1.z.enum(['available', 'booked', 'canceled'], {
        required_error: 'Slot status is required',
        invalid_type_error: 'Slot status must be one of "available", "booked", or "canceled"',
    }).optional(),
});
exports.slotValidations = {
    createSlotValidationSchema
};
