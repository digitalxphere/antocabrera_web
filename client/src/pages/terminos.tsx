import { FileText, Scale, AlertTriangle, Clock, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SEOHead } from "@/components/seo-head";
import { CONTACT_INFO } from "@/lib/constants";
import { useScrollAnimation } from "@/lib/animations";

export default function Terminos() {
  const contentRef = useScrollAnimation();

  const breadcrumbItems = [
    { label: "Términos de Servicio", href: "/terminos" }
  ];

  const lastUpdated = "31 de agosto de 2024";

  return (
    <>
      <SEOHead 
        title="Términos de Servicio Psicóloga Adolescentes Jóvenes Viña del Mar | Antonia Cabrera"
        description="Términos y condiciones para servicios de psicoterapia y arteterapia de Antonia Cabrera, psicóloga especialista en adolescentes y jóvenes en Viña del Mar."
        canonical="https://antoniacabrerapsicologa.cl/terminos"
      />

      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          <section ref={contentRef} className="scroll-animation" data-testid="terms-content">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="terms-title">
                Términos de Servicio
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="terms-subtitle">
                Condiciones de uso de los servicios profesionales
              </p>
              <p className="text-sm text-muted-foreground mt-2" data-testid="terms-updated">
                Última actualización: {lastUpdated}
              </p>
            </div>

            <div className="space-y-8">
              {/* Introduction */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3" data-testid="terms-introduction-title">
                  <Scale className="w-6 h-6 text-primary" />
                  Introducción
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Estos términos de servicio ("Términos") rigen el uso de los servicios profesionales 
                    de psicoterapia y arteterapia ofrecidos por Antonia Cabrera, psicóloga clínica 
                    registrada en el Colegio de Psicólogos de Chile.
                  </p>
                  <p>
                    Al contratar nuestros servicios o utilizar nuestro sitio web, usted acepta estar 
                    sujeto a estos términos y condiciones.
                  </p>
                </div>
              </Card>

              {/* Services Description */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4" data-testid="terms-services-title">
                  Descripción de Servicios
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Ofrecemos los siguientes servicios profesionales:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Consulta individual de psicoterapia (70 minutos)</li>
                    <li>• Psicoeducación para padres y cuidadores (60 minutos)</li>
                    <li>• Talleres de arteterapia grupales (90-120 minutos, 4-6 participantes)</li>
                    <li>• Especialización en adolescentes, jóvenes, TEA y neurodiversidad</li>
                    <li>• Modalidades presencial en Viña del Mar y online mundial</li>
                  </ul>
                  <p>
                    Todos los servicios se brindan bajo los estándares éticos y profesionales 
                    del Colegio de Psicólogos de Chile.
                  </p>
                </div>
              </Card>

              {/* Appointments and Scheduling */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3" data-testid="terms-appointments-title">
                  <Clock className="w-6 h-6 text-primary" />
                  Citas y Programación
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Agendamiento</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Las citas deben programarse con al menos 24 horas de anticipación</li>
                      <li>• La confirmación se realiza por WhatsApp</li>
                      <li>• Sesiones individuales: 70 minutos</li>
                      <li>• Psicoeducación para padres: 60 minutos</li>
                      <li>• Talleres de arteterapia: 90-120 minutos</li>
                      <li>• Ubicación: Montenegro 136, Viña del Mar, Valparaíso</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Modalidades</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Presencial: Montenegro 136, Viña del Mar</li>
                      <li>• Online: Disponible a nivel mundial a través de plataforma segura</li>
                      <li>• Talleres: Solo presencial en Viña del Mar</li>
                      <li>• Horarios: Lunes a Viernes 11:00-19:00</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Cancellation Policy */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3" data-testid="terms-cancellation-title">
                  <XCircle className="w-6 h-6 text-destructive" />
                  Política de Cancelación
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">Cancelación sin costo</h4>
                      </div>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Con 24+ horas de anticipación</li>
                        <li>• Por enfermedad del paciente</li>
                        <li>• Por emergencias familiares</li>
                        <li>• Por condiciones climáticas extremas</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <XCircle className="w-5 h-5 text-red-600" />
                        <h4 className="font-semibold text-red-800">Cancelación con costo</h4>
                      </div>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Con menos de 24 horas de anticipación</li>
                        <li>• No presentarse a la cita (50% del valor)</li>
                        <li>• Cancelaciones recurrentes</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-foreground mb-2">Reprogramación</h4>
                    <p>
                      Las citas canceladas con la debida anticipación pueden reprogramarse sin costo adicional. 
                      Se ofrecen opciones flexibles para reagendar según disponibilidad.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Payment Terms */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4" data-testid="terms-payment-title">
                  Términos de Pago
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Métodos de Pago</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Efectivo (sesiones presenciales)</li>
                      <li>• Transferencia bancaria</li>
                      <li>• Tarjetas de débito/crédito</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Política de Pagos</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• El pago se realiza al finalizar cada sesión</li>
                      <li>• Contacto para consultar facilidades de pago: +56 9 5306 5780</li>
                      <li>• Evaluación de cada caso individual</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Reembolsos</h3>
                    <p>
                      Los reembolsos se evalúan caso a caso. En general, no se otorgan reembolsos 
                      por servicios ya prestados, excepto en circunstancias extraordinarias.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Professional Responsibilities */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4" data-testid="terms-responsibilities-title">
                  Responsabilidades Profesionales
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Del Profesional</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Mantener confidencialidad absoluta</li>
                      <li>• Proporcionar servicios dentro del marco ético profesional</li>
                      <li>• Estar disponible para consultas de seguimiento</li>
                      <li>• Derivar a otros profesionales cuando sea necesario</li>
                      <li>• Mantener registros clínicos adecuados</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Del Cliente/Paciente</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Proporcionar información veraz y completa</li>
                      <li>• Asistir puntualmente a las citas programadas</li>
                      <li>• Participar activamente en el proceso terapéutico</li>
                      <li>• Comunicar cualquier cambio relevante en su situación</li>
                      <li>• Respetar las políticas establecidas</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Confidentiality */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4" data-testid="terms-confidentiality-title">
                  Confidencialidad
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Toda la información compartida durante las sesiones está protegida por el secreto 
                    profesional según la legislación chilena y el código de ética profesional.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Excepciones Legales</h3>
                    <p>
                      La confidencialidad puede limitarse únicamente en casos de:
                    </p>
                    <ul className="space-y-2 ml-4 mt-2">
                      <li>• Riesgo inminente de daño a sí mismo o a terceros</li>
                      <li>• Sospecha de maltrato infantil</li>
                      <li>• Orden judicial específica</li>
                      <li>• Autorización expresa del paciente</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Emergency Situations */}
              <Card className="bg-destructive/5 border border-destructive/20 rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3" data-testid="terms-emergency-title">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  Situaciones de Emergencia
                </h2>
                <div className="space-y-4 text-foreground">
                  <p className="font-medium text-destructive">
                    En caso de crisis o emergencia psicológica, contacte inmediatamente:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white border border-destructive/30 rounded-xl">
                      <p className="font-semibold text-foreground">Salud Responde</p>
                      <p className="text-lg text-destructive font-bold">600 360 7777</p>
                    </div>
                    <div className="text-center p-4 bg-white border border-destructive/30 rounded-xl">
                      <p className="font-semibold text-foreground">SAMU</p>
                      <p className="text-lg text-destructive font-bold">131</p>
                    </div>
                    <div className="text-center p-4 bg-white border border-destructive/30 rounded-xl">
                      <p className="font-semibold text-foreground">Emergencias</p>
                      <p className="text-lg text-destructive font-bold">133</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los servicios profesionales no incluyen atención de emergencias 24/7. 
                    Para crisis fuera del horario de atención, utilice los servicios de emergencia mencionados.
                  </p>
                </div>
              </Card>

              {/* Limitations */}
              <Card className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4" data-testid="terms-limitations-title">
                  Limitaciones y Alcance
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Alcance del Servicio</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Los servicios no constituyen atención médica</li>
                      <li>• No se prescriben medicamentos</li>
                      <li>• No se realizan diagnósticos médicos</li>
                      <li>• Se enfocan en el bienestar psicológico y emocional</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Limitación de Responsabilidad</h3>
                    <p>
                      Los servicios se proporcionan con el mayor cuidado profesional, pero no se garantizan 
                      resultados específicos. El progreso terapéutico depende de múltiples factores, 
                      incluyendo la participación activa del cliente.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Modifications and Contact */}
              <Card className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4" data-testid="terms-contact-title">
                  Modificaciones y Contacto
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Modificaciones</h3>
                    <p className="text-muted-foreground">
                      Estos términos pueden modificarse ocasionalmente. Los cambios se comunicarán 
                      con anticipación y entrarán en vigor para futuras contrataciones de servicios.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Contacto</h3>
                    <p className="text-muted-foreground mb-4">
                      Para preguntas sobre estos términos o nuestros servicios:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Teléfono</p>
                        <p className="text-muted-foreground">{CONTACT_INFO.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
