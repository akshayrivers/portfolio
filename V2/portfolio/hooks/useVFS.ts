"use client";

import { create } from 'zustand';
import contactFiles from '@/data/contact';
import catFiles from '@/data/cat';
import { getContent } from '@/data/content';
import type { ContentFile } from '@/data/content/types';
import { DEFAULT_PROFILE } from '@/lib/dispatch';
import type { ProfileKey } from '@/data/profiles';

export type FileType = 'file' | 'dir' | 'exec';

export interface VFSNode {
  name: string;
  type: FileType;
  content?: string;
  src?: string;
  children?: Record<string, VFSNode>;
}

interface VFSState {
  root: VFSNode;
  vfsProfile: ProfileKey;

  // Actions
  setProfile: (profile: ProfileKey) => void;
  getAbsolutePath: (path: string, currentPath: string) => string;
  getNodeByPath: (path: string, currentPath: string) => VFSNode | null;
  ls: (path: string | undefined, currentPath: string) => string[] | null;
}

function buildVinodChildren(profile: ProfileKey): Record<string, VFSNode> {
  const toFiles = (files: ContentFile[]): Record<string, VFSNode> =>
    Object.fromEntries(
      files.map((f): [string, VFSNode] => [
        f.name,
        { name: f.name, type: 'file', content: f.content, src: f.src },
      ])
    );
  return {
    'about': {
      name: 'about',
      type: 'dir',
      children: toFiles(getContent(profile, 'about'))
    },
    'projects': {
      name: 'projects',
      type: 'dir',
      children: toFiles(getContent(profile, 'projects'))
    },
    'ideas': {
      name: 'ideas',
      type: 'dir',
      children: toFiles(getContent(profile, 'ideas'))
    },
    'memories': {
      name: 'memories',
      type: 'dir',
      children: toFiles(getContent(profile, 'memories'))
    },
  };
}

// Contact + secret stay global across profiles; only the five
// content sections rebuild per profile via getContent().
function buildRoot(profile: ProfileKey): VFSNode {
  return {
    name: '/',
    type: 'dir',
    children: {
      'home': {
        name: 'home',
        type: 'dir',
        children: {
          'vinod': {
            name: 'vinod',
            type: 'dir',
            children: {
              ...buildVinodChildren(profile),
              'contact': {
                name: 'contact',
                type: 'dir',
                children: Object.fromEntries(contactFiles.map(f => [f.name, { ...f, type: f.name.endsWith('.sh') ? 'exec' : 'file' }]))
              },
              'secret': {
                name: 'secret',
                type: 'dir',
                children: Object.fromEntries(catFiles.map(f => [f.name, { ...f, type: 'file' }]))
              }
            }
          }
        }
      },
      'bin': {
        name: 'bin',
        type: 'dir',
        children: {
          'help': { name: 'help', type: 'exec' },
          'clear': { name: 'clear', type: 'exec' },
          'ls': { name: 'ls', type: 'exec' },
          'cd': { name: 'cd', type: 'exec' },
          'cat': { name: 'cat', type: 'exec' },
          'echo': { name: 'echo', type: 'exec' },
          'pwd': { name: 'pwd', type: 'exec' },
        }
      }
    }
  };
}

export const useVFS = create<VFSState>((set, get) => ({
  root: buildRoot(DEFAULT_PROFILE),
  vfsProfile: DEFAULT_PROFILE,

  setProfile: (profile: ProfileKey) => {
    if (get().vfsProfile === profile) return;
    set({ vfsProfile: profile, root: buildRoot(profile) });
  },

  getAbsolutePath: (path: string, currentPath: string) => {
    if (path.startsWith('/')) {
        // Normalize absolute path (remove duplicate slashes, handle ..)
        const parts = path.split('/').filter(Boolean);
        const stack: string[] = [];
        for (const p of parts) {
            if (p === '..') stack.pop();
            else if (p !== '.') stack.push(p);
        }
        return '/' + stack.join('/');
    }
    
    const parts = (currentPath + '/' + path).split('/').filter(Boolean);
    const stack: string[] = [];
    for (const p of parts) {
        if (p === '..') stack.pop();
        else if (p !== '.') stack.push(p);
    }
    return '/' + stack.join('/');
  },

  getNodeByPath: (path: string, currentPath: string) => {
    const absPath = get().getAbsolutePath(path, currentPath);
    if (absPath === '/') return get().root;
    
    const parts = absPath.split('/').filter(Boolean);
    let current = get().root;

    for (const part of parts) {
      if (current.children && current.children[part]) {
        current = current.children[part];
      } else {
        return null;
      }
    }
    return current;
  },

  ls: (path: string | undefined, currentPath: string) => {
    const node = get().getNodeByPath(path || currentPath, currentPath);
    if (node && node.type === 'dir' && node.children) {
      return Object.keys(node.children);
    }
    return null;
  },
}));
