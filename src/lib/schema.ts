import { z } from "zod";

export const registrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  age: z
    .coerce
    .number()
    .min(10, "Minimum age is 10")
    .max(35, "Maximum age is 35"),
  place: z.string().min(1, "Please select your place/area"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Phone number must be a valid 10-digit Indian mobile number"),
  institution: z.string().min(2, "Institution/College name is required"),
  schoolClass: z.string().min(1, "School Class / Course details are required"),
  expectations: z.string().optional(),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
