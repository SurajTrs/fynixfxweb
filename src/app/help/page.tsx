import type { Metadata } from "next";
import HelpHero from "@/components/help/HelpHero";
import HelpClient from "@/components/help/HelpClient";

export const metadata: Metadata = {
  title: "Help Centre | Fynixfx",
  description: "Find answers to common questions about accounts, platforms, pricing and more.",
};

export default function HelpPage() {
  return (
    <main>
      <HelpHero />
      <HelpClient />
    </main>
  );
}
