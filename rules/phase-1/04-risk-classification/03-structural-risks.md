---
id: RC-03
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies:
  - DR-06
  - DR-08
  - LTF-03
  - LTF-05
  - DT-04
  - DT-07
---

# 03 — Structural Risks

## Purpose

This file catalogs **structural and organizational risks** related to Cyprus company formation and maintenance. These risks assess whether the Cyprus entity has sufficient economic substance, proper corporate governance, and genuine operational presence to withstand regulatory scrutiny from both Israeli and Cypriot authorities.

Structural risks carry a category weight of 0.20 in the overall risk score. While lower-weighted than tax and legal risks, structural deficiencies can be catastrophic — an entity found to lack substance may have its entire tax position unwound, effectively negating the relocation benefit.

---

## Risk Indicator Table

| Risk ID | Name | Category | Trigger Condition | Severity (1-5) | Mitigation | Legal Reference | Decision Tree Nodes | Data Fields |
|---------|------|----------|-------------------|-----------------|------------|-----------------|---------------------|-------------|
| RC-03-001 | Single Director Structure | Structural | Only nominee directors appointed; no individual with genuine local management authority; `DR-08-011 = "nominee_only"` | 4 | Appoint at least one Cyprus-resident director with genuine decision-making authority; ensure director participates in board meetings and has operational knowledge of the business; document director's qualifications and involvement | Cyprus Companies Law Cap. 113, Section 170; EU ATAD substance requirements; `LTF-03-005`, `LTF-03-008` | `DT-04-002`, `DT-04-003` | `DR-08-011`, `DR-06-006` |
| RC-03-002 | Virtual Office Only | Structural | No physical Cyprus office space; registered address is a virtual office or mail-forwarding service only; `DR-08-003 = false` | 5 | Lease genuine physical office space in Cyprus (minimum dedicated desk/room); ensure office is staffed during business hours; maintain records of office usage (utility bills, access logs, meeting room bookings) | Cyprus Companies Law Cap. 113; EU ATAD; ITA substance assessment criteria; `LTF-03-005`, `LTF-03-006` | `DT-04-002`, `DT-04-004` | `DR-08-003`, `DR-08-004` |
| RC-03-003 | No Local Employees | Structural | Zero Cyprus-based employees (full-time or part-time); `DR-08-005 = 0` | 4 | Hire at least one Cyprus-based employee or engage local service providers on a substantial contract basis; ensure employment contracts are genuine and the employee performs real functions; document employee contributions to business operations | EU ATAD; OECD BEPS Action 5 (substance requirements); `LTF-03-006`, `LTF-03-009` | `DT-04-002`, `DT-04-003` | `DR-08-005`, `DR-08-006` |
| RC-03-004 | IP Without Substance | Structural | Intellectual property registered in Cyprus entity without qualifying R&D activity, DEMPE functions, or sufficient local staff managing the IP; `DR-06-007 = true` AND `DR-08-005 < 3` AND `DR-08-012 = false` | 5 | Ensure DEMPE (Development, Enhancement, Maintenance, Protection, Exploitation) functions are performed in Cyprus; hire qualified IP management staff locally; document IP-related decision-making in board minutes; if using IP Box regime, prepare nexus-approach documentation per OECD BEPS Action 5 | OECD BEPS Action 5 (Modified Nexus Approach); Cyprus IP Box regime (ITA 2016 amendments); `LTF-03-010`, `LTF-03-011` | `DT-04-005`, `DT-04-006` | `DR-06-007`, `DR-08-005`, `DR-08-012` |
| RC-03-005 | Circular Ownership | Structural | Complex ownership structures with circular or back-to-back arrangements that may be challenged as artificial; structure involves more than 3 entity layers or has entities with no independent commercial purpose | 3 | Simplify ownership structure where possible; document independent commercial purpose for each entity in the chain; prepare organizational chart with business rationale for each layer; retain corporate counsel opinion on structure validity | ITO Section 86 (anti-avoidance); EU Anti-Tax Avoidance Directive; `LTF-07-001`, `LTF-03-012` | `DT-04-001`, `DT-04-006` | `DR-06-001`, `DR-06-002`, `DR-06-003` |
| RC-03-006 | Dormant Entity | Structural | Cyprus entity exists but shows no real commercial activity; `DR-08-008 = 0` (annual revenue) AND `DR-08-005 = 0` (no employees) for more than one fiscal year | 4 | Either commence genuine business activity or consider winding down the entity; dormant entities with no activity are substance-negative and may attract regulatory attention; if entity is being held for future use, document business plan and timeline | Cyprus Companies Law Cap. 113, Section 327 (striking off); Cyprus Registrar of Companies compliance; `LTF-03-013` | `DT-04-002`, `DT-07-001` | `DR-08-008`, `DR-08-005`, `DR-06-009` |
| RC-03-007 | Missing Corporate Records | Structural | Board minutes, shareholder resolutions, and statutory registers not properly maintained; `DR-08-009 = false` | 3 | Engage Cyprus corporate secretary to prepare and maintain all required records retroactively where possible; establish ongoing corporate governance calendar; ensure board meetings are held at least quarterly with documented minutes | Cyprus Companies Law Cap. 113, Sections 141-166; `LTF-03-014` | `DT-04-003`, `DT-07-001` | `DR-08-009`, `DR-08-011` |
| RC-03-008 | Late Financial Statements | Structural | Annual financial statements and/or audit reports not filed with Cyprus Registrar of Companies on time; filing deadline exceeded | 3 | Engage Cyprus-licensed auditor to prepare outstanding financial statements; file with Registrar and Tax Department immediately; assess penalty exposure for late filing; establish calendar for future compliance | Cyprus Companies Law Cap. 113, Section 142; Cyprus Income Tax Law; `LTF-03-015`, `LTF-06-009` | `DT-04-003`, `DT-07-001` | `DR-08-010`, `DR-06-009` |

