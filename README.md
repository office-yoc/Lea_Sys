# Lea_Sys — L.T.A Advisory Platform

Cross-border tax advisory rule engine and client portal for Israel-Cyprus relocation planning.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Database | PostgreSQL (Supabase) + Prisma ORM |
| Rule Engine | GoRules ZEN Engine + json-rules-engine |
| Auth | Supabase Auth (magic links + MFA) |
| i18n | next-intl (EN/HE with RTL) |
| AI | Claude API (data extraction, explanations) |
| Testing | Vitest + Playwright + axe-core |
| CI/CD | GitHub Actions |

## Project Structure

```
Lea_Sys/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Locale-based pages (EN/HE)
│   │   └── api/               # Backend API routes
│   │       ├── auth/           # Authentication endpoints
│   │       ├── clients/        # Client CRUD
│   │       ├── rules/          # Rule engine execution
│   │       ├── risk/           # Risk scoring
│   │       ├── financial/      # Financial models
│   │       └── documents/      # Document management
│   ├── components/             # React components
│   │   ├── ui/                # Shared UI components
│   │   ├── layout/            # Layout components
│   │   ├── portal/            # Client portal components
│   │   └── dashboard/         # Advisor dashboard
│   ├── lib/
│   │   ├── rules/             # Rule engine
│   │   │   ├── compiler/      # Markdown → executable rules
│   │   │   ├── engine/        # GoRules ZEN + json-rules-engine
│   │   │   └── generated/     # Compiled rule output (gitignored)
│   │   ├── db/                # Database utilities
│   │   ├── auth/              # Authentication helpers
│   │   ├── encryption/        # Field-level encryption (AES-256-GCM)
│   │   ├── audit/             # Audit logging
│   │   ├── financial/         # Financial calculators
│   │   └── ai/                # Claude API integration
│   ├── types/                 # TypeScript type definitions
│   ├── i18n/                  # Internationalization config
│   └── messages/              # Translation files (en.json, he.json)
├── rules/
│   └── phase-1/              # Expert-validated rule templates (50 files)
│       ├── 01-legal-tax-framework/
│       ├── 02-decision-trees/
│       ├── 03-data-requirements/
│       ├── 04-risk-classification/
│       ├── 05-financial-analysis/
│       └── 06-validation-scenarios/
├── prisma/
│   └── schema.prisma          # Database schema
├── e2e/                       # Playwright E2E tests
├── docs/                      # Documentation
│   └── DEPLOYMENT_PLAN.md     # Full deployment plan
└── infrastructure/            # IaC (Phase 3+)
```

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Set up database (requires Supabase project)
npm run db:push

# Run development server
npm run dev

# Run tests
npm test
npm run test:e2e
```

## Rule Engine

The platform compiles 50 structured markdown templates into executable rules:

```bash
# Compile Phase 1 templates into executable engine
npm run compile-rules
```

See `rules/phase-1/README.md` for template documentation and `docs/DEPLOYMENT_PLAN.md` for the full architecture plan.
