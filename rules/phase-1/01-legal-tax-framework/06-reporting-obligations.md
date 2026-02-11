---
id: LTF-06
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies:
  - LTF-01
  - LTF-02
  - LTF-03
  - LTF-05
---

# Reporting Obligations

## Overview

Individuals and entities operating between Israel and Cyprus face **overlapping reporting obligations** across multiple jurisdictions and international frameworks. Failure to comply can result in significant penalties, criminal liability, and reputational harm. This file codifies the key reporting requirements under:

1. **CRS** (Common Reporting Standard) -- automatic exchange of financial account information
2. **FATCA** (Foreign Account Tax Compliance Act) -- US-connected persons
3. **Israeli domestic reporting** -- Forms 1301, 6111, 150
4. **Cypriot domestic reporting** -- Forms IR1, TD1
5. **Deadlines and penalties**

---

## 1. CRS -- Common Reporting Standard

**Legal Basis:** OECD Standard for Automatic Exchange of Financial Account Information in Tax Matters; implemented in Israel under Section 135B of the Tax Ordinance and in Cyprus under Law 205(I)/2015.

### 1.1 How It Works

- **Financial institutions** (banks, investment firms, insurance companies) in both Israel and Cyprus automatically report financial account information of **non-resident account holders** to their local tax authority.
- The local tax authority then **exchanges** this information with the account holder's country of tax residence.
- Reporting is **annual** and **automatic** -- no action is required by the taxpayer to trigger it.

### 1.2 What Is Reported

| Data Point | Description |
|-----------|-------------|
| Account holder name | Individual or entity |
| Tax identification number (TIN) | Israeli TIN (תעודת זהות / מספר עוסק) or Cyprus TIN |
| Date of birth | Individuals only |
| Address | Residential address on file |
| Account number | Bank or investment account |
| Account balance / value | As of December 31 of the reporting year |
| Gross income | Interest, dividends, other income credited to the account |
| Gross proceeds | From sale or redemption of financial assets |

### 1.3 Implications for Relocators

- **Before departure:** Israeli bank accounts will be reported to Israel as domestic accounts (no CRS exchange).
- **After establishing Cyprus residency:** Israeli bank accounts will be reported to the **Cyprus tax authority** as accounts held by a Cyprus tax resident. Simultaneously, Cyprus bank accounts will be reported to the **Israeli tax authority** as accounts held by a former Israeli resident (until the bank updates the residency status).
- **Transition period risk:** During the period when residency status is ambiguous, financial institutions may report to **both** jurisdictions.

<!-- EXPERT INPUT REQUIRED: Confirm the typical lag time for banks to update CRS residency status. Practitioners report 6-18 months of dual reporting. -->

---

## 2. FATCA -- Foreign Account Tax Compliance Act

**Legal Basis:** US Internal Revenue Code Sections 1471-1474; Israel-US IGA (Model 1); Cyprus-US IGA (Model 1).

### 2.1 Applicability

FATCA reporting applies to **US persons** or individuals with **US indicia**, including:

- US citizens (including dual Israeli-US citizens)
- US green card holders
- US tax residents
- Individuals with US address, US phone number, or US birthplace on file

### 2.2 Relevance to Israel-Cyprus Relocators

Most Israeli nationals relocating to Cyprus are **not US persons** and FATCA will not apply to them directly. However:

- Individuals with **US investment accounts** may trigger FATCA reporting by US institutions.
- Israeli or Cypriot financial institutions will screen for US indicia during KYC (see `04-cyprus-banking-mortgage.md`).
- Dual Israeli-US citizens must file **FBAR (FinCEN 114)** and **Form 8938** for foreign accounts, regardless of where they reside.

<!-- EXPERT INPUT REQUIRED: Confirm whether there are any FATCA implications for Israeli nationals who hold US securities in Israeli brokerage accounts and then relocate to Cyprus. -->

---

## 3. Israeli Domestic Reporting

### 3.1 Form 1301 -- Annual Income Tax Return (דוח שנתי על הכנסות)

| Attribute | Details |
|-----------|---------|
| Who must file | All Israeli tax residents with taxable income; non-residents with Israeli-source income |
| Reporting period | Calendar year (Jan 1 -- Dec 31) |
| Filing deadline | April 30 of the following year (extended to May 31 for electronic filing) [PLACEHOLDER -- confirm current deadline] |
| Key sections for relocators | Schedule for foreign income; non-residency declaration; exit tax (Section 100A) disclosure |
| Language | Hebrew |

### 3.2 Form 6111 -- International Reporting (דיווח על פעולות בינלאומיות)

| Attribute | Details |
|-----------|---------|
| Who must file | Israeli residents with interests in foreign entities, foreign bank accounts >NIS [PLACEHOLDER], or specified international transactions |
| Trigger | Holding >10% in a foreign entity; CFC rules; transfer pricing adjustments |
| Filing deadline | Filed together with Form 1301 |
| Key sections for relocators | Foreign company details; type of holding; income received; transfer pricing |
| Penalties | NIS 100,000+ for failure to file or false reporting [PLACEHOLDER -- confirm current penalty] |

