"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  text: string;
  sender: "me" | "other";
  timestamp: Date;
};

export default function PhoneChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<"idle" | "awaiting_name" | "awaiting_email" | "awaiting_message">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    if (phase === "awaiting_name") {
      setFormData((prev) => ({ ...prev, name: text }));
      setPhase("awaiting_email");
      setMessages((prev) => [...prev, { text, sender: "me", timestamp: new Date() }]);
      setMessages((prev) => [...prev, { text: "Enter your email:", sender: "other", timestamp: new Date() }]);
      return;
    }
    if (phase === "awaiting_email") {
      setFormData((prev) => ({ ...prev, email: text }));
      setPhase("awaiting_message");
      setMessages((prev) => [...prev, { text, sender: "me", timestamp: new Date() }]);
      setMessages((prev) => [...prev, { text: "Enter your message:", sender: "other", timestamp: new Date() }]);
      return;
    }
    if (phase === "awaiting_message") {
      const finalData = { ...formData, message: text };
      setMessages((prev) => [...prev, { text, sender: "me", timestamp: new Date() }]);
      setMessages((prev) => [...prev, { text: "Sending...", sender: "other", timestamp: new Date() }]);
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_SHEETDB_API_URL || "https://sheetdb.io/api/v1/x3l7fvjpp9ymi", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: finalData }),
        });
        if (res.ok) {
          setMessages((prev) => [...prev, { text: "✅ Message received. I'll get back to you.", sender: "other", timestamp: new Date() }]);
        } else {
          setMessages((prev) => [...prev, { text: "❌ Error: Transmission failed.", sender: "other", timestamp: new Date() }]);
        }
      } catch {
        setMessages((prev) => [...prev, { text: "❌ Connection reset by peer.", sender: "other", timestamp: new Date() }]);
      }
      setPhase("idle");
      return;
    }

    if (phase === "idle" && messages.length === 0) {
      setPhase("awaiting_name");
      setMessages((prev) => [...prev, { text: "Hey! I'm Vinod. How can I help?", sender: "other", timestamp: new Date() }]);
      setMessages((prev) => [...prev, { text: "Enter your name:", sender: "other", timestamp: new Date() }]);
      setMessages((prev) => [...prev, { text, sender: "me", timestamp: new Date() }]);
      return;
    }

    setMessages((prev) => [...prev, { text, sender: "me", timestamp: new Date() }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full bg-black text-neon font-mono">
      <div className="flex-1 overflow-auto p-4 space-y-3" ref={scrollRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                msg.sender === "me"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-zinc-800 text-zinc-300 border border-zinc-700"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-zinc-800 p-3 bg-zinc-900/90">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage(input);
                setInput("");
              }
            }}
            className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-green-400 font-mono text-sm outline-none focus:border-green-500/50"
            placeholder="Type a message..."
            autoFocus
          />
          <button
            onClick={() => {
              sendMessage(input);
              setInput("");
            }}
            className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-lg text-sm font-mono hover:bg-green-500/30 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
