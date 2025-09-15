import type { Metadata } from "next";
import CPHero from "@/components/products/crypto/CPHero";
import CPOverview from "@/components/products/crypto/CPOverview";
import CPSpreadsIntro from "@/components/products/crypto/CPSpreadsIntro";
import CPHowItWorks from "@/components/products/crypto/CPHowItWorks";
import CPExamples from "@/components/products/crypto/CPExamples";
import TradingViewSection from "@/components/shared/TradingViewSection";
import AccountsOverviewCTA from "@/components/accounts/overview/AccountsOverviewCTA";

export const metadata: Metadata = {
  title: "Digital Currencies CFDs | Fynixfx",
  description:
    "Participate in crypto price movements via CFDs with competitive pricing and prudent risk controls.",
};

export default function CryptoProductsPage() {
  return (
    <main>
      <CPHero />
      <TradingViewSection symbol="BITSTAMP:BTCUSD" title="Trade BTCUSD on TradingView" />
      <CPOverview />
      <CPSpreadsIntro />
      <CPHowItWorks />
      <CPExamples />
      <AccountsOverviewCTA />
    </main>
  );
}
