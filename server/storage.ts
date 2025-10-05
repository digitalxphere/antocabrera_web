import { 
  type ContactSubmission, 
  type InsertContactSubmission,
  type Workshop,
  type WorkshopRegistration,
  type InsertWorkshopRegistration,
  type BlogPost,
  type InsertBlogPost
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Contact submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Workshops
  getActiveWorkshops(): Promise<Workshop[]>;
  getWorkshop(id: string): Promise<Workshop | undefined>;
  createWorkshopRegistration(registration: InsertWorkshopRegistration): Promise<WorkshopRegistration>;
  incrementWorkshopRegistration(workshopId: string): Promise<void>;
  
  // Blog
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<string, ContactSubmission>;
  private workshops: Map<string, Workshop>;
  private workshopRegistrations: Map<string, WorkshopRegistration>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.contactSubmissions = new Map();
    this.workshops = new Map();
    this.workshopRegistrations = new Map();
    this.blogPosts = new Map();
    
    // Initialize with sample workshops
    this.initializeWorkshops();
    this.initializeBlogPosts();
  }

  private initializeWorkshops() {
    const sampleWorkshops: Workshop[] = [
      {
        id: randomUUID(),
        title: "Expresión Emocional Creativa",
        description: "Taller grupal para desarrollar la expresión emocional y habilidades de comunicación a través del arte.",
        date: new Date("2024-10-15T16:00:00"),
        location: "Consulta Concón",
        capacity: 6,
        registered: 3,
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Habilidades Sociales Artísticas",
        description: "Desarrollo de habilidades sociales a través de proyectos artísticos colaborativos y expresión creativa.",
        date: new Date("2024-10-17T15:30:00"),
        location: "Modalidad Online + Presencial",
        capacity: 8,
        registered: 2,
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Mindfulness y Regulación",
        description: "Técnicas de mindfulness y autorregulación emocional combinadas con expresión artística.",
        date: new Date("2024-10-19T10:00:00"),
        location: "Consulta Viña del Mar",
        capacity: 6,
        registered: 1,
        isActive: true,
        createdAt: new Date(),
      },
    ];

    sampleWorkshops.forEach(workshop => {
      this.workshops.set(workshop.id, workshop);
    });
  }

  private initializeBlogPosts() {
    const samplePosts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "Arteterapia: cómo ayuda a adolescentes TEA",
        slug: "arteterapia-como-ayuda-adolescentes-tea",
        excerpt: "Descubre los beneficios de la arteterapia para jóvenes con TEA y cómo puede mejorar su expresión emocional...",
        content: "La arteterapia es una modalidad terapéutica que utiliza el proceso creativo como medio de comunicación...",
        category: "ARTETERAPIA",
        readTime: 5,
        published: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Guía para padres TEA: ansiedad y sobrecarga sensorial",
        slug: "guia-padres-tea-ansiedad-sobrecarga-sensorial",
        excerpt: "Estrategias prácticas para ayudar a tu hijo adolescente a manejar la ansiedad y los estímulos sensoriales...",
        content: "La sobrecarga sensorial es una experiencia común en adolescentes con TEA...",
        category: "GUÍA PARA PADRES",
        readTime: 8,
        published: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Psicoterapia online vs. presencial para jóvenes",
        slug: "psicoterapia-online-vs-presencial-jovenes",
        excerpt: "Conoce las ventajas de cada modalidad y cómo elegir la mejor opción para tu proceso terapéutico...",
        content: "La elección entre terapia online y presencial depende de varios factores...",
        category: "MODALIDADES",
        readTime: 6,
        published: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    samplePosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  // Contact submissions
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      phone: insertSubmission.phone || null,
      createdAt: new Date(),
      processed: false,
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  // Workshops
  async getActiveWorkshops(): Promise<Workshop[]> {
    return Array.from(this.workshops.values()).filter(w => w.isActive);
  }

  async getWorkshop(id: string): Promise<Workshop | undefined> {
    return this.workshops.get(id);
  }

  async createWorkshopRegistration(insertRegistration: InsertWorkshopRegistration): Promise<WorkshopRegistration> {
    const id = randomUUID();
    const registration: WorkshopRegistration = {
      ...insertRegistration,
      id,
      phone: insertRegistration.phone || null,
      age: insertRegistration.age || null,
      parentName: insertRegistration.parentName || null,
      parentEmail: insertRegistration.parentEmail || null,
      createdAt: new Date(),
    };
    this.workshopRegistrations.set(id, registration);
    return registration;
  }

  async incrementWorkshopRegistration(workshopId: string): Promise<void> {
    const workshop = this.workshops.get(workshopId);
    if (workshop) {
      workshop.registered += 1;
      this.workshops.set(workshopId, workshop);
    }
  }

  // Blog
  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).filter(p => p.published);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(p => p.slug === slug);
  }
}

export const storage = new MemStorage();
