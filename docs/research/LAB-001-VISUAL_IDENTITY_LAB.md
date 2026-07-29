# LAB-001 — Visual Identity Laboratory

Status: **APPROVED**

Maturity: **Institutional Baseline**

Scope: Cyborg Tecnologia (empresa)

## Propósito

Formalizar a existência do Laboratório de Identidade Visual como capacidade institucional permanente da Cyborg Tecnologia — não como um projeto pontual, mas como o processo contínuo pelo qual a organização investiga, testa e valida hipóteses sobre sua própria identidade visual antes de institucionalizá-las em especificação (ver [Relação com especificações BRAND](#relação-com-especificações-brand)).

Este documento define o laboratório em si. Não documenta hipóteses individuais — essas nascem como documentos `VH-00X` (Visual Hypothesis) dentro deste mesmo diretório, uma vez que o laboratório exista como artefato institucional.

## Missão

Produzir evidência — não opinião — sobre o que faz um artefato visual ser reconhecido como pertencente à Cyborg Tecnologia, antes que qualquer princípio vire especificação obrigatória (`BRAND-001` e sucessores) ou seja aplicado em produção (site, apresentações, redes sociais).

## Escopo

Dentro do escopo do LAB-001:

- Exploração e teste de símbolo, paleta, tipografia, geometria e demais elementos de identidade visual.
- Validação de ativos institucionais aprovados (ex.: `public/identidade.png`) contra princípios ainda não escritos formalmente.
- Produção de evidência retroativa: decisões já tomadas fora de um processo formal de laboratório (ex.: a migração de paleta registrada em [ADR-001](../adr/ADR-001-identidade-visual.md)) podem ser reconhecidas como precedente do LAB-001 mesmo tendo ocorrido antes deste documento existir.

Fora do escopo do LAB-001:

- Implementação em código (`src/design-system/`, `src/app/`) — isso é responsabilidade do site, não do laboratório.
- Decisões de posicionamento institucional não-visual — isso é escopo de `docs/institutional/` (ver [IGP-001](../institutional/IGP-001-INSTITUTIONAL_POSITIONING.md)).
- Identidade visual de produtos do ecossistema (ex.: ALIADO) — o laboratório investiga a identidade da Cyborg Tecnologia como organização, não a de produtos individuais.

## Metodologia de pesquisa

1. **Observação/motivação** — parte de um ativo já aprovado, uma inconsistência identificada, ou uma pergunta em aberto sobre identidade visual.
2. **Formulação de hipótese** — a pergunta é escrita como uma Visual Hypothesis (`VH-00X`), com escopo fechado e critério de validação explícito.
3. **Geração de evidência** — comparação contra ativos aprovados, protótipos, ou análise de aplicações reais (ex.: como o símbolo se comporta em favicon, OG image, ícone PWA).
4. **Revisão** — a evidência é avaliada frente à hipótese; aceita, refutada, ou reaberta com escopo revisado.
5. **Consolidação** — hipóteses aceitas e maduras o suficiente são incorporadas a uma especificação de marca (`BRAND-00X`), nunca implementadas direto em código sem antes passar por uma especificação.

## Ciclo de vida de uma hipótese (`VH-00X`)

```
OPEN
  │
  ▼
UNDER REVIEW
  │
  ├──▶ REJECTED   (evidência não sustenta a hipótese; documento permanece como referência histórica)
  │
  └──▶ ACCEPTED   (evidência sustenta a hipótese; candidata a consolidação em BRAND-00X)
```

Uma `VH-00X` nunca é editada para mudar sua conclusão após `REJECTED`/`ACCEPTED` — mudanças de entendimento geram uma nova hipótese, referenciando a anterior. Mesmo princípio de rastreabilidade já aplicado a ADRs e IGPs (ver [DOCUMENTATION_ARCHITECTURE.md](../architecture/DOCUMENTATION_ARCHITECTURE.md#rastreabilidade-documental)).

## Geração de evidência

Evidência aceita neste laboratório inclui: comparação direta contra o ativo visual aprovado (`public/identidade.png`, conforme o princípio de governança do [ADR-001](../adr/ADR-001-identidade-visual.md)), protótipos de aplicação (favicon, ícones, OG image, lockups), e análise de consistência entre implementações existentes (ex.: `src/design-system/Logo.tsx` vs. o ativo aprovado).

Não é evidência aceita: preferência estética não fundamentada, benchmarking de mercado sem análise de encaixe institucional, ou qualquer justificativa que reintroduza linguagem de marketing vedada por [CONTENT_GUIDE.md](../brand/CONTENT_GUIDE.md).

## Processo de aprovação

```
LAB (hipótese aceita)
        │
        ▼
Review (contra ativos aprovados e specs existentes)
        │
        ▼
Baseline (consolidada em BRAND-00X)
        │
        ▼
WEB (aplicada em código/produção)
```

Nenhuma hipótese pula etapa: uma `VH-00X` `ACCEPTED` não é aplicada diretamente ao site — ela precisa antes ser consolidada numa especificação de marca. Isso preserva a mesma separação já estabelecida em [DOCUMENTATION_ARCHITECTURE.md](../architecture/DOCUMENTATION_ARCHITECTURE.md) entre conhecimento permanente (`brand/`) e decisão/evidência pontual (`adr/`, `research/`).

## Relação com especificações BRAND

O LAB-001 produz evidência; não define regra obrigatória. Quando um conjunto de hipóteses aceitas amadurece o suficiente para virar princípio institucional, ele é consolidado em um documento `docs/brand/BRAND-00X-*.md` — a especificação canônica, não o laboratório, é a fonte de verdade para implementação. Nenhuma `VH-00X` deve ser citada como justificativa direta em código; o código referencia a especificação `BRAND-00X` consolidada.

## Relação com especificações WEBSITE

O laboratório não implementa nada em `src/`. Uma vez que uma hipótese vire especificação de marca, a aplicação em produção é responsabilidade do site (`docs/institutional/WEBSITE_ARCHITECTURE.md` e a implementação real em `src/design-system/`, `src/app/`) — seguindo, quando existir, uma especificação institucional própria do website (`WEB-00X`) que trata da aplicação, não da origem, dos princípios visuais.

## Governança

Este documento formaliza o LAB-001 como capacidade institucional — não fecha nenhuma hipótese específica. A partir deste ponto, novas investigações de identidade visual devem ser registradas como `docs/research/VH-00X-*.md`, seguindo o ciclo de vida descrito acima, antes de qualquer proposta de especificação `BRAND-00X`.
