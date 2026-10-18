import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import styles from "./not-found.module.css";
import { Container } from "@/components/ui/Container";
import { getServicesSorted } from "@/data/services";

/**
 * Custom 404 experience.
 *
 * Uses Next.js conventions: this component renders automatically for unmatched
 * routes with a 404 status. Because it must always render, it avoids
 * server-only imports that depend on request data.
 */
export default function NotFound() {
  const services = getServicesSorted().slice(0, 6);

  return (
    <section className={styles.page}>
      <Container>
        <div className={styles.panel}>
          <span className={styles.code} aria-hidden="true">
            404
          </span>
          <h1 className={styles.title}>That page doesn&apos;t exist.</h1>
          <p className={styles.text}>
            The link may be outdated, or the address may have a typo. Here are some pages
            that do work:
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.primary}>
              <ArrowLeft size={16} aria-hidden="true" />
              Back to home
            </Link>
            <Link href="/contact" className={styles.secondary}>
              Report a broken link
            </Link>
          </div>

          <nav aria-label="Suggested pages" className={styles.suggestions}>
            <p className={styles.suggestionsLabel}>
              <Search size={14} aria-hidden="true" />
              Popular pages
            </p>
            <ul className={styles.suggestionList}>
              <li>
                <Link href="/services" className={styles.suggestion}>
                  All services
                </Link>
              </li>
              <li>
                <Link href="/packages" className={styles.suggestion}>
                  Packages &amp; pricing
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className={styles.suggestion}>
                  Portfolio
                </Link>
              </li>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className={styles.suggestion}>
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
