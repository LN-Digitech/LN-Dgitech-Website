import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesOverview.module.css";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedServices } from "@/data/services";

/**
 * Homepage services overview. Uses the same ServiceCard data source as the
 * services listing page so descriptions never drift apart.
 */
export function ServicesOverview() {
  const featured = getFeaturedServices();

  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Seven disciplines. One accountable team."
          description="Each engagement draws on whichever of these your business actually needs — not a fixed bundle. Every service below has its own scope, process and honest limitations."
          actions={
            <Link href="/services" className={styles.allLink}>
              All services
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          }
        />
        <ul className={styles.grid}>
          {featured.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.slug} className={styles.cardWrapper}>
                <Link href={`/services/${service.slug}`} className={styles.card}>
                  <span className={styles.iconWrap}>
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className={styles.cardTitle}>{service.name}</h3>
                  <p className={styles.cardSummary}>{service.summary}</p>
                  <span className={styles.cardLink}>
                    Learn more
                    <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
