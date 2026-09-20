"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  FREE_FIRE_APODOS_ITEMS,
  APODO_CATEGORIES,
  ApodoItem,
  ApodoCategory,
} from "@/lib/unicode/freeFireApodosData";
import { FreeFireApodoCard } from "./FreeFireApodoCard";
import { FreeFireApodoVariationModal } from "./FreeFireApodoVariationModal";
import { FreeFireApodoCustomizerPanel } from "./FreeFireApodoCustomizerPanel";

const INITIAL_DISPLAY_COUNT = 24;

export const FreeFireApodosTool: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ApodoCategory>("all");
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
      const stored = localStorage.getItem("letrasbonitas_ff_apodos_favs");
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
      localStorage.setItem("letrasbonitas_ff_apodos_favs", JSON.stringify(favs));
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
      showToast("Apodo eliminado de favoritos");
    } else {
      updated = [...favorites, { id, name }];
      showToast("¡Apodo guardado en favoritos! ♥");
    }
    saveFavorites(updated);
  };

  const isFavorite = useCallback(
    (name: string) => favorites.some((f) => f.name === name),
    [favorites]
  );

  // Filtered & deduplicated items list
  const filteredItems = useMemo(() => {
    let result: ApodoItem[] = [];

    if (activeCategory === "favoritos") {
      result = favorites.map((fav, index) => ({
        id: `fav-apodo-${index}`,
        name: fav.name,
        baseText: fav.name.replace(/[^\wáéíóúüñÁÉÍÓÚÜÑ]/g, "").trim() || "Nox",
        category: "favoritos" as ApodoCategory,
        tags: ["favorito"],
        style: "decorado",
      }));
    } else {
      result = FREE_FIRE_APODOS_ITEMS.filter((item) => {
        let matchesCategory = false;

        if (activeCategory === "all") {
          matchesCategory = true;
        } else if (activeCategory === "destacados") {
          matchesCategory = !!item.featured;
        } else if (activeCategory === "cortos") {
          // Special criteria for "Cortos": item category is "cortos" OR baseText length <= 6
          matchesCategory = item.category === "cortos" || item.baseText.length <= 6;
        } else {
          matchesCategory = item.category === activeCategory;
        }

        const matchesSearch =
          !searchQuery.trim() ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.baseText.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
      });
    }

    // Deduplicate strictly by final string name
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
    if (FREE_FIRE_APODOS_ITEMS.length === 0) return;
    const randomObj =
      FREE_FIRE_APODOS_ITEMS[Math.floor(Math.random() * FREE_FIRE_APODOS_ITEMS.length)];
    setSearchQuery(randomObj.baseText);
    setActiveCategory("all");
    setDisplayCount(INITIAL_DISPLAY_COUNT);
    showToast(`Mostrando apodos para "${randomObj.baseText}"`);
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
    const customizerEl = document.getElementById("ff-apodo-customizer");
    if (customizerEl) {
      customizerEl.scrollIntoView({ behavior: "smooth" });
    }
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

      {/* Main Subcategory Explorer Header */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200/90 shadow-md mb-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apodos para Free Fire
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
            Explora apodos cortos, memorables y estilizados para copiar al instante, o personaliza el tuyo con símbolos gamer.
          </p>
        </div>

        {/* Search Bar & Action Buttons */}
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayCount(INITIAL_DISPLAY_COUNT);
              }}
              placeholder="Buscar un apodo (ej. Nox, Kiro, Ghost, Blaze, Rex)..."
              className="w-full min-h-[56px] px-4 sm:px-6 py-3 pl-12 pr-4 text-base sm:text-lg font-medium rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-none transition-all duration-200 shadow-inner bg-slate-50/50"
              aria-label="Buscar un apodo en la biblioteca"
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
            <div className="flex items-center gap-2">
              <button
                onClick={handleRandomName}
                className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs sm:text-sm rounded-xl transition-all border border-indigo-200 flex items-center gap-1.5"
              >
                <span>🎲</span>
                <span>Apodo aleatorio</span>
              </button>

              {(searchQuery || activeCategory !== "all") && (
                <button
                  onClick={handleClearFilters}
                  className="px-3 py-2 text-xs text-slate-600 hover:text-slate-900 underline font-semibold"
                >
                  Limpiar búsqueda
                </button>
              )}
            </div>

            {/* Contextual Link to Main Generator */}
            <Link
              href="/nombres-para-free-fire/"
              className="px-4 py-2 bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs sm:text-sm rounded-xl transition-all border border-teal-200/80 flex items-center gap-1.5"
            >
              <span>✨</span>
              <span>Crear mi propio nombre desde cero →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Filter Tabs Bar */}
      <div className="mb-6 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-1.5 min-w-max">
          {APODO_CATEGORIES.map((cat) => (
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

      {/* Apodos Grid */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span>🏷️</span> Apodos disponibles ({filteredItems.length})
          </h2>
          <span className="text-xs text-slate-500">
            {activeCategory === "favoritos"
              ? "Tus apodos favoritos guardados"
              : "Selecciona un apodo para copiar o generar variaciones"}
          </span>
        </div>

        {visibleItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            {activeCategory === "favoritos" ? (
              <div>
                <p className="text-base font-semibold text-slate-600">
                  Todavía no tienes apodos favoritos.
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Toca el icono ♡ en cualquier tarjeta para guardarlo aquí.
                </p>
              </div>
            ) : (
              <p className="text-base font-semibold text-slate-600">
                No encontramos apodos para esta búsqueda o categoría.
              </p>
            )}
            <button
              onClick={handleClearFilters}
              className="mt-4 text-sm text-teal-600 hover:text-teal-700 font-bold underline"
            >
              Ver todos los apodos de la biblioteca
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleItems.map((item) => (
              <FreeFireApodoCard
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
                onCopyNotice={(copiedName) => showToast(`¡Apodo "${copiedName}" copiado!`)}
              />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {filteredItems.length > visibleItems.length && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setDisplayCount((prev) => prev + INITIAL_DISPLAY_COUNT)}
              className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm rounded-xl shadow-xs hover:shadow transition-all duration-200"
            >
              Mostrar más apodos ({filteredItems.length - visibleItems.length} restantes)
            </button>
          </div>
        )}
      </div>

      {/* Customizer Panel */}
      <div id="ff-apodo-customizer">
        {customizerName && (
          <FreeFireApodoCustomizerPanel
            initialName={customizerName.replace(/[^\wáéíóúüñÁÉÍÓÚÜÑ]/g, "").trim() || "Nox"}
            onCustomNameCopied={() => showToast("¡Apodo personalizado copiado!")}
          />
        )}
      </div>

      {/* Variation Modal */}
      <FreeFireApodoVariationModal
        isOpen={variationModalData.isOpen}
        baseText={variationModalData.baseText}
        originalName={variationModalData.originalName}
        onClose={() => setVariationModalData({ isOpen: false, baseText: "", originalName: "" })}
        onCopyNotice={(copiedName) => showToast(`¡Variación "${copiedName}" copiada!`)}
      />
    </div>
  );
};
