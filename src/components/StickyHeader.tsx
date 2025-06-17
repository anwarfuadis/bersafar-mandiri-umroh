
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Asterisk } from "lucide-react";
import RegistrationDialog from "@/components/RegistrationDialog";
import LoginDialog from "@/components/LoginDialog";

const StickyHeader = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Show header when scrollY > 8px
      setShowHeader(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll);
    // On component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure header is visible if dialogOpen or loginOpen is true
  const headerVisible = showHeader || dialogOpen || loginOpen;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 bg-spiritual-800/95 backdrop-blur-md border-b border-spiritual-600/30 transition-all duration-300
          ${headerVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3">
            <Asterisk className="h-8 w-8 text-gold-400" />
            <span className="text-xl font-sf font-bold text-white">Bersafar</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost"
              className="text-white hover:text-gold-300 font-sf font-medium"
              onClick={() => setLoginOpen(true)}
            >
              Login
            </Button>
            <Button 
              size="default" 
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 px-8 py-3 font-sf font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gold-400/30"
              onClick={() => setDialogOpen(true)}
            >
              Mulai Perjalananmu
            </Button>
          </div>
        </div>
      </header>
      <RegistrationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
};

export default StickyHeader;
