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

export const topicOptions = [
  "General enquiry",
  "Partnership or collaboration",
  "Media or press",
  "Other",
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
  topic: z.enum(topicOptions, {
    message: "Please select an enquiry type.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please describe your enquiry in at least 20 characters.")
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
