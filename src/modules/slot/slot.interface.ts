import { Types } from "mongoose";

export type TSlot = {
  service: Types.ObjectId; // Reference to the specific service being booked
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: "available" | "booked" | "canceled";
};
