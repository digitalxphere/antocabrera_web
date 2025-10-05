import { Calendar, MapPin, Monitor, Users, Clock, CheckCircle, Palette, Heart, Star } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SEOHead } from "@/components/seo-head";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";
import { useScrollAnimation } from "@/lib/animations";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

// Tipos
type Taller = {
  id: string;
  titulo: string;
  bajada: string;
  fechaISO?: string;
  modo: "Presencial" | "Online" | "Mixto";
  lugar?: string;
  duracion: string;
  objetivos: string[];
  beneficios: string[];
  imagen: string;
  album?: string[];
};

// Datos de talleres
const proximos: Taller[] = [
  {
    id: "ta-01",
    titulo: "Arteterapia: Regulación y pertenencia",
    bajada:
      "Grupo pequeño para adolescentes y jóvenes TEA. Enfoque en autorregulación y sentido de pertenencia.",
    fechaISO: "2025-09-20",
    modo: "Mixto",
    lugar: "Concón · Zoom",
    duracion: "90 min",
    objetivos: [
      "Explorar emociones mediante lenguajes artísticos",
      "Practicar habilidades sociales en entorno cuidado",
      "Desarrollar recursos personales de autorregulación",
    ],
    beneficios: [
      "Expresión segura sin exigencia verbal",
      "Apoyos visuales y anticipación de la sesión",
      "Estrategias transferibles a casa y colegio",
    ],
    imagen: "/attached_assets/5_1757026396142.jpeg",
  },
];

const realizados: Taller[] = [
  {
    id: "tr-01",
    titulo: "Creatividad en calma",
    bajada:
      "Sesión guiada con foco sensorial y técnicas simples de respiración.",
    modo: "Presencial",
    lugar: "Concón",
    duracion: "80 min",
    objetivos: [
      "Aumentar tolerancia a la frustración",
      "Fortalecer comunicación funcional",
      "Crear pieza artística personal",
    ],
    beneficios: [
      "Mayor conciencia corporal",
      "Lenguaje visual para emociones",
      "Experiencia positiva en grupo",
    ],
    imagen: "/attached_assets/7_1757026473135.jpeg",
    album: [
      "/attached_assets/20_1757026454789.jpeg", 
      "/attached_assets/7_1757026473135.jpeg", 
      "/attached_assets/5_1757026396142.jpeg",
      "/attached_assets/image_1757111818074.png",
      "/attached_assets/image_1757111827369.png",
      "/attached_assets/image_1757111842577.png",
      "/attached_assets/image_1757111849974.png"
    ],
  },
  {
    id: "tr-02",
    titulo: "Habilidades sociales con arte",
    bajada: "Juego creativo para turnos, escucha y colaboración.",
    modo: "Online",
    lugar: "Zoom",
    duracion: "75 min",
    objetivos: [
      "Practicar turnos y señales sociales",
      "Resolver problemas en equipo",
      "Reflexión guiada con apoyos visuales",
    ],
    beneficios: [
      "Mejor manejo de ansiedad social",
      "Participación segura y predecible",
      "Transferencia a contextos formales",
    ],
    imagen: "/attached_assets/20_1757026454789.jpeg",
    album: [
      "/attached_assets/5_1757026396142.jpeg", 
      "/attached_assets/20_1757026454789.jpeg",
      "/attached_assets/image_1757111818074.png",
      "/attached_assets/image_1757111827369.png",
      "/attached_assets/image_1757111842577.png",
      "/attached_assets/image_1757111849974.png"
    ],
  },
];

