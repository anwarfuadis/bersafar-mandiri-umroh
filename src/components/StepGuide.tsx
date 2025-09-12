import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StepGuide = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        {/* Decorative glowing circle */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-gold-300 to-gold-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-sand-300 to-sand-400 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-br from-gold-200 to-gold-300 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-gradient-to-br from-spiritual-400 to-spiritual-500 rounded-full blur-xl"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold mb-7 text-white text-center drop-shadow">
          Panduan Perjalanan Halal
        </h2>

        {/* Mobile-friendly Comparison Table */}
        <div className="mt-10">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <div className="rounded-3xl shadow-2xl bg-white/15 backdrop-blur-xl border-2 border-white/30 overflow-hidden hover:shadow-3xl transition-all duration-300">
              <table className="w-full text-sm md:text-base text-white">
                <thead>
                  <tr className="bg-gradient-to-r from-gold-500/40 to-sand-500/30 border-b-2 border-white/20">
                    <th className="py-6 px-6 text-left font-normal text-white tracking-wider text-lg"></th>
                    <th className="py-6 px-6 text-left text-gold-200 text-lg bg-gradient-to-r from-green-400/30 to-green-500/30 border-l-2 border-green-300/50">
                      <div className="flex items-center">
                        <span className="text-xl">🎯</span>
                        <span className="ml-2 font-bold">Umroh Mandiri (Bersafar)</span>
                      </div>
                    </th>
                    <th className="py-6 px-6 text-left text-sand-200 text-lg">Umroh via Travel Agent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/20 hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 text-white font-medium">Harga</td>
                    <td className="py-5 px-6 text-gold-200 text-lg bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                      <span className="text-green-300">✨ Mulai Rp 18 jutaan</span>
                    </td>
                    <td className="py-5 px-6 text-sand-200">Mulai Rp 26 jutaan</td>
                  </tr>
                  <tr className="border-b border-white/20 hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 text-white font-medium">Tiket Pesawat</td>
                    <td className="py-5 px-6 text-green-300 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                      <span className="flex items-center">
                        <span className="mr-2">✈️</span>
                        Pilih sendiri, hemat lebih
                      </span>
                    </td>
                    <td className="py-5 px-6 text-white/80">Sudah ditentukan travel</td>
                  </tr>
                  <tr className="border-b border-white/20 hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 text-white font-medium">Hotel</td>
                    <td className="py-5 px-6 text-green-300 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                      <span className="flex items-center">
                        <span className="mr-2">🏨</span>
                        Bebas pilih sesuai budget
                      </span>
                    </td>
                    <td className="py-5 px-6 text-white/80">Paket sudah ditentukan</td>
                  </tr>
                  <tr className="border-b border-white/20 hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 text-white font-medium">Visa</td>
                    <td className="py-5 px-6 text-gold-200 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                      <span className="flex items-center">
                        <span className="mr-2">📋</span>
                        Bantuan proses visa
                      </span>
                    </td>
                    <td className="py-5 px-6 text-green-300">Sudah termasuk</td>
                  </tr>
                  <tr className="border-b border-white/20 hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 text-white font-medium">Mutawif</td>
                    <td className="py-5 px-6 text-white bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                      <span className="flex items-center">
                        <span className="mr-2">👥</span>
                        Opsional sesuai kebutuhan
                      </span>
                    </td>
                    <td className="py-5 px-6 text-green-300">Ada pembimbing tetap</td>
                  </tr>
                  <tr className="border-b border-white/20 hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 text-white font-medium">Transportasi Lokal</td>
                    <td className="py-5 px-6 text-green-300 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                      <span className="flex items-center">
                        <span className="mr-2">🚌</span>
                        Fleksibel & custom
                      </span>
                    </td>
                    <td className="py-5 px-6 text-white/80">Paket standar</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 text-white font-medium">Handling Bandara</td>
                    <td className="py-5 px-6 text-white/80 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                      <span className="flex items-center">
                        <span className="mr-2">✈️</span>
                        Mandiri
                      </span>
                    </td>
                    <td className="py-5 px-6 text-green-300">Ada petugas bantu</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile/Tablet View - Horizontal Scroll with same desktop style */}
          <div className="lg:hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[700px] rounded-3xl shadow-2xl bg-white/15 backdrop-blur-xl border-2 border-white/30 overflow-hidden">
                <table className="w-full text-xs sm:text-sm text-white">
                  <thead>
                    <tr className="bg-gradient-to-r from-gold-500/40 to-sand-500/30 border-b-2 border-white/20">
                      <th className="py-4 px-3 text-left font-normal text-white tracking-wider text-sm"></th>
                      <th className="py-4 px-3 text-left text-gold-200 text-sm bg-gradient-to-r from-green-400/30 to-green-500/30 border-l-2 border-green-300/50">
                        <div className="flex items-center">
                          <span className="text-base">🎯</span>
                          <span className="ml-2 font-bold">Umroh Mandiri (Bersafar)</span>
                        </div>
                      </th>
                      <th className="py-4 px-3 text-left text-sand-200 text-sm">Umroh via Travel Agent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/20 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-white font-medium">Harga</td>
                      <td className="py-3 px-3 text-gold-200 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                        <span className="text-green-300">✨ Mulai Rp 18 jutaan</span>
                      </td>
                      <td className="py-3 px-3 text-sand-200">Mulai Rp 26 jutaan</td>
                    </tr>
                    <tr className="border-b border-white/20 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-white font-medium">Tiket Pesawat</td>
                      <td className="py-3 px-3 text-green-300 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                        <span className="flex items-center">
                          <span className="mr-1">✈️</span>
                          Pilih sendiri, hemat lebih
                        </span>
                      </td>
                      <td className="py-3 px-3 text-white/80">Sudah ditentukan travel</td>
                    </tr>
                    <tr className="border-b border-white/20 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-white font-medium">Hotel</td>
                      <td className="py-3 px-3 text-green-300 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                        <span className="flex items-center">
                          <span className="mr-1">🏨</span>
                          Bebas pilih sesuai budget
                        </span>
                      </td>
                      <td className="py-3 px-3 text-white/80">Paket sudah ditentukan</td>
                    </tr>
                    <tr className="border-b border-white/20 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-white font-medium">Visa</td>
                      <td className="py-3 px-3 text-gold-200 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                        <span className="flex items-center">
                          <span className="mr-1">📋</span>
                          Bantuan proses visa
                        </span>
                      </td>
                      <td className="py-3 px-3 text-green-300">Sudah termasuk</td>
                    </tr>
                    <tr className="border-b border-white/20 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-white font-medium">Mutawif</td>
                      <td className="py-3 px-3 text-white bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                        <span className="flex items-center">
                          <span className="mr-1">👥</span>
                          Opsional sesuai kebutuhan
                        </span>
                      </td>
                      <td className="py-3 px-3 text-green-300">Ada pembimbing tetap</td>
                    </tr>
                    <tr className="border-b border-white/20 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-white font-medium">Transportasi Lokal</td>
                      <td className="py-3 px-3 text-green-300 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                        <span className="flex items-center">
                          <span className="mr-1">🚌</span>
                          Fleksibel & custom
                        </span>
                      </td>
                      <td className="py-3 px-3 text-white/80">Paket standar</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-white font-medium">Handling Bandara</td>
                      <td className="py-3 px-3 text-white/80 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                        <span className="flex items-center">
                          <span className="mr-1">✈️</span>
                          Mandiri
                        </span>
                      </td>
                      <td className="py-3 px-3 text-green-300">Ada petugas bantu</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-gradient-to-r from-islamic-primary to-islamic-secondary hover:from-islamic-secondary hover:to-islamic-dark text-white font-bold text-base py-6 px-8 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Mulai Umroh Mandiri <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StepGuide;
