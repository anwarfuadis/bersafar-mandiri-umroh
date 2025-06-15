
import { useState } from "react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    icon: "📅",
    title: "Rencanakan",
    description: "Tentukan tanggal & anggaran",
    action: "Budget Calculator",
    price: null
  },
  {
    id: 2,
    icon: "✈️",
    title: "Terbang",
    description: "Cari penerbangan ke Jeddah/Madinah",
    action: "Cari Penerbangan",
    price: "Mulai Rp 8,5JT"
  },
  {
    id: 3,
    icon: "🛂",
    title: "Visa & Dokumen",
    description: "Urus visa Umroh & asuransi",
    action: "Proses Visa",
    price: "Rp 1,2JT"
  },
  {
    id: 4,
    icon: "🏨",
    title: "Menginap",
    description: "Pilih hotel dekat Masjidil Haram/Nabawi",
    action: "Pilih Hotel",
    price: "Mulai Rp 500rb/malam"
  },
  {
    id: 5,
    icon: "🧕",
    title: "Bimbingan",
    description: "Temukan mutawif berpengalaman",
    action: "Cari Mutawif",
    price: "Rp 2,5JT"
  }
];

const StepGuide = () => {
  const [currentStep, setCurrentStep] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sf font-light text-spiritual-800 mb-6">
            Lima Langkah <span className="font-medium text-spiritual-600">Mudah</span>
          </h2>
          <p className="text-xl text-spiritual-600 mb-8 max-w-3xl mx-auto">
            Di step mana kamu sekarang? Klik untuk langsung ke layanan yang kamu butuhkan.
          </p>
        </div>

        {/* Horizontal Scroller */}
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`flex-shrink-0 w-80 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer snap-center border-2 ${
                  currentStep === step.id 
                    ? 'border-spiritual-400 scale-105' 
                    : 'border-sand-200 hover:border-spiritual-200'
                }`}
                onClick={() => setCurrentStep(currentStep === step.id ? null : step.id)}
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-spiritual-100 rounded-full flex items-center justify-center text-spiritual-600 font-sf font-medium">
                      {step.id}
                    </div>
                    <div className="text-4xl">{step.icon}</div>
                  </div>
                  
                  {step.price && (
                    <div className="text-right">
                      <div className="text-sm text-spiritual-500 font-sf">Mulai dari</div>
                      <div className="text-lg font-sf font-semibold text-spiritual-700">{step.price}</div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-sf font-semibold text-spiritual-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-spiritual-600 font-sf leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Action button */}
                <Button 
                  className={`w-full py-3 font-sf font-medium rounded-xl transition-all duration-300 ${
                    currentStep === step.id
                      ? 'bg-spiritual-600 hover:bg-spiritual-700 text-white'
                      : 'bg-spiritual-50 hover:bg-spiritual-100 text-spiritual-700'
                  }`}
                >
                  {step.action}
                </Button>

                {/* Progress indicator */}
                <div className="mt-6 flex space-x-1">
                  {steps.map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        i <= index ? 'bg-spiritual-400' : 'bg-sand-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows for desktop */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4">
            <Button 
              variant="outline" 
              size="sm"
              className="w-12 h-12 rounded-full border-spiritual-200 hover:border-spiritual-400 hover:bg-spiritual-50"
            >
              ←
            </Button>
          </div>
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4">
            <Button 
              variant="outline" 
              size="sm"
              className="w-12 h-12 rounded-full border-spiritual-200 hover:border-spiritual-400 hover:bg-spiritual-50"
            >
              →
            </Button>
          </div>
        </div>

        {/* Progress save CTA */}
        <div className="text-center mt-12">
          <p className="text-spiritual-600 font-sf mb-4">
            Simpan progres perjalananmu dengan mendaftar
          </p>
          <Button 
            variant="outline"
            className="border-2 border-gold-400 text-gold-700 hover:bg-gold-50 px-6 py-3 font-sf font-medium rounded-xl"
          >
            Daftar Gratis
          </Button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default StepGuide;
