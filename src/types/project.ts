export type ProjectStatus =
  | "Em desenvolvimento"
  | "Ativo Operacional"
  | "Pesquisa"
  | "Planejado"
  | "Arquivado";

export type ProjectCategory =
  | "Plataforma"
  | "Quantitative Trading"
  | "Engenharia"
  | "Pesquisa & Desenvolvimento"
  | "Open Source";

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  repository?: string;
  website?: string;
  highlights: ProjectHighlight[];
  architecture: string[];
  featured?: boolean;
}
