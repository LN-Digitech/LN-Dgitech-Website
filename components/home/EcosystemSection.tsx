import { ChevronDown } from "lucide-react";
import styles from "./EcosystemSection.module.css";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessSuite, futureVision, products } from "@/data/products";

/**
 * Brand-architecture section: LN Digitech -> BusinessOS -> products,
 * plus the honest long-term vision of technology outside the business
 * software portfolio. Future areas are presented as vision only and are
 * never linked to pages that do not exist.
 */
export function EcosystemSection() {
  return (
    <section className={styles.section} aria-labelledby="ecosystem-heading">
      <Container>
        <SectionHeading
          eyebrow="Brand architecture"
          title="One company, a growing portfolio."
          description={`${businessSuite.parent} is the parent brand. ${businessSuite.name} holds its business software products, and more technology is planned beyond them as the company grows.`}
          id="ecosystem-heading"
        />

        <div className={styles.layout}>
          <div
            className={styles.diagram}
            aria-label={`Brand hierarchy: ${businessSuite.parent}, ${businessSuite.name}, then its products`}
          >
            <div className={`${styles.level} ${styles.levelParent}`}>
              <span className={styles.levelLabel}>Parent brand</span>
              <span className={styles.levelName}>{businessSuite.parent}</span>
              <span className={styles.levelNote}>Technology company</span>
            </div>

            <ChevronDown size={18} aria-hidden="true" className={styles.connector} />

            <div className={`${styles.level} ${styles.levelSuite}`}>
              <span className={styles.levelLabel}>Business software portfolio</span>
              <span className={styles.levelName}>{businessSuite.name}</span>
              <span className={styles.levelNote}>Business software products</span>
            </div>

            <ChevronDown size={18} aria-hidden="true" className={styles.connector} />

            <ul className={styles.chips}>
              {products.map((product) => (
                <li key={product.slug} className={styles.chip}>
                  <span className={styles.chipDot} aria-hidden="true" />
                  {product.name}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.vision}>
            <span className={styles.visionBadge}>Long-term vision</span>
            <h3 className={styles.visionTitle}>Beyond business software</h3>
            <p className={styles.visionText}>
              {businessSuite.name} is where LN Digitech starts, not where it stops. As the
              company grows, it may develop technology products outside the
              business-software portfolio:
            </p>
            <ul className={styles.visionList}>
              {futureVision.map((area) => (
                <li key={area} className={styles.visionItem}>
                  {area}
                </li>
              ))}
            </ul>
            <p className={styles.visionNote}>
              These are directions, not announced products. Nothing here links to pages or
              downloads because none of them exist yet.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
