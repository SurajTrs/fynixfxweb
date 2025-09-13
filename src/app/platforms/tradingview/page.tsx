import type { Metadata } from "next";
import TVHero from "@/components/platforms/tradingview/TVHero";
import TVWhy from "@/components/platforms/tradingview/TVWhy";
import TVFeatures from "@/components/platforms/tradingview/TVFeatures";
import TVIntegrations from "@/components/platforms/tradingview/TVIntegrations";
import TVApps from "@/components/platforms/tradingview/TVApps";
import TVCTA from "@/components/platforms/tradingview/TVCTA";

export const metadata: Metadata = {
  title: "TradingView Platform | Fynixfx",
  description:
    "Trade on TradingView with Fynixfx: best‑in‑class charting, alerts, strategy testing and powerful integrations.",
};

export default function TradingViewPage() {
  return (
    <main>
      <TVHero />
     
      <TVWhy />
      <TVFeatures />
      <TVIntegrations />
      <TVApps />
      <TVCTA />
    </main>
  );
}