### 3.3 Form 150 -- Declaration on Non-Residency (הצהרה על אי-תושבות)

| Attribute | Details |
|-----------|---------|
| Who must file | Individuals claiming cessation of Israeli tax residency |
| Purpose | Formal declaration supporting non-residency claim; shifts some burden to ITA to disprove |
| Filing deadline | Filed with the annual return for the year of departure and subsequent years until confirmed |
| Key contents | Date of departure; new country of residence; evidence of center of life shift |
| Importance | Failure to file may result in ITA treating the individual as still resident |

<!-- EXPERT INPUT REQUIRED: Confirm whether Form 150 is still the operative form for non-residency declarations, or whether the 2025 reform introduced a replacement. Some practitioners refer to a new Section 131 declaration. -->

### 3.4 Additional Israeli Reporting

| Obligation | Description | Trigger |
|-----------|-------------|---------|
| Form 1214 | Report on trust distributions | Israeli resident is beneficiary or settlor of a trust |
| Section 131(a)(5A) | Report on foreign assets | Aggregate foreign assets exceed NIS [PLACEHOLDER] |
| Section 100A notification | Exit tax notification | Cessation of residency (see LTF-02-009) |

---

## 4. Cypriot Domestic Reporting

### 4.1 Form IR1 -- Company Income Tax Return

| Attribute | Details |
|-----------|---------|
| Who must file | All Cyprus tax-resident companies |
| Reporting period | Calendar year (or approved accounting period) |
| Filing deadline | 15 months after end of tax year (electronic) [PLACEHOLDER -- confirm] |
| Key contents | Revenue, expenses, taxable income, tax computation, IP Box election, NID claim |
| Language | Greek (English accepted in practice for supporting schedules) |

### 4.2 Form TD1 -- Personal Income Tax Return

| Attribute | Details |
|-----------|---------|
| Who must file | All Cyprus tax-resident individuals with income exceeding the personal allowance (currently EUR 19,500) |
| Reporting period | Calendar year |
| Filing deadline | July 31 of the following year (electronic) [PLACEHOLDER -- confirm current deadline] |
| Key contents | Employment income, rental income, dividend/interest income (if domiciled), capital gains |
| Non-dom section | Declaration of non-dom status; SDC exemption claim |
| Language | Greek (English accepted for electronic filing) |

### 4.3 Additional Cypriot Reporting

| Obligation | Description | Trigger |
|-----------|-------------|---------|
| TD1 Supplement | Self-employment income schedule | Self-employed individuals |
| SDC Return | Special Defence Contribution return | Domiciled individuals receiving passive income |
| DAO Return | Deemed dividend distribution return | ABOLISHED (LTF-03-010) |
| Temporary tax (προσωρινή φορολογία) | Advance tax payments in two installments | Companies with expected tax liability |

---

## 5. Deadlines Summary

| Obligation | Jurisdiction | Deadline | Notes |
|-----------|-------------|----------|-------|
| Form 1301 (individual) | Israel | April 30 / May 31 (electronic) | Extensions available through accountant |
| Form 6111 (international) | Israel | Same as Form 1301 | |
| Form 150 (non-residency) | Israel | Same as Form 1301 | |
| Section 100A notification | Israel | 30 days from departure [PLACEHOLDER -- confirm] | |
| CRS reporting (by FI) | Both | September 30 following reporting year [PLACEHOLDER -- confirm] | Taxpayer not directly responsible |
| Form TD1 (individual) | Cyprus | July 31 | |
| Form IR1 (company) | Cyprus | March 31 (15 months after year-end) [PLACEHOLDER -- confirm] | |
| Temporary tax -- 1st installment | Cyprus | August 1 | |
| Temporary tax -- 2nd installment | Cyprus | December 31 | |

---

## 6. Penalties

### 6.1 Israeli Penalties

| Violation | Penalty | Legal Source |
|-----------|---------|-------------|
| Late filing of Form 1301 | NIS [PLACEHOLDER] per month of delay | Section 188, Tax Ordinance |
| Failure to file Form 6111 | NIS 100,000+ [PLACEHOLDER -- confirm] | Section 191, Tax Ordinance |
| Failure to file Form 150 | No specific penalty, but ITA may assess as resident | Administrative |
| Failure to report foreign income | 15% -- 30% penalty on undisclosed tax + interest | Section 191A, Tax Ordinance |
| Tax evasion (criminal) | Up to 7 years imprisonment + fines | Section 220, Tax Ordinance |

### 6.2 Cypriot Penalties

| Violation | Penalty | Legal Source |
|-----------|---------|-------------|
| Late filing of TD1 | EUR 100 + EUR 1 per day (up to EUR 17,000) [PLACEHOLDER -- confirm] | Assessment and Collection of Taxes Law |
| Late filing of IR1 | EUR 100 + EUR 1 per day | Same |
| Late payment of tax | 5% immediate surcharge + interest at [PLACEHOLDER]% per annum | Same |
| Failure to keep records | EUR 1,000 -- EUR 30,000 [PLACEHOLDER] | Same |

