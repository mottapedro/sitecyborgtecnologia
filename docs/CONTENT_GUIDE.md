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

## Padrão obrigatório para descrições de produto (`Project.description`)

Toda descrição de produto em `src/content/projects.ts` deve responder, nesta ordem:

1. **Qual problema resolve?** (o domínio/necessidade que o produto endereça)
2. **Que arquitetura utiliza?** (os componentes/padrões técnicos que sustentam a solução)
3. **Qual ativo institucional representa** dentro do ecossistema Cyborg Tecnologia?

Vocabulário preferido: arquitetura, governança, domínio, runtime, observabilidade, engenharia, evidências. Nunca "revolucionário", "inovador", "o melhor", "único" — reforça o princípio de linguagem factual e verificável já descrito acima. Ao adicionar um novo produto a `projects.ts`, sua `description` deve seguir esse padrão desde o primeiro commit, garantindo a mesma narrativa institucional em todo o ecossistema (ver [ECOSYSTEM.md](./ECOSYSTEM.md)).

## Idioma

Todo o conteúdo institucional é em português (pt-BR). Termos técnicos em inglês (Pricing Engine, Dispatch Runtime, Decision Driven Engine) são mantidos no original — não traduzir nomenclatura de arquitetura.

## Onde editar

Todo texto institucional vive em `src/content/*.ts` — nunca hardcoded em componentes (`src/features/`, `src/app/**/page.tsx`, `src/components/`). Qualquer novo texto institucional deve ser adicionado à camada de conteúdo correspondente antes de ser referenciado por um componente.
