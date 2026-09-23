export const themes = {
  engineer: {
    video: "/assets/wallpapers/spider-man.mp4",
    thumbnail: "/assets/thumbnails/spider-man.jpg",
    music: "/sounds/hateyourself.mp3",
    musicTitle: "Hate Yourself",
    musicArtist: "TV Girl",
    musicArt: "/assets/thumbnails/spider-man.jpg",
  },
  hacker: {
    video: "/assets/wallpapers/hacker.mp4",
    thumbnail: "/assets/thumbnails/hacker.jpg",
    music: "/sounds/Rooh.mp3",
    musicTitle: "Rooh",
    musicArtist: "Bohemia",
    musicArt: "/assets/thumbnails/hacker.jpg",
  },
  writer: {
    video: "/assets/wallpapers/writer1.mp4",
    thumbnail: "/assets/thumbnails/writer1.jpg",
    music: "/sounds/marcel.mp3",
    musicTitle: "Marcel",
    musicArtist: "Her's (they are so freaking cool)",
    musicArt: "/assets/thumbnails/writer1.jpg",
  },
  babli: {
    video: "/assets/wallpapers/ellie.mp4",
    thumbnail: "/assets/thumbnails/ellie.jpg",
    music: "/sounds/ellie.mp3",
    musicTitle: "Ellie's Theme",
    musicArtist: "Gustavo Santaolalla",
    musicArt: "/assets/thumbnails/ellie.jpg",
  },
  manglu: {
    video: "/assets/wallpapers/manglu.mp4",
    thumbnail: "/assets/thumbnails/manglu.jpg",
    music: "/sounds/manglu.mp3",
    musicTitle: "Fourth of July",
    musicArtist: "Sufjan Stevens",
    musicArt: "/assets/thumbnails/manglu.jpg",
  },
  bindi: {
    video: "/assets/wallpapers/bindi.mp4",
    thumbnail: "/assets/thumbnails/bindi.jpg",
    music: "/sounds/bindi.mp3",
    musicTitle: "Be Quiet And Drive (Far Away)",
    musicArtist: "Deftones",
    musicArt: "/assets/thumbnails/bindi.jpg",
  },
};

export type ThemeKey = keyof typeof themes;
