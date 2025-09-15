import type { Metadata } from "next";
import CalcHero from "@/components/tools/calculators/CalcHero";
import PositionSizeCalc from "@/components/tools/calculators/PositionSizeCalc";
import PipValueCalc from "@/components/tools/calculators/PipValueCalc";
import MarginCalc from "@/components/tools/calculators/MarginCalc";

export const metadata: Metadata = {
  title: "Forex Calculators | Fynixfx",
  description: "Position size, pip value and margin calculators to plan your trades.",
};

export default function CalculatorsPage() {
  return (
    <main>
      <CalcHero />
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PositionSizeCalc />
          <PipValueCalc />
          <MarginCalc />
        </div>
      </section>
    </main>
  );
}
