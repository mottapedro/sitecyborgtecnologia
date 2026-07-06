import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Documentação",
  description: "Documentação pública dos projetos e runtimes da Cyborg Tecnologia.",
};

export default function DocsPage() {
  return (
    <ComingSoon
      eyebrow="Documentação"
      title="Em construção"
      description="A documentação pública dos produtos e runtimes da Cyborg Tecnologia estará disponível em breve."
    />
  );
}
