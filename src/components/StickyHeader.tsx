
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import RegistrationDialog from "@/components/RegistrationDialog";
import LoginDialog from "@/components/LoginDialog";

const StickyHeader = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const destinationCategories = [];

  const destinationData = {
    "Umroh": [
      { name: "Makkah & Madinah", image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png" },
      { name: "Paket Umroh Premium", image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png" }
    ],
    "Eropa": [
      { name: "Turkey", image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png" },
      { name: "Bosnia", image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png" }
    ],
    "USA": [
      { name: "New York", image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png" },
      { name: "California", image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png" }
    ],
    "Asia": [
      { name: "Malaysia", image: "/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png" },
      { name: "Singapura", image: "/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png" }
    ],
    "Private Trip": [
      { name: "Custom Umroh", image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png" },
      { name: "Family Trip", image: "/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png" }
    ]
  };

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      setShowHeader(scrollY > 200);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <img 
            src="/lovable-uploads/ff926b80-f947-409f-9bb1-b0ad45ba1c17.png" 
            alt="Bersafar Logo"
            className="h-8 w-8"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
            <span className="text-xl font-poppins font-bold text-white">
              Bersafar
            </span>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost"
              className="text-white hover:text-bersafar-primary font-poppins font-medium"
              onClick={() => setLoginOpen(true)}
            >
              Login
            </Button>
            <Button 
              className="bg-gradient-to-r from-bersafar-primary to-bersafar-secondary hover:from-bersafar-secondary hover:to-bersafar-dark text-white px-6 py-3 font-poppins font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-bersafar-light/30"
              onClick={() => setDialogOpen(true)}
            >
              Mulai Bersafar
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
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-4 space-y-4 bg-spiritual-900/95 backdrop-blur-md border-t border-spiritual-600/30">
            <Button 
              variant="ghost"
              className="w-full text-white hover:text-bersafar-primary font-poppins font-medium justify-start"
              onClick={() => {
                setLoginOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              Login
            </Button>
            <Button 
              className="w-full bg-gradient-to-r from-bersafar-primary to-bersafar-secondary hover:from-bersafar-secondary hover:to-bersafar-dark text-white font-poppins font-semibold rounded-full shadow-lg"
              onClick={() => {
                setDialogOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              Mulai Bersafar
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
