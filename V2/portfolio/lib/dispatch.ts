import { themes, type ThemeKey } from "@/data/themes";
import { profiles, type ProfileKey } from "@/data/profiles";

export type { ProfileKey };

export type AppConfig = {
  label: string;
  icon: string;
  visible: boolean;
  comingSoon?: boolean;
};

export type AppsConfig = Record<string, AppConfig>;

const allApps: Record<ProfileKey, AppsConfig> = {
  spiderman: {
    chat:    { label: "Chat",     icon: "term",       visible: true },
    about:   { label: "Spider-Profile", icon: "soda",  visible: true },
    projects:{ label: "Exploits", icon: "folder2",    visible: true },
    writings:{ label: "Terminal Diaries", icon: "writer", visible: true },
    memories:{ label: "Hackathons", icon: "memories", visible: true },
    contact: { label: "Contact",  icon: "message",    visible: true },
    camera:  { label: "Camera",   icon: "camera",     visible: true, comingSoon: true },
    settings:{ label: "Settings", icon: "settings",   visible: true },
  },
  ellie: {
    chat:    { label: "Chat",     icon: "term",       visible: true },
    about:   { label: "Ellie",    icon: "soda",       visible: true },
    projects:{ label: "Projects", icon: "folder2",    visible: true },
    writings:{ label: "Writings", icon: "writer",     visible: true },
    memories:{ label: "Memories", icon: "memories",   visible: true },
    contact: { label: "Contact",  icon: "message",    visible: true },
    camera:  { label: "Camera",   icon: "camera",     visible: true, comingSoon: true },
    settings:{ label: "Settings", icon: "settings",   visible: true },
  },
  sekiro: {
    chat:    { label: "Chat",     icon: "term",       visible: true },
    about:   { label: "Sekiro",   icon: "soda",       visible: true },
    projects:{ label: "Exploits", icon: "folder2",    visible: true },
    writings:{ label: "Writings", icon: "writer",     visible: true },
    memories:{ label: "Memories", icon: "memories",   visible: true },
    contact: { label: "Contact",  icon: "message",    visible: true },
    camera:  { label: "Camera",   icon: "camera",     visible: true, comingSoon: true },
    settings:{ label: "Settings", icon: "settings",   visible: true },
  },
  musashi: {
    chat:    { label: "Chat",     icon: "term",       visible: true },
    about:   { label: "Musashi",  icon: "soda",       visible: true },
    projects:{ label: "Works",    icon: "folder2",    visible: true },
    writings:{ label: "Writings", icon: "writer",     visible: true },
    memories:{ label: "Memories", icon: "memories",   visible: true },
    contact: { label: "Contact",  icon: "message",    visible: true },
    camera:  { label: "Camera",   icon: "camera",     visible: true, comingSoon: true },
    settings:{ label: "Settings", icon: "settings",   visible: true },
  },
  manglu: {
    chat:    { label: "Chat",     icon: "term",       visible: true },
    about:   { label: "Manglu",   icon: "soda",       visible: true },
    projects:{ label: "Projects", icon: "folder2",    visible: true },
    writings:{ label: "Writings", icon: "writer",     visible: true },
    memories:{ label: "Memories", icon: "memories",   visible: true },
    contact: { label: "Contact",  icon: "message",    visible: true },
    camera:  { label: "Camera",   icon: "camera",     visible: true, comingSoon: true },
    settings:{ label: "Settings", icon: "settings",   visible: true },
  },
  redsky: {
    chat:    { label: "Chat",     icon: "term",       visible: true },
    about:   { label: "Red Sky",  icon: "soda",       visible: true },
    projects:{ label: "Projects", icon: "folder2",    visible: true },
    writings:{ label: "Writings", icon: "writer",     visible: true },
    memories:{ label: "Memories", icon: "memories",   visible: true },
    contact: { label: "Contact",  icon: "message",    visible: true },
    camera:  { label: "Camera",   icon: "camera",     visible: true, comingSoon: true },
    settings:{ label: "Settings", icon: "settings",   visible: true },
  },
};

export function getAppsConfig(profile: ProfileKey): AppsConfig {
  return allApps[profile];
}

export function getProfileNames(): Record<ProfileKey, string> {
  return {
    spiderman: "Spider-Man",
    ellie: "Ellie",
    sekiro: "Sekiro",
    musashi: "Musashi",
    manglu: "Manglu",
    redsky: "Red Sky",
  };
}

export const ALL_PROFILES: ProfileKey[] = Object.keys(themes) as ProfileKey[];
export const DEFAULT_PROFILE: ProfileKey = "spiderman";
