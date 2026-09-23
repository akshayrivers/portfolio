import type { ContentFile } from "../types";

const engineerAbout: ContentFile[] = [
  {
    name: "summary.md",
    src: "/assets/me.md",
  },
  {
    name: "pitch.md",
    content: `## Vinod Akshat — SDE, final-year CSE at NIT Srinagar (7th sem)

Backend-heavy generalist: auth systems, REST APIs, Postgres, Docker and CI — plus AI agents and LLM tooling, with systems depth (Rust, C) underneath.

Shipped: an agent-authorization engine, a terminal text editor, backends serving real users. Benchmarks over adjectives.`,
  },
  {
    name: "education.md",
    content: `## Education

**NIT Srinagar — B.Tech, Computer Science and Engineering**
2023 - 2027 (currently 7th semester, final year)

Relevant coursework: Data Structures and Algorithms, Compiler Design, Software Engineering, Theory of Computation, DBMS, Artificial Intelligence, Machine Learning, Systems Programming, Computer Organisation and Architecture, Operating Systems, Computer Networks, Network Security, Cyber Laws and Forensics, Communication Systems.

**Jawahar Navodaya Vidyalaya Udhampur, J&K**
2016 - 2022`,
  },
  {
    name: "skills.md",
    content: `## Skills — with evidence (every claim points at a project or file in this profile)

### Backend & Data
- **TypeScript / Node.js** — Warrant (Fastify API, 9 routes), AnonyMessages (Next.js), Anantwave auth backend, Grandma caretaker backend. See projects/warrant.md, projects/anonymessages.md.
- **REST API design** — Warrant's warrant/proposal/transaction/audit routes with typed errors; AnonyMessages inbox flows. See writings/adr-004-validation-split.md for the validation-vs-authorization split.
- **PostgreSQL + Drizzle ORM** — Warrant schemas (warrants, spending state, transactions, audit logs) with in-memory fallback for tests. See projects/warrant.md.
- **Auth: OAuth 2.0, JWT, bcrypt, RBAC, magic-link, OTP** — Anantwave (GitHub/Google via Auth.js, RBAC middleware), Grandma caretaker (magic-link), AnonyMessages (OTP email verification). See experience.md.
- **MongoDB** — working knowledge (Next.js app data layer).
- **Docker + CI/CD** — Grandma backend dockerized; Yonro and Warrant build+test on GitHub Actions. See projects/grandma_launcher.md.

### AI & LLM Tooling
- **Gemini API, agentic workflows** — AI-Agents weather agent (Plan-Action-Observation-Output chain over Tomorrow.io data); Warrant's Gemini proposer with tool calls (search_products, get_product_details, create_transaction_proposal). See projects/ai_agents.md, writings/gemini-feedback-loop.md.
- **LangChain / LangGraph patterns** — explored in Grimoire alongside a from-scratch neural net in C. See projects/grimoire.md.
- **LLM integration discipline** — deterministicKeyword fallback when API keys are absent; thought_signature echo handling; BLOCK-reason feedback loops (max 3 retries, verified end-to-end).

### Systems Depth (the foundation, not the headline)
- **Rust** — Yonro (grapheme engine, layout tree, Tokio plugins), DNS resolver (RFC 1035, std-only), Shell, Toy-DB (LSM), mingrep, Bloom/Huffman/B-trees. See projects/yonro.md, projects/dns_resolver.md, projects/grimoire.md.
- **C / C++** — slab memory allocator, OSTEP lock-based structures, neural net from scratch, DSA library. See projects/memory_allocator.md, projects/grimoire.md.
- **Benchmarking** — Criterion suites (Bloom: 21.3M inserts/s; B-tree vs std), Yonro 7-suite local runner with ns/us/ms reporting. See writings/bloom-math.md.
- **Networking & security research** — AFHDS-2A protocol reverse engineering (30GB RF captures, GNU Radio, Lua dissectors), DNS, Wireshark. See experience.md. Offensive deep-dives live in the hacker profile.

### Frontend (working knowledge)
- **React, Next.js, Vite, TailwindCSS** — Warrant dashboard (Agent/Decision/Audit screens, live), AnonyMessages (live), this portfolio. I prefer backend, but I ship UI when the project needs it.

### Languages, Honestly Ordered
TypeScript, JavaScript, Python, Rust, C, C++, Java, SQL, HTML/CSS, Bash — plus reading-level RISC-V Assembly.

### Tools
Git, Postman, Android Studio, GDB, VS Code, Neovim, Google Cloud Platform, Linux/Unix.`,
  },
  {
    name: "experience.md",
    content: `## Experience

### IIT Jammu — Research Intern, Cybersecurity (Dec 2025 - Mar 2026)
Reverse-engineered the AFHDS-2A UAV protocol from 30+ GB of raw RF captures (HackRF One, GNU Radio, FISSURE): built a GFSK demodulation chain (decimation, filtering, quadrature demod, Mueller-Muller clock recovery) and co-built a Lua dissector parsing bind-phase packet structure against live captures. Evaluated battery-drainage and DoS vectors across MAVProxy/MAVSDK/boofuzz; validated GPS-spoofing failsafes on ArduPilot SITL with QGroundControl.

### Anantwave — Backend Development Intern (Jul 2025 - Oct 2025)
Auth backend in Node.js/Express/TypeScript: OAuth 2.0 (GitHub, Google) via Auth.js, JWT sessions, PostgreSQL, bcrypt hashing. RBAC middleware guarding admin/user routes. Also debugged a separate team's Python backend purely through structured logging and root-cause analysis.

### Open Source — Zed Editor contributor
3 merged PRs (Jul-Aug 2026): #62691 (horizontal autoscroll follows cursor on long selections), #61487 (autoscroll reveals full search matches), #61314 (picker child/parent navigation). Plus issue triage in a production Rust editor codebase.

### Leadership — Lead Moderator, DEFCON Srinagar
Ran a 15-member volunteer team across event logistics, speaker outreach, workshops, CTF activities and village operations.

### Recognition — Polaris Fellowship 2026 Finalist
Top 1%: selected among the top 100 from 10,000+ applicants.`,
  },
  {
    name: "work.md",
    content: `## Work — what I've actually done, in detail

### Backends that serve real users
At Anantwave I owned authentication end to end: OAuth 2.0 logins (GitHub, Google) plus credentials login through Auth.js, JWT sessions, bcrypt-hashed passwords in PostgreSQL, and RBAC middleware separating admin from user routes. When a sibling team's Python backend started failing, I rooted it out through structured logs alone — no access to their runtime, just evidence and reasoning.

Grandma's caretaker backend (Dockerized Node + TypeScript) serves a PWA used for remote elder care: magic-link auth, SOS with live-location sharing, device administration. AnonyMessages (live) runs OTP-verified anonymous messaging with AI-suggested prompts.

### AI systems with guardrails
Warrant started from a buildathon observation: agents can browse and propose, but nothing stops them from spending. I built the missing layer — signed spending warrants, a deterministic policy engine (9 checks, 42/42 tests, 7 adversarial scenarios all BLOCKED), and a SHA-256 hash-chained audit ledger. The Gemini agent proposes; the engine disposes. Live with a React dashboard.

Separately, the AI-Agents weather agent taught me the Plan-Action-Observation-Output loop over live APIs — the same pattern Warrant hardens.

### Systems work that keeps me honest
Yonro (Rust TUI editor): grapheme-correct editing, binary layout trees, floating panes, a Tokio plugin runtime, 18 unit tests, a 7-suite benchmark runner. DNS resolver: RFC 1035 from raw bytes, now with iterative resolution, TTL cache, AAAA, telemetry, and attack simulations. Grimoire: 15+ primitives with measured numbers (21.3M Bloom inserts/s, B-tree beating std). This work rarely ships to users directly — its value is that my backend abstractions leak less often.

### Security research
AFHDS-2A protocol reverse engineering at IIT Jammu (RF captures, GNU Radio, custom dissectors, SITL-validated attack analysis). This profile keeps the professional surface; the offensive deep-dives (TryHackMe write-ups, packet work, CTF notes) live in the hacker profile — switch profiles to see them.

### Currently
7th semester, final year at NIT Srinagar. Open to SDE and backend-heavy roles for 2027. Building in public, benchmarking everything, writing it all down in writings/ and ideas/.`,
  },
  {
    name: "links.md",
    content: `## Links

- [GitHub](https://github.com/akshayrivers)
- [LinkedIn](https://linkedin.com/in/vinod-akshat)
- [Codeforces](https://codeforces.com/profile/Akshayforrivers)
- [Medium](https://medium.com/@pumkininriver)
- [LeetCode](https://leetcode.com/akshayrivers)
- [Warrant (live)](https://warrant-nine.vercel.app)
- [AnonyMessages (live)](https://anony-messages-seven.vercel.app)`,
  },
];

export default engineerAbout;
