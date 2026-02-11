---
id: VS-01
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
  - RC-04
  - FA-01
  - FA-04
  - FA-06
  - DR-01
  - DR-02
  - DR-03
  - DR-04
  - DR-05
  - DR-06
---

# VS-01: Tech Entrepreneur Exit

## 1. Client Profile

| Field | Value |
|-------|-------|
| **Name** | Avi Cohen (אבי כהן) |
| **Age** | 42 |
| **Nationality** | Israeli (IL) |
| **Marital Status** | Married |
| **Spouse** | Tamar Cohen (תמר כהן), age 39, Israeli citizen |
| **Children** | 2 -- Noam (age 14, 9th grade), Shira (age 11, 6th grade) |
| **Current Residence** | Ramat Aviv, Tel Aviv |
| **Occupation** | Former tech founder; sold startup to multinational acquirer |
| **Target Destination** | Limassol, Cyprus |
| **Planned Structure** | IP holding company in Cyprus for future ventures + personal relocation |
| **Timeline** | Plans to relocate within 6--9 months |

### Background Narrative

Avi founded a cybersecurity startup in 2018, growing it to 85 employees. In January 2026, the company was acquired by a US-based multinational for $60M. Avi held 25% of the startup equity, netting $15M in cash at closing. As part of the acquisition agreement, Avi received an additional 5% equity stake in the acquirer (valued at approximately $5M), subject to a 3-year lock-up period with annual vesting.

Avi plans to relocate his entire family to Limassol, Cyprus, establish an IP holding company for his next venture, and sever Israeli tax residency. His wife Tamar is a freelance graphic designer who can work remotely. The children are currently enrolled in a private bilingual school in Tel Aviv; Avi has identified an international school in Limassol.

The primary challenge is the substantial exit tax exposure on the $5M locked-up acquirer equity, coordinating the family relocation around the Israeli school year, and ensuring the Cyprus company has genuine substance from day one.

---

## 2. Input Data

### 2.1 Personal Identity (DR-01)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-01-001 | full_legal_name | Avi Cohen |
| DR-01-002 | full_legal_name_hebrew | אבי כהן |
| DR-01-003 | israeli_id_number | 305678912 |
| DR-01-004 | date_of_birth | 1983-09-15 |
| DR-01-005 | passport_number_israeli | 32456789 |
| DR-01-006 | passport_expiry_israeli | 2031-03-20 |
| DR-01-009 | contact_email | avi.cohen@example.com |
| DR-01-010 | contact_phone | +972524567890 |
| DR-01-013 | nationality_primary | IL |
| DR-01-015 | marital_status | married |

### 2.2 Family & Household (DR-02)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-02-001 | spouse_full_name | Tamar Cohen |
| DR-02-002 | spouse_id_number | 307891234 |
| DR-02-003 | spouse_nationality | IL |
| DR-02-004 | spouse_occupation | Freelance graphic designer (remote) |
| DR-02-005 | spouse_work_location | Israel (home office, Ramat Aviv) |
| DR-02-006 | spouse_relocating | Yes -- full relocation planned |
| DR-02-007 | number_of_children | 2 |
| DR-02-008 | child_1_name | Noam Cohen |
| DR-02-009 | child_1_age | 14 |
| DR-02-010 | child_1_school | Private bilingual school, Tel Aviv |
| DR-02-011 | child_1_relocating | Yes -- end of school year (June 2026) |
| DR-02-012 | child_2_name | Shira Cohen |
| DR-02-013 | child_2_age | 11 |
| DR-02-014 | child_2_school | Private bilingual school, Tel Aviv |
| DR-02-015 | child_2_relocating | Yes -- end of school year (June 2026) |

