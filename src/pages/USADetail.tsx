import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, Users, Star, Building, Camera, Plane } from "lucide-react";

const USADetail = () => {
  const navigate = useNavigate();

  const usaPackages = [
    {
      id: 1,
      title: "East Coast Grand Tour",
      subtitle: "New York, Washington DC & Philadelphia",
      price: 28000000,
      originalPrice: 35000000,
      image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png",
      rating: 4.8,
      duration: "10 Hari 9 Malam",
      groupSize: "12-18 Orang",
      quota: "6 jamaah tersisa",
      category: "USA East Coast",
      description: "Jelajahi keajaiban pantai timur Amerika dari kota yang tidak pernah tidur New York hingga ibu kota Washington DC. Paket wisata halal dengan fasilitas terbaik.",
      highlights: [
        "Statue of Liberty - Ikon kebebasan Amerika",
        "Empire State Building - Pemandangan NYC",
        "Times Square - Jantung kota New York",
        "White House - Rumah Presiden Amerika",
        "Central Park - Taman kota terbesar",
        "Brooklyn Bridge - Jembatan bersejarah"
      ]
    },
    {
      id: 2,
      title: "West Coast Adventure",
      subtitle: "Los Angeles, San Francisco & Las Vegas",
      price: 32000000,
      originalPrice: 40000000,
      image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png",
      rating: 4.9,
      duration: "12 Hari 11 Malam",
      groupSize: "10-16 Orang",
      quota: "8 jamaah tersisa",
      category: "USA West Coast",
      description: "Rasakan glamour pantai barat Amerika dari Hollywood hingga Golden Gate Bridge. Nikmati cuaca sempurna California dan keajaiban entertainment dunia.",
      highlights: [
        "Hollywood Walk of Fame - Bintang selebriti",
        "Golden Gate Bridge - Ikon San Francisco",
        "Disneyland - Taman hiburan terbaik",
        "Universal Studios - Studio film terkenal",
        "Alcatraz Island - Penjara bersejarah",
        "Las Vegas Strip - Kota hiburan dunia"
      ]
    },
    {
      id: 3,
      title: "Grand Canyon & National Parks",
      subtitle: "Natural Wonders of America",
      price: 26000000,
      originalPrice: 32000000,
      image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png",
      rating: 4.7,
      duration: "8 Hari 7 Malam",
      groupSize: "8-14 Orang",
      quota: "10 jamaah tersisa",
      category: "USA Nature",
      description: "Saksikan keajaiban alam Amerika di Grand Canyon dan taman nasional terbaik. Pengalaman yang tak terlupakan dengan pemandangan yang menakjubkan.",
      highlights: [
        "Grand Canyon - Keajaiban alam dunia",
        "Yellowstone - Taman nasional tertua",
        "Antelope Canyon - Slot canyon terindah",
        "Monument Valley - Landscape ikonik",
        "Horseshoe Bend - Lengkungan sungai cantik",
        "Zion National Park - Tebing megah"
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
              Paket Wisata USA Halal
            </h1>
            <p className="text-lg text-spiritual-600">
              Jelajahi Amerika Serikat dengan paket wisata halal yang aman dan terpercaya
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {usaPackages.map((pkg) => (
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

        {/* Why Choose USA */}
        <div className="mt-12">
          <h2 className="text-2xl font-sf font-bold text-spiritual-800 text-center mb-8">
            Mengapa Pilih Wisata USA Halal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="w-12 h-12 text-spiritual-600 mx-auto mb-4" />
                <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
                  Kota Megah
                </h3>
                <p className="text-spiritual-600 text-sm">
                  Jelajahi kota-kota megah Amerika dengan arsitektur modern dan sejarah yang kaya
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Camera className="w-12 h-12 text-spiritual-600 mx-auto mb-4" />
                <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
                  Ikon Dunia
                </h3>
                <p className="text-spiritual-600 text-sm">
                  Kunjungi landmark terkenal dunia yang sering muncul di film dan media
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Plane className="w-12 h-12 text-spiritual-600 mx-auto mb-4" />
                <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
                  Pengalaman Premium
                </h3>
                <p className="text-spiritual-600 text-sm">
                  Nikmati pengalaman wisata premium dengan guide berpengalaman dan fasilitas terbaik
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USADetail;