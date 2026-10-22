import { Target, Telescope } from "lucide-react";
import styles from "./MissionVision.module.css";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const entries = [
  {
    icon: Target,
    title: "Mission",
    detail:
      "Build practical software products that solve real problems for businesses, starting with business operations and growing into a wider technology portfolio over time.",
  },
  {
    icon: Telescope,
    title: "Vision",
    detail:
      "A technology company whose products earn their place by being genuinely useful: business software first, then more technology solutions as the company grows.",
  },
];

/**
 * Mission and vision for the homepage. Stated intentions, not claims of
 * traction. Rendered as the About section of the homepage.
 */
export function MissionVision() {
  return (
    <section className={styles.section} aria-labelledby="mission-heading">
      <Container>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <SectionHeading
              eyebrow="About LN Digitech"
              title="What we are building."
              description="LN Digitech is product-led: direction comes from real problems worth solving, not from what is easiest to sell. No product has launched yet, and this section will not pretend otherwise."
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
