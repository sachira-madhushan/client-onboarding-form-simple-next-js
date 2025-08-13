import { z } from "zod";

const today = new Date();
today.setHours(0, 0, 0, 0);

export const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name must be at most 80 characters")
    .regex(/^[A-Za-z\s'-]+$/, "Only letters, spaces, apostrophes, and hyphens are allowed"),
  email: z.string().email("Invalid email address"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be at most 100 characters"),
  services: z
    .array(z.enum(["UI/UX", "Branding", "Web Dev", "Mobile App"]))
    .min(1, "Select at least one service"),
  budget: z
    .number({ invalid_type_error: "Budget must be a number" })
    .int("Budget must be an integer")
    .min(100, "Budget must be at least $100")
    .max(1_000_000, "Budget must be at most $1,000,000")
    .optional(),
  startDate: z
    .string()
    .refine((val) => {
      const selectedDate = new Date(val);
      selectedDate.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, "Project start date must be today or later"),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
});
