"use client";

import { useState, useRef, useEffect } from "react";

export default function TerminalUI() {
  const [lines, setLines] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    const args = cmd.trim().split(" ");
    const base = args[0].toLowerCase();

    switch (base) {
      case "help":
        return ["Available commands: help, clear, echo"];
      case "clear":
        setLines([]);
        return [];
      case "echo":
        return [args.slice(1).join(" ")];
      default:
        return [`Command not found: ${cmd}`];
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const cmd = input.trim();
    const args = cmd.split(" ");
    const base = args[0].toLowerCase();

    // Handling `clear` separately to avoid race condition
    if (base === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    const result = handleCommand(cmd);
    setLines((prev) => [...prev, `> ${cmd}`, ...result]);
    setInput("");
  };

  useEffect(() => {
    inputRef.current?.focus();
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  return (
    <div className="bg-black text-green-400 font-mono p-4 w-full h-full border border-green-700 rounded overflow-y-auto flex flex-col">
      <div className="flex-1 overflow-y-auto">
        "Welcome to THE Terminal. \n Type `help`",
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {/* ⬇️ Input field appears immediately after last output line */}
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
        <div ref={scrollRef} />
      </div>
    </div>
  );
}
