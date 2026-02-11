---
id: SYS-DEPLOYMENT-PLAN
version: "1.0"
status: draft
created: "2026-02-10"
last_updated: "2026-02-10"
authors:
  - "Solutions Architect"
  - "Technology Researcher"
  - "Security & Compliance Architect"
  - "DevOps Engineer"
  - "Rule Engine Architect"
---

# L.T.A Advisory Platform — System Deployment Plan

## High-Level Design for a Unique Cross-Border Tax Advisory Service

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Current State Assessment](#2-current-state-assessment)
3. [Target Architecture](#3-target-architecture)
4. [Security & Compliance Framework](#4-security--compliance-framework)
5. [Rule Engine Implementation Strategy](#5-rule-engine-implementation-strategy)
6. [CI/CD & DevOps Strategy](#6-cicd--devops-strategy)
7. [Phased Deployment Roadmap](#7-phased-deployment-roadmap)
8. [Integration Architecture](#8-integration-architecture)
9. [Scalability Plan](#9-scalability-plan)
10. [Cost Estimates & Resource Requirements](#10-cost-estimates--resource-requirements)
11. [Risk Assessment & Mitigation](#11-risk-assessment--mitigation)
12. [Success Metrics & KPIs](#12-success-metrics--kpis)
13. [Appendix: Technology Decision Matrix](#13-appendix-technology-decision-matrix)

---

## 1. Executive Summary

### What We're Building

L.T.A Advisory Services is a **unique, boutique cross-border tax advisory platform** serving high-net-worth individuals ($5M+ assets) navigating residency changes from Israel to Cyprus. The platform combines:

- A **luxury bilingual website** (EN/HE) that positions L.T.A as a premium advisory brand
- An **automated rule engine** encoding 83+ Israeli/Cyprus tax rules, 40+ decision tree nodes, 34+ risk indicators, and 27+ financial models
- A **secure client portal** for document management, case tracking, and personalized advisory dashboards

### What Makes This Unique

This is not a generic fintech product. The platform encodes **deep domain expertise** (Israeli exit tax law, Cyprus non-dom status, bilateral treaties) into machine-executable rules, creating a defensible competitive moat. The Phase 1 template system — with its cross-referenced ID namespaces (LTF, DT, DR, RC, FA, VS) and structured YAML frontmatter — is an exceptionally well-architected foundation for automation.

### Critical Regulatory Context

- **Israeli Privacy Protection Law Amendment 13** (effective August 14, 2025) introduces GDPR-like requirements with statutory damages up to ILS 100,000. PPA database registration is mandatory.
- **CySEC Directive K.D.P. 120/2025** (effective June 2, 2025) imposes enhanced CDD obligations for financial advisory.
- **Global RegTech market** projected from $16B (2025) to $62B by 2032 — the timing for this platform is ideal.
- **93% of advisory firms** now offer advisory services, with AI-assisted platforms showing 21% higher billable hours per staff.

### Recommended Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | Vercel (Next.js 16 hybrid SSR/SSG) | Native Next.js host, Turbopack bundler, edge network, preview deploys |
| **Database** | Supabase PostgreSQL (Frankfurt, EU) | RLS, built-in auth, storage, real-time, GDPR-compliant |
| **Rule Engine** | GoRules ZEN Engine + json-rules-engine (hybrid) | ZEN for decision trees (sub-ms execution), json-rules-engine for risk scoring |
| **AI Layer** | Claude API | Data extraction, natural language explanations, report generation |
| **Cache** | Upstash Redis (serverless, Frankfurt) | Sessions, rate limiting, rule evaluation caching |
| **Auth** | Supabase Auth + MFA | Unified with DB, magic links for HNW clients, TOTP for advisors |
| **File Storage** | Supabase Storage (S3-compatible, EU) | Co-located with DB, signed URLs, server-side encryption |
| **Email** | Resend (transactional) | Developer-friendly, EU sending, React Email templates |
| **Monitoring** | Sentry + Vercel Analytics | Error tracking + performance monitoring |
| **CI/CD** | GitHub Actions (enhanced) | Security scanning, multi-env deploys, Lighthouse CI |

### Key Deployment Principles

1. **Security-first** — PII and financial data encrypted at field level; GDPR + Israeli PPA compliant
2. **EU data residency** — All data in Frankfurt (eu-central-1); equidistant from Israel and Cyprus
3. **Managed services** — Minimize DevOps burden for a small team; no self-hosted infrastructure
4. **Phased evolution** — Static site → Client portal → Full automation → AI-augmented advisory
5. **Expert validation workflow** — Rule changes go through Draft → Review → Verified → Locked lifecycle

---

## 2. Current State Assessment

### 2.1 What Exists Today

**Website (Production — Netlify)**
- Next.js 16.1 with App Router, TypeScript 5, React 19
- Bilingual (EN/HE) with full RTL support via `next-intl`
- 11 pages: Home, About, Services, Contact, Privacy, Terms, Disclaimer + error pages
- Contact form via Next.js Server Actions + Nodemailer (SMTP)
- Integrations: Google Analytics (consent-aware), Calendly, WhatsApp FAB
- JSON-LD structured data (ProfessionalService + FAQPage)
- E2E testing: Playwright + axe-core (WCAG AA)
- CI/CD: GitHub Actions → Netlify auto-deploy

**Rule Engine Templates (Phase 1 — /Sys/phase-1/)**
- 50 structured markdown files across 6 sections
- 117+ data fields with 5-level sensitivity classification
- 83+ legal rules covering Israeli/Cyprus tax law, treaties, reporting
- 40+ decision tree nodes with Mermaid diagrams
- 34+ risk indicators with weighted scoring (Tax 0.35, Legal 0.30, Structural 0.20, Financial 0.15)
- 27+ financial models (income, cash flow, mortgage, exit tax, optimization, cost-benefit)
- 7 end-to-end validation scenarios
- All files DRAFT status with 100+ `<!-- EXPERT INPUT REQUIRED -->` markers

### 2.2 Critical Gaps

| Gap | Severity | Impact |
|-----|----------|--------|
| No database | **Critical** | Client data, case history, risk scores have nowhere to persist |
| No authentication | **Critical** | No client portal, no advisor login, no session management |
| No API layer | **Critical** | No structured API for rule engine execution |
| No rule engine runtime | **Critical** | Decision trees exist only as markdown, not executable code |
| No file storage | **High** | Clients can't upload passports, tax returns, financial statements |
| No audit logging | **High** | Financial advisory requires full audit trail for compliance |
| Netlify limitations | **High** | No database hosting, no persistent compute, no WebSocket support |
| No environment separation | **Medium** | Single deployment target; no staging/preview environments |
| No monitoring/alerting | **Medium** | No APM, error tracking, or uptime monitoring |
| No secrets management | **Medium** | Env vars for SMTP; need proper secrets vault for expanded credentials |

---

## 3. Target Architecture

### 3.1 Architecture Overview

```
                        ┌──────────────────────────────────┐
                        │          VERCEL (Edge CDN)        │
                        │  ┌────────────────────────────┐  │
                        │  │  Next.js 16 (Hybrid)       │  │
                        │  │  ┌───────┐ ┌────────────┐  │  │
    Clients/Advisors ──▶│  │  │ SSG   │ │ SSR        │  │  │
    (Browser)           │  │  │ Pages  │ │ Portal     │  │  │
                        │  │  └───────┘ └────────────┘  │  │
                        │  │  ┌────────────────────────┐ │  │
                        │  │  │ API Routes             │ │  │
                        │  │  │ /api/auth, /api/rules  │ │  │
                        │  │  │ /api/clients, /api/risk │ │  │
                        │  │  └─────────┬──────────────┘ │  │
                        │  └────────────┼────────────────┘  │
                        └───────────────┼──────────────────┘
                                        │
                    ┌───────────────────┼───────────────────┐
                    │                   │                    │
              ┌─────▼─────┐    ┌───────▼───────┐   ┌──────▼──────┐
              │  Supabase  │    │ Upstash Redis │   │  Supabase   │
              │ PostgreSQL │    │  (Frankfurt)  │   │  Storage    │
              │ (Frankfurt)│    │               │   │ (Frankfurt) │
              │            │    │ • Sessions    │   │             │
              │ • Clients  │    │ • Rate limit  │   │ • Documents │
              │ • Cases    │    │ • Rule cache  │   │ • Signed    │
              │ • Rules    │    └───────────────┘   │   URLs      │
              │ • Scores   │                        └─────────────┘
              │ • Audit    │
              │ + Auth     │
              │ + RLS      │
              └────────────┘

         ┌──────────────────────────────────────────┐
         │         EXTERNAL INTEGRATIONS             │
         │  Resend │ Calendly │ Stripe │ HubSpot    │
         │  (Email)│ (Sched.) │ (Pay)  │ (CRM)     │
         └──────────────────────────────────────────┘
```

### 3.2 Frontend — Vercel (Hybrid SSR/Static)

**Migrate from Netlify to Vercel:**
- Vercel is the native host for Next.js 16 with first-class App Router support
- Hybrid rendering: marketing pages as SSG with ISR, portal pages as SSR with auth middleware
- Edge Functions for locale detection, auth checks, rate limiting
- Preview deployments per PR for better developer experience
- Edge Network with European PoPs (Frankfurt, Amsterdam)

**Page rendering strategy:**

| Route | Rendering | Auth |
|-------|-----------|------|
| `/`, `/about`, `/services` | SSG + ISR (24h) | Public |
| `/contact` | SSG | Public |
| `/privacy`, `/terms`, `/disclaimer` | SSG | Public |
| `/dashboard/*` | SSR | Advisor (MFA) |
| `/client/*` | SSR | Client (magic link) |
| `/api/*` | Serverless Functions | Token-based |

### 3.3 Database — Supabase PostgreSQL (Frankfurt)

**Schema domains:**

```sql
-- Core entities
clients          -- HNW client profiles (PII encrypted at field level)
cases            -- Advisory engagements (1 client → N cases)
case_data_fields -- 117+ structured fields per case (JSONB)

-- Rule engine
rule_definitions -- Compiled rules from Phase 1 templates
decision_runs    -- Execution history (input → path → terminal state)
risk_scores      -- Category scores + overall + tier per case

-- Financial
financial_models -- Model configs, inputs, outputs per case
financial_runs   -- Calculation execution history

-- Documents
documents        -- Metadata (actual files in Supabase Storage)

-- Compliance
audit_log        -- Immutable append-only table
consent_records  -- GDPR consent tracking
data_access_log  -- Who accessed what PII, when
```

**Row-Level Security (RLS):**
- Advisors see only clients assigned to them
- Clients see only their own case data
- Audit log is append-only (no UPDATE/DELETE)

### 3.4 Authentication & Authorization

**Two user roles:**

| Role | Auth Method | Access Level | MFA |
|------|------------|--------------|-----|
| **Advisor** | Email + Password | Full access to assigned clients | Required (TOTP) |
| **Client** | Magic Link Email | Read-only own case + document upload | Optional (recommended) |
| **Admin** | Email + Password | System-wide access | Required (TOTP + recovery) |

**Session management:**
- httpOnly cookies + Redis-backed sessions
- JWT tokens for API calls (15-min expiry + refresh tokens)
- Automatic session invalidation on inactivity (30 min for advisors)

### 3.5 File Storage — Supabase Storage

- S3-compatible object storage in Frankfurt
- Server-side encryption (AES-256) at rest
- Signed URLs for time-limited access (15-min expiry)
- Bucket structure: `passports/`, `financial-statements/`, `tax-returns/`, `corporate-docs/`, `case-reports/`
- Virus scanning on upload (webhook → ClamAV)
- Whitelist: PDF, JPG, PNG, DOCX, XLSX (max 25MB per file)

---

## 4. Security & Compliance Framework

### 4.1 Data Classification Matrix

| Level | Examples | Encryption | Access | Retention |
|-------|---------|------------|--------|-----------|
| **Public** | Service descriptions, pricing tiers | TLS in transit | Anyone | Indefinite |
| **Internal** | Case notes, advisor comments | TLS + AES-256 at rest | Advisors only | Case lifetime + 7 years |
| **Confidential** | Risk scores, financial models | TLS + AES-256 + column encryption | Assigned advisor | Case lifetime + 7 years |
| **PII** | Name, email, phone, address | TLS + AES-256 + field-level encryption | Assigned advisor + client | Consent period + legal retention |
| **PII-Sensitive** | Israeli ID, passport, bank details, tax returns | TLS + AES-256 + field-level AES-256-GCM + HSM key | Assigned advisor only (MFA) | Legal minimum, then encrypted deletion |

### 4.2 Encryption Architecture

```
┌─────────────────────────────────────────────┐
│               IN TRANSIT                     │
│  TLS 1.3 (all connections)                  │
│  Certificate pinning for API clients        │
│  HSTS with min-age 31536000                 │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│               AT REST                        │
│  Database: AES-256 (Supabase managed)       │
│  File storage: AES-256-SSE (Supabase)       │
│  Backups: Encrypted (Supabase managed)      │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│           FIELD-LEVEL (PII-Sensitive)        │
│  Algorithm: AES-256-GCM                     │
│  Key management: Application-level          │
│  Encrypted fields: Israeli ID, passport,    │
│    bank account, tax ID, asset valuations   │
│  Searchable: Via blind index (HMAC-SHA256)  │
└─────────────────────────────────────────────┘
```

### 4.3 Compliance Requirements

**GDPR (EU General Data Protection Regulation):**
- [x] Consent management (cookie consent banner already implemented)
- [ ] Data Processing Agreement (DPA) with Supabase, Vercel, Resend
- [ ] Privacy Impact Assessment (PIA/DPIA) for rule engine processing
- [ ] Right to erasure workflow (automated data deletion)
- [ ] Data portability (export client data in structured format)
- [ ] Breach notification (72-hour window to supervisory authority)
- [ ] Data Protection Officer appointment (if processing at scale)

**Israeli Privacy Protection Law 5741-1981 (Amendment 13 — effective August 14, 2025):**

> **CRITICAL FINDING:** Amendment 13 is a sweeping GDPR-like reform that substantially increases enforcement powers and penalties. Financial details are now classified as "especially sensitive" data. Statutory damages up to ILS 100,000 without proof of harm.

- [ ] Database registration with Israeli Privacy Protection Authority (PPA) — **mandatory; non-compliance carries penalties**
- [ ] Mandatory Privacy Protection Officer appointment for entities handling sensitive data
- [ ] Consent forms in Hebrew — explicit, documented, granular consent required
- [ ] Cross-border transfer authorization (Israel → EU via adequacy + SCCs as backup)
- [ ] Security measures per PPA regulations (2017 amendment) — including penetration tests every 18 months
- [ ] Data subject access request workflow (legally specified timeframes)
- [ ] Prepare for PPA AI regulation — PPA signaled intent to regulate AI systems processing personal data

**Cyprus Data Protection:**
- [ ] Registration with Office of the Commissioner for Personal Data Protection
- [ ] Legal basis for processing (legitimate interest for advisory services)
- [ ] Data retention policy aligned with Cyprus Companies Law

**CRS/FATCA:**
- Data storage must support CRS XML reporting format
- FATCA classification for US-person screening
- Separate encrypted storage for reportable account information

### 4.4 Cross-Border Data Transfer

```
Israel ←→ EU (Frankfurt) ←→ Cyprus

Legal basis:
- Israel has EU adequacy decision (valid since 2011)
- Cyprus is EU member state (intra-EU transfer)
- Additional safeguards: Standard Contractual Clauses (SCCs)
  as belt-and-suspenders approach

Data residency:
- ALL data stored in Frankfurt (eu-central-1)
- No data replication outside EU
- Backups within EU only
```

### 4.5 Audit & Logging

| Log Type | Content | Retention | Storage |
|----------|---------|-----------|---------|
| **Access log** | Who accessed which client record, when | 3 years | Append-only DB table |
| **Change log** | Field-level changes to client data | 7 years | Append-only DB table |
| **Rule execution log** | Decision tree path, inputs, outputs | 7 years | Append-only DB table |
| **Auth log** | Login, logout, MFA, failed attempts | 2 years | Separate log store |
| **Admin log** | Rule changes, config changes, role changes | 7 years | Append-only DB table |
| **System log** | Errors, performance, infrastructure events | 90 days | Sentry + Vercel logs |

### 4.6 KYC/AML Requirements

> L.T.A Advisory Services Limited, as a financial advisory firm in Cyprus, must comply with Cyprus AML Law, EU Anti-Money Laundering Directives, and CySEC Directive K.D.P. 120/2025.

**All LTA clients require Enhanced Due Diligence (EDD)** — net worth >$5M is the baseline trigger.

| Step | Requirement | Documents Required |
|------|------------|-------------------|
| Client Identification | Verify identity using reliable sources | Valid passport/ID (original), proof of address (<3 months) |
| Beneficial Owner ID | Identify persons holding >25% of client entities | Company registry extracts, shareholder registers |
| Source of Funds | Verify origin of wealth/funds | Bank statements, employment contracts, asset sale docs |
| PEP Screening | Check Politically Exposed Person databases | World-Check, Dow Jones, or equivalent |
| Sanctions Screening | Check OFAC, EU, Israeli sanctions lists | Automated API screening |
| Ongoing Monitoring | Continuous relationship monitoring | Annual review minimum |

**Platform requirements:** Secure document upload, PEP/sanctions screening API integration, audit trail for all KYC decisions, periodic review reminders, red flag alerting system.

### 4.7 Incident Response Plan

| Phase | Action | Timeline |
|-------|--------|----------|
| **Detection** | Automated alerting (Sentry, Supabase alerts) | Immediate |
| **Assessment** | Classify severity, determine if PII exposed | < 4 hours |
| **Containment** | Isolate affected systems, revoke compromised credentials | < 8 hours |
| **Notification** | GDPR: supervisory authority within 72 hours; affected individuals "without undue delay" | < 72 hours |
| **Israeli PPA** | Notify PPA if Israeli citizen data affected | < 72 hours |
| **Recovery** | Restore from backups, patch vulnerability | < 1 week |
| **Post-mortem** | Root cause analysis, prevention measures | < 2 weeks |

### 4.7 Recommended Certifications Timeline

| Certification | When | Why |
|---------------|------|-----|
| **SOC 2 Type I** | Phase 3 (month 9-12) | Baseline security posture for client trust |
| **SOC 2 Type II** | Phase 4 (month 15-18) | Ongoing compliance demonstration |
| **ISO 27001** | Phase 5 (month 24+) | International standard, required for enterprise clients |

---

## 5. Rule Engine Implementation Strategy

### 5.1 Template-to-Engine Architecture

The Phase 1 markdown templates are the **source of truth**. The rule engine is built through a compilation pipeline:

```
Phase 1 Markdown         Compile Step           Runtime
Templates                                       Engine

┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ YAML front   │     │ Parser       │     │ TypeScript    │
│ matter +     │────▶│ (remark +    │────▶│ Rule Module   │
│ Structured   │     │  gray-matter)│     │ (.ts files)   │
│ Tables +     │     └──────┬───────┘     └──────┬───────┘
│ Mermaid      │            │                    │
│ Diagrams     │     ┌──────▼───────┐     ┌──────▼───────┐
└──────────────┘     │ Schema       │     │ Execution    │
                     │ Validator    │     │ Engine       │
                     │ (zod)        │     │              │
                     └──────────────┘     │ • DAG walker │
                                          │ • Scorer     │
                                          │ • Calculator │
                                          └──────────────┘
```

### 5.2 Technology Recommendation

**Hybrid Three-Layer Engine** (GoRules ZEN + json-rules-engine + Claude API)

After evaluating 6 approaches (GoRules ZEN, json-rules-engine, Custom DSL, Drools/OpenRules, Low-Code platforms, AI-only), the recommended architecture is a **three-layer hybrid**:

| Layer | Technology | Handles | Fit Score |
|-------|-----------|---------|-----------|
| **Layer 1: Deterministic** | GoRules ZEN Engine | Decision tree traversal (DT-01→DT-07), data validation | 8/10 |
| **Layer 2: Scoring** | json-rules-engine | Threshold-based risk indicators (RC-*), composite conditions | 7/10 |
| **Layer 3: AI Augmentation** | Claude API | Data extraction, natural language explanations, report generation | 9/10 as augmentation |

**Why GoRules ZEN (primary):**
- Open-source BRE written in Rust with native Node.js bindings — sub-millisecond execution
- Decision tables map directly from the Phase 1 node table format
- Expression language supports conditions like `DR_03_001 > 183`
- Visual graph editor available for non-developer expert review
- Active maintenance (latest release Feb 2026)

**Why NOT a custom-only approach:**
- GoRules and json-rules-engine are battle-tested; custom parsers are fragile for markdown edge cases
- The Mermaid diagrams are visual-only — the node tables ARE the executable format

**Key libraries for template migration:**

| Library | Purpose |
|---------|---------|
| `gray-matter` | Extract YAML front matter from 50 template files |
| `remark` + `remark-gfm` | Parse markdown tables to structured JSON |
| `zod` | Schema validation for extracted rules |
| `@gorules/zen-engine` | Decision tree execution (Node.js native) |
| `json-rules-engine` | Risk indicator threshold evaluation |
| `@anthropic-ai/sdk` | Claude API for AI augmentation layer |

### 5.3 Template Analysis — Current Readiness

The rule engine expert conducted a deep analysis of all 50 template files:

| Metric | Count | Notes |
|--------|-------|-------|
| `<!-- EXPERT INPUT REQUIRED -->` markers | **255** | Across all 50 files |
| `[PLACEHOLDER]` entries | **783** | 71 in exit tax calculations alone |
| Parseable pseudocode conditions | **34+** | Follow `IF DR-xx-xxx [operator] threshold THEN` pattern |
| Decision tree nodes with dual representation | **45+** | Mermaid + node table (tables are executable, diagrams are validation) |

**Template strengths for automation:**
- YAML frontmatter provides metadata schema directly (id, version, status, dependencies)
- Node tables have exact column structure: `Node ID | Type | Question | Data Field | Yes Path | No Path | Risk Flag | Legal Source`
- Risk trigger conditions follow parseable pseudocode pattern
- Financial models have step-by-step formulas with explicit variable→field mappings

**Template weaknesses requiring special handling:**
- Center of Life test (LTF-01-003 through LTF-01-005) is qualitative — needs weighted scoring or AI
- 783 PLACEHOLDERs in financial models need graceful "unvalidated" flags
- Cross-reference matrix (DR-09) has wildcard references (`DT-01-*`) needing resolution

### 5.4 Rule Compilation Pipeline

```bash
npm run compile-rules
```

**Steps:**

1. **Scan** — Find all `.md` files in `/Sys/phase-1/` with status `verified` or `locked`
2. **Parse** — Extract YAML front matter via `gray-matter`, structured tables via `remark-gfm`
3. **Validate** — Check cross-references (every `DR-xx-xxx` referenced in a DT node must exist)
4. **Transform** — Convert to typed intermediate formats:
   - Decision trees → GoRules JDM (JSON Decision Model) files
   - Risk indicators → json-rules-engine definitions
   - Data fields → Zod validation schemas
   - Financial models → TypeScript calculator modules
5. **Store** — Load into PostgreSQL `rules` table with JSON columns + `rule_versions` audit table
6. **Test** — Run all 7 validation scenarios (VS-01 through VS-07) as automated integration tests

### 5.5 Migration Timeline (11 Weeks)

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| **2A: Template Extraction** | Weeks 1-3 | Markdown parser → structured JSON for all 50 files |
| **2B: Decision Tree Engine** | Weeks 3-5 | 7 decision trees (45+ nodes) in GoRules JDM format, unit tested |
| **2C: Risk Scoring Engine** | Weeks 5-7 | RC-05 methodology: individual → category → weighted → tier classification |
| **2D: Financial Calculator** | Weeks 7-9 | Exit tax (FA-04), income (FA-01), cash flow (FA-02), mortgage (FA-03) |
| **2E: Integration & Validation** | Weeks 9-11 | End-to-end: VS-01 must produce ELIGIBLE-COMPLEX, ORANGE tier, ~$1.25M exit tax |

**Target performance:** < 200ms for full client evaluation through all layers.

### 5.6 Expert Validation Workflow

**Handling the 255 `<!-- EXPERT INPUT REQUIRED -->` markers:**

```
Domain Expert                     Git Workflow                     Platform

┌──────────────┐     ┌──────────────────────┐     ┌────────────┐
│ Expert edits │     │ 1. Branch per expert  │     │ Automated  │
│ markdown in  │────▶│ 2. PR with diff       │────▶│ validation │
│ VS Code /    │     │ 3. Peer review        │     │ on PR      │
│ GitHub UI    │     │ 4. Status: draft →    │     │            │
└──────────────┘     │    expert_review      │     │ • Schema   │
                     │ 5. Merge to main      │     │   check    │
                     │ 6. Status: verified   │     │ • ID refs  │
                     └──────────────────────┘     │ • Mermaid  │
                                                   │   parse    │
                                                   └────────────┘
```

**Phase 3+ Enhancement: Web-based expert review interface**
- Admin UI for domain experts to review and approve rules
- Inline commenting on specific fields
- Side-by-side diff view for rule changes
- Approval workflow with audit trail
- Status tracking dashboard (matching the Phase 1 README status table)

### 5.5 AI Integration Opportunities

| Opportunity | Phase | Description |
|-------------|-------|-------------|
| **Client Intake** | Phase 3 | LLM processes unstructured client documents to pre-fill the 117+ data fields |
| **Decision Explanation** | Phase 3 | LLM generates natural language explanations of rule engine decisions |
| **Edge Case Detection** | Phase 4 | LLM identifies scenarios not covered by existing rules |
| **Report Generation** | Phase 4 | LLM generates draft advisory reports from rule engine outputs |
| **Regulatory Updates** | Phase 5 | LLM monitors legal changes and flags affected rules for expert review |

**Approach: LLM as augmentation, not replacement.**
The rule engine provides deterministic, auditable decisions. LLMs augment by handling unstructured input/output and identifying gaps — but never override rule engine outputs for compliance-critical decisions.

---

## 6. CI/CD & DevOps Strategy

### 6.1 Current Pipeline Assessment

**What works well:**
- GitHub Actions with lint → type-check → build → Playwright e2e
- Clean separation of concerns in workflow stages
- Playwright + axe-core for accessibility testing

**What needs enhancement:**
- No staging environment
- No security scanning (SAST, dependency audit)
- No database migration automation
- No multi-environment deployment
- No secrets management beyond env vars

### 6.2 Target CI/CD Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│                     GITHUB ACTIONS PIPELINE                      │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────────┐  │
│  │ Quality  │  │ Security │  │  Build   │  │    Deploy     │  │
│  │ Gates    │  │ Scan     │  │          │  │               │  │
│  │          │  │          │  │          │  │               │  │
│  │ • Lint   │─▶│ • npm    │─▶│ • Build  │─▶│ • Preview     │  │
│  │ • Types  │  │   audit  │  │ • Rules  │  │   (PR)        │  │
│  │ • Format │  │ • SAST   │  │   compile│  │ • Staging     │  │
│  │          │  │ • Trivy  │  │ • Unit   │  │   (merge)     │  │
│  │          │  │   scan   │  │   tests  │  │ • Production  │  │
│  │          │  │          │  │ • E2E    │  │   (tag/manual)│  │
│  └──────────┘  └──────────┘  └──────────┘  └───────────────┘  │
│                                                                  │
│  Rule Compilation ──────────────────────────────────────────▶   │
│  npm run compile-rules → validate → test scenarios              │
│                                                                  │
│  Database Migrations ───────────────────────────────────────▶   │
│  Supabase migrations (dev → staging → production)               │
└─────────────────────────────────────────────────────────────────┘
```

### 6.3 Environment Strategy

| Environment | Purpose | Deploy Trigger | URL Pattern |
|-------------|---------|---------------|-------------|
| **Preview** | PR review | Every PR | `pr-{number}.lta-preview.vercel.app` |
| **Development** | Integration testing | Push to `develop` | `dev.lta-advisory.com` |
| **Staging** | Pre-production validation | Push to `staging` | `staging.lta-advisory.com` |
| **Production** | Live service | Git tag or manual approval | `lta-advisory.com` |

### 6.4 Monitoring & Observability

| Layer | Tool | What It Monitors |
|-------|------|-----------------|
| **Error Tracking** | Sentry | Runtime errors, unhandled exceptions, source maps |
| **Performance** | Vercel Analytics | Core Web Vitals (LCP, CLS, INP), TTFB |
| **Uptime** | Better Uptime or Checkly | HTTP endpoint monitoring, SSL certificate expiry |
| **Database** | Supabase Dashboard | Query performance, connection pool, storage usage |
| **Application** | Custom metrics → Sentry | Rule engine execution time, risk scoring latency |
| **Security** | Snyk / GitHub Dependabot | Dependency vulnerabilities, SAST findings |
| **Logs** | Vercel Logs + Supabase Logs | Request logs, function execution, auth events |

### 6.5 Secret Management

| Phase | Approach | Secrets |
|-------|----------|---------|
| **Phase 2** | Vercel Environment Variables (encrypted) | SMTP, Supabase keys, API tokens |
| **Phase 3+** | HashiCorp Vault or AWS Secrets Manager | Encryption keys, financial API credentials |

### 6.6 Backup & Disaster Recovery

| Component | Backup Strategy | RPO | RTO |
|-----------|----------------|-----|-----|
| **Database** | Supabase daily automated backups + PITR | 1 hour | 4 hours |
| **File Storage** | S3 cross-region replication (optional) | 24 hours | 8 hours |
| **Rule Templates** | Git repository (inherently backed up) | 0 (real-time) | Minutes |
| **Configuration** | Infrastructure as Code (Git) | 0 | 1 hour |

---

## 7. Phased Deployment Roadmap

### Phase 2: Foundation (Months 1-3)

**Goal:** Migrate to production infrastructure and build MVP client portal

| # | Task | Priority | Dependencies |
|---|------|----------|-------------|
| 2.1 | Migrate from Netlify to Vercel | High | None |
| 2.2 | Set up Supabase project (Frankfurt) | High | None |
| 2.3 | Design and implement database schema | High | 2.2 |
| 2.4 | Implement authentication (Supabase Auth) | High | 2.2 |
| 2.5 | Build rule engine compiler (`npm run compile-rules`) | High | None |
| 2.6 | Build advisor dashboard (case management) | High | 2.3, 2.4 |
| 2.7 | Build client intake questionnaire (117+ fields) | High | 2.3 |
| 2.8 | Set up staging environment | Medium | 2.1 |
| 2.9 | Add security scanning to CI/CD | Medium | None |
| 2.10 | Set up Sentry error tracking | Medium | 2.1 |

**Deliverable:** Advisors can create cases, enter client data, and run decision trees

### Phase 3: Full Advisory Engine (Months 4-8)

**Goal:** Complete rule engine with risk scoring and financial modeling

| # | Task | Priority | Dependencies |
|---|------|----------|-------------|
| 3.1 | Implement risk scoring engine (34+ indicators) | High | Phase 2 |
| 3.2 | Implement financial modeling (exit tax, optimization) | High | Phase 2 |
| 3.3 | Build document management (upload, storage, signing) | High | Phase 2 |
| 3.4 | Build client self-service portal | Medium | Phase 2 |
| 3.5 | Integrate CRM (HubSpot) | Medium | Phase 2 |
| 3.6 | Integrate payment processing (Stripe) | Medium | Phase 2 |
| 3.7 | Build audit logging system | High | Phase 2 |
| 3.8 | Expert review web interface for rules | Medium | 2.5 |
| 3.9 | Run validation scenarios (VS-01 through VS-07) | High | 3.1, 3.2 |
| 3.10 | GDPR compliance implementation (DPA, DPIA, erasure) | High | Phase 2 |

**Deliverable:** End-to-end advisory workflow from client intake to risk report

### Phase 4: Automation & AI (Months 9-14)

**Goal:** Automate routine tasks and add AI-powered features

| # | Task | Priority | Dependencies |
|---|------|----------|-------------|
| 4.1 | AI-powered client document processing | Medium | Phase 3 |
| 4.2 | Automated advisory report generation | Medium | Phase 3 |
| 4.3 | Regulatory update monitoring and propagation | Medium | 3.8 |
| 4.4 | Batch risk re-evaluation (monthly) | Medium | 3.1 |
| 4.5 | SOC 2 Type I preparation and audit | High | Phase 3 |
| 4.6 | Advanced analytics dashboard | Low | Phase 3 |
| 4.7 | WhatsApp Business API integration | Low | Phase 3 |

**Deliverable:** AI-augmented advisory with compliance certification

### Phase 5: Scale (Months 15-24+)

**Goal:** Scale the platform and explore multi-advisor / SaaS potential

| # | Task | Priority | Dependencies |
|---|------|----------|-------------|
| 5.1 | Multi-advisor support (team management) | Medium | Phase 4 |
| 5.2 | White-label potential assessment | Low | Phase 4 |
| 5.3 | SOC 2 Type II certification | Medium | 4.5 |
| 5.4 | ISO 27001 preparation | Low | 5.3 |
| 5.5 | Performance optimization and caching | Medium | Phase 4 |
| 5.6 | Multi-region expansion (if needed) | Low | Phase 4 |

**Deliverable:** Production-grade advisory SaaS with compliance certifications

---

## 8. Integration Architecture

### 8.1 Current Integrations

| Integration | Status | Implementation |
|-------------|--------|---------------|
| Google Analytics 4 | Active | Consent-aware client component |
| Calendly | Active | Env-gated popup button |
| WhatsApp | Active | Floating action button |
| SMTP (Nodemailer) | Active | Server action for contact form |

### 8.2 Phase 2-3 Integrations

| Integration | Purpose | Provider | Priority |
|-------------|---------|----------|----------|
| **Transactional Email** | Case updates, document requests | Resend | High |
| **CRM** | Client relationship management | HubSpot Starter | High |
| **Document Signing** | Engagement letters, NDAs | DocuSign or PandaDoc | High |
| **Payment Processing** | Consultation fees, retainers | Stripe (ILS + EUR) | Medium |
| **Scheduling** | Deep calendar integration | Calendly API or Cal.com | Medium |
| **Notifications** | Real-time client updates | Email + WhatsApp Business API | Medium |

### 8.3 Phase 4-5 Integrations

| Integration | Purpose | Notes |
|-------------|---------|-------|
| **LLM API** | Advisory drafts, document processing | Claude API for case analysis |
| **Cyprus Companies Registry** | Incorporation status checks | REST API |
| **Open Banking** | Account verification | PSD2 (EU) / Israel Open Banking |
| **CRS/FATCA Reporting** | Automated compliance reporting | Specialized vendor |
| **Accounting** | Invoice generation, revenue tracking | Xero or QuickBooks |

---

## 9. Scalability Plan

### Tier 1: 10 Clients (Now → Month 6)

| Aspect | Specification |
|--------|-------------|
| **Architecture** | Monolith (Next.js on Vercel + Supabase) |
| **Database** | Supabase Pro ($25/mo) |
| **Frontend** | Vercel Pro ($20/mo) |
| **Cache** | Upstash Redis Free |
| **Total Cost** | ~$50-75/month |
| **Team** | 1 developer, 1 domain expert |

### Tier 2: 100 Clients (Month 6-18)

| Aspect | Specification |
|--------|-------------|
| **Architecture** | Monolith with connection pooling + background jobs |
| **Database** | Supabase Pro + compute add-ons (~$75/mo) |
| **Frontend** | Vercel Pro + functions (~$50/mo) |
| **Cache** | Upstash Redis Pro (~$10/mo) |
| **Background Jobs** | Inngest or Trigger.dev ($25/mo) |
| **Monitoring** | Sentry ($26/mo) |
| **Total Cost** | ~$200-300/month |
| **Team** | 2 developers, 2 domain experts |

### Tier 3: 1,000 Clients (Month 18-36)

| Aspect | Specification |
|--------|-------------|
| **Architecture** | Modular services (extracted rule engine) |
| **Database** | Supabase Team + read replicas (~$200/mo) |
| **Rule Engine** | Dedicated container (Railway/Render, ~$50/mo) |
| **Frontend** | Vercel Enterprise or Team (~$100/mo) |
| **Cache** | Upstash Redis Enterprise (~$50/mo) |
| **Total Cost** | ~$500-1,000/month |
| **Team** | 3-4 developers, 2-3 domain experts, 1 DevOps |

### Scaling Decisions (Deferred)

- **Kubernetes:** Not until 5,000+ clients or multi-tenant SaaS pivot
- **Microservices:** Only if distinct teams own distinct services
- **Multi-region:** Only if client base expands beyond Israel/Cyprus/EU

---

## 10. Cost Estimates & Resource Requirements

### Infrastructure Costs (Monthly)

| Phase | Duration | Monthly Cost | Annual Cost |
|-------|----------|-------------|-------------|
| **Phase 2** (Foundation) | Months 1-3 | $75-150 | $900-1,800 |
| **Phase 3** (Full Engine) | Months 4-8 | $200-350 | $2,400-4,200 |
| **Phase 4** (AI + Automation) | Months 9-14 | $350-600 | $4,200-7,200 |
| **Phase 5** (Scale) | Months 15-24 | $500-1,000 | $6,000-12,000 |

### Third-Party Service Costs (Monthly, Phase 3+)

| Service | Cost | Notes |
|---------|------|-------|
| Resend (email) | $20/mo | 50K emails/month |
| HubSpot Starter (CRM) | $20/mo | Per user |
| Stripe (payments) | 2.9% + $0.30 per transaction | No monthly fee |
| DocuSign (signing) | $25/mo | Per user |
| Sentry (monitoring) | $26/mo | Team plan |
| Claude API (AI) | ~$50-200/mo | Usage-based |

### Development Resources

| Phase | Duration | Team Size | Estimated Dev Cost |
|-------|----------|-----------|-------------------|
| **Phase 2** | 3 months | 1 senior dev + 1 domain expert | $30K-50K |
| **Phase 3** | 5 months | 2 devs + 1 domain expert | $60K-100K |
| **Phase 4** | 6 months | 2 devs + 1 AI/ML eng + 1 domain expert | $80K-130K |
| **Phase 5** | 12 months | 3-4 devs + 1 DevOps + 2 domain experts | $150K-250K |

---

## 11. Risk Assessment & Mitigation

### Technical Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Rule engine complexity exceeds estimates | Medium | High | Start with 1-2 decision trees in Phase 2, validate approach before full build |
| Expert validation bottleneck (100+ markers) | High | High | Prioritize by dependency order (DR first, then DT, then RC/FA) |
| Data migration from manual records | Medium | Medium | Build import tools early; validate with domain experts |
| Vercel pricing at scale | Low | Medium | Vercel Pro is cost-effective to 100 clients; Railway fallback for Phase 5 |
| Supabase limitations | Low | Medium | PostgreSQL is portable; can migrate to Neon or self-hosted if needed |

### Compliance Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| GDPR non-compliance | Medium | Critical | Engage privacy counsel; implement DPIA before processing PII |
| Israeli PPA requirements change | Medium | High | Monitor PPA updates; design for flexibility in consent management |
| 2026 Cyprus tax reform impact | High | High | Build rules to be easily updated; the template system supports this well |
| Cross-border data transfer challenges | Low | High | EU data residency (Frankfurt) with Israel adequacy decision |

### Business Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Slow client adoption | Medium | High | Start with manual advisory supported by the platform; phase in automation |
| Domain expert availability | High | High | Document everything in Phase 1 templates; reduce single-expert dependency |
| Regulatory changes invalidating rules | Medium | High | Version-controlled rules with rapid update workflow |
| Competition from larger firms | Low | Medium | Unique positioning (Israel→Cyprus niche) is a strong differentiator |

---

## 12. Success Metrics & KPIs

### Platform KPIs

| Metric | Phase 2 Target | Phase 3 Target | Phase 5 Target |
|--------|---------------|---------------|---------------|
| **Uptime** | 99.5% | 99.9% | 99.95% |
| **Page Load (LCP)** | < 2.5s | < 2.0s | < 1.5s |
| **API Response Time (p95)** | < 500ms | < 300ms | < 200ms |
| **Rule Engine Execution** | < 5s per tree | < 3s per tree | < 1s per tree |
| **E2E Test Coverage** | 80% | 90% | 95% |
| **Security Scan Pass Rate** | 100% critical | 100% high + critical | 100% all |

### Business KPIs

| Metric | Phase 2 Target | Phase 3 Target | Phase 5 Target |
|--------|---------------|---------------|---------------|
| **Active Clients** | 5-10 | 25-50 | 100+ |
| **Case Completion Time** | Manual + platform assist | 50% automated | 80% automated |
| **Client Satisfaction (NPS)** | > 40 | > 50 | > 60 |
| **Expert Rules Validated** | 30% (top priority) | 75% | 100% |
| **Revenue per Client** | Baseline | +15% efficiency gain | +30% efficiency gain |

### Compliance KPIs

| Metric | Target |
|--------|--------|
| **Data breach incidents** | 0 |
| **Audit log completeness** | 100% of PII access logged |
| **GDPR request response time** | < 30 days (< 72h for breach) |
| **Security vulnerability fix time** | Critical: < 24h, High: < 7 days |
| **SOC 2 findings** | 0 critical, < 3 medium |

---

## 13. Appendix: Technology Decision Matrix

| Decision | Chosen | Runner-Up | Why |
|----------|--------|-----------|-----|
| **Frontend Host** | Vercel | Netlify | Native Next.js 16 support, edge functions, preview deploys |
| **Database** | Supabase (PostgreSQL) | Neon | Built-in auth + storage + RLS, single vendor simplicity |
| **Rule Engine** | Custom TypeScript | json-rules-engine | Domain templates too structured for generic engine |
| **Auth** | Supabase Auth | Clerk | Unified with database, fewer vendors, magic link support |
| **File Storage** | Supabase Storage | AWS S3 | Co-located with DB, S3-compatible, EU region |
| **Cache** | Upstash Redis | Vercel KV | Serverless, Frankfurt region, pay-per-request |
| **Email** | Resend | SendGrid | Developer-friendly, React Email, EU sending |
| **CRM** | HubSpot Starter | Pipedrive | Hebrew UI, generous free tier, strong API |
| **Payments** | Stripe | PayPlus | ILS + EUR support, robust API, built-in compliance |
| **Monitoring** | Sentry + Vercel Analytics | Datadog | Cost-effective for small team |
| **IaC** | Terraform (Phase 3+) | Pulumi | Wider ecosystem, Supabase/Vercel providers |
| **Background Jobs** | Inngest | Trigger.dev | Serverless, Vercel-native, event-driven |
| **AI/LLM** | Claude API | GPT-4 | Superior reasoning for regulatory text analysis |
| **Container Platform** | Railway (Phase 5) | Render | Simple deployment, auto-scaling, good DX |

---

## 14. Immediate Action Items (Before Phase 2 Development)

These actions are **blocking prerequisites** identified by the security and compliance review:

| # | Action | Owner | Deadline | Why Critical |
|---|--------|-------|----------|-------------|
| 1 | **Complete DPIA** (Data Protection Impact Assessment) | DPO / Legal | Before Phase 2 launch | Mandatory under GDPR Art. 35 before processing PII-sensitive data at scale |
| 2 | **Register databases with Israeli PPA** | Legal | Before Phase 2 launch | Legal obligation under Amendment 13; non-compliance carries statutory penalties |
| 3 | **Appoint DPO / Privacy Protection Officer** | Management | Immediately | Required for databases primarily handling sensitive data (Israeli IDs, financial data) |
| 4 | **Execute DPAs** with all processors | Legal | Before Phase 2 | Google Analytics, Calendly, Supabase, Vercel, Resend — all need Data Processing Agreements |
| 5 | **Implement SCCs as Israel-EU transfer backup** | Legal | Before Phase 2 | Israel's EU adequacy status is under political review; prepare backup mechanism |
| 6 | **Design field-level encryption into DB schema** | Engineering | Phase 2 Week 1 | Must be architected from day one; retrofitting is extremely costly |
| 7 | **Set up KYC/AML verification process** | Compliance | Before client onboarding | CySEC Directive K.D.P. 120/2025 requires enhanced CDD for all clients |
| 8 | **Add security scanning to CI/CD** | DevOps | This sprint | npm audit, TruffleHog, Dependabot — zero-cost improvements |

### Estimated Compliance Costs (Annual, Ongoing)

| Item | Estimated Cost |
|------|---------------|
| DPO (external, part-time) | EUR 8,000-15,000/year |
| ISO 27001 certification | EUR 15,000-40,000 (initial) |
| SOC 2 Type II audit | EUR 20,000-50,000 |
| Legal counsel (Cyprus data protection) | EUR 5,000-10,000/year |
| Penetration testing (every 18 months) | EUR 5,000-10,000 |
| Compliance automation platform (Vanta/Drata) | EUR 5,000-12,000/year |
| **Total annual compliance** | **EUR 30,000-60,000/year** |

> This is non-negotiable for a platform handling HNW client data across two jurisdictions.

---

## Summary

This deployment plan transforms L.T.A Advisory Services from a static marketing website into a **unique, automated cross-border tax advisory platform** — the first of its kind for the Israel-Cyprus corridor. The phased approach ensures:

1. **Immediate value** — Current website continues serving clients while platform is built
2. **Security by design** — PII protection and compliance baked in from Phase 2
3. **Expert-driven rules** — Domain knowledge captured in structured, version-controlled templates
4. **Scalable foundation** — Managed services (Vercel + Supabase) scale from 10 to 1,000 clients
5. **AI augmentation** — LLMs enhance (but never replace) the deterministic rule engine
6. **Clear evolution path** — Each phase delivers standalone value while building toward full automation

The combination of deep domain expertise (encoded in 50 template files with 255 expert markers and 783 placeholders), modern infrastructure (Vercel + Supabase + GoRules ZEN + Claude API), and phased rollout makes this a low-risk, high-reward deployment strategy for a boutique advisory firm.

**The key architectural insight:** LLMs handle unstructured↔structured translation and explanation. Deterministic engines handle rule evaluation. Humans approve final outputs. This satisfies the emerging 2026 regulatory expectation for "human-in-the-loop" AI governance in financial services.

---

## Appendix: Research Sources

Key industry sources referenced during expert review:
- [Israel Amendment 13 — IAPP](https://iapp.org/news/a/israel-marks-a-new-era-in-privacy-law-amendment-13-ushers-in-sweeping-reform) — Sweeping Israeli privacy reform
- [Israel Data Protection Laws 2025-2026 — ICLG](https://iclg.com/practice-areas/data-protection-laws-and-regulations/israel)
- [GoRules ZEN Engine](https://docs.gorules.io/reference/nodejs) — Recommended decision tree engine
- [json-rules-engine](https://www.npmjs.com/package/json-rules-engine) — Risk scoring engine
- [Next.js 16 Production Guide](https://nextjs.org/docs/app/guides/production-checklist)
- [RegTech Compliance Automation Trends](https://cleareye.ai/regulatory-technology-compliance-automation-trends-banks/)
- [Agentic AI in Tax/Accounting Firms 2026](https://cpatrendlines.com/2026/01/10/outlook-2026-agentic-ai-reaches-the-tipping-point-in-tax-and-accounting-firms/)
- [Encryption Best Practices 2025](https://trainingcamp.com/articles/encryption-best-practices-2025-complete-guide-to-data-protection-standards-and-implementation/)
- [Cross-Border Data Transfers Guide](https://www.dpo-consulting.com/blog/cross-border-data-transfers)
- [SOC 2 vs PCI DSS in Fintech](https://www.hicomply.com/blog/soc-2-vs-pci-dss-in-fintech-what-you-really-need-first)

---

*Document prepared by the LTA Deployment Review Team — 2026-02-10*
*Expert agents: Solutions Architect, Technology Researcher, Security & Compliance Architect, DevOps Engineer, Rule Engine Architect*
*Status: DRAFT — Awaiting stakeholder review*
