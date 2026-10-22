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
/* Products                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Product readiness. Only "Available" may be used after a real release has
 * been confirmed. Never publish launch dates that have not been approved.
 */
export type ProductStatus = "In Development" | "Planned" | "Coming Soon" | "Available";

/** Decorative dashboard-mockup variant rendered on product cards. */
export type ProductVisual = "crm" | "inventory" | "integrated";

export interface Product {
  slug: string;
  name: string;
  /** Public category label, e.g. "Customer Relationship Management". */
  category: string;
  /** One-line purpose statement. */
  purpose: string;
  /** Short honest description. No invented features, pricing or dates. */
  description: string;
  status: ProductStatus;
  /** Portfolio this product belongs to (e.g. "BusinessOS"), or null. */
  suite: string | null;
  /** Which decorative mockup to render. */
  visual: ProductVisual;
  /** Public product URL once live; null until then. */
  url: string | null;
}

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
