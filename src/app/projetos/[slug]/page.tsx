import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge, Button, Card, Eyebrow, Section } from "@/design-system";
import { getProjectBySlug, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Section className="pt-16">
      <Eyebrow>{project.category}</Eyebrow>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{project.name}</h1>
        <Badge tone={project.category === "Quantitative Trading" ? "secondary" : "primary"}>
          {project.status}
        </Badge>
      </div>
      <p className="mt-4 max-w-2xl text-lg text-muted">{project.tagline}</p>
      <p className="mt-6 max-w-2xl text-muted">{project.description}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        {project.repository && (
          <Button href={project.repository} variant="secondary">
            Ver repositório
          </Button>
        )}
        {project.website && <Button href={project.website}>Visitar site</Button>}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {project.highlights.map((highlight) => (
          <Card key={highlight.title}>
            <h2 className="text-lg font-semibold text-secondary">{highlight.title}</h2>
            <p className="mt-3 text-sm text-muted">{highlight.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold">Arquitetura</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {project.architecture.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-primary">—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold">Tecnologias</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
