
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
import { User, Phone, Calendar, CheckSquare, Asterisk } from "lucide-react";

interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationDialog = ({ open, onOpenChange }: RegistrationDialogProps) => {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    nomorWhatsapp: "",
    estimasiUmroh: "",
    kebutuhanUmroh: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    // Handle registration here
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
            <Asterisk className="h-10 w-10 mx-auto mb-2 text-green-700" />
            <h3 className="text-lg font-sf font-bold text-green-700">Bersafar</h3>
          </div>
          <DialogTitle className="text-2xl font-sf font-bold text-spiritual-800 mb-2">
            Mulai Perjalanan Umroh Mandiri
          </DialogTitle>
          <p className="text-spiritual-600 font-sf leading-relaxed">
            Isi form berikut untuk mendapatkan rekomendasi terbaik sesuai kebutuhan Anda
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Label htmlFor="namaLengkap" className="text-spiritual-700 font-sf font-medium">
                Nama Lengkap
              </Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="namaLengkap"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  value={formData.namaLengkap}
                  onChange={(e) => handleInputChange("namaLengkap", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="nomorWhatsapp" className="text-spiritual-700 font-sf font-medium">
                Nomor WhatsApp
              </Label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="nomorWhatsapp"
                  type="tel"
                  placeholder="Contoh: 08123456789"
                  value={formData.nomorWhatsapp}
                  onChange={(e) => handleInputChange("nomorWhatsapp", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="estimasiUmroh" className="text-spiritual-700 font-sf font-medium">
                Estimasi Umroh
              </Label>
              <div className="relative mt-1">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="estimasiUmroh"
                  type="text"
                  placeholder="Contoh: Bulan Maret 2024"
                  value={formData.estimasiUmroh}
                  onChange={(e) => handleInputChange("estimasiUmroh", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="kebutuhanUmroh" className="text-spiritual-700 font-sf font-medium">
                Kebutuhan Umroh
              </Label>
              <div className="relative mt-1">
                <CheckSquare className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="kebutuhanUmroh"
                  type="text"
                  placeholder="Contoh: Visa, Hotel, Tiket Pesawat"
                  value={formData.kebutuhanUmroh}
                  onChange={(e) => handleInputChange("kebutuhanUmroh", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-sf font-bold py-4 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gold-400/30"
            >
              Mulai Perjalanan Saya
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-spiritual-600 font-sf">
                Sudah punya akun?{" "}
                <span className="text-gold-600 hover:underline cursor-pointer font-semibold">Masuk di sini</span>
              </p>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
