import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import Index from "./pages/Index";
import About from "./pages/About";
import Certification from "./pages/Certification";
import Regulatory from "./pages/Regulatory";
import Innovation from "./pages/Innovation";
import QualityControl from "./pages/QualityControl";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Research from "./pages/Research";
import Manufacturing from "./pages/Manufacturing";
import Export from "./pages/Export";
import SalesDistribution from "./pages/SalesDistribution";
import ContractManufacturing from "./pages/ContractManufacturing";
import Facilities from "./pages/Facilities";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/regulatory" element={<Regulatory />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/quality-control" element={<QualityControl />} />
            <Route path="/products/:category" element={<Products />} />
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
);

export default App;
