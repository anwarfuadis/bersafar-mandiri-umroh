
import React, { useState } from "react";
import { ShoppingCart, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Updated mock data for cart (service) items, now with price
const initialServices = [
  { id: 1, name: "Visa Umroh", price: 1500000 },
  { id: 2, name: "Mutawif", price: 2000000 },
  { id: 3, name: "Hotel", price: 900000 },
];

const FloatingCartButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  // Now track services as local state so items can be removed
  const [cartServices, setCartServices] = useState(initialServices);

  const serviceCount = cartServices.length;
  const totalPrice = cartServices.reduce((sum, s) => sum + s.price, 0);

  const handleRemove = (id: number) => {
    setCartServices(current => current.filter(item => item.id !== id));
  };

  // Helper for formatting price in IDR
  const formatIDR = (amount: number) =>
    "Rp " + amount.toLocaleString("id-ID");

  return (
    <>
      {/* Expandable Cart Tab Box */}
      {open && (
        <div className="fixed bottom-24 right-4 z-50 w-72 max-w-full animate-fade-in">
          <Card className="shadow-2xl border-sand-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-spiritual-700">
                <ShoppingCart size={20} /> Keranjang Layanan
              </CardTitle>
            </CardHeader>
            <CardContent>
              {serviceCount > 0 ? (
                <>
                  <ul className="space-y-2 mb-3">
                    {cartServices.map((service) => (
                      <li
                        key={service.id}
                        className="flex items-center justify-between rounded-md px-2 py-1 bg-sand-100 text-spiritual-700 text-sm"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-lg text-gold-400">•</span>
                          <span className="font-medium truncate">{service.name}</span>
                          <span className="text-xs text-sand-500 ml-2">
                            {formatIDR(service.price)}
                          </span>
                        </div>
                        <button
                          className="p-1 hover:bg-gold-100 rounded transition"
                          title="Hapus"
                          onClick={() => handleRemove(service.id)}
                        >
                          <Minus className="w-4 h-4 text-gold-600" />
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center py-2 border-t border-sand-200 mb-2">
                    <span className="text-sm text-spiritual-700 font-medium">Total</span>
                    <span className="text-base font-bold text-gold-700">
                      {formatIDR(totalPrice)}
                    </span>
                  </div>
                </>
              ) : (
                <div className="text-center text-sm text-sand-500 py-8">
                  Keranjang kosong
                </div>
              )}
              <Button
                className="w-full bg-spiritual-600 hover:bg-spiritual-700 text-white mt-1"
                disabled={serviceCount === 0}
              >
                Lanjut ke Checkout
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Cart Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-50 bg-white border border-sand-300 shadow-lg rounded-full flex items-center gap-2 px-5 py-3 hover:bg-sand-50 transition-all group"
        aria-label="Keranjang"
      >
        <div className="relative flex items-center">
          <ShoppingCart className="text-spiritual-700" />
          {serviceCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-gold-400 text-white rounded-full px-1.5 text-xs font-bold min-w-5 flex items-center justify-center shadow">
              {serviceCount}
            </span>
          )}
        </div>
        <span className="ml-2 font-inter font-semibold text-spiritual-700 text-base">
          Keranjang
        </span>
      </button>
    </>
  );
};

export default FloatingCartButton;

