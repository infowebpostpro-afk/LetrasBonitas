"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  FREE_FIRE_CLANES_ITEMS,
  CLAN_CATEGORIES,
  ClanItem,
  ClanCategory,
} from "@/lib/unicode/freeFireClanesData";
import { FreeFireClanCard } from "./FreeFireClanCard";
import { FreeFireClanCustomizerPanel } from "./FreeFireClanCustomizerPanel";
import { copyText } from "@/lib/clipboard";

const INITIAL_DISPLAY_COUNT = 18;

const RANDOM_CLAN_PRESETS = [
  "Shadow Squad",
  "Titan Legends",
  "Dark Guerreros",
  "Elite Force",
  "Nova Warriors",
  "Ghost Army",
  "Royal Squad",
  "Fire Kings",
  "Vipers Team",
  "Aesthetic Clan",
  "Katana Squad",
  "Ángeles Negros",
  "Imperio Real",
  "Venom Army",
  "Valkyrie Clan",
];

export const FreeFireClanesTool: React.FC = () => {
  const [baseWord, setBaseWord] = useState<string>("SHADOW");
  const [activeCategory, setActiveCategory] = useState<ClanCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [displayCount, setDisplayCount] = useState<number>(INITIAL_DISPLAY_COUNT);
  const [favorites, setFavorites] = useState<{ id: string; name: string }[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedPreview, setCopiedPreview] = useState(false);

  // Customizer State
  const [customizerName, setCustomizerName] = useState<string | null>(null);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("letrasbonitas_ff_clanes_favs");
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
      localStorage.setItem("letrasbonitas_ff_clanes_favs", JSON.stringify(favs));
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
      showToast("Nombre de clan eliminado de favoritos");
    } else {
      updated = [...favorites, { id, name }];
      showToast("¡Nombre de clan guardado en favoritos! ♥");
    }
    saveFavorites(updated);
  };

  const isFavorite = useCallback(
    (name: string) => favorites.some((f) => f.name === name),
    [favorites]
  );

  // Generate variations based on baseWord input
  const generatedVariations = useMemo(() => {
    const word = baseWord.trim().toUpperCase() || "SHADOW";
    const spaced = word.split("").join(" ");
    const dotted = word.split("").join("•");

    return [
      { id: "gen-1", name: `亗 ${word} 亗`, label: "Estilo Corona Rey" },
      { id: "gen-2", name: `『${word}』`, label: "Estilo Élite" },
      { id: "gen-3", name: `么 ${word} 么`, label: "Estilo Mística" },
      { id: "gen-4", name: `꧁${word}꧂`, label: "Estilo Alas Poderosas" },
      { id: "gen-5", name: `${word}々`, label: "Estilo Clan Noma" },
      { id: "gen-6", name: `乂${word}乂`, label: "Estilo Samurái X" },
      { id: "gen-7", name: `★ ${word} ★`, label: "Estilo Estrella Pro" },
      { id: "gen-8", name: `『${spaced}』`, label: "Estilo Élite Espaciado" },
      { id: "gen-9", name: `〆${word}`, label: "Estilo Shime Lanza" },
      { id: "gen-10", name: `メ ${word} メ`, label: "Estilo Katana" },
      { id: "gen-11", name: `☠ ${word} ☠`, label: "Estilo Calavera Oscura" },
      { id: "gen-12", name: `✦ ${dotted} ✦`, label: "Estilo Aesthetic Puntos" },
    ];
  }, [baseWord]);

  // Main featured preview
  const primaryPreviewName = generatedVariations[0]?.name || "亗 SHADOW SQUAD 亗";

  const handleCopyPreview = async () => {
    const success = await copyText(primaryPreviewName);
    if (success) {
      setCopiedPreview(true);
      showToast(`¡Nombre de clan "${primaryPreviewName}" copiado!`);
      setTimeout(() => setCopiedPreview(false), 2000);
    }
  };

  const handleRandomClan = () => {
    const randomPreset =
      RANDOM_CLAN_PRESETS[Math.floor(Math.random() * RANDOM_CLAN_PRESETS.length)];
    setBaseWord(randomPreset);
    showToast(`Nombre aleatorio seleccionado: "${randomPreset}"`);
  };

  // Filtered & deduplicated items for clan library
  const filteredItems = useMemo(() => {
    let result: ClanItem[] = [];

    if (activeCategory === "favoritos") {
      result = favorites.map((fav, index) => ({
        id: `fav-clan-${index}`,
        name: fav.name,
        baseName: fav.name.replace(/[^\wáéíóúüñÁÉÍÓÚÜÑ\s]/g, "").trim() || "SHADOW SQUAD",
        category: "favoritos" as ClanCategory,
        tags: ["favorito"],
        style: "cool",
      }));
    } else {
      result = FREE_FIRE_CLANES_ITEMS.filter((item) => {
        const matchesCategory =
          activeCategory === "all" ||
          (activeCategory === "destacados" && item.featured) ||
          item.category === activeCategory;

        const matchesSearch =
          !searchQuery.trim() ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.baseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
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

  const handleClearFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  const handleOpenCustomization = (name: string) => {
    setCustomizerName(name);
    // Smooth scroll to customizer panel
    const customizerEl = document.getElementById("ff-clan-customizer");
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

      {/* Hero Section */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-md mb-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold tracking-wide uppercase mb-3">
            <span>🛡️</span>
            <span>Especializado en Escuadras y Clanes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Nombres para Clanes de Free Fire
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium max-w-xl mx-auto">
            Encuentra nombres originales para tu clan, personalízalos y copia tu favorito con un toque.
          </p>
        </div>

        {/* Step 1 Input Generator Bar */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            <div className="relative w-full flex-1">
              <input
                type="text"
                value={baseWord}
                onChange={(e) => setBaseWord(e.target.value)}
                placeholder="Escribe una palabra para tu clan (ej. Shadow, Titanes, Guerreros)..."
                className="w-full min-h-[56px] px-5 py-3.5 text-base sm:text-lg font-bold rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-none transition-all duration-200 shadow-inner bg-slate-50/50 text-slate-900 uppercase placeholder:normal-case"
                aria-label="Palabra base para nombre de clan"
              />
            </div>

            <button
              onClick={() => {
                if (!baseWord.trim()) setBaseWord("SHADOW");
                showToast("¡Variaciones de clan generadas!");
              }}
              className="w-full sm:w-auto min-h-[56px] px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm sm:text-base rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 shrink-0"
            >
              <span>✨</span>
              <span>Generar nombres</span>
            </button>
          </div>

          {/* Random & Secondary Action Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <button
              onClick={handleRandomClan}
              className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs sm:text-sm rounded-xl transition-all border border-indigo-200 flex items-center gap-1.5"
            >
              <span>🎲</span>
              <span>Nombre aleatorio</span>
            </button>

            <Link
              href="/nombres-para-free-fire/"
              className="px-4 py-2 bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs sm:text-sm rounded-xl transition-all border border-teal-200/80 flex items-center gap-1.5"
            >
              <span>✨</span>
              <span>Generador general de nombres →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Live Clan Preview Box */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-lg mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-extrabold text-teal-400 uppercase tracking-widest block mb-1">
            Vista previa del clan
          </span>
          <div className="text-2xl sm:text-3xl font-black text-white tracking-wide break-all">
            {primaryPreviewName}
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Tu nombre de clan personalizado listo para copiar
          </p>
        </div>

        <button
          onClick={handleCopyPreview}
          className={`shrink-0 w-full sm:w-auto min-h-[46px] px-6 py-2.5 rounded-xl font-extrabold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            copiedPreview
              ? "bg-emerald-600 text-white"
              : "bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md active:scale-95"
          }`}
        >
          {copiedPreview ? (
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
              <span>Copiar Vista Previa</span>
            </>
          )}
        </button>
      </div>

      {/* Instant Generated Variations Grid for baseWord */}
      {baseWord.trim() && (
        <div className="mb-10 bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>⚡</span> Variaciones generadas para &quot;{baseWord.trim().toUpperCase()}&quot;
            </h2>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Toca cualquier variación para copiarla
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {generatedVariations.map((item) => (
              <div
                key={item.id}
                className="p-3.5 bg-white hover:bg-teal-50/40 rounded-xl border border-slate-200/90 hover:border-teal-400 transition-all flex items-center justify-between gap-3 shadow-2xs group"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                    {item.label}
                  </span>
                  <span className="text-base font-black text-slate-900 break-all select-all">
                    {item.name}
                  </span>
                </div>

                <button
                  onClick={async () => {
                    const success = await copyText(item.name);
                    if (success) {
                      showToast(`¡Clan "${item.name}" copiado!`);
                    }
                  }}
                  className="shrink-0 py-1.5 px-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition-all shadow-2xs active:scale-95"
                >
                  Copiar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Clan Library Section */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200/90 shadow-md mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <span>📚</span> Biblioteca de Nombres para Clanes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Explora una amplia colección de nombres de equipo predefinidos listos para copiar.
            </p>
          </div>

          {/* Instant Search input over library */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayCount(INITIAL_DISPLAY_COUNT);
              }}
              placeholder="Buscar nombres de clan..."
              className="w-full px-4 py-2 pl-10 text-sm font-medium rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 focus:outline-none transition-all bg-slate-50"
              aria-label="Buscar nombres de clan en la biblioteca"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
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

        {/* Category Filter Chips / Pills */}
        <div className="mb-6 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 min-w-max">
            {CLAN_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setDisplayCount(INITIAL_DISPLAY_COUNT);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-md scale-[1.02]"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-2xs"
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

        {/* Clan Grid */}
        <div>
          {visibleItems.length === 0 ? (
            <div className="bg-slate-50 rounded-2xl p-12 text-center border border-slate-200">
              {activeCategory === "favoritos" ? (
                <div>
                  <p className="text-base font-semibold text-slate-600">
                    Todavía no tienes nombres favoritos.
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Toca el icono ♡ en cualquier tarjeta de clan para guardarlo aquí.
                  </p>
                </div>
              ) : (
                <p className="text-base font-semibold text-slate-600">
                  No encontramos nombres con esa búsqueda. Prueba otra palabra.
                </p>
              )}
              <button
                onClick={handleClearFilters}
                className="mt-4 text-sm text-teal-600 hover:text-teal-700 font-bold underline"
              >
                Ver todos los nombres de clanes
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visibleItems.map((item) => (
                <FreeFireClanCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  baseName={item.baseName}
                  categoryLabel={item.category}
                  styleType={item.style}
                  isFavorite={isFavorite(item.name)}
                  onToggleFavorite={handleToggleFavorite}
                  onRequestCustomization={handleOpenCustomization}
                  onCopyNotice={(copiedName) => showToast(`¡Clan "${copiedName}" copiado!`)}
                />
              ))}
            </div>
          )}

          {/* Progressive Load More Button */}
          {filteredItems.length > visibleItems.length && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setDisplayCount((prev) => prev + INITIAL_DISPLAY_COUNT)}
                className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm rounded-xl shadow-xs hover:shadow transition-all duration-200"
              >
                Mostrar más nombres ({filteredItems.length - visibleItems.length} restantes)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Brand Safety Compatibility Disclaimer */}
      <div className="mb-8 p-4 rounded-xl bg-slate-100/80 border border-slate-200 text-center">
        <p className="text-xs text-slate-600 font-medium">
          ℹ️ La compatibilidad de algunos caracteres y símbolos puede variar según el dispositivo, versión del juego o plataforma.
        </p>
      </div>

      {/* Customizer Panel */}
      <div id="ff-clan-customizer">
        {customizerName && (
          <FreeFireClanCustomizerPanel
            initialName={customizerName}
            onCustomNameCopied={() => showToast("¡Nombre de clan personalizado copiado!")}
          />
        )}
      </div>
    </div>
  );
};
