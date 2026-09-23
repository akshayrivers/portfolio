Vinod Akshat
NIT Srinagar, Jammu and Kashmir, India
+91 9906132454 | akshayforrivers@gmail.com | LinkedIn | GitHub | Portfolio | Medium | LeetCode
Education
National Institute of Technology Srinagar Bachelor of Technology in Computer Science and Engineering Experience
August 2023 – May 2027
Srinagar, Jammu and Kashmir
Indian Institute of Technology Jammu December 2025 – March 2026
Research Intern, Cybersecurity Jammu, Jammu and Kashmir
• Reverse-engineered the AFHDS-2A UAV protocol from 30+ GB of RF captures (HackRF One, GNU Radio): built a
GFSK demodulation chain (decimation, filtering, quadrature demod, Mueller–M¨uller clock recovery) and co-built a Lua
dissector parsing bind-phase packet structure against live captures; hop-table extraction ongoing.
• Evaluated and reproduced battery-drainage (DoB) and DoS attack vectors on UAVs across multiple tools (MAVProxy,
MAVSDK, boofuzz), and validated GPS-spoofing/failsafe behavior using ArduPilot SITL and QGroundControl.
Anantwave Quantum Computing July 2025 – October 2025
Backend Development Intern Andhra Pradesh, India
• Built an authentication backend (Node.js, Express, TypeScript) with OAuth 2.0 (GitHub/Google), Auth.js,
JWT, PostgreSQL, and bcrypt hashing.
• Implemented RBAC middleware for admin/user routes; debugged a separate team’s Python backend via structured
logging and root-cause analysis.
Projects
Warrant – Agentic Authorization Engine | TypeScript, PostgreSQL, React | Github | Live Razorpay Buildathon
• Deterministic policy engine for AI agent commerce: separates agent intent from authorization authority via signed
spending warrants and cryptographic replay protection.
• Fastify API + PostgreSQL + Razorpay integration + React dashboard; deterministic ALLOW/BLOCK verdicts
recorded in a hash-chained auditable ledger.
Yonro – Terminal Text Editor | Rust | Github | Blog November 2025 – Present
• Extensible terminal text editor: grapheme-aware Unicode editing, custom text buffer, syntax highlighting, and 20+
Vim-style modal commands on a layered core with pane abstraction and an async Tokio plugin runtime.
• 7-suite Criterion benchmark (33 metrics) in CI: 538 ns pane relayout, 3.46 µs multi-pane edits, 11.6 ms full session;
wired into GitHub Actions.
Grandma’s Launcher | Java, Android Studio, TypeScript, Docker | Github April 2026 – Present
• Accessibility-first Android launcher for senior citizens: large touch targets, text-to-speech guidance, high-contrast UI;
engineered as a default home replacement via Android’s Launcher APIs.
• Dockerized caretaker backend + PWA with magic-link auth and SOS live-location sharing; RSA-2048 handshake
benchmarked at 2.75 ms sign / 121 µs verify, all under the 16.6 ms frame budget.
Grimoire – Systems & ML Foundations | C, C++, Rust, Python, Java | Github December 2024 – Present
• 20+ algorithms and cryptographic primitives: B/B+ Trees, LSM Trees, Bloom Filters, a slab-based memory
allocator, RFC 1035 DNS resolver, HMAC, RSA-2048; plus compiler fundamentals and ML from first principles (incl.
a neural network from scratch in C) with a LangChain + Gemini agent.
• Custom B-Tree beat std::BTreeMap and a production crate on search (40ms vs. 46ms/102ms).
Technical Skills
Languages: Rust, TypeScript, C, C++, Python, Java, JavaScript, SQL, Bash
AI/ML & Security: LangChain, LangGraph, Gemini API, agentic workflows, GNU Radio, Wireshark, protocol
reverse-engineering, cryptography, RBAC
Backend & Frontend: Node.js, Express, Fastify, PostgreSQL, Auth.js, OAuth 2.0, JWT, bcrypt, React, Next.js, Vite
Cloud & Tools: Azure, Docker, GitHub Actions CI/CD, Linux/Unix, Git, GDB, Android Studio, Postman, Criterion
benchmarking
Achievements & Leadership
• Lead Moderator, DEFCON Srinagar – 15-member team; event logistics, speaker outreach, CTF activities.
• Polaris Fellowship 2026 Finalist (Top 1%) – selected among the top 100 from 10,000+ applicants.
• Open Source, Zed Editor – 3+ merged PRs, issue triage, contributor to a production editor.

Vinod Akshat
NIT Srinagar, Jammu and Kashmir,India
+91 9906132454 akshayforrivers@gmail.com Linkedin Github Portfolio Medium Leetcode
Education
National Institute of Technology Srinagar Bachelor of Technology in Computer Science and Engineering Relevant Coursework
August 2023 – May 2027
Srinagar, Jammu and Kashmir
Data Structures and Algorithms, Compiler Design, Software Engineering, Theory of Computation, Database Management
Systems (DBMS), Artificial Intelligence, Machine Learning, Systems Programming, Computer Organisation and Architecture,
Operating Systems, Computer Networks, Network Security, Cyber Laws and Forensics, Communication Systems
Experience
Indian Institute of Technology Jammu December 2025 – March 2026
Research Intern Jammu, Jammu and Kashmir
• Conducted reverse engineering of UAV communication protocols from 30+ GB of raw RF captures using Software
Defined Radio (SDR) tools including GNU Radio and FISSURE, identifying packet formats, frame structures, and
communication workflows.
• Analyzed wireless traffic through Wireshark and custom Lua dissectors to reconstruct protocol state machines, decode
message exchanges, and document protocol behavior for research and validation purposes.
Anantwave Quantum Computing Company July 2025 – October 2025
Backend Development Intern Andhra Pradesh, India
• Built the authentication and authorization backend for a full-stack app using Node.js, Express.js, and TypeScript-
OAuth 2.0 (GitHub, Google) and credentials login via Auth.js, JWT sessions, PostgreSQL, and bcrypt hashing.
• Implemented role-based access control (RBAC) middleware for admin/user routes; debugged a separate team’s
Python backend via structured logging and root-cause analysis.
Projects
Yonro - Text Editor | Rust | Github | Blog November 2025 – April 2026
• Engineered an extensible terminal text editor in Rust featuring grapheme-aware Unicode editing, a custom text buffer,
syntax highlighting, file persistence, a low-latency rendering pipeline and 20+ Vim-style modal commands.
• Architected a layered editor core with a reusable binary layout tree, pane abstraction, and asynchronous plugin
runtime using Tokio and MPSC channels, enabling independently developed editor extensions without blocking the UI.
• Designed a modular command-dispatch pipeline integrating keyboard, mouse, and editor commands through handler
registries while optimizing responsiveness using viewport-aware rendering, selective redraws, and pane-local state.
Grandma’s Launcher | Java, Android Studio, TypeScript, React | Github April 2026 – Present
• Developed an accessibility-first Android launcher for senior citizens and non-literate users featuring large touch targets,
text-to-speech guidance, high-contrast UI, and adaptive widgets for intuitive navigation, including dynamic clocks.
• Built a central backend server and Progressive Web App enabling remote caretaker management, magic-link
authentication, emergency SOS with live location sharing, and device administration.
• Engineered the launcher as a default home replacement using Android’s Launcher APIs, optimizing startup latency,
memory usage, and responsiveness on low-end devices.
Grimoire | C, C++, Python, Rust, Bash, Java | Github December 2024 – Present
• Implemented 15+ systems-level algorithms and data structures spanning B/B+ Trees, LSM Trees, Bloom Filters,
Huffman Compression, an RFC 1035-compliant DNS Resolver, a slab-based memory allocator in C, and
thread-safe concurrent data structures, alongside documented language-quirk explorations in Java and Bash.
• Explored systems design from first principles by recreating production-inspired components, emphasizing correctness,
algorithmic reasoning, implementation trade-offs, and performance analysis.
Technical Skills
Languages: Rust, C, C++, Python, Java, HTML/CSS, JavaScript, TypeScript, SQL, RISC-V Assembly, Bash
Developer Tools: GDB Debugger, Git, Android Studio, Postman, CI/CD, VS Code, Neovim, Google Cloud Platform
Technologies / Frameworks: Linux/Unix, GNU Radio, Next.js, React, Wireshark, Docker, PostgreSQL, MongoDB
Achievements & Leadership
• Lead Moderator, DEFCON Srinagar; Leading a 15-member volunteer team organizing event logistics,
speaker outreach, workshops, CTF activities, and village operations.
• Open Source Contributor to the Zed editor; 3+ merged PRs, issue triage, and ongoing contributions.
• Polaris Fellowship 2026 Finalist (Top 1%); selected among the top 100 from 10,000+ applicants.

[text](../../../../../../../Downloads/medium-export-a2b4c108110542f22cd1df65f5afc36ca6aededefcede08f1cebd86a53d24252/posts/2026-05-16_Pane-Abstraction-in-the-Text-editor-Rust--that-I-am-building-to-use-as-writer-f4296c77372f.html) [text](../../../../../../../Downloads/medium-export-a2b4c108110542f22cd1df65f5afc36ca6aededefcede08f1cebd86a53d24252/posts/2026-07-05_Implementing-Floating-Panes-and-a-Buffer-Manager-in-my-Text-Editor--Yonro----In-form-of-a-whimsy--ba4d12b0c2a5.html) [text](../../../../../../../Downloads/medium-export-a2b4c108110542f22cd1df65f5afc36ca6aededefcede08f1cebd86a53d24252/posts/draft_Building-the-8085-microprocessor-interactive-visual-model--Phase--I--Easy---0766a9ce418f.html) [text](../../../../../../../Downloads/medium-export-a2b4c108110542f22cd1df65f5afc36ca6aededefcede08f1cebd86a53d24252/posts/draft_Computer-Networks-Speed-run-a36be41a4988.html) [text](../../../../../../../Downloads/medium-export-a2b4c108110542f22cd1df65f5afc36ca6aededefcede08f1cebd86a53d24252/posts/draft_Implementation-of-B-Tree-ans-B--Tree-from-scratch-in-Rust-1130d5298c80.html) [text](../../../../../../../Downloads/medium-export-a2b4c108110542f22cd1df65f5afc36ca6aededefcede08f1cebd86a53d24252/posts/draft_post-2d6612a71ba0.html) [text](../../../../../../../Downloads/medium-export-a2b4c108110542f22cd1df65f5afc36ca6aededefcede08f1cebd86a53d24252/posts/draft_post-aa6aae1b1484.html) [text](../../../../../../../Downloads/medium-export-a2b4c108110542f22cd1df65f5afc36ca6aededefcede08f1cebd86a53d24252/posts/draft_Secret-Whispers-Of-DNS----Database-and-Protocol---a05e837f0d5b.html)

---

Computer Networks: Manglu's Perspective
Rabdi has made it clear that this is one of the core subjects which you need to know fully to nail your interviews, Not just depth in a few topics but 7/10 depth coverage overall. (Please note that this is going to be a very big one)
Now there are two ways to go about it: 
1. A Top Down approach
2. A Bottom Up approach
I have a little bit of confidence in going by the Top down approach because of the amazing explanations in the book Computer Networks: A top down approach by James F. Kurose. And that is why I will choose The Bottom Up approach for this blog, to get more confidence and looking at Computer networks from a new perspective.
But before we deep dive, let us first define the scope because Computer Networks is very vast and the complexity can very easily explode if not careful.
Content:
1. Communication? Prerequisites?
2. Network Models (OSI, TCP/IP)
3. Layer 1: Physical 
4. Layer 2: Data Link 
5. Layer 3: Network
6. Layer 4: Transport
7. Layer 5: Session
8. Layer 6: Presentation
9. Layer 7: Application
10. Dissection of a Real World protocol from scratch
11. Rabdi's Test

---

So without waiting any further Let's start with
1. Prerequisites and Communication Basics
The topics Covered: 
a) What communication actually means
b) Encoding/modulation basics
c) Bit rate vs baud rate
d) Bandwidth, latency, throughput
e) Analog vs digital signals
f) Big Endian v/s Little Endian
g) Basic networking hardware: repeater, hub, bridge, switch, router, gateway
Now, let's start with something very simple. 
a) What is communication?
Communication is the process of sending and receiving messages to share information, thoughts, and feelings between people. It requires a sender, a message, a medium, or channel, and a receiver who understands the information
And here is how I like to think about it , you have information at one node(in your head) and you speak or write or with signs communicate with another person. This speaking, writing, or signing is the way in which we represent and express the information. The medium is what actually carries the resulting signal from the sender to the receiver. But now while you speak or write you will need to have a language and the receiver must also understand this language. Let's take english for example. You want to tell your friend that "It is really sunny today" . For that you both must first understand english. If you decide to use the medium of speaking the receiver- your friend must be able to hear.
// insert a diagram of this scenario
b) Encoding/ Modualtion Basics 
We have established that communication starts with some information that the sender wants to convey to the receiver. But information by itself cannot simply travel through a physical medium.
If I want to tell my friend:
"It is really sunny today."
I first represent that information using a language we both understand. If I choose speech, my vocal system converts those words into sound waves, which then travel through the air and are picked up by my friend's ears.
Information->Representation-> Signal -> Medium -> Signal -> Interpretation
For humans, this seems almost trivial becuase we are naturally capable of producing and interpreting speech. 
Communication:

   Sender                              Receiver
┌──────────────┐                    ┌──────────────┐
│    Brain     │                    │    Brain     │
│ "It's sunny" │                    │ "It's sunny" │
└──────┬───────┘                    └──────▲───────┘
       │                                   │
       │ Encoding                          │ Decoding
       ▼                                   │
┌──────────────┐      Sound waves     ┌────┴───────┐
│ Vocal system │ ───────────────────► │    Ear     │
└──────────────┘        through       └────────────┘
                           │
                          Air
                        (medium)
Encoding 
Suppose a computer wants to send the character: A 
The computer needs some agreed-upon representation for that character. For example, using ASCII: A -> 01000001
 Now we have converted the characters into bits. 
This process of representing information in a particular form so that it can be stored, processed, or transmitted is broadly referred to as encoding.
The same information can often have multiple valid representations. For eg. in human communication:
"It is really sunny today"
"Today is really sunny"
"It's very sunny today"
These sentences are different representations of essentially the same idea.
Similarly, computers can represent and encode information in different ways depending on what they are trying to accomplish.
Some encoding techniques are designed for different purposes: 
- Compression: reduce the number of bits required to represent information.
- Error-control coding: add redundancy so that errors can be detected for transmission over a physical medium.
- Line coding: represent digital bits using patterns suitable for transmission over a physical medium.
For eg, Manchester encoding represents bits using transitions in the signal rather than simply assigning one fixed voltage to 0 ans another to 1.
So we should not think of "encoding" as one single technique. It is a broad idea and different encoding schemes solve different problems.
From Bits to symbols
Now suppose our computer has the following bits: 
10110100
we can't physically throw these 0s and 1s through a cable.
The information represented by these bits ultimately needs to be conveyed using a physical signal.
One useful intermediate concept is symbol.
A symbol is a distinct signal state, waveform, or modulation state used to represent one or more bits during transmission.
For eg, imagine that we decide: 
00 = Symbol A
01 = Symbol B
10 = Symbol C
11 = Symbol D 
Now every symbol represent 2bits. And our original data: 10110100 can therefore can be grouped as:
10 11 01 00
 |  |  |  |
 C  D  B  A
Instead of thinking about individual bits being transmitted one by one
1 → 0 → 1 → 1 → 0 → 1 → 0 → 0
we can now think of the transmitter sending a sequence of symbols:
 C -> D -> B -> A
A small real-world analogy
A somewhat similar idea can be seen in Morse code(I found this while watching Stranger things).When communicating using Morse code, we don't directly transmit letters as letters. Instead, we agree beforehand on a set of symbols:This is useful because now we have separated two different ideas: 
"A → .-" 
" B → -…" 
"C → -.-." 
"D → -.." et
The reciever already knows the mapping. So when they receive ".-" 
they inerpret it as "A"
The important idea here is that we first agree on a representation for the information, and then transmit that representation.
Computer communication follows a similar principle. So when the transmitter wants to send the bit pattern 10, it doesn't somehow send the abstract idea of "10". It transmits the physical signal corresponding to the agreed symbol for 10, and the receiver uses the same mapping to recover those bits.
Of course, Morse code and computer communication are not technically the same thing. The analogy is only meant to illustrate the idea of agreed-upon symbols and mapping.
Bits are a representation of information. Symbols are distinct states used to represent those bits during transmission.
But we still have a problem.
Our symbols A, B, C, and D are just abstract concepts. They don't physically travel through the cable either.
So how do we turn these symbols into something that can travel?
That's where modulation/carrier and Line coding/ baseband come in.
Not every communication system uses carrier-based modulation. Baseband systems use line coding to directly create the physical signaling waveform, while passband systems use modulation to modify a carrier.
                     Bits
                       │
                       ▼
                    Symbols
                       │
             ┌─────────┴─────────┐
             │                   │
             ▼                   ▼
        Line coding          Modulation
             │                   │
       Baseband signal      Modulated Carrier signal
             │                   │
             └─────────┬─────────┘
                       ▼
                 Physical medium
But What is modulation?
Imagine that we have a wave that can travel through our chosen medium. We can think of this wave as our carrier signal. Now, instead of creating a completely new signal for every piece of information, we can change some property of this carrier according to the symbol we want to transmit.
Modulation is the process of changing a property of a carrier signal to represent information.
The properties we are mainly interested in are:
- Amplitude (how large the signal is)
- Frequency (how quickly the signal oscillates)
- Phase (where the signal is in its cycle)
So the problem has now changed from:
"How do I send C?"
to:
"How can I make the physical signal look different when I want to send C instead of D?"
And there are several ways of doing this.
1. We could change the amplitude:
C → low amplitude
D → high amplitude
2. We could change the frequency:
C → low frequency
D → high frequency
3. We could change the phase:
C → phase 0°
D → phase 180°
These different ways of changing the carrier give us different modulation techniques.And this gives us the basic idea behind : 
DIGITAL MODULATION TECHNIQUES: 

ASK → Amplitude Shift Keying
FSK → Frequency Shift Keying
PSK → Phase Shift Keying
QAM → Quadrature Amplitude Modulation
Before looking at each one, notice the progression we have built:
Information-> Bits->Symbols->Modulation->Physical Signal->Medium
The important part is that symbols and modulation solve two different problems.The symbols tell us:
What distinct values do we want to transmit?
Modulation tells us:
How do we represent those values using a physical signal?
I will not go deep into the mathematical or signal-processing details of these techniques here. The goal here is simply to understand what modulation is, why we need it, and how it connects bits and symbols to physical signals. However, there is one technique which we will discuss and little more closely because we will encounter it later when discussing Wi-Fi:QAM
c) Bit rate vs baud rate
Now that we have understood bits and symbols, we can ask a very natural question:
How fast are these bits and symbols actually being transmitted?
This is where bit rate and baud rate come in.
- Bit rate is the number of bits transmitted per second.
- Baud rate (symbol rate) is the number of symbols transmitted per second.
Going back to our example: 10110100 
we had 8 bits represented using 4 symbols, meaning 
1 symbol = 2 bits
If the transmitter sends 1 million symbols per second:
Baud rate = 1 Mbaud
and Since every symbol represents 2 bits:
Bit Rate = 1 Mbaud x 2 bits/symbol = 2 Mbps
So:
Bit Rate=Baud Rate×Bits per Symbol​
And in general, if a modulation scheme has M possible symbols:
Bits per Symbol=log2​(M)​
d) Bandwidth, Latency, Throughput
These terms appear constantly in computer networks. I will try to give a generally applicable definition for them here and work with formulas in the layers as they come. 
Bandwidth: 
At a basic level, bandwidth describes the capacity of communication channel. In networking, however, the term bandwidth is commonly used to describe the maximum data rate a link can support. For digital networks, we often talk about bandwidth as a data rate : 100 Mbps , 1 Gbps, 10 Gbps
for eg, if a network link has a capacity of 1 Gbps, it means this link theoretically can carry up to 1 billion bits per second under the relevant conditions.
Think of bandwidth as the width of the pipe. A wider pipe can carry more water at once.
Similarly, a higher-capacity link can carry more bits per second.
Bandwidth -> how much data the link can potentially carry.
There is, however, another meaning of bandwidth that we will encounter when talking about signals. In signal processing, bandwidth refers to the range of frequencies occupied by a signal or supported by a channel, and is measured in hertz (Hz).
For now, when we talk about a network link as having 100 Mbps or 1 Gbps of bandwidth, we are referring to its data-carrying capacity, not its frequency range.
Latency 
Now suppose we send a packet. Even if the link has huge bandwidth, the packet still takes some amount of time to travel from the sender to the receiver. That delay is latency. More formally: 
Total latency ≈ processing + queuing + transmission + propagation
Latency is affected by things such as (I scream to my friend "It's very sunny today ":
- physical distance (He is very far) 
- propagation through the medium (We are underwater)
- processing (He is a bit slow)
- queuing (I have 10 other friends waiting to talk to him first)
- transmission time (I have a very long message to physically send) 
So a link can have : High Bandwidth + High Latency at the same time. 
Think of this with another analogy : A highway can be extremely wide but still take a long time to reach if the destination is very far away
Throughput
Now this is a quantity we usually care about in practice: 
How much data is actually being delivered?
That's throughput.
Throughput is the actual rate at which data is successfully delivered over the network.
for eg, suppose a link has Bandwidth = 1 Gbps . But because of congestion, protocol overhead, interference, or other limitations, you are actually receiving Throughput = 700 mbps
Final Simple analogy for these : 
             ROAD

Bandwidth  → How wide is the road?
Latency    → How long does one vehicle take to reach?
Throughput → How many vehicles actually reach the destination per second?
e) Analog vs digital signals
Communication signals can broadly be classified as analog or digital.
The important thing to understand here is that analog vs digital can refer to the nature of the signal itself, while the information being communicated can be represented digitally or analogically
1. Analog communication System
In an analog communication system, information is represented using a continuously varying signal.
For eg, when you speak, your voice creates continuous variations in air pressure. A microphone can convert these variations into a continuously varying electrical signal.
       Information
      "Hello"
          │
          ▼
      Microphone
          │
          ▼
   Analog electrical
        signal
          │
          ▼
        Medium
          │
          ▼
   Analog electrical
        signal
          │
          ▼
       Speaker
          │
          ▼
      "Hello"
The signal can take on a continuous range of values over time.
Analog waveformA useful example is traditional AM/FM radio, where the information is represented by continuously varying properties of a carrier signal.
2. Digital communication System
In a digital communication system, the information is represented using discrete values, typically bits.
        Information
       "Hello"
           │
           ▼
       Encoding
           │
           ▼
          Bits
      01001000...
           │
           ▼
    Physical signaling
           │
           ▼
         Medium
           │
           ▼
    Physical signaling
           │
           ▼
     Bits / symbols
           │
           ▼
       Decoding
           │
           ▼
        "Hello"

Unlike an analog signal, digital information is represented using a finite set of discrete states.
Digital waveformThis is a simplified representation. Real physical signals are generally more complicated, and the exact signaling method depends on the technology.
Digital information ≠ necessarily a digital physical signal
This distinction is very important.
Computers work with digital information, but that doesn't mean the physical signal carrying that information must itself look like a sequence of perfect square-wave 0s and 1s.
For example, Wi-Fi carries digital information using electromagnetic waves. The bits are mapped to symbols and then represented through modulation techniques such as QAM. The resulting physical waveform is continuous.
A computer may have digital information:
Digital information → physical signal
And that physical signal can be electrical, optical, or electromagnetic depending on the medium and technology.
Final communication analogy diagram:
                    HUMAN COMMUNICATION

   Information                                  Information
 "It's sunny today"                           "It's sunny today"
       │                                             ▲
       ▼                                             │
 Representation                                Interpretation
       │                                             ▲
       ▼                                             │
   Sound signal ─────────── Air ───────────►  Sound signal
       │                                             │
     Sender                                        Receiver

                    COMPUTER COMMUNICATION

   Information                                  Information
       │                                             ▲
       ▼                                             │
      Bits                                        Decoding
       │                                             ▲
       ▼                                             │
    Symbols                                      Symbols
       │                                             ▲
       ▼                                             │
 Physical representation                       Physical signal
       │                                             ▲
       ▼                                             │
 Physical signal ─────── Medium ───────────► Physical signal
And this brings us to the central idea of this entire section:
Information is represented as bits, bits are mapped to symbols, and those symbols are physically represented as signals that can travel through a medium.
The exact way those symbols become signals depends on the communication technology, line coding/baseband signaling, modulation, optical signaling, and so on.
f) Big Endian v/s Little Endian
Endianness is primarily a property of how a processor/software environment represents multi-byte values in memory. This becomes important in networking because different machines may represent multi-byte values differently internally. Network protocols therefore define a common representation called network byte order, traditionally big-endian.
Value: 0x12345678
Big-endian memory:
┌────┬────┬────┬────┐
│ 12 │ 34 │ 56 │ 78 │
└────┴────┴────┴────┘
  ↑
lowest address
Little-endian memory:
┌────┬────┬────┬────┐
│ 78 │ 56 │ 34 │ 12 │
└────┴────┴────┴────┘
  ↑
lowest address
Network protocols traditionally use network byte order, which is big-endian. Many common systems, including x86 systems and most modern ARM systems, use little-endian representation.
g) Basic Networking Hardware : 
So far, we have looked at how information becomes bits, how bits are represented as signals, and how those signals travel through a medium.
But in a real network, a sender and receiver are rarely connected by a single cable. Intermediate devices are often needed to extend signals, connect multiple devices, separate networks, or route traffic between different networks.
The most common ones are:
1. Repeater
A repeater is a simple device that receives a signal and regenerates it so that it can travel farther.
Device ───────► Repeater ───────► Device
                 │
          regenerates signal
Its job is essentially:
Receive a signal → regenerate it → send it onward.
It doesn't make routing decisions or understand applications. It is primarily concerned with the physical signal.
2. Hub
A hub is basically a multi-port repeater.
If a frame comes into one port, the hub repeats the signal out through the other ports.
                 ┌──────── Device A
                 │
Device B ─────── HUB ─────── Device C
                 │
                 └──────── Device D
So if A sends something, everyone connected to the hub receives the signal. Hubs are largely obsolete today because switches are much more efficient.
3. Bridge
A bridge connects two network segments and can make forwarding decisions based on MAC addresses.
Unlike a hub, it doesn't blindly forward everything. It can learn which devices are reachable through which side of the bridge and forward frames accordingly.
Network A ───── Bridge ───── Network B
Bridges operate at the Data Link Layer (Layer 2).
A modern Ethernet switch is essentially a multi-port bridge.
4. Switch
A switch can be thought of as a bridge with many ports.
It learns the MAC address associated with each port and uses that information to decide where to forward an Ethernet frame.
             ┌──── PC A
             │
             ├──── PC B
Switch ──────┼──── PC C
             │
             └──── PC D
If A wants to send a frame to C, the switch can forward it specifically toward C rather than sending it to everyone.
Switch → primarily Layer 2 → forwards frames using MAC addresses.
We'll study this properly when we reach the Data Link Layer.
5. Router
A router connects different networks and decides where packets should go based primarily on IP addresses.
For example:
       Network A
      192.168.1.0/24
             │
             │
          Router
             │
             │
       Network B
       10.0.0.0/24
While a switch mainly moves frames within a network, a router connects different networks and makes forwarding decisions using network-layer information.
Router → primarily Layer 3 → forwards packets using IP addresses.
Routing is one of the major topics we'll eventually spend a lot of time on.
6. Gateway
Gateway is the most overloaded term on this list.
In the broad networking sense, a gateway is a device or system that acts as an entry/exit point between different networks or systems.
For example, when your computer sends traffic outside your local network, your default gateway is typically your router.
Your PC
   │
   ▼
Default Gateway
   │
   ▼
Local Network
   │
   ▼
Internet
But gateway does not necessarily mean "a router." A gateway can also perform protocol translation or other functions when connecting systems that communicate differently. We'll come back to this distinction later.
To summarise:
Repeater  → Regenerates signals
Hub       → Repeats signals to multiple ports
Bridge    → Forwards frames between network segments
Switch    → Multi-port bridge; forwards using MAC addresses
Router    → Connects networks; forwards using IP addresses
Gateway   → Connects networks/systems, potentially performing translation

Physical Layer       → Repeater / Hub
Data Link Layer      → Bridge / Switch
Network Layer        → Router
Multiple layers      → Gateway
From Communication to Computer Networks: 
Human communication
I have information →I represent it →I transmit it →you receive it →you interpret it.
 ↓
Computer communication
A computer has information → represents it as bits → maps those bits to symbols → physically represents those symbols as signals → transmits them through a medium → the receiver recovers the symbols and bits → reconstructs the information.
↓
Computer networking
Now make this happen between billions of devices, across different physical media and networks, through intermediate devices, while dealing with addressing, routing, errors, congestion, ordering, reliability, security, and applications.
And that's where Computer Networks begins.

---

2. Network Models (OSI, TCP/IP)
Designing and maintaining the networks is a challenging task as it includes technologies such as software, hardware, firmware and electrical signals. To simplify this task, the concept of layering was introduced, layers are separated by abstraction, but they depend on adjacent layers through defined interfaces.
But Mangal, why do we even need these Layers?
hmm, think of a scenario where you need to write an essay in Russian.
For that, you first need to learn Russian itself, its alphabets, grammar, vocabulary, and word structure. Then you need to understand how an essay is structured: how to introduce a topic, develop your arguments, and conclude it. Finally, you choose what you actually want to say and mold your ideas according to everything you have learned.
Notice what happened here?
You didn't have to think about everything at once. You handled the problem step by step, with each step having its own responsibility.
Networking works in a very similar way.
When one computer wants to communicate with another, there are many different problems that need to be solved like:
- how do we represent data as physical signals?
- how do two directly connected devices communicate?
- how do we find a path to a device on another network?
- how do we make sure data reaches the correct app?
- how does the app itself understand the data?
Trying to solve all these problem in one giant system would make it extremely complicated. And in our case these problems have already been solved, we just need to approach them in a structured way without overwhelming ourselves. So, we divide the problems into layers.
This gives us three major advantages: 
1. Abstraction: Each layer hides unnecessary implementation details from the layers above it. ( you don't need to worry about complicated vocab in Russian when you are learning the alphabets ) 
2. Modularity: A layer can often be replaced without redesigning the entire networking system. for eg. you can access internet using Wi-Fi today and use Ethernet tomorrow without changing how the ig reel loads. 
3. Manageability: A huge and complicated problem can be broken into smaller problems that are easier to design, implement and debug.
So, layering is essentially a way of managing complexity through abstraction and separation of responsibilities.
There are two major models used to understand and describe network communication: the OSI model and the TCP/IP model.
OSI Model (Open Systems Interconnection): 
This is a theoretical reference model developed by the ISO (International Organization for Standardization) to describe and organize network communication into distinct layers. The real internet works a bit differently from what we will study in here. I will keep pointing out the differences wherever required. 
This mainly consists of 7 layers (I will explain them in detail soon): 
1. Application Layer: 
Provides network services directly to applications, such as web browsing, email, and file transfer.
2. Presentation Layer: 
Handles the representation of data, including translation between formats, encryption/decryption, and compression when required, so that communicating systems can correctly interpret the data. It was also referred to as the translation layer too.
3. Session Layer: 
This layer acts as a manager, which manages the Session establishment, management, synchronization, and termination between two communicating applications.
4. Transport Layer: 
Provides end-to-end communication between applications, handling functions such as segmentation, reassembly, flow control, and, depending on the protocol, reliable delivery and retransmission.
5. Network Layer: 
Handles logical addressing and routing, allowing packets to travel between different networks toward their destination.
6. Data Link Layer: 
Responsible for node-to-node delivery of frames over a single network link. It handles framing, hardware addressing, error detection, and medium access control.
This has two sublayers: 
a) Logical Link Control (LLC): Provides an interface between the Data Link Layer and upper layers and may provide functions such as flow and error control.
b) Media Access Control (MAC): Determines how devices physically access the transmission medium and handles hardware addressing. In modern switched Ethernet, MAC is primarily about frame addressing and medium access rules, not literally controlling physical access.
7. Physical Layer:
The foundation of the OSI model, it acts as the bridge for actual physical connections b/w devices. Its main job is the transmission of raw  bits over a transmission medium.
TCP/IP Model:
The TCP/IP model describes the architecture underlying the Internet and is closely associated with the protocols used for Internet communication. This networking framework explains how data is communicated between devices over a network using standardized protocols to ensure reliable and efficient transmission. Its architecture and protocol requirements have been defined and refined through a large collection of Internet standards and RFCs, including RFC 1122. This model is more simpler and practical than the OSI model. The TCP/IP suite is a protocol suite, and its layer boundaries are less rigidly defined than OSI. 
It mainly has 4 layers: 
1. Application Layer
Conceptually : OSI application Layer + OSI Presentation Layer + OSI Session Layer
2. Transport Layer
Provides end-to-end communication between applications. Protocols such as TCP and UDP operate at this layer
3. Internet Layer
Responsible for logical addressing and routing packets across interconnected networks. IP operates at this layer.
4. Network Access( Link Layer )
Conceptually : OSI Data Link Layer + OSI Physical Layer
TCP/IP became the foundation of the modern Internet because it is practical, flexible, scalable, and built around interoperable protocols. Its development is open and based on publicly available Internet standards and RFCs.
OSI is primarily useful as a conceptual reference model, while TCP/IP is the practical protocol architecture underlying Internet communication.
Notable differences:
Difference Table The important takeaway here is not that one model is better than the other. OSI gives us a clean conceptual framework for understanding networking, while TCP/IP describes the architecture and protocols that actually power the internet
I will be going through the OSI model from the bottom up in detail. Later, during the Dissection of a Real-World Protocol, we will trace an actual communication process through both the OSI and TCP/IP perspectives. This will allow us to see where the two models align, where they differ, and ultimately which perspective gives us a more natural way of perceiving how computer networks actually work.

---

3. Physical layer : 
Okay, so let's understand the Physical Layer with some assumptions. 
Let us assume that the Data Link layer has already done its job and has given the Physical Layer a sequence of bits that needs to be transmitted.
Data Link Layer
       │
       │  10110100...
       ▼
┌─────────────────────┐
│   Physical Layer    │
└─────────────────────┘
Now comes the question: 
How does the Physical Layer transfer these bits to another device?
We cannot just simply send 10110100 through a cable as abstract 0s and 1s. The receiver needs to observe something physical: an electrical change, a pulse of light, or an electromagnetic waveform, and use it to recover the transmitted information.
So the Physical Layer's fundamental job is to take the digital representation provided by the Data Link Layer and represent it using physical signals that can propagate through a transmission medium. 
At the other end, the Physical Layer performs the reverse process: 
                SENDER                         RECEIVER

          Data Link Layer                  Data Link Layer
                 │                               ▲
                 │ Bits                          │ Bits
                 ▼                               │
        ┌────────────────┐              ┌────────────────┐
        │ Physical Layer │              │ Physical Layer │
        └───────┬────────┘              └───────▲────────┘
                │                               │
                │ Physical Signal               │
                ▼                               │
        ═════════════════════════════════════════════
                    Transmission Medium
        ═════════════════════════════════════════════
So at a very high level: 
Bits → Physical representation → Signal → Medium → Signal → Physical representation → Bits
But this raises another question: 
What exactly is a "Physical representation" of a bit?
and this is where get really interesting.
From Bits to Physical Signals
The Physical Layer doesn't necessarily represent every bit using one simple voltage.
The exact representation depends on the underlying communication technology.
For e.g. we might represent information using: 
- different voltage over copper,
- Light pulses or changes in optical properties over fiber,
- Changes in an electromagnetic waveform for wireless communication.
The transmitter therefore has to follow an agreed signaling scheme so that the receiver knows how to interpret what it received. 
For eg, imagine a very simple system where we decide: 
0 -> Low voltage
1-> High voltage
Then :

Bits:       1    0    1    1    0

Signal:    ────      ──── ────
                ────          ────                               
This is obviously a very simplified example. Real communication systems use much more sophisticated signaling schemes because they need to deal with bandwidth limitations, noise, attenuation, synchronization, interference, and many other physical constraints. 
So the Physical Layer is not simply:
"Convert 0 and 1 into some electricity."
It is about defining how information is physically represented and transmitted through a particular medium.
What actually happens to the signal?
As a signal travels through a physical medium, it doesn't remain perfectly unchanged. It can experience: 
Attenuation: the signal loses strength over distance.
Noise: unwanted electrical or electromagnetic energy gets added to the signal.
Interference: other signals can disturb the transmission.
Distortion: the shape of the signal can change as it's propagates.
Conceptually: 
Transmitter                         Receiver

Clean signal                        Distorted signal
     │                                     ▲
     ▼                                     │
  ────────        Medium             ──╲_╱──╲_╱─
                    │
                    │
              Noise / loss /
               interference
The receiver therefore has to determine: 
"Given this imperfect physical waveform, what symbols or bits was the transmitter trying to send ?"
And this is one of the fundamental problems that the Physical Layer deals with.
    
                         SENDER
                           │
                    Data Link Layer
                           │
                         Frame
                           │
                           ▼
                          BITS
                           │
                           ▼
                  Symbol mapping / line coding
                           │
                           ▼
                ┌──────────────────────┐
                │ Physical signaling   │
                │                      │
                │ Baseband /           │
                │ Modulation           │
                └──────────┬───────────┘
                           │
                           ▼
                    Physical Signal
                           │
                           ▼
                        MEDIUM
                           │
                           ▼
                    Physical Signal
                ┌─────────────────────┐
                │ Electrical / Optical│
                │ / Electromagnetic   │
                └──────────┬──────────┘
                           │
                    ───────┴───────
                       MEDIUM
                   Cable / Fiber / Air
                    ───────┬───────
                           │
                           ▼
              ┌─────────────────────────┐
              │     PHYSICAL LAYER      │
              │                         │
              │  Signal → Symbols       │
              │  Symbols → Bits         │
              └────────────┬────────────┘
                           │
                           ▼
                         Bits
                           │
                           ▼
                    Data Link Layer
                           │
                         Frame
                           │
                           ▼
                        RECEIVE
