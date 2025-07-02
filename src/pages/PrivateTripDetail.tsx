import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, Users, Star, Heart, Shield, CheckCircle } from "lucide-react";

const PrivateTripDetail = () => {
  const navigate = useNavigate();

  const privatePackages = [
    {
      id: 1,
      title: "Custom Umroh VIP",
      subtitle: "Paket Umroh Eksklusif Keluarga",
      price: 35000000,
      originalPrice: 45000000,
      image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png",
      rating: 5.0,
      duration: "Fleksibel",
      groupSize: "2-8 Orang",
      quota: "Available",
      category: "Private Umroh",
      description: "Nikmati pengalaman umroh eksklusif dengan layanan VIP. Jadwal fleksibel, hotel mewah, dan pelayanan personal untuk keluarga tercinta.",
      highlights: [
        "Hotel bintang 5 suite room",
        "Private mutawif & guide",
        "Jadwal ibadah fleksibel",
        "VIP airport handling",
        "Private transportation",
        "24/7 personal assistant"
      ]
    },
    {
      id: 2,
      title: "Family Europe Tour",
      subtitle: "Wisata Eropa Keluarga Premium",
      price: 45000000,
      originalPrice: 60000000,
      image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png",
      rating: 4.9,
      duration: "Customizable",
      groupSize: "2-10 Orang",
      quota: "Available",
      category: "Private Europe",
      description: "Jelajahi Eropa dengan keluarga dalam paket wisata private yang dapat disesuaikan. Dari Turkey hingga Bosnia dengan kenyamanan maksimal.",
      highlights: [
        "Itinerary dapat disesuaikan",
        "Private tour guide",
        "Luxury accommodation",
        "Halal dining options",
        "Family-friendly activities",
        "Flexible schedule"
      ]
    },
    {
      id: 3,
      title: "Corporate Retreat",
      subtitle: "Team Building & Business Trip",
      price: 25000000,
      originalPrice: 32000000,
      image: "/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png",
      rating: 4.8,
      duration: "3-7 Hari",
      groupSize: "10-30 Orang",
      quota: "Available",
      category: "Corporate",
      description: "Paket perjalanan bisnis dan team building dengan fasilitas halal. Cocok untuk company retreat dan acara korporat dengan nilai spiritual.",
      highlights: [
        "Meeting facilities tersedia",
        "Team building activities",
        "Halal catering service",
        "Professional photography",
        "Airport transfers included",
        "Corporate packages discount"
      ]
    }
  ];

  const customServices = [
    {
      title: "Konsultasi Gratis",
      description: "Konsultasi detail untuk merancang perjalanan impian Anda",
      icon: Heart
    },
    {
      title: "Fleksibel 100%",
      description: "Jadwal, destinasi, dan aktivitas sepenuhnya dapat disesuaikan",
      icon: CheckCircle
    },
    {
      title: "Garansi Terpercaya",
      description: "Jaminan kualitas dan kepuasan dengan layanan terbaik",
      icon: Shield
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
              Private Trip Premium
            </h1>
            <p className="text-lg text-spiritual-600">
              Wujudkan perjalanan impian dengan layanan eksklusif dan personal
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Custom Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {customServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <IconComponent className="w-12 h-12 text-spiritual-600 mx-auto mb-4" />
                  <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-spiritual-600 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Private Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {privatePackages.map((pkg) => (
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
                  <Badge className="bg-gold-500 text-spiritual-900">
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
                  <p className="text-xs text-spiritual-500">*Per orang, minimal 2 pax</p>
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
                  <h3 className="font-sf font-bold text-spiritual-800 text-sm mb-2">Exclusive Features:</h3>
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
                  <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-sf font-bold py-2 rounded-full text-sm">
                    Konsultasi Gratis
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

        {/* Custom Request Form */}
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-sf font-bold text-spiritual-800 mb-2">
                Request Custom Trip
              </h2>
              <p className="text-spiritual-600">
                Ceritakan impian perjalanan Anda, kami akan wujudkan
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-spiritual-700 mb-2">
                    Destinasi Impian
                  </label>
                  <select className="w-full p-3 border border-spiritual-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent">
                    <option>Pilih destinasi</option>
                    <option>Umroh VIP</option>
                    <option>Eropa Premium</option>
                    <option>Asia Eksklusif</option>
                    <option>Amerika Luxury</option>
                    <option>Custom Destination</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-spiritual-700 mb-2">
                    Jumlah Peserta
                  </label>
                  <select className="w-full p-3 border border-spiritual-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent">
                    <option>2-4 orang</option>
                    <option>5-8 orang</option>
                    <option>9-15 orang</option>
                    <option>16+ orang</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-spiritual-700 mb-2">
                  Budget Range (per orang)
                </label>
                <select className="w-full p-3 border border-spiritual-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent">
                  <option>Rp 10-20 juta</option>
                  <option>Rp 20-30 juta</option>
                  <option>Rp 30-50 juta</option>
                  <option>Rp 50+ juta</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-spiritual-700 mb-2">
                  Detail Permintaan
                </label>
                <textarea 
                  className="w-full p-3 border border-spiritual-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  rows={4}
                  placeholder="Ceritakan detail perjalanan impian Anda: tanggal, durasi, preferensi khusus, dll."
                ></textarea>
              </div>

              <Button className="w-full bg-gradient-to-r from-spiritual-600 to-gold-500 hover:from-spiritual-700 hover:to-gold-600 text-white font-sf font-bold py-3 rounded-full">
                Kirim Request & Konsultasi Gratis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivateTripDetail;