
import { Check } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Persiapkan paspor & vaksin",
    description: "Pastikan paspor masih berlaku minimal 6 bulan"
  },
  {
    number: 2,
    title: "Daftar Siskopatuh & urus visa",
    description: "Daftar di sistem dan ajukan visa umroh"
  },
  {
    number: 3,
    title: "Booking tiket & hotel sesuai jadwal",
    description: "Pilih penerbangan dan akomodasi yang sesuai"
  },
  {
    number: 4,
    title: "Atur transportasi & itinerary",
    description: "Rencanakan perjalanan dan transportasi lokal"
  },
  {
    number: 5,
    title: "Berangkat dan tunaikan ibadah",
    description: "Mulai perjalanan spiritual menuju Tanah Suci"
  }
];

const StepIllustration = ({ activeStep }: { activeStep: number }) => {
  const illustrations = {
    1: (
      // Passport & Vaccine illustration
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="mb-6">
          <div className="w-20 h-24 bg-gradient-to-b from-spiritual-800 to-spiritual-900 rounded-lg shadow-xl relative mb-4">
            <div className="absolute inset-2 border-2 border-gold-400 rounded opacity-60"></div>
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-sand-200 rounded-full"></div>
          </div>
          <div className="w-6 h-6 bg-spiritual-600 rounded-full mx-auto"></div>
        </div>
        <h3 className="text-xl font-sf font-bold text-spiritual-800 mb-2">
          Dokumen & Kesehatan
        </h3>
        <p className="text-spiritual-600 font-sf text-sm max-w-xs">
          Siapkan paspor dan sertifikat vaksin untuk perjalanan ibadah
        </p>
      </div>
    ),
    2: (
      // Siskopatuh & Visa illustration
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="mb-6">
          <div className="w-24 h-16 bg-gradient-to-br from-spiritual-600 to-spiritual-700 rounded-lg shadow-xl relative mb-4">
            <div className="absolute inset-1 bg-white rounded opacity-90"></div>
            <div className="absolute top-2 left-2 right-2 h-1 bg-spiritual-600 rounded"></div>
            <div className="absolute top-4 left-2 right-2 h-1 bg-spiritual-300 rounded"></div>
            <div className="absolute top-6 left-2 w-8 h-1 bg-spiritual-300 rounded"></div>
          </div>
          <div className="w-8 h-8 bg-gold-400 rounded-full mx-auto flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-sf font-bold text-spiritual-800 mb-2">
          Registrasi & Visa
        </h3>
        <p className="text-spiritual-600 font-sf text-sm max-w-xs">
          Daftar di Siskopatuh dan urus visa umroh resmi
        </p>
      </div>
    ),
    3: (
      // Booking illustration
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="mb-6">
          <div className="flex space-x-2 mb-4">
            <div className="w-16 h-12 bg-gradient-to-br from-spiritual-600 to-spiritual-700 rounded shadow-lg"></div>
            <div className="w-12 h-12 bg-gradient-to-br from-sand-400 to-sand-500 rounded shadow-lg"></div>
          </div>
          <div className="w-20 h-3 bg-spiritual-200 rounded-full"></div>
        </div>
        <h3 className="text-xl font-sf font-bold text-spiritual-800 mb-2">
          Tiket & Hotel
        </h3>
        <p className="text-spiritual-600 font-sf text-sm max-w-xs">
          Booking penerbangan dan akomodasi sesuai jadwal
        </p>
      </div>
    ),
    4: (
      // Transportation illustration
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-spiritual-600 rounded-full"></div>
            <div className="w-12 h-1 bg-spiritual-300 rounded"></div>
            <div className="w-8 h-8 bg-gold-400 rounded-full"></div>
            <div className="w-12 h-1 bg-spiritual-300 rounded"></div>
            <div className="w-8 h-8 bg-spiritual-600 rounded-full"></div>
          </div>
          <div className="w-16 h-10 bg-gradient-to-br from-sand-400 to-sand-500 rounded-lg shadow-lg"></div>
        </div>
        <h3 className="text-xl font-sf font-bold text-spiritual-800 mb-2">
          Transportasi & Rute
        </h3>
        <p className="text-spiritual-600 font-sf text-sm max-w-xs">
          Atur transportasi lokal dan rencanakan itinerary
        </p>
      </div>
    ),
    5: (
      // Ka'bah & Pilgrimage illustration
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="mb-6">
          <div className="w-24 h-18 bg-gradient-to-b from-spiritual-800 to-spiritual-900 rounded-lg shadow-xl relative mb-4">
            <div className="absolute inset-2 border-2 border-gold-400 rounded opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gold-400 rounded-full"></div>
          </div>
          <div className="flex space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-4 h-6 bg-sand-300 rounded-sm"></div>
            ))}
          </div>
        </div>
        <h3 className="text-xl font-sf font-bold text-spiritual-800 mb-2">
          Ibadah Umroh
        </h3>
        <p className="text-spiritual-600 font-sf text-sm max-w-xs">
          Tunaikan ibadah umroh di Tanah Suci
        </p>
      </div>
    )
  };

  return illustrations[activeStep as keyof typeof illustrations] || illustrations[1];
};

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left side - Steps */}
          <div className="space-y-6 lg:space-y-8">
            <div className="mb-8 lg:mb-12">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-sf font-bold text-spiritual-800 mb-4 lg:mb-6 leading-tight">
                Langkah Mudah<br />
                <span className="text-spiritual-600">Umroh Mandiri</span>
              </h2>
              <p className="text-lg lg:text-xl text-spiritual-600 leading-relaxed">
                Ikuti 5 langkah sederhana untuk memulai perjalanan ibadah umroh mandiri Anda
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Separator line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-spiritual-300 to-transparent"></div>
                  )}
                  
                  <div
                    onClick={() => setActiveStep(step.number)}
                    className={`flex items-start space-x-4 lg:space-x-6 group cursor-pointer transition-all duration-300 hover:transform hover:translate-x-2 p-4 lg:p-6 rounded-xl ${
                      activeStep === step.number 
                        ? 'bg-gradient-to-r from-spiritual-50 to-sand-50 shadow-lg border border-spiritual-100' 
                        : 'hover:bg-spiritual-50/50'
                    }`}
                  >
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-white font-bold text-base lg:text-lg shadow-lg transition-all duration-300 ${
                        activeStep === step.number
                          ? 'bg-gradient-to-br from-spiritual-600 to-spiritual-700 shadow-xl scale-110'
                          : 'bg-gradient-to-br from-spiritual-500 to-spiritual-600 group-hover:shadow-xl'
                      }`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className={`text-lg lg:text-xl font-sf font-semibold transition-colors duration-300 ${
                          activeStep === step.number
                            ? 'text-spiritual-700'
                            : 'text-spiritual-800 group-hover:text-spiritual-600'
                        }`}>
                          {step.title}
                        </h3>
                        <Check className={`w-4 h-4 lg:w-5 lg:h-5 text-spiritual-500 transition-opacity duration-300 ${
                          activeStep === step.number ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`} />
                      </div>
                      <p className="text-spiritual-600 font-sf leading-relaxed text-sm lg:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 lg:pt-8">
              <div className="inline-flex items-center space-x-3 px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-gold-100 to-sand-100 rounded-full border border-gold-200/50">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-spiritual-500 rounded-full animate-pulse"></div>
                <span className="text-spiritual-700 font-sf font-medium text-sm lg:text-base">
                  Klik langkah untuk melihat detail
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Dynamic Illustration */}
          <div className="relative order-first lg:order-last">
            <div className="aspect-square bg-gradient-to-br from-spiritual-100/50 to-sand-100/50 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl transition-all duration-500">
              {/* Islamic pattern background */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-repeat" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              {/* Dynamic illustration content */}
              <div className="relative z-10 h-full">
                <StepIllustration activeStep={activeStep} />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 lg:top-8 right-6 lg:right-8 w-4 lg:w-6 h-4 lg:h-6 bg-gold-300 rounded-full opacity-60"></div>
              <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8 w-3 lg:w-4 h-3 lg:h-4 bg-spiritual-400 rounded-full opacity-60"></div>
              <div className="absolute top-16 lg:top-20 left-8 lg:left-12 w-2 lg:w-3 h-2 lg:h-3 bg-sand-400 rounded-full opacity-60"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-2 lg:-top-4 -right-2 lg:-right-4 w-8 lg:w-12 h-8 lg:h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full shadow-lg opacity-80"></div>
            <div className="absolute -bottom-2 lg:-bottom-4 -left-2 lg:-left-4 w-6 lg:w-8 h-6 lg:h-8 bg-gradient-to-br from-spiritual-500 to-spiritual-600 rounded-full shadow-lg opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmrohStepsSection;
