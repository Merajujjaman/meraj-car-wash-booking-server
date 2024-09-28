import { Types } from "mongoose";

export type TBooking = {
  customer: Types.ObjectId; // Reference to the user who made the booking
  serviceId: Types.ObjectId; // Reference to the booked service
  slotId: Types.ObjectId; // Reference to the booking slot
  vehicleType:
    | "car"
    | "truck"
    | "SUV"
    | "van"
    | "motorcycle"
    | "bus"
    | "electricVehicle"
    | "hybridVehicle"
    | "bicycle"
    | "tractor";
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};
