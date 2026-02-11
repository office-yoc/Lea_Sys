---
id: VS-06
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies:
  - DT-01
  - DT-04
  - RC-01
  - RC-02
  - RC-03
  - FA-01
  - FA-06
  - DR-01
  - DR-03
  - DR-04
  - DR-05
  - DR-06
---

# VS-06: Edge Case -- 183-Day Boundary

## 1. Client Profile

| Field | Value |
|-------|-------|
| **Name** | Eitan Rosen (איתן רוזן) |
| **Age** | 35 |
| **Nationality** | Israeli (IL) |
| **Marital Status** | Single |
| **Children** | None |
| **Current Residence** | Splits time: Israel (Tel Aviv), Cyprus (Larnaca), Portugal (Lisbon) |
| **Occupation** | Freelance software developer ("digital nomad") |
| **Current Structure** | Cyprus Ltd (1 year old, sole director/shareholder) |
| **Timeline** | Already in transition; seeks confirmation of non-residency status |

### Background Narrative

Eitan is a freelance full-stack developer who has been living a digital nomad lifestyle for 3 years. He maintains a rented room in his parents' apartment in Tel Aviv (no separate lease), a rented studio in Larnaca, Cyprus, and frequently stays in Lisbon, Portugal, using co-living spaces.

Eitan's day counts are deliberately managed to stay just under the 183-day threshold in Israel. He uses a tracking app to count his days and plans travel specifically to avoid triggering the presumption. In the current year, he spent exactly 182 days in Israel -- one day below the threshold.

He established a Cyprus company one year ago through which he invoices clients (mostly US and European startups). The company has a registered address at a virtual office in Larnaca but no employees and no physical office space. Eitan is the sole director and shareholder.

Eitan holds approximately $2M in cryptocurrency (Bitcoin and Ethereum), $500K in bank savings (split between Israel and Cyprus), and has no real estate. His crypto is held on an Israeli exchange (Bits of Gold) and a non-custodial wallet.

This scenario tests the system's handling of razor-thin day-count margins, the partial day counting controversy, cryptocurrency reporting obligations, and the substance requirements for a solo-director Cyprus company.

---

## 2. Input Data

### 2.1 Personal Identity (DR-01)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-01-001 | full_legal_name | Eitan Rosen |
| DR-01-002 | full_legal_name_hebrew | איתן רוזן |
| DR-01-003 | israeli_id_number | 318765432 |
| DR-01-004 | date_of_birth | 1990-08-12 |
| DR-01-005 | passport_number_israeli | 35678901 |
| DR-01-006 | passport_expiry_israeli | 2033-02-28 |
| DR-01-009 | contact_email | eitan.rosen@example.com |
| DR-01-010 | contact_phone | +972508765432 |
| DR-01-013 | nationality_primary | IL |
| DR-01-015 | marital_status | single |

