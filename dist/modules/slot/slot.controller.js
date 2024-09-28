"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotControllers = void 0;
const slot_service_1 = require("./slot.service");
const createSlot = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield slot_service_1.slotServices.createSlotDB(req.body);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Slots created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAvailableSlots = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, serviceId } = req.query;
        const result = yield slot_service_1.slotServices.getAvailableSlotsDB(date, serviceId);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Available slots retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.slotControllers = {
    createSlot,
    getAvailableSlots
};
