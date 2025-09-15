import type { Metadata } from "next";
import PCHero from "@/components/education/podcast/PCHero";
import PCAssist from "@/components/education/podcast/PCAssist";
import PCEpisodesAlt from "@/components/education/podcast/PCEpisodesAlt";
import PCHost from "@/components/education/podcast/PCHost";
import PCNumbers from "@/components/education/podcast/PCNumbers";
import PCSubscribe from "@/components/education/podcast/PCSubscribe";

export const metadata: Metadata = {
  title: "Podcast | Fynixfx",
  description: "Listen to the latest episodes and subscribe on your preferred platform.",
};

export default function PodcastPage() {
  return (
    <main>
      <PCHero />
      <PCAssist />
      <PCEpisodesAlt />
      <PCHost />
      <PCNumbers />
      <PCSubscribe />
    </main>
  );
}
