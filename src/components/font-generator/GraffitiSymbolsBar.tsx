"use client";

import React, { useState } from "react";
import { copyText } from "@/lib/clipboard";

interface SymbolItem {
  symbol: string;
  name: string;
}

const URBAN_SYMBOLS: Record<string, SymbolItem[]> = {
  "Coronas y Kings": [
    { symbol: "👑", name: "Corona Real" },
    { symbol: "♚", name: "Rey Negro" },
    { symbol: "♛", name: "Reina Negra" },
    { symbol: "♔", name: "Rey Blanco" },
    { symbol: "♕", name: "Reina Blanca" },
    { symbol: "亗", name: "Corona Tribal" },
  ],
  "Fuego y Calles": [
    { symbol: "🔥", name: "Fuego Burner" },
    { symbol: "⚡", name: "Rayo Street" },
    { symbol: "💥", name: "Explosion Boom" },
    { symbol: "💧", name: "Gota de Spray" },
    { symbol: "💣", name: "Bomba Bombing" },
    { symbol: "🧨", name: "Dinamita" },
  ],
  "Estrellas y Brillos": [
    { symbol: "★", name: "Estrella Solida" },
    { symbol: "☆", name: "Estrella Lineal" },
    { symbol: "✦", name: "Destello 4 Puntas" },
    { symbol: "✧", name: "Brillo Fino" },
    { symbol: "✪", name: "Estrella en Circulo" },
    { symbol: "✯", name: "Estrella Estilizada" },
  ],
  "Underground y Dark": [
    { symbol: "☠", name: "Calavera Huesos" },
    { symbol: "💀", name: "Craneo" },
    { symbol: "⚔️", name: "Espadas Cruzadas" },
    { symbol: "🗡️", name: "Daga Urbana" },
    { symbol: "⛓️", name: "Cadenas" },
    { symbol: "✖", name: "Cruz Tag" },
  ],
  "Marcos y Brackets": [
    { symbol: "『 』", name: "Brackets Japoneses" },
    { symbol: "【 】", name: "Corchetes Gruesos" },
    { symbol: "〖 〗", name: "Marcos Huecos" },
    { symbol: "꧁ ꧂", name: "Alas Ornamentales" },
    { symbol: "« »", name: "Comillas Urbanas" },
    { symbol: "⟨ ⟩", name: "Angulos" },
  ],
};

export function GraffitiSymbolsBar() {
  const [activeTab, setActiveTab] = useState<string>("Coronas y Kings");
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);

  const handleCopy = async (symbol: string) => {
    const success = await copyText(symbol);
    if (success) {
      setCopiedSymbol(symbol);
      setTimeout(() => setCopiedSymbol(null), 1800);
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 inline-block mb-1">
            Simbolos para Tags y Nicks
          </span>
          <h3 className="text-lg sm:text-xl font-black text-white">
            Paleta de Simbolos Callejeros para Copiar
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Toca cualquier simbolo para copiarlo y pegarlo alrededor de tu nombre en Instagram o Free Fire.
          </p>
        </div>

        {copiedSymbol && (
          <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs flex items-center gap-1.5 shrink-0 animate-pulse">
            <span>✓ Copiado: {copiedSymbol}</span>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        {Object.keys(URBAN_SYMBOLS).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveTab(category)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === category
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Symbols Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {URBAN_SYMBOLS[activeTab]?.map((item) => {
          const isCopied = copiedSymbol === item.symbol;
          return (
            <button
              key={item.symbol}
              type="button"
              onClick={() => handleCopy(item.symbol)}
              title={`Copiar ${item.name}`}
              className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 group ${
                isCopied
                  ? "bg-emerald-500/20 border-emerald-400 ring-2 ring-emerald-500/30"
                  : "bg-slate-800/80 border-slate-700 hover:border-cyan-400 hover:bg-slate-800"
              }`}
            >
              <span className="text-2xl sm:text-3xl transition-transform group-hover:scale-115">
                {item.symbol}
              </span>
              <span className="text-[10px] text-slate-400 group-hover:text-cyan-300 truncate max-w-full">
                {isCopied ? "¡Copiado!" : item.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
