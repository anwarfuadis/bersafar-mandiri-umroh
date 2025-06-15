
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sand-50 to-sand-100">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand-50/50 to-sand-100"></div>
        {/* Floating geometric shapes for Islamic aesthetic */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-spiritual-100 rounded-full opacity-20 animate-pulse-gentle"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gold-100 rounded-full opacity-30 animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-spiritual-200 transform rotate-45 opacity-20 animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Brand Logo/Name */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-sf font-light text-spiritual-800 mb-2 tracking-tight">
              Bersafar
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-spiritual-600 to-gold-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Main Tagline */}
          <h2 className="text-4xl md:text-6xl font-sf font-light text-spiritual-800 mb-6 leading-tight">
            Umroh <span className="font-medium text-spiritual-600">Mandiri</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-spiritual-700 mb-4 font-sf font-light">
            Sesimpel yang Kamu Bayangkan
          </p>
          
          <p className="text-lg text-spiritual-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Pilih layanan yang kamu butuhkan, skip yang tidak. 
            <br className="hidden md:block" />
            Visa, hotel, penerbangan, dan mutawif - semuanya à la carte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-spiritual-600 hover:bg-spiritual-700 text-white px-8 py-6 text-lg font-sf font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Mulai Perjalananmu
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-spiritual-300 text-spiritual-700 hover:bg-spiritual-50 px-8 py-6 text-lg font-sf font-medium rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Lihat Layanan
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/70 transition-all duration-300">
              <div className="text-gold-600 text-3xl mb-2">★★★★★</div>
              <div className="text-spiritual-600 font-sf font-medium text-lg">4.9/5</div>
              <div className="text-sm text-spiritual-500 font-sf">Rating Kepuasan</div>
            </div>
            
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/70 transition-all duration-300">
              <div className="text-spiritual-600 font-sf font-bold text-2xl mb-2">1000+</div>
              <div className="text-sm text-spiritual-500 font-sf">Jamaah Terlayani</div>
            </div>
            
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/70 transition-all duration-300">
              <div className="text-spiritual-600 font-sf font-bold text-2xl mb-2">100%</div>
              <div className="text-sm text-spiritual-500 font-sf">Visa Approval</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-spiritual-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-spiritual-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
