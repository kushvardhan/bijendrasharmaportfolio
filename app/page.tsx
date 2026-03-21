import { CinematicHero } from "@/components/sections/home/CinematicHero";
import { StorySection } from "@/components/sections/home/StorySection";
import { CompanySection } from "@/components/sections/home/CompanySection";
import { PoliticsSection } from "@/components/sections/home/PoliticsSection";
import { CTASection } from "@/components/sections/home/CTASection";
import { SiteFooter } from "@/components/sections/home/SiteFooter";

// ==================== MAIN PAGE ====================

export default function Home() {
  return (
    <main className="relative">
      <CinematicHero />
      <StorySection />
      <CompanySection />
      <PoliticsSection />
      <CTASection />
      <SiteFooter />
    </main>
  );
}