The key idea is:
The Physical Layer is responsible for representing digital information as physical signals suitable for transmission over the medium and recovering that information at the receiver.
Sidebar menu
Search
Write
Notifications

Akshay
Home
Library
Profile
Stories
Stats
Games
Beta
Following
Olha Remeniak
Olha Remeniak
Rustaceans
Rustaceans
Rustaceans Editors
Rustaceans Editors
Radio Hackers
Radio Hackers
Tushar Kanjariya
Tushar Kanjariya
Medium Staff
Medium Staff
Tantalizing Tales
Tantalizing Tales
Dr.Michael
Dr.Michael
Aviral Shukla
Aviral Shukla
Abhinav Jha
Abhinav Jha

More
Welcome Offer
Access to everything. Now 30% off.
Upgrade now

Rust

Text Editor

Writer

Build In Public

Rust Programming Language

Pane Abstraction in the Text editor(Rust) that I am building to use as writer
Akshay
Akshay
10 min read
·
May 17, 2026
--


--




Github Link: https://github.com/akshayrivers/Text_Editor

Press enter or click to view image in full size

walkthrough of the implementation
Context:
So, I have been working on a text editor in Rust, to use myself as a writer and to also challenge myself as a programmer. I had some prior experience with Rust but I haven’t yet touched a large Rust Project, So I had none to zero experience on how to design, oragnise and build such a project. But thankfully I got the tutorial https://philippflenker.com/hecto/ which helped me a lot learning and progressing towards a basic grapheme aware text editor. The tutorial ended with these features:

Grapheme aware text editing and cursor movement
Forward/Backward search with results highlighting
Syntax highlighting core(Rust)
Core editing operations(insert,delete/backspace,save)
Buffer with files and a single view
This was as the tutorial said the hecto was then feature-complete and (of course!) bug free. But I was not trying to build another hecto, I need a text editor which I myself could use to write my stories. Phew, so I worked through the code once again to understand the design decision clearly. By now I had some inkling of why the code needs to be divide in files and folders with clear intent. I will be honest, even though I tried to write most of the code given in the assignments myself, and was very much successful too , but the solutions given by the author, were like the best and natural progression of the code. It helped me learn a lot on how to take design decisons for wiritng Rust Code. But even then I started by taking small steps to get comfortable writing the code myself and with the large code base. So my progression was something like this:

I extended the highlighter to support more types of files such as text and markdown.
Wrote extensive unit tests wherever it was deemed necessary such as Line, Buffer, AnnotatedString..
Implemented Undo+ Redo going from a simple approach to the complex approach supporting word grouping based on time. For more deatils you can refer to the /notes.md in the Github repo
At this point,I was comfortable with Rust and navigating around the project. So it was time to implement the next Phase of the project.

Phase I was completed with a stable core as of now. But my own requirement were a lot more, even nano could do more than my own text editor in terms of features. I divided the work into two more phases:

Phase II: Pane abstraction (Layout),Buffer upgrade( buffer manager), Plugin support

Phase III: Plugins for multiple workflows, miscellaneous support, testing and Benchmarks, Complete the story : THE PINK DOG inside my own text editor

So, I went ahead and took on the Task of Pane abstraction in Text editors.

Pane abstraction(Layout) :
hmmm, so I had some ideas in my mind of what I wanted to happen,I wanted there to be multiple views on my screen and simple navigation possible between all those views. Ultimately I wanted the layout to be something like neovim file splitting. But as of now, the text editor has been using a single view with its own render mechanism and boundaries and carent movement, Like the message bar, status bar and command bar were all just given the heightof 1 row and the main view’s height was reduced by 2. And it was all too rigid as of now. So I went into looking how other text editors implemented Dynamic views and I am glad that I did. It was really interesting to study. So a general editor should look something like this :

Press enter or click to view image in full size

Diagram: General Overview of Text Editors
VS Code uses a Grid/Tree layout with dynamic workbench(nested splits),It also exposes its system for the extensions to use, you can check out thier Tree API docs for more info.
Neovim uses a Recursive split tree inside terminal grid and is also extensible for lua plugins through : vim.cmd(‘vsplit’) vertical split
vim.cmd(‘split’) horizontal split
GNU Nano is essentially a single pane; no true split tree. But it does support multiple buffers thorugh -F flag.
Zed uses GPU-rendered pane tree with tabs/workspaces.
Ultimately VS Code and Zed use managed split trees (editor owns the layout), Neovim uses client-managed (terminal owns the grid, editor arranges windows within it), Nano doesn’t really split at all.

Phew, So after taking an overview of all this, I still had no idea of what a Pane should represent for me, who will own it etc etc. So this was the point I stopped delving into other text editors, and started with my own requirements and what I eventually need to do. For now my editor pipeline was like this :

Press enter or click to view image in full size

Diagram: Current Flow of the Text editor
Eventually on the canvas (the full terminal size) needs to be further divided into other rects too and the UI components such as view needs to adhere to the local rect size rather than the global terminal ones.

So I planned on making the layout and geometry a different layer, and it will only be concerned with the geometry and layout of differnt panes. Now, there is one thing that I must divulge here, The rendering is handled by the ui components themselves, so they need to be transmitted the data about the local rect size. So /layout just functions as a layer.

Press enter or click to view image in full size

Diagram: Planned flow for the text editor for pane abstraction
hmm, so till now I had a good overview of what I needed to implement, So now lets dabble into the implementation:

Now Layouts can also be done in two ways ->

1. Flat Layout [Vec<Pane>] which is very painful in editors and can become messy in future when I will introduce the dynamic sizes and resizing propagation becomes messy

2. Layout Tree (most of the editors use this(vim)) and as our splitting is mostly vertical or horizontal that is why Binary. Trees are the go to choice here.

File structures in /editor/layout :

layouttree.rs
- recursive split tree
- layout subdivision
- structural representation only
pane.rs
- Geometry abstraction and dispather
panemanager.rs
- pane lookup and lifecycle
- active pane tracking
mod.rs
- public layout/pane APIs
- integration with editor render loop
Before we go into the components themselves, lets see what rect represents actually and who will it be owned by :

use super::{Position, Size};
#[derive(Default, Copy, Clone, Eq, PartialEq)]
pub struct Rect {
    pub position: Position,
    pub size: Size,
}
use super::{ColIdx, RowIdx};
#[derive(Copy, Clone, Default, Eq, PartialEq, Debug)]
pub struct Position {
    pub col: ColIdx,
    pub row: RowIdx,
}

impl Position {
    pub const fn saturating_sub(self, other: Self) -> Self {
        Self {
            row: self.row.saturating_sub(other.row),
            col: self.col.saturating_sub(other.col),
        }
    }
    pub const fn saturating_add(self, other: Self) -> Self {
        Self {
            row: self.row.saturating_add(other.row),
            col: self.col.saturating_add(other.col),
        }
    }
}
#[derive(Default, Copy, Clone, Eq, PartialEq)]
pub struct Size {
    pub height: usize,
    pub width: usize,
}
Visualize it like this:

Terminal is a canvas of infinite rows and columns.
Size is a representation of a box of multiple rows and columns.
Position is where this box is situated on the canvas.
Now, these rects as discussed above would be owned by every UI Component which follows this basic implementation:

use crate::prelude::*;
use std::io::Error;
pub trait UIComponent {
    // Marks this UI component as in need of redrawing (or not)
    fn mark_redraw(&mut self, value: bool);
    // Determines if a component needs to be redrawn or not
    fn needs_redraw(&self) -> bool;

    // Updates the size and marks as redraw-needed
    fn resize(&mut self, rect: Rect) {
        self.set_size(rect);
        self.mark_redraw(true);
    }
    // Updates the size. Needs to be implemented by each component.
    fn set_size(&mut self, rect: Rect);

    // Draw this component if it's visible and in need of redrawing
    // in my design the rect will be owned by the component itself
    fn render(&mut self) {
        if self.needs_redraw() {
            if let Err(err) = self.draw() {
                #[cfg(debug_assertions)]
                {
                    panic!("Could not render component: {err:?}");
                }
                #[cfg(not(debug_assertions))]
                {
                    let _ = err;
                }
            } else {
                self.mark_redraw(false);
            }
        }
    }
    // Method to actually draw the component, must be implemented by each component
    fn draw(&mut self) -> Result<(), Error>;
}
Okay so we are done with the hard part as I call it, Now we move onto the actual implementaion of /editor/layout. But I won’t be going into the code dumping here as it will get messy real quick. If you want to read the code and see my progession you can refer to this Pull Request, I have done summary comments too wherever possible : https://github.com/akshayrivers/Text_Editor/pull/1

Now, What is Pane??
In my design, a Pane is not the content itself, but a container. Think of it as a picture frame. The frame knows its ID, whether it’s
currently being looked at (active), and what kind of “art” it’s holding (View, File Explorer, etc.).

It’s a Dispatcher: When the Editor says “Render!”, the Pane tells its internal View to draw itself within the assigned boundaries.
It’s Lightweight: It doesn’t handle the complex logic of text buffers; it just manages the metadata of that specific window.
What is Layout Tree?
This is the “Brain” of the workspace. I decided on a Binary Tree because every time you split a screen, you turn one rectangle into two.

The Recursion: A LayoutNode can be a Split (which contains two more nodes) or a Leaf (which contains a pane_id).
The Math: It uses a ratio (f32). Instead of saying “this pane is 40 chars wide,” it says “this split is at 0.5.” When the terminal
resizes from 80 to 120 chars, the tree just re-calculates the geometry using that ratio. It’s “Fluid Design” for the terminal.
phew let’s visualize it and see some code :

pub enum LayoutNode {
    Split {
        split_id: usize,
        direction: SplitDirection,
        ratio: f32,
        first: Box<LayoutNode>,
        second: Box<LayoutNode>,
        rect: Rect,
    },
    Leaf {
        pane_id: usize,
        rect: Rect,
    },
}
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SplitDirection {
    Horizontal,
    Vertical,
}
pub struct LayoutTree {
    root: LayoutNode,
    next_split_id: usize,
}
I have assigned an id to the Split panes too because it helps in differentaiting between different splits. Which proves to be the most important thing for doing Dynamic resizing through Mouse drag.

Press enter or click to view image in full size

Diagram: Layout Tree (Visualized)
What is Pane Manager?
If the Layout Tree is the Brain (where things are), the Pane Manager is the Library (what things are).

The Handle Pattern: It uses a HashMap<usize, Pane>. By using IDs instead of direct pointers or references, I avoided a massive
headache with Rust’s borrow checker.
Lifecycle: It’s responsible for generating new IDs, killing off panes when they are closed, and tracking which pane_id is currently
receiving your keystrokes.
Press enter or click to view image in full size

Diagram: Flow of editor -> Layout Tree and Pane Manager
How did I implement the command dispatch through command Bar?
I wanted that Neovim feel. I extended the CommandBar UI component to support a text-input mode.
1. Trigger: CTRL + SPACE pauses the editor and focuses the Command Bar.
2. Parsing: I wrote a simple command parser that looks for strings like focus 1 or close.
3. Execution: The Editor takes that string, asks the PaneManager if that ID exists, and then tells the LayoutTree to focus or remove
that node.

How did I implement the Mouse Events and Dyanmic resizing of Panes?
The Detection: When you click, the Editor asks the LayoutTree: “Is there a split divider at this X/Y coordinate?”
Tolerance: I realized clicking a 1-pixel wide divider is impossible in a terminal. I added a TOLERANCE = 2 constant. If you
click within 2 characters of a divider, it triggers the drag.
The Drag Loop: While the mouse button is down, I calculate the new ratio based on the mouse position relative to the split’s total
area. The tree re-computes, the PaneManager resizes the views, and the screen refreshes in real-time. It’s incredibly satisfying to
watch.
Press enter or click to view image in full size

Diagram: Tolerance visualized
The Border endeavor:
And a small note about the borders, I eventually decided that the borders will be decided by UI Components themselves, like command bar, status bar, message bar do not need borders(At least I don’t want them to have it). Only View(Text) needs it so I only implemented it in View’s draw(), left 1 row from each side and printed the relevant thing there. It’s like printing patterns.

Ahhh, we are done I believe, there were some bugs in scrolling and caret position after the border endeavor which I fixed with making the actually interactive read/write area staring with a margin of 2 so that text doesn’t leak from one pane to another.

Conclusion:
It has been amazing working on something like this, especially when I myself heavil ywant to use the project on a daily basis. I am learning a lot of things, Now this project is still in its development phase, and I am actively trying to work on it, in whatever time I get. The next goal is do some cleanup and and write some unit cases first in leisure while planning on how to implement buffer management. Also keeping in mind the looming behemoth of a task of building the plugin architecture.

Phase II (Pane Abstraction) is now complete. The editor now also supports:

Infinite nested horizontal/vertical splits
Fluid resizing with mouse drag
Keyboard navigation between panes (focus <id>)
Pane closing and lifecycle management
Command bar integration for Neovim-like control flow
The text rendering respects pane boundaries, cursor movement stays within its local Rect, and scrolling works correctly even with borders enabled.

It’s pretty amazing that I set out to build a tool to write my stories, and the tool itself has become the story. I am currently a college undergraduate, and would love to connect with other like minded people and seniors who could guide me on this path. This is also my first article, so your time, thoughts and feedback are very much appreciated. Thank you!

Rust

Text Editor

Writer

Build In Public

Rust Programming Language

--


--



Akshay
Written by Akshay
4 followers
·
14 following
Building cool stuff

Help

Status

About

Careers

Press

Blog

Store

Privacy

Rules

Terms

Text to speech
Sidebar menu
Search
Write
Notifications

Akshay
Home
Library
Profile
Stories
Stats
Games
Beta
Following
Olha Remeniak
Olha Remeniak
Rustaceans
Rustaceans
Rustaceans Editors
Rustaceans Editors
Radio Hackers
Radio Hackers
Tushar Kanjariya
Tushar Kanjariya
Medium Staff
Medium Staff
Tantalizing Tales
Tantalizing Tales
Dr.Michael
Dr.Michael
Aviral Shukla
Aviral Shukla
Abhinav Jha
Abhinav Jha

More
Welcome Offer
Access to everything. Now 30% off.
Upgrade now

Rust

Buildinpulic

Text Editor

Software Engineering

Firstprinciplethinking

Implementing Floating Panes and a Buffer Manager in my Text Editor (Yonro) — In form of a whimsy tale
Akshay
Akshay
15 min read
·
Jul 6, 2026
21






First lets see how the current architecture of the text editor looks like. I’d like to introduce it’s name: Yonro.. Yes it is a reference to something, a character I have been relating to a lot these days. But without further ado, let us start the tale of a harrowing adventure. I hope you will enjoy it.

For more context read the previous Blog : https://medium.com/@pumkininriver/pane-abstraction-in-thetext-editor-rust-that-i-am-building-to-use-as-writer-f4296c77372f?sharedUserId=pumkininriver


Terminal Input
     │  crossterm::read()
     ▼
Event ──► Editor::evaluate_event() ──► Command
                                          │
                                          ▼
                              Editor::process_command()
                                          │
                        ┌─────────────────┼─────────────────┐
                        ▼                 ▼                 ▼
                  prompt_type?      Resize (handled      no prompt →
                  Search / Save      immediately)      dispatch by
                  FocusPane/Close                      Command variant
                        │                 │                 │
                        └─────────────────┴─────────────────┘
                                          ▼
                              Buffer / Pane / View updated
                                          │
                                          ▼
                          Editor::refresh_screen() (every tick)
                                          │
                                          ▼
                                  Terminal Output
Floating Panes:
One day, Manglu was trying to jot down his thoughts, something he very rarely does, But as he was writing, more thoughts kept coming to him, he kept splitting more and more panes- some vertical, some horizontal. And he kept getting frustrated at himself, He needed a central Pane above the current panes which he could use to jot down all the main ideas that he wants to work on so that he can finally stop getting distracted and work on them one by one. He delegated this task to Yonro, to evolve itself to meet his needs. Now Yonro at the end of the day is just a Program which runs on an OS. It is not yet at the stage where it can change it’s nature by itself, with own introspection. It needs external help, more experinces in the world. okay okay I will get to the point. So I had to entertain Manglu’s request. How can I create a place on top of the current Tiled panes where he can write down the major different streams his thoughts are flowing in. The answer as you can guess is just create a floating Pane and dynamically dispatch the TextView into it. But now, How does it integrates into our Layout tree, for the 2D view, The Binary tree of Split and Leaf was sufficient as we were only concerned with how the size of rects change. But if we insert another parameter or action that can happen, Z index how does it change, and on it’s change, how does the tree needs to adjust itself? How do we know where do we need to render what?

See in the 2D plane it was simple we know that this pane with a rect inside needs to be rendered according to the values assigned by the Layout tree. So there was no overlap of two panes. But with the introduction of this Z-index we need to consider the overlapping Panes, and how should we actually render them?
Again let’s explore this problem from first principles and try to reach a working solution.
One thing we already have clear is for Manglu’s request is that we just need to create a floating Pane with a Text View inside. The problem now is how to manage the rendering. So, we give the pane two more properties.
pub struct Pane {
    pub pane_id: usize,
    pub content: PaneContent,
    pub active: bool,
    // is the pane currently floating
    pub is_floating: bool,
    pub z_index: usize, // obviously Z-index

    pub is_minimized: bool,// do not focus on this as of now
    pub rect: Rect,
}
Okay, so by default these will have a value of false and 0 in the beginning. which will just create the previous flow of a Rect based rendering by the Layout tree. Now, How do we make use of this Z- index?
In the previous complicated approach we were exploring the modification of Layout tree somehow. Now lets take a step back from there.
Assume we have a list of all the panes, which all have a is_floating = false and z_index =0. We have the correct flow of rendering them based on their rect sizes.
Now we will add a pane with is_floating= true and z_index = 1. Now what changes? we need to overlay this Pane on the previous rendered Grid or panes/pane. So first we render that z=0 and then tackle the z=1, separately. See we did not even interact with the Layout Tree at all. So we could handle this rendering for all the z indexes separately. Take a look at the current render flow:

LayoutTree (leaves) ──► PaneManager.get_pane_mut(id) ──► pane.render()
Now following the, previous practices in our code, we will delegate the creation and collection of these panes to Pane Manager without even touching the layout tree. Now Rendering as we all know is handled by the view itself, we just need to give it the correct Rect values.

// Code from fn refresh_screen()
if height > 2 {
            // Tiled panes (layer 0)
            for (pane_id, _) in self.layout_tree.collect_leaf_layouts() {
                if let Some(pane) = self.pane_manager.get_pane_mut(pane_id) {
                    if !pane.is_floating {
                        pane.render(&self.buffer_manager);
                    }
                }
            }

            // Floating panes sorted by z-index (layer 10+)
            let floating_ids: Vec<usize> = self
                .pane_manager
                .get_floating_panes_sorted()
                .iter()
                .map(|p| p.pane_id)
                .collect();

            for id in floating_ids {
                if let Some(pane) = self.pane_manager.get_pane_mut(id) {
                    pane.render(&self.buffer_manager);
                }
            }
        }
Okay so did this:
1. Render the tiled Panes first
2. Render the floating panes
in a sequence, so that the overlapping can happen correctly. But we have 2 questions Ahead of us now:
1. How do we un float a pane and integrate it back into the Tiled Layout?
2. How do we come back to this Pane when we focused on another pane?
(I am not mentioning the resizing here, cause that flow is simple and you can check that out in code)
3. How to make the floating panes Draggable?

So let’s tackle these questions one by one:

How do we un float a pane and integrate it back into the Tiled Layout?

let’s understand it with code now :

pub fn unfloat_pane(id: usize, ctx: &mut EditorContext) {
    // ignore the ctx for now it will be explained in future blogs
    // check if the current pane is floating or not
    let is_floating = ctx
        .pane_manager
        .get_pane(id)
        .map_or(false, |p| p.is_floating);
    
    if !is_floating {
        ctx.update_message("Pane is already tiled.");
        return;
    }
    // while unfloating we need to merge it with a currently existing Pane
    // for now I just merge it with the first pane_id we get maybe I will 
    // create complex flow in future
    let target_id = ctx
        .layout_tree
        .collect_leaf_layouts()
        .first()
        .map(|(id, _)| *id);

    match target_id {
        None => ctx.update_message("No tiled panes found."),
        Some(tid) => {
            if ctx
                .layout_tree
                .split_pane(
                    tid,
                    id,
                    crate::editor::layout::SplitDirection::Vertical,
                    0.5,
                )
                .is_ok()
            {
                if let Some(pane) = ctx.pane_manager.get_pane_mut(id) {
                    pane.is_floating = false;
                    pane.is_minimized = false;//ignore it for now 
                }
                let size = ctx.terminal_size;
                ctx.handle_resize(size);// forces a redraw too 
                ctx.update_message(&format!("Pane {} is now tiled", id));
            } else {
                ctx.update_message("Failed to tile pane (target too small?)");
            }
        }
    }
}
Ignore the ctx part for now, I have binded this with unfloat command from the command prompt. For now it just takes the id of the current active focused pane, and try to unfloat it, if it is already tiled we do not do anything and just show the message that the Pane is already tiled.
Now, here you might ask why have I not integrated the flow for deleting the given a pane id. Well I am just keeping it simple and to add that feature is but just a small task.
Now lets see how have implemented float for a tiled pane:

// see we just want to toggle one flag(is_floating) and call for a redraw again
// while also expanding the split node to contain the other leaf node only
// or we can just say that we have removed that pane from the layout tree
// though it still exists in the Pane manager
pub fn toggle_floating(id: usize, ctx: &mut EditorContext) {
    let is_floating = ctx
        .pane_manager
        .get_pane(id)
        .map_or(false, |p| p.is_floating);

    if is_floating {
        ctx.update_message("Pane is already floating.");
        return;
    }

    let was_active = ctx
        .pane_manager
        .active_pane()
        .map(|p| p.pane_id == id)
        .unwrap_or(false);

    if ctx.layout_tree.remove_node(id).is_err() {
        ctx.update_message("Cannot float the last tiled pane!");
        return;
    }
    
    if let Some(pane) = ctx.pane_manager.get_pane_mut(id) {
        pane.is_floating = true;
        let mut rect = pane.component().rect();
        // I thought I should for now give them a default size too 
        rect.size.height = rect.size.height.min(15);
        rect.size.width = rect.size.width.min(40);
        rect.position.col = rect
            .position
            .col
            .min(ctx.terminal_size.width.saturating_sub(4));
        rect.position.row = rect
            .position
            .row
            .min(ctx.terminal_size.height.saturating_sub(3));
        pane.resize(rect);
    }

    // and rather than relying on Z indexes ( it was causing me some bugs)
    // we just call to a fxns bring_to_front(pane_id);
    ctx.pane_manager.bring_to_front(id);

    let size = ctx.terminal_size;
    ctx.handle_resize(size);

    if was_active {
        ctx.pane_manager.set_active_pane(id);// focus on this pane now
    }

    ctx.update_message(&format!("Pane {} is now floating", id));
}
Now let’s discuss this bring to the front. Like if I have multiple floating panes open and I focus on the first one I created or like in this diagram the 4 one, this my caret should go into the pane with id=4 and a border should be drawn to distinguish it too. As we know we are initializing the z idx with 0 now we need to handle it for a new floating pane. To get the correct following sequence.

Press enter or click to view image in full size

Fig: caret focusing in the floating Pane 1
Press enter or click to view image in full size

Fig: caret focusing in Pane 4 after we clicked on the Pane 4
Now, again we go by simple to complex approaches to handle this :

First Approach (Very Simple)
We find the max_z from all the floating panes and increase this every time we have a new pane.

    pub fn bring_to_front(&mut self, pane_id: usize) {
        if let Some(pane) = self.panes.get(&pane_id) {
            if !pane.is_floating {
                return;
            }
        } else {
            return;
        }

        let max_z = self
            .panes
            .values()
            .filter(|p| p.is_floating)
            .map(|p| p.z_index)
            .max()
            .unwrap_or(0);

        if let Some(pane) = self.panes.get_mut(&pane_id) {
            pane.z_index = max_z + 1;
        }
    }
But there is a problem in this approach assume that we created two floating panes and now we are alternating between them, our z is always going up by 1. And this code smells because, see if we are always updating the value and creating a new z_index till usize. Like this approach works ofc, and we may never hit that limit but still why update everytime?

Keep in mind that a normal tiled pane will have a z_index = 0. A newly created floating pane will have a z_index=1.

Second Approach (Mine + Currently in use )
So, I thought of a better approach, what if we just swap the two z_indexes, like see if the z-indexes are equal only then do we update or bump the z_idx else we just swap like see->we already had one existing floating pane and we created one floating pane so max_z=1 (before making a new floating pane) and our z_index = 1 then we just bump our current z_index =1 + 1 =2
we create another floating pane max_z =2, and ours is 1 still so rather than updating it we just swap. now new Pane’s z_index = 2 and the other pane’s z_index which was focused before is equal to 1 now.
See by using this approach we were able to create a max of three layers:

z_index=0 => Tiled Panes
z_index=1 => floating panes (in some cases, active too)
z_index=2 => currently active floating pane

This approach will achieve our required outcome. And I reached this approach following the approach of first principles. I felt pretty good when I reached this approach. Now even if we have a Tiled pane(z_index=0) wanting to become a floating focused guy, it can directly swap with the layer 1 or layer 2 directly.

    pub fn bring_to_front(&mut self, pane_id: usize) {
        if !self.panes.get(&pane_id).map_or(false, |p| p.is_floating) {
            return;
        }

        let Some(top_id) = self
            .panes
            .values()
            .filter(|p| p.is_floating)
            .max_by_key(|p| p.z_index)
            .map(|p| p.pane_id)
        else {
            return;
        };

        let top_z = self.panes[&top_id].z_index;
        let target_z = self.panes[&pane_id].z_index;

        if top_z == target_z {
            // tie so we just bump
            self.panes.get_mut(&pane_id).unwrap().z_index = top_z + 1;
        } else {
            // now we just swap
            self.panes.get_mut(&top_id).unwrap().z_index = target_z;
            self.panes.get_mut(&pane_id).unwrap().z_index = top_z;
        }
    }
Alternative approaches (I discussed with Claude)
Ordered list instead of z_index at all:
I could see this one working too like, instead of keeping track of z_indexes we put the render order in a Vec<usize>. Like hmm, Keep a floating_order: Vec<usize> on the PaneManager , just a list of pane ids, bottom to top. bring_to_front becomes: remove the id from wherever it sits, push it to the end. Render order is just "iterate the vec." No z_index field needed on Pane at all and the position in the list is the z-index. And this was a cool approach too, I could see this one working too, but again what if I had too many panes and this gave relatively same Time complexity to focus on a pane as my approach and took more space.

pub fn bring_to_front(&mut self, pane_id: usize) {
    if !self.panes.get(&pane_id).map_or(false, |p| p.is_floating) {
        return;
    }
    self.floating_order.retain(|&id| id != pane_id);
    self.floating_order.push(pane_id);
}
It’s most appealing factor is that it preserves the realtive ordering among 3+ floating panes, where two z-values can’t represent a real stacking history once there are more than 2 panes. But I didn’t actually care about the relative ordering of these floating panes at all. I am just concerned with being the (the one on top) focusedone or not. And I am sure Manglu wouldn’t mind this tradeoff either as, we might have to limit the number of floating panes in future too or maybe implement minimization(hehe).

Natural incrementing z_index at creation:
This one will follow the the previous approach that we followed with the next_pane_id in the Pane Manager where we incremented this value for each new pane

pub struct PaneManager {
    panes: HashMap<usize, Pane>,
    active_pane: usize,
    next_pane_id: usize,
    next_z_index: usize,
}
Okay,so what this one will do is just kill the tie case at source, but again no panes would be born equal. To implement bring_to_front, I will just have to swap in this case. Again not much to gain from this approach.

Finalised Flow : 

                 refresh_screen()

                      │
        ┌─────────────┴─────────────┐
        │                           │
        ▼                           ▼

 Render Layout Tree          Render Floating
 (Layer 0)                   (Sorted by z)

     Pane1                       Pane7
     Pane2                       Pane9
     Pane5                       Pane4
        └─────────────┬─────────────┘
                      ▼

             Flush Terminal
So, Folks now we have a Good enough idea on how to implement and also an overall idea for the flow of rendering the floating panes. I will not go into the details about the drag functionality for this part. Because I have covered something similar in the last Part where I was building the Pane Abstraction. You can check that out here : https://medium.com/@pumkininriver/pane-abstraction-in-thetext-editor-rust-that-i-am-building-to-use-as-writer-f4296c77372f?sharedUserId=pumkininriver

Join The Writer's Circle event
Or you can directly check this out on my Github here : https://github.com/akshayrivers/Text_Editor

Okay now Manglu won’t swing his sword at Yonro due to his frustration. Yonro can breathe better now.

Manglu: “WHY THE HELL IS SAME FILE OPENING EVERYTIME I CREATE A SPLIT OR A FLOATING PANE. YONRO YOU HEATHEN!!! YOU WANT TO DIE??? FIX IT OR I WILL CALL UPON THE WRATH OF AN ANGEL(THE OS) TO STRIKE YOU DOWN (KILL THE PROCESS). FIX THIS NUISANCE AT ONCE!!!”

Crap! and here I thought that Yonro was safe. Huh that thing is because we are dyanmically dispatching the same view to the Pane. And under the hood every view is sharing only one buffer, we need to fix that. So that each new Text view gets it’s own buffer. And if two panes share share the same buffer ID changes in one should propogate into the other. Phew, need to build all that perfectly or that mad knight might just swing his sword at the screen.

“Okay let us go again by first principles again. As we can have — “ I don’t even get to finish.
Manglu: “HEATHEN! IF THIS PROBLEM DOESN’T GO IT SELF I WILL PLUNDER YOUR WHOLE VILLAGE!”

Uhh, change of plans, we fix the issues on a rolling basis and then optimise once the mad man can write correctly.

Buffer Manager :
View currently owns a Buffer directly:

View { buffer: Buffer }   ← ownership, not a shared reference
But splits/floats were dispatching the same View instance to multiple panes:

Pane A ──┐
         ├──► same View instance ──► same Buffer
Pane B ──┘        (dispatched twice, not two separate Views)
Text View Struct looks something like this :

#[derive(Default)]
pub struct View {
    id: usize,
    is_active: bool,
    buffer: Buffer,// see this is the part we need to resolve 
    // right now the view is owning a buffer but it should own a buffer_id only
    needs_redraw: bool,
    rect: Rect,
    text_location: Location,
    scroll_offset: Position,
    search_info: Option<SearchInfo>,
    undo_stack: Vec<EditOperation>,
    redo_stack: Vec<EditOperation>,
    last_insert_time: Option<Instant>,
    last_insert_location: Option<Location>,
}
Lets look at what Buffer looks like :

