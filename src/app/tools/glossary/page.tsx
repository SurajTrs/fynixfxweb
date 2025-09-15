import type { Metadata } from "next";
import GlossaryHero from "@/components/tools/glossary/GlossaryHero";
import GlossaryClient from "@/components/tools/glossary/GlossaryClient";

export const metadata: Metadata = {
  title: "Forex Glossary | Fynixfx",
  description: "A–Z glossary of key market terms with instant search.",
};

export default function GlossaryPage() {
  return (
    <main>
      <GlossaryHero />
      <GlossaryClient />
    </main>
  );
}
