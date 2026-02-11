---
id: FA-01
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies:
  - DR-05
  - DR-06
  - LTF-01
  - LTF-02
  - LTF-03
  - LTF-05
  - RC-01
  - RC-04
---

# Income Structure Analysis Templates

## Overview

This file contains **income structure models** for analyzing how each type of client income is taxed under the current Israeli regime versus the projected Cyprus regime after relocation. Each model computes the annual tax differential, enabling advisors to quantify the financial benefit (or cost) of relocation for each income stream independently.

These models feed into:
- **Cash flow scenarios** (`02-cash-flow-scenarios.md`) -- as income inputs per phase
- **Tax optimization** (`05-tax-optimization-scenarios.md`) -- as variables in scenario comparisons
- **Cost-benefit analysis** (`06-cost-benefit-analysis.md`) -- as the "savings" side of the equation

All figures are denominated in **USD** unless otherwise noted. NIS and EUR equivalents should be provided in parentheses where relevant.

---

## Currency & Rate Assumptions

| Parameter | Value | Source | Last Updated |
|-----------|-------|--------|--------------|
| USD/NIS exchange rate | [PLACEHOLDER] | Bank of Israel representative rate | [PLACEHOLDER] |
| USD/EUR exchange rate | [PLACEHOLDER] | ECB reference rate | [PLACEHOLDER] |
| Israeli CPI inflation assumption | [PLACEHOLDER] % | CBS (Central Bureau of Statistics) | [PLACEHOLDER] |
| Cyprus CPI inflation assumption | [PLACEHOLDER] % | Eurostat | [PLACEHOLDER] |

<!-- EXPERT INPUT REQUIRED: Populate baseline exchange rates and inflation assumptions. These rates cascade into all income models below. -->

---

## 1. Income Models Summary Table

| Model ID | Income Type | Current (Israel) | Projected (Cyprus) | Tax Rate Israel | Tax Rate Cyprus | Annual Savings | Data Fields | Assumptions |
|----------|-------------|-------------------|---------------------|-----------------|-----------------|----------------|-------------|-------------|
| FA-01-001 | Israeli employment income | [PLACEHOLDER] | [PLACEHOLDER] | Up to 50% (incl. surtax) | 0% if non-dom on foreign employment; 12.5% if Cyprus-sourced | [PLACEHOLDER] | DR-05-001, DR-05-002, DR-05-003 | Employment continues remotely or transitions to Cyprus entity |
| FA-01-002 | Self-employment income | [PLACEHOLDER] | [PLACEHOLDER] | Up to 50% + NI | 12.5% corporate + [PLACEHOLDER]% on distribution | [PLACEHOLDER] | DR-05-004, DR-05-005, DR-06-001 | Assumes income routed through Cyprus company post-move |
| FA-01-003 | Rental income (Israel properties) | [PLACEHOLDER] | [PLACEHOLDER] | 10% flat or marginal rates | Treaty Art. 6: Israel retains taxing rights; Cyprus credit method | [PLACEHOLDER] | DR-04-005, DR-04-006 | Properties retained in Israel; treaty relief applied |
| FA-01-004 | Dividend income | [PLACEHOLDER] | [PLACEHOLDER] | 25-30% (+ surtax on high earners) | 0% SDC if non-dom; 17% WHT if from Israel (treaty rate) | [PLACEHOLDER] | DR-04-010, DR-05-008 | Non-dom status maintained; treaty WHT rate applied |
| FA-01-005 | Capital gains income | [PLACEHOLDER] | [PLACEHOLDER] | 25-30% (+ surtax) | 0% on securities (non-dom); Israel retains right on Israeli RE | [PLACEHOLDER] | DR-04-011, DR-04-012 | Gains realized post-exit; linear allocation where applicable |
| FA-01-006 | Cyprus employment income (post-move) | N/A | [PLACEHOLDER] | N/A | 0-35% progressive; 50% exemption first year if >€100K | [PLACEHOLDER] | DR-05-001 (post-move), DR-08-005 | New employment in Cyprus; 50% exemption per Section 8(23A) |
| FA-01-007 | Cyprus company profits | N/A | [PLACEHOLDER] | N/A | 12.5% corporate tax; IP box 2.5% effective on qualifying IP | [PLACEHOLDER] | DR-06-001, DR-06-005, DR-08-003 | Sufficient economic substance maintained |
| FA-01-008 | Passive income (interest, royalties) | [PLACEHOLDER] | [PLACEHOLDER] | 15-25% (interest); marginal (royalties) | 0% SDC on interest if non-dom; royalties via IP box | [PLACEHOLDER] | DR-04-008, DR-04-009, DR-05-009 | Non-dom status; treaty WHT rates applied |

