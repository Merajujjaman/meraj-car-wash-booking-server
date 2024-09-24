import { z } from "zod";

const createUserValidationSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Invalid email address format"),

  phone: z.string({
    required_error: "Phone number is required",
    invalid_type_error: "Phone number must be a string",
  }),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(6, "Password must be at least 6 characters long"),

  address: z.string({
    required_error: "Address is required",
    invalid_type_error: "Address must be a string",
  }),

  role: z.enum(["admin", "user"], {
    required_error: "Role is required",
    invalid_type_error: 'Role must be either "admin" or "user"',
  }),
});

export const userValidations = {
  createUserValidationSchema,
};
