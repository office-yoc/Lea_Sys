---
id: RC-06
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies:
  - RC-05
  - RC-01
  - RC-02
  - RC-03
  - RC-04
  - DT-01
  - DT-02
  - DT-03
  - DT-04
---

# 06 — Risk Threshold Matrix

## Purpose

This file defines the **risk thresholds that trigger specific actions, escalation paths, and review frequencies** based on the overall risk score calculated by the scoring methodology in `05-scoring-methodology.md`. It also defines category-specific thresholds that may trigger additional actions even when the overall score is below the general threshold.

---

## Overall Risk Threshold Table

| Overall Score Range | Classification | Color | Required Actions | Escalation | Review Frequency |
|---------------------|----------------|-------|------------------|------------|------------------|
| 0 – 25 | Low Risk | Green | Proceed with standard advisory process; document risk assessment in client file; standard mitigation actions for any triggered indicators | None — handled by assigned advisor | Quarterly review or at next client milestone |
| 26 – 50 | Moderate Risk | Yellow | Enhanced monitoring; additional documentation of risk factors; implement all recommended mitigations from triggered indicators; prepare risk summary for client communication | Notify senior advisor; flag in case management system | Monthly review; re-assess at each process milestone |
| 51 – 75 | High Risk | Orange | Senior expert review mandatory before proceeding; formal mitigation plan required with timeline and accountabilities; client must acknowledge elevated risk areas; consider phased implementation approach | Senior expert must sign off on mitigation plan; escalate to practice lead if multiple Severity 5 indicators | Bi-weekly review; dedicated risk monitoring until score drops below 50 |
| 76 – 100 | Critical Risk | Red | **HOLD PROCESS** — do not advance to next phase until risks are addressed; full advisory team review required; comprehensive risk mitigation plan with alternative scenarios; formal client advisory letter outlining risks and limitations; consider whether engagement should proceed | Immediate escalation to practice lead and managing partner; legal counsel review of engagement terms; consider external specialist consultation | Weekly review; continuous monitoring of critical indicators; re-score after each mitigation action |

<!-- EXPERT INPUT REQUIRED: Validate threshold boundaries and required actions. Key questions:
1. Is the Green/Yellow boundary at 25 appropriate, or should standard process allow up to 30?
2. Should the Red tier automatically trigger a pause, or should the practice lead have discretion to continue with documented acceptance of risk?
3. Are the review frequencies practical given typical advisory workload?
4. Should there be a "Black" tier (score > 90) that mandates engagement termination or referral to specialist counsel?
-->

---

## Detailed Action Matrix by Tier

### Green Tier (0–25): Standard Process

| Action Area | Requirement | Responsible | Documentation |
|-------------|-------------|-------------|---------------|
| Risk Assessment | Complete standard risk assessment | Assigned advisor | Risk score recorded in client file |
| Client Communication | No special risk communication required | Assigned advisor | Standard engagement letter |
| Mitigation | Address any triggered indicators per standard mitigation | Assigned advisor | Mitigation actions logged |
| Process | Proceed through all decision tree paths normally | Assigned advisor | Standard workflow |
| Review | Quarterly or at milestone | Assigned advisor | Review date in calendar |

### Yellow Tier (26–50): Enhanced Monitoring

| Action Area | Requirement | Responsible | Documentation |
|-------------|-------------|-------------|---------------|
| Risk Assessment | Enhanced risk assessment with detailed trigger analysis | Assigned advisor + senior reviewer | Detailed risk report in client file |
| Client Communication | Inform client of elevated risk areas; provide written risk summary | Assigned advisor | Risk summary letter (template: [PLACEHOLDER]) |
| Mitigation | Implement all recommended mitigations; create mitigation tracking sheet | Assigned advisor | Mitigation plan with target dates |
| Process | Proceed with caution; additional checkpoints at decision tree branch points | Assigned advisor | Enhanced workflow with checkpoints |
| Review | Monthly; re-assess at each milestone | Senior advisor | Monthly review notes |
| Additional | Prepare contingency plan for key risk scenarios | Assigned advisor | Contingency plan document |

### Orange Tier (51–75): Senior Expert Review

| Action Area | Requirement | Responsible | Documentation |
|-------------|-------------|-------------|---------------|
| Risk Assessment | Comprehensive risk assessment with root cause analysis | Senior expert panel (min. 2 experts) | Full risk analysis report |
| Client Communication | Formal client meeting to discuss risks; written risk advisory letter | Senior advisor + practice lead | Signed risk advisory letter (template: [PLACEHOLDER]) |
| Mitigation | Formal mitigation plan with timeline, accountabilities, and success criteria | Senior expert | Approved mitigation plan |
| Process | Phased approach; each phase requires risk re-assessment before proceeding | Senior expert | Phase gates documented |
| Review | Bi-weekly until score < 50 | Senior expert | Bi-weekly review notes |
| Additional | Consider external specialist for highest-severity indicators | Practice lead | Specialist engagement if needed |
| Decision Trees | Decision tree routing may require alternative paths (see below) | Senior expert | DT path documentation |

