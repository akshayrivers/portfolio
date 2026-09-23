import type { ContentFile } from "../types";

const engineerIdeas: ContentFile[] = [
  {
    name: "reading-list-companies.md",
    content:
      "Things to remember — how companies engineer (distilled from my notes/ repo, Engineering/Companies).\n\nReverse-engineering reading notes on: Cloudflare (edge, workers, network scale), Cockroach Labs and ScyllaDB (distributed SQL, LSM at scale), Redis (data structures as a service), ClickHouse (columnar analytics), Datadog and Grafana Labs (observability pipelines), Atlassian and JetBrains (developer tools craft), Canonical and Mozilla (open-source at scale), Nvidia (GPU compute).\n\nZed gets its own file — contributing there taught more than reading about it. See projects/opensource.md.\n\nStatus: notes in progress, distilled as I read. Recruiter translation: I study how production systems are actually built, not just how to use them.",
  },
  {
    name: "how-code-runs.md",
    content:
      "Things to remember — how code runs (from notes/, how code runs/).\n\nFive-part series: C and C++ (compilation, memory layout, UB), JavaScript (event loop, prototypes, JIT), Java (JVM, bytecode, GC), Python (interpreter, GIL, object model), Rust (ownership, borrow checker, zero-cost abstractions).\n\nWritten to answer one question per language: what does this line actually become? The Rust installment paid for itself during the DNS parser fights.",
  },
  {
    name: "protocols-roadmap.md",
    content:
      "Things to remember — protocols (from notes/, protocols/).\n\nDNS (deepest — see projects/dns_resolver.md), HTTP/HTTPS, SMTP, SSH, Torrent. The DNS note holds the old roadmap: recursive resolution from roots, TTL caching, EDNS, DoH — written before the v1 refactor, which has since implemented recursion, cache, AAAA, telemetry and attack simulations. Roadmaps work when you execute them.",
  },
  {
    name: "scraped_idea_1.md",
    content: "Build a dark terminal-themed blogging platform with static-site generation.",
  },
  {
    name: "abandoned_concepts.txt",
    content: "OS from scratch. Emulator. Brainfuck-to-C compiler. Abandoned, not forgotten — each is a quarter I may still spend.",
  },
  {
    name: "future_vision.md",
    content: "A PaaS that auto-pulls from GitHub, builds using Docker, and deploys to a self-hosted cluster on Arch.",
  },
  {
    name: "finish-grimoire-crypto.md",
    content:
      "Inferred, unimplemented: Grimoire's Cryptography section (AES, DES, RSA, HMAC files) and SQL section are stubs. Fill AES + HMAC first — they compose with the DNS and Warrant work (signatures everywhere). Then RSA-2048 to match the Grandma's Launcher handshake numbers with my own implementation.",
  },
  {
    name: "dns-hardening.md",
    content:
      "Inferred, unimplemented: DNS resolver roadmap — EDNS(0) and larger messages (RFC 6891), DNSSEC basics (RFC 4035), DoH transport, negative caching. The attack simulations (poison/spoof) deserve a matching defense write-up each.",
  },
  {
    name: "yonro-next.md",
    content:
      "Inferred, unimplemented: land the Vim modal layer (in progress locally — push, then document), regex and fuzzy search, plugin registry beyond the file explorer, script plugins. Benchmark figures get republished from CI the day CI runs them.",
  },
  {
    name: "proxy-writeup.md",
    content:
      "Inferred, unimplemented: the college-WiFi proxy experiments (private repo) get a write-up — but in the hacker profile, not here. This profile stays recruiter-clean.",
  },
];

export default engineerIdeas;
