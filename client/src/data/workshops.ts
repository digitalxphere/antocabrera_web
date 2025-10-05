import type { WorkshopType } from "@/types";

export const workshopsData: WorkshopType[] = [
  {
    id: "1",
    title: "Expresión Emocional Creativa",
    description: "Taller grupal para desarrollar la expresión emocional y habilidades de comunicación a través del arte.",
    date: new Date("2024-10-15T16:00:00"),
    location: "Consulta Concón",
    capacity: 6,
    registered: 3,
    duration: "2 horas",
    price: "$25.000",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    tags: ["Próximo taller", "Presencial"]
  },
  {
    id: "2",
    title: "Habilidades Sociales Artísticas",
    description: "Desarrollo de habilidades sociales a través de proyectos artísticos colaborativos y expresión creativa.",
    date: new Date("2024-10-17T15:30:00"),
    location: "Modalidad Online + Presencial",
    capacity: 8,
    registered: 2,
    duration: "2.5 horas",
    price: "$30.000",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    tags: ["Modalidad híbrida", "Colaborativo"]
  },
  {
    id: "3",
    title: "Mindfulness y Regulación",
    description: "Técnicas de mindfulness y autorregulación emocional combinadas con expresión artística.",
    date: new Date("2024-10-19T10:00:00"),
    location: "Consulta Viña del Mar",
    capacity: 6,
    registered: 1,
    duration: "4 horas",
    price: "$45.000",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    tags: ["Taller intensivo", "Mindfulness"]
  }
];
