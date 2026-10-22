import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import styles from "./FoundersSection.module.css";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { founders } from "@/data/founders";
import { cn } from "@/lib/utils";

interface FoundersSectionProps {
  /** "full" renders the editorial About-page layout; "compact" a homepage strip. */
  variant?: "full" | "compact";
  className?: string;
}

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * "Meet Our Founders", both co-founders rendered with equal visual weight.
 *
 * Real portraits render when supplied in data/founders.ts; until then a
 * monogram block is shown. No generated or stock image is ever presented
 * as a photograph of a founder. LinkedIn links render only when a verified
 * URL exists.
 */
export function FoundersSection({ variant = "full", className }: FoundersSectionProps) {
  const compact = variant === "compact";

  return (
    <section
      id="founders"
      className={cn(compact ? styles.compactSection : styles.section, className)}
      aria-labelledby="founders-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Leadership"
          title="Meet our founders"
          id="founders-heading"
          description={
            compact
              ? undefined
              : "One co-founder leads technology, the other leads marketing. Both are involved directly in everything the company ships."
          }
          className={styles.heading}
        />

        <div className={compact ? styles.compactList : styles.grid}>
          {founders.map((founder, index) => (
            <article
              key={founder.slug}
              className={compact ? styles.compactItem : styles.item}
              aria-labelledby={`founder-${founder.slug}`}
            >
              <div className={compact ? styles.compactIdentity : styles.identity}>
                {founder.portrait ? (
                  <img
                    src={founder.portrait.src}
                    alt={founder.portrait.alt}
                    width={160}
                    height={160}
                    className={styles.portrait}
                  />
                ) : (
                  <span className={styles.monogram} aria-hidden="true">
                    {initialsOf(founder.fullName)}
                  </span>
                )}
                {!compact && (
                  <span className={styles.index} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
              </div>

              <div className={styles.body}>
                <div className={styles.nameRow}>
                  <h3 id={`founder-${founder.slug}`} className={styles.name}>
                    {founder.fullName}
                  </h3>
                  {founder.linkedin ? (
                    <a
                      href={founder.linkedin}
                      className={styles.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SquareArrowOutUpRight size={16} aria-hidden="true" />
                      <span className="visually-hidden">
                        {founder.fullName} on LinkedIn (opens in a new tab)
                      </span>
                    </a>
                  ) : null}
                </div>

                <p className={styles.title}>{founder.title}</p>
                <p className={styles.bio}>{compact ? founder.focusLine : founder.bio}</p>

                {!compact && (
                  <div className={styles.responsibilities}>
                    <h4 className={styles.responsibilitiesTitle}>Responsibilities</h4>
                    <ul className={styles.responsibilityList}>
                      {founder.responsibilities.map((item) => (
                        <li key={item} className={styles.responsibility}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {compact && (
          <p className={styles.compactLinkRow}>
            <Link href="/about#founders" className={styles.compactLink}>
              Full founder profiles
            </Link>
          </p>
        )}
      </Container>
    </section>
  );
}
