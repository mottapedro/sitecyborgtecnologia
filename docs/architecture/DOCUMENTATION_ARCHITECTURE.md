# DOCUMENTATION_ARCHITECTURE.md — Especificação da Arquitetura de Documentação

Status: **APPROVED**

Maturity: **Institutional Baseline**

Scope: Cyborg Tecnologia (empresa)

## Propósito

Registrar formalmente as regras que organizam `docs/` — para que a estrutura pare de existir apenas porque "foi assim que organizamos" e passe a ser uma especificação institucional, evoluída de forma controlada.

## Princípio arquitetural

`docs/` é organizado por **concern institucional** (o domínio de conhecimento a que um documento pertence), nunca por **categoria de documento** (tipo/formato).

Bom: `institutional/`, `brand/`, `architecture/`, `research/`, `roadmap/`, `adr/`.

Ruim: `markdowns/`, `specifications/`, `guides/`, `misc/`.

Um novo colaborador (humano ou agente de IA) deve entender a filosofia da organização olhando só os nomes das pastas de primeiro nível — sem precisar abrir nenhum arquivo.

## Domínios e responsabilidades

| Domínio | Responde a | Contém |
|---|---|---|
| `institutional/` | Quem é a Cyborg Tecnologia? | Identidade, posicionamento, estrutura organizacional — `COMPANY.md`, `ECOSYSTEM.md`, `IGP-001-INSTITUTIONAL_POSITIONING.md`, `WEBSITE_ARCHITECTURE.md` |
| `brand/` | Como a Cyborg Tecnologia comunica? | Identidade visual, marca, tipografia, design system, conteúdo, redes sociais |
| `architecture/` | Qual é o conhecimento arquitetural permanente? | Documentos de longa duração: metodologia de engenharia, arquitetura corporativa, modelos de referência — inclui este próprio documento |
| `research/` | O que a organização investigou/validou? | Saída de laboratórios, experimentos, evidências |
| `roadmap/` | Para onde a organização está indo? | Iniciativas futuras, marcos, planejamento |
| `adr/` | Por que uma decisão específica foi tomada, e quando? | Architecture Decision Records — cada um com Contexto, Decisão, Consequências |

### `architecture/` vs. `adr/`

Esta é a distinção mais importante da especificação, porque é a que mais costuma faltar em projetos grandes:

- **`adr/`** registra uma **decisão pontual e datada** — nasceu de um contexto específico, tem uma decisão e consequências conhecidas no momento em que foi escrita (ex.: [ADR-001](../adr/ADR-001-identidade-visual.md), sobre a paleta de cores oficial).
- **`architecture/`** registra **conhecimento estável e reutilizável** que não está preso a um momento específico — ex.: este próprio documento, ou uma futura metodologia de engenharia.

Uma ADR pode, com o tempo, motivar a criação ou atualização de um documento em `architecture/` — mas o inverso raramente ocorre. Nunca duplicar conteúdo entre os dois: se uma ADR precisa ser referenciada de um documento de arquitetura, usar link, não cópia (mesmo princípio de Single Source of Truth já aplicado entre `BRAND_BOOK.md`/`ADR-001`/`VISUAL_IDENTITY.md`).

## Critérios para criação de uma nova pasta de primeiro nível

Criar uma nova pasta em `docs/` somente quando um concern institucional genuinamente novo emergir — não para agrupar por tipo de arquivo. Antes de criar, perguntar: "este documento responde a uma pergunta que nenhum dos seis domínios acima responde?" Se a resposta for não, o documento pertence a um domínio existente.

Pastas podem ser criadas vazias (com um `README.md` mínimo descrevendo o escopo pretendido) quando o concern já é reconhecido institucionalmente mesmo antes de haver conteúdo — foi o caso de `research/` e `roadmap/` nesta refatoração.

## Convenções de nomenclatura

- Pastas de primeiro nível: minúsculas, uma palavra, em inglês (`institutional`, `brand`, `architecture`, `research`, `roadmap`, `adr`).
- Documentos: `SCREAMING_SNAKE_CASE.md` para documentos de referência (`BRAND_BOOK.md`, `CONTENT_GUIDE.md`), prefixo de código para documentos sequenciais/versionados (`ADR-001-...`, `IGP-001-...`).
- Todo documento de decisão (ADR, IGP) declara `Status` no topo (`OPEN`, `DECIDED`/`APPROVED`, etc.) — nunca fica implícito.

## Migração de arquivos

Toda movimentação de documento entre pastas usa `git mv`, nunca copiar+apagar — preserva o histórico (`git log --follow` continua funcionando após a movimentação).

## Política de links relativos

Links entre documentos usam caminho relativo Markdown (`[Nome](../pasta/Arquivo.md)`). Ao mover um documento:

1. Reescrever todo link que passou a cruzar fronteira de pasta.
2. Verificar que nenhum link relativo em `docs/` resolve para um caminho inexistente (checagem automatizável percorrendo cada `.md` e resolvendo cada `](.` contra o sistema de arquivos).
3. Confirmar que referências externas a `docs/` — `AGENTS.md`, `README.md` da raiz — continuam válidas.

## Rastreabilidade documental

- Nenhum conteúdo é duplicado entre documentos — a relação entre eles é sempre por link, nunca por cópia (ver exemplo em `architecture/` vs. `adr/` acima).
- Documentos de decisão (ADR, IGP) declaram explicitamente quando/como podem ser reabertos, evitando que uma "atualização" vire um documento paralelo divergente.
- Esta especificação é, ela mesma, sujeita a esta mesma regra: qualquer mudança na organização de `docs/` deve ser refletida aqui antes ou junto da mudança em si.

## Governança

A partir deste documento, toda evolução de `docs/` deve preservar a organização por domínios institucionais descrita acima, salvo decisão arquitetural formal em sentido contrário (nova entrada em `architecture/` ou `adr/`, conforme a natureza da mudança).
