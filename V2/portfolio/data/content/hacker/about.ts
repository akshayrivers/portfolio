import type { ContentFile } from "../types";

const hackerAbout: ContentFile[] = [
  {
    name: "pitch.md",
    content: `## Hacker — break it to fix it

Offensive security operator. TryHackMe Junior Penetration Tester path completed; radio-frequency protocol reverser; packet-level thinker.

Scope, stated plainly: labs, CTFs, my own hardware, and disclosed research only. Everything in this profile was broken legally — on machines built or rented for breaking.

The day job (backends, agents, shipped products) lives in the engineer profile. This is the night shift.`,
  },
  {
    name: "arsenal.md",
    content: `## Arsenal — tools with verified usage, nothing decorative

- **nmap** — full room series completed: host discovery, port scans, evasion, post-scan. See writings/nmap-*. My default discovery ladder and evasion logic live there.
- **Wireshark + Lua dissectors** — AFHDS-2A bind-phase analysis against live captures; DNS packet work. See projects/afhds_decoder.md.
- **Scapy** — live summarizer plus pcap-to-Wireshark handoff in packet_sniffer. See projects/packet_sniffer.md.
- **Burp Suite, Hydra, Metasploit, msfvenom, netcat, socat, NSE scripts** — Jr Penetration Tester path reps; field notes being distilled into writings/cheatsheets (landing in a later pass).
- **HackRF One + GNU Radio + gr-osmosdr** — the RF bench. Waterfall confirmation, IQ capture, GFSK demod. See projects/afhds_decoder.md.
- **Linux privesc toolkit** — LinEnum, LinPEAS, LES, GTFOBins patterns; documented in my private notes, cheatsheet entries pending.`,
  },
  {
    name: "path.md",
    content: `## The path so far

TryHackMe Junior Penetration Tester path — completed. Enumeration, NSE, web exploitation, privilege escalation: the rooms in writings/ are the receipts.

DEFCON Srinagar — CTF activities on the organizing side: building challenges teaches more attack surface than solving them.

IIT Jammu research internship — the step from labs to the real electromagnetic spectrum (details in projects/afhds_decoder.md).

Next: dedicated AD lab, Burp mastery, OSCP-style boxes. See ideas/.`,
  },
  {
    name: "links.md",
    content: `## Links

- [GitHub](https://github.com/akshayrivers)
- [TryHackMe write-ups repo](https://github.com/akshayrivers/TryHackMe-write-ups)
- [AFHDS decoder](https://github.com/akshayrivers/afhds_decoder)
- [Engineer profile](https://vinod-akshat.vercel.app) — the day job`,
  },
];

export default hackerAbout;
