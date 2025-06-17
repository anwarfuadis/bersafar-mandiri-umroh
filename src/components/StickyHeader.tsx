
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "@/components/RegistrationDialog";

const StickyHeader = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
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

  // Ensure header is visible if dialogOpen is true
  const headerVisible = showHeader || dialogOpen;

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
            <img 
              src="/lovable-uploads/0447b7fb-94d7-470d-84ff-72fa7f50a25f.png" 
              alt="Bersafar" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-sf font-bold text-white">Bersafar</span>
          </div>

          {/* CTA Button */}
          <Button 
            size="default" 
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 px-8 py-3 font-sf font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gold-400/30"
            onClick={() => setDialogOpen(true)}
          >
            Mulai Perjalananmu
          </Button>
        </div>
      </header>
      <RegistrationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default StickyHeader;
