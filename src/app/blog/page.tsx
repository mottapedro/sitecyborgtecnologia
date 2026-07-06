import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos técnicos da Cyborg Tecnologia sobre arquitetura, domínio e engenharia de runtimes.",
};

export default function BlogPage() {
  return (
    <ComingSoon
      eyebrow="Blog Técnico"
      title="Em construção"
      description="Em breve, artigos técnicos sobre arquitetura de software, domain-driven design, sistemas financeiros e runtime engineering."
    />
  );
}
