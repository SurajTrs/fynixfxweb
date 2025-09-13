import type { Metadata } from "next";
import RTPHero from "@/components/rtp/RTPHero";
import RTPCards from "@/components/rtp/RTPCards";
import RTPRebates from "@/components/rtp/RTPRebates";
import RTPBenefitsGrid from "@/components/rtp/RTPBenefitsGrid";
import RTPHowToJoin from "@/components/rtp/RTPHowToJoin";
import ForexCTA from "@/components/forex/ForexCTA";

export const metadata: Metadata = {
  title: "Raw Trader Plus | Fynixfx",
  description:
    "Raw Trader Plus program: competitive pricing, exclusive rebates for high-volume traders, and additional VIP benefits.",
};

export default function RawTraderPlusPage() {
  return (
    <main>
      <RTPHero />
      <RTPCards />
      <RTPRebates />
      <RTPBenefitsGrid />
      <RTPHowToJoin />
      <ForexCTA />
    </main>
  );
}
