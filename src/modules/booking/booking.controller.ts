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

export const bookingControllers = {
  booking,
};
