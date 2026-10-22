import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import styles from "./Hero.module.css";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

/**
 * Homepage hero.
 *
 * Positions LN Digitech as the parent technology brand: headline, support
 * copy, product-discovery CTAs, and a decorative portfolio diagram built
 * from brand-coloured geometry (CSS only, no client JS, no layout shift).
 */
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Container wide className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            LN Digitech, a technology company
          </p>
          <h1 id="hero-heading" className={styles.title}>
            Building Technology <span className="gradient-text">for What&apos;s Next.</span>
          </h1>
          <p className={styles.lead}>
            LN Digitech is building software products and technology solutions designed to
            simplify business operations, connect workflows, and solve real-world problems.
          </p>
          <div className={styles.actions}>
            <Link href="/products" className={styles.primaryCta}>
              Explore Our Products
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/about" className={styles.secondaryCta}>
              About LN Digitech
            </Link>
          </div>
          <ul className={styles.signals} aria-label="Company facts">
            <li className={styles.signal}>
              <Sparkles size={15} aria-hidden="true" />
              Technology company
            </li>
            <li className={styles.signalDivider} aria-hidden="true" />
            <li className={styles.signal}>Products in development</li>
            <li className={styles.signalDivider} aria-hidden="true" />
            <li className={styles.signal}>Launching later</li>
          </ul>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelDot} />
              <span className={styles.panelDot} />
              <span className={styles.panelDot} />
              <span className={styles.panelTitle}>ln-digitech / portfolio</span>
            </div>
            <div className={styles.panelBody}>
              <div className={styles.nodeRow}>
                <span className={`${styles.node} ${styles.nodeNavy}`}>LN Digitech</span>
                <span className={styles.edge} />
                <span className={`${styles.node} ${styles.nodeBlue}`}>BusinessOS</span>
              </div>
              <div className={styles.nodeRow}>
                <span className={`${styles.node} ${styles.nodeBlue}`}>LN Engage</span>
                <span className={styles.edge} />
                <span className={`${styles.node} ${styles.nodeCyan}`}>LN Manage</span>
              </div>
              <div className={styles.nodeRow}>
                <span className={`${styles.node} ${styles.nodeNavy}`}>LN One</span>
                <span className={styles.edge} />
                <span className={`${styles.node} ${styles.nodeCyan}`}>More products</span>
              </div>
              <div className={styles.metricGrid}>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>Stage</span>
                  <span className={styles.metricValue}>Early</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>Focus</span>
                  <span className={styles.metricValue}>Business software</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>Launches</span>
                  <span className={styles.metricValue}>None yet</span>
                </div>
              </div>
              <div className={styles.statusRow}>
                <span className={styles.statusDot} />
                <span className={styles.statusText}>
                  {siteConfig.name}: {siteConfig.tagline}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.glow} />
          <div className={styles.ring} />
        </div>
      </Container>
    </section>
  );
}
