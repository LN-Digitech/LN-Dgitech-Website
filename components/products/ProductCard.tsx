import type { Product } from "@/types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  /** compact = vertical homepage card, full = wide card on /products. */
  variant?: "compact" | "full";
  /** Optional anchor id (use only once per page). */
  id?: string;
}

/**
 * Decorative dashboard mockup.
 *
 * Pure CSS wireframe (skeleton bars only). It deliberately contains no
 * readable numbers or text so it can never be mistaken for real product
 * data or a screenshot of a shipped product. Hidden from assistive tech.
 */
function ProductVisual({ product }: { product: Product }) {
  if (product.visual === "inventory") {
    return (
      <div className={styles.mockWindow} aria-hidden="true">
        <div className={styles.mockTop}>
          <span className={styles.mockDot} />
          <span className={styles.mockDot} />
          <span className={styles.mockDot} />
          <span className={styles.mockLabel}>{product.slug}</span>
        </div>
        <div className={styles.mockMain}>
          <div className={styles.mockHeaderRow}>
            <span className={`${styles.mockBar} ${styles.mockBarMed}`} />
            <span className={styles.mockPill} />
          </div>
          <div className={styles.mockStats}>
            <span className={styles.mockStat}>
              <span className={`${styles.mockBar} ${styles.mockBarAccent}`} />
              <span className={`${styles.mockBar} ${styles.mockBarShort}`} />
            </span>
            <span className={styles.mockStat}>
              <span className={`${styles.mockBar} ${styles.mockBarCyan}`} />
              <span className={`${styles.mockBar} ${styles.mockBarShort}`} />
            </span>
            <span className={styles.mockStat}>
              <span className={`${styles.mockBar} ${styles.mockBarMed}`} />
              <span className={`${styles.mockBar} ${styles.mockBarShort}`} />
            </span>
          </div>
          <div className={styles.mockTable}>
            <span className={styles.mockRow}>
              <span className={`${styles.mockBar} ${styles.mockBarWide}`} />
              <span className={`${styles.mockBar} ${styles.mockBarShort}`} />
            </span>
            <span className={styles.mockRow}>
              <span className={`${styles.mockBar} ${styles.mockBarMed}`} />
              <span className={`${styles.mockBar} ${styles.mockBarShort}`} />
            </span>
            <span className={styles.mockRow}>
              <span className={`${styles.mockBar} ${styles.mockBarWide}`} />
              <span className={`${styles.mockBar} ${styles.mockBarShort}`} />
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (product.visual === "integrated") {
    return (
      <div className={styles.mockWindow} aria-hidden="true">
        <div className={styles.mockTop}>
          <span className={styles.mockDot} />
          <span className={styles.mockDot} />
          <span className={styles.mockDot} />
          <span className={styles.mockLabel}>{product.slug}</span>
        </div>
        <div className={styles.mockBody}>
          <div className={styles.mockSide}>
            <span className={`${styles.mockSideBar} ${styles.mockSideBarActive}`} />
            <span className={styles.mockSideBar} />
            <span className={styles.mockSideBar} />
            <span className={styles.mockSideBar} />
          </div>
          <div className={styles.mockMain}>
            <div className={styles.mockHeaderRow}>
              <span className={`${styles.mockBar} ${styles.mockBarMed}`} />
              <span className={styles.mockPill} />
            </div>
            <div className={styles.mockSplit}>
              <div className={styles.mockChart}>
                <span className={styles.mockChartCol} style={{ height: "45%" }} />
                <span className={styles.mockChartCol} style={{ height: "72%" }} />
                <span className={styles.mockChartCol} style={{ height: "58%" }} />
                <span className={styles.mockChartCol} style={{ height: "88%" }} />
                <span className={styles.mockChartCol} style={{ height: "64%" }} />
              </div>
              <div className={styles.mockList}>
                <span className={`${styles.mockBar} ${styles.mockBarWide}`} />
                <span className={`${styles.mockBar} ${styles.mockBarMed}`} />
                <span className={`${styles.mockBar} ${styles.mockBarAccent}`} />
                <span className={`${styles.mockBar} ${styles.mockBarWide}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // crm (default)
  return (
    <div className={styles.mockWindow} aria-hidden="true">
      <div className={styles.mockTop}>
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockLabel}>{product.slug}</span>
      </div>
      <div className={styles.mockBody}>
        <div className={styles.mockSide}>
          <span className={`${styles.mockSideBar} ${styles.mockSideBarActive}`} />
          <span className={styles.mockSideBar} />
          <span className={styles.mockSideBar} />
        </div>
        <div className={styles.mockMain}>
          <div className={styles.mockHeaderRow}>
            <span className={`${styles.mockBar} ${styles.mockBarMed}`} />
            <span className={styles.mockPill} />
          </div>
          <div className={styles.mockPipeline}>
            <span className={styles.mockCol}>
              <span className={`${styles.mockBar} ${styles.mockBarAccent}`} />
              <span className={`${styles.mockBar} ${styles.mockBarShort}`} />
            </span>
            <span className={styles.mockCol}>
              <span className={`${styles.mockBar} ${styles.mockBarCyan}`} />
              <span className={`${styles.mockBar} ${styles.mockBarMed}`} />
              <span className={`${styles.mockBar} ${styles.mockBarShort}`} />
            </span>
            <span className={styles.mockCol}>
              <span className={`${styles.mockBar} ${styles.mockBarShort}`} />
              <span className={`${styles.mockBar} ${styles.mockBarMed}`} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Product card used on the homepage and the /products page.
 *
 * Renders honest status badges straight from `data/products.ts`; no
 * features, pricing, dates, screenshots or metrics are invented here.
 */
export function ProductCard({ product, variant = "compact", id }: ProductCardProps) {
  return (
    <article
      id={id}
      className={styles.card}
      data-variant={variant}
      data-status={product.status}
    >
      <div className={styles.visual}>
        <ProductVisual product={product} />
      </div>
      <div className={styles.content}>
        <p className={styles.category}>{product.category}</p>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.purpose}>{product.purpose}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.footer}>
          <span className={styles.status} data-status={product.status}>
            {product.status}
          </span>
          {product.suite ? <span className={styles.suite}>{product.suite}</span> : null}
        </p>
      </div>
    </article>
  );
}
