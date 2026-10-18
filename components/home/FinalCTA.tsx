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
              Ready to Build Something That Matters?
            </h2>
            <p className={styles.text}>
              Tell us about your goals. We&apos;ll help you explore the right digital
              solution for your business.
            </p>
          </div>
          <a href="/contact" className={styles.cta}>
            Discuss Your Project
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
