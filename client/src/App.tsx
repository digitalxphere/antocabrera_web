import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

// Pages
import Home from "@/pages/home";
import SobrePaula from "@/pages/sobre-paula";
import Servicios from "@/pages/servicios";
import Talleres from "@/pages/talleres";
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
  
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/servicios" component={Servicios} />
          <Route path="/talleres" component={Talleres} />
          <Route path="/preguntas-frecuentes" component={PreguntasFrecuentes} />
          <Route path="/sobre-mi" component={SobrePaula} />
          <Route path="/sobre-antonia-cabrera-psicologa" component={SobrePaula} />
          <Route path="/sobre-paula-cabrera-fuentes-psicologa" component={SobrePaula} />
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