<!-- EXPERT INPUT REQUIRED: Confirm all penalty amounts and rates for 2026. Penalties are periodically updated. -->

---

## 7. Rule Table

| Rule ID | Obligation | Jurisdiction | Form/Mechanism | Deadline | Penalty | Applies To | Data Fields | Notes |
|---------|-----------|-------------|---------------|----------|---------|-----------|------------|-------|
| LTF-06-001 | Annual income tax return | Israel | Form 1301 | April 30 / May 31 (electronic) | NIS [PLACEHOLDER]/month late | All Israeli residents; non-residents with IL-source income | DR-06-001 (filing status) | Must include foreign income for residents |
| LTF-06-002 | International reporting | Israel | Form 6111 | Same as 1301 | NIS 100,000+ [PLACEHOLDER] | Residents with foreign entities/accounts | DR-06-002 (foreign entity list) | Triggered by >10% holding in foreign entity |
| LTF-06-003 | Non-residency declaration | Israel | Form 150 | Same as 1301 | Administrative (residency re-assertion) | Individuals claiming non-residency | DR-06-003 (departure details) | Critical for severing tax residency |
| LTF-06-004 | Exit tax notification | Israel | Section 100A notice | 30 days from departure [PLACEHOLDER] | [PLACEHOLDER] | All departing residents with appreciated assets | DR-06-004 (exit notification) | See LTF-02-009 |
| LTF-06-005 | CRS automatic exchange | Both (Israel & Cyprus) | Automatic by FI | September 30 [PLACEHOLDER] | N/A (FI responsibility) | Account holders with non-resident status | DR-06-005 (CRS reports received) | Taxpayer cannot opt out |
| LTF-06-006 | FATCA reporting | Both (via IGA) | Automatic by FI | Same as CRS | N/A (FI responsibility) | US persons or persons with US indicia | DR-06-006 (FATCA status) | Mostly irrelevant unless US-connected |
| LTF-06-007 | Personal income tax return | Cyprus | Form TD1 | July 31 | EUR 100 + EUR 1/day | Cyprus residents with income > EUR 19,500 | DR-06-007 (TD1 filing) | Non-dom must declare status |
| LTF-06-008 | Company income tax return | Cyprus | Form IR1 | March 31 (15 months post year-end) [PLACEHOLDER] | EUR 100 + EUR 1/day | All Cyprus tax-resident companies | DR-06-008 (IR1 filing) | Include IP Box election |
| LTF-06-009 | Temporary tax | Cyprus | Self-assessment | Aug 1 (1st) / Dec 31 (2nd) | 10% surcharge on underpayment [PLACEHOLDER] | Companies with expected tax liability | DR-06-009 (provisional tax) | Based on estimated income |
| LTF-06-010 | Foreign asset reporting (Israel) | Israel | Section 131(a)(5A) | Same as 1301 | Per Section 191 | Residents with foreign assets > threshold | DR-06-010 (foreign asset register) | Threshold: NIS [PLACEHOLDER] |
| LTF-06-011 | Trust reporting (Israel) | Israel | Form 1214 | Same as 1301 | Per Section 191 | Israeli beneficiaries/settlors of trusts | DR-06-011 (trust details) | <!-- EXPERT INPUT REQUIRED: Confirm scope of trust reporting --> |
| LTF-06-012 | SDC return (Cyprus) | Cyprus | SDC form | Same as TD1 | Per standard penalty regime | Domiciled individuals with passive income | DR-06-012 (SDC computation) | Non-dom: exempt, no filing required |

---

## 8. Key Interactions

- **Residency:** Filing obligations depend on residency status determined under `01-israeli-tax-residency.md`.
- **Exit Tax:** Section 100A notification is a distinct obligation from annual returns. See `02-exit-tax-section-100a.md`.
- **Cyprus Corporate:** Company filing obligations arise from formation. See `03-cyprus-corporate-framework.md`.
- **Banking:** Account opening triggers CRS classification. See `04-cyprus-banking-mortgage.md`.
- **Treaty:** Treaty-based positions must be consistently reported in both jurisdictions. See `05-tax-treaties-israel-cyprus.md`.

---

## Open Items for Expert Review

- [ ] Confirm all penalty amounts for 2026 (Sections 6.1 and 6.2)
- [ ] Validate Form 150 status -- is it still operative or replaced? (Section 3.3)
- [ ] Confirm Israeli filing deadlines including accountant extensions (Section 5)
- [ ] Verify Cypriot IR1 filing deadline (Section 4.1)
- [ ] Confirm CRS reporting exchange timeline (LTF-06-005)
- [ ] Confirm foreign asset reporting threshold (LTF-06-010)
- [ ] Validate trust reporting scope (LTF-06-011)
- [ ] Confirm FATCA implications for Israeli nationals with US securities (Section 2.2)
