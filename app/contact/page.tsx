import { Mail } from "lucide-react";
import styles from "./contact.module.css";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";
import { buildPageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact | LN Digitech",
  description:
    "Ask about an LN Digitech product, register early interest in upcoming products, or contact us about anything else. We read every message and typically respond within one to two business days.",
  path: "/contact",
});

const whatToExpect = [
  "We read every message personally: no autoresponders with a sales sequence attached.",
  "Product questions and early-interest messages go directly to the founders.",
  "A useful response typically arrives within one to two business days.",
  "Nothing is on sale yet, so nothing is quoted and nothing is upsold.",
];

/**
 * Contact page.
 *
 * Deliberately does not ask visitors to select a product or service: none
 * are finalised. The form captures a topic and a free-text message only.
 */
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
        title="Get in touch."
        description="Ask about a product, express interest in an upcoming product, or contact LN Digitech about anything else. Fields marked with an asterisk are required."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className={styles.body} aria-label="Contact form">
        <Container>
          <div className={styles.layout}>
            <div className={styles.formColumn}>
              <ContactForm />
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
                    Useful for sending briefs, documents or links before we reply.
                  </p>
                </div>
              ) : null}

              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Before you send</h2>
                <p className={styles.cardText}>
                  If you are asking about a specific product (LN Engage, LN Manage or
                  LN One), mention it in your message. A
                  sentence of context on your business helps us reply usefully the first
                  time.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
