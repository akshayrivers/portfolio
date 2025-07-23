"use client";

import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

type Phase = "idle" | "awaiting_name" | "awaiting_email" | "awaiting_message";

type Props = {
  initialCommand?: string;
};

export default function TerminalUI({ initialCommand }: Props) {
  const [lines, setLines] = useState<string[]>([
    "Welcome to THE Terminal.",
    "Type `help` to get started.",
  ]);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [triggeredDestruction, setTriggeredDestruction] = useState(false);
  const [hasRunInitialCommand, setHasRunInitialCommand] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const explosionAudioRef = useRef<HTMLAudioElement | null>(null);

  const appendLines = (...newLines: string[]) => {
    setLines((prev) => [...prev, ...newLines]);
  };

  const runCommand = async (cmd: string) => {
    setLines((prev) => [...prev, `> ${cmd}`]);

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    if (cmd === "rm -rf /") {
      if (!explosionAudioRef.current) {
        explosionAudioRef.current = new Audio("/sounds/explosion.mp3");
        explosionAudioRef.current.volume = 0.6;
      }

      explosionAudioRef.current.play().catch(() => {
        appendLines("⚠️ Audio autoplay blocked.");
      });

      setTriggeredDestruction(true);
      appendLines(
        "💀 WARNING: Deleting all files...",
        "Removing /bin ...",
        "Removing /usr ...",
        "Removing /home ...",
        "Removing /reality ...",
        "System meltdown in 3...",
        "2...",
        "1...",
        "🔥 💣 💥"
      );

      setTimeout(() => {
        setTriggeredDestruction(false);
        setLines([
          "⚠️ System recovered from kernel panic.",
          "Welcome back to THE Terminal.",
          "Type `help` to get started.",
        ]);
      }, 4000);
      return;
    }

    // Interactive phases
    if (phase === "awaiting_name") {
      setFormData((prev) => ({ ...prev, name: cmd }));
      setPhase("awaiting_email");
      appendLines("Name recorded.", "Enter your email:");
      return;
    }

    if (phase === "awaiting_email") {
      setFormData((prev) => ({ ...prev, email: cmd }));
      setPhase("awaiting_message");
      appendLines("Email recorded.", "Enter your message:");
      return;
    }

    if (phase === "awaiting_message") {
      const finalData = { ...formData, message: cmd };
      setFormData(finalData);
      setPhase("idle");
      appendLines("Sending your message...");

      try {
        const res = await fetch("https://sheetdb.io/api/v1/x3l7fvjpp9ymi", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: finalData }),
        });

        if (res.ok) {
          appendLines("✅ Message sent successfully!");
        } else {
          appendLines("❌ Failed to send message.");
        }
      } catch (err) {
        appendLines("❌ Network error. Try again later.");
      }

      return;
    }

    // Default command handler
    const args = cmd.trim().split(" ");
    const base = args[0].toLowerCase();

    switch (base) {
      case "help":
        appendLines(
          "Available commands:",
          "- help",
          "- clear",
          "- echo [text]",
          "- message_me.sh",
          "- rm -rf / (use with caution)"
        );
        break;

      case "echo":
        appendLines(args.slice(1).join(" "));
        break;

      case "message_me.sh":
        setPhase("awaiting_name");
        appendLines("Enter your name:");
        break;

      default:
        appendLines(`Command not found: ${cmd}`);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;
    await runCommand(cmd);
    setInput("");
  };

  useEffect(() => {
    if (initialCommand && !hasRunInitialCommand) {
      runCommand(initialCommand);
      setHasRunInitialCommand(true);
    }
  }, [initialCommand, hasRunInitialCommand]);

  useEffect(() => {
    inputRef.current?.focus();
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  return (
    <div
      className={clsx(
        "bg-black text-green-400 font-mono p-4 w-full h-full border border-green-700 rounded overflow-y-auto flex flex-col transition-all",
        triggeredDestruction && "animate-shake"
      )}
    >
      <div className="flex-1 overflow-y-auto">
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {!triggeredDestruction && (
          <form onSubmit={onSubmit} className="flex gap-2 mt-2">
            <span>&gt;</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none text-green-400 flex-1"
              autoComplete="off"
            />
          </form>
        )}
        <div ref={scrollRef} />
      </div>
    </div>
  );
}
