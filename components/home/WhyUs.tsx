import styles from "./WhyUs.module.css";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentiators } from "@/data/process";

/**
 * "Why LN Digitech", differentiators grid. All claims are process-based;
 * no invented statistics, awards or client numbers.
 */
export function WhyUs() {
  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <Container>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <SectionHeading
              eyebrow="Why LN Digitech"
              title="A partner accountable for the whole picture."
              description="Most agencies specialise in one layer and hand you the rest. We keep strategy, creative, engineering and measurement in one team, so nothing important falls between vendors."
            />
          </div>
          <ul className={styles.list}>
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className={styles.item}>
                  <span className={styles.icon}>
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div className={styles.content}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDetail}>{item.detail}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
