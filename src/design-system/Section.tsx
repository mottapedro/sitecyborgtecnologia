import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bordered?: boolean;
}

export function Section({ children, className = "", id, bordered = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${bordered ? "border-t border-border" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
