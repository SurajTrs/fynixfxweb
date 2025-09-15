import type { Metadata } from "next";
import CalHero from "@/components/tools/calendar/CalHero";
import CalWidget from "@/components/tools/calendar/CalWidget";

export const metadata: Metadata = {
  title: "Economic Calendar | Fynixfx",
  description: "Live macroeconomic calendar by TradingView to plan your session.",
};

export default function CalendarPage() {
  return (
    <main>
      <CalHero />
      <CalWidget />
    </main>
  );
}
