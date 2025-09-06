import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Heart, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LayananBersafar = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Cari Teman Safar",
      description: "Temukan teman perjalanan yang sesuai dengan kriteria Anda. Bergabunglah dengan jamaah yang telah terverifikasi untuk pengalaman spiritual yang berkesan.",
      icon: Users,
      features: [
        "Verifikasi identitas lengkap",
        "Matching berdasarkan gender/mahram",
        "Grup travel yang aman",
        "Panduan etika perjalanan Islami"
      ],
      buttonText: "Cari Teman Safar",
      buttonAction: () => navigate("/cari-teman-safar"),
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Umroh Mandiri",
      description: "Rencanakan perjalanan umroh sesuai keinginan Anda dengan paket fleksibel yang dapat disesuaikan. Dari ekonomi hingga premium, semua tersedia.",
      icon: MapPin,
      features: [
        "Paket dapat disesuaikan",
        "Pilihan hotel beragam",
        "Jadwal fleksibel",
        "Bimbingan manasik lengkap"
      ],
      buttonText: "Lihat Paket Umroh",
      buttonAction: () => navigate("/umroh-mandiri"),
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-spiritual-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sf font-bold text-spiritual-800 mb-4">
            Layanan Bersafar
          </h2>
          <p className="text-lg text-spiritual-600 max-w-3xl mx-auto">
            Kami memahami kebutuhan unik setiap perjalanan spiritual Anda. Pilih layanan yang sesuai dengan kebutuhan dan preferensi Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className={`${service.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden`}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${service.gradient} text-white`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-sf font-bold text-spiritual-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-spiritual-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-sf font-semibold text-spiritual-700 mb-3">Yang Anda Dapatkan:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-spiritual-600">
                          <Heart className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={service.buttonAction}
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-sf font-bold py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105`}
                  >
                    {service.buttonText}
                  </Button>

                  {/* Trust Badge */}
                  <div className="flex items-center justify-center mt-4 pt-4 border-t border-spiritual-200">
                    <Shield className="w-4 h-4 text-spiritual-500 mr-2" />
                    <span className="text-xs text-spiritual-500">Dijamin Aman & Terpercaya</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-spiritual-600 mb-4">
            Masih bingung memilih? Tim kami siap membantu Anda
          </p>
          <Button 
            variant="outline" 
            className="border-spiritual-300 text-spiritual-700 hover:bg-spiritual-100 font-sf font-medium px-8 py-3"
          >
            Konsultasi Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LayananBersafar;