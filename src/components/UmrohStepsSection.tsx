
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
      // Enhanced Passport & Vaccine illustration
      <div className="flex flex-col items-center justify-center h-full text-center p-4">
        <div className="mb-4 relative">
          {/* Passport */}
          <div className="w-16 h-20 bg-gradient-to-b from-red-800 to-red-900 rounded-lg shadow-2xl relative mb-3 mx-auto border border-red-700">
            <div className="absolute inset-1 border border-gold-400 rounded opacity-80"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-sand-100 rounded-full border border-gray-300"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[6px] text-white font-bold">PASSPORT</div>
          </div>
          {/* Vaccine certificate */}
          <div className="w-12 h-8 bg-white rounded shadow-lg border-2 border-green-500 mx-auto relative">
            <div className="absolute top-1 left-1 right-1 h-[2px] bg-green-500"></div>
            <div className="absolute top-3 left-1 right-1 h-[1px] bg-gray-300"></div>
            <div className="absolute top-4 left-1 w-6 h-[1px] bg-gray-300"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
          Dokumen & Kesehatan
        </h3>
        <p className="text-spiritual-600 font-sf text-xs max-w-xs leading-relaxed">
          Siapkan paspor dan sertifikat vaksin untuk perjalanan ibadah
        </p>
      </div>
    ),
    2: (
      // Enhanced Siskopatuh & Visa illustration
      <div className="flex flex-col items-center justify-center h-full text-center p-4">
        <div className="mb-4">
          {/* Computer/Form */}
          <div className="w-20 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl relative mb-3">
            <div className="absolute inset-2 bg-blue-400 rounded"></div>
            <div className="absolute top-3 left-3 right-3 h-1 bg-white rounded"></div>
            <div className="absolute top-5 left-3 right-3 h-[2px] bg-white/70 rounded"></div>
            <div className="absolute top-7 left-3 w-8 h-[2px] bg-white/70 rounded"></div>
            <div className="absolute bottom-2 right-3 w-4 h-2 bg-green-400 rounded"></div>
          </div>
          {/* Visa stamp */}
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto flex items-center justify-center shadow-lg">
            <Check className="w-4 h-4 text-white" />
          </div>
        </div>
        <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
          Registrasi & Visa
        </h3>
        <p className="text-spiritual-600 font-sf text-xs max-w-xs leading-relaxed">
          Daftar di Siskopatuh dan urus visa umroh resmi
        </p>
      </div>
    ),
    3: (
      // Enhanced Booking illustration
      <div className="flex flex-col items-center justify-center h-full text-center p-4">
        <div className="mb-4">
          {/* Airplane */}
          <div className="relative mb-3">
            <div className="w-16 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full relative">
              <div className="absolute left-2 top-1 w-12 h-4 bg-white/20 rounded-full"></div>
              <div className="absolute right-1 top-2 w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="absolute left-4 -top-1 w-8 h-1 bg-blue-600 rounded"></div>
              <div className="absolute left-6 -bottom-1 w-6 h-1 bg-blue-600 rounded"></div>
            </div>
          </div>
          {/* Hotel */}
          <div className="w-14 h-10 bg-gradient-to-b from-sand-400 to-sand-600 rounded-t shadow-lg relative mx-auto">
            <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-300 rounded"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-300 rounded"></div>
            <div className="absolute top-4 left-1 w-2 h-2 bg-yellow-300 rounded"></div>
            <div className="absolute top-4 right-1 w-2 h-2 bg-yellow-300 rounded"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-brown-600 rounded-t"></div>
          </div>
        </div>
        <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
          Tiket & Hotel
        </h3>
        <p className="text-spiritual-600 font-sf text-xs max-w-xs leading-relaxed">
          Booking penerbangan dan akomodasi sesuai jadwal
        </p>
      </div>
    ),
    4: (
      // Enhanced Transportation illustration
      <div className="flex flex-col items-center justify-center h-full text-center p-4">
        <div className="mb-4">
          {/* Route map */}
          <div className="relative mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-spiritual-600 rounded-full"></div>
              <div className="w-8 h-[2px] bg-spiritual-400 rounded"></div>
              <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
              <div className="w-8 h-[2px] bg-spiritual-400 rounded"></div>
              <div className="w-3 h-3 bg-spiritual-600 rounded-full"></div>
            </div>
          </div>
          {/* Bus */}
          <div className="w-16 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg relative">
            <div className="absolute inset-1 bg-blue-100 rounded opacity-80"></div>
            <div className="absolute left-2 top-2 w-2 h-2 bg-blue-300 rounded"></div>
            <div className="absolute left-5 top-2 w-2 h-2 bg-blue-300 rounded"></div>
            <div className="absolute left-8 top-2 w-2 h-2 bg-blue-300 rounded"></div>
            <div className="absolute left-11 top-2 w-2 h-2 bg-blue-300 rounded"></div>
            <div className="absolute left-1 bottom-0 w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="absolute right-1 bottom-0 w-2 h-2 bg-gray-800 rounded-full"></div>
          </div>
        </div>
        <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
          Transportasi & Rute
        </h3>
        <p className="text-spiritual-600 font-sf text-xs max-w-xs leading-relaxed">
          Atur transportasi lokal dan rencanakan itinerary
        </p>
      </div>
    ),
    5: (
      // Enhanced Ka'bah & Pilgrimage illustration
      <div className="flex flex-col items-center justify-center h-full text-center p-4">
        <div className="mb-4">
          {/* Ka'bah */}
          <div className="w-16 h-12 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-2xl relative mb-3 mx-auto">
            <div className="absolute inset-1 border-2 border-gold-400 rounded opacity-90"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gold-400 rounded-sm"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gold-500"></div>
          </div>
          {/* Pilgrims */}
          <div className="flex justify-center space-x-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-2 h-4 bg-white rounded-sm shadow-sm"></div>
            ))}
          </div>
        </div>
        <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
          Ibadah Umroh
        </h3>
        <p className="text-spiritual-600 font-sf text-xs max-w-xs leading-relaxed">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center w-full">
          {/* Left side - Steps */}
          <div className="space-y-4 lg:space-y-6">
            <div className="mb-6 lg:mb-12">
              <h2 className="text-2xl lg:text-4xl xl:text-5xl font-sf font-bold text-spiritual-800 mb-3 lg:mb-6 leading-tight">
                Langkah Mudah<br />
                <span className="text-spiritual-600">Umroh Mandiri</span>
              </h2>
              <p className="text-base lg:text-xl text-spiritual-600 leading-relaxed">
                Ikuti 5 langkah sederhana untuk memulai perjalanan ibadah umroh mandiri Anda
              </p>
            </div>

            <div className="space-y-3 lg:space-y-4">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Separator line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-5 lg:left-6 top-10 lg:top-12 w-0.5 h-6 lg:h-8 bg-gradient-to-b from-spiritual-300 to-transparent"></div>
                  )}
                  
                  <div
                    onClick={() => setActiveStep(step.number)}
                    className={`flex items-start space-x-3 lg:space-x-4 group cursor-pointer transition-all duration-300 hover:transform hover:translate-x-2 p-3 lg:p-4 rounded-xl ${
                      activeStep === step.number 
                        ? 'bg-gradient-to-r from-spiritual-50 to-sand-50 shadow-lg border border-spiritual-100' 
                        : 'hover:bg-spiritual-50/50'
                    }`}
                  >
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm lg:text-base shadow-lg transition-all duration-300 ${
                        activeStep === step.number
                          ? 'bg-gradient-to-br from-spiritual-600 to-spiritual-700 shadow-xl scale-110'
                          : 'bg-gradient-to-br from-spiritual-500 to-spiritual-600 group-hover:shadow-xl'
                      }`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className={`text-base lg:text-lg font-sf font-semibold transition-colors duration-300 ${
                          activeStep === step.number
                            ? 'text-spiritual-700'
                            : 'text-spiritual-800 group-hover:text-spiritual-600'
                        }`}>
                          {step.title}
                        </h3>
                        <Check className={`w-3 h-3 lg:w-4 lg:h-4 text-spiritual-500 transition-opacity duration-300 ${
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

          {/* Right side - Dynamic Illustration */}
          <div className="relative order-first lg:order-last">
            <div className="aspect-square bg-gradient-to-br from-spiritual-100/50 to-sand-100/50 rounded-2xl lg:rounded-3xl p-4 lg:p-8 relative overflow-hidden shadow-2xl transition-all duration-500">
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
              <div className="absolute top-4 lg:top-6 right-4 lg:right-6 w-3 lg:w-4 h-3 lg:h-4 bg-gold-300 rounded-full opacity-60"></div>
              <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 w-2 lg:w-3 h-2 lg:h-3 bg-spiritual-400 rounded-full opacity-60"></div>
              <div className="absolute top-12 lg:top-16 left-6 lg:left-8 w-1.5 lg:w-2 h-1.5 lg:h-2 bg-sand-400 rounded-full opacity-60"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-2 lg:-top-4 -right-2 lg:-right-4 w-6 lg:w-8 h-6 lg:h-8 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full shadow-lg opacity-80"></div>
            <div className="absolute -bottom-2 lg:-bottom-4 -left-2 lg:-left-4 w-4 lg:w-6 h-4 lg:h-6 bg-gradient-to-br from-spiritual-500 to-spiritual-600 rounded-full shadow-lg opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmrohStepsSection;
