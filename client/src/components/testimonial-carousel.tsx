import { User, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

export function TestimonialCarousel() {
  const iconMap = {
    "Arteterapia": User,
    "Terapia Familiar": Users,
    "Talleres": Heart,
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="testimonial-carousel">
      {testimonials.map((testimonial) => {
        const IconComponent = iconMap[testimonial.service as keyof typeof iconMap] || User;
        
        return (
          <Card key={testimonial.id} className="bg-card border border-border rounded-3xl" data-testid={`testimonial-card-${testimonial.id}`}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-foreground" data-testid={`testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`testimonial-role-${testimonial.id}`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic" data-testid={`testimonial-content-${testimonial.id}`}>
                "{testimonial.content}"
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
