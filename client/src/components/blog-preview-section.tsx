import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogArticles } from "@/data/blog-articles";

export function BlogPreviewSection() {
  // Get both blog articles
  const articles = blogArticles.slice(0, 2); // Show first 2 articles

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-6" data-testid="blog-section">
      <header className="mb-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-3">
          Últimas reflexiones
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comparto reflexiones y experiencias sobre el trabajo terapéutico con adolescentes y jóvenes
        </p>
      </header>

      <div className="max-w-6xl mx-auto">
        {/* Horizontal cards for two articles */}
        <div className="space-y-6 mb-6">
          {articles.map((article, index) => (
            <article key={article.id} className={`group bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300`} data-testid={`blog-card-${index + 1}`}>
              <Link href={`/blog/${article.slug}`} className="block">
                <div className={`flex flex-col ${index === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 items-start`}>
                  <div className="flex-1">
                    {/* Meta information */}
                    <div className="flex items-center gap-3 text-muted-foreground text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.createdAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} min</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 text-justify leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Author and Read more */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src="/attached_assets/Paula_cabrera_psicologa_logo_1756657755055.webp" 
                          alt="Paula Cabrera" 
                          className="w-8 h-8 object-contain rounded-full bg-gray-50"
                          loading="lazy"
                          decoding="async"
                        />
                        <div>
                          <p className="text-sm font-medium text-foreground">Paula Cabrera</p>
                          <p className="text-sm text-muted-foreground">Psicóloga</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                        <span>Leer más</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-full lg:w-80 flex-shrink-0">
                    <div className="relative overflow-hidden rounded-xl bg-gray-50">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                        data-testid={`blog-card-image-${index + 1}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Link to see all articles and related services */}
        <div className="text-center space-y-4">
          <Link href="/blog">
            <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors" data-testid="button-view-all-blog">
              Ver todos los artículos
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          
          {/* Enlaces internos relacionados */}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Servicios relacionados:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/servicios#individual" className="text-xs px-3 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">
                Psicoterapia Individual
              </Link>
              <Link href="/talleres" className="text-xs px-3 py-2 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-colors">
                Talleres de Arteterapia
              </Link>
              <Link href="/contacto" className="text-xs px-3 py-2 bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}