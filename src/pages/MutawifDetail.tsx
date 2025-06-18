
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Star, User, Clock, Languages, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Asterisk } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, isPast } from "date-fns";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MutawifDetail = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedMutawif, setSelectedMutawif] = useState<string | null>(null);

  const mutawifData = [
    {
      id: "1",
      name: "Ustadz Ahmad Ramadan",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviewCount: 127,
      experience: "15 tahun",
      languages: ["Bahasa Indonesia", "Arab", "Inggris"],
      specialties: ["Tuntunan Umroh", "Sejarah Islam", "Fiqih Ibadah"],
      price: 2500000,
      availability: "Tersedia",
      description: "Mutawif berpengalaman dengan penguasaan bahasa Arab yang fasih. Telah membimbing ribuan jamaah umroh dari berbagai negara.",
      certifications: ["Sertifikat Mutawif Resmi", "Ijazah Al-Azhar", "Tour Guide License"]
    },
    {
      id: "2", 
      name: "Ustadz Muhammad Hasan",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      reviewCount: 89,
      experience: "12 tahun",
      languages: ["Bahasa Indonesia", "Arab"],
      specialties: ["Tuntunan Umroh", "Kajian Al-Quran", "Doa dan Zikir"],
      price: 2200000,
      availability: "Tersedia",
      description: "Mutawif yang sabar dan telaten dalam membimbing jamaah. Sangat memahami kebutuhan jamaah Indonesia.",
      certifications: ["Sertifikat Mutawif Resmi", "Diploma Syariah"]
    },
    {
      id: "3",
      name: "Ustadz Ali Makki",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 4.7,
      reviewCount: 156,
      experience: "20 tahun",
      languages: ["Bahasa Indonesia", "Arab", "Melayu"],
      specialties: ["Tuntunan Umroh", "Sejarah Masjidil Haram", "Manasik Haji"],
      price: 2800000,
      availability: "Tidak Tersedia",
      description: "Mutawif senior dengan pengalaman luas. Sangat menguasai sejarah dan tata cara ibadah di tanah suci.",
      certifications: ["Sertifikat Mutawif Resmi", "Master Studi Islam", "Hadji Certificate"]
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
              <h1 className="text-lg font-sf font-semibold">Pilih Mutawif</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Date Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Pilih Tanggal Umroh</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
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
                  {selectedDate ? format(selectedDate, "PPP") : "Pilih tanggal umroh"}
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
          </CardContent>
        </Card>

        {/* Mutawif Options */}
        <div className="space-y-6">
          <h2 className="text-2xl font-sf font-bold text-spiritual-800">Pilih Mutawif Terbaik</h2>
          
          {!selectedDate ? (
            <Card>
              <CardContent className="flex items-center justify-center py-12">
                <div className="text-center text-spiritual-600">
                  <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Silakan pilih tanggal umroh untuk melihat mutawif yang tersedia</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mutawifData.map((mutawif) => (
                <Card 
                  key={mutawif.id} 
                  className={cn(
                    "relative cursor-pointer transition-all duration-200 hover:shadow-lg",
                    mutawif.availability === "Tidak Tersedia" && "opacity-60",
                    selectedMutawif === mutawif.id && "ring-2 ring-gold-400 border-gold-400"
                  )}
                  onClick={() => mutawif.availability === "Tersedia" && setSelectedMutawif(mutawif.id)}
                >
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={mutawif.photo} alt={mutawif.name} />
                        <AvatarFallback><User className="w-8 h-8" /></AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-xl font-sf font-bold mb-1">{mutawif.name}</h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 fill-gold-400 text-gold-400 mr-1" />
                            <span className="font-medium">{mutawif.rating}</span>
                          </div>
                          <span className="text-spiritual-600">({mutawif.reviewCount} ulasan)</span>
                        </div>
                        <Badge 
                          className={cn(
                            mutawif.availability === "Tersedia" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          )}
                        >
                          {mutawif.availability}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-sf font-bold text-spiritual-800">
                          {formatPrice(mutawif.price)}
                        </p>
                        <p className="text-sm text-spiritual-600">per jamaah</p>
                      </div>
                    </div>

                    {/* Experience & Languages */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-spiritual-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Pengalaman {mutawif.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Languages className="w-4 h-4" />
                        <span>{mutawif.languages.join(", ")}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-spiritual-700 mb-4">{mutawif.description}</p>

                    {/* Specialties */}
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Keahlian:</p>
                      <div className="flex flex-wrap gap-2">
                        {mutawif.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Sertifikasi:</p>
                      <div className="space-y-1">
                        {mutawif.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-spiritual-600">
                            <Award className="w-3 h-3" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      className={cn(
                        "w-full",
                        selectedMutawif === mutawif.id 
                          ? "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900"
                          : "bg-spiritual-100 hover:bg-spiritual-200 text-spiritual-700"
                      )}
                      disabled={mutawif.availability === "Tidak Tersedia"}
                    >
                      {mutawif.availability === "Tidak Tersedia" ? "Tidak Tersedia" :
                       selectedMutawif === mutawif.id ? "Terpilih" : "Pilih Mutawif"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Confirmation */}
        {selectedMutawif && (
          <Card className="mt-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-sf font-bold mb-2">Mutawif Terpilih</h3>
                  <p className="text-spiritual-600">
                    {mutawifData.find(m => m.id === selectedMutawif)?.name} untuk tanggal {selectedDate && format(selectedDate, "PPP")}
                  </p>
                </div>
                <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-sf font-bold px-8">
                  Konfirmasi Pilihan
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MutawifDetail;
