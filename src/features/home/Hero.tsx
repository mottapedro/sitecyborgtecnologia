import { Button, Container, Eyebrow } from "@/design-system";
import { company } from "@/content/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,106,26,0.12),_transparent_55%)]"
      />
      <Container className="relative flex flex-col gap-8 py-28 lg:py-36">
        <Eyebrow>{company.name}</Eyebrow>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Engenharia de software para plataformas, runtimes e sistemas financeiros.
        </h1>
        <p className="max-w-2xl text-lg text-muted">{company.mission}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button href="/ecossistema" variant="primary">
            Conheça o ecossistema
          </Button>
          <Button href="/projetos" variant="secondary">
            Ver projetos
          </Button>
        </div>
      </Container>
    </section>
  );
}
