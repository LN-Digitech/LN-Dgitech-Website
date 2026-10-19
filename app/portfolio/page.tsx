import styles from "@/components/portfolio/portfolio.module.css";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { projects } from "@/data/projects";
import { buildPageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Portfolio | Concept Studies & Selected Work",
  description:
    "Explore LN Digitech's portfolio: concept studies and selected work across e-commerce, websites, brand identity, software, digital marketing and AI-assisted media production.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />

      <PageHero
        eyebrow="Portfolio"
        title="Work that shows the thinking, not just the output."
        description="Every project below is labelled honestly: concept studies produced to demonstrate our approach are marked as such, and client work appears only with permission. No performance figures are shown unless genuinely measured."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }]}
      />

      <section className={styles.body} aria-label="Projects">
        <Container>
          <PortfolioGrid projects={projects} />
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
