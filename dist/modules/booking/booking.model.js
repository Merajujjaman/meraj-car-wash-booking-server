"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    customer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Customer reference is required'],
    },
    service: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Service',
        required: [true, 'Service reference is required'],
    },
    slot: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Slot',
        required: [true, 'Slot reference is required'],
    },
    vehicleType: {
        type: String,
        enum: ['car', 'truck', 'SUV', 'van', 'motorcycle', 'bus', 'electricVehicle', 'hybridVehicle', 'bicycle', 'tractor'],
        required: [true, 'Vehicle type is required'],
    },
    vehicleBrand: {
        type: String,
        required: [true, 'Vehicle brand is required'],
    },
    vehicleModel: {
        type: String,
        required: [true, 'Vehicle model is required'],
    },
    manufacturingYear: {
        type: Number,
        required: [true, 'Manufacturing year is required'],
    },
    registrationPlate: {
        type: String,
        required: [true, 'Registration plate is required'],
    },
}, {
    timestamps: true
});
exports.Booking = (0, mongoose_1.model)('Booking', bookingSchema);
