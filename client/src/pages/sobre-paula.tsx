import { Brain, GraduationCap, Tag, Palette, Users, Award, CheckCircle, Heart, UserCheck, Lightbulb, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SEOHead } from "@/components/seo-head";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useScrollAnimation } from "@/lib/animations";

export default function SobrePaula() {
  const contentRef = useScrollAnimation();

  const breadcrumbItems = [
    { label: "Sobre Paula", href: "/sobre-paula-cabrera-fuentes-psicologa" }
  ];

  return (
    <>
      <SEOHead 
        title="Paula Cabrera Fuentes - Psicóloga en Viña del Mar y Concón | Especialista TEA, TDAH y Arteterapia para Adolescentes"
        description="Paula Cabrera Fuentes, psicóloga en Concón y Viña del Mar con Máster en Psicoterapia. +25 años especializándose en adolescentes, TEA, TDAH, neurodiversidad y arteterapia. Atención presencial y online."
        canonical="https://paulacabrerapsicologa.cl/sobre-paula-cabrera-fuentes-psicologa"
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
                    Paula Cabrera Fuentes
                  </h1>
                  
                  <h2 className="text-2xl lg:text-3xl text-primary mb-8 font-semibold" data-testid="about-subtitle">
                    Psicóloga especialista en terapia adolescente
                  </h2>
                  
                  <h3 className="text-xl text-muted-foreground leading-relaxed" data-testid="about-hero-description">
                    Bosques de Montemar Concón, Viña del Mar
                  </h3>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <OptimizedImage 
                  src="/attached_assets/Paula_Cabrera_Fuentes_psicologa_concon_vina_del_mar_1756665062563.jpeg" 
                  alt="Paula Cabrera Fuentes, psicóloga especialista en TEA"
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
                  Mi historia profesional
                </h3>
                
                <div className="space-y-8 text-muted-foreground text-lg leading-relaxed text-justify">
                  <p data-testid="about-description-1">
                    Curiosa, estudiosa y creativamente, recibo a cada paciente con genuino interés, consciente de que construimos juntos las herramientas necesarias para estar mejor.
                  </p>
                  
                  <p data-testid="about-description-2">
                    Soy madre de dos jóvenes, por lo que entiendo la perspectiva de ellos y la mía, lo que ayuda sin duda a tener siempre presente un sentido común que puede ser un poderoso aporte.
                  </p>
                  
                  <p data-testid="about-description-3">
                    Decidí armar este sitio con información más actualizada respecto de quien soy y mi perfil académico ya que el tiempo pasa y vamos cambiando. Mi grado de Psicóloga lo obtuve en la Universidad de Valparaíso, en donde elegí el área Humanista, que tiene que ver con aplicar la psicología subrayando el vínculo que tengo con mis pacientes. Por ende, mi consulta me identifica y me genera calidez, esperando que quien entre en mi espacio lo perciba también.
                  </p>
                  
                  <p data-testid="about-description-4">
                    Tu opinión importa, por lo que es regla que después de la primera sesión, tú eliges si deseas seguir el proceso. Asimismo, si eres mayor de 18 años, la participación de tu familia es voluntaria siempre y cuando no te encuentres en riesgo.
                  </p>
                  
                  <p data-testid="about-description-5">
                    Tengo registro en el Ministerio de Salud y en el de Educación. En mis post-títulos me fortalecí con conocimientos y práctica en terapia familiar y mediación para aportar en términos psicoeducativos en los ámbitos clínicos, educacionales, judiciales y comunitarios.
                  </p>
                  
                  <p data-testid="about-description-6">
                    Si tuviera que reconocer lo que más me marcó como psicoterapeuta, es sin duda la participación en distintas organizaciones de protección de derechos y responsabilización en jóvenes. En ellas aprendí la importancia del trabajo clínico sumado al trabajo social.
                  </p>
                  
                  <p data-testid="about-description-7">
                    El año pasado además me acredité en Intervención especializada en TEA, ya que muchos de los jóvenes que atiendo son neurodivergentes y es importante para mí estar aprendiendo constantemente para ayudar de la mejor manera. Un detalle no tan "random" es que uno de mis mellizos es del espectro y es mi mayor maestro.
                  </p>
                  
                  <p data-testid="about-description-8">
                    En la actualidad soy Máster en Psicoterapia, logré estudiar en Barcelona y renovar estrategias y técnicas que reflejan lo que quiero transmitir en mis sesiones; conectar en un camino nuevo en el que el cuerpo y la mente se unen permitiéndonos reconocer distintos recursos para tener así más posibilidades de pensar, sentir y ser en el mundo, sin olvidar tu esencia y tu valor como persona.
                  </p>
                  
                  <p data-testid="about-description-9">
                    Actualmente trabajo con jóvenes y adultos de todo Chile y el extranjero gracias al formato Online, que sinceramente es igual de efectivo.
                  </p>
                  
                  <p data-testid="about-description-10">
                    Por último, si tuviera que invitarte a conocer el maravilloso mundo de la psicoterapia, te diría algo así como:
                  </p>
                  
                  <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg italic text-foreground" data-testid="about-invitation">
                    <p className="mb-4">
                      "Si estás buscando un espacio íntimo y respetuoso<br />
                      Y estás inquieto por conocerte, comprenderte y aceptarte<br />
                      Para aprender de ti y mejorar tu ánimo y tus relaciones<br />
                      Ese impulso VALE…desde ya te sugiero apreciarlo."
                    </p>
                  </blockquote>
                  
                  <p data-testid="about-description-11">
                    Podría contarte tanto, sin embargo, tengo claro que este proceso llega en el momento preciso para cada persona y todo lo que puede suceder es único e indescriptible en una página de Internet.
                  </p>
                  
                  <p data-testid="about-description-12" className="font-medium text-foreground">
                    Para cuando nos encontremos, recuerda simplemente que amo lo que hago e intento dar lo mejor de mí.
                  </p>
                  
                  {/* Imagen personal al final */}
                  <div className="flex justify-center mt-12">
                    <img 
                      src="/attached_assets/10_1757039365251.jpeg"
                      alt="Paula Cabrera en un momento personal con sus mascotas"
                      className="rounded-2xl shadow-lg max-w-sm w-full h-auto object-contain"
                      data-testid="about-personal-image"
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
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 text-center text-sm font-medium text-muted-foreground">
                      <span data-testid="about-adolescents-title">Adolescentes, jóvenes y adultos</span>
                      <span data-testid="about-family-title">Familia y cuidadores</span>
                      <span data-testid="about-individual-title">Terapia individual</span>
                      <span data-testid="about-couples-title">Parejas</span>
                      <span data-testid="about-group-title">Terapia Grupal</span>
                      <span data-testid="about-neurodiversity-title">Neurodiversidad</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div data-testid="about-approach-respect">
                      <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="font-bold text-foreground mb-3">Respeto por la neurodiversidad</h3>
                      <p className="text-sm text-muted-foreground">Reconozco las diferencias según condición del neurodesarrollo como parte natural de la diversidad humana.</p>
                    </div>
                    
                    <div data-testid="about-approach-creativity">
                      <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h3 className="font-bold text-foreground mb-3">Creatividad como herramienta</h3>
                      <p className="text-sm text-muted-foreground">Utilizo el arte como medio de expresión alternativo cuando las palabras no son suficientes.</p>
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