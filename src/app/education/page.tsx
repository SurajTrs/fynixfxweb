import type { Metadata } from "next";
import EdHero from "@/components/education/EdHero";
import EdGettingStarted from "@/components/education/EdGettingStarted";
import EdAdvantages from "@/components/education/EdAdvantages";
import AccountsOverviewCTA from "@/components/accounts/overview/AccountsOverviewCTA";

export const metadata: Metadata = {
  title: "Education Overview | Fynixfx",
  description:
    "Learn the basics, explore advantages of Forex and CFDs, and watch platform tutorials. Practical education for traders.",
};

export default function EducationOverviewPage() {
  return (
    <main>
      <EdHero />
      <EdGettingStarted />
      <EdAdvantages />
      <AccountsOverviewCTA />
    </main>
  );
}
