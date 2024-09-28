import { RequestHandler } from "express";
import { slotServices } from "./slot.service";

const createSlot: RequestHandler = async (req, res, next) => {
  try {
    const result = await slotServices.createSlotDB(req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Slots created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAvailableSlots: RequestHandler = async (req, res, next) => {
  try {
    const { date, serviceId } = req.query;
    const result = await slotServices.getAvailableSlotsDB(
      date as string,
      serviceId as string
    );
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Available slots retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const slotControllers = {
  createSlot,
  getAvailableSlots
};
