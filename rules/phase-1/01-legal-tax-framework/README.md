---
id: LTF-00
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies: []
---

# 01 - Legal & Tax Framework

## Section Overview

This section contains the **legal and tax framework templates** that form the foundational rule layer for the Israel-to-Cyprus relocation advisory system. Every rule, threshold, obligation, and legal reference used by downstream modules (risk assessment, timeline generation, compliance checking) originates from the files in this directory.

## Purpose

1. **Codify** Israeli and Cypriot tax law, treaty provisions, reporting obligations, and case law into structured, machine-readable rule tables.
2. **Enable traceability** -- every advisory output can be traced back to a specific Rule ID (e.g., `LTF-03-005`) and its underlying legal source.
3. **Support expert review** -- files are seeded with domain content but contain `<!-- EXPERT INPUT REQUIRED -->` markers and `[PLACEHOLDER]` tags wherever professional validation is needed before the rules go live.

## File Index

| # | File | Subject | Rule ID Range |
|---|------|---------|---------------|
| 1 | `01-israeli-tax-residency.md` | Israeli tax residency tests (day count, center of life) | LTF-01-001 -- LTF-01-015 |
| 2 | `02-exit-tax-section-100a.md` | Section 100A exit tax / deemed liquidation | LTF-02-001 -- LTF-02-010 |
| 3 | `03-cyprus-corporate-framework.md` | Cyprus company formation, corporate tax, IP box, non-dom | LTF-03-001 -- LTF-03-015 |
| 4 | `04-cyprus-banking-mortgage.md` | Banking, KYC/AML, mortgage eligibility in Cyprus | LTF-04-001 -- LTF-04-008 |
| 5 | `05-tax-treaties-israel-cyprus.md` | Israel-Cyprus double tax treaty provisions | LTF-05-001 -- LTF-05-010 |
| 6 | `06-reporting-obligations.md` | CRS, FATCA, Israeli & Cypriot filing obligations | LTF-06-001 -- LTF-06-012 |
| 7 | `07-case-law-references.md` | Court decisions, ITA rulings, Cyprus case law | LTF-07-001 -- LTF-07-008 |
| 8 | `08-national-insurance.md` | Bituach Leumi severance, voluntary continuation, Cyprus social security | LTF-08-001 -- LTF-08-008 |

## ID Convention

- **Prefix:** `LTF` (Legal Tax Framework)
- **Format:** `LTF-{FILE_NUMBER}-{ITEM_NUMBER}`
- Example: `LTF-01-003` refers to the third rule in file `01-israeli-tax-residency.md`

## Cross-References

- Data field IDs referenced in these tables use the `DR-xx-xxx` namespace defined in the Data Requirements section.
- Risk rules in downstream modules reference `LTF-xx-xxx` IDs to link advisory outputs back to their legal basis.

## Status Legend

| Status | Meaning |
|--------|---------|
| `draft` | Initial content seeded; awaiting expert review |
| `review` | Expert review in progress |
| `validated` | Expert-approved; ready for system integration |
| `archived` | Superseded by a newer version |

## How to Contribute

1. Locate the relevant `<!-- EXPERT INPUT REQUIRED -->` marker.
2. Replace `[PLACEHOLDER]` text with validated content.
3. Update the `status` field in the YAML front matter to `review`.
4. Bump the `version` field (e.g., `"1.0"` to `"1.1"`).
5. Update `last_updated` to the current date.
