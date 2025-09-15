import type { Metadata } from "next";
import INHero from "@/components/products/indices/INHero";
import INOverview from "@/components/products/indices/INOverview";
import INSpreadsIntro from "@/components/products/indices/INSpreadsIntro";
import INHowItWorks from "@/components/products/indices/INHowItWorks";
import TradingViewSection from "@/components/shared/TradingViewSection";
import AccountsOverviewCTA from "@/components/accounts/overview/AccountsOverviewCTA";

export const metadata: Metadata = {
  title: "Indices CFDs | Fynixfx",
  description:
    "Trade major global equity benchmarks with competitive pricing, fast execution and flexible sizing on professional platforms.",
};

export default function IndicesProductsPage() {
  return (
    <main>
      <INHero />
      <TradingViewSection symbol="OANDA:SPX500USD" title="Trade US500 on TradingView" />
      <INOverview />
      <INSpreadsIntro />
      <INHowItWorks />
      <AccountsOverviewCTA />
    </main>
  );
}
