import { Target, Telescope } from "lucide-react";
import styles from "./MissionVision.module.css";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const entries = [
  {
    icon: Target,
    title: "Mission",
    detail:
      "Build practical technology products that solve real problems for people and businesses. We choose problems we understand and can build well, not whatever happens to be trending.",
  },
  {
    icon: Telescope,
    title: "Vision",
    detail:
      "Software that people keep choosing because it is genuinely useful, straightforward to use and built to last. That reputation is earned one product at a time.",
  },
];

/**
 * Mission and vision. Stated intentions, not claims of traction.
 */
export function MissionVision() {
  return (
    <section className={styles.section} aria-labelledby="mission-heading">
      <Container>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <SectionHeading
              eyebrow="Mission & vision"
              title="Why we are building."
              description="LN Digitech exists to turn practical problems into products people actually want to use. This page will not pretend that journey is further along than it is."
            />
          </div>
          <ul className={styles.list}>
            {entries.map((entry) => {
              const Icon = entry.icon;
              return (
                <li key={entry.title} className={styles.item}>
                  <span className={styles.icon}>
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div className={styles.content}>
                    <h3 className={styles.itemTitle}>{entry.title}</h3>
                    <p className={styles.itemDetail}>{entry.detail}</p>
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
