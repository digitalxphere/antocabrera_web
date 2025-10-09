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
        <section className="relative py-20 bg-gradient-to-br from-background to-background/95">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs items={breadcrumbItems} />
            
            <div className="text-center mt-12" data-testid="about-hero">
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
        </section>

        {/* Content Modules */}
        <section className="py-20 bg-background" ref={contentRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Biography Module */}
            <div className="mb-20" data-testid="about-biography">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
                  Sobre mí
                </h3>
                
                <div className="grid lg:grid-cols-[240px,1fr] gap-12 items-start">
                  <div className="flex justify-center lg:justify-start">
                    <OptimizedImage 
                      src="/attached_assets/antonia_cabrera_psicologa.webp" 
                      alt="Antonia Cabrera, psicóloga especialista en arteterapia y terapia de juego"
                      width="240"
                      height="360"
                      className="rounded-3xl shadow-2xl w-full max-w-[240px] h-auto"
                      data-testid="about-bio-image"
                      priority={true}
                      objectFit="cover"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-2xl font-semibold text-primary" data-testid="about-bio-subtitle">
                      Psicóloga especialista en Arteterapia y Terapia de Juego con adolescentes
                    </h4>
                    
                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-justify">
                      <p data-testid="about-description-1">
                        Soy Antonia, psicóloga con muchas ganas de acompañar a adolescentes y familias en sus procesos de crecimiento y bienestar emocional. Me diplomé en terapia infanto-juvenil en la Universidad de Valparaíso, donde también realicé mis estudios de pregrado.
                      </p>
                      
                      <p data-testid="about-description-2">
                        Como terapeuta joven, conecto fácilmente con los adolescentes: entiendo su lenguaje, sus formas de expresarse y las emociones intensas que muchas veces cuesta poner en palabras. Mi objetivo es que en terapia puedan sentirse cómodos siendo quienes son, sin miedo al juicio, en un espacio donde puedan expresarse con libertad y encontrar nuevas maneras de entenderse.
                      </p>
                      
                      <p data-testid="about-description-3">
                        Trabajo desde una mirada sistémica y familiar, porque creo que nadie crece solo; las relaciones y los vínculos que tenemos influyen mucho en cómo nos sentimos. Acompaño tanto a los jóvenes como a sus familias para mejorar la comunicación, validar lo que sienten y construir relaciones más sanas y respetuosas.
                      </p>

                      <p data-testid="about-description-4">
                        Me gusta crear un ambiente cercano, cálido y auténtico, donde hablar de emociones sea algo natural. Creo profundamente que cada persona tiene su propio ritmo y su manera única de sanar. Mi meta es que cada proceso terapéutico se sienta como un espacio para encontrarse, liberarse y aprender a vivir con más calma y confianza.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Module */}
            <div className="mb-20" data-testid="about-education-module">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                  Formación Académica
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-card border border-border rounded-2xl p-6" data-testid="about-education-narrative">
                    <div className="flex items-start gap-4">
                      <GraduationCap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-foreground mb-2">Diplomado en Terapia Narrativa</h4>
                        <p className="text-sm text-muted-foreground">Pranas Chile</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="bg-card border border-border rounded-2xl p-6" data-testid="about-education-intervention">
                    <div className="flex items-start gap-4">
                      <GraduationCap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-foreground mb-2">Diplomado en Estrategias de Intervención Infantil Juvenil</h4>
                        <p className="text-sm text-muted-foreground">Universidad de Valparaíso</p>
                      </div>
                    </div>
                  </Card>
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
                      <span data-testid="about-adolescents-title">Infanto-Juvenil 7-18 años</span>
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