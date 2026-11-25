import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Tired Dark Lord: a 100-word villain monologue. The tiredness lives in
// the rhythm and the deflections, never in a plain statement of weariness.
const ENTRY =
  "Heroes. Again. At dawn, naturally, because villains keep office hours too, apparently. " +
  "I was halfway through the ritual, candles lit, the goat already complaining, when your lot kicked the door in. " +
  "The door I had just finished painting. Black. Again. Look, take the amulet. " +
  "It's in the drawer, yes, that one, beside the unpaid curses. The kingdom can wait until Tuesday; " +
  "my knees have filed a formal complaint. And tell the bards to stop rhyming 'doom' with 'gloom': " +
  "it scans terribly and I have standards, even at this hour. Now, quietly, please. " +
  "The dragon is asleep and so am I.";

function formatEntry(): string {
  return ENTRY;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), formatEntry() + "\n", "utf8");
