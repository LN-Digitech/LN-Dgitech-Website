import { Suspense } from "react";
import { Mail } from "lucide-react";
import styles from "./contact.module.css";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";
import { buildPageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact — Start a Project with LN Digitech",
  description:
    "Tell LN Digitech about your project. Share your goals, budget range and timeline, and we will respond with honest recommendations — whether or not that includes hiring us.",
  path: "/contact",
});

const whatToExpect = [
  "We read every inquiry personally — no autoresponders with a sales sequence attached.",
  "A useful response typically arrives within one to two business days.",
  "If we are not the right fit for what you need, we will say so, and where we can, point you toward a better option.",
  "Nothing is quoted until scope is understood. The form gives us context; the proposal comes after a conversation.",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Contact"
        title="Tell us what you're trying to build."
        description="The more context you share — goals, constraints, timeline, budget range — the more useful our first response will be. Fields marked with an asterisk are required."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]}
      />

      <section className={styles.body} aria-label="Contact form">
        <Container>
          <div className={styles.layout}>
            <div className={styles.formColumn}>
              <Suspense
                fallback={
                  <p className={styles.loadingForm}>Loading contact form…</p>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            <aside className={styles.sidebar} aria-label="What to expect">
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>What to expect</h2>
                <ul className={styles.expectList}>
                  {whatToExpect.map((item) => (
                    <li key={item} className={styles.expectItem}>
                      <span className={styles.expectBullet} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {siteConfig.contact.email ? (
                <div className={styles.card}>
                  <h2 className={styles.cardTitle}>Prefer email?</h2>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className={styles.emailLink}
                  >
                    <Mail size={17} aria-hidden="true" />
                    {siteConfig.contact.email}
                  </a>
                  <p className={styles.emailNote}>
                    Useful for sending briefs, documents or existing site links before a
                    call.
                  </p>
                </div>
              ) : null}

              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Before you send</h2>
                <p className={styles.cardText}>
                  If you already have a website or social profiles, include the links in your
                  message. Being able to look at your current presence before replying makes
                  our response significantly more useful.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