<!-- EXPERT INPUT REQUIRED: Validate all tax rates against current legislation. Israeli rates should reflect 2025/2026 brackets including the 3% high-income surtax (mas yesomet). Cyprus rates should reflect current non-dom regime and any 2025/2026 amendments. -->

---

## 2. Detailed Model: FA-01-001 -- Israeli Employment Income

### Description

Models the tax treatment of **salaried employment income** earned from an Israeli employer. Relevant for clients who continue working for an Israeli company during the transition period or maintain Israeli employment remotely from Cyprus.

### Israeli Tax Treatment (Pre-Exit)

| Component | Rate / Formula | Legal Reference | Data Field |
|-----------|---------------|-----------------|------------|
| Income tax (marginal) | 10%-50% progressive brackets | Section 121, Tax Ordinance | DR-05-002 |
| High-income surtax | 3% on income > ₪698,280/year | Section 121B, Tax Ordinance | DR-05-002 |
| National Insurance (employee) | ~3.5% up to threshold, ~12% above | NI Law, Section 336 | DR-05-003 |
| Health tax (employee) | ~3.1% up to threshold, ~5% above | National Health Insurance Law | DR-05-003 |
| **Effective combined rate** | **~47-55% on high brackets** | | |

<!-- EXPERT INPUT REQUIRED: Confirm 2026 tax brackets and NI thresholds. The high-income surtax threshold is indexed annually. -->

### Cyprus Tax Treatment (Post-Exit)

| Component | Rate / Formula | Legal Reference | Data Field |
|-----------|---------------|-----------------|------------|
| Employment exercised in Cyprus | 0%-35% progressive | Cyprus Income Tax Law, Section 5 | DR-05-002 |
| 50% exemption (first employment in Cyprus) | 50% of income exempt if > €100K/year | Section 8(23A), Income Tax Law | DR-08-005 |
| Social insurance (employee) | ~8.3% up to ceiling | Cyprus Social Insurance Law | DR-08-006 |
| GHS (GESY) contribution | 2.65% of gross | General Healthcare System Law | DR-08-006 |
| **Effective combined rate (with exemption)** | **~12-20% on high earners** | | |

<!-- EXPERT INPUT REQUIRED: Confirm the 50% exemption applies for 17 years per 2022 amendment. Confirm salary threshold and whether it applies to total remuneration or base salary only. -->

### Tax Differential Formula

```
Annual_Savings_Employment = Tax_Israel(Gross_Employment) - Tax_Cyprus(Gross_Employment)

Where:
  Tax_Israel() = marginal_tax + surtax + NI + health_tax
  Tax_Cyprus() = progressive_tax(after 50% exemption if eligible) + social_insurance + GHS
```

### Risk Considerations

- **RC-01-003**: If employment is with an Israeli employer and work is performed partly in Israel, Israel may retain taxing rights under the treaty (Article 15). Days worked in Israel remain Israeli-taxable.
- **RC-02-005**: Employment structure must reflect genuine transfer; artificial arrangements may be challenged.

---

## 3. Detailed Model: FA-01-002 -- Self-Employment Income

### Description

Models the tax treatment of **self-employment / freelance income** for clients who operate as sole proprietors or personal service providers. Post-relocation, this income is typically routed through a Cyprus private company.

### Israeli Tax Treatment (Pre-Exit)

| Component | Rate / Formula | Legal Reference | Data Field |
|-----------|---------------|-----------------|------------|
| Income tax (marginal) | 10%-50% progressive | Section 121, Tax Ordinance | DR-05-004 |
| High-income surtax | 3% on income > threshold | Section 121B | DR-05-004 |
| NI (self-employed) | ~6.72% up to threshold, ~17.83% above | NI Law | DR-05-005 |
| Health tax (self-employed) | ~3.1% up to threshold, ~5% above | National Health Insurance Law | DR-05-005 |
| **Effective combined rate** | **~50-56% on high brackets** | | |

### Cyprus Tax Treatment (Post-Exit: via Cyprus Company)

