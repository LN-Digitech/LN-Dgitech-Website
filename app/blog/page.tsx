import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import styles from "./blog.module.css";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getPostsSorted } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { buildPageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Blog | Articles & Insights on Search, Web & AI Marketing",
  description:
    "Practical articles from LN Digitech on SEO, AEO, GEO and AAO, website scoping, migrations, and responsible use of AI-generated imagery in marketing.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getPostsSorted();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <PageHero
        eyebrow="Blog"
        title="Articles written to be useful, not to fill a calendar."
        description="Each piece addresses a specific problem clients actually raise: what the new search acronyms mean, why redesigns lose traffic, how to scope a website project, and how to use AI-generated imagery without damaging your brand."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]}
      />

      <section className={styles.body} aria-label="Articles">
        <Container>
          <ul className={styles.list}>
            {posts.map((post) => (
              <li key={post.slug} className={styles.item}>
                <article className={styles.card}>
                  <div className={styles.meta}>
                    <Badge tone="blue">{post.category}</Badge>
                    <span className={styles.metaDot} aria-hidden="true" />
                    <time dateTime={post.publishedAt} className={styles.date}>
                      {formatDate(post.publishedAt)}
                    </time>
                    <span className={styles.metaDot} aria-hidden="true" />
                    <span className={styles.readingTime}>
                      <Clock size={13} aria-hidden="true" />
                      {post.readingTimeMinutes} min read
                    </span>
                  </div>
                  <h2 className={styles.title}>
                    <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Read article
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
