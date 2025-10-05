import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "wouter";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const [location] = useLocation();

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8" data-testid="breadcrumbs">
      <Link href="/" className="flex items-center hover:text-primary transition-colors" data-testid="breadcrumb-home">
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4" />
          {index === items.length - 1 ? (
            <span className="text-foreground font-medium" data-testid={`breadcrumb-current-${index}`}>
              {item.label}
            </span>
          ) : (
            <Link 
              href={item.href} 
              className="hover:text-primary transition-colors"
              data-testid={`breadcrumb-link-${index}`}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
