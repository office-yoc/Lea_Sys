---
id: LTF-01
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies: []
---

# Israeli Tax Residency Rules

## Overview

Israeli tax residency is determined under the **Israeli Tax Ordinance (פקודת מס הכנסה)**, primarily through two parallel tests: the **Day Count Test** and the **Center of Life Test (מבחן מרכז החיים)**. A person who meets either test is treated as an Israeli tax resident and is subject to worldwide taxation.

Understanding these rules is critical for anyone planning a relocation from Israel, because residency status determines the scope of Israeli tax obligations, eligibility for exit tax deferral, and interaction with treaty tie-breaker provisions.

---

## 1. Day Count Test

**Legal Source:** Section 1(a) of the Israeli Tax Ordinance (New Version), 5721-1961.

### 1.1 Primary Threshold -- 183 Days

An individual is deemed an Israeli tax resident if they are **physically present in Israel for 183 days or more** during the tax year (January 1 -- December 31).

- A "day" means any part of a day spent in Israel (including arrival and departure days).
- Transit through Ben Gurion Airport where the individual does not pass border control is generally excluded. <!-- EXPERT INPUT REQUIRED: Confirm whether airside transit is consistently excluded in recent ITA practice. -->

### 1.2 Secondary Threshold -- 30 + 425 Weighted Days

An individual is also deemed resident if **both** of the following are met:

1. **30 or more days** of physical presence in the **current** tax year; **AND**
2. **425 or more weighted days** across a rolling **three-year window**, calculated as:

```
Weighted Days = (Days in Current Year) + (1/3 x Days in Prior Year) + (1/6 x Days in Year Before Prior)
```

<!-- EXPERT INPUT REQUIRED: Verify whether partial-day counting applies identically to the weighted formula as it does to the 183-day test. ITA Circular 2002/1 suggests yes, but practitioners report inconsistency. -->

### 1.3 Rebuttable Presumption

Meeting either day-count threshold creates a **rebuttable presumption** of residency. The individual may present evidence that their center of life is outside Israel to override the presumption.

> **2025 Reform Note:** The proposed amendment to Section 1(a) would convert certain day-count presumptions from rebuttable to **irrebuttable** for individuals who also maintain a permanent home in Israel. [PLACEHOLDER -- confirm final legislative text and effective date]

---

## 2. Center of Life Test (מבחן מרכז החיים / Merkaz HaChayim)

**Legal Source:** Section 1(a)(2) of the Israeli Tax Ordinance; amplified by case law (see `07-case-law-references.md`).

The Center of Life Test is a holistic, multi-factor analysis. No single factor is determinative; the ITA and courts weigh the totality of connections.

### 2.1 Personal Ties (קשרים אישיים)

| Factor | Description | Data Field Ref |
|--------|-------------|----------------|
| Family home | Location of the primary family residence | DR-01-010 |
| Spouse/partner location | Where spouse/partner lives and works | DR-01-011 |
| Children's schools | Where dependent children attend school | DR-01-012 |
| Extended family | Proximity to parents, siblings | DR-01-013 |
| Healthcare | Where individual receives regular medical care | DR-01-014 |

### 2.2 Economic Ties (קשרים כלכליים)

| Factor | Description | Data Field Ref |
|--------|-------------|----------------|
| Employment / business | Where the individual works or manages a business | DR-02-001 |
| Bank accounts | Location of primary bank accounts | DR-02-005 |
| Investments / real estate | Jurisdiction of significant assets | DR-02-010 |
| Pension / social security | Where contributions are being made | DR-02-015 |
| Credit cards | Issuing country of primary credit cards | DR-02-016 |

### 2.3 Social Ties (קשרים חברתיים)

| Factor | Description | Data Field Ref |
|--------|-------------|----------------|
| Club memberships | Gym, country club, professional associations | DR-03-001 |
| Community involvement | Synagogue, volunteer organizations, political activity | DR-03-002 |
| Social networks | Where close friends are located | DR-03-003 |
| Media / subscriptions | Local newspaper, streaming, phone plan country | DR-03-004 |

### 2.4 The 2025 Reform -- Shift to Irrebuttable Presumptions

<!-- EXPERT INPUT REQUIRED: The 2025 reform package proposes converting certain center-of-life presumptions from rebuttable to irrebuttable. Confirm: (a) which specific presumptions are affected, (b) effective date, (c) transitional provisions for individuals already in the process of relocating. -->

Key changes reported in draft legislation:

- If an individual maintains a **permanent home available for use** in Israel and has **no permanent home abroad**, they will be **irrebuttably presumed** resident regardless of day count.
- New reporting requirements for individuals claiming non-residency while retaining Israeli assets above [PLACEHOLDER -- threshold amount in NIS].
- Interaction with treaty tie-breaker: [PLACEHOLDER -- confirm whether the reform overrides treaty provisions or merely shifts the domestic burden of proof].

---

## 3. Rule Table

