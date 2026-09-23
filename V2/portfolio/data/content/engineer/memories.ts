import type { ContentFile } from "../types";

const engineerMemories: ContentFile[] = [
  {
    name: "defcon_lead.txt",
    content:
      "Lead Moderator, DEFCON Srinagar. Ran a 15-member volunteer team across event logistics, speaker outreach, workshops, CTF activities and village operations. Learned more about unblocking humans than any protocol ever taught me.",
  },
  {
    name: "polaris_finalist.txt",
    content:
      "Polaris Fellowship 2026 Finalist — top 1%, selected among the top 100 from 10,000+ applicants.",
  },
  {
    name: "zed_merges.txt",
    content:
      "Three merged PRs into the Zed editor (#62691 autoscroll follow, #61487 search-match reveal, #61314 picker navigation) plus issue triage. First time my code shipped inside a tool I use daily — nothing else felt like that.",
  },
  {
    name: "iit_jammu_internship.txt",
    content:
      "IIT Jammu, cybersecurity research intern. Thirty gigabytes of RF captures, a HackRF One, and a protocol nobody had documented — plus everything fighting back. The stock antenna was built for 2.4 GHz while FM sits near 100 MHz; the HackRF refused to behave inside VMs; GNU Radio would not save raw IQ to files; ArduPilot would not compile on macOS; live GPS-spoofing attempts did nothing (dwell-time and power limits, workaround still unvalidated).\n\nWhat actually got done: a working GFSK demod chain, Lua dissectors parsing bind-phase packet structure against live captures (hop-table extraction still ongoing), reproduced battery-drainage and DoS vectors across three tool stacks, and failsafe behavior validated in ArduPilot SITL with QGroundControl talking to both simulated and custom drones. The full report reads like a lab notebook because it is one — struggles included. That is the point.",
  },
  {
    name: "anantwave_internship.txt",
    content:
      "Anantwave backend intern. OAuth 2.0, RBAC, Postgres — production auth, real users. Also the first time I debugged someone else's Python backend purely through structured logs and root-cause discipline.",
  },
  {
    name: "first_hackathon.txt",
    content:
      "It was chaotic, caffeine-fueled, and I learned the machine learning basics the night before. I was leading the project and my teammates didn't know machine learning or python for that matter. So I delegated the web dev and exploration tasks to them and went into the rabbit hole of the main problem myself with chatgpt, perplexity and a friend. I barely slept, got sick on presentation day, and we didn't win — but it was a proper first lesson in leadership and preparation.",
  },
  {
    name: "grind_timetable.txt",
    content:
      "From a June 2026 journal: the week, timetabled. Mornings: POTD plus one graph/tree problem. Mid-mornings: editor documentation and architecture diagrams. Afternoons: Polaris prep. Evenings: RISC-V, OSTEP, system design, subnetting. Weekends: deep editor sessions, contests, DEFCON tasks, weekly review. Discipline is a system, so I built one.",
  },
];

export default engineerMemories;
