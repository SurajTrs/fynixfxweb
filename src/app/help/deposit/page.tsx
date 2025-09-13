import type { Metadata } from "next";
import FundingHero from "@/components/accounts/funding/FundingHero";
import FundingOverview from "@/components/accounts/funding/FundingOverview";
import FundingMethods from "@/components/accounts/funding/FundingMethods";
import FundingInfo from "@/components/accounts/funding/FundingInfo";

export const metadata: Metadata = {
  title: "Account Funding | Fynixfx",
  description: "Deposit instantly and for free using flexible funding options across multiple base currencies.",
};

export default function FundingPage() {
  return (
    <main>
      <FundingHero />
      <FundingOverview />
      <FundingMethods />
      <FundingInfo />
    </main>
  );
}
