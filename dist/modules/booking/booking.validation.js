"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingValidations = void 0;
const zod_1 = require("zod");
const createBookingValidationSchema = zod_1.z.object({
    customer: zod_1.z
        .string({
        required_error: "Customer reference is required",
        invalid_type_error: "Customer reference must be a valid ObjectId string",
    }),
    serviceId: zod_1.z.string({
        required_error: "Service reference is required",
        invalid_type_error: "Service reference must be a valid ObjectId string",
    }),
    slotId: zod_1.z.string({
        required_error: "Slot reference is required",
        invalid_type_error: "Slot reference must be a valid ObjectId string",
    }),
    vehicleType: zod_1.z.enum([
        "car",
        "truck",
        "SUV",
        "van",
        "motorcycle",
        "bus",
        "electricVehicle",
        "hybridVehicle",
        "bicycle",
        "tractor",
    ], {
        required_error: "Vehicle type is required",
        invalid_type_error: "Vehicle type must be one of the specified types",
    }),
    vehicleBrand: zod_1.z.string({
        required_error: "Vehicle brand is required",
        invalid_type_error: "Vehicle brand must be a string",
    }),
    vehicleModel: zod_1.z.string({
        required_error: "Vehicle model is required",
        invalid_type_error: "Vehicle model must be a string",
    }),
    manufacturingYear: zod_1.z
        .number({
        required_error: "Manufacturing year is required",
        invalid_type_error: "Manufacturing year must be a number",
    })
        .int("Manufacturing year must be an integer"),
    registrationPlate: zod_1.z.string({
        required_error: "Registration plate is required",
        invalid_type_error: "Registration plate must be a string",
    }),
});
exports.bookingValidations = {
    createBookingValidationSchema
};
