import { ArrowRight } from "lucide-react";
import styles from "./FinalCTA.module.css";
import { Container } from "@/components/ui/Container";

/**
 * Closing call-to-action band used on the homepage and key landing pages.
 */
export function FinalCTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <Container>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <h2 id="cta-heading" className={styles.title}>
              Curious About What We Are Building?
            </h2>
            <p className={styles.text}>
              Ask about LN Manage, or
              register early interest in an upcoming product. We read every message
              personally.
            </p>
          </div>
          <a href="/contact" className={styles.cta}>
            Get in touch
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
