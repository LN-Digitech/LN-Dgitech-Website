import styles from "../legal.module.css";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { buildPageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms governing use of the LN Digitech website, including package pricing disclaimers, intellectual property and limitation of liability.",
  path: "/terms",
});

const sections = [
  {
    heading: "Agreement to these terms",
    paragraphs: [
      "By using this website you agree to these terms. If you do not agree, please do not use the site. These terms govern website use only — client engagements are governed by a separate signed agreement.",
    ],
  },
  {
    heading: "Service packages and pricing",
    paragraphs: [
      "Package names, price ranges and deliverables published on this website are proposed starting ranges in Indian rupees. They are not final contractual offers. Final scope, deliverables and pricing are confirmed only in a written proposal accepted by both parties.",
      "Ad spend, third-party software subscriptions, hosting and domain fees, premium AI tool credits and applicable taxes are billed separately unless a signed proposal explicitly states otherwise.",
      "Inclusion of a service in a package description does not mean every service the company offers is included in every tier. Anything not listed in the signed scope is not included.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "This website, including its text, design, code and brand marks, is the property of LN Digitech unless otherwise stated. You may not reproduce material from this site for commercial purposes without prior written permission.",
      "Portfolio entries labelled as concept studies are demonstrations of capability, not representations of paid client work. Client projects are published only with permission.",
    ],
  },
  {
    heading: "No guarantees",
    paragraphs: [
      "Nothing on this website constitutes a guarantee of search rankings, AI platform inclusion, traffic, leads, conversions, revenue or business outcomes. Marketing and technology results depend on factors outside any agency's control, including competition, platform changes, market conditions and your own implementation.",
      "Articles and guides on this site reflect general professional opinion at the time of writing and are not bespoke advice for your specific situation.",
    ],
  },
  {
    heading: "Third-party links and services",
    paragraphs: [
      "This website may link to third-party services for convenience. LN Digitech does not control and is not responsible for the content, policies or practices of third-party sites.",
    ],
  },
  {
    heading: "Acceptable use",
    paragraphs: [
      "You may not use this website to transmit malicious code, attempt unauthorised access to systems, scrape content at scale, or submit false or abusive inquiries through the contact form. Submissions that trigger spam defences may be discarded without notice.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, LN Digitech is not liable for indirect, incidental or consequential damages arising from use of this website. Nothing in these terms excludes liability that cannot be excluded under applicable law.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of India, without regard to conflict-of-law principles. Courts in the applicable jurisdiction of LN Digitech's registered place of business shall have exclusive jurisdiction over disputes relating to these website terms.",
    ],
  },
  {
    heading: "Changes",
    paragraphs: [
      "We may update these terms from time to time. Continued use of the site after changes are published constitutes acceptance of the revised terms.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [`Questions about these terms: ${siteConfig.contact.email}.`],
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms" },
        ])}
      />

      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Terms governing use of the LN Digitech website."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms" },
        ]}
        variant="compact"
      />

      <section className={styles.body}>
        <Container>
          <div className={styles.content}>
            <p className={styles.effective}>Effective date: 18 October 2026</p>
            {sections.map((section) => (
              <section key={section.heading} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
