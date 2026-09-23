import type { ProfileKey } from "@/data/profiles";
import type { ContentFile, ContentSection } from "./types";
import engineerAbout from "./engineer/about";
import engineerProjects from "./engineer/projects";
import engineerWritings from "./engineer/writings";
import engineerIdeas from "./engineer/ideas";
import engineerMemories from "./engineer/memories";
import hackerAbout from "./hacker/about";
import hackerProjects from "./hacker/projects";
import hackerWritings from "./hacker/writings";
import hackerIdeas from "./hacker/ideas";
import hackerMemories from "./hacker/memories";
import writerAbout from "./writer/about";
import writerProjects from "./writer/projects";
import writerWritings from "./writer/writings";
import writerIdeas from "./writer/ideas";
import writerMemories from "./writer/memories";

// Legacy global content — used by every profile until it gets its own curation.
import legacyAbout from "@/data/about";
import legacyProjects from "@/data/projects";
import legacyIdeas from "@/data/ideas";
import legacyMemories from "@/data/memories";

const legacyWritings: ContentFile[] = [];

const curated: Partial<
  Record<ProfileKey, Record<ContentSection, ContentFile[]>>
> = {
  engineer: {
    about: engineerAbout,
    projects: engineerProjects,
    writings: engineerWritings,
    ideas: engineerIdeas,
    memories: engineerMemories,
  },
  hacker: {
    about: hackerAbout,
    projects: hackerProjects,
    writings: hackerWritings,
    ideas: hackerIdeas,
    memories: hackerMemories,
  },
  writer: {
    about: writerAbout,
    projects: writerProjects,
    writings: writerWritings,
    ideas: writerIdeas,
    memories: writerMemories,
  },
};

const fallback: Record<ContentSection, ContentFile[]> = {
  about: legacyAbout as ContentFile[],
  projects: legacyProjects as ContentFile[],
  writings: legacyWritings,
  ideas: legacyIdeas as ContentFile[],
  memories: legacyMemories as ContentFile[],
};

// Single source of truth for per-profile content.
// Profiles without curation fall back to the legacy global files.
export function getContent(
  profile: ProfileKey,
  section: ContentSection
): ContentFile[] {
  return curated[profile]?.[section] ?? fallback[section];
}
