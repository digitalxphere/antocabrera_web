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
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="contact-description">
                Estoy aquí para acompañarte en tu proceso. Elige la modalidad que mejor se adapte a tus necesidades 
                y comencemos este camino juntos hacia el bienestar emocional.
              </p>
            </div>

            {/* Simple Visual Section with two images */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="/attached_assets/Paula cabrera _1757100570349.jpeg" 
                  alt="Paula Cabrera Fuentes psicóloga especialista adolescentes jóvenes Concón Viña del Mar terapia psicológica" 
                  title="Psicóloga Paula Cabrera - Especialista en adolescentes y jóvenes en Concón y Viña del Mar"
                  className="w-full rounded-3xl shadow-lg object-contain bg-gray-50"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div>
                <img 
                  src="/attached_assets/WhatsApp Image 2025-08-31 at 11.39.42_1757100576316.jpeg" 
                  alt="Contacto psicóloga adolescentes jóvenes Concón Viña del Mar Paula Cabrera consulta psicológica" 
                  title="Contacta a la psicóloga Paula Cabrera en Concón y Viña del Mar - Especialista en adolescentes"
                  className="w-full rounded-3xl shadow-lg object-contain bg-gray-50"
                  loading="lazy"
                  decoding="async"
                />
              </div>
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
                <h3 className="text-3xl font-bold text-foreground mb-4">Ubicación Oficina</h3>
                <p className="text-lg text-muted-foreground">
                  Encuentra mi consulta en Viña del Mar
                </p>
              </div>
              
              <Card className="bg-card border border-border rounded-3xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-2xl font-semibold text-foreground mb-4">
                        Consulta Psicológica Antonia Cabrera
                      </h4>
                      <div className="space-y-3 text-muted-foreground">
                        <p className="text-lg">
                          <strong className="text-foreground">Montenegro 136</strong>
                        </p>
                        <p className="text-lg">
                          Viña del Mar, Valparaíso, Chile
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm mt-4">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>Lunes a Viernes: 10:00 - 19:00 | Sábados: 10:00 - 14:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-border">
                    <button
                      onClick={() => window.open('https://maps.app.goo.gl/XhMBVTEdMJJFCnCm9', '_blank')}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 font-semibold shadow-lg hover:shadow-xl"
                      data-testid="open-maps-button"
                    >
                      <Map className="w-5 h-5" />
                      Cómo llegar
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
