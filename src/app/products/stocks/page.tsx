import type { Metadata } from "next";
import STHero from "@/components/products/stocks/STHero";
import STOverview from "@/components/products/stocks/STOverview";
import STSpreadsIntro from "@/components/products/stocks/STSpreadsIntro";
import STHowItWorks from "@/components/products/stocks/STHowItWorks";
import TradingViewSection from "@/components/shared/TradingViewSection";
import AccountsOverviewCTA from "@/components/accounts/overview/AccountsOverviewCTA";

export const metadata: Metadata = {
  title: "Stocks CFDs | Fynixfx",
  description:
    "Speculate on price movements of leading global companies with transparent costs, flexible sizing and fast execution.",
};

export default function StocksProductsPage() {
  return (
    <main>
      <STHero />
      <TradingViewSection symbol="NASDAQ:AAPL" title="Trade AAPL on TradingView" />
      <STOverview />
      <STSpreadsIntro />
      <STHowItWorks />
      <AccountsOverviewCTA />
    </main>
  );
}
