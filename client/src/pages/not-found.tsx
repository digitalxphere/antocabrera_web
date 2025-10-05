import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";

export default function NotFound() {
  return (
    <>
      <SEOHead 
        title="Página no encontrada - Error 404 | Paula Cabrera Psicóloga"
        description="La página que buscas no existe. Regresa al inicio para encontrar información sobre servicios de psicoterapia para adolescentes y jóvenes en Concón y Viña del Mar."
      />
      
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-2xl mx-4 text-center">
          <Card className="glass-card shadow-xl">
            <CardContent className="p-12">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-12 w-12 text-primary" />
                </div>
                
                <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Página no encontrada
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Lo sentimos, la página que estás buscando no existe o ha sido movida. 
                  Te invitamos a explorar nuestros servicios de psicoterapia para adolescentes y jóvenes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all transform hover:-translate-y-1">
                    <Home className="w-4 h-4 mr-2" />
                    Ir al Inicio
                  </Button>
                </Link>
                
                <Link href="/servicios">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-xl font-semibold transition-all">
                    Ver Servicios
                  </Button>
                </Link>
                
                <Link href="/contacto">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-xl font-semibold transition-all">
                    Contacto
                  </Button>
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Enlaces útiles</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <Link href="/sobre-paula-cabrera-fuentes-psicologa" className="text-primary hover:text-primary/80 transition-colors">
                    Sobre Paula
                  </Link>
                  <Link href="/talleres" className="text-primary hover:text-primary/80 transition-colors">
                    Talleres de Arteterapia
                  </Link>
                  <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors">
                    Blog
                  </Link>
                  <Link href="/preguntas-frecuentes" className="text-primary hover:text-primary/80 transition-colors">
                    Preguntas Frecuentes
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
