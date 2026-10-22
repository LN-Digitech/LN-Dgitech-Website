import { Hero } from "@/components/home/Hero";
import { ProductsSection } from "@/components/home/ProductsSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { MissionVision } from "@/components/home/MissionVision";
import { FoundersSection } from "@/components/founders/FoundersSection";
import { FinalCTA } from "@/components/home/FinalCTA";

/**
 * Homepage.
 *
 * Server component, all sections are server-rendered. Order: parent-brand
 * hero, BusinessOS products, brand architecture and long-term
 * vision, mission/about, founders, contact CTA. Product content comes
 * from data/products.ts and is never duplicated here.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <EcosystemSection />
      <MissionVision />
      <FoundersSection variant="compact" />
      <FinalCTA />
    </>
  );
}
