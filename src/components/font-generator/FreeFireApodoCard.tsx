"use client";

import React, { useState } from "react";
import { copyText } from "@/lib/clipboard";
import { APODO_STYLE_LABELS, ApodoStyleType } from "@/lib/unicode/freeFireApodosData";

interface FreeFireApodoCardProps {
  id: string;
  name: string;
  baseText: string;
  categoryLabel: string;
  styleType: ApodoStyleType;
  isFavorite: boolean;
  onToggleFavorite: (id: string, name: string) => void;
  onRequestVariation: (baseText: string, originalName: string) => void;
  onRequestCustomization: (name: string) => void;
  onCopyNotice?: (copiedName: string) => void;
}

export const FreeFireApodoCard: React.FC<FreeFireApodoCardProps> = ({
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
    // Copy EXACT nickname string only to clipboard
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
    <div className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-teal-500/60 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      {/* Card Header: Category & Neutral Style Badges + Favorite Toggle */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="uppercase text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200/70">
            {categoryLabel}
          </span>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
            {APODO_STYLE_LABELS[styleType] || "Decorado"}
          </span>
        </div>

        <button
          onClick={() => onToggleFavorite(id, name)}
          className={`p-1.5 rounded-xl transition-colors ${
            isFavorite
              ? "text-rose-500 bg-rose-50 border border-rose-200/60"
              : "text-slate-400 hover:text-rose-500 hover:bg-slate-100 border border-transparent"
          }`}
          title={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
          aria-label={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:scale-105"
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

      {/* Main Nickname Display */}
      <div className="my-3 min-h-[3.75rem] flex items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-teal-50/20 transition-colors overflow-x-auto max-w-full">
        <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-wide text-center break-all whitespace-pre-wrap selection:bg-teal-500 selection:text-white">
          {name}
        </span>
      </div>

      {copyError && (
        <p className="text-xs text-amber-600 mt-1 text-center font-medium">
          No se pudo copiar automáticamente. Selecciona el apodo y cópialo manualmente.
        </p>
      )}

      {/* Primary Action Button (Copiar) */}
      <div className="mt-3 space-y-2">
        <button
          onClick={handleCopy}
          className={`w-full min-h-[44px] py-2 px-4 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xs ${
            copied
              ? "bg-emerald-600 text-white"
              : "bg-teal-600 hover:bg-teal-700 text-white shadow-sm hover:shadow active:scale-[0.99]"
          }`}
          aria-label={copied ? "Apodo copiado" : `Copiar apodo ${name}`}
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
              <span>Copiar</span>
            </>
          )}
        </button>

        {/* Secondary Actions */}
        <div className="grid grid-cols-2 gap-1.5 pt-1 text-xs">
          <button
            onClick={() => onRequestVariation(baseText, name)}
            className="py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 font-semibold transition-colors text-center truncate flex items-center justify-center gap-1"
            title="Generar diferentes variaciones de este apodo"
          >
            <span>🎲</span>
            <span>Variación</span>
          </button>
          <button
            onClick={() => onRequestCustomization(name)}
            className="py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-600 font-semibold transition-colors text-center truncate flex items-center justify-center gap-1"
            title="Personalizar fuentes y símbolos"
          >
            <span>⚙️</span>
            <span>Personalizar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
