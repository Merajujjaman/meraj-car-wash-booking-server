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
exports.bookingControllers = void 0;
const booking_service_1 = require("./booking.service");
const booking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const result = yield booking_service_1.bookingServices.bookingDB(data);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Services booked successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllbookings = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield booking_service_1.bookingServices.getAllBookingsDB();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "All bookings retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getMyBooking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { customer } = req.body;
    try {
        const result = yield booking_service_1.bookingServices.getMyBookingDB(customer);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "User bookings retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.bookingControllers = {
    booking,
    getAllbookings,
    getMyBooking
};
