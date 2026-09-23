# AGENTS.md — portfolio (V2)

Next.js 15 + React 19 portfolio with two shells: desktop OS-like UI and mobile phone UI.
Repo root is `Desktop/dev/portfolio` (contains `V1/` legacy, `V2/` active). This file covers the
active project at `V2/portfolio` (where `package.json` lives).

## Stack / commands

- Next 15.2.8, React 19, Tailwind 3.4, framer-motion, lucide-react, zustand.
- `npm run dev` (turbopack), `npm run build` (= `next build && next-sitemap`), `npm run start`.
- `npm run build` rewrites `public/sitemap-0.xml` / `public/sitemap.xml` — expect diff noise there; not meaningful.
- Build skips linting. Type validity is checked during build. No `typecheck` script; use build for verification.
- Do not commit / push / create PRs unless explicitly asked.

## Architecture

- Single source of truth for profiles: `data/themes.ts` (`themes`, `ThemeKey = keyof typeof themes`).
  Each entry: `video`, `thumbnail`, `music`, `musicTitle`, `musicArtist`, `musicArt`.
- `data/profiles.ts` (`ProfileKey = keyof typeof themes`) holds display `name`/`emoji`/`description`/`tagline`.
- `lib/dispatch.ts` holds `allApps: Record<ProfileKey, AppsConfig>`, `getAppsConfig()`,
  `getProfileNames()`, `ALL_PROFILES`, `DEFAULT_PROFILE = "engineer"`.
- `hooks/useProfile.tsx` (`ProfileProvider`) holds active profile; `switchProfile` has a 1s delayed set.
- Desktop: `components/MainDesktop.tsx` keeps its own `currentTheme: ThemeKey` (localStorage `theme`),
  music = `themes[currentTheme].music` via `components/AudioPlayer.tsx`. `useProfile` is present but
  theme selection is independent of profile.
- Mobile: `components/mobile/PhoneScreen.tsx` → `PhoneMusicProvider` → `PhoneMusicPlayer`.
  Profile switch must update BOTH `switchProfile()` and `setTrack()` together (`handleProfileSwitch`).
- Asset filenames (`public/assets/wallpapers/ellie.mp4`, `sekiro.jpg`, `musashi.jpg`, etc.) are intentionally
  NOT renamed — only profile keys and display names changed. Do not rename public assets when renaming profiles.
- `profiles/<old-name>/apps.ts` directories (spiderman, ellie, sekiro, musashi, manglu, redsky) are legacy
  and NOT imported anywhere (verified via grep). Only `lib/dispatch.ts` `allApps` is used. Cleanup candidate;
  do not rely on those files.

## Current profile keys (post-rename)

| key        | display  | assets still use old filenames |
|------------|----------|--------------------------------|
| `engineer` | Engineer | spider-man.*                   |
| `babli`    | Babli    | ellie.*                        |
| `hacker`   | Hacker   | sekiro.*                       |
| `writer`   | Writer   | musashi.*                      |
| `manglu`   | Manglu   | coming-soon.*                  |
| `bindi`    | Bindi    | red-sky.*                      |

## Completed work log

### 1. Profile rename (committed, `2b8f988 fix:profile name changes`)
Old → new keys: spiderman→engineer, ellie→babli, sekiro→hacker, musashi→writer, manglu→manglu, redsky→bindi.
Touched: `data/themes.ts`, `data/profiles.ts`, `lib/dispatch.ts` (keys + labels + `DEFAULT_PROFILE`),
`components/MainDesktop.tsx` (default theme), `components/mobile/PhoneProfileSelect.tsx` (auto-select),
`components/mobile/PhoneScreen.tsx` (`profileNames`), `components/mobile/PhoneMusicProvider.tsx`
(`profileOrder`, default track). Asset paths left as-is. Build passed.

