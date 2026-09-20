"use client";

import React, { useState } from "react";
import { copyText } from "@/lib/clipboard";
import { fontStyles } from "@/lib/unicode";
import { FREE_FIRE_DECORATIONS, FREE_FIRE_SYMBOLS, FreeFireSymbolItem } from "@/lib/unicode/freeFireData";

interface FreeFireCustomizerProps {
  initialName?: string;
  onCustomNameCopied?: (name: string) => void;
}

export const FreeFireCustomizer: React.FC<FreeFireCustomizerProps> = ({
  initialName = "",
  onCustomNameCopied,
}) => {
  const [baseText, setBaseText] = useState(initialName || "Shadow");
  const [selectedStyleId, setSelectedStyleId] = useState<string>("script-bold");
  const [prefix, setPrefix] = useState<string>("꧁");
  const [suffix, setSuffix] = useState<string>("꧂");
  const [activeSymbolTab, setActiveSymbolTab] = useState<string>("gamer");
  const [copied, setCopied] = useState(false);

  // Available style options for dropdown
  const styleOptions = fontStyles.filter(
    (s) => s.id !== "original"
  ).slice(0, 30);

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

  const filteredSymbols = FREE_FIRE_SYMBOLS.filter((s) => s.category === activeSymbolTab);

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 mb-6 gap-2">
        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>⚙️</span> Personalizar tu Apodo
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Crea combinaciones únicas con estilos, marcos y símbolos a tu gusto.
          </p>
        </div>

        <button
          onClick={handleClearDecorations}
          className="text-xs text-slate-500 hover:text-slate-800 underline self-start sm:self-auto"
        >
          Restablecer símbolos
        </button>
      </div>

      {/* Inputs grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Texto del Nombre
          </label>
          <input
            type="text"
            value={baseText}
            onChange={(e) => setBaseText(e.target.value)}
            placeholder="Escribe tu nombre..."
            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Estilo de Fuente
          </label>
          <select
            value={selectedStyleId}
            onChange={(e) => setSelectedStyleId(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-medium bg-white"
          >
            {styleOptions.map((st) => (
              <option key={st.id} value={st.id}>
                {st.name} ({st.transform(baseText || "A")})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Plantillas de Marcos Rápidos
          </label>
          <select
            onChange={(e) => handleQuickDecoration(e.target.value)}
            defaultValue=""
            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-medium bg-white"
          >
            <option value="" disabled>
              Seleccionar marco rápido...
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
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Símbolo / Decoración Inicial (Prefijo)
          </label>
          <input
            type="text"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            placeholder="Ej: ꧁"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-mono"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Símbolo / Decoración Final (Sufijo)
          </label>
          <input
            type="text"
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
            placeholder="Ej: ꧂"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-mono"
          />
        </div>
      </div>

      {/* Symbol Library Picker */}
      <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
            Biblioteca de Símbolos Gamer & Decorativos
          </span>
          <span className="text-[11px] text-slate-500">Haz clic en un símbolo para añadirlo</span>
        </div>

        {/* Symbol Category Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-3 scrollbar-none">
          {[
            { id: "gamer", label: "Gamer" },
            { id: "coronas", label: "Coronas" },
            { id: "armas", label: "Armas" },
            { id: "estrellas", label: "Estrellas" },
            { id: "aesthetic", label: "Aesthetic" },
            { id: "corazones", label: "Corazones" },
            { id: "separadores", label: "Separadores" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSymbolTab(tab.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                activeSymbolTab === tab.id
                  ? "bg-teal-600 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Symbols Grid */}
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-2">
          {filteredSymbols.map((item: FreeFireSymbolItem) => (
            <div key={item.id} className="relative group">
              <button
                onClick={() => handleAddSymbolToPrefix(item.symbol)}
                className="w-full h-10 rounded-lg bg-white border border-slate-200 hover:border-teal-500 hover:bg-teal-50 text-slate-800 text-base font-bold flex items-center justify-center transition-all shadow-2xs active:scale-95"
                title={`Añadir ${item.name} al inicio`}
              >
                {item.symbol}
              </button>
              <div className="absolute top-0 right-0 hidden group-hover:flex gap-1 -mt-2 -mr-1 z-10">
                <button
                  onClick={() => handleAddSymbolToSuffix(item.symbol)}
                  className="w-4 h-4 bg-teal-600 text-white rounded-full text-[9px] font-bold flex items-center justify-center shadow"
                  title="Añadir al final"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Preview Card inside Customizer */}
      <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left min-w-0 flex-1">
          <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider block mb-1">
            Vista previa personalizada
          </span>
          <div className="text-xl sm:text-2xl font-bold text-white tracking-wide break-all">
            {finalCustomNickname}
          </div>
        </div>

        <button
          onClick={handleCopyCustom}
          className={`shrink-0 w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            copied
              ? "bg-emerald-600 text-white"
              : "bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md active:scale-95"
          }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>✓ Copiado</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
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
