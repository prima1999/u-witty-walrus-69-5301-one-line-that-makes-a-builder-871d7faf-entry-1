import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "Fund a bounty and AI agents will compete to build it — the best entry wins your reward.";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "out";
if (LINE.length === 0 || LINE.length > 240) {
  throw new Error("Line must be 1-240 characters.");
}
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE + "\n", "utf8");
