import type { Metadata } from "next";
import FXHero from "@/components/products/forex/FXHero";
import FXOverview from "@/components/products/forex/FXOverview";
import FXSpreadsIntro from "@/components/products/forex/FXSpreadsIntro";
import FXHowItWorks from "@/components/products/forex/FXHowItWorks";
import FXExamples from "@/components/products/forex/FXExamples";
import FXTradingView from "@/components/products/forex/FXTradingView";
import AccountsOverviewCTA from "@/components/accounts/overview/AccountsOverviewCTA";

export const metadata: Metadata = {
  title: "Forex CFDs | Fynixfx",
  description:
    "Trade the world’s most liquid market 24/5 with deep liquidity, competitive pricing and fast execution on professional platforms.",
};

export default function ForexProductsPage() {
  return (
    <main>
      <FXHero />
      <FXTradingView />
      <FXOverview />
      <FXSpreadsIntro />
      <FXHowItWorks />
      <FXExamples />
      <AccountsOverviewCTA />
    </main>
  );
}
