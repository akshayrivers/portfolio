import type { ContentFile } from "../types";

const engineerWritings: ContentFile[] = [
  {
    name: "yonro-architecture.md",
    content: `Yonro architecture (from architecture.md, condensed)

Layered sync-core with async workers. The main thread owns Editor::run and all rendering; a background single-threaded Tokio worker owns plugins. The two sides talk only through mpsc channels, so input stays responsive no matter what a plugin does.

Input flows as crossterm Event to EditorEvent to Command (Move, Edit, System, Mouse), then through a handler chain: PromptAwareHandler, System, Edit, Move, Mouse. Search and save prompts intercept first.

Windowing is a binary LayoutTree of SplitNode (Vertical or Horizontal with a ratio); leaves are replaced on split. Floating panes live outside the tree in a PaneManager, drawn on layer 10 and above sorted by z-index. float and unfloat move panes between the two systems. Divider drag-resize uses a tolerance zone because a 1-pixel terminal divider is unclickable otherwise.

The plugin protocol: LoadPlugin, Event with active pane id, BufferChanged snapshots, PaneOpened, Shutdown in; OpenFloatingPane, ClosePane, ToggleMinimize, MoveInPane, SelectInPane, MouseClickInPane, UpdateMessage out. The File Explorer is the reference plugin, running tiled and floating.

Full diagrams in the repo architecture.md. Source: akshayrivers/Yonro-Text-Editor.`,
  },
  {
    name: "yonro-undo.md",
    content: `Undo, done right on the third try (from notes.md)

Attempt one was a naive char stack with reverse on undo. It broke the moment lines merged or split, because a reversed char stream is not the inverse of a structural edit.

Attempt two made operations structural: InsertChar, DeleteChar, InsertNewLine, DeleteNewLine. Undo and redo finally agreed with each other.

Attempt three grouped them: consecutive inserts within an 800ms window form one InsertGroup (800 because it was the nice spot). Undo walks the group right-to-left, redo replays left-to-right. Empty-stack undo is a no-op, never a panic.

Eighteen enumerated unit cases cover single and multi insert, newline merge and split, cursor placement, unicode, and group formation and breakage. Source: Yonro notes.md Phase VI.`,
  },
  {
    name: "yonro-search-highlight.md",
    content: `Search and highlighting (from notes.md)

Search is cursor-relative and wraps: find_all returns Vec of (ByteIdx, GraphemeIdx) via cycle, skip from cursor, take len+1. Byte index for slicing, grapheme index for the screen — the split is the whole trick.

Rendering is a pipeline: Line to Syntax to Search to Annotations to Renderer. Annotations carry type plus start and end byte offsets, Match versus SelectedMatch. Highlighting is computed on demand and never cached, an explicit trade: recompute is cheap, stale-cache invalidation bugs are not.

Rust, Markdown and text highlighters exist; Rust is the real one. Source: Yonro notes.md Phase IV-V.`,
  },
  {
    name: "yonro-graphemes.md",
    content: `Graphemes, or why the cursor lied (from notes.md)

A Line is a Vec of TextFragment, each a grapheme plus its rendered width, replacement text, and start byte index. Width comes from unicode-width (Half or Full), segmentation from unicode-segmentation. Cursor motion snaps to valid grapheme and line boundaries; rendering queues cells lazily and flushes once.

The failure mode this fixes: CJK characters and ZWJ emoji occupying two cells while naive indexing counts bytes. Tested with multilingual and complex-emoji fixtures. Source: Yonro notes.md Phase II.`,
  },
  {
    name: "why-i-built-a-dns-client.md",
    content: `Why I built a DNS client (from notesV0, in my words)

Studying the application layer, I hit record types and DNS message formats and got the itch: build it myself from scratch, no libraries. Could I really do it with just the standard library and what I knew?

Rust, because I was learning it from The Book and it is good at low-level stuff. The constraints became the curriculum: raw bytes and bit manipulation, endianness, UDP sockets with no built-in structure, compression pointers where the top two bits 11 mean follow me, and the borrow checker arguing about every nested parse.

Key learnings: layered distributed protocols, message format and compression, recursive versus iterative flow, UDP socket programming, and parsing nested structures under the borrow checker. Source: DNS-Resolver notesV0.`,
  },
  {
    name: "rfc1035-field-notes.md",
    content: `RFC 1035 field notes (cited, not mine — Mockapetris)

Zones hold authoritative data; caches hold copies discarded by timeout. Resource records on the wire: NAME, TYPE, CLASS, TTL, RDLENGTH, RDATA. TTL zero marks volatile data like SOA.

Types that matter: A=1, NS=2, CNAME=5, MX=15, TXT=16; QTYPE adds AXFR=252 and star=255. Class IN=1.

Header flags: ID, QR, Opcode, AA, TC, RD, RA, Z, RCODE 0-5. RD asks the server to recurse; support is optional, which is exactly why iterative resolution exists.

Compression, the money quote: a pointer is two 1-bits plus an offset from the start of the message. Three legal forms: labels alone, pointer alone, labels then pointer. Every implementation must understand pointers even if it never emits them. The worked example (F.ISI.ARPA at 20, FOO.F.ISI.ARPA at 40, ARPA at 64, root at 92) is the clearest 4 lines in the RFC.

Attribution: RFC 1035 sections 3.2.1, 3.2.2-4, 4.1.1-2, 4.1.4. Quoted in DNS-Resolver notesV1.`,
  },
  {
    name: "adr-001-stack.md",
    content: `ADR-001: TypeScript strict + Fastify + Postgres (Warrant)

Chose TypeScript strict (strict, noUncheckedIndexedAccess, exactOptionalPropertyTypes) over Rust for v1: Razorpay SDK ergonomics, faster iteration for a buildathon, and the policy engine is pure logic that ports later. Fastify over Express for schema validation throughput. PostgreSQL + Drizzle with an in-memory repository fallback so tests never need a database. Gemini via a TypeScript-first client, Python only if ever needed. Full text: Warrant docs/decisions/ADR-001.`,
  },
  {
    name: "adr-002-determinism.md",
    content: `ADR-002: deterministic ALLOW/BLOCK (Warrant)

Same warrant plus request plus spending-state plus time always yields the same verdict with the same machine-readable reason. No LLM anywhere in the decision path — the model proposes, the engine disposes. Determinism is what makes the audit ledger meaningful: replay any decision and you must get the same answer. Full text: Warrant docs/decisions/ADR-002.`,
  },
  {
    name: "adr-003-untrusted-proposer.md",
    content: `ADR-003: AI as untrusted proposer (Warrant)

The agent gets tools (search products, get details, get merchant catalog, create proposal) and zero payment authority. There is no code path from agent output to money movement that does not pass validation and the policy engine. A compromised or hallucinating model can at worst produce a BLOCKED proposal with a reason attached. Full text: Warrant docs/decisions/ADR-003.`,
  },
  {
    name: "adr-004-validation-split.md",
    content: `ADR-004: validation is not authorization (Warrant)

Two separate stages. Proposal validation asks: is it real — SKU exists, price matches catalog, merchant is genuine. The policy engine asks: is it allowed — signature valid, limits unbroken, not a replay. Conflating them is how agent-commerce demos get robbed. Ten validation unit tests guard the seam. Full text: Warrant docs/decisions/ADR-004.`,
  },
  {
    name: "pg-timestamp-bug.md",
    content: `The timestamp that broke every signature (Warrant build log, day 2)

Persisted warrants started failing as INVALID_SIGNATURE. Cause: Postgres returned 2026-08-26 12:33:06.567+00 where the signer had produced an ISO string. Same instant, different bytes, dead signature.

Fix at the repository boundary: normalize to ISO on read, normalize expiresAt before signing. Lesson now enforced everywhere I serialize-then-sign: canonicalize at the boundary, never in the middle. Source: Warrant BUILD_LOG Phase 11.`,
  },
  {
    name: "gemini-feedback-loop.md",
    content: `Teaching Gemini to take rejection (Warrant build log, day 2)

Two integration fights. One: Gemini 3.x rejects follow-up calls unless function-call parts, thought_signature included, are echoed back verbatim. Fix: echo everything, touch nothing.

Two: the revision loop. BLOCK verdicts return the reason plus remaining daily budget, and the agent gets at most 3 retries. Live end-to-end: a tampered proposal BLOCKED with PRICE_MISMATCH, revised, then ALLOWED. Multi-turn holds too (also get bread survived). Rejection with structured reasons turns out to be a perfectly good planning signal. Source: Warrant BUILD_LOG Phases 9-10.`,
  },
  {
    name: "bloom-math.md",
    content: `Deletable Bloom filters, with receipts (from Grimoire)

Standard Bloom filters cannot delete. The deletable variant (arxiv:1005.0352) splits the bit array into r regions with a collision bitmap and only clears bits in collision-free regions.

Measured on Apple Silicon M1, 100k ops: XXH3 inserts at 46.9ns (21.3M ops/s), beating FNV-1a and Murmur3. Lookups: 10.2ns present, 21.7ns absent via early short-circuit. Hashing uses Kirsch-Mitzenmacher with a quadratic term to cut double-hashing correlation.

False-positive rate tracks theory within 0.05% across 6 to 14 bits per element. Deletion costs +0.1% space at r=m/1000 versus +300% for a 4-bit counting filter — but honesty requires the collapse curve: at 1M-bit filter and k=7, deletion success falls to 47.5% at N=10k and 0% past N=25k. Birthday paradox per region. Know the operating window or do not use it.

17 unit tests, Criterion benches for insert, lookup, delete. Source: Grimoire Bloom_Filter README.`,
  },
  {
    name: "huffman-coding.md",
    content: `Huffman coding, the whole thing on abacabad (from Grimoire)

Frequencies a:4, b:2, c:1, d:1. Min-heap merges smallest first: codes a:0, b:11, c:100, d:101. The message compresses from 64 bits to 15, a 76.6% reduction — before counting the tree and frequency table, which the README honestly excludes.

Covers O(n) frequency and encode/decode passes, O(k log k) tree build, padding, header design, and where this lives in production (ZIP, transmission, image and video codecs). Toy-scale, real understanding. Source: Grimoire huffman_coding README.`,
  },
  {
    name: "medium-posts.md",
    content: `Technical blog posts (Medium: @pumkininriver)

- Pane Abstraction in the Text Editor Rust That I Am Building to Use as Writer
- Implementing Floating Panes and a Buffer Manager in my Text Editor (Yonro), in the form of a whimsy tale
- Implementation of B-Tree and B+ Tree from Scratch in Rust (draft)
- Secret Whispers of DNS: Database and Protocol (draft)
- Building the 8085 Microprocessor Interactive Visual Model, Phase I (draft)
- Computer Networks Speed-run (draft)

The Yonro posts are narrated as whimsy tales and cross-link the writer profile. Full texts get embedded here as they are finalized.`,
  },
];

export default engineerWritings;