// Componentes
function Tag({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "date" | "mode" }) {
  const variants = {
    default: "bg-white/20 border-white/30 text-foreground",
    date: "bg-primary/20 border-primary/30 text-primary",
    mode: "bg-secondary/20 border-secondary/30 text-secondary"
  };
  
  return (
    <span className={`inline-flex items-center rounded-full border backdrop-blur-md px-3 py-1 text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}

function TallerCard({ taller }: { taller: Taller }) {
  return (
    <Card className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-6 hover:bg-white/15 transition-all duration-300 group">
      {/* Imagen del taller */}
      <div className="relative aspect-[16/9] w-full mb-6 rounded-2xl overflow-hidden">
        <img 
          src={taller.imagen} 
          alt={`Taller de arteterapia: ${taller.titulo}`}
          className="w-full h-full object-contain bg-gray-50"
        />
      </div>
      
      <div className="space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <Tag variant="mode">{taller.modo}</Tag>
          {taller.lugar && <Tag>{taller.lugar}</Tag>}
          <Tag>
            <Clock className="w-3 h-3 mr-1" />
            {taller.duracion}
          </Tag>
          {taller.fechaISO && (
            <Tag variant="date">
              <Calendar className="w-3 h-3 mr-1" />
              {new Date(taller.fechaISO).toLocaleDateString("es-CL", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </Tag>
          )}
        </div>
        
        {/* Título y descripción */}
        <h3 className="text-xl font-semibold text-foreground" data-testid={`taller-title-${taller.id}`}>
          {taller.titulo}
        </h3>
        <p className="text-muted-foreground" data-testid={`taller-description-${taller.id}`}>
          {taller.bajada}
        </p>

        {/* Objetivos y beneficios */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" />
              Objetivos
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {taller.objetivos.map((objetivo, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                  {objetivo}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <Heart className="w-4 h-4 text-secondary" />
              Beneficios
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {taller.beneficios.map((beneficio, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-secondary mt-0.5 flex-shrink-0" />
                  {beneficio}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Galería (solo para talleres realizados) */}
        {taller.album && taller.album.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Galería</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Imágenes publicadas solo con autorización. Sin rostros ni datos personales.
            </p>
            <div className="grid grid-cols-3 gap-2">
              {taller.album.map((imagen, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden"
                >
                  <img 
                    src={imagen} 
                    alt={`Resultado de arteterapia: ${taller.titulo} — ${i + 1}`}
                    className="w-full h-full object-contain bg-gray-50"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export default function Talleres() {
  useScrollToTop();
  const heroRef = useScrollAnimation();
  const proximosRef = useScrollAnimation();
  const realizadosRef = useScrollAnimation();

  const breadcrumbItems = [
    { label: "Talleres de Arteterapia", href: "/talleres" }
  ];

  const handleContactWhatsApp = () => {
    const message = "Hola Paula, me interesa conocer más sobre los talleres de arteterapia. ¿Podrías darme información sobre el proceso de evaluación?";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://paulacabrerapsicologa.cl/talleres#service",
        "name": "Talleres de Arteterapia para Adolescentes y Jóvenes TEA",
        "description": "Talleres especializados de arteterapia para adolescentes y jóvenes con TEA. Regulación emocional, habilidades sociales e integración. Presencial en Concón y modalidad virtual.",
        "provider": {
          "@type": "Person",
          "name": "Paula Cabrera Fuentes",
          "jobTitle": "Psicóloga especializada en TEA"
        },
        "serviceType": "Arteterapia",
        "audience": {
          "@type": "Audience",
          "audienceType": "Adolescentes, jóvenes y adultos con TEA"
        },
        "areaServed": ["Concón", "Viña del Mar", "Virtual - Todo el mundo"],
        "availableLanguage": "es",
        "isRelatedTo": {
          "@type": "MedicalCondition",
          "name": "Trastorno del Espectro Autista (TEA)"
        }
      },
      ...proximos.map((taller, index) => ({
        "@type": "Event",
        "@id": `https://paulacabrerapsicologa.cl/talleres#event-${taller.id}`,
        "name": taller.titulo,
        "description": taller.bajada,
        "startDate": taller.fechaISO,
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": taller.modo === "Presencial" ? "https://schema.org/OfflineEventAttendanceMode" : taller.modo === "Online" ? "https://schema.org/OnlineEventAttendanceMode" : "https://schema.org/MixedEventAttendanceMode",
        "location": taller.modo === "Online" ? {
          "@type": "VirtualLocation",
          "url": "https://paulacabrerapsicologa.cl/talleres"
        } : {
          "@type": "Place",
          "name": taller.lugar || "Consulta Paula Cabrera",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Bosques de Montemar 30, Oficina 920",
            "addressLocality": "Concón",
            "addressRegion": "Región de Valparaíso",
            "addressCountry": "CL",
            "postalCode": "2510000"
          }
        },
        "image": `https://paulacabrerapsicologa.cl${taller.imagen}`,
        "organizer": {
          "@type": "Person",
          "name": "Paula Cabrera Fuentes",
          "url": "https://paulacabrerapsicologa.cl"
        },
        "performer": {
          "@type": "Person",
          "name": "Paula Cabrera Fuentes"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "validFrom": new Date().toISOString().split('T')[0]
        }
      }))
    ]
  };

  return (
    <>
      <SEOHead
        title="Talleres Arteterapia TEA Concón Viña del Mar | Adolescentes Neurodiversidad - Paula Cabrera Fuentes"
        description="Talleres especializados de arteterapia para adolescentes y jóvenes con TEA, TDAH y neurodiversidad. Regulación emocional y habilidades sociales. Presencial en Concón, virtual internacional. Psicóloga Paula Cabrera Fuentes."
        canonical="https://paulacabrerapsicologa.cl/talleres"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero Section */}
          <section ref={heroRef} className="scroll-animation mb-20" data-testid="talleres-hero">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Imagen Hero */}
              <div className="order-2 lg:order-1">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/20 backdrop-blur-md">
                  <img 
                    src="/attached_assets/7_1757026473135.jpeg" 
                    alt="Manos creando arte en taller de arteterapia - Vista protegida sin rostros"
                    className="w-full h-full object-contain bg-gray-50"
                  />
                </div>
              </div>
              
              {/* Contenido */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="talleres-main-title">
                  Talleres de Arteterapia para Adolescentes y Jóvenes TEA
                </h1>
                <h2 className="text-xl lg:text-2xl text-primary mb-6 font-semibold" data-testid="talleres-subtitle">
                  Regulación emocional, habilidades sociales e integración
                </h2>
                <p className="text-lg text-muted-foreground mb-6" data-testid="talleres-description">
                  Talleres presenciales en Concón con grupos pequeños, apoyos visuales y anticipación de la sesión para crear un ambiente seguro y predecible. 
                  <br /><strong>Ubicación:</strong> Av. Bosques de Montemar 30, Oficina 920, Concón.{" "}
                  <a
                    href="https://maps.google.com/?q=Av.+Bosques+de+Montemar+30,+Oficina+920,+Concón"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-primary underline-offset-4 hover:decoration-primary/80 transition-colors"
                  >
                    Ver mapa
                  </a>
                </p>
                <div className="bg-accent/20 border border-accent/30 backdrop-blur-md rounded-2xl p-4">
                  <p className="text-sm font-medium text-foreground">
                    <strong>Cupos por invitación tras evaluación clínica individual</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Acceso y Seguridad */}
          <section className="mb-20" data-testid="acceso-section">
            <Card className="bg-amber-500/10 border border-amber-500/20 backdrop-blur-md rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-amber-600" />
                Acceso y Seguridad
              </h2>
              <p className="text-muted-foreground mb-6">
                Por protección de los participantes, estos talleres no son de modalidad abierta. La participación es por{" "}
                <strong>invitación</strong> tras la <strong>evaluación clínica individual</strong>. Se conforman grupos{" "}
                <strong>personalizados</strong> según perfil sensorial, edad y objetivos terapéuticos para favorecer la integración social.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    Grupos pequeños (4–6 personas) y entorno predecible
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    Apoyos visuales y pausas programadas
                  </li>
                </ul>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    Adaptaciones sensoriales: iluminación y sonido controlados
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    Privacidad total: imágenes solo con autorización
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* Próximos Talleres */}
          <section ref={proximosRef} className="scroll-animation mb-20" data-testid="proximos-section">
            <h2 className="text-3xl font-bold text-foreground mb-8">Próximos Talleres</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {proximos.length > 0 ? (
                proximos.map((taller) => <TallerCard key={taller.id} taller={taller} />)
              ) : (
                <Card className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-8 text-center md:col-span-2">
                  <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Próximamente se anunciarán nuevos talleres. Los participantes actuales en psicoterapia individual recibirán invitación directa.
                  </p>
                </Card>
              )}
            </div>
          </section>

          {/* Talleres Realizados */}
          <section ref={realizadosRef} className="scroll-animation mb-20" data-testid="realizados-section">
            <h2 className="text-3xl font-bold text-foreground mb-8">Talleres Realizados</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {realizados.map((taller) => (
                <TallerCard key={taller.id} taller={taller} />
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20" data-testid="faq-section">
            <h2 className="text-3xl font-bold text-foreground mb-8">Preguntas Frecuentes</h2>
            <div className="grid gap-6">
              <Card className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-6">
                <h3 className="font-semibold text-foreground mb-2">¿Es abierto al público?</h3>
                <p className="text-muted-foreground text-sm">
                  No. Por resguardo y eficacia clínica, los cupos se asignan por invitación a jóvenes que participan en psicoterapia individual y cumplen criterios de compatibilidad de grupo.
                </p>
              </Card>
              
              <Card className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-6">
                <h3 className="font-semibold text-foreground mb-2">¿Por qué el acceso es por invitación?</h3>
                <p className="text-muted-foreground text-sm">
                  La práctica clínica en TEA favorece grupos pequeños y predecibles, conformados según perfil sensorial, edad y objetivos. Esto reduce sobrecarga, mejora la regulación y facilita la integración social.
                </p>
              </Card>
              
              <Card className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-6">
                <h3 className="font-semibold text-foreground mb-2">¿Cómo son las sesiones?</h3>
                <p className="text-muted-foreground text-sm">
                  Duración habitual entre 90–120 minutos. Estructura predecible con anticipación visual, materiales sencillos y tiempos de pausa.
                </p>
              </Card>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center" data-testid="contact-section">
            <Card className="bg-primary/5 border border-primary/20 backdrop-blur-md rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                ¿Te interesa participar?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Los talleres son parte del proceso terapéutico integral. Contacta para conocer más sobre la evaluación individual.
              </p>
              
              <Button
                onClick={handleContactWhatsApp}
                size="lg"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold"
                data-testid="button-whatsapp-talleres"
              >
                Consultar por WhatsApp
              </Button>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}