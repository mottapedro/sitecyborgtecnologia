# TYPOGRAPHY.md — Hierarquia Tipográfica

> Complementa [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md). Fonte tipográfica: Geist Sans / Geist Mono (`src/app/layout.tsx`, via `next/font/google`).

## Escala

| Nível | Classes Tailwind | Uso |
|---|---|---|
| Hero (H1 da home) | `text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight` | Único, em `Hero` (`src/features/home/Hero.tsx`) |
| H1 de página interna | `text-4xl font-semibold tracking-tight sm:text-5xl` | Um por página (`/ecossistema`, `/projetos`, `/servicos`, `/contato`, detalhe de projeto) |
| H2 de seção | `text-3xl font-semibold tracking-tight sm:text-4xl` | Títulos de seção na home (`EcosystemOverview`, `FeaturedProjects`, `EngineeringPhilosophy`, `ContactCta`) |
| H3 de card | `text-lg` ou `text-xl font-semibold` | Títulos dentro de `Card` |
| Eyebrow (rótulo de categoria) | `text-xs font-medium uppercase tracking-[0.2em] text-primary` | Sempre acima de um H1/H2, via componente `Eyebrow` |
| Corpo — destaque | `text-lg text-muted` | Subtítulos logo abaixo de H1 (tagline, mission) |
| Corpo — padrão | `text-sm text-muted` | Parágrafos de card, listas, descrições |
| Legenda / meta | `text-xs text-muted` | Copyright do footer, tags de tecnologia |

## Regras

- `tracking-tight` é obrigatório em todo título (`h1`/`h2`) — reforça a leitura "engenharia, não marketing" (Brand Book §5).
- Apenas um `Eyebrow` por bloco de título, sempre imediatamente acima do heading.
- Textos de corpo usam `text-muted` (`#a1a1aa`), nunca `text-foreground` puro — preserva hierarquia visual entre título e descrição.
- Não introduzir uma terceira família tipográfica: a marca usa exclusivamente Geist Sans (texto) e Geist Mono (reservada para trechos de código, ex.: futuros blocos em `/docs`).
