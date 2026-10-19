import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";
import { siteConfig } from "@/data/site";
import { getServicesSorted } from "@/data/services";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

/**
 * Site footer.
 *
 * Contact channels and social links render only when genuine values exist in
 * `data/site.ts`. Nothing is invented here.
 */
export function Footer() {
  const services = getServicesSorted();
  const year = new Date().getFullYear();
  const hasContact =
    Boolean(siteConfig.contact.email) ||
    Boolean(siteConfig.contact.phone) ||
    Boolean(siteConfig.contact.address);

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logoLink} aria-label={`${siteConfig.name} home`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteConfig.logo.srcLight}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                className={styles.logo}
              />
            </Link>
            <p className={styles.tagline}>{siteConfig.tagline}</p>
            <p className={styles.intro}>
              LN Digitech is a full-service digital agency working across search, creative,
              engineering, commerce and AI-assisted production. We help businesses build
              brands that hold up, technically, creatively and commercially.
            </p>
            {hasContact ? (
              <ul className={styles.contactList}>
                {siteConfig.contact.email ? (
                  <li>
                    <a href={`mailto:${siteConfig.contact.email}`} className={styles.contactLink}>
                      <Mail size={16} aria-hidden="true" />
                      {siteConfig.contact.email}
                    </a>
                  </li>
                ) : null}
                {siteConfig.contact.phone ? (
                  <li>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                      className={styles.contactLink}
                    >
                      <Phone size={16} aria-hidden="true" />
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                ) : null}
                {siteConfig.contact.address ? (
                  <li>
                    <span className={styles.contactText}>
                      <MapPin size={16} aria-hidden="true" />
                      {siteConfig.contact.address}
                    </span>
                  </li>
                ) : null}
              </ul>
            ) : null}
          </div>

          <nav aria-label="Footer services" className={styles.column}>
            <h2 className={styles.columnTitle}>Services</h2>
            <ul className={`${styles.linkList} ${styles.linkListSplit}`}>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className={styles.link}>
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer navigation" className={styles.column}>
            <h2 className={styles.columnTitle}>Company</h2>
            <ul className={styles.linkList}>
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {siteConfig.social.length > 0 ? (
            <nav aria-label="Social media" className={styles.column}>
              <h2 className={styles.columnTitle}>Follow</h2>
              <ul className={styles.linkList}>
                {siteConfig.social.map((item) => (
                  <li key={item.platform}>
                    <a
                      href={item.url}
                      className={styles.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.platform}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className={styles.legalList}>
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.legalLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
