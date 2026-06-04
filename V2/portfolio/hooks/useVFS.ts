"use client";

import { create } from 'zustand';
import aboutFiles from '@/data/about';
import projectFiles from '@/data/projects';
import ideaFiles from '@/data/ideas';
import memoriesFiles from '@/data/memories';
import contactFiles from '@/data/contact';
import catFiles from '@/data/cat';

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
  
  // Actions
  getAbsolutePath: (path: string, currentPath: string) => string;
  getNodeByPath: (path: string, currentPath: string) => VFSNode | null;
  ls: (path: string | undefined, currentPath: string) => string[] | null;
}

const initialRoot: VFSNode = {
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
            'about': {
              name: 'about',
              type: 'dir',
              children: Object.fromEntries(aboutFiles.map(f => [f.name, { ...f, type: 'file' }]))
            },
            'projects': {
              name: 'projects',
              type: 'dir',
              children: Object.fromEntries(projectFiles.map(f => [f.name, { ...f, type: 'file' }]))
            },
            'ideas': {
              name: 'ideas',
              type: 'dir',
              children: Object.fromEntries(ideaFiles.map(f => [f.name, { ...f, type: 'file' }]))
            },
            'memories': {
              name: 'memories',
              type: 'dir',
              children: Object.fromEntries(memoriesFiles.map(f => [f.name, { ...f, type: 'file' }]))
            },
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

export const useVFS = create<VFSState>((set, get) => ({
  root: initialRoot,

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
