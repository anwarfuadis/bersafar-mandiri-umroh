
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock data for cart (service) items
const mockServices = [
  { id: 1, name: "Visa Umroh" },
  { id: 2, name: "Mutawif" },
  { id: 3, name: "Hotel" },
];

const FloatingCartButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  // For demo, you can replace this with your actual state logic
  const cartServices = mockServices;
  const serviceCount = cartServices.length;

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
                <ul className="space-y-2 mb-4">
                  {cartServices.map((service) => (
                    <li
                      key={service.id}
                      className="rounded-md px-3 py-2 bg-sand-100 text-spiritual-700 flex items-center"
                    >
                      <span className="mr-2 text-lg">•</span>
                      <span className="font-medium">{service.name}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center text-sm text-sand-500 py-8">
                  Keranjang kosong
                </div>
              )}
              <Button className="w-full bg-spiritual-600 hover:bg-spiritual-700 text-white mt-1">
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
        <span className="ml-2 font-sf font-semibold text-spiritual-700 text-base">
          Keranjang
        </span>
      </button>
    </>
  );
};

export default FloatingCartButton;
