import { MapPin, Clock, Map } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SEOHead } from "@/components/seo-head";
import { CONTACT_INFO } from "@/lib/constants";
import { useScrollAnimation } from "@/lib/animations";

export default function Contacto() {
  const heroRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  const breadcrumbItems = [
    { label: "Contacto", href: "/contacto" }
  ];

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/XhMBVTEdMJJFCnCm9', '_blank');
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
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">¿Cómo llegar?</h3>
                <p className="text-lg text-muted-foreground">
                  Encuentra mi consulta en Viña del Mar
                </p>
              </div>
              
              <Card className="bg-card border border-border rounded-3xl overflow-hidden" data-testid="location-card">
                <div className="relative cursor-pointer" onClick={() => window.open('https://maps.app.goo.gl/Xv1WAQkW1j23PU2f8', '_blank')}>
                  <img 
                    src="/attached_assets/mapa_ubicacion_vina_del_mar.webp" 
                    alt="Ubicación Montenegro 136, Viña del Mar"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        Montenegro 136
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Viña del Mar, Valparaíso
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>Lun-Vie: 11:00 - 19:00</span>
                      </div>
                      <button className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold text-sm">
                        <Map className="w-4 h-4" />
                        Abrir en Google Maps
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
