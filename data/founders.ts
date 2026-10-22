import type { Founder } from "@/types";

/**
 * LN Digitech co-founders.
 *
 * Every field here is factual. Bios and responsibilities describe the actual
 * remit of each founder, no invented qualifications, previous employers,
 * years of experience, achievements or traction.
 *
 * - `portrait`: set to `{ src, alt }` when a real photograph is supplied.
 *   Until then the component renders a monogram, never a generated image
 *   presented as a photograph.
 * - `linkedin`: set to the verified profile URL when available; null keeps
 *   the link hidden.
 */
export const founders: Founder[] = [
  {
    slug: "lucky-joshi",
    fullName: "Lucky Joshi",
    title: "Co-Founder & Technical Lead",
    bio: "Lucky leads technology at LN Digitech. He owns the company's technical direction: which products are worth building, how they should be architected, and what it takes to keep them maintainable long after launch. His work spans web development, apps and software engineering, with a consistent bias toward documented, maintainable builds over one-off deliverables.",
    responsibilities: [
      "Technical strategy",
      "Product architecture",
      "Web and app development",
      "Software engineering",
      "Integrations",
      "AI-assisted product development",
    ],
    portrait: null,
    linkedin: null,
    focusLine: "Technical strategy, product engineering and AI-assisted development.",
  },
  {
    slug: "nishchay-singh-mehra",
    fullName: "Nishchay Singh Mehra",
    title: "Co-Founder & Marketing Lead",
    bio: "Nishchay leads marketing at LN Digitech. He owns the company's marketing direction: how products are positioned, who they are for, and how launch communication is planned before anything ships. His background covers search, content strategy, social media and brand positioning, keeping messaging tied to real product value rather than activity for its own sake.",
    responsibilities: [
      "Marketing strategy",
      "Product positioning",
      "Content strategy",
      "Search (SEO)",
      "Social media",
      "Brand communication",
    ],
    portrait: null,
    linkedin: null,
    focusLine: "Product positioning, content, search and brand strategy.",
  },
];
