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
    const user = await User.findById(customer);
    const service = await Service.findOne({ _id: serviceId, isDeleted: false });
    const slot = await Slot.findById(slotId);
    if (!user) {
      throw new Error("user not found");
    }
    if (!service) {
      throw new Error("Please try another service");
    }
    if (!slot || slot?.isBooked !== "available") {
      throw new Error("This slot is not available");
    }

    const booking = new Booking({
      customer: user?._id,
      serviceId,
      slotId,
      vehicleType,
      vehicleBrand,
      vehicleModel,
      manufacturingYear,
      registrationPlate,
    });

    const bookedData = await booking.save({ session });

    slot.isBooked = "booked";
    await slot.save({ session });

    const populateResult = await Booking.findById(bookedData._id)
      .populate({
        path: "customer",
        select: "_id name email phone address",
      })
      .populate({
        path: "serviceId",
        select: "_id name description price duration isDeleted",
      })
      .populate({
        path: "slotId",
        select: "_id service date startTime endTime isBooked",
      })
      .session(session);

    const result = {
      ...populateResult?.toObject(),
      service: populateResult?.serviceId,
      slot: populateResult?.slotId,
    };
    if (result) {
      delete result.serviceId;
      delete result.slotId;
    }

    await session.commitTransaction();
    session.endSession();

    return result;
  } catch (error: any) {
    await session.abortTransaction();
    session.endSession();
    throw new Error(`Booking transaction failed: ${error.message}`);
  }
};

const getAllBookingsDB = async() => {
  const data = await Booking.find().populate({
    path: 'customer',
    select: '_id name email phone address'
  }).populate({
    path: "serviceId",
    select: "_id name description price duration isDeleted",
  })
  .populate({
    path: "slotId",
    select: "_id service date startTime endTime isBooked",
  })

  return data
}

const getMyBookingDB = async (customer: string) => {
    const result = await Booking.findOne({customer}).populate({
      path: 'customer',
      select: '_id name email phone address'
    }).populate({
      path: "serviceId",
      select: "_id name description price duration isDeleted",
    })
    .populate({
      path: "slotId",
      select: "_id service date startTime endTime isBooked",
    })
    return result
}

export const bookingServices = {
  bookingDB,
  getAllBookingsDB,
  getMyBookingDB
};
