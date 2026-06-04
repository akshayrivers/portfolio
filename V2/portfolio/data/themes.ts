export const themes = {
  spiderman: {
    video: "/assets/wallpapers/spider-man.mp4",
    music: "/sounds/hateyourself.mp3",
  },
  ellie: {
    video: "/assets/wallpapers/ellie.mp4",
    music: "/sounds/ellie.mp3",
  },
  sekiro: {
    video: "/assets/wallpapers/sekiro.mp4",
    music: "/sounds/explosion.mp3",
  },
  musashi: {
    video: "/assets/wallpapers/musashi.mp4",
    music: "/sounds/typewriter.mp3",
  },
  manglu: {
    video: "/assets/wallpapers/coming-soon.mp4",
    music: "/sounds/myoldways.mp3",
  },
  redsky: {
    video: "/assets/wallpapers/red-sky.mp4",
    music: "/sounds/explosion.mp3",
  },
};

export type ThemeKey = keyof typeof themes;
