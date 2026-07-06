import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/content/projects";

const staticRoutes = [
  "",
  "/ecossistema",
  "/projetos",
  "/servicos",
  "/blog",
  "/docs",
  "/contato",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projetos/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectRoutes];
}
