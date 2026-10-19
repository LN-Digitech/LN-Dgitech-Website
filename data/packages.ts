import type { PackageComparisonRow, PricingPackage } from "@/types";

/**
 * Service packages and pricing.
 *
 * All prices are EDITABLE here, no component hardcodes a price.
 * Figures are proposed starting ranges in Indian rupees, not contractual
 * offers. Final scope and pricing are confirmed in a signed proposal.
 *
 * IMPORTANT: Keep the exclusions honest. Do not imply that every service is
 * included in every tier.
 */
export const packages: PricingPackage[] = [
  {
    id: "launch",
    name: "LN Launch",
    priceLabel: "₹9,999 to ₹19,999",
    priceFrom: 9999,
    billing: "per month",
    audience: "Startups, freelancers and small businesses building their foundations",
    summary:
      "A focused monthly engagement covering the essentials: a defined set of foundational SEO or digital marketing work, a steady supply of social creatives, and a clear monthly report. Scope is agreed up front so you know exactly what is being delivered each month.",
    features: [
      "One agreed foundational service track: SEO foundations or core digital marketing activities",
      "8 to 12 social creatives per month, when included in the selected scope",
      "Basic content support for key pages",
      "Limited website maintenance for an existing website",
      "Monthly summary report with completed work and next-month plan",
      "Monthly review call",
    ],
    exclusions: [
      "Paid media budget (billed directly by the advertising platform)",
      "Premium AI tool credits and third-party software subscriptions",
      "Hosting, domain and platform fees",
      "Large-scale content production or video editing",
      "Application taxes, unless separately invoiced",
    ],
    ctaLabel: "Get a Custom Quote",
    highlighted: false,
  },
  {
    id: "growth",
    name: "LN Growth",
    priceLabel: "₹24,999 to ₹39,999",
    priceFrom: 24999,
    billing: "per month",
    audience: "Growing businesses investing in consistent organic and social presence",
    summary:
      "Ongoing SEO supported by foundational answer, generative and assistive-agent optimisation work where relevant, a higher creative volume, regular content and social support, and monthly reporting that ties activity to outcomes.",
    features: [
      "Ongoing SEO: technical maintenance, on-page improvements and content structure",
      "Foundational AEO, GEO and AAO work where relevant to your business",
      "12 to 20 social creatives per month",
      "2 to 4 content pieces per month, written to agreed briefs",
      "Social media support including scheduling and community monitoring within agreed hours",
      "Monthly reporting covering organic performance, content output and social results",
      "Monthly strategy call",
    ],
    exclusions: [
      "Paid media budget (billed directly by the advertising platform)",
      "Premium AI tool credits and third-party software subscriptions",
      "Hosting, domain and platform fees",
      "Full app or software development",
      "Application taxes, unless separately invoiced",
    ],
    ctaLabel: "Get a Custom Quote",
    highlighted: true,
  },
  {
    id: "scale",
    name: "LN Scale",
    priceLabel: "₹49,999 to ₹89,999",
    priceFrom: 49999,
    billing: "per month",
    audience: "Established brands and e-commerce businesses with mature channels",
    summary:
      "Advanced SEO with content strategy, defined AEO, GEO and AAO testing, higher creative and video volume, website or e-commerce optimisation work, and conversion tracking so results are measured against revenue rather than vanity metrics.",
    features: [
      "Advanced SEO and content strategy tied to commercial priorities",
      "AEO, GEO and defined AAO retrieval testing with documented results",
      "20 to 30 social creatives per month",
      "Agreed short-form video editing scope",
      "Website or e-commerce optimisation work against a prioritised backlog",
      "Conversion tracking setup and reporting against agreed goals",
      "Fortnightly working sessions",
    ],
    exclusions: [
      "Paid media budget (billed directly by the advertising platform)",
      "Premium AI tool credits and third-party software subscriptions",
      "Hosting, domain and platform fees",
      "Complete site or app rebuilds (quoted as project work)",
      "Application taxes, unless separately invoiced",
    ],
    ctaLabel: "Get a Custom Quote",
    highlighted: false,
  },
  {
    id: "enterprise",
    name: "LN Enterprise",
    priceLabel: "From ₹1,00,000",
    priceFrom: 100000,
    billing: "per month",
    audience: "Larger organisations with multi-brand, multi-location or complex requirements",
    summary:
      "A tailored engagement combining marketing strategy, multi-brand or multi-location coordination, creative and content production, technical optimisation, AI workflow consulting and custom reporting. This is a scoped retainer, not an unlimited-services contract.",
    features: [
      "Tailored marketing strategy aligned to your commercial objectives",
      "Multi-brand or multi-location work under agreed governance",
      "Creative and content production at agreed volumes",
      "Technical optimisation across web and platform surfaces",
      "AI workflow consulting and implementation support",
      "Custom reporting and stakeholder coordination",
      "Dedicated point of contact and agreed response times",
    ],
    exclusions: [
      "Paid media budget (billed directly by the advertising platform)",
      "Premium AI tool credits and third-party software subscriptions",
      "Hosting, domain and platform fees",
      "Unlimited deliverables (production volumes are defined in the signed scope)",
      "Application taxes, unless separately invoiced",
    ],
    ctaLabel: "Discuss Enterprise Scope",
    highlighted: false,
  },
];

