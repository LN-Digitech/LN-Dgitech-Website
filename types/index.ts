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

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Current stage, e.g. "In development". Only add when factually true. */
  status: string;
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
