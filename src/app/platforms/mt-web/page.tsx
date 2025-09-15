import type { Metadata } from "next";
import MTHero from "@/components/platforms/mtweb/MTHero";
import MTOverview from "@/components/platforms/mtweb/MTOverview";
import MTFeatures from "@/components/platforms/mtweb/MTFeatures";
import MTCTA from "@/components/platforms/mtweb/MTCTA";

export const metadata: Metadata = {
  title: "MetaTrader WebTrader | Fynixfx",
  description: "Trade directly in your browser with MetaTrader WebTrader — fast, secure, familiar MT experience.",
};

export default function MTWebPage() {
  return (
    <main>
      <MTHero />
      <MTOverview />
      <MTFeatures />
      <MTCTA />
    </main>
  );
}
