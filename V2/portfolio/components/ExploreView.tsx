"use client";

import { useEffect, useState, useMemo } from "react";
import useFileContent from "@/hooks/useFileContent";
import { useVFS, VFSNode } from "@/hooks/useVFS";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  BookOpen,
  FileText,
  FileVideo,
  FileAudio,
  ImageIcon,
  FileQuestion,
  Globe,
  Terminal,
  Folder,
} from "lucide-react";

type Props = {
  title: string;
  path: string; // The base path for this explorer window
  onTriggerCommand?: (command: string) => void;
};

function getFileType(
  name: string,
  node?: VFSNode
):
  | "md"
  | "txt"
  | "video"
  | "image"
  | "audio"
  | "url"
  | "sh"
  | "externalVideo"
  | "dir"
  | "unknown" {
  if (node?.type === "dir") return "dir";
  const src = node?.src;
  if (src && /(youtube\.com|youtu\.be|vimeo\.com)/i.test(src))
    return "externalVideo";
  if (name.endsWith(".md")) return "md";
  if (name.endsWith(".txt")) return "txt";
  if (name.endsWith(".mp4")) return "video";
  if (/\.(png|jpe?g|gif|webp)$/i.test(name)) return "image";
  if (name.endsWith(".mp3")) return "audio";
  if (name.endsWith(".url")) return "url";
  if (name.endsWith(".sh")) return "sh";
  return "unknown";
}

function getFileIcon(name: string, node?: VFSNode) {
  const type = getFileType(name, node);
  const className = "mr-2 flex-shrink-0";
  switch (type) {
    case "dir":
      return <Folder size={16} className={`text-yellow-500 ${className}`} />;
    case "md":
      return <BookOpen size={16} className={`text-green-400 ${className}`} />;
    case "txt":
      return <FileText size={16} className={`text-blue-400 ${className}`} />;
    case "video":
      return <FileVideo size={16} className={`text-purple-400 ${className}`} />;
    case "image":
      return <ImageIcon size={16} className={`text-pink-400 ${className}`} />;
    case "audio":
      return <FileAudio size={16} className={`text-yellow-300 ${className}`} />;
    case "url":
    case "externalVideo":
      return <Globe size={16} className={`text-cyan-400 ${className}`} />;
    case "sh":
      return <Terminal size={16} className={`text-orange-400 ${className}`} />;
    default:
      return (
        <FileQuestion size={16} className={`text-gray-400 ${className}`} />
      );
  }
}

