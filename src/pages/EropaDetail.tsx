import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, Users, Star, Plane, Camera, Mountain } from "lucide-react";

const EropaDetail = () => {
  const navigate = useNavigate();

  const europePackages = [
    {
      id: 1,
      title: "Turkey Grand Tour",
      subtitle: "Istanbul & Cappadocia Adventure",
      price: 12000000,
      originalPrice: 15000000,
      image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png",
      rating: 4.9,
      duration: "8 Hari 7 Malam",
      groupSize: "15-20 Orang",
      quota: "12 jamaah tersisa",
      category: "Turkey Tour",
      description: "Jelajahi keindahan Turkey dari Istanbul hingga Cappadocia. Nikmati sejarah, budaya, dan pemandangan yang menakjubkan dengan paket wisata halal terpercaya.",
      highlights: [
        "Blue Mosque - Masjid terindah di Istanbul",
        "Hagia Sophia - Keajaiban arsitektur",
        "Cappadocia Balloon - Sunrise dari udara",
        "Bosphorus Cruise - Pesiar selat cantik",
        "Grand Bazaar - Shopping tradisional",
        "Turkish Bath - Spa tradisional"
      ]
    },
    {
      id: 2,
      title: "Bosnia Herzegovina Muslim Tour",
      subtitle: "Explore The Hidden Gem of Europe",
      price: 14500000,
      originalPrice: 18000000,
      image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png",
      rating: 4.7,
      duration: "7 Hari 6 Malam",
      groupSize: "12-18 Orang",
      quota: "8 jamaah tersisa",
      category: "Bosnia Tour",
      description: "Temukan permata tersembunyi Eropa dengan wisata halal ke Bosnia Herzegovina. Nikmati pemandangan alam yang indah dan sejarah Islam yang kaya.",
      highlights: [
        "Sarajevo Old Town - Kota tua bersejarah",
        "Stari Most - Jembatan ikonik Mostar",
        "Pocitelj Village - Desa tradisional",
        "Blagaj Tekke - Biara sufi bersejarah",
        "Kravice Waterfall - Air terjun cantik",
        "Local cuisine - Kuliner halal Bosnia"
      ]
    },
    {
      id: 3,
      title: "Albania Muslim Heritage",
      subtitle: "Discover Islamic Heritage in Europe",
      price: 13500000,
      originalPrice: 17000000,
      image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png",
      rating: 4.6,
      duration: "6 Hari 5 Malam",
      groupSize: "10-15 Orang",
      quota: "10 jamaah tersisa",
      category: "Albania Tour",
      description: "Jelajahi warisan Islam di Albania dengan pemandangan pegunungan yang menakjubkan dan pantai Adriatik yang indah.",
      highlights: [
        "Tirana - Ibu kota Albania modern",
        "Berat - Kota bersejarah UNESCO",
        "Gjirokaster - Castle & old bazaar",
        "Albanian Riviera - Pantai Adriatik",
        "Blue Eye - Mata air biru alami",
        "Ottoman mosques - Masjid bersejarah"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </Button>
          <div className="text-center">
            <h1 className="text-3xl font-sf font-bold text-spiritual-800 mb-2">
              Paket Wisata Eropa Halal
            </h1>
            <p className="text-lg text-spiritual-600">
              Jelajahi keindahan Eropa dengan wisata halal yang aman dan nyaman
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {europePackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              {/* Package Image */}
              <div className="relative h-48">
                <img 
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-spiritual-600 text-white">
                    {pkg.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/60 text-white px-2 py-1 rounded-full text-sm flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    {pkg.rating}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-xl font-sf font-bold text-white mb-1">
                    {pkg.title}
                  </h2>
                  <p className="text-white/90 text-sm">{pkg.subtitle}</p>
                </div>
              </div>

              <CardContent className="p-4">
                {/* Price */}
                <div className="mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-spiritual-800">
                      Rp {pkg.price.toLocaleString('id-ID')}
                    </span>
                    <span className="text-sm text-spiritual-500 line-through">
                      Rp {pkg.originalPrice.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                {/* Package Info */}
                <div className="space-y-1 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 text-spiritual-600 mr-2" />
                    <span className="text-spiritual-600 text-xs">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 text-spiritual-600 mr-2" />
                    <span className="text-spiritual-600 text-xs">{pkg.groupSize}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 text-spiritual-600 mr-2" />
                    <span className="text-spiritual-600 text-xs">{pkg.quota}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-spiritual-600 text-xs mb-3 line-clamp-2">
                  {pkg.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h3 className="font-sf font-bold text-spiritual-800 text-sm mb-2">Highlight:</h3>
                  <div className="space-y-1">
                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-1 h-1 bg-gold-500 rounded-full mr-2 mt-2"></div>
                        <span className="text-spiritual-600 text-xs">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-to-r from-spiritual-600 to-gold-500 hover:from-spiritual-700 hover:to-gold-600 text-white font-sf font-bold py-2 rounded-full text-sm">
                    Book Sekarang
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-xs"
                    onClick={() => navigate(`/trip-detail/${pkg.id}`)}
                  >
                    Lihat Detail
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Europe */}
        <div className="mt-12">
          <h2 className="text-2xl font-sf font-bold text-spiritual-800 text-center mb-8">
            Mengapa Pilih Wisata Eropa Halal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Plane className="w-12 h-12 text-spiritual-600 mx-auto mb-4" />
                <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
                  Perjalanan Nyaman
                </h3>
                <p className="text-spiritual-600 text-sm">
                  Penerbangan langsung dan akomodasi berkualitas untuk kenyamanan maksimal
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Camera className="w-12 h-12 text-spiritual-600 mx-auto mb-4" />
                <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
                  Destinasi Fotogenik
                </h3>
                <p className="text-spiritual-600 text-sm">
                  Pemandangan yang Instagramable dan spot foto terbaik di setiap destinasi
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Mountain className="w-12 h-12 text-spiritual-600 mx-auto mb-4" />
                <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
                  Alam Menakjubkan
                </h3>
                <p className="text-spiritual-600 text-sm">
                  Keindahan alam Eropa yang menakjubkan dari pegunungan hingga pantai
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EropaDetail;