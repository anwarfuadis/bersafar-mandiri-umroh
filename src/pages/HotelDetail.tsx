import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Bed, Clock, MapPin, ArrowRight, Search, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import StickyHeader from "@/components/StickyHeader";

const HotelDetail = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [guests, setGuests] = useState(1);

  const hotels = [
    {
      id: 1,
      name: "Swissôtel Makkah",
      location: "Makkah, Saudi Arabia",
      distanceToHaram: "Directly connected to the Haram",
      rating: 4.5,
      reviews: 1245,
      price: 2500000,
      originalPrice: 3200000,
      availability: 15,
      amenities: ["Free WiFi", "Airport Shuttle", "Family Rooms", "Non-smoking Rooms"],
      image: "/lovable-uploads/0447b7fb-94d7-470d-84ff-72fa7f50a25f.png"
    },
    {
      id: 2,
      name: "Pullman ZamZam Madina",
      location: "Madinah, Saudi Arabia",
      distanceToHaram: "5 minutes walk to the Prophet's Mosque",
      rating: 4.2,
      reviews: 890,
      price: 1800000,
      originalPrice: 2400000,
      availability: 8,
      amenities: ["Restaurant", "24-Hour Front Desk", "Currency Exchange", "Room Service"],
      image: "/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png"
    },
    {
      id: 3,
      name: "Raffles Makkah Palace",
      location: "Makkah, Saudi Arabia",
      distanceToHaram: "Overlooking the Holy Kaaba",
      rating: 4.9,
      reviews: 2100,
      price: 4500000,
      originalPrice: 5500000,
      availability: 5,
      amenities: ["Luxury Spa", "Butler Service", "Fine Dining", "Panoramic Views"],
      image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png"
    }
  ];

  const isDatePassed = (date: string) => {
    if (!date) return false;
    return new Date(date) < new Date();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-spiritual-50 to-sand-50">
      <StickyHeader />
      
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-sf font-bold text-lg">
            🎉 Promo Spesial! Hemat hingga 30% untuk pemesanan bulan ini! 
            <span className="ml-2 animate-pulse">🕋</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-sf font-bold text-spiritual-800 mb-4">
            Hotel Umroh Pilihan
          </h1>
          <p className="text-lg text-spiritual-600 max-w-2xl mx-auto">
            Temukan akomodasi terbaik untuk perjalanan umroh Anda dengan lokasi strategis dan fasilitas lengkap
          </p>
        </div>

        {/* Modern Booking Form */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-spiritual-600/10 to-gold-500/10 rounded-3xl blur-3xl"></div>
          <Card className="relative bg-white/90 backdrop-blur-lg border-0 shadow-2xl rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-spiritual-600 via-gold-500 to-spiritual-600"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="p-3 bg-gradient-to-r from-spiritual-600 to-gold-500 rounded-2xl">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-3xl font-sf font-bold bg-gradient-to-r from-spiritual-800 to-gold-600 bg-clip-text text-transparent">
                  Cari Hotel
                </CardTitle>
              </div>
              <p className="text-center text-spiritual-600 font-medium">
                Temukan hotel ideal untuk kenyamanan ibadah Anda
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="checkin-date" className="text-spiritual-700 font-sf font-semibold text-lg flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gold-500" />
                    <span>Tanggal Check-in</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="checkin-date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="h-14 text-lg border-2 border-spiritual-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="guests" className="text-spiritual-700 font-sf font-semibold text-lg flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gold-500" />
                    <span>Jumlah Tamu</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="9"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="h-14 text-lg border-2 border-spiritual-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
                    />
                  </div>
                </div>

                <div className="flex items-end">
                  <Button 
                    className="w-full h-14 bg-gradient-to-r from-spiritual-600 to-gold-500 hover:from-spiritual-700 hover:to-gold-600 text-white font-sf font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform"
                    disabled={!selectedDate || isDatePassed(selectedDate)}
                  >
                    <Search className="mr-3 h-5 w-5" />
                    Cari Hotel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hotel Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-sf font-bold text-spiritual-800">
              Hotel Tersedia
            </h2>
            <Badge className="bg-spiritual-100 text-spiritual-700 px-4 py-2 text-sm font-semibold">
              {hotels.length} opsi tersedia
            </Badge>
          </div>
          
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="bg-white/90 backdrop-blur-sm border border-spiritual-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  {/* Hotel Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <Bed className="w-5 h-5 text-spiritual-600 mr-2" />
                      <h3 className="text-xl font-sf font-bold text-spiritual-800">
                        {hotel.name}
                      </h3>
                      <Badge className="ml-2 bg-spiritual-100 text-spiritual-700">
                        {hotel.rating} <Star className="inline w-4 h-4 ml-1" />
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-spiritual-600 mr-2" />
                        <p className="text-sm text-spiritual-600">{hotel.location}</p>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-spiritual-600 mr-2" />
                        <p className="text-sm text-spiritual-600">{hotel.distanceToHaram}</p>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-spiritual-600 mr-2" />
                        <p className="text-sm text-spiritual-600">{hotel.reviews} ulasan</p>
                      </div>
                      <div className="flex space-x-2">
                        {hotel.amenities.map((amenity, index) => (
                          <Badge key={index} className="bg-spiritual-50 text-spiritual-600 text-xs">{amenity}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Availability */}
                  <div className="text-center">
                    <div className="mb-2">
                      <span className="text-2xl font-sf font-bold text-spiritual-800">
                        Rp {hotel.price.toLocaleString('id-ID')}
                      </span>
                      <span className="text-sm text-spiritual-500 line-through ml-2">
                        Rp {hotel.originalPrice.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <div className="text-sm text-spiritual-600 mb-2">
                      {hotel.availability} kamar tersisa
                    </div>
                    <div className="w-full bg-spiritual-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-to-r from-gold-400 to-gold-500 h-2 rounded-full"
                        style={{ width: `${(hotel.availability / 20) * 100}%` }}
                      ></div>
                    </div>
                    <Badge 
                      variant={hotel.availability < 5 ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {hotel.availability < 5 ? "Kamar Terbatas" : "Tersedia"}
                    </Badge>
                  </div>

                  {/* Action Button */}
                  <div>
                    <Button 
                      className="w-full bg-gradient-to-r from-spiritual-600 to-spiritual-700 hover:from-spiritual-700 hover:to-spiritual-800 text-white font-sf font-semibold py-3 rounded-full"
                      disabled={hotel.availability === 0}
                    >
                      {hotel.availability === 0 ? "Sold Out" : "Pilih Kamar"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
