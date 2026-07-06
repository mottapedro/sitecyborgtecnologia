import type { Metadata } from "next";
import { Card, Eyebrow, Section } from "@/design-system";
import { socialLinks } from "@/content/social";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Cyborg Tecnologia sobre arquitetura, engenharia financeira ou runtimes institucionais.",
};

export default function ContatoPage() {
  return (
    <Section className="pt-16">
      <Eyebrow>Contato</Eyebrow>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Vamos conversar sobre o seu próximo sistema
      </h1>
      <p className="mt-6 max-w-2xl text-muted">
        Envie uma mensagem pelos canais abaixo. Respondemos oportunidades de engenharia,
        parcerias e propostas de consultoria técnica.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {socialLinks.map((social) => (
          <Card key={social.href}>
            <h2 className="text-lg font-semibold">{social.label}</h2>
            <a
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-primary hover:underline"
            >
              {social.handle ?? social.href}
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}
