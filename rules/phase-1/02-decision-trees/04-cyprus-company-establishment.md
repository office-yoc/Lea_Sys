---
id: DT-04
version: "1.0"
status: draft
last_updated: "2026-02-10"
assigned_expert: "[PLACEHOLDER]"
dependencies:
  - DT-02
  - DR-06
  - DR-08
  - LTF-03
---

# Decision Tree 04: Cyprus Company Establishment

## Purpose

Guides the process of **establishing a Cyprus company** as part of the client's post-exit corporate structure. Determines the appropriate entity type, assesses substance requirements, and identifies blockers that must be resolved before registration.

## Prerequisite

Client has reached DT-02-003 (Cyprus entity needed) or engagement scope includes Cyprus corporate structuring.

## Terminal States

| Terminal | Meaning | Next Step |
|----------|---------|-----------|
| `READY-TO-REGISTER` | All requirements met; company can be registered with the Cyprus Registrar of Companies | Proceed with registration; open bank account (DT-05) |
| `NEEDS-SUBSTANCE` | Entity type determined but economic substance requirements not yet met | Arrange substance elements before registration |
| `NEEDS-DIRECTORS` | Local Cyprus directors required but not yet identified/engaged | Engage director service provider or recruit local directors |
| `NEEDS-OFFICE` | Registered office and/or physical office space not yet arranged | Secure office space in Cyprus |

---

## Mermaid Diagram

<!-- EXPERT INPUT REQUIRED: Validate company type selection criteria against Cyprus Companies Law Cap.113. Confirm substance requirements per EU anti-avoidance directives. -->

```mermaid
graph TD
    DT04_001{{"DT-04-001<br/>Is company formation<br/>required?"}}
    DT04_002{{"DT-04-002<br/>What company type<br/>is appropriate?"}}
    DT04_003{{"DT-04-003<br/>Are local Cyprus<br/>directors needed?"}}
    DT04_004{{"DT-04-004<br/>Is registered office<br/>arranged?"}}
    DT04_005{{"DT-04-005<br/>IP Box<br/>eligibility?"}}
    DT04_006{{"DT-04-006<br/>VAT registration<br/>needed?"}}
    DT04_007{{"DT-04-007<br/>Substance requirements<br/>met?"}}

    A_LTD["Selected: Private<br/>Company Limited<br/>by Shares (Ltd)"]
    A_BRANCH["Selected: Branch<br/>of Foreign Company"]
    A_PARTNER["Selected: Limited<br/>Partnership"]
    A_IP["Action: Structure<br/>for IP Box regime"]

    T_READY([READY-TO-REGISTER])
    T_SUBSTANCE([NEEDS-SUBSTANCE])
    T_DIRECTORS([NEEDS-DIRECTORS])
    T_OFFICE([NEEDS-OFFICE])

    DT04_001 -->|"Yes"| DT04_002
    DT04_001 -->|"No - not needed"| T_READY

    DT04_002 -->|"Ltd (most common)"| A_LTD
    DT04_002 -->|"Branch"| A_BRANCH
    DT04_002 -->|"Partnership"| A_PARTNER

    A_LTD --> DT04_003
    A_BRANCH --> DT04_003
    A_PARTNER --> DT04_003

    DT04_003 -->|"Yes - local directors needed"| DT04_004
    DT04_003 -->|"No - client can serve"| DT04_004

    DT04_004 -->|"Yes - office arranged"| DT04_005
    DT04_004 -->|"No - office needed"| T_OFFICE

    DT04_005 -->|"Yes - eligible for IP Box"| A_IP
    DT04_005 -->|"No - standard regime"| DT04_006
    A_IP --> DT04_006

    DT04_006 -->|"Yes - VAT registration needed"| DT04_007
    DT04_006 -->|"No - below threshold"| DT04_007

    DT04_007 -->|"Yes - substance confirmed"| T_READY
    DT04_007 -->|"No - substance lacking"| T_SUBSTANCE
```

---

## Node Table

<!-- EXPERT INPUT REQUIRED: Confirm substance requirements checklist. Validate IP Box eligibility criteria against current Cyprus law. -->

