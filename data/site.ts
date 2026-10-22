import type { SiteConfig } from "@/types";

/**
 * Central business configuration.
 *
 * Everything a non-developer might need to update (contact details, social
 * links, announcement bar) lives here. Do not scatter these values across
 * components.
 *
 * NOTE: contact details and social URLs are intentionally left as null until
 * genuine values are supplied. The UI hides any contact channel that has no
 * real value, nothing is invented.
 */
export const siteConfig: SiteConfig = {
  name: "LN Digitech",
  legalName: "LN Digitech",
  tagline: "Building practical technology products.",
  description:
    "LN Digitech is an early-stage technology startup building practical software products to solve real-world problems, founded by Lucky Joshi and Nishchay Singh Mehra.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  locale: "en_IN",
  logo: {
    src: "/images/logo/logo.png",
    srcLight: "/images/logo/logo-light.png",
    mark: "/images/logo/mark.jpg",
    width: 760,
    height: 218,
    alt: "LN Digitech, Building practical technology products",
  },
  contact: {
    email: "lndigitech.2026@gmail.com",
    phone: null,
    address: null,
    hours: null,
  },
  // Add real profile URLs here to make social links appear in the footer.
  social: [],
  announcement: {
    enabled: false,
    text: null,
    linkHref: null,
    linkLabel: null,
  },
};
