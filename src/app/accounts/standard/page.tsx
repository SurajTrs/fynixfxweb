import type { Metadata } from "next";
import StandardHero from "@/components/accounts/standard/StandardHero";
import StandardIntro from "@/components/accounts/standard/StandardIntro";
import StandardExecution from "@/components/accounts/standard/StandardExecution";
import StandardFlex from "@/components/accounts/standard/StandardFlex";
import StandardCTA from "@/components/accounts/standard/StandardCTA";

export const metadata: Metadata = {
  title: "Standard Account | Fynixfx",
  description: "Simple, all‑in‑spread pricing with deep liquidity and fast execution.",
};

export default function StandardAccountPage() {
  return (
    <main>
      <StandardHero />
      <StandardIntro />
      <StandardExecution />
      <StandardFlex />
      <StandardCTA />
    </main>
  );
}
