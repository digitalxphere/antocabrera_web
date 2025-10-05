import { Link } from "wouter";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function ModuloDolores() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:py-12" aria-labelledby="dolores-title" data-testid="modulo-dolores-section">
      <header className="mb-8">
        <h2 id="dolores-title" className="text-3xl font-semibold tracking-tight text-foreground" data-testid="dolores-title">
          Lo que viven hoy jóvenes y padres: Apoyo clínico y psicoeducación
        </h2>
      </header>

      <div className="space-y-8">
        <article className="rounded-2xl border border-border bg-card p-8 shadow-sm" data-testid="card-jovenes">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Jóvenes</h3>
              <p className="text-muted-foreground text-justify leading-relaxed">
                Los jóvenes sienten dificultad para encajar, se comparan y autoperciben como insuficientes cuando las redes sociales muestran ideales inexistentes pero influyentes. Existe mucha ansiedad, tensión interna, sobrecarga sensorial y poco autoconocimiento propio de la edad y en donde además están en constante cambio frente a los desafíos de lo que se espera logren en un futuro. Trabajo la identificación, expresión <strong className="text-foreground">regulación emocional</strong>, la <strong className="text-foreground">autoaceptación</strong> y las
                <strong className="text-foreground"> habilidades sociales</strong> desde un espacio seguro y creativo.
              </p>
            </div>
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="overflow-hidden rounded-xl bg-gray-50">
                <OptimizedImage 
                  src="/attached_assets/image_1757122664972.png" 
                  alt="Sesión de terapia con joven, mostrando apoyo familiar"
                  width="400"
                  height="300"
                  className="w-full h-64 object-contain"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-border bg-card p-8 shadow-sm" data-testid="card-padres">
          <div className="flex flex-col lg:flex-row-reverse gap-6 items-start">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Padres</h3>
              <p className="text-muted-foreground text-justify leading-relaxed">
                Esfuerzos constantes por aceptar a sus hijos tal cual son y por otra parte cumplir con las exigencias sociales impuestas. Tienen dudas, angustias y requieren mayor información acerca de las distintas <strong className="text-foreground">condiciones del neurodesarrollo</strong>, <strong className="text-foreground">estilos de personalidad</strong>, intereses, habilidades y potencial de los jóvenes para contribuir a su crecimiento y salud mental.
              </p>
            </div>
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="overflow-hidden rounded-xl bg-gray-50">
                <OptimizedImage 
                  src="/attached_assets/image_1757124841455.png" 
                  alt="Padres en sesión de mindfulness y relajación"
                  width="400"
                  height="300"
                  className="w-full h-64 object-contain"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </article>

      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/contacto">
          <button className="rounded-2xl bg-primary px-8 py-4 text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 font-semibold shadow-lg hover:shadow-xl" data-testid="button-contacto-modulo">
            Solicitar información
          </button>
        </Link>
      </div>
    </section>
  );
}