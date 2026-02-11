// ============================================
// L.T.A Advisory Platform — Core Types
// ============================================

// Rule Engine Types
export type RuleNamespace = "LTF" | "DT" | "DR" | "RC" | "FA" | "VS";

export type RuleStatus = "draft" | "expert_review" | "verified" | "locked";

export interface RuleMetadata {
  id: string;
  namespace: RuleNamespace;
  version: number;
  status: RuleStatus;
  lastUpdated: string;
  assignedExpert?: string;
  dependencies: string[];
}

// Decision Tree Types
export interface DecisionNode {
  nodeId: string;
  type: "start" | "decision" | "check" | "process" | "terminal";
  question: string;
  dataFields: string[];
  yesPath: string | null;
  noPath: string | null;
  riskFlag: string | null;
  legalSource: string | null;
}

export interface DecisionGraph {
  treeId: string;
  nodes: DecisionNode[];
  entryNode: string;
  terminalStates: string[];
}

export interface DecisionResult {
  treeId: string;
  path: string[];
  terminalState: string;
  dataFieldsUsed: string[];
  riskFlagsTriggered: string[];
  executionTimeMs: number;
}

// Risk Scoring Types
export type RiskCategory = "tax" | "legal" | "structural" | "financial";

export type RiskTier = "GREEN" | "YELLOW" | "ORANGE" | "RED";

export interface RiskIndicator {
  riskId: string;
  name: string;
  category: RiskCategory;
  trigger: RiskTrigger;
  severity: 1 | 2 | 3 | 4 | 5;
  mitigation: string;
  legalRefs: string[];
  dtNodes: string[];
}

export interface RiskTrigger {
  type: "comparison" | "composite" | "presence" | "absence";
  field?: string;
  operator?: ">" | "<" | ">=" | "<=" | "==" | "!=";
  threshold?: number | string;
  conditions?: RiskTrigger[];
  logic?: "AND" | "OR";
}

export interface RiskScoreResult {
  taxScore: number;
  legalScore: number;
  structuralScore: number;
  financialScore: number;
  overallScore: number;
  tier: RiskTier;
  activeIndicators: RiskIndicator[];
}

// Category weights from RC-05 scoring methodology
export const RISK_CATEGORY_WEIGHTS: Record<RiskCategory, number> = {
  tax: 0.35,
  legal: 0.30,
  structural: 0.20,
  financial: 0.15,
};

// Financial Model Types
export interface FinancialModelInput {
  modelId: string;
  clientData: Record<string, unknown>;
  currency: "USD" | "EUR" | "NIS";
}

export interface FinancialModelOutput {
  modelId: string;
  results: Record<string, number>;
  currency: string;
  warnings: string[];
  unvalidatedFields: string[];
}

// Client Data Types
export type DataSensitivity =
  | "public"
  | "internal"
  | "confidential"
  | "pii"
  | "pii_sensitive";

export interface DataField {
  fieldId: string;
  name: string;
  type: "string" | "number" | "date" | "boolean" | "enum" | "json";
  sensitivity: DataSensitivity;
  required: boolean;
  validation?: Record<string, unknown>;
  consumers: string[];
}

// Advisory Result (full engine output)
export interface AdvisoryResult {
  caseId: string;
  decisionResults: DecisionResult[];
  riskScore: RiskScoreResult;
  financialOutputs: FinancialModelOutput[];
  narrative?: string;
  evaluatedAt: string;
  ruleVersionsUsed: Record<string, number>;
}
