
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
import { Phone, Lock, Eye, EyeOff } from "lucide-react";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const [formData, setFormData] = useState({
    whatsapp: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", formData);
    onOpenChange(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md mx-auto bg-gradient-to-br from-spiritual-50 via-white to-gold-50/30 border-2 border-gold-200/50 shadow-2xl backdrop-blur-sm max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-6">
          <div className="mx-auto mb-4">
            <img 
              src="/lovable-uploads/bersafar-logo-cropped.png" 
              alt="Bersafar Logo"
              className="h-14 w-auto mx-auto mb-2"
            />
            <h3 className="text-lg font-inter font-bold text-spiritual-800">Bersafar</h3>
          </div>
          <DialogTitle className="text-2xl font-inter font-bold text-spiritual-800 mb-2">
            Masuk ke Akun Anda
          </DialogTitle>
          <p className="text-spiritual-600 font-inter leading-relaxed">
            Selamat datang kembali! Silakan masuk untuk melanjutkan
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Label htmlFor="whatsapp" className="text-spiritual-700 font-inter font-medium">
                Nomor WhatsApp
              </Label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="Contoh: 08123456789"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="password" className="text-spiritual-700 font-inter font-medium">
                Password
              </Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password Anda"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="pl-10 pr-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-spiritual-400 hover:text-spiritual-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-bersafar-primary to-bersafar-secondary hover:from-bersafar-secondary hover:to-bersafar-dark text-white font-poppins font-bold py-4 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-bersafar-light/30"
            >
              Masuk
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-spiritual-600 font-inter">
                Belum punya akun?{" "}
                <span className="text-bersafar-accent hover:underline cursor-pointer font-semibold">Daftar sekarang</span>
              </p>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
