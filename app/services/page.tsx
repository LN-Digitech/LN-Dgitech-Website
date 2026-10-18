import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./services.module.css";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getServicesSorted, serviceCategories } from "@/data/services";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Digital Services — SEO, AEO, GEO, AAO, Design, Development & AI",
  description:
    "Explore LN Digitech's services: SEO, AEO, GEO and Assistive Agent Optimization, brand design, web, app and software development, e-commerce, social media, content, consulting and AI media production.",
  path: "/services",
});

export default function ServicesPage() {
  const services = getServicesSorted();

  const byCategory = serviceCategories
    .map((category) => ({
      category,
      items: services.filter((service) => service.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we do, and how each engagement actually works."
        description="Fourteen service lines across discovery, creative, engineering, growth, commerce, AI production and consulting. Each page below explains the problems a service solves, what you receive, how the work runs, and what it cannot guarantee."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]}
      />

      <section className={styles.body} aria-label="Service categories">
        <Container>
          {byCategory.map((group) => (
            <div key={group.category} className={styles.category}>
              <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>{group.category}</h2>
                <span className={styles.categoryCount}>
                  {group.items.length} service{group.items.length === 1 ? "" : "s"}
                </span>
              </div>
              <ul className={styles.grid}>
                {group.items.map((service) => {
                  const Icon = service.icon;
                  return (
                    <li key={service.slug} className={styles.item}>
                      <Link href={`/services/${service.slug}`} className={styles.card}>
                        <div className={styles.cardTop}>
                          <span className={styles.icon}>
                            <Icon size={20} aria-hidden="true" />
                          </span>
                          <Badge tone="neutral">{service.category}</Badge>
                        </div>
                        <h3 className={styles.cardTitle}>{service.name}</h3>
                        <p className={styles.cardSummary}>{service.summary}</p>
                        <span className={styles.cardLink}>
                          View service
                          <ArrowRight size={15} aria-hidden="true" />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