| Component | Rate / Formula | Legal Reference | Data Field |
|-----------|---------------|-----------------|------------|
| Corporate tax on profits | 12.5% | Cyprus Income Tax Law, Section 24 | DR-06-005 |
| IP box (if qualifying IP) | 2.5% effective (80% deduction on qualifying profits) | IP Box regime, 2012 amendment | DR-06-008 |
| Director salary -- personal tax | 0%-35% progressive | Section 5, Income Tax Law | DR-08-005 |
| Dividend distribution -- SDC | 0% if non-dom | SDC Law, Section 3 | DR-04-010 |
| Dividend distribution -- GHS | 2.65% on dividends | GHS Law | DR-04-010 |
| **Effective combined rate (retained + distributed)** | **~15-20%** | | |

<!-- EXPERT INPUT REQUIRED: Validate the effective combined rate range. It depends heavily on the split between salary and dividends. The optimal salary/dividend split should be modeled separately for each client's NI/GHS impact. -->

### Economic Substance Requirements

For the Cyprus company route to be respected, the following substance must be demonstrated:

| Requirement | Description | Reference |
|-------------|-------------|-----------|
| Physical office | Dedicated office space in Cyprus (not just a registered address) | LTF-03-010 |
| Local employees | At least one qualified employee in Cyprus | LTF-03-011 |
| Board meetings | Board decisions made in Cyprus; minutes maintained | LTF-03-012 |
| Bank account | Active Cyprus bank account for business transactions | LTF-04-001 |
| Local contracts | Service agreements executed from Cyprus | LTF-03-013 |

Reference: Risk indicator RC-03-001 (substance deficiency risk).

---

## 4. Detailed Model: FA-01-003 -- Rental Income (Israel Properties)

### Description

Models rental income from **Israeli real estate** retained after relocation. Under the Israel-Cyprus tax treaty, Israel retains the primary taxing right on income from immovable property situated in Israel (Article 6).

### Tax Treatment Comparison

| Component | Israel (Current) | Israel (Post-Exit, as non-resident) | Cyprus Treatment | Data Field |
|-----------|-----------------|--------------------------------------|------------------|------------|
| Flat rate option | 10% on gross rental (no deductions) | 10% on gross rental (available to non-residents) | Treaty credit for Israeli tax paid | DR-04-005 |
| Marginal rate option | Progressive rates on net rental | Progressive rates; non-resident may face higher effective rate | Treaty credit | DR-04-005 |
| Surtax | 3% if total income > threshold | Applies if Israeli-source income exceeds threshold | N/A | DR-04-006 |
| Cyprus income inclusion | N/A | N/A | Included in worldwide income; non-dom exemption does NOT apply to rental from Israel if remitted | DR-04-005 |

<!-- EXPERT INPUT REQUIRED: Clarify whether Israeli rental income is considered "remitted" to Cyprus if deposited in an Israeli bank account. The non-dom exemption exempts foreign dividends and interest, but rental income treatment requires confirmation. -->

### Treaty Interaction (LTF-05-003)

- Article 6 of the Israel-Cyprus DTT: Income from immovable property may be taxed in the state where the property is located.
- Cyprus provides a credit for Israeli tax paid, avoiding double taxation.
- Net effect: Client pays the higher of Israeli or Cypriot tax on this income stream.

---

## 5. Detailed Model: FA-01-004 -- Dividend Income

### Description

Models dividend income from Israeli and non-Israeli sources. This is a **key benefit area** for non-dom status in Cyprus, as the Special Defence Contribution (SDC) of 17% on dividends is waived for qualifying non-domiciled individuals.

### Tax Treatment Comparison

| Source | Israel Rate | Cyprus Rate (Non-Dom) | Treaty WHT | Net Rate | Data Field |
|--------|------------|----------------------|------------|----------|------------|
| Israeli company dividends | 25% (substantial shareholder: 30%) | 0% SDC | 15% treaty WHT (Art. 10) | 15% (treaty) | DR-04-010 |
| Non-Israeli company dividends | 25-30% (worldwide taxation) | 0% SDC | Depends on source country | 0% if not remitted; source WHT if remitted | DR-04-010 |
| Cyprus company dividends (own company) | N/A (post-exit) | 0% SDC; 2.65% GHS | N/A | 2.65% | DR-06-005, DR-04-010 |

<!-- EXPERT INPUT REQUIRED: Confirm treaty WHT rate on dividends (Article 10). The general rate is 15%; confirm whether a reduced rate of 10% applies for substantial holdings (25%+ ownership). Also confirm GHS rate on dividend income for 2026. -->

### Savings Formula

