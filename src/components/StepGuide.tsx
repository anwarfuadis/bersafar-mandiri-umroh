
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

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            <div className="bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-2xl p-4 border border-green-300/50">
              <h3 className="text-lg font-bold text-gold-200 mb-4 flex items-center">
                <span className="text-xl mr-2">🎯</span>
                Umroh Mandiri (Bersafar)
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white">Harga</span>
                  <span className="text-green-300">✨ Mulai Rp 18 jutaan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Tiket Pesawat</span>
                  <span className="text-green-300">✈️ Pilih sendiri, hemat lebih</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Hotel</span>
                  <span className="text-green-300">🏨 Bebas pilih sesuai budget</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Visa</span>
                  <span className="text-gold-200">📋 Bantuan proses visa</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Mutawif</span>
                  <span className="text-white">👥 Opsional sesuai kebutuhan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Transportasi Lokal</span>
                  <span className="text-green-300">🚌 Fleksibel & custom</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Handling Bandara</span>
                  <span className="text-white/80">✈️ Mandiri</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
              <h3 className="text-lg text-sand-200 mb-4">
                Umroh via Travel Agent
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white">Harga</span>
                  <span className="text-sand-200">Mulai Rp 26 jutaan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Tiket Pesawat</span>
                  <span className="text-white/80">Sudah ditentukan travel</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Hotel</span>
                  <span className="text-white/80">Paket sudah ditentukan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Visa</span>
                  <span className="text-green-300">Sudah termasuk</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Mutawif</span>
                  <span className="text-green-300">Ada pembimbing tetap</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Transportasi Lokal</span>
                  <span className="text-white/80">Paket standar</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Handling Bandara</span>
                  <span className="text-green-300">Ada petugas bantu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet View - Horizontal Scroll */}
          <div className="hidden md:block lg:hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[800px] rounded-3xl shadow-2xl bg-white/15 backdrop-blur-xl border-2 border-white/30 overflow-hidden">
                <table className="w-full text-sm text-white">
                  <thead>
                    <tr className="bg-gradient-to-r from-gold-500/40 to-sand-500/30 border-b-2 border-white/20">
                      <th className="py-4 px-4 text-left font-normal text-white tracking-wider"></th>
                      <th className="py-4 px-4 text-left text-gold-200 bg-gradient-to-r from-green-400/30 to-green-500/30 border-l-2 border-green-300/50">
                        <div className="flex items-center">
                          <span className="text-lg">🎯</span>
                          <span className="ml-2 font-bold text-sm">Umroh Mandiri (Bersafar)</span>
                        </div>
                      </th>
                      <th className="py-4 px-4 text-left text-sand-200 text-sm">Umroh via Travel Agent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/20">
                      <td className="py-3 px-4 text-white font-medium text-sm">Harga</td>
                      <td className="py-3 px-4 text-gold-200 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                        <span className="text-green-300 text-sm">✨ Mulai Rp 18 jutaan</span>
                      </td>
                      <td className="py-3 px-4 text-sand-200 text-sm">Mulai Rp 26 jutaan</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="py-3 px-4 text-white font-medium text-sm">Tiket Pesawat</td>
                      <td className="py-3 px-4 text-green-300 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                        <span className="flex items-center text-sm">
                          <span className="mr-2">✈️</span>
                          Pilih sendiri, hemat lebih
                        </span>
                      </td>
                      <td className="py-3 px-4 text-white/80 text-sm">Sudah ditentukan travel</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="py-3 px-4 text-white font-medium text-sm">Hotel</td>
                      <td className="py-3 px-4 text-green-300 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                        <span className="flex items-center text-sm">
                          <span className="mr-2">🏨</span>
                          Bebas pilih sesuai budget
                        </span>
                      </td>
                      <td className="py-3 px-4 text-white/80 text-sm">Paket sudah ditentukan</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="py-3 px-4 text-white font-medium text-sm">Visa</td>
                      <td className="py-3 px-4 text-gold-200 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                        <span className="flex items-center text-sm">
                          <span className="mr-2">📋</span>
                          Bantuan proses visa
                        </span>
                      </td>
                      <td className="py-3 px-4 text-green-300 text-sm">Sudah termasuk</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="py-3 px-4 text-white font-medium text-sm">Mutawif</td>
                      <td className="py-3 px-4 text-white bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                        <span className="flex items-center text-sm">
                          <span className="mr-2">👥</span>
                          Opsional sesuai kebutuhan
                        </span>
                      </td>
                      <td className="py-3 px-4 text-green-300 text-sm">Ada pembimbing tetap</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="py-3 px-4 text-white font-medium text-sm">Transportasi Lokal</td>
                      <td className="py-3 px-4 text-green-300 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                        <span className="flex items-center text-sm">
                          <span className="mr-2">🚌</span>
                          Fleksibel & custom
                        </span>
                      </td>
                      <td className="py-3 px-4 text-white/80 text-sm">Paket standar</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium text-sm">Handling Bandara</td>
                      <td className="py-3 px-4 text-white/80 bg-gradient-to-r from-green-400/10 to-green-500/10 border-l-2 border-green-300/30">
                        <span className="flex items-center text-sm">
                          <span className="mr-2">✈️</span>
                          Mandiri
                        </span>
                      </td>
                      <td className="py-3 px-4 text-green-300 text-sm">Ada petugas bantu</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-bold text-base py-6 px-8 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Mulai Umroh Mandiri <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StepGuide;
