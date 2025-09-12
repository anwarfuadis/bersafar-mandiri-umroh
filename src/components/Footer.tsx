
import { useEffect, useState } from "react";

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900">
      {/* Parallax desert horizon */}
      <div className="absolute inset-0 opacity-20" style={{
        transform: `translateY(${scrollY * 0.2}px)`
      }}>
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-blue-900 via-blue-700 to-transparent"></div>
        <div className="absolute bottom-16 left-10 w-16 h-16 bg-gold-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-32 right-20 w-12 h-12 bg-gold-300 rounded-full opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-sf font-bold text-white mb-4">
              Bersafar
            </h3>
            <p className="text-white/80 font-sf leading-relaxed mb-6">
              Platform Umroh Mandiri pertama di Indonesia. Pilih layanan yang kamu butuhkan, skip yang tidak.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-lg">📱</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-lg">📧</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-lg">🌐</span>
              </div>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-xl font-sf font-semibold text-white mb-6">
              Layanan
            </h4>
            <ul className="space-y-3">
              {["Penerbangan", "Hotel", "Visa Umroh", "Mutawif", "Asuransi"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 font-sf hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Panduan */}
          <div>
            <h4 className="text-xl font-sf font-semibold text-white mb-6">
              Panduan
            </h4>
            <ul className="space-y-3">
              {["Cara Pesan", "Syarat & Ketentuan", "FAQ", "Tips Umroh", "Blog"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 font-sf hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-xl font-sf font-semibold text-white mb-6">
              Kontak
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-lg mt-1">📱</span>
                <div>
                  <div className="text-white font-sf font-medium">WhatsApp</div>
                  <div className="text-white/80 font-sf">+62 812-3456-7890</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg mt-1">✉️</span>
                <div>
                  <div className="text-white font-sf font-medium">Email</div>
                  <div className="text-white/80 font-sf">support@bersafar.id</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg mt-1">📍</span>
                <div>
                  <div className="text-white font-sf font-medium">Alamat</div>
                  <div className="text-white/80 font-sf">Jakarta, Indonesia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 font-sf text-sm">
              © 2024 Bersafar. Semua hak cipta dilindungi.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 font-sf hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-white/80 font-sf hover:text-white transition-colors">
                Syarat Layanan
              </a>
              <a href="#" className="text-white/80 font-sf hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Islamic decoration */}
        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p className="font-sf italic text-white">
            "Dan sempurnakanlah ibadah haji dan umroh karena Allah"
          </p>
          <p className="font-sf text-sm mt-2 text-white/80">
            - Al-Baqarah: 196
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