```
Dividend_Savings = (Israel_Tax_Rate - Effective_Cyprus_Rate) x Annual_Dividend_Income

For Israeli-source dividends:
  Israel_Tax_Rate = 25% (or 30% for substantial shareholder)
  Effective_Cyprus_Rate = Treaty_WHT_Rate (15% or 10%)
  Savings = 10-15% of annual dividend income

For non-Israeli-source dividends:
  Israel_Tax_Rate = 25-30%
  Effective_Cyprus_Rate = 0% (non-dom, not remitted)
  Savings = 25-30% of annual dividend income
```

---

## 6. Detailed Model: FA-01-005 -- Capital Gains Income

### Description

Models capital gains realized **after** the exit date. Pre-exit unrealized gains are addressed in `04-exit-tax-calculation.md` (Section 100A). This model covers gains on dispositions occurring post-relocation.

### Tax Treatment Comparison

| Asset Type | Israel Rate (If Still Resident) | Cyprus Rate (Non-Dom) | Treaty Allocation | Data Field |
|-----------|-------------------------------|----------------------|-------------------|------------|
| Publicly traded securities | 25% (+ 3% surtax) | 0% (exempt in Cyprus) | Art. 13(5): residence state only | DR-04-011 |
| Private company shares | 25-30% (+ surtax) | 0% (exempt in Cyprus) | Art. 13(5): residence state; but Art. 13(2) if >50% RE | DR-04-012 |
| Israeli real estate | 25% | Israel retains right (Art. 13(1)) | Art. 13(1): situs state | DR-04-006 |
| Non-Israeli real estate | 25% | 0% (capital gains generally exempt) | Art. 13(1) N/A | DR-04-006 |

<!-- EXPERT INPUT REQUIRED: Confirm Cyprus capital gains tax exemption scope. Cyprus CGT applies only to gains on Cyprus immovable property and shares in companies owning Cyprus immovable property. All other capital gains are exempt. Verify this remains unchanged for 2026. -->

### Linear Allocation Note

For assets held both pre- and post-exit, the **linear allocation method** (Section 100A(b)) may apply to determine the Israeli-taxable portion. See FA-04-007 for the detailed formula.

### Risk Consideration

- **RC-01-005**: ITA may challenge the exit date or argue that gains are attributable to the Israeli period. Maintain clear documentation of the residency cessation date (see LTF-01-009).

---

## 7. Detailed Model: FA-01-006 -- Cyprus Employment Income (Post-Move)

### Description

Models **new employment income** earned in Cyprus after relocation. Particularly relevant for high earners who qualify for the **50% income tax exemption** on first employment in Cyprus.

### 50% Exemption -- Section 8(23A)

| Parameter | Value | Reference |
|-----------|-------|-----------|
| Eligibility | First employment in Cyprus | Section 8(23A), Income Tax Law |
| Salary threshold | > €55,000 per annum (or > €100,000 per 2022 amendment) | [PLACEHOLDER -- confirm current threshold] |
| Exemption rate | 50% of employment income exempt | |
| Duration | 17 years from year of employment | 2022 amendment |
| Condition | Was not a Cyprus tax resident for at least 3 consecutive years prior | |
| Applicable to | Base salary, bonuses, benefits | [PLACEHOLDER -- confirm scope] |

<!-- EXPERT INPUT REQUIRED: The threshold was raised from €55K to €100K in a 2022 amendment for new employees starting from 2022. Confirm (a) which threshold applies to individuals relocating in 2026, (b) whether the 17-year duration has been formally enacted, (c) scope of "employment income" for exemption purposes. -->

### Effective Tax Calculation

```
Taxable_Income = Gross_Employment x 50% (after exemption)
Cyprus_Tax = Progressive_Rate(Taxable_Income) + Social_Insurance + GHS
Effective_Rate = Cyprus_Tax / Gross_Employment

Example (€200,000 gross):
  Taxable = €100,000
  Tax ~= €17,500 (progressive) + €4,836 (SI max) + €5,300 (GHS 2.65%)
  Total ~= €27,636
  Effective Rate ~= 13.8%
```

---

## 8. Detailed Model: FA-01-007 -- Cyprus Company Profits

### Description

Models corporate profits retained in or distributed from a **Cyprus private company** established post-relocation. This is the primary vehicle for self-employment and consulting income.

### Corporate Tax Structure

