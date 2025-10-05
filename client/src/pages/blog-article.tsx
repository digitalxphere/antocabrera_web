import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { blogArticles } from "@/data/blog-articles";
export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Artículo no encontrado
          </h2>
          <p className="text-muted-foreground mb-8">
            El artículo que buscas no existe.
          </p>
          <Link href="/blog" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": "Paula Cabrera Fuentes",
      "url": "https://paulacabrerapsicologa.cl/sobre-paula-cabrera-fuentes-psicologa"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Paula Cabrera Fuentes - Psicóloga",
      "logo": {
        "@type": "ImageObject",
        "url": "/attached_assets/Paula_cabrera_psicologa_logo_1756657755055.webp"
      }
    },
    "datePublished": article.createdAt.toISOString(),
    "dateModified": article.createdAt.toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://paulacabrerapsicologa.cl/blog/${article.slug}`
    },
    "keywords": "psicóloga Viña del Mar, psicóloga Concón, adolescentes, TEA, neurodiversidad, arteterapia, desarrollo adolescente",
    "articleSection": article.category,
    "wordCount": article.content.split(' ').length
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${article.title} - Blog Paula Cabrera Fuentes | Psicóloga Viña del Mar`}
        description={article.excerpt}
        ogImage={article.image}
        structuredData={structuredData}
        canonical={`https://paulacabrerapsicologa.cl/blog/${article.slug}`}
      />
      
      {/* Header */}
      <div className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors" data-testid="link-back-blog">
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>
          
          <div className="flex items-center gap-4 text-white/80 text-sm mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(article.createdAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min de lectura</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold leading-tight" data-testid="blog-article-title">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Image - 2 columns width */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-md">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-auto object-contain rounded-2xl shadow-lg"
              data-testid="blog-article-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none" data-testid="blog-article-content">
          {article.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              const heading = paragraph.replace('## ', '');
              return (
                <h2 key={index} className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  {heading}
                </h2>
              );
            }
            
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              const heading = paragraph.replace(/\*\*/g, '');
              return (
                <h2 key={index} className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  {heading}
                </h2>
              );
            }
            
            return (
              <p key={index} className="text-foreground leading-relaxed mb-6 text-justify">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Author */}
        <div className="border-t border-border pt-6 mt-8">
          <p className="text-sm text-muted-foreground">
            Autora: Paula Cabrera Fuentes
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-card border border-border rounded-2xl p-6 mt-8">
          <h3 className="text-xl font-semibold mb-3">¿Te interesa conocer más sobre mi trabajo?</h3>
          <p className="text-muted-foreground mb-4">
            Si sientes que tu adolescente podría beneficiarse de un espacio terapéutico especializado, o si buscas orientación como padre o madre, estoy aquí para acompañarlos en este proceso.
          </p>
          <a 
            href={`https://wa.me/56993694978?text=${encodeURIComponent('Hola Paula, me interesa conocer más sobre tus servicios de psicoterapia para adolescentes.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            data-testid="button-contact-blog"
          >
            Contactar por WhatsApp
          </a>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Otros artículos que te pueden interesar</h3>
          <div className="grid gap-6">
            {blogArticles.filter(a => a.id !== article.id).map(relatedArticle => (
              <div key={relatedArticle.id} className="border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
                <Link href={`/blog/${relatedArticle.slug}`}>
                  <div className="flex gap-4">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title}
                      className="w-24 h-24 object-contain rounded-xl flex-shrink-0 bg-gray-50"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}