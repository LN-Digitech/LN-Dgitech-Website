import styles from "../legal.module.css";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { buildPageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How LN Digitech collects, uses and protects personal information submitted through this website, including contact-form data and analytics.",
  path: "/privacy-policy",
});

const sections = [
  {
    heading: "What we collect",
    paragraphs: [
      `When you submit the contact form, we receive the information you choose to provide: your name, email address, phone number (if given), company or brand (if given), the enquiry type you select, your message, and your consent record.`,
      `The website may also collect standard technical data such as pages visited, browser type and approximate location through privacy-respecting analytics, where configured. We do not use this data to build advertising profiles.`,
    ],
  },
  {
    heading: "How we use it",
    paragraphs: [
      "We use contact-form submissions solely to review your inquiry and respond to you. Your details are not sold, rented or shared with third parties for their marketing purposes.",
      "If your inquiry proceeds to a working relationship, the information you provided becomes part of the project record under the terms of the signed agreement.",
    ],
  },
  {
    heading: "Email delivery",
    paragraphs: [
      "Contact-form submissions are sent through a third-party form service (currently Web3Forms), which forwards the submission to our team by email. Your submission data is transmitted to that provider for the purpose of delivering your inquiry. Their handling of data is governed by their own privacy policy.",
      "We do not add you to any mailing list as a result of contacting us. If we ever offer a newsletter, subscription will be separate, explicit and reversible.",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "This website does not set advertising or tracking cookies. If analytics are enabled, they are configured to measure site usage without identifying individual visitors.",
    ],
  },
  {
    heading: "Data retention",
    paragraphs: [
      "Contact-form notifications are retained in our email system for as long as needed to manage the enquiry and any resulting conversation, then deleted according to our internal retention practices. If you want your inquiry details removed sooner, contact us using the address below.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "You may request access to, correction of, or deletion of the personal information we hold about you, subject to any legal record-keeping obligations. To make a request, email the address below. We will respond within a reasonable period.",
    ],
  },
  {
    heading: "Data security",
    paragraphs: [
      "Form submissions are validated in your browser before being sent, transmitted over HTTPS, and delivered to a configured inbox through an authenticated provider. Access to that inbox is restricted to team members who need it to respond to enquiries.",
      "No internet transmission is completely secure. If we become aware of a breach affecting your information, we will notify affected individuals and the relevant authorities as required by applicable law.",
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "This website is directed at businesses and is not intended for children under 16. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy to reflect changes in our practices or applicable law. The current version and its effective date are always published on this page.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `For any question about this policy or your data, email ${siteConfig.contact.email}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How LN Digitech handles personal information submitted through this website."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
        variant="compact"
      />

      <section className={styles.body}>
        <Container>
          <div className={styles.content}>
            <p className={styles.effective}>Effective date: 22 October 2026</p>
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
