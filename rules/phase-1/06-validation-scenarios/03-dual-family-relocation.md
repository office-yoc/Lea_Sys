---
id: VS-03
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies:
  - DT-01
  - DT-02
  - DT-04
  - DT-05
  - RC-01
  - RC-04
  - FA-01
  - FA-02
  - FA-06
  - DR-01
  - DR-02
  - DR-03
  - DR-04
  - DR-05
---

# VS-03: Dual Family Relocation

## 1. Client Profile

| Field | Value |
|-------|-------|
| **Name** | Moshe Dayan (משה דיין) |
| **Age** | 38 |
| **Nationality** | Israeli (IL) |
| **Marital Status** | Married |
| **Spouse** | Yael Dayan (יעל דיין), age 36, Israeli citizen |
| **Children** | 3 -- Ori (age 10, 5th grade), Noga (age 7, 2nd grade), Amit (age 4, preschool) |
| **Current Residence** | Modiin, Israel |
| **Occupation (Moshe)** | Senior software engineer, remote employee of US-based tech company |
| **Occupation (Yael)** | High school math teacher, Israeli public school system |
| **Target Destination** | Nicosia, Cyprus |
| **Planned Structure** | Personal relocation only; no corporate structuring needed |
| **Timeline** | Full family relocation aligned with start of Cyprus school year (September 2026) |

### Background Narrative

Moshe and Yael are a young professional couple seeking a better quality of life and lower cost of living. Moshe works as a senior software engineer for a US-based SaaS company, earning $180,000/year. His employment contract allows fully remote work from anywhere, and his employer has agreed to restructure his contract as an independent contractor if he relocates. Yael is a math teacher in the Israeli public education system earning NIS 14,000/month (~$45,000/year).

Their combined net worth is $3M -- modest by comparison to other scenarios in this series but typical of the "young professional family" archetype that represents a growing segment of Israel-to-Cyprus relocations. The key challenges are: Yael losing her teaching position (no equivalent Hebrew-language school in Cyprus), managing the transition for 3 young children, and ensuring setup costs do not strain their limited liquidity.

This is a "standard complexity" scenario -- no corporate structures, no substantial shareholding, no complex asset portfolio. It tests the system's ability to handle the most common relocation profile correctly.

---

## 2. Input Data

### 2.1 Personal Identity (DR-01)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-01-001 | full_legal_name | Moshe Dayan |
| DR-01-002 | full_legal_name_hebrew | משה דיין |
| DR-01-003 | israeli_id_number | 312456789 |
| DR-01-004 | date_of_birth | 1987-06-22 |
| DR-01-005 | passport_number_israeli | 34567891 |
| DR-01-006 | passport_expiry_israeli | 2032-01-10 |
| DR-01-009 | contact_email | moshe.dayan@example.com |
| DR-01-010 | contact_phone | +972525678901 |
| DR-01-013 | nationality_primary | IL |
| DR-01-015 | marital_status | married |

### 2.2 Family & Household (DR-02)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-02-001 | spouse_full_name | Yael Dayan |
| DR-02-002 | spouse_id_number | 314567890 |
| DR-02-003 | spouse_nationality | IL |
| DR-02-004 | spouse_occupation | High school math teacher (Israeli public school) |
| DR-02-005 | spouse_work_location | Modiin, Israel |
| DR-02-006 | spouse_relocating | Yes -- full relocation planned |
| DR-02-007 | number_of_children | 3 |
| DR-02-008 | child_1_name | Ori Dayan |
| DR-02-009 | child_1_age | 10 |
| DR-02-010 | child_1_school | Public school, Modiin |
| DR-02-011 | child_1_relocating | Yes -- September 2026 |
| DR-02-012 | child_2_name | Noga Dayan |
| DR-02-013 | child_2_age | 7 |
| DR-02-014 | child_2_school | Public school, Modiin |
| DR-02-015 | child_2_relocating | Yes -- September 2026 |
| DR-02-016 | child_3_name | Amit Dayan |
| DR-02-017 | child_3_age | 4 |
| DR-02-018 | child_3_school | Preschool (Gan), Modiin |
| DR-02-019 | child_3_relocating | Yes -- September 2026 |
| DR-02-020 | elderly_dependents | None (parents healthy and independent in Israel) |
| DR-02-021 | yael_career_plan | Considering private tutoring online (Hebrew math instruction) or retraining |

