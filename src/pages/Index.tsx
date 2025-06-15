import HeroSection from "@/components/HeroSection";
import StepGuide from "@/components/StepGuide";
import ServicesShowcase from "@/components/ServicesShowcase";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import FloatingCartButton from "@/components/FloatingCartButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <StepGuide />
      <ServicesShowcase />
      <TestimonialSection />
      <FAQSection />
      <Footer />
      <FloatingCartButton />
    </div>
  );
};

export default Index;