function getDomainFromUrl(url: string): string | null {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

function embedUrl(src: string): string {
  if (src.includes("youtube.com/watch?v=")) {
    return src.replace("watch?v=", "embed/");
  }
  if (src.includes("youtu.be/")) {
    const id = src.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${id}`;
  }
  return src;
}

export default function ExplorerView({
  title,
  path,
  onTriggerCommand,
}: Props) {
  const { getNodeByPath } = useVFS();
  const [currentViewPath, setCurrentViewPath] = useState(path);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const currentNode = getNodeByPath(currentViewPath, currentViewPath);
  const files = useMemo(() => {
    if (currentNode?.type === "dir" && currentNode.children) {
        return Object.entries(currentNode.children).map(([_, node]) => ({
            ...node
        }));
    }
    return [];
  }, [currentNode]);

  const selectedFile = useMemo(() => {
    if (!selectedFileName) return files[0] || null;
    return files.find(f => f.name === selectedFileName) || files[0] || null;
  }, [selectedFileName, files]);

  useEffect(() => {
    if (files.length > 0 && !selectedFileName) {
        setSelectedFileName(files[0].name);
    }
  }, [files, selectedFileName]);

  const fileType = selectedFile
    ? getFileType(selectedFile.name, selectedFile)
    : null;

  const shouldFetch =
    (fileType === "md" || fileType === "txt") && !!selectedFile?.src;

  const { content, loading } = useFileContent(
    shouldFetch ? selectedFile?.src! : null
  );

  const handleFileClick = (file: any) => {
    if (file.type === 'dir') {
        const nextPath = currentViewPath === '/' ? `/${file.name}` : `${currentViewPath}/${file.name}`;
        setCurrentViewPath(nextPath);
        setSelectedFileName(null);
    } else {
        setSelectedFileName(file.name);
        if (file.name.endsWith(".sh") && onTriggerCommand) {
            onTriggerCommand(file.name);
        }
    }
  };

  const handleBack = () => {
    if (currentViewPath === '/') return;
    const parts = currentViewPath.split('/').filter(Boolean);
    parts.pop();
    const nextPath = '/' + parts.join('/');
    setCurrentViewPath(nextPath);
    setSelectedFileName(null);
  };

  return (
    <div className="flex h-[90vh] w-full overflow-hidden rounded-lg shadow-lg border border-gray-700 bg-zinc-900">
      {/* Sidebar */}
      <div className="w-1/3 max-h-[90vh] overflow-y-auto bg-black bg-opacity-20 p-3 border-r border-gray-700">
        <div className="flex items-center justify-between mb-3">
            <h2 className="text-green-400 font-bold truncate">{currentViewPath}</h2>
            {currentViewPath !== '/' && (
                <button 
                    onClick={handleBack}
                    className="text-xs text-zinc-400 hover:text-white bg-zinc-800 px-2 py-1 rounded"
                >
                    Back
                </button>
            )}
        </div>
        <ul className="space-y-1 text-sm">
          {files.map((file) => (
            <li
              key={file.name}
              onClick={() => handleFileClick(file)}
              className={`cursor-pointer flex items-center hover:bg-zinc-800 p-1 rounded transition text-white ${
                selectedFile?.name === file.name ? "bg-zinc-800" : ""
              }`}
            >
              {getFileIcon(file.name, file as VFSNode)}
              {file.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Viewer */}
      <div className="flex-1 bg-zinc-950 p-4 overflow-auto relative">
        {selectedFile && selectedFile.type !== 'dir' ? (
          <div>
            <div className="text-sm text-gray-400 mb-2 border-b border-gray-700 pb-1 font-mono">
              {currentViewPath}/{selectedFile.name}
            </div>

            {loading ? (
              <div className="text-green-300 animate-pulse">Loading...</div>
            ) : fileType === "externalVideo" && selectedFile.src ? (
              <div className="w-full aspect-video mb-3 border border-zinc-700 rounded overflow-hidden">
                <iframe
                  src={embedUrl(selectedFile.src)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  title={selectedFile.name}
                />
              </div>
            ) : fileType === "video" && selectedFile.src ? (
              <video
                controls
                className="w-full max-h-[60vh] rounded-lg border border-zinc-700"
              >
                <source src={selectedFile.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : fileType === "image" && selectedFile.src ? (
              <img
                src={selectedFile.src}
                alt={selectedFile.name}
                className="max-w-full max-h-[60vh] object-contain rounded-lg border border-zinc-700"
              />
            ) : fileType === "audio" && selectedFile.src ? (
              <audio controls className="w-full mt-2">
                <source src={selectedFile.src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            ) : fileType === "sh" ? (
              <div className="text-orange-300">
                <p>
                  <strong>{selectedFile.name}</strong> is being executed in a
                  new terminal...
                </p>
              </div>
            ) : fileType === "md" ? (
              <div className="prose prose-invert max-w-none text-green-300">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {selectedFile.content ?? content ?? "Loading..."}
                </ReactMarkdown>
              </div>
            ) : fileType === "txt" ? (
              selectedFile.name.toLowerCase().includes("email") &&
              (selectedFile.content ?? content)?.includes("@") ? (
                <div className="text-green-300">
                  <p className="mb-2">Click to email:</p>
                  <a
                    href={`mailto:${selectedFile.content ?? content}`}
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    {selectedFile.content ?? content}
                  </a>
                </div>
              ) : (
                <pre className="whitespace-pre-wrap text-sm text-green-300">
                  {selectedFile.content ?? content ?? "Loading..."}
                </pre>
              )
            ) : fileType === "url" ? (
              selectedFile.content &&
              /(youtube\.com|youtu\.be|vimeo\.com)/i.test(
                selectedFile.content
              ) ? (
                <div className="w-full aspect-video mb-3 border border-zinc-700 rounded overflow-hidden">
                  <iframe
                    src={embedUrl(selectedFile.content)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    title={selectedFile.name}
                  />
                </div>
              ) : (
                <div className="text-green-300 space-y-3">
                  <p className="mb-2">Click to open link in new tab:</p>
                  <div className="flex items-center space-x-3">
                    {getDomainFromUrl(selectedFile.content!) && (
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${getDomainFromUrl(
                          selectedFile.content!
                        )}`}
                        alt="favicon"
                        className="w-5 h-5"
                      />
                    )}
                    <a
                      href={selectedFile.content}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline hover:text-blue-300 transition break-all"
                    >
                      {selectedFile.content}
                    </a>
                  </div>
                </div>
              )
            ) : (
              <div className="text-red-400">Unsupported file type.</div>
            )}
          </div>
        ) : selectedFile?.type === 'dir' ? (
            <div className="flex items-center justify-center h-full text-zinc-500 italic">
                Double click folder to open, or select a file to view content.
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
