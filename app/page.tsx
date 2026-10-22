import AnnouncementBar from "./components/AnnouncementBar";
import SiteHeader from "./components/SiteHeader";
import Catalog from "./components/Catalog";
import ConversionCTA from "./components/ConversionCTA";
import FAQSection from "./components/FAQSection";
import FinanceCalculator from "./components/FinanceCalculator";
import FinancingSection from "./components/FinancingSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroSearch from "./components/HeroSearch";
import { SAMPLE_VEHICLES } from "./data/vehicles";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <Hero />
      <main className="mx-auto min-h-screen w-full max-w-[1440px] bg-bg text-fg selection:bg-fg selection:text-bg">
        <div className="pb-10 pt-5 md:pb-12 lg:pb-16">
          <HeroSearch />
        </div>
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
