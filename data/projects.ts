import type { Project } from "@/types";

/**
 * Portfolio projects.
 *
 * Every entry MUST honestly declare whether it is real client work
 * (`isConcept: false`) or internal/concept work (`isConcept: true`).
 * Concept projects are clearly labelled on the site.
 *
 * Only include `results` when the figures are genuinely measured and the
 * client has approved their use. Otherwise use `null`, the UI omits the
 * section entirely.
 *
 * Until real client projects are added, this file contains concept
 * studies produced to demonstrate our working approach. They are labelled
 * as such everywhere they appear.
 */
export const projects: Project[] = [
  {
    slug: "meridian-coffee-roasters",
    name: "Meridian Coffee Roasters",
    industry: "Speciality food & beverage",
    category: "E-commerce",
    services: ["E-commerce Development", "SEO", "Brand Design"],
    summary:
      "Concept e-commerce rebuild for a speciality roaster: catalogue restructure, subscription flow and product-page templates built for organic discovery.",
    description:
      "A concept study exploring how a speciality coffee roaster's store could be restructured around subscription revenue rather than one-off orders. The catalogue was reorganised by roast profile and origin rather than by product type, product pages were rewritten to answer the questions buyers actually ask, and the checkout flow was reduced to a single page with subscription as the default rather than an upsell. The study also examined how tasting notes and brew guidance could be structured to earn organic search and answer-engine visibility.",
    isConcept: true,
    results: null,
    year: 2026,
    accent: "navy",
  },
  {
    slug: "harbour-clinic-network",
    name: "Harbour Clinic Network",
    industry: "Healthcare services",
    category: "Website",
    services: ["Website Development", "SEO", "Content Writing"],
    summary:
      "Concept multi-location clinic website with structured service pages, accessibility-first booking paths and location-specific content that is genuinely distinct.",
    description:
      "A concept study for a multi-location clinic network. The design problem was avoiding the usual failure mode of location pages: near-identical templates with the city name swapped. Instead, each location page was structured around the actual practitioners, services and referral pathways at that site, with schema markup matching visible content. The booking path was designed for keyboard and screen-reader users first, with appointment selection available without a modal trap.",
    isConcept: true,
    results: null,
    year: 2026,
    accent: "blue",
  },
  {
    slug: "atlas-field-services",
    name: "Atlas Field Services",
    industry: "B2B operations software",
    category: "Software",
    services: ["Custom Software", "UI Design"],
    summary:
      "Concept operations dashboard replacing a spreadsheet-based dispatch workflow with role-based views, offline-tolerant forms and an auditable change history.",
    description:
      "A concept study for a field-services company whose dispatch process ran on a shared spreadsheet and phone calls. The proposed tool gave dispatchers a live board view, field staff an offline-tolerant mobile form, and managers an auditable history of every change. The study deliberately scoped the first release to dispatch and reporting only, deferring invoicing integration to a later phase, an example of how we keep a first release small enough to actually ship.",
    isConcept: true,
    results: null,
    year: 2025,
    accent: "cyan",
  },
  {
    slug: "verdant-homewares",
    name: "Verdant Homewares",
    industry: "Home & lifestyle retail",
    category: "Brand Identity",
    services: ["Brand Design", "AI Media"],
    summary:
      "Concept identity system for a homewares label, including AI-assisted lifestyle imagery produced under strict art direction and disclosed as generated.",
    description:
      "A concept study combining a visual identity system with responsible AI-assisted imagery production. The identity established colour, type and layout rules for packaging and retail. Lifestyle imagery, normally the most expensive line in a homewares launch budget, was produced through art-directed AI generation with human curation and post-production, then disclosed as AI-assisted in all applications. The study documents where generated imagery performed well (environments, context) and where it still struggled (fine textile detail).",
    isConcept: true,
    results: null,
    year: 2025,
    accent: "cyan",
  },
  {
    slug: "civic-learning-platform",
    name: "Civic Learning Platform",
    industry: "Education technology",
    category: "Website",
    services: ["Website Development", "Content Writing", "SEO"],
    summary:
      "Concept marketing site and content architecture for an adult-learning platform, built around search intent rather than internal org structure.",
    description:
      "A concept study for an adult-learning platform whose original site mirrored its internal department structure, leaving prospective students unable to find course information. The proposed architecture reorganised content around learner intent (career change, upskilling, certification) with clear prerequisite and outcome statements on every course page. Editorial guidelines were included so the internal team could maintain the structure after launch.",
    isConcept: true,
    results: null,
    year: 2025,
    accent: "blue",
  },
  {
    slug: "northline-outdoor-gear",
    name: "Northline Outdoor Gear",
    industry: "Outdoor equipment retail",
    category: "Digital Marketing",
    services: ["Social Media", "Content Strategy", "AI Media"],
    summary:
      "Concept social and content programme for an outdoor-gear brand, built around seasonal trip planning rather than product promotion alone.",
    description:
      "A concept study for an outdoor-gear brand whose social output had drifted into product photography with no narrative. The proposed programme organised content around trip planning seasons, with gear featured as the equipment used on a real route rather than as the subject itself. Short-form video production used a mix of field footage and AI-assisted environment generation, with disclosure applied to generated frames.",
    isConcept: true,
    results: null,
    year: 2025,
    accent: "navy",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 3);
}
