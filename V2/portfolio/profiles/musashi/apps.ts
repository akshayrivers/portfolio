import { AppConfig, AppsConfig } from "@/lib/dispatch";

export const musashiApps: AppsConfig = {
  chat:    { label: "Chat",     icon: "term",       visible: true },
  about:   { label: "Musashi",  icon: "soda",       visible: true },
  projects:{ label: "Works",    icon: "folder2",    visible: true },
  writings:{ label: "Writings", icon: "writer",     visible: true },
  memories:{ label: "Memories", icon: "memories",   visible: true },
  contact: { label: "Contact",  icon: "message",    visible: true },
  camera:  { label: "Camera",   icon: "camera",     visible: true, comingSoon: true },
  settings:{ label: "Settings", icon: "settings",   visible: true },
};