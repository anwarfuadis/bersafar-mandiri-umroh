
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FlightDetail from "./pages/FlightDetail";
import HotelDetail from "./pages/HotelDetail";
import VisaDetail from "./pages/VisaDetail";
import MutawifDetail from "./pages/MutawifDetail";
import TripDetail from "./pages/TripDetail";
import UmrohDetail from "./pages/UmrohDetail";
import EropaDetail from "./pages/EropaDetail";
import USADetail from "./pages/USADetail";
import AsiaDetail from "./pages/AsiaDetail";
import PrivateTripDetail from "./pages/PrivateTripDetail";
import CariTemanSafar from "./pages/CariTemanSafar";
import UmrohMandiri from "./pages/UmrohMandiri";
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
          <Route path="/flight-detail" element={<FlightDetail />} />
          <Route path="/hotel-detail" element={<HotelDetail />} />
          <Route path="/visa-detail" element={<VisaDetail />} />
          <Route path="/mutawif-detail" element={<MutawifDetail />} />
          <Route path="/trip-detail/:tripId" element={<TripDetail />} />
          <Route path="/umroh-detail" element={<UmrohDetail />} />
          <Route path="/eropa-detail" element={<EropaDetail />} />
          <Route path="/usa-detail" element={<USADetail />} />
          <Route path="/asia-detail" element={<AsiaDetail />} />
          <Route path="/private-trip-detail" element={<PrivateTripDetail />} />
          <Route path="/cari-teman-safar" element={<CariTemanSafar />} />
          <Route path="/umroh-mandiri" element={<UmrohMandiri />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingCartButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
