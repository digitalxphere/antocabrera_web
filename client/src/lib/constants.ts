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
    "Lunes a Viernes: 10:00 - 19:00",
    "Sábados: 10:00 - 14:00"
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
    question: "¿Qué es la terapia de juego y cómo ayuda a los niños?",
    answer: "La terapia de juego es una vía principal para la comunicación amable y la expresión de emociones, especialmente con niños. A través del juego, los niños pueden expresar lo que sienten de manera natural y segura, desarrollando habilidades emocionales y sociales."
  },
  {
    id: "2",
    question: "¿Qué edades atiende?",
    answer: "Me especializo en el trabajo con adolescentes de 12 a 18 años. Esta etapa tiene características únicas que requieren un acompañamiento especializado y respetuoso de su proceso de desarrollo."
  },
  {
    id: "3",
    question: "¿Qué es el enfoque sistémico?",
    answer: "El enfoque sistémico permite entender a la persona dentro de su contexto relacional (familia, escuela, comunidad). No solo trabajamos con el niño o joven, sino que consideramos todo su entorno para un acompañamiento más completo."
  },
  {
    id: "4",
    question: "¿Cómo ayuda la arteterapia a niños neurodivergentes?",
    answer: "El arte y el juego son puentes naturales para la expresión, especialmente beneficiosos para niños con TDAH, TEA y otras neurodivergencias. Permiten comunicar emociones sin la presión de las palabras, en un ambiente seguro y creativo."
  },
  {
    id: "5",
    question: "¿Ofrecen sesiones online?",
    answer: "Sí, ofrecemos tanto sesiones presenciales en Viña del Mar como sesiones online. La modalidad se elige según las necesidades y preferencias de cada familia."
  },
  {
    id: "6",
    question: "¿Los talleres requieren experiencia previa en arte?",
    answer: "No es necesaria ninguna experiencia previa. El foco está en la expresión y el proceso creativo, no en el resultado artístico. Cada adolescente participa a su propio ritmo y manera."
  }
];

export const WHATSAPP_NUMBER = "56953065780";
export const WHATSAPP_MESSAGE = "Hola Antonia, me gustaría conocer más sobre tus servicios de arteterapia y terapia de juego.";
