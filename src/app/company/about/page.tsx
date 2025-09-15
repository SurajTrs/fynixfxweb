import type { Metadata } from "next";
import AUHero from "@/components/company/about/AUHero";
import AUIntro from "@/components/company/about/AUIntro";
import AUValues from "@/components/company/about/AUValues";
import AccountsOverviewCTA from "@/components/accounts/overview/AccountsOverviewCTA";

export const metadata: Metadata = {
  title: "About Us | Fynixfx",
  description:
    "Learn about Fynixfx: our mission, values and approach to transparent pricing, consistent execution and dependable connectivity.",
};

export default function AboutPage() {
  return (
    <main>
      <AUHero />
      <AUIntro />
      <AUValues />
      <AccountsOverviewCTA />
    </main>
  );
}
