"use client";

import React, { useState } from "react";
import { copyText } from "@/lib/clipboard";

interface FreeFireLibraryCardProps {
  id: string;
  name: string;
  baseText: string;
  categoryLabel: string;
  isFavorite: boolean;
  onToggleFavorite: (id: string, name: string) => void;
  onRequestVariation: (baseText: string, originalName: string) => void;
  onRequestCustomization: (name: string) => void;
}

export const FreeFireLibraryCard: React.FC<FreeFireLibraryCardProps> = ({
  id,
  name,
  baseText,
  categoryLabel,
  isFavorite,
  onToggleFavorite,
  onRequestVariation,
  onRequestCustomization,
}) => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopy = async () => {
    setCopyError(false);
    const success = await copyText(name);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 4000);
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200/80 hover:border-teal-500/50 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      {/* Card Header: Category badge & Favorite toggle */}
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/60 capitalize">
          {categoryLabel}
        </span>

        <button
          onClick={() => onToggleFavorite(id, name)}
          className={`p-1.5 rounded-lg transition-colors ${
            isFavorite
              ? "text-red-500 hover:text-red-600 hover:bg-red-50"
              : "text-slate-400 hover:text-red-500 hover:bg-slate-100"
          }`}
          title={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
          aria-label={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
        >
          <svg
            className="w-5 h-5"
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

      {/* Name Display */}
      <div className="my-2 min-h-[3.5rem] flex items-center justify-center p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-teal-50/30 transition-colors overflow-x-auto max-w-full">
        <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-wide select-all text-center break-all whitespace-pre-wrap">
          {name}
        </span>
      </div>

      {copyError && (
        <p className="text-xs text-amber-600 mt-1 text-center">
          No se pudo copiar automáticamente. Selecciona el nombre y cópialo manualmente.
        </p>
      )}

      {/* Primary Action Button (Copiar) */}
      <div className="mt-3 space-y-2">
        <button
          onClick={handleCopy}
          className={`w-full min-h-[44px] py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            copied
              ? "bg-emerald-600 text-white shadow-sm"
              : "bg-teal-600 hover:bg-teal-700 text-white shadow-sm hover:shadow active:scale-[0.99]"
          }`}
          aria-label={copied ? "Nombre copiado" : `Copiar nombre ${name}`}
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
              <span>Copiar</span>
            </>
          )}
        </button>

        {/* Secondary Actions: Crear variación / Personalizar */}
        <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-slate-100 text-xs">
          <button
            onClick={() => onRequestVariation(baseText, name)}
            className="py-1.5 px-2 rounded bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 font-medium transition-colors text-center truncate"
            title="Generar diferentes variaciones de este nombre"
          >
            🎲 Variación
          </button>
          <button
            onClick={() => onRequestCustomization(name)}
            className="py-1.5 px-2 rounded bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-600 font-medium transition-colors text-center truncate"
            title="Personalizar símbolos y estilo"
          >
            ⚙️ Personalizar
          </button>
        </div>
      </div>
    </div>
  );
};
