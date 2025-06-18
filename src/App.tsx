
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import FlightDetail from "./pages/FlightDetail";
import HotelDetail from "./pages/HotelDetail";
import VisaDetail from "./pages/VisaDetail";
import MutawifDetail from "./pages/MutawifDetail";
import NotFound from "./pages/NotFound";
import FloatingCartButton from "./components/FloatingCartButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/flight-detail" element={<FlightDetail />} />
          <Route path="/hotel-detail" element={<HotelDetail />} />
          <Route path="/visa-detail" element={<VisaDetail />} />
          <Route path="/mutawif-detail" element={<MutawifDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingCartButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
