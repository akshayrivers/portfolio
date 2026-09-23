import type { ContentFile } from "../types";

const hackerIdeas: ContentFile[] = [
  {
    name: "cheatsheets-pending.md",
    content:
      "Inferred: my private notes/ repo holds field notes on LinEnum, LinPEAS, LES, Linux Smart Enumeration, Burp, Hydra, Metasploit, msfvenom, netcat, socat, webshells, GTFOBins/PayloadAllTheThings/pentestmonkey patterns, and Linux privesc one-liners. Distill them into writings/cheatsheets/ once a fresh GitHub token restores access. Nothing here is invented in the meantime.",
  },
  {
    name: "ad-lab.md",
    content:
      "Inferred, unimplemented: build a home Active Directory lab (two Windows VMs + Kali attacker) and work credential theft, Kerberoasting, and lateral movement end to end. The TryHackMe rooms teach pieces; a persistent lab teaches campaigns.",
  },
  {
    name: "burp-mastery.md",
    content:
      "Inferred, unimplemented: Burp Suite past the repeater — intruder pitchforks, sequencer entropy checks, collaborator for out-of-band exfiltration proofs, and one full Web Security Academy track documented like the nmap series.",
  },
  {
    name: "ctf-hitlist.md",
    content:
      "Inferred: rooms and boxes queued after the Jr Pentester path — TryHackMe Offensive Pentesting path, HackTheBox Starting Point Tier 1-2, then easy-rated active boxes. One write-up per box, same technique-only policy as writings/.",
  },
  {
    name: "hop-table-finish.md",
    content:
      "Inferred, unimplemented: finish AFHDS hop-table extraction (currently ongoing) and validate against over-air captures; then realtime tracking within the retune budget. The decoder repo tracks the engineering; this is the milestone line.",
  },
  {
    name: "sniffer-production.md",
    content:
      "Inferred, unimplemented: take packet_sniffer through its own roadmap — BPF filter argument, interface flag, top-talker counters, dumpcap FIFO offload with loss measurement. The design doc is written (writings/why-scapy-drops-packets.md); the code is not.",
  },
];

export default hackerIdeas;
