
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    icon: "📅",
    title: "Rencanakan",
    description: "Tentukan tanggal & anggaran",
    details: "Gunakan budget calculator kami untuk merencanakan perjalanan"
  },
  {
    id: 2,
    icon: "✈️", 
    title: "Terbang",
    description: "Cari penerbangan ke Jeddah/Madinah",
    details: "Booking tiket pesawat dengan harga terbaik"
  },
  {
    id: 3,
    icon: "🛂",
    title: "Visa & Dokumen", 
    description: "Urus visa Umroh & asuransi",
    details: "Visa processing: Rp 1.2JT - 100% approval rate"
  },
  {
    id: 4,
    icon: "🏨",
    title: "Menginap",
    description: "Pilih hotel dekat Masjidil Haram/Nabawi", 
    details: "Hotel booking dengan lokasi strategis"
  },
  {
    id: 5,
    icon: "🧕",
    title: "Bimbingan",
    description: "Temukan mutawif berpengalaman",
    details: "Mutawif guide hiring dengan pengalaman 10+ tahun"
  }
];

const StepGuide = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-sand-100 to-sand-200">
      {/* Background elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="absolute top-20 right-10 w-32 h-32 bg-spiritual-200 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gold-200 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sf font-light text-spiritual-800 mb-6">
            Panduan <span className="font-medium text-spiritual-600">Umroh Mandiri</span>
          </h2>
          <p className="text-xl text-spiritual-700 max-w-3xl mx-auto mb-8">
            5 langkah simpel untuk memulai perjalanan spiritualmu
          </p>
          <p className="text-lg text-spiritual-600 font-sf font-medium">
            Di step mana kamu sekarang?
          </p>
        </div>

        {/* Steps - Horizontal Scroller */}
        <div className="relative mb-12">
          <div className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex-shrink-0 w-80 cursor-pointer transition-all duration-300 ${
                  currentStep === step.id 
                    ? 'transform scale-105' 
                    : 'hover:scale-102'
                }`}
                onClick={() => setCurrentStep(step.id)}
              >
                <div className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${
                  currentStep === step.id
                    ? 'bg-white border-spiritual-400 shadow-xl'
                    : 'bg-white/80 border-spiritual-200 hover:border-spiritual-300 shadow-lg'
                }`}>
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-spiritual-600 text-white rounded-full flex items-center justify-center font-sf font-bold text-sm">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 text-center">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-sf font-semibold text-spiritual-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-spiritual-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-sm text-spiritual-500 font-sf">
                      {step.details}
                    </p>
                  </div>

                  {/* Active indicator */}
                  {currentStep === step.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                      <div className="w-3 h-3 bg-spiritual-600 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    currentStep >= step.id 
                      ? 'bg-spiritual-600' 
                      : 'bg-spiritual-300 hover:bg-spiritual-400'
                  }`}
                  onClick={() => setCurrentStep(step.id)}
                />
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-1 transition-all duration-300 ${
                    currentStep > step.id ? 'bg-spiritual-600' : 'bg-spiritual-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-spiritual-600 hover:bg-spiritual-700 text-white px-8 py-6 text-lg font-sf font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Lanjutkan ke Step {currentStep}
          </Button>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style>
        {`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
};

export default StepGuide;
