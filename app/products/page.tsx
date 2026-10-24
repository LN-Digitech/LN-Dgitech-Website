import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import styles from "./products.module.css";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/products/ProductCard";
import { FinalCTA } from "@/components/home/FinalCTA";
import { businessSuite, futureVision, products, productsHonestyNote } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: `The products LN Digitech is building under the ${businessSuite.name} portfolio, starting with LN Manage for inventory and billing. Statuses shown honestly.`,
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

/**
 * Products page.
 *
 * Introduces the BusinessOS portfolio and its product concepts with
 * honest, configurable statuses, followed by the long-term vision beyond
 * business software. No launch dates, pricing or features are invented.
 */
export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Products in the works."
        description={`${businessSuite.name} is LN Digitech's business software portfolio. Each product below shows its real status.`}
        breadcrumbs={breadcrumbs}
      />

      <section className={styles.section} aria-labelledby="product-list-heading">
        <Container>
          <div className={styles.architecture} aria-label="Portfolio structure">
            <span className={styles.archNode}>{businessSuite.parent}</span>
            <span className={styles.archArrow} aria-hidden="true">
              →
            </span>
            <span className={`${styles.archNode} ${styles.archNodeAccent}`}>
              {businessSuite.name}
            </span>
            <span className={styles.archArrow} aria-hidden="true">
              →
            </span>
            <span className={styles.archNode}>Business software products</span>
          </div>

          <h2 id="product-list-heading" className="visually-hidden">
            Announced products
          </h2>

          <ul className={styles.list}>
            {products.map((product) => (
              <li key={product.slug}>
                <ProductCard product={product} variant="full" id={product.slug} />
              </li>
            ))}
          </ul>

          <p className={styles.note}>{productsHonestyNote}</p>

          <section aria-labelledby="beyond-heading" className={styles.beyond}>
            <h2 id="beyond-heading" className={styles.beyondTitle}>
              <Layers size={19} aria-hidden="true" />
              Beyond {businessSuite.name}
            </h2>
            <p className={styles.beyondText}>
              LN Digitech may also develop technology products outside the business
              software portfolio over time:
            </p>
            <ul className={styles.beyondList}>
              {futureVision.map((area) => (
                <li key={area} className={styles.beyondItem}>
                  {area}
                </li>
              ))}
            </ul>
            <p className={styles.note}>
              These are long-term directions, not announced products. When LN Digitech
              commits to one, it will appear on this page with an honest status.
            </p>
          </section>

          <p className={styles.linkRow}>
            <Link href="/contact" className={styles.link}>
              Ask about a product or register interest
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </p>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
