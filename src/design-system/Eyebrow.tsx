import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary ${className}`}
    >
      <span className="h-px w-6 bg-primary" />
      {children}
    </span>
  );
}
