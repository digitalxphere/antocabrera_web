import { MapPin, Clock, Map, Navigation, Copy, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SEOHead } from "@/components/seo-head";
import { CONTACT_INFO } from "@/lib/constants";
import { useScrollAnimation } from "@/lib/animations";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contacto() {
  const heroRef = useScrollAnimation();
  const contactRef = useScrollAnimation();
  const [addressCopied, setAddressCopied] = useState(false);
  const { toast } = useToast();

  const breadcrumbItems = [
    { label: "Contacto", href: "/contacto" }
  ];

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/XhMBVTEdMJJFCnCm9', '_blank');
  };

  const handleGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Montenegro+136+Vi%C3%B1a+del+Mar', '_blank');
  };

  const handleWaze = () => {
    window.open('https://waze.com/ul?q=Montenegro+136+Vi%C3%B1a+del+Mar', '_blank');
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText('Montenegro 136, Viña del Mar, Valparaíso, Chile');
      setAddressCopied(true);
      toast({
        title: "¡Dirección copiada!",
        description: "La dirección se ha copiado al portapapeles",
      });
      setTimeout(() => setAddressCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "No se pudo copiar la dirección",
        variant: "destructive",
      });
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto - Antonia Cabrera",
    "description": "Contacta con Antonia Cabrera para agendar consultas de psicoterapia en Viña del Mar",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Antonia Cabrera - Psicóloga",
      "telephone": CONTACT_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Viña del Mar",
        "addressRegion": "Valparaíso",
        "addressCountry": "CL"
      }
    }
  };

  return (
    <>
      <SEOHead 
        title="Contacto Psicóloga Adolescentes Viña del Mar | Antonia Cabrera"
        description="Contacta a Antonia Cabrera, psicóloga especialista en arteterapia y terapia de juego con adolescentes en Viña del Mar. Agenda tu consulta presencial u online."
        canonical="https://antoniacabrerapsicologa.cl/contacto"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero Section */}
          <section ref={heroRef} className="scroll-animation mb-20" data-testid="contact-hero">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="contact-main-title">
                Agenda con Antonia Cabrera
              </h1>
              <h2 className="text-xl lg:text-2xl text-primary mb-6 font-semibold" data-testid="contact-subtitle">
                Viña del Mar y modalidad online
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4" data-testid="contact-description">
                Estoy aquí para acompañarte en tu proceso. Elige la modalidad que mejor se adapte a tus necesidades 
                y comencemos este camino juntos hacia el bienestar emocional.
              </p>
              <p className="text-xl font-semibold text-foreground max-w-2xl mx-auto" data-testid="contact-booking-info">
                📱 Agenda tu hora por WhatsApp
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section ref={contactRef} className="scroll-animation py-16" data-testid="contact-info-section">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-card border border-border rounded-3xl p-12" data-testid="contact-info-card">
                <h3 className="text-3xl font-semibold text-foreground mb-8" data-testid="contact-info-title">
                  Información de Contacto
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center" data-testid="contact-location">
                    <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Ubicación</h4>
                    <p className="text-muted-foreground text-sm">{CONTACT_INFO.address}</p>
                  </div>
                  
                  <div className="text-center" data-testid="contact-phone">
                    <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                      <FaWhatsapp className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">WhatsApp</h4>
                    <p className="text-muted-foreground text-sm">{CONTACT_INFO.phone}</p>
                  </div>
                  
                  <div className="text-center" data-testid="contact-hours">
                    <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Horarios</h4>
                    <div className="text-muted-foreground text-sm">
                      {CONTACT_INFO.hours.map((hour, index) => (
                        <p key={index}>{hour}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Location Section */}
          <section className="py-16" data-testid="map-section">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">¿Cómo llegar?</h3>
                <p className="text-lg text-muted-foreground">
                  Encuentra mi consulta en Viña del Mar
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Map Image */}
                <Card className="bg-card border border-border rounded-3xl overflow-hidden" data-testid="location-card">
                  <div 
                    className="relative cursor-pointer group" 
                    onClick={handleGoogleMaps}
                  >
                    <img 
                      src="/attached_assets/mapa_ubicacion_vina_del_mar.webp" 
                      alt="Ubicación Montenegro 136, Viña del Mar"
                      className="w-full h-auto transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl">
                        <span className="font-semibold text-foreground flex items-center gap-2">
                          <Map className="w-5 h-5 text-primary" />
                          Ver en mapa
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Location Info & Actions */}
                <div className="space-y-6">
                  {/* Address Card */}
                  <Card className="bg-card border border-border rounded-3xl p-6" data-testid="address-info">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-xl mb-2">Montenegro 136</h4>
                        <p className="text-muted-foreground mb-1">Viña del Mar, Valparaíso</p>
                        <p className="text-muted-foreground text-sm">Región de Valparaíso, Chile</p>
                      </div>
                    </div>
                  </Card>

                  {/* Hours Card */}
                  <Card className="bg-card border border-border rounded-3xl p-6" data-testid="hours-info">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-lg mb-2">Horario de atención</h4>
                        <p className="text-muted-foreground">Lunes a Viernes</p>
                        <p className="text-foreground font-semibold text-lg">11:00 - 19:00</p>
                      </div>
                    </div>
                  </Card>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm mb-3">Navegar con:</h4>
                    
                    {/* Google Maps Button */}
                    <button
                      onClick={handleGoogleMaps}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg group"
                      data-testid="button-google-maps"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                          <Map className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">Google Maps</p>
                          <p className="text-xs opacity-90">Abrir en la app</p>
                        </div>
                      </div>
                      <Navigation className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Waze Button */}
                    <button
                      onClick={handleWaze}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-[#33CCFF] text-white rounded-2xl hover:bg-[#2BB8E6] transition-all shadow-md hover:shadow-lg group"
                      data-testid="button-waze"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                          <Navigation className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">Waze</p>
                          <p className="text-xs opacity-90">Navegación en tiempo real</p>
                        </div>
                      </div>
                      <Navigation className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Copy Address Button */}
                    <button
                      onClick={handleCopyAddress}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-muted hover:bg-muted/80 text-foreground rounded-2xl transition-all border border-border group"
                      data-testid="button-copy-address"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          {addressCopied ? (
                            <Check className="w-5 h-5 text-primary" />
                          ) : (
                            <Copy className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">
                            {addressCopied ? "¡Dirección copiada!" : "Copiar dirección"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {addressCopied ? "Pegala donde necesites" : "Para usar en otra app"}
                          </p>
                        </div>
                      </div>
                      {!addressCopied && (
                        <Copy className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      )}
                    </button>
                  </div>

                  {/* Reference info */}
                  <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">📍 Referencia:</span> La consulta está ubicada en el sector residencial de Viña del Mar, de fácil acceso en transporte público y automóvil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