### 2. Mobile music ↔ profile mapping fix (UNCOMMITTED as of 2026-09-23)
Problem: mobile music did not follow profile like desktop; `PhoneMusicPlayer` had a hardcoded queue with
stale keys plus an independent `currentQueueIndex` that never synced on profile switch; initial
`PhoneProfileSelect` choice was swallowed (`onSelect={() => setShowProfileSelect(false)}`).
Touched (uncommitted):
- `components/mobile/PhoneMusicProvider.tsx` — `profileOrder` derived from `Object.keys(themes)`;
  audio-src sync via effect on `currentTrack.src` (autoplay only if already playing); `play()` no longer
  resets src on resume; `next`/`prev`/`setTrack` are pure state updates (effect handles playback); volume
  synced via effect; `setTrack` no-ops if already on that profile.
- `components/mobile/PhoneMusicPlayer.tsx` — queue derived with `useMemo` from `themes` (same mapping as
  desktop); display index computed from `currentTrack.profile` (no local index state); queue click is just
  `setTrack(q.profile)`; fixed nested-`<button>` in collapsed view; removed absolute overlay button.
- `components/mobile/PhoneScreen.tsx` — added `handleProfileSwitch` + `handleInitialSelect` (`useCallback`)
  so initial select calls `switchProfile(selected)` + `setTrack(selected)` before hiding the selector.
Verified with `npm run build` (passes).

## Conventions / gotchas

- To add/rename a profile: edit `data/themes.ts` keys only; `ProfileKey`, `profiles.ts`, `dispatch.ts`,
  `profileOrder`, and mobile queue all derive from it. Never hardcode a profile list elsewhere.
- Mobile queue must stay derived from `themes` — do not reintroduce a hardcoded track list.
- `switchProfile` is async (1s timeout); `setTrack` is immediate. UI showing `profileNames[profile]`
  lags track change by ~1s by design.
- `PhoneProfileSelect` auto-selects `engineer` after 3s; its `useEffect` depends on `onSelect`, so the
  parent handler must be stable (`useCallback`) or the timer resets on every render.
- Mobile audio requires user interaction (`userInteracted` gate); `PhoneScreenInner` sets it on click/touch.

### 3. Engineer content curation (UNCOMMITTED as of 2026-09-23)
Recruiter-facing engineer profile: ALL coding incl. AI + Yonro + tech blogs; writings = Medium posts +
project READMEs + architecture decisions (stories wait for writer); ideas = inferred/to-remember/unimplemented;
resume stays shared. Verified 5 disputed claims against code (DNS v1 recursion/cache/AAAA/poison/spoof/telemetry,
Warrant dashboard + live deploy, Yonro 7-suite bench harness, 20+ command variants, B-tree Criterion harness).
New layer: `data/content/{types,index,engineer/{about,projects,writings,ideas,memories}}` with
`getContent(profile, section)` (uncurated profiles fall back to legacy globals); `hooks/useVFS.ts` is now
profile-aware (`setProfile`, synced from `MainDesktop` + `PhoneScreenInner`); mobile pages read via `getContent`.
Babli/Manglu = story-character easter eggs, Bindi = philosophy (later). Raw dump: `content/inbox/dump.md`
(working material, not shipped). Secrets in chat are never stored — rotate GITHUB_TOKEN after use.

### 4. Hacker profile curation (UNCOMMITTED as of 2026-09-23)
Night-shift offensive profile: Jr Pentester path completed, labs/CTFs/own-hardware ethics line. Technique-only
writings (all flags/passwords/answers stripped; 2 known room-answer errors fixed in curation); afhds_decoder flagship
with verified-vs-ongoing split (synthetic TX IDs and realtime %%% stripped); packet_sniffer with shipped-vs-roadmap
honesty. New: `data/content/hacker/{about,projects,writings,ideas,memories}` wired via existing selector —
no code changes needed. DEFERRED: notes/ tools+cheatsheets (needs fresh GITHUB_TOKEN, old one 401s),
proxy write-up (user-deferred). Memories are proposed moments — user to correct with real ones.

## Next / planned

- Cheatsheets pass (fresh token) + proxy decision revisit.
- Writer profile curation (stories: Feast on Life, Cigarettes, Avarice; Yonro whimsy cross-links).
- Babli / Manglu (story easter eggs) + Bindi (philosophy) curation.
- Embed full Medium post texts when finalized (currently link-entries in engineer writings).
- B-tree 40ms + Yonro ns figures: republish from CI once CI runs benches.
