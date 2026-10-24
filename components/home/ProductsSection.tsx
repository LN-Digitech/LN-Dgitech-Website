import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ProductsSection.module.css";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { businessSuite, products, productsHonestyNote } from "@/data/products";

/**
 * Homepage products section.
 *
 * Introduces the BusinessOS portfolio and renders the product
 * concepts from data/products.ts with honest, configurable statuses.
 */
export function ProductsSection() {
  return (
    <section className={styles.section} aria-labelledby="products-heading">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title={`${businessSuite.name}.`}
          description={businessSuite.summary}
          id="products-heading"
        />

        <ul className={styles.list}>
          {products.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} variant="compact" />
            </li>
          ))}
        </ul>

        <p className={styles.note}>{productsHonestyNote}</p>

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
