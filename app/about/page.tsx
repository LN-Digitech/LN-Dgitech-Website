import { Target, Users, Shield, Layers, Sparkles, Handshake } from "lucide-react";
import styles from "./about.module.css";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { FinalCTA } from "@/components/home/FinalCTA";
import { processSteps } from "@/data/process";
import { buildPageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About — How LN Digitech Works",
  description:
    "LN Digitech is a full-service digital agency combining marketing, design, engineering and AI-assisted production. Learn how we scope, build and support client engagements.",
  path: "/about",
});

const principles = [
  {
    icon: Target,
    title: "Scope before production",
    detail:
      "Every engagement begins with a written scope: what is being delivered, what is deliberately excluded, how the result will be measured, and what we need from you to hit the timeline. Work starts after that document exists — not before.",
  },
  {
    icon: Shield,
    title: "Honest limitations, stated up front",
    detail:
      "No agency can guarantee rankings, AI citations, conversion rates or revenue. On every service page we publish what a service cannot do alongside what it can, so you can make a decision based on accurate expectations.",
  },
  {
    icon: Users,
    title: "Your team stays capable",
    detail:
      "We build systems your team can maintain: documented code, editable content structures, guidelines and handover sessions. Dependence on a single agency is a business risk, and we do not engineer it into engagements.",
  },
  {
    icon: Layers,
    title: "One team across the layers",
    detail:
      "Strategy, creative, content, engineering and measurement sit together. A campaign that needs a landing page, tracking and a CRM change does not get lost between three separate vendors.",
  },
  {
    icon: Sparkles,
    title: "AI used with direction and disclosure",
    detail:
      "We use AI tools where they improve speed or quality — research, production, testing — under human direction. Machine output is reviewed before it ships, and AI-assisted work is disclosed when disclosure is relevant.",
  },
  {
    icon: Handshake,
    title: "Work that holds up after we leave",
    detail:
      "Launches include monitoring plans, documentation and defined support arrangements. Maintenance is scoped rather than assumed, so nothing quietly decays after the project ends.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow="About LN Digitech"
        title="A digital agency built around accountability, not volume."
        description="LN Digitech works with businesses across India and internationally on search, creative, engineering, commerce and AI-assisted production. This page explains how we operate — the parts most agency sites leave out."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]}
        variant="dark"
      />

      <section className={styles.body} aria-label="About LN Digitech">
        <Container>
          <div className={styles.intro}>
            <h2 className={styles.introTitle}>What we actually do</h2>
            <div className={styles.introProse}>
              <p>
                Most businesses that contact us have one of three situations: growth has
                stalled and the digital work behind it is unclear; a significant build —
                website, app, store, internal tool — needs to happen properly the first
                time; or a marketing function exists but produces activity without a
                measurable connection to revenue.
              </p>
              <p>
                We address those situations across thirteen service lines, from SEO, AEO,
                GEO and Assistive Agent Optimization through brand design, web and software
                development, e-commerce, social media, content, consulting and AI-assisted
                media production. The disciplines are broad by design: most real business
                problems cross the boundary between marketing and technology, and solving
                only one half rarely works.
              </p>
              <p>
                What we will not do is sell you a service you do not need. If buying
                off-the-shelf software beats building a custom tool, we say so. If your
                website does not yet deserve an SEO budget, we say that instead. An agency
                relationship only works when the advice is honest enough to occasionally
                cost us the work.
              </p>
            </div>
          </div>

          <section aria-labelledby="principles-heading" className={styles.principles}>
            <h2 id="principles-heading" className={styles.sectionTitle}>
              How we operate
            </h2>
            <ul className={styles.principleGrid}>
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <li key={principle.title} className={styles.principle}>
                    <span className={styles.principleIcon}>
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <h3 className={styles.principleTitle}>{principle.title}</h3>
                    <p className={styles.principleDetail}>{principle.detail}</p>
                  </li>
                );
              })}
            </ul>
          </section>

          <section aria-labelledby="process-heading" className={styles.processSection}>
            <h2 id="process-heading" className={styles.sectionTitle}>
              The process, in detail
            </h2>
            <ol className={styles.processList}>
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <li key={step.number} className={styles.processItem}>
                    <span className={styles.processNumber} aria-hidden="true">
                      {step.number}
                    </span>
                    <div className={styles.processBody}>
                      <span className={styles.processIcon}>
                        <Icon size={17} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className={styles.processTitle}>{step.title}</h3>
                        <p className={styles.processDetail}>{step.detail}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>

          <section aria-labelledby="honest-heading" className={styles.honest}>
            <h2 id="honest-heading" className={styles.honestTitle}>
              What we have not claimed on this site
            </h2>
            <p className={styles.honestText}>
              You will not find invented client logos, fabricated testimonials, made-up
              performance statistics, fake awards or claimed years of experience anywhere on
              this website. Portfolio entries are labelled as concept studies where they are
              not client work. Where verified numbers do not exist, the space they would
              occupy is simply left empty. As the business publishes real case studies,
              testimonials with permission and measured results, those will replace the
              concept entries.
            </p>
          </section>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
