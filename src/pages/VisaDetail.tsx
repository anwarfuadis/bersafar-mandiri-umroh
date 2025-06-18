
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload, FileText, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Asterisk } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const VisaDetail = () => {
  const [selectedOption, setSelectedOption] = useState("regular");
  const [uploadedDocs, setUploadedDocs] = useState<{[key: string]: File | null}>({
    flightTicket: null,
    hotelBooking: null,
    passport: null,
    photo: null
  });

  const visaOptions = [
    {
      id: "regular",
      name: "Regular",
      price: 1200000,
      processingTime: "7-10 hari kerja",
      description: "Proses visa standar dengan waktu pemrosesan normal",
      features: ["Pemrosesan standar", "Konsultasi dokumen", "Follow up status"]
    },
    {
      id: "fast-track",
      name: "Fast Track",
      price: 1800000,
      processingTime: "2-3 hari kerja",
      description: "Proses visa dipercepat untuk keberangkatan mendadak",
      features: ["Pemrosesan prioritas", "Konsultasi dokumen", "Follow up status", "WhatsApp support 24/7"]
    }
  ];

  const requiredDocs = [
    {
      id: "flightTicket",
      name: "Tiket Pesawat",
      description: "Tiket pesawat pulang-pergi yang sudah dikonfirmasi",
      required: true
    },
    {
      id: "hotelBooking",
      name: "Booking Hotel", 
      description: "Voucher hotel atau konfirmasi pemesanan hotel",
      required: true
    },
    {
      id: "passport",
      name: "Paspor",
      description: "Scan paspor dengan masa berlaku minimal 6 bulan",
      required: true
    },
    {
      id: "photo",
      name: "Foto 4x6",
      description: "Foto terbaru dengan latar belakang putih",
      required: true
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleFileUpload = (docId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setUploadedDocs(prev => ({ ...prev, [docId]: file }));
  };

  const selectedVisa = visaOptions.find(option => option.id === selectedOption);

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
              <h1 className="text-lg font-sf font-semibold">Visa Umroh</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Visa Options */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Pilih Jenis Layanan Visa</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
              <div className="space-y-4">
                {visaOptions.map((option) => (
                  <div key={option.id} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-spiritual-50/50 cursor-pointer">
                    <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={option.id} className="cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-sf font-bold">{option.name}</h3>
                          <div className="text-right">
                            <p className="text-2xl font-sf font-bold text-spiritual-800">
                              {formatPrice(option.price)}
                            </p>
                            <div className="flex items-center space-x-1 text-spiritual-600">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{option.processingTime}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-spiritual-600 mb-3">{option.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {option.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </Label>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Required Documents */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Upload Dokumen Persyaratan</span>
            </CardTitle>
            <div className="flex items-center space-x-2 text-amber-600">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm">Semua dokumen wajib diupload untuk melanjutkan proses visa</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {requiredDocs.map((doc) => (
                <div key={doc.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium flex items-center space-x-2">
                        <span>{doc.name}</span>
                        {doc.required && <Badge variant="destructive" className="text-xs">Wajib</Badge>}
                      </h4>
                      <p className="text-sm text-spiritual-600">{doc.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(doc.id, e)}
                      className="hidden"
                      id={`file-${doc.id}`}
                    />
                    <Label 
                      htmlFor={`file-${doc.id}`}
                      className="flex items-center space-x-2 px-4 py-2 bg-spiritual-100 hover:bg-spiritual-200 rounded-lg cursor-pointer transition-colors"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Upload File</span>
                    </Label>
                    
                    {uploadedDocs[doc.id] && (
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">{uploadedDocs[doc.id]?.name}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Summary and Action */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-sf font-bold">Ringkasan Pesanan</h3>
                <p className="text-spiritual-600">Layanan Visa {selectedVisa?.name}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-sf font-bold text-spiritual-800">
                  {selectedVisa && formatPrice(selectedVisa.price)}
                </p>
                <p className="text-spiritual-600">Waktu proses: {selectedVisa?.processingTime}</p>
              </div>
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-sf font-bold py-4 px-6 rounded-full shadow-xl"
              disabled={requiredDocs.some(doc => doc.required && !uploadedDocs[doc.id])}
            >
              {requiredDocs.some(doc => doc.required && !uploadedDocs[doc.id]) 
                ? "Upload Semua Dokumen untuk Melanjutkan"
                : "Proses Visa Sekarang"
              }
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisaDetail;
