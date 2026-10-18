import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyUs } from "@/components/home/WhyUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { PricingPreview } from "@/components/home/PricingPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

/**
 * Homepage.
 *
 * Server component — all sections are server-rendered. No testimonials
 * section is rendered because no verified testimonials exist; see
 * data/site.ts if that changes.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyUs />
      <ProcessSection />
      <PortfolioPreview />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
