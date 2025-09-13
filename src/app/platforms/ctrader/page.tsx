import type { Metadata } from "next";
import CTHero from "@/components/platforms/ctrader/CTHero";
import CTOverview from "@/components/platforms/ctrader/CTOverview";
import CTWhy from "@/components/platforms/ctrader/CTWhy";
import CTFeatures from "@/components/platforms/ctrader/CTFeatures";
import CTAdvanced from "@/components/platforms/ctrader/CTAdvanced";
import CTHowToOpen from "@/components/platforms/ctrader/CTHowToOpen";
import CTDownloads from "@/components/platforms/ctrader/CTDownloads";
import CompareStrip from "@/components/platforms/CompareStrip";

export const metadata: Metadata = {
  title: "cTrader Platform | Fynixfx",
  description:
    "Professional‑grade depth of market, modern UI and fast execution — optimized on Fynixfx infrastructure.",
};

export default function CTraderPage() {
  return (
    <main>
      <CTHero />
      <CTOverview />
      <CTWhy />
      <CTFeatures />
      <CTAdvanced />
      <CTHowToOpen />
      <CompareStrip />
      <CTDownloads />
    </main>
  );
}
