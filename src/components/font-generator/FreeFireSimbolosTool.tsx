"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  FREE_FIRE_SIMBOLOS_ITEMS,
  SYMBOL_CATEGORIES,
  SymbolItem,
  SymbolCategory,
  SymbolPreset,
} from "@/lib/unicode/freeFireSimbolosData";
import { FreeFireSymbolCard } from "./FreeFireSymbolCard";
import { FreeFireSymbolComposer } from "./FreeFireSymbolComposer";

const INITIAL_DISPLAY_COUNT = 36;
const MAX_RECENT_COUNT = 12;

export const FreeFireSimbolosTool: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SymbolCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [displayCount, setDisplayCount] = useState<number>(INITIAL_DISPLAY_COUNT);

  // Persistence States
  const [favorites, setFavorites] = useState<{ id: string; symbol: string }[]>([]);
  const [recentSymbols, setRecentSymbols] = useState<string[]>([]);
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load persistence from localStorage
  useEffect(() => {
    try {
      const storedFavs = localStorage.getItem("letrasbonitas_ff_simbolos_favs");
      if (storedFavs) {
        setFavorites(JSON.parse(storedFavs));
      }
      const storedRecents = localStorage.getItem("letrasbonitas_ff_simbolos_recientes");
      if (storedRecents) {
        setRecentSymbols(JSON.parse(storedRecents));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const saveFavorites = (favs: { id: string; symbol: string }[]) => {
    setFavorites(favs);
    try {
      localStorage.setItem("letrasbonitas_ff_simbolos_favs", JSON.stringify(favs));
    } catch {
      // Ignore
    }
  };

  const addRecentSymbol = (symbol: string) => {
    setRecentSymbols((prev) => {
      const updated = [symbol, ...prev.filter((s) => s !== symbol)].slice(0, MAX_RECENT_COUNT);
      try {
        localStorage.setItem("letrasbonitas_ff_simbolos_recientes", JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleToggleFavorite = (id: string, symbol: string) => {
    const exists = favorites.some((f) => f.symbol === symbol);
    let updated: { id: string; symbol: string }[];
    if (exists) {
      updated = favorites.filter((f) => f.symbol !== symbol);
      showToast(`Símbolo ${symbol} eliminado de favoritos`);
    } else {
      updated = [...favorites, { id, symbol }];
      showToast(`¡Símbolo ${symbol} guardado en favoritos! ♥`);
    }
    saveFavorites(updated);
  };

  const isFavorite = useCallback(
    (symbol: string) => favorites.some((f) => f.symbol === symbol),
    [favorites]
  );

  const handleAddToComposer = (symbol: string) => {
    setSelectedSymbols((prev) => [...prev, symbol]);
    addRecentSymbol(symbol);
    showToast(`Símbolo ${symbol} añadido a la combinación`);

    // Smooth scroll to composer if needed
    const composerEl = document.getElementById("ff-symbol-composer");
    if (composerEl && selectedSymbols.length === 0) {
      composerEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRemoveSymbol = (index: number) => {
    setSelectedSymbols((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMoveSymbolLeft = (index: number) => {
    if (index <= 0) return;
    setSelectedSymbols((prev) => {
      const copy = [...prev];
      const temp = copy[index - 1];
      copy[index - 1] = copy[index];
      copy[index] = temp;
      return copy;
    });
  };

  const handleMoveSymbolRight = (index: number) => {
    setSelectedSymbols((prev) => {
      if (index >= prev.length - 1) return prev;
      const copy = [...prev];
      const temp = copy[index + 1];
      copy[index + 1] = copy[index];
      copy[index] = temp;
      return copy;
    });
  };

  const handleClearSymbols = () => {
    setSelectedSymbols([]);
  };

  const handleSelectPreset = (preset: SymbolPreset) => {
    setSelectedSymbols([preset.leftSymbol, preset.rightSymbol]);
    showToast(`Preset "${preset.name}" cargado`);
  };

  // Filtered symbols list
  const filteredSymbols = useMemo(() => {
    let result: SymbolItem[] = [];

    if (activeCategory === "favoritos") {
      result = favorites.map((fav, index) => ({
        id: `fav-sym-${index}`,
        symbol: fav.symbol,
        name: `Símbolo ${fav.symbol}`,
        category: "favoritos" as SymbolCategory,
        tags: ["favorito"],
      }));
    } else if (activeCategory === "recientes") {
      result = recentSymbols.map((sym, index) => ({
        id: `recent-sym-${index}`,
        symbol: sym,
        name: `Símbolo ${sym}`,
        category: "recientes" as SymbolCategory,
        tags: ["reciente"],
      }));
    } else {
      result = FREE_FIRE_SIMBOLOS_ITEMS.filter((item) => {
        const matchesCategory =
          activeCategory === "all" ||
          (activeCategory === "populares" && item.featured) ||
          item.category === activeCategory;

        const matchesSearch =
          !searchQuery.trim() ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.symbol.includes(searchQuery) ||
          item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
      });
    }

    // Deduplicate strictly by symbol string
    const seen = new Set<string>();
    return result.filter((item) => {
      if (seen.has(item.symbol)) return false;
      seen.add(item.symbol);
      return true;
    });
  }, [activeCategory, searchQuery, favorites, recentSymbols]);

  const visibleSymbols = useMemo(() => {
    return filteredSymbols.slice(0, displayCount);
  }, [filteredSymbols, displayCount]);

  const handleClearFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-teal-500/40 flex items-center gap-2 text-sm font-semibold animate-bounce">
          <span className="text-teal-400">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200/90 shadow-md mb-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold tracking-wide uppercase mb-3">
            <span>⚡</span>
            <span>Biblioteca de Símbolos Gamer</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Símbolos para Free Fire
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium max-w-xl mx-auto">
            Encuentra símbolos para decorar tus nombres y nicks de Free Fire. Copia un símbolo o combina varios en segundos.
          </p>
        </div>

        {/* Instant Search Bar & Controls */}
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayCount(INITIAL_DISPLAY_COUNT);
              }}
              placeholder="Buscar símbolos (ej. corona, estrella, gamer, ala, cruz)..."
              className="w-full min-h-[56px] px-4 sm:px-6 py-3 pl-12 pr-4 text-base sm:text-lg font-medium rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-none transition-all duration-200 shadow-inner bg-slate-50/50"
              aria-label="Buscar símbolos en la biblioteca"
            />
            <svg
              className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            {searchQuery || activeCategory !== "all" ? (
              <button
                onClick={handleClearFilters}
                className="px-3 py-2 text-xs text-slate-600 hover:text-slate-900 underline font-semibold"
              >
                Limpiar búsqueda
              </button>
            ) : (
              <span className="text-xs text-slate-500">
                Toca cualquier símbolo para copiarlo al instante
              </span>
            )}

            <Link
              href="/nombres-para-free-fire/"
              className="px-4 py-2 bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs sm:text-sm rounded-xl transition-all border border-teal-200/80 flex items-center gap-1.5"
            >
              <span>✨</span>
              <span>Generador principal de nombres →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Symbol Composer Section */}
      <div id="ff-symbol-composer">
        <FreeFireSymbolComposer
          selectedSymbols={selectedSymbols}
          onRemoveSymbol={handleRemoveSymbol}
          onMoveSymbolLeft={handleMoveSymbolLeft}
          onMoveSymbolRight={handleMoveSymbolRight}
          onClearSymbols={handleClearSymbols}
          onSelectPreset={handleSelectPreset}
          onCopyNotice={(copiedText) => showToast(`¡Combinación "${copiedText}" copiada!`)}
        />
      </div>

      {/* Recent Symbols Bar (if any) */}
      {recentSymbols.length > 0 && (
        <div className="mb-6 p-4 bg-white rounded-2xl border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <span>🕒</span> Usados recientemente
            </span>
            <span className="text-[11px] text-slate-400">Últimos símbolos copiados</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {recentSymbols.map((sym, i) => (
              <button
                key={`recent-${sym}-${i}`}
                onClick={() => handleAddToComposer(sym)}
                className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-teal-50 text-slate-900 hover:text-teal-700 font-bold text-base border border-slate-200 transition-colors shadow-2xs"
                title={`Toca para añadir ${sym}`}
              >
                {sym}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Category Filter Chips / Pills */}
      <div className="mb-6 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-1.5 min-w-max">
          {SYMBOL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setDisplayCount(INITIAL_DISPLAY_COUNT);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-white shadow-md scale-[1.02]"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-2xs"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              {cat.id === "favoritos" && favorites.length > 0 && (
                <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-red-500 text-white font-bold">
                  {favorites.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Symbol Grid Container */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200/90 shadow-md mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span>✨</span> Símbolos disponibles ({filteredSymbols.length})
          </h2>
          <span className="text-xs text-slate-500">
            {activeCategory === "favoritos"
              ? "Tus símbolos favoritos guardados"
              : "Toca cualquier símbolo para copiarlo"}
          </span>
        </div>

        {visibleSymbols.length === 0 ? (
          <div className="bg-slate-50 rounded-2xl p-12 text-center border border-slate-200">
            {activeCategory === "favoritos" ? (
              <div>
                <p className="text-base font-semibold text-slate-600">
                  Todavía no tienes símbolos favoritos.
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Toca el icono ♡ en cualquier símbolo para guardarlo aquí.
                </p>
              </div>
            ) : activeCategory === "recientes" ? (
              <p className="text-base font-semibold text-slate-600">
                Aún no has usado símbolos recientemente.
              </p>
            ) : (
              <p className="text-base font-semibold text-slate-600">
                No encontramos símbolos con esa búsqueda. Prueba otra palabra.
              </p>
            )}
            <button
              onClick={handleClearFilters}
              className="mt-4 text-sm text-teal-600 hover:text-teal-700 font-bold underline"
            >
              Ver todos los símbolos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
            {visibleSymbols.map((item) => (
              <FreeFireSymbolCard
                key={item.id}
                id={item.id}
                symbol={item.symbol}
                name={item.name}
                category={item.category}
                isFavorite={isFavorite(item.symbol)}
                onToggleFavorite={handleToggleFavorite}
                onAddToComposer={handleAddToComposer}
                onCopyNotice={(copiedSym) => {
                  addRecentSymbol(copiedSym);
                  showToast(`¡Símbolo ${copiedSym} copiado!`);
                }}
              />
            ))}
          </div>
        )}

        {/* Progressive Load More Button */}
        {filteredSymbols.length > visibleSymbols.length && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setDisplayCount((prev) => prev + INITIAL_DISPLAY_COUNT)}
              className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm rounded-xl shadow-xs hover:shadow transition-all duration-200"
            >
              Mostrar más símbolos ({filteredSymbols.length - visibleSymbols.length} restantes)
            </button>
          </div>
        )}
      </div>

      {/* Brand Safety Compatibility Disclaimer */}
      <div className="mb-8 p-4 rounded-xl bg-slate-100/80 border border-slate-200 text-center">
        <p className="text-xs text-slate-600 font-medium">
          ℹ️ La compatibilidad de algunos símbolos puede variar según el dispositivo, versión del juego o plataforma.
        </p>
      </div>
    </div>
  );
};
