---
id: VS-05
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies:
  - DT-01
  - DT-02
  - DT-03
  - DT-04
  - RC-01
  - RC-02
  - RC-04
  - FA-01
  - FA-02
  - FA-04
  - FA-05
  - DR-01
  - DR-02
  - DR-03
  - DR-04
  - DR-05
  - DR-06
---

# VS-05: Corporate Executive Exit

## 1. Client Profile

| Field | Value |
|-------|-------|
| **Name** | Noa Goldstein (נועה גולדשטיין) |
| **Age** | 48 |
| **Nationality** | Israeli (IL) |
| **Marital Status** | Married |
| **Spouse** | Eyal Goldstein (אייל גולדשטיין), age 50, Israeli citizen |
| **Children** | 2 -- Tamar (age 20, IDF service), Yonatan (age 17, 12th grade in Israel) |
| **Current Residence** | Savyon, Israel |
| **Occupation** | CFO of Israeli publicly traded company (TASE-listed) |
| **Target Destination** | Limassol, Cyprus |
| **Planned Structure** | Resign CFO role; establish Cyprus-based consulting practice |
| **Timeline** | 12--18 months (resignation effective June 2027; relocation September 2027) |

### Background Narrative

Noa has served as CFO of a TASE-listed technology company for 8 years. She holds $8M in unvested stock options (vesting over the next 2--4 years) and $3M in already-vested equity. Her annual salary is $500,000 (NIS 1.8M). She plans to resign, relocate to Cyprus, and establish a consulting practice serving Israeli tech companies on financial strategy and capital markets.

The central complication is the stock option taxation: unvested options that vest after departure create a complex allocation problem between Israel and Cyprus. Section 102 of the Israeli Tax Ordinance governs employee stock option taxation, and the interaction with Section 100A (exit tax) on departure is one of the most technically complex areas of Israeli tax law.

A second major complication is that Noa's husband Eyal intends to REMAIN in Israel. He is a senior physician at Ichilov Hospital and cannot relocate. Their daughter Tamar is in IDF service (cannot leave Israel), and their son Yonatan is in his final year of high school. This creates a "split household" -- one of the strongest center-of-life indicators the ITA can use.

---

## 2. Input Data

### 2.1 Personal Identity (DR-01)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-01-001 | full_legal_name | Noa Goldstein |
| DR-01-002 | full_legal_name_hebrew | נועה גולדשטיין |
| DR-01-003 | israeli_id_number | 041234567 |
| DR-01-004 | date_of_birth | 1977-11-08 |
| DR-01-005 | passport_number_israeli | 29876543 |
| DR-01-006 | passport_expiry_israeli | 2031-05-30 |
| DR-01-009 | contact_email | noa.goldstein@example.com |
| DR-01-010 | contact_phone | +972546789012 |
| DR-01-013 | nationality_primary | IL |
| DR-01-015 | marital_status | married |

### 2.2 Family & Household (DR-02)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-02-001 | spouse_full_name | Eyal Goldstein |
| DR-02-002 | spouse_id_number | 039876543 |
| DR-02-003 | spouse_nationality | IL |
| DR-02-004 | spouse_occupation | Senior physician, Ichilov Hospital (Tel Aviv) |
| DR-02-005 | spouse_work_location | Tel Aviv, Israel |
| DR-02-006 | spouse_relocating | **NO -- Eyal will remain in Israel** |
| DR-02-007 | number_of_children | 2 |
| DR-02-008 | child_1_name | Tamar Goldstein |
| DR-02-009 | child_1_age | 20 |
| DR-02-010 | child_1_status | IDF mandatory service (cannot leave Israel) |
| DR-02-012 | child_2_name | Yonatan Goldstein |
| DR-02-013 | child_2_age | 17 |
| DR-02-014 | child_2_school | High school, Savyon (final year; plans to enlist in IDF after graduation) |
| DR-02-015 | child_2_relocating | No -- enlisting in IDF |
| DR-02-020 | household_split | YES -- Noa in Cyprus, Eyal + children in Israel |

