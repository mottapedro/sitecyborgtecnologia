import Link from "next/link";
import { mainNavigation } from "@/content/navigation";
import { company } from "@/content/company";
import { Container, Logo } from "@/design-system";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide">
          <Logo />
          {company.name}
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {mainNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
