import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { OptimizedImage } from "@/components/ui/optimized-image";
import blogImage from "@assets/image_1757098708878.png";

export function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Blog Psicóloga en Viña del Mar | Adolescencia, TEA y Neurodiversidad - Antonia Cabrera"
        description="Blog de Antonia Cabrera, psicóloga especialista en adolescentes TEA y neurodiversidad en Viña del Mar. Reflexiones sobre arteterapia, TDAH y acompañamiento psicológico juvenil."
      />
      
      {/* Header */}
      <div className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors" data-testid="link-back-home">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center gap-4 text-white/80 text-sm mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>5 de Septiembre, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>8 min de lectura</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Adolescencia: un viaje de transformación y acompañamiento
          </h1>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Image */}
        <div className="mb-8">
          <OptimizedImage 
            src={blogImage} 
            alt="Sesión terapéutica con adolescente" 
            width="800"
            height="400"
            className="w-full h-64 md:h-80 object-contain rounded-2xl shadow-lg bg-gray-50"
            data-testid="blog-hero-image"
            objectFit="contain"
            priority={true}
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            La adolescencia es una etapa vital de cambios profundos, donde cada joven se enfrenta a la construcción de su identidad, a la gestión de nuevas emociones y a la búsqueda de pertenencia. No se trata solo de un período de transición, sino de un camino que requiere comprensión, paciencia y acompañamiento sensible por parte de la familia y los profesionales de la salud mental.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            Desafíos comunes en la adolescencia
          </h2>

          <p className="text-foreground leading-relaxed mb-6 text-justify">
            En mi experiencia como psicóloga, he observado cómo distintos desafíos pueden marcar este proceso: la ansiedad, que se intensifica frente a las demandas escolares y sociales; la alexitimia, que dificulta nombrar y expresar lo que se siente; o incluso la presencia de alteraciones conductuales propias de la etapa, que generan confusión tanto en los jóvenes como en su entorno. Estos temas, que he desarrollado en artículos anteriores, revelan la necesidad de abrir espacios de conversación y psicoeducación.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            La individualidad en cada proceso
          </h2>

          <p className="text-foreground leading-relaxed mb-6 text-justify">
            A lo largo de mi trabajo, he confirmado que ningún adolescente es igual a otro. Cada uno trae su propia forma, su propio ritmo y manera de relacionarse con el mundo. Por eso, más que aplicar recetas rígidas, es fundamental construir un vínculo de confianza, donde la escucha activa y el respeto guíen el proceso terapéutico. Desde allí, es posible trabajar en red con las familias, fortaleciendo la comunicación y favoreciendo que el hogar sea un espacio seguro.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            Un espacio de crecimiento y potencialidad
          </h2>

          <p className="text-foreground leading-relaxed mb-8 text-justify">
            Mi forma de trabajar con jóvenes se centra en crear un espacio auténtico y humano, donde puedan explorar sus dudas y emociones sin juicios. La adolescencia no debe entenderse solo como un problema a resolver, sino como una etapa llena de potencialidad, creatividad y crecimiento. Acompañar a los adolescentes implica confiar en que, con apoyo y herramientas adecuadas, podrán abrirse paso hacia una adultez más plena y consciente.
          </p>

          {/* Author Info */}
          <div className="border-t border-border pt-8 mt-12">
            <div className="flex items-center gap-4">
              <img 
                src="/attached_assets/antonia_cabrera_psicologa.webp" 
                alt="Antonia Cabrera" 
                className="w-16 h-16 object-contain rounded-full bg-gray-50"
              />
              <div>
                <h3 className="font-semibold text-foreground">Antonia Cabrera</h3>
                <p className="text-muted-foreground">
                  Psicóloga especialista en adolescentes con enfoque en arteterapia y terapia de juego
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-card border border-border rounded-2xl p-6 mt-8">
            <h3 className="text-xl font-semibold mb-3">¿Te interesa conocer más sobre mi trabajo?</h3>
            <p className="text-muted-foreground mb-4">
              Si sientes que tu adolescente podría beneficiarse de un espacio terapéutico especializado, o si buscas orientación como padre o madre, estoy aquí para acompañarlos en este proceso.
            </p>
            <Link href="/contacto">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors" data-testid="button-contact-blog">
                Solicitar información
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}