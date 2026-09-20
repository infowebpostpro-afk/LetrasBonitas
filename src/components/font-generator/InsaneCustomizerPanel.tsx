"use client";

import React, { useState } from "react";
import { copyText } from "@/lib/clipboard";
import { fontStyles } from "@/lib/unicode";
import { FREE_FIRE_DECORATIONS, FREE_FIRE_SYMBOLS } from "@/lib/unicode/freeFireData";

interface InsaneCustomizerPanelProps {
  initialName?: string;
  onCustomNameCopied?: (name: string) => void;
}

const SYMBOL_CATEGORIES_INSANE = [
  { id: "gamer", label: "Gamer", icon: "🎮" },
  { id: "calaveras", label: "Calaveras", icon: "☠️" },
  { id: "coronas", label: "Coronas", icon: "👑" },
  { id: "estrellas", label: "Estrellas", icon: "★" },
  { id: "armas", label: "Armas", icon: "⚔️" },
  { id: "flechas", label: "Flechas", icon: "➔" },
  { id: "aesthetic", label: "Decorativos", icon: "✦" },
  { id: "separadores", label: "Separadores", icon: "丨" },
  { id: "minimalistas", label: "Minimalistas", icon: "▫️" },
];

export const InsaneCustomizerPanel: React.FC<InsaneCustomizerPanelProps> = ({
  initialName = "",
  onCustomNameCopied,
}) => {
  const [baseText, setBaseText] = useState(initialName || "Shadow");
  const [selectedStyleId, setSelectedStyleId] = useState<string>("script-bold");
  const [prefix, setPrefix] = useState<string>("꧁༒");
  const [suffix, setSuffix] = useState<string>("༒꧂");
  const [activeSymbolTab, setActiveSymbolTab] = useState<string>("gamer");
  const [copied, setCopied] = useState(false);

  // Available style options for dropdown
  const styleOptions = fontStyles.filter((s) => s.id !== "original").slice(0, 30);

  // Apply style transform
  const activeStyle = fontStyles.find((s) => s.id === selectedStyleId) || styleOptions[0];
  const transformedText = activeStyle ? activeStyle.transform(baseText || "Shadow") : baseText;
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

  // Symbols list based on category
  const symbolsList = React.useMemo(() => {
    if (activeSymbolTab === "calaveras") {
      return [
        { id: "skull-1", symbol: "☠️", name: "Calavera" },
        { id: "skull-2", symbol: "💀", name: "Cráneo" },
        { id: "skull-3", symbol: "☣️", name: "Biohazard" },
        { id: "skull-4", symbol: "☢️", name: "Radiactivo" },
        { id: "skull-5", symbol: "👻", name: "Fantasma" },
        { id: "skull-6", symbol: "👹", name: "Demonio" },
        { id: "skull-7", symbol: "👺", name: "Tengu" },
      ];
    }
    if (activeSymbolTab === "flechas") {
      return [
        { id: "arrow-1", symbol: "➔", name: "Flecha Der" },
        { id: "arrow-2", symbol: "╰", name: "Esquina Inf" },
        { id: "arrow-3", symbol: "╮", name: "Esquina Sup" },
        { id: "arrow-4", symbol: "➳", name: "Flecha Pluma" },
        { id: "arrow-5", symbol: "➹", name: "Flecha Diana" },
        { id: "arrow-6", symbol: "➻", name: "Flecha Gruesa" },
        { id: "arrow-7", symbol: "⤗", name: "Doble Flecha" },
      ];
    }
    if (activeSymbolTab === "minimalistas") {
      return [
        { id: "min-1", symbol: "▫️", name: "Cuadrado Blanco" },
        { id: "min-2", symbol: "▪️", name: "Cuadrado Negro" },
        { id: "min-3", symbol: "•", name: "Punto" },
        { id: "min-4", symbol: "「", name: "Marzo Izq" },
        { id: "min-5", symbol: "」", name: "Marco Der" },
        { id: "min-6", symbol: "『", name: "Corchete Izq" },
        { id: "min-7", symbol: "』", name: "Corchete Der" },
      ];
    }
    return FREE_FIRE_SYMBOLS.filter((s) => s.category === activeSymbolTab);
  }, [activeSymbolTab]);

  return (
    <div className="bg-slate-900 rounded-2xl p-5 sm:p-8 border border-slate-800 shadow-xl mt-8 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-2">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <span>⚙️</span> Personalizar tu Nombre Insano
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
            Selecciona el texto, añade fuentes Unicode y combina marcos y símbolos para tu nickname.
          </p>
        </div>

        <button
          onClick={handleClearDecorations}
          className="text-xs text-cyan-400 hover:text-cyan-300 underline font-semibold self-start sm:self-auto"
        >
          Limpiar símbolos
        </button>
      </div>

      {/* Inputs grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Texto base
          </label>
          <input
            type="text"
            value={baseText}
            onChange={(e) => setBaseText(e.target.value)}
            placeholder="Escribe tu nickname..."
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-sm font-semibold"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Estilo de fuente Unicode
          </label>
          <select
            value={selectedStyleId}
            onChange={(e) => setSelectedStyleId(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-sm font-semibold"
          >
            {styleOptions.map((st) => (
              <option key={st.id} value={st.id} className="bg-slate-900 text-white">
                {st.name} ({st.transform(baseText || "A")})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Marco rápido
          </label>
          <select
            onChange={(e) => handleQuickDecoration(e.target.value)}
            defaultValue=""
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-sm font-semibold"
          >
            <option value="" disabled className="bg-slate-900 text-slate-400">
              Seleccionar marco insano...
            </option>
            {FREE_FIRE_DECORATIONS.map((dec) => (
              <option key={dec.id} value={dec.id} className="bg-slate-900 text-white">
                {dec.prefix} {dec.name} {dec.suffix}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Manual Prefix & Suffix Customization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Prefijo (Inicial)
          </label>
          <input
            type="text"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            placeholder="Ej: ꧁༒"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-cyan-300 focus:outline-none focus:border-cyan-500 text-base font-mono"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Sufijo (Final)
          </label>
          <input
            type="text"
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
            placeholder="Ej: ༒꧂"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-cyan-300 focus:outline-none focus:border-cyan-500 text-base font-mono"
          />
        </div>
      </div>

      {/* Symbol Picker */}
      <div className="mb-6 bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">
            Selector de Símbolos Insanos
          </span>
          <span className="text-[11px] text-slate-400">Toca + para añadir al inicio o final</span>
        </div>

        {/* Symbol Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none">
          {SYMBOL_CATEGORIES_INSANE.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSymbolTab(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
                activeSymbolTab === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 shadow-md scale-[1.02]"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
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
                onClick={() => handleAddSymbolToPrefix(item.symbol)}
                className="w-full h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/60 hover:bg-cyan-950/40 text-white text-base font-extrabold flex items-center justify-center transition-all active:scale-95 shadow-2xs"
                title={`Añadir ${item.name} al inicio`}
              >
                {item.symbol}
              </button>
              <button
                onClick={() => handleAddSymbolToSuffix(item.symbol)}
                className="w-5 h-10 bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white rounded-r-lg text-[10px] font-bold flex items-center justify-center transition-colors shrink-0"
                title="Añadir al final"
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Live Preview Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white rounded-xl p-5 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="text-center sm:text-left min-w-0 flex-1">
          <span className="text-[11px] font-extrabold text-cyan-400 uppercase tracking-widest block mb-1">
            Vista previa en tiempo real
          </span>
          <div className="text-xl sm:text-2xl font-black text-white tracking-wide break-all">
            {finalCustomNickname}
          </div>
        </div>

        <button
          onClick={handleCopyCustom}
          className={`shrink-0 w-full sm:w-auto min-h-[46px] px-6 py-2.5 rounded-xl font-black text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg ${
            copied
              ? "bg-emerald-500 text-slate-950"
              : "bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 text-slate-950 hover:brightness-110 active:scale-95"
          }`}
        >
          {copied ? (
            <>
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>✓ Copiado</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
              <span>Copiar Nombre Personalizado</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
