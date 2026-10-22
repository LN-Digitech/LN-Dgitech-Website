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
    "Get in touch with LN Digitech. Whether it is a general enquiry, a partnership or a collaboration, we read every message and typically respond within one to two business days.",
  path: "/contact",
});

const whatToExpect = [
  "We read every message personally: no autoresponders with a sales sequence attached.",
  "A useful response typically arrives within one to two business days.",
  "There is no product to purchase yet, so nothing is quoted and nothing is upsold.",
  "Partnership and collaboration enquiries go directly to the founders.",
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
        description="Choose an enquiry type and tell us what it is about. Fields marked with an asterisk are required."
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
                  If your enquiry is about a potential product or partnership, a sentence or
                  two of context on who you are and what you have in mind helps us reply
                  usefully the first time.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
