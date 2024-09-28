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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const mongoose_1 = __importDefault(require("mongoose"));
const service_model_1 = require("../service/service.model");
const slot_model_1 = require("../slot/slot.model");
const user_model_1 = require("../user/user.model");
const booking_model_1 = require("./booking.model");
const bookingDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const { customer, serviceId, slotId, vehicleType, vehicleBrand, vehicleModel, manufacturingYear, registrationPlate, } = payload;
        const user = yield user_model_1.User.findById(customer).session(session);
        const service = yield service_model_1.Service.findOne({ _id: serviceId, isDeleted: false }).session(session);
        const slot = yield slot_model_1.Slot.findById(slotId).session(session);
        if (!user) {
            throw new Error("user not found");
        }
        if (!service) {
            throw new Error("Please try another service");
        }
        if ((slot === null || slot === void 0 ? void 0 : slot.isBooked) !== "available") {
            throw new Error("This slot is not available");
        }
        const booking = new booking_model_1.Booking({
            customer: user === null || user === void 0 ? void 0 : user._id,
            service: serviceId,
            slot: slotId,
            vehicleType,
            vehicleBrand,
            vehicleModel,
            manufacturingYear,
            registrationPlate,
        });
        const bookedData = yield booking.save({ session });
        slot.isBooked = "booked";
        yield slot.save({ session });
        const result = yield booking_model_1.Booking.findById(bookedData._id)
            .populate({
            path: "customer",
            select: "_id name email phone address",
        })
            .populate({
            path: "service",
            select: "_id name description price duration isDeleted",
        })
            .populate({
            path: "slot",
            select: "_id service date startTime endTime isBooked",
        }).session(session);
        yield session.commitTransaction();
        session.endSession();
        return result;
    }
    catch (error) {
        yield session.abortTransaction();
        session.endSession();
        throw new Error(`Booking transaction failed: ${error.message}`);
    }
});
exports.bookingServices = {
    bookingDB,
};
