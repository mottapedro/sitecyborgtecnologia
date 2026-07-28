# ECOSYSTEM.md — Ecossistema Cyborg

> Complementa [BRAND_BOOK.md](../brand/BRAND_BOOK.md) §9. Fonte de implementação: `src/content/ecosystem.ts`, `src/content/projects.ts`.

## Visão institucional completa (Brand Book §9)

```
Cyborg Tecnologia
│
├── ALIADO
├── Cyborg Sniper
├── Labs
├── Academy
├── Open Source
└── Pesquisa
```

## Conteúdo publicado hoje (`src/content/ecosystem.ts`)

```
Cyborg Tecnologia
│
├── Plataforma               → ALIADO
├── Quantitative Trading     → Cyborg Sniper
├── Engenharia               → Arquitetura de Software, DDD, Financial Systems, Runtime Engineering
├── Pesquisa & Desenvolvimento
├── Open Source
└── Conteúdo Técnico         → Artigos, Documentação, Estudos de Caso
```

## Mapeamento e lacunas

| Visão institucional (Brand Book) | Publicado no site | Status |
|---|---|---|
| ALIADO | Ramo "Plataforma" | ✅ Publicado, ver [`/projetos/aliado`](/projetos/aliado) |
| Cyborg Sniper | Ramo "Quantitative Trading" | ✅ Publicado, ver [`/projetos/cyborg-sniper`](/projetos/cyborg-sniper) |
| Labs | — | ⏳ Não publicado. Quando existir conteúdo real, adicionar como novo `EcosystemBranch` em `ecosystem.ts` — não criar seção antes de haver substância |
| Academy | — | ⏳ Não publicado. Mesma regra acima |
| Open Source | Ramo "Open Source" | ✅ Ramo existe no conteúdo, sem projetos open source publicados ainda |
| Pesquisa | Ramo "Pesquisa & Desenvolvimento" | ✅ Publicado como ramo institucional |

Regra de evolução: **"Conteúdo Técnico" é uma adição do site** (não está na lista original do Brand Book) — mantido porque agrupa Blog e Docs, ambos já roteados (`/blog`, `/docs`). Ao formalizar Labs/Academy como produtos reais, atualizar este arquivo e `src/content/ecosystem.ts` no mesmo commit.

## Projetos (`src/content/projects.ts`)

Cada projeto no ecossistema é modelado pelo tipo `Project` (`src/types/project.ts`): `slug`, `name`, `tagline`, `description`, `category`, `status`, `technologies`, `repository`, `website`, `highlights`, `architecture`, `featured`. Novos produtos entram como um novo item nesse array — a página `/projetos/[slug]` é gerada automaticamente via `generateStaticParams` (`src/app/projetos/[slug]/page.tsx`), sem necessidade de nova rota.

## Identidade visual por produto (ver ADR-001)

Cada produto do ecossistema herda a mesma linguagem visual estrutural (tipografia, grid, iconografia, motion, arquitetura do símbolo `<>`), mas pode ter sua própria cor de destaque — isso é intencional, não uma inconsistência a corrigir:

- **Cyborg Tecnologia** (este portal): roxo/magenta sobre preto (`primary` `#8B2BE2` / `secondary` `#B04DFF`) — transmite engenharia, arquitetura de software, documentação e plataformas tecnológicas. Ver [ADR-001](../adr/ADR-001-identidade-visual.md) e [VISUAL_IDENTITY.md](../brand/VISUAL_IDENTITY.md).
- **ALIADO**: mantém identidade própria calorosa e humana (laranja/dourado), reforçando mobilidade, proximidade e relacionamento — a paleta laranja/dourado usada nas primeiras iterações deste portal, antes da adoção do ADR-001, na verdade pertence à identidade do ALIADO, não à da Cyborg Tecnologia.

Essa separação fortalece o posicionamento institucional de cada produto preservando a coerência do ecossistema como um todo.
