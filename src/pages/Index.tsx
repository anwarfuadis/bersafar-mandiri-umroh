
import HeroSection from "@/components/HeroSection";
import LayananBersafar from "@/components/LayananBersafar";
import TripPilihan from "@/components/TripPilihan";
import StepGuide from "@/components/StepGuide";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import FloatingCartButton from "@/components/FloatingCartButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyHeader />
      <div className="pt-20">
        <HeroSection />
        <LayananBersafar />
        <TripPilihan />
        <StepGuide />
        <FAQSection />
        <Footer />
        <FloatingCartButton />
      </div>
    </div>
  );
};

export default Index;
