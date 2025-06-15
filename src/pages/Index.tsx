
import HeroSection from "@/components/HeroSection";
import StepGuide from "@/components/StepGuide";
import ServicesShowcase from "@/components/ServicesShowcase";
// Removed TestimonialSection import
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import FloatingServiceButton from "@/components/FloatingServiceButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <StepGuide />
      <ServicesShowcase />
      {/* TestimonialSection removed */}
      <FAQSection />
      <Footer />
      <FloatingServiceButton />
    </div>
  );
};

export default Index;