<!-- EXPERT INPUT REQUIRED: Cyprus corporate law specialist to validate the following:
1. Is the severity assignment for RC-03-002 (Virtual Office Only) correctly at 5? Some practitioners argue a well-documented virtual arrangement may be acceptable for holding companies.
2. Should there be separate indicators for: (a) UBO (Ultimate Beneficial Owner) register non-compliance, (b) Cyprus AML officer not appointed, (c) Annual levy to Registrar not paid?
3. Confirm minimum employee count threshold — is 1 employee sufficient for substance, or does EU ATAD require more depending on the nature of the business?
4. Validate the IP substance requirements in RC-03-004 against current Cyprus IP Box nexus approach rules.
5. Are there additional structural risks related to the new EU Unshell Directive (ATAD 3) proposals?
-->

---

## Substance Scorecard

A composite substance assessment helps evaluate the overall structural risk:

| Factor | Weight | Passing Criteria | Data Field |
|--------|--------|------------------|------------|
| Physical Office | 20% | Genuine leased office space (not virtual) | `DR-08-003`, `DR-08-004` |
| Local Directors | 20% | At least one Cyprus-resident director with real authority | `DR-08-011` |
| Local Employees | 20% | At least one FTE (or equivalent contracted services) | `DR-08-005`, `DR-08-006` |
| Board Meetings | 15% | Quarterly meetings held in Cyprus with minutes | `DR-08-009` |
| Financial Statements | 10% | Filed on time with Cyprus Registrar | `DR-08-010` |
| Bank Account & Activity | 15% | Active Cyprus bank account with regular transactions | `DR-08-007`, `DR-08-008` |

**Substance Score Calculation:**

```
substance_score = SUM(factor_weight * factor_pass)  -- where factor_pass = 1 if passing, 0 if failing

IF substance_score < 0.40 THEN
    structural_risk = "Critical"
    overall_severity_boost = +2  -- Applied to all structural indicators
ELSE IF substance_score < 0.70 THEN
    structural_risk = "Insufficient"
    overall_severity_boost = +1
ELSE
    structural_risk = "Adequate"
    overall_severity_boost = 0
END IF
```

<!-- EXPERT INPUT REQUIRED: Calibrate substance scorecard weights and thresholds. The 40% and 70% thresholds are initial estimates. Cyprus corporate specialist should validate against EU ATAD requirements and Cyprus Tax Department practice. -->

[PLACEHOLDER — Add industry-specific substance requirements (e.g., financial services vs. technology vs. holding company)]

---

## Interaction with Decision Trees

Structural risks are primarily evaluated within the Cyprus Company Establishment decision tree (`DT-04`):

| Decision Tree | Node | Risk Check | Effect |
|---------------|------|------------|--------|
| `DT-04` Cyprus Company Establishment | `DT-04-002` | RC-03-001, RC-03-002, RC-03-003 | If any severity 4+ structural risk, route to "substance remediation required" branch |
| `DT-04` Cyprus Company Establishment | `DT-04-005` | RC-03-004 (IP Without Substance) | If triggered, mandate IP substance review before IP Box application |
| `DT-04` Cyprus Company Establishment | `DT-04-006` | RC-03-005 (Circular Ownership) | If triggered, mandate structure simplification review |
| `DT-07` Retroactive Rectification | `DT-07-001` | RC-03-006, RC-03-007, RC-03-008 | If multiple triggered, add corporate housekeeping to rectification plan |

[PLACEHOLDER — Complete decision tree interaction mapping after DT section files are populated]

---

## Remediation Timeline

Structural deficiencies typically require the following remediation timelines:

| Risk | Typical Remediation Time | Dependencies |
|------|-------------------------|--------------|
| RC-03-001 (Director) | 2–4 weeks | Director identification, appointment, registration |
| RC-03-002 (Office) | 4–8 weeks | Office search, lease negotiation, setup |
| RC-03-003 (Employees) | 4–12 weeks | Recruitment, employment contracts, social insurance registration |
| RC-03-004 (IP) | 8–16 weeks | DEMPE analysis, staff hiring, documentation |
| RC-03-005 (Circular) | 4–8 weeks | Legal review, restructuring, re-registration |
| RC-03-006 (Dormant) | 4–8 weeks | Business plan development, activity commencement |
| RC-03-007 (Records) | 2–4 weeks | Corporate secretary engagement, record preparation |
| RC-03-008 (Filings) | 4–8 weeks | Auditor engagement, financial statement preparation, filing |

<!-- EXPERT INPUT REQUIRED: Validate remediation timelines against Cyprus corporate practice. Note that some timelines may be longer during peak periods (e.g., January–March for annual filings). -->

---

## Professional Disclaimer

> **IMPORTANT:** Structural risk indicators are based on current Cyprus corporate law, EU Anti-Tax Avoidance Directives, and OECD substance requirements as understood at the time of drafting. EU regulatory requirements are evolving (particularly ATAD 3 / Unshell Directive), and Cyprus enforcement practice may change. Risk severity scores are advisory estimates and must not be relied upon as definitive legal or regulatory advice. All structural risk assessments must be reviewed by a qualified Cyprus corporate law practitioner before client communication. See `Professional_Disclaimer.md` for complete disclaimer language.

[PLACEHOLDER — Confirm disclaimer language with Cyprus corporate counsel]
