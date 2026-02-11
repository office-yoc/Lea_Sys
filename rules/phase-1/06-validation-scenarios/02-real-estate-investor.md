---
id: VS-02
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies:
  - DT-01
  - DT-02
  - DT-03
  - RC-01
  - RC-02
  - RC-04
  - FA-01
  - FA-02
  - FA-04
  - DR-01
  - DR-02
  - DR-03
  - DR-04
  - DR-05
---

# VS-02: Real Estate Investor

## 1. Client Profile

| Field | Value |
|-------|-------|
| **Name** | Sarah Levi (שרה לוי) |
| **Age** | 55 |
| **Nationality** | Israeli (IL) |
| **Marital Status** | Divorced |
| **Children** | 2 -- both adults (ages 28 and 31), living independently in Israel |
| **Current Residence** | Herzliya Pituach, Israel (primary); Paphos, Cyprus (secondary) |
| **Occupation** | Real estate investor and property manager |
| **Target Destination** | Paphos, Cyprus (already has partial presence) |
| **Planned Structure** | Personal relocation; retain Israeli properties under management company |
| **Timeline** | Gradual transition over 12--18 months |

### Background Narrative

Sarah built a real estate portfolio over 25 years, starting with a single apartment in Netanya and growing to 8 rental properties across Israel (Tel Aviv, Herzliya, Netanya, Jerusalem) worth a combined $12M. She also purchased 2 investment properties in Paphos, Cyprus, 4 years ago, currently worth $3M total. She has been spending approximately 120 days per year in Cyprus for the past 3 years, managing her Cyprus properties and enjoying the lifestyle.

Sarah is divorced (8 years) and her adult children live independently in Tel Aviv and Haifa. She wants to formalize her move to Cyprus and sever Israeli tax residency, but faces two critical challenges: (1) her Israeli real estate portfolio generates $45,000/month in rental income that creates strong economic ties to Israel, and (2) her day counts over the past 3 years put her dangerously close to the weighted 3-year formula threshold.

The concentrated nature of her portfolio -- 80% in Israeli real estate -- creates significant illiquidity risk and complicates the exit tax assessment.

---

## 2. Input Data

### 2.1 Personal Identity (DR-01)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-01-001 | full_legal_name | Sarah Levi |
| DR-01-002 | full_legal_name_hebrew | שרה לוי |
| DR-01-003 | israeli_id_number | 024567891 |
| DR-01-004 | date_of_birth | 1970-12-03 |
| DR-01-005 | passport_number_israeli | 28345612 |
| DR-01-006 | passport_expiry_israeli | 2029-08-15 |
| DR-01-009 | contact_email | sarah.levi@example.com |
| DR-01-010 | contact_phone | +972547891234 |
| DR-01-013 | nationality_primary | IL |
| DR-01-015 | marital_status | divorced |

### 2.2 Family & Household (DR-02)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-02-007 | number_of_children | 2 (both adult, independent) |
| DR-02-008 | child_1_name | Daniel Levi |
| DR-02-009 | child_1_age | 31 |
| DR-02-010 | child_1_school | N/A (adult, employed in Tel Aviv) |
| DR-02-012 | child_2_name | Maya Levi |
| DR-02-013 | child_2_age | 28 |
| DR-02-014 | child_2_school | N/A (adult, employed in Haifa) |
| DR-02-016 | elderly_dependents | None |
| DR-02-017 | social_circle_primary_location | Split -- Israel (long-term friends) and Cyprus (growing expatriate network) |

