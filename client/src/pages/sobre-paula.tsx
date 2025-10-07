import { Brain, GraduationCap, Tag, Palette, Users, Award, CheckCircle, Heart, UserCheck, Lightbulb, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SEOHead } from "@/components/seo-head";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useScrollAnimation } from "@/lib/animations";

export default function SobrePaula() {
  const contentRef = useScrollAnimation();

  const breadcrumbItems = [
    { label: "Sobre Antonia", href: "/sobre-antonia-cabrera-psicologa" }
  ];

  return (
    <>
      <SEOHead 
        title="Antonia Cabrera - Psicóloga en Viña del Mar | Especialista en Arteterapia y Terapia de Juego Infantojuvenil"
        description="Antonia Cabrera, psicóloga en Viña del Mar con diploma en estrategias de intervención infantojuvenil. Especialista en arteterapia, terapia de juego y acompañamiento a neurodivergencias. Atención presencial y online."
        canonical="https://antoniacabrerapsicologa.cl/sobre-antonia-cabrera-psicologa"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/95">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs items={breadcrumbItems} />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center mt-12" data-testid="about-hero">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6" data-testid="about-title">
                    Antonia Cabrera
                  </h1>
                  
                  <h2 className="text-2xl lg:text-3xl text-primary mb-8 font-semibold" data-testid="about-subtitle">
                    Psicóloga especialista en Arteterapia y Terapia de Juego
                  </h2>
                  
                  <h3 className="text-xl text-muted-foreground leading-relaxed" data-testid="about-hero-description">
                    Montenegro 136, Viña del Mar
                  </h3>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <OptimizedImage 
                  src="/attached_assets/PHOTO-2025-10-05-18-22-05_1759848903714.jpg" 
                  alt="Antonia Cabrera, psicóloga especialista en arteterapia y terapia de juego"
                  width="400"
                  height="600"
                  className="rounded-3xl shadow-2xl w-full max-w-md h-auto"
                  data-testid="about-main-image"
                  priority={true}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Modules */}
        <section className="py-20 bg-background" ref={contentRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Biography Module */}
            <div className="mb-20" data-testid="about-biography">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
                  Mi camino profesional
                </h3>
                
                <div className="space-y-8 text-muted-foreground text-lg leading-relaxed text-justify">
                  <p data-testid="about-description-1">
                    Soy Antonia Cabrera, psicóloga titulada de la Universidad de Valparaíso, con formación en estrategias de intervención infanto-juvenil y conocimientos en arteterapia y terapia de juego.
                  </p>
                  
                  <p data-testid="about-description-2">
                    Mi enfoque principal integra el Arteterapia y el Enfoque Sistémico, lo que me permite acompañar a niños, adolescentes y adultos jóvenes desde una mirada relacional, considerando siempre el contexto familiar y social.
                  </p>
                  
                  <p data-testid="about-description-3">
                    Creo firmemente en el poder del arte y del juego como puentes para expresar emociones, comprender el mundo interno y generar cambios positivos. Estas herramientas me permiten establecer una comunicación cálida y cercana, especialmente con niños y jóvenes que encuentran en la creatividad una forma natural de expresarse.
                  </p>
                  
                  <p data-testid="about-description-4">
                    También brindo apoyo a personas con neurodivergencias como TDAH y TEA, entregando un espacio respetuoso, comprensivo y adaptado a sus necesidades.
                  </p>
                  
                  <p data-testid="about-description-5" className="font-medium text-foreground">
                    Mi propósito es acompañar procesos de crecimiento y bienestar, ofreciendo un espacio seguro donde cada persona pueda sentirse escuchada, comprendida y validada.
                  </p>
                  
                  {/* Imágenes de arteterapia */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <img 
                      src="/attached_assets/Captura de pantalla 2025-10-07 a la(s) 11.56.28_1759848991767.png"
                      alt="Ejemplo de trabajo de arteterapia"
                      className="rounded-2xl shadow-lg w-full h-auto object-cover"
                      data-testid="about-art-image-1"
                    />
                    <img 
                      src="/attached_assets/Captura de pantalla 2025-10-07 a la(s) 11.57.00_1759849023729.png"
                      alt="Ejemplo de trabajo creativo en terapia"
                      className="rounded-2xl shadow-lg w-full h-auto object-cover"
                      data-testid="about-art-image-2"
                    />
                  </div>
                </div>
              </div>
            </div>


            {/* Approach & Philosophy Module */}
            <div className="mb-20" data-testid="about-approach-module">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border border-border rounded-3xl p-12">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="about-approach-title">
                      Mi enfoque terapéutico
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center text-sm font-medium text-muted-foreground">
                      <span data-testid="about-adolescents-title">Adolescentes 12-18 años</span>
                      <span data-testid="about-arttherapy-title">Arteterapia</span>
                      <span data-testid="about-playtherapy-title">Terapia de Juego</span>
                      <span data-testid="about-neurodiversity-title">Neurodivergencias</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div data-testid="about-approach-play">
                      <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="font-bold text-foreground mb-3">Arteterapia y Terapia de Juego</h3>
                      <p className="text-sm text-muted-foreground">El arte y el juego como vías principales para la comunicación amable y la expresión de emociones.</p>
                    </div>
                    
                    <div data-testid="about-approach-systemic">
                      <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h3 className="font-bold text-foreground mb-3">Enfoque Sistémico</h3>
                      <p className="text-sm text-muted-foreground">Visión de conjunto y relacional que considera el contexto familiar y social de cada persona.</p>
                    </div>
                    
                    <div data-testid="about-approach-family">
                      <UserCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                      <h3 className="font-bold text-foreground mb-3">Trabajo colaborativo con familias</h3>
                      <p className="text-sm text-muted-foreground">Involucro a las familias en el proceso terapéutico para crear un entorno de apoyo integral.</p>
                    </div>
                    
                    <div data-testid="about-approach-corporal">
                      <Activity className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                      <h3 className="font-bold text-foreground mb-3">Enfoque Corporal</h3>
                      <p className="text-sm text-muted-foreground">Enseño técnicas concretas tanto corporales como sensoriales para la regulación emocional de las personas.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}