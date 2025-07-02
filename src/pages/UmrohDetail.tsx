import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, Users, Star, Shield, CheckCircle, Heart } from "lucide-react";

const UmrohDetail = () => {
  const navigate = useNavigate();

  const umrohPackages = [
    {
      id: 1,
      title: "Umroh All Package Premium",
      subtitle: "Paket Lengkap Makkah & Madinah",
      price: 18500000,
      originalPrice: 25000000,
      image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png",
      rating: 4.8,
      duration: "12 Hari 11 Malam",
      groupSize: "25-30 Orang",
      quota: "8 jamaah tersisa",
      category: "Umroh Premium",
      description: "Paket umroh premium dengan fasilitas terbaik dan hotel bintang 5. Dipandu mutawif berpengalaman untuk ibadah yang khusyuk dan berkesan.",
      highlights: [
        "Hotel Bintang 5 dekat Haram",
        "Mutawif berpengalaman 15+ tahun",
        "Ziarah lengkap ke tempat bersejarah",
        "Catering Indonesia halal",
        "Bus AC untuk transportasi",
        "Bimbingan manasik sebelum berangkat"
      ],
      included: [
        "Tiket pesawat Jakarta-Jeddah PP",
        "Hotel bintang 5 di Makkah & Madinah",
        "Makan 3x sehari menu Indonesia",
        "Mutawif berbahasa Indonesia",
        "Transportasi bus AC",
        "Ziarah ke tempat bersejarah",
        "Asuransi perjalanan",
        "Koper & perlengkapan umroh"
      ],
      itinerary: [
        { day: 1, activity: "Keberangkatan Jakarta - Jeddah" },
        { day: 2, activity: "Arrival Jeddah, perjalanan ke Madinah" },
        { day: 3, activity: "Ziarah Madinah - Masjid Nabawi" },
        { day: 4, activity: "Ziarah Madinah - Jabal Uhud, Quba" },
        { day: 5, activity: "Perjalanan Madinah ke Makkah" },
        { day: 6, activity: "Umroh pertama & Tawaf" },
        { day: 7, activity: "Ziarah Makkah - Jabal Nur, Gua Hira" },
        { day: 8, activity: "Umroh kedua & ibadah di Haram" },
        { day: 9, activity: "Ziarah Makkah - Jabal Rahmah" },
        { day: 10, activity: "Free time & shopping" },
        { day: 11, activity: "Umroh ketiga & persiapan pulang" },
        { day: 12, activity: "Departure Jeddah - Jakarta" }
      ]
    },
    {
      id: 2,
      title: "Umroh Budget Ekonomis",
      subtitle: "Paket Hemat Berkualitas",
      price: 12500000,
      originalPrice: 16000000,
      image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png",
      rating: 4.5,
      duration: "9 Hari 8 Malam",
      groupSize: "30-35 Orang",
      quota: "15 jamaah tersisa",
      category: "Umroh Ekonomis",
      description: "Paket umroh ekonomis dengan kualitas terjamin. Tetap nyaman dan khusyuk beribadah dengan budget yang terjangkau.",
      highlights: [
        "Hotel bintang 3-4 strategis",
        "Mutawif berpengalaman",
        "Ziarah tempat penting",
        "Makanan halal terjamin",
        "Group kecil & personal",
        "Bimbingan manasik gratis"
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
              Paket Umroh Terbaik
            </h1>
            <p className="text-lg text-spiritual-600">
              Perjalanan suci menuju Tanah Haram dengan fasilitas terbaik
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {umrohPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              {/* Package Image */}
              <div className="relative h-64">
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
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-2xl font-sf font-bold text-white mb-1">
                    {pkg.title}
                  </h2>
                  <p className="text-white/90">{pkg.subtitle}</p>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Price & Rating */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-spiritual-800">
                        Rp {pkg.price.toLocaleString('id-ID')}
                      </span>
                      <span className="text-lg text-spiritual-500 line-through">
                        Rp {pkg.originalPrice.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-semibold">{pkg.rating}</span>
                  </div>
                </div>

                {/* Package Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-spiritual-600 mr-2" />
                    <span className="text-spiritual-600 text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-spiritual-600 mr-2" />
                    <span className="text-spiritual-600 text-sm">{pkg.groupSize}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-spiritual-600 mr-2" />
                    <span className="text-spiritual-600 text-sm">{pkg.quota}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-spiritual-600 text-sm mb-4">
                  {pkg.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h3 className="font-sf font-bold text-spiritual-800 mb-2">Keunggulan:</h3>
                  <div className="space-y-1">
                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        <span className="text-spiritual-600 text-xs">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-to-r from-spiritual-600 to-gold-500 hover:from-spiritual-700 hover:to-gold-600 text-white font-sf font-bold py-2 rounded-full">
                    Pilih Paket Ini
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate(`/trip-detail/${pkg.id}`)}
                  >
                    Lihat Detail Lengkap
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="w-12 h-12 text-spiritual-600 mx-auto mb-4" />
              <h3 className="text-xl font-sf font-bold text-spiritual-800 mb-2">
                Ibadah Khusyuk
              </h3>
              <p className="text-spiritual-600">
                Dipandu mutawif berpengalaman untuk ibadah yang lebih khusyuk dan berkesan
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-spiritual-600 mx-auto mb-4" />
              <h3 className="text-xl font-sf font-bold text-spiritual-800 mb-2">
                Terpercaya
              </h3>
              <p className="text-spiritual-600">
                Izin resmi dari Kementerian Agama dengan track record 10+ tahun
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-12 h-12 text-spiritual-600 mx-auto mb-4" />
              <h3 className="text-xl font-sf font-bold text-spiritual-800 mb-2">
                Fasilitas Lengkap
              </h3>
              <p className="text-spiritual-600">
                Hotel nyaman, makanan halal, dan transportasi yang memadai
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UmrohDetail;