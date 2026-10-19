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
            Digital Marketing · Design · Technology · AI
          </p>
          <h1 id="hero-heading" className={styles.title}>
            Ideas That <span className="gradient-text">Build Brands.</span>
          </h1>
          <p className={styles.lead}>
            We combine creative thinking, intelligent marketing, and modern technology to
            help ambitious businesses build stronger brands and grow digitally.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryCta}>
              Start Your Project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/services" className={styles.secondaryCta}>
              Explore Our Services
            </Link>
          </div>
          <ul className={styles.signals} aria-label="Core disciplines">
            <li className={styles.signal}>
              <Sparkles size={15} aria-hidden="true" />
              SEO · AEO · GEO · AAO
            </li>
            <li className={styles.signalDivider} aria-hidden="true" />
            <li className={styles.signal}>Design & Engineering</li>
            <li className={styles.signalDivider} aria-hidden="true" />
            <li className={styles.signal}>AI-Assisted Production</li>
          </ul>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelDot} />
              <span className={styles.panelDot} />
              <span className={styles.panelDot} />
              <span className={styles.panelTitle}>ln-digitech / system</span>
            </div>
            <div className={styles.panelBody}>
              <div className={styles.nodeRow}>
                <span className={`${styles.node} ${styles.nodeBlue}`}>Discover</span>
                <span className={styles.edge} />
                <span className={`${styles.node} ${styles.nodeCyan}`}>Strategy</span>
              </div>
              <div className={styles.nodeRow}>
                <span className={`${styles.node} ${styles.nodeNavy}`}>Create</span>
                <span className={styles.edge} />
                <span className={`${styles.node} ${styles.nodeBlue}`}>Launch</span>
              </div>
              <div className={styles.nodeRow}>
                <span className={`${styles.node} ${styles.nodeCyan}`}>Measure</span>
                <span className={styles.edge} />
                <span className={`${styles.node} ${styles.nodeNavy}`}>Optimize</span>
              </div>
              <div className={styles.metricGrid}>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>Channels</span>
                  <span className={styles.metricValue}>13</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>Disciplines</span>
                  <span className={styles.metricValue}>4</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>Process</span>
                  <span className={styles.metricValue}>5 steps</span>
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
