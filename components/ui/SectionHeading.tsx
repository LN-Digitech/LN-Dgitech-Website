import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Optional small label above the heading. */
  eyebrow?: string;
  title: string;
  /** Optional supporting paragraph. */
  description?: ReactNode;
  align?: "start" | "center";
  /** Optional element rendered after the description (CTAs etc.). */
  actions?: ReactNode;
  className?: string;
  /** Heading level for correct document outline. Defaults to h2. */
  as?: "h2" | "h3";
}

/**
 * Standardised section heading with optional eyebrow, description and
 * trailing actions. Keeps heading levels correct across pages.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  actions,
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn(styles.heading, align === "center" && styles.centered, className)}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <Heading className={styles.title}>{title}</Heading>
      {description ? <p className={styles.description}>{description}</p> : null}
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </div>
  );
}
