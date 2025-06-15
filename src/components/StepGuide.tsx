
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: "📅",
    title: "Rencanakan",
    description: "Tentukan tanggal & anggaran",
    detail: "Pilih waktu terbaik untuk perjalanan spiritual Anda"
  },
  {
    id: 2,
    icon: "✈️",
    title: "Terbang",
    description: "Cari penerbangan ke Jeddah/Madinah",
    detail: "Bandingkan harga dan jadwal dari berbagai maskapai"
  },
  {
    id: 3,
    icon: "🛂",
    title: "Visa & Dokumen",
    description: "Urus visa Umroh & asuransi",
    detail: "Proses visa mudah dengan panduan lengkap"
  },
  {
    id: 4,
    icon: "🏨",
    title: "Menginap",
    description: "Pilih hotel dekat Masjidil Haram/Nabawi",
    detail: "Hotel berkualitas dengan jarak walking distance"
  },
  {
    id: 5,
    icon: "🧕",
    title: "Bimbingan",
    description: "Temukan mutawif berpengalaman",
    detail: "Mutawif profesional untuk panduan ibadah"
  }
];

const StepGuide = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const stepWidth = 320; // 64 (w-64) + 32 (space-x-8) + 16 (padding)
    const scrollAmount = direction === 'left' ? -stepWidth : stepWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const canScrollLeft = activeStep > 1;
  const canScrollRight = activeStep < steps.length;

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-sand-50 to-white">
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-spiritual-200 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gold-200 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-spiritual-300 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sf font-light text-spiritual-800 mb-6">
            Langkah <span className="font-medium text-spiritual-600">Umroh Mandiri</span>
          </h2>
          <p className="text-xl text-spiritual-700 max-w-3xl mx-auto mb-8">
            Di step mana kamu sekarang? Pilih layanan yang dibutuhkan, skip yang tidak.
          </p>
        </div>

        {/* Horizontal Step Guide with Navigation */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scrollToStep('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-lg border border-sand-200 transition-all duration-300 ${
              canScrollLeft ? 'hover:bg-sand-50 text-spiritual-600' : 'opacity-50 cursor-not-allowed text-spiritual-300'
            }`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scrollToStep('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-lg border border-sand-200 transition-all duration-300 ${
              canScrollRight ? 'hover:bg-sand-50 text-spiritual-600' : 'opacity-50 cursor-not-allowed text-spiritual-300'
            }`}
            disabled={!canScrollRight}
          >
            <ChevronRight size={24} />
          </button>

          {/* Progress Line */}
          <div className="absolute top-16 left-12 right-12 h-1 bg-sand-200 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-spiritual-600 to-gold-500 rounded-full transition-all duration-500"
              style={{ width: `${(activeStep / steps.length) * 100}%` }}
            ></div>
          </div>

          {/* Steps Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 space-x-8 md:space-x-12 px-12 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`flex-shrink-0 w-64 cursor-pointer transition-all duration-300 ${
                  activeStep === step.id ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(step.id)}
                style={{ 
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Step Circle - Fixed cropping issue */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transition-all duration-300 ${
                  activeStep === step.id 
                    ? 'bg-gradient-to-r from-spiritual-600 to-spiritual-700 text-white shadow-lg transform scale-110' 
                    : activeStep > step.id
                    ? 'bg-gold-400 text-white'
                    : 'bg-sand-200 text-spiritual-600'
                } overflow-visible`}>
                  <span className="text-2xl">{step.icon}</span>
                </div>

                {/* Step Content */}
                <div className={`text-center transition-all duration-300 ${
                  activeStep === step.id ? 'text-spiritual-800' : 'text-spiritual-600'
                }`}>
                  <h3 className="text-lg font-sf font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-sf text-spiritual-500 mb-3">
                    {step.description}
                  </p>
                  {activeStep === step.id && (
                    <div className="animate-fade-in">
                      <p className="text-xs text-spiritual-400 mb-4">
                        {step.detail}
                      </p>
                      <Button 
                        size="sm"
                        className="bg-spiritual-600 hover:bg-spiritual-700 text-white px-4 py-2 text-sm font-sf rounded-xl"
                      >
                        Mulai Step Ini
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-sand-200">
            <h3 className="text-2xl font-sf font-semibold text-spiritual-800 mb-4">
              Siap Memulai Perjalanan Spiritual?
            </h3>
            <p className="text-spiritual-600 font-sf mb-6">
              Bergabung dengan 1000+ jamaah yang sudah merasakan kemudahan Bersafar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-spiritual-600 to-spiritual-700 hover:from-spiritual-700 hover:to-spiritual-800 text-white px-8 py-3 text-lg font-sf font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Daftar Sekarang
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-spiritual-300 text-spiritual-700 hover:bg-spiritual-50 px-8 py-3 text-lg font-sf font-medium rounded-2xl transition-all duration-300"
              >
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepGuide;
