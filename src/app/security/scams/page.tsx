import type { Metadata } from "next";
import ScamsHero from "@/components/security/scams/ScamsHero";
import ScamTypes from "@/components/security/scams/ScamTypes";
import RedFlags from "@/components/security/scams/RedFlags";
import Checklist from "@/components/security/scams/Checklist";
import ReportCTA from "@/components/security/scams/ReportCTA";

export const metadata: Metadata = {
  title: "Cybersecurity and Scams | Fynixfx",
  description: "Identify common scams, learn red flags, verify requests, and report suspicious activity.",
};

export default function ScamsPage() {
  return (
    <main>
      <ScamsHero />
      <ScamTypes />
      <RedFlags />
      <Checklist />
      <ReportCTA />
    </main>
  );
}
