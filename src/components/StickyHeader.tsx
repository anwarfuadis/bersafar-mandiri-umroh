
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import RegistrationDialog from "@/components/RegistrationDialog";
import LoginDialog from "@/components/LoginDialog";

const StickyHeader = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
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

  // Header is always visible now

  const headerVisible = showHeader || dialogOpen || loginOpen;

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/01cfa612-00a1-432c-8b1f-bd3f4f650ae9.png" 
            alt="Bersafar Logo"
            className="h-8 w-8"
          />
            <span className="text-xl font-poppins font-bold text-bersafar-primary">
              Bersafar
            </span>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost"
              className="text-bersafar-primary hover:text-bersafar-primary/80 font-poppins font-medium"
              onClick={() => setLoginOpen(true)}
            >
              Login
            </Button>
            <Button 
              className="bg-bersafar-primary hover:bg-bersafar-primary/90 text-white px-6 py-3 font-poppins font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
              className="text-bersafar-primary"
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
          <div className="px-6 py-4 space-y-4 bg-white border-t border-gray-200">
            <Button 
              variant="ghost"
              className="w-full text-bersafar-primary hover:text-bersafar-primary/80 font-poppins font-medium justify-start"
              onClick={() => {
                setLoginOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              Login
            </Button>
            <Button 
              className="w-full bg-bersafar-primary hover:bg-bersafar-primary/90 text-white font-poppins font-semibold rounded-lg shadow-lg"
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
