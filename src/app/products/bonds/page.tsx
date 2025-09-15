import type { Metadata } from "next";
import BNHero from "@/components/products/bonds/BNHero";
import BNOverview from "@/components/products/bonds/BNOverview";
import BNSpreadsIntro from "@/components/products/bonds/BNSpreadsIntro";
import BNHowItWorks from "@/components/products/bonds/BNHowItWorks";
import TradingViewSection from "@/components/shared/TradingViewSection";
import AccountsOverviewCTA from "@/components/accounts/overview/AccountsOverviewCTA";

export const metadata: Metadata = {
  title: "Bonds CFDs | Fynixfx",
  description:
    "Express views on interest rates with CFDs on government bonds and notes. Transparent costs, flexible sizing and fast execution.",
};

export default function BondsProductsPage() {
  return (
    <main>
      <BNHero />
      <TradingViewSection symbol="TVC:US10Y" title="US 10Y Yield on TradingView" />
      <BNOverview />
      <BNSpreadsIntro />
      <BNHowItWorks />
      <AccountsOverviewCTA />
    </main>
  );
}
