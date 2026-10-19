"use client";

import { useMemo, useState } from "react";
import styles from "./portfolio.module.css";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types";

const filters: Array<"All" | ProjectCategory> = [
  "All",
  "Brand Identity",
  "Website",
  "E-commerce",
  "Digital Marketing",
  "Software",
  "AI Media",
];

interface PortfolioGridProps {
  projects: Project[];
}

/**
 * Filterable project grid.
 *
 * Projects are marked as concept studies where they are not client work, * see data/projects.ts. Filtering is a client-side enhancement over
 * server-rendered content.
 */
export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active, projects],
  );

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter projects by category">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={cn(styles.filter, active === filter && styles.filterActive)}
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className={styles.count} role="status" aria-live="polite">
        Showing {visible.length} of {projects.length} project{projects.length === 1 ? "" : "s"}
      </p>

      {visible.length === 0 ? (
        <p className={styles.empty}>
          No projects in this category yet. Try another filter, or get in touch to discuss
          relevant work.
        </p>
      ) : (
        <ul className={styles.grid}>
          {visible.map((project) => (
            <li key={project.slug} id={project.slug} className={styles.item}>
              <article className={styles.card}>
                <div className={`${styles.cover} ${styles[`cover_${project.accent}`]}`}>
                  <span className={styles.coverMark} aria-hidden="true">
                    {project.name
                      .split(" ")
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join("")}
                  </span>
                  <div className={styles.coverMeta}>
                    {project.isConcept ? (
                      <Badge tone="warning">Concept study</Badge>
                    ) : (
                      <Badge tone="cyan">Client work</Badge>
                    )}
                    <Badge tone="neutral">{project.year}</Badge>
                  </div>
                </div>
                <div className={styles.body}>
                  <p className={styles.industry}>{project.industry}</p>
                  <h2 className={styles.title}>{project.name}</h2>
                  <p className={styles.summary}>{project.summary}</p>
                  <p className={styles.description}>{project.description}</p>
                  <ul className={styles.services}>
                    {project.services.map((service) => (
                      <li key={service} className={styles.serviceTag}>
                        {service}
                      </li>
                    ))}
                  </ul>
                  {project.results && project.results.length > 0 ? (
                    <div className={styles.results}>
                      <h3 className={styles.resultsTitle}>Verified results</h3>
                      <ul className={styles.resultsList}>
                        {project.results.map((result) => (
                          <li key={result} className={styles.resultItem}>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className={styles.noResults}>
                      No performance figures are published for this project.
                    </p>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
