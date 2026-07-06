import { Eyebrow, Section } from "@/design-system";

interface ComingSoonProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function ComingSoon({ eyebrow, title, description }: ComingSoonProps) {
  return (
    <Section className="pt-16 text-center">
      <Eyebrow className="justify-center">{eyebrow}</Eyebrow>
      <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-muted">{description}</p>
    </Section>
  );
}
