/**
 * Rule Engine Compiler
 *
 * Reads Phase 1 markdown templates from /rules/phase-1/
 * and compiles them into executable rule definitions.
 *
 * Usage: npm run compile-rules
 *
 * Pipeline:
 * 1. Scan — Find all .md files with status "verified" or "locked"
 * 2. Parse — Extract YAML front matter + structured tables
 * 3. Validate — Check cross-references between namespaces
 * 4. Transform — Convert to typed intermediate formats
 * 5. Store — Output to /src/lib/rules/generated/
 * 6. Test — Run validation scenarios (VS-01 through VS-07)
 */

import path from "path";
import fs from "fs";

const RULES_DIR = path.resolve(process.cwd(), "rules/phase-1");
const OUTPUT_DIR = path.resolve(process.cwd(), "src/lib/rules/generated");

async function main() {
  console.log("=== L.T.A Rule Engine Compiler ===\n");

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Step 1: Scan
  console.log("Step 1: Scanning rule templates...");
  const files = scanRuleFiles(RULES_DIR);
  console.log(`  Found ${files.length} template files\n`);

  // TODO: Steps 2-6 will be implemented in Phase 2
  // Step 2: Parse (gray-matter + remark-gfm)
  // Step 3: Validate (cross-reference integrity)
  // Step 4: Transform (to GoRules JDM + json-rules-engine format)
  // Step 5: Store (write generated .ts files)
  // Step 6: Test (run validation scenarios)

  console.log("Rule compilation pipeline ready for Phase 2 implementation.");
  console.log(`Templates directory: ${RULES_DIR}`);
  console.log(`Output directory: ${OUTPUT_DIR}`);
}

function scanRuleFiles(dir: string): string[] {
  const files: string[] = [];

  function walk(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith(".md") && entry.name !== "README.md") {
        files.push(fullPath);
      }
    }
  }

  walk(dir);
  return files;
}

main().catch(console.error);
