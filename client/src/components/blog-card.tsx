import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Link } from "wouter";
import type { BlogArticle } from "@/types";

interface BlogCardProps {
  article: BlogArticle;
}

export function BlogCard({ article }: BlogCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden" data-testid={`blog-card-${article.slug}`}>
      <Link href={`/blog/${article.slug}`}>
        <OptimizedImage 
          src={article.image} 
          alt={article.title}
          width="400"
          height="200"
          className="w-full h-48 object-contain bg-muted group-hover:scale-105 transition-transform duration-300"
          data-testid={`blog-image-${article.slug}`}
          objectFit="contain"
        />
      </Link>
      
      <CardContent className="p-6">
        <Badge variant="secondary" className="mb-2" data-testid={`blog-category-${article.slug}`}>
          {article.category}
        </Badge>
        
        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors" data-testid={`blog-title-${article.slug}`}>
            {article.title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground mb-4" data-testid={`blog-excerpt-${article.slug}`}>
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground" data-testid={`blog-read-time-${article.slug}`}>
            {article.readTime} min de lectura
          </span>
          <Link href={`/blog/${article.slug}`}>
            <Button variant="ghost" className="text-primary hover:text-primary/80 font-medium p-0" data-testid={`blog-read-more-${article.slug}`}>
              Leer más →
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
