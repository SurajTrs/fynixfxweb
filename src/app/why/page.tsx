import type { Metadata } from "next";
import WhyHero from "@/components/why/WhyHero";
import WhyFeatures from "@/components/why/WhyFeatures";
import WhyBenefits from "@/components/why/WhyBenefits";
import WhyCTA from "@/components/why/WhyCTA";

export const metadata: Metadata = {
  title: "Why Choose Fynixfx",
  description:
    "Discover why traders choose Fynixfx: raw spreads, fast execution, institutional liquidity, and professional-grade platforms.",
};

export default function WhyPage() {
  return (
    <main>
      <WhyHero />
      <WhyFeatures />
      <WhyBenefits />
      <WhyCTA />
    </main>
  );
}
