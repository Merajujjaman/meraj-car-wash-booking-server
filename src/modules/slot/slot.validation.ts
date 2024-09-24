import { z } from 'zod';

const createSlotValidationSchema = z.object({
  service: z.string({
    required_error: 'Service reference is required',
    invalid_type_error: 'Service reference must be a string',
  }),

  date: z.string({
    required_error: 'Date is required',
    invalid_type_error: 'Date must be a valid date string',
  }),

  startTime: z.string({
    required_error: 'Start time is required',
    invalid_type_error: 'Start time must be a string',
  }),

  endTime: z.string({
    required_error: 'End time is required',
    invalid_type_error: 'End time must be a string',
  }),

  isBooked: z.enum(['available', 'booked', 'canceled'], {
    required_error: 'Slot status is required',
    invalid_type_error: 'Slot status must be one of "available", "booked", or "canceled"',
  }).optional(),
});

export const slotValidations = {
    createSlotValidationSchema
}
