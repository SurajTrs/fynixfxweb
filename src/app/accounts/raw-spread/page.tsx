import type { Metadata } from "next";
import RawHero from "@/components/accounts/raw/RawHero";
import RawIntro from "@/components/accounts/raw/RawIntro";
import RawPricing from "@/components/accounts/raw/RawPricing";
import RawFeatureBlocks from "@/components/accounts/raw/RawFeatureBlocks";
import RawCTA from "@/components/accounts/raw/RawCTA";

export const metadata: Metadata = {
  title: "Raw Spread Account | Fynixfx",
  description:
    "Trade with ultra‑low spreads, competitive commissions and institutional‑grade liquidity on professional platforms.",
};

export default function RawSpreadPage() {
  return (
    <main>
      <RawHero />
      <RawIntro />
      <RawPricing />
      <RawFeatureBlocks />
      <RawCTA />
    </main>
  );
}
