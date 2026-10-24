import type { Product } from "@/types";

/**
 * Product portfolio configuration.
 *
 * Central source of truth for every product shown on the website. The
 * homepage products section, the /products page and the footer product
 * links all render from this file, so a product update happens in one
 * place.
 *
 * Editing guide:
 *  - `name`: public product names are configurable, currently under the
 *    BusinessOS portfolio. Keep this field easy to change if naming evolves.
 *  - `status`: one of "In Development" | "Planned" | "Coming Soon" |
 *    "Available". Only set "Available" after the real release is confirmed.
 *  - Never add launch dates, pricing, feature lists, testimonials or
 *    customer counts that have not been approved as fact.
 */

/** Business software portfolio name. Configurable. */
export const businessSuite = {
  name: "BusinessOS",
  /** Explains the relationship: parent brand -> portfolio -> products. */
  parent: "LN Digitech",
  summary:
    "The business software portfolio of LN Digitech, starting with inventory, stock and billing software for growing businesses.",
} as const;

/**
 * Long-term areas LN Digitech may develop outside the business-software
 * portfolio. Presented as vision only; these are NOT launched products
 * and no category pages exist for them.
 */
export const futureVision = [
  "AI-powered applications",
  "Developer tools and software infrastructure",
  "Industry-specific technology products",
  "Other technology products in the future",
] as const;

export const products: Product[] = [
  {
    slug: "ln-manage",
    name: "LN Manage",
    category: "Business Operations Software",
    purpose: "Stock, products, suppliers, purchasing, and billing",
    description:
      "An inventory and billing concept covering inventory, stock management, products, supplier records, purchasing and billing in one place.",
    status: "In Development",
    suite: businessSuite.name,
    visual: "inventory",
    url: null,
  },
];

/** Honest status summary shown under the product cards. */
export const productsHonestyNote =
  "Statuses above reflect where each product actually stands today. LN Digitech does not publish launch dates, pricing or feature lists that are not final.";
