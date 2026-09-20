import Link from "next/link";

const asciiArt = [
  "  _    _      _ _   _       _   _     _   _      _ _   _  ",
  " | |  | |    (_) | (_)   | | | |   | \\ | |    (_) | | | ",
  " | |__| | ___  _ | |_ ___| |_| |_  |  \\| | ___ _ _| |_| |",
  " |  __  |/ _ \\| || | __/ _ \\___  _| | . ` | |/ _ \\ '_|  _ |",
  " | |  | | (_) | || | ||  __/   | |   | |\\  |  __/ | | | | |",
  " |_|  |_|\\___/|_||_|\\__\\___|   |_|   |_| \\_|\\___|_| |_| |_|",
];

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bgDark text-neon font-mono p-8">
      <div className="text-center">
        <div className="text-orange-500 text-xs md:text-sm leading-[1.2] mb-6 select-none whitespace-pre font-mono">
          {asciiArt.join("\n")}
        </div>
        <div className="mt-4">
          <p className="text-green-400 text-xl md:text-2xl font-bold mb-1">
            404 - Prison Of Conscience
          </p>
          <p className="text-green-400/70 text-sm md:text-base">
            Manglu&apos;s Home doesn&apos;t have that resource.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-zinc-500 text-sm">
            The void stares back... but you can go back.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-orange-500/20 border border-orange-500/50 text-orange-400 hover:bg-orange-500/30 rounded-md transition-colors text-sm font-bold"
          >
            ← Return to Desktop
          </Link>
        </div>
      </div>
    </div>
  );
}
