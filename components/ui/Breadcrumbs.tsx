import Link from "next/link";
import styles from "./Breadcrumbs.module.css";
import { Fragment } from "react";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Accessible breadcrumb trail. Renders an ordered list inside a nav landmark
 * with aria-current on the final (current) page.
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`${styles.nav} ${className ?? ""}`}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <Fragment key={item.path}>
              <li className={styles.item}>
                {isLast ? (
                  <span aria-current="page" className={styles.current}>
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className={styles.link}>
                    {item.name}
                  </Link>
                )}
              </li>
              {!isLast ? (
                <li aria-hidden="true" className={styles.separator}>
                  /
                </li>
              ) : null}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