| Rule ID | Rule Name | Legal Source | Test Type | Threshold | Consequence | Data Fields Required | Notes |
|---------|-----------|-------------|-----------|-----------|-------------|---------------------|-------|
| LTF-01-001 | 183-day presence test | Section 1(a), Tax Ordinance | Day Count | >= 183 days in tax year | Rebuttable presumption of Israeli tax residency | DR-01-001 (arrival/departure records) | Includes partial days |
| LTF-01-002 | 30+425 weighted day test | Section 1(a), Tax Ordinance | Day Count (Weighted) | >= 30 days current year AND >= 425 weighted days over 3 years | Rebuttable presumption of Israeli tax residency | DR-01-001, DR-01-002 (prior year presence) | Formula: current + 1/3 prior + 1/6 two-years-prior |
| LTF-01-003 | Center of life -- personal ties | Section 1(a)(2), Tax Ordinance | Center of Life | Qualitative -- multi-factor | Supports or negates residency determination | DR-01-010 through DR-01-014 | Family home is strongest single factor per case law |
| LTF-01-004 | Center of life -- economic ties | Section 1(a)(2), Tax Ordinance | Center of Life | Qualitative -- multi-factor | Supports or negates residency determination | DR-02-001, DR-02-005, DR-02-010, DR-02-015, DR-02-016 | Active business in Israel is heavily weighted |
| LTF-01-005 | Center of life -- social ties | Section 1(a)(2), Tax Ordinance | Center of Life | Qualitative -- multi-factor | Supports or negates residency determination | DR-03-001 through DR-03-004 | Least weighted category individually |
| LTF-01-006 | Permanent home available in Israel | Section 1(a), Tax Ordinance (2025 amendment) | Irrebuttable Presumption | Home available + no foreign home | Irrebuttable Israeli residency | DR-01-010, DR-04-001 (foreign home status) | <!-- EXPERT INPUT REQUIRED: Confirm effective date and exact statutory language --> |
| LTF-01-007 | Day-count rebuttal -- burden of proof | Section 1(a), Tax Ordinance; case law | Procedural | N/A | Taxpayer bears burden to prove non-residency | DR-05-001 (evidence package) | Must demonstrate center of life abroad |
| LTF-01-008 | Tax year definition | Section 1, Tax Ordinance | Administrative | Jan 1 -- Dec 31 | Calendar-year basis for all residency tests | N/A | No fiscal year option for individuals |
| LTF-01-009 | Partial-year residency | ITA Practice + Circular 2003/2 | Administrative | Date of departure / arrival | Pro-rata worldwide vs. territorial taxation | DR-01-001, DR-01-005 (departure date) | <!-- EXPERT INPUT REQUIRED: Confirm current ITA acceptance of partial-year splits --> |
| LTF-01-010 | Reporting of non-residency claim | Section 131(a)(5B), Tax Ordinance | Reporting | Claiming non-resident status | Must file declaration with annual return | DR-06-001 (Form 1301 fields) | Failure to report: penalties per Section 191 |
| LTF-01-011 | New immigrant / returning resident exemptions | Section 14(a), Tax Ordinance | Exemption | 10-year exemption period | Exempt from worldwide taxation on foreign income | DR-01-020 (immigration date) | Not applicable to departing residents; included for completeness |
| LTF-01-012 | Senior returning resident | Section 14(b), Tax Ordinance | Exemption | Absent from Israel >= 10 years | 5-year partial exemption | DR-01-021 (years abroad) | [PLACEHOLDER -- confirm if 2025 reform modifies this] |
| LTF-01-013 | Spouse attribution rule | Section 1, Tax Ordinance; case law | Attribution | Spouse is Israeli resident | Presumption that other spouse is also resident | DR-01-011 | Rebuttable; see LTF-07-003 for key case |
| LTF-01-014 | Minor children attribution | Section 1, Tax Ordinance | Attribution | Children enrolled in Israeli schools | Supports residency determination of parents | DR-01-012 | Factor in center-of-life analysis |
| LTF-01-015 | Treaty override of domestic residency | Section 196, Tax Ordinance; applicable DTT | Treaty Tie-Breaker | Dual residency under domestic law | Treaty tie-breaker prevails for treaty purposes | DR-07-001 (treaty country) | See `05-tax-treaties-israel-cyprus.md` for Israel-Cyprus specifics |

---

## 4. Key Interactions

- **Exit Tax (Section 100A):** Residency cessation date triggers deemed liquidation. See `02-exit-tax-section-100a.md`.
- **Treaty Tie-Breaker:** If an individual is resident under both Israeli and Cypriot domestic law, the treaty tie-breaker in Article 4 determines treaty residency. See `05-tax-treaties-israel-cyprus.md`.
- **National Insurance:** Residency cessation affects Bituach Leumi obligations. See `08-national-insurance.md`.
- **Reporting:** Non-residency claims require specific filings. See `06-reporting-obligations.md`.

---

## Open Items for Expert Review

- [ ] Confirm 2025 reform final text and effective date (LTF-01-006)
- [ ] Validate partial-year residency split practice (LTF-01-009)
- [ ] Confirm irrebuttable presumption scope and interaction with treaties
- [ ] Review threshold amounts for new reporting requirements
- [ ] Verify airside transit exclusion in current ITA practice
