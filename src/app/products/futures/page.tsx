import type { Metadata } from "next";
import FUHero from "@/components/products/futures/FUHero";
import FUOverview from "@/components/products/futures/FUOverview";
import FUSpreadsIntro from "@/components/products/futures/FUSpreadsIntro";
import FUHowItWorks from "@/components/products/futures/FUHowItWorks";
import AccountsOverviewCTA from "@/components/accounts/overview/AccountsOverviewCTA";

export const metadata: Metadata = {
  title: "Futures CFDs | Fynixfx",
  description:
    "Access futures market themes with CFD flexibility and efficient capital usage. Competitive pricing and fast execution.",
};

export default function FuturesProductsPage() {
  return (
    <main>
      <FUHero />
      <FUOverview />
      <FUSpreadsIntro />
      <FUHowItWorks />
      <AccountsOverviewCTA />
    </main>
  );
}
