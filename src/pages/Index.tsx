
import HeroSection from "@/components/HeroSection";
import UmrohStepsSection from "@/components/UmrohStepsSection";
import StepGuide from "@/components/StepGuide";
import ServicesShowcase from "@/components/ServicesShowcase";
// Removed: import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import FloatingCartButton from "@/components/FloatingCartButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <UmrohStepsSection />
      <StepGuide />
      <ServicesShowcase />
      {/* <TestimonialSection /> removed */}
      <FAQSection />
      <Footer />
      <FloatingCartButton />
    </div>
  );
};

export default Index;
