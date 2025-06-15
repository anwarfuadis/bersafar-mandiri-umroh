
import { Check } from "lucide-react";

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

const UmrohStepsSection = () => {
  return (
    <section className="hidden md:block min-h-screen bg-gradient-to-br from-sand-50 via-white to-spiritual-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-gold-200/20 to-gold-300/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-spiritual-200/20 to-spiritual-300/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-sand-200/30 to-sand-300/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-2 gap-16 items-center w-full">
          {/* Left side - Steps */}
          <div className="space-y-8">
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-sf font-bold text-spiritual-800 mb-6 leading-tight">
                Langkah Mudah<br />
                <span className="text-spiritual-600">Umroh Mandiri</span>
              </h2>
              <p className="text-xl text-spiritual-600 leading-relaxed">
                Ikuti 5 langkah sederhana untuk memulai perjalanan ibadah umroh mandiri Anda
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex items-start space-x-6 group cursor-pointer transition-all duration-300 hover:transform hover:translate-x-2"
                >
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-spiritual-600 to-spiritual-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                      {step.number}
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-sf font-semibold text-spiritual-800 group-hover:text-spiritual-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <Check className="w-5 h-5 text-spiritual-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p className="text-spiritual-600 font-sf leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-gold-100 to-sand-100 rounded-full border border-gold-200/50">
                <div className="w-3 h-3 bg-spiritual-500 rounded-full animate-pulse"></div>
                <span className="text-spiritual-700 font-sf font-medium">
                  Mulai langkah pertama sekarang
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-spiritual-100/50 to-sand-100/50 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
              {/* Islamic pattern background */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-repeat" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              {/* Main illustration content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                {/* Ka'bah representation */}
                <div className="mb-8">
                  <div className="w-32 h-24 bg-gradient-to-b from-spiritual-800 to-spiritual-900 rounded-lg shadow-xl relative">
                    <div className="absolute inset-2 border-2 border-gold-400 rounded opacity-60"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold-400 rounded-full"></div>
                  </div>
                </div>

                {/* Pilgrims representation */}
                <div className="flex space-x-4 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-spiritual-600 to-spiritual-700 rounded-full"></div>
                      <div className="w-12 h-16 bg-gradient-to-b from-sand-200 to-sand-300 rounded-lg"></div>
                    </div>
                  ))}
                </div>

                {/* Inspirational text */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-sf font-bold text-spiritual-800">
                    Perjalanan Suci
                  </h3>
                  <p className="text-spiritual-600 font-sf text-lg leading-relaxed max-w-xs">
                    Wujudkan impian ibadah umroh dengan persiapan yang tepat dan terencana
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-6 h-6 bg-gold-300 rounded-full opacity-60"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-spiritual-400 rounded-full opacity-60"></div>
                <div className="absolute top-20 left-12 w-3 h-3 bg-sand-400 rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full shadow-lg opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-spiritual-500 to-spiritual-600 rounded-full shadow-lg opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmrohStepsSection;
