
import HeroSection from "@/components/HeroSection";
import LimitedOffers from "@/components/LimitedOffers";
import TripPilihan from "@/components/TripPilihan";
import UmrohStepsSection from "@/components/UmrohStepsSection";
import StepGuide from "@/components/StepGuide";
import ServicesShowcase from "@/components/ServicesShowcase";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import FloatingCartButton from "@/components/FloatingCartButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <LimitedOffers />
      <TripPilihan />
      <UmrohStepsSection />
      <StepGuide />
      <ServicesShowcase />
      <FAQSection />
      <Footer />
      <FloatingCartButton />
    </div>
  );
};

export default Index;
