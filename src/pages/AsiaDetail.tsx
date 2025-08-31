import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, Users, Star, Building, Waves, Mountain } from "lucide-react";

const AsiaDetail = () => {
  const navigate = useNavigate();

  const asiaPackages = [
    {
      id: 1,
      title: "Malaysia Truly Asia",
      subtitle: "Kuala Lumpur & Penang Heritage",
      price: 6500000,
      originalPrice: 8500000,
      image: "/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png",
      rating: 4.8,
      duration: "5 Hari 4 Malam",
      groupSize: "15-25 Orang",
      quota: "18 jamaah tersisa",
      category: "Malaysia Tour",
      description: "Nikmati keindahan Malaysia dengan perpaduan budaya yang unik. Dari kemegahan Kuala Lumpur hingga warisan budaya Penang yang menawan.",
      highlights: [
        "Petronas Twin Towers - Ikon Malaysia",
        "Batu Caves - Gua spiritual Hindu",
        "George Town - Warisan UNESCO",
        "Genting Highlands - Resort pegunungan",
        "Street Food - Kuliner halal terbaik",
        "Shopping - KLCC & Pavilion Mall"
      ]
    },
    {
      id: 2,
      title: "Singapore Muslim Friendly",
      subtitle: "City Tour & Universal Studios",
      price: 8500000,
      originalPrice: 11000000,
      image: "/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png",
      rating: 4.9,
      duration: "4 Hari 3 Malam",
      groupSize: "10-18 Orang",
      quota: "12 jamaah tersisa",
      category: "Singapore Tour",
      description: "Jelajahi Singapura yang modern dengan fasilitas muslim friendly. Dari Gardens by the Bay hingga Universal Studios yang menakjubkan.",
      highlights: [
        "Marina Bay Sands - Kolam infinity",
        "Gardens by the Bay - Taman futuristik",
        "Universal Studios - Theme park seru",
        "Arab Street - Kawasan Muslim",
        "Merlion Park - Maskot Singapura",
        "Orchard Road - Shopping paradise"
      ]
    },
    {
      id: 3,
      title: "Japan Halal Experience",
      subtitle: "Tokyo & Kyoto Cultural Tour",
      price: 18500000,
      originalPrice: 23000000,
      image: "/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png",
      rating: 4.7,
      duration: "7 Hari 6 Malam",
      groupSize: "8-15 Orang",
      quota: "8 jamaah tersisa",
      category: "Japan Tour",
      description: "Rasakan pengalaman unik Jepang dengan paket halal tour. Dari teknologi modern Tokyo hingga tradisi kuno Kyoto yang memukau.",
      highlights: [
        "Tokyo Skytree - Menara tertinggi",
        "Senso-ji Temple - Kuil bersejarah",
        "Mount Fuji - Gunung suci Jepang",
        "Kyoto Bamboo Forest - Hutan bambu",
        "Halal restaurants - Kuliner halal",
        "Cherry blossom - Bunga sakura (musiman)"
      ]
    },
    {
      id: 4,
      title: "Thailand Amazing Tour",
      subtitle: "Bangkok & Phuket Adventure",
      price: 7500000,
      originalPrice: 9500000,
      image: "/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png",
      rating: 4.6,
      duration: "6 Hari 5 Malam",
      groupSize: "12-20 Orang",
      quota: "15 jamaah tersisa",
      category: "Thailand Tour",
      description: "Nikmati keindahan Thailand dari hiruk pikuk Bangkok hingga pantai Phuket yang eksotis dengan paket wisata halal yang nyaman.",
      highlights: [
        "Grand Palace - Istana kerajaan",
        "Wat Pho Temple - Kuil Buddha raksasa",
        "Floating Market - Pasar terapung",
        "Phuket Beach - Pantai eksotis",
        "Phi Phi Island - Pulau cantik",
        "Thai massage - Pijat tradisional"
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
              Paket Wisata Asia Halal
            </h1>
            <p className="text-lg text-spiritual-600">
              Jelajahi keindahan Asia dengan paket wisata halal yang terpercaya dan nyaman
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {asiaPackages.map((pkg) => (
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

        {/* Why Choose Asia */}
        <div className="mt-12">
          <h2 className="text-2xl font-sf font-bold text-spiritual-800 text-center mb-8">
            Mengapa Pilih Wisata Asia Halal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="w-12 h-12 text-spiritual-600 mx-auto mb-4" />
                <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
                  Budaya Beragam
                </h3>
                <p className="text-spiritual-600 text-sm">
                  Nikmati kekayaan budaya Asia yang beragam dengan fasilitas muslim friendly
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Waves className="w-12 h-12 text-spiritual-600 mx-auto mb-4" />
                <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
                  Pantai Eksotis
                </h3>
                <p className="text-spiritual-600 text-sm">
                  Jelajahi pantai-pantai eksotis Asia dengan pemandangan yang memukau
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Mountain className="w-12 h-12 text-spiritual-600 mx-auto mb-4" />
                <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
                  Kuliner Halal
                </h3>
                <p className="text-spiritual-600 text-sm">
                  Nikmati kelezatan kuliner halal Asia yang kaya rasa dan autentik
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsiaDetail;