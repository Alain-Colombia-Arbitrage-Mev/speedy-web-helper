
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { WalletProvider } from "./components/providers/WalletProvider";
import './i18n'; // Import i18n configuration
import ProjectAlpha from "./pages/ProjectAlpha";
import ProjectBeta from "./pages/ProjectBeta";
import ProjectGamma from "./pages/ProjectGamma";
import ProjectLitio from "./pages/ProjectLitio";
import ProjectSubmission from "./pages/ProjectSubmission";
import Tokenomics from "./pages/Tokenomics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <WalletProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/alpha" element={<ProjectAlpha />} />
                <Route path="/projects/beta" element={<ProjectBeta />} />
                <Route path="/projects/gamma" element={<ProjectGamma />} />
                <Route path="/projects/litio" element={<ProjectLitio />} />
                <Route path="/submit-project" element={<ProjectSubmission />} />
                <Route path="/tokenomics" element={<Tokenomics />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </WalletProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
