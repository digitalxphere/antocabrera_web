import { HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SEOHead } from "@/components/seo-head";
import { FAQAccordion } from "@/components/faq-accordion";
import { useScrollAnimation } from "@/lib/animations";

export default function PreguntasFrecuentes() {
  const heroRef = useScrollAnimation();

  const breadcrumbItems = [
    { label: "Preguntas Frecuentes", href: "/preguntas-frecuentes" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Preguntas Frecuentes - Paula Cabrera Fuentes",
    "description": "Respuestas a las preguntas más frecuentes sobre psicoterapia, TEA, adolescentes y servicios",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cómo acompaño a adolescentes y jóvenes que sienten un entorno hostil y exigente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Desde un espacio seguro y creativo con arteterapia, trabajo regulación emocional, autoaceptación y habilidades sociales, presencial en Concón y virtual en todo el mundo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo apoyo a los padres de jóvenes neurodiversos (TEA)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Entrego psicoeducación y estrategias para el hogar, el colegio y la red de apoyo, promoviendo protección de derechos, equidad e inclusión."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Preguntas Frecuentes - Psicóloga en Concón y Viña del Mar | Paula Cabrera Fuentes"
        description="Respuestas a las preguntas más frecuentes sobre psicoterapia, TEA, adolescentes y servicios psicológicos en Concón y Viña del Mar."
        canonical="https://paulacabrerapsicologa.cl/preguntas-frecuentes"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero Section */}
          <section ref={heroRef} className="scroll-animation mb-16" data-testid="faq-hero">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <HelpCircle className="h-16 w-16 text-primary" />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="faq-title">
                Preguntas Frecuentes
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="faq-description">
                Respuestas a las consultas más comunes sobre nuestros servicios de psicoterapia especializados en adolescentes, TEA y neurodiversidad.
              </p>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="mb-16">
            <FAQAccordion />
          </section>

          {/* Contact Card */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  ¿Tienes más preguntas?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Si no encontraste la respuesta que buscabas, no dudes en contactarme. 
                  Estaré encantada de responder todas tus consultas.
                </p>
                <a 
                  href="/contacto"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  data-testid="faq-contact-link"
                >
                  Contáctame
                </a>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}