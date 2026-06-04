"use client";

import { useEffect, useState } from "react";

export default function RustDemo() {
  const [wasm, setWasm] = useState<any>(null);
  const [name, setName] = useState("Developer");
  const [greeting, setGreeting] = useState("");
  const [numA, setNumA] = useState(5);
  const [numB, setNumB] = useState(7);
  const [sum, setSum] = useState<number | null>(null);

  useEffect(() => {
    // Dynamically import the WASM module
    /*
    import("../wasm-lib/pkg").then((module) => {
      module.default().then(() => {
        setWasm(module);
      });
    });
    */
  }, []);

  const handleGreet = () => {
    if (wasm) {
      setGreeting(wasm.greet(name));
    }
  };

  const handleAdd = () => {
    if (wasm) {
      setSum(wasm.add(numA, numB));
    }
  };

  if (!wasm) {
    return (
      <div className="p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
        <p className="text-zinc-400 animate-pulse">Loading Rust WASM module...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-zinc-900/80 rounded-lg border border-zinc-700 shadow-xl space-y-6">
      <div className="flex items-center gap-3 border-b border-zinc-700 pb-4">
        <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center font-bold text-white">
          R
        </div>
        <h2 className="text-xl font-bold text-zinc-100">Rust WASM Power</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-zinc-400">Greeting Test</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-zinc-800 border border-zinc-600 rounded px-3 py-1 text-zinc-100 focus:outline-none focus:border-orange-500 transition-colors"
            />
            <button
              onClick={handleGreet}
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-1 rounded transition-colors"
            >
              Greet
            </button>
          </div>
          {greeting && (
            <p className="text-orange-400 font-medium animate-in fade-in slide-in-from-left-2">
              {greeting}
            </p>
          )}
        </div>

        <div className="space-y-2 pt-4 border-t border-zinc-800">
          <label className="text-sm text-zinc-400">Computation Test (Addition in Rust)</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={numA}
              onChange={(e) => setNumA(parseInt(e.target.value) || 0)}
              className="w-20 bg-zinc-800 border border-zinc-600 rounded px-3 py-1 text-zinc-100 focus:outline-none focus:border-orange-500"
            />
            <span className="text-zinc-500">+</span>
            <input
              type="number"
              value={numB}
              onChange={(e) => setNumB(parseInt(e.target.value) || 0)}
              className="w-20 bg-zinc-800 border border-zinc-600 rounded px-3 py-1 text-zinc-100 focus:outline-none focus:border-orange-500"
            />
            <button
              onClick={handleAdd}
              className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-1 rounded transition-colors"
            >
              Calculate
            </button>
          </div>
          {sum !== null && (
            <p className="text-zinc-100">
              Result from Rust: <span className="text-green-400 font-bold">{sum}</span>
            </p>
          )}
        </div>
      </div>

      <div className="text-[10px] text-zinc-500 pt-4">
        Logic executed in WebAssembly compiled from Rust source.
      </div>
    </div>
  );
}
