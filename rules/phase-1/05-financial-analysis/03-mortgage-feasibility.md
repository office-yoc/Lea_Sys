---
id: FA-03
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies:
  - DR-04
  - DR-05
  - DR-08
  - LTF-04
  - RC-04
  - FA-01
---

# Cyprus Mortgage Feasibility Analysis

## Overview

This file models **mortgage feasibility** for Israeli clients purchasing property in Cyprus post-relocation. Mortgage qualification in Cyprus differs significantly from Israel, particularly for non-EU nationals (though Cyprus residency may improve terms). Currency risk is a central concern, as clients often earn in USD or NIS while servicing a EUR-denominated mortgage.

These models link to decision tree `DT-06` (Mortgage Financing) and legal framework `LTF-04` (Cyprus Banking & Mortgage). All figures are in **EUR** (the currency of Cyprus mortgages) with USD equivalents.

---

## Mortgage Models Summary

| Model ID | Property Type | LTV Range | Interest Rate Range | Term | Monthly Payment (Illustrative) | Income Required | Qualification Criteria | Data Fields |
|----------|---------------|-----------|--------------------|----|-------------------------------|-----------------|----------------------|-------------|
| FA-03-001 | Standard residential | 60-80% | [PLACEHOLDER]% variable; [PLACEHOLDER]% fixed | 15-30 years | [PLACEHOLDER] | 3x-4x annual mortgage payments | Stable income, 2-3 years tax returns, clean credit | DR-04-001, DR-05-001, DR-08-004, DR-08-010 |
| FA-03-002 | Investment property | 50-65% | [PLACEHOLDER]% variable; [PLACEHOLDER]% fixed | 15-25 years | [PLACEHOLDER] | Rental coverage ratio ≥ 1.2x + personal income | Same as residential + rental income projections | DR-04-005, DR-04-006, DR-05-001, DR-08-010 |
| FA-03-003 | Commercial property | 50-60% | [PLACEHOLDER]% variable; [PLACEHOLDER]% fixed | 10-20 years | [PLACEHOLDER] | Business revenue ≥ 2x debt service | Company financials, business plan, 3-year projections | DR-06-005, DR-06-009, DR-08-003, DR-08-010 |

<!-- EXPERT INPUT REQUIRED: Populate current interest rate ranges from major Cyprus banks (Bank of Cyprus, Hellenic Bank, Eurobank Cyprus, Alpha Bank Cyprus). Rates have shifted significantly with ECB policy changes. Confirm whether rates listed are base rates, spread over Euribor, or fixed-term rates. -->

---

## 1. FA-03-001: Standard Residential Mortgage

### Description

Models mortgage feasibility for a **primary residence** purchased in Cyprus. This is the most common scenario for relocating families.

### Typical Parameters

| Parameter | Range / Value | Notes | Legal Reference |
|-----------|---------------|-------|-----------------|
| Loan-to-Value (LTV) | 60-70% for non-EU nationals | May increase to 70-80% with Cyprus permanent residency or citizenship | LTF-04-003 |
| Interest rate (variable) | [PLACEHOLDER]% (Euribor + spread) | Spread typically 2.5-4.5% over 3-month Euribor | LTF-04-004 |
| Interest rate (fixed, 5yr) | [PLACEHOLDER]% | Fixed rates typically 0.5-1.0% above variable | LTF-04-004 |
| Term | 15-30 years | Maximum age at maturity: typically 65-70 | LTF-04-005 |
| Minimum down payment | 20-40% of property value | Depends on residency status and bank | LTF-04-003 |
| Arrangement fee | 0.5-1.0% of loan amount | One-time | |
| Valuation fee | €300-800 | Independent valuation required | |
| Legal fees (mortgage) | 0.5-1.0% of loan amount | Mortgage registration + legal review | |
| Stamp duty | [PLACEHOLDER]% | On loan agreement | LTF-04-006 |
| Life insurance | Required (decreasing term) | Typically 0.3-0.5% of outstanding balance | |

<!-- EXPERT INPUT REQUIRED: Confirm whether LTV improves with (a) Cyprus permanent residency permit, (b) Cyprus tax residency via 60-day rule, (c) Cyprus company directorship. Some banks reportedly offer better terms to established Cyprus tax residents. -->

### Income Documentation Requirements

