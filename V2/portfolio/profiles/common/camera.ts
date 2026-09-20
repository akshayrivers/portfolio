import { ProfileKey } from "@/data/profiles";

export interface CameraUpload {
  id: string;
  image: string;
  timestamp: Date;
  status: "pending" | "approved" | "rejected";
  profile: ProfileKey;
  metadata?: {
    filename?: string;
    size?: number;
    mimeType?: string;
  };
}

export const cameraQueue: CameraUpload[] = [];

export function addToCameraQueue(upload: Omit<CameraUpload, "id" | "timestamp" | "status">): CameraUpload {
  const newUpload: CameraUpload = {
    ...upload,
    id: crypto.randomUUID(),
    timestamp: new Date(),
    status: "pending",
  };
  cameraQueue.push(newUpload);
  return newUpload;
}

export function approveUpload(id: string): boolean {
  const idx = cameraQueue.findIndex((u) => u.id === id);
  if (idx === -1) return false;
  cameraQueue[idx].status = "approved";
  return true;
}

export function rejectUpload(id: string): boolean {
  const idx = cameraQueue.findIndex((u) => u.id === id);
  if (idx === -1) return false;
  cameraQueue[idx].status = "rejected";
  return true;
}

export function getPendingUploads(profile?: ProfileKey): CameraUpload[] {
  return cameraQueue.filter((u) => u.status === "pending" && (!profile || u.profile === profile));
}

export function getApprovedUploads(profile?: ProfileKey): CameraUpload[] {
  return cameraQueue.filter((u) => u.status === "approved" && (!profile || u.profile === profile));
}