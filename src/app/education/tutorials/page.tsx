import type { Metadata } from "next";
import TutHero from "@/components/education/tutorials/TutHero";
import TutFeatured from "@/components/education/tutorials/TutFeatured";
import TutGrid from "@/components/education/tutorials/TutGrid";

export const metadata: Metadata = {
  title: "Video Tutorials | Fynixfx",
  description: "Short, practical walkthroughs to set up platforms, place orders and manage risk.",
};

export default function TutorialsPage() {
  return (
    <main>
      <TutHero />
      <TutFeatured />
      <TutGrid />
    </main>
  );
}
