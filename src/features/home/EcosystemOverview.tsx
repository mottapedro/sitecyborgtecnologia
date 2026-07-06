import Link from "next/link";
import { Card, Eyebrow, Section } from "@/design-system";
import { ecosystemBranches } from "@/content/ecosystem";

export function EcosystemOverview() {
  return (
    <Section bordered>
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>Ecossistema Cyborg</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Uma organização de engenharia, não apenas dois produtos
          </h2>
        </div>
        <Link href="/ecossistema" className="text-sm font-medium text-primary hover:underline">
          Ver ecossistema completo →
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ecosystemBranches.map((branch) => (
          <Card key={branch.label}>
            <h3 className="text-lg font-semibold">{branch.label}</h3>
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
