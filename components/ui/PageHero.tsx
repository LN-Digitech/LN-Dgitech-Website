import type { ReactNode } from "react";
import styles from "./PageHero.module.css";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
  variant?: "default" | "compact" | "dark";
  className?: string;
}

/**
 * Standard hero used on interior pages. Keeps page titles consistent and
 * provides breadcrumbs for orientation and SEO.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  variant = "default",
  className,
}: PageHeroProps) {
  return (
    <header className={cn(styles.hero, styles[variant], className)}>
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <Breadcrumbs items={breadcrumbs} className={styles.breadcrumbs} />
        ) : null}
        <div className={styles.content}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          <h1 className={styles.title}>{title}</h1>
          {description ? <p className={styles.description}>{description}</p> : null}
          {children}
        </div>
      </Container>
    </header>
  );
}
