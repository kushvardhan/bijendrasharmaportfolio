import { HeroSection } from "@/components/sections/home/HeroSection";
import { TrustSection } from "@/components/sections/home/TrustSection";
import { StorySection } from "@/components/sections/home/StorySection";
import { RelatableSection } from "@/components/sections/home/RelatableSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { PhilosophySection } from "@/components/sections/home/PhilosophySection";
import { CTASection } from "@/components/sections/home/CTASection";
import { SiteFooter } from "@/components/sections/home/SiteFooter";

// ==================== MAIN PAGE ====================

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <TrustSection />
      <StorySection />
      <RelatableSection />
      <ServicesSection />
      <PhilosophySection />
      <CTASection />
      <SiteFooter />
    </main>
  );
}
