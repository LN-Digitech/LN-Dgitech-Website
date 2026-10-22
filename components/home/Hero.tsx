import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import styles from "./Hero.module.css";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

/**
 * Homepage hero.
 *
 * Visual identity: a structured "system diagram" composition built from
 * brand-coloured geometry rather than a stock gradient blob. The composition
 * is decorative (aria-hidden) and CSS-only, no client JS, no layout shift.
 */
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Container wide className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Early-stage technology startup
          </p>
          <h1 id="hero-heading" className={styles.title}>
            Building <span className="gradient-text">practical technology products.</span>
          </h1>
          <p className={styles.lead}>
            LN Digitech is an early-stage technology startup building software products that
            solve real-world problems. Product details will be announced here when they are
            finalised.
          </p>
          <div className={styles.actions}>
            <Link href="/products" className={styles.primaryCta}>
              View products
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/contact" className={styles.secondaryCta}>
              Get in touch
            </Link>
          </div>
          <ul className={styles.signals} aria-label="Company facts">
            <li className={styles.signal}>
              <Sparkles size={15} aria-hidden="true" />
              Early-stage startup
            </li>
            <li className={styles.signalDivider} aria-hidden="true" />
            <li className={styles.signal}>Product-focused</li>
            <li className={styles.signalDivider} aria-hidden="true" />
            <li className={styles.signal}>Announcements coming soon</li>
          </ul>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelDot} />
              <span className={styles.panelDot} />
              <span className={styles.panelDot} />
              <span className={styles.panelTitle}>ln-digitech / status</span>
            </div>
            <div className={styles.panelBody}>
              <div className={styles.nodeRow}>
                <span className={`${styles.node} ${styles.nodeBlue}`}>Observe</span>
                <span className={styles.edge} />
                <span className={`${styles.node} ${styles.nodeCyan}`}>Validate</span>
              </div>
              <div className={styles.nodeRow}>
                <span className={`${styles.node} ${styles.nodeNavy}`}>Design</span>
                <span className={styles.edge} />
                <span className={`${styles.node} ${styles.nodeBlue}`}>Build</span>
              </div>
              <div className={styles.nodeRow}>
                <span className={`${styles.node} ${styles.nodeCyan}`}>Learn</span>
                <span className={styles.edge} />
                <span className={`${styles.node} ${styles.nodeNavy}`}>Improve</span>
              </div>
              <div className={styles.metricGrid}>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>Stage</span>
                  <span className={styles.metricValue}>Early</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>Focus</span>
                  <span className={styles.metricValue}>Products</span>
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
