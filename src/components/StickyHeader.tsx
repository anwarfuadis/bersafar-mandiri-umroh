
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

  const destinationCategories = ["Umroh", "Eropa", "USA", "Asia", "Private Trip"];

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
              src="/lovable-uploads/c763f5f3-1693-45ce-8d6c-1d107368526d.png" 
              alt="Bersafar Logo"
              className="h-8 w-8"
              style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346%) brightness(104%) contrast(97%)' }}
            />
            <span className="text-xl font-sf font-bold text-white">
              Bersafar
            </span>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {destinationCategories.map((category) => (
              <button
                key={category}
                className="text-white hover:text-gold-300 font-sf font-medium px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex relative flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
              <Input
                placeholder="Cari destinasi..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-gold-400 focus:ring-gold-400"
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
              />
              
              {searchOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-spiritual-100 max-h-80 overflow-y-auto z-[60]">
                  {Object.entries(destinationData).map(([category, destinations]) => (
                    <div key={category} className="p-4 border-b border-spiritual-100 last:border-b-0">
                      <h3 className="font-sf font-bold text-spiritual-800 mb-2">{category}</h3>
                      <div className="space-y-1">
                        {destinations.map((dest) => (
                          <button
                            key={dest.name}
                            className="flex items-center w-full text-left px-3 py-2 text-spiritual-600 hover:bg-spiritual-50 rounded-lg transition-colors"
                          >
                            <img 
                              src={dest.image} 
                              alt={dest.name}
                              className="w-8 h-8 rounded object-cover mr-3"
                            />
                            {dest.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost"
              className="text-white hover:text-gold-300 font-sf font-medium"
              onClick={() => setLoginOpen(true)}
            >
              Login
            </Button>
            <Button 
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 px-6 py-3 font-sf font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gold-400/30"
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
            <div className="space-y-2 border-b border-spiritual-600/30 pb-4">
              {destinationCategories.map((category) => (
                <button
                  key={category}
                  className="block w-full text-left text-white hover:text-gold-300 font-sf font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
            
            <Button 
              variant="ghost"
              className="w-full text-white hover:text-gold-300 font-sf font-medium justify-start"
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
