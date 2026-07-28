# VISUAL_IDENTITY.md — Identidade Visual

> Complementa [BRAND_BOOK.md](./BRAND_BOOK.md) §5–6, §14 e [ADR-001](../adr/ADR-001-identidade-visual.md). Fonte de implementação: `src/design-system/tokens.ts`, `src/app/globals.css`, `src/design-system/Logo.tsx`. Ativo canônico: `public/identidade.png`.

## Governança

A paleta e o símbolo descritos aqui derivam do logotipo institucional aprovado (`public/identidade.png`), não de uma descrição textual — ver [ADR-001](../adr/ADR-001-identidade-visual.md) para o princípio de governança completo. Qualquer nova aplicação de marca (site, apresentações, redes sociais) deve ser conferida contra esse ativo, não contra este documento isoladamente.

## O Símbolo

O símbolo institucional é `<>` — os caracteres universais da programação, reinterpretados como ícone geométrico (chevrons em gradiente no logotipo aprovado). Representa simultaneamente código, arquitetura, transformação, abertura/fechamento e construção. O espaço entre `<` e `>` é onde a engenharia acontece.

Implementação de referência: `src/design-system/Logo.tsx` (gradiente `primary`→`secondary`, `bg-linear-to-r`), usado no `Header` e no `Footer` (`src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`).

Regras de uso:

- O gradiente `primary`→`secondary` é a aplicação padrão do símbolo — não usar uma cor sólida única fora de contextos monocromáticos (ex.: favicon pequeno).
- Nunca decorar o símbolo com sombras ou efeitos 3D — ele é geométrico/tipográfico, com gradiente linear apenas.
- Tamanho mínimo recomendado: 16px de altura, para preservar legibilidade dos dois caracteres.

## Paleta de Cores (oficial — ADR-001)

Definida em `src/design-system/tokens.ts` (`brandColors`) e espelhada em `src/app/globals.css` (`:root`, `@theme inline`).

| Token ADR | Hex | Token de implementação | Uso |
|---|---|---|---|
| `--cyborg-bg` | `#0B0B0B` | `--background` | Fundo base de toda a aplicação |
| `--cyborg-surface` | `#1B1B1B` | `--surface` (`--surface-raised: #232323` como variação elevada) | Superfícies de cards e blocos elevados |
| — | `#2A2A2E` | `--border` | Bordas e divisores |
| `--cyborg-primary` | `#8B2BE2` | `--primary` (`--primary-muted: #6F22B5` para hover) | Roxo tecnológico — cor de ação: CTAs, links ativos, símbolo, seleção de texto, Eyebrow |
| `--cyborg-secondary` | `#B04DFF` | `--secondary` (`--secondary-muted: #8C3DCC` para hover) | Magenta energético — cor de distinção: badges de status institucional (ex.: Quantitative Trading), títulos de destaque em cards |
| `--cyborg-text` | `#FFFFFF` | `--foreground` | Texto principal |
| `--cyborg-muted` | `#A1A1AA` | `--muted` | Texto secundário |

Gradiente de destaque oficial: `linear-gradient(90deg, #8B2BE2, #B04DFF)` — aplicado no símbolo (`Logo.tsx`) via `bg-linear-to-r from-primary to-secondary`.

## Regras de Aplicação

- **Preto é a base, não uma opção.** O site é escuro por padrão (`color-scheme: dark` fixo em `html`, sem alternância para tema claro) — a marca não usa modo claro.
- **Roxo (`primary`) é a cor de ação.** Reservado a botões primários, links de navegação em estado de destaque e o traço do `Eyebrow`. Não usar em blocos grandes de fundo.
- **Magenta (`secondary`) é a cor de distinção.** Usado para sinalizar o ramo "Quantitative Trading" e títulos de destaque em cards (`EngineeringPhilosophy`, detalhe de projeto) — nunca como cor de ação primária (não usar em botões `primary`).
- **Poucas cores, poucos elementos** (Brand Book §14): qualquer nova seção deve conseguir ser construída só com `background`/`surface`/`border`/`foreground`/`muted`, usando `primary` ou `secondary` como acento pontual — nunca os dois simultaneamente com o mesmo peso visual.
- **Diferenciação de marcas no ecossistema**: esta paleta (roxo/preto) é exclusiva da Cyborg Tecnologia enquanto organização de engenharia. O ALIADO mantém identidade própria (laranja/dourado, calorosa/humana) — ver nota em [ADR-001](../adr/ADR-001-identidade-visual.md#ecossistema) e [ECOSYSTEM.md](../institutional/ECOSYSTEM.md).

## Débitos de Identidade (Fase 4 do ADR-001 — a resolver em iterações futuras)

- **Favicon** (`src/app/favicon.ico`): ainda é o ícone padrão gerado pelo `create-next-app`. Um SVG do símbolo (`src/app/icon.svg`) já foi criado com o gradiente oficial como primeira aplicação — falta gerar as variações rasterizadas (`.ico` multi-tamanho).
- **OG Image** (`siteConfig.ogImage` em `src/config/site.ts`, apontando para `/og-image.png`): arquivo ainda não existe em `public/`. Deve ser criada uma imagem 1200×630 com o símbolo `<>` em gradiente sobre fundo `#0B0B0B`, ou derivada diretamente de `public/identidade.png`.
- **Ícones PWA/manifest, social cards**: pendentes, mesma dependência de rasterização de imagem.