| Document | Purpose | Timeframe | Data Field |
|----------|---------|-----------|------------|
| Tax returns (Israel) | Historical income verification | 2-3 years prior | DR-05-001, DR-05-004 |
| Tax returns (Cyprus) | Current income verification | Most recent year (if available) | DR-08-005 |
| Audited company accounts | Business income proof | 1-2 years | DR-06-005, DR-06-009 |
| Bank statements | Cash flow evidence | 6-12 months | DR-04-001 |
| Employment contract | Salary confirmation | Current | DR-05-001 |
| Rental income evidence | If investment property | 1-2 years | DR-04-005 |
| Source of funds declaration | AML compliance | N/A | DR-04-001 |
| Credit report (Israel) | Credit history | Current | [PLACEHOLDER -- confirm if Israeli BDI/credit reports are accepted] |

### Affordability Calculation

```
Debt-to-Income Ratio (DTI):

  DTI = (Total Monthly Debt Payments / Gross Monthly Income) x 100

  Cyprus bank threshold: DTI ≤ 40% (typical)
  Some banks: DTI ≤ 35% for non-residents

Monthly Mortgage Payment (annuity formula):

  M = P × [r(1+r)^n] / [(1+r)^n - 1]

  Where:
    P = Loan principal (EUR)
    r = Monthly interest rate (annual rate / 12)
    n = Total number of payments (years x 12)
    M = Monthly payment (EUR)
```

### Illustrative Scenarios

| Scenario | Property Value | LTV | Loan Amount | Rate | Term | Monthly Payment | Annual Income Required (DTI 40%) |
|----------|---------------|-----|-------------|------|------|-----------------|----------------------------------|
| Conservative | €400,000 | 60% | €240,000 | [PLACEHOLDER]% | 25 yr | [PLACEHOLDER] | [PLACEHOLDER] |
| Moderate | €600,000 | 70% | €420,000 | [PLACEHOLDER]% | 25 yr | [PLACEHOLDER] | [PLACEHOLDER] |
| Upper | €1,000,000 | 70% | €700,000 | [PLACEHOLDER]% | 25 yr | [PLACEHOLDER] | [PLACEHOLDER] |
| Premium | €1,500,000 | 60% | €900,000 | [PLACEHOLDER]% | 20 yr | [PLACEHOLDER] | [PLACEHOLDER] |

<!-- EXPERT INPUT REQUIRED: Populate monthly payment and income requirement columns based on current interest rates. Include both variable and fixed-rate scenarios. -->

---

## 2. FA-03-002: Investment Property Mortgage

### Description

Models mortgage feasibility for **investment properties** (buy-to-let) in Cyprus. Banks typically apply stricter criteria and lower LTV for non-owner-occupied properties.

### Additional Parameters (vs. Residential)

| Parameter | Residential | Investment | Notes |
|-----------|------------|------------|-------|
| LTV | 60-80% | 50-65% | Lower LTV for investment |
| Interest rate premium | Base | +0.25-0.75% over residential | Higher risk premium |
| Rental coverage ratio | N/A | ≥ 1.2x (monthly rent ≥ 120% of mortgage payment) | Must demonstrate rental viability |
| Vacancy allowance | N/A | 10-15% deducted from projected rent | Bank conservatism |
| Number of properties | First property: standard | 2+: increasingly restrictive | Portfolio limits vary by bank |
| Tax deductibility | Personal mortgage interest generally not deductible | Rental income expenses deductible against rental income | Per Cyprus Income Tax Law |

### Rental Yield Analysis

| Location | Property Type | Purchase Price | Expected Monthly Rent | Gross Yield | Net Yield (after expenses) | Data Field |
|----------|--------------|---------------|----------------------|-------------|----------------------------|------------|
| Limassol (central) | 2-bed apartment | €250,000-400,000 | €1,200-2,000 | 4.5-6.0% | 3.0-4.5% | DR-04-005, DR-04-006 |
| Limassol (tourist area) | 2-bed apartment | €300,000-500,000 | €1,500-2,500 | 5.0-6.5% | 3.5-5.0% | DR-04-005, DR-04-006 |
| Paphos | 3-bed villa | €350,000-600,000 | €1,500-2,500 | 4.0-5.5% | 2.5-4.0% | DR-04-005, DR-04-006 |
| Nicosia | 2-bed apartment | €150,000-250,000 | €700-1,200 | 4.5-6.0% | 3.0-4.5% | DR-04-005, DR-04-006 |

