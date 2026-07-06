# WEBSITE_ARCHITECTURE.md — Arquitetura do Portal

> Complementa [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) e [ECOSYSTEM.md](./ECOSYSTEM.md).

## Stack

Next.js 16 (App Router, Turbopack por padrão) · React 19 · TypeScript · Tailwind CSS v4 (CSS-first, via `@theme` em `globals.css`) · ESLint flat config.

## Estrutura de `src/`

```
src/
├── app/            # Rotas (App Router) — só orquestra layout/dados, sem lógica de UI pesada
├── components/     # Composições de layout reutilizáveis (Header, Footer, ComingSoon)
├── design-system/  # Primitivos de UI puros (Container, Section, Button, Card, Badge, Eyebrow, Logo, tokens)
├── features/       # Composições de conteúdo específicas de uma página (ex.: features/home/*)
├── content/        # Dados institucionais (company, projects, services, social, navigation, ecosystem)
├── config/         # Configuração da aplicação (site.ts — nome, URL, descrição, OG image)
├── types/          # Tipos compartilhados (Project, Service, NavItem, CompanyInfo...)
└── lib/            # Utilitários puros sem estado de UI (reservado para uso futuro)
```

Regra de dependência: `app/` e `features/` podem importar de `design-system/`, `content/`, `config/` e `types/`. `design-system/` nunca importa de `content/` ou `features/` — permanece agnóstico de conteúdo institucional.

## Mapa de rotas

| Rota | Arquivo | Tipo |
|---|---|---|
| `/` | `app/page.tsx` | Estática, composição de `features/home/*` |
| `/ecossistema` | `app/ecossistema/page.tsx` | Estática |
| `/projetos` | `app/projetos/page.tsx` | Estática, lista `src/content/projects.ts` |
| `/projetos/[slug]` | `app/projetos/[slug]/page.tsx` | SSG via `generateStaticParams` — hoje gera `/projetos/aliado` e `/projetos/cyborg-sniper` |
| `/servicos` | `app/servicos/page.tsx` | Estática, lista `src/content/services.ts` |
| `/blog` | `app/blog/page.tsx` | Placeholder (`ComingSoon`) — sem conteúdo dinâmico ainda |
| `/docs` | `app/docs/page.tsx` | Placeholder (`ComingSoon`) — sem conteúdo dinâmico ainda |
| `/contato` | `app/contato/page.tsx` | Estática, lista `src/content/social.ts` |
| `/sitemap.xml` | `app/sitemap.ts` | Gerado a partir de `staticRoutes` + `projects` |
| `/robots.txt` | `app/robots.ts` | Aponta para o sitemap |
| `/manifest.webmanifest` | `app/manifest.ts` | PWA manifest básico |

## Adicionando uma nova página institucional

1. Se for conteúdo textual novo (ex.: nova área de negócio), primeiro adicionar ao arquivo correspondente em `src/content/`.
2. Criar `src/app/<rota>/page.tsx` consumindo `design-system/` + `content/`.
3. Adicionar a rota em `mainNavigation` ou `footerNavigation` (`src/content/navigation.ts`) se deve aparecer no menu.
4. Adicionar a rota em `staticRoutes` (`src/app/sitemap.ts`) se for uma página pública indexável.

## Verificação padrão antes de commit

```
npx eslint .
npx next build
```
