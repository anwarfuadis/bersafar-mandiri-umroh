import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, Users, Star, Shield, CheckCircle } from "lucide-react";

const TripDetail = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();

  // Sample trip data - in real app this would come from API/database
  const trip = {
    id: tripId,
    title: "Turkey Low Season",
    subtitle: "Paket Hemat Istanbul & Cappadocia",
    price: 12000000,
    originalPrice: 15000000,
    image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png",
    rating: 4.9,
    duration: "8 Hari 7 Malam",
    groupSize: "15-20 Orang",
    quota: "12 jamaah tersisa",
    category: "International",
    description: "Jelajahi keindahan Turkey dengan paket hemat yang menakjubkan. Dari kemegahan Blue Mosque hingga keajaiban Cappadocia, nikmati perjalanan yang tak terlupakan dengan harga terjangkau.",
    highlights: [
      "Blue Mosque - Masjid terindah di Istanbul",
      "Cappadocia Sunrise - Balon udara pagi hari",
      "Bosphorus Cruise - Pesiar di selat Bosphorus",
      "Grand Bazaar - Pasar tradisional terbesar",
      "Hagia Sophia - Keajaiban arsitektur dunia",
      "Turkish Bath - Pengalaman spa tradisional"
    ],
    included: [
      "Tiket pesawat PP",
      "Hotel bintang 4",
      "Makan 3x sehari",
      "Tour guide berbahasa Indonesia",
      "Transportasi AC",
      "Asuransi perjalanan"
    ],
    itinerary: [
      { day: 1, activity: "Arrival di Istanbul, check-in hotel" },
      { day: 2, activity: "City tour Istanbul - Blue Mosque, Hagia Sophia" },
      { day: 3, activity: "Bosphorus Cruise & Grand Bazaar" },
      { day: 4, activity: "Perjalanan ke Cappadocia" },
      { day: 5, activity: "Balloon ride & Underground City" },
      { day: 6, activity: "Kembali ke Istanbul" },
      { day: 7, activity: "Free time & shopping" },
      { day: 8, activity: "Departure" }
    ]
  };

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
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-6">
              <img 
                src={trip.image}
                alt={trip.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-spiritual-600 text-white mb-2">
                  {trip.category}
                </Badge>
                <h1 className="text-4xl font-sf font-bold text-white mb-2">
                  {trip.title}
                </h1>
                <p className="text-white/90">{trip.subtitle}</p>
              </div>
            </div>

            {/* Description */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-sf font-bold text-spiritual-800 mb-4">
                  Deskripsi Perjalanan
                </h2>
                <p className="text-spiritual-600 leading-relaxed">
                  {trip.description}
                </p>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-sf font-bold text-spiritual-800 mb-4">
                  Highlight Perjalanan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {trip.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-spiritual-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-sf font-bold text-spiritual-800 mb-4">
                  Itinerary Perjalanan
                </h2>
                <div className="space-y-4">
                  {trip.itinerary.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="bg-spiritual-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">
                        {item.day}
                      </div>
                      <div>
                        <h3 className="font-semibold text-spiritual-800">Hari {item.day}</h3>
                        <p className="text-spiritual-600">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-spiritual-800">
                      Rp {trip.price.toLocaleString('id-ID')}
                    </span>
                    <span className="text-lg text-spiritual-500 line-through">
                      Rp {trip.originalPrice.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{trip.rating}</span>
                    <span className="text-spiritual-600">(203 reviews)</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-spiritual-600 mr-3" />
                    <span className="text-spiritual-600">{trip.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-spiritual-600 mr-3" />
                    <span className="text-spiritual-600">{trip.groupSize}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-spiritual-600 mr-3" />
                    <span className="text-spiritual-600">{trip.quota}</span>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <p className="text-blue-700 text-sm font-semibold flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    💡 Join grup = Lebih hemat!
                  </p>
                </div>

                <Button className="w-full bg-gradient-to-r from-spiritual-600 to-gold-500 hover:from-spiritual-700 hover:to-gold-600 text-white font-sf font-bold py-3 rounded-full">
                  Book Sekarang
                </Button>
              </CardContent>
            </Card>

            {/* Included */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-sf font-bold text-spiritual-800 mb-4">
                  Yang Termasuk
                </h3>
                <div className="space-y-2">
                  {trip.included.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-spiritual-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;