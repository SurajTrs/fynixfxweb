import type { Metadata } from "next";
import FXAdvHero from "@/components/education/forex/FXAdvHero";
import FXAdvIntro from "@/components/education/forex/FXAdvIntro";
import FXAdvTiles from "@/components/education/forex/FXAdvTiles";
import AccountsOverviewCTA from "@/components/accounts/overview/AccountsOverviewCTA";

export const metadata: Metadata = {
  title: "Advantages of Forex | Fynixfx",
  description:
    "Explore key advantages of the FX market including liquidity, 24/5 hours and flexible directionality.",
};

export default function AdvantagesOfForexPage() {
  return (
    <main>
      <FXAdvHero />
      <FXAdvIntro />
      <FXAdvTiles />
      <AccountsOverviewCTA />
    </main>
  );
}
