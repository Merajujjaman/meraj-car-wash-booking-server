import { z } from "zod";

const createBookingValidationSchema = z.object({
  customer: z
  .string({
    required_error: "Customer reference is required",
    invalid_type_error: "Customer reference must be a valid ObjectId string",
  }),
  serviceId: z.string({
    required_error: "Service reference is required",
    invalid_type_error: "Service reference must be a valid ObjectId string",
  }),

  slotId: z.string({
    required_error: "Slot reference is required",
    invalid_type_error: "Slot reference must be a valid ObjectId string",
  }),

  vehicleType: z.enum(
    [
      "car",
      "truck",
      "SUV",
      "van",
      "motorcycle",
      "bus",
      "electricVehicle",
      "hybridVehicle",
      "bicycle",
      "tractor",
    ],
    {
      required_error: "Vehicle type is required",
      invalid_type_error: "Vehicle type must be one of the specified types",
    }
  ),

  vehicleBrand: z.string({
    required_error: "Vehicle brand is required",
    invalid_type_error: "Vehicle brand must be a string",
  }),

  vehicleModel: z.string({
    required_error: "Vehicle model is required",
    invalid_type_error: "Vehicle model must be a string",
  }),

  manufacturingYear: z
    .number({
      required_error: "Manufacturing year is required",
      invalid_type_error: "Manufacturing year must be a number",
    })
    .int("Manufacturing year must be an integer"),

  registrationPlate: z.string({
    required_error: "Registration plate is required",
    invalid_type_error: "Registration plate must be a string",
  }),
});

export const bookingValidations ={
    createBookingValidationSchema
}
