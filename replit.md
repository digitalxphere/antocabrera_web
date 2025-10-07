# Overview

This is a modern, minimalist psychologist website for Antonia Cabrera (Antonia Paz Cabrera), a psychologist from Universidad de Valparaíso specializing in adolescent intervention (12-18 years) using Art Therapy, Play Therapy, Systemic Approach, and Narrative Therapy. The site serves Spanish-speaking clients in Viña del Mar, Chile. Provides support for neurodivergent individuals (ADHD, ASD) and areas including anxiety, depression, gender violence recovery, self-esteem, and authentic identity building. Practice located at Montenegro 136, Viña del Mar. Contact: WhatsApp +56 9 5306 5780, email ps.antoniapaz@gmail.com, Instagram @ps.antoniapaz.

The application provides a professional online presence with service information, workshop registration, contact forms, blog functionality, and appointment scheduling integration. It's designed with accessibility, SEO optimization, and mobile responsiveness as core priorities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing with clean URLs
- **Styling**: Tailwind CSS with custom design system using warm earth tones
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **State Management**: React Query (TanStack Query) for server state management and API interactions
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Custom scroll animations and transitions for smooth user experience

## Backend Architecture
- **Server**: Express.js with TypeScript for type safety
- **Development**: Vite middleware integration for hot module replacement in development
- **API Design**: RESTful endpoints for contact submissions, workshop registrations, and content management
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **Storage**: Abstracted storage interface with in-memory implementation (ready for database integration)

## Data Storage Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema**: Centralized schema definitions in shared directory for contact submissions, workshops, blog posts, and workshop registrations
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Current State**: Memory storage implementation for development, with database schema ready for production deployment

## Design System
- **Typography**: Inter font family for modern, readable text
- **Color Palette**: Warm earth tones (oranges, browns, sage green) reflecting therapeutic and calming aesthetic
- **Component Design**: Glass morphism effects, rounded corners (16px radius), and soft shadows
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Accessibility**: WCAG 2.2 AA compliance with proper ARIA labels, keyboard navigation, and color contrast

## SEO and Performance Optimization
- **Meta Management**: Dynamic SEO head component for page-specific metadata
- **Structured Data**: Schema.org markup for local business, services, and content
- **LLM/AI Indexing**: Comprehensive structured JSON data for AI assistants (ChatGPT, Perplexity, etc.)
  - **Endpoint**: `/api/site-data` - Dynamic API endpoint serving complete site information
  - **Static File**: `/site-data.json` - Public JSON file with all practice information
  - **Content**: Practice details, services, workshops, blog articles, FAQs, testimonials, therapeutic approaches, and target conditions
  - **Format**: Schema.org compatible JSON-LD for semantic understanding
- **Canonical URLs**: Proper canonical tags on all pages to prevent duplicate content indexing
- **Internationalization**: Spanish (Chile) locale with proper hreflang attributes
- **Performance**: Optimized images (WebP format with 80% quality), lazy loading, and minimal bundle size
- **PWA Features**: Web app manifest for mobile installation capabilities

## Content Management
- **Blog System**: Article management with categories, tags, and reading time estimation
- **Workshop Management**: Event scheduling, capacity management, and registration tracking
- **Static Content**: Professional service descriptions, testimonials, and FAQ sections
- **Legal Pages**: Privacy policy and terms of service with proper legal disclaimers
- **Search Functionality**: Real-time search across blog articles and workshops by title, content, category, date, and location. Accessible via ⌘K/Ctrl+K keyboard shortcut and navbar button

# External Dependencies

## Database and Storage
- **Neon Database**: Serverless PostgreSQL for production data storage
- **Drizzle ORM**: Type-safe database operations and schema management
- **Connect PG Simple**: PostgreSQL session store for user sessions

## UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Consistent icon library with healthcare and therapy-themed icons
- **Class Variance Authority**: Type-safe component variant management

## Forms and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Runtime type validation for forms and API data
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

## Communication Integrations
- **WhatsApp Business**: Direct messaging integration for client communication
- **Calendly/Cal.com**: External appointment scheduling (integration ready)
- **Email Services**: Contact form submission handling (Nodemailer/Resend integration ready)
- **Google Maps**: Location integration for clinic addresses

## Development and Build Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Fast JavaScript bundling for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **Date-fns**: Date manipulation and formatting for workshop scheduling

## Analytics and Monitoring
- **Google Analytics**: Traffic and user behavior tracking (integration ready)
- **Replit Development Tools**: Development environment optimizations and error tracking
- **Performance Monitoring**: Core Web Vitals tracking and optimization