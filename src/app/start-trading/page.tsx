import type { Metadata } from "next";
import dynamic from "next/dynamic";
import StartHero from "@/components/start/StartHero";
import StartMode from "@/components/start/StartMode";
import InstrumentSwitcher from "@/components/start/InstrumentSwitcher";

// Heavy client-only widgets loaded lazily
const StartChart = dynamic(() => import("@/components/start/StartChart"), {
  ssr: false,
  loading: () => (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-[520px] rounded-2xl ring-1 ring-neutral-200 bg-white/60 animate-pulse" />
      </div>
    </section>
  ),
});

const TradePanel = dynamic(() => import("@/components/start/TradePanel"), {
  ssr: false,
  loading: () => null,
});

const StartNews = dynamic(() => import("@/components/start/StartNews"), {
  ssr: false,
  loading: () => null,
});

export const metadata: Metadata = {
  title: "Start Trading | Fynixfx",
  description: "Trade with TradingView charts, live news and fast onboarding.",
};

export default function StartTradingPage() {
  return (
    <main>
      <StartHero />
      <StartMode />
      <InstrumentSwitcher />
      <StartChart />
      <TradePanel />
      <StartNews />
    </main>
  );
}
