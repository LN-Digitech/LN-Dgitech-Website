import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, CalendarDays } from "lucide-react";
import styles from "./post.module.css";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getPostBySlug, getPostsSorted, getRelatedPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { articleJsonLd, breadcrumbJsonLd, buildPageMetadata, JsonLd } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPostsSorted().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? undefined,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: post.title,
            description: post.excerpt,
            slug: post.slug,
            publishedAt: post.publishedAt,
            updatedAt: post.updatedAt,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className={styles.page}>
        <Container>
          <header className={styles.header}>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Blog", path: "/blog" },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
            <div className={styles.meta}>
              <Badge tone="blue">{post.category}</Badge>
              <span className={styles.metaItem}>
                <CalendarDays size={14} aria-hidden="true" />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </span>
              {post.updatedAt ? (
                <span className={styles.metaItem}>
                  <span>Updated </span>
                  <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
                </span>
              ) : null}
              <span className={styles.metaItem}>
                <Clock size={14} aria-hidden="true" />
                {post.readingTimeMinutes} min read
              </span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <ul className={styles.tags} aria-label="Tags">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <span className={styles.tag}>{tag}</span>
                </li>
              ))}
            </ul>
          </header>

          <div className={styles.content}>
            <ArticleBody blocks={post.body} />
          </div>

          <footer className={styles.footer}>
            <Link href="/blog" className={styles.backLink}>
              <ArrowLeft size={16} aria-hidden="true" />
              Back to all articles
            </Link>
          </footer>

          {related.length > 0 ? (
            <section aria-labelledby="related-heading" className={styles.related}>
              <h2 id="related-heading" className={styles.relatedTitle}>
                Related reading
              </h2>
              <ul className={styles.relatedGrid}>
                {related.map((relatedPost) => (
                  <li key={relatedPost.slug}>
                    <Link href={`/blog/${relatedPost.slug}`} className={styles.relatedCard}>
                      <span className={styles.relatedCategory}>{relatedPost.category}</span>
                      <span className={styles.relatedPostTitle}>{relatedPost.title}</span>
                      <span className={styles.relatedExcerpt}>{relatedPost.excerpt}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </Container>
      </article>

      <FinalCTA />
    </>
  );
}
