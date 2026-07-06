import type { CompanyInfo, EngineeringPillar } from "@/types";

export const company: CompanyInfo = {
  name: "Cyborg Tecnologia",
  legalName: "Cyborg Tecnologia Ltda.",
  tagline: "Engenharia de software para plataformas, runtimes e sistemas financeiros.",
  mission:
    "Projetar e operar sistemas de software institucionais — plataformas de mobilidade, runtimes de trading quantitativo e infraestrutura de domínio — com rigor de engenharia, governança e observabilidade.",
  foundingYear: 2024,
  location: "Brasil",
};

export const engineeringPillars: EngineeringPillar[] = [
  {
    title: "Domain-Driven Design",
    description:
      "Modelamos domínios complexos — financeiro, mobilidade, trading — a partir da linguagem ubíqua do negócio, não da conveniência técnica.",
  },
  {
    title: "Financial Systems",
    description:
      "Precificação, liquidação, PIX, portfolio allocation e risk engines construídos com a precisão exigida por sistemas que movimentam dinheiro.",
  },
  {
    title: "Runtime Engineering",
    description:
      "Runtimes institucionais desenhados para operar continuamente, com governança, compliance e observabilidade de ponta a ponta.",
  },
  {
    title: "Arquitetura de Software",
    description:
      "Sistemas desacoplados, escaláveis e preparados para evoluir por anos — sem dívida técnica disfarçada de velocidade.",
  },
];
