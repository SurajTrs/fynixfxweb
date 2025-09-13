import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import StatsBar from "@/components/StatsBar";
import RawSpreadAdvantage from "@/components/RawSpreadAdvantage";
import IcFeatures from "@/components/IcFeatures";
import TradingTerminals from "@/components/TradingTerminals";
import MarketsAtFingertips from "@/components/MarketsAtFingertips";
import StrengthNumbers from "@/components/StrengthNumbers";
import AutomatedEdge from "@/components/AutomatedEdge";
import PaymentsAndSteps from "@/components/PaymentsAndSteps";
import MobileAppPromo from "@/components/MobileAppPromo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <StatsBar />
     

     <RawSpreadAdvantage />
     <IcFeatures />
     <StrengthNumbers />
  
     <TradingTerminals />
     <MarketsAtFingertips />
     <AutomatedEdge />
     <PaymentsAndSteps />
     <MobileAppPromo />
    </main>
  );
}
