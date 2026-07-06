# DESIGN_SYSTEM.md — Catálogo de Componentes

> Complementa [VISUAL_IDENTITY.md](./VISUAL_IDENTITY.md). Fonte de implementação: `src/design-system/`.

Todos os primitivos vivem em `src/design-system/` e são reexportados por `src/design-system/index.ts`. Features (`src/features/*`) e páginas (`src/app/**/page.tsx`) devem compor a UI a partir destes primitivos — não duplicar estilos inline equivalentes.

## Primitivos

| Componente | Arquivo | Responsabilidade |
|---|---|---|
| `Logo` | `Logo.tsx` | Símbolo institucional `<>` (ver VISUAL_IDENTITY.md) |
| `Container` | `Container.tsx` | Largura máxima (`max-w-6xl`) e padding horizontal consistentes |
| `Section` | `Section.tsx` | Espaçamento vertical de seção (`py-20 lg:py-28`) + `Container` embutido; `bordered` adiciona divisor superior |
| `Eyebrow` | `Eyebrow.tsx` | Rótulo de categoria acima de títulos (traço + uppercase roxo) |
| `Badge` | `Badge.tsx` | Selo de status/categoria, com tons `primary` \| `secondary` \| `neutral` |
| `Button` | `Button.tsx` | CTA com variantes `primary` \| `secondary` \| `ghost`; detecta automaticamente links externos |
| `Card` | `Card.tsx` | Bloco de conteúdo com borda e hover em `secondary/30` |
| `tokens` | `tokens.ts` | `brandColors` — espelha os tokens CSS de `globals.css` para uso em TS/JS quando necessário |

## Regras de composição

- Toda página nova deve iniciar com `<Section>` (ou `<Section bordered>` para seções subsequentes na mesma página) — nunca recriar padding/max-width manualmente.
- Categorias/status usam `Eyebrow` (acima do título) e `Badge` (ao lado do título ou em listas de card) — não inventar outro padrão de rótulo.
- Qualquer novo componente de UI reutilizável entra em `src/design-system/`, não em `src/components/` (reservado a composições de layout como `Header`/`Footer`) nem direto em `src/features/*` (reservado a composições de conteúdo específicas de uma página).

## Estado atual vs. evolução

Este catálogo reflete o que existe hoje. Ao adicionar um primitivo novo (ex.: `Tabs`, `Accordion`, `CodeBlock` para o futuro `/docs`), atualizar esta tabela no mesmo PR.
