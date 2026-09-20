"use client";

import React, { useState } from "react";
import { copyText } from "@/lib/clipboard";
import { FREE_FIRE_SYMBOLS } from "@/lib/unicode/freeFireData";

interface FreeFireClanCustomizerPanelProps {
  initialName?: string;
  onCustomNameCopied?: (name: string) => void;
}

const SYMBOL_CATEGORIES_CLANES = [
  { id: "coronas", label: "Coronas", icon: "👑" },
  { id: "gamer", label: "Gamer", icon: "🎮" },
  { id: "armas", label: "Armas", icon: "⚔️" },
  { id: "estrellas", label: "Estrellas", icon: "★" },
  { id: "aesthetic", label: "Decorativos", icon: "✦" },
  { id: "minimalistas", label: "Minimalistas", icon: "▫️" },
  { id: "separadores", label: "Separadores", icon: "丨" },
  { id: "flechas", label: "Flechas", icon: "➔" },
];

export const FreeFireClanCustomizerPanel: React.FC<FreeFireClanCustomizerPanelProps> = ({
  initialName = "",
  onCustomNameCopied,
}) => {
  const [baseText, setBaseText] = useState(
    initialName.replace(/[^\wáéíóúüñÁÉÍÓÚÜÑ\s]/g, "").trim() || "SHADOW SQUAD"
  );
  const [leftSymbol, setLeftSymbol] = useState<string>("亗");
  const [rightSymbol, setRightSymbol] = useState<string>("亗");
  const [spacingFormat, setSpacingFormat] = useState<"normal" | "spaced" | "dotted">("normal");
  const [activeSymbolTab, setActiveSymbolTab] = useState<string>("coronas");
  const [copied, setCopied] = useState(false);

  // Format letter spacing
  const formattedText = React.useMemo(() => {
    const raw = (baseText || "SHADOW").trim().toUpperCase();
    if (spacingFormat === "spaced") {
      return raw.split("").join(" ");
    }
    if (spacingFormat === "dotted") {
      return raw.split("").join("•");
    }
    return raw;
  }, [baseText, spacingFormat]);

  const finalClanName = `${leftSymbol ? leftSymbol + " " : ""}${formattedText}${rightSymbol ? " " + rightSymbol : ""}`;

  const handleCopyCustom = async () => {
    const success = await copyText(finalClanName);
    if (success) {
      setCopied(true);
      if (onCustomNameCopied) onCustomNameCopied(finalClanName);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAddSymbolLeft = (sym: string) => setLeftSymbol(sym);
  const handleAddSymbolRight = (sym: string) => setRightSymbol(sym);
  const handleClearSymbols = () => {
    setLeftSymbol("");
    setRightSymbol("");
  };

  // Symbols list based on tab
  const symbolsList = React.useMemo(() => {
    if (activeSymbolTab === "flechas") {
      return [
        { id: "arrow-1", symbol: "➔", name: "Flecha Der" },
        { id: "arrow-2", symbol: "╰", name: "Esquina Inf" },
        { id: "arrow-3", symbol: "╮", name: "Esquina Sup" },
        { id: "arrow-4", symbol: "➳", name: "Flecha Pluma" },
        { id: "arrow-5", symbol: "➹", name: "Flecha Diana" },
      ];
    }
    if (activeSymbolTab === "minimalistas") {
      return [
        { id: "min-1", symbol: "▫️", name: "Cuadrado Blanco" },
        { id: "min-2", symbol: "▪️", name: "Cuadrado Negro" },
        { id: "min-3", symbol: "•", name: "Punto" },
        { id: "min-4", symbol: "「", name: "Marco Izq" },
        { id: "min-5", symbol: "」", name: "Marco Der" },
        { id: "min-6", symbol: "『", name: "Corchete Izq" },
        { id: "min-7", symbol: "』", name: "Corchete Der" },
      ];
    }
    return FREE_FIRE_SYMBOLS.filter((s) => s.category === activeSymbolTab);
  }, [activeSymbolTab]);

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-sm mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 mb-6 gap-2">
        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>⚙️</span> Personalizar Nombre de Clan
          </h3>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">
            Ajusta los símbolos laterales, la separación de letras y previsualiza el resultado.
          </p>
        </div>

        <button
          onClick={handleClearSymbols}
          className="text-xs text-teal-700 hover:text-teal-800 underline font-semibold self-start sm:self-auto"
        >
          Limpiar símbolos
        </button>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Nombre del clan
          </label>
          <input
            type="text"
            value={baseText}
            onChange={(e) => setBaseText(e.target.value)}
            placeholder="Ej. SHADOW SQUAD..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-semibold uppercase"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Formato de separación
          </label>
          <select
            value={spacingFormat}
            onChange={(e) => setSpacingFormat(e.target.value as "normal" | "spaced" | "dotted")}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-semibold bg-white"
          >
            <option value="normal">Normal (SHADOW)</option>
            <option value="spaced">Espaciado (S H A D O W)</option>
            <option value="dotted">Puntos (S•H•A•D•O•W)</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Símbolo Izq
            </label>
            <input
              type="text"
              value={leftSymbol}
              onChange={(e) => setLeftSymbol(e.target.value)}
              placeholder="Ej: 亗"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base font-mono text-center"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Símbolo Der
            </label>
            <input
              type="text"
              value={rightSymbol}
              onChange={(e) => setRightSymbol(e.target.value)}
              placeholder="Ej: 亗"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base font-mono text-center"
            />
          </div>
        </div>
      </div>

      {/* Symbol Picker */}
      <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200/90">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
            Selector de Símbolos para Clanes
          </span>
          <span className="text-[11px] text-slate-500">Toca un símbolo para colocarlo a la izq o der</span>
        </div>

        {/* Symbol Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none">
          {SYMBOL_CATEGORIES_CLANES.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSymbolTab(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1 ${
                activeSymbolTab === tab.id
                  ? "bg-teal-600 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Symbol Grid */}
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-12 gap-2">
          {symbolsList.map((item) => (
            <div key={item.id} className="relative group flex items-center gap-0.5">
              <button
                onClick={() => handleAddSymbolLeft(item.symbol)}
                className="w-full h-10 rounded-xl bg-white border border-slate-200 hover:border-teal-500 hover:bg-teal-50 text-slate-800 text-base font-bold flex items-center justify-center transition-all shadow-2xs active:scale-95"
                title={`Colocar ${item.name} a la izquierda`}
              >
                {item.symbol}
              </button>
              <button
                onClick={() => handleAddSymbolRight(item.symbol)}
                className="w-5 h-10 bg-slate-100 hover:bg-teal-600 text-slate-600 hover:text-white rounded-r-lg text-[10px] font-bold flex items-center justify-center transition-colors shrink-0"
                title="Colocar a la derecha"
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Live Preview Bar */}
      <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="text-center sm:text-left min-w-0 flex-1">
          <span className="text-[11px] font-bold text-teal-400 uppercase tracking-widest block mb-1">
            Vista previa personalizada del clan
          </span>
          <div className="text-xl sm:text-2xl font-black text-white tracking-wide break-all">
            {finalClanName}
          </div>
        </div>

        <button
          onClick={handleCopyCustom}
          className={`shrink-0 w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            copied
              ? "bg-emerald-600 text-white"
              : "bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md active:scale-95 font-extrabold"
          }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>✓ Copiado</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
              <span>Copiar Nombre de Clan</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
