import { Shield, Eye, Lock, UserCheck, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SEOHead } from "@/components/seo-head";
import { CONTACT_INFO } from "@/lib/constants";
import { useScrollAnimation } from "@/lib/animations";

export default function PoliticaPrivacidad() {
  const contentRef = useScrollAnimation();

  const breadcrumbItems = [
    { label: "Política de Privacidad", href: "/politica-privacidad" }
  ];

  const lastUpdated = "31 de agosto de 2024";

  return (
    <>
      <SEOHead 
        title="Política de Privacidad Psicóloga Adolescentes Jóvenes Concón Viña del Mar | Paula Cabrera Fuentes"
        description="Política de privacidad y protección de datos personales de Paula Cabrera Fuentes, psicóloga especialista en adolescentes y jóvenes en Concón y Viña del Mar."
        canonical="https://paulacabrerapsicologa.cl/politica-privacidad"
      />

      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          <section ref={contentRef} className="scroll-animation" data-testid="privacy-policy-content">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="privacy-policy-title">
                Política de Privacidad
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="privacy-policy-subtitle">
                Protección y tratamiento de datos personales
              </p>
              <p className="text-sm text-muted-foreground mt-2" data-testid="privacy-policy-updated">
                Última actualización: {lastUpdated}
              </p>
            </div>

            <div className="space-y-8">
              {/* Introduction */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3" data-testid="privacy-introduction-title">
                  <Eye className="w-6 h-6 text-primary" />
                  Introducción
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Paula Cabrera Fuentes, psicóloga clínica, se compromete a proteger la privacidad y 
                    confidencialidad de la información personal de sus pacientes y usuarios del sitio web. 
                    Esta política de privacidad describe cómo recopilamos, utilizamos, almacenamos y 
                    protegemos su información personal.
                  </p>
                  <p>
                    Al utilizar nuestros servicios o sitio web, usted acepta las prácticas descritas 
                    en esta política de privacidad.
                  </p>
                </div>
              </Card>

              {/* Data Collection */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3" data-testid="privacy-collection-title">
                  <UserCheck className="w-6 h-6 text-primary" />
                  Información que Recopilamos
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Información Personal</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Nombre completo</li>
                      <li>• Fecha de nacimiento</li>
                      <li>• Información de contacto (email, teléfono, dirección)</li>
                      <li>• Información de salud mental relevante para el tratamiento</li>
                      <li>• Historial clínico y notas de sesión</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Información del Sitio Web</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Información del formulario de contacto</li>
                      <li>• Datos de navegación (cookies, dirección IP)</li>
                      <li>• Información de uso del sitio web</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Data Usage */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3" data-testid="privacy-usage-title">
                  <Lock className="w-6 h-6 text-primary" />
                  Uso de la Información
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Utilizamos su información personal para:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Proporcionar servicios de psicoterapia y arteterapia</li>
                    <li>• Mantener registros clínicos necesarios</li>
                    <li>• Comunicarnos sobre citas y tratamiento</li>
                    <li>• Cumplir con obligaciones legales y profesionales</li>
                    <li>• Mejorar nuestros servicios</li>
                    <li>• Responder a consultas y solicitudes</li>
                  </ul>
                  
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mt-6">
                    <p className="text-accent-foreground font-medium">
                      <strong>Confidencialidad Terapéutica:</strong> Toda la información compartida durante 
                      las sesiones de terapia está protegida por el secreto profesional según la legislación 
                      chilena y el código de ética del Colegio de Psicólogos de Chile.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Data Protection */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4" data-testid="privacy-protection-title">
                  Protección de Datos
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Implementamos medidas de seguridad técnicas y organizativas para proteger 
                    su información personal:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Cifrado de datos sensibles</li>
                    <li>• Acceso restringido a la información</li>
                    <li>• Almacenamiento seguro de expedientes</li>
                    <li>• Copias de seguridad regulares</li>
                    <li>• Destrucción segura de documentos obsoletos</li>
                  </ul>
                </div>
              </Card>

              {/* Data Sharing */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4" data-testid="privacy-sharing-title">
                  Compartir Información
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    No compartimos su información personal con terceros, excepto en las siguientes 
                    circunstancias limitadas:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Con su consentimiento explícito por escrito</li>
                    <li>• Cuando sea requerido por ley o autoridad judicial</li>
                    <li>• En casos de riesgo inminente para su seguridad o la de otros</li>
                    <li>• Para supervisión profesional (con datos anonimizados)</li>
                    <li>• Con otros profesionales de salud (solo con su autorización)</li>
                  </ul>
                </div>
              </Card>

              {/* User Rights */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4" data-testid="privacy-rights-title">
                  Sus Derechos
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Usted tiene derecho a:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Acceder a su información personal</li>
                    <li>• Solicitar corrección de datos inexactos</li>
                    <li>• Solicitar eliminación de datos (sujeto a obligaciones legales)</li>
                    <li>• Retirar su consentimiento en cualquier momento</li>
                    <li>• Solicitar una copia de su expediente clínico</li>
                    <li>• Presentar quejas ante la autoridad de protección de datos</li>
                  </ul>
                </div>
              </Card>

              {/* Cookies and Website */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4" data-testid="privacy-cookies-title">
                  Cookies y Sitio Web
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Cookies necesarias para el funcionamiento del sitio</li>
                    <li>• Cookies de análisis para mejorar el contenido</li>
                    <li>• No utilizamos cookies de publicidad o seguimiento</li>
                  </ul>
                  <p>
                    Puede configurar su navegador para rechazar cookies, aunque esto puede 
                    afectar la funcionalidad del sitio.
                  </p>
                </div>
              </Card>

              {/* Data Retention */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4" data-testid="privacy-retention-title">
                  Retención de Datos
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Conservamos su información personal durante el tiempo necesario para:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Proporcionar los servicios solicitados</li>
                    <li>• Cumplir con obligaciones legales (mínimo 5 años según la ley chilena)</li>
                    <li>• Resolver disputas o reclamos</li>
                  </ul>
                  <p>
                    Los expedientes clínicos se conservan según las normativas del Colegio de 
                    Psicólogos de Chile y la legislación vigente.
                  </p>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6" data-testid="privacy-contact-title">
                  Contacto para Asuntos de Privacidad
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos, 
                    puede contactarnos:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3" data-testid="privacy-contact-email">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3" data-testid="privacy-contact-phone">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Teléfono</p>
                        <p className="text-muted-foreground">{CONTACT_INFO.phone}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      Responderemos a su solicitud dentro de 30 días hábiles. Para solicitudes de 
                      acceso a datos, podemos requerir verificación de identidad.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Updates */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4" data-testid="privacy-updates-title">
                  Actualizaciones de la Política
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Esta política de privacidad puede actualizarse periódicamente para reflejar 
                    cambios en nuestras prácticas o en la legislación aplicable.
                  </p>
                  <p>
                    Las actualizaciones significativas serán notificadas a través de nuestro sitio web 
                    o por email. Le recomendamos revisar esta política regularmente.
                  </p>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
