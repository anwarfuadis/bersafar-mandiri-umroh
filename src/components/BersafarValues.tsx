
import { Shield, DollarSign, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BersafarValues = () => {
  const values = [
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Halal & Syariah Compliant",
      description: "Semua perjalanan kami mengikuti prinsip-prinsip syariah Islam. Makanan halal, waktu sholat terjaga, dan aktivitas yang sesuai dengan nilai-nilai Islam.",
      features: ["Makanan halal bersertifikat", "Jadwal sholat terjaga", "Panduan ibadah", "Fasilitas wudhu tersedia"]
    },
    {
      icon: <DollarSign className="w-12 h-12 text-gold-600" />,
      title: "Harga Terjangkau",
      description: "Kami menghubungkan langsung dengan penyedia layanan untuk memberikan harga terbaik tanpa markup berlebihan.",
      features: ["Direct connect ke provider", "Tidak ada biaya tersembunyi", "Cicilan 0%", "Jaminan harga terbaik"]
    },
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Terpercaya & Berpengalaman",
      description: "Ribuan jamaah telah mempercayakan perjalanan spiritual mereka kepada kami dengan testimoni positif.",
      features: ["10+ tahun pengalaman", "5000+ jamaah puas", "Rating 4.9/5", "Licensed & legal"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-spiritual-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sf font-bold text-spiritual-800 mb-4">
            Mengapa Memilih Bersafar?
          </h2>
          <p className="text-xl text-spiritual-600 max-w-3xl mx-auto">
            Perjalanan halal yang aman, nyaman, dan sesuai dengan prinsip syariah Islam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-spiritual-100 hover:border-gold-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-shadow">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-sf font-bold text-spiritual-800 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-spiritual-600 mb-6 leading-relaxed">
                  {value.description}
                </p>

                <div className="space-y-3">
                  {value.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-left">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-spiritual-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BersafarValues;
