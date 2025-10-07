import { Link } from "wouter";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function ModuloDolores() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:py-12" aria-labelledby="dolores-title" data-testid="modulo-dolores-section">
      <header className="mb-8">
        <h2 id="dolores-title" className="text-3xl font-semibold tracking-tight text-foreground" data-testid="dolores-title">
          Lo que viven hoy niños, adolescentes y familias: Apoyo clínico y psicoeducación
        </h2>
      </header>

      <div className="space-y-8">
        <article className="rounded-2xl border border-border bg-card p-8 shadow-sm" data-testid="card-ninos-adolescentes">
          <div className="flex flex-col gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Niños y adolescentes</h3>
              <div className="text-muted-foreground text-justify leading-relaxed space-y-4">
                <p>
                  En la infancia y adolescencia surgen desafíos ligados al desarrollo emocional y social: dificultad para expresar lo que sienten, inseguridad, rabia, ansiedad y cambios propios de la etapa. Muchos niños y jóvenes enfrentan sobrecarga sensorial, presión académica, comparaciones constantes y dificultades para encontrar un espacio donde se sientan validados y comprendidos.
                </p>
                <p>
                  En este proceso, el arte y el juego se transforman en puentes que permiten comunicar lo que no siempre puede decirse con palabras. Desde un enfoque terapéutico seguro y creativo, trabajo en la <strong className="text-foreground">expresión y regulación emocional</strong>, el fortalecimiento de la <strong className="text-foreground">autoestima</strong>, la <strong className="text-foreground">autoaceptación</strong> y el desarrollo de <strong className="text-foreground">habilidades sociales</strong>, siempre considerando el contexto familiar y escolar que los rodea.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-border bg-card p-8 shadow-sm" data-testid="card-padres-familias">
          <div className="flex flex-col gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Padres y Familias: Acompañamiento en el proceso de sus hijos</h3>
              <div className="text-muted-foreground text-justify leading-relaxed space-y-4">
                <p>
                  La etapa infanto-juvenil no solo trae cambios en los niños y adolescentes, también impacta a los padres que muchas veces sienten incertidumbre, frustración o distancia emocional frente a lo que viven sus hijos. La comunicación puede volverse difícil, aparecen dudas sobre cómo poner límites adecuados, cómo acompañar sin invadir, y cómo reconocer cuándo sus hijos necesitan un apoyo externo.
                </p>
                <p>
                  En mi trabajo, integro a las familias para que comprendan mejor los desafíos propios de estas etapas y puedan fortalecer el vínculo con sus hijos desde la <strong className="text-foreground">empatía</strong>, la <strong className="text-foreground">escucha</strong> y la <strong className="text-foreground">validación emocional</strong>. A través de un acompañamiento clínico y psicoeducativo, ofrezco herramientas prácticas para que los padres se sientan más seguros, puedan apoyar a sus hijos en la expresión de emociones y fomenten un ambiente familiar protector y de confianza.
                </p>
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