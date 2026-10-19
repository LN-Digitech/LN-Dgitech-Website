import type { Founder } from "@/types";

/**
 * LN Digitech co-founders.
 *
 * Every field here is factual. Bios and responsibilities describe the actual
 * remit of each founder — no invented qualifications, previous employers,
 * years of experience, achievements or client results.
 *
 * - `portrait`: set to `{ src, alt }` when a real photograph is supplied.
 *   Until then the component renders a monogram — never a generated image
 *   presented as a photograph.
 * - `linkedin`: set to the verified profile URL when available; null keeps
 *   the link hidden.
 */
export const founders: Founder[] = [
  {
    slug: "lucky-joshi",
    fullName: "Lucky Joshi",
    title: "Co-Founder & Technical Lead",
    bio: "Lucky leads technology at LN Digitech. He owns technical strategy across client engagements — how products should be architected, which integrations earn their complexity, and how systems stay maintainable long after launch. His work spans web development, apps, custom software and AI-enabled digital products, with a consistent bias toward documented, maintainable builds over one-off deliverables.",
    responsibilities: [
      "Technical strategy",
      "Web development",
      "App and software solutions",
      "Technical architecture",
      "Integrations",
      "Maintenance",
      "AI-enabled digital products",
    ],
    portrait: null,
    linkedin: null,
    focusLine: "Technical strategy, engineering and AI-enabled products.",
  },
  {
    slug: "nishchay-singh-mehra",
    fullName: "Nishchay Singh Mehra",
    title: "Co-Founder & Marketing Lead",
    bio: "Nishchay leads marketing at LN Digitech. He owns digital marketing strategy across the disciplines search now spans — classic SEO alongside AEO, GEO and Assistive Agent Optimization. Alongside search he runs social media, content strategy and brand positioning, keeping campaign work connected to measurable outcomes rather than activity for its own sake.",
    responsibilities: [
      "Digital marketing strategy",
      "SEO, AEO, GEO & AAO",
      "Social media",
      "Content strategy",
      "Brand positioning",
      "Marketing campaigns",
    ],
    portrait: null,
    linkedin: null,
    focusLine: "Search, content, social and brand strategy.",
  },
];
