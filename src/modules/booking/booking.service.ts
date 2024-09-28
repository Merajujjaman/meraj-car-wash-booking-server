/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { Service } from "../service/service.model";
import { Slot } from "../slot/slot.model";
import { User } from "../user/user.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const bookingDB = async (payload: TBooking) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const {
      customer,
      serviceId,
      slotId,
      vehicleType,
      vehicleBrand,
      vehicleModel,
      manufacturingYear,
      registrationPlate,
    } = payload;
    const user = await User.findById(customer).session(session);
    const service = await Service.findOne({ _id: serviceId, isDeleted: false }).session(session);
    const slot = await Slot.findById(slotId).session(session);
    if (!user) {
      throw new Error("user not found");
    }
    if (!service) {
      throw new Error("Please try another service");
    }
    if (slot?.isBooked !== "available") {
      throw new Error("This slot is not available");
    }

    const booking = new Booking({
      customer: user?._id,
      service: serviceId,
      slot: slotId,
      vehicleType,
      vehicleBrand,
      vehicleModel,
      manufacturingYear,
      registrationPlate,
    });

    const bookedData = await booking.save({session});

    slot.isBooked = "booked";
    await slot.save({session});

    const result = await Booking.findById(bookedData._id)
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

      await session.commitTransaction()
      session.endSession()
      

    return result;
  } catch (error: any) {
    await session.abortTransaction();
    session.endSession()
    throw new Error(`Booking transaction failed: ${error.message}`)
  }
};

export const bookingServices = {
  bookingDB,
};
