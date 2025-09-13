import type { Metadata } from "next";
import DemoHero from "@/components/accounts/demo/DemoHero";
import DemoBenefits from "@/components/accounts/demo/DemoBenefits";
import DemoSteps from "@/components/accounts/demo/DemoSteps";
import DemoCTA from "@/components/accounts/demo/DemoCTA";

export const metadata: Metadata = {
  title: "Open a Free Demo Trading Account | Fynixfx",
  description: "Practice trading with virtual funds on professional platforms and real‑time pricing.",
};

export default function DemoAccountPage() {
  return (
    <main>
      <DemoHero />
      <DemoBenefits />
      <DemoSteps />
      <DemoCTA />
    </main>
  );
}
