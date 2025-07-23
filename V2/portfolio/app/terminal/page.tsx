"use client";

import TerminalUI from "@/components/terminal";

type Props = {
  command?: string;
};

export default function FullscreenTerminal({ command }: Props) {
  return (
    <div className="bg-black">
      <TerminalUI initialCommand={command} />
    </div>
  );
}
