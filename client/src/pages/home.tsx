import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Calendar, MessageCircle, CheckCircle, GraduationCap, Tag, Palette, DollarSign, MapPin, Phone, BookOpen, Award, Users, Clock, FileText, Brain, User, Map as MapIcon, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ModuloDolores from "@/components/modulo-dolores";
import InstagramModule from "@/components/instagram-module";
import { ServiceCard } from "@/components/service-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { SEOHead } from "@/components/seo-head";
import { ImagePreloader } from "@/components/image-preloader";
import { SERVICES, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";
import { useScrollAnimation } from "@/lib/animations";

export default function Home() {
  const heroRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const faqRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Preload the correct responsive image based on screen size
    const img = new Image();
    const imageSrc = window.innerWidth < 768 
      ? '/attached_assets/hero-mobile.webp' 
      : '/attached_assets/hero-desktop.webp';
    
    img.onload = () => {
      setTimeout(() => setImageLoaded(true), 100);
    };
    img.onerror = () => {
      console.warn('Image failed to load, showing fallback');
      setImageLoaded(true);
    };
    
    img.decoding = 'async';
    img.loading = 'eager';
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  const handleWorkshopRegistration = (workshopId: string) => {
    // TODO: Implement workshop registration modal
    console.log("Workshop registration:", workshopId);
  };

  const handleSchedule = () => {
    window.open("https://calendly.com/antonia-cabrera", "_blank");
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, "_blank");
  };


  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["PsychologyPractice", "LocalBusiness", "HealthAndBeautyBusiness"],
        "@id": "https://antoniacabrerapsicologa.cl/#business",
        "name": "Antonia Cabrera - Psicóloga Especialista en Arteterapia y Terapia de Juego",
        "alternateName": "Consulta Psicológica Antonia Cabrera",
        "description": "Psicóloga en Viña del Mar, especialista en niños y adolescentes de 7 a 18 años. Atención presencial y online con arteterapia y terapia de juego. Acompañamiento especializado para neurodivergencias (TDAH, TEA) con enfoque sistémico. El arte y el juego son los puentes para la comunicación amable y la expresión de emociones.",
        "url": "https://antoniacabrerapsicologa.cl",
        "logo": "https://antoniacabrerapsicologa.cl/attached_assets/PHOTO-2025-10-05-18-22-05_1759848903714.jpg",
        "image": "https://antoniacabrerapsicologa.cl/attached_assets/PHOTO-2025-10-05-18-22-05_1759848903714.jpg",
        "telephone": "+56-9-xxxx-xxxx",
        "email": "consulta@antoniacabrera.cl",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Montenegro 136",
          "addressLocality": "Viña del Mar",
          "addressRegion": "Región de Valparaíso",
          "addressCountry": "Chile",
          "postalCode": "2510000"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -32.9278,
          "longitude": -71.5279
        },
        "openingHours": [
          "Mo-Fr 10:00-19:00",
          "Sa 10:00-14:00"
        ],
        "serviceArea": [
          {
            "@type": "City",
            "name": "Viña del Mar",
            "sameAs": "https://es.wikipedia.org/wiki/Vi%C3%B1a_del_Mar"
          },
          {
            "@type": "City",
            "name": "Valparaíso"
          }
        ],
        "priceRange": "$$",
        "currenciesAccepted": "CLP",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Psicoterapia",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Terapia Individual Infantojuvenil",
                "description": "Arteterapia y terapia de juego para adolescentes de 12 a 18 años"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Acompañamiento Neurodivergencias",
                "description": "Atención especializada para adolescentes con TDAH, TEA y otras neurodivergencias"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Talleres de Arteterapia y Juego",
                "description": "Talleres grupales de terapia artística y juego terapéutico"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "ratingCount": "25"
        }
      },
      {
        "@type": "Person",
        "@id": "https://antoniacabrerapsicologa.cl/#person",
        "name": "Antonia Cabrera",
        "givenName": "Antonia",
        "familyName": "Cabrera",
        "jobTitle": "Psicóloga Especialista en Arteterapia y Terapia de Juego",
        "description": "Psicóloga especialista en adolescentes de 12 a 18 años con diploma en estrategias de intervención infantojuvenil y conocimientos en arteterapia y terapia de juego.",
        "image": "https://antoniacabrerapsicologa.cl/attached_assets/PHOTO-2025-10-05-18-22-05_1759848903714.jpg",
        "worksFor": {
          "@id": "https://antoniacabrerapsicologa.cl/#business"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Diploma en Estrategias de Intervención Infantojuvenil",
            "credentialCategory": "degree"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Licenciatura en Psicología",
            "credentialCategory": "degree"
          }
        ],
        "knowsAbout": [
          "Arteterapia",
          "Terapia de Juego",
          "Enfoque Sistémico",
          "Neurodiversidad",
          "TDAH",
          "TEA",
          "Intervención Infantojuvenil",
          "Talleres Grupales"
        ],
        "memberOf": {
          "@type": "ProfessionalService",
          "name": "Colegio de Psicólogos de Chile"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Universidad de Valparaíso",
          "sameAs": "https://www.uv.cl"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Montenegro 136",
          "addressLocality": "Viña del Mar",
          "addressRegion": "Región de Valparaíso",
          "addressCountry": "Chile"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://antoniacabrerapsicologa.cl/#website",
        "url": "https://antoniacabrerapsicologa.cl",
        "name": "Antonia Cabrera - Psicóloga Especialista en Arteterapia y Terapia de Juego",
        "description": "Sitio web oficial de Antonia Cabrera, psicóloga especialista en adolescentes con arteterapia y terapia de juego en Viña del Mar",
        "publisher": {
          "@id": "https://antoniacabrerapsicologa.cl/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://antoniacabrerapsicologa.cl/buscar?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "es-CL"
      }
    ]
  };

  return (
    <>
      {/* Preload critical images */}
      <ImagePreloader images={[
        "/attached_assets/hero-mobile.webp",
        "/attached_assets/hero-desktop.webp"
      ]} />
      <SEOHead 
        title="Psicóloga en Viña del Mar | Arteterapia y Terapia de Juego Infanto-Juvenil 7-18 años"
        description="Antonia Cabrera, psicóloga en Viña del Mar especialista infanto-juvenil (7 a 18 años). Arteterapia y terapia de juego con enfoque sistémico. Atención presencial y online. Acompañamiento especializado para neurodivergencias (TDAH, TEA). El arte y el juego son los puentes para la comunicación amable y la expresión de emociones."
        canonical="https://antoniacabrerapsicologa.cl/"
        structuredData={structuredData}
      />
      
      {/* Preload removido para evitar duplicación con ImagePreloader optimizado */}

      {/* Hero Section - Full Background with Glass Effect */}
      <section 
        ref={heroRef} 
        className="relative scroll-animation min-h-[85vh] lg:min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: isMobile 
            ? 'url(/attached_assets/hero-mobile.webp)' 
            : 'url(/attached_assets/hero-desktop.webp)'
        }}
        data-testid="hero-section"
      >
        {/* Overlay opcional para mejorar contraste */}
        <div className="absolute inset-0 bg-black/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="max-w-3xl">
            {/* Glass Container */}
            <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full">
                    <p className="text-sm font-semibold text-primary">Atención Especializada Infanto-Juvenil</p>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight" data-testid="hero-title">
                    Psicóloga en Viña del Mar – Antonia Cabrera
                  </h1>
                  
                  <h2 className="text-xl sm:text-2xl text-gray-800 dark:text-gray-100 font-semibold" data-testid="hero-subtitle">
                    Especialista Infanto-Juvenil (7 a 18 años)
                  </h2>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl leading-relaxed" data-testid="hero-description">
                    Arteterapia y Terapia de Juego con Enfoque Sistémico. El arte y el juego son los puentes para la comunicación amable y la expresión de emociones. 
                    Te acompaño en tu proceso con herramientas creativas adaptadas a ti.
                  </p>
                </div>

                {/* Key Info Pills */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border border-white/30">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Montenegro 136, Viña del Mar</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border border-white/30">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">50 minutos</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border border-white/30">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Presencial u Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section ref={aboutRef} className="py-8 sm:py-16 scroll-animation" data-testid="about-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center lg:justify-start">
              <img 
                src="/attached_assets/antonia_cabrera_psicologa.webp" 
                alt="Antonia Cabrera, psicóloga especialista en arteterapia y terapia de juego"
                className="rounded-3xl shadow-2xl w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] h-auto"
                data-testid="about-preview-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" data-testid="about-preview-title">
                Sobre mí
              </h2>
              
              <h3 className="text-xl text-primary mb-6 font-semibold" data-testid="about-preview-subtitle">
                Psicóloga con muchas ganas de acompañar a niños, niñas, adolescentes y familias
              </h3>
              
              <div className="space-y-4 text-muted-foreground mb-8 text-justify">
                <p className="text-lg" data-testid="about-preview-description">
                  Soy Antonia, psicóloga diplomada en terapia <strong className="font-semibold text-foreground">infanto-juvenil</strong> por la Universidad de Valparaíso. Trabajo en <strong className="font-semibold text-foreground">Viña del Mar</strong>, acompañando a niños, niñas y adolescentes. Como terapeuta joven, conecto fácilmente con ellos: entiendo su lenguaje, sus formas de expresarse y las emociones intensas que muchas veces cuesta poner en palabras.
                </p>
                
                <p>
                  Trabajo desde una mirada sistémica y familiar, porque creo que nadie crece solo. Acompaño tanto a los niños, niñas y adolescentes como a sus familias para mejorar la comunicación, validar lo que sienten y construir relaciones más sanas y respetuosas.
                </p>
                
                <p>
                  Mi objetivo es crear un ambiente cercano, cálido y auténtico, donde cada persona pueda sentirse cómoda siendo quien es, sin miedo al juicio. Un espacio para encontrarse, liberarse y aprender a vivir con más calma y confianza.
                </p>
              </div>
              
              
              <Link href="/sobre-antonia-cabrera-psicologa">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-3 rounded-xl font-semibold"
                  data-testid="button-learn-more-about"
                >
                  Conoce más sobre mi experiencia
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Formación Académica Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50" data-testid="formation-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4" data-testid="formation-title">
            Formación Académica
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Títulos y diplomados que respaldan mi práctica profesional
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {/* Psicóloga */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Psicóloga</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Universidad de Valparaíso</p>
                </div>
              </div>
            </div>
            
            {/* Diploma Intervención */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Diplomado Intervención Infantil Juvenil</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Universidad de Valparaíso</p>
                </div>
              </div>
            </div>
            
            {/* Diplomado Terapia Narrativa */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Diplomado Terapia Narrativa</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Pranas Chile</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-4">
              Enfoques y Especialidades
            </h3>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Herramientas terapéuticas que integro en mi práctica clínica
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Arteterapia */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Palette className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Arteterapia y Terapia de Juego</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Acceso al mundo interno a través de la creatividad, expresión simbólica y lenguaje no verbal para comunicar emociones</p>
                  </div>
                </div>
              </div>
              
              {/* Enfoque Sistémico */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Enfoque Sistémico Familiar</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Comprende a las personas dentro de sus vínculos significativos: familia, amistades, escuela y cómo transformar esas dinámicas</p>
                  </div>
                </div>
              </div>
              
              {/* Inclusión */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Espacio Inclusivo y Neurodiversidad</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Trabajo inclusivo con diversidad sexual, de género y neurodivergencia. Espacio libre de juicios, respetuoso y empático</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Timeline Vertical */}
      <section className="py-20 bg-white" data-testid="services-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-testid="services-title">
              Ruta Terapéutica
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="services-description">
              Acompañamiento adaptado a las necesidades de cada adolescente
            </p>
          </div>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-emerald-500 to-blue-500 hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Service 1 */}
              <div className="relative pl-0 md:pl-20" data-testid="service-1">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <Card className="border-l-4 border-primary hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src="/attached_assets/image_1759854153688.webp" 
                          alt="Psicoterapia individual"
                          className="w-24 h-24 object-contain rounded-2xl"
                        />
                      </div>
                      <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">Psicoterapia Individual</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Acompañamiento especializado para adolescentes de 12 a 18 años. Trabajamos temas como ansiedad, autoestima, identidad y dificultades escolares.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                            <Clock className="w-4 h-4 mr-1" />
                            50 min
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700">
                            <MapIcon className="w-4 h-4 mr-1" />
                            Presencial u Online
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Service 2 */}
              <div className="relative pl-0 md:pl-20" data-testid="service-2">
                <div className="absolute left-6 top-6 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <Card className="border-l-4 border-emerald-500 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src="/attached_assets/image_1759854164926.webp" 
                          alt="Consulta familiar"
                          className="w-24 h-24 object-contain rounded-2xl"
                        />
                      </div>
                      <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">Consulta Familiar</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Fortalecer la comunicación y el vínculo entre padres e hijos con enfoque sistémico. Trabajamos dinámicas familiares y resolución de conflictos.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-700">
                            <Clock className="w-4 h-4 mr-1" />
                            50 min
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                            <Users className="w-4 h-4 mr-1" />
                            Presencial u Online
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Service 3 */}
              <div className="relative pl-0 md:pl-20" data-testid="service-3">
                <div className="absolute left-6 top-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <Card className="border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src="/attached_assets/arteterapia_adolescentes.webp" 
                          alt="Arteterapia"
                          className="w-24 h-24 object-contain rounded-2xl"
                        />
                      </div>
                      <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">Arteterapia y Terapia de Juego</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Espacio creativo para que los adolescentes expresen y exploren emociones a través del arte, dibujo, collage y dinámicas lúdicas.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                            <Clock className="w-4 h-4 mr-1" />
                            50 min
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-700">
                            <Palette className="w-4 h-4 mr-1" />
                            Presencial
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo Dolores */}
      <ModuloDolores />

      {/* FAQ Section */}
      <section ref={faqRef} className="py-8 sm:py-16 bg-card scroll-animation" data-testid="faq-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="faq-title">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="faq-description">
              Respuestas a las consultas más comunes sobre nuestros servicios
            </p>
          </div>
          
          {/* FAQ compacto para móvil y completo para desktop */}
          <div className="block md:hidden">
            {/* Versión móvil - Solo 3 preguntas principales */}
            <div className="max-w-4xl mx-auto space-y-3 mb-6">
              {[
                {
                  question: "¿Cómo puede ayudar la arteterapia a adolescentes con TEA?",
                  answer: "La arteterapia ofrece un espacio de expresión no verbal donde adolescentes pueden explorar emociones, desarrollar habilidades sociales y fortalecer su autoestima a través de actividades creativas adaptadas a sus necesidades."
                },
                {
                  question: "¿Cuánto dura el proceso terapéutico?",
                  answer: "La duración del proceso varía según las necesidades individuales. Generalmente, recomendamos un mínimo de 12 sesiones para observar cambios significativos."
                },
                {
                  question: "¿Ofrecen sesiones online?",
                  answer: "Sí, ofrecemos tanto sesiones presenciales en Viña del Mar, como sesiones online. La modalidad se elige según las necesidades de cada familia."
                }
              ].map((item, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="px-4 py-3 cursor-pointer list-none hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm text-foreground">{item.question}</span>
                        <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>
                    <div className="px-4 pb-3 text-sm text-muted-foreground">
                      {item.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
            
            {/* Botón para ver todas las preguntas */}
            <div className="text-center">
              <Link href="/preguntas-frecuentes">
                <Button variant="outline" className="text-sm px-6 py-2">
                  Ver todas las preguntas frecuentes
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Versión desktop - FAQ completo */}
          <div className="hidden md:block">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-8 sm:py-16 scroll-animation" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="testimonials-title">
              Experiencias de Familias
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="testimonials-description">
              Testimonios anónimos de familias que han participado en nuestros procesos
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-8" data-testid="map-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ubicación Oficina</h2>
          </div>
          
          <div className="relative">
            <Card className="bg-card border border-border rounded-3xl overflow-hidden" data-testid="location-card">
              <CardContent className="p-4">
                <button
                  onClick={() => window.open('https://maps.app.goo.gl/Xv1WAQkW1j23PU2f8', '_blank')}
                  className="relative w-full h-96 overflow-hidden rounded-2xl cursor-pointer group"
                >
                  <img
                    src="/attached_assets/mapa_ubicacion_vina_del_mar.webp"
                    alt="Mapa ubicación Montenegro 136, Viña del Mar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <MapIcon className="w-5 h-5" />
                        Ver en Google Maps
                      </span>
                    </div>
                  </div>
                </button>
                
                {/* Floating info card */}
                <div className="absolute top-8 left-8 right-8 md:left-8 md:right-auto md:max-w-sm pointer-events-none">
                  <div className="backdrop-blur-xl bg-white/90 dark:bg-black/80 border border-white/40 dark:border-white/20 rounded-2xl p-6 shadow-lg">
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
              </CardContent>
            </Card>
            
            <div className="text-center mt-8">
              <button
                onClick={() => window.open('https://maps.app.goo.gl/Xv1WAQkW1j23PU2f8', '_blank')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 font-semibold shadow-lg hover:shadow-xl"
                data-testid="open-maps-button"
              >
                <MapPin className="w-5 h-5" />
                Cómo llegar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Module */}
      <InstagramModule />

    </>
  );
}
