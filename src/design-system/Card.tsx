import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-secondary/30 ${className}`}
    >
      {children}
    </div>
  );
}
