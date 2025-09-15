import type { Metadata } from "next";
import StartTradingClient from "./StartTradingClient";

export const metadata: Metadata = {
  title: "Start Trading | Fynixfx",
  description: "Trade with TradingView charts, live news and fast onboarding.",
};

export default function StartTradingPage() {
  return (
    <main>
      <StartTradingClient />
    </main>
  );
}
