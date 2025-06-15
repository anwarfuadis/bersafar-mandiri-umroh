import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CalendarCheck, IdCard, Globe, Plane, Hotel, ChevronLeft, ChevronRight } from "lucide-react";
const steps = [{
  id: 1,
  title: "Tentukan Waktu Keberangkatan",
  description: "Pilih waktu terbaik untuk perjalanan umroh kamu sebaiknya persiapan 1-2 bulan sebelum keberangkatan.",
  icon: CalendarCheck
}, {
  id: 2,
  title: "Buat Paspor (jika belum punya)",
  description: "Urus di Kantor Imigrasi terdekat.\nWaktu proses: ±1 minggu.",
  icon: IdCard
}, {
  id: 3,
  title: "Urus Visa Umroh",
  description: "Untuk Umroh mandiri, ajukan Visa Umroh melalui:\nBersafar atau Agen travel (bisa hanya untuk visa saja).",
  icon: Globe
}, {
  id: 4,
  title: "Booking Tiket Pesawat",
  description: "Cari tiket Jakarta – Jeddah / Madinah PP.\nEh Bersafar menyediakan tiket pesawat murah. Silakan Cek !",
  icon: Plane
}, {
  id: 5,
  title: "Booking Hotel",
  description: "Cari hotel dekat Masjidil Haram (Mekkah) dan Masjid Nabawi (Madinah).",
  icon: Hotel
}];
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
    const stepWidth = 320;
    const scrollAmount = direction === 'left' ? -stepWidth : stepWidth;
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };
  const canScrollLeft = activeStep > 1;
  const canScrollRight = activeStep < steps.length;

  // Helper to apply green gradient to icon using SVG linearGradient in <defs>
  const GradientIcon = ({
    Icon
  }: {
    Icon: any;
  }) => <svg width={44} height={44} className="mx-auto mb-2" viewBox="0 0 44 44" fill="none">
      <defs>
        <linearGradient id="icon-step-gradient" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2FA86E" />
          <stop offset="1" stopColor="#0A5F38" />
        </linearGradient>
      </defs>
      <g>
        <Icon size={40} stroke="url(#icon-step-gradient)" color="url(#icon-step-gradient)" />
      </g>
    </svg>;
  return <section className="relative py-20 overflow-hidden bg-gradient-to-b from-sand-50 to-white">
      {/* Parallax background elements */}
      <div className="absolute inset-0 opacity-5" style={{
      transform: `translateY(${scrollY * 0.2}px)`
    }}>
        <div className="absolute top-20 left-10 w-64 h-64 bg-spiritual-200 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gold-200 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-spiritual-300 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sf font-light text-spiritual-800 mb-6">
            Langkah <span className="font-medium text-spiritual-600">Umroh Mandiri</span>
          </h2>
          <p className="text-xl text-spiritual-700 max-w-3xl mx-auto mb-8 font-sf">
            kamu udah di <b>step mana</b> nih?
          </p>
        </div>

        {/* Horizontal Step Guide with Navigation */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button onClick={() => {
          if (canScrollLeft) setActiveStep(activeStep - 1);
          scrollToStep('left');
        }} className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-lg border border-sand-200 transition-all duration-300 ${canScrollLeft ? "hover:bg-sand-50 text-spiritual-600" : "opacity-50 cursor-not-allowed text-spiritual-300"}`} disabled={!canScrollLeft} aria-label="Sebelumnya">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => {
          if (canScrollRight) setActiveStep(activeStep + 1);
          scrollToStep('right');
        }} className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-lg border border-sand-200 transition-all duration-300 ${canScrollRight ? "hover:bg-sand-50 text-spiritual-600" : "opacity-50 cursor-not-allowed text-spiritual-300"}`} disabled={!canScrollRight} aria-label="Berikutnya">
            <ChevronRight size={24} />
          </button>

          {/* Progress Bar with Step Numbers */}
          <div className="relative flex flex-col items-center mb-6">
            <div className="relative w-full max-w-3xl h-6 flex items-center">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 bg-sand-200 rounded-full z-0"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 bg-gradient-to-r from-spiritual-600 to-gold-500 rounded-full z-10 transition-all duration-500" style={{
              width: `${activeStep / steps.length * 100}%`
            }}></div>
              {/* Step number indicators */}
              <div className="relative flex justify-between items-center w-full z-20 px-3">
                {steps.map((step, idx) => <div key={step.id} className={`
                      flex flex-col items-center
                      ${activeStep === step.id ? "font-bold text-spiritual-700" : "text-spiritual-400"}
                      transition-all duration-300
                    `}>
                    <span className={`
                        flex items-center justify-center w-8 h-8 
                        rounded-full text-base font-sf
                        ${activeStep === step.id ? "bg-gradient-to-r from-spiritual-600 to-gold-500 text-white shadow-md" : "bg-white border border-sand-200"}
                        mb-1
                        transition-all duration-300
                      `}>
                      {step.id}
                    </span>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Steps Container */}
          <div ref={scrollContainerRef} className="flex overflow-x-auto pb-8 space-x-8 md:space-x-12 px-12 scrollbar-hide" style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}>
            {steps.map((step, index) => {
            const Icon = step.icon;
            return <div key={step.id} className={`flex-shrink-0 w-64 cursor-pointer transition-all duration-300 ${activeStep === step.id ? "scale-105" : "hover:scale-102"}`} onClick={() => setActiveStep(step.id)} style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  {/* Step Icon Only, No Number or Background */}
                  <div className="flex justify-center mb-3">
                    <GradientIcon Icon={Icon} />
                  </div>

                  {/* Step Content */}
                  <div className={`text-center transition-all duration-300 font-sf ${activeStep === step.id ? "text-spiritual-800" : "text-spiritual-600"}`}>
                    <h3 className="text-lg font-sf font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm font-sf text-spiritual-500 mb-3 whitespace-pre-line">{step.description}</p>
                    {activeStep === step.id && <div className="animate-fade-in">
                        <Button size="sm" className="bg-spiritual-600 hover:bg-spiritual-700 text-white px-4 py-2 text-sm font-sf rounded-xl">
                          Mulai Step Ini
                        </Button>
                      </div>}
                  </div>
                </div>;
          })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-sand-200">
            <h3 className="text-2xl font-sf font-semibold text-spiritual-800 mb-4">
              Siap Umrah Mandiri Sekarang?
            </h3>
            <p className="text-spiritual-600 font-sf mb-6">Umroh bisa lebih hemat jutaan Rupiah lewat Bersafar</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-spiritual-600 to-spiritual-700 hover:from-spiritual-700 hover:to-spiritual-800 text-white px-8 py-3 text-lg font-sf font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">Join Waiting List</Button>
              <Button variant="outline" size="lg" className="border-2 border-spiritual-300 text-spiritual-700 hover:bg-spiritual-50 px-8 py-3 text-lg font-sf font-medium rounded-2xl transition-all duration-300">Tanya Dulu</Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default StepGuide;