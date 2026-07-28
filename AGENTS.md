<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Constituição da Marca

`docs/brand/BRAND_BOOK.md` é a Single Source of Truth da identidade institucional da Cyborg Tecnologia. `docs/` é organizado por concern institucional, não por tipo de documento — ver [`docs/README.md`](./docs/README.md) para o índice e [`docs/architecture/DOCUMENTATION_ARCHITECTURE.md`](./docs/architecture/DOCUMENTATION_ARCHITECTURE.md) para a especificação completa (critérios de criação de pasta, convenções, política de links). Antes de qualquer alteração de identidade visual (`src/design-system/`), tom de voz/conteúdo (`src/content/`), posicionamento ou estrutura do ecossistema, leia `docs/brand/BRAND_BOOK.md` e os documentos satélites:

- `docs/institutional/` — quem é a empresa: `COMPANY.md`, `ECOSYSTEM.md`, `IGP-001-INSTITUTIONAL_POSITIONING.md`, `WEBSITE_ARCHITECTURE.md`.
- `docs/brand/` — como comunicar: `BRAND_BOOK.md`, `BRAND_POSITIONING.md`, `CONTENT_GUIDE.md`, `DESIGN_SYSTEM.md`, `SOCIAL_MEDIA_GUIDE.md`, `TYPOGRAPHY.md`, `VISUAL_IDENTITY.md`.
- `docs/architecture/` — conhecimento arquitetural permanente: `DOCUMENTATION_ARCHITECTURE.md`.
- `docs/adr/` — decisões arquiteturais datadas: `ADR-001-identidade-visual.md`.

Qualquer mudança de identidade deve ser registrada nesses documentos antes de ser aplicada em código.

**Governança de identidade visual**: conforme `docs/adr/ADR-001-identidade-visual.md`, o ativo visual institucional aprovado (`public/identidade.png`) prevalece sobre qualquer descrição textual anterior. A paleta oficial é roxo/magenta sobre preto (tokens `primary`/`secondary` em `src/design-system/tokens.ts`) — nunca reintroduzir laranja/dourado no design system da Cyborg Tecnologia (essa paleta pertence à identidade do produto ALIADO, não da empresa).
