import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "aliado",
    name: "ALIADO",
    tagline: "Plataforma premium de mobilidade urbana.",
    description:
      "ALIADO é uma plataforma inteligente de mobilidade construída para conectar passageiros e motoristas por meio de uma rede de indicação, precificação dinâmica e despacho em tempo real, utilizando um domínio financeiro próprio e uma arquitetura orientada por eventos.",
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
      "Cyborg Sniper é um runtime institucional para trading quantitativo desenvolvido sobre um Decision-Driven Engine (DDE), integrando governança, gestão de risco, observabilidade e engenharia orientada por evidências.",
    category: "Quantitative Trading",
    status: "Ativo Operacional",
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
