import type { ServiceType, FAQItem, ContactInfo } from "@/types";

export const SITE_CONFIG = {
  name: "Paula Cabrera Fuentes - Psicóloga",
  description: "Psicóloga especialista en adolescentes y jóvenes TEA con talleres de arteterapia en Concón y Viña del Mar",
  url: "https://paulacabrerapsicologa.cl",
  author: "Paula Cabrera Fuentes",
  keywords: [
    "psicóloga Concón",
    "psicóloga Viña del Mar", 
    "psicoterapia adolescentes TEA",
    "talleres arteterapia TEA",
    "psicóloga adolescentes Viña del Mar",
    "arteterapia Concón"
  ],
};

export const CONTACT_INFO: ContactInfo = {
  name: "Paula Cabrera Fuentes",
  phone: "+569 9369 4978",
  address: "Av. Bosques de Montemar 30, Oficina 920, Concón, Valparaíso",
  hours: [
    "Lunes a Viernes: 10:00 - 19:00",
    "Sábados: 10:00 - 14:00"
  ],
  locations: ["Concón", "Viña del Mar"]
};

export const SERVICES: ServiceType[] = [
  {
    id: "individual",
    title: "Consulta individual",
    subtitle: "Psicoterapia",
    description: "Acompañamiento centrado en el vínculo y la confianza con especialización en temáticas de ansiedad, trauma, apego, neurodivergencia, entre otros \nManejo de herramientas de psicodiagnostico  e  intervención con especialidad en jóvenes y manejo de redes.\nEspecialización en modelo MMIDA, IFS, Focalizacion corporal y técnicas integrativas.",
    features: ["Objetivo: autorregulación y habilidades sociales", "Duración: 70 min", "Modalidad: Presencial oficina Bosques de Montemar Concón y online mundial"],
    icon: "user",
    color: "primary",
    cta: "Reservar consulta",
    ctaLink: "/contacto",
    linkedService: "/talleres"
  },
  {
    id: "parents",
    title: "Psicoeducación para padres y cuidadores",
    subtitle: "Estrategias para hogar y colegio",
    description: "Comunicación, acuerdos y coordinación escolar.",
    features: ["Objetivo: favorecer integración sin perder la esencia", "Formato: sesión 60 min, material visual y plan de apoyo", "Modalidad: Concón y online"],
    icon: "users",
    color: "secondary",
    cta: "Agendar sesión para padres",
    ctaLink: "/contacto",
    linkedService: "/talleres"
  },
  {
    id: "workshops",
    title: "Talleres de arteterapia",
    subtitle: "Grupos pequeños por invitación",
    description: "Regulación emocional, comunicación y pertenencia.",
    features: ["Objetivo: practicar habilidades sociales en contexto cuidado", "Formato: 4–6 participantes, apoyos visuales, pausas", "Duración: 90–120 min · Solo presencial en Concón"],
    icon: "palette",
    color: "accent",
    cta: "Consultar por Whatsapp Requisitos",
    ctaLink: "/talleres"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "1",
    question: "¿Cómo puede ayudar la arteterapia a adolescentes con TEA?",
    answer: "La arteterapia proporciona un medio no verbal de expresión que puede ser especialmente beneficioso para adolescentes con TEA. A través del arte, pueden comunicar emociones, desarrollar habilidades de autorregulación y mejorar su bienestar emocional de manera natural y sin presión."
  },
  {
    id: "2",
    question: "¿Cuánto dura el proceso terapéutico?",
    answer: "La duración del proceso varía según las necesidades individuales. Generalmente, recomendamos un mínimo de 12 sesiones para observar cambios significativos, pero cada caso es único y evaluamos el progreso de forma continua."
  },
  {
    id: "3",
    question: "¿Ofrecen sesiones online?",
    answer: "Sí, ofrecemos tanto sesiones presenciales en Concón,  como sesiones online. La modalidad se elige según las necesidades y preferencias de cada familia, manteniendo siempre la calidad del acompañamiento terapéutico."
  },
  {
    id: "4",
    question: "¿Qué edad tienen los participantes de los talleres?",
    answer: "Nuestros talleres están diseñados para adolescentes (16-18 años) y jóvenes (18-30 años). Adaptamos las actividades según el grupo etario y las necesidades específicas de cada participante."
  },
  {
    id: "5",
    question: "¿Cómo puedo saber si mi hijo/a necesita acompañamiento psicológico?",
    answer: "Algunas señales incluyen cambios en el comportamiento, dificultades en la regulación emocional, problemas de comunicación o adaptación social."
  },
  {
    id: "6",
    question: "¿Los talleres requieren experiencia previa en arte?",
    answer: "No es necesaria experiencia previa. El foco está en la expresión y el proceso creativo, no en el resultado artístico. Proporcionamos todos los materiales y guiamos cada actividad paso a paso."
  }
];

export const WHATSAPP_NUMBER = "56993694978";
export const WHATSAPP_MESSAGE = "Hola Paula, me gustaría conocer más sobre tus servicios de psicoterapia.";
