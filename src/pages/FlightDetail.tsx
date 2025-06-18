
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users, Clock, Star, AlertCircle, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import { Asterisk } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, isPast } from "date-fns";
import { cn } from "@/lib/utils";

const FlightDetail = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [quantity, setQuantity] = useState(1);

  const flightData = [
    {
      id: 1,
      airline: "Garuda Indonesia",
      logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=50&h=50&fit=crop",
      departure: "07:00",
      arrival: "14:30",
      duration: "7h 30m",
      price: 8500000,
      seatsLeft: 12,
      maxSeats: 180,
      route: "CGK - JED",
      class: "Economy",
      hasPromo: true,
      promoText: "Hemat 15%"
    },
    {
      id: 2,
      airline: "Saudi Arabian Airlines",
      logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=50&h=50&fit=crop",
      departure: "15:45",
      arrival: "23:15",
      duration: "7h 30m",
      price: 7800000,
      seatsLeft: 5,
      maxSeats: 180,
      route: "CGK - JED",
      class: "Economy",
      hasPromo: false,
      promoText: ""
    },
    {
      id: 3,
      airline: "Emirates",
      logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=50&h=50&fit=crop",
      departure: "23:30",
      arrival: "07:00+1",
      duration: "7h 30m",
      price: 9200000,
      seatsLeft: 0,
      maxSeats: 180,
      route: "CGK - JED",
      class: "Economy",
      hasPromo: false,
      promoText: ""
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const isDateDisabled = (date: Date) => {
    return isPast(date) && !isToday(date);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-white to-spiritual-50/30">
      {/* Header */}
      <header className="bg-spiritual-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center space-x-4">
            <Link to="/product-detail" className="p-2 hover:bg-spiritual-700 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center space-x-3">
              <Asterisk className="h-8 w-8 text-gold-400" />
              <span className="text-xl font-sf font-bold">Bersafar</span>
            </div>
            <div className="ml-auto">
              <h1 className="text-lg font-sf font-semibold">Tiket Pesawat Umroh</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Date Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Pilih Tanggal Keberangkatan</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Pilih tanggal"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={isDateDisabled}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Jumlah Tiket:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Flight Options */}
        <div className="space-y-4">
          <h2 className="text-2xl font-sf font-bold text-spiritual-800">Pilihan Penerbangan</h2>
          
          {!selectedDate ? (
            <Card>
              <CardContent className="flex items-center justify-center py-12">
                <div className="text-center text-spiritual-600">
                  <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Silakan pilih tanggal untuk melihat penerbangan yang tersedia</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            flightData.map((flight) => (
              <Card key={flight.id} className={cn(
                "relative",
                flight.seatsLeft === 0 && "opacity-60"
              )}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
                    {/* Flight Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <img 
                          src={flight.logo} 
                          alt={flight.airline}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-sf font-bold text-lg">{flight.airline}</h3>
                          <p className="text-spiritual-600">{flight.class} • {flight.route}</p>
                        </div>
                        {flight.hasPromo && (
                          <Badge className="bg-red-500 text-white">
                            {flight.promoText}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-2xl font-bold">{flight.departure}</p>
                          <p className="text-sm text-spiritual-600">CGK</p>
                        </div>
                        <div className="flex-1 flex items-center">
                          <div className="flex-1 border-t border-spiritual-300 relative">
                            <Plane className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-spiritual-600" />
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{flight.arrival}</p>
                          <p className="text-sm text-spiritual-600">JED</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-4 text-sm text-spiritual-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{flight.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{flight.seatsLeft} kursi tersisa dari {flight.maxSeats}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="text-right">
                      <div className="mb-4">
                        <p className="text-3xl font-sf font-bold text-spiritual-800">
                          {formatPrice(flight.price)}
                        </p>
                        <p className="text-sm text-spiritual-600">per orang</p>
                      </div>
                      
                      <Button
                        className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900"
                        disabled={flight.seatsLeft === 0 || flight.seatsLeft < quantity}
                      >
                        {flight.seatsLeft === 0 ? "Sold Out" : 
                         flight.seatsLeft < quantity ? "Kursi Tidak Cukup" :
                         "Pilih Penerbangan"}
                      </Button>
                      
                      {flight.seatsLeft < 10 && flight.seatsLeft > 0 && (
                        <p className="text-red-500 text-xs mt-2">Hanya {flight.seatsLeft} kursi tersisa!</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
