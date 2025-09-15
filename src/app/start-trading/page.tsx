import type { Metadata } from "next";
import { Suspense } from "react";
import StartTradingClient from "./StartTradingClient";

export const metadata: Metadata = {
  title: "Start Trading | Fynixfx",
  description: "Trade with TradingView charts, live news and fast onboarding.",
};

export default function StartTradingPage() {
  return (
    <main>
      <Suspense fallback={<div className="py-10 text-center text-black/60">Loading trading workspace…</div>}>
        <StartTradingClient />
      </Suspense>
    </main>
  );
}
