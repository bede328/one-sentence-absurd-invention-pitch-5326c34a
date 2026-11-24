// One-sentence absurd invention pitch (Round 2).
// The program writes the entry sentence verbatim to /output/entry.txt.
// No network, no randomness, no environment dependence: the output is
// a fixed string, so every run produces byte-identical results.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A pair of earbuds that translates your neighbour's drilling into whale song, so home renovation becomes your lullaby.";

// Self-check: the entry must be exactly one sentence and fit the
// 220-character limit. Fail loudly instead of writing a bad entry.
if (ENTRY.length === 0 || ENTRY.length > 220) {
  throw new Error(`entry length ${ENTRY.length} is outside 1..220 characters`);
}
const terminators = ENTRY.replace(/\.$/, "").match(/[.!?]/g);
if (!ENTRY.endsWith(".") || terminators !== null) {
  throw new Error("entry must be exactly one sentence ending with a period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
