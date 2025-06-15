
import { ShoppingCart } from "lucide-react";

const FloatingCartButton = () => {
  // placeholder number, as no cart logic yet
  const serviceCount = 0;

  return (
    <button
      className="fixed bottom-6 right-6 z-50 bg-gold-500 hover:bg-gold-600 text-white rounded-full shadow-lg p-4 flex items-center transition-all"
      title="Lihat layanan yang ditambahkan"
      aria-label="Keranjang layanan"
    >
      <ShoppingCart className="w-6 h-6" />
      {serviceCount > 0 && (
        <span className="ml-2 bg-red-500 rounded-full text-xs px-2 py-0.5 text-white">
          {serviceCount}
        </span>
      )}
    </button>
  );
};

export default FloatingCartButton;
