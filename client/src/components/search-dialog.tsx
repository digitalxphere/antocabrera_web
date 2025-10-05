import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Search, FileText, Calendar, MapPin, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogArticles } from "@/data/blog-articles";
import { workshopsData } from "@/data/workshops";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "blog" | "taller";
  url: string;
  date?: string;
  location?: string;
  category?: string;
}

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Buscar en artículos del blog
    blogArticles.forEach((article) => {
      const articleDate = format(article.createdAt, "d 'de' MMMM, yyyy", { locale: es });
      const matchTitle = article.title.toLowerCase().includes(query);
      const matchExcerpt = article.excerpt.toLowerCase().includes(query);
      const matchCategory = article.category.toLowerCase().includes(query);
      const matchDate = articleDate.toLowerCase().includes(query);
      const matchContent = article.content.toLowerCase().includes(query);
      
      if (matchTitle || matchExcerpt || matchCategory || matchDate || matchContent) {
        searchResults.push({
          id: article.id,
          title: article.title,
          description: article.excerpt,
          type: "blog",
          url: `/blog/${article.slug}`,
          date: articleDate,
          category: article.category
        });
      }
    });

    // Buscar en talleres
    workshopsData.forEach((workshop) => {
      const workshopDate = format(workshop.date, "d 'de' MMMM, yyyy", { locale: es });
      const matchTitle = workshop.title.toLowerCase().includes(query);
      const matchDescription = workshop.description.toLowerCase().includes(query);
      const matchLocation = workshop.location.toLowerCase().includes(query);
      const matchDate = workshopDate.toLowerCase().includes(query);
      const matchTags = workshop.tags.some(tag => tag.toLowerCase().includes(query));
      
      if (matchTitle || matchDescription || matchLocation || matchDate || matchTags) {
        searchResults.push({
          id: workshop.id,
          title: workshop.title,
          description: workshop.description,
          type: "taller",
          url: "/talleres",
          date: workshopDate,
          location: workshop.location
        });
      }
    });

    setResults(searchResults);
  }, [searchQuery]);

  const handleResultClick = (url: string) => {
    setLocation(url);
    onOpenChange(false);
    setSearchQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="sr-only">Buscar contenido</DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar artículos, talleres, ubicaciones..."
              className="pl-10 pr-10 h-12 text-base"
              autoFocus
              data-testid="input-search"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Presiona <kbd className="px-1.5 py-0.5 text-xs border rounded bg-muted">⌘K</kbd> o <kbd className="px-1.5 py-0.5 text-xs border rounded bg-muted">Ctrl+K</kbd> para abrir la búsqueda
          </p>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[60vh] px-6 py-4">
          {!searchQuery && (
            <div className="text-center py-12 text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-sm">Comienza a escribir para buscar artículos y talleres</p>
            </div>
          )}

          {searchQuery && results.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-sm">No se encontraron resultados para "{searchQuery}"</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-4">
                {results.length} {results.length === 1 ? 'resultado' : 'resultados'}
              </p>
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result.url)}
                  className="w-full text-left p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors group"
                  data-testid={`search-result-${result.id}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {result.type === "blog" ? (
                        <FileText className="h-4 w-4" />
                      ) : (
                        <Calendar className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {result.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                        {result.category && (
                          <span className="px-2 py-1 rounded-full bg-accent/20 text-accent-foreground">
                            {result.category}
                          </span>
                        )}
                        {result.date && (
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {result.date}
                          </span>
                        )}
                        {result.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {result.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
