
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import RegistrationDialog from "@/components/RegistrationDialog";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
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
    "Umroh": ["Makkah & Madinah", "Paket Umroh Premium", "Umroh Plus Turki"],
    "Lokal": ["Yogyakarta", "Bandung", "Lombok", "Bali Halal Tour"],
    "Eropa": ["Turkey", "Bosnia", "Albania", "Andalusia Spanyol"],
    "USA": ["New York", "California", "Washington DC"],
    "Asia": ["Malaysia", "Brunei", "Singapura", "Jepang Halal"],
    "Private Trips": ["Custom Umroh", "Family Trip", "Honeymoon Halal"]
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/ihram-video.mp4" type="video/mp4" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `url('${destinations[currentSlide].image}')`,
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/40" />
      </div>

      {/* Rain Video Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/rain-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Navigation Menu */}
      <div className="absolute top-20 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex justify-center space-x-8">
            {Object.keys(destinationCategories).map((category) => (
              <button
                key={category}
                className="text-white hover:text-gold-300 font-sf font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-sf font-bold text-white mb-6 leading-tight">
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

              {/* Search Bar */}
              <div className="relative mb-8">
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
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-spiritual-100 max-h-80 overflow-y-auto z-50">
                      {Object.entries(destinationCategories).map(([category, destinations]) => (
                        <div key={category} className="p-4 border-b border-spiritual-100 last:border-b-0">
                          <h3 className="font-sf font-bold text-spiritual-800 mb-2">{category}</h3>
                          <div className="space-y-1">
                            {destinations.map((dest) => (
                              <button
                                key={dest}
                                className="block w-full text-left px-3 py-2 text-spiritual-600 hover:bg-spiritual-50 rounded-lg transition-colors"
                              >
                                <MapPin className="w-4 h-4 inline mr-2" />
                                {dest}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 px-12 py-4 text-lg font-sf font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                onClick={() => setDialogOpen(true)}
              >
                Mulai Perjalanan Halal
              </Button>
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
    </section>
  );
};

export default HeroSection;