### 2.3 Residence & Presence (DR-03)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-03-001 | days_in_israel_current_year (Moshe) | 320 |
| DR-03-002 | days_in_israel_prior_year (Moshe) | 355 |
| DR-03-003 | days_in_israel_two_years_prior (Moshe) | 360 |
| DR-03-004 | primary_dwelling_location | Modiin, Israel (owned apartment) |
| DR-03-005 | owns_israeli_dwelling | Yes (3-bed apartment in Modiin, FMV $650,000) |
| DR-03-006 | foreign_dwelling | None |
| DR-03-007 | israeli_drivers_license | Active (both Moshe and Yael) |
| DR-03-008 | israeli_health_insurance | Active (Meuhedet, family plan) |
| DR-03-009 | israeli_bank_accounts | 1 joint account (Bank Leumi), 1 savings account (Bank Hapoalim) |
| DR-03-010 | israeli_club_memberships | None significant |
| DR-03-012 | bituach_leumi_status | Active, both contributing |
| DR-03-016 | self_declared_resident | Yes (both, all prior years) |
| DR-03-017 | days_in_israel_current_year (Yael) | 350 |

### 2.4 Financial Assets (DR-04)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-04-001 | total_liquid_assets | $800,000 (savings in NIS and USD) |
| DR-04-002 | securities_portfolio | $200,000 (US equities held through Israeli brokerage) |
| DR-04-003 | real_estate_israel | $650,000 (Modiin apartment, $200K remaining mortgage) |
| DR-04-004 | real_estate_foreign | None |
| DR-04-005 | pension_funds | $500,000 (combined: Moshe $350K managers' insurance, Yael $150K teachers' pension) |
| DR-04-006 | total_net_worth | $2,950,000 |
| DR-04-007 | cryptocurrency | $0 |
| DR-04-008 | mortgage_balance | $200,000 (Modiin apartment) |
| DR-04-009 | car_value | $40,000 (leased, return upon departure) |

### 2.5 Employment & Income (DR-05)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-05-001 | employment_status (Moshe) | Employed (W-2 equivalent via Israeli payroll company) |
| DR-05-002 | employer (Moshe) | US-based SaaS company (through Israeli payroll intermediary) |
| DR-05-003 | current_annual_income (Moshe) | $180,000 (gross) |
| DR-05-004 | post_relocation_income (Moshe) | $180,000 (same, restructured as independent contractor) |
| DR-05-005 | employment_status (Yael) | Employed (Israeli public school teacher) |
| DR-05-006 | current_annual_income (Yael) | $45,000 (NIS 14,000/month) |
| DR-05-007 | post_relocation_income (Yael) | $0 initially; potentially $15,000--$25,000 from tutoring |
| DR-05-008 | employer_relocation_support | None -- Moshe's employer does not provide relocation package |
| DR-05-009 | contract_restructuring | Moshe's employer will convert him from Israeli payroll to independent contractor |

---

## 3. Expected Decision Tree Paths

### 3.1 DT-01: Residency Severance Eligibility

| Step | Node ID | Question | Input Value | Branch | Next Node |
|------|---------|----------|-------------|--------|-----------|
| 1 | DT-01-001 | Is client currently Israeli tax resident? | Yes (both, self-declared) | YES | DT-01-005 |
| 2 | DT-01-005 | Is Bituach Leumi still active? | Yes | YES | DT-01-006 |
| 3 | DT-01-006 | Substantial assets subject to exit tax? | No ($200K securities + $500K pension; below substantial threshold) | NO | DT-01-008 |
| 4 | DT-01-008 | Primary family ties in Israel? | No -- entire family relocating together | NO | **ELIGIBLE-STANDARD** |

**Expected Terminal:** `ELIGIBLE-STANDARD`

**Rationale:** The Dayan family has a straightforward profile: no substantial shareholding, no complex assets triggering exit tax, and the entire family is relocating simultaneously. This is the baseline "standard" engagement.

<!-- EXPERT INPUT REQUIRED: Confirm the threshold for "substantial assets" at DT-01-006. Is $200K in securities sufficient to trigger exit tax assessment, or is there a de minimis exemption? The pension ($500K) may be exempt under Section 9(5). If both are excluded, DT-01-006 should be NO. -->

### 3.2 DT-02: Residency Severance Process

