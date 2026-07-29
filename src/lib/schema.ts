import { z } from "zod";

export const registrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  age: z
    .coerce
    .number()
    .min(10, "Minimum age is 10")
    .max(35, "Maximum age is 35"),
  district: z.string().min(2, "Please select/enter your district"),
  area: z.string().min(2, "Please select/enter your area"),
  place: z.string().min(2, "Place/City is required"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Phone number must be a valid 10-digit Indian mobile number"),
  parentPhone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Parent's phone number must be a valid 10-digit Indian mobile number"),
  institution: z.string().min(2, "Institution/College name is required"),
  schoolClass: z.string().min(1, "School Class / Course details are required"),
  email: z.string().email("Invalid email address"),
  expectations: z.string().optional(),
  agreeTerms: z.literal(true, {
    message: "You must agree to the terms and guidelines",
  }),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
