import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-background hover:bg-primary-muted",
  secondary: "border border-border bg-surface-raised text-foreground hover:border-secondary/40",
  ghost: "text-foreground hover:text-primary",
};

export function Button({ children, href, variant = "primary", className = "", ...props }: ButtonProps) {
  const isExternal = href.startsWith("http");
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${variantClasses[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
