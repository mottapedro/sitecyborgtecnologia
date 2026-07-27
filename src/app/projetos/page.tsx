import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Card, Eyebrow, Section } from "@/design-system";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Conheça os projetos oficiais da Cyborg Tecnologia: ALIADO e Cyborg Sniper.",
};

export default function ProjetosPage() {
  return (
    <Section className="pt-16">
      <Eyebrow>Projetos</Eyebrow>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Produtos e runtimes desenvolvidos por meio de Arquiteturas Intelectuais
      </h1>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projetos/${project.slug}`} className="block">
            <Card className="h-full">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <Badge tone={project.category === "Quantitative Trading" ? "secondary" : "primary"}>
                  {project.status}
                </Badge>
              </div>
              <p className="mt-3 text-sm text-muted">{project.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
