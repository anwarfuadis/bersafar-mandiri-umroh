
import HeroSection from "@/components/HeroSection";
import LayananBersafar from "@/components/LayananBersafar";
import TripPilihan from "@/components/TripPilihan";
import StepGuide from "@/components/StepGuide";
import BersafarValues from "@/components/BersafarValues";
import BersafarSnapshot from "@/components/BersafarSnapshot";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import FloatingCartButton from "@/components/FloatingCartButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <LayananBersafar />
      <TripPilihan />
      <StepGuide />
      <BersafarValues />
      <BersafarSnapshot />
      <FAQSection />
      <Footer />
      <FloatingCartButton />
    </div>
  );
};

export default Index;
