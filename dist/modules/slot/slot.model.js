"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
const mongoose_1 = require("mongoose");
const slotSchema = new mongoose_1.Schema({
    service: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Service',
        required: [true, 'Service reference is required'],
    },
    date: {
        type: Date,
        required: [true, 'Date is required'],
    },
    startTime: {
        type: String,
        required: [true, 'Start time is required'],
    },
    endTime: {
        type: String,
        required: [true, 'End time is required'],
    },
    isBooked: {
        type: String,
        enum: ['available', 'booked', 'canceled'],
        required: [true, 'Slot status is required'],
        default: 'available'
    },
}, {
    timestamps: true
});
exports.Slot = (0, mongoose_1.model)('Slot', slotSchema);
