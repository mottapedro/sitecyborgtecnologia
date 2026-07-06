import Link from "next/link";
import { footerNavigation } from "@/content/navigation";
import { socialLinks } from "@/content/social";
import { company } from "@/content/company";
import { Container, Logo } from "@/design-system";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-sm font-semibold tracking-wide">{company.name}</span>
          </div>
          <p className="mt-3 text-sm text-muted">{company.tagline}</p>
        </div>

        <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-muted">
          {footerNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm text-muted">
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Container>
      <Container className="border-t border-border py-6 text-xs text-muted">
        © {new Date().getFullYear()} {company.legalName}. Todos os direitos reservados.
      </Container>
    </footer>
  );
}
