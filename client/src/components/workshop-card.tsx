import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import type { WorkshopType } from "@/types";

interface WorkshopCardProps {
  workshop: WorkshopType;
  onRegister: (workshopId: string) => void;
}

export function WorkshopCard({ workshop, onRegister }: WorkshopCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('es-CL', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const isFull = workshop.registered >= workshop.capacity;

  return (
    <Card className="glass-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" data-testid={`workshop-card-${workshop.id}`}>
      <OptimizedImage 
        src={workshop.image} 
        alt={workshop.title}
        width="400"
        height="200"
        className="w-full h-48 object-contain bg-gray-50"
        data-testid={`workshop-image-${workshop.id}`}
        objectFit="contain"
      />
      
      <CardContent className="p-8">
        <div className="mb-4">
          {workshop.tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="mr-2 mb-2"
              data-testid={`workshop-tag-${workshop.id}-${index}`}
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`workshop-title-${workshop.id}`}>
          {workshop.title}
        </h3>
        
        <p className="text-muted-foreground mb-6" data-testid={`workshop-description-${workshop.id}`}>
          {workshop.description}
        </p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm" data-testid={`workshop-date-${workshop.id}`}>
            <Calendar className="w-4 h-4 text-primary" />
            <span>{formatDate(workshop.date)}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm" data-testid={`workshop-location-${workshop.id}`}>
            <MapPin className="w-4 h-4 text-primary" />
            <span>{workshop.location}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm" data-testid={`workshop-capacity-${workshop.id}`}>
            <Users className="w-4 h-4 text-primary" />
            <span>
              {workshop.registered}/{workshop.capacity} participantes
              {isFull && <span className="text-destructive ml-2">(Completo)</span>}
            </span>
          </div>
          
          {workshop.duration && (
            <div className="flex items-center gap-3 text-sm" data-testid={`workshop-duration-${workshop.id}`}>
              <Clock className="w-4 h-4 text-primary" />
              <span>{workshop.duration}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          {workshop.price && (
            <div className="text-lg font-semibold text-primary" data-testid={`workshop-price-${workshop.id}`}>
              {workshop.price}
            </div>
          )}
          
          <Button
            onClick={() => onRegister(workshop.id)}
            disabled={isFull}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-testid={`button-register-workshop-${workshop.id}`}
          >
            {isFull ? "Taller Completo" : "Inscribirse"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
