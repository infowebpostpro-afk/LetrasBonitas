"use client";

import React, { useState } from "react";
import { copyText } from "@/lib/clipboard";
import { INSANE_STYLE_LABELS, NameStyleType } from "@/lib/unicode/freeFireInsaneData";

interface InsaneNameCardProps {
  id: string;
  name: string;
  baseText: string;
  categoryLabel: string;
  styleType: NameStyleType;
  isFavorite: boolean;
  onToggleFavorite: (id: string, name: string) => void;
  onRequestVariation: (baseText: string, originalName: string) => void;
  onRequestCustomization: (name: string) => void;
  onCopyNotice?: (copiedName: string) => void;
}

export const InsaneNameCard: React.FC<InsaneNameCardProps> = ({
  id,
  name,
  baseText,
  categoryLabel,
  styleType,
  isFavorite,
  onToggleFavorite,
  onRequestVariation,
  onRequestCustomization,
  onCopyNotice,
}) => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopy = async () => {
    setCopyError(false);
    // Ensure clipboard receives ONLY the exact nickname string
    const success = await copyText(name);
    if (success) {
      setCopied(true);
      if (onCopyNotice) {
        onCopyNotice(name);
      }
      setTimeout(() => setCopied(false), 2000);
    } else {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 4000);
    }
  };

  return (
    <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl p-5 border border-slate-800 hover:border-cyan-500/40 shadow-lg hover:shadow-cyan-950/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
      {/* Decorative gradient corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-cyan-500/20 transition-all duration-300" />

      {/* Card Header: Category & Neutral style badges + Favorite toggle */}
      <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="uppercase text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-md bg-indigo-950/80 text-cyan-300 border border-indigo-700/50">
            {categoryLabel}
          </span>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
            {INSANE_STYLE_LABELS[styleType] || "Decorado"}
          </span>
        </div>

        <button
          onClick={() => onToggleFavorite(id, name)}
          className={`p-2 rounded-xl transition-all duration-200 ${
            isFavorite
              ? "text-rose-400 bg-rose-950/40 border border-rose-800/60 shadow-sm"
              : "text-slate-400 hover:text-rose-400 hover:bg-slate-800 border border-transparent"
          }`}
          title={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
          aria-label={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
        >
          <svg
            className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
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

      {/* Main Name Display */}
      <div className="my-3 min-h-[4rem] flex items-center justify-center p-3 rounded-xl bg-slate-950/90 border border-slate-800/80 group-hover:border-cyan-500/30 transition-colors overflow-x-auto max-w-full">
        <span className="text-xl sm:text-2xl font-black text-white tracking-wide text-center break-all whitespace-pre-wrap selection:bg-cyan-500 selection:text-slate-950">
          {name}
        </span>
      </div>

      {copyError && (
        <p className="text-xs text-amber-400 mt-1 text-center font-medium">
          No se pudo copiar automáticamente. Selecciona el nombre y cópialo manualmente.
        </p>
      )}

      {/* Primary Action Buttons */}
      <div className="mt-4 space-y-2 relative z-10">
        <button
          onClick={handleCopy}
          className={`w-full min-h-[46px] py-2.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md ${
            copied
              ? "bg-emerald-500 text-slate-950 shadow-emerald-900/40"
              : "bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-500 hover:from-cyan-400 hover:via-teal-400 hover:to-indigo-400 text-slate-950 active:scale-[0.98]"
          }`}
          aria-label={copied ? "Nombre copiado" : `Copiar nombre ${name}`}
        >
          {copied ? (
            <>
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-extrabold tracking-wide">✓ Copiado</span>
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
              <span>Copiar</span>
            </>
          )}
        </button>

        {/* Secondary Action Grid */}
        <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
          <button
            onClick={() => onRequestVariation(baseText, name)}
            className="py-2 px-2.5 rounded-xl bg-slate-800/80 hover:bg-purple-950 hover:text-purple-300 hover:border-purple-700/50 text-slate-300 font-semibold border border-slate-700/50 transition-all text-center flex items-center justify-center gap-1.5 truncate"
            title="Generar diferentes variaciones insanas"
          >
            <span>🎲</span>
            <span>Variaciones</span>
          </button>
          <button
            onClick={() => onRequestCustomization(name)}
            className="py-2 px-2.5 rounded-xl bg-slate-800/80 hover:bg-cyan-950 hover:text-cyan-300 hover:border-cyan-700/50 text-slate-300 font-semibold border border-slate-700/50 transition-all text-center flex items-center justify-center gap-1.5 truncate"
            title="Personalizar fuentes Unicode y símbolos"
          >
            <span>⚙️</span>
            <span>Personalizar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
