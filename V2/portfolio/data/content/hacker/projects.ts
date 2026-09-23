import type { ContentFile } from "../types";

const hackerProjects: ContentFile[] = [
  {
    name: "afhds_decoder.md",
    content:
      "AFHDS-Decoder — cracking a UAV link with $300 of SDR | Python, GNU Radio, HackRF One\nhttps://github.com/akshayrivers/afhds_decoder\n\nTarget: FlySky AFHDS-2A (FS-i6 family) — 2.4 GHz ISM, GFSK at 1 Mbps, 16-channel FHSS hopping roughly every 3.85 ms.\n\nThe key insight is bind-mode-first: the hopping stream is unchaseable, but bind mode sits on 2 fixed frequencies and broadcasts the hop table in the clear. Capture that, not the stream.\n\nPipeline built: live waterfall confirmation of hopping bursts, 10-second IQ capture of bind mode (~160 MB), GFSK demodulation with symbol-timing recovery, (7,4) Hamming FEC decode, CRC-16-CCITT validation, then bind-packet search emitting TX ID and hop channels (Freq = 2400 + ch*0.5 MHz). Reproducible via setup.sh and a pre-flight test_system.py.\n\nVerified vs ongoing, stated honestly: demod chain works, bind-phase structure parses against live captures. Hop-table extraction is ongoing. Realtime tracking is bounded by HackRF retune latency. No synthetic transmitter IDs or microsecond channel readouts are presented as results.\n\nHardest debugging: RF/IF gain staging, frequency-offset sweeps, xxd pattern triage (good bits vs zeros vs noise), bit-rotation on CRC failure — plus the tooling fights (antenna bands, VM USB passthrough, IQ disk sizing, macOS builds). Full notebook in writings/demod-debugging-notebook.md.",
  },
  {
    name: "packet_sniffer.md",
    content:
      "Packet Sniffer | Python, Scapy | with @vishalxdogra\nhttps://github.com/akshayrivers/packet_sniffer\n\nA learning sniffer with honest scope: live one-line summaries (timestamp, src:port to dst:port, protocol, length) plus optional pcap dump for Wireshark follow-up. Scapy sniff in a restart-on-exception loop, layered haslayer classifier (ARP, ICMP, TCP, UDP, IP, Ether), argparse CLI (-o output, -t duration), clean PcapWriter close on Ctrl-C or timeout.\n\nIteration evidence: main.py had real bugs (UDP port read from the TCP layer, arp.dst vs arp.pdst, duplicated length calls, hardcoded macOS interface) — all_sniffer.py fixed them. Verified the boring way: ping, curl and dig while sniffing.\n\nScope honesty: steps 1-2 shipped. Steps 3-9 (BPF filters, DNS/HTTP headlines, top-talkers, 5-tuple flows with expiry, pcap rotation, dumpcap offload, alert heuristics) are an explicit roadmap, not code. Why userland sniff drops packets — and the dumpcap FIFO pattern that fixes it — is written up in writings/why-scapy-drops-packets.md.",
  },
  {
    name: "tryhackme_labs.md",
    content:
      "TryHackMe Labs | Jr Penetration Tester path (completed)\nhttps://github.com/akshayrivers/TryHackMe-write-ups\n\nRooms worked and documented, technique-first (no flags or passwords published — TryHackMe asks, and rooms change):\n\n- Nmap: live host discovery (ARP/ICMP/TCP/UDP ping ladder, subnet logic), basic port scans (-sT/-sS/-sU, packet-level narratives), advanced evasion (Null/FIN/Xmas, ACK/Window firewall mapping, spoof/decoy/fragment/idle), post-scan (service detection, OS guessing, NSE, output hygiene).\n- Network Services I: SMB/Telnet/FTP enumerate-then-exploit chains.\n- Network Services II: NFS share enumeration to SUID-bash privilege escalation.\n\nFull notes in writings/nmap-host-discovery.md, writings/nmap-port-scans.md, writings/nmap-evasion.md, writings/nmap-post-scan.md, writings/smb-telnet-ftp.md, writings/nfs-privesc-technique.md.",
  },
  {
    name: "dns-attack-sims.md",
    content:
      "DNS Attack Simulations | Rust\n\nCache-poisoning and packet-spoofing simulations live inside the engineer profile's DNS resolver (resolve/poison/spoof CLI) — built for studying the attacks, not staging them. See the engineer profile's projects/dns_resolver.md. This profile claims no separate DNS tooling.",
  },
];

export default hackerProjects;
