
import HeroSection from "@/components/HeroSection";
import StepGuide from "@/components/StepGuide";
import ServicesShowcase from "@/components/ServicesShowcase";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import FloatingCartButton from "@/components/FloatingCartButton";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  // Pass an onStartJourney handler to HeroSection
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection onStartJourney={() => navigate("/register")} />
      <StepGuide />
      <ServicesShowcase />
      {/* No TestimonialSection per user request */}
      <FAQSection />
      <Footer />
      <FloatingCartButton />
    </div>
  );
};

export default Index;

