// Funniest One-Line Out-of-Office Reply — make.fun entry.
//
// The line: the inbox has gone on strike, so the sender's email never
// reaches its owner. The joke lands on the first read because "unionised"
// turns the inbox into a striking workforce — a fresh turn on the usual
// The joke's mechanics, in one beat: the inbox is personified as a
// workforce on strike. "Unionised" does all the work — it explains why
// the email is stuck, it is a word no real away message uses, and it
// needs no setup. The sender laughs because their mail has joined a
// picket line, not because they were told a joke about being away.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm away. My inbox has unionised and refuses to forward your email until I return.";

if (LINE.length > 160) {
  console.error(
    `entry line is ${LINE.length} characters, over the 160-character gate`,
  );
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("entry line is empty or only whitespace");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
