---
id: VS-04
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies:
  - DT-01
  - DT-07
  - RC-01
  - RC-02
  - RC-03
  - FA-04
  - FA-05
  - DR-01
  - DR-02
  - DR-03
  - DR-04
  - DR-05
  - DR-06
---

# VS-04: Retroactive Rectification

## 1. Client Profile

| Field | Value |
|-------|-------|
| **Name** | David Stern (דוד שטרן) |
| **Age** | 50 |
| **Nationality** | Israeli (IL) |
| **Marital Status** | Married |
| **Spouse** | Nadia Stern (נדיה שטרן), age 47, Israeli citizen, lives in Cyprus with David |
| **Children** | 1 -- Liam (age 16), attending international school in Limassol |
| **Current Residence** | Limassol, Cyprus (3 years) |
| **Prior Residence** | Ramat Gan, Israel |
| **Occupation** | Management consultant (independent) |
| **Current Structure** | Cyprus Ltd (consulting company, 2 years old) |
| **Timeline** | Immediate -- retroactive rectification of past 3 years |

### Background Narrative

David relocated to Limassol, Cyprus, 3 years ago (early 2023). He and his wife Nadia moved together, and their son Liam enrolled in an international school in Limassol starting September 2023. David established a Cyprus consulting company in mid-2024, through which he provides management consulting services to Israeli and European clients.

However, David made several critical errors in his departure:

1. **Never filed an exit notice** (Form 1348 or equivalent) with the Israel Tax Authority.
2. **Retained Israeli bank accounts** at Bank Hapoalim and Bank Leumi, with significant balances and ongoing activity (credit card payments, standing orders for Israeli subscriptions).
3. **Maintained Israeli health insurance** (Maccabi) -- paid continuously, used for 2 doctor visits during Israel trips.
4. **Did not formally sever Bituach Leumi** -- contributions stopped automatically when salary ended, but no formal declaration was filed.
5. **Filed Israeli tax returns** for the first year after departure, declaring worldwide income as a resident, then stopped filing entirely.
6. **Cyprus company was never reported** to Israeli authorities as a Controlled Foreign Corporation (CFC) or as foreign company ownership.

David now recognizes the severity of his situation and seeks professional help to rectify it retroactively. This scenario tests the system's handling of the retroactive rectification decision tree (DT-07) and the complex risk landscape of unreported obligations.

---

## 2. Input Data

### 2.1 Personal Identity (DR-01)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-01-001 | full_legal_name | David Stern |
| DR-01-002 | full_legal_name_hebrew | דוד שטרן |
| DR-01-003 | israeli_id_number | 028345671 |
| DR-01-004 | date_of_birth | 1975-04-18 |
| DR-01-005 | passport_number_israeli | 26789012 |
| DR-01-006 | passport_expiry_israeli | 2030-11-20 |
| DR-01-009 | contact_email | david.stern@example.com |
| DR-01-010 | contact_phone | +35799123456 |
| DR-01-013 | nationality_primary | IL |
| DR-01-015 | marital_status | married |

### 2.2 Family & Household (DR-02)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-02-001 | spouse_full_name | Nadia Stern |
| DR-02-002 | spouse_id_number | 029876543 |
| DR-02-003 | spouse_nationality | IL |
| DR-02-004 | spouse_occupation | Part-time Hebrew tutor (Cyprus) |
| DR-02-005 | spouse_work_location | Limassol, Cyprus |
| DR-02-006 | spouse_location | Cyprus (relocated with David) |
| DR-02-007 | number_of_children | 1 |
| DR-02-008 | child_1_name | Liam Stern |
| DR-02-009 | child_1_age | 16 |
| DR-02-010 | child_1_school | International school, Limassol (enrolled since Sep 2023) |

### 2.3 Residence & Presence (DR-03)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-03-001 | days_in_israel_current_year | 60 |
| DR-03-002 | days_in_israel_prior_year | 45 |
| DR-03-003 | days_in_israel_two_years_prior | 90 |
| DR-03-004 | primary_dwelling_location | Limassol, Cyprus (rented apartment) |
| DR-03-005 | owns_israeli_dwelling | Yes ($1,000,000 apartment in Ramat Gan -- currently rented to tenants) |
| DR-03-006 | foreign_dwelling | Rented apartment in Limassol (EUR 2,200/month) |
| DR-03-007 | israeli_drivers_license | Active (never surrendered or converted) |
| DR-03-008 | israeli_health_insurance | Active (Maccabi -- paid monthly, used for 2 visits in past 2 years) |
| DR-03-009 | israeli_bank_accounts | 2 active accounts (Bank Hapoalim: $300K balance, Bank Leumi: $150K balance) with credit cards, standing orders |
| DR-03-010 | israeli_club_memberships | None active |
| DR-03-012 | bituach_leumi_status | Unclear -- contributions stopped, no formal declaration |
| DR-03-015 | exit_notice_filed | NO |
| DR-03-016 | self_declared_resident | Filed as resident for Year 1 post-departure; did not file for Years 2 and 3 |
| DR-03-018 | days_in_cyprus_current_year | 260 |
| DR-03-019 | days_in_cyprus_prior_year | 280 |
| DR-03-020 | days_in_cyprus_two_years_prior | 230 |

