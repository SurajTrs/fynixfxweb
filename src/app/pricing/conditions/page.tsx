import type { Metadata } from "next";
import ConditionsHero from "@/components/pricing/conditions/ConditionsHero";
import ConditionsAnchorNav from "@/components/pricing/conditions/ConditionsAnchorNav";
import ConditionsSections from "@/components/pricing/conditions/ConditionsSections";
import AccountsOverviewCTA from "@/components/accounts/overview/AccountsOverviewCTA";

export const metadata: Metadata = {
  title: "Trading Conditions | Fynixfx",
  description:
    "Explore spreads, execution, leverage, currency pairs, swap rates and trading hours. Built for transparent pricing and consistent execution.",
};

export default function TradingConditionsPage() {
  return (
    <main>
      <ConditionsHero />
      <ConditionsAnchorNav />
      <ConditionsSections />
      <AccountsOverviewCTA />
    </main>
  );
}
