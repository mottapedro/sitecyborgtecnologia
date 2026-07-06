import Link from "next/link";
import { Badge, Card, Eyebrow, Section } from "@/design-system";
import { getFeaturedProjects } from "@/content/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <Section bordered>
      <div className="mb-12 max-w-2xl">
        <Eyebrow>Projetos</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Produtos e runtimes em produção
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((project) => (
          <Link key={project.slug} href={`/projetos/${project.slug}`} className="block">
            <Card className="h-full">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <Badge tone={project.category === "Quantitative Trading" ? "secondary" : "primary"}>
                  {project.status}
                </Badge>
              </div>
              <p className="mt-3 text-sm text-muted">{project.tagline}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
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
