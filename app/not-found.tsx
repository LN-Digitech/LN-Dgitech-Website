import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import styles from "./not-found.module.css";
import { Container } from "@/components/ui/Container";

/**
 * Custom 404 experience.
 *
 * Uses Next.js conventions: this component renders automatically for unmatched
 * routes with a 404 status. Because it must always render, it avoids
 * server-only imports that depend on request data.
 */
export default function NotFound() {
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
                <Link href="/products" className={styles.suggestion}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.suggestion}>
                  About LN Digitech
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.suggestion}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
