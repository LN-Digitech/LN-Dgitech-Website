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
              Interested in What We Are Building?
            </h2>
            <p className={styles.text}>
              Product announcements will be published here first. If you want to talk about
              partnerships, collaboration or anything else, we read every message.
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
