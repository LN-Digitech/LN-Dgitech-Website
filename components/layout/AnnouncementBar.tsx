import Link from "next/link";
import { Megaphone } from "lucide-react";
import styles from "./AnnouncementBar.module.css";
import { siteConfig } from "@/data/site";

/**
 * Optional announcement bar.
 *
 * Controlled entirely from `data/site.ts` → `announcement`. When
 * `enabled` is false or no text is set, nothing renders. Do not use this for
 * fabricated promotions or false urgency.
 */
export function AnnouncementBar() {
  const { enabled, text, linkHref, linkLabel } = siteConfig.announcement;

  if (!enabled || !text) return null;

  const content = (
    <>
      <Megaphone size={15} aria-hidden="true" className={styles.icon} />
      <span>{text}</span>
      {linkHref && linkLabel ? <span className={styles.linkLabel}>{linkLabel} →</span> : null}
    </>
  );

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {linkHref && linkLabel ? (
          <Link href={linkHref} className={styles.link}>
            {content}
          </Link>
        ) : (
          <p className={styles.text}>{content}</p>
        )}
      </div>
    </div>
  );
}
