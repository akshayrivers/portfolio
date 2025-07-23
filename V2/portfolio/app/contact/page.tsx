"use client";

import ExplorerView from "@/components/ExploreView";
import contactFiles from "@/data/contact";

export default function ContactPage({
  onTriggerCommand,
}: {
  onTriggerCommand?: (cmd: string) => void;
}) {
  return (
    <ExplorerView
      title="contact"
      files={contactFiles}
      onTriggerCommand={onTriggerCommand}
    />
  );
}
