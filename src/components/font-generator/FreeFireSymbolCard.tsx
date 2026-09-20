"use client";

import React, { useState } from "react";
import { copyText } from "@/lib/clipboard";

interface FreeFireSymbolCardProps {
  id: string;
  symbol: string;
  name: string;
  category: string;
  isFavorite: boolean;
  onToggleFavorite: (id: string, symbol: string) => void;
  onAddToComposer: (symbol: string) => void;
  onCopyNotice?: (copiedSymbol: string) => void;
}

export const FreeFireSymbolCard: React.FC<FreeFireSymbolCardProps> = ({
  id,
  symbol,
  name,
  category,
  isFavorite,
  onToggleFavorite,
  onAddToComposer,
  onCopyNotice,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    // Copy EXACT single symbol to clipboard
    const success = await copyText(symbol);
    if (success) {
      setCopied(true);
      if (onCopyNotice) {
        onCopyNotice(symbol);
      }
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-xl p-3 border border-slate-200/90 hover:border-teal-500/60 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between items-center group relative">
      {/* Top action controls: Favorite & Add to Composer */}
      <div className="w-full flex items-center justify-between mb-1">
        <button
          onClick={() => onAddToComposer(symbol)}
          className="p-1 rounded-md text-slate-400 hover:text-teal-700 hover:bg-teal-50 transition-colors"
          title={`Añadir ${symbol} al combinador`}
          aria-label={`Añadir ${symbol} al combinador`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </button>

        <button
          onClick={() => onToggleFavorite(id, symbol)}
          className={`p-1 rounded-md transition-colors ${
            isFavorite ? "text-rose-500 bg-rose-50" : "text-slate-300 hover:text-rose-500"
          }`}
          title={isFavorite ? `Quitar ${symbol} de favoritos` : `Guardar ${symbol} en favoritos`}
          aria-label={isFavorite ? `Quitar ${symbol} de favoritos` : `Guardar ${symbol} en favoritos`}
        >
          <svg
            className="w-4 h-4"
            fill={isFavorite ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={isFavorite ? 0 : 2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Main Symbol Display */}
      <div
        onClick={handleCopy}
        className="my-1.5 w-full h-14 sm:h-16 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-teal-50/30 transition-colors cursor-pointer"
        title={`Toca para copiar ${symbol}`}
      >
        <span className="text-2xl sm:text-3xl font-bold text-slate-900 select-all tracking-normal">
          {symbol}
        </span>
      </div>

      {/* Symbol Label */}
      <span className="text-[10px] text-slate-400 font-semibold truncate w-full text-center mb-2 px-1">
        {name}
      </span>

      {/* 1-Tap Copy Button */}
      <button
        onClick={handleCopy}
        className={`w-full min-h-[34px] py-1 px-2 rounded-lg font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1 ${
          copied
            ? "bg-emerald-600 text-white shadow-2xs"
            : "bg-teal-600 hover:bg-teal-700 text-white shadow-2xs active:scale-95"
        }`}
        aria-label={copied ? "Símbolo copiado" : `Copiar símbolo ${symbol}`}
      >
        {copied ? (
          <>
            <span>✓</span>
            <span>Copiado</span>
          </>
        ) : (
          <span>Copiar</span>
        )}
      </button>
    </div>
  );
};
