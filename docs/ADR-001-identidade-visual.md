# ADR-001 — Identidade Visual Oficial

## Status

**APROVADA**

A identidade visual oficial da Cyborg Tecnologia passa a ser definida pelo logotipo institucional aprovado (`public/identidade.png`).

Todos os documentos, componentes e tokens passam a utilizar essa identidade como Single Source of Truth.

## Princípio de Governança

> A identidade visual oficial é um artefato de arquitetura. Ela não é definida por descrições textuais, mas pelos ativos institucionais aprovados da marca. Toda documentação deve permanecer consistente com esses ativos.

Este princípio supera a decisão anterior: a paleta laranja/dourado descrita no briefing textual original (`AGENTS.md`) foi substituída pela paleta roxo/magenta do logotipo aprovado. Ver histórico da migração em [VISUAL_IDENTITY.md](./VISUAL_IDENTITY.md).

## Paleta Oficial

| Token | Hex | Descrição |
|---|---|---|
| `--cyborg-bg` | `#0B0B0B` | Background |
| `--cyborg-surface` | `#1B1B1B` | Surface |
| `--cyborg-primary` | `#8B2BE2` | Roxo tecnológico |
| `--cyborg-secondary` | `#B04DFF` | Magenta energético |
| `--cyborg-text` | `#FFFFFF` | Texto primário |
| `--cyborg-muted` | `#A1A1AA` | Texto secundário |

Gradiente de destaque: `linear-gradient(90deg, #8B2BE2, #B04DFF)`.

Mapeamento para os tokens de implementação (`src/design-system/tokens.ts`, `src/app/globals.css`): ver tabela em [VISUAL_IDENTITY.md](./VISUAL_IDENTITY.md).

## Linguagem Visual

A identidade comunica: engenharia, arquitetura, desenvolvimento, inteligência, plataformas, runtime, evolução contínua.

Evitar qualquer associação com: marketing chamativo, startup colorida, marketplace, fintech convencional. A comunicação deve transmitir uma empresa de engenharia.

## Símbolo Oficial

O símbolo institucional é composto pelos caracteres conceituais `<` `>`, reinterpretados como um ícone geométrico. Representa simultaneamente: linguagem de programação, construção de software, abertura e fechamento de contexto, transformação de conhecimento em plataforma, portal entre intenção e execução.

Este conceito é o elemento central da identidade da Cyborg Tecnologia. Implementação de referência: `src/design-system/Logo.tsx`.

## Hierarquia Visual

```
Símbolo
  ↓
Logotipo
  ↓
Sistema de Design
  ↓
Produtos
  ↓
Ecossistema
```

## Ecossistema

Todos os produtos derivados herdam a mesma linguagem visual:

```
Cyborg Tecnologia
├── Cyborg Sniper
├── ALIADO
├── Rideshare Decision Engine
├── Cyborg Labs
└── futuros produtos
```

Cada produto pode possuir sua própria cor de destaque, mantendo: tipografia, grid, iconografia, motion, linguagem visual, arquitetura do símbolo.

**Nota de diferenciação de marcas**: o ALIADO mantém identidade própria calorosa e humana (laranja/dourado), reforçando mobilidade, proximidade e relacionamento — deliberadamente distinta da identidade roxa/preta da Cyborg Tecnologia, que transmite engenharia, arquitetura de software, documentação e plataformas tecnológicas. Essa separação fortalece o posicionamento institucional de cada produto preservando a coerência do ecossistema como um todo. Ver [ECOSYSTEM.md](./ECOSYSTEM.md).

## Fases de Migração

- **Fase 1 — Design Tokens / CSS Variables / Tailwind Theme**: concluída (`src/design-system/tokens.ts`, `src/app/globals.css`).
- **Fase 2 — Componentes compartilhados**: concluída (`Button`, `Card`, `Badge`, `Eyebrow`, `Logo`, `Header`, `Footer`, e todos os usos em `features/` e `app/**/page.tsx`).
- **Fase 3 — Documentação**: concluída (este ADR, `VISUAL_IDENTITY.md`, `DESIGN_SYSTEM.md`, `TYPOGRAPHY.md`, `BRAND_BOOK.md`, `ECOSYSTEM.md`, `AGENTS.md`).
- **Fase 4 — Ativos**: pendente. Favicon, Open Graph image, manifest/ícones PWA e social cards ainda não foram gerados como arquivos rasterizados — ver débito registrado em [VISUAL_IDENTITY.md](./VISUAL_IDENTITY.md). Um SVG do símbolo (`src/app/icon.svg`) foi criado como primeira aplicação do gradiente oficial.
