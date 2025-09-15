import type { Metadata } from "next";
import CFDAdvHero from "@/components/education/cfds/CFDAdvHero";
import CFDAdvIntro from "@/components/education/cfds/CFDAdvIntro";
import CFDAdvTiles from "@/components/education/cfds/CFDAdvTiles";
import AccountsOverviewCTA from "@/components/accounts/overview/AccountsOverviewCTA";

export const metadata: Metadata = {
  title: "Advantages of CFDs | Fynixfx",
  description:
    "Discover key benefits of CFDs including long/short flexibility, multi‑asset access and capital efficiency.",
};

export default function AdvantagesOfCFDsPage() {
  return (
    <main>
      <CFDAdvHero />
      <CFDAdvIntro />
      <CFDAdvTiles />
      <AccountsOverviewCTA />
    </main>
  );
}
