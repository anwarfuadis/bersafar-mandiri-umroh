import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Plane, Clock, MapPin, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import StickyHeader from "@/components/StickyHeader";

const FlightDetail = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const flights = [
    {
      id: 1,
      airline: "Saudi Airlines",
      route: "Jakarta (CGK) → Jeddah (JED)",
      departure: "14:30",
      arrival: "20:45",
      duration: "9h 15m",
      price: 8500000,
      originalPrice: 12000000,
      seatsLeft: 12,
      maxSeats: 180,
      aircraft: "Boeing 777-300ER",
      class: "Economy"
    },
    {
      id: 2,
      airline: "Garuda Indonesia",
      route: "Jakarta (CGK) → Jeddah (JED)",
      departure: "22:15",
      arrival: "04:30+1",
      duration: "9h 15m",
      price: 9200000,
      originalPrice: 13000000,
      seatsLeft: 8,
      maxSeats: 180,
      aircraft: "Boeing 777-300ER",
      class: "Economy"
    },
    {
      id: 3,
      airline: "Emirates",
      route: "Jakarta (CGK) → Jeddah (JED)",
      departure: "08:45",
      arrival: "19:30",
      duration: "12h 45m",
      price: 11500000,
      originalPrice: 15000000,
      seatsLeft: 25,
      maxSeats: 350,
      aircraft: "Airbus A380",
      class: "Economy",
      transit: "Dubai (DXB) - 2h 15m"
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
            <span className="ml-2 animate-pulse">✈️</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-sf font-bold text-spiritual-800 mb-4">
            Tiket Pesawat Umroh
          </h1>
          <p className="text-lg text-spiritual-600 max-w-2xl mx-auto">
            Pilih penerbangan terbaik untuk perjalanan umroh Anda dengan harga terjangkau
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
                  Cari Penerbangan
                </CardTitle>
              </div>
              <p className="text-center text-spiritual-600 font-medium">
                Temukan penerbangan terbaik untuk perjalanan umroh Anda
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="departure-date" className="text-spiritual-700 font-sf font-semibold text-lg flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gold-500" />
                    <span>Tanggal Keberangkatan</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="departure-date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="h-14 text-lg border-2 border-spiritual-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="passengers" className="text-spiritual-700 font-sf font-semibold text-lg flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gold-500" />
                    <span>Jumlah Penumpang</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="passengers"
                      type="number"
                      min="1"
                      max="9"
                      value={passengers}
                      onChange={(e) => setPassengers(parseInt(e.target.value))}
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
                    Cari Penerbangan
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Flight Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-sf font-bold text-spiritual-800">
              Penerbangan Tersedia
            </h2>
            <Badge className="bg-spiritual-100 text-spiritual-700 px-4 py-2 text-sm font-semibold">
              {flights.length} opsi tersedia
            </Badge>
          </div>
          
          {flights.map((flight) => (
            <Card key={flight.id} className="bg-white/90 backdrop-blur-sm border border-spiritual-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  {/* Flight Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <Plane className="w-5 h-5 text-spiritual-600 mr-2" />
                      <h3 className="text-xl font-sf font-bold text-spiritual-800">
                        {flight.airline}
                      </h3>
                      <Badge className="ml-2 bg-spiritual-100 text-spiritual-700">
                        {flight.aircraft}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-spiritual-800">{flight.departure}</p>
                          <p className="text-sm text-spiritual-600">Jakarta (CGK)</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-spiritual-400 rounded-full"></div>
                            <div className="flex-1 h-0.5 bg-spiritual-200 mx-2"></div>
                            <Clock className="w-4 h-4 text-spiritual-400" />
                            <div className="flex-1 h-0.5 bg-spiritual-200 mx-2"></div>
                            <div className="w-4 h-4 bg-spiritual-400 rounded-full"></div>
                          </div>
                          <p className="text-sm text-spiritual-600 mt-1">{flight.duration}</p>
                          {flight.transit && (
                            <p className="text-xs text-spiritual-500">{flight.transit}</p>
                          )}
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-spiritual-800">{flight.arrival}</p>
                          <p className="text-sm text-spiritual-600">Jeddah (JED)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Availability */}
                  <div className="text-center">
                    <div className="mb-2">
                      <span className="text-2xl font-sf font-bold text-spiritual-800">
                        Rp {flight.price.toLocaleString('id-ID')}
                      </span>
                      <span className="text-sm text-spiritual-500 line-through ml-2">
                        Rp {flight.originalPrice.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <div className="text-sm text-spiritual-600 mb-2">
                      {flight.seatsLeft} dari {flight.maxSeats} kursi tersisa
                    </div>
                    <div className="w-full bg-spiritual-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-to-r from-gold-400 to-gold-500 h-2 rounded-full"
                        style={{ width: `${(flight.seatsLeft / flight.maxSeats) * 100}%` }}
                      ></div>
                    </div>
                    <Badge 
                      variant={flight.seatsLeft < 10 ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {flight.seatsLeft < 10 ? "Kursi Terbatas" : "Tersedia"}
                    </Badge>
                  </div>

                  {/* Action Button */}
                  <div>
                    <Button 
                      className="w-full bg-gradient-to-r from-spiritual-600 to-spiritual-700 hover:from-spiritual-700 hover:to-spiritual-800 text-white font-sf font-semibold py-3 rounded-full"
                      disabled={flight.seatsLeft === 0}
                    >
                      {flight.seatsLeft === 0 ? "Sold Out" : "Pilih Penerbangan"}
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

export default FlightDetail;
