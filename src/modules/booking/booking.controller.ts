import { RequestHandler } from "express";
import { bookingServices } from "./booking.service";

const booking: RequestHandler = async (req, res, next) => {
  const data = req.body;
  try {
    const result = await bookingServices.bookingDB(data);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Services booked successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllbookings: RequestHandler = async (req, res, next) => {
  try {
    const result = await bookingServices.getAllBookingsDB()
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "All bookings retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getMyBooking: RequestHandler = async(req, res, next) => {
  const {customer} = req.body
  try {
    const result = await bookingServices.getMyBookingDB(customer)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User bookings retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error)
  }
}

export const bookingControllers = {
  booking,
  getAllbookings,
  getMyBooking
};
