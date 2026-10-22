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
 *  - `name`: public product names are configurable. Current names are
 *    LN Engage / LN Manage / LN One under the BusinessOS portfolio; keep
 *    this field easy to change if naming evolves.
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
    "The business software portfolio of LN Digitech: customer management, inventory and billing, and a possible combined offering later on.",
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
    slug: "ln-engage",
    name: "LN Engage",
    category: "Customer Relationship Management",
    purpose: "Leads, customers, sales pipelines, and follow-ups",
    description:
      "A Growth + Flow concept for customer relationships, covering leads, customers, sales pipelines, follow-ups and the related day-to-day sales workflows.",
    status: "In Development",
    suite: businessSuite.name,
    visual: "crm",
    url: null,
  },
  {
    slug: "ln-manage",
    name: "LN Manage",
    category: "Business Operations Software",
    purpose: "Stock, products, suppliers, purchasing, and billing",
    description:
      "An inventory and billing concept covering inventory, stock management, products, supplier records, purchasing and billing in one place.",
    status: "Planned",
    suite: businessSuite.name,
    visual: "inventory",
    url: null,
  },
  {
    slug: "ln-one",
    name: "LN One",
    category: "Unified Business Management",
    purpose: "CRM + Inventory/Billing",
    description:
      "A combined offering that brings customer management, sales workflows, inventory and billing together as one integrated plan for a business.",
    status: "Planned",
    suite: businessSuite.name,
    visual: "integrated",
    url: null,
  },
];

/** Honest status summary shown under the product cards. */
export const productsHonestyNote =
  "Statuses above reflect where each product actually stands today. LN Digitech does not publish launch dates, pricing or feature lists that are not final.";
