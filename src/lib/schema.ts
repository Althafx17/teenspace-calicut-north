import { z } from "zod";

export const registrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  place: z.string().min(1, "Please select your place/area"),
  otherPlace: z.string().optional(),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Phone number must be a valid 10-digit Indian mobile number"),
  institution: z.string().min(2, "School name is required"),
  schoolClass: z.string().min(1, "Please select or specify your class"),
  otherClass: z.string().optional(),
  expectations: z.string().optional(),
}).refine(
  (data) => {
    if (data.place === "Other") {
      return !!data.otherPlace && data.otherPlace.trim().length >= 2;
    }
    return true;
  },
  {
    message: "Please specify your place name",
    path: ["otherPlace"],
  }
).refine(
  (data) => {
    if (data.schoolClass === "Other") {
      return !!data.otherClass && data.otherClass.trim().length >= 1;
    }
    return true;
  },
  {
    message: "Please specify your class",
    path: ["otherClass"],
  }
);

export type RegistrationFormData = z.infer<typeof registrationSchema>;