#[derive(Default)]
pub struct Buffer {
    lines: Vec<Line>,
    file_info: FileInfo,
    dirty: bool,
}
The buffer looks pretty simple, The only complexity is in it’s implementation. But what if we just create a unique id for each buffer and share it with the Text View, (can you see that in future with plugins we will just have to share the buffer_id with the plugins too. like if there is a huge file, we render only the visible part and render in real time rather than keeping all the file in memory. And a plugin which needs the context of the the whole “HAAAAAAHHHHHHH !!! Heathennn!!”

Crap! So we just need a hashmap for that which we will call our buffer manager, something like this:

use crate::editor::buffers::Buffer;
use std::collections::HashMap;

#[derive(Default)]
pub struct BufferManager {
    buffers: HashMap<usize, Buffer>,
    next_buffer_id: usize,
}

impl BufferManager {
    pub fn new() -> Self {
        Self::default()
    }

    pub fn add(&mut self, buffer: Buffer) -> usize {
        let id = self.next_buffer_id;
        self.buffers.insert(id, buffer);
        self.next_buffer_id += 1;
        id
    }

    pub fn get(&self, id: usize) -> Option<&Buffer> {
        self.buffers.get(&id)
    }

    pub fn get_mut(&mut self, id: usize) -> Option<&mut Buffer> {
        self.buffers.get_mut(&id)
    }

    pub fn remove(&mut self, id: usize) -> Option<Buffer> {
        self.buffers.remove(&id)
    }
    pub fn iter(&self) -> impl Iterator<Item = (&usize, &Buffer)> {
        self.buffers.iter()
    }
}
phew and in the View we just do :

#[derive(Default)]
pub struct View {
    id: usize,
    buffer_id: usize,// Just a buffer ID 
    is_active: bool,
    needs_redraw: bool,
    rect: Rect,
    text_location: Location,
    scroll_offset: Position,
    search_info: Option<SearchInfo>,
    undo_stack: Vec<EditOperation>,
    redo_stack: Vec<EditOperation>,
    last_insert_time: Option<Instant>,
    last_insert_location: Option<Location>,
}
// inside the impl block : 
pub fn set_buffer_id(&mut self, id: usize) {
        self.buffer_id = id;
        self.text_location = Location::default();
        self.scroll_offset = Position::default();
        self.mark_redraw(true);    
}
Now from the main editor Loop on split or floating Pane we will dispatch a newly created buffer and then bind it to a text view through a buffer_id. And then this Text View will be Dispatched to the Pane Content dynamically.

//As I said do not pay any heed to the ctx I will explain it later

fn split_active_pane(ctx: &mut EditorContext, direction: SplitDirection) {
    let active_id = match ctx.pane_manager.active_pane().map(|p| p.pane_id) {
        Some(id) => id,
        None => return,
    };

    // creating a new id for  every new buffer
    let new_buffer_id = {
        let buffer = Buffer::default();
        ctx.buffer_manager.add(buffer)
    };

    // a new pane ID 
    let new_pane_id = {
        let mut view = View::default();//a new View
        view.set_buffer_id(new_buffer_id);// Binding the new_buffer_id
        // now we dynamically dispatch the Text View
        ctx.pane_manager.create_pane(PaneContent::TextView(view))
        
    };

    if let Some(pane) = ctx.pane_manager.get_pane_mut(new_pane_id) {
        if let Some(view) = pane.view_mut() {
            view.set_id(new_pane_id);
        }
    }

    if ctx
        .layout_tree
        .split_pane(active_id, new_pane_id, direction, 0.5)
        .is_err()
    {
        ctx.update_message("Pane too small to split");
        ctx.pane_manager.remove_pane(new_pane_id);
        return;
    }

    let size = ctx.terminal_size;
    ctx.handle_resize(size);
    ctx.pane_manager.set_active_pane(new_pane_id);
}
Final Flow : 

View1 ──┐
        ├──► buffer_id ──► BufferManager ──► Buffer A
View2 ──┘         (each view has it's own id)
                  BufferManager ──► Buffer B

View1 (buffer_id: 0) ──► BufferManager[0] ──► Buffer A
View2 (buffer_id: 1) ──► BufferManager[1] ──► Buffer B
Manglu: “Oh! It seems to be working quite good right now. Do not worry Yonro , I was just jesting . Please forgive me for my transgression. I also apologise for the threats to your life. I have just come back from a Battle. Do not pay my words any regards moving forward.”

Yeah, maybe this part you had to say in the beginning. It would have been so nice. Well works for me as there is still one point where he can frustrated. Yonro currently has no way of opening the same file in multiple panes. Well let’s just hope the brute won’t have a need for it anytime soon. It will be handled and solved in the next blog. Hope to see you there again

— — — — — — — — — — — — — The Tale Ends here — — — — — — — — — — — — — — —

Thank you for reading this Blog, I hope you enjoyed it.

— — — — — — — — — — — — — — — — Yapping start — — — — — — — — — — — — — — —

I was a bit frustrated about not being able to work on my stories due to ,,,, due to preparing for interviews, doing DSA and strengthening my Core subjects, And on the side work on my Projects. All to find an internship. Yeah that is a different tale filled with anguish. The time I am writing this blog, I have applied at lots of places, have been ghosted by many, have heard back from a few ( the letters starting with unfortunately ). Still waiting on some news, the results days of few are still far. I hope to get an internship or some experience from some experienced Developers.
Sorry for the little bit of yapping.

— — — — — — — — — — — — — — — —Yapping End — — — — — — — — — — — — — — —

As of writing this Blog, I have already implemented the Plugin architecture and have also create the first Plugin- a File explorer. Now that had been one of the hardest, if not the hardest thing that I have done, since I have started my Engineering degree. The implementation part is not that hard if you know the language well. The hardest part was designing it. Designing the Plugin Architecture. I wasn’t able to coast through with just using the First Principles. I discussed it with so many AI’s — the best approach, the simple approach, How others have implemented it? And this was one of the places where I reached the conclusion of using the Asynchronous Programming for Plugins. It was very interesting to move out of theory from OSTEP and the Rust Book to implement a complex asynchronous flow in my code. And again the problem wasn’t of coding, it was of design. I had hit a wall here.

Again, Thank you for reading this. Please leave your thoughts in the comments or you can
Mail me at : akshayforrivers@gmail.com
Dm me on X : https://x.com/Vinodakshat1
Dm me on Instagram: https://www.instagram.com/vinodakshat/
My Github : https://github.com/akshayrivers
Linkedin: https://www.linkedin.com/in/vinod-akshat?originalSubdomain=in

Rust

Buildinpulic

Text Editor

Software Engineering

Firstprinciplethinking

21





Akshay
Written by Akshay
4 followers
·
14 following
Building cool stuff


Follow
Help

Status

About

Careers

Press

Blog

Store

Privacy

Rules

Terms

Text to speech


My stories that I have written: 
Exploratory work of a slightly Sane Knight -II
				Bizarre Labor 
Dusk, it seems, is not as pretty as everyone made it out to be. It's weird in strange ways. Strange in a way that it is the exact time when everything reaches its final act. The birds return to their resting place. People start moving to their homes. Some might say there is still the act of night, and I would agree but night is to reach for, A safe shroud of inevitability , a constant.

“You do know that I can hear your thoughts , no? What are you even on about? Dusk this, dusk that, birds and stuff. Come on Manglu, think better.”

Ugh whatever man, I thought I was onto something, why you gotta be so rude.

“Aww, but it was boring. And you know it is boring too. We could just go back, you know. It is not mandatory to stay here if we don’t want to.”

I know but, it is just, ahh I feel like I have forgotten something important. And this feeling won’t leave me, it is such a weird state to be you know.

“Oh come on, why do you gotta be so serious all the time. At least for now leave everything, if you do not remember it, then it must have been not that important to you. You are making it an issue yourself.”

Yeah, yeah what would you know madam Perfect , the all knowing Babli Devi. You remember everything important to you, even the time you ate a snail.

“Hey!! I never ate a snail, You ate it and now are making stuff up.”

Hehe, Now now, no need to be embarrassed, I won’t tell anyone, I promise.

“Yeah? First of all you ate it and second you? keeping a promise ? You of all people? ”

Huh, when did I ever break a promise? And you told me yourself that it was salty, you know someone died after eating a snail, you should not really eat such things.

“What the hell? Ugh never mind leave it. How much longer do we even need to wait here, The night is almost upon us. If we don’t go back, we are gonna get chased by dogs.”

Well, we can leave anytime, I was just waiting so that I don’t accidentally go chasing lights again, it is such a tiring endeavour. And you know one time I almost caught it, but my hands got burned so I let it go. 

“You should wear gloves then. And let’s leave, I don’t like the dark.”

Okay, but before we go, wanna make a bet?

“About what ?”
About what we are going to see on our backs, we will both state some events and whoever has the most events come true, till we reach home will win.

“Boring. But it depends on what’s at stake?”

You suggest, I will comply.

“Hmmm, I don’t know. What about you giving up your oath on not using your sword? ”

Not happening, suggest something else.

“Uhh, It stupid. Let me think… what about this - if you win I will tell you about my past. And if you..  ”

Stop, I do not want to know about your past from a bet, choose something else. 

“Shut up dumbass, Your loss anyways. I don’t have any more ideas. You choose what is at stake?”

Hmm, If you win I will tell you why I came here, to this ordinary place as you call it. But beware you must have the heart to bear the secret.

“Deal. If you win I will follow your advice and leave this city for some time.”

Oh, pretty huge thing you are putting at stake, you don’t even know what the secret is.  

“Does it even matter, I am going to win anyways. You should think about yourself, it is my home ground I have the advantage”

Haha, I will see about that. But “Deal”. State your events.

“You are going to lose. Let’s limit ourselves to only 3 events. * Manglu nods * Okay so, first there will be people going back to their homes. ”

You need to be more specific about events though. That is too general of a statement.

“Hah, okay. So there will be much traffic on the main roads and streets. Don’t say it is general too. Do you want me to cook up specific details?”
Hmm, wait let me go first so you will get an idea of what an event is. *adjusting his tie* There will be a kid getting his/ her ass whopped on our way back. I say that it will be a boy getting ass whopping from an older woman.

“How is that not general? But okay I say that there will be a person crying on our way back. And I say that it will be an old man.”

Interesting, My second is that we are going to witness a thief in the process of stealing on our way back. I say that he will be stealing a woman's purse.

“Hmm, you are so going to lose. My second is that we are going to see an accident. And I say that it will be a bike and a car.”

That is rare, but not so rare given today is really crowded. So for my third event, I say we will witness a death today. I say that on our way back, someone will die.

“Damn, that’s creepy. I hope you don’t win, you weirdo. Hah, for my third event I say that I am gonna receive a flower from some creep who will be following us. I hope you know how to fight well, even without your sword.”

Haha, Don’t worry, I can run really fast.

“You scoundrel , You. Nevermind there are no honorable men left anymore.”

*Manglu shrugs his shoulders*
Well lets go, I don’t wanna be chased by dogs.

They began their descent.
Below them, the city was lighting itself piece by piece. A shop sign flickered to life. A window brightened. Headlights crawled along distant roads like glowing insects.Behind them, the temple bells had fallen silent. Ahead of them waited only the forest path.The stars were absent tonight.
Manglu, albeit his claims, was not very fond of the night, he was actually scared of the dark. He may never admit it though. Babli on the other hand was much enjoying herself. The path was littered with the scent of flowers. This hill was a secluded place and normal people only visited this place at times of rituals at the main temple. But for youngsters, looking for a way out of a loud,busy world. This was quite a famous place. They had visited this place once before coming together. But today it was a bit special, there were no stars and only  the solar lights on the path made the path visible, adding to the eerie atmosphere there was total silence in the forest around them.

Manglu : “There won’t happen to be wild animals in this area, say Babli?”
Babli : “Aww, Is someone scared? Yes there are bears and wild boars here”
Manglu : “Ugh, I am actually scared for you. As you know I run pretty fast.”
Babli: “Haha, Such an honorable Knight, running away to save his skin, leaving behind a peasant girl to be eaten.”
Manglu: “Whatever, they won’t even eat you, you got no meat on those bones.”
Babli: “Huh, You meant to say that I am a super model. I know, I know I was the most famous girl in my high school.”
Manglu: “No ma’am you are actually just malnourished. People at your school may have been worried about you.”
Babli: “Shut up. I can see why you have no maidens.”
—silence—
Babli: “hahahaha. I struck a nerve eh.”
Manglu was grunting after a very long time and it seemed to amuse Babli even more.
Had anyone watched them from afar, they might have mistaken them to be two youngsters out on a date. They would have been more than wrong. 

A sudden rustle erupted from the bushes on Manglu's side. “Hey did you hear that?” Manglu asked nervously.
“Yeah, I heard it. It is a bear and it is coming to eat us.” Babli said while laughing at Manglu.
Manglu: “Ahh, Make fun of me all you, Don’t blame me for running away then.”
*rustle* *rustle*
Both of them froze in place, and the solar light started flickering.
The smile on Babli’s face froze.
Another rustle.
Then another.
Something was moving through the darkness. It was coming for them.
Manglu slowly took a step backward.
"Babli."
"What?"
"Run."
"Why?"
"Because I am running."
The bushes exploded.
A goat emerged.
The goat stared at them.They stared at the goat.The goat resumed eating leaves.Neither of them spoke for several seconds.
"A tactical retreat was still the correct decision," Manglu eventually said.
The light stabilised and they continued their descent.
Manglu: “Well that was one heck of a staircase, I tell you.”
Babli : “A lazy knight it seems. Hehe”
They both smiled and started walking towards the first street. Both, more attentive than usual, for the case to not to miss any detail.  This adventure has just started and they were met with a serious situation. A man was sitting on the road and staring towards a girl on the balcony. No he was actually dodging the stuff she was throwing at him. “Was that a lamp?” said Manglu. “Shut up and let's go closer.”
There was already a considerable crowd of people watching from other shops and balconies. “Bae, Please I am sorry. I won’t do it again please.” 
“SHUT THE FUCK UP! YOU IMBECILE, I AM GOING TO KILL YOU. I WILL KILL YOU” the lady in a blue night gown said with such ferocity. If someone doubted her intention before it was clear as soon as she picked up a whole flower pot and threw it at the man. Nobody knows what was going through his head. But the man did not move and the pot luckily or unfortunately fell on his feet. “AHHHHHH!!!” the man screamed and the lady started laughing. “You get what you deserve, fucker” It was assuming for a bit but then the lady had this dissatisfied look on her face, She went inside to get some thing else to throw at him. 
Manglu: “Oi you think she is going to kill her for real?”
Babli: “I do not know what he did. But he is going to die.”
The duo moved closer to the man and asked “Hey man, Why is she so mad at you?” asked Manglu. The man looked at them with a tired expression. “And you should really move, man. She is really going to kill you. Telling as a woman myself”
The man smiled weakly and looked at the balcony again, The next item may actually really kill him. “Do not worry, She loves me.”
“Delusional” uttered both Manglu and Babli.
“Yo, you should actually check your foot though, its gonna need medical intervention or it might get worse.” said Babli as she moved closer to inspect the wound. 
“RUN!” Manglu yelled at her. A feeling of horror filled her as she looked at the balcony. No one was there and an amused expression crept up on  her face as she turned to look towards Manglu. On his face she saw the epitome of nonchalance if there even exists such a level. He was looking behind her. When she turned she saw the lady coming towards them with a bouquet in her hands. 
“YOU FUCKER, TAKE YOUR FLOWERS BACK” As she hurled the bouquet towards the evil man. Closing her eyes, she looked back at the man and saw him unharmed and yet Manglu caught the burnt of the velvety soft roses on his face and stumbled back. Pfft A laugh escaped Babli’s lips. A gust of wind passed her and the evil man was on ground with a storm hovering above him.
Manglu came towards Babli with the bouquet in hands. “I think we should leave” They were expecting screams of agony but it never came. What they saw baffled them, it was strange,it was  mind bending. The lady was tending to that evil man’s foot. 
"What are you looking at?" the man asked.
"She was trying to kill you."
The man frowned.
"No she wasn't."
"She threw a flower pot at your foot."
"And?"
"You are bleeding."
"My wife is a doctor."
“AHHHHH” The man screamed suddenly as the lady took a brick and rammed it on his foot. Then as relishing in his scream she turned back and looked at both of them.
“Yes Kids, I am a doctor of hearts.” she said as she put up the brick to strike again. 
“I cure ailments of hearts”
“AHHHHHHHHHH”
They walked away in silence.
Behind them, another scream echoed through the street.
"One point."
Manglu stopped.
"No."
"Flowers."
"The flowers were not for you.I received them."
"By accident."
"The prediction never specified intent."
"The prediction specified a creep."
Babli pointed behind them.
"That man sat under artillery fire because his wife smiled at him once. And that lady is a doctor of hearts herself."
Manglu thought about it.
"No point."
Babli : “HUH? Why ?”
Manglu: “A child will get his ass whopped ? Get it ? Get it ?”
Babli : “No point in arguing, let's make it even, nobody gets any point.”
They both stared at the night sky, The dusk was almost gone, they would need to hurry in their search. “So onto the next checkpoint it seems” Manglu said excitedly.
“Yeah, Yeah. But I don’t think anything is going to happen anymore. How can there be so many coincidences in a single day” Babli said while looking at the bouquet in his hand.
“Well, let’s see about that, There is gonna be much traffic ahead so brace yourself”
From the well lit street they started walking towards another street which was on their way home.  Loud sirens, they could hear it, they could feel it in their bodies the traffic of Lambert street road. 
“You are drunk Sir. Please show your licence or registration” said the policeman with a weird amusing smile.
“Buttt, eh sir I am on a bullock Cart, I amm rieallyy nott drivin” said the main in a Three piece double breasted suit and shiny leather shoes. The policeman gave him a confusing look, where had this person randomly come from. He was working as usual and then a person driving a bullock cart entered the road from the wrong side, the bull panicked due to loud horns. And on top of that this strange suited up drunk man rammed his cycle into the cart and now? Now he is giving explanations as the bullock cart driver, who is working hard on keeping the bull in check. Really? How much more weird can this day get.
“Officer, this bulllmybull has 2 wives and it has sired 12 kids in total. Althoughh half are illegitimatee, But he really loves them all. If you arrest himm, if you arrest this bullmybull how will his family survive.Shir.Shir Pliease think aboutt his children, think abou … ”
Policeman shot him an angry look but it seemed to rile up the man even more. “Shir, Shir I implore you, I beseech you, Plwease take mercy on this bullmybull. He is actually a bery gud lad. Here arrest thas evil cycle. It threw me on thy road, shir can you belive ti. I tell you lord thas cycle is the incarnation of davil himself. Please artist him offisher.”
“Listen here Pal. IF YOU DON’T  ZIP YOUR SHIT RIGHT NOW. I WILL ARREST YOU, I am not kidding. I WILL THROW YOU INTO JAIL. JUST Apologize to the cart owner and settle down the matter. ” said the policeman with frustration seething in his voice. 
“SHIR, YES SHIR!!” The man said and gave the policeman a salute and left towards the cart owner who was pacifying the bull. “Oi , If you don’t leave within the next 5 minutes, I am really going to show you hell.” said the policemen calmly.
“SHIR, YESH SIR!!” hearing him shout the bull seems to get anxious again, earning the strange man looks from both the policeman and the cart owner. 
“It’s alright Good Sir, My bull is fine too, Please retrieve your cycle and please for the love of orange. Please leave.” said the cart owner amidst sighing.
“Kind Shir, Thank you Kind Shir. Please take care of this bullmybull, He is really a good lad. I apologixe for the damage I caused Kind Mr.Shir. And pwease forgive me Mr. this bullmybull.”
“It's okay sir. But please leave now.Please.”
“Kind Shir, my cyclei has turnad evil Kind Shir, I won’t It won’t drive in a straight line. I tell ya it’s the Devil,..”
“Hey, I won’t charge you a fine or anything but you must leave and take this man with you, this instant. I might just do something unbecoming, otherwise.” the policeman said to the bullock cart owner.
“Thank you Sir, I will leave this instant.” sighing the cart owner said.
“Offisher Your Too Kind. You mustbeen an angel sent by the holy God of  Knights. IMustThankYou Offisher.”  seeing the volcano about to erupt the cart owner dragged the strange man onto the cart and shoved bread into his mouth.
“Thank you for your Kindness Sir.”
“I said LEAVE”
As on cue,the bull started pulling the cart and the strange man also started chewing the dry bread like it was a food of gods. “IthsSHoGOUD.”
The cart owner sighed and thought to himself ‘Yeah it really won’t get any more strange than this.’

“Manglu, Do you believe in God?” asked Babli as they were entering Lambert's Lane. 
“Oh the classic question. I actually do not know if I do or not. I seem to have forgotten about it.”
“Ugh, don't you Knights believe in the God of Knights?”
“Aww, I don’t know, aren't you ladies a fan of him? I seem to remember that my master  used to curse him though.” Manglu said, smiling as reminiscing something.
“Ahan, You never told me you had a master. Was he like you or was he normal?” said Babli devi imagining the strange master of Manglu.
“Oh, my master was a very fine lady. I must tell you, she was insane, really insane, This one time she..”
** Loud noise of singing **
IN THE JUNGLE , THE MIGHTY JUNGLE this bullmybull SLEEPS TONIGHT. 
WHOO HO HOO HOOO HO WHOO
“Please sing less loudly Sir, The bull is getting agitated.” The short man said with tears in his eyes.
OH MY DEAR BULLMYBULL DON’T BE SCARED DADDA’S HERE. SHHOI SHOOI
“What the hell!” Manglu and Babli uttered at the same time.
The cart driver was crying, like really crying. It was like he was going through Hell. Not something even worse than hell like he was walking through shit and he was wearing socks. 
Babli: “Mister, Are you alright?”
OH DEAR CHILD, WHAT MUST I BE IF NOT HANDSOME. 
(He is crazy) the thought passed like wind through their minds simultaneously.
OH IS THAT A KNIGHT’S CREST KIDDO?
Manglu baffled “Uhh, Yes yes. I became one ,a year ago.”
OH, WHO DO YOU SERVE GOOD SIR?
“None, As of now. I have met a princess from far away lands though.”
OH, A PRINCESS. All Princesses are nice and beautiful. You must protect her, If you serve none. Who was your MASTER SIR?
Manglu hesitated for a bit and said “Sir, My master was a very nice lady. She told me not to use her name lightly. When you sober up, I will tell you her name.”
OHH OHH Amusing, Let me take a guess then. Pretty Lady who is a knight hmm. I can think of 3 Knights. Tell me Sir, She won’t happen to be crazy right?
Manglu was amazed, How does this man even know so many knights? The strange man looked at him and  smiled.
IT’S HER alright, You are that crazy woman’s student. Say hi to her from my side.
Is this really the same person who was being such a nuisance just now? Shaking out of his stupor Manglu asked “What might I refer you by Sir”
HAHA Yeah you do need to know my name right. Tell her that Sir Orange says “HI”.
“I will pass along your message.”
Please drop me at the end of the lane Mr. Cart owner. The cart owner, too shocked to speak, looked at the strange man and just said “Okay”
See you around kids as the man said while tossing them an orange from somewhere.
Babli and Manglu were too stunned to speak.
“I win one point right?”said Manglu, grinning.
“Huh, How? ”
“He stole a secret.”
“A secret which I do not know yet.”
“Haha, not my fault. Win and you might know it”
A look of disappointment and being cheated flashed on Babli’s face. How must she even know a secret and how does this even reveal anything? She was really being taken advantage of. This was not fair, this was not theft. 
“Ahh, Let me divulge something then. What are the chances of meeting a Knight even at such a remote unimportant place?” Manglu said with an air of being wise.
“I assume it is not rare, I have already met two.” Babli said unimpressed.
“Ugh, you might think so. But it is none to impossible. For a normal person to meet or even see a knight is a once in a lifetime event.”
“Huh, I always knew I was special. Tell me something that I don’t know”
“Haha, Leave it. I have 1 point and you have 0.”
“Aww, you forgot the cart driver was crying no?” Said Babli with a look of disappointment.
“Oh, Oh, Oh. Okay then we are even 1-1.”
“Aww, A dishonest Knight, You were going to cheat me out of points. How vile, how dishonorable, What has happened to men these days.”
“Hehe, at least you got an orange to eat.” said Manglu and smiled big time.
“Nooo. I am not sharing. Leave you creep.Leave” said Babli while laughing.

As night descended and two strange people drifted towards their homes. The dusk was about to end at last.
The streets were beginning to empty.
The loud roads they had crossed earlier were no longer roaring. The traffic had thinned into scattered headlights drifting through the darkness. Shopkeepers stood outside their stores, pulling down shutters with metallic rattles that echoed through the lane.
A tea stall owner poured the last cups of the evening. A stray dog stretched lazily beneath a streetlamp. The city was preparing for sleep.
For a while neither Manglu nor Babli spoke. The strange events of the evening seemed farther away now, as if they had happened to someone else. The furious doctor of hearts. The screaming husband. The crying cart driver. Sir Orange and his beloved Bullmybull. They were already turning into stories.
A cool breeze drifted through the street.
Manglu looked upward.
The stars had finally begun to appear.
Only a few at first.
Then more.
Tiny points of light scattered across the darkness.
"Looks like they were just late," he muttered.
"What?"
"The stars."
Babli glanced upward.
"Maybe they were avoiding you."
"Reasonable."
"Very."
As the destination to part ways was coming close. Time was coming to a still, maybe it was  building up an unseen event from their bets. A feeling of anticipation crept into the air. A thrill of expectation, an end of Dusk. 
“You think, something will happen now?” Babli was asking about nature. Wishing it to end the suspense for once.
“Well, it doesn’t matter. It is a tie. Nobody wins, No one loses.”
“Aww, You sound sad though, Do you really want to tell me your secret that badly?”
“Haha, No I just want you to leave this place.” Manglu said seriously.
–silence–
As they reached the last place. The air was strangely heavy.
“Why do you want me to leave?”Babli asked with a stern expression.
They both stopped walking and looked at each other. Babli’s eyes were filled with  intrigue and curiosity mixed with resolute reason. Whereas Manglu’s were filled with calm and seriousness, like he was knowingly ready to open the Pandora's Box.
“Let’s do it this way, I'll tell you the secret and you will leave the city.” 
“Hmm, I will decide after hearing it. If it is something worth leaving for a while, I just might. But beware the secret must really prove its worth then.”
“Hah, Okay.” said Manglu while sighing.
“My real name is not Manglu. This name I inherited from my master. My actual real name is __________. ”
“Hah, I already knew it. I already knew that it is not a real name. Who is named Manglu anyways ? ” said Babli was smiling.
“Just like some one names a Girl “Babli devi” hehe” Manglu laughed.
“It was not really my fault, you know. Pa named me this, and I stuck with it. UGHH STOP LAUGHING. MANGAL I AM GONNA SKIN YOU ALIVE.”
“Haha, okay okay I will stop” Manglu said while taking a deep breath.
“Phew! So yeah my actual name is _________. And I came to this city to rescue some people. I cannot tell you much. But I will just say that they have been trapped in a strange dream and I need to rescue them somehow. Sorry I cannot tell you anything more, even knowing I just told you puts you in real danger.” Manglu said with all seriousness.
“And am I one of those people you have to rescue?”
“No.”
—silence—
“You are someone I want to save. You are not part of my mission. As for why, I don’t remember. I have forgotten the reason, I do not know how. But from what I remember, you are my friend. And it's the least I could do to help you.”
—silence—
“You know. You dummy, you could’ve just said yes.”
“Haha, Yes maybe I could have. But I can’t lie.” Manglu said with all seriousness.
“Pfft, hahahaha, You, You are funny. You are the biggest liar I know.” Babli said amidst her laughing
Seeing her happy smile crept on Manglu’s face and he moved closer to her. And put the bouquet in his hands and offered her with an honest smile “Please accept this, A gift to friend.”
“Aww, you do know that you have to get down on your knees first. Right? Who taught you man. You are such a flirt, first you say that you are saving me from something that you cannot tell me about. And even that you are doing it because you - yourself want to. Then you FLIRT. YOU, YOU offer a bouquet of flowers to a lady, and even that I have to teach you to bend down. All this while weaving lies and telling me to believe them.”
“Hehe, But if All I told you are lies. Why are you so tempted to believe them?”
“Huh? Why do you ask? Because I just won you Creep. You offered me flowers, you have been stalking me with your fake persona for so long. This is a clear point for me. So, I win dummy!” Babli said beaming with such vigor.
“Well, Well you are not wrong except that someone died.” declared Manglu 
"Someone died." emphasised Manglu
"Nobody died."
"Manglu died."
"Manglu never existed."
"Exactly."
"That doesn't count."
"It counts."
"No."
"Then neither do the flowers."
"That's blackmail."
"It's mathematics."
—silence—
“And, please consider the secret that I have told you.” Manglu said while sighing. He was forgetting something important again.
Babli looked up at the stars smiling. “You know, even if what you said is the truth. And let’s assume what you have said is the truth. Why would I leave a friend if this place is really as twisted as you claim it is.”
—silence—
“You already claimed that you have forgotten something important. What if you forget something more, something which is less important in the long run but it makes you what you are as a human now? What then? You will lose yourself? Try to think logically. I may be able to help somewhere” Babli said with resolve.
Manglu kept looking at her while she was pointing at stars. A strange feeling of dread filled his being. That something bad was going to happen if something did not change. 
“You are correct.”
—silence—
“But more so the reason that you need to leave. This place is strange, and I don’t understand it fully either. But it is dangerous, I have to stay here for my mission. But things can go wrong very easily and in case they do go wrong. I need someone to have my back. And for that I need someone to go out of this place. If I really lose myself I need someone to bring me back and for that you need to leave this city.”
Babli looked at him with an annoyed expression “No wonder, you have no luck with ladies. Let’s play a game. The game which we played this evening, if you win, I will leave. And everytime you win you tell me more of this intriguing story or are you really just trying to flirt.”
Manglu thought for a second and shook his head. “Well alright,I am gonna win this tomorrow.”
“Hah, Try your best loser.”
And they both start laughing and the night truly descends.
WAAAAAAAHHHHH
They both froze.
Somewhere around the corner a child had begun crying with the force of a dying empire.
"Child crying." Babli declared immediately.
"No."
"No?"
"Listen carefully."
Through the silence came the voice of an exhausted woman.
"I TOLD YOU NOT TO THROW STONES AT DOGS!"
WAAAAAAAHHHHH
A second later a small boy shot past the mouth of the alley, pursued by a slipper moving at approximately the speed of justice.
The slipper connected.
"AHHHHH!"
Silence.
Manglu slowly folded his arms.
"Child getting his ass whopped."
Babli stared.
Manglu stared back.
"..."
"..."
"That counted."
"That absolutely counted."
"THAT SHOULD NOT COUNT."
"It was literally my first prediction."
And suddenly they're back to arguing.
						-  A creation of Rabdi Devi












Dedicated To
To my family and all the people who helped me recover and are still standing by my side for my health. I could not have recovered this quickly if not for you all. 
The strange kid who randomly hugged me on the way to a memory and then held my hand and helped me walk a bit further. Thank you for reminding me what I had forgotten due to my brain fog. Thank you for reminding me to live with all my heart no matter what.



















Afterword
And thus ends another exploratory work. This actually started as something I wrote to a very special friend. But the first exploratory work was a bit, not a lot of personal musing and stories. This one is hmm, how should I say this, a bit special and masked in layers. It is a funny and whimsy story overall, but if you know me then you know what the underlying tones and motifs signify. I might keep writing these in future as there is still so much to explore in these stories. 
And Manglu and Babli both have the same score, but the answer to how and what happened next will be revealed in next sections. Well I should have really been studying for my exams as my academics have gone down to hell. But whatever, I am doing much better than when I was sick. Akshay has lost the ability to write anymore. So this story has been brought to you by a very close accomplice- Rabdi Devi. Yes, that is me. I wrote this tale. Now if you liked this story or disliked or whatever whatever. Please write back your thoughts to me. It means a lot to me. 
Again your feedback is very important to me. Why? you say ? Because I have always been bad at communication. I never have been able to get my thoughts, feelings, intentions across to someone I want to, except for one or two instances. Your feedback will give me some ideas to work on and improve.Until then I will keep shooting in the dark, and wish that someday I will hit the bulls eye.  I have also been working on another story and that is really a big one - THE PINK DOG. I intended the following warning for that story. 
NOTE: IF YOU WANT TO BEAT UP THE AUTHOR OR GRIND THEM INTO PASTE. LET ME SAY A FEW THINGS - PLEASE DON’T. AND YOU SHOULD NOT HIT WOMEN OR ANYONE FOR THAT MATTER BUT WOMEN AND CHILDREN IS A NO NO. AND RABDI DEVI IS A BIG NO NO. 
Again Thank you, Thank you for reading my story. I hope you enjoyed it, if you did we should talk. 
Where? you ask ? 
My other endeavours: 
Instagram: https://www.instagram.com/vinodakshat/
Mail: akshayforrivers@gmail.com
Linktree:  https://linktr.ee/vinodakshat
Twitter/X: https://x.com/Vinodakshat1

Chronicles of Manglu’s  Letter Delivery Services: A letter to my dearest Mage
							— By( your favourite)  Rabdi Devi






























Like all days the city of <place> was waking up to the fervor of their exciting lives. Lamps turning off, surrendering to the radiance of a really close star. Dreams of little kids were disrupted by the shouting of angry mothers. Alas school won against the brilliance of all the little  imaginary  wondrous world with stars and rainbows. The morning traffic had started creeping into a new fresh music of horns. Shopkeepers were at their imposing castles, some cleaning, praying, and some clearly dozing off. The milkman was on his way back to the nectar brewery. Birds had taken off in search of food. The color of orange hue painted on the sky was running out. The school bus was at Madame <mom>’s door. <daughter> was barely ready with desire of dreams apparent in her eyes. <mom> greeted the bus driver and yanked <daughter> into the bus and sighed while going back to her chores.
“I swear to god, my work is never gonna end” she muttered while sighing. Madame <mom> has been sighing a lot these days. She had sent letters to her parents a month ago and there had been no response. Even the mail service  customer support has gone cold. And it seemed weird to her. Her parents could read very well and could also use mobile phones, yet they still insisted on communicating through letters. 2 years ago they completely gave up on their phones and retreated back to their ancestral home in the mountains. And that place being very offbeat and remote, none of the postal services facilitate that arduous journey, not even with extra money. She has tried all the alternatives, but they all refused after one delivery. This was the time she tried a newer mail service. And there had been no response  for over a month. She was getting anxious, the fee was very low compared to the others, and she was one of the new customers or maybe the only customer as of now. The man in the office she remembers was a brooding mess, if it was not for the sweet assistant working there she might have walked away altogether. Today, she decided that she would go to their office and demand answers for the delay. <mom> was an artist who worked at the <exhibit> art exhibition. She had taken off a day from work to tidy up her keep. She looked around the living room, it barely passed the standards for living. She sighed again and went on to work. 
On the tallest dustiest shelf  wrapped in whites was her paintings, some blank canvases, old colors, dried up palettes… Yet it struggled to make it on the chore list of  our beautiful lady.
“Ahh I also need to fix this wall” Paint was chipping off the wall, it was really humid this year around. “I also need to clean up the quilts and sheets” sigh I have so much work to do. <mom> thought as she looked at the paint falling from the wall in real time. A gust of wind entered her abode moving her to action. Her hands etched with henna placed upon the wooden shelf, pushing it with the strength of an artist. And against it, the shelf moved and the whites fell upon her head. 
*thud thud *
A hand shoots out from the debris “Ah! Why does my work keep increasing? Why ? Why ? Why?”

10 minutes later 

The paintings are neatly lined up along the shelf. And the shelf has been moved to hide the flawed wall. “I was really good. Really good. Why did I stop painting again?” She knew the answer to it well. There was once a time when I was free and broke and now I am free and barely broke. I should try teaching the kids someday too. Well that’s for another day, I have worked enough for today. I should go check on the mail service office. 
The paintings were stacked one after another with a peculiar painting in the front. It depicted a man standing in a valley, it was a surreal scene, the man was standing on shards of sky with a river flowing above his head. The valley had flowers fading from red to black and white, fireflies , a behemoth of a creature with  starry eyes like a galaxy sucking one in, looking down at the man with an amusing smile. The man itself was half dressed in a knight's gear, but otherwise blending in the modern clothes. He had letters hanging from his waist from the pommel of his sword. The atmosphere presented itself was even weirder, there were tints of orange blobs in between, otherwise everything was black and white except the seals on those letters and the eyes of the strange creatures. There was a tinge of eerie madness in the painting, it was a scene which could suck anyone in.

—

With this strange weather, it is not guaranteed when it will start to rain, so one should not rely just on the sky. This was a fact every adult knew, and <mom> was just reminded of this while sitting behind her rapido driver. She was drenched from head to toe. 
‘This is one heck of a break. I could have just gone to work hah!’  
“Ma’am stop at the next turn. It is maze inside, I will go by myself afterwards.”


Driver: “You don’t need to worry ma’am. It’s raining pretty hard right now. I will drop at the exact location. Please just keep guiding me. What kind of shop is it? It's not even listed on Google maps.”
“Thank you. I know right, it is a mailing service to send some letters to my parents. It’s a new one so maybe they are settling. Uh, go into this street from here.”

Driver: “Fair enough ma’am”  She said while she moved deeper into the maze in the streets. 

After some harrowing twists and turns, they reached the Office. It was a pretty place with brightened up lights, amulets and all sorts of strange stuff hanging around.

“Join me inside, It’s raining anyways. The assistant is a really nice and adoring girl.”

Driver: “I am not sure ma’am. I am already this drenched. They might mind.”

“Arey trust me, You will know once you meet her.”

Bell Chimes

Babli: “Why don’t you guys come in? It’s raining pretty hard.”


“See, I told you she is really adorable.”

Babli: “Madame <mom>, Welcome, I was just going to contact you. We have news about your letters. Please come in, so we can talk. Is the ma’am your friend? Please park your bike here and come inside. I baked some fresh lemon pie. Have a bite, please.”


Driver: “Okay, okay. I will rest here for a while.”

Babli: “Yaayyy!”



Ouroborous

I kind of think that ourobours might eat his own shit or he might never shit and only get stuck in a never ending cycle.

‘What do you think? that ouroboros is symbolic of grief ? And SO is every other story and myth that exists.’

Stares

‘You know that saying, where they say - “A man looking through his shades may never find what a colour looks like”

What is that supposed to mean ? 

“It means that i would love to take a shit in my own bathroom, on my beloved throne”

You do know that we didn’t have a bathroom, heck we didn’t even have a place to live. And this place is not that bad either, we eat 2 times a day, have a bed to sleep on and a real throne to shit in.

“Nice ?? niceee?? We live our lives in a  shithole, repeating the same things over and over again, there is no hunger, no passion, no change. And we rot, And we decay, Our bones creak under the corrosion , our mind sin of lethargy again and again we die , indulge and wake up stuck in here eating shit and shitting shit.”

But still we shit in a nice place and have a place to sleep. We have stability and we don’t get beaten up either.

“But is this living? We feel no joy . We don't feel any disappointment either. We have become devoid of pain. Devoid of emotions, devoid of desire, devoid of having an identity ”

No, we have an identity, you and me. We have names and we are capable of holding thoughts. We are capable of pondering the absurdity such of ouroboros shitting in a throne 

“He he hehe . hehehehe laughing maniacally. Why would Ouroborous even shit, he cannot even eat anything, ”

He he hehe . laughing maniacally. You know that girl that they brought in here yesterday was killed.

“Who?”

I don’t know either, but they say she killed a person and then ate their eyes. Yes that is what say
“Who?”

I don’t know man, they say that she is crazy. 

“haha , aren’t we all crazy here?”

NO No man, I heard that she bit Madame too. And they keep her in chains now in a dark dark room where there is no light and she is not even given food.

“Didn’t we do that too hehe hehe”

We did? I don’t remember 

“See you have forgotten, that is why this place is rotting hell crawling with maggots all over.” 

Man, You know, if anyone hears us talking they will take us to that room again.

–silence–

I heard that they took her to that room.

Knock KNock
[a plate slides under the door.]
Knock Knock
Who are you?

–silence–

Knock Knock 

Who are you ? And what do you want from me?

[ static noises : number 56 status Grey ]

I am asking Who are you?

[static noises: copy that]

[Number 56 Do you recall your name?]

Of course I know my name. But first answer me Who are you?

[Number 56 What is your name?]

“He is straight up ignoring you man. Hehe hehe. So are you gonna answer”

[Number 56 I am asking again, What is your name?]
“So what’s it gonna be?”

[Number 56 I am asking for the last time, What is your name?]

**whispers **
 Bhola 

[Number 56 repeat it loud and clear]

–silence–

**aggressive thudding on the door **

[don’t make me come come inside]

Bhola!!

[static noises: yes, yes copy that]

Walking sounds 
–silence–

He didn’t answer who he was. Do you know who he is ? 

“Oh him, he is just a voice in your head. And he tells you to eat the food and then shit in the plate and then he tell you to morph into a snake and become Ouroborous and repeat your fate to eternity”

Gross, How can you even say it so casually. You just made me imagine that shit.

“Great pun”

No, No. I didn’t mean that.

** gas starts coming into the room **

“Here we go again”

What? What is happening?

“Nothing much, just that we are gonna faint again that is all I know”

Again? What do yo…
**thud **




[madam we have brought him in the room 7 as you requested.]

“Which did you say he picked today?”

[Bhola, madam]

** frowning ***
“If only I wasn’t getting paid to keep this critter alive hah”

** more frowning **

“And what is the status of that hellspawn?”

[she hasn’t been given any food or light for 2 days now ma’am. Her screaming has stopped and she just lays on the floor]

“Give her some food. I don’t want any more of these money bags to die. ”

[yes ma’am]

“Hey wait, which room did you say that critter was in?”



“Look who has decided to wake up”

They brought you too?

“What did you think, you could have all the fun alone?”

** clank clank ** 

We are tied up.

–silence–

Say something dammit.

“Have you really forgotten everything?”

–silence–

I don’t know. What was I supposed to remember ?

Grumbling sounds

** door creaks open **

“I see that you have made yourself comfortable.”

**Shivering**

“So bhola? You said. Do you remember how you got here?”

–silence–

Yes 

“Yes, you say. Tell me how? And don’t make me say it twice”

I was a junkie. I was addicted to alcohol. My family disowned me and left me on the streets but I was a despicable man too, I drank and drank and when my money ran out, I resorted to theft and scams. And once I was robbing a home when I accidentally killed an old woman. Police arrested me and brought me to the court, where I was deemed mentally unstable and put here.

“Ohh, is that so. This is a new one you have told, but anyways How much time do you think it has passed till you have been brought here ? ”

“2 years”

Yes, 2 years.

"At least you remember that. Bhola you know 2 years is a very small amount of time, it still feels like it has just been a day when you and that bitch has been brought here. But Bhola, in this short duration of time,I have become bored of your stories. Today you have told me a new one but it is still not the right one. It is still not the truth and It was amusing at first, you conjured up all sorts of tales, you even made me doubt that you have split personalities. And I swear you came close.But ,it has become tiring, I know the truth, you know the truth, why won’t you just come clean for once. Bhola you say, interesting choice of name again though. You must have assumed that I am a religious woman haha. It almost makes me feel pity for you. So I am asking for the last time.Tell me how you came here and I want nothing but the truth coming out of your mouth ? ”

** fearfully **
Madam, I don’t know what you are talking about. I am telling the truth, please believe.

“HAHA HAHA, You must think that this is funny. Hell after all this time you are ought to become used to the torture. Tell me really? You enjoy this , don’t you??”

Madam, I don’t know what you mean. 

–silence–

** shouting **
“Take this wretch to the shock room.”
[Yes ma’am]

Madam, I am sorry, please don’t take me there. Please 

“Shut your mouth. You know what, bring that bitch too and strap both of these in front of each other.”

[Yess ma’am]

“Today , I am going to kill one of you wretches. Hehe it will be so much fun”


IN A DIMLY LIT ROOM TWO PEOPLE STRAPPED TO THE ELECTRIC CHAIRS DIRECTLY FACING EACH OTHER, A MAN WITH RAGGED BREATHING FEARING HIS FATE. A WOMAN BARELY CONSCIOUS AND BRUISED ALL OVER BARELY HOLDING ONTO LIFE.

“Now, how lovely of a reunion it is. Two obstinate wretches sitting face to face once again. Ahh brings back memories of good old times.”

[ma’am the systems are ready.]

* moaning slightly *
“ So what are you waiting for? Serve them starters, don’t make us look like bad hosts in front of our guests. As they tip us so well.”

[Yes ma’am]

Buttons clicking 
Electricity whizzing 

AHHHHHHHHHHHHHHHHHHHHHHH
AHHHHHHHHHHHHHHHHHHHHHHH
Screams 

Ah so much fun, scream you wretches, oh mother this music, this joy. 

** More screams **

Screams stop 

“Has 5 minutes already passed?”

[Yes ma’am]

“Time moves so fast”

“Now that my precious wretches, my dear guests are done with the starters. Would you two like to move to the main course?”

Raggedly breathing 

Eat shit, you bitch. 

“Oh, our female guest seems very excited”

Why are you doing this to us??

“Why?? I don’t know why I am doing this. Isn’t that your job to tell me why am I doing this?”

Eat shit, you bitch. You will rot in hell, maggots will eat your eyes, they will eat you patiently, they will torment you as much as you have done to us. 

“Awww, our beautiful guest wants to have the starter items again.”

What do you want from us?

“Guard 17 did you not just hear that our guests want some more of the starters”

[Yes ma’am]

Screams 

I will tell you everything that I know, please stop!!

BITCHHHH!!!

“Awww, would you really tell me everything that I want to know??”

YESSS!!! YESSS !!! I WILL!!

“Guard 17”

[Yes ma’am]

“Hehe hehe so why don’t we start with something simple.What is your name?”

Raggedly breathing 
VARUN

“Correct answer. Now why were you brought here??”

I, I I stuttering 

Don’t tell her, I beg you don’t tell her 
“Aww you still care about him. It is so pitiful. So interesting, now, Varun, if you don’t tell me, then I may give that bitch some souvenirs. The decision is yours?"

Who are you ? stammering
Why do you care if I tell her the truth that I know?

–silence–

“Aww you don’t remember her? That is so sad but the deal still stands. If you don’t tell me then I am going to give her special treatment as your host. I will count to 10 if you haven’t started telling till then, I will kill her. Guard 17, make it so that she doesn’t survive okay?"

[But ma’am?]

“We have enough money guard 17, so shut your mouth and do as I say.”

[yes ma’am]

“10”

Who are you ? and why should I not tell her ?

“9”

Goddamit, say something. Why did you stop me before?? 

“8”

You do know that, I will take your warning and you will die? Do you want to die??

“7”

Say something. Please, whoever you are please.

Don’t tell her anything 
“6”

Why?? At least tell me why?

“5”

–silence–

“4”

–silence–

“3”
I love you 

What??

“2”

Please don’t tell that bitch anything please. I beg of you. Please.

But you’ll die!!

“1”

It doesn’t matter, just remember , do not tell her anything.

I was bluffing, I was bluffing Okay I don’t know anything. And why? Why are you looking at me with that gaze? I don’t know you?

“Okay times up!!”

“I came to this city when I was a child, I don’t remember how. I was maybe lost or maybe kidnapped..”

What are you doing?? Dammit!! 

I am not doing it, it is him!! How are you here???

“I remember, I remember running away from my captors..”

STOPPP!!!

She will kill you if you tell her. Please Please I beg you ######

“And then I was lost in an unknown city with no idea where to go. I could go to the police, No I did go to the police and they kept me in the police station and made me fetch tea for them until a person came and then they took me to an orphanage, they called it Ashram..”

“Ahh ahh, I have to stop you there, I am not interested in your childhood sob story. I asked you.How did you end up here ?”

“Okay. As I stepped into adulthood, I had to leave the ashram. And I left and never looked back. I got some work at a restaurant, they made sure that we were at least literate. And I kept working and working in that same restaurant. I had earned enough to have my own place to live. But I still used to live in a Gurudwara near the restaurant. Life was going smoothly, the work was good, I knew many customers too, they liked me because I was clumsy. And my owners were such kind people. They had a little daughter who used to dirty my uniform with chocolate. Haha. But my luck ran out. The restaurant was burned down, the owner, his wife and their daughter. They were killed in cold blood and displayed on their dining tables in plates. I didn’t feel much remorse for their deaths but I was angry that my stable job was now gone. And some one was responsible for their deaths. I was so confused at my anger, Like i knew that i was angry but I didn't know where to direct it to. Until some rumours started- they were killed by their own relatives for some disputed land. If I heard them then so did the police, I waited for a clear adversary who I could direct all this anger too. But it was taking too much time, the police were not finding any evidence to instigate that it was the relatives. So I waited some more until this case was swept under the rug , forgotten like many others in this city. My money was running out and so was my patience, And my anger was still the same, ready to explode but where could i direct it to. So I took matters into my own hands and went to live in their home, I wanted to save my money until some conclusion was drawn. People were scared of that house, so it made it so easy to get in the house. I lived in their home and waited for the news. I watched the news on their TV. They had a TV. And as time passed, I handled my expenses so carefully. I ate at langars and lived in my ex owner's home. Life was starting to become stable again , I was getting used to it. But then again, my anger was still there with nowhere to go. So I started to research on what I could direct it to. I started going out more, reading more books. I did find some targets, some people-  hindus wanted me to hate and direct my anger towards the muslims , saying that all the problems, crime was their fault and how their ideology was so wrong. And some other people -muslims wanted me to follow their true god and do good as intended in their religion, do jihad, and make everyone pure and god following again, to make them follow the right path. They didn’t hate the hindus as the hindus did muslims, but they were also unapologetically fixated on their thoughts and what they sought to be right, their brains had no place left for anger. So I explored some more, I met some more people who were just the same, some hating the biharis and the immigrants, some hating the other castes riding on their own bubbles of false superiority, some people I found hated the government. But none of them, none of them could have an anger of the magnitude that I had. They were all absurd raving like those bugs which keeps screaming until its head explodes. They had no passion, no truth. So I kept exploring some more, and then I met a person who could match the intensity of my anger. It was a mother whose child died due to cancer, and she was angry. I have to admit that she had more anger than me. And it was directed at something I tell you. It was directed somewhere. I was directed at the only being who could handle it, without compromise, without and masked falseness and absurdity. The only being who could encompass the truth - God. ”

“You? And God? Interesting .What happened next?”

######  you need to listen to me and stop right here, please please. You don’t know what she will do when she knows the truth. She will kill you , she will kill me too. So please for your own sake, please stop.

“Shut the fuck up bitch. Guard 17 I don’t think that we need her anymore.”
[Yes ma’am]

“STOP!! If you want to hear the rest of it. You need to release her, you need to promise that no harm will come to her. If you do that I will tell you the rest of the story truthfully. But if you don’t, you can just kill us both right here, right now.”

“Aww, See you do care about her.”

“I don’t”

What is going on? First you are here in this room unchained, and then you are acting like you know her and Madam. And what’s up with that story of yours. Why did this girl who I have only heard of look at me with those eyes. Why is she stopping you from telling the story? And why the fuck did she say that she loves you ? I need fucking answers.

“Oho, I thought you were pretending, but it seems there really are multiple of you”

–silence–

######  it is already too much, you have already revealed so much. Please stop here, I know that you don’t care about me, but please I don’t wanna die ** sobbing **

And why would we die ?? What is it about this story and why is my heart in so much pain seeing her.

“Oh, how would I know? I am also hearing the truth for the first time”

If you are only hearing it for the first time, then how can you verify if he is telling the truth?

“Oho, smart question.Why should I tell you though ?”

Bitch, if you already know then why are you torturing us ? over and over again , you wretched snobby cunt

“What THE FUCK DID YOU JUST SAY? YOU CRAZY LUNATIC”

“ALL of you, SHUT THE FUCK UP. You people ramble like those absurd monkeys too. I am tired of your ramblings. I am tired of you all. 
–silence–
You people remind me of that bitch, she was like you too, rambling, believing in her own shit, an absolute. But she was the biggest hypocrite that I had seen in my entire life. And you all are hypocrites too, too fucking dumb to take things as they really are. You people have no existence of your own, you are just, just so vain. So fucking vain like this idea of an God. You want the truth, yet you already know it. And then you live your lives in denials, in delusions. And you, you ramble from the other side of the room and really expect me to comply, you use this girl to rope me in. To tell the FUCKING TRUTH?? But you know what, Kill her and kill me too, I don’t fucking care anymore.”

Awww, number 17, He thinks that i might not actually do it. Now listen you gremlin. I don’t even need to take your offer. Today might just be the day, number 17 level 5 please. 

[Yes Madame]


**INTENSE SCREAMING** 

So The fated day awaits, and I drink in Joy to thee, 
The day of judgement, ye come , ye come,
Thee come with all your glory, and take thee lambs back
Take thee pure swans to the lake of serenity 
Oh Lord, Oh Mother, I await thee mercy 

** Screaming Continues **

Hahahahahahahaha
** hysterical laughter and the melody of screams **

“AHAHAHAHAHAHA”
AHAHAHAHAHAHAHA

“You all have gone insane. INSANEEEEEEE”


** After 10 minutes **

** ragged breathing **

Can you ** hesitatingly**  Can you tell her please??

“**Shocked** whatt??”

“Why should I?” breathing raggedly 

Because I cannot take it anymore, I wish to die, but , But i don’t want to be in this pain anymore, I cannot. I beg you, just kill me please.

Oho! (excitedly) our girl broke finally. Well congratulations, this is the first time you have made this far without losing consciousness.

–silence–

So Bhola is it ? What is it going to be ?

“I don’t know anything ”

“Promise me that you will let her go.”
Oh! I can’t do that.

“Then I cannot tell you anything.”

Oh! Are you sure? that you wanna go down that route?

–silence–

Okay , deal. I will let her go once you tell me the truth.

“Swear!”

What??

“Swear!”

**Frowning **
I swear that I will let her go once you tell me the truth. I swear it on God, I swear it on my soul and let all this air, this life bear witness to my oath.

–silence–

Now, speak!

“
So I looked for this God, but everybody had a different interpretation of this GOD.​​ The muslims found it in their prayers and their holy book, Sikhs were kind of the same too. Hindus- most of them found it in idols etc. and some of them had different philosophies too, but they were all bullshit. All of them were just made up stories. All of them were Delusional. It was just dishonest. It was not the truth, it was not God, it was just rituals. All of them were rituals. So I was at a dead end, My anger now had a target but this target didn’t have any tangible form. So I was stuck, stuck doing nothing. My funds were running out and I was desperate. I was so desperate that I started kidnapping the priests,qazis and similar people. They must know right? That was what I thought. And I was not disappointed, each of them had some techniques by which I could reach God, it was a long process with faith as its bane.  

<actually this should come a bit later. We should focus on the main story more>
When I was little, we were always told stories by our caretaker  before sleeping. One of them stayed with me for a long time. And as I found the place I could direct all my anger, once I found that being . That story of my childhood came back to my face out of nowhere.  
"The Bastard of the Sun God" 

That old frail man would beat us up all day, make us do labor to earn some money and when it was time to sleep and we were too exhausted to sleep with our aching bodies, he would come and start his ramblings. He would say: 
Sit down, you stinking rats. Stop chewing your nails and listen.
You think you’re cursed? You think your life is shit because no one wanted you? That you have to work all day just to earn your rations.You think you have it bad haha. You little bastards 
Let me tell you the story of the greatest bastard this country ever made.
His name was- Karna.
Born not from lust, but from a mistake. His mother — Kunti — she played with gods like children play with firecrackers. She wanted a son from Surya, the sun himself. And she got one. Glowing skin. Golden armor stuck to his flesh. Born divine.
And what did she do? She threw him in the river. Didn’t even look back.
Not because she hated him. Because she was afraid of shame.
That’s the truth of this country — we worship gods but throw their children in the gutter.
So Karna floated. Until a poor charioteer found him, fed him, gave him a name. But a name isn’t enough in this world. You need varna. You need status.
Karna tried to learn archery. The Brahmins spat on him. “Low-born,” they said. “You can’t touch the bow of a prince.”
So he lied. Told a guru he was a warrior. Learned everything.
When the truth came out, the guru cursed him.
“When you need your weapons most, they will abandon you.”
That’s how the world works, boys. You lie to survive, and they punish you for it.
Still, Karna didn’t cry. He found one man who gave him respect — Duryodhana. A man everyone else called evil. But Duryodhana said, “You’re a king now.”
And Karna swore loyalty. Not to dharma. Not to the truth. But to the only man who didn’t treat him like dirt.
He fought for the wrong side, yes. But don’t you dare think the Pandavas were saints. Arjuna laughed at Karna for being poor. Draupadi refused to let him compete for her hand — “Not a prince,” she said. “Not worthy.”
That’s when Karna knew — this world is a fucking caste play. And he would burn the stage down if he couldn’t act on it.
Then came war.
Kunti came to him and cried, “You’re my son. Arjuna’s your brother.”
He laughed. “Now you come? When my whole life is ashes?”
She begged. He promised. “I won’t kill your sons. Except one. Arjuna dies by my hand or I die by his.”
In the war, the gods themselves cheated him. His chariot sank. His bow broke. He looked up at the sky and said, “Give me justice.”
Silence.
Arjuna shot him dead while he struggled.
And that was that.
The bastard of the sun died in the dirt. No temple. No last rites. Just blood in the mud.
But listen, you half-starved dogs.
Karna’s not just a man. He’s you. He’s me. Abandoned by fate , abandoned by gods.
Every time this country tells you you're nothing — that you're too poor, too low, too late — that you're unwanted. Remember karna 
Now sleep. Or don’t. The gods don’t care either way.

And this story as that senile old told, got woven into my identity. I didn’t care about the right or wrong either. I care about truth and honesty and I was loyal to my cause. So I looked for this god, I somewhere knew that it only existed in the delusions of people. But even then I never stopped looking. And then suddenly one day, strange people barged into my city. They were strange , really strange, they were donned in strange robes and they were crying, Apparently they were on a pilgrimage. ”




A Feast  on Life 































Index:
1.Bitter Wishes
2.The Last Supper -Honour
3.The Unending Feast - Insanity














Bitter Wishes : 
What would it be when  both of us are gone? Forever, never to be found again,never to be seen anywhere, our names erased from this world, we disappear completely. Would you still look at me like I am the only thing that matters to you? Would you still hold my face and wipe those tears as I will look to you and love you with all my heart without disappearing, without being torn apart by these vultures skinned as humans. Would you still embrace me as such to melt me away with all our sorrows.

“Mmm cutie you do realise that the food is on the way. Just wait a little bit more and maybe I will give you my share of sweets too. ”

OH! What a tragedy! My love. Such A tragedy! Longing, longing I have been all my life. Longing for my death to come oh! Dear. If it must come, it must come fast as I am getting fearful. If one more instant passes with you, I will be scared, reluctant to ever part ways with you. As you, YOU WHY ARE SO BEAUTIFUL? Ahh! Death can have me when it earns me. At this instance I just wanna be here with you and eat a hearty meal while looking at your smile.

“You know, you should watch less movies. I am just a normal person. And stop talking in riddles.I am not that smart, you know. Explain to me in simple terms,dumbo.”

Hehe, okay okay, I will stop. But you know, You are very beautiful. And I really mean it. Maybe it’s the magic you conferred. But I am bewitched, I must say. You are not some old witch who likes to lure young innocent boys like me to their abode and then eat them? Well it’s scary, but I wouldn’t mind as long as it's you. 

“ OH! How did you know? Well I do like your face, but your tongue,that is sure deceitful pretty boy. Maybe I will cut it off before I cook you.You wouldn’t mind, would you now? Of Course you won’t. ”
*Gurgle gurgle *
See you’re hungry too, and you were pestering me to not talk weird huh! But when is the food going to get here, it’s already been an eon.

“Awww, you mustn’t speak of time as such, you know food is most enjoyable when you’re really hungry. So As more time passes, patience struggles against hunger.So when the food arrives it will all be worth it. ”

Hehe, Is that how you’re holding yourself back?My adorable glutton, I know you’re on your last straw too. So shall we play your favourite game to distract ourselves.
“Hmm hmm that would be very nice actually. Last time it ended with my turn, so now it’s your turn.”

As you command, My Queen. But as always, my stories tend to be a bit disturbing, so tell me if you want me to stop, okay?

“Yes , Ofcourse I will. You tend to spread tragedy to every character in your stories. And this time, I want a story with a happy ending. You get me, if you gave one more story with a bad ending, Maybe I will eat this chair instead of food. Nod if you understood ”
*nods*
As you wish sunshine, so here we go*clearing the throat*. But be careful my hunger may influence the stories a bit.


In a far away village hidden in the mountains, there lived a small family of four- a husband, a wife, a son and a daughter. They lived peacefully in their little home. The father was a warrior and the mother was a singer. One day the boy of 12 with his little sister of 9 were playing near the farm. When an old man approached them asking for food. The children were bewildered at first, then smiled at the old man and ran back inside
The boy looked for something to eat, while the parents were away for their work. His little sister followed him around with her ember red eyes as he hopped from the kitchen towards the living room area. The boy came back with a fruit basket in his hands and smiled towards her. He gave some of it to her and holding her small hand, he came outside. The old man was sitting on the ground stroking his long white beard, his stick sitting by his side. He smiled at the kids coming towards him with fruits in their hands, the little girl munching on the one she was holding onto and the boy carrying the basket with a smile. 
“OH ho ho what have you got there kiddos? ”He chimed.
 The boy smiled and placed the basket in front of him. Both the kids sat in front of the old man  and stared at him intently, expecting something in return.*laughing* The old man thought to himself about the simple exchange they want to have, the pure innocence. Kindness. Maybe only children truly can have it without it being tainted with complexities.  The simplicity of their ego and the expectations of getting something in return for doing something good. The old man thought to himself, until when it will stay this way, or until what. The blue eyes looked at him sparkling. 
Chuckling the old man asked “hmmm what are your names? ”
My name is Akarshit , the boy chimed holding her sister’s hand. And my name is Ishikaa , the little girl chimed. 
“And I am Arish”smiling. The old man continued,
“ Now I can fulfil your one wish in return for the kindness you have shown me. But remember only one so think very carefully before you wish for it. Hehe and be careful what you wish for” he whispered.
The kids looked at him in confusion, not able to really understand what he was saying. They just understood that if they wished for something it would be fulfilled. But there was nothing in particular the kids wished for. As they were provided everything they asked for, their parents had always provided them what they asked for. Now that they had a wish to make, they didn’t know what they should ask for.
 The little girl, filled with curiosity, asked ‘can you really make wishes come true’. 
‘Yes, I can, but your wish must be from your heart’ the old man said in response. 
‘Are fairies real?’ she asked. 
‘Hmm , if you believe that they are real then they are real and if you don’t then they also don’t exist.’the old man told her.
 ‘Can I see one? ’She inquired. 
‘Do you want to see one? If you wish for that then I can show you.’ the old man answered. 
‘Yes’ she started jumping excitedly. Looking at this ,the old man snapped his fingers and a strong gust of wind blew his long white hair to his face. He smiled at her, looking all confused. He told her ‘you will see a fairy soon, when they pass by your house’  
Ishikaa looked at him unimpressed, you lied , you're a liar humph. 
Hey hey, no I am not, you will see a fairy soon I can feel it.
 Well what about you boy, what do you wish for the old man asked. Looking the old man straight into his old and weary eyes ‘ can you really make wishes come true ?’
 Yes I can but hurry I must leave before rain comes knocking down. Glancing at the clear sky the boy gave him a confused look.
 Feeling like an idiot , the old man grumbled, you can ask for something and confirm if your wish comes true or not. What do you say ? 
‘I don’t  know, Can I Ask for it later? ’.
Hmm sure, when you need to wish for something just envision me and say you wish okay?
 ‘Yess’ Arish grumbled and snapped his fingers, watching the children with a sense of warmth in his heart as they innocently enjoyed their fruits, unaware of the magic that had just taken place. With a gentle smile, he faded away into the ether, leaving behind a sense of wonder and possibility of new surprises. The kids didn’t notice the disappearance of the old man. The sky went dark and the parents returned back home. Megha was  humming a tune, chopping vegetables in the kitchen and Abhi was preparing the pots. The kids were loitering around the kitchen making the atmosphere joyful. ‘Papa do fairies exist? ’. ‘Hmm kiddo yes they do, you remember the one time the fairy took your teeth?’ Abhi answered with a chuckle. 
‘NO Papa! real fairies! The real ones!’. ‘Haha, yes they do exist but they only show themselves to the children who drink milk and listen to their mothers’. Really? Papa really really? She hopped around him filled with excitement. ‘I will drink all the milk today, 'she passed the commandment.

In the other corner of the kitchen, Akarshit was helping his mother in cutting  vegetables. ‘Mama, you know today when we were playing outside a strange old man came and asked for something to eat. So we  gave him fruits and in return he asked us to wish for something.’ Suddenly Megha’s face turned white and she glanced  at Abhi playing with Ishikaa.
‘Hmm so that happened, Did he tell you his name ?’ she asked. ‘Yes, he told his name, mmmmmmm it was mm, yesss it was Arish.’ Akarshit said excitedly. 
Megha sighed in relief. ‘Mama so you know him ?’
No, I have no idea who that old man is,but we have to hurry. Papa is really hungry. 
From the other side of the kitchen Abhi gave her a look. 
After having dinner and  taking the children to bed. Megha took Abhi to the basement.
 What is happening honey why so rushed?
‘Today an old man visited our children and granted them wishes. They said the name of the old man is Arish.’
—Silence–
That old man?
‘Yes.’
Do you know what they wished for?
‘No, I didn’t ask. I wanted to discuss it with you first.’
Hmm, he is playing his games again. And we are not prepared.
‘Honey , no one is prepared for him. All these years I thought that he was gone. And if we keep doing things right he will never appear. But alas, he never leaves.’
Hmm, tomorrow morning we will ask the children what they wished for. And prepare for whatever is coming our way.
‘Abhi , everybody thinks that he is a myth. We used to believe that too until he appeared and sent everything to ruins. Even after following God he came back.’
I am going to meet the priest now. I will come back in a few hours. Until then, you take care of them. 

7Am:
‘Akarshit, so when that old man gave you a wish, what did you ask for?’

Mama I didn’t ask for anything, I saved it for later. 

Hmm, that is good, Now listen very carefully Akarshit, you must never ask for that wish okay? Bad things will happen, because that old man was not a good person, if you ever see him again, come running to  your father okay? 

Mama but Ishikka asked for a wish, she asked for..
‘Stop, don't tell me, let’s first go to your father.’

‘Papa, I wished to see fairies. Did I do something wrong?’
No,pumpkin you didn’t do anything wrong. It is okay, but if you see that old man again in future you mustn't talk to him,okay?
‘Why papa, is a bad person?’
Ahh, no he is not a bad person. It is just that talking to him brings bad luck. So if you see him in the future, come to me or your mother.
‘Okay papa’
Now go and eat your breakfast.

Just at that moment Megha and Akarshit arrived. Megha gave Abhi a nod and sent Akarshit to eat.

‘Asked for nothing, he saved the wish for later? What about her?’
She wished to see a fairy. I don’t know, it is ambiguous. According to the ancient texts Fairies have been on good terms with humans. But there are cases involved where they took away people because they found them beautiful.
‘You remember the conditions regarding magic of wishes.’
Yes, the wish must come from the heart and one must believe that it is going to come true.
‘So we can just convince her somehow that fairies don’t exist.’
It is not so simple to break a wish. She has asked for it and according to the texts it will come true. And if we try to muddle in it, it may backfire.
‘So what is it that you suggest we do ? nothing’
Yes that is the only option we have right now, the priest also advised us to do nothing. 
“Aaaaaaahh mama!!”
Abhi and Meghna dashed towards the kitchen. And what they saw sent shivers down their spine. There was a red blob of flesh floating in the kitchen. When they looked at it, blood started seeping from their eyes.
Close your eyes, Abhi shouted. But to no avail they were not able to take their eyes away from it. Crying Megha moved towards the kids to shield them. But she was stopped midway by a tentacle coming from the blob. She was on her knees unable to move forward. She strained her neck to look at Abhi. but what she saw left her heart cold. Abhi was lying on the ground in a pool of blood. Another tentacle grabbed her head and made her look her way. There was just the sound of Abhi’s laboured breathing.
‘Please spare them, please spare my children. I will do anything. I beg of you please spare my children.I will do anything.’
The blob of flesh moved close to her.
 #####################************#############
###################################*****#####
*******#############***********############*******
*****************************##########################

‘Yes yes, I agree with everything. Please spare them, Please’
############################************########

The blob of flesh moved even more closer and caught her with all the tentacles and devoured her. It disappeared just after a moment leaving a kitchen filled with blood and carnage.
After two hours, A boy covered in blood woke up from the ground. Scared he looked around, there were red feathers around where her sister was and a corpse was sitting on the chair. The skin was charred and there was just flesh and black eyes opened in her tiny eye sockets. Scared out of wits he ran to run out from that place. Just on the doorstep to the kitchen a person was laying in a pool of blood without moving. Akarshit moved closer to the man and saw the face of his father laying dead. He screamed and fainted right at the spot.

2 hours later:
So, you were late? Is that what you are trying to say?
‘Yeah , I have already contacted the main temple. They will soon send some people here to investigate and cleanse this place.’
Priest, from the family of 4 one has disappeared 2 are dead and one is unconscious. What are we to do with him?
‘Nothing, people from the main temple will handle this case from now. And he too will be handled by them.’
But he can be dangerous. Maybe the evil fairy is still inside him. We cannot take any risks. If this goes out it can cause heavy destruction.
‘You think I am not aware of that. But it is the most crucial evidence we have for everything. I had given Abhi a special charm to resist the fairy. But it was a special fairy, it killed him the instant she sensed it.’
Humans are not meant to see these things, they got unlucky.
‘What are you going to tell the people?’
It was a house fire, they all died in it. As for the boy he was found unconscious outside. 
‘hmmm , that is so. Why do you think that old man targeted them?’
He didn't. He just wanders around, meeting  people and paying back their kindness. Sometimes it is a boon and sometimes it is a curse. He is a twisted existence, an angel walking on earth. For it is cruel, for him it is normal. God encompasses all good and evil. And he sees our actions as his deeds. So no matter what the outcome he rejoices in the actions of God’s greatest creation.
‘He is insane’
Haha that is so.

In a pitch black space, a person woke up startled. 
‘Hey kiddo, Have you decided on your wish yet?’
—silence–
‘Hey can you hear me?’
–silence–
‘Hey, hey what are you thinking about?’
The boy just stared at him without uttering a single word.
‘Hmm, I see you are confused about what happened. Let me tell you everything- your sister’s wish was to see a fairy. And a fairy did appear but it was a hostile one. And humans are not allowed to see his divine creations. So your eyes were burned, your father tried to use a charm to dispel her. But that fairy killed your father, your mother begged the fairy to save you guys. Seeing this the fairy’s heart melted at your mother’s plight. So the fairy  told her that in exchange for her she will forgive you. And your mother agreed, so the fairy took her. And when you woke up, you got extreme psychological shocks and fainted. And now you are here in your own mind.’
Hearing this the boy started crying.
‘Hey hey remember you still have a wish left.’
After a bit of sobbing the boy asked ‘can you return me, my family and return everything to as it was before.’

‘Those are two wishes, only one can be true. Now there are some constraints in this. The dead will come back as Ghosts and even if I return the things as they were before this incident, the dead won’t come back. Choose your wish carefully.’
My mother was taken by fairies. She is still alive. Can you return her back to me?
‘Yes that can be done. But are you sure that you want to wish for this? ’
Will the fairies still bother us? 
‘Hmm, depends, you see. Your mother will not be bothered by them, but they may affect you. ’
–silence–
Who are you ?
‘Haha , me you don’t need to know.’
–silence–
‘You see, many people don’t think I am real, so I don’t exist for them. But the people who believe in my existence, only they can see me. Just like fairies if you believe they exist, then they exist if you don’t believe, then they don’t exist. Part of the reason you didn’t die during that is because of this, because you don’t believe in fairies.’
So if I believe they don’t exist then I won't be affected by them?
‘Hahaha if you don’t believe in them how would you know if you are affected by them?’
—silence–
‘Hey you don’t have much time left, the templars are going to be here. And from all my experience I can tell that will burn you down with the rest of them. Very cautious fellows. ’
Why?
‘Because you can be contaminated by the so-called evil spirits and there would be a nice explanation if you died with the rest of them. You know to keep the evidence.’
How much time do I have?
‘Not much.’
Haha my mother, can she be saved?
‘You wish for it, it can be done.’
‘Then, I wish for my mother's safety. You know what I mean, so don’t twist it’



10 years later:

Many Many years ago, there was a River here, it used to be blue but then one day it was dyed in red, with bodies floating in it. After that day there was no river here,There was  just grief of mothers and pleas of children. There was just one widow and she couldn’t cry as her voice was taken from her. People all took pity on her but none dared to help. One after another people migrated to another city which didn’t have a river but it always rained there . But she didn’t move, she was still there all alone waiting. And one day she Walked into the river fully dressed in a bridal dress with a doll in one hand and a sword in the other. And after that there was no river left.

And that cutie was my story and as you said there is no tragedy (hehe I lied) in it. It is not a happy story, but it is not a tragedy either(huhuhuhu). And now comes the questioning round hehe. Do you yield? 

*frowning*
“Huh yield? Me yield? In your dreams Pinocchio. Bring them on.”

Hehe, guessed as much Grandma, how can I ever hope to defeat you hehe. So here is my first question- Are fairies real?

“Hell yeah, they do exist. Aren't I sitting in front of you? Huh”

Haha so here goes my second question- what was the story about?

“Hmm, I thought you would ask one at the end but here we go, surprise me Pinocchio.  The story was about wishes and innocence. It starts with the innocence of children and their fantasy of magic and fairies. What can one wish for ?This question when asked to adults may get complicated with their desires as they may not even know what they even really want. But children there is an answer, They know what they want and won’t shy away from making a wish. Because they are not aware of the consequences it might bring or regret their choice later. ”

Hmm correct Madame Rose,Now my third question- the Boy Akarshit’s wish was a sacrifice. He could save himself, so why didn’t he?

“About that, considering that he is 12 and they live in a secluded place happily together. And even if I was in his place I would have done the same. Her life was hell after that but she was free from fairies that killed her family. That old man was the harbinger of their plight. And after that everything came crashing. The innocence was tested in face of danger and as always it got turned into a tragedy.”

Haha(what is so funny?). Now for my 4 th question-  Do wishes ever come true ? What do you think? ?

“Now this really is a matter of perspective, maybe wishes come true, when they come from a pure heart and a real wish. People don’t really know what they truly desire. Mostly they don’t even wish at all, they have accepted the fact that if they desire something, it wouldn’t come free to them. They would have to work for it. And isn’t there a saying that If you get something for free, you pay for it with your future”


















      The Last Supper - Honour :
Hahaha. You know when I was in school, I once had a strange encounter with an old man. I was waiting at the bus stop and it was raining. An old man with a long white beard and white hair came there. He was completely drenched in the rain. He sat on the adjacent bench next to me. There were only two of us there, waiting painstakingly waiting for our ride. It was exceptionally cold that day. He asked me if I could make one wish and it would come true. What would I wish for? I really racked my brain on this. What is that I wish for? What did my soul yearn for?What is my desire? Many answers came to me but in the end, they were all the things I wanted to do by myself. It was like even if a miracle like that can happen, I wouldn’t wish for it. So I told the old man the same and started laughing in sync with the thunder. He asked me what if I could meet a person one last time, even if that person has already died. This really got me into thinking. After about 10 minutes as I was going to answer his question the bus arrived. He didn’t get up from his seat, he was not going to board the bus. I started walking towards the bus and the rain got heavy all of a sudden. I looked out of the window to find that the old man was gone. He had just disappeared. And as for the answer for his question, he never got it.

“Hmmmm, that is really bizarre. If I was in your place I would have directly asked for money huh.It’s such a pity .Such a pity.But Now,the star of my sky, it is my turn to tell you a story. Hehe, And guess what, it is going to be a love story again. Tell me honey, are you excited?Say yes or Ima break your teeth.”

Ahhh, not again please not a love story please. Anything else would be fine please, just not a corny love story.

“You really are asking for a beating. Hasn’t it been a long time before I dislocated your jaw. Hmm this time i will go for your nose, then I will see if you still don’t hear my story. ”

NO, NO I will listen please. But just don’t make it tragic please.

“Oho oho look who is talking about a tragic ending. And all my stories have a good ending, not cryptic like yours. Love wins in the end no matter what huh.”
(who would know it better than me,you fool. I just, I don’t know. Love doesn’t always win. It is actually quite the opposite.)

Huh, Yes that how can there be love and harmony existing all at once. It is not possible. 

“Hmmm, Shut up. Ahhhh ok, this time I will tell you a story which will make total sense. So just keep your lips tight, or I am really going to bite them off. ”

Yes Ma’am ,pleasure is all mine.

Ahmmm, so the story starts as:
“
Honour, what is honour ? I know of no such honour that you are trying to impose here. I know my morals, my code of conduct and my values. And till death I am going to defend and fight for what I believe in. And remember this is a warning. If any of you even dares to touch a single strand of  hair on my sister's head,I swear on the name of  the Goddess and my sick father. That person will see the dawn of the next day. And what was that about ‘my sister bringing shame to our clan’. You fucking hypocrites, Wasn’t she the pride of everyone here, her research has gotten us all ahead from all the rival clans. Nobody here dies of hunger anymore, after all hope was lost, who was it who brought life to this forgotten dead village. And now just because she loves a man not of this clan, you want to hide your face in shame and now you want to hurt them. Oh, sweet  lambs, wasn't this the warning passed from front the Goddess -‘To never stop thinking, to always question before taking somebody else's life into your hands?’. Just because that man sitting there says that my  sister has sinned and now she needs to be purged. Ask yourself Can love ever be  a sin?  ASK YOURSELF! You FOOLS!

ONE YEAR AGO:

Akanksha, your clan's people, will they ever accept us? Just yesterday they confirmed that the girl that ran away with a boy not of this clan last year was killed by them. And after this news spread out they all celebrated this a win and the most horrific part was that the killer was her own little brother who didn’t look pleased his face was filled with dread. But was smacked by father and was forced into celebration. They all celebrated him as a hero and his act of murdering his own sister as justice. And as for the punishment he was sent to juvenile prison alone away from the adults who encited him to kill his own sister.

Hahahaha, why ?Are you scared?

Yes, I am scared. You see, I never wish to be a tragedy in your life.I wish to be the best moments in your life. Heh What’s with that look ?

Hehe, So if they don’t end up accepting us, what will you do? Will you fight for us? Or will you leave ? Or will you ask me to run away with you?

Hmm, depends you see, if your loved ones don’t approve of us and shun us- then I may leave. But if they approve of us and accept us. Then I am ready to fight the whole world. And as for running away, I am selfish. I will accept this. But with you I surpass all limits, that is why I will never ask you to run away. Never.

Haha you truly are foolish. So aren’t we clear, convince my family. And then we will fight whoever stands in our way. But do remember, I am not going to help you in this. You have to earn their approval all by yourself or they might think that I am a fool in love and can’t see straight.

Huh, just watch me go. I am gonna charm your whole family.hehe 

heh, we will see about that. as of now they just see you as a nice doctor. but that doesn't mean that they will agree to our relationship. when you are born in war, you only know war and even yearn for it. it's indoctrination to start loving something , revering something just after you gain consciousness. the values ingrained in the mind. it is hard to know that your choices are being led by them. and then engraving it to your identity. So when that system fails, you can turn a blind eye and follow it with the same blind faith as you were doing so. and repeat until you cannot anymore. You see people only think and question only when they get uncomfortable. Uncomfortable about the change.uncomfortable to lose their comfort, their delusions, their identities. But what that got to do with me huh,  it is what it is, I don't care. If they think that killing the people they loved and calling them family, restores their so called honour, then may goddess be with them fools.
 

PRESENT DAY
huh you're even a bigger fool than your sister and father. When did any of us say that we are against love? What we are against is betrayal from our kin. mixing up bloodlines, tell us what would happen if all of us started doing that. We have rules that we won't break, we have tradition and we have honour. if any of these men tried to do the same they would be shunned and shamed equally. If any of them do something wrong they will be punishable under rules of the clan. If anyone broke the rules that will be brought to justice. Now who is responsible for bringing justice to them. And don’t you think that hasn't been done  before. 
“Stop Anirudh! He is just a child. He doesn’t need to know about that.”
-As you say clan head.
Child, Honour is honour, we have held up these terms from ancient times. We live by honour, we go to wars to defend it from outsiders. And  what she has done is directly an attack on our values. Either she leaves that man and marry someone of this council’s choice or your family will be exiled from the clan. Any person who tries to contact you or stay with you will be met with the same treatment. And this is the council being grateful for your sister’s help during the plight. And as for what the Goddess says about love, it is written in the text to not marry a person inferior to you. And that doctor comes from an inferior place. 
Tomorrow, ask your father to be present here. Tomorrow this council will pass the verdict upon their fate. Everyone from the children to the elderly is required to reach here at 10 am in the morning. 


The old hut at the periphery of the village was dimly lit. An old man was sitting on the bed, his wrinkles deepening his frown. There were four more people in that room sitting on the ground. Words trying to fly in air 
To reach some others died in the warm silence and fiery frowns from the old man. I was the fiercest swordsman during my time on the battlefield but that was not always the case. At first I was filled with the thoughts of glory in battle. Me and my comrades fought and fought. Our whole unit was feared by the enemy. And one day all of it was gone, our unit was ambushed, only half of us came alive from there. But the war for resources never ended, my unit, only 100 of us were left in the end. Everyday I would wake up, some newbie would be enrolled in the camp and by the dawn there was no newbie left. I killed and killed and killed. And suddenly one day the war was over. Everyone, friend or foe knew me, I don’t know what I expected but they were all scared of me. As I was not a human anymore. Coming back home, I tried to live a normal life and married the girl just as broken as me. Everything was so wrong. The people back home revered me, for killing another human being. The king also was very proud of me, he gave us land and subsidies. But even then it all felt so wrong. But then one day, everything was just a little warm. That was the day you both came into this world. I held you in my left arm and you in my right arm. Your brother was such a cry baby with me. And you were the same with your mother. You used to smile at me, you were not scared of me ever. And I swore that nobody will be able to hurt you, as long as I am alive. Your mother due to her deteriorating health had to shift to the grand temple at the capital. And I had to take care of both of you. It was like giving delicate glass into the hands of a brute. And as a result you didn’t turn out like other kids around here. You were stronger and had high morals. It was very difficult to reason or  manipulate you. You two always kept asking questions. Thankfully I knew the answers to most of them. But until now I have been the one to take major decisions in our lives. Even after you both became adults,I was the one passing the final verdict. But Today, we will change that. Today you two are going to make a decision for us. Before that let me clear some things. The second choice means that you and your husband will be chased down and killed by them, if your brother cooperates then they will not hurt us.But then he would have to kill you both. If we had any relatives left they would also be forced into a choice. But thankfully we don’t have any left. The first option entails a life of force onto you. Your husband will be some unfortunate soldier or an old man. They would not let you choose anything. But you will have a stable life and you will be alive. Now take a decision.
‘Dad, we will do what you say. We are still foolish. Please guide us on what shall we do’
Hmm, you should consult your sister before reaching on a decision child.
It concerns her life too. 
 ‘Didi, what are your thoughts?’
After a long silence ensued, everyone was thinking. But she was looking straight at her father. Sometimes a gaze would be enough to know what the other person is conveying. But sometimes it would continue long after the thought has been conveyed. I have seen this gaze, I have seen this scene . A scene of a daughter conveying her grief to her father. Question: did she make a mistake? The grief of inevitable doom, whatever decision they take they have to sacrifice. Their life is stuck at a point from which if they dare to take a step ahead, they will fall to hell.But if they don't they will bring hell to them. She seemed to have been defeated, the first time in her life she was seeing fear in his father’s eyes. He may have been the fiercest swordsman on the battlefield, but then what could be lost was already lost. But now, the same father who has seen through life and death was questioning his own beliefs? If he had just stopped his daughter then she wouldn’t be in such a predicament. If he really said so his daughter would really comply but he never did. His own ego, his own belief were so great ? so great that he was ready to fight his own people he fought a war for. What was this war for ?- For love. 
‘Dr. Rao, do you swear to defend her with your own life if need be? Do you swear to always keep her happy and never hurt her? And do you swear to love her till your last breath?’
I swear sir, I swear.

‘Now kiddos, this man right here is retired Major Awasthi, tomorrow dawn you all leave with him. I trust him with my life. On the battlefield I saved some people, they all have stuck together after the war and created a city for themselves. But now they are old and feeble, but they will still protect you all with their own lives. And I am sure they will accept you.Now no questions you leave in an hour.’
‘Major Awasthi, they are my world, please save them. Please save my world. If possible, bring my ashes to my wife. I owe her so much. Maybe in the next life I will be able to give her the life she wanted with me. Now leave Quickly. ’


After 4 years:

You have packed all the essentials dear? Yes. Hurry or we are going to miss the bus. 
‘Didi, you know Durga pooja is coming close, maybe we should bring something for Major uncle's family too.’ 
Yes let’s do that, but first let's go meet mama papa and give them a surprise. 
‘Honey what do you think it’s gonna be- a boy or girl. I bet on a boy considering the amount he’s been kicking.’
 Hehe now it can be sweet baby girl too.hehe

The bus was walking on an empty road in a forest area. Not many people were on the bus that day.Suddenly the bus halted and some people with their faces covered with scarfs got on the bus. One of them looked at her and nodded to the other person outside the bus. 
“You get down now” they shouted, putting a gun to our side. We moved down from the bus scared. “Don’t get any bright ideas, the driver is ours. And the way to the cabin is locked. Get down and don’t make any sudden movements.” 
“We have waited for this moment for a long time now. Those old folks couldn’t protect you for long. You wenches dragged our name in dirt in the whole kingdom.”
“Such a shame, such a shame.”
“You and your father disappointed us. She was playing with our honour and He didn’t say shit, today we as the elders of the council are going to correct his mistake”
“Abhay whatever you have done in the past cannot be forgiven. But you can redeem yourself by erasing the shame. Kill them and remove the stain from our clan. Here take this blade and slice their neck in the name of god.”
Holding the blade in his hand Abhay lunged at the closest clan elder.
*gunshots*
Anirudh - the clan elder shot him with all the bullets in his revolver.He laid dead there. While her sister watched all of this with bloodshot eyes. 
 “Haha what did you think? That you’re above the honour of our clan you wench? Now see this was the bastard you ran away with?”
The main elder put a blade on his throat and put pressure until blood didn’t cover his whole neck. 
“Watch and see the consequences of your actions”
Thud
His body laid dead on the ground , a puddle of blood covering the ground. All of the clan elders' shoes were covered in blood, as they left behind a trail of blood of love.

Please I am begging you to leave me, I am pregnant. Help Help. she screamed, but in middle of nowhere there was no one  to help her.

“You have tarnished our name. And you are carrying an outsider's seed. We cannot allow you to live.”
Please ple..**gunshots**ah.

 
So that was the story.A total silence ensued after the story ended,They both kept staring at each other. The restaurant was surrounded by dense fog and light drizzle was happening adding an ambient touch. The customers at other tables went totally quiet, making the atmosphere straight out of a fantasy book .The sounds of clattering plates in the kitchen settling the current situation back to reality. A lonely tear streaked down her face adding  the contrast to her smiling face. Her bruised hands were trembling with cold. The marks on her neck suddenly got more reddened . Her beautiful face was gone after our accident. But for me at this moment,  she was the most beautiful person in the entire world.
“What are you staring at ?”

You

“What is there to see ? what? Why are you looking at me like that?”

Did I ever mention that you are the most beautiful person of all the billions of  people in this world?

“Where are you even learning all the stuff? It is not the movies that is obvious, ahh are you reading my stuff in secret again. ”

Haha No, you just write romance.And you already know that I don’t like romantic stories.
“So what is it?”
*chukling*
I am reading you and finally trying to know the real you.

“You know what,I wish that food, better be  good. Considering that this is our last meal together.”

Hmm, It already is for me. I didn’t think that you would actually come.

“Sometimes I used to think about these situations. And then I realised that we don’t really think unless we get uncomfortable. You remember you used to cry a lot, cursing that if you were a machine which had a fixed algorithm to tackle any situation, so that you  would not have to think of anything. Just focused on one goal forgetting about all the unnecessary feelings, shame, accountability and stuff. That you wanted to follow someone who would give you a shoulder you can cry on , someone who will give you a place you can call home. Someone whom you can trust. But you always refused when it was offered. And Mostly in such cases people turn to God so why didn’t you? Why because In your opinion if there was a God he wouldn’t care for you pesky problems. According to all the religions this world has been here for a long time, and the same situations would have occurred many times. So why would God care about such small problems? If he did then he might be a bored and a shackled  God? To be bound by one’s own creation is a human trait.God is free and he doesn’t give a fuck .And that statement really offended many people at times.”

Haha those were the days I used to hope for a good ending. But yeah then as it happened , I had to accept it. There is no help for anyone left. A person cannot truly ever help another. Any expression of goodwill can turn into a disaster when you are a giant. I understood that if  you are a giant, you need to tread on your path very carefully, you need to get bound by these invisible chains you cast upon yourself to retain your humanity. But God is free.

“And we are about to be free too.”

Yeah, The final supper we will have. Then there will be no fog, no more noise, no more voices, no more oppression.
“No more fear ”
No more Hunger
“No more tragedy”
No more struggle 
“And we will finally be free.”
And we will finally be free.


And finally justice will be served.

 ”






















  The Unending Feast - Insanity :
‘So that was a story with a good ending? I thought you didn’t like tragedy.’
-silence-
‘That was a good parallel to us sitting in a restaurant surrounded by fog,  waiting for food, telling each other stories .’
-silence-
‘Oi Oi don’t tell me that I have amnesia and now you are reminding me of our story so that we can finally reach a conclusion ?’
–silence–
‘Hmm I know it's not a true story because I remember everything about my life and we are not dead yet.’
–silence–
Haha You should see the look on your face right now. Haha, it's so damn funny. Of course the story is not about us, how can it be. We don’t have such an ending in our fate.
-silence-
Hmm, on second thought, we may get a happy ending, (depends on him )
‘Yeah, I hope they get the salt right. ’
—laughing—
Hey I win, as always. My story rocked and it was not a tragedy because this is the natural ending love gets. Be it the case for Laiyla Majnun, Sahiba Mirza, Soni Mahiwal. They all end in love and don’t you dare argue with me. This world always opposes it, but it prevails and repeats as a statement that love is truly free. 

‘Okay Okay, But then what about us? Are we also going to end up like them?’

‘Heh maybe (No, because they don’t know our names). Who knows, we may get a story where we fell out of it.’

As the sun was approaching the dawn the fog started disappearing, Only two people were sitting in the restaurant still awaiting their meal. 






So old man, how long are you going to make them wait? It’s been more than 2 hours. What are you hiding there?

The old man flashes a hand burning with flames and hides it again behind his back.

What the hell!! Old man your hand is on fire.

Whose hand? Mine. The old man flashes his hand again, there were no flames, his hand was completely normal.

What? How did you do that?

Did what, you punk?You are seeing things.

Hah, no I clearly saw your hand on flames when you hid it again. How did you do that?

Haha Boy you have gone mad. I warned you to not stare at the light for too long. Light when looking at a path is enlightening ,but just because it can help you see things,You don’t change your path to look at it. Take this with a pinch of salt, you are young, you are going to encounter many things in life, many of which would confuse you, bewilder you and hurt you. But just because you get thrown ..

Yeah, yeah there you go old man. With all your life advice, you do know that until I experience them myself I am not going to understand anything. And to experience things I need to get out there in the real world. Which I am clearly not allowed to. The only stories I hear are either from you or from these outsiders who come for food here.

Yes, And you want me to serve them food early so that they can leave early ehh boy.


No that is not what I meant, you are making them wait for food. Every Time you do this and they never return back. We are just losing potential  business. 

Haha, and that is exactly why I don't let you go out in the world. You simply don’t understand it. There are many complex things involved .And that is why you are still a boy. 

Yeah , you always say this but how am I supposed to learn then? You keep me locked in this restaurant. I know of many stories from these strangers, but I don't know them. I just know the world from their eyes, I haven’t seen it myself. And I don’t know when you will let me go. Father and mother have left long ago, but why are you stubborn about me? They left silently and never came back. 

Hah, foolish kid.*sighing heavily * Yes I am scared that when you leave you will not survive, you will be preyed upon by all of the world. And even if you want to you will never be able to come back the same. That is what happens to everyone.

So change makes you uncomfortable? That is why you stay here and never go out? And you just prepare me with all these stories.

When you are my age and you have seen things I have seen, it doesn’t make you uncomfortable. It makes one scared. You see, a  human strives for some sort of semblance, some stability in his life. He wants something that will always be with him, even in the worst scenario. It will not leave him. But he also knows that nothing in this world is eternal which will stay by his side.

Heh, what about god? He is eternal and everlasting ?

That is a belief my child. Yes if something is eternal and everlasting then it must be a god. But why would it stay beside a mortal whose whole life span may not even be an instant to that entity. Why would it accompany a human? And let’s for an instant assume that it does, that would be scary isn’t it.

Hmmm no comments old man, I can’t answer your questions until I know it for myself. I think it's a matter of what you choose to believe in. But I think we should serve their dinner now.

Yeah, let's serve them. 

Oh witch, when will this hunger end, when will this thirst be quenched. When will the promised meal arrive? When will you feed it to me by your hands? When will …

footsteps approaching

Finally you guys are here. We were dying of hunger here.

“Honey, we are already dead.”

Oh yah, I forgot honey. What sort of people make dead people wait?  How cruel 
You must be ?

Chuckling
What is the matter, monsieur? Now you have all the time in the world and you are still making haste.

Ah but that doesn’t mean that I am not hungry. You know I am starving here.

Monsieur, Madame, when was the last time you felt your hunger reign down?

“I don’t remember. After we passed ,it never went down”
Yes that is the case. We were always hungry and thirsty .

Madame,Monsieur, then today after this meal you will not feel hunger or thirst but you will also be forgotten in the real world. I hope you make the correct choice.


After eating the meal, they both sat there silently unmoving. 

The boy approached them again. Since it was time for the restaurant to close. They both looked at him, tears were running down their eyes.

“Son”
Son

The boy stood there petrified. What do you mean son?
*crying*
We will be leaving you to take care of yourself and that old man.
“And please tell him that we miss him too.”


Old man, what was that supposed to mean? Why did they call me son? And how do they know you? Only dead people venture here to leave their final attachments here. Are they dead? What is this supposed to mean?

Kiddo, you always wanted to go out in the world.But how can you leave if I don’t let you go?

What is it? Tell me . Can I not leave? What happens if I leave?

If you leave?If you leave then this old man will be gone too, there is nothing eternal. A man can only have memories, delusions. Your father and mother are long gone.And you? You have already left. You leave everytime I close my eyes to sleep. But you always come back having no memory of it,but you are changed every time. 
If I accept that you are gone, you will become a memory . A memory which will hurt, feed on my pain,grief, until it becomes hazy and Until I am not even able to remember your face clearly. The people who come here for a meal are vestiges. The stories they tell are all jumbled. Because I don’t recall them clearly either.I am old. But I don’t want to forget.So in rare cases they come back I make them wait a lot.And by feeding them food I feel closer, closer.I feel myself becoming hungry. I see myself living again.
But you know what, I am so tired now. I'm so tired.
I wish I had the courage to kill myself. So I could free you and myself from this pain. So I could end this unending feast.I wish death would come to me a little sooner. What use am I to this world now? Everyone who knew me is gone. And for a while now  you  have been just talking about leaving. So what is my purpose now? I live far away from civilization. I live in a cave. So what is that forces this feeble soul to wake up and cook for no one. I know, I have gone insane. 
But what did I do to deserve this? Where is my salvation? The others live following something, some God. And it keeps them sane. Why is it so? Why does their benevolent God never help me?

Old man, you forgot your answer to that question. It is really simple. When a being with a consciousness is born. He is destined to go insane, there is so much to comprehend, observe, learn,survive. Can a being with consciousness live without getting absorbed. How can such a being keep his sanity? He cannot unless he creates an anchor in reality. An anchor which reminds him of his being. There can be many anchors for a being. For some it may be people around him, people he loves. For some it may be their beliefs, for some their ego, their bubble where they have control. It can be anything, any boundary they limit their consciousness to. But they are feeble and weak, everything can be challenged if that being is not lucky. Their anchors can be destroyed resulting in their insanity. But there is one anchor that can survive everything- that is God. And your anchors being people and your own ego, people are dead and your ego? You are nothing but a hurt and weak old person. What good does that do to you? 

So the answer was always God?

NO, you know the answer to that too. The answer is oblivion. And that is why you are here. So that the world can forget you. And you can truly be dead while still having a consciousness. True death is oblivion!

The fuck, you are insane. Totally insane. The world has already forgotten me, it has been years.

Hahahahahahahaha. A being like you can only die if everyone forgets that you existed. But there is one more aspect, you must forget too. You must forget who you are and who am I ? You also need to embrace death. Or are you scared of death?old man-Arish

Hahaha!! insane!!! I have totally gone insane. 
There is no I. There is no Arish. Hahahaha!! 
AFTERWORD :
Hello there,
I hope you enjoyed reading this short story. I’ve put a lot of effort into crafting it. I often find myself with so much to express, but sometimes struggle to convey it in words. Storytelling has always been a passion of mine—both listening to stories and telling my own.
In this story, I’ve attempted to weave multiple perspectives together, something I felt was lacking in my previous works, which tended to be more cryptic. Here, I’ve focused on making the narrative more accessible while still exploring complex themes. I hope you noticed and appreciated that shift.
I would love to hear your thoughts or feedback! Please feel free to leave comments or reach out to me directly via:
Email: pumkininriver@gmail.com
Instagram:@vinodakshat
Thank you for taking the time to read my story.
- By Akshay (Vinod Akshat)

          


Glossary : 
Arish : 
	1.Arabic: In Arabic, “Arish” can mean “righteous” or “pious,” referring to someone with a virtuous and moral character.
	2.Persian: In Persian, “Arish” may signify “one who has a noble or great character.” This meaning highlights qualities of strength, honour, and dignity.
	3.Sanskrit: In Sanskrit, “Arish” is sometimes associated with meanings like “sky” or “the place of the gods.” This can symbolise something divine, vast, or eternal.
LUST

























                           Lust- Inception
In a dark dark place , man was lost and blind, but one day he found a well,A well amidst the darkness and mirth. A well with voice and passion. Man sat close and listened to what the sounds were. The mortal life of his was shown a path to fleeting immortality of being remembered, long after life had taken its toll on Man and death has gifted him truth. He will still be there in the world of living, and his existence will be lost no more. The more the man listened to the well the more his ambitions and desires became. It was already dark around him, but The Man was becoming more blind, so even if tomorrow or ever there would be light he would never see it. He may get blinded by a whole new darkness and mirth. But as the man is lost he listens to the sole solace he found by that well of unknown. What will lead the man in this darkness will be his instincts, but if he follows this voice from the well, He will get everything he wants. But it may not be what he needed. 



Aasia:‘Hey, did you hear the minister that came yesterday slapped the magistrate and he couldn’t say a word in front of him, serves him fucking right. That fucker, he sides with the immigrants too much , everybody knew that the immigrants were destroying our culture and our lands with their filth, and he still sided with them.’ 

Sometimes I wonder if the world really is that simple. The girl who was telling this to  others really just passed the verdict on the act deeming it heroic and justice. The case of immigrants destroying this place’s culture may be true, but that doesn’t justify the murder and rape of an entire family.Are these people really that blind with hate, that they can’t see that the deed that is committed is inhumane and wrong. Or does it really become justifiable when it happens to them? But that family also drank alcohol and caused ruckus, they also disrespected the Gods. Now they come to a religious place and use away the people’s resources and be ungrateful and look down on their culture. Disrespect them by drinking and causing ruckus. They even advocate activally towards some of the rituals and make fun of them. So …, see how everything becomes justifiable when I give enough reasoning and story to it. I can just go on with these stories and about what is right and wrong here. What scares me more than all these hate and crimes is this hero figure of a human. These people sitting beside me have started to revert the figure who has stood up for them and their culture. They have started to see that man as a hero and their messiah. And I am scared of this, like I can understand their hate and I can also understand their scorn for misbelief in rituals and stupidity of impressing God. But this hero, I don’t. Why do these people want to even believe in some human to be perfect and be their leader? So whatever he does or says, they will most likely agree with him. Are people really that lost? How can a human always be right? Ok I get it that, A leader is a person who can put forward the collective vision of people and see far ahead with every aspect of his people in mind. But how can they believe that whatever he says or does is justifiable? So even when he bypasses the rules, they are willing to compromise. I will never understand it. Like I get it that the minister has well thought his action out, he knows that he will have public support no matter what. And the growing polarisation has increased to the cusps of riots. So if any action has to be taken against him, This place will blow up. And By slapping that magistrate he has garnered even more strong support from the public. And the oppositions are also tensed now, will they have to resort to something like this too. They also want to win or would they choose the route of being neutral because being on the immigrants side will just cause an outright boycott of their political party. Man I bet this politics has been there for centuries, same people, same thoughts, same ideologies just different mediums. Politics in its roots may be good or bad but these people, this mob, it scares me. It was hitler who convinced a whole country’s population that killing jews and concentration camps were justified. It was leaders who convinced the mass populace that a genocide of Kashmiri pandits was justified, here we go again, I have already told you that I can convince you why it was justified and why it was not, It is just a matter of what I choose to present in front of you. Medium which these things have been happening has always been wrong, the Gujarat riots, the killings at the time of partition and much more. What my point is that it is the general populace which is influenced and swayed who judges it to right and wrong. And as I said, this population is okay to compromise with the breaking rules of the country and humanity as a whole, just because it is their leaders who do it. And it happened to others who were not part of their country, state,community, religion, caste,colour or they didn’t speak their mother tongue. It is really baffling that a piece of moving flesh full of the same blood, same two eyes, 4 limbs, a tongue , facial structure averaging to the same, same relative consciousness higher to other creatures. And then it decides to divide itself, treating a being of the same species with different standards. Now, If I present to you other aspects of this it will also become justifiable you see. Like a human connection is limited in its scope, a human has close familial bonds with its family and the people it has grown around with, it will always be favourable to them just because it is psychology, of us being with a good enough consciousness. So any person will choose familiar upon unknown and stranger, it is just the basic instinct of a human. The key question we need to address is: where should we draw the line?Where has this line been mostly drawn looking at our history and where would one feel comfortable enough to draw this line? And is there really a need for this line? YES I am questioning it. So what if Man(I use man as gender neutral term I hope you don’t mind) goes back to his primal nature and relishes in chaos and basic survival. What if there is no structure in our society, no systems, no hierarchy? Would it be wrong? Well there is still much time to find out.


Aasia:Oii, Akansha whatcha thinking about?heh? Are you daydreaming about him? Heh I just saw him this morning in the auditorium, He was there with those snob nerds again.

Ahh okay okay, (That dumbo he really went ahead despite his fever) .
Ahh I was thinking about how as species we are just still monkeys in the true sense. Like real monkeys you see, monkey monkeys. Fighting for resources and turfs even that in an organised manner. You know .. .

Preeti:Hey hey stop, you guys. You are both weird like act your age let’s talk about something which is not that hard to understand. Why constantly thinking about such complicated stuff?

Akansha:But it is just a monkey thing.

*bell ringing*

Preeti: Oh there we go, break is over. And now that Oldie will bore us for 2 hours.

An old lady wearing a black saree enters the class carrying a pack of white sheets.
‘Good Morning class. How have you been doing?’
 ‘No enthusiasm I see… hmmm so what if we try something different today.’
–silence–
 ‘Why do you guys show no enthusiasm? Am I really that boring ?’
 ‘Yes’ , the whole class muttered in unison .
 ‘Aww you are such cuties.Alright, my little Shergills  and Ravi verma’s, today we’re not talking about light and shadow or colour theory. Let’s talk about something that gets under your skin... something you’ve all experienced, whether you admit it or not: lust. How does it shape your art? How does it shape you?’
 —silence—
‘Hmm so do we have no volunteers?’
–silence–
‘ You guys are so boring. Remember that you forced me. Mahesh, would you like to start the discussion?’

Mahesh: Can I skip that Ma’am?

Professor: No way Mahesh. Just start.

Mahesh: “ Ahhh Lust? I think it’s the most shallow of human emotions. It’s fleeting. Real art should be about deeper truths, not temporary desires.”

Mahesh was a guy of medium stature and he had a knack for dozing off just anywhere, he once even slept amidst an exam. He sure has a weird character.Akansha thought to herself 

A hand raised up from the back of the class. It was the usual prankster which every class had. He usually made trouble for the new professors by swooning their money by pretending to be a poor and mute guy.
Ishan: “What’s shallow about lust? It’s where we all come from, isn’t it? It’s what drives us to create in the first place—art, love, life—it’s all tangled up in that primal need.”

A hand was raised from the front desk. It was our Aasia, the angry one. Now this will get interesting.
Professor: No need to raise hands just start after the previous person has stopped speaking.

Aasia: “Lust? Sure, it’s powerful. But how many paintings and sculptures have we seen where it’s just another excuse to objectify women? Maybe we should talk about how lust isn’t always about desire—it’s about power. And that’s where it gets ugly. The lust in people today can be reflected today from the increasing number of Rapes of women,men and children”

Akansha: “I don’t think lust is just about wanting someone. Sometimes it’s... longing for connection, or even the feeling of being desired. It’s not just physical—it’s emotional. Lust can feel like loneliness, too. I believe that Lust is in our nature, just in different quantities. Or just different level of self control”

Preeti: “Come on, let’s be real. Lust is fun! It’s not always that deep. Sometimes you just want someone to look good in your next painting—naked, preferably. Yeah maybe lust is a desire and it may be our nature too but its most distinctive feature is that it is intense. Whenever there is lust it always translates into an intense desire for something or someone.”

Professor: So Is Lust Necessary for Creativity And Art ?

Ishan: “Without lust, art wouldn’t exist. Think about it—every great artist was driven by it, whether they admit it or not. Lust isn’t just about sex—it’s about wanting, craving, needing to create something that lasts. Something that can represent them or their idea of something from their perspective .”

Mahesh: “That’s the problem. Lust is too much about the self—what you want, what you crave. True art should transcend personal desire. Art should seek truth and present it as such. Yeah I get that the truth I speak of is maybe subjective. But true art should also remain in this pursuit of Truth and Reality. ”

Akansha: “Maybe lust is more about wanting to feel alive. That craving to feel everything intensely—the highs and the lows. Maybe that’s why we create... to capture that feeling. It may be the pursuit of truth or pursuit of something else. Maybe lust is about forgetting everything and focusing on just one thing, whatever that might be.It doesn’t need to conform to the notion of rights and wrong. Lust is just Lust.”

Professor: I see, You all have your own interpretation of Lust. I am not going to refute any of you, rather I am giving you this assignment to draw Lust, draw anything with no boundations. And submit it to me in a week. Of Course after evaluation you will get back your drawings.
So class that is it for today, You can discuss it further with your peers. So take care. Goodbye.

___________________________________________________________________________
                                    Faith
Amidst the busy market of the city,people bustling and pushing each other around to get from somewhere to somewhere leading the lost one nowhere. He was standing with the support from a car rambling about something to a beggar. So busy was the city that day, no one noticed his weird bushy eyebrows, his weird gait. Only today was so normal to him. He has finally stopped thinking and started rambling. One might even say that this man has gone insane.

Nobody in this world can help another person no matter what. My nana used to say that In his whole life he realised that nobody can help another person, somewhere deep it is only the person who can help themselves. All we can do is to be there to provide that help, even when everything is lost we just have to keep faith. The pain, the struggle, the confusion is all within that person, we as the bystanders. All we can do is to just watch and pray for the person. And these things that my nana used to say have stuck with me.

‘Bhaiya I am just a beggar. If you didn’t want to give money you should have said it like all others. But I ain’t listening to all that for free.’

Ahh but I don’t have any money to give you. 

‘Ha! so tell it to someone who is free.’

Hey I thought you would understand what I am trying to say. Hey, tell me you understand what I am saying.

‘Hah! Bhaiya if you want someone to listen to your problems, Tell them to God. He listens and he understands too. He sometimes answers too, I haven’t gotten any yet. But I believe that I will soon.’

God you say, oh But which God should I tell it to ?

‘Oh if you have time You can tell all of them.’

And they all answer ?

‘Well the famous ones I have heard answer if you’re pious enough.’

Then are you Pious?

‘Yes I am, That is the only hope I have which hasn't abandoned me yet.’

How do you know if you’re abandoned or not ?

‘Bhaiya if you pay me some rupees. I will tell you?’

Hmm I have the last 10 rupees. I will give you half if you tell me how?

‘First pay me then I will answer.’

The man handed him his last 10 rupee note. It was all the money he had left with him.

Now answer me- How do you know if your God has abandoned you or not?

‘Because I believe it , I believe that I have not been abandoned. And I keep faith that one day he is going to answer. ’

What? You believe it, so it becomes true. What type of logic is that ?

‘Bhaiya I don’t know where you came from but are a bit cranked in your head. When you keep faith you don’t question the logic in it. And Anyways logic takes you nowhere, but faith does.’

Hmm how? 

‘Ask God. See if he answers. Haha’

The beggar returned him 5 rupees and turned back to begging other people. But our lost man had a fierce light in his eyes now. He got a direction to look in - GOD.

----------------------------------------------------------------------------------------------------------------

‘Breaking news - we have the ground report 20 people have been confirmed dead and more than 100 are injured in the blast. There have been reports of more blasts coming from all over the city.’
A panicked couple was repeatedly calling someone, the background noise of the loud tv was drowned in the worries and all the dark thoughts filling up their head.

‘Akansha was not in that area right? Right honey?’
‘No, she was not there, her college is close. But nothing is going to happen to her honey. Have faith. I am trying her phone. You go pray, I will join you in a bit.’

After the woman had gone inside the praying room. The man gently closed the door behind her. He had a scared look on his face, his breathing was rough. He hurriedly dialled his phone to Akansha. She was not picking up her phone. Taking a deep breath he dialled another number.
‘Hello ’
Hello, Akshay I need your help. City Art college my daughter. I need to know if she is safe. 
‘There was a blast close to that location. Send me her number and I will see what I can do.’
Thank you
In another corner of the city
‘Who was it?’
An old friend 
‘So what is our plan?’
Same as before, Stop any new attacks, Save as many as we can and find the ones who supplied them with bombs.
‘Our starting position?’
City Art college. We move now and remember to not trust anyone other than the people in this squad, not the local police, not anyone else. For Today if you see any of the politicians secure them and lead them away, by force if required. Remember the drill guys.
Monkey lets go, Sparrow gets the surveillance online, Penguin checks the guns and Whale checks all the supplies.


City Art College

There was dead silence in the long corridors, only the muffled sounds of ongoing blasts could be heard. A place to learn,teach, record and watch  Humanity was standing still in silence. A place where people discussed human nature. Today it stood still amidst the true nature of humans. In such a place there were a few people muddled into an underground store. 
‘What is the update?’

‘Sir there have been 2 more blasts near the religious gathering grounds. The total casualty count has reached 200 I am afraid and more than 1000 people are injured.’

What the fuck is Akhanda doing? Has he no control over his own city. That fucker!! What did he say ?He served in how many wars ? And he can’t keep the security of a small city intact.
What are the Army directives?

‘Sir, they have dispatched an elite  unit to evacuate you. And the Police headquarters have also dispatched some people to secure the area.’

How are things going inside the college?

‘Sir everyone has been scattered all over the campus to avoid mass life loss. The principal should be back here in a few minutes. Communication has also been established between teachers and our team.’

Inside Auditorium:
‘Sir what should we do?’
Nothing as much yet, we just need to wait and just wait for things to stabilise a bit. 
‘Sir why did they resort to such extremes ? This is just straight up terrorism now.’

You are correct this is terrorism and this is extreme too. But the answer to your why. I think you already know the answer to that. When there are differences there is always room for violence and when there is uniformity, there is always room for difference. But when there is violence there is no room for ideas, there is just the naked dance of death and then transfer of power. And then the cycle goes on. 

‘Sir isn’t there a way to stop or break this cycle ?’

There are ways just not any which have worked. But at the end they all just boil down to some form of system, a government, a nation, a community knitted in culture with someone at the core etc. But the most effective one amongst them is Religion. See for the saints and monks it is a way to reach God or find the truth. But for the general populace it is a way of living passed down from one generation to another. And I say that religion is a system because it can be revised and reformed. All the religions we see around today were not always like this. And ofcourse there are stories in these systems on how it came to be what it is today. 

‘So sir why is this happening here?’

Well every system needs some sort of power to protect its existence. And that is where the power of faith comes in. This religion system is based on faith and hope of people. It also frames the collective ideologies of people, which in turn is the main core of politics. So how can a religion not be a player in a politics like ours.

‘So sir is religion bad?’

How can ideas and thoughts ever be bad, they are nothing without a Man who chooses to believe in them. Religion is giving a person all the answers he needs. Religion is giving a person a way to reach God or truth. It is the man who twists this system to fulfil his desires, not the other way around.

‘Sir what are you saying?’

I am saying that as long as there is Lust there is possibility.*knock knock*

The man gestures with his finger to quiet everyone. He takes out his phone and starts typing something.
*loud knocking on door*
“Open the door. We are here to evacuate you?”

The man stands and gestures to everyone to stay down.
*gunshots*
The door opens and people with ARs move in and point it towards them. Where is the minister?
––silence—
*gunshots in the air*
‘I asked you something. Where is the fucking Minister?’
‘Hey you m*f, yeah you. You are a professor here?’
—silence—
‘I fucking asked you something’ the man shouted and punched the professor in the gut.
‘Now speak. For each minute passing I will execute one of your system’
Other men moved and got everyone on their knees. 
‘Now professor speaks. Where is the minister? ’
‘I don’t know,’the professor said.

‘Shoot’
*gunshots*
The student who was asking the professor questions was lying in his own blood, with a scared look on his face. A life was lost, the professor looked at his corpse, his eyes filled with dread.
‘Now professor, Again, where is the minister?’

Crying, the professor got on his knees and started begging.
‘I really do not know where he is. Please, please I really don’t know.’

*static noises*
##Target found near water station. All units move in##

Boy! you and you with me. The rest of you stay here and come back up after cleaning up.

Everybody started crying and praying, even the professor was praying. 

After 5 minutes:
They were all arranged to sit in a line with hands behind their knees. In their final moments they understood that now it is just survival. Their life was in another human’s hands who maybe was brainwashed, not even educated and he was going to end their lives just because of some ideas he believed in or following the orders he received. Either way they were going to end up dead.

*gunshots*

‘Hello there professor ’

Mashesh stands up to see all the intruders dead and a man smiling at him standing there. 
‘Who might you be?’

‘State police special unit. Professor, you are now safe, other units are going to arrive soon. Till then can you give me information about where other people are.’

‘They went to …’

‘Professor,stay here. Medics will be here soon.’
----------------------------------------------------------------------------------------------------------------
‘If they come in. You all have pens. Hold it like I am holding it and when they come close shove it into their eyes. In our long history women used to eat poison to protect their bodies, to protect themselves. Not today, we will fight till our last breath. Do not go down without a fight.’

*knock knock*
 
‘Hello Professor. We have secured the area. Please open the door.’
A look of surprise flashed on Akanhsa’s face.Akanksha thought a bit to herself and said 
–silence–
“We know you are inside. I am sliding my Id in for you to see. We don’t have much time, we all need evacuate the people ”
“If you are the police, How can I trust you?”

‘Come on Professor, we don’t need to do this. We have another professor with us so you can talk to him.’
*gunshots*
All the people in the classroom ducked inside the desks.
*ruffling sounds*
“Professor Ankita, please stay inside and please be quiet. No matter what happens do not reply to anyone. When we have secured the area we will come for you all. Till then please stay quiet and stay put .”

‘At ease everyone. We are safe (For now).’ She whispered to all her students 

----------------------------------------------------------------------------------------------------------------




                             Blue River
‘Yes First You need to go and see the world. See what our religion has to offer. Yes I can tell you all the good things about it, and how ideally the world should function. But that would be coercing you into something you don’t understand. So go and see how our religion works in reality on ground level. And I am sure every other religion’s priest you go, will tell you the same.’

So first I need to see the world and only then can I join your Religion.

‘Ah No, if you are in pursuit of Truth and God, You already are religious. The way and answers you get along the way will frame you or lead you into the right place. If you have any doubt you can come back to ask too.’

The others told me that you will give me answers to many questions about life. And then I will be enlightened and actually start living. But you didn’t do that, why?

‘If I am being honest if it was anybody else I may have just done that. Because mostly the people who come with such questions are lost and need something a source of hope to move forward. No matter what answer I give them they will accept because they wish to live. Your case was different though. You are not here because you are lost, but because you are curious and you  need the answers you - yourself can accept. And what better way to get them- if not by yourself.’

Those lost people who want to live. Do you lie to them ?

‘Hahaha No I tell them the truth But I show them the way. The direction they already have, I just show them the way again. The way followed by millions , the way followed by me. The way which leads to God. But again you must find your own answers.’

Thank you Sir. Thank you for your help.

‘Hey wait a bit, langar is going to start. Go after having some food.’

Thank you sir, I will.

The priest started laughing and walked away to attend to his work.

The sky was filled with white clouds with sun peeking glances at the world . It looks beautiful. He was walking by the blue river, the only river flowing through the city. Some say that it used to be blue then don't know what happened.But the river turned yellow. There are some myths around it too, the man interested in stories has heard of many of them. The most famous one was that when the end of the world approaches, the river will turn blue again. And at a remote shore of the river, a person with long black hair and unshelved hair was sitting at the shore. As the man got close to the long haired person.He saw that he had a powder of blue colour in his hands. 
‘Hello’ 
The person with long hair didn’t even look back. He just sat there in silence adding blue colour in water, trying to turn the river blue.
‘Hey Are you trying to end the world?’

The person flinched a little and looked at him. After a while he got back to his endeavour of bringing forth the end of the world a little sooner.

‘Why are you trying to end the world?’

The man didn’t reply and kept on adding the blue powder into the river. After some time he suddenly said-
 “I am helping it. Giving it a new chance to start again and this time do it right.”

‘Why? What happened to the world?’
“Hahahahahahahahahahaha”

The man kept laughing for a while and then he turned back to his work again. 

‘Hey you didn’t answer what has happened to the world.’

The man, surprised again, looked at him with a confused look on his face. That confusion soon turned into an angry expression.
“Who are you?” He asked.

‘Me ? I am *****.’
—silence—
‘Hey I don’t mean no offence to you, neither am I stopping you from doing what you do. I am just asking what is wrong with this world? And why does it need to be restarted? ’

The man’s expression turned confused again. “Why are you asking me this ? Don’t you know it yourself. ”. 

Seeing the confused look on ***** face. The man started laughing fanatically.








HA HA HA HA HA HA HA HA HA HA HA HA!
A MAD MAN ASKS WHAT IS WRONG WITH HIM
THE DOCTOR ANSWERS THAT IT IS NOT YOUR FAULT
THE WORLD IS NOT A ROTTEN PLACE FOR MADMEN
IT IS,
IT IS A HEAVENLY PALACE 
OH GOD 
OH GOD 
IT IS A HEAVENLY PALACE
THE MAD MAN SAYS TO THE DOCTOR
WHY? IS IT NOT  ROTTEN ?DOCTOR?
OH GOD 
OH GOD HE SAYS 
IT IS I WHO IS ROTTEN
I?ROTTEN?
I AM YOUR CHILD?
HOW CAN I BE? ROTTEN?
MADMAN AND I ,WE ASKED EVERYONE WE MET 
THEY SAID IT IS NOT I 
OH GOD I AM ELATED IT IS NOT I 
ROTTEN?
IT IS NOT YOUR CHILD 
IT IS THIS WORLD THAT IS 
A MADMAN ASKS OH GOD OH GOD A MADMAN ASKS.
HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA!!

The man kept fanatically laughing and babbling the same stuff over and over again. Seeing this ***** started laughing too. 
‘OH Madman Oh Madman. Hahahahahahahahahaha’
‘Oh ***** Oh *****. Hahahahahahahahahahahaha’

‘If I look through a blue tinted glass into the river would my world end too.’

The fanatic man looked at ***** and stopped laughing.And started shouting 
“A MADMAN YOU ARE
  THE WORLD WILL NOT END
  WHEN THE RIVER TURNS BLUE
  IT MAY ONLY END
  WHEN I CLOSE MY EYES FOREVER
”
***** looked at this man and understood that this is a madman he talks to.
‘If the world ends when you die, why go through all this effort to turn the river blue.’

“I am helping it. Giving it a new chance to start again and this time do it right.” the man said. And after this no matter how hard ***** tried he could only get the same answers so he continued forward along the river. 

After walking a while ***** reached a cremation ground. He saw people leaving after setting fire to someone who once was close to them, for the one who was once alive.

----------------------------------------------------------------------------------------------------------------
                    












  Hunger and Loneliness

‘Monkey Update!’

“Final room is secured, civil casualties count -2 . Further orders required”Monkey said into the intercom.

‘Enemies have been spotted near the water station, potentially the location of the minister. Backup is on the way. Leave one soldier each with each room and gather near the auditorium in 2 minutes.’

‘Understood Sir.’ Monkey passed down the instructions to her team and started moving towards the auditorium with 2 of her soldiers.


At Water Station:
‘You think you can survive today? Huh? There are 100 guys standing at your door. How long do you think your bullets will last? How long until we break down the door? Today will be your last day on earth.’

*gunshots*

‘Hahaha try all you fucking want, I will have my revenge.’
The rebels had surrounded the minister’s hidden location. The whole city was burning, there was chaos everywhere. Nobody was safe, it was the darkest time for the city. There was no structure, no authority, just pure anarchy running through streets. The Government was trying its best to protect itself and everything in the city. The attacks came unexpectedly and took everyone by surprise. Everyone was aware of the growing polarisation of the two major communities. There were fights and scuffles but never was there anything of this calibre.

‘What the fuck is Akshanda doing? Where the fuck is he? These fuckers are out for my blood. How long do you think we can hold on ?’

‘Sir at max we can hold on for another 5 or something minutes before they break in. We are almost out of bullets.’

‘How the fuck did we even reach this situation. How did things escalate to this level’

‘I don’t know sir’

‘Of Course you don’t know, the main concern is how did they get access to weapons and explosives. The Republic Army would never do that. We are not close to any borders either. So  how and why the fuck here? This is not a city of significance either.’

‘Sir, maybe you are overthinking it. Maybe it is just the growing polarisation between the two communities. Maybe we all miscalculated the frustration in people.’

‘All these years you have been with me, have you learned nothing? Aakash, if this is going to be my last then let me impart some sense into you. You see politics as some may think to be progressive and revolutionary. That is for the show the reality is the structure , the basic structure stays the same. If you hold significant resources under your belt you are likely to stay significant with change of political power one way or another well unless you are a fool. Every tragedy can simply be solved with simple justice but you see politics is about showing that justice, it is not just a tragedy it is an opportunity. An opportunity to gain faith from people. And Gandhi used to say leaders reflect the public, that much is obvious. But it is not complete, the public reflects what their faith is. And this faith, it can be influenced, no matter what logic says when you show them a different reality they would start believing in two truths , one which they believe in and the one which is reality. We are given this power to influence and control by our predecessors. It is almost impossible to start anew from scratch, it takes generations to reach this level. But it is possible, it is possible but the cost is too high. Nobody wants to choose that way, it is brutal, it is built up on too many innocent sacrifices and it leaves a scar for all the upcoming generations. ’
*loud gunshots*

‘I hope that I am wrong. But this looks like one of those. Keep your eyes open in the upcoming days, this is just the start.’

Sir we are out of bullets 

‘I know. So this is the end’

‘Sir but what we did ,fueling the fires of hatred between the two communities. Was it a good decision?’ Aakash asked the tired minister.

‘Haha you still have much to learn. Such a silly question. Okay tell me why do the poor and lower classes kill the ones holding most of the resources, why do they still choose to suffer and choose to hustle. Let me tell you first because there is a way which is so hard that they may never even be able to walk on. But there is a way, you see, a few from the millions can succeed. And so there was the way and then you showed them the ones who reached it. That is why they choose to do it the hard way. Now there can be many variations of the same thing. Obtaining a civil servant position to escape from poverty, Becoming engineers to follow the race and the lucrative life it offers, Becoming teachers because there is no support for research, Becoming anything to escape hunger and loneliness. Dangerous things ’

*loud knocking on the door*

‘If you have power just push the general populace to the cusp of hunger and loneliness. And you will have everything you need to control them, of course if you are a fool then they will consume you. But again very few fools exist in politics.’

*gunshots and loud shouting*

The door opened and a group of people rushed up the stars, the guards tried their best but couldn’t stop a bloodthirsty mob.

‘Sir, why are you so confident that they will not kill me?’ Aakash asked 

‘Haha you think I wouldn’t know?’ The minister gave Akash a cunning smile and surrendered himself on his Knees. 

Aakash, you really surprised me! You real####GUNSHOTS#### 
‘Hey punch me and shoot me in the shoulder.And surrender ’

Sir? 
‘You need to trust me. This is the way.’

After 10 minutes

Sparrow: Man they even killed children, these fuckers do they have no consience.

Penguin: And now we need to guard them till the police arrive. And after that we have to wait to get justice in court rooms.

Whale: Well Boss has gone inside, anything can happen with him. Maybe he will shoot these fuckers right in the head.

Sparrow: Man, we were only a few minutes late. If we were a bit early the minister could be alive right now. Monkey, why are you smiling at me?

Monkey: Because it doesn’t matter if we arrived a bit earlier. The minister was going to die either way. Why do you think the police are so late? It is a minister we are talking about here.

*GUNSHOTS*

They all looked towards the building, Aakash walked out covered with dust and smoke and just behind him was their squad leader. He had a medium build. Nobody could even guess that this man was one of the deadliest people in the whole country.

‘Whale, sedate him. We are going to the next position.’

Whale: On it Sir.

Aakash: You guys are not police. Who are you? And where are you taking me?

Monkey: You will see that soon.
----------------------------------------------------------------------------------------------------------------
After half an hour:

In a brightly lit room, a Man was looking out of the window. He saw that the city was burning , and he also had an inkling of guilt in his heart. He was responsible for the security of the city. And he failed, the casualty count was in thousands, 4 core ministers were dead, everyone was scared for their lives. And he too somewhere had a hand in it. 
*Knock Knock*
“Come in,” he said.
‘Sir, The situation is under control now. All the perpetrators have been eliminated. The deserters are being tracked down. We have had no casualties in our forces as of now. ’

“Okay. Did you see any central forces?”He asked with a sigh.

‘Yes sir, We saw them at almost all of the locations. Sometimes we reached the site first and sometimes they did. ’

“Hmmm. How many perpetrators do we have in our custody ? And how many did they take?”

‘I am sorry sir, but we only could get 3 leaders. The others did suicide on spot or were killed in crossfire. And according to our estimates the central forces have close to 20 guys.’

“Okay. Declare a curfew for now and get the surveillance to the peak. We can not afford any more mistakes. Pay special attention to the politicians and keep reporting back to me every 20 minutes.”
‘Sir, yes Sir’.







Aftermath
According to our sources more than 200 people have died in the blasts today. And more than 500 are injured. Four ministers including the education minister Dr.Hathi Ram, The Agriculture and Industry minister Mr.Gaikwad, The transportation and supply Minister Mrs.Divya and The Home Minister Dr.Aman grewal  .The state has declared a curfew. Today this city which has always been peaceful has been reduced to its worst state. The question ? Is this just the beginning? Why was there a need for violence and what …

‘Honey She hasn't come back home, She is also not picking up her phone. Where is my baby girl ? It has been hours.’

A man was sitting with his head in hands anxious beyond measure. He was clenching his phone so that his knuckles were all white.
*Tringg Tringg*
The man stood up in hurry and jolted towards the door. 
He looked through the bird to see a man with a dishevelled beard and a long raincoat standing in the front.He opened the door and looked him straight in the eyes and asked
“Where is my Daughter?”

‘Do not worry she is safe. But she is injured and is currently in the hospital. I need you both to come with me as you will not be allowed movement on your own.And hurry I don’t have much time.’


IN THE HOSPITAL:

There was a dead silence and very high security around the hospital. Due to the curfew not many people were able to reach the hospital. So many were dead, so many were injured yet they stayed with their solace and dread alone. The dead slipped into the night and the living walked lonely and scared. In the end it was about ideas that the perpetrators believed in and the ideas which were hurt and scared today, the ideas which you and I believe in. The ideas of a line which shouldn’t be crossed, a line which represents the human compassion and ideality of a human spirit. 
Akansha’s parents sit together, clutching each other’s hands tightly. Her mother’s eyes are red and puffy from crying, while her father stares at the floor, a pained, blank look on his face. A faint shuffle of footsteps approaches.
Doctor: gently “Mr. and Mrs. Sharma?”
Akansha’s father jerks his head up, hope and dread mingling on his face.
Father: “Yes, doctor. How is she?”
Doctor: pausing, glancing down at his clipboard “Akansha’s condition is stable for now. She suffered some minor injuries, but we’ve stopped the bleeding and are keeping her under observation. She’ll need some time to recover, but...she’ll be okay.”
Akansha’s mother lets out a breath she didn’t realise she was holding and brings a trembling hand to her mouth. Relief floods her face, mixed with the lingering worry for the road ahead.
Mother: “Can...can we see her?”
Doctor: “She’s still asleep, but yes, I think it would do her good to see you when she wakes up.”
The doctor leads them through a maze of hallways. The quiet hum of machines grows louder as they approach Akansha’s room. He opens the door and gestures for them to enter.
Mother: whispering “Oh, my baby…”
Akansha is lying in a stark white hospital bed, her face pale, with a bandage wrapped around her forehead and an IV line in her arm. Her chest rises and falls with shallow breaths.
Father: whispering to himself “Thank God…”

As they sit beside her bed, the silence between Akansha’s parents deepens, each lost in their thoughts about how close they came to losing her. Suddenly, the sound of raised voices filters in from the hallway outside. A young nurse rushes in, closing the door quickly behind her.
Nurse: whispering urgently “We have some officials from the government here. They want to ask her some questions...”
Mother: “Questions? She’s barely even awake! Can’t this wait?”
Nurse: hesitating “I...I’ll try to tell them to come back later, but they’re insistent. They’re questioning everyone affected by the blasts, trying to piece together what happened.”
Father: with quiet determination “If they want answers, they’ll have to wait until she’s ready to give them. No one’s disturbing her peace. Not tonight.”
Nodding, the nurse steps out, closing the door softly behind her. Akansha stirs in her sleep, her lips moving as if she’s talking to someone, but no words come out. Her mother brushes a stray lock of hair from her forehead, her fingers trembling.
Mother: whispering to herself “Why does it have to be like this? She’s just a girl…”
Her father reaches out, placing a comforting hand over hers.
Father: “We just have to have faith that she’ll pull through. She’s strong, just like you.”
Suddenly, there’s a knock at the door. An official enters, his face stern.
Official: “I’m sorry to disturb you, but I need to speak to Mr. Sharma. There’s something you need to know...it concerns your daughter and what we found on her phone.”
Akansha’s father steps outside, casting one last worried glance at his sleeping daughter.
Father: “What is it, officer?”
Official: “While going through everyone’s phone we got these texts and call history with a potential terrorist on the run. After asking her friends we found out that he is her boyfriend or used to be.”
Father:  hesitating “What was his name?”
Official: “It is Akshay”
Father: shocked “That just can’t be. I know him. He was her friend and he even used to visit us.”
Official: “That changes things sir. He is practically a ghost, all the info on him that we have is fake. We are not sure if this is his real name. Sir I will need you to give me all the info on him.”
Father: “ He said that his parents originally were from Jampur. They migrated here to the city in search of better jobs. His father said he works as a clerk in a municipality and his mother stays home.”
Official: “When was the last time he visited you ? Did you notice anything different about him?”
Father: “I believe it was a month ago. He was a bit, how can I say it. He was a bit stressed like he was when he came to visit. It felt like he was on a break from something very stressful. On asking he brushed it off as the exams were just over, he was just burnt out.”
The officer’s phone started ringing he hurriedly silenced it and said.
Official: “Thank you sir. Please forward any information you have to us.”

POLICE HEADQUARTERS
“Updates? Folks?”

‘Sir the central corps have sent in the confessions. They had a major breakthrough with the Education minister’s Personal Assistance -Aakash.’

“Already? They are fucking efficient. Get the reports to my office now!”
REPORT
DATE: 20-03-2030
SUBJECT NAME: Aakash (Personal Assistant to the Education Minister)

SPECIAL NOTES:
The subject, Aakash, held a close professional relationship with the Education Minister, who was widely recognized for his polarising stance on educational reforms and his involvement in politically charged activities. Given the escalation of violence surrounding recent events, Aakash is now under scrutiny as a major suspect. Intelligence suggests he may have provided key information to perpetrators on multiple occasions. Psychological assessments indicate Aakash’s loyalty to the Minister, yet he reportedly harboured reservations about the broader motives of the Minister and his circle, suggesting possible inner conflict or dual loyalties.

DETAILS:
Position: Personal Assistant to the Education Minister
Observations: Aakash has consistently been noted for his diligence and commitment to his role. However, his recent behaviour has raised concerns. His interactions with staff, coupled with personal conversations intercepted with family members, imply he may have foreseen the threat or, potentially, been complicit in it.
Actions: Witnesses confirm his presence at high-stakes meetings involving the Minister and key officials where drastic measures and escalations of political strategy were openly discussed.
Signal Interception: On the day of the incident, an intercepted pager call matched the subject’s voice, passing critical location details of the Minister and key sites within the college campus. The content of the message strongly suggests premeditated knowledge of the attack locations and targets, raising Aakash as a primary suspect.

POTENTIAL SUSPECTS:
During preliminary questioning, the subject provided several names allegedly involved in orchestrating the attack, directly or indirectly. These names include:
Biku Matre – A notorious local gangster with influence over slum areas, potentially providing logistical support and resources for the attack.
Ramadhir Singh – An independent political figure known for his hostility toward mainstream political forces, suggesting a possible ideological motive.
Afzal Khan – A close aide of Ramadhir Singh, likely involved in the planning or coordination phase.
Meena Devi – Head of a prominent NGO, currently under investigation for allegedly channelling funds toward extremist activities.
Adam – A suspected agent with foreign affiliations, believed to have coordinated cross-border connections. (Note: Adam requires heightened surveillance due to potential international implications.)

LAST STATEMENT OF THE SUBJECT:
The subject’s recorded final statement reads:
“Some slept and some stayed awake, some dreamed, some took the lines in their own hand. Some protected it, some were just breaking the cycle. HAHA.”

INTERPRETATION:
Aakash’s last statement is cryptic, suggesting disillusionment or a morally ambiguous view of recent events. His words reflect the ideological fractures within his political circle, hinting at those who "uphold the system" versus those intent on "breaking the cycle." The statement could be interpreted as an internal struggle between his loyalty to the established order and a latent sympathy for rebellion or change. His laughter following the statement may suggest an element of resignation, bitterness, or even amusement at the chaos he may have helped unleash.
This statement, combined with his known close proximity to the Minister and intercepted communication on the day of the incident, suggests Aakash may have been fully aware of the impending violence and may have chosen to side with those aiming to disrupt rather than uphold order.

ACTION RECOMMENDATION:
Immediate investigative follow-up is warranted. It is essential to further explore Aakash’s communications, especially with the listed suspects, and examine his psychological evaluations for deeper insight into his motivations and affiliations. Given the possible international involvement, particularly concerning the suspect Adam, coordination with intelligence agencies is advised.

Cogs in The Wheel
What makes a system survive? What reduces a revolution into a reform ? What makes Empires Empires? A government The Government. What is it one may ask? Humans got together for survival and safety. And developed a higher consciousness. They decided to give names and structures to the hierarchy. In this named hierarchy, in this named structure, in this safety. Man listened to the well, the well of ambition and desires and was blinded with lust. The well always answered and showed him what he wanted. And when a man knows what he wants, figuring out the How? Becomes simple. But this way costs the man something. And to stop this something from becoming everything. A line was drawn, which itself was not enough. So the named system or hierarchy decided to have its own protectors. The protectors I call the cogs in this wheel. Haha and of course the line is there to be pushed and tested. If the cogs become too heavy on the line, the well of ambition will dry up and push all of us into the dark ages of survival again. The same is the other way around
River Bank
“So you believe that there is no God? And why do you believe it to be true?”***** asked the man sitting on the bench along the lake.

‘Yeah, I don’t believe that there is a God. I believe that it is a construct conjured by one of us a long long time ago. Yeah it was challenged, changed and reformed. But that is just an idea of something. There is no proof for this idea. Like I am not against believing in ideas, we all do but if I want to prove it as a fact then everything changes.’

***** thought a bit to himself and asked the man again “So if someone, someday proves that their idea of god is true. Would you start believing?”

‘Hehe that is right. If it is proven then it is a proven idea getting close to fact. If I am going to believe or not is a different matter. It would just constitute that my belief in it would not matter because it is proven and I can do nothing about it. ’

“How is that possible ? That you know a truth and you don’t believe in it” ***** asked with a confused look on his face.

‘It is getting too philosophical. But let me tell you something: In our history, people used to believe that the earth was flat. And then it was proven to be wrong. And till this date some people pop up who believe that the earth is flat. Let’s take another example- people used to believe that the gender of the child depends on the mother. Which is again proven wrong, but do people believe in that? ’

“I think I understand a bit. So you do not believe in god because you can do so ? ”


‘Haha , yeah that sounds true. It is true that if I was born in a really religious family then I would be religious too. I would believe in god. I would pray, I will try to live a certain way. But maybe I am privileged enough to not believe in God.’

Ring… Ring ….
‘Nice talking to you Sir . But now I must leave for work. Goodbye.’

“Goodbye”***** said as he sat on the bench alone on a cold evening.

___________________________________________________________________________

Hey Akansha, You think we will be together in the future?
Akansha: Why? You plan to leave?
No, No it is just This past month I have been having weird dreams.
Akansha: Dreams about what?
Hmm, I don’t know. They are weird dreams. It's like I am watching myself turn into things. Like sometimes I am roaming around the city as a beggar. I meet strange people. Sometimes I turn into this menacing crow who goes around pecking people. It is weird.
Akansha: Was I with you?
Hmm, Not in all of them. Mostly you don’t even recognise me and completely ignore me. It is really scary to see you act so cold.
Akansha: Aww I would never ignore you. I would recognise you even if you turn into a crow haha


Haha yeah You actually would. Hey what was the painting you were talking about before.
Akansha: Yeah, Professor Madhu gave us this assignment to paint on our view of lust. It is such an abstract topic. I am really confused on what I should draw. 
Don’t worry you will figure it out, I know it. But this idea of lust is really interesting, I usually find myself coming back to it time after time.
Akansha: Hey, tell me what you think about it.
Haha, You would not like it. It is too abstract and rigid.
Akansha: Hey, you know I would not judge you ever. Right?
Yeah ,I know. It is just that I fear that I may be wrong.
Akansha:yo, are you really not telling me? Just because you think that ideas can be wrong? You of all people?
Ahh, you got me. How is it that my evasion never works on you? Okay so let me tell you what I think of lust. I think it is that fine line which makes one a living being. You see if one has no desire then there is no life. That being is dead, that desire can be of anything,  from desiring attention to desiring a candy. But what about instincts?*looking at Akanksha* Are they different from desires? I doubt that -a strong desire to live or survive is still a desire. Yes I agree that instincts like fear and others don't constitute desires. But look at it this way -by instincts a being would not want to die that is not his desire. Ok so we have a not desired thing but whatever gets past this would be for desire even in instinct and curiosity. And this desire when amplified is lust. What I mean to say is that we cannot function as a human without lust. The basic strong desire to live is also lust. You get what I mean?nodding see I wouldn’t be me if I had some other desires. You would not be Akansha if you didn’t desire certain things other than just surviving. 
Akansha: What would I be then?
I don’t know, what can you call a being who has survived but has no desires towards the world?
Akansha: A buddha.
Hahahaha Nah he still feels pain and is certainly not enlightened.
Akansha: hmm, I don't know.
Hey but I hope this gave you some ideas on what I think of lust.
Akansha: hmm hmm I got it.

Beggars Street
"The cogs of this great system, invisible to most, are etched into the very DNA of civilization. To imagine their absence is to imagine humanity undone. These systems — the military, the hospital, the market, the education system, the justice system and finally the religious institutions — are not just constructs; they are reflections of our fears, ambitions, and survival instincts. Like the pulse of life itself, they are there, unnoticed yet essential, until the moment they falter."  A man started rambling standing in the middle of the road. There was a crowd gathering around him staring at the madman creating a ruckus. They all wanted some entertainment after a long day. 

“Beggars were the cogs the System spat out, yet they lingered—symbols of guilt, reminders of a Wheel that turned too ruthlessly. In their cries for alms lay an unspoken truth: the system could not exist without them, for what is generosity without poverty to assuage? What is faith without suffering to heal?”
The man continued his ramblings and people also started laughing at the joker. A head peeked through the crowd and looked at the man in the middle of the crowd. A strange look appeared on his face like he was reminded of the person he met a few months ago.
‘Isn’t that the person I met the other day’
"Ha! Look at him go!" a man in the crowd jeered. "Preaching philosophy in the middle of the street. What next, huh?"
Another chimed in, waving an empty water bottle at the speaker. "Oi, preacher, are you a beggar yourself? Or just bored of sanity?"
“Hah what sanity are you talking about? Who among you is sane. A French Man once told a story of a man who used to count stars, again and again. When asked ? He said I counted them and recorded them so they are mine. Yeah a sane man counted stars and the stars that he counted became his? Don’t you all see the sanity there.”
“What is your point then? What should we do? Or what can we even do?” A burly old man chimed in.
“Hah, how can one fight insanity? How can I have the answers to your questions ?”
The crowd grumbled, frustration mounting. “This fool!” someone muttered, and people began to disperse, shaking their heads.
“Hah, Why do you all want to remain as a beggar ? Do you all not even dream anymore?You hold fair trade for food and money in trade of good wishes to God. Why not ask God for help? …”
 The man kept rambling.But the people had lost interest. As they melted back into the flow of the street, a scrawny man hesitated, then approached the speaker cautiously.
“Boss,” the scrawny man said, his voice low. “Remember me? We met a month ago. You were asking about God and other stuff.”
The Man looked at him, a faint smile touching his lips. “Yes, I remember you.”
The beggar glanced nervously at the dispersing crowd. “Okay, Boss. But what are you doing here, creating a scene? You’re lucky the gang men aren’t around, or you’d be in serious trouble right now.”
The man’s brow furrowed. “Why? What am I saying that’s so wrong?”
The beggar scratched his head. “Maybe nothing. Maybe everything. I don’t know. But I know you were talking about that guy who counted stars, right? Well, what if everyone started believing him? What if the whole world agreed the stars were his? What then? Who’s the insane one now?”
The man tilted his head, considering. “But someone has to think differently. Otherwise, the truth will be lost. If I tell them it’s absurd, won’t they eventually see reason? Won’t they believe me someday?”
The beggar chuckled, shaking his head. “No, Boss. They won’t. There are laws for that kind of thing, laws to protect everyone. You asked if we don’t dream anymore? The answer is, we do dream. And we can dream because of these laws. They’re what let us believe that if we ever get the stars, they’ll belong to us. Not someone else. You’re the insane one here, Boss. You’re tilting at windmills.”
The man sighed, his shoulders slumping. “And God?”
The beggar waved a hand dismissively. “Don’t get me started on that God stuff. You’ll drive yourself mad.”
The man grumbled and asked “So what is it that I should do ?”
The beggar squinted at him, thinking. “Have you found God? You were keen on that last time we talked.”
“No,” the man admitted. “But I’ve seen religions practiced all over the city—different prayers, rituals, and gods. Every god had a different name, and each demanded something unique. Some allowed meat, others wouldn’t even permit sandals for fear of killing ants. Some preached letting go of desire; others told people to act righteously for God’s sake. It’s all so confusing.”
The beggar chuckled again. “So what did you learn, Boss?”
“Not much,” the man replied, “but I saw a pattern. People worship their specific god because it suits them—because it’s convenient. Sometimes it’s out of familiarity, sometimes out of desperation. But what struck me most was their faith. It was unshakable, almost fanatical. That madness... it was fascinating to watch.”
“And?” the beggar prodded.
“I don’t know,” the man said, almost to himself. “They seem to have answers, but I can’t make sense of what they’re saying.”
The beggar laughed aloud, clapping the man on the shoulder. “If it’s enjoyment you’re after, Boss, why not do drugs? Drink alcohol? Light a cigarette to blow off some steam? Why run in circles chasing answers you can’t understand?”
The man frowned. “Is that really all there is?”
The beggar shrugged. “For some people, it’s enough. Maybe you should try it. Who knows? You might finally stop asking all these questions.”

Artisans Alley:
Akansha: smiling“So do you like this one or not?”

Hmm, I don’t know, it feels a bit weird, I don’t know if a hat suits me or not? Why don’t we shop for anything else for now. Yeah, you mentioned that you needed new bangles 


Flower Boutique:



Cremation Grounds:



Eyes Of Death

The one special thing about frogs is that they breathe through their skin, a very weird fact. But think of the princess who kissed the frog not knowing that it would turn out to be the prince charming. What did she think while she was doing it? Did she know about this weird fact or maybe she learned of it after she felt the breath. Well as absurd this all is anyways, the issue of how she even caught a slippery frog still boggles me. Why did the frog not resist? Was the frog even aware (like if he was not a prince) that this weird being is doing something very weird to an animal, which She shouldn’t be. But even that is just one of my main concerns. This weird clock hung in this room, the ticking, it is very so annoying and calming at the same time. But even that is not strange, the strange thing is that it is not really moving. The second hand goes tick tick tick and keeps moving, but the minute hand doesn’t move. And the design of the hour hand is an eight pointed star, like what was even going in the mind of the person who made that. Did they make it so nobody could tell the time? What a strange thing it is. Hah! Another strange thing is that the bald man who came before told me not to worry, that I have not done anything wrong. And then he punched me. It was so absurd that I laughed and yeah, it was a wrong move. He punched me again, and people dragged him out. Strangers everyone, I am meeting them for the first time and this is how they treat me. These people have no manners, well nobody does these days. Hah! There is one thing that is ordinary here in this room and that is a frog. Out of place but very ordinary looking frog. Hah, I am glad that frogs don’t have capability to process human things or that princess must have been a real big creep with very weird taste. Well in my case, he must have been keeping me company in a closed room with strange things. Well here is another interesting fact: Spiders are not really insects. I don't know what they are. I once had a spider in my room. He ate all my flies for me and I let him live in my room. He would also bring me treats sometimes, or I think I did. But that spider,dumb dumb(Yeah I called him that), was a quick learner. At first dumb dumb would web all over the room and I had to  set some boundaries. Boundaries are very important. So after my repeated assault on his invasion of my space, he learned which areas dumb dumb needed to avoid. So then he made his bed directly above my bed,yeah crazy right? And he took the liberty to build his elaborated and devious traps on my ceiling. 

** door creaks open **

“Well hello there, Mr. .?” says a different bald person, fat around the belly, weird gait and a low kept beard. What are the chances, what are the chances that he is gonna punch me ? Well but this time I will be ready.

“Mr. ?” oh man, why should I tell him, I don’t want to. Why can’t they just get to the point. It’s like I am gonna lie anyways.

“What is your name mister?”

Why am I being detained here? 

“So are we gonna go that route ?” says the bald man with spit flying out of his mouth. Which route is he talking about? Hmm, it is not like that I don’t know, but still I need to establish myself.
“I will ask again, what is your name mister?”


  

INTOXICATION
Phase I :
I could feel the sweet numbness crawling through my heart,the lights getting fuzzy, a feeling of relief shrouding over my reasoning. A blanket of Trivial thoughts draped over my brain. It was only a few shots that I had, and this state is fine. I can still walk fine, am still able to process things, hold thoughts and talk without an issue. This is where I should stop but, another shot wouldn’t hurt. The bottle is right there on the table, but there are so many people 1,2,3,4,5,6 , yes there are six people here. 

Background

Person1 : hath you ever wondered how bats mate ? mate?

Person 2 : huh, what type of question is that mate? You weird horndog! Hath it doesnt matter. They sleep upside down ** mimicking with his hands ** like this! see ?
Preson1: hehehehe

Person 3: You guys know that I cook very good food. Recently I made an apple pie, can you imagine me ? I made an apple pie, that too in cooker! Hehehe I am the best chef, The best ever there is!

* Clank Clank *


Person4: Cheers bro cheers! Enjoy, I love you so much. You are my brother. Oh! Hey Manglu is back! Give a glass to my brother. My brother.

He really is drunk, I think to myself in my head and smile. But smiling I don't refuse the glass with 60 ml of a shot in it. “Cheers brother, hehe Cheers!”

Person 3: You guys drinking all by yourself, pass me a glass too.

Person4: Sure bhai, Lemme make you one. 
With exaggerated gestures he took the bottle and spun the glass on the table. Taking off the cap he started pouring, thankfully he didn’t spill anything yet. Hehe we all are drunk, another thought enters my mind as i sip another gulp. Ughh i will never get used to its smell.

Person 5: Me too, make a large one for me 90 ml please neat.

Person 6: Damn no, you will throw up and then cleaning will be a mess. Take small portions, slowly slowly. 

Person 5: Nah, man I have a large capacity. One time I drank 120 ml neat all in one go.

Person 4: Huh that is nothing, I once chugged down a quarter straight in  one breath.

“Damn” I blurt out as I try to gauge what a quarter even looks like.
Person 1: damn guys, I am getting a boner.

Person 2: Gay!!

Person 1: yeah baby! Now you will do too.

** laughter echoes around the room **

Person 2: Eww, stay away from me. 

Person 1 : mwah, No 

** Apni Dhun main rehta hun plays in the background   **

I start humming along too, the glass in my hand , I take a sip and I start moving. “Apni dhun main rehta hun, apni dhun main rehta hun . main bhi tere jaisa hoon …”
Everybody starts singing along and taking sips in between. We are having a good time. 



Phase II :
A feeling of discomfort creeps up to me, “Hey guys I think we should keep it a bit down, the neighbours may be getting annoyed” 

Person 2: Don’t worry we have kept it down, no one is gonna get disturbed. And anyways its the new year man everybody is enjoying.

We were all over the room, I was sitting on a chair. Person 1 was trying to cuddle with Person 6.  Person 2 was sitting by the wall and smoking a cigarette, Person 3 had one bottle in his hands and was trying to down it whole. Person 4 was sitting opposite to him, they were trying to hold a competition of some sort of who drinks more. Person 5 was trying to orchestrate their bet.Hehe I think person 3 was more worried about downing the bottle than the bet. We were all drunk. 

** Nusrat sahab ghazal intoxication was playing in the background ** 

Person 1: Hey guys, now that all of us are 18 + today, if we date down we will be considered pedophiles. We all are officially pedohiles, well except Person 6, he is more into Aunties.

Person 6: ** smoking the cigarette ** hehe, yeah well i still have a few months left before becoming valid, hehe so technically she is a pedophile. 
 
“Hehe, Well I am not either, I am single and don't think anyone’s gonna give me a chance.” I mutter in a slurred speech.
“We are so fucking drunk.”

Person 5 : hehe, Person 4 wins!


Person 2: Well, It's just a difference of a few months anyways. So, technically we are not. So technically we are not pedoss.


— now i will some how lead it to that serious discussion and everyone seems right here according to their sins —

The discussion ventures towards their own ages and more into pocso and jokes on alimony and all that stuff, their derealisation that much of the stuff is just exaggerated and all.
Person 2: Pedos is a strong word, yaar. Our Law exaggerates it a lot too,o like one day you are just a teen and needs to be protected and the next day you are  suddenly a criminal?.
Person 4: Exactly. Like one day you are cute and then rahh!! suddenly criminal? System is fricking rigged.
Person1: It is fucked from all sides. They don't tolerate love anyhwere. You go fucking anywhere they gotta have a problem with it. Even when you are legal you get beaten up and harrased if you got on the hands of any of those extremists. 
Person 5 puts hand on his knees and chukles : somebody is speaking from experience. 
I shift in my chair. The room suddenly feels warmer..

Person 1: yeah man they nearly got my ass on this valentine and this time it happened in srinagar, damn i thought that place would be safe but nah man. Extremism and controlling people everywhere. 
Person 6 exhales smoke slowly : Damn, thought was a tourist spot, but whatever. Then what happened ? Did they let you go ?


Person 1: Not really,I had to call papa and then some policemen came and disbanded those fuckers.
 “ damn what were thier reasons, same as the other party? That this is not our culture and that bullshit , our values and fuck all”

Person 1: On point man, we were just chilling not even doing ang pda. But these protectors of culture have to harrass people to sleep well.

Person 2: What culture is even there, where ever you go its the same, all of them are divided fucking fascists shites. Reason is like poison to them but pseudo truth that confroms to their narratives is medicine. Man fuck them all. 
Person 5: Yeah fucking same but the privilged ones always survive. You remember the curfew times, the internet was down too. Teachers were being shot, everything was shit. The ones who could afford sent their kids and shifted themselves too. But what about others who couldnt, passed in classes without giving exams or even going to school. A genration crippled. 
Person 3: Even during lockdown, people were starving in need of crucial resources, everybody was stuck. But nobody wanted to do anything and nobody could do anything. People died in my village without even reaching hospital, they died of negligence and they never showed or asked anywhere in news for accountability and people yo forgot and started banging plates from their homes, some out of entertainment and some out of hunger. Some fucking died without even having a plate.
Person 4: They havent changed either yk. During the rains few months ago, people lost their homes, their livelihood , heck a whole village was gone and they didnt show that either cause they fucking know its not gonna get them a trp or even a good image for their adminstration. There is something very truly wrong with the administration and politics. 

Person 6: Damn guys slow down, we went too deep into the serious stuff. Lets just enjoyy. Anybody wants to go for tea ?
A brief silence. Not because anyone is thinking deeply — but because everyone is satisfied with what they’ve said.
Nusrat sahab’s voice stretches in the background, heavy and aching, like it knows something we don’t want to hear.
“Well let’s go after finishing this bottle. And we have a long night ahead anyways”
Laughter echoes
Glasses clink again,
The numbness returns — sweet, forgiving.
Someone cracks a joke about jail.
Someone else laughs too hard.
Someone scrolls on their phone, unfazed.
The conversation dissolves.
And that’s when it hits me, faintly, like a thought slipping through fog:
We didn’t decide anything.
We just agreed to not care.
The music keeps playing.
The bottles keep emptying.
And outside, the night keeps moving — whether we’re ready or not.

Phase III :
— here they venture out and see something horrific and not able to do anything and it shows how pathetic they actually are these 7 sins and their intoxication —

They go out to smoke around 3 am in the morning and see a girl from the slums entering a black scorpio. They all react appropriate to their sins and when they smoke and have a chai and come back they finish the bottles and then someone mentions the girls age probably manglu, and then the discomfort hangs these sins try to express their perspectives and phew nothing happens, just intoxication

It’s around three. Someone says they need a cigarette. No one argues.
The cold hits harder than expected. The street is mostly asleep — dogs curled into themselves, shutters pulled down, a single bulb flickering near the chai tapri.
We stand there, uneven, smoke passing from hand to hand.
A black Scorpio slows near the corner.
No one says anything at first.
A girl steps out from the shadow of the slums. She hesitates before opening the door.
“Late night,” Person 1 says. Not joking. Just stating it.
Person 2 exhales smoke. “People have lives.”
The door shuts. The car pulls away.
“That’s it?” Person 3 asks, already bored.
“Arre chhod na,” Person 4 says. “You don’t know anything.”
Person 6 flicks ash onto the road. “Could be her brother.”
Silence again. The chai arrives. Paper cups, too hot to hold properly.
I watch the steam rise and suddenly think of numbers.
Eighteen. Seventeen. Sixteen.
“I don’t know,” I say, quieter than I expect.
“She looked… young.”
No one laughs. No one agrees either.
Person 5 shrugs. “You’re drunk.”
Maybe I am.
We finish the chai. Someone crushes the cup underfoot. Someone else checks their phone.
No one looks down the road again.
Back inside, the bottle is lighter. Music returns, but softer now, like it knows better.
Later — much later — someone says something about age again. About laws. About exaggeration.
No one mentions the girl.
By the time the bottle is empty, the moment is gone.
Only the count remains wrong.
.
Cigarettes
Foreword:
Content:
1.Ashes
2.Demons Within 
3.Lighting the one
4.Bitter Smoke
5.Addiction
6.Fated Pyre
7.The last Cigarette<it will probably be after the story of what happens to other characters.
A final letter in it would be amazing>










Ashes:
Colours, According to some, this world has been filled with them. Happiness , anger, fear, surprise, disgust… paints their world with colours. And the rest of them have responsibilities , they cannot afford to delve in their entertainment, they must keep going silently. But they too occasionally feel a sense of fulfilment , a hope for a better life, or just getting by for others they love and care about. But what about me? I don’t have many responsibilities, nor do I have a strong urge to chase something. I don’t see the colours they all seem to be aware of. All I see is different shades of black and white. They all are doing something. Some for their own entertainment, some forced by circumstances, and I don’t seem to belong to any of the groups. I am just getting by in life. Just drifting apart in this ocean with no particular goal in sight. It is all just so stagnant, and particularly boring. Everything , literally everything when you understand it, or the intent behind it, or just the result. Even when you don’t understand it, everything feels trivial. In the grand scheme of things, nothing matters. And that—
That’s the most fucking boring part of it all. Well let’s go to the class, until when will I sit here bored. I need some change. 
It's been more than 7 months since I have joined the University of advanced mathematics and applied physics in Trier. It's much more peaceful than any place I have been to. There are just hardworking students and deranged professors rambling all day. Everyone here, so engrossed in their books and questions, nobody even has the time to look up to the sky, except me of course. Here I can sleep all day, without anybody bothering me.  it's such a bliss, nobody wakes me up, nobody even asks any  questions to me. I just need to go attend the lectures ,complete the assignments. and all  done. Then I go to my room and sleep. It's such a blessing. no matter how much I think, all of this is just so amazing. My family is content that I am doing something in my life. Maybe it's enough for them if I just become independent. or just prove to them that I can live on my own. They just wish for me to be happy. so even if I don't become anything or achieve anything grand in my life. I would be everything that they expect from me, their son. well that is what my father said before I left for University. It is such a tragedy that I can't enjoy life as others do. I am just incapable of it.

“Yo Akshay, where have you been? didn’t see you at the event. ”

“oh! I was sleeping”

“Ah! figured that out Man. you must come sometimes and enjoy it a little. ha! I know I know, you enjoy sleeping. but you have been doing that your whole life and you will do so for the rest of your life. so why not do something different and experience something new.”

“hehe, you know me Istiaq, i just get bored easily. and I don't wanna be bored.”
“ah! you! okay I get it . today after class we are going to the shrine, you can join in if you want. and I hope you do Man”

“mhm, okay I will consider it.” 

The last class concluded with sighs all around me. The homework this time again is immense. Lamenting, I look at Ishtiaq grinning at me. oh crap do i really have to join them.

“Ah alright man,I am coming.no need to look at me like that ”
“I know you would agree.hehe”
“Mhm so who else is joining us ?”
“Let me see Hadia, Sania,Andleep, Hadi, Aurangzeb,Zalfa,Ishna,Ankrit, Aimen, Shahneel, Abrar,Ubair and me. That would be all of us. ”
“You could just say the whole batch is joining.heh  ”
“Don’t grumble, they are not that bad and the place where we are going is a nice one. And oh! I forgot to mention she is going to join too. I hope you don’t mind ”
Silence
“Ahh! I will make sure that you two don’t come face to face. Just stick by my side okay?”
Smiling, he leaves to gather the group, sometimes he looks like a dolphin.

<A major event which sets the pace for the rest of the story. I am still figuring this part out >

 
Lying on a side rail with a cigarette in his hands he was looking at the sky devoid of any light. “Do you think I need to light you up to escape?”
“What? You think I need you to help me? Do I really need you as an escape?”
“Do not overestimate yourself you gremlin, You are just some dried leaves wrapped inside paper , You cannot even light yourself huh”
“I am not insane. And you are one to talk. You burn and fill people's lungs with smoke. You are so pathetic. I wonder why people even  light you up.”
“Yeah, yeah that is how it is. You know what now I am not going to light you up. Huh, how does it feel to not even fulfil even your purpose you were created for.”
“Oh Fuck off. I have a free will, It’s not that I cannot find my purpose. I just choose not to. Now tell me can you even choose? Yeah I thought so”
“Sometimes I think about stars. I think about stars”
A man was lying on a side railing by a lonely and desolate road holding a cigarette in front of him, thinking of stars. 






Demons Within:
“So what do you think?Are you in?”
I need to think about it. I said, trying to find polite words to turn the offer down. Goddammit it was just 9 in the morning. The day has just started and you are forcing me to think hard. How cruel you must be, man.

“Hey, you can tell me after classes about your decision.Now I need to go, see you man”

Yeah see you. I grumbled under my breath and stumbled forward towards the lecture hall. ‘Whose idea was it in the first place to start the schedule this early in the morning.’
What is even with these people, they wake up so early and get ready with all their makeup and other stuff and reach here on time. And here I have to give up my breakfast and precious sleep to just reach here on time.

“Good morning Folks. Welcome to the last Mathematics lecture of this semester…”
 
And here they go, where does this energy even come from it is barely morning. Sun has just risen, man. Just then I felt a gaze from the front ‘Oh it is him again. I really need to think about something’ . This morning he suddenly came up to me and asked for me to hangout after classes. Apparently there is a farewell party after the classes. Does he not remember what happened last time I tried to hangout with them? Oh well, let's see how it goes this time.

After the classes:
“So?”
Are you sure that you want me to stay? You remember what happened last time right? 
“Oi , that was an accident. How many times do I have to tell you that? It was not your fault. And anyways it is maybe going to be the last time all of us are going to be together. After the finals everyone will walk their own ways.”

I hope you don’t regret it later though. I muttered under my breath. I don’t think he heard it. Oh maybe he did. 
“Oi Imtiyaz, Let's go together.”  Asia said with her friend group tagging along with her.
“Oh you are here too. Would you like to join us, Akshay?”
I felt Imtiyaz’s eyes burning through me. “Yeah I would love to,” I replied. The people behind her were clearly uncomfortable with me tagging along with them. “Ah on second thought, I do have some business I need to attend to. I will join you guys later.”
“Oh I will join you guys later too.”Imtiyaz said. 
What is wrong with this guy? Why is he not leaving? 
“Okay guys then we will go ahead. Be sure to not be late”

“Oi you lied to them.”
Ah No I didn’t. 
“Man, I have been with you for 3 years. You think I can’t tell ”
A conditional truth then. I laughed 
Oi Imtiyaz, tell me you smoke?
“What type of question is that? You know I do. You have watched me everyday in the washrooms.”
Yeah I forgot. 
“Hey what happened. You know you can tell me. From these past few months I have been noticing a change. What has happened?”
No, Nothing. Hey so when you smoke how do you feel. Like is  it like a release or is it like a slow burning sensation in your lungs.
“Oi, we need to talk. Have you started smoking?”
Ah no, I was just wondering. 
“Hmm let us go to the roof and talk there.”
Yeah let’s go.

Imitiyaz took out a pack of cigarettes and took one out and put it in his mouth.Then he started ruffling his pockets to find a lighter.
“You wouldn’t happen to find a lighter on you.”
Haha No, why would I carry something like that.
“Oh man how would I light it now.”
Haha haha hysterical laughter echoed on the roof.
“Hey hey man, why are you laughing so much.”
Laughter continues
“Oi Oi are you okay?”
Yeah , yeah I am fine. It's just that I thought of light. Like you need to light up the cigarette for it to serve its purpose whatever that is. Hey Imtiyaz, would you fancy a story? 
“Yeah man sure, Go ahead”
Once I was wandering around in the night and I met an old woman along a road. She was sitting by the road trying to light her cigarette but her lighter was not working. It was a long cold winter. As I was passing by she asked me if I had any light. I had none but I still sat with her and offered her some alternatives like I had some food on me which I offered. She declined, saying that she was only concerned with light. No matter how much food she ate she would not stop feeling cold. The only help she required was just fire to light up her cigarette. Bizarre right? Why didn’t she just come home? And decided to sit in the cold winter,at the roadside, trying to light up her cigarette. I sat there for a while without saying anything, just keeping her company. She started talking on her own, most of which were just strange ramblings like “Return back home in light, don’t wait for darkness. A man should return back home before it gets dark.”
Then she also started asking me questions, “Are you deaf? Why are you not saying anything?” Apparently she had a hearing problem too. “You know boy I recently got my eye surgery. Don’t tell anyone about this. It hurts, after the operation it hurts so much it's been months, I have been in constant pain. I cannot even think straight.Promise me you won’t tell anyone. Promise me ”
I promised her that I would not tell anything about this as long as she is alive. And you see I keep my promises.

Imtiyaz: How did she die?
Hah she killed herself .  Apparently due to her immense pain
Imtiyaz: What did the doctors say?
Why would the doctors care about a tramp. Her operation was done in a communal eye checkup camp organised by the government. I recall her telling me that she did go to the doctor and they just gave her painkillers and said that the pain will be gone soon. And people who cannot even afford a lighter for cigarettes, Do you believe that they have money to handle the medical expenses.

Imtiyaz: Tragic Man, people defeated and failed by our self created system.

I don’t believe it to be a tragedy though. We only know one truth in our life - only one truth that we will die someday. Death is the only absolute truth we know. Everything else  is merely subjective. Like the existence of God? whether someone is beautiful? That the pain will be gone? One can never say for sure, there will always exist an counterstatement and an anti Idea which can challenge it. Not death though.

Imtiyaz: You don’t believe in God?

Maybe, It is one of those topics I am least worried about and barely even think about.

Imtiyaz: Good enough man. I don’t believe in the gods these religions preach. They always find something to suit their convenience and are very eager to impose it on others.

–silence—

Imtiyaz: Let us go man, the boring stuff should be over by now.


Ladies and Gentlemen, this will be the last time you will be here in this college as a student. After this day you have your exams and after that you are fully functional graduates and precious assets of our nation…

This is so boring. What do they even want us to do after graduation? They believe it to be an achievement, when there is nothing special about it. I wish I could leave and… wait a second, what am I gonna do after leaving this place? I have never thought about it. Where will I go? Go back there? Can I? Why the hell this had to end.
“Hey Imtiyaz, what are you gonna do after this?”

Imtiyaz: I thought you would never ask. After all this is over I am getting married to the girl I am engaged to.

“You are engaged! ?” that came as a shock to me, he never looked like a man who  hmmm. Well never mind.
Imtiyaz : Man, you really don’t know me at all. People will start to doubt if we are even friends?  You really don’t remember? I was engaged to her last year and you were also there with me.
“I was?”
Imtiyaz: Yes man you were. You helped my family a lot with various arrangements.

“Oh Yes I was.” Nope I was not, I don’t remember this at all. What was I doing last year, fuck I cannot remember at all. I remember the academic stuff but why do I not recall anything other than that. This is a major problem.

Imtiyaz: Yo come on, dance is about to start. Pick someone who you like Or you can just ask her.

“Ask who?”
Imtiyaz: yo what happened? You are looking a bit pale? 
“I am alright.”
Imtiyaz: Yeah man, just ask her. I don’t believe she will refuse today. 
“Who?”
Imtiyaz: Do you really not remember anything? Pratishtha Man. She was your childhood friend. You had a big fight last year and haven’t talked since.
“Yeah, that happened.” I have no idea what happened, I have forgotten all about everything, I remember their names but I don’t remember anything about them at all. Am I dreaming?
“You are real right?”
Imtiyaz: one hundred and 1 percent. If you don’t believe me I can still kick you in the nuts.
“NO No, You are real. I am just messing with you.” what the fuck is going on. This is freaking me out.
“Now let the dance begin.”

Fuck this shit I am outta here. 
“Oi, This is really farewell. Are you still mad at me?”
Who is this woman? And why is she talking to me like we know each other 
Imtiyaz: Really man, whatever happened between you guys you should now forgive each other.
“Why are you not answering Dumbo?”
‘Oh yeah, we should let it go. But I am not feeling very well, I would take my leave early’
“Are you really going to leave?” A hand tugged at my shirt from behind, it was her- Pratishtha. The look in her eyes, if I really leave now she is going to cry. Ahh now I cannot leave.
‘No, I am staying.’
“Yeah then let’s dance.” she pulled me onto the platform and took my hand and placed it on her hips and looked me in the eyes with so much grief. I didn’t know this woman, and yet she looks at me with a sense of grief. What exactly happened to me? Or is this all just a big prank everyone is pulling on me. Let’s wait a bit more.
“After this is over. Would you tell me a story?Any story of years?”
–silence–
“I know you are mad at me. Please #### ,for the sake of all our years of friendship”
There were tears in her eyes. This woman is really good at making me emotional.
‘Yes I will.’ And here we go. She started crying in my arms while we danced. Thankfully no one was paying attention to us. Is this all happening, for real?


‘Yeah what type of story would you like?’
“Anything you want to tell. Your favourite story?”
‘Hmm okay, but remember it is a bit emotional,’ she just nodded at me. Is this really not a prank? Why can’t I remember anything? And why does this woman look at me like that?
‘The story I am about to tell is - THE LOST LETTERS’
Here we go then 
‘I was walking down the road one day And I met a burly man. He was in a hurry to get somewhere. He had a few letters in his hands. When he saw me  he stopped and looked me up from head to toe.
“Sir Can you please help me deliver these letters?” He asked me. And I am a free soul But I am apprehensive of trouble too. And that smelled like trouble. So I asked him, "If I do this job for him, what will I get in return?”
That man was clearly panicking like he was running away from someone. He ruffled his pockets but he didn’t find anything. Then he looked at his hands and a silver ring was donned on it. He took it out and put it in letters. I am apprehensive but I am not a bad person so I was going to decline his ring and deliver his letters for free. But before I could say it he shoved it into my hands and took off running. I called him from behind, but he ran off. And I was stuck with some letters to deliver and a silver ring. Now you see this silver ring in my hand is exactly the one. Don’t misunderstand, I am not that type of guy. It happened after I read those letters. I know I shouldn’t have but I couldn’t control myself . it just started something like this -
12-03-2017:
I need a motorcycle
I really need it
But how?
Maybe I am not working hard enough 
Maybe I am not good enough 
Well that actually is true
I am not good enough
I am not desperate enough 
Nightmares are back though
Why haunt me?

I want to talk about the man who taught me to walk on my own when I was a little kid.It is one of my core memories.These days I have been thinking a lot about him. I don’t recall his face anymore,misty, all it is. I do remember that he had green eyes. I remember sitting by his body as a child. There was cotton plugged into his nose, Maybe there were stitch marks too. I remember leading my relatives on the way there. I was a child but I remember this too. The road to my village was being freshly built, and we walked on foot into the mountains.
Sitting by his body,I recall I was waving a branch on his body, I didn’t understand why at that moment of time. I remember where that branch was from too. I remember the way he taught me how to walk really. We were on our way to school which was really far away. We were going through fields, creeks and mountains. I remember there was a huge electricity tower there. He let go of my hand and encouraged me to go forward. I was scared. To do it alone, to walk on my own. I always walked holding someone’s hand or usually they would pick me up, I was just that small.I walked forward , or more like stumbled forward. And a voice came from behind 
“Look forward and have trust in yourself”
“You already know the way”
“Keep your sight ahead of you”

That day I learned how to walk on my own.
Even now when there is a crowd or when I am anxious, I stumble. I for some moments forget how to walk. And then I recall this way again. I stumble but then I walk steadily again.I look straight ahead of me and have faith in myself and I take one step after another and I walk. I don’t remember what his real name was.I don’t know what he did, what his hobbies were. I recall some of his moments with me. I know that he was the man who taught me how to walk by myself. I recall he was recently engaged before the incident. I also recall his fiance was crying and she was there, I don’t recall her face or her name. I don’t know who she was. The woman who was ought to accompany him in the path of life and lies. Or maybe I just heard this from someone, I don’t recall. There is so much to talk and write about. But I am reluctant to do it. What if it doesn’t work either. Then I would not be left with anything else which can save me. That man who died, That man who taught me how to walk by myself. That man died in a motorcycle accident.
This was his first letter.  Just from this letter alone I decided to deliver his letters without reading any further. But guess what, that dumb man forgot to write an address on any of them letters.  So those letters rest in my trunk and his ring rests on my finger in hopes that someone may recognise them and I could finally deliver those letters.’

‘Hey why are you crying? This was not that emotional of a story. I haven’t even told you about the other letters.’
Imtiyaz: yo what did you tell her, why is she crying?
Ahh, I just told her a story. How would I know? Maybe she is emotional. 
‘I don’t know,’ I said.

Lighting the one:
It has been three days since I have realised that there is something wrong with me. Today I finally have an appointment with the doctor. This is serious. I haven’t called home for 3 days. They would be worried too. 
Nurse:“Sir you are being called inside”
‘Yes’ I said as I trodden towards the door. ‘Good afternoon Sir.’ I said while closing the door behind me.
Doctor :“Welcome Akshay, How have you been?”
‘Do you know me sir?’ 
Doctor: “Yes I do. You were my patient a year ago. And then you stopped coming altogether.”
What the hell? I thought to myself. ‘Sir, why did I visit?’
Doctor: “Well of course, it was your smoking addiction. You wanted to quit. And we were working on it. You were making improvements too.”
What the fuck, I was a smoking addict. I don’t remember that at all. ‘Sir can I trust you?’
Doctor: “Of Course you can. Before coming here I was your family’s doctor.You know me from when you were a little child. After the accident I thought you would not be able to handle yourself but you came through.”
‘You know my family?’
Doctor: “Hey kiddo? You really don’t remember.”
‘Sir, It's nothing. I just had viral fever.’
Doctor: “Okay, can you stick your tongue out.”
I got my phone out and pretended that It was important. Excusing the Doctor I dashed out from the building. My world just turned upside down. Apparently I was a smoking addict and was trying to quit, and the doctor I chose turns out to be my family doctor. No matter what, I am not that dumb or Am I? I remember being fascinated by the cigarettes, like they looked cool, but I did have a resolve that I will only smoke when I lose someone dear to me. So How can I be an addict? When I haven’t smoked a single cigarette in my whole life. Phew calm down fucker. Calm down, Our brain still functions. Let's think this through logic. Let us first assume that we have lost our memories. Then what we already know is replaced by my memories of sleeping or maybe it is just foggy. I remember my dreams, they are foggy too. So what is the way I can recognize truth from false, without alerting anyone. Logs, diary logs, text messages, call recordings and finally verbal recount of the events. And finally the record of all this too in case I forget. ‘Yes, we have a plan now.’
Honk Honk 
‘Watch where you go fucker! If you wanna die, jump off somewhere else, not in front of my car.’
‘Yeah Sorry’ I said as I dashed towards the footpath. I don’t know what is wrong with me. My brain is not functioning right. 
There were dark clouds in the sky. It was going to rain soon. Spring is here. Shedding of old leaves and then a long wait through the harsh and cold… and then starting anew again, adding one more year more to life. A new spring 

‘You are just some organic thing stuffed into paper and rolled to look like pencils, small pencils.’
‘Do people really find relief after lighting you up and then inhaling. The thick smoke which can kill them fills their lungs and nicotine works its charm. ’

‘Is that not suicide. Don’t you kill them. Even your pack warns them. But they still gamble with their life. Just for a fleeting moment of escape.’

‘But it is bullshit. I am just trying to find reason in something which was supposed to make me relaxed.’
‘It wouldn’t matter if I lit you up. And it would also not matter If  I smoke too.’

Letter 2:
Mama, why does Patel uncle smoke?
‘Hmm, Patel uncle is addicted to a bad thing. He started when he was young just for fun. But then when he wanted to leave, he couldn’t. So now even after getting cancer he still smokes’
Mama, What is Cancer?
‘Cancer is hmm… how can I say this. It is a bad disease. You will know more about it as you grow up.’
Uncle Patel got cancer by smoking?
‘Yes,because smoking is bad. It is very injurious to one’s health’
Mama? I accidentally listened to Padma aunty and she was crying and telling someone that uncle is going to die.Is that true?
‘Akshay, eavesdropping is bad,Did I not tell you before.’
But Mama it was an accident.
‘No,this is your second time. Akshay, you need punishment this time.No shinchan after dinner today’
Mama NO No please please.

I remember having this conversation.I remember that Patil uncle died a week after this. We were not in the city at that time. I remember Dad crying alone in his room and when he saw me, he put on a face and then he left.I remember getting caught with my paper cigarettes. As a Kid, I thought that it was cool. Anyone smoking cigarettes looked so cool to me. They smelled terrible, I didn’t like the smoke. It was just, like how it looked and how brave those people are to gamble with their life.
I remember the beating I got for it too. I remember Mama convincing me that if I tried to smoke or do anything like that again, she and papa would die. I remember that she was crying. I was so filled with guilt. That I made my sweet and loving mother cry. I started crying too. I still feel bad about that. It is the worst feeling in the whole world to hurt your loved ones. They don’t deserve that, they deserve everything good. This feeling is maybe what people call love. But why does it matter now?
I just wanna say this that I didn’t smoke, I never even touched one. I stayed away from people who did it and even from the places that sold these.
So why did dad die? Why did he get cancer? He hated smoking. It took his friend away. So why did he?
Well that doesn’t matter now. 

I remember that after that Mom started to smoke. The woman who forbade me to gamble with my life was in so much pain that she decided in her limbo to go a little sooner. And all I could do was just see. I had no idea how to help her. I didn’t know how to help myself. How does one deal with grief? There are many walls in this world that are unreasonable or reasonable. Walls that can be torn down, walls that are like mountains, A man cannot move. Walls which exist just in our heads like our names, walls which find reason in history like caste and races. Walls based on faith like religion. Each of them is a mountain on its own. But In front of man’s ego they are not impossible to climb or destroy. But there exists some which everyone is helpless against. Even Gods struggle amidst those walls. Like walls of right and wrong. These walls of morality. But that doesn’t constitute anything which a man is concerned with. The impossible wall for man is death. The only absolute truth man knows is his own mortality. This wall cannot be overcome. A loved one dies in front of you even with all the money and connections a man has amassed in his lifetime. Death doesn’t negotiate. Hell she just reminds you of your own.
The impossible wall of death. The truth of our meager lives.

I have heard that when certain strong memories are repeated it can result in the recollection of lost memories. According to the doctor I was an addict. Smoking a cigarette should induce some deja vu in me. Or I shouldn’t experience any coughing. Here goes nothing.
clank clank
Flicker
 Flicker Flicker

Bitter Smoke:

When there was a fire in the mountains everyone gathered around to watch. To watch the spectacle of destruction of nature close enough for them to watch , yet far from their homes. Far from civilization for now. Nobody knew if the fires would spread and reach them ever. No one could say, all they did was watch the forest burning, fire eating through life without discrimination. Some people said that this fire is cleansing the mountain and rejuvenating for new life to prosper there.  The fire was still burning if it reached our town would it too be considered cleansing. For the priest and fanatics maybe it will be judgement day. They believe that it is going to be something grand where they will be judged and will be told their fate. But what if the judgement is the fire on that mountain, what if there is no explanation for our fate, what if the judgement is just a brutal act of life cleansing a forest. Would it be justified in flames of belief? Somebody also complained what is the government doing? Those are precious resources and are we just supposed to let our sacred mountain burn? Apparently that person was drunk, there was nothing we could do to stop a fire of that magnitude far up in the mountain. And as for the government,maybe, they would probably take action soon. That is unlikely because that they don’t yield any resources from there, that mountain and forest is sacred. Our Devi resides there and the government stays away from local religions because there are not many resources to yield from a small village. And these people’s faith, well the priest and belief has done its part. It is a rejuvenating fire for the mountain for now. And if it reaches here then it would be interesting to see the same fire to be deemed as divine punishment. Children were also watching from afar with one hand clutching their mother’s shawls. They were not scared , they were fascinated by all the stories. Sometimes I wonder what would these people even desire if they have everything here. The food is plenty from their farms, the water from the rivers, education, stories. And finally a loving and forgiving all powerful mother which looks over her divine kingdom, this beautiful village. This was my home when I was a child. The cigarette did work, although partially, some fragmented memories are clear now. And one of them was from this village, more particularly the Devi’s temple. Which is now surrounded by flames. And surprisingly it looked Orange. I cannot explain how but it all felt so warm and looked so orange. Logic says that it is the fire. But it doesn’t matter because it looks orange. Haha . 
“Akshay beta, come inside and have some tea, Gudia made it just like you liked it.”
‘Coming Dadi, thank you for the tea.’ I said as I went inside the home. It was big and modern on par with city mansions, people were well off here. None was specifically poor. Everyone was well off, just enough for everyone, they contributed it to the blessings of Devi.

Gudiya:“See how generous I am , you didn’t bring anything from the city for me, and I still made you your favourite tea. See how generous I am. Show some gratitude you selfish monkey.”
‘Meh, I am still the most good looking one amongst us.’
Gudia: “Yeah in your dreams. One you didn’t bring me anything. You promised me. You liar. And second you didn’t bring Pratishtha with you either.”
I couldn’t refute her, with my lost memories I didn’t want to take any risks. If Pratishta really knew from childhood she surely would find something strange in my behaviour. And for her gift I really forgot. Gudia was a sweet girl, she was my childhood buddy too, before my parents moved into the city for better education. And we didn’t come back to the village that much either. 
Dadi:“Cut him some slack Gudiya, he just arrived from a long journey this morning. And that after such a long time.”
In a small village we all were a closely knitted community. Everyone knew everyone. Everybody was so sweet and treated everyone with so much love. Nothing like something you would notice in the city. Here there was so much love and empathy in the air.  It felt like I had come into a fantasy land filled with mystical wonders and secrets. Here I wanted to stay. But there was something on my mind which was troubling me very much. After I smoked that cigarette. The fog in my brain was cleared a bit. And I noticed that I last called home months ago. And I had vivid thoughts that I called them daily. I was confused. The phone was not working no matter where I tried. The conclusion I reached was that maybe I have schizophrenia too like that Fight club guy too. So I tied myself up before sleeping and recorded myself too. After finishing exams, I straight up came back home. And it was not there. The place I remembered it to be, was barren. There was no building in that area, even after asking around the neighborhood I found nothing. So I decided to come back to the village to look for more clues and in hopes that my memory comes back.
Gudiya: “hey where are you? You were lost somewhere and you haven’t taken a single sip of the tea I brewed. Are you mad at me that I scolded you for bringing me any gifts?”
‘Hey, No. I was just thinking that how can you have so much glowdown, you don’t even come close now. Hehe’ I said as I picked up the cup of tea, and brought it up to my lips.
Gudiya: “Shut u..”
***Dong Dong Dong Dong Dong*** 
A bell started ringing outside. I put the cup of tea in and went outside to see thick smoke approaching.  The fire of cleansing was now purifying the village. Wrath of the goddess now the fire had become. There was chaos all around and everyone was hurriedly packing their important stuff. children who were curious and mischievous before were now crying. Gudiya was also panicked and was looking for important stuff to pack. The smoke was burning my lungs. as i came to my senses i realised that we need to evacuate. I rushed inside and looked for Gudiya, who was still looking for grandma.
we need to leave ! 
‘ I can't find her anywhere’
Gudiya, we need to leave or we will not be able to. she would also be focusing on leaving, but first we need to leave, have you packed everything important?
‘ I don't know if I packed some documents and money.There are still some documents and jewellery left, I don’t know where it is ’Gudiya said with teary eyes
We don't have time, leave now.
‘But dadi ??’
I will look for her, you leave now.
‘But..’
Gudiya leave !!!
 
She was scared I could see it on her face.
*screaming sounds * 
Now that she has left, I need to find grandma. But where ?
I dashed into the thick smoke, along the way I bumped into various people, sacred and helpless. Despite the chaos and the burning sensation in my lungs, my head was clear. I was feeling light and calm. 
Have you seen  Guddi Dadi? I asked a man running with his kid wrapped in his jacket 
‘I saw her near the well before. But it is too late, that area has gone into flames. You should focus on saving yourself young man’ as he said this. He ran towards the main road. 
I too ran towards the well. It was a small village, nearly everybody knew everybody . That area was mostly for animal husbandry and it was close to the area where cattle were usually tied. I had an inkling for why grandma went there . 

As I reached close to the well I saw flames coming from the cattle house. I tried to see anything human but all I saw was chaos and smoke.  I hurriedly went towards the cattle house. It was burning, the animals inside were screeching, they were dying. the cows , the sheep, the horses. Everything was burning. There was thick smoke all around me. I could still hear their pained screams. But I couldn't do anything. I was, I was helpless. That's when I caught a figure running g towards me. It was Dadi, her clothes were burning, her hands were already red and bleeding. She was coughing. I dashed towards her and wrapped her in my jacket. She was old and frail, very small in stature. I picked her up and dashed towards the well. I picked up the water bucket and there was thick smoke all around. I lowered the rope into the well. It was hot. fetching the water I put a bucket of water on her and myself. for a moment it disappeared, all the smoke and screams. I could hear my own breathing. I could feel it. The thick smoke moved through my lungs, it was bitter. But I didn't feel that it was bad. 
I picked grandma up and dashed towards  the road. There were flames everywhere. The once peaceful village was burning. I kept running until I saw a sea of flames. I didn't stop, I jumped into the flames and kept running. My breath was ragged,Grandma was unconscious. but I kept running. The path felt endless, I could feel my skin melting down. It was all feeling so hopeless, I had a tight knot in my heart ‘Is there where I am going to die?’
‘Will I not be able to find the truth?Will I really not be able to..’
‘I don’t wanna die!!!’
‘Not now!!’
‘Please Oh! Mother of all, Goddess please I don’t want to die’
I screamed, there was no one there, there were only flames, my soles were already burned, I could feel my feet burning, I couldn’t breathe. My body was moving, rather staggering ahead by instinct. I was not really a religious person, But I remember I used to be. I was very pious too. I don’t remember how and when I stopped believing…
It is hopeless either way.

‘Akshay’
‘Akshay, why do you want to know everything?’
‘Ever since you were a kid, you were curious about everything, you wanted to know everything. And you wanted it to be right then and there too.’
‘You were always impatient, always hasty.’
‘Oh Lost child of mine.’

**crackle crackle **
Huuuuh 
breathes with difficulty
Huuuhhh 

RAIN haha IT’S RAINING. coughing sounds 







Addiction:
<So this is a dream sequence. Just after the fire he wakes up injured in a hospital. He again had been asleep for a week. Gudiya and Pratishta are there.  We need to add more imagery in this dream sequence>
Strange beings once came to me, they said they could save me.  It was strange. What were they going to save me from ? I didn’t know. Before I could figure that out, one of them tied my hands, I realised something was wrong. They tied my feet too, I didn’t resist. They put me in a van, I didn’t resist again. I was curious what these yellow colored people are going to do ? What did they mean by saving me? I was not at all worried about where they were taking me. Every place looked the same anyways,Everything was red and wet. It rained everywhere too, filled with the rotten smell of decay. Everything was so fixed in place, the only thing moving was maggots in this decaying carcass. Some maggots were white and some were black, there were some other maggots of different colours, but they were rare. I was orange. All maggots played in the carcass. Some got less rotten places with abundant flesh, some were living on bones. All maggots have something of a perception of their own. Some were trying to save the carcass for their children, some were just eating all they could. But they all were very few. Most maggots which were black and white, were only concerned with filling their bellies and reproducing and most importantly with entertainment. These type of maggots loved entertainment. Usually they were ruled by colored maggots or by some black or white maggots. For maximum  entertainment, they have recently shifted towards choosing the maggot which will be given the power to rule over them. And they are duly entertained. They also maintain the morality or something of their imaginary games to keep the games going. Sometimes I wonder if they are even aware of their own being, of being a maggot infesting a dead carcass. Maybe they have long forgotten, as all of the maggots live for a very small time. And they only tend to propagate the knowledge of their entertainment. Some even revere some imaginary gods which created this dead carcass, and some revere the very carcass too. They sometimes believe too that a maggot like being created this dead Carcass. Well what can someone even expect from maggots afterall. 

‘How long have you been affected by it ?’
-Affected by what?
‘Look, We are not your enemies, we are just trying to help you but for that to happen, You need to cooperate. ’
-Look Mister.  I have no idea what you are talking about. Though I am curious, when you said that you can save me. What did you mean? Save me from what? I don’t remember having any problem.
‘Ahh.phew.Seems like I have no choice. Please Look in this mirror’
-Where.. Ahhh. 
Looking into the mirror
– what? I don’t find anything strange, I am orange and you are yellow.
‘Hah, do you remember the time you turned orange? ’
– what are you talking about? I have always been orange?
‘It seems you are too far gone. I am sorry. I really thought that we could save you.I am really sorry’
- Hey, what are you talking about? Stop talking in riddles and tell me what is wrong with me.
‘Why are you orange?’
And I  had no answer for that. I don’t know how and Why I became orange. I knew it in the back of my mind that , there was once a time I couldn’t perceive colours, I don’t know what changed. I don’t know how everything became colourful. 
<Dream sequence ends here>
<chaos around him- this will be the first time we will see the world normally not from his perspective. His difference in behavior, observations from his previous accomplices- Imtiyaz, doctor etc. And finally what remains from the kingdom. >
Nurse informs Gudia that Akshay is awake. Gudiya rushes into the room with tears in her eyes. She sees him opening his eyes and staring at the ceiling blankly.
Akshay:“Grandma? Is she okay?”
Gudiya with tears in her eyes let out a welp

Akshay:“Gudiya? Is Grandma Okay?”
Guidya started crying. The nurse took her out of the room. And came back inside to check up on him. ‘I know you are feeling disoriented. You and many from the villages are currently being treated here in the district hospital. ’
Akshay:“Grandma?”
The nurse thought to herself for a bit and said ‘The old woman you brought back was in very serious condition, so she was referred to the main hospital. She is still very serious but she is alive.’
Akshay:“Hmm okay.”
‘Doctor will be coming here in a few minutes. There are too many injured people. Is there anything you require till now?’
Akshay:“Why are you wearing yellow?Don’t they wear white in hospitals? ”
Nurse stood there in silence 
‘Please wait till the doctor comes.’ and nurse went out of the room
After a while Gudiya came in. She just came and sat on the stool. ‘They took grandma to a big hospital in the city.She is alive.’
Akshay thought to himself that she looked orange. 
Akshay:“Why didn’t you go?”
‘I did, I came back.’
Akshay:“How many days have I been unconscious ?”
A silence ensued again and in a low voice Guidiya whispered
‘It’s been a week.’ pause
‘Pratishtha and your friend Imtiyaz visited yesterday.’
Just then the doctor and nurse came into the room. Gudiya stood up and went to the side.

‘Hello Akshay, How are you feeling?’
“Good, there is pain all over my body. And worst of it all, I see colours, amplified. You look yellow, Gudiya looks orange And I look , I don't know red.”
Doctor came close to Akshay and asked him to open his eyes wide. 
Akshay:
“What’s happening to me?”
The doctor hesitates.
Doctor:
“Well… medically speaking, we might classify it as a form of palinopsia, or possibly a trauma-induced perceptual distortion. In rare cases, PTSD or neurological trauma can alter how the brain processes color. You could also be experiencing a kind of associative synesthesia, where your mind assigns colors to people based on emotion or memory. It’s rare… but not impossible”
Akshay:
“But why those colors? Why is Gudiya orange?”
Doctor:
(leans in slightly)
“That’s the strange part. Associative synesthesia—when it happens—usually connects colors to abstract things like numbers, emotions, or sounds. But in your case, you're assigning colors to people themselves. Consistently. It's not random. Which makes me think… Maybe your brain is trying to compensate. Maybe it’s reconstructing people not from memory, but from meaning. Color, in your case, might be the language your mind now uses to recognize”

Akshay: 
“Yeah,I don’t get what you are saying. But okay, can it be treated? Is there any medicine?”
Doctor: (leans back, considering the question) 
“Treatment depends on what’s causing it. If it’s tied to trauma or PTSD, there are therapies like cognitive behavioral therapy or EMDR that could help address the underlying issue. As for medication, some antidepressants or antianxiety drugs might stabilize your brain’s perception. But what you’re describing… it’s not something we usually medicate. It’s more about understanding how your mind’s trying to adapt to something it’s struggling to process.”
Akshay:
“So what now?”
Doctor: (nods thoughtfully, offering a reassuring smile as he leans forward slightly)
"Right now, Akshay, it's important we take things one step at a time. We'll begin by closely monitoring your symptoms. I’d like to run some brain scans and neurological tests to rule out any physical damage or underlying conditions. At the same time, I'll refer you to a therapist who specializes in trauma. We'll work together to create a plan that helps you process what happened—because, ultimately, understanding your mind’s response to trauma is key."
Fated Pyre:
<This will be the final chapter. It will have the recap of what happened in the temple and all the mysteries will unfold. Did Akshay lose his memory? And what actually happened to make him like this. Filling all the plot holes. After addiction there are only 3 possible outcomes - either he overcomes the addiction, either he keeps smoking meaning keep looking for what there is not Or he dies. ALL these choices will lead to his fated pyre.>

There’s an old saying: when a star is nearing its end, it burns its brightest. They say the same about people too—that just before they die, they glow the brightest. 
After a month has passed, all the quiet storms are gone.

The external struggles were gone. But the burning houses were now ashes , the screams and their ghosts inhabited their favorite places of torment. Amidst all this black and  charred was standing a man wearing a heavy jacket . There were thick clouds in the sky and strong winds accompanied them to carry the heavy weight of what they were about to let go. The man in Heavy black jacket, after standing there for an hour ,looked into the well and saw something. He didn’t say anything and kept walking down the path of destruction, as if to see its origin. On his way, he didn’t encounter a single soul. It was as if this place was cursed. It was around afternoon that he descended down the mountain and saw the river.  After crossing this river he would have to climb up to the top of the  mountain to follow the trail of destruction. As he followed the trial he saw the bridge still hanging onto its life barely by a thread. The locals had apparently used steel wire to reinforce it after it kept breaking when the river overflowed.  It was looking out of place now that the forest had burnt down and it was still there linking a mountain to another. The man in the black jacket crossed the bridge swiftly and a sense of déjà vu hit him strongly.  If there was still the forest standing here, he must have been able to recognize why he was feeling this way. It was hard to recognize the trail in the destruction. Some trees were still standing. They were charred but they were still standing. And some were burned to the crisp. Some laid there blocking the road. Following the path there once was impossible. The man with the black jacket just stood there contemplating which path he should take.

Temple Grounds:

A squirrel was sitting in the courtyard eating nuts. A person wearing an orange raincoat was standing in front of the temple.

‘I don’t know. How much time has passed? I don’t know. How much time has passed? When did I reach here and why have I been standing here?’

‘I don’t know, I don’t Knowwwwwwwww’

*breathing raggedly *

‘I don’t know, I don’t remember anything. I don’t remember anything. ’

*breathing raggedly*

Raindrops fell on his face.

‘It  is raining. Yes. It is raining. Raining. But I am wearing a raincoat. And it is raining’

*strong winds came*

‘Wind, wind , such strong wind. Need shelter’

The man wearing the orange raincoat went inside the temple to take shelter. He was still muttering to himself.

There was an idol of Goddess inside

‘Demons, demons. They are everywhere, Demons. They eat and eat this corpse. They are hungry , hungry, very hungry.’

‘Oh mother Goddess, this is a temple in your name. Yet there are still demons inside, why mother? Why mother ’

‘Why is it so Mother? Why must they be here? Why must it be inside?’

‘They eat and eat and eat. They are endless and they are hungry. Oh! Mother, what should I do ? What should I do?’

‘Maggot, Maggots all around they are eating my flesh .THEY ARE EATING MY FLESH .AHHHHHHHHHHHH’

‘MY SOUL, THEY ARE EATING MY SOUL. OH! MOTHER SAVEEE MEEEE’

Rain , Rain and Rain. The locals had some folk stories about this mountain where the temple of Goddess was located. According to folklore there was once a demon who was very cruel and evil. He tormented the villagers and used to make their lives miserable. Once a Great King came to the village and when he saw the demon’s evildoings. He rallied a big army and marched forward to drive away the demon. But as the demon was very powerful , he killed all of the king’s army and just left the king alive to torment him even more. The story also says that after the demon wiped the king’s army it started raining very heavily. The rain never stopped, the demon was of fire. So the demon didn't like the rain. For a while he watched the villagers suffer after the rain destroyed their corps. But when the rain never stopped, he grew annoyed. So he opened his mouth and spewed flames towards the sky. The sky cleared for a bit,  but after a while the rain started again. The king was watching all this, smiled and looked at the demon with scorn. The demon grew enraged and tried again and again to stop the rain, but kept failing. Growing frustrated and seeing the king praying to some unknown Goddess, the Demon raised the king to his mouth and swallowed the king whole and laughed. Just at that moment a blinding flash of light filled the whole sky and lightning struck the demon. A loud thunderous sound kept echoing in the mountains for 7 days. They say that the whole village was so scared that they didn’t come out of their house until the sound was gone. And when they came out they saw that the rain had stopped and light was flashing from the mountain where the demon once was. After some villagers had the courage they moved towards the place and found the king kneeling in front of a staff coiled with chains. The demon was slain by the Goddess. The King established a big temple around the chained staff.  The villagers also started praying to the Goddess and were able to evade many disasters.  According to the folk story this was how the temple of the Goddess came to be. But today, Very few know this story anymore. Very few things stand the test of time, very few things I say, the rituals originally followed remain one of the few standing the test. But the stories, the stories they have changed far from the original. Now in some of the stories, they believe that it was the demon who brought the rain to torment the innocent villagers. And the goddess defeated the demon with the fire. But does it matter to the man who was climbing the mountain in heavy rain to reach the temple in a hurry?

‘AHhHH I don’t even know if  the temple is safe after all this destruction’

The man with the black jacket was drenched from head to toe. His long black hair sticking close to his face  and matching with the beard he didn’t like. 
‘I wonder where he is now. *sigh* He will be okay, I hope he is okay. It's been a few years since that day. I wonder if he still remembers me, what  shit am I talking about. It is impossible for him to remember me.’

Lightning flashed in the sky and the strange man kept climbing the mountain.
Stories and stories. Your stories ,my stories, the story of the next guy, the story of God, the story a nation, your story, my story, The story of how the Goddess defeated the demon either with fire or with flame, Or story where I can spin a version where the demon was not evil and it was the Goddess. I can spin up any tale about you and your mania, about me and my mania. I can make you an Obstinate wretch which you definitely are, which I definitely am too. But what about these stories? What is so special about them? If none other than its progenitor believes in them, would they become a lie or would they just be forgotten. Haha I know I know , these tales , these stories are pointless, just as your story and just as my story. Because none of it is real. You as an obstinate wretch will believe what you want to and so will I. Even If I somehow convince you that some version of the folk story is repeating itself again and again. You will not believe me because I don’t believe in this either.  Why does it even matter ? It will end hopefully today once and for all. The evil demon, the merciful goddess, the penitent king Or The fallen angel,The evil witch and The greedy king Or The Good king against the demon and then the demon redeeming himself and the story being the metaphor. It doesn’t matter. It doesn’t matter if the villagers were saved by the rain or fire. It doesn’t matter.

The man reached the temple and saw a person lying outside the temple. The rain had stopped but not the thunder, The sky was still filled with the dark ominous clouds.
The person boobed his head up and looked at the man in the leather jacket. He didn’t make any noise and just propped himself up to sit down and stare at the man. 

“You are the person who gave me those letters.”
“And this ring in my hand. It belongs to you.”

The man in the black jacket just stood there silently.

“Your name ? You didn’t tell me your name. But  I know it. I have known your name for how long-I don’t recall . But I don’t remember you ever telling me your name? ”
— silence— 
“So? Who are you ? And what is your relationship with me? Why did you hand me those letters? And where are my parents?”

A long sigh escaped from the man in the black jacket
‘He doesn’t remember.’
XX: “what have you figured out till now ?”

Akshay: “My memory is fragmented. Four years of my past I cannot recall clearly. There are many things such as my behaviour that don't make any sense. My ideas of colours… nothing is making sense.And Your letters are so conveniently placed in my memory to just 4 years ago. So I will ask again , Who are you and what is the truth? ”

XX: “Fuck this shit!!”

XX: “You think it's funny? Fuck you! Akshay. Even if you would have lost your memories or as you’re saying it is fragmented. How come you are here in this particular temple on this particular day?”

Akshay Pov:
‘He is so black, so dark.’
“I don’t know. I was in the hospital and then I had this sudden urge to come here on this particular day. I had a strong gut feeling that I would know the truth if I just came here today.”

The man in the black was just staring at me with a look of disbelief on his face. 
XX:“HAHAHAHAHA”
XX: “You! Haha, you really fucking lost your memories. It is so… pathetic. You are so pathetic.”

Akshay: “Why? You fucker? Why did you give me those letters and this fucking ring. It's like you knew that I am going to lose my memories. They were placed so conveniently to make sure that my paranoia and the clues that I gather lead me to believe in those stories. And guess what you almost got me too. If I was not lucky, I could have believed in your lies.”

XX: “I didn’t fucking give you any letters, neither do I gave you any ring. This is my ring on my fucking hand. I don’t know from where you acquired its replica. But no, I fucking didn’t give you any ring nor any letters. Even if I believe for a moment that you have lost your memories. Those parts don't make any sense.” 

Akshay: “hahhh so why have we decided to come here ? Why this place? And this time of the year? ”

XX: “You said that you knew my name. Without me telling you?What is my name? But oh wait! I want you to tell me your version of the folk story of how this temple came to be? You should know it because he knew it way before me. So do me this courtesy of retelling the tale. And then I will tell you everything.”

Akshay: “Yeah whatever. Can you just get it over with? Everyone knows that story.”

XX: “Yes, just get it over with please. Tell me that story and I will tell you the truth.”

Akshay looked a bit amused ,sighing, he started: 
Once upon a time there lived a demon who was cruel and vile.He tormented the villagers and used to make their lives miserable. Once a Great King came to the village and when he saw the demon’s evildoings. ..

XX: “Stop! I don’t want the folk tale. I want your interpretation of the story that you told me years ago.”

Akshay: “What?”

XX: “You know that you know it. Tell me that story and I will tell you the truth.” pulling out a cigarette from  under his coat.

Akshay giving him a look sighed again and started:
Once upon a time there lived a king who was cruel and vile. He tormented the villagers and used to make their lives miserable…

Akshay (reluctantly, voice low but growing steadier):
“Once upon a time, there lived a king who was cruel and vile.
He tormented the villagers, made them build monuments to his glory, drained their rivers for his own gardens, and demanded prayers instead of justice.
But he was not always this way.
They say once, he was a boy who believed in gods and stars. But belief turned to bitterness.
Somewhere along the way, he lost someone—or maybe many others.
He started relishing in the vices of greed and Lust to ease his pain. The fog of sin clouded his mind.And each time he lost, he forgot. ”
XX (quietly): “Go on.”
Akshay:
“The villagers cried out for help, but no one came.
Then one day, a demon appeared in the village.
Not from the sky or under the earth—but from within.
He stood in the guise of the  their once king said,
‘It doesn’t matter, nothing matters. With all the sacrifices he had made. He deserved it all. He deserved all the wealth, women, and vices. So he took to his own corrupted mind to conquer everything in sight and take everything for himself. So when the plague came, the villagers died of hunger while he relished in his wealth.’

“So when they came pleading at his door,
starving and sick,
the demon—the king—
just laughed and said,
‘Mine. Mine. Suffer. It doesn’t matter. I have suffered, so you should too.’
He had forgotten his duties.
Forgotten the fields where he once played as a boy.
Forgotten the sacrifices and what were they done for Forgotten his subjects and himself. 
All he remembered was the ache in his chest…
and the silence that came when he stopped asking why.
His grief has blinded him and made him a demon.”
XX (watching as the cigarette burned between his fingers):
“And the Goddess?”
Akshay (quietly):
“She never came.”
(beat)
“Or maybe she did.
Maybe the fire was her.
And the rain?
Maybe that was mercy.
But not for him.”
XX:
“So what happened to the king?”
Akshay:
“He vanished.
Into myth.
Some say he became the demon forever.
Others say… he split himself in two—
One half to remember,
and the other to Live ....”

XX:
	“To Live huh? Not Forget?”

Akshay:
	“I don’t know. But I believe that he left to live because forgetting is not something that .. something that he could be just forgiven for.

XX:
	“Interesting. So a broken man, The king, cannot be allowed to forget the evil and vile things that he did when he clearly was overcome with hopelessness. A man drowning in grief? A man who lost everything? A man who in his insanity destroyed everything , the subject of all his sacrifices, his loved ones sacrifice?”
Akshay:
	“Yes, Because he has no right or as a matter of fact no choice. But enough of this bullshit. Tell me the truth now.”
–silence–
Akshay:
“We had a deal. I have told you the stupid story. Now its your turn to tell me the truth.”
XX:(chuckles)
“No”
Akhsay:(enraged)
“WHAT??”
XX:
“NO! You have no right to know the truth. Haha. As a matter of fact you have no choice here.”
Akshay:(enraged)
“WHY damn you!! Haha , no matter which version of this story should I have told you, You would never tell me the truth. Correct ?”

XX:
“You are funny, but yeah sure. I can tell you anything I want. It doesn’t need to be the truth. And you have no power over me”
The storm was intensifying the thundering sounds have stopped all of a sudden like a calm reminder of how terrifying silences can be. A silence of approaching doom

A fist landed, And the downpower, the downpour graced the world to end the doomed silence. But more terrifying than the silence of doom is the wait of the end. The rain arrived but the silence it echoed through the ancient stones, rotten mud and the murky river.  Minds of two beings entangled in blood and chill of endearing violence. A man wearing a black jacket and A man donning an orange rain coat. Sharing the strange intimacy of violence. The bad and the red all being swept in rain. The bad and the red all mixing in sloth of raging mud. 
“What were you saying your mf! That I don’t have the right?” said Akshay while getting pinned down.
“Mf you are the one losing. And yes you have no right just as that king don’t have the right to forget. You have no right to remember.” said XX while he punched Akshay
After 10 minutes:
Two men lay on the ground covered in mud and blood.
 Akshay: (spits out blood)
Raggedly breathing “You Mf, I am gonna kill you.”
XX: 
“Haha, Do your worst.”
Akshay:
“You know, it’s actually not that bad, not knowing, you know. Like I still have something to do, find the truth, what a noble pursuit that is. And you know maybe in the process of doing so, there is much uncertainty. I think I can live with that. Just with possiblity of uncertainty and a clear pursuit of something.”
XX: (laughing)
“And to get to that conclusion, you have to get beaten up first?”
Akshay:
“Actually, No. I tried to beat you up because - I don’t like your face.”
XX: (shocked)
“I don’t look that bad. Or do I? I thought I was conventionally attractive and here is some bastard beating me up because he didn’t like my face.”
Akshay:
“Sorry, But I am not gay”
XX:
“Heh? What is that supposed to mean?”
Akshay: (laughing)
“You know, I would like to be your friend. So what is your name?”
XX:(chukles )
“Don’t you already know? ”
Akshay:
“I don’t wanna use my brain for now.”
XX:(sighs)
“I am  Sunny.”
Akshay:
“Sunny, hmm . Doesn’t ring any bell.Sunny, I am Akhsay.”
Sunny:
“I Know.”


Akshay:
“Yeah yeah you know. You see I have lost my memories. I know you are not going to tell me. But will you at least help me find them.”
Sunny:
“Hmm, you know I never gave you any letters or any ring. Maybe you can start from that.”
Akshay:
“But the memory feels to real to be false. Hmmm you know I am considering the possibility that you have lost some of your memories too.”
Sunny:(laughing)
“You really are funny. And no I have not lost my memories. And if I did something like that I would remember it.”
Akshay:
“You know I first came to the nearby village in search of my memories but there was a sudden fire and many people lost their lives, Heck I barely made it alive myself. I was trying to save an old grandma. But I failed, Gudiya tells me that she is fine. But I know, She died. I kind of regret it too you know, like if I was in good shape and if I focused more on my body, then maybe I would have been able to run faster, and get her to safety. You know she was actually trying to save the cattle, the voice less beings who were equally in pain and agony as everyone else. That old women was kind, she still thought of saving creatures which were not like her. I want to become that strong someday. But heck I am not even able to save myself."
Sunny:
“I know, That was really reckless of you, you lucky bastard. I had to drag you out of that fire. And if I was even a bit late you would have died.”
Akshay:“What you saved me? I didn’t know. They told me it was a rescue team and they were not able to identify the person.”
Sunny:
“It was very chaotic.”
Akshay:
“Thank you. Thank you for saving my life.”
Sunny:
“And you tried to beat up your saviour. What kind of behaviour is that?”
Akshay:
“Sorry.”
Sunny:
“You have changed a lot, The person I remember was absolutely not like this. But maybe it is for good.”
Akshay:
“Yeah maybe.”
Sunny:
“Strange one you are. Tell me do you smoke ?”
Akshay:
“I don’t know. Like I don’t smoke actively. But a doctor told me that I was trying to fight my addiction. When I smoked, somethings did resurface but they were just my childhood memories not what I wanted to know. And those letters, they made me so much paranoid of what is reality and of my own memories.”
Sunny:
“Yeah. Well due to someone attacking me, my pack is now crushed. I have half the cigarette, Do you wanna ?”

Akshay:
“Yeah, I don’t know if it will work.”
Sunny:
“Well it's your own choice.”

The Last Cigarette 

Wake up Akshay! Please wake up, Granny is gone, I have no one left, they say that they will help us rebuild our old home, but what use it is now, Papa has come back from the city, we already did her last rites, it been 13 days please wake up ** sobbing ** Please Please gudiya says amidst sobs

GASPING SOUNDS 
Akshay wakes up with a jolt, gasping for air, nurse barges in and presses the emergency button.

<Need so much refinement to be honest>
<So after refactoring, this chapter will actually give him a choice which is established in the first chapter, A choice to just stop chasing what he has lost- even if it's bad the guilt and all, Or  a choice to seek truth. Ultimately it will be open ended but form our story above both the options could be chosen they are equally possible, ultimately the ending would be based on the readers personal bias - hehe very interesting concept>

# Hacking work 
Full Internship Report
Indian Institute of Technology Jammu
Research Title: Identification of Vulnerabilities and Development of 6G-Enabled Mutual
Authentication Protocol for UAVs using PUF (Physical Unclonable Functions) and
Blockchain
Intern:Vinod Akshat
Period: 23 December 2025 – 31 March 2026
Mentor: Dr. Gaurav Varsney
Full Internship Report
Abstract
Phase I: Identification and Development of Exploits
Objective
1. Battery Drainage Attacks (DoB – Depletion of Battery)
Key Academic References
Attack Types Analyzed
2. Denial of Service (DoS) Attacks on UAVs
Key Difference from DoB
Attack Tools Evaluated
Defensive Mechanisms Identified
Protocol-Specific DoS Testing Tools
Swarm-Specific DoS (NS-3 FANET Models)
HackRF One Setup Notes
Phase II: GPS Spoofing Experiments
Resources Used
Observed Issues
Key Insights from Community Discussion
Potential Solution Identified
Phase III: Mission Planning and ArduPilot
Software Stack Evaluated
Current Status
Note on macOS Compatibility
Phase IV: Software Defined Radio (SDR) and RF Reverse Engineering
Tools Deployed
Successful RF Tracing on WiFi Band (2.437 GHz)
Drone Communication Protocols Analyzed
1. DUML (DJI Universal Markup Language)
2. OcuSync (DJI)
3. iBus Protocol (FlySky)
4. SBUS Protocol (Futaba, used in custom drone)
AFHDS-2A Reverse Engineering (FlySky FS-i6)
Objective
Hardware Setup
Bind Phase Frequencies
Capture Parameters
Demodulation Chain (GFSK)
AFHDS-2A Protocol Specifications
Bind Packet Structure
Example Hop Sequences from Real Transmitters (for validation)
Current Status
Fissure Exploration (Note)
Phase V: Summary and Next Steps
Accomplishments
References
Appendix: Tools and Configurations
GNU Radio Configuration (WiFi band tracing)
SDR Environment Recommendations
Abstract
This report documents the complete work conducted during the internship at IIT
Jammu, focusing on UAV security vulnerabilities and the foundational
reverse-engineering work required for developing a 6G-enabled mutual authentication
protocol. The work spans four phases: (1) identification and reproduction of battery
drainage and denial-of-service attacks on UAVs, (2) GPS spoofing experiments using
Software Defined Radio (SDR), (3) mission planning using ArduPilot and
QGroundControl, and (4) RF reverse engineering of drone communication protocols
including AFHDS-2A, DUML, iBus, and SBUS. This report serves as both a technical
archive and a foundation for the RF reverse engineering and Software defined radio
technologies relevant to the UAV security and Protocol Discovery.
Phase I: Identification and Development of Exploits
Objective
To analyze, reproduce, and document attacks on UAV systems that can be performed in
a controlled laboratory environment, with emphasis on attacks that degrade battery life
or deny service.
1. Battery Drainage Attacks (DoB – Depletion of Battery)
Unlike traditional DoS attacks that focus on service unavailability, the
Depletion-of-Battery (DoB) attack targets the physical battery itself. According to ITU
definitions, DoS aims to prevent legitimate users from accessing a service. DoB,
however, aims to permanently or semi-permanently disable the battery through
accelerated drainage, often without immediate service degradation.
Key Academic References
Paper Key Insight
ScienceDirect 1 Formal modeling of battery depletion
attacks
ScienceDirect 2 Energy exhaustion in UAV networks
Semantic Scholar Analytical models for battery lifetime
under attack
MDPI Sensors (via Sci-Hub) Sensor battery depletion taxonomy
Attack Types Analyzed
Attack Mechanism Battery
Impact
UAV
Relevance
Prevention
Wormhole
Attack
Clone/Node
Replication
Vampire
Attack
Denial-of-Slee
p
Malware-Base
d Drainage
Artificially
short routing
paths cause
excessive
packet
forwarding
Fake drone
with copied
ID injects
traﬃc
Manipulates
routing logic
(Carousel:
packets loop;
Stretch:
longest path)
Keeps drone
from
low-power
states via
continuous
handshakes
Compromise
d companion
OS forces
sensor
polling,
CPU/GPU
utilization
Radio + CPU
active longer
Repeated
authenticatio
n &
retransmissi
on
Sustained
radio + CPU
usage
IMU, GPS,
radio, MCU
stay active
Gradual
battery
degradation
Multi-UAV
swarms,
mesh
telemetry,
BVLOS
Swarm
identity
management
Mission-critic
al flights
ISR drones
loitering long
durations
Linux-based
companion
computers
Packet
leashes,
hop-count
consistency,
energy-aware
routing
Hardware-bou
nd crypto
identities,
challenge-res
ponse
Max route
length,
energy-aware
metrics, loop
detection
Duty-cycle
enforcement,
rate limiting,
hardware
sleep
enforcement
Secure boot,
process-level
power
accounting,
isolated
safety MCU
Relaxed
Jamming
Low-power
interference,
malformed
telemetry,
GPS
instability
Retry loops,
re-acquisition
cycles
All UAVs Frequency
hopping,
redundant
sensors
●
2. Denial of Service (DoS) Attacks on UAVs
●
Key Difference from DoB
Goal: Disrupt availability (not destroy hardware)
●
Time horizon: Immediate
Reversibility: Usually recoverable after attack stops
Attack Tools Evaluated
Tool Purpose Relevance to UAVs
LOIC TCP/UDP/HTTP-GET
flooding
AP/ground station
saturation
HPING3 Custom ICMP/UDP/TCP
packet forging
De-authentication attacks
Netwox (Tool 76:
Synflood)
TCP SYN flood Connection table
exhaustion
Scapy Custom packet crafting Protocol-specific exploits
●
Defensive Mechanisms Identified
Router-based IDS (Kismet Wireless, Snort)
●
Dynamic MAC address rotation
●
Rate limiting (crude but effective)
Protocol-Specific DoS Testing Tools
Tool Attack Vector Outcome Measured
MAVProxy (stress
modules)
Heartbeat starvation,
control latency
Failsafe activation
(RTH/LAND)
MAVSDK Control command
saturation, telemetry
congestion
GCS–UAV timing
sensitivity
boofuzz / Peach Fuzzer Malformed MAVLink
packets
State machine crashes,
protocol exhaustion
MAVLink Inspector Telemetry amplification CPU overload, control
delay
GStreamer / FFmpeg Video stream stress
(decoder exhaustion,
renegotiation loops)
Frame latency, buffer
saturation
GNSS-SDR GPS signal loss
simulation
Receiver
lock/reacquisition cycles
PX4/ArduPilot Fault
Injection
GPS denial response Mode switching, drift
handling
●
Swarm-Specific DoS (NS-3 FANET Models)
●
●
●
Consensus flooding
Leader election failure
Swarm fragmentation
HackRF One Setup Notes
Critical findings from oﬃcial documentation and testing:
●
HackRF One does not work reliably with virtual machines (explicitly stated in
oﬃcial docs)
Our initial FM radio verification failed because the stock antenna is designed for
2.4 GHz (WiFi band), while FM radio operates at ~100 MHz
●
Two workarounds identified:
1. Use a bare wire to capture lower-frequency signals (e.g., car key fobs) –
demonstrated by Aadarsh Sir
2. Listen on WiFi bands (2.437 GHz) – attempted by me with partial success
Phase II: GPS Spoofing Experiments
●
Resources Used
Guide: Hackers-Arise tutorial on GPS spoofing with HackRF One
●
Reference video: YouTube instructions (
https://www.youtube.com/watch?v=9PNcuVGbrJI)
●
Environment: Laboratory setting (non-Faraday, controlled)
Observed Issues
We encountered the same problems documented in these Reddit threads:
●
GPS spoofing with HackRF One – no effect
●
GPS spoofing in Faraday cage
Key Insights from Community Discussion
1. Minimum dwell time required: The spoofed signal may need 15+ minutes to
overcome legitimate GPS signals
2. Legal/regulatory constraints: Active GPS transmission raises legal issues (noted
but not applicable to lab testing)
3. Power considerations: Mixed opinions on whether increasing transmission power
helps
Potential Solution Identified
YouTube workaround – requires further validation
Phase III: Mission Planning and ArduPilot
Software Stack Evaluated
Software Purpose Platform Compatibility
Mission Planner Full-featured ground
control
Windows only
QGroundControl (QGC) Lightweight ground control Windows, macOS, Linux
(set up on both my
machine and lab Ubuntu)
ArduPilot Flight controller firmware Linux/Windows
(compilation issues on
macOS)
SITL Simulator Software-in-the-loop
simulation
Cross-platform (tested on
lab Ubuntu)
●
Current Status
QGroundControl successfully connects to both custom drones and simulated
drones
●
ArduCopter module is the primary focus for simulation
●
SITL allows protocol and control testing without hardware
Note on macOS Compatibility
ArduPilot compilation fails on macOS. Windows and Linux are the recommended
development platforms. The lab Ubuntu machine has a working setup.
Phase IV: Software Defined Radio (SDR) and RF Reverse
Engineering
Tools Deployed
Tool Purpose Status
GQRX General SDR
receiver/analyzer
Used with HackRF One +
2.4 GHz antenna
GNU Radio Signal processing
framework
Tutorials followed;
configuration files saved
Universal Radio Hacker
(URH)
Capture and replay radio
signals
Installed on lab Ubuntu
(alternative to GNU Radio
file-saving limitation)
Successful RF Tracing on WiFi Band (2.437 GHz)
Configuration:
●
●
Central frequency: 2.437 GHz
●
Sample rate: 20 MHz
●
Antenna: 2.4 GHz WiFi antenna
RF gain: 14 dB, IF gain: 24 dB, BB gain: 0 dB
Result: Clear activity detected from multiple phones in the lab. Verified by Nikita Ma'am.
Configuration saved at /home/ubuntu/test.grc.
Limitation encountered: GNU Radio could not save raw IQ data to files (only saved
configuration). This led to installation and configuration of URH as an alternative
capture/replay solution.
●
Drone Communication Protocols Analyzed
1. DUML (DJI Universal Markup Language)
●
Type: Proprietary DJI protocol
Use: Commands (flight controls, mission data) and telemetry between drone and
controller
●
●
Security concern: Vulnerabilities allow command injection and potential hijacking
●
Resource: pyduml – Python DUML entry vector
2. OcuSync (DJI)
●
Use: Digital transmission system for video, telemetry, and control
●
Relevance: Standard on most modern DJI drones
●
Reference: OcuSync technical overview
●
3. iBus Protocol (FlySky)
●
Type: Digital serial communication (UART, 115200 baud, 8N1)
●
Channels: Up to 14 (1000–2000 value range)
Packet size: 32 bytes (2-byte header, 28-byte channel data, 2-byte checksum)
●
Applications: Robotics, drones, custom RC projects
Advantage: Non-inverted signal (simpler than SBUS for microcontrollers)
4. SBUS Protocol (Futaba, used in custom drone)
●
Type: Digital serial (UART, 100,000 baud)
●
Channels: Up to 16 (11 bits per channel)
●
Packet size: 25 bytes
●
Features: Error checking, failsafe data
●
Application: Standard in drone flight controllers
AFHDS-2A Reverse Engineering (FlySky FS-i6)
AFHDS-2A Reverse Engineering. https://fareham.org/rw3-afhds2a.shtml
This represents the most technically detailed reverse-engineering effort of the
internship.
A more comprehensive version of this would be available in this document :
AFHDS 2A Interception and decoding
Objective
Intercept, demodulate, and decode the FlySky AFHDS-2A protocol during the bind phase
to extract:
●
Transmitter ID (TX ID)
●
Frequency-hopping channel table (16 channels)
Hardware Setup
Component Specification
SDR HackRF One (firmware 2024.02.1)
Antenna Stock 2.4 GHz
Transmitter FlySky FS-i6
Distance 0.5–2 m
Environment Indoor with Wi-Fi/Bluetooth interference
●
●
Bind Phase Frequencies
Primary bind channel: 2.406 GHz
Alternate bind channel: 2.470 GHz
Capture Parameters
Parameter Value
Sample rate 20 MS/s
RF gain 14 dB
IF gain 24 dB
BB gain 0 dB
Capture duration 10 seconds
Total samples 200 million complex samples
File size ~160 MB (IQ)
Demodulation Chain (GFSK)
Stage Processing Parameters
Decimation ÷8 20 MS/s → 2.5 MS/s
RF LPF Cutoff 500 kHz, transition
100 kHz
Isolate signal
Baseband LPF Cutoff 300–600 kHz Remove out-of-band noise
Quadrature Demod Gain =
sample_rate/(2π×deviation)
Deviation 250–500 kHz →
gain ≈ 0.8
Clock Recovery Mueller & Müller ω=2.5, gain_ω=0.0625,
μ=0.5
Bit Slicing Binary threshold Output: bind_demod.bin
AFHDS-2A Protocol Specifications
Parameter Value
Frequency band 2.4 GHz ISM (2400–2483 MHz)
Channel spacing 500 kHz (~160 channels)
Modulation GFSK
Symbol rate 1 Mb/s
FEC Hamming-like (7,4)
Preamble 16 bits (0xAAAA)
Sync word 32 bits (0x5475C52A)
Payload (pre-FEC) 37 bytes
CRC 16-bit CRC-CCITT (0x1021)
Packet airtime ~1.2 ms
Frame period ~3.85 ms (~260 Hz)
Bind Packet Structure
Bytes Content
0 Packet type (0xBB or 0xBC)
1–4 TX ID (little-endian)
5–8 RX ID (0xFF FF FF FF initially)
9–10 Sequence counter
11–26 16 hop channels (primary target)
27–36 Padding (0xFF)
(after payload) CRC-16
Example Hop Sequences from Real Transmitters (for validation)
text
TX1: 72 69 14 57 76 51 34 87 1A 39 2B 22 47 82 91 7C
TX2: 6B 22 79 34 5F 71 14 2B 1A 7D 43 82 93 57 3B 0B
TX3: 46 11 70 29 42 1A 36 74 7B 69 57 63 2F 3E 24 8F
TX4: 82 3D 88 5B 6F 96 78 53 2A 61 44 17 34 0F 4E 2F
Current Status
Stage Status
RF capture ✅ Successful
GFSK demodulation ✅ Functional
Bitstream generation ✅ Confirmed
Packet detection (preamble + sync) ❌ No valid packets recovered yet
Hop table extraction ❌ Blocked by packet detection
Next step: Debugging packet detection – likely requires fine-tuning of clock recovery
parameters or forward error correction decoding before sync word alignment.
Fissure Exploration (Note)
Fissure was evaluated as a potential SDR framework. Installation attempted on Kali VM
and Ubuntu on macOS – both resulted in unstable behavior. May work on native Ubuntu
bare metal. Recommendation: Continue with GNU Radio + custom Python scripts for
greater control. All GNU Radio configurations developed during this internship are
available for review (DSP knowledge required).
Phase V: Summary and Next Steps
Accomplishments
Phase Key Deliverables
I Comprehensive taxonomy of DoS/DoB attacks on
UAVs with prevention strategies
I Toolchain evaluation (MAVProxy, MAVSDK, boofuzz,
GStreamer, GNSS-SDR)
II GPS spoofing attempt documentation +
community-sourced solutions
III Working SITL simulation environment with
QGroundControl
IV Successful RF capture on WiFi band (2.437 GHz)
IV Complete AFHDS-2A demodulation chain (capture →
bitstream)
IV Protocol analysis of DUML, OcuSync, iBus, SBUS
We are still stuck in our effort to decode the protocol and it might require someone with a deep
expertise in both theory and lab work so that we can move forward and debug the main issue
that we are having.
References
1. Desnitsky, V., & Rudavin, D. "Modeling and Evaluation of Battery Depletion Attacks
on Wireless Sensors." ScienceDirect.
2. "Energy Exhaustion Attacks in UAV Networks." Elsevier, 2022.
3. "Sensor Battery Depletion Analysis." MDPI Sensors, via Sci-Hub.
4. "Drone Detection and Tracking Using RF Identification Signals." PMC, 2023. Link
5. Kismet Wireless Network Detector. https://www.kismetwireless.net/
6. Snort IDS. https://www.snort.org/
7. MAVProxy Documentation. https://ardupilot.org/mavproxy/
8. MAVSDK. https://mavsdk.mavlink.io/
9. boofuzz Fuzzing Framework. https://github.com/jtpereyda/boofuzz
10. GNSS-SDR. https://github.com/gnss-sdr/gnss-sdr
11. PX4 Fault Injection. https://docs.px4.io/main/en/simulation/fault_injection.html
12. HackRF One Documentation. https://hackrf.readthedocs.io/
13. GNU Radio Tutorials. https://wiki.gnuradio.org/
14. Universal Radio Hacker. https://github.com/jopohl/urh
15. pyduml – DJI DUML Python Library. https://github.com/hdnes/pyduml
16. AFHDS-2A Reverse Engineering. https://fareham.org/rw3-afhds2a.shtml
17. Fissure SDR Framework. https://github.com/ainfosec/fissure
Appendix: Tools and Configurations
GNU Radio Configuration (WiFi band tracing)
●
●
Location: /home/ubuntu/test.grc
●
●
Frequency: 2.437 GHz
Sample rate: 20 MHz
Gain settings: RF 14 dB, IF 24 dB, BB 0 dB
●
●
SDR Environment Recommendations
●
Host OS: Ubuntu 22.04 L TS (bare metal, not VM)
Python environment: Python 3.10+ with NumPy, SciPy, PySDR
Backup SDR software: URH (when GNU Radio file saving fails)
https://github.com/akshayrivers/afhds
_
Custom Afhds Decoder Scripts for Gnuradio and testing:
decoder
Prepared by: Vinod Akshat
Date: 29 April 2026
Internship: IIT Jammu

AFHDS-2A Interception and Decoding
Main documents related to this : https://fareham.org/rw3-afhds2a.shtml
DIY-Multiprotocol-TX-Module/Protocols
_
Details.md at master
Custom code I wrote : https://github.com/akshayrivers/afhds
_
decoder
1. Problem Statement
The objective of this work is to intercept, demodulate, and decode the FlySky AFHDS-2A
radio protocol during the bind phase in order to extract:
●
●
Transmitter ID (TX ID)
Frequency-hopping channel table
Recovering the hop table enables tracking of live FHSS traffic, which is the primary
reverse-engineering goal.
2. End-to-End Processing Flow
Stage 1 — RF Capture (Bind Mode)
Hardware Setup
●
●
●
●
SDR: HackRF One
Antenna: Stock 2.4 GHz antenna
Distance from transmitter: ~1–2 m
Environment: Indoor, normal Wi-Fi/Bluetooth interference
Transmitter State
●
●
●
Device in bind mode
Packets transmitted every ≈ 3 ms
No frequency hopping yet (fixed bind channels)
Bind Frequencies
●
●
2.406 GHz — primary bind channel
2.470 GHz — alternate bind channel
SDR Capture Parameters
●
●
●
●
●
Sample rate: 20 MS/s
RF gain: 14 dB
IF gain: 24 dB
BB gain: 0 dB
Capture duration: 10 s
Resulting File
●
●
●
Filename: bind_capture.iq
Total samples:
20 × 10⁶ × 10 = 200 million complex samples
Approximate size:
~160 MB (8 bytes per complex sample)
At this stage only raw IQ data exists — no demodulation.
Stage 2 — GFSK Demodulation
Input
●
bind_capture.iq
●
Complex IQ at 20 MS/s
Channel Processing
●
●
Decimation: 8
Channel rate:
20 MS/s ÷ 8 = 2.5 MS/s
Filtering
RF Low-Pass Filter
●
●
Cutoff: 500 kHz
Transition: 100 kHz
Baseband Low-Pass Filter
●
●
Cutoff: ≈ 300–600 kHz
Transition: 100 kHz
Purpose: isolate the ≈ 1 MHz GFSK signal bandwidth.
FM / GFSK Quadrature Demodulation
Gain formula:
gain = sample
_
rate / (2 × π × frequency_
deviation)
Using:
●
●
Channel rate = 2.5 MHz
Deviation ≈ 250–500 kHz
Typical gain ≈ 0.8
Symbol Recovery
●
Symbol rate: 1 Mb/s
●
Samples per symbol:
2.5 MS/s ÷ 1 Mb/s = 2.5
Clock recovery via Mueller & Müller:
●
●
●
●
●
ω = 2.5
gain
ω = 0.0625
_
μ = 0.5
gain
_μ = 0.03
ω-limit = 0.005
Bit Slicing
Binary slicer converts the recovered waveform into a bitstream (0/1).
Output
●
●
File: bind_demod.bin
Content: raw demodulated bits
Stage 3 — Bind Packet Extraction
Input
●
bind_demod.bin (bit array)
Decoding Steps
a) Forward Error Correction
●
●
Code: Hamming-like (7,4)
Converts noisy over-air bits into corrected data bits.
b) Packet Detection
Preamble:
0xAA 0xAA 0xAA 0xAA
Bit pattern: alternating 1010…
Sync word:
54 75 C5 2A
Used to align to true AFHDS-2A packets.
c) Bind Payload Parsing
From valid packets extract:
●
●
●
TX ID (32-bit)
Hop channel table (16 bytes)
CRC validity
Final Output
Decoded file:
hop_channels_
<TXID>.txt
Contains:
●
●
●
TX ID
Hop channels (hex and decimal)
Corresponding RF hopping frequencies
This enables live FHSS tracking.
3. Protocol Background — AFHDS-2A
Technical Specifications
Parameter Value Notes
Frequency band 2.4 GHz ISM 2400–2483 MHz
Channel
spacing
500 kHz ~160 channels
Modulation GFSK Gaussian Frequency Shift
Keying
Symbol rate 1 Mb/s 1,000,000 symbols/s
FEC Hamming-like (7,4) 7 over-air bits → 4 data bits
Preamble 16 bits 0xAAAA
Sync word 32 bits 0x5475C52A
Payload 37 bytes Before FEC
CRC 16-bit CRC-16-CCITT (0x1021)
Packet airtime ~1.2 ms Per packet
Frame period ~3.85 ms (~260 Hz) Bind mode
4. Bind-Phase Transmission Behavior
Key observations from reverse-engineering analysis:
●
●
●
●
●
TX alternates send and receive within each 3.85 ms frame.
RX listening time ≈ 2.1 ms per frame.
Over-air transmission time ≈ 1.5 ms.
A one-packet delay occurs because received data is processed after the next packet is
prepared.
During bind:
○
○
TX transmits on fixed channels.
RX hops at half rate until synchronization, then matches TX timing.
5. Bind Packet Structure
Packet Types
●
●
0xBB
0xBC
Layout
Preamble — 16 bits
Sync word — 32 bits (54 75 C5 2A)
Payload (37 bytes before FEC):
Bytes Meaning
0 Packet type
1–4 TX ID (little-endian)
5–8 RX ID (FF FF FF FF initially)
9–10 Sequence counter
11–26 16 hop channels — primary
target
27–36 Padding (FF)
CRC-16 appended after payload.
6. Reverse-Engineering Goal
Extract the Frequency-Hopping Channel Table
Example hop sequences from real transmitters:
72 69 14 57 76 51 34 87 1A 39 2B 22 47 82 91 7C
6B 22 79 34 5F 71 14 2B 1A 7D 43 82 93 57 3B 0B
46 11 70 29 42 1A 36 74 7B 69 57 63 2F 3E 24 8F
82 3D 88 5B 6F 96 78 53 2A 61 44 17 34 0F 4E 2F
These define the true FHSS hopping pattern.
7. Hardware and Reverse-Engineering
Resources
Equipment
●
●
●
●
●
●
SDR: HackRF One (firmware 2024.02.1)
Antenna: Included 2.4 GHz antenna
Connection: USB 2.0
Transmitter: FlySky FS-i6 (AFHDS-2A)
Bind activation: Hold bind button during power-on
LED indicator: Rapid blinking in bind mode
Physical Setup
●
●
Distance: 0.5–2 m
Environment: Indoor with Wi-Fi/Bluetooth present
8. Current Status
●
●
●
RF capture: successful
GFSK demodulation: functional
Bitstream generation: confirmed
However:
No valid packets or hop tables are recovered.
