import BestSection from "../Components/BestSection";
import CategoriesSection from "../Components/CategoriesSection";
import DealsSection from "../Components/DealsSection";
import Hero from "../Components/Hero";
import HotSection from "../Components/HotSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <BestSection />
      <HotSection />
      <DealsSection />
    </>
  );
}
