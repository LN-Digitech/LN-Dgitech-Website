import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./PortfolioPreview.module.css";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { getFeaturedProjects } from "@/data/projects";

/**
 * Homepage portfolio preview. Project cards are honest about concept status
 *, see data/projects.ts.
 */
export function PortfolioPreview() {
  const featured = getFeaturedProjects();

  return (
    <section className={styles.section} aria-labelledby="work-heading">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="How the thinking looks in practice."
          description="The projects below are clearly labelled concept studies produced to demonstrate our approach. Client work is published here only with permission."
          actions={
            <Link href="/portfolio" className={styles.allLink}>
              Full portfolio
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          }
        />
        <ul className={styles.grid}>
          {featured.map((project) => (
            <li key={project.slug} className={styles.item}>
              <Link href={`/portfolio#${project.slug}`} className={styles.card}>
                <div className={`${styles.cover} ${styles[`cover_${project.accent}`]}`}>
                  <span className={styles.coverMark} aria-hidden="true">
                    {project.name
                      .split(" ")
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join("")}
                  </span>
                  {project.isConcept ? (
                    <Badge tone="warning" className={styles.conceptBadge}>
                      Concept study
                    </Badge>
                  ) : null}
                </div>
                <div className={styles.body}>
                  <p className={styles.industry}>{project.industry}</p>
                  <h3 className={styles.title}>{project.name}</h3>
                  <p className={styles.summary}>{project.summary}</p>
                  <ul className={styles.services}>
                    {project.services.map((service) => (
                      <li key={service} className={styles.serviceTag}>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
