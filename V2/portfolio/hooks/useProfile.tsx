"use client";

import { createContext, useContext, useState, useMemo, useCallback } from "react";
import { ThemeKey, themes } from "@/data/themes";
import { ProfileKey, profiles } from "@/data/profiles";
import { getAppsConfig, DEFAULT_PROFILE } from "@/lib/dispatch";

type ProfileState = {
  profile: ProfileKey;
  profileName: string;
  apps: ReturnType<typeof getAppsConfig>;
  loading: boolean;
  switchProfile: (profile: ProfileKey) => void;
};

const ProfileContext = createContext<ProfileState | null>(null);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<ProfileKey>(DEFAULT_PROFILE);
  const [loading, setLoading] = useState(false);

  const switchProfile = useCallback((newProfile: ProfileKey) => {
    setLoading(true);
    setTimeout(() => {
      setProfile(newProfile);
      setLoading(false);
    }, 1000);
  }, []);

  const value = useMemo<ProfileState>(() => ({
    profile,
    profileName: profiles[profile].name,
    apps: getAppsConfig(profile),
    loading,
    switchProfile,
  }), [profile, loading, switchProfile]);

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile(): ProfileState {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
}

export function useProfileLoading(): boolean {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfileLoading must be used within ProfileProvider");
  return ctx.loading;
}
