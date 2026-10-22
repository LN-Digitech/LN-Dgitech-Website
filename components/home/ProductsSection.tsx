import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ProductsSection.module.css";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products, productsStatusNote } from "@/data/products";

/**
 * Homepage products section.
 *
 * Renders announced products from data/products.ts when any exist; until
 * then it shows an honest placeholder. No fictional product cards.
 */
export function ProductsSection() {
  return (
    <section className={styles.section} aria-labelledby="products-heading">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="What we are building."
          description="LN Digitech is building practical technology products. Nothing has been announced yet, and this page will not invent details to fill the space."
          id="products-heading"
        />

        {products.length > 0 ? (
          <ul className={styles.list}>
            {products.map((product) => (
              <li key={product.slug} className={styles.product}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productTagline}>{product.tagline}</p>
                <p className={styles.productDescription}>{product.description}</p>
                <p className={styles.productStatus}>{product.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.placeholder}>
            <p className={styles.placeholderNote}>{productsStatusNote}</p>
            <p className={styles.placeholderDetail}>
              The first product decisions are still being finalised. When a product is
              announced, its name, what it does and how to access it will appear on the
              products page.
            </p>
          </div>
        )}

        <p className={styles.linkRow}>
          <Link href="/products" className={styles.link}>
            Visit the products page
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </p>
      </Container>
    </section>
  );
}
