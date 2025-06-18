
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Asterisk, Menu, X } from "lucide-react";
import RegistrationDialog from "@/components/RegistrationDialog";
import LoginDialog from "@/components/LoginDialog";

const StickyHeader = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showAnimatedElements, setShowAnimatedElements] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      // Show header when scrollY > 8px
      setShowHeader(scrollY > 8);
      
      // Show animated elements when passing the hero brand section
      const heroBrand = document.getElementById('hero-brand');
      const heroButton = document.getElementById('hero-cta-button');
      
      if (heroBrand && heroButton) {
        const brandRect = heroBrand.getBoundingClientRect();
        const buttonRect = heroButton.getBoundingClientRect();
        
        // Show when brand is above viewport or button is above viewport
        setShowAnimatedElements(brandRect.bottom < 0 || buttonRect.bottom < 0);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure header is visible if dialogOpen or loginOpen is true
  const headerVisible = showHeader || dialogOpen || loginOpen;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 bg-spiritual-800/95 backdrop-blur-md border-b border-spiritual-600/30 transition-all duration-300
          ${headerVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3">
            <Asterisk 
              className={`h-8 w-8 text-gold-400 transition-all duration-500 ${
                showAnimatedElements ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`} 
            />
            <span 
              className={`text-xl font-sf font-bold text-white transition-all duration-500 ${
                showAnimatedElements ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'
              }`}
            >
              Bersafar
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost"
              className="text-white hover:text-gold-300 font-sf font-medium animate-fade-in"
              onClick={() => setLoginOpen(true)}
            >
              Login
            </Button>
            <Button 
              size="default" 
              className={`bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 px-8 py-3 font-sf font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gold-400/30 ${
                showAnimatedElements ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'
              }`}
              onClick={() => setDialogOpen(true)}
            >
              Mulai Perjalananmu
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-4 space-y-4 bg-spiritual-900/95 backdrop-blur-md border-t border-spiritual-600/30">
            <Button 
              variant="ghost"
              className="w-full text-white hover:text-gold-300 font-sf font-medium justify-start animate-fade-in"
              onClick={() => {
                setLoginOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              Login
            </Button>
            <Button 
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-sf font-semibold rounded-full shadow-lg"
              onClick={() => {
                setDialogOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              Mulai Perjalananmu
            </Button>
          </div>
        </div>
      </header>
      <RegistrationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
};

export default StickyHeader;
