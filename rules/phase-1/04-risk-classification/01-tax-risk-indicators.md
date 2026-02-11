---
id: RC-01
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies:
  - DR-03
  - DR-02
  - DR-04
  - DR-07
  - LTF-01
  - LTF-02
  - LTF-08
  - DT-01
  - DT-02
  - DT-03
---

# 01 — Tax Risk Indicators

## Purpose

This file catalogs **tax-related risk indicators** for Israeli tax residency severance and Cyprus relocation. Each indicator identifies a specific condition that may create tax exposure, trigger ITA scrutiny, or jeopardize the client's relocation plan.

Tax risks carry the highest category weight (0.35) in the overall risk score because they represent the most direct financial and legal exposure for clients.

---

## Risk Indicator Table

| Risk ID | Name | Category | Trigger Condition | Severity (1-5) | Mitigation | Legal Reference | Decision Tree Nodes | Data Fields |
|---------|------|----------|-------------------|-----------------|------------|-----------------|---------------------|-------------|
| RC-01-001 | Day Count Failure | Tax | `DR-03-001 > 183` (days present in Israel in current tax year) | 5 | Reduce physical presence in Israel immediately; document days outside Israel with travel records; consider amending travel plans for remainder of tax year | ITO Section 1(a)(2); `LTF-01-001`, `LTF-01-002` | `DT-01-001`, `DT-01-003` | `DR-03-001`, `DR-03-002` |
| RC-01-002 | Weighted Formula Breach | Tax | `DR-03-016 > 425` (weighted day count across current + two prior years exceeds threshold) | 5 | Review prior-year day counts; if breach is imminent, plan travel to stay below 425 weighted days; prepare rebuttal evidence if pre-2025 | ITO Section 1(a)(3); `LTF-01-003`, `LTF-01-004` | `DT-01-002`, `DT-01-004` | `DR-03-001`, `DR-03-002`, `DR-03-016` |
| RC-01-003 | Center of Life Challenge | Tax | Multiple indicators suggest Israel remains center of life: `DR-03-007 = true` AND (`DR-02-005 = "israel"` OR `DR-02-008 = "israel"` OR `DR-03-012 = "active"`) | 4 | Systematically sever Israel ties (property, employment, social); build Cyprus ties (lease, employment, club memberships); document center-of-life shift with contemporaneous evidence | ITO Section 1(a); `LTF-01-005`, `LTF-01-006`, `LTF-01-007` | `DT-01-005`, `DT-01-006`, `DT-02-001` | `DR-02-005`, `DR-02-008`, `DR-03-007`, `DR-03-012`, `DR-03-013`, `DR-03-015` |
| RC-01-004 | Exit Tax Underestimation | Tax | Client-reported asset values (`DR-04-001` through `DR-04-015`) are below estimated fair market value, leading to `FA-04-xxx` exit tax calculation below actual liability | 4 | Commission independent asset valuation; use certified appraiser for real estate and business interests; prepare Section 100A calculation with conservative estimates | ITO Section 100A; `LTF-02-001`, `LTF-02-002`, `LTF-02-005` | `DT-03-001`, `DT-03-003` | `DR-04-001`, `DR-04-003`, `DR-04-005`, `DR-04-007`, `DR-04-010` |
| RC-01-005 | Bituach Leumi Non-Severance | Tax | `DR-03-012 = "active"` (National Insurance status still active) | 3 | File Bituach Leumi severance notification (Form 628); verify no ongoing contributions are deducted from Israeli income sources; obtain confirmation letter from BL | ITO; National Insurance Law; `LTF-08-001`, `LTF-08-003` | `DT-02-003`, `DT-02-005` | `DR-03-012`, `DR-07-001` |
| RC-01-006 | Israeli Bank Account Active | Tax | `DR-03-013 = true` (maintaining active Israeli bank account post-exit) | 2 | Convert to non-resident account or close; notify bank of residency change; ensure CRS reporting reflects new status | ITO; CRS regulations; `LTF-06-003`, `LTF-01-008` | `DT-02-004` | `DR-03-013` |
| RC-01-007 | Israeli Property Retained | Tax | `DR-03-007 = true` (Israeli real property still owned post-exit) | 3 | Evaluate whether to sell pre-exit (capital gains considerations) or retain with proper rental income reporting; document intent (investment vs. residence); consider exit tax implications for property appreciation | ITO Section 100A; Betterment Tax Law; `LTF-02-003`, `LTF-01-009` | `DT-01-006`, `DT-03-002` | `DR-03-007`, `DR-04-007` |
| RC-01-008 | Spouse Employment in Israel | Tax | `DR-02-005 = "israel"` (spouse's primary employment location is Israel) | 4 | Spouse must transition employment to Cyprus or remote-for-non-Israeli-employer; Israeli employment is a strong center-of-life indicator; coordinate timing with overall exit plan | ITO Section 1(a) center-of-life test; `LTF-01-005`, `LTF-01-006` | `DT-01-005`, `DT-02-001` | `DR-02-005`, `DR-02-003` |
| RC-01-009 | Children in Israeli Schools | Tax | `DR-02-008 = "israel"` (children enrolled in Israeli educational institutions) | 4 | Transfer children to Cyprus or international schools; Israeli school enrollment is a significant center-of-life indicator in ITA assessment; plan transition for academic year boundaries | ITO Section 1(a) center-of-life test; `LTF-01-005`, `LTF-01-007` | `DT-01-005`, `DT-02-001` | `DR-02-008`, `DR-02-006` |
| RC-01-010 | Israeli Health Insurance Active | Tax | `DR-03-015 = true` (Israeli health fund / kupat cholim membership still active) | 2 | Transition to Cyprus/EU health coverage (GESY); cancel or suspend Israeli health fund membership; retain documentation of new coverage for center-of-life defense | National Health Insurance Law; `LTF-08-005`, `LTF-01-008` | `DT-02-003` | `DR-03-015`, `DR-07-005` |

<!-- EXPERT INPUT REQUIRED: Israeli tax attorney to validate trigger conditions and severity assignments. In particular:
1. Should RC-01-003 (Center of Life Challenge) be elevated to Severity 5 given the 2025 amendment making the irrebuttable presumption stricter?
2. Are there additional tax risk indicators related to controlled foreign corporation (CFC) rules that should be added?
3. Confirm whether RC-01-006 (bank account) severity of 2 is appropriate — some practitioners consider this a stronger indicator.
4. Add risk indicators for: (a) Israeli pension fund ongoing contributions, (b) Israeli driving license retention, (c) Israeli voting registration.
-->

---

## Trigger Condition Logic

### RC-01-001: Day Count Failure

```
IF DR-03-001 > 183 THEN
    severity = 5
    message = "Client has exceeded 183-day threshold in current tax year"
    action = "IMMEDIATE: Review travel records and plan departure"
END IF
```

### RC-01-002: Weighted Formula Breach

```
LET current_year_days = DR-03-001
LET prior_year_days = DR-03-002[year-1]
LET two_years_prior_days = DR-03-002[year-2]
LET weighted_total = current_year_days + (prior_year_days / 3) + (two_years_prior_days / 6)

IF weighted_total > 425 AND current_year_days >= 30 THEN
    severity = 5
    message = "Weighted day count formula breached"
END IF
```

<!-- EXPERT INPUT REQUIRED: Confirm the weighted formula divisors (1/3 and 1/6) and the 30-day minimum threshold for the current year. Some interpretations use different divisors post-2025 amendment. -->

### RC-01-003: Center of Life Challenge (Composite)

```
LET tie_count = 0
IF DR-03-007 = true THEN tie_count += 1   -- Israeli property
IF DR-02-005 = "israel" THEN tie_count += 1   -- Spouse works in Israel
IF DR-02-008 = "israel" THEN tie_count += 1   -- Children in Israeli schools
IF DR-03-012 = "active" THEN tie_count += 1   -- Bituach Leumi active
IF DR-03-013 = true THEN tie_count += 1   -- Israeli bank account
IF DR-03-015 = true THEN tie_count += 1   -- Israeli health insurance

IF tie_count >= 3 THEN
    severity = 4
    message = "Multiple center-of-life ties to Israel detected"
ELSE IF tie_count >= 1 THEN
    severity = 3
    message = "Some center-of-life ties to Israel remain"
END IF
```

<!-- EXPERT INPUT REQUIRED: Should the tie_count thresholds be weighted (e.g., spouse employment = 2 points, bank account = 1 point)? The ITA does not publish a formal weighting but case law suggests family ties are more significant than financial ties. See LTF-07-xxx case law references. -->

---

## Interaction with Decision Trees

Tax risk indicators interact with decision tree nodes at several critical points:

| Decision Tree | Node | Risk Check | Effect |
|---------------|------|------------|--------|
| `DT-01` Residency Severance Eligibility | `DT-01-001` | RC-01-001 (Day Count) | If triggered, route to "ineligible — day count exceeded" terminal |
| `DT-01` Residency Severance Eligibility | `DT-01-005` | RC-01-003 (Center of Life) | If severity >= 4, route to "enhanced review required" branch |
| `DT-02` Residency Severance Process | `DT-02-001` | RC-01-008, RC-01-009 | Family tie risks influence process timeline recommendations |
| `DT-03` Exit Tax Assessment | `DT-03-001` | RC-01-004 (Exit Tax Underestimation) | If triggered, mandate independent valuation before proceeding |

[PLACEHOLDER — Complete decision tree interaction mapping after DT section files are populated]

---

## Mitigation Priority Matrix

When multiple tax risk indicators are triggered simultaneously, mitigations should be prioritized:

| Priority | Indicators | Rationale |
|----------|------------|-----------|
| 1 (Immediate) | RC-01-001, RC-01-002 | Day count failures are time-sensitive and irreversible once the year closes |
| 2 (Urgent) | RC-01-003, RC-01-008, RC-01-009 | Center-of-life indicators require coordinated family action |
| 3 (Important) | RC-01-004, RC-01-007 | Financial risks that require professional valuation and planning |
| 4 (Monitor) | RC-01-005, RC-01-006, RC-01-010 | Administrative actions that can be completed in parallel |

<!-- EXPERT INPUT REQUIRED: Validate priority ordering. Consider whether RC-01-004 (Exit Tax Underestimation) should be elevated to Priority 2 given potential penalties for underpayment. -->

---

## Professional Disclaimer

> **IMPORTANT:** Tax risk indicators are based on current Israeli tax law (Income Tax Ordinance) and ITA administrative practice as understood at the time of drafting. Tax law is subject to change, and ITA enforcement practice may vary. Risk severity scores are advisory estimates and must not be relied upon as definitive tax advice. All tax risk assessments must be reviewed by a licensed Israeli tax attorney before client communication. See `Professional_Disclaimer.md` for complete disclaimer language.

[PLACEHOLDER — Confirm disclaimer language with legal counsel]
