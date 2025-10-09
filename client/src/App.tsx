import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

// Pages
import Home from "@/pages/home";
import SobreAntonia from "@/pages/sobre-paula";
import Servicios from "@/pages/servicios";
import PreguntasFrecuentes from "@/pages/preguntas-frecuentes";
import Contacto from "@/pages/contacto";
import PoliticaPrivacidad from "@/pages/politica-privacidad";
import Terminos from "@/pages/terminos";
import NotFound from "@/pages/not-found";

// Layout components
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

function Router() {
  useScrollToTop();
  useAnalytics();
  
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/servicios" component={Servicios} />
          <Route path="/preguntas-frecuentes" component={PreguntasFrecuentes} />
          <Route path="/sobre-mi" component={SobreAntonia} />
          <Route path="/sobre-antonia-cabrera-psicologa" component={SobreAntonia} />
          <Route path="/sobre-paula-cabrera-fuentes-psicologa" component={SobreAntonia} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/politica-privacidad" component={PoliticaPrivacidad} />
          <Route path="/terminos" component={Terminos} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
