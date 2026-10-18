import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";
import styles from "./service.module.css";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getServiceBySlug, getServicesSorted, getRelatedServices } from "@/data/services";
import { buildPageMetadata, breadcrumbJsonLd, JsonLd, serviceJsonLd } from "@/lib/seo";
import { siteConfig } from "@/data/site";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getServicesSorted().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildPageMetadata({
    title: `${service.name} — ${service.category}`,
    description: service.summary,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);
  const Icon = service.icon;

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: service.name,
            description: service.summary,
            slug: service.slug,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.shortName, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={service.category}
        title={service.name}
        description={service.summary}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.shortName, path: `/services/${service.slug}` },
        ]}
      >
        <div className={styles.heroActions}>
          <Link href={`/contact?service=${encodeURIComponent(service.name)}`} className={styles.heroCta}>
            Discuss this service
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <span className={styles.heroIcon} aria-hidden="true">
            <Icon size={22} />
          </span>
        </div>
      </PageHero>

      <div className={styles.body}>
        <Container>
          <div className={styles.layout}>
            <div className={styles.main}>
              <section aria-labelledby="overview-heading" className={styles.section}>
                <h2 id="overview-heading" className={styles.sectionTitle}>
                  How this service works
                </h2>
                <p className={styles.prose}>{service.description}</p>
              </section>

              <section aria-labelledby="problems-heading" className={styles.section}>
                <h2 id="problems-heading" className={styles.sectionTitle}>
                  Problems this addresses
                </h2>
                <ul className={styles.problemList}>
                  {service.problems.map((problem) => (
                    <li key={problem} className={styles.problemItem}>
                      <span className={styles.problemBullet} aria-hidden="true" />
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="deliverables-heading" className={styles.section}>
                <h2 id="deliverables-heading" className={styles.sectionTitle}>
                  What you receive
                </h2>
                <ul className={styles.deliverableList}>
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className={styles.deliverableItem}>
                      <Check size={17} aria-hidden="true" className={styles.check} />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="process-heading" className={styles.section}>
                <h2 id="process-heading" className={styles.sectionTitle}>
                  Engagement process
                </h2>
                <ol className={styles.processList}>
                  {service.process.map((step, index) => (
                    <li key={step.step} className={styles.processItem}>
                      <span className={styles.processNumber} aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className={styles.processTitle}>{step.step}</h3>
                        <p className={styles.processDetail}>{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section aria-labelledby="limitations-heading" className={styles.limitations}>
                <div className={styles.limitationsHeader}>
                  <AlertTriangle size={19} aria-hidden="true" />
                  <h2 id="limitations-heading" className={styles.limitationsTitle}>
                    Honest limitations
                  </h2>
                </div>
                <ul className={styles.limitationsList}>
                  {service.limitations.map((limitation) => (
                    <li key={limitation} className={styles.limitationItem}>
                      {limitation}
                    </li>
                  ))}
                </ul>
              </section>

              {service.faqs.length > 0 ? (
                <section aria-labelledby="faq-heading" className={styles.section}>
                  <h2 id="faq-heading" className={styles.sectionTitle}>
                    Common questions
                  </h2>
                  <FAQAccordion items={service.faqs} />
                </section>
              ) : null}
            </div>

            <aside className={styles.sidebar} aria-label="Service details">
              <div className={styles.sidebarCard}>
                <Badge tone="blue">{service.category}</Badge>
                <h2 className={styles.sidebarTitle}>Is this right for you?</h2>
                <p className={styles.sidebarIntro}>This service tends to fit organisations that:</p>
                <ul className={styles.suitableList}>
                  {service.suitableFor.map((item) => (
                    <li key={item} className={styles.suitableItem}>
                      <Check size={15} aria-hidden="true" className={styles.check} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.name)}`}
                  className={styles.sidebarCta}
                >
                  Start a conversation
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>

          {related.length > 0 ? (
            <section aria-labelledby="related-heading" className={styles.related}>
              <h2 id="related-heading" className={styles.relatedTitle}>
                Related services
              </h2>
              <ul className={styles.relatedGrid}>
                {related.map((relatedService) => {
                  const RelatedIcon = relatedService.icon;
                  return (
                    <li key={relatedService.slug}>
                      <Link href={`/services/${relatedService.slug}`} className={styles.relatedCard}>
                        <span className={styles.relatedIcon}>
                          <RelatedIcon size={18} aria-hidden="true" />
                        </span>
                        <span className={styles.relatedBody}>
                          <span className={styles.relatedName}>{relatedService.shortName}</span>
                          <span className={styles.relatedSummary}>{relatedService.summary}</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : null}
        </Container>
      </div>

      <FinalCTA />
      <p className={styles.legalNote}>
        <Container>
          <span>
            Engagements under this service are confirmed in a written proposal. See our{" "}
            <Link href="/terms" className={styles.inlineLink}>
              terms &amp; conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className={styles.inlineLink}>
              privacy policy
            </Link>
            . Enquiries:{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className={styles.inlineLink}>
              {siteConfig.contact.email}
            </a>
            .
          </span>
        </Container>
      </p>
    </>
  );
}
