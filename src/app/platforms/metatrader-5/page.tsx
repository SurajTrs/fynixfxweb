import type { Metadata } from "next";
import MT5Hero from "@/components/platforms/mt5/MT5Hero";
import MT5Overview from "@/components/platforms/mt5/MT5Overview";
import MT5Why from "@/components/platforms/mt5/MT5Why";
import MT5Features from "@/components/platforms/mt5/MT5Features";
import MT5Advanced from "@/components/platforms/mt5/MT5Advanced";
import MT5HowToOpen from "@/components/platforms/mt5/MT5HowToOpen";
import MT5Downloads from "@/components/platforms/mt5/MT5Downloads";
import CompareStrip from "@/components/platforms/CompareStrip";

export const metadata: Metadata = {
  title: "MetaTrader 5 (MT5) Platform | Fynixfx",
  description:
    "Trade on the next‑generation MetaTrader 5 platform with more timeframes, order types and a powerful tester — on Fynixfx infrastructure.",
};

export default function MT5Page() {
  return (
    <main>
      <MT5Hero />
      <MT5Overview />
      <MT5Why />
      <MT5Features />
      <MT5Advanced />
      <MT5HowToOpen />
      <CompareStrip />
      <MT5Downloads />
    </main>
  );
}
