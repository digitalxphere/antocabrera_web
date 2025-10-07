import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Calendar, MapPin, Users, Clock, Palette, Heart, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { WorkshopCard } from "@/components/workshop-card";
import { SEOHead } from "@/components/seo-head";
import { useScrollAnimation } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { Workshop } from "@shared/schema";

export default function TalleresArteTerapia() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const heroRef = useScrollAnimation();
  const workshopsRef = useScrollAnimation();
  const benefitsRef = useScrollAnimation();

  const breadcrumbItems = [
    { label: "Talleres de Arteterapia", href: "/talleres-arte-terapia" }
  ];

  const { data: workshops = [], isLoading } = useQuery<Workshop[]>({
    queryKey: ["/api/workshops"],
  });

  const registerMutation = useMutation({
    mutationFn: async (workshopId: string) => {
      // TODO: Open registration modal/form
      return apiRequest("POST", `/api/workshops/${workshopId}/register`, {
        firstName: "Demo",
        lastName: "User", 
        email: "demo@example.com"
      });
    },
    onSuccess: () => {
      toast({
        title: "Registro exitoso",
        description: "Te has registrado al taller. Recibirás un email de confirmación.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/workshops"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error en el registro",
        description: error.message || "Hubo un problema al registrarte. Intenta nuevamente.",
        variant: "destructive",
      });
    },
  });

  const handleWorkshopRegistration = (workshopId: string) => {
    registerMutation.mutate(workshopId);
  };

  const benefits = [
    {
      icon: Heart,
      title: "Regulación Emocional",
      description: "El arte permite expresar y procesar emociones de manera no verbal, facilitando la autorregulación.",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Habilidades Sociales",
      description: "Los talleres grupales fomentan la interacción social en un ambiente seguro y estructurado.",
      color: "text-blue-500"
    },
    {
      icon: Brain,
      title: "Estimulación Cognitiva",
      description: "Las actividades artísticas estimulan diferentes áreas del cerebro, mejorando funciones ejecutivas.",
      color: "text-purple-500"
    },
    {
      icon: Palette,
      title: "Expresión Creativa",
      description: "Desarrollo de la creatividad y autoexpresión como herramientas de comunicación alternativas.",
      color: "text-orange-500"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Talleres de Arteterapia para Adolescentes y Jóvenes TEA",
    "description": "Talleres grupales de arteterapia enfocados en regulación emocional, expresión creativa y habilidades sociales",
    "provider": {
      "@type": "Person",
      "name": "Antonia Cabrera"
    },
    "courseMode": ["presencial", "online"],
    "location": {
      "@type": "Place",
      "name": "Consultas en Viña del Mar"
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Cargando talleres...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title="Talleres de Arteterapia para Adolescentes y Jóvenes TEA | Antonia Cabrera"
        description="Talleres grupales de arteterapia para adolescentes y jóvenes TEA. Regulación emocional, expresión creativa y habilidades sociales a través del arte."
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero Section */}
          <section ref={heroRef} className="scroll-animation mb-20" data-testid="workshops-hero">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="workshops-main-title">
                Talleres de arteterapia para adolescentes y jóvenes TEA
              </h1>
              <h2 className="text-xl lg:text-2xl text-primary mb-6 font-semibold" data-testid="workshops-subtitle">
                Regulación emocional, expresión creativa y habilidades sociales
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="workshops-description">
                A través del arte, creamos espacios seguros donde los jóvenes pueden explorar sus emociones, 
                desarrollar herramientas de autorregulación y fortalecer sus habilidades de comunicación social.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative max-w-6xl mx-auto">
              <img 
                src="/attached_assets/WhatsApp%20Image%202025-08-31%20at%2011.33.21_1757028855323.jpeg?v=2" 
                alt="Taller de arteterapia con adolescentes"
                className="rounded-3xl shadow-2xl w-full h-96 lg:h-[500px] object-cover"
                data-testid="workshops-hero-image"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </section>

          {/* Benefits Section */}
          <section ref={benefitsRef} className="scroll-animation mb-20" data-testid="benefits-section">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="benefits-title">
                ¿Cómo ayuda la arteterapia?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="benefits-description">
                La arteterapia ofrece múltiples beneficios específicos para adolescentes y jóvenes en el espectro autista
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="bg-card border border-border rounded-3xl p-6 text-center" data-testid={`benefit-card-${index}`}>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`benefit-title-${index}`}>
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`benefit-description-${index}`}>
                      {benefit.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </section>


          {/* Available Workshops */}
          <section ref={workshopsRef} className="scroll-animation mb-20" data-testid="available-workshops">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="available-workshops-title">
                Talleres Disponibles
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="available-workshops-description">
                Próximos talleres programados con fechas y modalidades
              </p>
            </div>

            {workshops.length === 0 ? (
              <Card className="bg-card border border-border rounded-3xl p-12 text-center" data-testid="no-workshops-card">
                <Palette className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Próximamente nuevos talleres
                </h3>
                <p className="text-muted-foreground mb-6">
                  Estamos organizando los próximos talleres. Contáctanos para conocer las fechas disponibles.
                </p>
                <Button 
                  onClick={() => window.open(`https://wa.me/+56xxxxxxxxx?text=${encodeURIComponent("Hola, me interesa información sobre los próximos talleres de arteterapia.")}`)}
                  className="bg-primary text-primary-foreground"
                  data-testid="button-contact-workshops"
                >
                  Consultar Fechas
                </Button>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workshops.map((workshop) => (
                  <WorkshopCard 
                    key={workshop.id} 
                    workshop={{
                      id: workshop.id,
                      title: workshop.title,
                      description: workshop.description,
                      date: new Date(workshop.date),
                      location: workshop.location,
                      capacity: workshop.capacity,
                      registered: workshop.registered,
                      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
                      tags: ["Próximo taller"],
                      duration: "2 horas",
                      price: "$25.000"
                    }}
                    onRegister={handleWorkshopRegistration}
                  />
                ))}
              </div>
            )}
          </section>

          {/* Workshop Info */}
          <section className="mb-20" data-testid="workshop-info">
            <div className="grid lg:grid-cols-2 gap-16">
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="workshop-info-title">
                  Información Importante
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Edad de participantes</h4>
                    <p className="text-muted-foreground">Adolescentes (14-18 años) y jóvenes (18-30 años)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Experiencia previa</h4>
                    <p className="text-muted-foreground">No se requiere experiencia en arte. El foco está en el proceso, no en el resultado.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Materiales</h4>
                    <p className="text-muted-foreground">Todos los materiales están incluidos y se proporcionan en cada sesión.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Modalidades</h4>
                    <p className="text-muted-foreground">Presencial en Concón y Viña del Mar, también modalidad híbrida disponible.</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="registration-info-title">
                  ¿Cómo participar?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Consulta inicial</h4>
                      <p className="text-sm text-muted-foreground">Conversamos sobre los objetivos y necesidades específicas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Inscripción</h4>
                      <p className="text-sm text-muted-foreground">Completamos el proceso de registro al taller seleccionado.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Participación</h4>
                      <p className="text-sm text-muted-foreground">Disfruta del proceso creativo en un ambiente seguro y respetuoso.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Política de cancelación:</strong> Cancelaciones con al menos 24 horas de anticipación sin costo.
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/contacto'}
                    className="w-full bg-primary text-primary-foreground"
                    data-testid="button-contact-registration"
                  >
                    Consultar sobre Talleres
                  </Button>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
