import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import FAQ from "./pages/FAQ.tsx";
import Pricing from "./pages/Pricing.tsx";
import PricingPetParents from "./pages/PricingPetParents.tsx";
import PricingProviders from "./pages/PricingProviders.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import HowToSignUp from "./pages/HowToSignUp.tsx";
import HowToManageProfile from "./pages/HowToManageProfile.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing/pet-parents" element={<PricingPetParents />} />
          <Route path="/pricing/providers" element={<PricingProviders />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/how-to-sign-up" element={<HowToSignUp />} />
          <Route path="/how-to-manage-profile" element={<HowToManageProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
