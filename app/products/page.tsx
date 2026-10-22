import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PackageOpen } from "lucide-react";
import styles from "./products.module.css";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { products, productsStatusNote } from "@/data/products";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Products",
  description: `What ${siteConfig.name} is building. Product details will be announced here when they are finalised.`,
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

/**
 * Products page.
 *
 * Lists announced products from data/products.ts. While that list is empty
 * the page states clearly that nothing has been announced yet. It never
 * invents product names, features, pricing, dates or screenshots.
 */
export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="What we are building."
        description="LN Digitech is building practical technology products. This page carries the official announcements."
        breadcrumbs={breadcrumbs}
      />

      <section className={styles.section} aria-labelledby="product-list-heading">
        <Container>
          <h2 id="product-list-heading" className="visually-hidden">
            Announced products
          </h2>

          {products.length > 0 ? (
            <ul className={styles.list}>
              {products.map((product) => (
                <li key={product.slug} className={styles.product}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productTagline}>{product.tagline}</p>
                  <p className={styles.productDescription}>{product.description}</p>
                  <div className={styles.productMeta}>
                    <span className={styles.productStatus}>{product.status}</span>
                    {product.url ? (
                      <a
                        href={product.url}
                        className={styles.productLink}
                        rel="noopener noreferrer"
                      >
                        Visit product
                        <ArrowRight size={15} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderIcon}>
                <PackageOpen size={28} aria-hidden="true" />
              </span>
              <h3 className={styles.placeholderTitle}>No products announced yet.</h3>
              <p className={styles.placeholderText}>{productsStatusNote}</p>
              <p className={styles.placeholderDetail}>
                We are an early-stage startup and we would rather say nothing than publish
                details that are not final. When the first product is ready, its name, what it
                does and how to access it will appear on this page.
              </p>
              <div className={styles.placeholderActions}>
                <Link href="/contact" className={styles.primaryCta}>
                  Get in touch
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link href="/about" className={styles.secondaryCta}>
                  About LN Digitech
                </Link>
              </div>
            </div>
          )}
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