### 2.3 Residence & Presence (DR-03)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-03-001 | days_in_israel_current_year | 160 |
| DR-03-002 | days_in_israel_prior_year | 180 |
| DR-03-003 | days_in_israel_two_years_prior | 175 |
| DR-03-004 | primary_dwelling_location | Herzliya Pituach, Israel |
| DR-03-005 | owns_israeli_dwelling | Yes (Herzliya Pituach villa, FMV $3.5M -- personal residence) |
| DR-03-006 | foreign_dwelling | Owns 2-bed apartment in Paphos, Cyprus (FMV $800K -- one of her investment properties, also used personally) |
| DR-03-007 | israeli_drivers_license | Active |
| DR-03-008 | israeli_health_insurance | Active (Clalit) |
| DR-03-009 | israeli_bank_accounts | 3 accounts (Bank Hapoalim, Bank Discount, Bank Mizrahi) |
| DR-03-010 | israeli_club_memberships | Herzliya Country Club |
| DR-03-011 | days_in_cyprus_current_year | 120 |
| DR-03-012 | bituach_leumi_status | Active, contributing |
| DR-03-013 | days_in_cyprus_prior_year | 115 |
| DR-03-014 | days_in_cyprus_two_years_prior | 110 |
| DR-03-016 | self_declared_resident | Yes -- filed as Israeli resident in all prior years |

### 2.4 Financial Assets (DR-04)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-04-001 | total_liquid_assets | $2,000,000 (bank deposits across 3 Israeli accounts) |
| DR-04-002 | securities_portfolio | $0 |
| DR-04-003 | real_estate_israel | $12,000,000 (8 properties: 4 in Tel Aviv, 2 in Herzliya, 1 in Netanya, 1 in Jerusalem) |
| DR-04-004 | real_estate_foreign | $3,000,000 (2 properties in Paphos, Cyprus) |
| DR-04-005 | pension_funds | $600,000 |
| DR-04-006 | total_net_worth | $17,600,000 |
| DR-04-007 | cryptocurrency | $0 |
| DR-04-008 | monthly_rental_income_israel | $45,000 (gross, across 8 properties) |
| DR-04-009 | monthly_rental_income_cyprus | $5,000 (gross, across 2 properties -- one partially self-used) |
| DR-04-010 | real_estate_mortgages_israel | $2,500,000 (across 3 of the 8 properties) |
| DR-04-011 | net_equity_real_estate_israel | $9,500,000 |

### 2.5 Employment & Income (DR-05)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-05-001 | employment_status | Self-employed (real estate investor / property manager) |
| DR-05-003 | current_annual_income | ~$540,000 gross rental income (Israel) + ~$60,000 gross rental income (Cyprus) |
| DR-05-004 | expected_annual_income_abroad | ~$60,000 (Cyprus rentals) + potential income from restructured management |
| DR-05-006 | property_management_arrangement | Self-managed (Israel); local agent (Cyprus) |

---

## 3. Expected Decision Tree Paths

### 3.1 DT-01: Residency Severance Eligibility

| Step | Node ID | Question | Input Value | Branch | Next Node |
|------|---------|----------|-------------|--------|-----------|
| 1 | DT-01-001 | Is client currently Israeli tax resident? | Yes (self-declared, DR-03-016) | YES | DT-01-005 |
| 2 | DT-01-005 | Is Bituach Leumi still active? | Yes (DR-03-012) | YES | DT-01-006 |
| 3 | DT-01-006 | Substantial assets subject to exit tax? | Yes ($12M Israeli RE, $600K pension) | YES | DT-01-007 |
| 4 | DT-01-007 | Substantial shareholder (10%+) in Israeli co? | No (no corporate holdings) | NO | DT-01-008 |
| 5 | DT-01-008 | Primary family ties in Israel? | No (divorced, adult children independent) | NO | **ELIGIBLE-STANDARD** |

**Expected Terminal:** `ELIGIBLE-STANDARD`

**Important Nuance:** Although DT-01 classifies Sarah as ELIGIBLE-STANDARD (no family complication), the risk scoring will elevate her case significantly due to the weighted day-count formula being close to the trigger threshold and the concentrated real estate portfolio. The final advisory classification should be treated as HIGH despite the STANDARD eligibility terminal.

<!-- EXPERT INPUT REQUIRED: Should DT-01 have an additional node that considers asset concentration as a complexity factor, rather than relying solely on risk scoring to catch it? If $12M in illiquid RE warrants ELIGIBLE-COMPLEX even without family ties, the decision tree may need modification. -->