| Step | Node ID | Expected Branch | Notes |
|------|---------|-----------------|-------|
| 1 | DT-02-001 | Initiate severance process | Standard flow |
| 2 | DT-02-002 | NO -- no significant exit tax filing needed | Below threshold |
| 3 | DT-02-003 | YES -- family relocation coordination | 3 children, school transition |
| 4 | DT-02-004 | Bituach Leumi severance (both spouses) | Standard process |
| 5 | DT-02-005 | Bank account conversion to non-resident | Close or convert 2 accounts |

### 3.3 DT-04: Cyprus Company Establishment

**Not applicable.** Moshe will operate as an independent contractor, not through a Cyprus company. However, the system should recommend evaluating whether a Cyprus company would be tax-advantageous for contractor income of $180,000/year.

<!-- EXPERT INPUT REQUIRED: At what income level does incorporating a Cyprus company become advantageous vs. operating as a sole proprietor? Moshe's $180K may be above the threshold where the 12.5% corporate rate + dividend extraction is more efficient than personal taxation. -->

### 3.4 DT-05: Cyprus Bank Account

| Step | Node ID | Expected Branch | Notes |
|------|---------|-----------------|-------|
| 1 | DT-05-001 | Initiate bank account opening | Required for salary/contractor payments |
| 2 | DT-05-002 | Passport valid? | Yes (expires 2032) |
| 3 | DT-05-003 | [PLACEHOLDER] | Source of funds documentation |
| 4 | DT-05-004 | [PLACEHOLDER] | Expected monthly volume |

---

## 4. Expected Risk Scores

### 4.1 Individual Risk Indicators

| Risk ID | Name | Triggered? | Severity | Rationale |
|---------|------|-----------|----------|-----------|
| RC-01-001 | Day count -- current year | YES | 3 (Moderate) | 320 days (Moshe), 350 days (Yael) -- heavily present in Israel this year. Severance mid-year means high day count for departure year, but this is expected and unavoidable. |
| RC-01-003 | Center of life -- personal ties | YES | 2 (Low) | Entire family relocating together. Parents remain in Israel but no dependency. Mitigated effectively. |
| RC-01-005 | Israeli dwelling retained | YES | 3 (Moderate) | Modiin apartment must be sold or leased. Decision needed: sell (simplifies severance) vs. retain as investment (creates ongoing ties). |
| RC-01-006 | Israeli bank accounts | YES | 2 (Low) | 2 accounts. Standard closure/conversion needed. |
| RC-01-009 | Children in Israeli schools | YES | 2 (Low) | Transitioning in September -- aligned with school year. Risk is low because timing is clean. |
| RC-01-010 | Health insurance active | YES | 1 (Informational) | Will be cancelled as part of severance process. |
| RC-02-001 | CRS reporting | YES | 1 (Informational) | Modest asset base; CRS is routine. |
| RC-03-006 | Decision-making location | NO | -- | No corporate structure. N/A. |
| RC-04-001 | Exit tax vs. liquidity | NO | -- | Exit tax expected to be minimal or zero. |
| RC-04-004 | Concentrated asset risk | NO | -- | Assets are diversified (savings, securities, real estate, pension). |
| RC-04-007 | Setup cost liquidity | YES | 3 (Moderate) | $800K liquid assets must cover: moving costs (~$15K), apartment deposit/first months in Cyprus (~$10K), school fees (~$15K), loss of Yael's income (~$45K/year gap), living costs before contractor income flows. Tight but manageable. |

### 4.2 Category Aggregation

| Category | Highest Severity | Triggered Count | Category Score | Weight |
|----------|-----------------|-----------------|----------------|--------|
| Tax (RC-01) | 3 | 5 | [PLACEHOLDER] | 0.35 |
| Legal & Compliance (RC-02) | 1 | 1 | [PLACEHOLDER] | 0.30 |
| Structural (RC-03) | -- | 0 | [PLACEHOLDER] | 0.20 |
| Financial Exposure (RC-04) | 3 | 1 | [PLACEHOLDER] | 0.15 |

### 4.3 Expected Overall Risk Tier

**Expected Tier: YELLOW (Moderate)**

Rationale: Standard complexity with manageable risks. No showstoppers. The primary concerns are: (a) Yael's income loss creating temporary cash flow pressure, (b) the Modiin apartment disposition, and (c) ensuring Moshe's contractor restructuring is properly documented for tax purposes. All are addressable with standard planning.

---

## 5. Expected Financial Outputs

### 5.1 Exit Tax Calculation (FA-04)

