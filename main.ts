// Fix Human Sleep: Funniest Patch Note
// Writes a single patch-note line announcing that human sleep is fixed
// to /output/entry.txt. Node 22, stdlib only, deterministic, offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Fixed a bug where sleep paused whenever the brain decided to rehearse an argument from 2019.";

// Gate: 1-160 characters, counted per code point, single line, no trailing newline.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 160) {
  throw new Error(`entry length out of range: ${charCount}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
