import type { Metadata } from "next";
import MT4Hero from "@/components/platforms/mt4/MT4Hero";
import MT4Overview from "@/components/platforms/mt4/MT4Overview";
import MT4Why from "@/components/platforms/mt4/MT4Why";
import MT4Features from "@/components/platforms/mt4/MT4Features";
import MT4Advanced from "@/components/platforms/mt4/MT4Advanced";
import MT4HowToOpen from "@/components/platforms/mt4/MT4HowToOpen";
import CompareStrip from "@/components/platforms/CompareStrip";
import MT4Downloads from "@/components/platforms/mt4/MT4Downloads";

export const metadata: Metadata = {
  title: "MetaTrader 4 (MT4) Platform | Fynixfx",
  description:
    "Trade on the award‑winning MetaTrader 4 platform with raw spreads, fast execution, and deep liquidity — aligned with Fynixfx infrastructure.",
};

export default function MT4Page() {
  return (
    <main>
      <MT4Hero />
      <MT4Overview />
      <MT4Why />
      <MT4Features />
      <MT4Advanced />
      <MT4HowToOpen />
      <CompareStrip />
      <MT4Downloads />
    </main>
  );
}