<!-- EXPERT INPUT REQUIRED: Validate rental yield ranges. These are estimates based on 2024/2025 market data. Confirm whether short-term (Airbnb-style) rentals are included in bank assessments or only long-term leases. Also confirm whether Cyprus rental income is subject to SDC for non-dom individuals. -->

### Risk Indicators

- **RC-04-006**: Property market risk -- Cyprus RE prices have been volatile.
- **RC-04-007**: Rental vacancy risk -- seasonal in tourist areas.
- **RC-04-004**: EUR/USD currency risk on rental income vs. mortgage payments.

---

## 3. FA-03-003: Commercial Property Mortgage

### Description

Models mortgage feasibility for **commercial property** (office space for the Cyprus company). Less common but relevant for clients establishing significant business operations.

### Commercial Mortgage Parameters

| Parameter | Value | Notes |
|-----------|-------|-------|
| LTV | 50-60% | Banks are conservative on commercial |
| Interest rate | [PLACEHOLDER]% (typically variable only) | Spread over Euribor: 3.0-5.0% |
| Term | 10-20 years | Shorter than residential |
| Amortization | Full amortization or balloon at 10 years | Balloon requires refinancing |
| Business plan | Required | 3-5 year projections |
| Personal guarantee | Typically required | Director personally liable |
| Collateral | Property + potential additional security | Some banks require additional assets |

### Alternative: Lease vs. Buy Analysis

| Factor | Lease | Buy (Mortgage) | Notes |
|--------|-------|----------------|-------|
| Monthly cost | €500-2,000 rent | [PLACEHOLDER] mortgage payment | Rent is simpler; mortgage builds equity |
| Upfront cost | 2-3 months deposit | 40-50% down payment | Significant capital difference |
| Flexibility | Short-term lease possible | Long-term commitment | Lease better for first 1-2 years |
| Tax treatment | Rent fully deductible | Interest + depreciation deductible | Both reduce taxable profit |
| Substance evidence | Lease agreement suffices | Ownership is stronger evidence | For economic substance purposes |
| **Recommendation** | **Phase 3 (establishment)** | **Phase 4 (steady state) if justified** | Start with lease, consider purchase later |

---

## 4. Currency Risk Analysis

### The Core Risk

Most Israeli clients relocating to Cyprus have income denominated in **USD** or **NIS**, while Cyprus mortgages are exclusively in **EUR**. This creates an ongoing currency mismatch.

### Currency Exposure Model

| Income Currency | Mortgage Currency | Risk Direction | Mitigation Options |
|----------------|-------------------|----------------|-------------------|
| USD → EUR | EUR | USD weakens vs. EUR → higher effective mortgage cost | Forward contracts, USD/EUR hedge, EUR-earning structure |
| NIS → EUR | EUR | NIS weakens vs. EUR → higher effective mortgage cost | Convert income to EUR monthly, NIS/EUR hedge |
| EUR → EUR | EUR | Matched — no currency risk | Ideal; achieve by routing income through Cyprus company in EUR |

### Historical Volatility (Illustrative)

| Currency Pair | 5-Year Range | Annualized Volatility | Worst Annual Move | Data Field |
|--------------|-------------|----------------------|-------------------|------------|
| USD/EUR | [PLACEHOLDER] | [PLACEHOLDER]% | [PLACEHOLDER]% | DR-04-001 |
| NIS/EUR | [PLACEHOLDER] | [PLACEHOLDER]% | [PLACEHOLDER]% | DR-04-001 |

<!-- EXPERT INPUT REQUIRED: Populate with actual 5-year historical data. Assess whether natural hedging (earning in EUR through Cyprus company) is sufficient for most clients or whether formal hedging instruments should be recommended. -->

### Stress Test: Currency Shock Impact

| Scenario | Exchange Rate Change | Impact on Monthly Payment (effective USD) | Impact on DTI |
|----------|---------------------|------------------------------------------|---------------|
| Base case | No change | [PLACEHOLDER] | [PLACEHOLDER]% |
| Moderate stress | EUR strengthens 10% vs. USD | [PLACEHOLDER] (+10%) | [PLACEHOLDER]% |
| Severe stress | EUR strengthens 20% vs. USD | [PLACEHOLDER] (+20%) | [PLACEHOLDER]% |
| Extreme stress | EUR strengthens 30% vs. USD | [PLACEHOLDER] (+30%) | [PLACEHOLDER]% |

