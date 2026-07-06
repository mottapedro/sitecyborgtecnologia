import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/brand/logo-icon.png"
      alt="Cyborg Tecnologia"
      width={95}
      height={30}
      className={`h-6 w-auto ${className}`}
      priority
    />
  );
}