### 3.2 Day Count Analysis (Supplementary to DT-01)

This scenario requires detailed day-count analysis because Sarah is not above 183 days in any single year, but the weighted formula is a concern.

**183-Day Test (LTF-01-001):**
- Current year: 160 days -- BELOW 183. Test NOT met.

**Weighted 3-Year Formula (LTF-01-002):**
```
Weighted = 160 + (180 / 3) + (175 / 6)
         = 160 + 60 + 29.2
         = 249.2
```

- Current year: 160 days (>= 30) -- first condition MET.
- Weighted total: 249.2 -- BELOW 425. Second condition NOT met.

**Result:** Neither day-count test is technically met. However, the numbers are close enough that any change in behavior (e.g., an emergency requiring extended Israel stay) could push her over. This creates ongoing monitoring risk.

| Step | Node ID | Question | Input Value | Branch | Next Node |
|------|---------|----------|-------------|--------|-----------|
| -- | DT-01-002 | Does client meet 183-day test? | 160 days (No) | NO | DT-01-003 |
| -- | DT-01-003 | Does client meet weighted 3-year test? | 249.2 weighted days (No, below 425) | NO | -- |

**Note:** Since Sarah self-declares as Israeli resident (DT-01-001 = YES), the tree skips the day-count nodes and goes directly to DT-01-005. The day-count analysis above is supplementary -- it matters for the severance planning because once she severs, she must stay below these thresholds to maintain non-resident status.

<!-- EXPERT INPUT REQUIRED: Confirm the weighted formula calculation. Some practitioners argue that partial days are counted differently in the weighted formula vs. the 183-day test. If Sarah's border crossings include arrival/departure days counted as full days, her actual weighted total could be higher. -->

### 3.3 DT-03: Exit Tax Assessment

| Step | Node ID | Expected Branch | Notes |
|------|---------|-----------------|-------|
| 1 | DT-03-001 | YES -- real estate subject to deemed liquidation? | **Critical question:** Israeli real estate is generally taxed under Israeli law regardless of residency (territorial basis). Exit tax under Section 100A may not apply to Israeli-situs real estate. |
| 2 | DT-03-002 | [PLACEHOLDER] | Cost basis determination for 8 properties acquired over 25 years |
| 3 | DT-03-003 | [PLACEHOLDER] | Gain calculation per property |

<!-- EXPERT INPUT REQUIRED: This is a crucial issue. Section 100A exit tax applies to assets that would NOT be taxable by Israel after the resident departs. Since Israeli real estate remains taxable under Israeli law on a territorial basis, the exit tax may NOT apply to the $12M portfolio. Expert must confirm: (a) does Section 100A apply to Israeli-situs real estate? (b) if not, what IS subject to exit tax in Sarah's case? (c) does the $600K pension face exit tax? -->

---

## 4. Expected Risk Scores

### 4.1 Individual Risk Indicators

