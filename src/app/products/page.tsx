import type { Metadata } from "next";
import MarketsHero from "@/components/markets/MarketsHero";
import MarketsGrid from "@/components/markets/MarketsGrid";
import MarketsCTA from "@/components/markets/MarketsCTA";

export const metadata: Metadata = {
  title: "Range of Markets — Fynixfx",
  description: "Trade Forex, Indices, Commodities, Stocks, Bonds, Crypto and Futures CFDs on Fynixfx.",
};

export default function ProductsPage() {
  return (
    <main>
      <MarketsHero />
      <MarketsGrid />
      <MarketsCTA />
    </main>
  );
}
