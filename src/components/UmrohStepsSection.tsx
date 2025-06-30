
import { Check } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Persiapkan paspor & vaksin",
    description: "Pastikan paspor masih berlaku minimal 6 bulan dan lengkapi vaksinasi yang diperlukan seperti vaksin COVID-19 dan vaksin lainnya sesuai ketentuan.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center"
  },
  {
    number: 2,
    title: "Booking tiket & hotel sesuai jadwal",
    description: "Pilih penerbangan dan akomodasi yang sesuai dengan budget dan preferensi. Booking terlebih dahulu karena diperlukan untuk proses visa.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&crop=center"
  },
  {
    number: 3,
    title: "Daftar Siskopatuh & urus visa",
    description: "Daftar di sistem Siskopatuh Kemenag dan ajukan visa umroh. Proses visa memerlukan bukti booking tiket dan hotel yang telah Anda lakukan.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
  },
  {
    number: 4,
    title: "Atur transportasi & itinerary",
    description: "Rencanakan perjalanan dan transportasi lokal di Arab Saudi. Pilih paket transportasi yang sesuai dengan kebutuhan ibadah Anda.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop&crop=center"
  },
  {
    number: 5,
    title: "Berangkat dan tunaikan ibadah",
    description: "Mulai perjalanan spiritual menuju Tanah Suci dengan persiapan yang matang. Nikmati pengalaman ibadah umroh mandiri yang berkesan.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop&crop=center"
  }
];

const UmrohStepsSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="min-h-screen bg-gradient-to-br from-sand-50 via-white to-spiritual-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-gold-200/20 to-gold-300/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-spiritual-200/20 to-spiritual-300/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-sand-200/30 to-sand-300/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center w-full">
          {/* Left side - Steps */}
          <div className="space-y-3 lg:space-y-4">
            <div className="mb-6 lg:mb-12">
              <h2 className="text-2xl lg:text-4xl xl:text-5xl font-sf font-bold text-spiritual-800 mb-3 lg:mb-6 leading-tight">
                Langkah Mudah<br />
                <span className="text-spiritual-600">Umroh Mandiri</span>
              </h2>
              <p className="text-base lg:text-xl text-spiritual-600 leading-relaxed">
                Ikuti 5 langkah sederhana untuk memulai perjalanan ibadah umroh mandiri Anda
              </p>
            </div>

            <div className="space-y-2 lg:space-y-3">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Separator line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-4 lg:left-5 top-8 lg:top-10 w-0.5 h-4 lg:h-6 bg-gradient-to-b from-spiritual-300 to-transparent"></div>
                  )}
                  
                  <div
                    onClick={() => setActiveStep(step.number)}
                    className={`flex items-start space-x-2 lg:space-x-3 group cursor-pointer transition-all duration-300 hover:transform hover:translate-x-1 p-2 lg:p-3 rounded-lg ${
                      activeStep === step.number 
                        ? 'bg-gradient-to-r from-spiritual-50 to-sand-50 shadow-md border border-spiritual-100' 
                        : 'hover:bg-spiritual-50/50'
                    }`}
                  >
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm shadow-lg transition-all duration-300 ${
                        activeStep === step.number
                          ? 'bg-gradient-to-br from-spiritual-600 to-spiritual-700 shadow-lg scale-110'
                          : 'bg-gradient-to-br from-spiritual-500 to-spiritual-600 group-hover:shadow-lg'
                      }`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 pt-0.5">
                      <div className="flex items-center space-x-1 mb-1">
                        <h3 className={`text-sm lg:text-base font-sf font-semibold transition-colors duration-300 ${
                          activeStep === step.number
                            ? 'text-spiritual-700'
                            : 'text-spiritual-800 group-hover:text-spiritual-600'
                        }`}>
                          {step.title}
                        </h3>
                        <Check className={`w-3 h-3 text-spiritual-500 transition-opacity duration-300 ${
                          activeStep === step.number ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`} />
                      </div>
                      <p className="text-spiritual-600 font-sf leading-relaxed text-xs lg:text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Photo (Hidden on mobile) */}
          <div className="relative order-first lg:order-last hidden lg:block">
            <div className="aspect-square bg-gradient-to-br from-spiritual-100/50 to-sand-100/50 rounded-2xl p-4 relative overflow-hidden shadow-xl transition-all duration-500">
              <img 
                src={steps.find(s => s.number === activeStep)?.image}
                alt={steps.find(s => s.number === activeStep)?.title}
                className="w-full h-full object-cover rounded-xl"
              />
              
              {/* Overlay with step info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3">
                <h3 className="text-white font-sf font-bold text-lg mb-1">
                  {steps.find(s => s.number === activeStep)?.title}
                </h3>
                <p className="text-white/80 font-sf text-sm leading-relaxed">
                  {steps.find(s => s.number === activeStep)?.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gold-300 rounded-full opacity-60"></div>
              <div className="absolute bottom-20 left-4 w-2 h-2 bg-spiritual-400 rounded-full opacity-60"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full shadow-lg opacity-80"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-spiritual-500 to-spiritual-600 rounded-full shadow-lg opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmrohStepsSection;
