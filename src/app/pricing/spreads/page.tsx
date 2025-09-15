import type { Metadata } from "next";
import SpreadsHero from "@/components/pricing/spreads/SpreadsHero";
import SpreadsIntro from "@/components/pricing/spreads/SpreadsIntro";
import SpreadsAccordion from "@/components/pricing/spreads/SpreadsAccordion";
import SpreadsCommissionTables from "@/components/pricing/spreads/SpreadsCommissionTables";
import SpreadsPricingCards from "@/components/pricing/spreads/SpreadsPricingCards";
import AccountsOverviewCTA from "@/components/accounts/overview/AccountsOverviewCTA";

export const metadata: Metadata = {
  title: "Spreads | Fynixfx",
  description: "Transparent, market‑driven spreads with deep liquidity and consistent execution.",
};

export default function SpreadsPage() {
  return (
    <main>
      <SpreadsHero />
      <SpreadsIntro />
      <SpreadsAccordion />
      <SpreadsCommissionTables />
      <SpreadsPricingCards />
      <AccountsOverviewCTA />
    </main>
  );
}
