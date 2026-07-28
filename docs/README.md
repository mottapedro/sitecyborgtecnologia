# Documentation Architecture

Esta documentação é organizada por **concern institucional**, não por categoria de documento. Especificação completa: [architecture/DOCUMENTATION_ARCHITECTURE.md](./architecture/DOCUMENTATION_ARCHITECTURE.md).

```
docs/
├── institutional/   Quem é a Cyborg Tecnologia — identidade, posicionamento, estrutura organizacional.
├── brand/           Como a Cyborg Tecnologia comunica — identidade visual, marca, tipografia, conteúdo.
├── architecture/    Conhecimento arquitetural permanente — metodologia, arquitetura corporativa, modelos de referência.
├── research/        O que a organização investigou/validou — saída de laboratórios, experimentos, evidências.
├── roadmap/         Para onde a organização está indo — iniciativas futuras, marcos, planejamento.
└── adr/             Por que uma decisão específica foi tomada — Architecture Decision Records, datadas.
```

Antes de adicionar um novo documento, ler [architecture/DOCUMENTATION_ARCHITECTURE.md](./architecture/DOCUMENTATION_ARCHITECTURE.md) — ele define os critérios para criar uma nova pasta, convenções de nomenclatura, a política de `git mv`/links relativos, e a distinção entre `architecture/` (permanente) e `adr/` (decisão datada).
