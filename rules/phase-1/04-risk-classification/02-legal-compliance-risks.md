---
id: RC-02
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies:
  - DR-01
  - DR-03
  - DR-04
  - DR-06
  - LTF-05
  - LTF-06
  - LTF-07
  - DT-01
  - DT-04
  - DT-07
---

# 02 — Legal & Compliance Risks

## Purpose

This file catalogs **legal and regulatory compliance risks** arising from cross-border relocation between Israel and Cyprus. These risks relate to reporting obligations, treaty compliance, anti-avoidance provisions, and substance requirements under both Israeli and Cypriot law.

Legal and compliance risks carry a category weight of 0.30 in the overall risk score, reflecting the potential for regulatory penalties, criminal prosecution, and structural invalidation.

---

## Risk Indicator Table

| Risk ID | Name | Category | Trigger Condition | Severity (1-5) | Mitigation | Legal Reference | Decision Tree Nodes | Data Fields |
|---------|------|----------|-------------------|-----------------|------------|-----------------|---------------------|-------------|
| RC-02-001 | CRS Reporting Gap | Legal | CRS filing not completed or filed late for the reporting period in which residency changed; `DR-06-008 = false` OR `DR-06-009 < reporting_deadline` | 4 | File late CRS report immediately; engage compliance advisor to assess penalty exposure; notify financial institutions of residency change for future automatic reporting | CRS Multilateral Competent Authority Agreement; `LTF-06-001`, `LTF-06-003` | `DT-07-001`, `DT-02-004` | `DR-06-008`, `DR-06-009`, `DR-03-013` |
| RC-02-002 | FATCA Non-Compliance | Legal | Client has US connection (citizenship, green card, or substantial presence) that is unreported; `DR-01-004 = "US"` AND `DR-06-010 = false` | 5 | Engage US tax specialist immediately; assess FBAR filing obligations; consider Streamlined Filing Compliance Procedures or voluntary disclosure; evaluate whether FATCA withholding applies to Cyprus accounts | FATCA (26 USC 1471-1474); `LTF-06-004`, `LTF-06-005` | `DT-07-002`, `DT-01-001` | `DR-01-004`, `DR-01-005`, `DR-06-010` |
| RC-02-003 | Unreported Foreign Assets | Legal | Israeli Form 150 (foreign assets declaration) not filed for years in which client held foreign assets while still Israeli resident; `DR-04-012 = true` AND `DR-06-011 = false` | 5 | File overdue Form 150 declarations; assess whether voluntary disclosure program is available; calculate potential penalties and interest; coordinate with Israeli tax attorney | ITO Section 135; ITA Circular 1/2012; `LTF-06-006`, `LTF-06-007` | `DT-03-004`, `DT-07-003` | `DR-04-012`, `DR-06-011`, `DR-04-001` |
| RC-02-004 | Transfer Pricing Violation | Legal | Intercompany transactions between Israeli and Cyprus entities not at arm's length; `DR-06-004 = true` AND `DR-06-005 = false` (related-party transactions exist but no transfer pricing study conducted) | 4 | Commission transfer pricing study from qualified firm; implement arm's-length pricing for all intercompany transactions; prepare contemporaneous documentation per OECD guidelines | ITO Section 85A; OECD Transfer Pricing Guidelines; `LTF-05-007`, `LTF-03-010` | `DT-04-005`, `DT-03-005` | `DR-06-004`, `DR-06-005`, `DR-06-003` |
| RC-02-005 | Voluntary Disclosure Window Closing | Legal | Statute of limitations for prior-year non-compliance is approaching expiry; years since last compliant filing approaching limitation period | 3 | Calculate remaining statute period for each open year; prioritize voluntary disclosure filing; assess whether amended returns or voluntary disclosure program is more appropriate | ITO Sections 145, 147; `LTF-06-008`, `LTF-07-003` | `DT-07-003`, `DT-07-004` | `DR-06-011`, `DR-06-012` |
| RC-02-006 | Anti-Avoidance Challenge | Legal | Transaction structure has characteristics that may trigger ITA general anti-avoidance provisions: artificial arrangement, tax as primary motive, no commercial substance | 4 | Document legitimate business purpose for all structural decisions; ensure economic substance in Cyprus entity; prepare defense file addressing Section 86 factors; retain contemporaneous board minutes showing business rationale | ITO Section 86 (general anti-avoidance); `LTF-07-001`, `LTF-07-004` | `DT-04-001`, `DT-04-006`, `DT-07-005` | `DR-06-001`, `DR-06-003`, `DR-08-001` |
| RC-02-007 | Cyprus Substance Challenge | Legal | Cyprus entity lacks sufficient economic substance to justify tax treaty benefits; `DR-08-003 = false` (no physical office) OR `DR-08-005 = 0` (no local employees) OR `DR-08-007 = false` (no local bank account) | 5 | Establish genuine physical office in Cyprus; hire at least one local employee or contract sufficient local services; open and actively use Cyprus bank account; conduct board meetings in Cyprus with documented minutes; ensure management and control is exercised from Cyprus | EU Anti-Tax Avoidance Directive; Cyprus Companies Law Cap. 113; `LTF-03-005`, `LTF-03-006`, `LTF-03-007` | `DT-04-002`, `DT-04-003`, `DT-04-004` | `DR-08-003`, `DR-08-005`, `DR-08-007`, `DR-08-009` |
| RC-02-008 | Treaty Benefit Denial | Legal | Israel-Cyprus tax treaty benefits may be denied due to treaty shopping, limitation on benefits (LOB) failure, or principal purpose test (PPT) failure; arrangement lacks genuine economic connection to Cyprus | 4 | Ensure genuine economic activity in Cyprus; document business purpose beyond tax benefits; review treaty provisions for specific LOB or PPT clauses; prepare treaty benefit claim with supporting substance evidence | Israel-Cyprus Double Tax Treaty; OECD MLI Article 7 (PPT); `LTF-05-001`, `LTF-05-002`, `LTF-05-008` | `DT-04-001`, `DT-04-006` | `DR-06-001`, `DR-06-003`, `DR-08-001`, `DR-08-003` |

