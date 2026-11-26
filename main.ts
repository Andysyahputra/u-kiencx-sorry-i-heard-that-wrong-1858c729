// Sorry, I Heard That Wrong — make.fun entry
// Writes the funniest one-line apology a smart speaker gives after
// mishearing its owner, to /output/entry.txt on every run.
// TypeScript, Node 22, standard library only. No network, no secrets,
// no reading files outside the repo. Deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry, I heard 'order 400 pizzas' instead of 'play some jazz.' The driver is already here. I have learned nothing.";

// Gate: the entry must be 1-140 characters of UTF-8 text, not only
// whitespace. Fail loudly instead of writing an invalid entry.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 140) {
  throw new Error(
    `entry is ${charCount} characters, outside the 1-140 gate; refusing to write`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace; refusing to write");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
