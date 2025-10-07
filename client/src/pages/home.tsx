import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Calendar, MessageCircle, CheckCircle, GraduationCap, Tag, Palette, DollarSign, MapPin, Phone, BookOpen, Award, Users, Clock, FileText, Brain, User, Map as MapIcon } from "lucide-react";
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
    
    // Preload the correct image immediately based on screen size
    const img = new Image();
    const imageSrc = '/attached_assets/image_1759849561201.png';
    
    img.onload = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => setImageLoaded(true), 100);
    };
    img.onerror = () => {
      console.warn('Image failed to load, showing fallback');
      setImageLoaded(true); // Show fallback background
    };
    
    // Set optimized loading attributes
    img.decoding = 'async';
    img.loading = 'eager';
    img.crossOrigin = 'anonymous';
    
    // Try WebP first if supported, fallback to original
    const supportsWebP = (() => {
      const canvas = document.createElement('canvas');
      return canvas.toDataURL ? canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0 : false;
    })();
    
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
        "description": "Psicóloga en Viña del Mar, especialista en adolescentes de 12 a 18 años. Atención presencial y online con arteterapia y terapia de juego. Acompañamiento especializado para neurodivergencias (TDAH, TEA) con enfoque sistémico. El arte y el juego son los puentes para la comunicación amable y la expresión de emociones.",
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
        "/attached_assets/image_1759849561201.png"
      ]} />
      <SEOHead 
        title="Psicóloga en Viña del Mar | Arteterapia y Terapia de Juego para Adolescentes 12-18 años"
        description="Antonia Cabrera, psicóloga en Viña del Mar especialista en adolescentes de 12 a 18 años. Arteterapia y terapia de juego con enfoque sistémico. Atención presencial y online. Acompañamiento especializado para neurodivergencias (TDAH, TEA). El arte y el juego son los puentes para la comunicación amable y la expresión de emociones."
        canonical="https://antoniacabrerapsicologa.cl/"
        structuredData={structuredData}
      />
      
      {/* Preload removido para evitar duplicación con ImagePreloader optimizado */}

      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen md:min-h-screen flex items-center scroll-animation overflow-hidden bg-gradient-to-br from-orange-100 to-amber-50" 
        data-testid="hero-section"
        style={{
          minHeight: isMobile ? '100vh' : '100vh'
        }}
      >
        {/* Background Image with Optimized Loading */}
        <picture>
          <img 
            src="/attached_assets/image_1759849561201.png"
            alt="Antonia Cabrera - Psicóloga especialista en arteterapia"
            width="1920"
            height="1080"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              objectPosition: 'center center',
              transform: 'translateZ(0)',
              willChange: 'opacity',
              imageRendering: 'crisp-edges'
            }}
            loading="eager"
            decoding="async"
          />
        </picture>
        
        {/* Instant fallback background while image loads */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-orange-200 via-amber-100 to-orange-150 transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-90'}`}
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(251, 146, 60, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(234, 179, 8, 0.3) 0%, transparent 50%)',
            transform: 'translateZ(0)'
          }}
        ></div>
        
        {/* Optimized low quality placeholder with blur-up effect */}
        {!imageLoaded && (
          <div 
            className="absolute inset-0 opacity-40 blur-lg transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, 
                rgba(251, 146, 60, 0.5) 0%, 
                rgba(234, 179, 8, 0.4) 25%,
                rgba(251, 191, 36, 0.3) 50%,
                rgba(234, 179, 8, 0.3) 75%,
                rgba(251, 146, 60, 0.4) 100%)`,
              transform: 'translateZ(0)',
              filter: 'blur(10px) saturate(1.2)'
            }}
          ></div>
        )}
        {/* Hojas volando animadas */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Hojas flotantes principales con líneas */}
          <div className="absolute top-20 left-1/3 w-4 h-4 text-orange-400 opacity-70 animate-float-1 leaf-shape"></div>
          <div className="absolute top-32 right-1/4 w-3 h-3 text-orange-500 opacity-60 animate-float-2 leaf-shape"></div>
          <div className="absolute top-40 left-2/3 w-2 h-2 text-orange-600 opacity-50 animate-float-3 leaf-shape"></div>
          <div className="absolute top-60 right-1/3 w-3 h-3 text-orange-400 opacity-40 animate-float-1 leaf-shape"></div>
          <div className="absolute top-80 left-1/2 w-2 h-2 text-orange-500 opacity-60 animate-float-2 leaf-shape"></div>
          
          {/* Hojas más dispersas */}
          <div className="absolute top-24 right-1/2 w-3 h-3 text-orange-300 opacity-50 animate-float-3 leaf-shape"></div>
          <div className="absolute top-52 left-3/4 w-2 h-2 text-orange-400 opacity-45 animate-float-1 leaf-shape"></div>
          <div className="absolute top-72 right-1/5 w-4 h-4 text-orange-500 opacity-35 animate-float-2 leaf-shape"></div>
          <div className="absolute top-96 left-1/4 w-3 h-3 text-orange-300 opacity-55 animate-float-3 leaf-shape"></div>
          
          {/* Hojas en la parte superior */}
          <div className="absolute top-16 right-3/5 w-2 h-2 text-orange-400 opacity-40 animate-float-1 leaf-shape"></div>
          <div className="absolute top-12 left-2/5 w-3 h-3 text-orange-500 opacity-50 animate-float-2 leaf-shape"></div>
        </div>
        
        {/* Overlay sutil para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10"></div>
        
        <div className="absolute bottom-16 left-4 right-4 z-10 sm:bottom-12 sm:left-8 sm:right-8 lg:bottom-16 lg:right-32 lg:left-auto lg:max-w-lg xl:max-w-xl">
          <div className="w-full rounded-[20px] p-5 sm:p-6 lg:p-6 bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.15)] lg:glass-card lg:bg-[rgba(247,248,245,0.25)]">
            {/* Diseño unificado SEO-optimizado */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-2xl lg:text-5xl font-bold text-gray-900 mb-2 lg:mb-2 leading-tight" data-testid="hero-title" style={{textShadow: '0 2px 6px rgba(255,255,255,0.9)'}}>
                Psicóloga Antonia Cabrera especialista en adolescentes - Viña del Mar
              </h1>
              
              <h2 className="text-lg sm:text-lg lg:text-3xl font-bold text-gray-900 mb-2 lg:mb-2 leading-tight" data-testid="hero-subtitle" style={{textShadow: '0 1px 4px rgba(255,255,255,0.8)'}}>
                Arteterapia y Terapia de Juego con Enfoque Sistémico
              </h2>
              <p className="text-sm sm:text-sm lg:text-xl text-gray-700 mb-2 lg:mb-3 font-medium" data-testid="hero-age-range" style={{textShadow: '0 1px 2px rgba(255,255,255,0.6)'}}>
                Especializada en adolescentes de 12 a 18 años
              </p>
              
              <p className="text-sm sm:text-sm lg:text-lg text-gray-600 mb-3 lg:mb-5 font-medium" data-testid="hero-location" style={{textShadow: '0 1px 2px rgba(255,255,255,0.6)'}}>
                Montenegro 136, Viña del Mar
              </p>
              
              
              
              {/* Botón WhatsApp responsive */}
              <div className="lg:hidden">
                <Button
                  onClick={handleWhatsApp}
                  size="default"
                  className="w-full px-6 py-3 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
                  data-testid="button-whatsapp-hero-mobile"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Agendar por WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <Button
                onClick={handleWhatsApp}
                size="default"
                className="w-auto px-6 py-3 rounded-xl font-semibold text-base bg-emerald-600 hover:bg-emerald-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200"
                data-testid="button-whatsapp-hero"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Escribir por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section ref={aboutRef} className="py-8 sm:py-16 scroll-animation" data-testid="about-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/attached_assets/PHOTO-2025-10-05-18-22-05_1759848903714.jpg" 
                alt="Antonia Cabrera, psicóloga especialista en arteterapia y terapia de juego"
                className="rounded-3xl shadow-2xl w-full h-auto"
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
                Psicóloga especialista en Arteterapia y Terapia de Juego con adolescentes
              </h3>
              
              <div className="space-y-4 text-muted-foreground mb-8 text-justify">
                <p className="text-lg" data-testid="about-preview-description">
                  Soy Antonia Cabrera, psicóloga especializada en el trabajo con adolescentes de 12 a 18 años. Mi enfoque integra el Arteterapia y el Enfoque Sistémico para acompañar procesos de crecimiento desde una mirada relacional.
                </p>
                
                <p>
                  Creo firmemente en el poder del arte y del juego como puentes para expresar emociones y generar cambios positivos. Estas herramientas me permiten establecer una comunicación cálida y cercana con adolescentes que encuentran en la creatividad una forma natural de expresarse.
                </p>
                
                <p>
                  También brindo apoyo a personas con neurodivergencias como TDAH y TEA, ofreciendo un espacio seguro, respetuoso y adaptado a sus necesidades.
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
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12" data-testid="formation-title">
            Formación Académica
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Psicóloga */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-emerald-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Psicóloga</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Universidad de Valparaíso</p>
                </div>
              </div>
            </div>
            
            {/* Diploma */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Diploma Intervención Infanto-Juvenil</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Universidad de Valparaíso</p>
                </div>
              </div>
            </div>
            
            {/* Arteterapia */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Palette className="w-7 h-7 text-purple-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Arteterapia y Terapia de Juego</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Cursos aplicados a población infantil y juvenil</p>
                </div>
              </div>
            </div>
            
            {/* Enfoque Sistémico */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-orange-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Enfoque Sistémico</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Práctica clínica con visión relacional y familiar</p>
                </div>
              </div>
            </div>
            
            {/* Neurodivergencias - centrado en la última fila */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 sm:col-span-2 sm:max-w-md sm:mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-7 h-7 text-teal-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Acompañamiento Neurodivergencias</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Experiencia con niños y adolescentes TDAH y TEA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50" data-testid="services-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="services-title">
              Servicios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-description">
              Acompañamiento terapéutico adaptado a las necesidades de cada persona
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1: Consulta Individual */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-emerald-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Consulta individual</h3>
              <h4 className="text-base font-semibold text-emerald-600 mb-6">Psicoterapia para adolescentes y jóvenes</h4>
              
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Objetivo:</p>
                  <p className="leading-relaxed">Acompañamiento centrado en el desarrollo emocional, identidad, autoestima y manejo de la ansiedad, TDAH o TEA.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Formato:</p>
                  <p>Sesión de 60 minutos.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Modalidad:</p>
                  <p>Presencial en Viña del Mar y online.</p>
                </div>
              </div>
            </div>

            {/* Service 2: Consulta Familiar */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Consulta familiar</h3>
              <h4 className="text-base font-semibold text-blue-600 mb-6">Orientación y apoyo sistémico</h4>
              
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Objetivo:</p>
                  <p className="leading-relaxed">Mejorar la comunicación entre padres e hijos, fortaleciendo vínculos y resolviendo conflictos desde una mirada de conjunto.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Formato:</p>
                  <p>Sesión de 70 minutos.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Modalidad:</p>
                  <p>Presencial u online.</p>
                </div>
              </div>
            </div>

            {/* Service 3: Terapia de Juego */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Terapia de juego</h3>
              <h4 className="text-base font-semibold text-purple-600 mb-6">Espacio creativo para niños y preadolescentes</h4>
              
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Objetivo:</p>
                  <p className="leading-relaxed">Favorecer la comunicación emocional y la resolución de conflictos mediante dinámicas lúdicas.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Formato:</p>
                  <p>Sesión de 50–60 minutos.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Modalidad:</p>
                  <p>Presencial.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo Dolores */}
      <ModuloDolores />


      {/* Contact Info Section */}
      <section className="py-8 sm:py-16 bg-green-50/50" data-testid="contact-info-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card className="bg-white border border-green-50 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow" data-testid="card-consultation-price">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Consulta Individual</h3>
              <div className="text-xl font-bold text-green-600 mb-1">$55.000</div>
              <p className="text-xs text-gray-500">Sesión 70 minutos</p>
            </Card>

            <Card className="bg-white border border-green-50 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow" data-testid="card-family-therapy-price">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Terapia Familiar</h3>
              <div className="text-xl font-bold text-green-600 mb-1">$75.000</div>
              <p className="text-xs text-gray-500">Sesión 90 minutos</p>
            </Card>

            <Card className="bg-white border border-green-50 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow" data-testid="card-address">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Dirección</h3>
              <div className="text-xs text-gray-600 mb-0.5">Montenegro 136</div>
              <div className="text-xs text-gray-500">Viña del Mar, Valparaíso</div>
            </Card>

            <Card className="bg-white border border-green-50 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow" data-testid="card-contact">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Contacto</h3>
              <div className="text-xs text-gray-600">
                <a href="https://wa.me/56993694978" className="text-green-600 hover:text-green-700 font-medium">
                  WhatsApp: +569 9369 4978
                </a>
              </div>
            </Card>

            <Card className="bg-white border border-green-50 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow" data-testid="card-legal-documents">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Documentos Legales</h3>
              <div className="text-xs text-gray-600 leading-relaxed">
                Entrega de boleta de honorarios profesionales para reembolsos en todas las Isapres y seguros complementarios
              </div>
            </Card>
          </div>
        </div>
      </section>

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
                  answer: "Sí, ofrecemos tanto sesiones presenciales en Concón, como sesiones online. La modalidad se elige según las necesidades de cada familia."
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
                    src="/attached_assets/Captura de pantalla 2025-10-07 a la(s) 12.44.33_1759851876535.png"
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
