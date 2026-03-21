import { CinematicHero } from "@/components/sections/home/CinematicHero";
import { IntroSection } from "@/components/sections/home/IntroSection";
import { RelatableSection } from "@/components/sections/home/RelatableSection";
import { StorySection } from "@/components/sections/home/StorySection";
import { CompanySection } from "@/components/sections/home/CompanySection";
import { PoliticsSection } from "@/components/sections/home/PoliticsSection";
import { CTASection } from "@/components/sections/home/CTASection";
import { SiteFooter } from "@/components/sections/home/SiteFooter";

export default function Home() {
  return (
    <main className="relative">
      <CinematicHero />
      <IntroSection />
      <RelatableSection />
      <StorySection />
      <CompanySection />
      <PoliticsSection />
      <CTASection />
      <SiteFooter />
    </main>
  );
}