| Item | Value | Notes |
|------|-------|-------|
| Securities portfolio | $200,000 | US equities through Israeli brokerage |
| Cost basis | [PLACEHOLDER -- depends on acquisition dates] | |
| Estimated gain | [PLACEHOLDER -- assume ~$80,000 gain] | |
| Exit tax rate | 25% | Standard capital gains rate |
| Exit tax liability | ~$20,000 | Estimate; may be lower if losses offset |
| Pension funds | Exempt | [PLACEHOLDER -- confirm Section 9(5) exemption] |
| Modiin apartment | Exempt from exit tax | Israeli-situs real estate; remains taxable territorially |
| **Total exit tax** | **~$20,000** | |

### 5.2 Income Restructuring (FA-01)

| Item | Current | Post-Relocation | Notes |
|------|---------|-----------------|-------|
| Moshe gross income | $180,000 | $180,000 | Same; restructured as contractor |
| Moshe effective tax (Israel) | ~$55,000 (30% effective) | $0 Israel; Cyprus: [PLACEHOLDER] | Depends on contractor structure |
| Yael gross income | $45,000 | $0 initially; ~$20,000 Year 2+ | Tutoring income |
| Combined net income | ~$170,000 | [PLACEHOLDER] | Depends on Cyprus tax treatment |

<!-- EXPERT INPUT REQUIRED: Moshe's contractor income -- if invoiced from Cyprus personal capacity, what is the effective tax rate? If through a Cyprus company (should one be established?), the corporate rate is 12.5% + dividend extraction tax. The optimal structure depends on income level and personal circumstances. -->

### 5.3 Cyprus Living Costs -- Family of 5 (FA-06)

| Item | Monthly Cost (EUR) | Annual Cost (EUR) | Notes |
|------|-------------------|-------------------|-------|
| Apartment rent (3-bed, Nicosia) | 1,800 | 21,600 | Family-sized, near school |
| International school (3 children) | 2,500 | 30,000 | ~EUR 10,000/child; varies by school |
| Health insurance (family) | 600 | 7,200 | Private coverage, 5 persons |
| Groceries & household | 1,200 | 14,400 | Family of 5 |
| Utilities (electric, water, internet) | 350 | 4,200 | |
| Transportation (1 car) | 500 | 6,000 | Lease + fuel + insurance |
| Personal & miscellaneous | 500 | 6,000 | |
| **Total monthly** | **~7,450** | | |
| **Total annual** | | **~89,400** | ~$97,000 at 1.08 USD/EUR |

### 5.4 Cash Flow Projection -- First 3 Years (FA-02)

| Item | Year 1 | Year 2 | Year 3 |
|------|--------|--------|--------|
| Liquid assets (start) | $800,000 | $753,000 | $726,000 |
| Moshe contractor income (net of Cyprus tax) | $150,000 | $155,000 | $160,000 |
| Yael income | $0 | $20,000 | $25,000 |
| Cyprus living costs | ($97,000) | ($97,000) | ($97,000) |
| One-time relocation costs | ($30,000) | -- | -- |
| Exit tax | ($20,000) | -- | -- |
| Apartment sale proceeds (net) | $0 | $430,000 | -- |
| Mortgage payoff | $0 | ($200,000) | -- |
| Liquid assets (end) | ~$803,000 | ~$1,061,000 | ~$914,000 |

**Notes:**
- Year 1 assumes apartment is listed for sale; proceeds received in Year 2.
- Moshe's net contractor income assumes ~17% effective Cyprus tax rate. [PLACEHOLDER -- confirm with expert]
- No investment returns modeled on liquid assets.

<!-- EXPERT INPUT REQUIRED: This cash flow is tight in Year 1. If the apartment sale is delayed or Moshe's contractor payments are delayed during restructuring, the family could face liquidity pressure. Recommend maintaining $100K emergency reserve. -->

---

## 6. Validation Criteria