### Red Tier (76–100): Process Hold

| Action Area | Requirement | Responsible | Documentation |
|-------------|-------------|-------------|---------------|
| Risk Assessment | Full-scope risk assessment including legal opinion | Full advisory team + legal counsel | Comprehensive risk opinion |
| Client Communication | Formal client advisory letter; in-person meeting mandatory; client must provide written acknowledgment | Practice lead + managing partner | Signed advisory letter + client acknowledgment |
| Mitigation | Comprehensive mitigation plan with alternative scenarios; cost-benefit analysis of proceeding vs. pausing/terminating | Full advisory team | Board-level mitigation plan |
| Process | **HOLD** — no advancement until risk is addressed to at least Orange tier or explicit risk acceptance obtained | Managing partner | Hold notice in case management |
| Review | Weekly until tier improves; continuous monitoring of Severity 5 indicators | Practice lead | Weekly status reports |
| Additional | Evaluate whether engagement can continue; assess professional liability exposure; consider referral to specialist firm | Managing partner | Engagement continuation decision |
| Decision Trees | Routing suspended; all DT paths on hold | Practice lead | Suspension notice |

<!-- EXPERT INPUT REQUIRED: Validate the action matrix against actual advisory practice. In particular:
1. Is the "process hold" in Red tier too aggressive? Some practitioners prefer "proceed with extreme caution" over a full hold.
2. Should the client acknowledgment in Red tier be a formal legal document (acknowledgment of risk + waiver of certain liability)?
3. Are the responsible parties correctly assigned? Adjust based on actual organizational structure.
-->

---

## Category-Specific Thresholds

In addition to the overall score, individual categories have their own thresholds that may trigger actions independent of the overall tier:

### Tax Risk Category Thresholds

| Category Score | Trigger | Action |
|----------------|---------|--------|
| Tax_Score >= 5.0 | High tax risk | Mandatory Israeli tax attorney review of all tax-related indicators; cannot proceed past exit tax assessment (`DT-03`) without sign-off |
| Tax_Score >= 6.5 | Critical tax risk | Full tax position review; consider requesting advance ruling from ITA; client advisory on tax risk |
| RC-01-001 triggered (any severity) | Day count breach | Immediate day-count monitoring protocol activated; travel advisory issued |
| RC-01-002 triggered (any severity) | Weighted formula breach | Same as day count breach; additionally assess prior-year amendment feasibility |

### Legal & Compliance Category Thresholds

| Category Score | Trigger | Action |
|----------------|---------|--------|
| Legal_Score >= 4.0 | High compliance risk | Compliance specialist review; assess all reporting obligations for completeness |
| Legal_Score >= 6.0 | Critical compliance risk | Legal counsel review; assess criminal exposure; consider voluntary disclosure |
| RC-02-002 triggered | FATCA non-compliance | US tax specialist engagement mandatory regardless of overall tier |
| RC-02-003 triggered | Unreported assets | Israeli tax attorney engagement mandatory; voluntary disclosure assessment |

### Structural Risk Category Thresholds

| Category Score | Trigger | Action |
|----------------|---------|--------|
| Structural_Score >= 4.0 | Substance deficiency | Cyprus corporate specialist review; substance remediation plan required before company activation |
| Structural_Score >= 6.0 | Critical substance failure | Full structural review; consider alternative entity structures; Cyprus counsel opinion required |
| RC-03-004 triggered | IP without substance | IP Box application suspended; DEMPE analysis commissioned |

### Financial Exposure Category Thresholds

| Category Score | Trigger | Action |
|----------------|---------|--------|
| Financial_Score >= 4.0 | Significant financial exposure | Financial advisor review; cash flow stress test under adverse scenario |
| Financial_Score >= 6.0 | Critical financial exposure | Full financial feasibility review; alternative funding scenarios; consider postponing relocation |
| RC-04-001 triggered (severity 5) | Exit tax exceeds liquid assets | Mandatory funding plan before exit tax assessment can be finalized |

<!-- EXPERT INPUT REQUIRED: Validate category-specific thresholds. Questions:
1. Should category-specific thresholds override the overall tier (e.g., a Green overall with a critical tax score — which controls)?
2. Are the category score levels (4.0, 6.0, 6.5) appropriately set?
3. Should there be additional indicator-specific triggers beyond those listed?
-->

---

## Interaction with Decision Tree Terminals

Risk thresholds affect routing at decision tree terminal nodes:

