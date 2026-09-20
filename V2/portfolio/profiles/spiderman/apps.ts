import { AppConfig, AppsConfig } from "@/lib/dispatch";

export const spidermanApps: AppsConfig = {
  chat:    { label: "Chat",     icon: "term",       visible: true },
  about:   { label: "Spider-Profile", icon: "soda",  visible: true },
  projects:{ label: "Exploits", icon: "folder2",    visible: true },
  writings:{ label: "Terminal Diaries", icon: "writer", visible: true },
  memories:{ label: "Hackathons", icon: "memories", visible: true },
  contact: { label: "Contact",  icon: "message",    visible: true },
  camera:  { label: "Camera",   icon: "camera",     visible: true, comingSoon: true },
  settings:{ label: "Settings", icon: "settings",   visible: true },
};