### Risk Indicator

- **RC-04-004**: Currency mismatch risk between income and debt service currencies.

---

## 5. Debt-to-Income (DTI) Qualification Calculator

### Input Variables

| Variable | Source | Data Field |
|----------|--------|------------|
| Gross monthly income (all sources, converted to EUR) | FA-01 income models | DR-05-001, DR-05-004, DR-04-005, DR-04-010 |
| Existing debt payments (Israel mortgages, loans) | Client questionnaire | DR-04-015 |
| Proposed Cyprus mortgage payment | This model (FA-03) | DR-08-010 |
| Other Cyprus obligations (car lease, etc.) | Client questionnaire | DR-08-011 |

### DTI Calculation

```
Total_Monthly_Debt = Israel_Mortgage + Israel_Loans + Cyprus_Mortgage + Other_Obligations

DTI = (Total_Monthly_Debt / Gross_Monthly_Income_EUR) x 100

Qualification:
  DTI ≤ 35% → Strong qualification
  DTI 35-40% → Marginal — may require additional collateral
  DTI 40-45% → Difficult — likely requires co-borrower or higher down payment
  DTI > 45% → Unlikely to qualify at most Cyprus banks
```

### Interaction with Israeli Mortgage

Many clients retain Israeli properties with existing mortgages. Cyprus banks will include Israeli mortgage payments in the DTI calculation:

| Scenario | Israeli Mortgage | Cyprus Mortgage | Combined DTI Impact | Strategy |
|----------|-----------------|-----------------|--------------------|---------:|
| Retain Israeli property | ₪X/month | €Y/month | Both count toward DTI | Rental income offsets Israeli mortgage |
| Sell Israeli property | Eliminated | €Y/month | Lower DTI | Sale proceeds fund down payment |
| Refinance Israeli property | Reduced payment | €Y/month | Moderate DTI | Extend term to reduce monthly |

---

## 6. Bank Comparison Framework

| Bank | LTV (Residential) | Rate Indication | Min Income | Turnaround | Notes | Legal Reference |
|------|-------------------|-----------------|------------|------------|-------|-----------------|
| Bank of Cyprus | [PLACEHOLDER]% | [PLACEHOLDER]% | [PLACEHOLDER] | [PLACEHOLDER] weeks | Largest bank; most Israeli client experience | LTF-04-001 |
| Hellenic Bank | [PLACEHOLDER]% | [PLACEHOLDER]% | [PLACEHOLDER] | [PLACEHOLDER] weeks | Strong presence in Limassol | LTF-04-001 |
| Eurobank Cyprus | [PLACEHOLDER]% | [PLACEHOLDER]% | [PLACEHOLDER] | [PLACEHOLDER] weeks | Greek parent; may accept Greek documentation | LTF-04-001 |
| Alpha Bank Cyprus | [PLACEHOLDER]% | [PLACEHOLDER]% | [PLACEHOLDER] | [PLACEHOLDER] weeks | | LTF-04-001 |
| RCB Bank | [PLACEHOLDER]% | [PLACEHOLDER]% | [PLACEHOLDER] | [PLACEHOLDER] weeks | [PLACEHOLDER -- confirm current status] | LTF-04-001 |

<!-- EXPERT INPUT REQUIRED: This table must be populated by a Cyprus banking specialist with current product offerings. Include any specific programs for Israeli/tech-sector clients. Confirm RCB Bank's current operational status following restructuring. -->

---

## Open Items for Expert Review

- [ ] Populate current interest rates from major Cyprus banks
- [ ] Confirm LTV ranges by residency status (non-EU vs. PR holder vs. citizen)
- [ ] Validate rental yield data for Limassol, Paphos, Nicosia
- [ ] Confirm currency hedging instrument availability for retail clients
- [ ] Validate DTI thresholds by bank
- [ ] Confirm whether Israeli BDI credit reports are accepted by Cyprus banks
- [ ] Review commercial mortgage parameters and lease-vs-buy analysis
- [ ] Confirm stamp duty rates on mortgage agreements (LTF-04-006)
