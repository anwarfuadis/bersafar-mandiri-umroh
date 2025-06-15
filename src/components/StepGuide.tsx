
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const StepGuide = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-br from-spiritual-700 via-spiritual-600 to-spiritual-800">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        {/* Decorative glowing circle */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-gold-300 to-gold-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-sand-300 to-sand-400 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-br from-gold-200 to-gold-300 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-gradient-to-br from-spiritual-400 to-spiritual-500 rounded-full blur-xl"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-sf font-bold mb-7 text-white text-center drop-shadow">
          Bersafar bersama kami
        </h2>
        {/* Removed the three feature cards for Langkah Mudah, Harga Transparan, Fleksibel & Bebas Pilih */}

        {/* Comparison Table */}
        <div className="mt-10 flex justify-center">
          <div className="w-full">
            <div className="rounded-2xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden">
              <table className="w-full text-sm md:text-base text-white">
                <thead>
                  <tr className="bg-gradient-to-r from-gold-400/30 to-sand-400/20">
                    <th className="py-4 px-4 text-left font-bold text-gold-200 tracking-wider">Aspek</th>
                    <th className="py-4 px-4 text-left font-bold text-gold-300">Umrah Mandiri (Bersafar)</th>
                    <th className="py-4 px-4 text-left font-bold text-sand-200">Umrah via Travel Agent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/20">
                    <td className="py-4 px-4 font-semibold">Harga</td>
                    <td className="py-4 px-4 text-gold-200 font-bold">Mulai Rp 18 jutaan</td>
                    <td className="py-4 px-4 text-sand-200 font-bold">Mulai Rp 26 jutaan</td>
                  </tr>
                  <tr className="border-b border-white/20">
                    <td className="py-4 px-4 font-semibold">Jadwal</td>
                    <td className="py-4 px-4 font-bold text-green-300">Bebas atur sendiri</td>
                    <td className="py-4 px-4 text-white/80">Ikut jadwal rombongan</td>
                  </tr>
                  <tr className="border-b border-white/20">
                    <td className="py-4 px-4 font-semibold">Akomodasi</td>
                    <td className="py-4 px-4 font-bold text-green-300">Pilih sendiri</td>
                    <td className="py-4 px-4 text-white/80">Sudah ditentukan travel</td>
                  </tr>
                  <tr className="border-b border-white/20">
                    <td className="py-4 px-4 font-semibold">Transportasi Lokal</td>
                    <td className="py-4 px-4 text-gold-200">Patungan bareng, lebih hemat</td>
                    <td className="py-4 px-4 text-white/80">Sudah termasuk paket</td>
                  </tr>
                  <tr className="border-b border-white/20">
                    <td className="py-4 px-4 font-semibold">Handling Bandara</td>
                    <td className="py-4 px-4 text-white/80">Tanpa handling</td>
                    <td className="py-4 px-4 text-green-300">Ada petugas bantu</td>
                  </tr>
                  <tr className="border-b border-white/20">
                    <td className="py-4 px-4 font-semibold">Kebebasan</td>
                    <td className="py-4 px-4 font-bold text-green-300">Lebih fleksibel</td>
                    <td className="py-4 px-4 text-white/80">Terikat itinerary grup</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold">Pendamping (Mutawif)</td>
                    <td className="py-4 px-4 text-white">Jika dibutuhkan saja</td>
                    <td className="py-4 px-4 text-green-300">Ada pembimbing tetap</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-bold text-base py-6 px-8 rounded-full hover:scale-105 transition-all duration-300"
          >
            Mulai Umrah Mandiri <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StepGuide;
