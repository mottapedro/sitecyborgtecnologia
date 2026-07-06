import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "aliado",
    name: "ALIADO",
    tagline: "Plataforma premium de mobilidade urbana.",
    description:
      "ALIADO é a plataforma de mobilidade urbana da Cyborg Tecnologia, construída sobre um domínio financeiro próprio: precificação dinâmica, liquidação via PIX, rede de indicação e um runtime de despacho em tempo real.",
    category: "Plataforma",
    status: "Em desenvolvimento",
    technologies: [
      "Domain-Driven Design",
      "Pricing Engine",
      "PIX",
      "Dispatch Runtime",
      "Referral Network",
    ],
    highlights: [
      {
        title: "Pricing Engine",
        description: "Precificação dinâmica orientada a domínio financeiro próprio.",
      },
      {
        title: "PIX nativo",
        description: "Liquidação instantânea integrada ao core financeiro da plataforma.",
      },
      {
        title: "Referral Network",
        description: "Rede de indicação com regras de ownership e recompensa modeladas como domínio.",
      },
      {
        title: "Dispatch Runtime",
        description: "Motor de despacho em tempo real para conexão entre motoristas e passageiros.",
      },
    ],
    architecture: [
      "Engenharia orientada a domínio (DDD)",
      "Domínio financeiro isolado do domínio de mobilidade",
      "Runtime de despacho desacoplado do core transacional",
    ],
    featured: true,
  },
  {
    slug: "cyborg-sniper",
    name: "Cyborg Sniper",
    tagline: "Runtime institucional de Quantitative Trading.",
    description:
      "Cyborg Sniper é um runtime institucional para trading quantitativo, construído em torno de um Decision Driven Engine (DDE) com governança, compliance e observabilidade de ponta a ponta.",
    category: "Quantitative Trading",
    status: "Runtime Institucional",
    technologies: [
      "Decision Driven Engine (DDE)",
      "MQL5",
      "Portfolio Allocation",
      "Risk Engine",
      "Observability",
    ],
    repository: "https://github.com/mottapedro/cyborg-sniper-dde",
    highlights: [
      {
        title: "Decision Driven Engine",
        description: "Núcleo de decisão que orquestra sinais, risco e execução de forma governada.",
      },
      {
        title: "Risk Engine",
        description: "Gestão de risco e portfolio allocation integradas ao ciclo de decisão.",
      },
      {
        title: "Governance & Compliance",
        description: "Regras de governança e compliance como parte do runtime, não como camada externa.",
      },
      {
        title: "Observability",
        description: "Instrumentação end-to-end do runtime para auditoria e diagnóstico contínuo.",
      },
    ],
    architecture: [
      "Runtime institucional escrito em MQL5",
      "Decision Driven Engine como núcleo de orquestração",
      "Observability e compliance como componentes de primeira classe",
    ],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
