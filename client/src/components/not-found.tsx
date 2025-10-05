import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Página no encontrada
        </h2>
        <p className="text-muted-foreground mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              <Home className="w-4 h-4" />
              Volver al inicio
            </button>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border border-border bg-background text-foreground px-6 py-3 rounded-xl font-semibold hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
        </div>
      </div>
    </div>
  );
}