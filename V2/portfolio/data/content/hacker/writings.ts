import type { ContentFile } from "../types";

const hackerWritings: ContentFile[] = [
  {
    name: "nmap-host-discovery.md",
    content: `Finding live hosts before you scan (from TryHackMe nmap01, condensed, own words)

Rule zero: ARP is link-local. Same subnet, ARP first; across routers, ARP never arrives — climb the ladder instead.

Target spec: lists, ranges, subnets, -iL files, -sL to preview without sending. Default discovery depends on privilege: local privileged starts with ARP; remote privileged tries ICMP echo/timestamp plus TCP ACK:80, SYN:443; unprivileged falls back to SYN:80,443.

The ladder, cheapest first: -PR (ARP), -PE/-PP/-PM (ICMP echo/timestamp/netmask), -PS/-PA/-PU (TCP SYN/ACK, UDP) with port lists, -sn to stop after discovery. If echo is blocked, timestamp or SYN:23 or ACK:80 usually is not — always carry a second probe.

Two honest notes: a netmask probe once returned zero hosts, which taught more than any success (learn multiple approaches); reverse-DNS etiquette is -n to skip, -R to force. Source: TryHackMe-write-ups nmap series.`,
  },
  {
    name: "nmap-port-scans.md",
    content: `The three scans that cover 95 percent (from TryHackMe nmap02, condensed)

Six port states; three scans. -sT completes the handshake (SYN, SYN/ACK, ACK, then RST/ACK teardown) — the only option unprivileged, the noisiest. -sS stops at SYN/ACK and RSTs: half-open, stealthy, fast, needs root. -sU infers from silence: closed UDP answers ICMP unreachable, open UDP answers nothing — hence open|filtered ambiguity and scans measured in quarter-hours, not seconds.

Scope and speed knobs: -F and --top-ports for triage, -p- for completeness, -T0-T5 plus --min/max-rate and --min/max-parallelism when the network pushes back.

Wireshark-level difference that matters: connect shows the full handshake then teardown; SYN shows SYN, SYN/ACK, RST and nothing else. Source: TryHackMe-write-ups nmap series.`,
  },
  {
    name: "nmap-evasion.md",
    content: `Weird flags and quiet packets (from TryHackMe nmap03, condensed)

Null, FIN and Xmas (-sN/-sF/-sX) exploit RFC behavior: closed ports RST, open ports stay silent. This defeats stateless firewalls and dies on stateful ones — know which you face first. Maimon (-sM) is a historical footnote (FIN/ACK, BSD-era).

-sA and -sW do not find services; they map firewall rules. An unfiltered port with no listener (my notes: 443 allowed, nothing home) is the expected shape of the answer, not a failure.

Evasion trio, with when-it-actually-works caveats: -S spoofing is useless without capturing the replies; -D decoys need ME/RND ordering thought; -f/-ff fragment (8 vs 16 byte offsets, --mtu in multiples of 8, --data-length padding — 24-byte TCP header into 3 fragments is the arithmetic to memorize); -sI idle/zombie scans bounce off an idle host and read openness from its IP-ID delta (+1 closed, +2 open). --scanflags exists for combos the presets never imagined.

Source: TryHackMe-write-ups nmap series. Strongest original-analysis file of the four: firewall-on/off output pairs throughout.`,
  },
  {
    name: "nmap-post-scan.md",
    content: `After the ports: versions, OS, scripts, saves (from TryHackMe nmap04, condensed)

-sV guesses, then confirms: --version-intensity trades noise for certainty, --version-light for stealth. Version scans force full handshakes — SYN stealth ends here.

-O needs both an open and a closed port and still lies under virtualization (a 5.13 kernel once read as 2.6-era). --traceroute counts TTL high-to-low, unlike the classic tool. NSE splits into safe versus intrusive/vuln/brute — run default scripts (-sC) freely, vuln and brute categories deliberately.

Output hygiene is a skill: -oA triple-saves (normal, XML, grepable), and the grepable line exists so multi-host triage is a pipeline, not eyeballs. My log exercise: three HTTPS hosts, one odd port (8089), all found by grep, none by staring. Source: TryHackMe-write-ups nmap series.`,
  },
  {
    name: "smb-telnet-ftp.md",
    content: `SMB, Telnet, FTP: enumerate, then exploit (from Network Services I, technique-only)

The pattern repeats per service and that is the lesson: understand the protocol, enumerate shares/users/versions, then exploit the weakest configured link.

SMB: client-server file/printer sharing; enumerate shares and access, exploit misconfigurations and known service versions. Telnet: plaintext remote shell protocol — enumeration is credential and banner work; exploitation is why nobody deploys it anymore. FTP: same shape — anonymous access checks, version probing, then targeted exploitation.

No flags, no passwords, no room answers published — the techniques transfer, the answers expire. Source: TryHackMe-write-ups Network Services I.`,
  },
  {
    name: "nfs-privesc-technique.md",
    content: `NFS to root: the technique, not the flag (from Network Services II, technique-only)

Chain shape: aggressive scan finds NFS on 2049; showmount lists exports; a world-writable home share mounts locally; a dotfile hunt surfaces SSH keys; key login lands a low shell.

Escalation shape: plant a binary on the mounted share, chown it root and set the SUID bit from the mounting side, execute it from the target side with -p to keep privileges. The mount trusts the client for UIDs — that trust is the vulnerability.

Published as technique only: no flags, no key material, no target identifiers. Source: TryHackMe-write-ups Network Services II.`,
  },
  {
    name: "bind-mode-first.md",
    content: `Bind-mode-first: the FHSS attack surface (from afhds_decoder)

A frequency-hopping link looks unchaseable: 16 channels, new one every ~3.85 ms, retune latency eating most of the budget. The leverage is that hopping systems must bootstrap: bind mode sits on fixed frequencies and broadcasts the hop table in the clear.

So the pipeline ignores the hopping stream entirely: confirm bursts on the waterfall, capture ten seconds of bind-mode IQ, demodulate, FEC-decode, CRC-check, and search for the bind packet. Channel math is Freq = 2400 + ch*0.5 MHz. General principle for any FHSS target: attack the bootstrap, never the hop. Source: afhds_decoder docs.`,
  },
  {
    name: "demod-debugging-notebook.md",
    content: `Demod debugging notebook (from afhds_decoder)

Waterfall first: confirm hopping bursts (~3-4 ms, ~500 kHz wide) before capturing anything. Gain staging next: too hot clips, too cold loses the preamble. Frequency-offset sweeps in +/-50/100/150 kHz steps when the constellation will not lock.

xxd is the oracle: real demodulated bits show preamble/magic patterns; zeros mean gain or offset; uniform randomness means you are demodulating noise. CRC failure after a plausible lock usually means bit rotation — try 1-7 before touching anything else. FEC corrects single-bit damage per 7-bit block; anything worse is a capture problem, not a decode problem.

Environment checklist before every session: USB 2.0 port (noise), plugdev permissions, VM passthrough working, disk space for IQ (hundreds of MB per capture), GNU Radio version matched. Most failed evenings were environment, not theory. Source: afhds_decoder docs and TROUBLESHOOTING.`,
  },
  {
    name: "why-scapy-drops-packets.md",
    content: `Why Scapy drops packets (from packet_sniffer)

Userland sniff with store=False still pays per-packet Python callback cost. At low rates it is fine; under load the kernel buffer overruns and packets vanish silently — the sniffer reports nothing because it never saw anything.

Production pattern: let dumpcap or tcpdump own capture (kernel-adjacent, BPF-filtered), rotate pcap by size or time, and have analysis watch files. BPF in-kernel filtering, 5-tuple flow assembly with expiry, and size/time rotation are the sniffer roadmap for exactly this reason. Prototype in Scapy, produce with the right tool. Source: packet_sniffer README roadmap.`,
  },
];

export default hackerWritings;
