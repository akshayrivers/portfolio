"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useProfile } from "@/hooks/useProfile";
import { getProfileNames } from "@/lib/dispatch";
import type { ProfileKey } from "@/data/profiles";

type Message = {
  text: string;
  sender: "me" | "other";
  at: string; // ISO timestamp (JSON-safe for localStorage)
};

type Identity = { name: string; email: string };

const IDENTITY_KEY = "phonechat_identity";

function threadKey(profile: ProfileKey) {
  return `phonechat_thread_${profile}`;
}

function loadThread(profile: ProfileKey): Message[] {
  try {
    const raw = localStorage.getItem(threadKey(profile));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function loadIdentity(): Identity | null {
  try {
    const raw = localStorage.getItem(IDENTITY_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.name && parsed?.email) return parsed;
    return null;
  } catch {
    return null;
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function PhoneChat() {
  const { profile, profileName } = useProfile();
  const profileNames = getProfileNames();
  const [identity, setIdentity] = useState<Identity | null>(null);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [formError, setFormError] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load identity once + thread per active profile.
  useEffect(() => {
    setIdentity(loadIdentity());
  }, []);
  useEffect(() => {
    setMessages(loadThread(profile));
  }, [profile]);

  // Persist thread on every change.
  useEffect(() => {
    try {
      localStorage.setItem(threadKey(profile), JSON.stringify(messages));
    } catch {
      // storage full/blocked — chat still works in memory
    }
  }, [messages, profile]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const push = useCallback((text: string, sender: Message["sender"]) => {
    setMessages((prev) => [...prev, { text, sender, at: new Date().toISOString() }]);
  }, []);

  const startChat = () => {
    const name = nameInput.trim();
    const email = emailInput.trim().toLowerCase();
    if (!name) {
      setFormError("Tell me your name first.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setFormError("That email doesn't look right — check it?");
      return;
    }
    const id = { name, email };
    setIdentity(id);
    try {
      localStorage.setItem(IDENTITY_KEY, JSON.stringify(id));
    } catch {
      // ignore
    }
    setFormError("");
    push(`Hey ${name}! You're messaging Vinod Akshat (${profileName}). Type your message below — it lands straight in his inbox.`, "other");
  };

  const refreshThread = () => {
    try {
      localStorage.removeItem(threadKey(profile));
    } catch {
      // ignore
    }
    setMessages([
      {
        text: `Fresh thread. You're messaging Vinod Akshat (${profileName}) — say hi again whenever ready.`,
        sender: "other",
        at: new Date().toISOString(),
      },
    ]);
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || sending || !identity) return;
    setSending(true);
    push(trimmed, "me");
    setInput("");
    push("Sending…", "other");
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_SHEETDB_API_URL || "https://sheetdb.io/api/v1/x3l7fvjpp9ymi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            name: identity.name,
            email: identity.email,
            message: `${trimmed}\n\nTo: ${profile}`,
          },
        }),
      });
      setMessages((prev) => prev.slice(0, -1));
      if (res.ok) {
        push("Message received. He usually replies within a day or two.", "other");
      } else {
        push("Transmission failed — your message is saved here, try sending again.", "other");
      }
    } catch {
      setMessages((prev) => prev.slice(0, -1));
      push("Connection reset by peer — saved locally, try again in a bit.", "other");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-black text-neon font-mono">
      {/* Who you're talking to */}
      <div className="px-4 py-2 bg-zinc-900/80 border-b border-zinc-800">
        <p className="text-xs text-zinc-400">
          You are messaging <span className="text-green-400">Vinod Akshat</span>
          <span className="text-zinc-500"> ({profileNames[profile as ProfileKey] ?? profileName})</span>
        </p>
      </div>

      {!identity ? (
        <div className="flex-1 overflow-auto p-4">
          <div className="bg-zinc-900/80 rounded-xl border border-zinc-800 p-4 space-y-3">
            <p className="text-sm text-zinc-300">
              Before we start — who are you, and where can he reply?
            </p>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Your name"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-green-400 font-mono text-sm outline-none focus:border-green-500/50"
            />
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") startChat();
              }}
              placeholder="Your email"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-green-400 font-mono text-sm outline-none focus:border-green-500/50"
            />
            {formError && <p className="text-xs text-red-400">{formError}</p>}
            <button
              onClick={startChat}
              className="w-full bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-lg text-sm font-mono hover:bg-green-500/30 transition"
            >
              Start chatting
            </button>
            <p className="text-[10px] text-zinc-600">
              Saved on this device only — name and email, so he can reply.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-auto p-4 space-y-3" ref={scrollRef}>
            {messages.length === 0 && (
              <p className="text-xs text-zinc-600 text-center mt-4">
                Chatting as {identity.name} ({identity.email})
              </p>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 text-sm whitespace-pre-wrap ${
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
                  if (e.key === "Enter") sendMessage(input);
                }}
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-green-400 font-mono text-sm outline-none focus:border-green-500/50"
                placeholder={`Message Vinod (${profileNames[profile as ProfileKey] ?? profileName})…`}
                disabled={sending}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={sending}
                className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-lg text-sm font-mono hover:bg-green-500/30 transition disabled:opacity-50"
              >
                {sending ? "…" : "Send"}
              </button>
              <button
                onClick={refreshThread}
                title="Clear this thread and start fresh"
                className="bg-zinc-800 border border-zinc-700 text-zinc-400 px-3 py-2 rounded-lg text-sm font-mono hover:text-white hover:border-zinc-500 transition"
              >
                ↻
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
