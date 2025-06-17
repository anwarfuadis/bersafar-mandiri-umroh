
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, User, MapPin, Calendar, Package } from "lucide-react";

interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationDialog = ({ open, onOpenChange }: RegistrationDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    estimatedUmroh: "",
    umrohNeeds: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    // Handle form submission here
    onOpenChange(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md mx-auto bg-gradient-to-br from-spiritual-50 via-white to-gold-50/30 border-2 border-gold-200/50 shadow-2xl backdrop-blur-sm">
        <DialogHeader className="text-center pb-6">
          <div className="mx-auto mb-4">
            <img 
              src="/lovable-uploads/0447b7fb-94d7-470d-84ff-72fa7f50a25f.png" 
              alt="Bersafar" 
              className="h-10 w-auto mx-auto mb-2"
            />
            <h3 className="text-lg font-sf font-bold text-green-700">Bersafar</h3>
          </div>
          <DialogTitle className="text-2xl font-sf font-bold text-spiritual-800 mb-2">
            Mulai Perjalanan Umrohmu
          </DialogTitle>
          <p className="text-spiritual-600 font-sf leading-relaxed">
            Daftar sekarang dan dapatkan konsultasi gratis untuk persiapan umroh mandiri
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Label htmlFor="name" className="text-spiritual-700 font-sf font-medium">
                Nama Lengkap
              </Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="phone" className="text-spiritual-700 font-sf font-medium">
                Nomor WhatsApp
              </Label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="estimatedUmroh" className="text-spiritual-700 font-sf font-medium">
                Estimasi Umroh
              </Label>
              <div className="relative mt-1">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Select value={formData.estimatedUmroh} onValueChange={(value) => handleInputChange("estimatedUmroh", value)}>
                  <SelectTrigger className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
                    <SelectValue placeholder="Pilih waktu keberangkatan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3-bulan">1-3 bulan</SelectItem>
                    <SelectItem value="3-6-bulan">3-6 bulan</SelectItem>
                    <SelectItem value="6-12-bulan">6-12 bulan</SelectItem>
                    <SelectItem value="lebih-dari-1-tahun">Lebih dari 1 tahun</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="umrohNeeds" className="text-spiritual-700 font-sf font-medium">
                Kebutuhan Umroh
              </Label>
              <div className="relative mt-1">
                <Package className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Select value={formData.umrohNeeds} onValueChange={(value) => handleInputChange("umrohNeeds", value)}>
                  <SelectTrigger className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
                    <SelectValue placeholder="Pilih layanan yang dibutuhkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tiket-pesawat">Tiket Pesawat</SelectItem>
                    <SelectItem value="hotel">Hotel</SelectItem>
                    <SelectItem value="visa">Visa</SelectItem>
                    <SelectItem value="mutawif">Mutawif</SelectItem>
                    <SelectItem value="transportasi-lokal">Transportasi Lokal</SelectItem>
                    <SelectItem value="handling-bandara">Handling Bandara</SelectItem>
                    <SelectItem value="paket-lengkap">Paket lengkap</SelectItem>
                    <SelectItem value="konsultasi">Konsultasi dulu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-sf font-bold py-4 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gold-400/30"
            >
              Daftar Sekarang - Gratis!
            </Button>
            
            <div className="text-center">
              <p className="text-xs text-spiritual-500 font-sf">
                Dengan mendaftar, Anda menyetujui{" "}
                <span className="text-gold-600 hover:underline cursor-pointer">syarat & ketentuan</span> kami
              </p>
            </div>
          </div>
        </form>

        <div className="border-t border-spiritual-200 pt-4 mt-6">
          <div className="flex items-center justify-center space-x-6 text-xs text-spiritual-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>Konsultasi Gratis</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
              <span>Hemat hingga 30%</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-spiritual-500 rounded-full mr-2"></div>
              <span>Resmi & Terpercaya</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