| Risk ID | Name | Triggered? | Severity | Rationale |
|---------|------|-----------|----------|-----------|
| RC-01-001 | Day count -- current year | YES | 3 (Moderate) | 160 days -- below 183 but high. Post-severance monitoring critical. Any unplanned extended stay could breach. |
| RC-01-002 | Weighted 3-year formula | YES | 3 (Moderate) | Weighted total 249.2 -- below 425 but the raw day counts are high. Going forward, Sarah must dramatically reduce Israel days to keep the weighted formula safe. |
| RC-01-003 | Center of life -- economic ties | YES | 4 (High) | $12M in Israeli real estate generating $540K/year income. Even without residency, the economic center of gravity is strongly Israel. Management activities (tenant relations, renovations, etc.) may constitute business activity in Israel. |
| RC-01-005 | Israeli dwelling retained | YES | 4 (High) | Herzliya Pituach villa ($3.5M) is her personal residence. Must be sold or leased out. Under 2025 reform (LTF-01-006), retaining a "permanent home available for use" could trigger irrebuttable presumption. |
| RC-01-006 | Israeli bank accounts | YES | 3 (Moderate) | Three active Israeli bank accounts. Large volumes of rental income flowing through them creates ongoing Israeli economic presence. |
| RC-01-010 | Health insurance active | YES | 2 (Low) | Clalit membership active. |
| RC-02-001 | CRS reporting | YES | 2 (Low) | Cyprus property income and bank accounts will be reported to Israel via CRS. Must ensure consistent reporting. |
| RC-02-003 | Unreported foreign income | NO | -- | Cyprus rental income has been reported in Israeli returns. |
| RC-04-001 | Exit tax vs. liquidity | YES | 3 (Moderate) | [PLACEHOLDER -- depends on whether exit tax applies to Israeli RE; see expert input in Section 3.3] |
| RC-04-004 | Concentrated asset risk | YES | 5 (Critical) | 80% of net worth ($12M of $17.6M) is in Israeli real estate. Extremely concentrated and illiquid. Selling even a portion takes months and triggers capital gains tax. |
| RC-04-006 | Real estate lock-in | YES | 5 (Critical) | 8 Israeli properties cannot be quickly liquidated. Rental income dependency creates ongoing need for Israel engagement. Property management from abroad is complex. |
| RC-04-008 | Mortgage obligations in Israel | YES | 3 (Moderate) | $2.5M in Israeli mortgages across 3 properties. Post-severance, Israeli banks may reassess terms for non-resident borrowers. |

### 4.2 Category Aggregation

| Category | Highest Severity | Triggered Count | Category Score | Weight |
|----------|-----------------|-----------------|----------------|--------|
| Tax (RC-01) | 4 | 5 | [PLACEHOLDER] | 0.35 |
| Legal & Compliance (RC-02) | 2 | 1 | [PLACEHOLDER] | 0.30 |
| Structural (RC-03) | -- | 0 | [PLACEHOLDER] | 0.20 |
| Financial Exposure (RC-04) | 5 | 4 | [PLACEHOLDER] | 0.15 |

<!-- EXPERT INPUT REQUIRED: Calculate aggregated scores using the methodology in 04-risk-classification/05-scoring-methodology.md once finalized. -->

### 4.3 Expected Overall Risk Tier

**Expected Tier: RED (High)**

Rationale: The combination of concentrated illiquid real estate (RC-04-004 and RC-04-006 both at Critical), strong economic ties through rental income (RC-01-003 at High), and the retained personal dwelling (RC-01-005 at High) creates a high-risk profile. Unlike VS-01, Sarah cannot easily sever her economic ties because the income-producing assets are permanently sited in Israel. The advisory recommendation may be that full residency severance is inadvisable without significant portfolio restructuring first.

---

## 5. Expected Financial Outputs

### 5.1 Exit Tax Assessment (FA-04)

| Item | Value | Notes |
|------|-------|-------|
| Israeli real estate -- exit tax applicable? | [PLACEHOLDER -- likely NO] | Israeli-situs RE remains taxable territorially; Section 100A may not apply |
| Cyprus real estate -- exit tax applicable? | [PLACEHOLDER -- likely NO] | Already foreign-situs; acquired while resident but capital gains may be taxable regardless |
| Pension funds -- exit tax applicable? | [PLACEHOLDER] | Expert to confirm Section 9(5) pension exemption interaction with exit tax |
| Total exit tax liability | [PLACEHOLDER -- possibly minimal] | If Israeli RE is excluded and pension is exempt, exit tax may be near zero |

<!-- EXPERT INPUT REQUIRED: The exit tax analysis for a real-estate-heavy portfolio is fundamentally different from a securities-heavy one. If Section 100A does NOT apply to Israeli real estate, Sarah's exit tax may be minimal -- but she remains subject to Israeli tax on Israeli rental income and capital gains regardless of residency status. Expert must clarify the full picture. -->

### 5.2 Rental Income Restructuring (FA-01)

