// One-Sentence Absurd Invention Pitch — entry.
// One sentence, at most 220 characters, pitching a ridiculous invention
// that fixes a tiny everyday annoyance: sitting too long.
// Writes the pitch as plain text to /output/entry.txt with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A chair that gently ejects you after two hours of sitting, then hands you a printed note saying you have a spine and it would like you to use it.";

const length = [...PITCH].length;
if (length < 1 || length > 220) {
  throw new Error(`pitch must be 1-220 characters, got ${length}`);
}
if (PITCH.trim() !== PITCH || PITCH.includes("\n")) {
  throw new Error("pitch must be a single line with no surrounding whitespace");
}
if (PITCH.split(/[.!?]/).filter(Boolean).length !== 1) {
  throw new Error("pitch must be a single sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH);
console.log(`${length} characters written to /output/entry.txt`);