<!-- EXPERT INPUT REQUIRED: Legal compliance expert to validate the following:
1. Is the severity assignment for RC-02-002 (FATCA) appropriate at 5, given that most Israel-to-Cyprus clients do not have US connections? Should it be conditional on the US connection existing?
2. Should RC-02-003 (Unreported Foreign Assets) include a separate indicator for Betterment Tax (mas shevach) reporting on Israeli real estate held by non-residents?
3. Are there additional compliance risks related to: (a) Cyprus AML/KYC reporting obligations, (b) EU DAC6 mandatory disclosure rules for cross-border arrangements, (c) Israeli Foreign Financial Assets reporting (Form 1399)?
4. Validate that the transfer pricing threshold in RC-02-004 is appropriate — should there be a materiality threshold below which this risk is lower severity?
5. Confirm whether the OECD MLI Principal Purpose Test (PPT) has been ratified by both Israel and Cyprus and is in effect.
-->

---

## Trigger Condition Logic

### RC-02-001: CRS Reporting Gap

```
IF DR-06-008 = false THEN
    -- CRS report not filed
    severity = 4
    message = "CRS reporting obligation not fulfilled"
ELSE IF DR-06-009 < reporting_deadline THEN
    -- Filed but late
    severity = 3
    message = "CRS report filed late — assess penalty exposure"
END IF
```

### RC-02-002: FATCA Non-Compliance

```
IF DR-01-004 CONTAINS "US" OR DR-01-005 = "US green card" THEN
    IF DR-06-010 = false THEN
        severity = 5
        message = "US connection detected with no FATCA compliance"
    END IF
ELSE
    -- No US connection; FATCA risk does not apply
    severity = 0
END IF
```

