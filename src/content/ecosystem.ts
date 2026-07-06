export interface EcosystemBranch {
  label: string;
  description: string;
  children?: string[];
}

export const ecosystemBranches: EcosystemBranch[] = [
  {
    label: "Plataforma",
    description: "Produtos voltados ao consumidor final, construídos sobre domínios próprios.",
    children: ["ALIADO"],
  },
  {
    label: "Quantitative Trading",
    description: "Runtimes institucionais para decisão e execução em mercados financeiros.",
    children: ["Cyborg Sniper"],
  },
  {
    label: "Engenharia",
    description: "Disciplinas de engenharia que sustentam todos os produtos da empresa.",
    children: [
      "Arquitetura de Software",
      "Domain-Driven Design",
      "Financial Systems",
      "Runtime Engineering",
    ],
  },
  {
    label: "Pesquisa & Desenvolvimento",
    description: "Investigação contínua de novas arquiteturas, modelos e runtimes.",
  },
  {
    label: "Open Source",
    description: "Componentes e ferramentas liberados para a comunidade de engenharia.",
  },
  {
    label: "Conteúdo Técnico",
    description: "Artigos, documentação e estudos de caso sobre os sistemas que construímos.",
    children: ["Artigos", "Documentação", "Estudos de Caso"],
  },
];
