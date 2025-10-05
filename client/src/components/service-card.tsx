import { CheckCircle, LucideIcon, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import type { ServiceType } from "@/types";
import * as Icons from "lucide-react";


interface ServiceCardProps {
  service: ServiceType;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as LucideIcon;

  const colorClasses = {
    primary: "bg-brand/10 text-brand-dark",
    secondary: "bg-brand-soft/10 text-brand-dark", 
    accent: "bg-accent-yellow/10 text-brand-dark"
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden" data-testid={`service-card-${service.id}`}>

      
      <CardContent className="p-8">        
        <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`service-title-${service.id}`}>
          {service.title}
        </h3>
        
        {service.subtitle && (
          <h4 className="text-lg font-medium text-brand mb-4" data-testid={`service-subtitle-${service.id}`}>
            {service.subtitle}
          </h4>
        )}
        
        <p className="text-muted-foreground mb-6" data-testid={`service-description-${service.id}`}>
          {service.description}
        </p>
        
        <ul className="space-y-2 text-sm text-muted-foreground mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2" data-testid={`service-feature-${service.id}-${index}`}>
              <CheckCircle className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {service.cta && service.ctaLink && (
          <Link href={service.ctaLink}>
            <Button 
              className="w-full mt-4" 
              variant={service.id === "workshops" ? "default" : "outline"}
              data-testid={`service-cta-${service.id}`}
            >
              {service.cta}
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
