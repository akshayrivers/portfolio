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
  engineer: {
    chat:    { label: "Chat",     icon: "term",       visible: true },
    about:   { label: "Engineer", icon: "soda",       visible: true },
    projects:{ label: "Exploits", icon: "folder2",    visible: true },
    writings:{ label: "Terminal Diaries", icon: "writer", visible: true },
    memories:{ label: "Hackathons", icon: "memories", visible: true },
    contact: { label: "Contact",  icon: "message",    visible: true },
    camera:  { label: "Camera",   icon: "camera",     visible: true, comingSoon: true },
    settings:{ label: "Settings", icon: "settings",   visible: true },
  },
  hacker: {
    chat:    { label: "Chat",     icon: "term",       visible: true },
    about:   { label: "Hacker",   icon: "soda",       visible: true },
    projects:{ label: "Exploits", icon: "folder2",    visible: true },
    writings:{ label: "Writings", icon: "writer",     visible: true },
    memories:{ label: "Memories", icon: "memories",   visible: true },
    contact: { label: "Contact",  icon: "message",    visible: true },
    camera:  { label: "Camera",   icon: "camera",     visible: true, comingSoon: true },
    settings:{ label: "Settings", icon: "settings",   visible: true },
  },
  writer: {
    chat:    { label: "Chat",     icon: "term",       visible: true },
    about:   { label: "Writer",   icon: "soda",       visible: true },
    projects:{ label: "Works",    icon: "folder2",    visible: true },
    writings:{ label: "Writings", icon: "writer",     visible: true },
    memories:{ label: "Memories", icon: "memories",   visible: true },
    contact: { label: "Contact",  icon: "message",    visible: true },
    camera:  { label: "Camera",   icon: "camera",     visible: true, comingSoon: true },
    settings:{ label: "Settings", icon: "settings",   visible: true },
  },
  babli: {
    chat:    { label: "Chat",     icon: "term",       visible: true },
    about:   { label: "Babli",    icon: "soda",       visible: true },
    projects:{ label: "Projects", icon: "folder2",    visible: true },
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
  bindi: {
    chat:    { label: "Chat",     icon: "term",       visible: true },
    about:   { label: "Bindi",    icon: "soda",       visible: true },
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
    engineer: "Engineer",
    hacker: "Hacker",
    writer: "Writer",
    babli: "Babli",
    manglu: "Manglu",
    bindi: "Bindi",
  };
}

export const ALL_PROFILES: ProfileKey[] = Object.keys(themes) as ProfileKey[];
export const DEFAULT_PROFILE: ProfileKey = "engineer";
