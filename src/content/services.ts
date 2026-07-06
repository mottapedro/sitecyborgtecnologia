import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "arquitetura-de-software",
    name: "Arquitetura de Software",
    description:
      "Desenho de sistemas escaláveis, desacoplados e preparados para evoluir por anos.",
    deliverables: ["Modelagem de domínio", "Definição de limites de contexto", "Roadmap técnico"],
  },
  {
    slug: "engenharia-financeira",
    name: "Engenharia de Sistemas Financeiros",
    description:
      "Construção de motores de precificação, liquidação e risco com o rigor exigido por sistemas que movimentam dinheiro.",
    deliverables: ["Pricing engines", "Integração PIX", "Risk & portfolio engines"],
  },
  {
    slug: "runtimes-institucionais",
    name: "Runtime Engineering",
    description:
      "Desenvolvimento de runtimes institucionais com governança, compliance e observabilidade nativas.",
    deliverables: ["Decision engines", "Observability", "Governança e compliance"],
  },
  {
    slug: "consultoria-tecnica",
    name: "Consultoria Técnica",
    description:
      "Diagnóstico e evolução de sistemas existentes, com foco em arquitetura e domínio.",
    deliverables: ["Auditoria de arquitetura", "Planos de evolução", "Mentoria de engenharia"],
  },
];
