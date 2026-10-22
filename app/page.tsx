import AnnouncementBar from "./components/AnnouncementBar";
import PublishSection from "./components/PublishSection";
import SiteHeader from "./components/SiteHeader";
import BankTicker from "./components/BankTicker";
import Catalog from "./components/Catalog";
import FinanceCalculator from "./components/FinanceCalculator";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NewListings from "./components/NewListings";
import DealershipBar from "./components/DealershipBar";
import {
  DEALERSHIPS,
  SAMPLE_VEHICLES,
  vehiclesByDealer,
} from "./data/vehicles";

const LATEST = [...SAMPLE_VEHICLES]
  .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  .slice(0, 12);

const DEALER_ITEMS = DEALERSHIPS.map((d) => ({
  id: d.id,
  name: d.name,
  logoUrl: d.logo,
  slug: d.slug,
  vehicleCount: vehiclesByDealer(d.id).length,
}));

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <Hero />
      <main className="mx-auto min-h-screen w-full max-w-[1440px] bg-bg text-fg selection:bg-fg selection:text-bg">
        <NewListings vehicles={LATEST} />
        <DealershipBar dealerships={DEALER_ITEMS} />
        <Catalog vehicles={SAMPLE_VEHICLES} />
        <FinanceCalculator />
        <BankTicker />
        <PublishSection />
        <Footer />
      </main>
    </>
  );
}
