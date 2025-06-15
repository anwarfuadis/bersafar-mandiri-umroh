import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Pilih Layanan",
    description: "Pilih layanan sesuai kebutuhan perjalanan umroh mandirimu",
    icon: "🔍",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "Isi Data & Bayar",
    description: "Lengkapi data jamaah dan lakukan pembayaran dengan mudah",
    icon: "📝",
    color: "from-amber-500 to-orange-400"
  },
  {
    id: 3,
    title: "Terima Dokumen",
    description: "Dokumen perjalanan umroh akan dikirim ke emailmu",
    icon: "📱",
    color: "from-green-500 to-emerald-400"
  },
  {
    id: 4,
    title: "Berangkat!",
    description: "Jalani ibadah umroh mandiri dengan tenang dan khusyuk",
    icon: "✈️",
    color: "from-purple-500 to-indigo-400"
  }
];

const StepGuide = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative py-20 md:py-32">
      {/* Title changed from Kenapa Bersafar? to Kata Mereka */}
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-sf font-light text-spiritual-900 mb-3">
          Kata <span className="font-semibold text-gold-400">Mereka</span>
        </h2>
        <p className="text-lg text-spiritual-700 max-w-3xl mx-auto leading-relaxed">
          Kami memudahkan perjalanan umroh mandirimu dengan layanan yang fleksibel dan transparan
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transform: `translateY(${scrollY * 0.02}px)`
              }}
            >
              <Card className={cn(
                "relative overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-all duration-500",
                "bg-white hover:translate-y-[-5px]"
              )}>
                <div className={cn(
                  "absolute top-0 left-0 h-1 w-full bg-gradient-to-r",
                  step.color
                )}></div>
                
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-spiritual-100 text-2xl">
                      {step.icon}
                    </div>
                    <div className="flex items-center text-xl font-semibold text-spiritual-900">
                      <span className="text-gold-500 mr-2">{step.id}.</span> {step.title}
                    </div>
                  </div>
                  
                  <p className="text-spiritual-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepGuide;
