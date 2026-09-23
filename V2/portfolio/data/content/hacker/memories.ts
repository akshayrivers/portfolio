import type { ContentFile } from "../types";

const hackerMemories: ContentFile[] = [
  {
    name: "bind-phase-parse.txt",
    content:
      "The evening the Lua dissector parsed bind-phase structure against a live capture. Months of waterfall-gazing, gain knobs and xxd dumps collapsed into one parsed packet. Hop-table extraction is still ongoing — but that evening the spectrum stopped being noise.",
  },
  {
    name: "defcon-ctf-ops.txt",
    content:
      "DEFCON Srinagar, CTF side. Running the village: resetting boxes players broke in creative ways, watching attack approaches I would never have tried, learning that challenge design is threat modeling in reverse. Organizing taught more than competing that year.",
  },
  {
    name: "first-shell.txt",
    content:
      "First low shell on a lab box, earned through enumeration rather than luck: the scan, the version probe, the misconfiguration nobody else in the room write-up bothered to explain. Technique over walkthroughs — the policy this whole profile follows.",
  },
  {
    name: "regression-hunt.txt",
    content:
      "Not mine to keep, but mine to remember: chasing my own regression through someone else's guard clause (documented properly in the engineer profile's opensource.md). The hacker lesson — when your exploit breaks, read the guard you tripped, not the payload you sent.",
  },
];

export default hackerMemories;