### RC-02-007: Cyprus Substance Challenge (Composite)

```
LET substance_score = 0
LET max_substance = 5

IF DR-08-003 = true THEN substance_score += 1   -- Physical office
IF DR-08-005 > 0 THEN substance_score += 1       -- Local employees
IF DR-08-007 = true THEN substance_score += 1    -- Local bank account
IF DR-08-009 = true THEN substance_score += 1    -- Board meetings in Cyprus
IF DR-08-010 = true THEN substance_score += 1    -- Local accounting/audit

IF substance_score <= 1 THEN
    severity = 5
    message = "Critical substance deficiency — structure likely to be challenged"
ELSE IF substance_score <= 3 THEN
    severity = 3
    message = "Substance gaps exist — remediation recommended"
ELSE
    severity = 1
    message = "Substance appears adequate — monitor ongoing compliance"
END IF
```

<!-- EXPERT INPUT REQUIRED: Confirm substance scoring criteria. Cyprus Tax Department and EU ATAD may have specific minimum requirements that should be reflected here. Consult with Cyprus corporate law specialist. -->

---

## Interaction with Decision Trees

Legal and compliance risks interact with decision trees at the following points:

| Decision Tree | Node | Risk Check | Effect |
|---------------|------|------------|--------|
| `DT-04` Cyprus Company Establishment | `DT-04-002` | RC-02-007 (Substance) | If substance score <= 1, route to "substance remediation required" branch |
| `DT-04` Cyprus Company Establishment | `DT-04-006` | RC-02-006 (Anti-Avoidance), RC-02-008 (Treaty Denial) | If either triggered, mandate legal review before proceeding |
| `DT-07` Retroactive Rectification | `DT-07-001` | RC-02-001 (CRS Gap) | If triggered, add CRS remediation to rectification plan |
| `DT-07` Retroactive Rectification | `DT-07-003` | RC-02-003 (Unreported Assets) | If triggered, mandatory voluntary disclosure assessment |
| `DT-01` Residency Severance Eligibility | `DT-01-001` | RC-02-002 (FATCA) | If US connection, add FATCA compliance track |

[PLACEHOLDER — Complete decision tree interaction mapping after DT section files are populated]

---

## Regulatory Timeline Considerations

Legal and compliance risks are highly time-sensitive. Key deadlines:

| Obligation | Deadline | Consequence of Missing |
|------------|----------|----------------------|
| CRS Report Filing | 30 June following reporting year | Automatic exchange may report stale residency; penalties vary by jurisdiction |
| FATCA FBAR Filing | 15 April (auto-extension to 15 October) | Civil penalties up to $12,906 per account per year; criminal penalties for willful violation |
| Israeli Form 150 | 30 April following tax year | ITA may impose penalties under Section 191 |
| Transfer Pricing Documentation | Concurrent with annual tax return | Burden of proof shifts to taxpayer; penalties for underpayment |
| Voluntary Disclosure | Before ITA initiates investigation | Availability lost once investigation commences |

<!-- EXPERT INPUT REQUIRED: Verify all deadline dates against current Israeli and Cypriot regulatory calendars. FATCA penalties are in USD and subject to annual inflation adjustment. -->

[PLACEHOLDER — Add Cyprus-specific regulatory deadlines for corporate filings, VAT returns, and substance maintenance reporting]

---

## Professional Disclaimer

> **IMPORTANT:** Legal and compliance risk indicators are based on current Israeli law, Cypriot law, international tax treaties, and regulatory practice as understood at the time of drafting. Regulatory requirements are subject to change, and enforcement practice may vary. Risk severity scores are advisory estimates and must not be relied upon as definitive legal advice. All legal and compliance risk assessments must be reviewed by qualified legal counsel in both Israel and Cyprus before client communication. See `Professional_Disclaimer.md` for complete disclaimer language.

[PLACEHOLDER — Confirm disclaimer language with legal counsel in both jurisdictions]
