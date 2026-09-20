"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { fontStyles, FontStyle } from "@/lib/unicode";
import {
  FREE_FIRE_CATEGORIES,
  FREE_FIRE_DECORATIONS,
  RANDOM_BASE_NAMES,
  FreeFireCategory,
} from "@/lib/unicode/freeFireData";
import { FreeFireResultCard } from "./FreeFireResultCard";
import { FreeFireCustomizer } from "./FreeFireCustomizer";
import { FreeFireProfilePreview } from "./FreeFireProfilePreview";

const TOOL_CHAR_LIMIT = 30;
const INITIAL_DISPLAY_COUNT = 24;

interface GeneratedNameResult {
  id: string;
  name: string;
  category: FreeFireCategory;
  categoryLabel: string;
}

export const FreeFireNameGenerator: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<FreeFireCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [displayCount, setDisplayCount] = useState<number>(INITIAL_DISPLAY_COUNT);
  const [favorites, setFavorites] = useState<{ id: string; name: string }[]>([]);
  const [emptyWarning, setEmptyWarning] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedCustomName, setSelectedCustomName] = useState<string>("");

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("letrasbonitas_ff_favorites");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Save favorites to localStorage
  const saveFavorites = (favs: { id: string; name: string }[]) => {
    setFavorites(favs);
    try {
      localStorage.setItem("letrasbonitas_ff_favorites", JSON.stringify(favs));
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

  // Generate names list dynamically based on input or fallback default
  const generatedResults = useMemo(() => {
    const textToUse = inputText.trim() || "Shadow";
    const results: GeneratedNameResult[] = [];
    const seen = new Set<string>();

    const addUnique = (nameStr: string, cat: FreeFireCategory, label: string, keyPrefix: string) => {
      const trimmed = nameStr.trim();
      if (!trimmed || seen.has(trimmed)) return;
      seen.add(trimmed);
      results.push({
        id: `${keyPrefix}-${results.length}`,
        name: trimmed,
        category: cat,
        categoryLabel: label,
      });
    };

    // 1. Direct Font Style transformations
    fontStyles.forEach((styleItem: FontStyle) => {
      if (styleItem.id === "original") return;
      const transformed = styleItem.transform(textToUse);

      let cat: FreeFireCategory = "cool";
      if (styleItem.category === "cursive" || styleItem.category === "elegant") cat = "cursivos";
      else if (styleItem.category === "bold") cat = "negritas";
      else if (styleItem.category === "gothic") cat = "goticos";
      else if (styleItem.category === "aesthetic") cat = "aesthetic";
      else if (styleItem.category === "small" || styleItem.category === "decorative") cat = "minimalistas";

      addUnique(transformed, cat, styleItem.name, `style-${styleItem.id}`);
    });

    // 2. High-impact Free Fire Gamer Decor combinations
    FREE_FIRE_DECORATIONS.forEach((dec) => {
      // Pick a few representative styles to combine with decorations
      const stylesToCombine = [
        { id: "script-bold", name: "Cursiva Pro", transform: fontStyles.find((s) => s.id === "script-bold")?.transform },
        { id: "fraktur-bold", name: "Gótico Pro", transform: fontStyles.find((s) => s.id === "fraktur-bold")?.transform },
        { id: "sans-bold", name: "Negrita Pro", transform: fontStyles.find((s) => s.id === "sans-bold")?.transform },
        { id: "small-caps", name: "Small Caps", transform: fontStyles.find((s) => s.id === "small-caps")?.transform },
      ];

      stylesToCombine.forEach((st) => {
        if (st.transform) {
          const styledVal = st.transform(textToUse);
          const decoratedName = `${dec.prefix}${styledVal}${dec.suffix}`;

          let decCat: FreeFireCategory = "gamer";
          if (dec.category === "pro") decCat = "pro";
          else if (dec.category === "goticos") decCat = "goticos";
          else if (dec.category === "aesthetic") decCat = "aesthetic";
          else if (dec.category === "minimalistas") decCat = "minimalistas";

          addUnique(decoratedName, decCat, `${dec.name}`, `dec-${dec.id}-${st.id}`);
        }
      });
    });

    return results;
  }, [inputText]);

  // Filtered results
  const filteredResults = useMemo(() => {
    if (activeCategory === "favoritos") {
      return favorites.map((fav, index) => ({
        id: `fav-${index}`,
        name: fav.name,
        category: "favoritos" as FreeFireCategory,
        categoryLabel: "Favorito",
      }));
    }

    return generatedResults.filter((res) => {
      const matchesCategory =
        activeCategory === "all" ||
        res.category === activeCategory ||
        (activeCategory === "simbolos" && (res.name.includes("꧁") || res.name.includes("亗") || res.name.includes("★")));

      const matchesSearch =
        !searchQuery.trim() ||
        res.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [generatedResults, activeCategory, searchQuery, favorites]);

  const visibleResults = useMemo(() => {
    return filteredResults.slice(0, displayCount);
  }, [filteredResults, displayCount]);

  const handleGenerateClick = () => {
    if (!inputText.trim()) {
      setEmptyWarning("Escribe un nombre para generar estilos.");
    } else {
      setEmptyWarning(null);
      setDisplayCount(INITIAL_DISPLAY_COUNT);
    }
  };

  const handleRandomize = () => {
    const randomIndex = Math.floor(Math.random() * RANDOM_BASE_NAMES.length);
    const randomName = RANDOM_BASE_NAMES[randomIndex];
    setInputText(randomName);
    setEmptyWarning(null);
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  const handleClear = () => {
    setInputText("");
    setActiveCategory("all");
    setSearchQuery("");
    setEmptyWarning(null);
    setDisplayCount(INITIAL_DISPLAY_COUNT);
    setSelectedCustomName("");
  };

  const currentPreviewNickname = selectedCustomName || (visibleResults[0]?.name || "꧁Sʜᴀᴅᴏᴡ꧂");

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-teal-500/40 flex items-center gap-2 text-sm font-semibold animate-bounce">
          <span className="text-teal-400">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Input Shell */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200/90 shadow-md mb-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Generador de Nombres para Free Fire
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
            Crea apodos personalizados, símbolos insanos, letras cursivas y decoraciones gamer para tu nick en segundos.
          </p>
        </div>

        {/* Input & Counter Box */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                if (emptyWarning) setEmptyWarning(null);
              }}
              placeholder="Escribe tu nombre..."
              maxLength={TOOL_CHAR_LIMIT + 10}
              className="w-full min-h-[56px] px-4 sm:px-6 py-3 pr-20 text-lg sm:text-xl font-medium rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-none transition-all duration-200 shadow-inner bg-slate-50/50"
              aria-label="Escribe tu nombre para Free Fire"
            />

            {/* Character Counter */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-200 shadow-2xs">
              <span className={inputText.length > TOOL_CHAR_LIMIT ? "text-amber-600 font-bold" : "text-slate-600"}>
                {inputText.length}
              </span>{" "}
              / {TOOL_CHAR_LIMIT}
            </div>
          </div>

          {/* User limit warning */}
          {inputText.length > TOOL_CHAR_LIMIT && (
            <p className="text-xs text-amber-600 font-medium mt-1.5 px-1">
              ⚠️ Este nombre supera el límite de {TOOL_CHAR_LIMIT} caracteres configurado en la herramienta.
            </p>
          )}

          {/* Empty input notice */}
          {emptyWarning && (
            <div className="mt-3 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold flex items-center gap-2">
              <span>💡</span>
              <span>{emptyWarning}</span>
            </div>
          )}

          {/* Main Controls Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            <button
              onClick={handleGenerateClick}
              className="sm:col-span-1 min-h-[48px] bg-teal-600 hover:bg-teal-700 text-white font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              <span>✨</span>
              <span>Generar nombres</span>
            </button>

            <button
              onClick={handleRandomize}
              className="min-h-[48px] bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>🎲</span>
              <span>Generar aleatorio</span>
            </button>

            <button
              onClick={handleClear}
              className="min-h-[48px] bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>🗑️</span>
              <span>Limpiar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Filters Bar & Search */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none w-full sm:w-auto">
            {FREE_FIRE_CATEGORIES.map((cat) => (
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

          {/* Search Box */}
          <div className="relative shrink-0 w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar estilos..."
              className="w-full px-3.5 py-2 pl-9 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
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
        </div>
      </div>

      {/* Profile Card Live Preview */}
      <div className="mb-8">
        <FreeFireProfilePreview nickname={currentPreviewNickname} />
      </div>

      {/* Results Header & Grid */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span>📋</span> Resultados ({filteredResults.length})
          </h2>
          <span className="text-xs text-slate-500">
            {activeCategory === "favoritos"
              ? "Tus apodos favoritos guardados"
              : "Toca un apodo para copiar o personalizar"}
          </span>
        </div>

        {visibleResults.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <p className="text-base font-semibold text-slate-600">
              No se encontraron resultados para la búsqueda o filtro seleccionado.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 text-sm text-teal-600 hover:text-teal-700 font-bold underline"
            >
              Ver todos los estilos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleResults.map((item) => (
              <FreeFireResultCard
                key={item.id}
                id={item.id}
                name={item.name}
                categoryLabel={item.categoryLabel}
                isFavorite={isFavorite(item.name)}
                onToggleFavorite={handleToggleFavorite}
                onSelectForCustomization={(selectedName) => setSelectedCustomName(selectedName)}
              />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {filteredResults.length > visibleResults.length && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setDisplayCount((prev) => prev + INITIAL_DISPLAY_COUNT)}
              className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm rounded-xl shadow-sm hover:shadow transition-all duration-200"
            >
              Mostrar más resultados ({filteredResults.length - visibleResults.length} restantes)
            </button>
          </div>
        )}
      </div>

      {/* Customizer Section */}
      <FreeFireCustomizer
        initialName={inputText.trim() || "Shadow"}
        onCustomNameCopied={(customName) => {
          setSelectedCustomName(customName);
          showToast("¡Apodo personalizado copiado!");
        }}
      />
    </div>
  );
};