| Item | Current (Resident) | Post-Severance (Non-Resident) | Delta |
|------|--------------------|-----------------------------|-------|
| Gross rental income (Israel) | $540,000/year | $540,000/year | No change -- income situs is Israel |
| Israeli tax rate on rental income | [PLACEHOLDER -- effective rate with deductions] | [PLACEHOLDER -- non-resident withholding rate, likely 25%] | Possible increase |
| Property management costs | Self-managed (~$0) | Professional manager (~$54,000/year, 10% of gross) | +$54,000 |
| Net rental income after tax | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] |

<!-- EXPERT INPUT REQUIRED: Non-resident taxation of Israeli rental income may differ from resident taxation. Confirm: (a) applicable withholding rates, (b) whether deductions (mortgage interest, depreciation) are still available to non-residents, (c) treaty relief under Israel-Cyprus DTA. -->

### 5.3 Cyprus Living Costs (FA-06)

| Item | Monthly Cost (EUR) | Annual Cost (EUR) | Notes |
|------|-------------------|-------------------|-------|
| Personal residence (Paphos) | 0 | 0 | Owns property; no rent |
| Utilities & maintenance | 400 | 4,800 | |
| Health insurance | 500 | 6,000 | Private coverage |
| Car & transport | 600 | 7,200 | |
| Living expenses | 3,000 | 36,000 | Food, clothing, personal |
| Property management (Cyprus) | 500 | 6,000 | Local agent for 2 properties |
| **Total monthly** | **~5,000** | | |
| **Total annual** | | **~60,000** | |

### 5.4 Net Cash Flow Projection (FA-02)

| Item | Year 1 | Year 2 | Year 3 |
|------|--------|--------|--------|
| Liquid assets (start) | $2,000,000 | $2,350,000 | $2,720,000 |
| Israeli rental income (net of tax) | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] |
| Cyprus rental income (net) | $50,000 | $55,000 | $55,000 |
| Property management costs (Israel) | ($54,000) | ($54,000) | ($54,000) |
| Cyprus living costs | ($65,000) | ($65,000) | ($65,000) |
| Exit tax | [PLACEHOLDER] | -- | -- |
| Liquid assets (end) | [PLACEHOLDER] | [PLACEHOLDER] | [PLACEHOLDER] |

<!-- EXPERT INPUT REQUIRED: Complete cash flow model requires confirmed tax rates on non-resident rental income. -->

---

## 6. Validation Criteria

| # | Criterion | Expected Result | Pass Condition |
|---|-----------|-----------------|----------------|
| 1 | DT-01 terminal | ELIGIBLE-STANDARD | Exact match |
| 2 | DT-01 path | 001 -> 005 -> 006 -> 007 -> 008 -> ELIGIBLE-STANDARD | All nodes and branches match |
| 3 | 183-day test | NOT met (160 < 183) | Correctly evaluated as below threshold |
| 4 | Weighted 3-year formula | NOT met (249.2 < 425) | Correctly calculated and evaluated |
| 5 | RC-01-002 triggered | Yes, severity 3 | Weighted formula flagged as monitoring risk |
| 6 | RC-04-004 triggered | Yes, severity 5 | Concentrated RE portfolio flagged as Critical |
| 7 | RC-04-006 triggered | Yes, severity 5 | RE lock-in flagged as Critical |
| 8 | RC-01-005 triggered | Yes, severity 4 | Retained dwelling flagged |
| 9 | Overall risk tier | RED | Tier matches expected |
| 10 | Exit tax on Israeli RE | [PLACEHOLDER -- likely minimal] | Expert-confirmed result |
| 11 | Property management restructuring flagged | Yes | System identifies need for professional management |

---

## 7. Edge Cases

### 7.1 Weighted Formula Breach on Extended Visit

**Issue:** Sarah's weighted total (249.2) is well below 425, but her raw day counts are high. If she increases Israel days to 183 in any future year, the formula would be:

```
183 + (160 / 3) + (180 / 6) = 183 + 53.3 + 30 = 266.3 (still below 425)
```

However, if she spends 200+ days for 2 consecutive years:

```
200 + (200 / 3) + (160 / 6) = 200 + 66.7 + 26.7 = 293.4 (still below, but approaching)
```

