import Link from "next/link";
import { Check, Minus } from "lucide-react";
import styles from "./packages.module.css";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FinalCTA } from "@/components/home/FinalCTA";
import { packages, packageComparison, packageDisclaimer } from "@/data/packages";
import { buildPageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import type { PackageId } from "@/types";

export const metadata = buildPageMetadata({
  title: "Service Packages & Pricing | LN Launch, Growth, Scale & Enterprise",
  description:
    "Monthly digital agency packages in Indian rupees: LN Launch from ₹9,999, LN Growth from ₹24,999, LN Scale from ₹49,999 and LN Enterprise from ₹1,00,000. Scope is confirmed in a written proposal.",
  path: "/packages",
});

const packageFaqs = [
  {
    question: "Are these prices fixed?",
    answer:
      "No. The figures shown are proposed monthly starting ranges. Final pricing depends on the scope agreed in a signed proposal, including the number of deliverables, the platforms involved and the level of technical work required.",
  },
  {
    question: "Is every service included in each package?",
    answer:
      "No. Each package includes a defined set of deliverables. Anything not listed in the package features or the signed scope is not included, and is quoted separately if required.",
  },
  {
    question: "What costs are billed separately?",
    answer:
      "Ad spend, third-party software subscriptions, hosting and domain fees, premium AI tool credits and applicable taxes are separate unless your proposal explicitly states otherwise.",
  },
  {
    question: "Can we change packages later?",
    answer:
      "Yes. Most relationships start smaller and expand once the working pattern is established. Changes take effect from the next billing cycle and are confirmed in writing.",
  },
  {
    question: "What is the minimum commitment?",
    answer:
      "Marketing and content work needs a reasonable runway to produce results, so retainers typically run on an initial three-month term, then continue monthly with notice. Exact terms are stated in your proposal.",
  },
  {
    question: "Can I submit a package choice through the contact form?",
    answer:
      "Yes. The contact form has a package selector, and every Get a Custom Quote button links to the form with your chosen package preselected.",
  },
];

export default function PackagesPage() {
  const packageIds: PackageId[] = ["launch", "growth", "scale", "enterprise"];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Packages", path: "/packages" },
        ])}
      />

      <PageHero
        eyebrow="Packages & pricing"
        title="Service packages priced in rupees, scoped in writing."
        description="Four starting shapes for different stages of business. Every engagement is confirmed in a signed proposal that states exactly what is included, and what is not."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Packages", path: "/packages" }]}
      />

      <section className={styles.body} aria-label="Service packages">
        <Container>
          <ul className={styles.grid}>
            {packages.map((pkg) => (
              <li key={pkg.id} className={styles.item} id={pkg.id}>
                <article
                  className={`${styles.card} ${pkg.highlighted ? styles.highlighted : ""}`}
                  aria-labelledby={`package-${pkg.id}`}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.nameRow}>
                      <h2 id={`package-${pkg.id}`} className={styles.name}>
                        {pkg.name}
                      </h2>
                      {pkg.highlighted ? <Badge tone="blue">Most chosen</Badge> : null}
                    </div>
                    <p className={styles.price}>
                      <span className={styles.priceValue}>{pkg.priceLabel}</span>
                      <span className={styles.priceBilling}>{pkg.billing}</span>
                    </p>
                    <p className={styles.audience}>{pkg.audience}</p>
                    <p className={styles.summary}>{pkg.summary}</p>
                  </div>

                  <h3 className={styles.subheading}>Included</h3>
                  <ul className={styles.features}>
                    {pkg.features.map((feature) => (
                      <li key={feature} className={styles.feature}>
                        <Check size={16} aria-hidden="true" className={styles.check} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className={styles.subheading}>Billed separately</h3>
                  <ul className={styles.exclusions}>
                    {pkg.exclusions.map((exclusion) => (
                      <li key={exclusion} className={styles.exclusion}>
                        <Minus size={15} aria-hidden="true" className={styles.minus} />
                        <span>{exclusion}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?package=${pkg.id}`}
                    className={styles.cta}
                    aria-label={`${pkg.ctaLabel} for ${pkg.name}`}
                  >
                    {pkg.ctaLabel}
                  </Link>
                </article>
              </li>
            ))}
          </ul>

          <p className={styles.disclaimer}>{packageDisclaimer}</p>

          {/* Comparison table ------------------------------------------------ */}
          <section aria-labelledby="compare-heading" className={styles.compare}>
            <h2 id="compare-heading" className={styles.compareTitle}>
              Compare packages
            </h2>
            <p className={styles.compareIntro}>
              Scroll horizontally on small screens. &ldquo;Not included&rdquo; means the item is
              not part of that package unless scoped separately.
            </p>
            <div className={styles.tableWrap} role="region" aria-label="Package comparison" tabIndex={0}>
              <table className={styles.table}>
                <caption className="visually-hidden">
                  Feature comparison across LN Launch, LN Growth, LN Scale and LN Enterprise
                  packages
                </caption>
                <thead>
                  <tr>
                    <th scope="col" className={styles.th}>
                      Feature
                    </th>
                    {packages.map((pkg) => (
                      <th key={pkg.id} scope="col" className={styles.th}>
                        {pkg.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {packageComparison.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row" className={styles.rowHeader}>
                        {row.feature}
                      </th>
                      {packageIds.map((id) => {
                        const value = row.values[id];
                        return (
                          <td key={id} className={styles.td}>
                            {value ?? <span className={styles.dash}>Not included</span>}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="pricing-faq-heading" className={styles.faq}>
            <h2 id="pricing-faq-heading" className={styles.faqTitle}>
              Pricing questions
            </h2>
            <FAQAccordion items={packageFaqs} />
          </section>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
