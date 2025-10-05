import { Clock, Users, Target, RotateCcw, ArrowRight, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ProcesoTerapeutico() {
  const pasos = [
    {
      numero: 1,
      titulo: "Evaluación Inicial",
      subtitulo: "60 min, pagada",
      icono: <Users className="w-6 h-6" />,
      color: "bg-green-600",
      descripcion: "Entrevista clínica con el joven. Levanto historia, intereses, perfil sensorial, apoyos previos y metas.",
      detalles: [
        "Sesión para padres (30-45 min) para contexto y expectativas",
        "Uso anticipación, agenda visual y lenguaje claro",
        "Evaluación completa de necesidades específicas"
      ],
      duracion: "60 minutos"
    },
    {
      numero: 2,
      titulo: "Plan Personalizado",
      subtitulo: "Según necesidades",
      icono: <Target className="w-6 h-6" />,
      color: "bg-green-600",
      descripcion: "Definimos objetivos SMART y frecuencia. Diseño de adaptaciones personalizadas.",
      detalles: [
        "Acuerdos sensoriales y apoyos visuales",
        "Señales de pausa y tareas breves",
        "Modalidad presencial en Concón u online global"
      ],
      duracion: "Según necesidades"
    },
    {
      numero: 3,
      titulo: "Proceso Terapéutico",
      subtitulo: "Sesiones de 60 min",
      icono: <CheckCircle className="w-6 h-6" />,
      color: "bg-green-600",
      descripcion: "Trabajo individual con metodologías combinadas y adaptadas a TEA.",
      detalles: [
        "Arteterapia para expresión segura y regulación",
        "Habilidades sociales y comunicación funcional",
        "Regulación emocional y manejo de ansiedad/sobrecarga",
        "Flexibilidad cognitiva y resolución de problemas",
        "Apoyo a padres en sesiones separadas"
      ],
      duracion: "60 minutos por sesión"
    },
    {
      numero: 4,
      titulo: "Revisión y Ajustes",
      subtitulo: "Cada 6-8 sesiones",
      icono: <RotateCcw className="w-6 h-6" />,
      color: "bg-green-600",
      descripcion: "Medición de avances, feedback y ajustes del plan terapéutico.",
      detalles: [
        "Feedback del joven y la familia",
        "Derivación a talleres cuando convenga",
        "Coordinación con colegio si se autoriza",
        "Cierre planificado y plan de mantenimiento"
      ],
      duracion: "Cada 6-8 sesiones"
    }
  ];

  return (
    <section className="py-8 sm:py-16 bg-gradient-to-b from-green-50/50 to-white" data-testid="proceso-terapeutico-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="proceso-title">
            Mi Proceso Terapéutico
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="proceso-description">
            Un enfoque estructurado y personalizado diseñado específicamente para adolescentes y jóvenes con TEA
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {pasos.map((paso, index) => (
            <div key={paso.numero} className="relative" data-testid={`paso-${paso.numero}`}>
              {/* Línea conectora */}
              {index < pasos.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-full h-12 w-0.5 bg-green-200 transform -translate-x-1/2 z-0" />
              )}
              
              <Card className="relative bg-white border border-green-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow z-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Número y título */}
                  <div className="flex items-center gap-4 lg:min-w-0 lg:flex-1">
                    <div className={`${paso.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                      {paso.numero}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-1">
                        {paso.titulo}
                      </h3>
                      <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                        <Clock className="w-4 h-4" />
                        {paso.duracion}
                      </div>
                    </div>
                  </div>

                  {/* Flecha */}
                  {index < pasos.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center w-8">
                      <ArrowRight className="w-6 h-6 text-green-400" />
                    </div>
                  )}

                  {/* Contenido */}
                  <div className="lg:flex-1 lg:max-w-2xl">
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      {paso.descripcion}
                    </p>
                    
                    <ul className="space-y-2">
                      {paso.detalles.map((detalle, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {detalle}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}