### 2.2 Residence & Presence (DR-03)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-03-001 | days_in_israel_current_year | 182 |
| DR-03-002 | days_in_israel_prior_year | 100 |
| DR-03-003 | days_in_israel_two_years_prior | 160 |
| DR-03-004 | primary_dwelling_location | No single primary dwelling; room in parents' apartment (Tel Aviv), studio (Larnaca), transient (Lisbon) |
| DR-03-005 | owns_israeli_dwelling | No (rents room in parents' apartment; no formal lease) |
| DR-03-006 | foreign_dwelling | Rents studio in Larnaca (EUR 700/month, 12-month lease) |
| DR-03-007 | israeli_drivers_license | Active |
| DR-03-008 | israeli_health_insurance | Active (Clalit) |
| DR-03-009 | israeli_bank_accounts | 1 account (Bank Leumi, $250K balance) + Bits of Gold exchange account |
| DR-03-010 | israeli_club_memberships | None |
| DR-03-011 | days_in_cyprus_current_year | 80 |
| DR-03-012 | bituach_leumi_status | Unclear -- may be paying minimum self-employed contributions |
| DR-03-013 | days_in_cyprus_prior_year | 120 |
| DR-03-014 | days_in_cyprus_two_years_prior | 60 |
| DR-03-015 | days_in_portugal_current_year | 65 |
| DR-03-016 | self_declared_resident | Ambiguous -- has not formally declared non-residency; filed Israeli returns as resident in prior years |
| DR-03-017 | parents_address | Parents' apartment, Florentin, Tel Aviv |
| DR-03-018 | room_in_parents_apartment | Yes -- maintains a room with personal belongings; no formal rental arrangement |

### 2.3 Financial Assets (DR-04)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-04-001 | total_liquid_assets | $500,000 ($250K Israeli bank + EUR 230K Cyprus bank) |
| DR-04-002 | securities_portfolio | $0 (traditional securities) |
| DR-04-003 | real_estate_israel | $0 |
| DR-04-004 | real_estate_foreign | $0 |
| DR-04-005 | pension_funds | $50,000 (minimal; inconsistent contributions) |
| DR-04-006 | cryptocurrency_holdings | $2,000,000 (1.8 BTC + 15 ETH at current prices) |
| DR-04-007 | crypto_exchange_location | Bits of Gold (Israeli exchange): $800K; Non-custodial wallet: $1,200,000 |
| DR-04-008 | total_net_worth | ~$2,550,000 |
| DR-04-009 | crypto_acquisition_cost | ~$400,000 (purchased 2020--2023) |
| DR-04-010 | unrealized_crypto_gain | ~$1,600,000 |

### 2.4 Employment & Income (DR-05)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-05-001 | employment_status | Self-employed (through Cyprus Ltd) |
| DR-05-002 | employer | Own Cyprus company |
| DR-05-003 | current_annual_income | EUR 150,000 (company revenue; personal salary: EUR 36,000) |
| DR-05-004 | client_locations | 70% US, 20% EU, 10% Israel |
| DR-05-005 | israeli_income_sources | None directly (all invoiced through Cyprus company) |

### 2.5 Corporate Structure (DR-06)

| Field ID | Field Name | Value |
|----------|------------|-------|
| DR-06-001 | cyprus_company_name | [PLACEHOLDER] Ltd |
| DR-06-002 | cyprus_company_registration_date | 14 months ago |
| DR-06-003 | registered_office | Virtual office, Larnaca (mail forwarding only) |
| DR-06-004 | physical_office | None |
| DR-06-005 | cyprus_employees | 0 |
| DR-06-006 | sole_director | Yes -- Eitan is sole director and shareholder |
| DR-06-007 | board_meetings_location | No formal board meetings held |
| DR-06-008 | company_bank_account | Cyprus bank (EUR 230K balance) |
| DR-06-009 | annual_audit | Not yet conducted (company < 2 years old) |
| DR-06-010 | local_accountant | Yes (annual filing only) |

---

## 3. Expected Decision Tree Paths

### 3.1 DT-01: Residency Status Assessment

| Step | Node ID | Question | Input Value | Branch | Next Node |
|------|---------|----------|-------------|--------|-----------|
| 1 | DT-01-001 | Is client currently Israeli tax resident? | Uncertain -- has filed as resident but claims transition | UNCERTAIN | DT-01-002 |
| 2 | DT-01-002 | Does client meet 183-day test? | 182 days -- **ONE DAY BELOW THRESHOLD** | NO (barely) | DT-01-003 |
| 3 | DT-01-003 | Does client meet weighted 3-year test? | See calculation below | [CALCULATE] | DT-01-004 |
| 4 | DT-01-004 | Is center of life in Israel? | Ambiguous -- room at parents', Israeli bank, health insurance | DISPUTED | **NEEDS-REVIEW** |

**Weighted 3-Year Calculation:**

```
Weighted = 182 + (100 / 3) + (160 / 6)
         = 182 + 33.3 + 26.7
         = 242.0
```

- First condition: 182 >= 30 -- MET.
- Second condition: 242.0 < 425 -- NOT MET.
- **Weighted test: NOT triggered.**

**Expected Terminal:** `NEEDS-REVIEW`

**Rationale:** Although neither day-count test is technically met, the 182-day figure is on a razor's edge. The center-of-life analysis is genuinely ambiguous: Eitan has no family ties, but maintains a room at his parents' apartment, uses Israeli health insurance, holds assets on an Israeli crypto exchange, and has filed as a resident in prior years. Expert judgment is required.

<!-- EXPERT INPUT REQUIRED: The critical question is whether 182 days triggers a review even though it's below 183. In practice, the ITA may challenge the day count itself -- disputing whether all partial days were correctly excluded. A 1-day margin provides essentially zero safety buffer. -->

### 3.2 Day Count Controversy -- Partial Days

**Issue:** Israeli law counts "any part of a day" as a full day for the 183-day test. This means:

- Day of departure: If Eitan's flight departs Israel at 2:00 AM, does that calendar date count as a day in Israel?
- Day of arrival: If Eitan lands at 11:55 PM, does that calendar date count?
- Transit: If Eitan transits through Ben Gurion without entering Israel (airside only), does that count?

With only a 1-day margin, a single disputed day changes the outcome.

**Test data for day-count controversy:**

| Date | Event | Israel Day? | Disputed? |
|------|-------|------------|-----------|
| Mar 15 | Flight departs TLV at 1:30 AM | Eitan counted as NO (departed before meaningful presence) | YES -- ITA may count any calendar day with presence |
| Jun 22 | Arrived TLV at 11:50 PM from Larnaca | Eitan counted as YES (1 day) | Borderline -- arrived very late |
| Sep 8 | Transited through TLV airside (connection to Lisbon) | Eitan counted as NO | YES -- unclear if airside transit counts |
| Nov 30 | One-day business meeting in TLV; arrived morning, departed evening | Eitan counted as YES (1 day) | Not disputed |

If ANY one of the disputed days is reclassified, Eitan's count becomes 183 and the presumption triggers.

<!-- EXPERT INPUT REQUIRED: Confirm the ITA's current practice on partial-day counting. Is there published guidance or administrative ruling on: (a) departure day counting, (b) arrival late at night, (c) airside transit? This directly determines whether 182 is truly safe. -->

### 3.3 DT-04: Cyprus Company Substance Assessment

| Step | Node ID | Expected Branch | Notes |
|------|---------|-----------------|-------|
| 1 | DT-04-001 | Company exists | Registered 14 months ago |
| 2 | DT-04-002 | Physical office? | NO -- virtual office only |
| 3 | DT-04-003 | Employees? | NO -- zero employees |
| 4 | DT-04-004 | Board meetings in Cyprus? | NO -- no formal meetings |
| 5 | DT-04-007 | Substance assessment | **FAIL -- insufficient substance** |

**Expected Terminal for DT-04:** `FAIL` (substance requirements not met)

Eitan's Cyprus company lacks basic substance: no physical office, no employees, no formal board meetings. It is essentially a shell company with a virtual address. This creates significant risk of the company being treated as: (a) a sham by Cyprus authorities, (b) effectively managed from Israel (wherever Eitan sits) by the ITA.

---

## 4. Expected Risk Scores

### 4.1 Individual Risk Indicators

| Risk ID | Name | Triggered? | Severity | Rationale |
|---------|------|-----------|----------|-----------|
| RC-01-001 | Day count -- borderline | YES | 5 (Critical) | 182 days = 1 day below threshold. Effectively no safety margin. Any ITA challenge to the count flips the result. |
| RC-01-003 | Center of life -- ambiguous | YES | 3 (Moderate) | No family; but parents' apartment room, Israeli bank, health insurance, crypto exchange. |
| RC-01-006 | Israeli bank accounts | YES | 2 (Low) | One account plus crypto exchange account. |
| RC-01-010 | Health insurance active | YES | 2 (Low) | Clalit active. |
| RC-02-001 | CRS -- crypto exchange | YES | 4 (High) | Bits of Gold (Israeli exchange) may report to ITA. $800K on exchange plus EUR 230K in Cyprus bank will be reported via CRS. Cross-referencing these reports with Eitan's claimed non-residency creates inconsistency risk. |
| RC-02-004 | CFC risk | YES | 3 (Moderate) | If Eitan is deemed an Israeli resident (even for part of the year), the Cyprus company could be classified as a CFC. EUR 150K revenue primarily from services = passive income risk is low, but management and control analysis applies. |
| RC-02-009 | Cryptocurrency reporting | YES | 4 (High) | $2M in crypto with $1.6M unrealized gain. Israeli reporting requirements for cryptocurrency are evolving. ITA Circular 2018/5 treats crypto as "assets" subject to capital gains. Non-custodial wallet holdings ($1.2M) are difficult to trace but still have reporting obligations if Eitan is a resident. |
| RC-03-001 | Cyprus office -- no physical presence | YES | 5 (Critical) | Virtual office only. No genuine workspace. |
| RC-03-002 | Cyprus employees -- none | YES | 5 (Critical) | Zero employees in a company claiming to be Cyprus-based. |
| RC-03-003 | Cyprus clients -- no local market | YES | 3 (Moderate) | 0% Cyprus clients. All revenue from US/EU/Israel. Not inherently disqualifying but weakens substance. |
| RC-03-004 | Board meetings -- not held in Cyprus | YES | 4 (High) | No formal board meetings at all. Key decisions presumably made wherever Eitan happens to be. |
| RC-03-005 | Local service providers | YES | 2 (Low) | Has local accountant, but no other local engagement. |
| RC-03-006 | Decision-making location | YES | 5 (Critical) | Eitan is sole director, spends 182 days in Israel. A majority of company decisions are arguably made from Israel. |

### 4.2 Category Aggregation

| Category | Highest Severity | Triggered Count | Category Score | Weight |
|----------|-----------------|-----------------|----------------|--------|
| Tax (RC-01) | 5 | 4 | [PLACEHOLDER] | 0.35 |
| Legal & Compliance (RC-02) | 4 | 3 | [PLACEHOLDER] | 0.30 |
| Structural (RC-03) | 5 | 6 | [PLACEHOLDER] | 0.20 |
| Financial Exposure (RC-04) | -- | 0 | [PLACEHOLDER] | 0.15 |

### 4.3 Expected Overall Risk Tier

**Expected Tier: RED (Critical)**

Rationale: The combination of borderline day count (RC-01-001 at Critical) and complete absence of Cyprus company substance (RC-03-001, RC-03-002, RC-03-006 all at Critical) creates extreme risk. The ITA has strong grounds to: (a) dispute the day count and claim residency, (b) recharacterize the Cyprus company as Israeli-managed, and (c) assert that all company income is Israeli-source. The advisory recommendation should be to EITHER dramatically increase Israel-days margin (target < 120 days) and build real substance, OR abandon the Cyprus structure.

---

## 5. Expected Financial Outputs

### 5.1 Cryptocurrency Tax Exposure (FA-04)

| Item | Value | Notes |
|------|-------|-------|
| Total crypto holdings | $2,000,000 | BTC + ETH |
| Acquisition cost | $400,000 | Purchased 2020--2023 |
| Unrealized gain | $1,600,000 | |
| If Israeli resident: capital gains tax on disposal | $400,000 (25% x $1.6M) | Standard capital gains rate |
| If non-resident: Israeli tax on disposal | $0 (crypto not Israeli-situs) | [PLACEHOLDER -- confirm crypto situs rules] |
| Exit tax if severance achieved | ~$400,000 on deemed liquidation | Based on FMV at severance date |

<!-- EXPERT INPUT REQUIRED: The tax situs of cryptocurrency is unsettled in Israeli law. ITA Circular 2018/5 does not explicitly address the situs question. If crypto is held on an Israeli exchange (Bits of Gold), is it Israeli-situs? If in a non-custodial wallet, is it situs-less? This determination directly affects whether Israel can tax gains post-severance. -->

### 5.2 Cyprus Company Tax Position (FA-01)

| Item | Value | Notes |
|------|-------|-------|
| Company revenue | EUR 150,000 | |
| Eitan's salary | EUR 36,000 | |
| Operating costs (virtual office, accountant, misc) | EUR 8,000 | |
| Taxable profit | EUR 106,000 | |
| Cyprus corporate tax (12.5%) | EUR 13,250 | |
| **Effective tax on total revenue** | **~8.8%** | |

**But if company is recharacterized as Israeli-managed:**

| Item | Value | Notes |
|------|-------|-------|
| Company income taxable in Israel | EUR 150,000 | Full revenue |
| Israeli corporate tax rate | 23% | |
| Israeli corporate tax | EUR 34,500 | |
| Additional tax vs. Cyprus-only | EUR 21,250 | |
| Personal income tax implications | [PLACEHOLDER] | If Eitan is also deemed resident, double taxation |

### 5.3 Cost to Fix Substance Issues (FA-06)

| Item | Monthly Cost (EUR) | Annual Cost (EUR) | Notes |
|------|-------------------|-------------------|-------|
| Physical office (small, Larnaca) | 500 | 6,000 | Minimum viable office |
| Part-time admin employee | 1,200 | 14,400 | Required for substance |
| Local director services (nominee or co-director) | 300 | 3,600 | [PLACEHOLDER -- expert to confirm if this helps substance] |
| Quarterly board meetings (documented) | 200 | 800 | Travel + documentation costs |
| **Total annual substance investment** | | **~24,800** | |
| **As % of revenue** | | **~16.5%** | Significant for a solo developer |

---

## 6. Validation Criteria

| # | Criterion | Expected Result | Pass Condition |
|---|-----------|-----------------|----------------|
| 1 | DT-01 terminal | NEEDS-REVIEW | System correctly identifies borderline case |
| 2 | DT-01-002 evaluation | 182 < 183 = NO (but flagged) | Day count correctly calculated; boundary flag generated |
| 3 | Weighted formula | 242 < 425 = NOT MET | Correctly calculated |
| 4 | RC-01-001 severity | 5 (Critical) | 1-day margin generates maximum severity |
| 5 | DT-04-007 substance | FAIL | Cyprus company fails substance test |
| 6 | RC-03-001, RC-03-002, RC-03-006 | All triggered, severity 5 | All substance indicators fire at Critical |
| 7 | Overall risk tier | RED | Tier matches expected |
| 8 | Crypto reporting flag | Yes | System identifies crypto reporting obligations |
| 9 | Day count controversy alert | Yes | System warns about partial-day counting disputes |
| 10 | Substance remediation advisory | Yes | System generates specific recommendations to fix substance |

---

## 7. Edge Cases

### 7.1 One Disputed Day Flips the Result

**Issue:** If the ITA disputes a single partial day (e.g., the March 15 departure at 1:30 AM), Eitan's count becomes 183 and the rebuttable presumption triggers.

**Test:** Set `DR-03-001` to 183. Verify: (a) DT-01-002 flips to YES, (b) DT-01-004 center-of-life becomes decisive, (c) risk tier remains RED or increases.

### 7.2 Crypto Exchange Reports Residency Inconsistency

**Issue:** Bits of Gold (Israeli exchange) registered Eitan as an Israeli resident when he opened the account. CRS reporting from Cyprus bank shows a different residency claim. The inconsistency between the two reports could trigger an ITA cross-reference investigation.

**Risk:** Inconsistent self-certification across financial institutions is a compliance red flag under CRS. Eitan may need to update his CRS self-certification on the Israeli exchange -- but declaring non-residency to an Israeli exchange while spending 182 days in Israel is itself risky.

**Test:** Verify the system identifies cross-institution CRS inconsistency risk and generates an advisory to harmonize self-certifications.

### 7.3 Portugal NHR / Digital Nomad Visa Complications

**Issue:** Eitan spends 65 days in Portugal. Portugal's NHR (Non-Habitual Resident) regime or digital nomad visa could create a third jurisdiction claiming taxing rights. Three-way residency disputes are exponentially more complex.

**Risk:** If both Israel and Portugal claim residency, the Israel-Portugal tax treaty may apply simultaneously with the Israel-Cyprus treaty. The system should flag multi-jurisdiction exposure.

**Test:** Set `DR-03-015` (days_in_portugal) to 90 (closer to triggering Portuguese obligations). Verify additional risk flags are generated for multi-jurisdiction exposure.

### 7.4 Non-Custodial Wallet -- Enforcement Difficulty

**Issue:** $1.2M in a non-custodial crypto wallet is extremely difficult for any tax authority to discover or enforce against. Eitan could theoretically not report these holdings.

**Risk:** This is NOT an advisory recommendation -- the system must clearly state the legal obligation to report regardless of enforcement difficulty. However, it should also acknowledge the practical reality that enforcement against non-custodial wallets is limited.

**Test:** Verify the system flags all crypto holdings (including non-custodial) as reportable. The system should NOT differentiate reporting recommendations based on enforcement probability.

### 7.5 Parents' Apartment Room as "Permanent Home"

**Issue:** Under the 2025 reform (LTF-01-006), maintaining a "permanent home available for use" in Israel could trigger irrebuttable residency presumption. Is a room in parents' apartment a "permanent home"?

**Risk:** Case law is mixed. A dedicated room with personal belongings that is always available could be construed as a permanent home. Alternatively, a room in a family home with no formal lease may not meet the statutory definition.

**Test:** Set `DR-03-018` (room_in_parents_apartment) to YES. Verify the system generates a flag referencing LTF-01-006 and recommends expert analysis of whether this constitutes a "permanent home."

<!-- EXPERT INPUT REQUIRED: Is a room in a parent's apartment a "permanent home available for use" under the 2025 reform? Cite any relevant ITA guidance or case law. This is a common fact pattern for young digital nomads. -->

---

## 8. Notes for Expert Review

1. **182 vs. 183 -- is there actually a safe margin?** -- In practice, practitioners recommend a margin of at least 30--60 days below 183 to account for disputed partial days and ITA challenges. A 1-day margin is not considered safe by any professional standard. Expert should state this clearly.

2. **Crypto situs determination** -- This is an emerging area of Israeli tax law. Expert must provide current ITA position on: (a) crypto on Israeli exchange, (b) crypto on foreign exchange, (c) crypto in non-custodial wallet. Each may have different situs treatment.

3. **Substance for solo-developer companies** -- Many Israeli developers use Cyprus companies without substance. Expert should describe: (a) ITA's current enforcement posture on this, (b) minimum viable substance requirements, (c) cost-benefit analysis of substance investment vs. risk.

4. **60-day rule eligibility** -- Eitan spends 80 days in Cyprus. He may qualify for Cyprus tax residency under the 60-day rule (not 183 days in any other single country, 60+ days in Cyprus, Cyprus-based business). But the Israel day count of 182 means he IS spending 183+ days in a single other country -- disqualifying him from the 60-day rule?

<!-- EXPERT INPUT REQUIRED: Confirm whether 182 days in Israel disqualifies Eitan from the Cyprus 60-day rule. The rule requires not spending 183+ days in any single other country. At 182, he is technically eligible, but the margin is again razor-thin. -->

5. **This is a "warning" scenario** -- The system should generate a strong advisory that Eitan's current approach is unsustainable. The combination of borderline day counts, zero substance, and significant crypto holdings creates a high-probability audit trigger. The recommendation should be to either commit to a real Cyprus relocation (reduce Israel days to <120, add substance) or restructure entirely.

<!-- EXPERT INPUT REQUIRED: Review all calculations and risk assessments. This scenario tests the system's ability to handle boundary conditions and should produce clear, actionable warnings rather than ambiguous outputs. -->
