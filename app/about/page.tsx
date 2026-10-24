import { Target, Shield, Users, Wrench } from "lucide-react";
import styles from "./about.module.css";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FoundersSection } from "@/components/founders/FoundersSection";
import { founders } from "@/data/founders";
import { buildPageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export const metadata = buildPageMetadata({
  title: "About | LN Digitech",
  description:
    "LN Digitech is a technology company building software products and technology solutions, starting with the BusinessOS portfolio. Meet the founders and learn what we are building.",
  path: "/about",
});

const principles = [
  {
    icon: Target,
    title: "Problems before technology",
    detail:
      "We choose to build only where we understand the problem first. A product exists to solve something specific, not to demonstrate a technology stack.",
  },
  {
    icon: Shield,
    title: "Honest claims only",
    detail:
      "We will not publish product features, pricing, dates or traction that are not final. Where something is undecided, this site says so instead of filling the gap with marketing language.",
  },
  {
    icon: Users,
    title: "Small team, direct access",
    detail:
      "LN Digitech is run by its two founders. Whoever you speak to is someone who builds or ships the work, not an account layer in between.",
  },
  {
    icon: Wrench,
    title: "Built to be maintained",
    detail:
      "Software that cannot be maintained is a liability. We favour documented, understandable systems that can grow feature by feature long after launch.",
  },
];

/**
 * About page.
 *
 * Introduces LN Digitech as an early-stage product-oriented technology
 * startup. Claims are limited to what is true today: who the founders are,
 * what the company is working toward, and what it explicitly does not claim.
 */
export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          ...founders.map((founder) => ({
            "@type": "Person",
            name: founder.fullName,
            jobTitle: founder.title,
            url: absoluteUrl("/about#founders", siteConfig.url),
            worksFor: { "@type": "Organization", name: siteConfig.name },
          })),
        ]}
      />

      <PageHero
        eyebrow="About LN Digitech"
        title="A technology company built around what comes next."
        description="LN Digitech builds software products and technology solutions, starting with the BusinessOS portfolio of business software. Nothing has launched yet, and this page will not pretend otherwise."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        variant="dark"
      />

      <section className={styles.body} aria-label="About LN Digitech">
        <Container>
          <div className={styles.intro}>
            <h2 className={styles.introTitle}>Where we are</h2>
            <div className={styles.introProse}>
              <p>
                LN Digitech is a technology company founded by Lucky Joshi and Nishchay
                Singh Mehra to build practical software products. Its first portfolio is{" "}
                <a href="/products" className={styles.inlineLink}>
                  BusinessOS
                </a>
                , its business software portfolio, with its first product concept, LN
                Manage, covering inventory and billing.
              </p>
              <p>
                The company is early-stage. Those products are concepts in development or
                planning, not things you can buy today, and this site describes them with
                honest statuses rather than marketing language. The same discipline applies
                to everything else here: no invented customers, statistics, launch dates or
                pricing.
              </p>
              <p>
                The long-term direction is broader than business software. As LN Digitech
                grows it may develop AI-powered applications, developer tools,
                industry-specific products and other technology solutions. When a product
                is ready to be announced properly, it appears on the{" "}
                <a href="/products" className={styles.inlineLink}>
                  products page
                </a>{" "}
                first, with an accurate status.
              </p>
            </div>
          </div>

          <section aria-labelledby="principles-heading" className={styles.principles}>
            <h2 id="principles-heading" className={styles.sectionTitle}>
              How we work
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

          <section aria-labelledby="honest-heading" className={styles.honest}>
            <h2 id="honest-heading" className={styles.honestTitle}>
              What this site does not claim
            </h2>
            <p className={styles.honestText}>
              There are no launch dates, pricing tables, feature lists presented as final,
              customer logos, testimonials or performance statistics on this website,
              because none of those have been approved as fact. Product names and statuses
              are working configuration and may change as decisions are made. When any of
              these become real, they will be published here first, and they will be
              accurate.
            </p>
          </section>
        </Container>
      </section>

      <FoundersSection />

      <FinalCTA />
    </>
  );
}
