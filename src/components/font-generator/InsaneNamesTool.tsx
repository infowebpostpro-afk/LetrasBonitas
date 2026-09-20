"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  INSANE_NAME_ITEMS,
  INSANE_CATEGORIES,
  InsaneNameItem,
  InsaneCategory,
} from "@/lib/unicode/freeFireInsaneData";
import { InsaneNameCard } from "./InsaneNameCard";
import { InsaneVariationModal } from "./InsaneVariationModal";
import { InsaneCustomizerPanel } from "./InsaneCustomizerPanel";

const INITIAL_DISPLAY_COUNT = 24;

export const InsaneNamesTool: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<InsaneCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [displayCount, setDisplayCount] = useState<number>(INITIAL_DISPLAY_COUNT);
  const [favorites, setFavorites] = useState<{ id: string; name: string }[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Variation Modal State
  const [variationModalData, setVariationModalData] = useState<{
    isOpen: boolean;
    baseText: string;
    originalName: string;
  }>({
    isOpen: false,
    baseText: "",
    originalName: "",
  });

  // Customizer State
  const [customizerName, setCustomizerName] = useState<string | null>(null);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("letrasbonitas_ff_insane_favs");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const saveFavorites = (favs: { id: string; name: string }[]) => {
    setFavorites(favs);
    try {
      localStorage.setItem("letrasbonitas_ff_insane_favs", JSON.stringify(favs));
    } catch {
      // Ignore
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleToggleFavorite = (id: string, name: string) => {
    const exists = favorites.some((f) => f.name === name);
    let updated: { id: string; name: string }[];
    if (exists) {
      updated = favorites.filter((f) => f.name !== name);
      showToast("Nombre eliminado de favoritos");
    } else {
      updated = [...favorites, { id, name }];
      showToast("¡Nombre guardado en favoritos! ♥");
    }
    saveFavorites(updated);
  };

  const isFavorite = useCallback(
    (name: string) => favorites.some((f) => f.name === name),
    [favorites]
  );

  // Filtered & deduplicated items list
  const filteredItems = useMemo(() => {
    let result: InsaneNameItem[] = [];

    if (activeCategory === "favoritos") {
      result = favorites.map((fav, index) => ({
        id: `fav-insane-${index}`,
        name: fav.name,
        baseText: fav.name.replace(/[^\wáéíóúüñÁÉÍÓÚÜÑ]/g, "").trim() || "Shadow",
        category: "favoritos" as InsaneCategory,
        tags: ["favorito"],
        style: "decorado",
      }));
    } else {
      result = INSANE_NAME_ITEMS.filter((item) => {
        const matchesCategory =
          activeCategory === "all" ||
          (activeCategory === "destacados" && item.featured) ||
          item.category === activeCategory;

        const matchesSearch =
          !searchQuery.trim() ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.baseText.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
      });
    }

    // Deduplicate strictly by final name string
    const seen = new Set<string>();
    return result.filter((item) => {
      if (seen.has(item.name)) return false;
      seen.add(item.name);
      return true;
    });
  }, [activeCategory, searchQuery, favorites]);

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, displayCount);
  }, [filteredItems, displayCount]);

  const handleRandomName = () => {
    if (INSANE_NAME_ITEMS.length === 0) return;
    const randomObj =
      INSANE_NAME_ITEMS[Math.floor(Math.random() * INSANE_NAME_ITEMS.length)];
    setSearchQuery(randomObj.baseText);
    setActiveCategory("all");
    setDisplayCount(INITIAL_DISPLAY_COUNT);
    showToast(`Mostrando nombres para "${randomObj.baseText}"`);
  };

  const handleClearFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  const handleOpenVariation = (baseText: string, originalName: string) => {
    setVariationModalData({
      isOpen: true,
      baseText,
      originalName,
    });
  };

  const handleOpenCustomization = (name: string) => {
    setCustomizerName(name);
    // Smooth scroll to customizer panel
    const customizerEl = document.getElementById("ff-insane-customizer");
    if (customizerEl) {
      customizerEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-950 text-white px-4 py-3 rounded-2xl shadow-2xl border border-cyan-500/50 flex items-center gap-2.5 text-sm font-extrabold animate-bounce">
          <span className="text-cyan-400 text-base">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Interactive Header */}
      <div className="bg-slate-900/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl mb-8 relative overflow-hidden">
        {/* Glow decoration background */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-cyan-300 text-xs font-black tracking-wide uppercase mb-3">
            <span>🔥</span>
            <span>Biblioteca Especializada Free Fire</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Nombres Insanos para Free Fire
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 font-medium max-w-xl mx-auto">
            Explora nicknames agresivos, oscuros e intimidantes con símbolos gamer. Elige, personaliza o copia al instante.
          </p>
        </div>

        {/* Search Bar & Action Controls */}
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayCount(INITIAL_DISPLAY_COUNT);
              }}
              placeholder="Buscar apodo insano (ej. Shadow, Killer, Dark, Demon)..."
              className="w-full min-h-[58px] px-5 sm:px-6 py-3.5 pl-13 pr-4 text-base sm:text-lg font-bold text-white placeholder:text-slate-500 rounded-2xl border border-slate-700 bg-slate-950/90 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 focus:outline-none transition-all duration-200 shadow-inner"
              aria-label="Buscar nombre insano"
            />
            <svg
              className="w-6 h-6 text-slate-400 absolute left-4.5 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2">
              <button
                onClick={handleRandomName}
                className="px-4 py-2.5 bg-indigo-950 hover:bg-indigo-900 text-cyan-300 font-extrabold text-xs sm:text-sm rounded-xl transition-all border border-indigo-800 flex items-center gap-2 shadow-sm"
              >
                <span>🎲</span>
                <span>Nombre insano aleatorio</span>
              </button>

              {(searchQuery || activeCategory !== "all") && (
                <button
                  onClick={handleClearFilters}
                  className="px-3 py-2 text-xs text-slate-400 hover:text-white underline font-bold"
                >
                  Limpiar búsqueda
                </button>
              )}
            </div>

            {/* Contextual Link to Main Generator */}
            <Link
              href="/nombres-para-free-fire/"
              className="px-4 py-2.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm rounded-xl transition-all border border-slate-700 flex items-center gap-1.5"
            >
              <span>✨</span>
              <span>Crear mi propio nombre desde cero →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Filter Tabs Bar */}
      <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          {INSANE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setDisplayCount(INITIAL_DISPLAY_COUNT);
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-500 text-slate-950 shadow-lg scale-[1.02]"
                  : "bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              {cat.id === "favoritos" && favorites.length > 0 && (
                <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-rose-500 text-white font-black">
                  {favorites.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Library Grid */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <span>🔥</span> Nombres Insanos Disponibles ({filteredItems.length})
          </h2>
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            {activeCategory === "favoritos"
              ? "Tus apodos insanos guardados"
              : "Selecciona para copiar o crear variaciones"}
          </span>
        </div>

        {visibleItems.length === 0 ? (
          <div className="bg-slate-900 rounded-3xl p-12 text-center border border-slate-800 shadow-xl">
            {activeCategory === "favoritos" ? (
              <div>
                <p className="text-base font-bold text-slate-300">
                  Todavía no tienes nombres favoritos.
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Toca el icono ♡ en cualquier tarjeta para guardarlo aquí.
                </p>
              </div>
            ) : (
              <p className="text-base font-bold text-slate-300">
                No encontramos nombres insanos para esta búsqueda o categoría.
              </p>
            )}
            <button
              onClick={handleClearFilters}
              className="mt-5 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black rounded-xl transition-all shadow-md"
            >
              Ver todos los nombres insanos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleItems.map((item) => (
              <InsaneNameCard
                key={item.id}
                id={item.id}
                name={item.name}
                baseText={item.baseText}
                categoryLabel={item.category}
                styleType={item.style}
                isFavorite={isFavorite(item.name)}
                onToggleFavorite={handleToggleFavorite}
                onRequestVariation={handleOpenVariation}
                onRequestCustomization={handleOpenCustomization}
                onCopyNotice={(copiedName) => showToast(`¡Nombre "${copiedName}" copiado!`)}
              />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {filteredItems.length > visibleItems.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setDisplayCount((prev) => prev + INITIAL_DISPLAY_COUNT)}
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700 font-extrabold text-sm rounded-2xl shadow-lg hover:shadow-cyan-950/40 transition-all duration-200"
            >
              Mostrar más nombres insanos ({filteredItems.length - visibleItems.length} restantes)
            </button>
          </div>
        )}
      </div>

      {/* Customizer Panel */}
      <div id="ff-insane-customizer">
        {customizerName && (
          <InsaneCustomizerPanel
            initialName={customizerName.replace(/[^\wáéíóúüñÁÉÍÓÚÜÑ]/g, "").trim() || "Shadow"}
            onCustomNameCopied={() => showToast("¡Nombre personalizado copiado!")}
          />
        )}
      </div>

      {/* Variation Modal */}
      <InsaneVariationModal
        isOpen={variationModalData.isOpen}
        baseText={variationModalData.baseText}
        originalName={variationModalData.originalName}
        onClose={() => setVariationModalData({ isOpen: false, baseText: "", originalName: "" })}
        onCopyNotice={(copiedName) => showToast(`¡Variación "${copiedName}" copiada!`)}
      />
    </div>
  );
};
