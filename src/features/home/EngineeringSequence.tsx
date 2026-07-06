import { Eyebrow, Section } from "@/design-system";

const stages = [
  "Business",
  "Domain",
  "Architecture",
  "Contracts",
  "Database",
  "Implementation",
  "Deployment",
];

export function EngineeringSequence() {
  return (
    <Section bordered>
      <Eyebrow>Como construímos</Eyebrow>
      <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
        Toda plataforma segue a mesma sequência
      </h2>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        {stages.map((stage, index) => (
          <div key={stage} className="flex items-center gap-3">
            <span className="rounded-full border border-border bg-surface px-5 py-2.5 font-mono text-sm text-foreground">
              {stage}
            </span>
            {index < stages.length - 1 && <span className="text-primary">→</span>}
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-muted">
        O domínio é a autoridade do sistema. A interface é apenas sua projeção.
      </p>
    </Section>
  );
}
