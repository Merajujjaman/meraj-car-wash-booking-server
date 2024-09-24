import { model, Schema } from "mongoose";
import { TSlot } from "./slot.interface";

const slotSchema = new Schema<TSlot>({
  service: {
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: [true, 'Service reference is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  startTime: {
    type: String,
    required: [true, 'Start time is required'],
  },
  endTime: {
    type: String,
    required: [true, 'End time is required'],
  },
  isBooked: {
    type: String,
    enum: ['available', 'booked', 'canceled'],
    required: [true, 'Slot status is required'],
    default: 'available'
  },
},{
    timestamps: true
});

export const Slot = model<TSlot>('Slot', slotSchema);
