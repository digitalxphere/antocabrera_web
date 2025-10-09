export default function BlogTerapiaJuego() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:py-16" aria-labelledby="blog-title" data-testid="blog-terapia-juego-section">
      <article className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-lg" data-testid="article-terapia-juego">
        <header className="mb-6">
          <h2 id="blog-title" className="text-2xl sm:text-3xl font-bold text-foreground leading-tight" data-testid="blog-title">
            <span className="text-primary mr-2">■</span>
            La terapia de juego: el lenguaje natural de los niños
          </h2>
        </header>

        <div className="text-muted-foreground text-justify leading-relaxed space-y-5">
          <p>
            La terapia de juego es una forma de psicoterapia que utiliza el juego como medio principal de comunicación y expresión emocional. A través del juego, los niños pueden mostrar lo que sienten, temen o desean, incluso cuando todavía no tienen palabras para explicarlo.
          </p>
          
          <p>
            En el espacio terapéutico, los juguetes se transforman en el lenguaje y las acciones en palabras. Así, el niño puede recrear sus experiencias, representar conflictos internos y ensayar nuevas formas de afrontamiento en un entorno seguro y acompañado.
          </p>
          
          <p>
            Desde la psicología infantil, el juego no es solo diversión: es una vía profunda de autoconocimiento, autorregulación emocional y desarrollo de la empatía. Mientras juega, el niño organiza su mundo interno, da sentido a lo que vive y aprende a expresar lo que antes reprimía o no comprendía.
          </p>
          
          <p>
            Para los padres, este proceso es una oportunidad de observar que su hijo no necesita "portarse mejor" para estar bien, sino ser comprendido y acompañado emocionalmente. La terapia de juego permite fortalecer el vínculo, abrir nuevas formas de comunicación en casa y promover un desarrollo emocional más equilibrado.
          </p>
          
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-lg font-semibold text-foreground">
              <span className="text-primary mr-2">■</span>
              En palabras simples:
            </p>
            <p className="mt-3 text-base italic">
              Cuando un niño juega en terapia, sana sin darse cuenta. El juego se convierte en su puente hacia el bienestar y en una herramienta poderosa para que pueda crecer más libre, más seguro y más en sintonía consigo mismo.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
