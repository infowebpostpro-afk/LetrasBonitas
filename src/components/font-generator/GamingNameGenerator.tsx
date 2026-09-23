"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  GAMING_CATEGORIES,
  GamingCategory,
  generateGamingNamesBatch,
} from "@/lib/gamingNames/gamingNameData";
import { GamingNameCustomizerModal } from "./GamingNameCustomizerModal";
import {
  HeartIcon,
  HeartOutlineIcon,
  CopyIcon,
  CheckIcon,
  ClearIcon,
  SparklesIcon,
} from "@/components/ui/Icons";

interface GeneratedNameItem {
  id: string;
  name: string;
  cleanName: string;
  charLength: number;
  category: GamingCategory;
}

interface FavoriteItem {
  id: string;
  name: string;
  charLength: number;
}

export const GamingNameGenerator: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<GamingCategory>("todos");
  const [withStyle, setWithStyle] = useState<boolean>(false);
  const [namesList, setNamesList] = useState<GeneratedNameItem[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [ariaLiveAnnouncement, setAriaLiveAnnouncement] = useState<string>("");
  const [customizingName, setCustomizingName] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [showFavoritesModal, setShowFavoritesModal] = useState<boolean>(false);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("letrasbonitas_gaming_favorites");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch {
      // LocalStorage might be disabled
    }
  }, []);

  const saveFavorites = (favs: FavoriteItem[]) => {
    setFavorites(favs);
    try {
      localStorage.setItem("letrasbonitas_gaming_favorites", JSON.stringify(favs));
    } catch {
      // Ignore
    }
  };

  const handleToggleFavorite = (name: string, cleanName: string, charLength: number) => {
    const exists = favorites.some((f) => f.name === name);
    let updated: FavoriteItem[];
    if (exists) {
      updated = favorites.filter((f) => f.name !== name);
      setAriaLiveAnnouncement(`Nombre ${cleanName} eliminado de favoritos`);
    } else {
      updated = [{ id: `${Date.now()}-${cleanName}`, name, charLength }, ...favorites];
      setAriaLiveAnnouncement(`Nombre ${cleanName} guardado en favoritos`);
    }
    saveFavorites(updated);
  };

  const isFavorited = useCallback(
    (name: string) => favorites.some((f) => f.name === name),
    [favorites]
  );

  // Handler to generate a new 12-item batch
  const generateNewBatch = useCallback(() => {
    const batch = generateGamingNamesBatch({
      baseWord: inputText,
      category: activeCategory,
      withStyle,
      batchSize: 12,
    });

    const items: GeneratedNameItem[] = batch.map((item, idx) => ({
      id: `item-${Date.now()}-${idx}-${item.cleanName}`,
      name: item.name,
      cleanName: item.cleanName,
      charLength: item.charLength,
      category: item.category,
    }));

    setNamesList(items);
  }, [inputText, activeCategory, withStyle]);

  // Initial load generation
  useEffect(() => {
    generateNewBatch();
  }, [generateNewBatch]);

  // Copy handler with independent card state and aria announcement
  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setAriaLiveAnnouncement(`Nombre ${text} copiado al portapapeles`);
      setTimeout(() => {
        setCopiedId((curr) => (curr === id ? null : curr));
      }, 1800);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedId(id);
      setAriaLiveAnnouncement(`Nombre ${text} copiado al portapapeles`);
      setTimeout(() => {
        setCopiedId((curr) => (curr === id ? null : curr));
      }, 1800);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      {/* Screen Reader Live Region */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {ariaLiveAnnouncement}
      </div>

      {/* Main Tool Container */}
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/90 overflow-hidden">
        {/* Top Control Bar */}
        <div className="p-5 sm:p-7 bg-gradient-to-b from-slate-50/80 to-white border-b border-slate-200/80 space-y-5">
          {/* Header Title & Intro inside tool */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200/70 mb-1.5">
                <SparklesIcon size={13} className="text-teal-600" />
                Generador de Nicks Gamer
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Crea tu identidad para juegos
              </h2>
            </div>

            {/* Local Favorites Counter Button */}
            {favorites.length > 0 && (
              <button
                type="button"
                onClick={() => setShowFavoritesModal(true)}
                className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold transition-colors"
                aria-label={`Ver ${favorites.length} nombres favoritos`}
              >
                <HeartIcon size={14} className="text-rose-500" />
                <span>Favoritos ({favorites.length})</span>
              </button>
            )}
          </div>

          {/* Search/Input Form */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              {/* Optional Base Word Input */}
              <div className="relative flex-1">
                <label htmlFor="gaming-base-word" className="sr-only">
                  Tu palabra o idea (opcional)
                </label>
                <input
                  id="gaming-base-word"
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      generateNewBatch();
                    }
                  }}
                  maxLength={25}
                  placeholder="Tu palabra o idea (opcional)... Ej. Lobo, Alex, Luna"
                  className="w-full pl-4 pr-10 py-3.5 bg-white border border-slate-300 hover:border-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 rounded-2xl text-slate-900 placeholder-slate-600 text-sm font-medium transition-all outline-none"
                />
                {inputText && (
                  <button
                    type="button"
                    onClick={() => {
                      setInputText("");
                    }}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
                    aria-label="Borrar texto"
                  >
                    <ClearIcon size={16} />
                  </button>
                )}
              </div>

              {/* Generate Action Button */}
              <button
                type="button"
                onClick={generateNewBatch}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 active:scale-[0.98] text-white font-bold text-sm rounded-2xl shadow-lg shadow-teal-700/20 transition-all cursor-pointer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-spin-once"
                >
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
                <span>Generar nombres</span>
              </button>
            </div>

            {/* Quick helper note */}
            <p className="text-xs text-slate-600 flex items-center gap-1.5">
              <span>💡</span>
              <span>
                {inputText.trim()
                  ? `Generando combinaciones inspiradas en "${inputText.trim()}".`
                  : "Deja el campo vacío para generar ideas aleatorias desde cero."}
              </span>
            </p>
          </div>

          {/* Style Chips & Switches */}
          <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Style Chips (Horizontal Scroll on Mobile) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {GAMING_CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    aria-pressed={isSelected}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      isSelected
                        ? "bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/10"
                        : "bg-slate-100/90 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Style Toggle: Sin símbolos / Con estilo */}
            <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0 bg-slate-100/80 px-3 py-1.5 rounded-xl border border-slate-200/60">
              <span className="text-xs font-semibold text-slate-600">
                {withStyle ? "Con estilo" : "Sin símbolos"}
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={withStyle}
                onClick={() => setWithStyle(!withStyle)}
                className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  withStyle ? "bg-teal-600" : "bg-slate-300"
                }`}
                aria-label="Alternar nombres con estilo o limpios"
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    withStyle ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Generated Results Grid */}
        <div className="p-5 sm:p-7 bg-slate-50/50">
          {namesList.length === 0 ? (
            <div className="text-center py-12 px-4">
              <p className="text-sm text-slate-500">
                Elige un estilo o pulsa “Generar nombres” para recibir ideas al instante. No necesitas escribir tu nombre.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {namesList.map((item) => {
                const isCopied = copiedId === item.id;
                const isFav = isFavorited(item.name);

                return (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-300/80 transition-all group"
                  >
                    {/* Top Row: Character Count & Favorite */}
                    <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded-md text-slate-600">
                        {item.charLength} caracteres
                      </span>

                      <button
                        type="button"
                        onClick={() => handleToggleFavorite(item.name, item.cleanName, item.charLength)}
                        className="p-1 text-slate-300 hover:text-rose-500 transition-colors"
                        aria-label={isFav ? "Eliminar de favoritos" : "Guardar en favoritos"}
                      >
                        {isFav ? (
                          <HeartIcon size={16} className="text-rose-500" />
                        ) : (
                          <HeartOutlineIcon size={16} className="text-slate-400 group-hover:text-slate-500" />
                        )}
                      </button>
                    </div>

                    {/* Nickname Display */}
                    <div className="my-1.5">
                      <p className="text-lg font-bold text-slate-900 tracking-wide font-sans break-all select-all group-hover:text-teal-700 transition-colors">
                        {item.name}
                      </p>
                    </div>

                    {/* Actions: Copiar & Personalizar */}
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => handleCopy(item.id, item.name)}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                          isCopied
                            ? "bg-emerald-600 text-white shadow-sm"
                            : "bg-slate-900 hover:bg-teal-700 text-white shadow-sm active:scale-95"
                        }`}
                        aria-label={`Copiar nick ${item.name}`}
                      >
                        {isCopied ? (
                          <>
                            <CheckIcon size={14} className="text-white" />
                            <span>✓ Copiado</span>
                          </>
                        ) : (
                          <>
                            <CopyIcon size={14} />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setCustomizingName(item.cleanName)}
                        className="px-3 py-2 bg-slate-100 hover:bg-slate-200/90 text-slate-700 hover:text-slate-900 text-xs font-semibold rounded-xl transition-colors active:scale-95"
                        aria-label={`Personalizar estilo para ${item.cleanName}`}
                      >
                        Personalizar
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Regenerate footer bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 pt-4 border-t border-slate-200/80">
            <span>¿No encuentras el ideal? Pulsa abajo para recibir otras 12 combinaciones.</span>
            <button
              type="button"
              onClick={generateNewBatch}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl font-semibold transition-colors shadow-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
              <span>Nuevas ideas</span>
            </button>
          </div>
        </div>
      </div>

      {/* Progressive Customizer Modal */}
      {customizingName && (
        <GamingNameCustomizerModal
          name={customizingName}
          isOpen={Boolean(customizingName)}
          onClose={() => setCustomizingName(null)}
        />
      )}

      {/* Favorites Modal */}
      {showFavoritesModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowFavoritesModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="fav-modal-title"
        >
          <div
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-rose-50/50">
              <div className="flex items-center gap-2">
                <HeartIcon size={18} className="text-rose-500" />
                <h3 id="fav-modal-title" className="text-base font-bold text-slate-900">
                  Tus Nombres Favoritos ({favorites.length})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowFavoritesModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-4 space-y-2">
              {favorites.length === 0 ? (
                <p className="text-xs text-slate-600 text-center py-6">
                  No tienes nombres guardados todavía. Pulsa el corazón en cualquier resultado.
                </p>
              ) : (
                favorites.map((fav) => {
                  const isCopied = copiedId === fav.id;
                  return (
                    <div
                      key={fav.id}
                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200/80"
                    >
                      <div>
                        <p className="text-sm font-bold text-slate-800">{fav.name}</p>
                        <span className="text-[11px] text-slate-600">{fav.charLength} caracteres</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleCopy(fav.id, fav.name)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                            isCopied
                              ? "bg-emerald-600 text-white"
                              : "bg-white text-slate-700 border border-slate-200 hover:border-teal-500"
                          }`}
                        >
                          {isCopied ? "✓ Copiado" : "Copiar"}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = favorites.filter((f) => f.name !== fav.name);
                            saveFavorites(updated);
                          }}
                          className="p-1.5 text-slate-400 hover:text-rose-600"
                          title="Eliminar de favoritos"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-xs">
              {favorites.length > 0 && (
                <button
                  type="button"
                  onClick={() => saveFavorites([])}
                  className="text-rose-600 hover:underline font-medium"
                >
                  Borrar todos
                </button>
              )}
              <button
                type="button"
                onClick={() => setShowFavoritesModal(false)}
                className="ml-auto px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
