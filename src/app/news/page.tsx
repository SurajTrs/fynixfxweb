import type { Metadata } from "next";
import NewsHero from "@/components/news/NewsHero";
import NewsTicker from "@/components/news/NewsTicker";
import NewsFeed from "@/components/news/NewsFeed";

export const metadata: Metadata = {
  title: "Market News | Fynixfx",
  description: "Live TradingView news and headlines to keep you informed while you trade.",
};

export default function NewsPage() {
  return (
    <main>
      <NewsHero />
      <NewsTicker />
      <NewsFeed />
    </main>
  );
}