| Component | Rate | Condition | Legal Reference | Data Field |
|-----------|------|-----------|-----------------|------------|
| Standard corporate tax | 12.5% | On worldwide profits | Section 24, Income Tax Law | DR-06-005 |
| IP box effective rate | 2.5% | On qualifying IP profits (80% deemed deduction) | IP Box regime | DR-06-008 |
| Notional interest deduction (NID) | [PLACEHOLDER]% | On new equity introduced | Section 9B, Income Tax Law | DR-06-009 |
| Dividend to non-dom shareholder | 0% SDC + 2.65% GHS | Non-dom status required | SDC Law; GHS Law | DR-04-010 |

<!-- EXPERT INPUT REQUIRED: (1) Confirm NID rate (tied to 10-year Cyprus government bond yield + 5%). (2) Confirm whether the IP box regime requires a nexus approach (OECD modified nexus) and how this affects IP developed partly in Israel. -->

### Profit Distribution Strategy

The optimal split between retained earnings, director salary, and dividend distribution depends on:

| Factor | Impact | Reference |
|--------|--------|-----------|
| Director salary level | Higher salary = more personal tax but more social insurance credits | FA-01-006 |
| Dividend timing | Non-dom exemption eliminates SDC; GHS at 2.65% remains | LTF-03-007 |
| Retained earnings | 12.5% corporate tax only; no additional tax until distribution | LTF-03-005 |
| NID benefit | Reduces corporate taxable profits; benefits equity-funded companies | LTF-03-008 |

---

## 9. Detailed Model: FA-01-008 -- Passive Income (Interest, Royalties)

### Description

Models **interest income** and **royalty income** received by the individual or through a Cyprus entity.

### Interest Income

| Source | Israel Rate | Cyprus Rate (Non-Dom) | Treaty WHT | Net Effect | Data Field |
|--------|------------|----------------------|------------|------------|------------|
| Israeli bank deposits | 15% (25% if not linked to CPI) | 0% SDC if non-dom | 10% treaty WHT (Art. 11) | 10% (treaty rate) | DR-04-008 |
| Non-Israeli deposits | 15-25% | 0% SDC if non-dom | Source country dependent | 0% if not remitted to Cyprus | DR-04-008 |
| Corporate bonds | 15-25% | 0% SDC; 12.5% if through Cyprus company | Treaty dependent | Varies | DR-04-009 |

### Royalty Income

| Source | Israel Rate | Cyprus Rate | Treaty WHT | Net Effect | Data Field |
|--------|------------|------------|------------|------------|------------|
| Israeli-source royalties | Marginal rates (up to 50%) | 12.5% corporate (via Cyprus co.) | 5% treaty WHT (Art. 12) | 5% WHT + 12.5% corporate | DR-05-009 |
| IP box qualifying royalties | N/A | 2.5% effective (via IP box) | Source dependent | Significant savings for IP-heavy businesses | DR-06-008 |

<!-- EXPERT INPUT REQUIRED: Confirm treaty WHT rates for interest (Art. 11) and royalties (Art. 12) under the Israel-Cyprus DTT. Verify whether the 5% royalty rate requires beneficial ownership in Cyprus and whether substance requirements are satisfied. -->

---

## 10. Aggregated Income Impact Matrix

This matrix summarizes the tax differential across all income types for a hypothetical high-earning client profile:

| Income Type | Annual Amount (USD) | Israel Tax | Cyprus Tax | Annual Saving | % Saving |
|-------------|---------------------|------------|------------|---------------|----------|
| Employment | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] |
| Self-employment (via Cyprus co.) | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] |
| Rental (Israel) | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] |
| Dividends | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] |
| Capital gains | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] |
| Interest | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] |
| Royalties | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] |
| **TOTAL** | **[PLACEHOLDER]** | **[PLACEHOLDER]** | **[PLACEHOLDER]** | **[PLACEHOLDER]** | **[PLACEHOLDER]** |

<!-- EXPERT INPUT REQUIRED: Populate with a representative client profile (e.g., tech entrepreneur with $500K+ annual income across multiple streams). This illustrative example helps experts validate the model logic. -->

---

## Open Items for Expert Review

- [ ] Validate all Israeli tax rates against 2025/2026 legislation (LTF-01, LTF-02)
- [ ] Confirm Cyprus non-dom exemption scope for each income type
- [ ] Verify treaty WHT rates under the Israel-Cyprus DTT (LTF-05)
- [ ] Confirm 50% employment exemption threshold and duration (FA-01-006)
- [ ] Validate NID rate and IP box nexus requirements (FA-01-007)
- [ ] Clarify rental income treatment under non-dom regime (FA-01-003)
- [ ] Populate aggregated impact matrix with representative figures
- [ ] Confirm NI/social insurance interaction for each income type
