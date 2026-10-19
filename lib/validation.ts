import { z } from "zod";

/**
 * Contact form validation.
 *
 * The schema runs on the client before any request is sent to Web3Forms
 * (components/forms/ContactForm.tsx). Submissions go directly from the
 * browser to https://api.web3forms.com/submit, so this check is the
 * authoritative gate before data leaves the page.
 */

const PHONE_REGEX = /^[+\d][\d\s\-()]{6,19}$/;

export const serviceOptions = [
  "Search Engine Optimization (SEO)",
  "Answer Engine Optimization (AEO)",
  "Generative Engine Optimization (GEO)",
  "Assistive Agent Optimization (AAO)",
  "Graphic Design & Brand Identity",
  "Website Design & Development",
  "Mobile App Development",
  "Custom Software Development",
  "Content Writing & Strategy",
  "E-commerce Development",
  "Social Media Marketing",
  "Business & Technology Consulting",
  "AI Photo & Video Generation",
  "Multiple / Not sure yet",
] as const;

export const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 to ₹50,000",
  "₹50,000 to ₹1,00,000",
  "₹1,00,000 to ₹3,00,000",
  "Above ₹3,00,000",
  "Not sure yet",
] as const;

export const timelineOptions = [
  "As soon as possible",
  "Within 1 month",
  "1 to 3 months",
  "3 to 6 months",
  "Exploring options",
] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name must be under 100 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .max(254, "Email address is too long.")
    .email("Please enter a valid email address.")
    .transform((value) => value.toLowerCase()),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || PHONE_REGEX.test(value), {
      message: "Please enter a valid phone number.",
    }),
  company: z
    .string()
    .trim()
    .max(120, "Company name must be under 120 characters.")
    .optional(),
  service: z.string().trim().min(1, "Please select a service."),
  budget: z.string().trim().min(1, "Please select an estimated budget."),
  timeline: z.string().trim().min(1, "Please select a project timeline."),
  packageId: z
    .enum(["launch", "growth", "scale", "enterprise", ""])
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Please describe your project in at least 20 characters.")
    .max(4000, "Message must be under 4,000 characters."),
  consent: z.literal(true, {
    message: "You must agree to the privacy policy before submitting.",
  }),
  /** Web3Forms honeypot (must be an unchecked checkbox named `botcheck`).
   *  Must remain false; the form silently drops submissions that set it. */
  botcheck: z.boolean(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type ContactFormField = keyof ContactFormValues;
