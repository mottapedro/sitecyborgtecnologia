<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Constituição da Marca

`docs/BRAND_BOOK.md` é a Single Source of Truth da identidade institucional da Cyborg Tecnologia. Antes de qualquer alteração de identidade visual (`src/design-system/`), tom de voz/conteúdo (`src/content/`), posicionamento ou estrutura do ecossistema, leia `docs/BRAND_BOOK.md` e os documentos satélites em `docs/` (`VISUAL_IDENTITY.md`, `DESIGN_SYSTEM.md`, `TYPOGRAPHY.md`, `CONTENT_GUIDE.md`, `ECOSYSTEM.md`, `WEBSITE_ARCHITECTURE.md`, `SOCIAL_MEDIA_GUIDE.md`, `BRAND_POSITIONING.md`). Qualquer mudança de identidade deve ser registrada nesses documentos antes de ser aplicada em código.

**Governança de identidade visual**: conforme `docs/ADR-001-identidade-visual.md`, o ativo visual institucional aprovado (`public/identidade.png`) prevalece sobre qualquer descrição textual anterior. A paleta oficial é roxo/magenta sobre preto (tokens `primary`/`secondary` em `src/design-system/tokens.ts`) — nunca reintroduzir laranja/dourado no design system da Cyborg Tecnologia (essa paleta pertence à identidade do produto ALIADO, não da empresa).