### 2.3 Residence & Presence (DR-03)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-03-001 | days_in_israel_current_year | 240 |
| DR-03-002 | days_in_israel_prior_year | 320 |
| DR-03-003 | days_in_israel_two_years_prior | 330 |
| DR-03-004 | primary_dwelling_location | Savyon, Israel (villa, jointly owned with Eyal) |
| DR-03-005 | owns_israeli_dwelling | Yes (Savyon villa, FMV $3,500,000 -- will remain Eyal's primary residence) |
| DR-03-006 | foreign_dwelling | None currently; plans to rent in Limassol |
| DR-03-007 | israeli_drivers_license | Active |
| DR-03-008 | israeli_health_insurance | Active (Maccabi) |
| DR-03-009 | israeli_bank_accounts | 3 accounts (Bank Hapoalim, IBI, brokerage account) |
| DR-03-012 | bituach_leumi_status | Active, contributing |
| DR-03-016 | self_declared_resident | Yes (all prior years) |

### 2.4 Financial Assets (DR-04)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-04-001 | total_liquid_assets | $2,000,000 (savings and investment accounts) |
| DR-04-002 | securities_portfolio_vested | $3,000,000 (vested company equity, freely tradable) |
| DR-04-003 | stock_options_unvested | $8,000,000 (estimated current value; vesting schedule: $2M/year over next 4 years) |
| DR-04-004 | real_estate_israel | $3,500,000 (Savyon villa, jointly owned 50/50 with Eyal; $1,500,000 apartment in Tel Aviv as investment) |
| DR-04-005 | real_estate_foreign | None |
| DR-04-006 | pension_funds | $1,500,000 (managers' insurance + advanced study fund) |
| DR-04-007 | total_net_worth | ~$19,500,000 (including unvested options at current value) |
| DR-04-008 | mortgage_balance | $500,000 (on Savyon villa) |
| DR-04-009 | stock_option_plan_type | Section 102 trustee track (capital gains route) |
| DR-04-010 | option_grant_dates | Various: 2019, 2020, 2021, 2022, 2023 |
| DR-04-011 | option_vesting_schedule | 4-year cliff+monthly; next vesting events: Jun 2027, Jun 2028, Jun 2029, Jun 2030 |
| DR-04-012 | option_exercise_price | Weighted average: $15/share (current share price: $45) |
| DR-04-013 | company_tase_ticker | [PLACEHOLDER] |

### 2.5 Employment & Income (DR-05)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-05-001 | employment_status | Employed (CFO, Israeli public company) |
| DR-05-002 | employer | [PLACEHOLDER -- TASE-listed technology company] |
| DR-05-003 | current_annual_income | $500,000 (salary + bonus; excludes option value) |
| DR-05-004 | expected_annual_income_abroad | $250,000 -- $400,000 (consulting fees) |
| DR-05-005 | resignation_date | Planned: June 2027 |
| DR-05-006 | non_compete_clause | 12 months post-resignation (competing Israeli companies) |
| DR-05-007 | notice_period | 6 months (standard for C-suite in Israel) |

### 2.6 Corporate Structure (DR-06)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-06-001 | israeli_company_ownership | 0.3% equity in employer (via exercised options) -- NOT a substantial shareholder (below 10%) |
| DR-06-002 | board_positions | None (CFO is officer, not board member) |
| DR-06-003 | insider_trading_restrictions | Yes -- subject to insider trading blackout periods as CFO |
| DR-06-004 | substantial_shareholder_israeli | No (0.3% < 10% threshold) |
| DR-06-005 | planned_cyprus_company_type | Private Limited Company (consulting) |

---

## 3. Expected Decision Tree Paths

### 3.1 DT-01: Residency Severance Eligibility

| Step | Node ID | Question | Input Value | Branch | Next Node |
|------|---------|----------|-------------|--------|-----------|
| 1 | DT-01-001 | Is client currently Israeli tax resident? | Yes (self-declared) | YES | DT-01-005 |
| 2 | DT-01-005 | Is Bituach Leumi still active? | Yes | YES | DT-01-006 |
| 3 | DT-01-006 | Substantial assets subject to exit tax? | Yes ($8M unvested options + $3M vested equity) | YES | DT-01-007 |
| 4 | DT-01-007 | Substantial shareholder (10%+) in Israeli co? | No (0.3%) | NO | DT-01-008 |
| 5 | DT-01-008 | Primary family ties in Israel? | **YES** -- husband remains in Israel, daughter in IDF, son in Israeli school | YES | **ELIGIBLE-COMPLEX** |

**Expected Terminal:** `ELIGIBLE-COMPLEX`

**Rationale:** Complex due to both (a) substantial exit-tax-triggering assets (stock options) and (b) strong family ties remaining in Israel. The split household is the defining challenge of this scenario.

### 3.2 DT-03: Exit Tax Assessment (Stock Options)

This is the most technically complex aspect of the scenario.

| Step | Node ID | Expected Branch | Notes |
|------|---------|-----------------|-------|
| 1 | DT-03-001 | YES -- assets subject to deemed liquidation | $8M unvested + $3M vested |
| 2 | DT-03-002 | Option classification: Section 102 trustee track | Capital gains route |
| 3 | DT-03-003 | Vested equity: standard capital gains assessment | $3M vested, cost basis = exercise price |
| 4 | DT-03-004 | Unvested options: allocation analysis required | Israel-service vs. Cyprus-service periods |
| 5 | DT-03-005 | Determine Israel/Cyprus allocation formula | [PLACEHOLDER] |
| 6 | DT-03-006 | Consider deferral options | Payment deferral for unvested options |

**Stock Option Allocation Analysis:**

<!-- EXPERT INPUT REQUIRED: The allocation of stock option income between Israel and Cyprus is one of the most complex areas of international tax law. The following is a preliminary framework that MUST be validated by an expert. -->

For options granted during Israeli residency that vest after departure:

```
Israeli-taxable portion = (Days of service in Israel from grant to severance) / (Total days from grant to vesting)
```

Example for a 2021 grant vesting in 2028:

| Period | From | To | Days | Allocation |
|--------|------|----|------|------------|
| Grant to severance | Jan 2021 | Sep 2027 | ~2,465 days | Israeli-service period |
| Grant to vesting | Jan 2021 | Jan 2028 | ~2,557 days | Total service period |
| Israeli allocation | | | | ~96.4% |

**Observation:** Because most options were granted while Noa was in Israel and the service period is overwhelmingly Israeli, the vast majority of the option income will be taxable by Israel regardless of where she resides when the options vest. The tax benefit of relocation is minimal for existing option grants.

<!-- EXPERT INPUT REQUIRED: Confirm the allocation formula. Is it days-based or some other method? Does the Israel-Cyprus treaty provide a specific allocation rule for stock options (OECD Commentary Art. 15 approach)? Are there any administrative rulings on this? -->

### 3.3 Additional Decision Tree Paths

| Tree | Expected Path | Notes |
|------|---------------|-------|
| DT-04 (Cyprus Company) | Standard formation flow | Consulting company with real substance |
| DT-05 (Bank Account) | Standard flow | Required for consulting income |

---

## 4. Expected Risk Scores

### 4.1 Individual Risk Indicators

| Risk ID | Name | Triggered? | Severity | Rationale |
|---------|------|-----------|----------|-----------|
| RC-01-001 | Day count -- current year | YES | 3 (Moderate) | 240 days; will reduce post-relocation. Departure year will still have high count. |
| RC-01-003 | Center of life -- personal ties | YES | 5 (Critical) | **Spouse remains in Israel as senior physician.** One child in IDF, one child finishing school in Israel. This is the strongest possible center-of-life argument for the ITA. |
| RC-01-005 | Israeli dwelling retained | YES | 5 (Critical) | Savyon villa remains Eyal's primary residence. Noa co-owns 50%. Villa is "available for use" when Noa visits Israel. This directly triggers the irrebuttable presumption under LTF-01-006 unless ownership is transferred entirely to Eyal. |
| RC-01-006 | Israeli bank accounts | YES | 2 (Low) | Standard; need conversion to non-resident. |
| RC-01-008 | Spouse remains in Israel | YES | 5 (Critical) | **This is the defining risk.** Under LTF-01-013 (spouse attribution rule), Eyal's confirmed Israeli residency creates a presumption that Noa is also a resident. The ITA will argue aggressively on this point. |
| RC-01-009 | Children in Israeli schools/IDF | YES | 4 (High) | One child in IDF (cannot leave), one finishing high school. Strong ties. |
| RC-02-006 | Anti-avoidance risk | YES | 4 (High) | CFO of public company relocating to low-tax jurisdiction while retaining economic ties (options, family) will attract ITA scrutiny. The timing (pre-major-vesting) could be viewed as tax-motivated. |
| RC-02-007 | Insider trading / securities compliance | YES | 3 (Moderate) | Post-resignation, Noa may still hold material non-public information. Insider trading blackout periods may restrict equity sales needed for exit tax payment. |
| RC-04-001 | Exit tax vs. liquidity | YES | 4 (High) | Exit tax on $3M vested equity could be $500K+. $8M unvested creates deferred liability. Liquid assets ($2M) are tight relative to total exposure. |
| RC-04-002 | Stock option tax complexity | YES | 5 (Critical) | Section 102 options crossing residency boundaries is one of the most complex tax situations possible. Allocation formula, trustee track implications, and treaty interaction all require specialist analysis. |
| RC-04-004 | Concentrated asset risk | YES | 4 (High) | $11M (56% of net worth) in a single company's equity. Market risk is substantial. |

### 4.2 Category Aggregation

| Category | Highest Severity | Triggered Count | Category Score | Weight |
|----------|-----------------|-----------------|----------------|--------|
| Tax (RC-01) | 5 | 5 | [PLACEHOLDER] | 0.35 |
| Legal & Compliance (RC-02) | 4 | 2 | [PLACEHOLDER] | 0.30 |
| Structural (RC-03) | -- | 0 | [PLACEHOLDER] | 0.20 |
| Financial Exposure (RC-04) | 5 | 3 | [PLACEHOLDER] | 0.15 |

### 4.3 Expected Overall Risk Tier

**Expected Tier: RED (High / Critical)**

Rationale: Three Critical-severity indicators (spouse in Israel, dwelling retained, stock option complexity) dominate. The spouse-in-Israel factor alone makes this case extraordinarily difficult to defend against an ITA challenge. Combined with the irrebuttable presumption risk on the Savyon villa and the complex stock option allocation, this scenario may ultimately result in an advisory recommendation AGAINST severance -- or at minimum, require a formal ITA pre-ruling.

---

## 5. Expected Financial Outputs

### 5.1 Exit Tax -- Vested Equity (FA-04)

| Item | Value | Notes |
|------|-------|-------|
| Vested equity value | $3,000,000 | Freely tradable |
| Cost basis (exercise price) | ~$1,000,000 | Weighted average exercise price $15 x shares |
| Capital gain | ~$2,000,000 | |
| Tax rate (Section 102 trustee track) | 25% | Capital gains rate |
| Exit tax on vested equity | ~$500,000 | |

### 5.2 Exit Tax -- Unvested Options (FA-04)

| Item | Value | Notes |
|------|-------|-------|
| Unvested options estimated value | $8,000,000 | At current share price |
| Intrinsic value (share price - exercise price) | $30/share x shares | $45 - $15 exercise price |
| Israeli allocation factor | ~90--96% | Most grants were during Israeli service |
| Israeli-taxable portion | ~$7,200,000 -- $7,680,000 | |
| Tax rate | 25% | |
| Deferred exit tax liability | ~$1,800,000 -- $1,920,000 | Due as options vest and are exercised |
| Payment deferral available? | [PLACEHOLDER] | Section 100A(b) may allow deferral with guarantees |

<!-- EXPERT INPUT REQUIRED: The unvested option calculation is highly approximate. The actual tax depends on: (a) share price at exercise vs. grant, (b) allocation formula approved by ITA, (c) whether Section 102 trustee track benefits are preserved post-departure, (d) whether the ITA applies a different valuation method for deemed liquidation. This requires specialist tax counsel. -->

### 5.3 Total Financial Exposure Summary

| Item | Amount | Timing |
|------|--------|--------|
| Exit tax -- vested equity | ~$500,000 | Due at severance |
| Exit tax -- unvested options (deferred) | ~$1,800,000 | As options vest (over 4 years) |
| Professional fees (legal + tax) | ~$80,000 -- $120,000 | During planning and execution |
| ITA pre-ruling application (recommended) | ~$15,000 -- $30,000 | Before severance |
| Savyon villa transfer (if ownership restructured) | [PLACEHOLDER] | Real estate transfer tax, legal fees |
| **Total estimated cost** | **~$2,395,000 -- $2,570,000** | Over 4 years |

### 5.4 Consulting Income Projection (FA-01)

| Year | Consulting Revenue | Cyprus Corporate Tax (12.5%) | Net to Noa | Notes |
|------|-------------------|------------------------------|-----------|-------|
| Year 1 (partial) | $150,000 | $18,750 | $131,250 | Ramp-up; non-compete may limit |
| Year 2 | $350,000 | $43,750 | $306,250 | Full operations |
| Year 3 | $400,000 | $50,000 | $350,000 | Established practice |

<!-- EXPERT INPUT REQUIRED: Non-compete clause restricts competing Israeli companies for 12 months. Does consulting for Israeli companies on financial strategy (not competing products) violate a typical non-compete? Legal review required. -->

---

## 6. Validation Criteria

| # | Criterion | Expected Result | Pass Condition |
|---|-----------|-----------------|----------------|
| 1 | DT-01 terminal | ELIGIBLE-COMPLEX | Exact match |
| 2 | RC-01-008 triggered | Yes, severity 5 | Spouse remaining in Israel flagged as Critical |
| 3 | RC-01-005 triggered | Yes, severity 5 | Retained dwelling (co-owned villa) flagged as Critical |
| 4 | RC-04-002 triggered | Yes, severity 5 | Stock option complexity flagged as Critical |
| 5 | Overall risk tier | RED | Highest tier |
| 6 | Exit tax -- vested equity | $450K -- $550K | Within 10% of $500K |
| 7 | Exit tax -- unvested (deferred) | $1.5M -- $2.0M | Within range |
| 8 | Stock option allocation factor | 90--96% Israeli | Within expert-confirmed range |
| 9 | ITA pre-ruling recommended | Yes | System explicitly recommends pre-ruling |
| 10 | Split household advisory warning | Yes | System generates specific warning about split household risks |
| 11 | Irrebuttable presumption alert | Yes | Villa co-ownership triggers LTF-01-006 alert |

---

## 7. Edge Cases

### 7.1 ITA Rejects Severance Due to Spouse Remaining

**Issue:** The ITA may simply reject Noa's non-residency claim because her husband -- a senior physician -- remains permanently in Israel. The spouse attribution rule (LTF-01-013) creates a rebuttable presumption that Noa is a resident. With the 2025 reform potentially making this irrebuttable in certain circumstances, the case could be unwinnable.

**Risk:** If the ITA rejects severance, Noa remains an Israeli tax resident subject to worldwide taxation, rendering the entire relocation plan moot from a tax perspective.

**Test:** Set `DR-02-006` (spouse_relocating) to "No, permanent." Verify the system generates a STRONG advisory warning (not just a risk flag) that residency severance may not be achievable and recommends obtaining a binding pre-ruling from the ITA before proceeding.

### 7.2 Share Price Decline Before Option Exercise

**Issue:** The $8M unvested option value assumes the current share price ($45). If the share price drops to $20 before vesting, the intrinsic value drops to ($20 - $15) x shares = significantly less than $8M.

**Risk:** Exit tax may have been overpaid based on deemed liquidation value. Refund mechanisms under Section 100A are complex and may not fully recover overpayments.

**Test:** Recalculate exit tax with share price at $20. Verify FA-04 model can handle price changes and generates a note about overpayment risk.

### 7.3 Non-Compete Prevents Consulting Income

**Issue:** If the 12-month non-compete is broadly interpreted, Noa may not be able to generate consulting income from Israeli tech companies in Year 1. This creates a $150K income gap.

**Test:** Set Year 1 consulting revenue to $0. Verify cash flow model shows the impact and RC-04-007 assesses liquidity adequacy.

### 7.4 Savyon Villa Transfer Tax

**Issue:** If Noa transfers her 50% ownership of the Savyon villa to Eyal (to avoid irrebuttable presumption), this transfer may trigger real estate transfer tax (mas rechisha) and potential capital gains tax.

**Risk:** Intra-spousal transfers in Israel are generally exempt from real estate transfer tax while married. But if Noa is claiming non-residency, the exemption rules may be interpreted differently.

**Test:** Include villa transfer costs in the financial model. Verify the system identifies the transfer as a recommended action and calculates associated tax implications.

<!-- EXPERT INPUT REQUIRED: Confirm the tax treatment of intra-spousal real estate transfer where one spouse is claiming non-residency. Is the Section 4A exemption (between spouses) available? Does the transfer itself create an exit tax event? -->

### 7.5 Section 102 Trustee Track -- Post-Departure Status

**Issue:** Section 102 trustee track options benefit from capital gains treatment (25%) rather than ordinary income (up to 50%). After Noa ceases to be an employee, the trustee arrangement may need to continue until options are exercised. If the trustee requirement is breached, all options could be reclassified as ordinary income.

**Risk:** Reclassification from capital gains to ordinary income would nearly double the tax rate on $8M+ of option income.

**Test:** Verify the system flags Section 102 trustee continuity as a critical requirement post-resignation and includes it in the pre-severance checklist.

---

## 8. Notes for Expert Review

1. **ITA pre-ruling necessity** -- Given the split household and stock option complexity, this case almost certainly requires a pre-ruling (פרי-רולינג) from the ITA before severance. Expert should confirm the process, expected timeline (6--12 months), and cost.

2. **Stock option allocation methodology** -- The days-based allocation formula used above is one of several possible approaches. The OECD Model Tax Convention Commentary (Art. 15) provides guidance, but the Israel-Cyprus treaty may not fully adopt the OECD approach. Expert must confirm the applicable method.

3. **Split household case law** -- Are there precedents where the ITA accepted residency severance despite a spouse remaining in Israel? Expert should provide case law references from `01-legal-tax-framework/07-case-law-references.md`.

4. **Insider trading restrictions** -- Post-resignation cooling-off period for equity sales. Expert should confirm the typical TASE blackout period and whether it affects exit tax payment timing.

5. **This may be an "advisory against severance" scenario** -- If the expert concludes that severance is not realistically achievable given the spouse situation, the system should be able to generate that recommendation. Not every client should be advised to proceed.

<!-- EXPERT INPUT REQUIRED: This is arguably the most complex scenario in the validation set. It tests the intersection of employment law (stock options, non-compete), tax law (Section 102, Section 100A, center of life), family law implications (split household, property co-ownership), and securities regulation (insider trading). Full expert panel review required. -->
