import { AppConfig, AppsConfig } from "@/lib/dispatch";

export const ellieApps: AppsConfig = {
  chat:    { label: "Chat",     icon: "term",       visible: true },
  about:   { label: "Ellie",    icon: "soda",       visible: true },
  projects:{ label: "Projects", icon: "folder2",    visible: true },
  writings:{ label: "Writings", icon: "writer",     visible: true },
  memories:{ label: "Memories", icon: "memories",   visible: true },
  contact: { label: "Contact",  icon: "message",    visible: true },
  camera:  { label: "Camera",   icon: "camera",     visible: true, comingSoon: true },
  settings:{ label: "Settings", icon: "settings",   visible: true },
};