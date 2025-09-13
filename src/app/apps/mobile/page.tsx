import type { Metadata } from "next";
import MobileHero from "@/components/mobile/MobileHero";
import MobileFeatures from "@/components/mobile/MobileFeatures";
import MobileDownloads from "@/components/mobile/MobileDownloads";
import MobileHowItWorks from "@/components/mobile/MobileHowItWorks";
import MobileSupport from "@/components/mobile/MobileSupport";
import MobileKYC from "@/components/mobile/MobileKYC";
import MobilePayments from "@/components/mobile/MobilePayments";
import MobileShowcase from "@/components/mobile/MobileShowcase";

export const metadata: Metadata = {
  title: "Fynixfx Mobile App | Trade on the go",
  description: "Trade global markets on Android & iOS with real‑time pricing, advanced charts, and secure login.",
};

export default function MobilePage() {
  return (
    <main>
      <MobileHero />
      <MobileFeatures />
      <MobileHowItWorks />
      <MobileSupport />
      <MobileKYC />
      <MobilePayments />
      <MobileShowcase />
      <MobileDownloads />
    </main>
  );
}
