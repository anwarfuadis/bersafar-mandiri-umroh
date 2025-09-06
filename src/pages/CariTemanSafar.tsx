import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, MapPin, Calendar, Filter, Plus, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CariTemanSafar = () => {
  const navigate = useNavigate();
  const [searchFilter, setSearchFilter] = useState({
    destination: "",
    gender: "",
    ageRange: "",
    travelDate: ""
  });

  const travelGroups = [
    {
      id: 1,
      title: "Umroh Keluarga Jakarta",
      destination: "Makkah & Madinah",
      organizer: "Ibu Siti Aminah",
      members: 8,
      maxMembers: 12,
      gender: "Campuran (Keluarga)",
      travelDate: "15 Maret 2024",
      budget: "Rp 22.000.000",
      description: "Mencari keluarga muslim untuk join umroh bersama. Paket sudah termasuk hotel bintang 4 dan muthawif berpengalaman.",
      tags: ["Keluarga", "Ekonomis", "Berpengalaman"],
      status: "Tersedia"
    },
    {
      id: 2,
      title: "Umroh Ikhwah Surabaya",
      destination: "Makkah & Madinah",
      organizer: "Ustadz Ahmad Fauzi",
      members: 15,
      maxMembers: 20,
      gender: "Ikhwan (Laki-laki)",
      travelDate: "10 April 2024",
      budget: "Rp 18.500.000",
      description: "Jamaah ikhwan untuk umroh dengan program kajian intensif dan ziarah lengkap. Dipimpin ustadz berpengalaman.",
      tags: ["Ikhwan", "Kajian", "Ekonomis"],
      status: "Tersedia"
    },
    {
      id: 3,
      title: "Umroh Akhawat Bandung",
      destination: "Makkah & Madinah",
      organizer: "Ustadzah Khadijah",
      members: 18,
      maxMembers: 25,
      gender: "Akhawat (Perempuan)",
      travelDate: "25 Mei 2024",
      budget: "Rp 25.000.000",
      description: "Khusus akhawat dengan program tahsin Quran dan kajian fiqh wanita. Hotel dekat Masjidil Haram.",
      tags: ["Akhawat", "Tahsin", "Premium"],
      status: "Hampir Penuh"
    }
  ];

  const handleJoinGroup = (groupId: number) => {
    alert(`Bergabung dengan grup ${groupId}. Fitur ini akan segera hadir!`);
  };

  const handleCreateGroup = () => {
    alert("Fitur buat grup baru akan segera hadir!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-spiritual-50 to-gold-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <button 
            onClick={() => navigate("/")}
            className="mb-4 text-blue-200 hover:text-white transition-colors"
          >
            ← Kembali ke Beranda
          </button>
          <h1 className="text-4xl font-sf font-bold mb-4">Teman Safar</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Temukan teman perjalanan spiritual yang sesuai dengan preferensi Anda. 
            Bergabunglah dengan jamaah yang telah terverifikasi atau buat grup sendiri.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-spiritual-800">
              <Filter className="w-5 h-5 mr-2" />
              Filter Pencarian
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Destinasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="umroh">Makkah & Madinah</SelectItem>
                  <SelectItem value="turkey">Turkey</SelectItem>
                  <SelectItem value="bosnia">Bosnia</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ikhwan">Ikhwan (Laki-laki)</SelectItem>
                  <SelectItem value="akhawat">Akhawat (Perempuan)</SelectItem>
                  <SelectItem value="keluarga">Campuran (Keluarga)</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Rentang Umur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20-30">20-30 tahun</SelectItem>
                  <SelectItem value="30-40">30-40 tahun</SelectItem>
                  <SelectItem value="40-50">40-50 tahun</SelectItem>
                  <SelectItem value="50+">50+ tahun</SelectItem>
                </SelectContent>
              </Select>

              <Input type="date" placeholder="Tanggal Keberangkatan" />
            </div>
          </CardContent>
        </Card>

        {/* Create Group CTA */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-sf font-bold mb-2">Tidak Menemukan Grup yang Cocok?</h3>
                  <p className="text-green-100">Buat grup perjalanan sendiri dan ajak orang lain bergabung!</p>
                </div>
                <Button 
                  onClick={handleCreateGroup}
                  className="bg-white text-green-600 hover:bg-green-50 font-sf font-bold"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Buat Grup Baru
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Travel Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {travelGroups.map((group) => (
            <Card key={group.id} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-sf font-bold text-spiritual-800 mb-2">
                      {group.title}
                    </h3>
                    <div className="flex items-center text-spiritual-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{group.destination}</span>
                    </div>
                    <div className="flex items-center text-spiritual-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{group.travelDate}</span>
                    </div>
                  </div>
                  <Badge 
                    variant={group.status === "Tersedia" ? "default" : "secondary"}
                    className={group.status === "Tersedia" ? "bg-green-500" : "bg-orange-500"}
                  >
                    {group.status}
                  </Badge>
                </div>

                <div className="bg-spiritual-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-spiritual-500">Organizer:</span>
                      <div className="font-medium text-spiritual-800">{group.organizer}</div>
                    </div>
                    <div>
                      <span className="text-spiritual-500">Anggota:</span>
                      <div className="font-medium text-spiritual-800 flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {group.members}/{group.maxMembers}
                      </div>
                    </div>
                    <div>
                      <span className="text-spiritual-500">Gender:</span>
                      <div className="font-medium text-spiritual-800">{group.gender}</div>
                    </div>
                    <div>
                      <span className="text-spiritual-500">Budget:</span>
                      <div className="font-medium text-spiritual-800">{group.budget}</div>
                    </div>
                  </div>
                </div>

                <p className="text-spiritual-600 text-sm mb-4 line-clamp-2">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {group.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button 
                    onClick={() => handleJoinGroup(group.id)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-sf font-bold"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Bergabung
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-spiritual-300 text-spiritual-700 hover:bg-spiritual-100"
                  >
                    Detail
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safety Notice */}
        <div className="mt-12">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="font-sf font-bold text-yellow-800 mb-2">🛡️ Keamanan & Keselamatan</h3>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Semua organizer telah melalui verifikasi identitas</li>
                <li>• Pastikan bertemu di tempat umum untuk perkenalan pertama</li>
                <li>• Gunakan sistem pembayaran resmi yang tersedia</li>
                <li>• Laporkan aktivitas mencurigakan kepada tim Bersafar</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CariTemanSafar;