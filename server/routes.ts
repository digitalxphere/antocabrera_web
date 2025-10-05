import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertWorkshopRegistrationSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // TODO: Send email notification using Nodemailer/Resend
      // await sendContactEmail(submission);
      
      res.json({ success: true, id: submission.id });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          success: false, 
          error: "Datos de formulario inválidos",
          details: error.errors 
        });
      }
      res.status(500).json({ 
        success: false, 
        error: "Error interno del servidor" 
      });
    }
  });

  // Workshop registration
  app.post("/api/workshops/:id/register", async (req, res) => {
    try {
      const workshopId = req.params.id;
      const workshop = await storage.getWorkshop(workshopId);
      
      if (!workshop) {
        return res.status(404).json({ 
          success: false, 
          error: "Taller no encontrado" 
        });
      }

      if (workshop.registered >= workshop.capacity) {
        return res.status(400).json({ 
          success: false, 
          error: "Taller completo" 
        });
      }

      const validatedData = insertWorkshopRegistrationSchema.parse({
        ...req.body,
        workshopId
      });
      
      const registration = await storage.createWorkshopRegistration(validatedData);
      await storage.incrementWorkshopRegistration(workshopId);
      
      // TODO: Send confirmation email
      // await sendWorkshopConfirmationEmail(registration, workshop);
      
      res.json({ success: true, id: registration.id });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          success: false, 
          error: "Datos de registro inválidos",
          details: error.errors 
        });
      }
      res.status(500).json({ 
        success: false, 
        error: "Error interno del servidor" 
      });
    }
  });

  // Get workshops
  app.get("/api/workshops", async (req, res) => {
    try {
      const workshops = await storage.getActiveWorkshops();
      res.json(workshops);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Error al obtener talleres" 
      });
    }
  });

  // Get blog posts
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getPublishedBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Error al obtener artículos" 
      });
    }
  });

  // Get single blog post
  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ 
          success: false, 
          error: "Artículo no encontrado" 
        });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Error al obtener artículo" 
      });
    }
  });

  // Get services data for SEO and search engines (Schema.org optimized)
  app.get("/api/services", async (req, res) => {
    try {
      const fs = await import('fs/promises');
      const path = await import('path');
      const servicesPath = path.join(process.cwd(), 'client', 'public', 'services.json');
      const servicesData = await fs.readFile(servicesPath, 'utf-8');
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(servicesData);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Error al obtener datos de servicios" 
      });
    }
  });

  // Get structured site data for LLMs and AI indexing
  app.get("/api/site-data", async (req, res) => {
    try {
      const fs = await import('fs/promises');
      const path = await import('path');
      const siteDataPath = path.join(process.cwd(), 'client', 'public', 'site-data.json');
      const siteData = await fs.readFile(siteDataPath, 'utf-8');
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(siteData);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Error al obtener datos estructurados del sitio" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
