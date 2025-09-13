import type { Metadata } from "next";
import SpreadsHero from "@/components/pricing/SpreadsHero";
import SpreadsIntro from "@/components/pricing/SpreadsIntro";
import SpreadsAccordion from "@/components/pricing/SpreadsAccordion";
import SpreadsCards from "@/components/pricing/SpreadsCards";
import SpreadsCommissionDetails from "@/components/pricing/SpreadsCommissionDetails";

export const metadata: Metadata = {
  title: "Spreads — Fynixfx",
  description: "Transparent pricing with raw spreads from 0.0 pips and low commissions across platforms.",
};

export default function SpreadsPage() {
  return (
    <main>
      <SpreadsHero />
      <SpreadsIntro />
      <SpreadsAccordion />
      <SpreadsCommissionDetails />
      <SpreadsCards />
    </main>
  );
}
