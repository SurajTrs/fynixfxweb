import type { Metadata } from "next";
import ForexHero from "@/components/forex/ForexHero";
import ForexAccountTypes from "@/components/forex/ForexAccountTypes";
import ForexDemo from "@/components/forex/ForexDemo";
import ForexCFD from "@/components/forex/ForexCFD";
import ForexCTA from "@/components/forex/ForexCTA";
import TradingViewWidget from "@/components/forex/TradingViewWidget";
import TradeTicket from "@/components/forex/TradeTicket";

export const metadata: Metadata = {
  title: "Forex Trading | Fynixfx",
  description:
    "Trade Forex CFDs with raw spreads, deep liquidity and lightning-fast execution on professional-grade platforms.",
};

export default function ForexPage() {
  return (
    <main>
      <ForexHero />
      <TradingViewWidget />
      <TradeTicket />
      <ForexAccountTypes />
      <ForexDemo />
      <ForexCFD />
      <ForexCTA />
    </main>
  );
}
