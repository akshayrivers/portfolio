"use client";

import { useState } from "react";
import useFileContent from "@/hooks/useFileContent"; // Add this
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type File = {
  name: string;
  content?: string;
  src?: string;
  type?: "video" | "audio" | "image" | "markdown" | string;
};

type Props = {
  title: string;
  files: File[];
};

function getFileType(name: string): "md" | "txt" | "video" | "unknown" {
  if (name.endsWith(".md")) return "md";
  if (name.endsWith(".txt")) return "txt";
  if (name.endsWith(".mp4")) return "video";
  return "unknown";
}

export default function ExplorerView({ title, files }: Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileType = selectedFile ? getFileType(selectedFile.name) : null;
  const shouldFetch =
    (fileType === "md" || fileType === "txt") && !!selectedFile?.src;

  const { content, loading } = useFileContent(
    shouldFetch ? selectedFile?.src! : null
  );

  return (
    <div className="flex h-[75vh] w-full overflow-hidden rounded-lg shadow-lg border border-gray-700 bg-zinc-900">
      {/* Sidebar */}
      <div className="w-1/3 bg-black bg-opacity-20 p-3 border-r border-gray-700 overflow-y-auto">
        <h2 className="text-green-400 font-bold mb-3">{title}/</h2>
        <ul className="space-y-1 text-sm">
          {files.map((file) => (
            <li
              key={file.name}
              onClick={() => setSelectedFile(file)}
              className={`cursor-pointer hover:bg-zinc-800 p-1 rounded transition text-white ${
                selectedFile?.name === file.name ? "bg-zinc-800" : ""
              }`}
            >
              {file.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-zinc-950 p-4 overflow-auto relative">
        {selectedFile ? (
          <div>
            {/* Path display */}
            <div className="text-sm text-gray-400 mb-2 border-b border-gray-700 pb-1">
              /{title}/{selectedFile.name}
            </div>

            {/* File viewer */}
            {fileType === "video" && selectedFile.src ? (
              <video controls className="w-full h-full max-h-[60vh] rounded-lg">
                <source src={selectedFile.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : fileType === "md" ? (
              <div className="prose prose-invert max-w-none text-green-300">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {selectedFile.content ?? content ?? "Loading..."}
                </ReactMarkdown>
              </div>
            ) : fileType === "txt" ? (
              <pre className="whitespace-pre-wrap text-sm text-green-300">
                {selectedFile.content ?? content ?? "Loading..."}
              </pre>
            ) : (
              <div className="text-red-400">Unsupported file type.</div>
            )}
          </div>
        ) : (
          <div className="text-gray-500 italic">
            Select a file from the sidebar to view.
          </div>
        )}
      </div>
    </div>
  );
}
