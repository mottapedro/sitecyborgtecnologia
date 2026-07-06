interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <span
      aria-hidden
      className={`bg-linear-to-r from-primary to-secondary bg-clip-text font-mono text-base font-semibold tracking-tighter text-transparent ${className}`}
    >
      {"<>"}
    </span>
  );
}
