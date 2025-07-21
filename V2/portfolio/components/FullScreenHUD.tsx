"use client";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function FullscreenHudFrame({ children, title }: Props) {
  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-black text-green-400 flex flex-col">
      <div className="flex justify-between items-center bg-zinc-800 p-3 border-b border-neutral-700">
        <h1 className="text-xl font-bold">{title.toUpperCase()}</h1>
        <button
          onClick={() => router.push("/")} // Back to desktop
          className="text-red-400 hover:text-red-600 font-bold text-lg"
        >
          ✕
        </button>
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
