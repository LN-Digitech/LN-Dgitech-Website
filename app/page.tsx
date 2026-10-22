import { Hero } from "@/components/home/Hero";
import { MissionVision } from "@/components/home/MissionVision";
import { ProductsSection } from "@/components/home/ProductsSection";
import { FoundersSection } from "@/components/founders/FoundersSection";
import { FinalCTA } from "@/components/home/FinalCTA";

/**
 * Homepage.
 *
 * Server component, all sections are server-rendered. LN Digitech is an
 * early-stage product-oriented technology startup; sections are limited to
 * what can be stated honestly today: mission, products (placeholder until
 * announcements), and the two co-founders.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionVision />
      <ProductsSection />
      <FoundersSection variant="compact" />
      <FinalCTA />
    </>
  );
}
