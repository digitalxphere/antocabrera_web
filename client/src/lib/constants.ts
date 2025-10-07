import type { ServiceType, FAQItem, ContactInfo } from "@/types";

export const SITE_CONFIG = {
  name: "Antonia Cabrera - Psicóloga",
  description: "Psicóloga especialista en adolescentes 12-18 años con arteterapia y terapia de juego en Viña del Mar",
  url: "https://antoniacabrerapsicologa.cl",
  author: "Antonia Cabrera",
  keywords: [
    "psicóloga Viña del Mar", 
    "psicóloga adolescentes",
    "arteterapia adolescentes",
    "terapia de juego",
    "psicóloga infantojuvenil Viña del Mar",
    "neurodivergencias TDAH TEA",
    "arteterapia Viña del Mar"
  ],
};

export const CONTACT_INFO: ContactInfo = {
  name: "Antonia Cabrera",
  phone: "+56 9 5306 5780",
  address: "Montenegro 136, Viña del Mar, Valparaíso",
  hours: [
    "Lunes a Viernes: 11:00 - 19:00 hrs"
  ],
  locations: ["Viña del Mar"]
};

export const SERVICES: ServiceType[] = [
  {
    id: "individual",
    title: "Terapia Individual Infantojuvenil",
    subtitle: "Arteterapia y Terapia de Juego",
    description: "Acompañamiento terapéutico utilizando el arte y el juego como vías principales para la comunicación amable y la expresión de emociones. Especialización en adolescentes de 12 a 18 años con enfoque sistémico.",
    features: ["Objetivo: expresión emocional y bienestar integral", "Duración: 60 min", "Modalidad: Presencial en Montenegro 136, Viña del Mar y online"],
    icon: "palette",
    color: "primary",
    cta: "Reservar consulta",
    ctaLink: "/contacto",
    linkedService: "/talleres"
  },
  {
    id: "neurodiversity",
    title: "Acompañamiento Neurodivergencias",
    subtitle: "TDAH, TEA y otras condiciones",
    description: "Soporte especializado para adolescentes neurodivergentes (12-18 años), utilizando estrategias de intervención infantojuvenil adaptadas a cada necesidad particular.",
    features: ["Objetivo: apoyo integral y desarrollo de habilidades", "Formato: sesiones individuales personalizadas", "Modalidad: Presencial en Viña del Mar y online"],
    icon: "brain",
    color: "secondary",
    cta: "Conocer más",
    ctaLink: "/contacto",
    linkedService: "/talleres"
  },
  {
    id: "workshops",
    title: "Talleres de Arteterapia y Juego",
    subtitle: "Grupos terapéuticos",
    description: "Espacios grupales donde el arte y el juego son los puentes para la expresión y conexión. Enfoque sistémico que considera el contexto relacional de cada participante.",
    features: ["Objetivo: expresión creativa y habilidades sociales", "Formato: 4–6 participantes, actividades lúdicas", "Duración: 90 min · Solo presencial en Viña del Mar"],
    icon: "users",
    color: "accent",
    cta: "Consultar disponibilidad",
    ctaLink: "/talleres"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "1",
    question: "¿Desde qué edad atiende Antonia Cabrera?",
    answer: "Atiende a niños desde los 7 años, adolescentes y adultos jóvenes."
  },
  {
    id: "2",
    question: "¿Qué tipo de terapias utiliza?",
    answer: "Su enfoque principal es la Arteterapia y la Terapia de Juego, complementadas con un Enfoque Sistémico."
  },
  {
    id: "3",
    question: "¿Cuál es la diferencia entre Arteterapia y Terapia de Juego?",
    answer: "Arteterapia utiliza la expresión artística como medio para explorar emociones. Terapia de Juego emplea dinámicas lúdicas como vía de comunicación y exploración emocional, especialmente con niños."
  },
  {
    id: "4",
    question: "¿Las sesiones son individuales o familiares?",
    answer: "Principalmente son individuales, pero se incluye a la familia cuando es necesario fortalecer el vínculo y la comunicación."
  },
  {
    id: "5",
    question: "¿Cuál es la duración de una sesión?",
    answer: "Entre 50 y 60 minutos, según la edad y modalidad de la atención."
  },
  {
    id: "6",
    question: "¿La atención es presencial u online?",
    answer: "Se ofrecen ambas modalidades: presencial en Viña del Mar y online para quienes lo necesiten."
  },
  {
    id: "7",
    question: "¿Qué problemas o motivos de consulta son los más comunes?",
    answer: "Ansiedad y estrés escolar, dificultades de autoestima e identidad, trastornos de conducta o desregulación emocional, acompañamiento en neurodivergencias (TDAH, TEA), y apoyo en procesos de duelo, separación o cambios familiares."
  },
  {
    id: "8",
    question: "¿Qué pasa si mi hijo no quiere hablar en terapia?",
    answer: "A través del arte y el juego se genera un espacio seguro donde los niños pueden expresarse sin necesidad de 'dar un discurso'."
  },
  {
    id: "9",
    question: "¿Se entrega retroalimentación a los padres?",
    answer: "Sí. Se realizan sesiones de orientación con los padres para informar avances y entregar herramientas prácticas en casa."
  },
  {
    id: "10",
    question: "¿Cómo saber si mi hijo necesita psicoterapia?",
    answer: "Señales comunes incluyen cambios bruscos de conducta, aislamiento, irritabilidad, dificultades escolares, problemas de sueño o expresión emocional limitada."
  },
  {
    id: "11",
    question: "¿Qué rol cumplen los padres en el proceso terapéutico?",
    answer: "Son parte clave. Se busca que participen activamente, comprendan los desafíos de sus hijos y fortalezcan la comunicación familiar."
  },
  {
    id: "12",
    question: "¿Debo estar presente en todas las sesiones de mi hijo?",
    answer: "No siempre. En la mayoría de los casos los niños y adolescentes asisten solos, y se incluyen a los padres en sesiones específicas de orientación."
  },
  {
    id: "13",
    question: "¿Qué hago si no sé cómo apoyar a mi hijo fuera de la consulta?",
    answer: "Se entregan estrategias psicoeducativas adaptadas a la dinámica familiar para que el acompañamiento continúe en casa."
  },
  {
    id: "14",
    question: "¿La terapia reemplaza la disciplina y los límites en casa?",
    answer: "No. La terapia complementa el rol de los padres, ayudándolos a establecer límites claros y saludables desde una comunicación respetuosa."
  },
  {
    id: "15",
    question: "¿Cómo se agenda una sesión?",
    answer: "Directamente vía WhatsApp o correo electrónico, según los datos de contacto en el sitio."
  },
  {
    id: "16",
    question: "¿Cuál es el valor de una sesión?",
    answer: "El valor se informa al momento de agendar. Se ofrecen tarifas diferenciadas para sesiones individuales y familiares."
  },
  {
    id: "17",
    question: "¿Se puede reembolsar por isapre o seguro complementario?",
    answer: "Sí, se entregan boletas de prestación psicológica que pueden presentarse en las isapres y seguros."
  },
  {
    id: "18",
    question: "¿Qué ocurre si necesito cancelar o reagendar?",
    answer: "Debe avisarse con al menos 24 horas de anticipación para reagendar sin costo."
  },
  {
    id: "19",
    question: "¿Qué pasa en la primera sesión?",
    answer: "Se realiza una evaluación inicial para conocer al paciente, comprender el motivo de consulta y definir los objetivos terapéuticos."
  },
  {
    id: "20",
    question: "¿La información de las sesiones es confidencial?",
    answer: "Sí, toda la información se maneja bajo confidencialidad profesional, salvo en casos donde la ley exige resguardar la integridad del paciente."
  }
];

export const WHATSAPP_NUMBER = "56953065780";
export const WHATSAPP_MESSAGE = "Hola Antonia, me gustaría conocer tu disponibilidad para el día..";
