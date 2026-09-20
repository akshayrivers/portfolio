"use client";

import { ReactNode } from "react";
import { useProfile } from "@/hooks/useProfile";
import { ProfileKey } from "@/data/profiles";
import { AppsConfig } from "@/lib/dispatch";

type AppRendererProps = {
  children: (apps: AppsConfig, profile: ProfileKey) => ReactNode;
};

export default function AppRenderer({ children }: AppRendererProps) {
  const { apps, profile } = useProfile();
  return <>{children(apps, profile)}</>;
}

export function renderAppContent(
  appId: string,
  apps: AppsConfig,
  renderers: Record<string, () => ReactNode>
): ReactNode {
  const appConfig = apps[appId];
  if (!appConfig || !appConfig.visible) return null;
  return renderers[appId]?.() ?? null;
}

export function getVisibleApps(apps: AppsConfig) {
  return Object.entries(apps)
    .filter(([, config]) => config.visible)
    .map(([id, config]) => ({ id, ...config }));
}