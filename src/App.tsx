import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Search from "./pages/Search";
import Certification from "./pages/Certification";
import Regulatory from "./pages/Regulatory";
import Innovation from "./pages/Innovation";
import QualityControl from "./pages/QualityControl";
import Contact from "./pages/Contact";
import Research from "./pages/Research";
import Manufacturing from "./pages/Manufacturing";
import Export from "./pages/Export";
import SalesDistribution from "./pages/SalesDistribution";
import ContractManufacturing from "./pages/ContractManufacturing";
import Facilities from "./pages/Facilities";
import OilAndLubricants from "./pages/OilAndLubricants";
import HerbalAndCosmetics from "./pages/HerbalAndCosmetics";
import Nutraceuticals from "./pages/Nutraceuticals";
import FoodGrains from "./pages/FoodGrains";
import Chemicals from "./pages/Chemicals";
import NotFound from "./pages/NotFound";
import PharmaceuticalProducts from "./pages/products/pharmaceutical/PharmaceuticalProducts";
import GeneralProducts from "./pages/products/pharmaceutical/GeneralProducts";
import CardioCare from "./pages/products/pharmaceutical/CardioCare";
import Injections from "./pages/products/pharmaceutical/Injections";
import IronSucrose from "./pages/products/pharmaceutical/injections/IronSucrose";
import Gentamicin from "./pages/products/pharmaceutical/injections/Gentamicin";
import SoftGelCapsules from "./pages/products/pharmaceutical/SoftGelCapsules";
import VitaminA200k from "./pages/products/pharmaceutical/softgel/VitaminA200k";
import VitaminA100k from "./pages/products/pharmaceutical/softgel/VitaminA100k";
import Bivalirudine from "./pages/products/pharmaceutical/cardio/Bivalirudine";
import Hyaluronidase from "./pages/products/pharmaceutical/cardio/Hyaluronidase";
import AmphotericinB from "./pages/products/pharmaceutical/cardio/AmphotericinB";
import Vancomycin from "./pages/products/pharmaceutical/cardio/Vancomycin";
import Streptokinase from "./pages/products/pharmaceutical/cardio/Streptokinase";
import Caspofungin from "./pages/products/pharmaceutical/cardio/Caspofungin";
import Suppository from "./pages/products/pharmaceutical/Suppository";
import IVFluids from "./pages/products/pharmaceutical/IVFluids";
import AnticancerDrugs from "./pages/products/pharmaceutical/AnticancerDrugs";
import DiagnosticsKits from "./pages/products/pharmaceutical/DiagnosticsKits";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/search" element={<Search />} />
              <Route path="/about" element={<About />} />
              <Route path="/certification" element={<Certification />} />
              <Route path="/regulatory" element={<Regulatory />} />
              <Route path="/innovation" element={<Innovation />} />
              <Route path="/quality-control" element={<QualityControl />} />
              <Route path="/oil-and-lubricants" element={<OilAndLubricants />} />
              <Route path="/herbal-and-cosmetics" element={<HerbalAndCosmetics />} />
              <Route path="/products/nutraceutical" element={<Nutraceuticals />} />
              <Route path="/products/food-grains" element={<FoodGrains />} />
              <Route path="/products/chemicals" element={<Chemicals />} />
              {/* Pharmaceutical Products Routes */}
              <Route path="/products/pharmaceutical" element={<PharmaceuticalProducts />} />
              <Route path="/products/pharmaceutical/general" element={<GeneralProducts />} />
              <Route path="/products/pharmaceutical/cardio" element={<CardioCare />} />
              <Route path="/products/pharmaceutical/cardio/bivalirudine" element={<Bivalirudine />} />
              <Route path="/products/pharmaceutical/cardio/hyaluronidase" element={<Hyaluronidase />} />
              <Route path="/products/pharmaceutical/cardio/amphotericin-b" element={<AmphotericinB />} />
              <Route path="/products/pharmaceutical/cardio/vancomycin" element={<Vancomycin />} />
              <Route path="/products/pharmaceutical/cardio/streptokinase" element={<Streptokinase />} />
              <Route path="/products/pharmaceutical/cardio/caspofungin" element={<Caspofungin />} />
              <Route path="/products/pharmaceutical/injections" element={<Injections />} />
              <Route path="/products/pharmaceutical/injections/iron-sucrose" element={<IronSucrose />} />
              <Route path="/products/pharmaceutical/injections/gentamicin" element={<Gentamicin />} />
              <Route path="/products/pharmaceutical/softgel" element={<SoftGelCapsules />} />
              <Route path="/products/pharmaceutical/softgel/vitamin-a-200k" element={<VitaminA200k />} />
              <Route path="/products/pharmaceutical/softgel/vitamin-a-100k" element={<VitaminA100k />} />
              <Route path="/products/pharmaceutical/suppository" element={<Suppository />} />
              <Route path="/products/pharmaceutical/iv-fluids" element={<IVFluids />} />
              <Route path="/products/pharmaceutical/anticancer" element={<AnticancerDrugs />} />
              <Route path="/products/pharmaceutical/diagnostics" element={<DiagnosticsKits />} />
              <Route path="/research" element={<Research />} />
              <Route path="/facilities/manufacturing" element={<Manufacturing />} />
              <Route path="/facilities/export" element={<Export />} />
              <Route path="/facilities/sales" element={<SalesDistribution />} />
              <Route path="/facilities/contract" element={<ContractManufacturing />} />
              <Route path="/facilities/:type" element={<Facilities />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
