import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import styles from "./PricingPreview.module.css";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { packages, packageDisclaimer } from "@/data/packages";

/**
 * Homepage pricing preview, four package cards linking to /packages.
 * Prices and features come from data/packages.ts so they can be edited in
 * one place.
 */
export function PricingPreview() {
  return (
    <section className={styles.section} aria-labelledby="pricing-heading">
      <Container>
        <SectionHeading
          eyebrow="Service packages"
          title="A starting shape, sized to your stage."
          description="Packages give us a shared starting point for scope conversations. Every engagement is confirmed in a written proposal. Nothing here is a fixed, unbendable box."
          align="center"
          actions={
            <Link href="/packages" className={styles.allLink}>
              Compare all packages
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          }
        />
        <ul className={styles.grid}>
          {packages.map((pkg) => (
            <li key={pkg.id} className={styles.item}>
              <article
                className={`${styles.card} ${pkg.highlighted ? styles.highlighted : ""}`}
                aria-labelledby={`pkg-${pkg.id}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.nameRow}>
                    <h3 id={`pkg-${pkg.id}`} className={styles.name}>
                      {pkg.name}
                    </h3>
                    {pkg.highlighted ? <Badge tone="blue">Most chosen</Badge> : null}
                  </div>
                  <p className={styles.price}>
                    <span className={styles.priceValue}>{pkg.priceLabel}</span>
                    <span className={styles.priceBilling}>{pkg.billing}</span>
                  </p>
                  <p className={styles.audience}>{pkg.audience}</p>
                </div>
                <ul className={styles.features}>
                  {pkg.features.slice(0, 5).map((feature) => (
                    <li key={feature} className={styles.feature}>
                      <Check size={16} aria-hidden="true" className={styles.check} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?package=${pkg.id}`}
                  className={styles.cta}
                  aria-label={`${pkg.ctaLabel}: ${pkg.name}`}
                >
                  {pkg.ctaLabel}
                </Link>
              </article>
            </li>
          ))}
        </ul>
        <p className={styles.disclaimer}>{packageDisclaimer}</p>
      </Container>
    </section>
  );
}
