import type { Metadata } from "next";
import { Card, Eyebrow, Section } from "@/design-system";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Arquitetura de software, engenharia de sistemas financeiros, runtimes institucionais e consultoria técnica.",
};

export default function ServicosPage() {
  return (
    <Section className="pt-16">
      <Eyebrow>Serviços</Eyebrow>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Engenharia sob demanda para sistemas que não podem falhar
      </h1>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <Card key={service.slug}>
            <h2 className="text-lg font-semibold">{service.name}</h2>
            <p className="mt-3 text-sm text-muted">{service.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-primary">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