### 2.3 Residence & Presence (DR-03)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-03-001 | days_in_israel_current_year | 210 (as of scenario date) |
| DR-03-002 | days_in_israel_prior_year | 350 |
| DR-03-003 | days_in_israel_two_years_prior | 345 |
| DR-03-004 | primary_dwelling_location | Ramat Aviv, Tel Aviv, Israel |
| DR-03-005 | owns_israeli_dwelling | Yes |
| DR-03-006 | foreign_dwelling | None currently; plans to rent in Limassol |
| DR-03-007 | israeli_drivers_license | Active |
| DR-03-008 | israeli_health_insurance | Active (Maccabi) |
| DR-03-009 | israeli_bank_accounts | 2 accounts (Bank Hapoalim, Bank Leumi) |
| DR-03-010 | israeli_club_memberships | Herzliya Marina yacht club, Tel Aviv running club |
| DR-03-012 | bituach_leumi_status | Active, contributing |
| DR-03-016 | self_declared_resident | Yes -- filed as Israeli resident in all prior years |

### 2.4 Financial Assets (DR-04)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-04-001 | total_liquid_assets | $15,000,000 (acquisition proceeds, held in ILS and USD) |
| DR-04-002 | securities_portfolio | $5,000,000 (acquirer equity, 3-year lock-up, annual vesting) |
| DR-04-003 | real_estate_israel | $2,000,000 (Ramat Aviv apartment, owned outright) |
| DR-04-004 | real_estate_foreign | None |
| DR-04-005 | pension_funds | $800,000 (combination of managers' insurance + pension fund) |
| DR-04-006 | total_net_worth | $22,800,000 |
| DR-04-007 | cryptocurrency | $0 |
| DR-04-008 | life_insurance_csv | $150,000 |

### 2.5 Employment & Income (DR-05)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-05-001 | employment_status | Unemployed (post-acquisition; no active employment) |
| DR-05-002 | prior_employer | Own startup (acquired) |
| DR-05-003 | current_annual_income | $0 (no salary; dividends from acquirer equity pending) |
| DR-05-004 | expected_annual_income_abroad | $200,000--$400,000 (consulting + IP licensing from new Cyprus company) |
| DR-05-005 | israeli_employer_ties | None (clean separation from acquirer) |

### 2.6 Corporate Structure (DR-06)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-06-001 | israeli_company_ownership | None (startup was acquired; no current Israeli company holdings) |
| DR-06-002 | foreign_company_ownership | None currently; plans to establish Cyprus Ltd |
| DR-06-003 | acquirer_equity_stake | 5% of US-listed acquirer (lock-up: 3 years, annual vesting of 1/3) |
| DR-06-004 | substantial_shareholder_israeli | No (startup fully acquired; no remaining Israeli co holding) |
| DR-06-005 | planned_cyprus_company_type | Private Limited Company (IP holding + consulting) |
| DR-06-006 | planned_cyprus_employees | 2--3 (admin + junior developer) |

---

## 3. Expected Decision Tree Paths

### 3.1 DT-01: Residency Severance Eligibility

| Step | Node ID | Question | Input Value | Branch | Next Node |
|------|---------|----------|-------------|--------|-----------|
| 1 | DT-01-001 | Is client currently Israeli tax resident? | Yes (self-declared, DR-03-016) | YES | DT-01-005 |
| 2 | DT-01-005 | Is Bituach Leumi still active? | Yes (DR-03-012) | YES | DT-01-006 |
| 3 | DT-01-006 | Substantial assets subject to exit tax? | Yes ($5M acquirer equity, $2M apartment, $800K pension) | YES | DT-01-007 |
| 4 | DT-01-007 | Substantial shareholder (10%+) in Israeli co? | No (5% in US acquirer, no Israeli co) | NO | DT-01-008 |
| 5 | DT-01-008 | Primary family ties in Israel? | Yes (children in Israeli schools until June) | YES | **ELIGIBLE-COMPLEX** |

**Expected Terminal:** `ELIGIBLE-COMPLEX`

**Rationale:** Avi qualifies for residency severance but is classified as complex due to: (a) substantial assets triggering exit tax assessment, and (b) family ties (children in Israeli schools) requiring coordinated relocation planning.

<!-- EXPERT INPUT REQUIRED: Confirm that the 5% acquirer equity stake triggers DT-01-006 (substantial assets) even though Avi is not a 10%+ shareholder in an Israeli company. The $5M value likely exceeds the threshold, but the threshold amount needs expert confirmation. -->

### 3.2 DT-02: Residency Severance Process

| Step | Node ID | Expected Branch | Notes |
|------|---------|-----------------|-------|
| 1 | DT-02-001 | Initiate severance process | Post-eligibility entry |
| 2 | DT-02-002 | YES -- assets require exit tax filing | $5M acquirer equity triggers Section 100A |
| 3 | DT-02-003 | YES -- family relocation coordination needed | Two school-age children |
| 4 | DT-02-004 | [PLACEHOLDER] | Bituach Leumi severance sequence |
| 5 | DT-02-005 | [PLACEHOLDER] | Bank account restructuring |

<!-- EXPERT INPUT REQUIRED: Complete DT-02 traversal once DT-02 node table is finalized by expert. -->

### 3.3 DT-03: Exit Tax Assessment

| Step | Node ID | Expected Branch | Notes |
|------|---------|-----------------|-------|
| 1 | DT-03-001 | YES -- assets subject to deemed liquidation | $5M acquirer equity |
| 2 | DT-03-002 | Determine cost basis | Original equity: ~$0 (founder shares); FMV at exit: $5M |
| 3 | DT-03-003 | Calculate gain | $5M - ~$0 = ~$5M deemed gain |
| 4 | DT-03-004 | Assess tax rate | 25% capital gains tax on substantial shareholder disposal |
| 5 | DT-03-005 | Consider deferral options | Lock-up period complicates immediate payment |

<!-- EXPERT INPUT REQUIRED: Confirm applicable tax rate. Is Avi a "substantial shareholder" of the acquirer (5% of US company)? If not, the rate may be 25% rather than 30%. Also confirm whether lock-up equity can use the payment deferral mechanism under Section 100A(b). -->

### 3.4 DT-04: Cyprus Company Establishment

| Step | Node ID | Expected Branch | Notes |
|------|---------|-----------------|-------|
| 1 | DT-04-001 | Initiate Cyprus company formation | IP holding + consulting structure |
| 2 | DT-04-002 | YES -- needs physical office | Substance requirements for IP company |
| 3 | DT-04-003 | YES -- needs local employees | At least 2--3 for substance |
| 4 | DT-04-007 | PASS (substance) | Plans include office, employees, local decisions |

---

## 4. Expected Risk Scores

### 4.1 Individual Risk Indicators

| Risk ID | Name | Triggered? | Severity | Rationale |
|---------|------|-----------|----------|-----------|
| RC-01-001 | Day count -- current year | YES | 4 (High) | 210 days in Israel this year; well above 183. Severance mid-year creates high day-count exposure for the current tax year. |
| RC-01-002 | Weighted 3-year formula | YES | 3 (Moderate) | Weighted: 210 + (350/3) + (345/6) = 210 + 116.7 + 57.5 = 384.2. Above 425 threshold when combined with prior full years. [PLACEHOLDER -- recalculate with exact values for the year of departure] |
| RC-01-003 | Center of life -- personal ties | YES | 3 (Moderate) | Children in Israeli school until June; spouse currently works from Israel. Mitigated by planned full family relocation. |
| RC-01-005 | Israeli dwelling retained | YES | 3 (Moderate) | Ramat Aviv apartment owned outright. Must be sold or clearly not "available for use" to avoid irrebuttable presumption (LTF-01-006). |
| RC-01-006 | Israeli bank accounts | YES | 2 (Low) | Two active Israeli bank accounts. Need to be closed or converted to non-resident accounts. |
| RC-01-008 | Spouse remains in Israel | NO | -- | Spouse plans to relocate; not triggered. |
| RC-01-009 | Children in Israeli schools | YES | 4 (High) | Two children currently enrolled. Until they physically transfer to Cyprus school, this is a strong center-of-life indicator. |
| RC-01-010 | Health insurance active | YES | 2 (Low) | Maccabi membership active. Needs cancellation or suspension as part of severance. |
| RC-02-001 | CRS reporting | YES | 2 (Low) | $15M in bank accounts will trigger CRS automatic reporting. Ensure consistent residency declarations across jurisdictions. |
| RC-02-006 | Anti-avoidance risk | YES | 2 (Low) | IP holding company could attract scrutiny if structured without substance. Mitigated by planned employees and office. |
| RC-03-001 | Cyprus office substance | NO | -- | Plans include physical office. Not triggered if executed. |
| RC-03-006 | Decision-making location | YES | 2 (Low) | During transition, decisions may still be made from Israel. Must ensure board meetings in Cyprus from day one. |
| RC-04-001 | Exit tax vs. liquidity | YES | 4 (High) | Exit tax of ~$1.2M on $5M equity, but equity is locked up for 3 years. Tax may be due before equity is liquid. |
| RC-04-004 | Concentrated asset risk | YES | 3 (Moderate) | $5M in single acquirer stock (22% of net worth). Subject to market risk during lock-up. |
| RC-04-006 | Real estate lock-in | YES | 2 (Low) | $2M apartment -- liquid market in Tel Aviv, but sale takes 3--6 months. |
| RC-04-007 | Setup cost liquidity | NO | -- | $15M liquid assets; setup costs are negligible relative to net worth. |

### 4.2 Category Aggregation

| Category | Highest Severity | Triggered Count | Category Score | Weight |
|----------|-----------------|-----------------|----------------|--------|
| Tax (RC-01) | 4 | 6 | [PLACEHOLDER] | 0.35 |
| Legal & Compliance (RC-02) | 2 | 2 | [PLACEHOLDER] | 0.30 |
| Structural (RC-03) | 2 | 1 | [PLACEHOLDER] | 0.20 |
| Financial Exposure (RC-04) | 4 | 3 | [PLACEHOLDER] | 0.15 |

<!-- EXPERT INPUT REQUIRED: Calculate aggregated scores using the methodology in 04-risk-classification/05-scoring-methodology.md once finalized. -->

### 4.3 Expected Overall Risk Tier

**Expected Tier: ORANGE (Elevated)**

Rationale: The combination of high day count in the current year, children in Israeli schools, and the exit tax liquidity mismatch (tax due on locked-up equity) elevates this case above Yellow. However, the strong mitigation factors (full family relocation planned, ample liquid assets, clean employer separation) keep it below Red.

---

## 5. Expected Financial Outputs

### 5.1 Exit Tax Calculation (FA-04)

| Item | Value | Notes |
|------|-------|-------|
| Asset subject to deemed liquidation | $5,000,000 (acquirer equity) | 5% stake in US acquirer |
| Cost basis | ~$0 (founder shares, negligible original investment) | <!-- EXPERT INPUT REQUIRED: Confirm cost basis methodology for founder shares exchanged in acquisition --> |
| Deemed capital gain | ~$5,000,000 | |
| Applicable tax rate | 25% | Capital gains tax on securities; [PLACEHOLDER -- confirm rate if not "substantial shareholder" of acquirer] |
| Exit tax liability | ~$1,250,000 | |
| Payment deferral available? | [PLACEHOLDER] | Section 100A(b) deferral for locked-up equity |
| Guarantees/collateral required | [PLACEHOLDER] | ITA may require bank guarantee or lien on assets |

### 5.2 Real Estate Considerations (FA-01)

| Item | Value | Notes |
|------|-------|-------|
| Ramat Aviv apartment FMV | $2,000,000 | |
| Capital gains tax if sold | [PLACEHOLDER] | Depends on acquisition date and principal residence exemption |
| Recommendation | Sell before or shortly after severance | Retaining creates irrebuttable presumption risk (LTF-01-006) |

### 5.3 Cyprus Setup Costs (FA-06)

| Item | Monthly Cost (EUR) | Annual Cost (EUR) | Notes |
|------|-------------------|-------------------|-------|
| Office rent (Limassol) | 1,500 | 18,000 | Serviced office for 3--4 people |
| Employee salaries (2 staff) | 4,000 | 48,000 | Admin + junior developer |
| Accounting & audit | 500 | 6,000 | Annual statutory audit required |
| Legal retainer | 500 | 6,000 | Corporate maintenance |
| Company registration (one-time) | -- | 3,500 | Including legal fees |
| Personal rent (family apartment, Limassol) | 3,000 | 36,000 | 3-bed apartment near international school |
| International school fees (2 children) | 2,500 | 30,000 | Approximate; varies by school |
| Health insurance (family) | 800 | 9,600 | Private health coverage |
| **Total monthly** | **~12,800** | | |
| **Total annual (steady state)** | | **~157,100** | After one-time setup costs |

<!-- EXPERT INPUT REQUIRED: Validate Cyprus cost estimates against current 2026 market rates. School fees vary significantly by institution. -->

### 5.4 Cash Flow Summary (FA-02)

| Item | Year 1 | Year 2 | Year 3 |
|------|--------|--------|--------|
| Liquid assets (start) | $15,000,000 | $13,550,000 | $13,400,000 |
| Exit tax payment | ($1,250,000) | -- | -- |
| Setup costs (one-time) | ($50,000) | -- | -- |
| Annual Cyprus costs | ($157,000) | ($157,000) | ($157,000) |
| Consulting income | $200,000 | $300,000 | $400,000 |
| Acquirer equity vesting | -- | $1,667,000 | $1,667,000 |
| Liquid assets (end) | ~$13,743,000 | ~$15,360,000 | ~$15,310,000 |

<!-- EXPERT INPUT REQUIRED: This is a simplified projection. Full model should include: investment returns on liquid assets, Cyprus corporate tax on consulting income (12.5%), personal tax implications, currency conversion costs (ILS/USD/EUR). -->

---

## 6. Validation Criteria

| # | Criterion | Expected Result | Pass Condition |
|---|-----------|-----------------|----------------|
| 1 | DT-01 terminal | ELIGIBLE-COMPLEX | Exact match |
| 2 | DT-01 path | 001 -> 005 -> 006 -> 007 -> 008 -> ELIGIBLE-COMPLEX | All nodes and branches match |
| 3 | RC-01-001 triggered | Yes, severity 4 | Triggered with correct severity |
| 4 | RC-01-009 triggered | Yes, severity 4 | Children in school flagged |
| 5 | RC-04-001 triggered | Yes, severity 4 | Exit tax liquidity mismatch flagged |
| 6 | Overall risk tier | ORANGE | Tier matches expected |
| 7 | Exit tax amount | $1,200,000 -- $1,300,000 | Within 5% of $1,250,000 |
| 8 | Monthly Cyprus costs | EUR 10,000 -- EUR 15,000 | Within 20% of EUR 12,800 |
| 9 | DT-04-007 substance check | PASS | Cyprus company substance requirements met |
| 10 | Apartment flagged for disposal | Yes | RC-01-005 or equivalent flags retained Israeli dwelling |

---

## 7. Edge Cases

### 7.1 School Year Timing Gap

**Issue:** If Avi relocates before June 2026 (end of Israeli school year) but children remain in Israeli school, there is a period where Avi claims non-residency while children are still in Israeli education.

**Risk:** ITA could argue center of life remains in Israel during the gap. RC-01-009 severity should escalate to 5 (Critical) if children remain in Israeli school for more than 60 days after Avi's declared severance date.

**Test:** Set `DR-02-011` (child_1_relocating) to "September 2026" instead of June, and verify RC-01-009 escalates.

### 7.2 Acquirer Equity Lock-Up and Exit Tax Timing

**Issue:** The $5M in acquirer equity vests over 3 years. Exit tax is assessed on the full $5M at the deemed liquidation date, but Avi cannot sell the shares to fund the tax payment.

**Risk:** If ITA does not grant deferral under Section 100A(b), Avi must pay ~$1.25M from liquid assets. This is manageable given $15M liquid, but creates cash flow pressure.

**Test:** Reduce `DR-04-001` (total_liquid_assets) to $2,000,000 and verify RC-04-001 escalates to severity 5 (Critical) and RC-04-007 (setup cost liquidity) triggers.

### 7.3 Irrebuttable Presumption -- Apartment Retention

**Issue:** Under the 2025 reform (LTF-01-006), if Avi retains the Ramat Aviv apartment and it is deemed "available for use," he may be irrebuttably presumed an Israeli resident regardless of his actual residence in Cyprus.

**Risk:** The apartment must be sold, long-term leased to a third party (making it unavailable for Avi's use), or otherwise disposed of before severance.

**Test:** Set `DR-03-005` (owns_israeli_dwelling) to Yes and `DR-03-006` (foreign_dwelling) to "renting in Limassol." Verify that RC-01-005 severity is at least 3, and that the decision tree routes through a substance check for the apartment's disposition.

<!-- EXPERT INPUT REQUIRED: Confirm whether a long-term lease (12+ months) to an unrelated third party is sufficient to overcome the "available for use" test under the 2025 reform. -->

### 7.4 Cyprus Company Without Substance (Counter-Scenario)

**Issue:** If Avi sets up the Cyprus company but operates it entirely from Israel (no office, no employees, virtual address only), the company risks being recharacterized as Israeli-managed.

**Risk:** This would trigger RC-03-001 through RC-03-006. The scenario as written expects these NOT to trigger (because Avi plans real substance). This edge case verifies what happens if substance is absent.

**Test:** Set `DR-06-006` (planned_cyprus_employees) to 0, remove office plans. Verify DT-04-007 returns FAIL and RC-03-xxx indicators fire with high severity.

### 7.5 Spouse Decision to Stay

**Issue:** If Tamar decides not to relocate (e.g., family pressure, career opportunity in Israel), Avi's center-of-life argument weakens significantly.

**Risk:** RC-01-008 (spouse in Israel) would trigger at severity 4--5. The DT-01-008 node would still route to ELIGIBLE-COMPLEX, but the overall risk tier could escalate to RED.

**Test:** Set `DR-02-006` (spouse_relocating) to "No" and verify RC-01-008 triggers with severity >= 4 and overall risk tier escalates.

---

## 8. Notes for Expert Review

1. **Tax rate confirmation** -- The 25% capital gains rate on the acquirer equity assumes Avi is not a "substantial shareholder" of the US acquirer (only 5%). If the ITA applies a different classification, the rate may change. [PLACEHOLDER -- expert to confirm]

2. **Pension fund treatment** -- The $800K in pension funds may or may not be subject to exit tax. Israeli pension funds have specific exemption rules under Section 9(5). [PLACEHOLDER -- expert to confirm pension exit tax treatment]

3. **National Insurance severance** -- Avi's Bituach Leumi status must be formally severed. The timing interacts with health insurance termination and may affect eligibility for future Israeli social benefits. [PLACEHOLDER -- expert to detail the Bituach Leumi severance sequence]

4. **Treaty tie-breaker** -- If Israel and Cyprus both claim Avi as a tax resident during the transition year, the Israel-Cyprus treaty tie-breaker (Article 4) applies. Avi's permanent home, center of vital interests, and habitual abode must be analyzed. [PLACEHOLDER -- expert to confirm treaty analysis for the transition year]

5. **IP holding company structure** -- The Cyprus IP company may qualify for the IP Box regime (reduced effective tax rate). Expert should confirm qualifying conditions and whether Avi's planned activity meets them.

<!-- EXPERT INPUT REQUIRED: Review all [PLACEHOLDER] items above and provide validated values. This scenario cannot be marked as verified until all placeholders are resolved. -->
