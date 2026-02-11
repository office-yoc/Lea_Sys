---
id: LTF-02
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies:
  - LTF-01
---

# Exit Tax -- Section 100A (Deemed Liquidation)

## Overview

Section 100A of the Israeli Tax Ordinance imposes an **exit tax (מס יציאה)** on individuals who cease to be Israeli tax residents. The mechanism is a **deemed liquidation (מכירה רעיונית / mechira ra'ayonit)** -- the individual is treated as having sold all appreciating assets at fair market value (FMV) on the date residency ceases, even though no actual sale takes place.

The exit tax is designed to preserve Israel's right to tax gains that accrued during the period of Israeli residency, while allowing a deferral mechanism (10-year installment plan) to avoid forced liquidation of illiquid assets.

---

## 1. Who It Applies To

### 1.1 General Application

Section 100A applies to **any individual** who ceases Israeli tax residency and holds assets with unrealized appreciation. There is no minimum asset threshold for the section to apply in principle.

### 1.2 Substantial Shareholders (בעל מניות מהותי)

Special attention applies to individuals holding **10% or more** of the rights in a body of persons (company, partnership):

- Enhanced reporting requirements
- Potential withholding obligations on the entity
- Interaction with Section 100A1 (anti-avoidance)

<!-- EXPERT INPUT REQUIRED: Confirm whether the 2025 reform introduced a lower threshold (e.g., 5%) for substantial shareholder classification in the exit tax context. -->

### 1.3 HNWI Thresholds

While Section 100A technically applies to all departing residents, the ITA in practice focuses enforcement on:

- Individuals with total asset FMV exceeding **NIS 5,000,000** [PLACEHOLDER -- confirm current enforcement threshold]
- Holders of interests in **Controlled Foreign Corporations (CFCs)**
- Individuals with **outstanding stock options** (Section 102 plans)

---

## 2. Deemed Liquidation Concept (מכירה רעיונית)

On the **residency cessation date (יום הפסקת התושבות)**:

1. The individual is **deemed to have sold** all assets at their **Fair Market Value (FMV / שווי שוק)**.
2. The deemed sale generates a **capital gain** equal to: `FMV at exit date - Adjusted Cost Basis`.
3. Tax is assessed on this gain at applicable capital gains rates.
4. **No actual sale occurs** -- the individual retains ownership of the assets.

### 2.1 Residency Cessation Date

The cessation date is determined by the Center of Life Test (see `01-israeli-tax-residency.md`). In practice, the ITA may challenge the claimed cessation date.

<!-- EXPERT INPUT REQUIRED: Confirm whether the ITA accepts the date the individual physically departed Israel, the date they became resident in another jurisdiction, or the date they filed a non-residency declaration. Case law suggests inconsistency. -->

---

## 3. Calculation Methodology

### 3.1 Basic Formula

```
Exit Tax Liability = (FMV at Exit Date - Adjusted Cost Basis) x Applicable Tax Rate
```

### 3.2 Applicable Tax Rates

| Asset Type | Tax Rate | Legal Source |
|-----------|----------|-------------|
| Listed securities | 25% | Section 91(b) |
| Listed securities (substantial shareholder) | 30% | Section 91(b) |
| Unlisted shares | 25% / 30% | Section 91(b) |
| Real estate (not primary residence) | 25% | Section 48A (Land Tax) |
| Stock options (Section 102 trustee track) | 25% | Section 102(b)(3) |
| Stock options (Section 102 non-trustee / Section 3(i)) | Marginal rate up to 50% | Section 121B |
| Other capital assets | 25% / marginal | Depends on classification |

<!-- EXPERT INPUT REQUIRED: Verify all rates against current (2026) tax year brackets. Confirm surcharge (מס יסף) applicability -- currently 3% on income above NIS [PLACEHOLDER] threshold. -->

### 3.3 Cost Basis Adjustments

- **Inflation adjustment (ניכוי אינפלציוני):** Applicable for assets held since before January 1, 2003 (transition to real-gain taxation).
- **Foreign currency adjustments:** For assets denominated in foreign currency, cost basis is translated at acquisition-date exchange rate.
- **Stock option basis:** For Section 102 options, cost basis may be zero or the exercise price, depending on the track.

---

## 4. Ten-Year Installment Payment Option

Section 100A provides an alternative to immediate payment:

### 4.1 Election

The individual may **elect** to defer payment by spreading the tax liability over **10 equal annual installments**, beginning in the year of departure.

### 4.2 Conditions

- Interest accrues on deferred installments at the **Section 3(i) rate** [PLACEHOLDER -- confirm current rate].
- The individual must provide **adequate security (ערובה)** -- typically a bank guarantee or lien on assets.
- Annual reporting obligations continue throughout the installment period.
- If the asset is **actually sold** during the installment period, remaining tax becomes immediately due.

### 4.3 Credit for Foreign Tax

If the individual pays capital gains tax in the new country of residence upon actual sale, a **credit** may be available against the remaining Israeli installments, subject to treaty provisions (see `05-tax-treaties-israel-cyprus.md`).

<!-- EXPERT INPUT REQUIRED: Confirm mechanics of foreign tax credit interaction with installment payments. Practitioners report that the ITA sometimes disputes credit timing. -->

---

## 5. Asset Categories and Valuation Rules

| Asset Category | Valuation Method | Key Considerations |
|---------------|-----------------|-------------------|
| Publicly traded securities | Closing market price on exit date | Use primary exchange; adjust for currency |
| Private company shares | Independent valuation (DCF, comparable transactions) | ITA may challenge valuations |
| Real estate (non-Israeli) | Appraisal by licensed valuator | Israeli real estate subject to Land Tax, not 100A |
| Stock options (vested) | Black-Scholes or intrinsic value | Depends on whether listed or private |
| Stock options (unvested) | [PLACEHOLDER] | <!-- EXPERT INPUT REQUIRED: Confirm treatment of unvested options -- are they included in deemed liquidation? --> |
| Partnership interests | Pro-rata share of underlying asset FMV | Complex; requires partnership-level valuation |
| Cryptocurrency | Exchange price on exit date | <!-- EXPERT INPUT REQUIRED: Confirm ITA classification and accepted exchanges for valuation --> |
| Intellectual property | Independent valuation | Rarely applicable to individuals; more common in corporate migration |

---

## 6. Timing Considerations

| Event | Timing Rule | Notes |
|-------|------------|-------|
| Notification to ITA | Within 30 days of cessation date [PLACEHOLDER -- confirm] | Form [PLACEHOLDER] |
| Valuation reports | Filed with annual return for departure year | Must support FMV claims |
| First installment payment | Due with annual return for departure year | If installment election made |
| Subsequent installments | Annually on tax return filing date | 10-year period |
| Actual sale during installment | Remaining balance due within 30 days | Accelerated payment |

---

## 7. Exemptions and Special Cases

- **Israeli real estate:** Excluded from Section 100A (taxed under Land Tax Law / חוק מיסוי מקרקעין).
- **Pension funds and provident funds (קופות גמל):** Generally exempt [PLACEHOLDER -- confirm scope of exemption].
- **Assets acquired after departure:** Not subject to exit tax.
- **De minimis:** [PLACEHOLDER -- confirm whether a de minimis threshold exists for small portfolios].

---

## 8. Rule Table

| Rule ID | Rule Name | Legal Source | Applies To | Calculation | Exemptions | Data Fields | Notes |
|---------|-----------|-------------|-----------|-------------|------------|------------|-------|
| LTF-02-001 | Deemed liquidation on departure | Section 100A, Tax Ordinance | All departing residents with appreciated assets | FMV - Cost Basis | Israeli real estate, pension funds | DR-01-005 (departure date), DR-02-010 (asset list) | Core exit tax rule |
| LTF-02-002 | Substantial shareholder enhanced reporting | Section 100A + Section 68, Tax Ordinance | Holders of >= 10% in any entity | Same as LTF-02-001 | None | DR-02-011 (shareholding percentage) | 30% rate applies |
| LTF-02-003 | 10-year installment election | Section 100A(b), Tax Ordinance | All taxpayers subject to exit tax | Equal annual installments + interest | N/A | DR-08-001 (installment election), DR-08-002 (security type) | Must provide adequate security |
| LTF-02-004 | Accelerated payment on actual sale | Section 100A(c), Tax Ordinance | Taxpayers on installment plan who sell the asset | Remaining balance due immediately | N/A | DR-08-003 (sale date), DR-08-004 (sale proceeds) | Foreign tax credit may apply |
| LTF-02-005 | FMV valuation -- listed securities | Section 100A + Section 88, Tax Ordinance | Holders of listed securities | Closing price on exit date | N/A | DR-02-010 (holdings), DR-01-005 (exit date) | Use primary exchange |
| LTF-02-006 | FMV valuation -- private company | Section 100A + ITA guidelines | Holders of private company shares | Independent valuation (DCF, comparables) | N/A | DR-02-012 (valuation report) | ITA may challenge; retain documentation |
| LTF-02-007 | Stock option treatment (Section 102) | Section 100A + Section 102, Tax Ordinance | Employees with outstanding options | Depends on track (trustee vs. non-trustee) | N/A | DR-02-020 (option grants), DR-02-021 (vesting schedule) | <!-- EXPERT INPUT REQUIRED: Confirm unvested option treatment --> |
| LTF-02-008 | Foreign tax credit on deferred tax | Section 100A(d) + Section 199-210, Tax Ordinance | Taxpayers who pay foreign tax on actual sale | Credit against remaining Israeli liability | Limited to Israeli tax on same gain | DR-08-010 (foreign tax paid), DR-07-001 (treaty country) | Treaty interaction -- see LTF-05 |
| LTF-02-009 | Notification obligation | Section 100A(e), Tax Ordinance | All departing residents | N/A -- procedural | N/A | DR-06-001 (filing records) | 30-day deadline [PLACEHOLDER -- confirm] |
| LTF-02-010 | Surcharge on high-income exit gain | Section 121B, Tax Ordinance | Gains exceeding annual threshold | Additional 3% on gain above NIS [PLACEHOLDER] | N/A | DR-08-015 (total gain amount) | <!-- EXPERT INPUT REQUIRED: Confirm current surcharge threshold for 2026 tax year --> |

---

## 9. Key Interactions

- **Residency cessation date:** Determined under `01-israeli-tax-residency.md` (LTF-01-xxx rules).
- **Treaty relief:** Capital gains article and credit provisions under `05-tax-treaties-israel-cyprus.md` (LTF-05-xxx).
- **Cyprus corporate planning:** Holding structures may affect exit tax exposure. See `03-cyprus-corporate-framework.md`.
- **Reporting:** Exit tax filing obligations detailed in `06-reporting-obligations.md`.

---

## Open Items for Expert Review

- [ ] Confirm 2025 reform impact on substantial shareholder threshold (LTF-02-002)
- [ ] Validate treatment of unvested stock options (LTF-02-007)
- [ ] Confirm current surcharge threshold for 2026 (LTF-02-010)
- [ ] Verify installment interest rate and security requirements (LTF-02-003)
- [ ] Confirm notification deadline and form number (LTF-02-009)
- [ ] Clarify cryptocurrency valuation accepted by ITA (asset table)
- [ ] Confirm de minimis exemption existence and threshold
