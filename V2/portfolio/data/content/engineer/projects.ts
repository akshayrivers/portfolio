import type { ContentFile } from "../types";

const engineerProjects: ContentFile[] = [
  {
    name: "yonro.md",
    content:
      "Yonro — Terminal Text Editor | Rust | Nov 2025 - Present\nhttps://github.com/akshayrivers/Yonro-Text-Editor\n\nA grapheme-correct TUI editor that outgrew its Hecto-tutorial roots: line-based buffer over unicode-segmentation fragments, width-aware cursor and scrolling, syntax highlighting (Rust, Markdown, text), wrap-around search with a ByteIdx/GraphemeIdx annotation pipeline.\n\nWindowing: binary layout tree (30/70, 50/50 splits, drag-resize with divider tolerance) plus z-indexed floating panes; float/unfloat/focus/close/explore via command bar.\n\nPlugins run on a background single-threaded Tokio worker connected by mpsc channels (LoadPlugin, BufferChanged snapshots, OpenFloatingPane responses) — the UI thread never blocks. File Explorer ships as the reference plugin.\n\nUndo evolved the hard way: naive char-stack broke on line merge/split, now InsertChar/DeleteChar/InsertNewLine/DeleteNewLine/InsertGroup ops with split undo/redo paths and 800ms word grouping, covered by 18 unit tests.\n\nRigor: 7-suite local benchmark runner (line core, buffer, command/view, layout/panes, plugins, syntax/search, e2e) with ns/us/ms reporting; build+test in GitHub Actions. 20+ commands across the move/edit/system/mouse dispatch chains; Vim-style modal layer landing next.\n\nRead the architecture: writings/yonro-architecture.md. Blogs: writings pane posts.",
  },
  {
    name: "grimoire.md",
    content:
      "Grimoire — Systems & ML Foundations | C, C++, Rust, Python, Java, Bash | Dec 2024 - Present\nhttps://github.com/akshayrivers/Grimoire\n\nA monorepo of things rebuilt from scratch to understand them. Deep dive:\n\n- Trees: B/B+ trees, LSM trees. Custom B-Tree search edged out std::BTreeMap and a production crate in Criterion benches (40ms vs 46ms/102ms) — a narrow, honest win, not a blowout. Bench harness in trees/benches.\n- Probabilistic: deletable Bloom filter (arxiv:1005.0352) — bit array over Vec<u64>, Kirsch-Mitzenmacher hashing with XXH3/Murmur3/FNV-1a. 21.3M inserts/s; measured FPR within 0.05% of theory; deletion at +0.1% space overhead (r=m/1000). Full math in writings/bloom-math.md.\n- Compression: Huffman coding end-to-end (min-heap build, prefix codes, padding/header handling). Walkthrough in writings/huffman-coding.md.\n- Concurrency: OSTEP lock-based structures in C — counters, sloppy counters, hand-over-hand linked list, producer/consumer with empty/fill semaphores.\n- Crypto & net: HMAC, RSA-2048, socket programming (TCP/UDP), slab memory allocator.\n- ML: neural network from scratch in C — backprop, no frameworks.\n\nHonest scope: Cryptography symmetric/asymmetric files and the SQL section are stubs being filled; skip lists in progress. Everything claimed above is measured or implemented.",
  },
  {
    name: "warrant.md",
    content:
      "Warrant — Agentic Authorization Engine | TypeScript, PostgreSQL, React | Razorpay Buildathon | Live: https://warrant-nine.vercel.app\nhttps://github.com/akshayrivers/Warrant\n\nThesis: the AI can decide what it wants to do. It cannot decide what it is allowed to do.\n\nA deterministic policy engine for AI agent commerce: user authorization becomes a cryptographically signed spending warrant (limits, merchants, categories, agents, expiry). The Gemini agent only proposes transactions; it can never execute payment or authorize itself. Same warrant + request + spending-state + time always yields the same ALLOW/BLOCK verdict with a machine-readable reason — no LLM in the decision path.\n\n9 policy checks (signature, expiry, agent/merchant/category auth, per-txn limit, daily cumulative, replay + reason codes). Proposal validation (is it real? SKU/price/merchant correct?) is a separate stage from authorization (is it allowed?).\n\nVerified: 42/42 backend tests across 9 suites, 7-scenario adversarial suite (hallucinated SKU, price manipulation, merchant spoof, limit breaches, replay, tampered signature — all BLOCK), SHA-256 hash-chained append-only audit log with tamper-detection test, revision loop (BLOCK reason + remaining budget fed back, max 3 retries).\n\nStack: TypeScript strict (exactOptionalPropertyTypes and friends), Fastify, PostgreSQL + Drizzle with in-memory fallback, React dashboard (Agent, Decision, Audit, Dashboard screens), Razorpay Test Mode.\n\nStatus: research prototype, Test Mode only, no real money. Architecture decisions: writings/adr-001 through adr-004. War stories: writings/pg-timestamp-bug.md, writings/gemini-feedback-loop.md.",
  },
  {
    name: "dns_resolver.md",
    content:
      "DNS Resolver (RFC 1035) | Rust, std-only | May 2026\nhttps://github.com/akshayrivers/DNS-Resolver\n\nA from-scratch DNS implementation in Rust with zero DNS libraries: DNSMessage encode/parse over raw bytes, UDP transport, name-compression pointer handling (top-two-bits 11 + message offsets), manual u16 BE parsing, header/question/answer/authority/additional slicing.\n\nCurrent (v1): iterative resolution starting from root servers with a server list, TTL-aware cache (min-TTL expiry, expired-entry sweeping), A + AAAA (28) record types, visual packet telemetry with trace display, and an interactive CLI: resolve <domain> [type], poison, spoof, help — including cache-poisoning and packet-spoofing simulations for studying the attacks, not staging them.\n\nWhy: built while studying the app layer (Kurose-Ross) — an itch to parse every byte myself, plus borrow-checker sparring with nested packet structures.\n\nNotes: writings/why-i-built-a-dns-client.md, writings/rfc1035-field-notes.md. Companion post: Secret Whispers of DNS.",
  },
  {
    name: "memory_allocator.md",
    content:
      "Memory Allocator | C | 2024\nhttps://github.com/akshayrivers/Memory-Allocator\n\nCustom thread-safe slab allocator in C: fixed-size block classes, intrusive free lists inside slabs, mutex-guarded multithreaded paths. Built to feel fragmentation and cache effects firsthand instead of reading about them. Pairs with the OSTEP concurrency work in Grimoire.",
  },
  {
    name: "shell_rust.md",
    content:
      "Shell | Rust | 2024\nhttps://github.com/akshayrivers/Shell\n\nA custom Unix shell in Rust: echo, exit, pwd, ls, cd, plus passthrough execution hooked into the real terminal. Parsing, builtins vs externals, exit codes — the boring fundamentals, implemented.",
  },
  {
    name: "toy_database.md",
    content:
      "Toy Database | Rust | 2024\nhttps://github.com/akshayrivers/Toy-Database\n\nLSM-tree concepts made concrete: memtable, SSTables, compaction sketches. Deliberately small — the point was understanding write amplification and read paths, which later fed the Grimoire trees work.",
  },
  {
    name: "http_server_java.md",
    content:
      "HTTP Server | Java | 2024\nhttps://github.com/akshayrivers/http-server\n\nA from-scratch HTTP server in Java handling GET, POST, PUT, DELETE over raw sockets. Request parsing, routing, status codes — no framework, just java.net.",
  },
  {
    name: "grandma_launcher.md",
    content:
      "Grandma's Launcher | Kotlin, TypeScript, Docker | Apr 2026 - Present\nhttps://github.com/akshayrivers/Grandmaz_Launcher (+ Grandmaz_Backend, Grandmaz_Caretaker)\n\nAccessibility-first Android launcher for senior citizens and non-literate users: large touch targets, text-to-speech guidance, high-contrast UI, adaptive widgets — engineered as a default home replacement via Android Launcher APIs, tuned for low-end devices.\n\nBackend: Dockerized caretaker server + PWA with magic-link auth, SOS live-location sharing, device administration. RSA-2048 handshake benchmarked at 2.75ms sign / 121us verify — inside the 16.6ms frame budget.",
  },
  {
    name: "anonymessages.md",
    content:
      "AnonyMessages | TypeScript, Next.js | Live: https://anony-messages-seven.vercel.app\nhttps://github.com/akshayrivers/AnonyMessages\n\nAnonymous messaging platform: AI-suggested messages from usernames, OTP email verification, dashboard + inbox flows. Shipped and deployed — the oldest live proof I can finish things.",
  },
  {
    name: "ai_agents.md",
    content:
      "AI Agents | JavaScript, Gemini | 2025\nhttps://github.com/akshayrivers/AI-Agents\n\nLearning agents by building: Weather AI Agent (Gemini + Tomorrow.io real-time data, Plan-Action-Observation-Output chain-of-thought, continuous chat surfacing only final output). Todo (Google Tasks + voice) and Calendar (scheduling/reminders) agents are roadmap — not claimed as built. The untrusted-proposer pattern here later became Warrant's core thesis.",
  },
  {
    name: "opensource.md",
    content:
      "Open Source — Zed Editor + campus\n\nZed (zed-industries/zed), 3 merged PRs in Jul-Aug 2026 — plus ongoing issue triage in a production Rust editor codebase:\n\n- #61487 — horizontal autoscroll only revealed part of search matches (word wrap off). Root cause: scroll bounds derived from selection.head() alone. Fix: compute start/end columns from selection.start/end directly, falling back to col 0 or full line length when the span crosses rows. Verified with full cargo test plus manual in-app testing.\n- #62691 — a regression from my own #61487: selections wider than the viewport tripped a guard (target_right minus target_left over viewport width returns None) and killed scrolling entirely. Fix: per-row span width check — wider than viewport falls back to head-tracking, narrower keeps the full-span behavior. Tested manually on macOS; unit tests written with Claude. Debugging my own regression in public was the real lesson.\n- #61314 — picker had no keyboard directory navigation. Extended the PickerDelegate trait with select_child/select_parent (following existing conventions like confirm_completion), implemented both in OpenPathDelegate, wired listeners in picker render, rebound keys in the macOS keymap. Fixes #61053.\n\nFOSS-NIT-SGR: campus open-source community work. The habit stuck: read the codebase first, smallest correct diff, tests with the fix.",
  },
  {
    name: "supporting_cast.md",
    content:
      "Supporting cast (short notes, all on GitHub: akshayrivers):\n\n- cf-vscode-extension — Codeforces problem/testcase parser for VS Code with Competitive Companion integration.\n- boilerplate_nextjs — Next.js + OTP/email-verification starter.\n- paytm_wallet_clone — Paytm wallet mechanics clone.\n- qr_code_scanner — deployed QR auth for Techvaganza event check-ins.\n- dsa_library — data structures and algorithms in C++/Rust.\n- stt_tts_collection — speech-to-text / text-to-speech option survey.\n- rangechinar_registration — college-fest registration with bulk entries, dynamic fees, UPI QR.\n- iwt_learning_platform — custom learning paths/graphs from prompts + memory.\n- smart_route_optimiser — Mined hackathon track (Team River).\n- mingrep — minimal grep in Rust.\n- activity-board, rawReach, BusyBussin, Cert-Gen, ERP-sync, codingplatform — experiments and event tooling.",
  },
];

export default engineerProjects;
