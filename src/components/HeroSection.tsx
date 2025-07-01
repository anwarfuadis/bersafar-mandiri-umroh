
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import RegistrationDialog from "@/components/RegistrationDialog";
import LoginDialog from "@/components/LoginDialog";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  const destinations = [
    {
      name: "Makkah & Madinah",
      image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png",
      category: "Umroh"
    },
    {
      name: "Turkey",
      image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png", 
      category: "International"
    },
    {
      name: "Yogyakarta",
      image: "/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png",
      category: "Local"
    }
  ];

  const taglineWords = ["Beribadah", "Berpahala", "Berdzikir"];
  const [currentWord, setCurrentWord] = useState(0);

  const menuItems = ["Umroh", "Eropa", "USA", "Asia", "Private Trip"];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % taglineWords.length);
    }, 2000);
    return () => clearInterval(wordTimer);
  }, []);

  const destinationCategories = {
    "Umroh": [
      { name: "Makkah & Madinah", image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png" },
      { name: "Paket Umroh Premium", image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png" },
      { name: "Umroh Plus Turki", image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png" }
    ],
    "Eropa": [
      { name: "Turkey", image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png" },
      { name: "Bosnia", image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png" },
      { name: "Albania", image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png" }
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

  const isScrolled = scrollY > 100;

  return (
    <>
      {/* Sticky Menu */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-green-800/95 backdrop-blur-md' : 'bg-white/10 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-center">
            <div className={`${isScrolled ? 'bg-transparent' : 'bg-white/10'} backdrop-blur-md rounded-full px-8 py-4 border ${isScrolled ? 'border-green-600/30' : 'border-white/20'}`}>
              <div className="flex items-center space-x-8">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/c763f5f3-1693-45ce-8d6c-1d107368526d.png" 
                    alt="Bersafar Logo"
                    className="h-8 w-8"
                    style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                  />
                  <span className="text-xl font-sf font-bold text-white">
                    Bersafar
                  </span>
                </div>

                {/* Menu Items */}
                <div className="hidden md:flex items-center space-x-6">
                  {menuItems.map((item) => (
                    <button
                      key={item}
                      className="text-white hover:text-gold-300 font-sf font-medium px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* Search Bar - Only show when scrolled */}
                {isScrolled && (
                  <div className="relative flex-1 max-w-md mx-8">
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
                          {Object.entries(destinationCategories).map(([category, destinations]) => (
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
                                    <MapPin className="w-4 h-4 mr-2" />
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
                )}

                {/* Buttons */}
                <div className="flex items-center space-x-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Cappadocia Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `url('/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png')`,
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/40" />
        </div>

        {/* Auto-play Video Overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-20 w-full px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="animate-fade-in">
                <h1 id="hero-brand" className="text-6xl md:text-7xl lg:text-8xl font-sf font-bold text-white mb-6 leading-tight">
                  A Muslim Journey
                  <br />
                  <span className="text-gold-400">Starts Here</span>
                </h1>

                <div className="mb-8">
                  <p className="text-2xl md:text-3xl font-sf font-semibold text-white mb-2">
                    Bersafar untuk{" "}
                    <span className="text-gold-400 transition-all duration-500">
                      {taglineWords[currentWord]}
                    </span>
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></div>
                </div>

                {/* Search Bar - Only show when not scrolled */}
                {!isScrolled && (
                  <div className="relative mb-8 z-50">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl">
                      <div className="flex items-center space-x-4">
                        <Search className="w-6 h-6 text-spiritual-600" />
                        <Input
                          placeholder="Cari destinasi impian Anda..."
                          className="border-0 bg-transparent text-lg focus:ring-0 placeholder:text-spiritual-500"
                          onFocus={() => setSearchOpen(true)}
                          onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                        />
                        <Button className="bg-gradient-to-r from-spiritual-600 to-gold-500 hover:from-spiritual-700 hover:to-gold-600 text-white px-8 py-3 rounded-xl">
                          Cari
                        </Button>
                      </div>

                      {searchOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-spiritual-100 max-h-80 overflow-y-auto z-[60]">
                          {Object.entries(destinationCategories).map(([category, destinations]) => (
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
                                    <MapPin className="w-4 h-4 mr-2" />
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
                )}
              </div>
            </div>

            {/* Right Content - Destination Showcase */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-sf font-bold text-white mb-2">Destinasi Populer</h3>
                  <p className="text-white/80">Jelajahi keindahan dunia dengan cara halal</p>
                </div>
                
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={destinations[currentSlide].image}
                    alt={destinations[currentSlide].name}
                    className="w-full h-full object-cover transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-gold-500 text-spiritual-900 mb-2">
                      {destinations[currentSlide].category}
                    </Badge>
                    <h4 className="text-xl font-sf font-bold text-white">
                      {destinations[currentSlide].name}
                    </h4>
                  </div>
                </div>

                <div className="flex justify-center space-x-2">
                  {destinations.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-gold-400' : 'bg-white/30'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <RegistrationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
      </section>
    </>
  );
};

export default HeroSection;