/**
 * Feature comparison across packages.
 * Use `null` when a feature does not apply to a tier, the table renders "Not included".
 */
export const packageComparison: PackageComparisonRow[] = [
  {
    feature: "Monthly starting price",
    values: {
      launch: "₹9,999",
      growth: "₹24,999",
      scale: "₹49,999",
      enterprise: "₹1,00,000",
    },
  },
  {
    feature: "Social creatives per month",
    values: {
      launch: "8 to 12",
      growth: "12 to 20",
      scale: "20 to 30",
      enterprise: "Scoped to requirement",
    },
  },
  {
    feature: "Content pieces per month",
    values: { launch: "Basic support", growth: "2 to 4", scale: "Scoped", enterprise: "Scoped" },
  },
  {
    feature: "Short-form video editing",
    values: { launch: null, growth: null, scale: "Agreed scope", enterprise: "Scoped" },
  },
  {
    feature: "Technical SEO",
    values: { launch: "Foundations", growth: "Ongoing", scale: "Advanced", enterprise: "Advanced" },
  },
  {
    feature: "AEO, GEO and AAO work",
    values: { launch: null, growth: "Foundational", scale: "Defined testing", enterprise: "Scoped" },
  },
  {
    feature: "Website / e-commerce optimisation",
    values: {
      launch: "Limited maintenance",
      growth: null,
      scale: "Prioritised backlog",
      enterprise: "Scoped",
    },
  },
  {
    feature: "Conversion tracking & reporting",
    values: {
      launch: "Monthly summary",
      growth: "Monthly reporting",
      scale: "Conversion tracking",
      enterprise: "Custom reporting",
    },
  },
  {
    feature: "Strategy calls",
    values: {
      launch: "Monthly",
      growth: "Monthly",
      scale: "Fortnightly",
      enterprise: "As agreed",
    },
  },
  {
    feature: "Multi-brand / multi-location",
    values: { launch: null, growth: null, scale: null, enterprise: "Yes" },
  },
  {
    feature: "AI workflow consulting",
    values: { launch: null, growth: null, scale: null, enterprise: "Yes" },
  },
];

export const packageDisclaimer =
  "Prices shown are proposed monthly starting ranges in Indian rupees, not final contractual offers. Final scope, deliverables and pricing are confirmed in a signed proposal. Ad spend, third-party software, hosting, premium AI credits and applicable taxes are billed separately unless explicitly included. Deliverables depend on the agreed scope. Not every service is included in every tier.";

export function getPackageById(id: string): PricingPackage | undefined {
  return packages.find((pkg) => pkg.id === id);
}
