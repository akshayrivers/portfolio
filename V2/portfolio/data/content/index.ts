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
import babliAbout from "./babli/about";
import babliProjects from "./babli/projects";
import babliWritings from "./babli/writings";
import babliIdeas from "./babli/ideas";
import babliMemories from "./babli/memories";
import mangluAbout from "./manglu/about";
import mangluProjects from "./manglu/projects";
import mangluWritings from "./manglu/writings";
import mangluIdeas from "./manglu/ideas";
import mangluMemories from "./manglu/memories";
import bindiAbout from "./bindi/about";
import bindiProjects from "./bindi/projects";
import bindiWritings from "./bindi/writings";
import bindiIdeas from "./bindi/ideas";
import bindiMemories from "./bindi/memories";

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
  babli: {
    about: babliAbout,
    projects: babliProjects,
    writings: babliWritings,
    ideas: babliIdeas,
    memories: babliMemories,
  },
  manglu: {
    about: mangluAbout,
    projects: mangluProjects,
    writings: mangluWritings,
    ideas: mangluIdeas,
    memories: mangluMemories,
  },
  bindi: {
    about: bindiAbout,
    projects: bindiProjects,
    writings: bindiWritings,
    ideas: bindiIdeas,
    memories: bindiMemories,
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
