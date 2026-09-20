"use client";

import React, { useState } from "react";
import { copyText } from "@/lib/clipboard";
import { fontStyles } from "@/lib/unicode";
import { FREE_FIRE_DECORATIONS, FREE_FIRE_SYMBOLS } from "@/lib/unicode/freeFireData";

interface FreeFireApodoCustomizerPanelProps {
  initialName?: string;
  onCustomNameCopied?: (name: string) => void;
}

const SYMBOL_CATEGORIES_APODOS = [
  { id: "gamer", label: "Gamer", icon: "🎮" },
  { id: "estrellas", label: "Estrellas", icon: "★" },
  { id: "coronas", label: "Coronas", icon: "👑" },
  { id: "armas", label: "Armas", icon: "⚔️" },
  { id: "aesthetic", label: "Decorativos", icon: "✦" },
  { id: "minimalistas", label: "Minimalistas", icon: "▫️" },
  { id: "separadores", label: "Separadores", icon: "丨" },
  { id: "flechas", label: "Flechas", icon: "➔" },
];

export const FreeFireApodoCustomizerPanel: React.FC<FreeFireApodoCustomizerPanelProps> = ({
  initialName = "",
  onCustomNameCopied,
}) => {
  const [baseText, setBaseText] = useState(initialName || "Nox");
  const [selectedStyleId, setSelectedStyleId] = useState<string>("script-bold");
  const [prefix, setPrefix] = useState<string>("乂");
  const [suffix, setSuffix] = useState<string>("乂");
  const [activeSymbolTab, setActiveSymbolTab] = useState<string>("gamer");
  const [copied, setCopied] = useState(false);

  // Available style options for dropdown
  const styleOptions = fontStyles.filter((s) => s.id !== "original").slice(0, 30);

  // Apply style transform
  const activeStyle = fontStyles.find((s) => s.id === selectedStyleId) || styleOptions[0];
  const transformedText = activeStyle ? activeStyle.transform(baseText || "Nox") : baseText;
  const finalCustomNickname = `${prefix}${transformedText}${suffix}`;

  const handleCopyCustom = async () => {
    const success = await copyText(finalCustomNickname);
    if (success) {
      setCopied(true);
      if (onCustomNameCopied) onCustomNameCopied(finalCustomNickname);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleQuickDecoration = (decId: string) => {
    const dec = FREE_FIRE_DECORATIONS.find((d) => d.id === decId);
    if (dec) {
      setPrefix(dec.prefix);
      setSuffix(dec.suffix);
    }
  };

  const handleAddSymbolToPrefix = (symbol: string) => {
    setPrefix((prev) => prev + symbol);
  };

  const handleAddSymbolToSuffix = (symbol: string) => {
    setSuffix((prev) => prev + symbol);
  };

  const handleClearDecorations = () => {
    setPrefix("");
    setSuffix("");
  };

  // Symbols list based on active category tab
  const symbolsList = React.useMemo(() => {
    if (activeSymbolTab === "flechas") {
      return [
        { id: "arrow-1", symbol: "➔", name: "Flecha Der" },
        { id: "arrow-2", symbol: "╰", name: "Esquina Inf" },
        { id: "arrow-3", symbol: "╮", name: "Esquina Sup" },
        { id: "arrow-4", symbol: "➳", name: "Flecha Pluma" },
        { id: "arrow-5", symbol: "➹", name: "Flecha Diana" },
        { id: "arrow-6", symbol: "➻", name: "Flecha Gruesa" },
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
            <span>⚙️</span> Personalizar tu Apodo
          </h3>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">
            Selecciona el apodo, fuentes Unicode y añade símbolos a tu gusto.
          </p>
        </div>

        <button
          onClick={handleClearDecorations}
          className="text-xs text-teal-700 hover:text-teal-800 underline font-semibold self-start sm:self-auto"
        >
          Limpiar símbolos
        </button>
      </div>

      {/* Inputs grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Texto del apodo
          </label>
          <input
            type="text"
            value={baseText}
            onChange={(e) => setBaseText(e.target.value)}
            placeholder="Escribe tu apodo..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-semibold"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Estilo Unicode
          </label>
          <select
            value={selectedStyleId}
            onChange={(e) => setSelectedStyleId(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-semibold bg-white"
          >
            {styleOptions.map((st) => (
              <option key={st.id} value={st.id}>
                {st.name} ({st.transform(baseText || "A")})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Marco rápido
          </label>
          <select
            onChange={(e) => handleQuickDecoration(e.target.value)}
            defaultValue=""
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-semibold bg-white"
          >
            <option value="" disabled>
              Seleccionar marco apodo...
            </option>
            {FREE_FIRE_DECORATIONS.map((dec) => (
              <option key={dec.id} value={dec.id}>
                {dec.prefix} {dec.name} {dec.suffix}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Manual Prefix & Suffix Customization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Símbolo Inicial (Prefijo)
          </label>
          <input
            type="text"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            placeholder="Ej: 乂"
            className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base font-mono"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Símbolo Final (Sufijo)
          </label>
          <input
            type="text"
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
            placeholder="Ej: 乂"
            className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base font-mono"
          />
        </div>
      </div>

      {/* Symbol Picker Library */}
      <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200/90">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
            Selector de Símbolos
          </span>
          <span className="text-[11px] text-slate-500">Haz clic en un símbolo para añadirlo</span>
        </div>

        {/* Symbol Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none">
          {SYMBOL_CATEGORIES_APODOS.map((tab) => (
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

        {/* Symbols Grid */}
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-12 gap-2">
          {symbolsList.map((item) => (
            <div key={item.id} className="relative group flex items-center gap-0.5">
              <button
                onClick={() => handleAddSymbolToPrefix(item.symbol)}
                className="w-full h-10 rounded-xl bg-white border border-slate-200 hover:border-teal-500 hover:bg-teal-50 text-slate-800 text-base font-bold flex items-center justify-center transition-all shadow-2xs active:scale-95"
                title={`Añadir ${item.name} al inicio`}
              >
                {item.symbol}
              </button>
              <button
                onClick={() => handleAddSymbolToSuffix(item.symbol)}
                className="w-5 h-10 bg-slate-100 hover:bg-teal-600 text-slate-600 hover:text-white rounded-r-lg text-[10px] font-bold flex items-center justify-center transition-colors shrink-0"
                title="Añadir al final"
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
            Vista previa en tiempo real
          </span>
          <div className="text-xl sm:text-2xl font-black text-white tracking-wide break-all">
            {finalCustomNickname}
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
              <span>Copiar Apodo Personalizado</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
