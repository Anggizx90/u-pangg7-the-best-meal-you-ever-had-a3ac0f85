import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The best meal I ever had, in one sentence (175 characters).
const SENTENCE =
  "I ate rendang in my grandmother's kitchen in Yogyakarta, the beef falling apart in coconut gravy dark as coffee, and she watched me eat like she'd been waiting all day for it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
