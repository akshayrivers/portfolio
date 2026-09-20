export const themes = {
  spiderman: {
    video: "/assets/wallpapers/spider-man.mp4",
    thumbnail: "/assets/thumbnails/spider-man.jpg",
    music: "/sounds/hateyourself.mp3",
    musicTitle: "Hate Yourself",
    musicArtist: "softscars",
    musicArt: "/assets/thumbnails/spider-man.jpg",
  },
  ellie: {
    video: "/assets/wallpapers/ellie.mp4",
    thumbnail: "/assets/thumbnails/ellie.jpg",
    music: "/sounds/ellie.mp3",
    musicTitle: "Ellie's Theme",
    musicArtist: "Gustavo Santaolalla",
    musicArt: "/assets/thumbnails/ellie.jpg",
  },
  sekiro: {
    video: "/assets/wallpapers/sekiro.mp4",
    thumbnail: "/assets/thumbnails/sekiro.jpg",
    music: "/sounds/explosion.mp3",
    musicTitle: "Sekiro Soundtrack",
    musicArtist: "Yuka Kitamura",
    musicArt: "/assets/thumbnails/sekiro.jpg",
  },
  musashi: {
    video: "/assets/wallpapers/musashi.mp4",
    thumbnail: "/assets/thumbnails/musashi.jpg",
    music: "/sounds/typewriter.mp3",
    musicTitle: "Typewriter",
    musicArtist: "Unknown",
    musicArt: "/assets/thumbnails/musashi.jpg",
  },
  manglu: {
    video: "/assets/wallpapers/coming-soon.mp4",
    thumbnail: "/assets/thumbnails/coming-soon.jpg",
    music: "/sounds/myoldways.mp3",
    musicTitle: "My Old Ways",
    musicArtist: "Unknown",
    musicArt: "/assets/thumbnails/coming-soon.jpg",
  },
  redsky: {
    video: "/assets/wallpapers/red-sky.mp4",
    thumbnail: "/assets/thumbnails/red-sky.jpg",
    music: "/sounds/explosion.mp3",
    musicTitle: "Red Sky",
    musicArtist: "Unknown",
    musicArt: "/assets/thumbnails/red-sky.jpg",
  },
};

export type ThemeKey = keyof typeof themes;
