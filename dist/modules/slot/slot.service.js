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
exports.slotServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const mongoose_1 = require("mongoose");
const service_model_1 = require("../service/service.model");
const slot_utils_1 = require("./slot.utils");
const slot_model_1 = require("./slot.model");
const createSlotDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { service, date, startTime, endTime } = payload;
    if (!(0, mongoose_1.isValidObjectId)(service)) {
        throw new Error("Invalid service ID");
    }
    const serviceData = yield service_model_1.Service.findById(service);
    if (!serviceData) {
        throw new Error('Service not found');
    }
    const serviceDuration = serviceData === null || serviceData === void 0 ? void 0 : serviceData.duration;
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);
    const slotStartTimeInMinutes = startHours * 60 + startMinutes;
    const slotEndTimeInMinutes = endHours * 60 + endMinutes;
    const totalDuration = slotEndTimeInMinutes - slotStartTimeInMinutes;
    const numberOfSlot = totalDuration / serviceDuration;
    if (totalDuration % totalDuration !== 0) {
        throw new Error("The time range must be divisible by service duration");
    }
    const slots = [];
    let currentStartTime = startTime;
    for (let i = 0; i < numberOfSlot; i++) {
        const currentEndTiem = (0, slot_utils_1.getEndTime)(currentStartTime, Number(serviceDuration));
        slots.push({
            service,
            date,
            startTime: currentStartTime,
            endTime: currentEndTiem,
        });
        currentStartTime = currentEndTiem;
    }
    const result = yield slot_model_1.Slot.insertMany(slots);
    return result;
});
const getAvailableSlotsDB = (date, serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { isBooked: 'available' };
    if (date) {
        query.date = date;
    }
    if (serviceId) {
        query.service = serviceId;
    }
    const result = yield slot_model_1.Slot.find(query).populate('service');
    return result;
});
exports.slotServices = {
    createSlotDB,
    getAvailableSlotsDB
};