| # | Criterion | Expected Result | Pass Condition |
|---|-----------|-----------------|----------------|
| 1 | DT-01 terminal | ELIGIBLE-STANDARD | Exact match |
| 2 | DT-01 path | 001 -> 005 -> 006(NO) -> 008(NO) -> ELIGIBLE-STANDARD | All nodes and branches match |
| 3 | Exit tax amount | $15,000 -- $25,000 | Within range (securities only) |
| 4 | RC-04-007 triggered | Yes, severity 3 | Setup cost liquidity flagged |
| 5 | RC-01-009 severity | 2 (Low) | School transition timed cleanly |
| 6 | Overall risk tier | YELLOW | Tier matches expected |
| 7 | Cyprus annual living cost | EUR 80,000 -- EUR 100,000 | Within 10% of EUR 89,400 |
| 8 | Year 1 cash flow | Positive or breakeven | Family does not run out of liquidity |
| 9 | Contractor restructuring flagged | Yes | System identifies need for employment structure change |
| 10 | Yael income gap flagged | Yes | System identifies lost teaching income |

---

## 7. Edge Cases

### 7.1 Employer Refuses Contractor Conversion

**Issue:** If Moshe's US employer ultimately refuses to convert him to an independent contractor (e.g., due to PE risk in Cyprus), Moshe would need to either: (a) resign and find new remote work, (b) establish a Cyprus company as an intermediary, or (c) abort the relocation.

**Risk:** Employment restructuring failure could derail the entire relocation plan. The system should flag this as a prerequisite with a hard dependency.

**Test:** Set `DR-05-009` (contract_restructuring) to "DENIED." Verify system generates a blocking alert and recommends alternative structures.

### 7.2 Apartment Sale Below Expected Value

**Issue:** The Modiin apartment is valued at $650K with a $200K mortgage. If the market declines and the apartment sells for $500K, net proceeds would be $300K instead of $450K, reducing the liquidity cushion.

**Test:** Set `DR-04-003` (real_estate_israel) to $500,000. Verify cash flow model adjusts and RC-04-007 severity increases.

### 7.3 Yael Cannot Find Employment in Cyprus

**Issue:** Yael's teaching qualification (Israeli education system) may not transfer to Cyprus. If she cannot generate income for 2+ years, the family's financial model depends entirely on Moshe's $180K.

**Risk:** $180K gross minus taxes minus $97K living costs leaves a thin margin. The scenario as modeled works but has no buffer for unexpected expenses.

**Test:** Set `DR-05-007` (Yael post_relocation_income) to $0 for all 3 years. Verify cash flow remains positive but RC-04-007 severity escalates to 4 (High).

### 7.4 Third Child Preschool Costs

**Issue:** Amit (age 4) may require a preschool or childcare arrangement in Cyprus. Costs vary: public kindergarten (free or low-cost) vs. private English/Hebrew preschool ($5,000--$10,000/year).

**Test:** Add $10,000/year to education costs. Verify cash flow model absorbs the increase without triggering additional risk flags.

### 7.5 Moshe's Pension Portability

**Issue:** Moshe has $350K in managers' insurance (ביטוח מנהלים). Can he continue contributing from Cyprus? If contributions stop, what are the implications for future benefits?

**Risk:** Israeli pension funds typically allow non-residents to maintain existing balances but may not accept new contributions. This affects long-term retirement planning.

**Test:** Verify system flags pension fund review as a pre-severance action item.

<!-- EXPERT INPUT REQUIRED: Confirm pension fund portability rules for non-residents. Can contributions continue? What are the tax implications of future withdrawals for a non-resident? -->

---

## 8. Notes for Expert Review

1. **Contractor structure optimization** -- At $180K/year, should Moshe operate as a sole proprietor in Cyprus or establish a Cyprus Ltd? The break-even point for incorporation depends on Cyprus personal vs. corporate tax rates and the SDC/GESY implications. Expert to advise.

2. **Teachers' pension (Yael)** -- Yael's $150K teachers' pension is likely in the government pension fund (קרן פנסיה). Rules for non-resident withdrawal or dormancy differ from private pension funds. Expert to confirm.

3. **Health insurance gap** -- During the transition from Israeli health insurance (Meuhedet) to Cyprus private coverage, there may be a gap period. Expert to confirm minimum coverage requirements and whether travel insurance suffices temporarily.

4. **Children's education** -- International schools in Nicosia vary significantly in cost and quality. The $10,000/child estimate is for mid-range options. Expert should confirm whether Hebrew-language support is available at any Cyprus schools.

5. **This is the "baseline" scenario** -- It represents the most common client archetype (young family, moderate net worth, remote tech worker). The system should handle this scenario flawlessly before tackling more complex cases.

<!-- EXPERT INPUT REQUIRED: Review all [PLACEHOLDER] items. This scenario should be the first one verified because it tests the standard flow without edge-case complexity. -->
