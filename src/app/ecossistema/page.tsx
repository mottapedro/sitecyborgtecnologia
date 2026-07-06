import type { Metadata } from "next";
import { Card, Eyebrow, Section } from "@/design-system";
import { ecosystemBranches } from "@/content/ecosystem";

export const metadata: Metadata = {
  title: "Ecossistema",
  description:
    "O Ecossistema Cyborg reúne plataformas, runtimes de trading quantitativo, engenharia, pesquisa e conteúdo técnico sob uma identidade arquitetural consistente.",
};

export default function EcossistemaPage() {
  return (
    <Section className="pt-16">
      <Eyebrow>Ecossistema Cyborg</Eyebrow>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Uma organização de engenharia, não apenas uma lista de produtos
      </h1>
      <p className="mt-6 max-w-2xl text-muted">
        A Cyborg Tecnologia desenvolve plataformas, runtimes e soluções tecnológicas com uma
        identidade arquitetural consistente. Cada ramo do ecossistema compartilha os mesmos
        princípios de engenharia: domínio primeiro, governança e observabilidade.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ecosystemBranches.map((branch) => (
          <Card key={branch.label}>
            <h2 className="text-lg font-semibold">{branch.label}</h2>
            <p className="mt-3 text-sm text-muted">{branch.description}</p>
            {branch.children && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {branch.children.map((child) => (
                  <li key={child} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                    {child}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
