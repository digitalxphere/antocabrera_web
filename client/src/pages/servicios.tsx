import { User, Users, GraduationCap, Clock, CheckCircle, ArrowRight, MapPin, Monitor, DollarSign, FileText, Phone } from "lucide-react";
import { Link } from "wouter";
import ProcesoTerapeutico from "@/components/proceso-terapeutico";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ServiceCard } from "@/components/service-card";
import { SEOHead } from "@/components/seo-head";
import { SERVICES, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";
import { useScrollAnimation } from "@/lib/animations";

export default function Servicios() {
  const heroRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const processRef = useScrollAnimation();
  const pricingRef = useScrollAnimation();

  const breadcrumbItems = [
    { label: "Servicios", href: "/servicios" }
  ];

  const handleContactWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, "_blank");
  };


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Servicios de Psicoterapia Paula Cabrera",
    "description": "Psicoterapia individual, familiar y talleres de arteterapia para adolescentes y jóvenes TEA",
    "provider": {
      "@type": "Person",
      "name": "Paula Cabrera Fuentes"
    },
    "serviceType": ["Psicoterapia Individual", "Terapia Familiar", "Arteterapia", "Psicoeducación"],
    "areaServed": ["Concón", "Viña del Mar"],
    "availableLanguage": "es"
  };

  return (
    <>
      <SEOHead 
        title="Servicios Psicóloga en Viña del Mar y Concón | TEA, TDAH, Arteterapia - Paula Cabrera Fuentes"
        description="Servicios de psicoterapia individual y familiar para adolescentes con TEA, TDAH y neurodiversidad. Psicoeducación a padres y arteterapia. Presencial en Concón y Viña del Mar, online internacional. Paula Cabrera Fuentes."
        canonical="https://paulacabrerapsicologa.cl/servicios"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero Section */}
          <section ref={heroRef} className="scroll-animation mb-20" data-testid="services-hero">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Imagen - Removida temporalmente */}
              <div className="order-2 lg:order-1 max-w-md mx-auto">
                <div className="rounded-3xl w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <User className="w-16 h-16 text-primary/50 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Espacio para nueva imagen</p>
                  </div>
                </div>
              </div>
              
              {/* Contenido */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="services-main-title">
                  Psicoterapia y acompañamiento para adolescentes y familias
                </h1>
                <h2 className="text-xl lg:text-2xl text-primary mb-6 font-semibold" data-testid="services-subtitle">
                  Psicoterapia individual | Familia y pareja | Psicoeducación para padres
                </h2>
                <p className="text-lg text-muted-foreground" data-testid="services-description">
                  Ofrezco un espacio seguro y respetuoso donde adolescentes, jóvenes y familias pueden desarrollar 
                  herramientas para el bienestar emocional, la comunicación efectiva y el crecimiento personal.
                </p>
              </div>
            </div>
          </section>


          {/* Detailed Service Information */}
          <section className="mb-20" data-testid="services-detailed">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Individual Therapy */}
              <Card className="bg-card border border-border rounded-3xl p-8" id="individual">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4" data-testid="individual-therapy-title">
                  Psicoterapia Individual
                </h3>
                <p className="text-muted-foreground mb-6" data-testid="individual-therapy-description">
                  Acompañamiento personalizado para adolescentes y jóvenes, con especial enfoque en 
                  quienes están en el espectro autista (TEA).
                </p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-foreground">¿Para quién es?</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Adolescentes entre 12-18 años
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Jóvenes entre 18-25 años
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Personas con diagnóstico TEA
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Jóvenes con dificultades emocionales
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Objetivos terapéuticos</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      Desarrollo de regulación emocional
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      Fortalecimiento de habilidades sociales
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      Manejo de ansiedad y estrés
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      Mejora de la autoestima y autoconcepto
                    </li>
                  </ul>
                </div>
              </Card>

              {/* Family Therapy */}
              <Card className="bg-card border border-border rounded-3xl p-8" id="family">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4" data-testid="family-therapy-title">
                  Familia y Pareja
                </h3>
                <p className="text-muted-foreground mb-6" data-testid="family-therapy-description">
                  Terapia familiar sistémica centrada en mejorar la comunicación, comprensión mutua 
                  y dinámicas familiares saludables.
                </p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-foreground">¿Para quién es?</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      Familias con adolescentes TEA
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      Parejas con hijos en el espectro
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      Familias en crisis o transición
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      Hermanos de jóvenes TEA
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Objetivos terapéuticos</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-secondary" />
                      Mejora de la comunicación familiar
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-secondary" />
                      Resolución constructiva de conflictos
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-secondary" />
                      Fortalecimiento de vínculos
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-secondary" />
                      Adaptación a nuevas dinámicas
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Psychoeducation */}
            <Card className="bg-card border border-border rounded-3xl p-8 mt-8" id="psychoeducation">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4" data-testid="psychoeducation-title">
                    Psicoeducación para Padres
                  </h3>
                  <p className="text-muted-foreground mb-6" data-testid="psychoeducation-description">
                    Orientación especializada y herramientas prácticas para padres y cuidadores 
                    de adolescentes y jóvenes con TEA.
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Contenidos del programa</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Comprensión profunda del TEA
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Estrategias de comunicación efectiva
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Manejo de crisis y desregulación
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Promoción de autonomía
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Autocuidado familiar
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="rounded-2xl w-full h-64 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                    <div className="text-center">
                      <GraduationCap className="w-16 h-16 text-accent/50 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Espacio para nueva imagen</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Modalidades de Atención */}
          <section className="mb-20" data-testid="modalidades-section">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Modalidad Presencial */}
              <Card className="bg-card border border-border rounded-3xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3" data-testid="modalidad-presencial-title">
                  Modalidad Presencial
                </h3>
                <p className="text-muted-foreground text-sm mb-4" data-testid="modalidad-presencial-description">
                  Atención en consulta ubicada en Concón, con un ambiente especializado y adaptado para adolescentes y jóvenes.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Ambiente especializado</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Materiales adaptados</span>
                  </div>
                </div>
              </Card>

              {/* Modalidad Virtual */}
              <Card className="bg-card border border-border rounded-3xl p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Monitor className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3" data-testid="modalidad-virtual-title">
                  Modalidad Virtual
                </h3>
                <p className="text-muted-foreground text-sm mb-4" data-testid="modalidad-virtual-description">
                  Sesiones online para mayor comodidad y accesibilidad, especialmente útil para jóvenes que prefieren este formato.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>Mayor flexibilidad</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>Acceso desde cualquier lugar</span>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Process Section */}
          <ProcesoTerapeutico />

          {/* Pricing Cards Section */}
          <section className="mb-16" data-testid="pricing-cards-section">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Información de Servicios</h2>
              <p className="text-lg text-muted-foreground">Precios, ubicación y contacto</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Consulta Individual */}
              <Card className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <DollarSign className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-emerald-800 mb-2">Consulta Individual</h3>
                <div className="text-2xl font-bold text-emerald-600 mb-1">$55.000</div>
                <p className="text-sm text-emerald-700">Sesión 70 minutos</p>
              </Card>

              {/* Terapia Familiar */}
              <Card className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-emerald-800 mb-2">Terapia Familiar</h3>
                <div className="text-2xl font-bold text-emerald-600 mb-1">$75.000</div>
                <p className="text-sm text-emerald-700">Sesión 90 minutos</p>
              </Card>

              {/* Dirección */}
              <Card className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-emerald-800 mb-2">Dirección</h3>
                <p className="text-sm text-emerald-700 leading-relaxed">
                  Av. Bosques de Montemar 30<br />
                  Oficina 920<br />
                  Concón, Valparaíso
                </p>
              </Card>

              {/* Contacto */}
              <Card className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-emerald-800 mb-2">Contacto</h3>
                <p className="text-sm text-emerald-700">
                  WhatsApp: +569 9369 4978
                </p>
              </Card>

              {/* Documentos Legales */}
              <Card className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-emerald-800 mb-2">Documentos Legales</h3>
                <p className="text-sm text-emerald-700 leading-relaxed">
                  Entrega de boleta de honorarios profesionales para reembolsos en todas las Isapres y seguros complementarios
                </p>
              </Card>
            </div>
          </section>

          {/* Pricing & Contact */}
          <section ref={pricingRef} className="scroll-animation" data-testid="pricing-section">
            <Card className="bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="pricing-title">
                ¿Listo para comenzar tu proceso?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="pricing-description">
                Cada proceso es único y se adapta completamente a las necesidades del joven y su familia
              </p>
              
              <div className="flex justify-center">
                <Button
                  onClick={handleContactWhatsApp}
                  size="lg"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold"
                  data-testid="button-whatsapp-contact"
                >
                  Contactar por WhatsApp
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}
