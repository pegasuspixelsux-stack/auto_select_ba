import AnnouncementBar from "./components/AnnouncementBar";
import SiteHeader from "./components/SiteHeader";
import Catalog from "./components/Catalog";
import ConversionCTA from "./components/ConversionCTA";
import FAQSection from "./components/FAQSection";
import FinanceCalculator from "./components/FinanceCalculator";
import FinancingSection from "./components/FinancingSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { SAMPLE_VEHICLES } from "./data/vehicles";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <Hero />
      <main className="mx-auto min-h-screen w-full max-w-[1440px] bg-bg text-fg selection:bg-fg selection:text-bg">
        <Catalog vehicles={SAMPLE_VEHICLES} />
        <FinancingSection />
        <FinanceCalculator />
        <FAQSection />
        <ConversionCTA />
        <Footer />
      </main>
    </>
  );
}
