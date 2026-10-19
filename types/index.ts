import type { LucideIcon } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Site configuration                                                          */
/* -------------------------------------------------------------------------- */

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  logo: {
    src: string;
    srcLight: string;
    mark: string;
    width: number;
    height: number;
    alt: string;
  };
  contact: {
    email: string;
    phone: string | null;
    address: string | null;
    hours: string | null;
  };
  social: {
    platform: string;
    url: string;
  }[];
  announcement: AnnouncementBar;
}

export interface AnnouncementBar {
  enabled: boolean;
  text: string | null;
  linkHref: string | null;
  linkLabel: string | null;
}

/* -------------------------------------------------------------------------- */
/* Services                                                                    */
/* -------------------------------------------------------------------------- */

export type ServiceCategory =
  | "Discovery & Search"
  | "Creative & Content"
  | "Engineering"
  | "Growth Marketing"
  | "Commerce"
  | "AI Studio"
  | "Consulting";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  category: ServiceCategory;
  icon: LucideIcon;
  /** Short one-line summary used in cards and navigation. */
  summary: string;
  /** Longer description used on the overview page. */
  description: string;
  /** Problems this service solves for clients. */
  problems: string[];
  /** Concrete deliverables the engagement can produce. */
  deliverables: string[];
  /** How an engagement typically runs, in order. */
  process: { step: string; detail: string }[];
  /** Who benefits most from this service. */
  suitableFor: string[];
  /** Honest limitations — what this service cannot guarantee. */
  limitations: string[];
  faqs: ServiceFaq[];
  related: string[];
  /** Featured on the homepage services overview. */
  featured?: boolean;
  /** Order used for sorting on listing pages. */
  order: number;
  /** Highlight colour accent used on detail pages. */
  accent: "blue" | "cyan" | "navy";
}

/* -------------------------------------------------------------------------- */
/* Packages                                                                    */
/* -------------------------------------------------------------------------- */

export type PackageId = "launch" | "growth" | "scale" | "enterprise";

export interface PricingPackage {
  id: PackageId;
  name: string;
  /** Human-readable price range, e.g. "₹9,999 to ₹19,999". */
  priceLabel: string;
  /** Numeric floor for sorting/structured data. */
  priceFrom: number;
  /** Billing period label. */
  billing: string;
  audience: string;
  summary: string;
  features: string[];
  /** What is explicitly NOT included unless scoped separately. */
  exclusions: string[];
  ctaLabel: string;
  highlighted: boolean;
}

export interface PackageComparisonRow {
  feature: string;
  /** Values keyed by package id, or null when not applicable. */
  values: Record<PackageId, string | null>;
}

/* -------------------------------------------------------------------------- */
/* Portfolio                                                                   */
/* -------------------------------------------------------------------------- */

export type ProjectCategory =
  | "Brand Identity"
  | "Website"
  | "E-commerce"
  | "Digital Marketing"
  | "Software"
  | "AI Media";

export interface Project {
  slug: string;
  name: string;
  industry: string;
  category: ProjectCategory;
  services: string[];
  summary: string;
  description: string;
  /** Whether this is internal/concept work rather than paid client work. */
  isConcept: boolean;
  /** Verified results — only include genuinely measured figures. */
  results: string[] | null;
  year: number;
  accent: "blue" | "cyan" | "navy";
}

/* -------------------------------------------------------------------------- */
/* Blog                                                                        */
/* -------------------------------------------------------------------------- */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** Omit author entirely rather than inventing one. */
  author: string | null;
  publishedAt: string;
  updatedAt: string | null;
  readingTimeMinutes: number;
  category: string;
  tags: string[];
  /** Safe, validated article blocks. */
  body: ArticleBlock[];
}

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "note"; text: string };

/* -------------------------------------------------------------------------- */
/* Founders                                                                    */
/* -------------------------------------------------------------------------- */

export interface Founder {
  slug: string;
  fullName: string;
  title: string;
  /** Short authentic biography — no invented history, employers or results. */
  bio: string;
  /** Areas of responsibility. Drawn from the real remit, nothing embellished. */
  responsibilities: string[];
  /** Real portrait when supplied; monogram fallback renders otherwise. */
  portrait: {
    src: string;
    alt: string;
  } | null;
  /** Verified profile URL, or null — never a fabricated link. */
  linkedin: string | null;
  /** One-line focus summary used in the compact homepage variant. */
  focusLine: string;
}

/* -------------------------------------------------------------------------- */
/* Process & general                                                           */
/* -------------------------------------------------------------------------- */

export interface ProcessStep {
  number: string;
  title: string;
  detail: string;
  icon: LucideIcon;
}

export interface Differentiator {
  title: string;
  detail: string;
  icon: LucideIcon;
}
