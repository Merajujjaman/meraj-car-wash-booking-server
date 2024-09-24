"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const mongoose_1 = require("mongoose");
const serviceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Service name is required"],
    },
    description: {
        type: String,
        required: [true, "Service description is required"],
    },
    price: {
        type: Number,
        required: [true, "Service price is required"],
    },
    duration: {
        type: Number,
        required: [true, "Service duration is required"],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.Service = (0, mongoose_1.model)("Service", serviceSchema);
