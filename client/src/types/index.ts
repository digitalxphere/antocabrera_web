export interface ServiceType {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
  cta?: string;
  ctaLink?: string;
  linkedService?: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  role: string;
  content: string;
  service: string;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: number;
  image: string;
  published: boolean;
  createdAt: Date;
}

export interface WorkshopType {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  capacity: number;
  registered: number;
  duration?: string;
  price?: string;
  image: string;
  tags: string[];
}

export interface ContactInfo {
  name: string;
  email?: string;
  phone: string;
  address: string;
  hours: string[];
  locations: string[];
}
