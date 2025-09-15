import type { Metadata } from "next";
import CMHero from "@/components/products/commodities/CMHero";
import CMOverview from "@/components/products/commodities/CMOverview";
import CMSpreadsIntro from "@/components/products/commodities/CMSpreadsIntro";
import CMHowItWorks from "@/components/products/commodities/CMHowItWorks";
import CMExamples from "@/components/products/commodities/CMExamples";
import AccountsOverviewCTA from "@/components/accounts/overview/AccountsOverviewCTA";
import TradingViewSection from "@/components/shared/TradingViewSection";

export const metadata: Metadata = {
  title: "Commodities CFDs | Fynixfx",
  description:
    "Trade energies, precious metals and soft commodities with transparent costs, deep liquidity and fast execution on professional platforms.",
};

export default function CommoditiesProductsPage() {
  return (
    <main>
      <CMHero />
      <TradingViewSection symbol="OANDA:XAUUSD" title="Trade Gold (XAUUSD) on TradingView" />
      <CMOverview />
      <CMSpreadsIntro />
      <CMHowItWorks />
      <CMExamples />
      <AccountsOverviewCTA />
    </main>
  );
}
