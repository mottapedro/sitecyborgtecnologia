import { Button, Section } from "@/design-system";

export function ContactCta() {
  return (
    <Section className="text-center">
      <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
        Vamos construir o próximo sistema institucional juntos
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-muted">
        Fale com a Cyborg Tecnologia sobre arquitetura, engenharia financeira ou runtimes institucionais.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/contato">Entrar em contato</Button>
      </div>
    </Section>
  );
}
