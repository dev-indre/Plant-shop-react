import BestSection from "./Components/BestSection";
import CategoriesSection from "./Components/CategoriesSection";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import HotSection from "./Components/HotSection";
import TopBanner from "./Components/TopBanner";

export default function App() {
  return (
    <>
      <TopBanner />
      <Header />
      <Hero />
      <CategoriesSection />
      <BestSection />
      <HotSection />
    </>
  );
}
