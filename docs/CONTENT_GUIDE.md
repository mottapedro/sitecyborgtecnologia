# CONTENT_GUIDE.md — Tom de Voz e Comunicação

> Complementa [BRAND_BOOK.md](./BRAND_BOOK.md) §11–12. Fonte de conteúdo publicado: `src/content/`.

## Tom de voz

A comunicação institucional da Cyborg Tecnologia deve transmitir: clareza, engenharia, precisão, elegância, autoridade técnica.

Nunca:

- Linguagem apelativa ou de venda agressiva ("revolucionário", "único no mercado", "imperdível").
- Promessas exageradas ou não verificáveis.
- Adjetivos vazios sem lastro técnico.

Sempre:

- Frases diretas, factuais, verificáveis.
- Termos técnicos corretos (DDD, Pricing Engine, Decision Driven Engine, etc.) sem explicação excessiva — o público-alvo entende engenharia.
- Personalidade: calma, precisa, organizada, tecnicamente profunda, elegante (Brand Book §12).

## Padrões observados no conteúdo já publicado

- `src/content/company.ts` — mission/tagline em uma frase objetiva, sem adjetivos de marketing.
- `src/content/projects.ts` — descrições de projeto sempre no formato "o que é → como é construído", nunca "por que você vai amar".
- `src/content/services.ts` — cada serviço lista `deliverables` concretos, não benefícios abstratos.

## Glossário Institucional

Vocabulário oficial da Cyborg Tecnologia — termos abaixo têm significado fixo e não devem ser usados de forma solta ou intercambiável com sinônimos.

### Ativo Operacional (Operational Asset)

Um runtime, plataforma ou sistema de software que produz valor operacional contínuo para a organização e cuja evolução é governada por evidências, observabilidade e validação em ambiente real.

Uso corrente no site (pt-BR): **"Ativo Operacional"** — ex.: status do Cyborg Sniper em `src/content/projects.ts`. O termo em inglês, **"Operational Asset"**, é a referência institucional para quando o portal ganhar uma versão EN-US com tradução institucional completa (ver nota em [BRAND_BOOK.md](./BRAND_BOOK.md) §11). Até lá, não introduzir o termo em inglês isoladamente no site — a tradução deve ser completa, não parcial.

### Débito arquitetural futuro — VOC-001

Este glossário nasce embutido no `CONTENT_GUIDE.md` porque hoje tem um único verbete. Quando o vocabulário institucional crescer (ex.: Arquitetura Intelectual, Runtime Institucional, Evidence-Driven Engineering, Arquitetura de Domínio, Engineering Asset, Foundation, Laboratory, Capability, Context, Property, Behavior), ele deve ser extraído para um documento próprio — `docs/VOC-001-institutional-vocabulary.md` — seguindo o mesmo padrão já usado para identidade visual ([ADR-001](./ADR-001-identidade-visual.md)): um documento único como Single Source of Truth, referenciado por `CONTENT_GUIDE.md`, `BRAND_BOOK.md` e demais docs, nunca duplicado entre eles. Critério de gatilho: mais de ~5 verbetes oficiais definidos, ou a primeira vez que um termo do glossário precisar ser citado por três ou mais documentos diferentes.

## Padrão editorial obrigatório para descrições de produto (`Project.description`)

Este é um elemento da identidade editorial da Cyborg Tecnologia, não apenas uma convenção de conteúdo. Toda descrição de produto em `src/content/projects.ts` deve responder, em até três frases:

1. **O que ele representa para o ecossistema?** (Ativo)
2. **Como foi concebido?** (Arquitetura)
3. **O que ele entrega?** (Capacidades / papel institucional)

A ordem desses três elementos pode variar conforme a natureza do produto — o essencial é que os três apareçam, não a sequência fixa:

- **Produtos voltados ao usuário final** (ex.: ALIADO): abrir pelo **problema/domínio que resolve**, depois a **arquitetura**, fechando com o **papel de ativo institucional** ("...o ativo operacional da Cyborg Tecnologia para o domínio de X").
- **Runtimes e infraestrutura institucional** (ex.: Cyborg Sniper): abrir já afirmando **o que o produto é como ativo** ("Cyborg Sniper é um ativo operacional da Cyborg Tecnologia para..."), depois a **arquitetura**, fechando com as **capacidades** que ele entrega.

Em ambos os casos, a descrição deve ser coerente com o `status` (badge) do produto — nunca usar um termo no badge e outro na descrição para o mesmo conceito (ex.: badge "Ativo Operacional" com descrição abrindo em "runtime institucional" é a inconsistência que este padrão existe para evitar).

Vocabulário preferido: arquitetura, governança, domínio, runtime, observabilidade, engenharia, evidências. Nunca "revolucionário", "inovador", "o melhor", "único" — reforça o princípio de linguagem factual e verificável já descrito acima. Ao adicionar um novo produto a `projects.ts`, sua `description` deve seguir este padrão desde o primeiro commit, garantindo a mesma narrativa institucional em todo o ecossistema (ver [ECOSYSTEM.md](./ECOSYSTEM.md)).

## Idioma

Todo o conteúdo institucional é em português (pt-BR). Termos técnicos em inglês (Pricing Engine, Dispatch Runtime, Decision Driven Engine) são mantidos no original — não traduzir nomenclatura de arquitetura.

## Onde editar

Todo texto institucional vive em `src/content/*.ts` — nunca hardcoded em componentes (`src/features/`, `src/app/**/page.tsx`, `src/components/`). Qualquer novo texto institucional deve ser adicionado à camada de conteúdo correspondente antes de ser referenciado por um componente.
