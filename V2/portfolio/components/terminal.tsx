"use client";

import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { useVFS } from "@/hooks/useVFS";

type Phase = "idle" | "awaiting_name" | "awaiting_email" | "awaiting_message";

type Props = {
  initialCommand?: string;
};

export default function TerminalUI({ initialCommand }: Props) {
  const { root, getAbsolutePath, getNodeByPath, ls: vfsLs } = useVFS();
  const [currentPath, setCurrentPath] = useState("/home/vinod");
  const [lines, setLines] = useState<string[]>([
    "Welcome to THE Terminal (v2.0).",
    "Type `help` to see available commands.",
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
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
    if (!cmd.trim()) return;

    const promptText = phase === "idle" ? `${currentPath} $ ` : "";
    setLines((prev) => [...prev, `${promptText}${cmd}`]);
    setHistory((prev) => [cmd, ...prev]);
    setHistoryIndex(-1);

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    if (cmd === "rm -rf /") {
      if (!explosionAudioRef.current) {
        explosionAudioRef.current = new Audio("/sounds/explosion.mp3");
        explosionAudioRef.current.volume = 0.6;
      }
      explosionAudioRef.current.play().catch(() => {});
      setTriggeredDestruction(true);
      appendLines("💀 Critical Failure: Root filesystem deleted.", "System panic...");
      setTimeout(() => {
        setTriggeredDestruction(false);
        setLines(["System restored. Kernel version 6.9.4-akshat"]);
      }, 3000);
      return;
    }

    // Interactive phases for contact form
    if (phase === "awaiting_name") {
      setFormData((prev) => ({ ...prev, name: cmd }));
      setPhase("awaiting_email");
      appendLines("Name: " + cmd, "Enter your email:");
      return;
    }
    if (phase === "awaiting_email") {
      setFormData((prev) => ({ ...prev, email: cmd }));
      setPhase("awaiting_message");
      appendLines("Email: " + cmd, "Enter your message:");
      return;
    }
    if (phase === "awaiting_message") {
      const finalData = { ...formData, message: cmd };
      setPhase("idle");
      appendLines("Sending message...");
      try {
        const res = await fetch("https://sheetdb.io/api/v1/x3l7fvjpp9ymi", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: finalData }),
        });
        if (res.ok) appendLines("✅ Message received. I'll get back to you.");
        else appendLines("❌ Error: Transmission failed.");
      } catch (err) {
        appendLines("❌ Connection reset by peer.");
      }
      return;
    }

    const args = cmd.trim().split(" ");
    const base = args[0].toLowerCase();

    switch (base) {
      case "help":
        appendLines(
          "Core Utils:",
          "  ls [path]   List directory contents",
          "  cd [path]   Change working directory",
          "  pwd         Print working directory",
          "  cat [file]  Concatenate and print files",
          "  echo [text] Display a line of text",
          "  clear       Clear the terminal screen",
          "Applications:",
          "  message.sh  Execute contact script"
        );
        break;

      case "ls": {
        const files = vfsLs(args[1], currentPath);
        if (files) appendLines(files.join("  "));
        else appendLines(`ls: ${args[1] || currentPath}: No such directory`);
        break;
      }

      case "cd": {
        const target = args[1] || "/home/vinod";
        const node = getNodeByPath(target, currentPath);
        if (node && node.type === "dir") {
          setCurrentPath(getAbsolutePath(target, currentPath));
        } else {
          appendLines(`cd: ${target}: No such file or directory`);
        }
        break;
      }

      case "pwd":
        appendLines(currentPath);
        break;

      case "cat": {
        if (!args[1]) {
            appendLines("cat: missing operand");
            break;
        }
        const node = getNodeByPath(args[1], currentPath);
        if (node && node.type === "file") {
          if (node.content) {
            appendLines(node.content);
          } else if (node.src) {
            appendLines(`[Opening binary/external file: ${node.name}]...`);
            window.open(node.src, "_blank");
          } else {
            appendLines(`[Empty file: ${node.name}]`);
          }
        } else if (node?.type === "dir") {
          appendLines(`cat: ${args[1]}: Is a directory`);
        } else {
          appendLines(`cat: ${args[1]}: No such file`);
        }
        break;
      }

      case "echo":
        appendLines(args.slice(1).join(" "));
        break;

      case "message.sh":
      case "message_me.sh":
        setPhase("awaiting_name");
        appendLines("--- Contact Script Initialized ---");
        break;

      default:
        appendLines(`bash: ${base}: command not found`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Ctrl+C to cancel interactive scripts
    if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      if (phase !== "idle") {
        setPhase("idle");
        appendLines("^C", "--- Script terminated by user ---");
        return;
      }
      appendLines("^C");
      setInput("");
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const nextIndex = historyIndex + 1;
      if (nextIndex < history.length) {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = historyIndex - 1;
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    setInput("");
    if (cmd || phase !== "idle") await runCommand(cmd);
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

  const getPromptLabel = () => {
    switch (phase) {
      case "awaiting_name": return "Enter your name: ";
      case "awaiting_email": return "Enter your email: ";
      case "awaiting_message": return "Enter your message: ";
      default: return "";
    }
  };

  return (
    <div
      className={clsx(
        "bg-black/95 text-green-500 font-mono p-4 w-full h-full border border-zinc-800 rounded shadow-2xl overflow-hidden flex flex-col transition-all",
        triggeredDestruction && "animate-shake"
      )}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent pr-2">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap mb-0.5 opacity-90">
            {line}
          </div>
        ))}
        {!triggeredDestruction && (
          <form onSubmit={onSubmit} className="flex gap-2 mt-2 items-center">
            <span className="text-green-500 shrink-0 font-bold">{currentPath}</span>
            <span className="text-zinc-500 shrink-0">$</span>
            {phase !== "idle" && (
              <span className="text-orange-400 shrink-0 font-bold">{getPromptLabel()}</span>
            )}
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-green-400 flex-1 min-w-0"
              autoComplete="off"
              spellCheck={false}
              autoFocus
            />
          </form>
        )}
        <div ref={scrollRef} />
      </div>
    </div>
  );
}