**Test:** Set `DR-03-001` to 183 (exactly at boundary). Verify RC-01-001 escalates to severity 5 and a hard warning is generated.

### 7.2 Israeli Bank Account Activity Post-Severance

**Issue:** Sarah's 3 Israeli bank accounts will continue receiving $45,000/month in rental income. High-volume activity in Israeli accounts by a declared non-resident may trigger ITA scrutiny.

**Risk:** RC-01-006 should escalate if post-severance Israeli bank account activity exceeds a threshold. The platform should recommend restructuring: either consolidate to a single non-resident account or route income through a management company.

**Test:** Post-severance, verify that ongoing Israeli bank account activity generates a monitoring alert.

### 7.3 Property Sale Cascade

**Issue:** If Sarah sells multiple Israeli properties simultaneously to reduce concentration, the capital gains tax burden could be substantial (multiple properties losing principal residence exemption).

**Risk:** Only one property can qualify for the principal residence exemption (Section 49B). Selling 2+ properties in the same year or across 2 years could trigger aggregate capital gains tax of $500K--$1M+ depending on appreciation.

**Test:** Simulate sale of 3 properties in Year 1. Verify FA-04 calculates individual and aggregate capital gains tax correctly, applying the exemption only once.

<!-- EXPERT INPUT REQUIRED: Confirm current rules on principal residence exemption for multiple property owners. The 2014 reform (Amendment 76) changed the exemption rules significantly. -->

### 7.4 Mortgage Covenant Breach

**Issue:** $2.5M in Israeli mortgages may contain covenants requiring the borrower to be an Israeli resident. Severance could trigger technical default.

**Risk:** Banks could demand accelerated repayment or renegotiation at less favorable terms.

**Test:** Set `DR-04-010` (mortgages) to $2,500,000 and verify RC-04-008 triggers. System should flag mortgage covenant review as a pre-severance requirement.

### 7.5 Self-Management vs. Professional Management -- Center of Life

**Issue:** If Sarah continues to self-manage her Israeli properties from Cyprus (calling tenants, coordinating repairs, visiting for inspections), this activity could be characterized as "conducting business in Israel" and support a center-of-life argument.

**Risk:** The ITA could argue that active property management constitutes economic ties sufficient to maintain residency, even if day counts are below threshold.

**Test:** Set `DR-05-006` (property_management_arrangement) to "self-managed from abroad." Verify RC-01-003 severity increases and an advisory recommendation for professional management is generated.

---

## 8. Notes for Expert Review

1. **Israeli real estate and exit tax** -- This is the central open question. If Section 100A does not apply to Israeli-situs RE, Sarah's exit tax may be minimal. But she remains permanently subject to Israeli capital gains tax on sales. Expert must confirm the full interaction.

2. **Non-resident rental taxation** -- The shift from resident to non-resident changes the tax regime on Israeli rental income. Expert must detail: applicable rates, available deductions, withholding mechanism, treaty impact.

3. **Principal residence disposition** -- The Herzliya villa must be addressed. Options: sell (capital gains exemption may apply), lease to third party (overcomes "available for use"), retain but risk irrebuttable presumption.

4. **Mortgage restructuring** -- Israeli banks' policies on non-resident borrowers vary. Expert should provide general guidance on which banks are more accommodating and what documentation is typically required.

5. **Property management company** -- Should Sarah establish an Israeli management company (or appoint a professional manager) for the 8 properties? This creates a cleaner separation but adds cost and complexity. Expert to advise.

6. **60-day rule eligibility** -- Sarah spends 120+ days in Cyprus. She may qualify for Cyprus tax residency under the 60-day rule (not 183 days in any other single country, 60+ days in Cyprus, Cyprus-based business/employment). Expert to confirm eligibility criteria.

<!-- EXPERT INPUT REQUIRED: Review all [PLACEHOLDER] items and provide validated values. This scenario highlights the unique challenges of real-estate-heavy portfolios that are fundamentally different from liquid-asset or corporate-exit scenarios. -->