| Decision Tree | Terminal Node | Risk Threshold | Effect |
|---------------|--------------|----------------|--------|
| `DT-01` Residency Severance Eligibility | Eligible | Overall >= Orange | Add conditional flag: "Eligible subject to risk mitigation" |
| `DT-01` Residency Severance Eligibility | Ineligible | Any | Risk score recorded but does not change ineligibility determination |
| `DT-02` Residency Severance Process | Process Start | Overall >= Red | Process start blocked until risk tier improves |
| `DT-03` Exit Tax Assessment | Assessment Complete | RC-04-001 triggered | Assessment flagged: "Funding verification required" |
| `DT-04` Cyprus Company Establishment | Company Formation | Structural_Score >= 4.0 | Formation proceeds but substance remediation plan attached |
| `DT-04` Cyprus Company Establishment | Company Activation | Structural_Score >= 6.0 | Activation blocked until substance remediation confirmed |
| `DT-05` Cyprus Bank Account | Account Opening | Overall >= Orange | Enhanced due diligence documentation prepared |
| `DT-06` Mortgage Financing | Application | RC-04-002 triggered | Alternative funding plan required as backup |
| `DT-07` Retroactive Rectification | Rectification Plan | Any triggered compliance indicators | Compliance remediation items added to rectification plan |

[PLACEHOLDER — Complete decision tree terminal mapping after DT section files are finalized. Each DT terminal should have defined risk-gate behavior.]

---

## Score Transition Rules

When a client's risk score changes (due to mitigation actions, new information, or passage of time), the following transition rules apply:

| Transition | Rule | Documentation |
|------------|------|---------------|
| Any tier → Lower tier | Automatic upon re-scoring; no approval required to de-escalate | Updated risk score with rationale |
| Green → Yellow | Notify assigned advisor; update case management system | Transition notification |
| Yellow → Orange | Notify senior advisor; schedule expert review within 5 business days | Escalation notice |
| Orange → Red | Notify practice lead immediately; process hold takes effect within 1 business day | Urgent escalation; hold notice |
| Red → Orange | Requires practice lead sign-off on mitigation progress | De-escalation approval document |
| Red → Green/Yellow | Requires managing partner sign-off; full risk report documenting how critical risks were resolved | De-escalation report |

<!-- EXPERT INPUT REQUIRED: Are the transition rules and timelines practical? Consider:
1. Should de-escalation from Red require a "cooling off" period at Orange before going to Yellow/Green?
2. What is the appropriate timeline for scheduling expert review when escalating to Orange?
3. Should there be automatic re-scoring triggers (e.g., re-score every time a data field changes)?
-->

---

## Reporting Templates

Risk threshold classifications generate the following reports:

| Report | Audience | Generated When | Content |
|--------|----------|----------------|---------|
| Risk Score Summary | Internal (advisor) | Every scoring event | Overall score, category scores, triggered indicators, tier classification |
| Client Risk Advisory | Client | Yellow tier and above | Plain-language risk summary, recommended actions, professional disclaimer |
| Escalation Notice | Senior advisor / practice lead | Orange/Red transition | Detailed risk analysis, recommended immediate actions, escalation rationale |
| Mitigation Plan | Internal + client | Orange tier and above | Indicator-level mitigation actions, timelines, accountabilities, success criteria |
| Engagement Review | Managing partner | Red tier | Full engagement risk assessment, continuation recommendation, liability analysis |

[PLACEHOLDER — Create report templates in a separate templates directory or embed templates here after expert review]

---

## Calibration and Validation

The threshold matrix should be validated against the scenarios in `06-validation-scenarios/`:

| Validation Scenario | Expected Tier | File |
|---------------------|---------------|------|
| VS-01: Tech Entrepreneur Exit | Yellow (26–50) | `06-validation-scenarios/01-tech-entrepreneur-exit.md` |
| VS-02: Real Estate Investor | Orange (51–75) | `06-validation-scenarios/02-real-estate-investor.md` |
| VS-03: Dual Family Relocation | Yellow (26–50) | `06-validation-scenarios/03-dual-family-relocation.md` |
| VS-04: Retroactive Rectification | Red (76–100) | `06-validation-scenarios/04-retroactive-rectification.md` |
| VS-05: Corporate Executive Exit | Yellow (26–50) | `06-validation-scenarios/05-corporate-executive-exit.md` |
| VS-06: Edge Case 183-Day Boundary | Orange (51–75) | `06-validation-scenarios/06-edge-case-183-day-boundary.md` |
| VS-07: Cyprus Substance Defense | Orange (51–75) | `06-validation-scenarios/07-cyprus-substance-defense.md` |

<!-- EXPERT INPUT REQUIRED: The expected tiers above are preliminary estimates. After the validation scenarios are populated with complete client data, the scoring methodology should be run against each scenario. If any scenario produces a counter-intuitive tier, either the scenario data, the scoring methodology, or the threshold boundaries should be adjusted. -->

[PLACEHOLDER — Record actual scored results after validation scenarios are populated]

---

## Professional Disclaimer

> **IMPORTANT:** The risk threshold matrix and associated action protocols are designed to support — not replace — professional advisory judgment. Risk tiers are indicative classifications based on a simplified scoring model. Advisors must exercise professional judgment in all cases, particularly at tier boundaries where small data changes may shift the classification. The required actions defined here are minimum standards; advisors may impose additional requirements based on their professional assessment. Client communications regarding risk must include appropriate professional disclaimer language. See `Professional_Disclaimer.md` for complete disclaimer language.

[PLACEHOLDER — Confirm threshold matrix and action protocols with practice lead and compliance officer]
