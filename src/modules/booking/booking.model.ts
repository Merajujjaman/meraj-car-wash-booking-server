import { model, Schema } from "mongoose";
import { TBooking } from "./booking.interface";


const bookingSchema = new Schema<TBooking>({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Customer reference is required'],
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: [true, 'Service reference is required'],
  },
  slot: {
    type: Schema.Types.ObjectId,
    ref: 'Slot',
    required: [true, 'Slot reference is required'],
  },
  vehicleType: {
    type: String,
    enum: ['car', 'truck', 'SUV', 'van', 'motorcycle', 'bus', 'electricVehicle', 'hybridVehicle', 'bicycle', 'tractor'],
    required: [true, 'Vehicle type is required'],
  },
  vehicleBrand: {
    type: String,
    required: [true, 'Vehicle brand is required'],
  },
  vehicleModel: {
    type: String,
    required: [true, 'Vehicle model is required'],
  },
  manufacturingYear: {
    type: Number,
    required: [true, 'Manufacturing year is required'],
  },
  registrationPlate: {
    type: String,
    required: [true, 'Registration plate is required'],
  },
},{
    timestamps: true
});

export const Booking = model<TBooking>('Booking', bookingSchema);
