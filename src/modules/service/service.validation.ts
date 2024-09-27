import { z } from 'zod';

const createServiceValidationSchema = z.object({
  name: z.string({
    required_error: 'Service name is required',
    invalid_type_error: 'Service name must be a string',
  }),

  description: z.string({
    required_error: 'Service description is required',
    invalid_type_error: 'Service description must be a string',
  }),

  price: z.number({
    required_error: 'Service price is required',
    invalid_type_error: 'Service price must be a number',
  }),

  duration: z.number({
    required_error: 'Service duration is required',
    invalid_type_error: 'Service duration must be a number',
  }),

  isDeleted: z.boolean({
    invalid_type_error: 'isDeleted must be a boolean',
  }).optional(),
});

const updateServiceValidationSchema = z.object({
  name: z.string({
    required_error: 'Service name is required',
    invalid_type_error: 'Service name must be a string',
  }).optional(),

  description: z.string({
    required_error: 'Service description is required',
    invalid_type_error: 'Service description must be a string',
  }).optional(),

  price: z.number({
    required_error: 'Service price is required',
    invalid_type_error: 'Service price must be a number',
  }).optional(),

  duration: z.number({
    required_error: 'Service duration is required',
    invalid_type_error: 'Service duration must be a number',
  }).optional(),
});

export const serviceValidations = {
     createServiceValidationSchema,
     updateServiceValidationSchema
}
