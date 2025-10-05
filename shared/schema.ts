import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  serviceType: text("service_type").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  processed: boolean("processed").default(false).notNull(),
});

export const workshops = pgTable("workshops", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: timestamp("date").notNull(),
  location: text("location").notNull(),
  capacity: integer("capacity").notNull(),
  registered: integer("registered").default(0).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const workshopRegistrations = pgTable("workshop_registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  workshopId: varchar("workshop_id").references(() => workshops.id).notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  age: integer("age"),
  parentName: text("parent_name"),
  parentEmail: text("parent_email"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  readTime: integer("read_time").notNull(),
  published: boolean("published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Insert schemas
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
  processed: true,
});

export const insertWorkshopRegistrationSchema = createInsertSchema(workshopRegistrations).omit({
  id: true,
  createdAt: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Types
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;

export type Workshop = typeof workshops.$inferSelect;
export type WorkshopRegistration = typeof workshopRegistrations.$inferSelect;
export type InsertWorkshopRegistration = z.infer<typeof insertWorkshopRegistrationSchema>;

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
