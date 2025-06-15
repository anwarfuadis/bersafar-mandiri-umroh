
import HeroSection from "@/components/HeroSection";
import StepGuide from "@/components/StepGuide";
import ServicesShowcase from "@/components/ServicesShowcase";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StepGuide />
      <ServicesShowcase />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