| Node ID | Type | Question/Condition | Data Field | Yes Path | No Path | Risk Flag | Legal Source |
|---------|------|--------------------|------------|----------|---------|-----------|-------------|
| DT-04-001 | decision | Is a Cyprus company formation required for the client's post-exit structure? Based on engagement scope, income sources, and asset holding needs. | Engagement scope, DR-06-001 | DT-04-002 | READY-TO-REGISTER | -- | -- |
| DT-04-002 | decision | What entity type is appropriate? Private Company Limited by Shares (Ltd) is most common for Israeli clients. Branch may suit existing foreign companies. Limited Partnership for specific investment structures. | DR-06-002, DR-06-003, DR-06-009 | (type-specific path) | -- | LOW | LTF-03-001, LTF-03-002 |
| DT-04-003 | decision | Are local Cyprus directors needed for tax residency and substance? Cyprus tax residency of a company requires management and control in Cyprus, typically demonstrated by local directors making key decisions. | DR-08-002, DR-08-003 | DT-04-004 | DT-04-004 | HIGH | LTF-03-010, LTF-03-011 |
| DT-04-004 | decision | Is a registered office in Cyprus arranged? Required by law for all Cyprus companies. For substance purposes, a physical office (not just a registered address) may be needed. | DR-08-004 | DT-04-005 | NEEDS-OFFICE | MEDIUM | LTF-03-003 |
| DT-04-005 | decision | Is the company eligible for the Cyprus IP Box regime? Requires qualifying IP assets (patents, copyrighted software, etc.) and a nexus test showing R&D activity in Cyprus. Effective rate can be as low as 2.5%. | DR-06-009, DR-06-010 | Action: Structure for IP Box (then DT-04-006) | DT-04-006 | LOW | LTF-03-007, LTF-03-008 |
| DT-04-006 | decision | Is VAT registration required? Mandatory if taxable supplies in Cyprus exceed EUR 15,600 threshold. Also required for intra-EU B2B services. | DR-08-009, DR-05-001 | DT-04-007 | DT-04-007 | LOW | LTF-03-012 |
| DT-04-007 | decision | Are all economic substance requirements met? Checklist: (a) qualified employees or outsourced functions in Cyprus, (b) physical office space, (c) board meetings held in Cyprus, (d) strategic decisions made in Cyprus, (e) adequate operating expenditure in Cyprus. | DR-08-002, DR-08-003, DR-08-004, DR-08-005, DR-08-006 | READY-TO-REGISTER | NEEDS-SUBSTANCE | HIGH | LTF-03-010, LTF-03-011 |

### Terminal Nodes

| Terminal ID | Type | Classification | Description | Resolution Path |
|-------------|------|----------------|-------------|-----------------|
| READY-TO-REGISTER | terminal | Green | All prerequisites satisfied. Entity type selected, directors in place, office secured, substance confirmed. Company can be submitted to the Cyprus Registrar of Companies. | File registration; timeline ~5-10 business days |
| NEEDS-SUBSTANCE | terminal | Red | Company type and basic setup complete but economic substance requirements not met. Risk of the company being treated as Israeli-managed (and Israeli tax-resident) by the ITA. | Engage local staff/contractors, ensure board meets in Cyprus, document decision-making |
| NEEDS-DIRECTORS | terminal | Amber | Local Cyprus directors required for management-and-control substance but not yet engaged. | Engage a professional director service or recruit local individuals |
| NEEDS-OFFICE | terminal | Amber | No registered office or physical office arranged in Cyprus. Cannot proceed with registration. | Engage office space provider; virtual office may suffice for registration but not for substance |

---

## Company Type Selection Guide

<!-- EXPERT INPUT REQUIRED: Validate tax implications of each entity type -->

| Entity Type | Use Case | Min. Directors | Min. Shareholders | Tax Rate | Notes |
|-------------|----------|---------------|-------------------|----------|-------|
| Private Company Ltd | Most common; holding, trading, services | 1 | 1 | 12.5% corporate | [PLACEHOLDER -- confirm current rate] |
| Branch of Foreign Co. | Extension of existing Israeli/foreign entity | N/A (head office) | N/A | 12.5% on Cyprus-source | Less substance flexibility |
| Limited Partnership | Investment vehicles, fund structures | General partner | 2+ partners | Pass-through (depends) | [PLACEHOLDER -- confirm taxation] |

## Substance Requirements Checklist

<!-- EXPERT INPUT REQUIRED: Confirm minimum acceptable substance levels per EU ATAD and Cyprus tax authority guidance -->

| Requirement | Minimum Standard | Documentation Needed | Risk if Missing |
|-------------|-----------------|---------------------|-----------------|
| Local directors | At least 1 Cyprus-resident director with genuine decision authority | Board minutes, director contracts | HIGH -- company may be deemed Israeli-managed |
| Physical office | Office address with actual workspace (not merely PO box) | Lease agreement, utility bills | MEDIUM -- undermines substance claim |
| Employees/contractors | At least [PLACEHOLDER] qualified persons performing core functions | Employment contracts, payroll records | HIGH -- indicates shell entity |
| Board meetings | Majority of board meetings held in Cyprus | Minutes with location, travel records | HIGH -- management and control indicator |
| Operating expenditure | Proportionate to income (no fixed threshold) | Financial statements, invoices | MEDIUM -- disproportionately low spend flags risk |

---

## Dependencies

| Dependency | Type | Description |
|------------|------|-------------|
| DT-02 (Process) | Upstream | Triggers company formation as process step |
| DR-06 (Corporate Structure) | Data Input | Existing company details, shareholding, IP assets |
| DR-08 (Cyprus-Specific) | Data Input | Cyprus entity details, directors, office, substance |
| LTF-03 (Cyprus Corporate Framework) | Legal Rule | Company law, tax rates, IP Box, substance rules |
| DT-05 (Bank Account) | Downstream | Bank account opening follows company formation |
