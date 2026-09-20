"use client";

import React, { useState } from "react";
import { copyText } from "@/lib/clipboard";
import { CLAN_NAME_PRESETS, SymbolPreset } from "@/lib/unicode/freeFireSimbolosData";

interface FreeFireSymbolComposerProps {
  selectedSymbols: string[];
  onRemoveSymbol: (index: number) => void;
  onMoveSymbolLeft: (index: number) => void;
  onMoveSymbolRight: (index: number) => void;
  onClearSymbols: () => void;
  onSelectPreset: (preset: SymbolPreset) => void;
  onCopyNotice?: (copiedText: string) => void;
}

export const FreeFireSymbolComposer: React.FC<FreeFireSymbolComposerProps> = ({
  selectedSymbols,
  onRemoveSymbol,
  onMoveSymbolLeft,
  onMoveSymbolRight,
  onClearSymbols,
  onSelectPreset,
  onCopyNotice,
}) => {
  const [customText, setCustomText] = useState("Shadow");
  const [copiedResult, setCopiedResult] = useState(false);

  // Calculate live combined result
  const combinedSymbolsLeft = selectedSymbols.slice(0, Math.ceil(selectedSymbols.length / 2)).join(" ");
  const combinedSymbolsRight = selectedSymbols.slice(Math.ceil(selectedSymbols.length / 2)).join(" ");

  const liveResult = React.useMemo(() => {
    const textPart = customText.trim();
    if (!selectedSymbols.length && !textPart) {
      return "Selecciona algunos símbolos para crear una combinación.";
    }
    if (!selectedSymbols.length) {
      return textPart;
    }
    if (!textPart) {
      return selectedSymbols.join(" ");
    }
    return `${combinedSymbolsLeft} ${textPart} ${combinedSymbolsRight}`.trim();
  }, [customText, selectedSymbols, combinedSymbolsLeft, combinedSymbolsRight]);

  const handleCopyResult = async () => {
    if (!liveResult || liveResult.startsWith("Selecciona algunos")) return;
    const success = await copyText(liveResult);
    if (success) {
      setCopiedResult(true);
      if (onCopyNotice) onCopyNotice(liveResult);
      setTimeout(() => setCopiedResult(false), 2000);
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl mb-8 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-2">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <span>🎨</span> Crea tu combinación (Combinador)
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
            Selecciona símbolos de la biblioteca o escribe tu nombre para combinarlos.
          </p>
        </div>

        {selectedSymbols.length > 0 && (
          <button
            onClick={onClearSymbols}
            className="text-xs text-rose-400 hover:text-rose-300 underline font-semibold self-start sm:self-auto"
          >
            Limpiar selección
          </button>
        )}
      </div>

      {/* Inputs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Escribe tu nombre (opcional)
          </label>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Ej. Shadow, Titan, Ghost..."
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-sm font-semibold"
          />
        </div>

        {/* Selected Symbols Chips / Controls */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Símbolos seleccionados ({selectedSymbols.length})
          </label>

          {selectedSymbols.length === 0 ? (
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-500 font-medium">
              Toca el botón + en cualquier símbolo para añadirlo aquí.
            </div>
          ) : (
            <div className="flex items-center gap-1.5 flex-wrap p-2.5 bg-slate-950 rounded-xl border border-slate-800 max-h-36 overflow-y-auto">
              {selectedSymbols.map((sym, idx) => (
                <div
                  key={`${sym}-${idx}`}
                  className="flex items-center gap-1 px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-sm font-bold text-teal-300"
                >
                  <span>{sym}</span>
                  <div className="flex items-center gap-0.5 ml-1 border-l border-slate-700 pl-1 text-[10px]">
                    {idx > 0 && (
                      <button
                        onClick={() => onMoveSymbolLeft(idx)}
                        className="hover:text-white px-0.5"
                        title="Mover a la izquierda"
                        aria-label="Mover a la izquierda"
                      >
                        ◀
                      </button>
                    )}
                    {idx < selectedSymbols.length - 1 && (
                      <button
                        onClick={() => onMoveSymbolRight(idx)}
                        className="hover:text-white px-0.5"
                        title="Mover a la derecha"
                        aria-label="Mover a la derecha"
                      >
                        ▶
                      </button>
                    )}
                    <button
                      onClick={() => onRemoveSymbol(idx)}
                      className="text-rose-400 hover:text-rose-300 px-0.5 font-bold"
                      title="Eliminar símbolo"
                      aria-label="Eliminar símbolo"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Presets Quick Selector */}
      <div className="mb-6">
        <span className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
          Combinaciones prediseñadas (Presets)
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CLAN_NAME_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onSelectPreset(preset)}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 rounded-xl text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1.5"
            >
              <span>{preset.name}</span>
              <span className="text-[10px] text-slate-400">Usar</span>
            </button>
          ))}
        </div>
      </div>

      {/* Live Result & Copy Bar */}
      <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="text-center sm:text-left min-w-0 flex-1">
          <span className="text-[11px] font-bold text-teal-400 uppercase tracking-widest block mb-1">
            Resultado combinado
          </span>
          <div className="text-xl sm:text-2xl font-black text-white tracking-wide break-all">
            {liveResult}
          </div>
        </div>

        <button
          onClick={handleCopyResult}
          disabled={!selectedSymbols.length && !customText.trim()}
          className={`shrink-0 w-full sm:w-auto min-h-[46px] px-6 py-2.5 rounded-xl font-black text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            copiedResult
              ? "bg-emerald-600 text-white"
              : "bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
          }`}
        >
          {copiedResult ? (
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
                  strokeWidth={2}
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
              <span>Copiar Resultado</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
