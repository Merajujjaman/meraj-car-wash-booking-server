import { model, Schema } from "mongoose";
import { TService } from "./service.interface";

const serviceSchema = new Schema<TService>(
  {
    name: {
      type: String,
      required: [true, "Service name is required"],
    },
    description: {
      type: String,
      required: [true, "Service description is required"],
    },
    price: {
      type: Number,
      required: [true, "Service price is required"],
    },
    duration: {
      type: Number,
      required: [true, "Service duration is required"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Service = model<TService>("Service", serviceSchema);
