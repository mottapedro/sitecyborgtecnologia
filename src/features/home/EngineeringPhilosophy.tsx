import { Card, Eyebrow, Section } from "@/design-system";
import { engineeringPillars } from "@/content/company";

export function EngineeringPhilosophy() {
  return (
    <Section bordered>
      <div className="mb-12 max-w-2xl">
        <Eyebrow>Filosofia de engenharia</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Precisão de engenharia, não aparência de marketing
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {engineeringPillars.map((pillar) => (
          <Card key={pillar.title}>
            <h3 className="text-lg font-semibold text-secondary">{pillar.title}</h3>
            <p className="mt-3 text-sm text-muted">{pillar.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
