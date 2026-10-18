import styles from "./ProcessSection.module.css";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

/**
 * "How we work" — responsive process timeline.
 * Renders as a vertical timeline on small screens and a connected grid on
 * large screens. Pure markup and CSS; no client JS.
 */
export function ProcessSection() {
  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="Five steps, in this order, every time."
          description="Skipping the early steps is how projects go over budget. This is the process we follow whether the engagement is a brand identity, a website build or an ongoing marketing retainer."
          align="center"
        />
        <ol className={styles.timeline}>
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.number} className={styles.step}>
                <div className={styles.marker}>
                  <span className={styles.number}>{step.number}</span>
                  <span className={styles.connector} aria-hidden="true" />
                </div>
                <div className={styles.body}>
                  <span className={styles.icon}>
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDetail}>{step.detail}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
