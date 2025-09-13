import type { Metadata } from "next";
import LiveHero from "@/components/accounts/live/LiveHero";
import LiveBenefits from "@/components/accounts/live/LiveBenefits";
import LiveAccountTypes from "@/components/accounts/live/LiveAccountTypes";
import LiveCTA from "@/components/accounts/live/LiveCTA";

export const metadata: Metadata = {
  title: "Open a Live Trading Account | Fynixfx",
  description: "Open a live trading account with raw spreads, deep liquidity and professional platforms.",
};

export default function LiveAccountPage() {
  return (
    <main>
      <LiveHero />
      <LiveBenefits />
      <LiveAccountTypes />
      <LiveCTA />
    </main>
  );
}
