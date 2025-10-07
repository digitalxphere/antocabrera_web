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
    window.open('https://maps.google.com/?q=Concón,Viña+del+Mar,Chile', '_blank');
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

          {/* Google Maps Section with Glassmorphism */}
          <section className="py-16" data-testid="map-section">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">Ubicación</h3>
                <p className="text-lg text-muted-foreground">
                  Montenegro 136, Viña del Mar, Valparaíso
                </p>
              </div>
              
              <div className="relative">
                {/* Glassmorphism container */}
                <div className="relative rounded-[32px] overflow-hidden backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 shadow-2xl p-4">
                  {/* Map container */}
                  <div className="relative h-96 w-full rounded-[24px] overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.1234567890123!2d-71.52794!3d-32.92780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689dd0123456789%3A0x1234567890abcdef!2sMontenegro%20136%2C%20Vi%C3%B1a%20del%20Mar%2C%20Valpara%C3%ADso%2C%20Chile!5e0!3m2!1ses!2scl!4v1625097600000!5m2!1ses!2scl"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación Antonia Cabrera - Psicóloga en Viña del Mar"
                      className="rounded-[20px]"
                    />
                  </div>
                  
                  {/* Floating info card */}
                  <div className="absolute top-8 left-8 right-8 md:left-8 md:right-auto md:max-w-sm">
                    <div className="backdrop-blur-xl bg-white/30 dark:bg-black/40 border border-white/40 dark:border-white/20 rounded-[20px] p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Consulta Psicológica</h4>
                          <p className="text-sm text-muted-foreground">Antonia Cabrera</p>
                        </div>
                      </div>
                      <p className="text-sm text-foreground mb-2 font-medium">
                        Montenegro 136
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        Viña del Mar, Valparaíso
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>Lunes a Viernes: 10:00 - 19:00</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background blur elements for extra glassmorphism effect */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-40"></div>
              </div>
              
              {/* Action button */}
              <div className="text-center mt-8">
                <button
                  onClick={() => window.open('https://maps.google.com/?q=Av.+Bosques+de+Montemar+30,+Oficina+920,+Concón,+Valparaíso,+Chile', '_blank')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium"
                  data-testid="open-maps-button"
                >
                  <MapPin className="w-4 h-4" />
                  Abrir en Google Maps
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