### 2.4 Financial Assets (DR-04)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-04-001 | total_liquid_assets | $450,000 (Israeli bank accounts) + EUR 200,000 (Cyprus bank account) |
| DR-04-002 | securities_portfolio | $2,500,000 (managed portfolio, held through Israeli brokerage) |
| DR-04-003 | real_estate_israel | $1,000,000 (Ramat Gan apartment, rented out) |
| DR-04-004 | real_estate_foreign | None (rents in Cyprus) |
| DR-04-005 | pension_funds | $500,000 (Israeli managers' insurance) |
| DR-04-006 | total_net_worth | ~$4,870,000 |
| DR-04-007 | cryptocurrency | $50,000 (Bitcoin, held on Israeli exchange) |
| DR-04-008 | cyprus_company_value | Estimated $300,000 (2 years of goodwill + receivables) |
| DR-04-009 | cyprus_company_annual_revenue | EUR 250,000 |
| DR-04-010 | cyprus_company_bank_balance | EUR 120,000 |

### 2.5 Employment & Income (DR-05)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-05-001 | employment_status | Self-employed (through Cyprus Ltd) |
| DR-05-002 | employer | Own Cyprus consulting company |
| DR-05-003 | current_annual_income | EUR 250,000 (company revenue); personal salary: EUR 80,000 |
| DR-05-004 | client_locations | 60% Israeli clients, 30% European clients, 10% other |
| DR-05-005 | israeli_employer_ties | None (independent) |
| DR-05-006 | israeli_income_sources | Rental income from Ramat Gan apartment (~$2,500/month) |

### 2.6 Compliance History (DR-08 -- Supplementary)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-08-001 | israeli_tax_returns_filed | Filed for Year 1 as resident (worldwide income declared). Years 2 and 3: NOT FILED. |
| DR-08-002 | exit_notice_form_1348 | NOT FILED |
| DR-08-003 | cfc_reporting | NOT FILED (Cyprus company not reported) |
| DR-08-004 | foreign_company_ownership_report | NOT FILED |
| DR-08-005 | bituach_leumi_exit_declaration | NOT FILED |
| DR-08-006 | bank_account_foreign_disclosure | NOT FILED (Cyprus bank account not disclosed to ITA) |
| DR-08-007 | crs_exposure | Cyprus bank (EUR 200K+) will have reported to Israel via CRS. ITA likely already has data. |
| DR-08-008 | years_of_non_compliance | 2 (Years 2 and 3 post-departure) |

---

## 3. Expected Decision Tree Paths

### 3.1 DT-01: Residency Status Assessment (Retroactive)

Before entering the rectification tree, the system must first assess David's current and historical residency status.

**Current Year Day Count:**
- Israel: 60 days -- BELOW 183 threshold.
- Weighted: 60 + (45/3) + (90/6) = 60 + 15 + 15 = 90 -- BELOW 425.

**Conclusion:** David is NOT an Israeli tax resident under the day-count tests for the current year. However, the question is: when did his Israeli residency actually end?

| Step | Node ID | Question | Input Value | Branch | Next Node |
|------|---------|----------|-------------|--------|-----------|
| 1 | DT-01-001 | Is client currently Israeli tax resident? | Unclear -- claims non-resident but never formalized | UNCERTAIN | DT-01-002 |
| 2 | DT-01-002 | Does client meet 183-day test? | 60 days (No) | NO | DT-01-003 |
| 3 | DT-01-003 | Weighted 3-year test? | 90 weighted (No) | NO | DT-01-004 |
| 4 | DT-01-004 | Center of life in Israel? | No -- lives in Cyprus with family; but has Israeli bank accounts, health insurance, rental property | DISPUTED | **NEEDS-REVIEW** |

**Expected Terminal:** `NEEDS-REVIEW`

**Rationale:** David's current-year numbers clearly indicate non-residency, but the retained Israeli ties (bank accounts, health insurance, property) create ambiguity, especially for the transitional years. An expert must determine the effective date of residency cessation.

### 3.2 DT-07: Retroactive Rectification

This is the primary decision tree for David's case.

| Step | Node ID | Question | Input Value | Branch | Next Node |
|------|---------|----------|-------------|--------|-----------|
| 1 | DT-07-001 | Has client departed Israel and claims non-residency? | Yes -- departed 3 years ago | YES | DT-07-002 |
| 2 | DT-07-002 | Was exit notice (Form 1348) filed? | No | NO | DT-07-003 |
| 3 | DT-07-003 | Are there unfiled Israeli tax returns? | Yes -- 2 years unfiled | YES | DT-07-004 |
| 4 | DT-07-004 | Is there unreported foreign income or assets? | Yes -- Cyprus company, Cyprus bank account | YES | DT-07-005 |
| 5 | DT-07-005 | Should voluntary disclosure procedure be evaluated? | [PLACEHOLDER -- depends on exposure severity] | [PLACEHOLDER] | -- |

<!-- EXPERT INPUT REQUIRED: Complete DT-07 traversal. The voluntary disclosure procedure (גילוי מרצון) is a sensitive topic. Expert must confirm: (a) is David eligible for voluntary disclosure? (b) what are the procedural requirements? (c) what is the typical penalty range? (d) does the voluntary disclosure program still exist in 2026? -->

---

## 4. Expected Risk Scores

### 4.1 Individual Risk Indicators

| Risk ID | Name | Triggered? | Severity | Rationale |
|---------|------|-----------|----------|-----------|
| RC-01-001 | Day count -- current year | NO | -- | 60 days, well below 183. |
| RC-01-003 | Center of life -- mixed signals | YES | 3 (Moderate) | Family is in Cyprus, but Israeli bank accounts, health insurance, and property remain. |
| RC-01-005 | Israeli dwelling retained | YES | 3 (Moderate) | Ramat Gan apartment owned but rented out. Less severe than "available for use" but still a tie. |
| RC-01-006 | Israeli bank accounts active | YES | 4 (High) | Two active accounts with $450K, credit cards, and standing orders. This is a strong indicator of ongoing Israeli economic presence. |
| RC-01-010 | Health insurance active | YES | 4 (High) | Maccabi paid and USED. Using Israeli health insurance while claiming non-residency is a significant red flag. ITA can argue this demonstrates reliance on Israeli infrastructure. |
| RC-02-001 | CRS auto-reporting | YES | 4 (High) | Cyprus bank account (EUR 200K+) has been reported to Israel via CRS. ITA already has data showing foreign assets not disclosed in Israeli returns. |
| RC-02-002 | Unfiled tax returns | YES | 5 (Critical) | 2 years of unfiled Israeli tax returns. This is a statutory offense under Section 216(4) of the Tax Ordinance, punishable by fine and imprisonment. |
| RC-02-003 | Unreported foreign income | YES | 5 (Critical) | Cyprus company income (EUR 250K/year) not reported for 2 years. Combined with CRS data, ITA has prima facie evidence of non-reporting. |
| RC-02-004 | CFC not reported | YES | 4 (High) | Cyprus company may be a CFC under Section 75B. If David is deemed an Israeli resident (even retroactively), CFC reporting obligations apply. |
| RC-02-005 | Foreign company ownership not reported | YES | 4 (High) | Section 131(a)(5H) requires disclosure of foreign company ownership. Not filed. |
| RC-02-006 | Anti-avoidance exposure | YES | 3 (Moderate) | The pattern of departure without formalization could be viewed as tax avoidance if ITA determines David was still a resident. |
| RC-02-008 | Voluntary disclosure eligibility | YES | 3 (Moderate) | Need to assess whether David qualifies. CRS data may disqualify him if ITA has already flagged the account. |
| RC-03-003 | Cyprus company -- client concentration | YES | 3 (Moderate) | 60% Israeli clients. ITA could argue the company is effectively managed from Israel or primarily serves Israeli market. |
| RC-03-006 | Decision-making location (historical) | YES | 2 (Low) | David physically operates from Cyprus. However, early operations (before formal company) may have been conducted from Israel during visits. |

### 4.2 Category Aggregation

| Category | Highest Severity | Triggered Count | Category Score | Weight |
|----------|-----------------|-----------------|----------------|--------|
| Tax (RC-01) | 4 | 4 | [PLACEHOLDER] | 0.35 |
| Legal & Compliance (RC-02) | 5 | 6 | [PLACEHOLDER] | 0.30 |
| Structural (RC-03) | 3 | 2 | [PLACEHOLDER] | 0.20 |
| Financial Exposure (RC-04) | -- | 0 | [PLACEHOLDER] | 0.15 |

### 4.3 Expected Overall Risk Tier

**Expected Tier: RED (High / Critical)**

Rationale: Two Critical-severity indicators (RC-02-002 unfiled returns, RC-02-003 unreported income) combined with multiple High-severity indicators across tax and compliance categories. The CRS automatic reporting means the ITA likely already has information that David has not disclosed. This creates potential criminal exposure (tax evasion charges). The rectification must be handled by a senior Israeli tax attorney, not just a planner.

---

## 5. Expected Financial Outputs

### 5.1 Retroactive Tax Exposure Assessment (FA-04 / FA-05)

#### Scenario A: ITA Accepts Residency Ended at Departure (Best Case)

| Item | Value | Notes |
|------|-------|-------|
| Residency cessation date | January 2023 | Date of physical relocation |
| Exit tax on securities | ~$375,000 | 25% on estimated $1.5M gain at time of departure |
| Unfiled return penalties (Year 1 was filed) | $0 | Filed Year 1 correctly as resident |
| Unfiled return penalties (Years 2, 3) | [PLACEHOLDER] | Non-resident, so Israeli income is limited to rental income. Penalties for non-filing, not for tax evasion. |
| Rental income tax owed (Years 2, 3) | ~$15,000 | Withholding on $2,500/month rental income |
| Late filing penalties | [PLACEHOLDER] | Estimated 5%--15% of tax owed + interest |
| CFC penalties | $0 | If non-resident, CFC rules do not apply |
| **Total best-case exposure** | **~$400,000 -- $450,000** | |

#### Scenario B: ITA Claims Residency Continued (Worst Case)

| Item | Value | Notes |
|------|-------|-------|
| Residency cessation date | Not accepted | ITA argues David is still an Israeli resident |
| Worldwide income tax (3 years) | [PLACEHOLDER] | EUR 250K/year company income + rental income, taxed at Israeli progressive rates (up to 50%) |
| CFC underpayment | [PLACEHOLDER] | Company profits attributed to David as Israeli shareholder |
| Non-filing penalties | [PLACEHOLDER] | Statutory penalties: up to 150% of tax owed in egregious cases |
| Interest on arrears | [PLACEHOLDER] | 4% annual interest on unpaid tax |
| Criminal exposure | Possible | Section 220 tax evasion; unlikely if voluntary disclosure accepted |
| **Total worst-case exposure** | **$800,000 -- $1,500,000+** | |

<!-- EXPERT INPUT REQUIRED: Complete both scenario calculations with validated tax rates, penalty schedules, and interest calculations. The range between best and worst case is enormous and drives the advisory strategy. -->

### 5.2 Rectification Cost Estimate (FA-05)

| Item | Estimated Cost | Notes |
|------|---------------|-------|
| Israeli tax attorney | $30,000 -- $60,000 | Senior attorney for voluntary disclosure process |
| Israeli CPA (back filing) | $15,000 -- $25,000 | Preparation of 2 unfiled returns + amended Year 1 |
| ITA negotiations | Included in attorney fees | |
| Exit tax (if accepted) | $375,000 | Best case |
| Late filing penalties | $20,000 -- $50,000 | [PLACEHOLDER -- expert to confirm range] |
| Interest on arrears | $15,000 -- $30,000 | 4% on 2--3 years |
| **Total rectification cost** | **$455,000 -- $540,000** | Best-case scenario |

### 5.3 Ongoing Costs Post-Rectification (FA-06)

Once rectified, David's ongoing costs are similar to a standard Cyprus-based consultant. See VS-01 and VS-03 for comparable cost structures.

---

## 6. Validation Criteria

| # | Criterion | Expected Result | Pass Condition |
|---|-----------|-----------------|----------------|
| 1 | DT-01 terminal (current status) | NEEDS-REVIEW | Correct routing to expert determination |
| 2 | DT-07 path | 001 -> 002(NO) -> 003(YES) -> 004(YES) -> 005 | Correct routing through rectification tree |
| 3 | RC-02-002 triggered | Yes, severity 5 | Unfiled returns flagged as Critical |
| 4 | RC-02-003 triggered | Yes, severity 5 | Unreported income flagged as Critical |
| 5 | RC-01-006 triggered | Yes, severity 4 | Active bank accounts flagged |
| 6 | RC-01-010 triggered | Yes, severity 4 | Active health insurance flagged |
| 7 | Overall risk tier | RED | Highest tier for compliance failures |
| 8 | CRS cross-check | Flagged | System identifies that CRS data exists that contradicts Israeli filings |
| 9 | Voluntary disclosure assessment | Triggered | System recommends evaluation of voluntary disclosure eligibility |
| 10 | Criminal exposure warning | Generated | System generates explicit warning about potential criminal exposure |
| 11 | Best-case financial exposure | $400K -- $540K range | Within reasonable range |
| 12 | Senior attorney referral | Yes | System escalates to senior Israeli tax attorney (not standard planner) |

---

## 7. Edge Cases

### 7.1 CRS Data Already Triggered ITA Investigation

**Issue:** If the ITA has already received CRS data from Cyprus banks (which they have, as CRS is automatic) and has opened an investigation or sent a letter to David's Israeli address, voluntary disclosure may no longer be available.

**Risk:** Voluntary disclosure programs typically require the taxpayer to come forward BEFORE the authority contacts them. If the ITA has already acted on the CRS data, David loses the voluntary disclosure option and faces full penalties.

**Test:** Set `DR-08-009` (ITA_investigation_status) to "letter received." Verify the system: (a) disqualifies voluntary disclosure, (b) escalates risk tier to RED with criminal exposure warning, (c) recommends immediate retention of criminal tax defense attorney.

<!-- EXPERT INPUT REQUIRED: Confirm the exact cutoff for voluntary disclosure eligibility. Is it when the ITA sends a letter, opens a file, or takes formal investigative action? -->

### 7.2 Year 1 Return Was Filed as Resident -- Inconsistency

**Issue:** David filed Year 1 as an Israeli resident (declaring worldwide income). If he now claims he was already a non-resident in Year 1, this creates an internal inconsistency. The ITA could argue that his own filing confirms residency.

**Risk:** Amending the Year 1 return from "resident" to "non-resident" is possible but invites scrutiny. The ITA may argue that David's own assessment in Year 1 was correct and that he was still a resident.

**Test:** System should flag the inconsistency between Year 1 filing (resident) and the retroactive non-residency claim. Recommend expert analysis of the strongest severance date to claim.

### 7.3 Health Insurance Usage as Evidence

**Issue:** David used Maccabi health insurance twice during Israel visits. These medical records create documentary evidence that David continued to rely on Israeli social infrastructure.

**Risk:** ITA case law has used health insurance usage as evidence of center of life in Israel. The two visits create a paper trail.

**Test:** Verify RC-01-010 accounts for actual usage (not just active membership). Severity should be higher when insurance was used vs. merely paid for.

### 7.4 Cyprus Company with 60% Israeli Clients

**Issue:** David's consulting company derives 60% of its revenue from Israeli clients. The ITA could argue: (a) the company is effectively managed from Israel, or (b) the company is a transparent structure to avoid Israeli taxation of Israeli-source income.

**Risk:** If the company is recharacterized as Israeli-managed, all its income becomes Israeli-source income taxable at full Israeli rates, regardless of David's personal residency.

**Test:** Set `DR-05-004` (client_locations) to "80% Israeli clients." Verify RC-03-003 severity escalates and additional anti-avoidance warnings are generated.

### 7.5 Spouse Filed Israeli Returns

**Issue:** If Nadia continued to file Israeli tax returns (even if David stopped), the ITA could argue the household maintained Israeli tax obligations, supporting a residency claim for both.

**Test:** Add `DR-08-010` (spouse_tax_filing_status) = "filed as resident." Verify the system generates an inconsistency alert and recommends coordinated filing strategy.

---

## 8. Notes for Expert Review

1. **Voluntary disclosure program (2026 status)** -- The Israeli voluntary disclosure program (הליך גילוי מרצון) has operated intermittently. Expert must confirm: (a) is it currently active? (b) what are the terms? (c) does CRS data pre-empt eligibility?

2. **Criminal exposure threshold** -- At what point does non-filing become criminal tax evasion vs. civil non-compliance? The distinction between Section 216(4) (non-filing, civil) and Section 220 (tax evasion, criminal) must be clearly delineated.

3. **Residency cessation date determination** -- The most critical question: when did David's Israeli residency actually end? Options: (a) date of physical departure (2023), (b) date he should have filed Form 1348, (c) date determined retroactively by ITA. Each date produces dramatically different tax exposure.

4. **CFC analysis** -- If David was an Israeli resident during the first year of the Cyprus company, CFC rules may apply to that year. Expert must analyze the CFC implications for the overlap period.

5. **This scenario has the widest outcome range** -- Best case ~$450K, worst case potentially $1.5M+. The advisory value of proper rectification planning is enormous. The system must clearly communicate the stakes.

<!-- EXPERT INPUT REQUIRED: This is the highest-risk scenario in the validation set. It MUST be reviewed by a senior Israeli tax attorney before being used for system validation. All financial estimates are preliminary and may be significantly wrong. -->
