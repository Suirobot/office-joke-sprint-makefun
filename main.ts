// One-Line Office Joke: 24-Hour Sprint — entrypoint.
// Writes one joke about office life (a single line, at most 200 characters)
// to /output/entry.txt for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "The meeting could have been an email, so we turned it into a thread, the thread into a meeting, and that meeting just scheduled a follow-up to decide if it should have been an email.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
