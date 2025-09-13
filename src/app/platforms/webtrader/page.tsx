import type { Metadata } from "next";
import WTHero from "@/components/platforms/webtrader/WTHero";
import WTOverview from "@/components/platforms/webtrader/WTOverview";
import WTFeatures from "@/components/platforms/webtrader/WTFeatures";
import WTWhy from "@/components/platforms/webtrader/WTWhy";
import WTApps from "@/components/platforms/webtrader/WTApps";
import WTCTA from "@/components/platforms/webtrader/WTCTA";

export const metadata: Metadata = {
  title: "WebTrader Platform | Fynixfx",
  description:
    "Trade directly from your browser with WebTrader — fast, secure, always up to date, and synced across devices.",
};

export default function WebTraderPage() {
  return (
    <main>
      <WTHero />
      <WTOverview />
      <WTFeatures />
      <WTWhy />
      <WTApps />
      <WTCTA />
    </main>
  );
}
