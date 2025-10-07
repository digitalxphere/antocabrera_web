import { BlogCard } from "@/components/blog-card";
import { SEOHead } from "@/components/seo-head";
import { blogArticles } from "@/data/blog-articles";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Blog Psicóloga en Viña del Mar | Adolescencia, TEA y Neurodiversidad - Antonia Cabrera"
        description="Blog de Antonia Cabrera, psicóloga especialista en adolescentes TEA y neurodiversidad en Viña del Mar. Reflexiones sobre arteterapia, TDAH y acompañamiento psicológico juvenil."
        canonical="https://antoniacabrerapsicologa.cl/blog"
      />
      
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors" data-testid="link-back-home">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Blog: Reflexiones sobre adolescencia y acompañamiento
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Comparto reflexiones y conocimientos sobre el trabajo con adolescentes, el acompañamiento familiar y los procesos de desarrollo juvenil.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {blogArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}