"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  NICKS_STYLES,
  NICKS_STARTER_LIST,
  QUICK_SEEDS,
  NickStyle,
  NickLengthFilter,
  NickCardItem,
  generateNicksBatch,
  getNickLabVariations,
} from "@/lib/gamingNames/nicksJuegosData";
import { NicksCustomizerModal } from "./NicksCustomizerModal";
import {
  CopyIcon,
  CheckIcon,
  HeartIcon,
  HeartOutlineIcon,
  ClearIcon,
  SparklesIcon,
} from "@/components/ui/Icons";
import { copyText } from "@/lib/clipboard";

interface SavedNickItem {
  id: string;
  name: string;
  charLength: number;
}

export const NicksParaJuegosTool: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<NickStyle>("todos");
  const [lengthFilter, setLengthFilter] = useState<NickLengthFilter>("all");
  const [seedWord, setSeedWord] = useState<string>("");
  const [nicksList, setNicksList] = useState<NickCardItem[]>(NICKS_STARTER_LIST);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [ariaLiveAnnouncement, setAriaLiveAnnouncement] = useState<string>("");

  // Customizer modal state
  const [customizingName, setCustomizingName] = useState<string | null>(null);

  // Favorites state
  const [favorites, setFavorites] = useState<SavedNickItem[]>([]);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState<boolean>(false);

  // Nick Lab state ("Variar")
  const [activeNickLabTarget, setActiveNickLabTarget] = useState<string | null>(null);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("letrasbonitas_nicks_juegos_favs");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  const saveFavorites = (items: SavedNickItem[]) => {
    setFavorites(items);
    try {
      localStorage.setItem("letrasbonitas_nicks_juegos_favs", JSON.stringify(items));
    } catch {
      // ignore
    }
  };

  const handleToggleFavorite = (item: NickCardItem) => {
    const exists = favorites.some((f) => f.name.toLowerCase() === item.cleanName.toLowerCase());
    let updated: SavedNickItem[];
    if (exists) {
      updated = favorites.filter((f) => f.name.toLowerCase() !== item.cleanName.toLowerCase());
      setAriaLiveAnnouncement(`${item.cleanName} eliminado de tus favoritos`);
    } else {
      const newFav: SavedNickItem = {
        id: `fav-${Date.now()}-${item.cleanName}`,
        name: item.cleanName,
        charLength: item.charLength,
      };
      updated = [newFav, ...favorites];
      setAriaLiveAnnouncement(`${item.cleanName} guardado en tus favoritos`);
    }
    saveFavorites(updated);
  };

  const isFavorited = useCallback(
    (name: string) => favorites.some((f) => f.name.toLowerCase() === name.toLowerCase()),
    [favorites]
  );

  // Generate batch
  const handleGenerate = useCallback(() => {
    setActiveNickLabTarget(null);
    const newBatch = generateNicksBatch({
      seedWord,
      style: selectedStyle,
      lengthFilter,
      batchSize: 12,
    });
    setNicksList(newBatch);
    setAriaLiveAnnouncement("Nuevos nicks gamer generados");
  }, [seedWord, selectedStyle, lengthFilter]);

  // Handle Nick Lab trigger ("Variar")
  const handleVariar = (item: NickCardItem) => {
    setActiveNickLabTarget(item.cleanName);
    const variations = getNickLabVariations(item.cleanName);
    setNicksList(variations);
    setAriaLiveAnnouncement(`Nick Lab: mostrando variaciones tácticas para ${item.cleanName}`);
  };

  // One-tap copy
  const handleCopy = async (id: string, text: string) => {
    try {
      const ok = await copyText(text);
      if (ok) {
        setCopiedId(id);
        setAriaLiveAnnouncement(`${text} copiado al portapapeles`);
        setTimeout(() => setCopiedId(null), 2000);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      {/* ARIA Live Region */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {ariaLiveAnnouncement}
      </div>

      {/* Main Tool Container */}
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/90 overflow-hidden">
        {/* Tool Header Gradient */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950 px-6 py-6 sm:py-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold mb-3 border border-rose-500/30">
              <SparklesIcon size={14} />
              <span>Gamer Tags, Usernames &amp; Nick Lab</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              Generador de Nicks para Juegos
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Crea gamer tags compactos, filtra por longitud exacta (3-5 o 6-9 caracteres) y usa Nick Lab para crear variaciones tácticas listas para copiar.
            </p>
          </div>

          {/* Subheader status & Favorites button */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-4 text-slate-400">
              <span>{nicksList.length} nicks en pantalla</span>
              <span>•</span>
              <span>100% Gratis y rápido</span>
            </div>

            <button
              type="button"
              onClick={() => setIsFavoritesModalOpen(true)}
              className="px-3.5 py-1.5 rounded-full bg-rose-600/30 hover:bg-rose-600 text-rose-200 hover:text-white border border-rose-500/40 font-semibold flex items-center gap-1.5 transition-all shadow-sm"
              aria-label={`Ver ${favorites.length} nicks guardados`}
            >
              <HeartIcon size={14} className="text-rose-400 fill-current" />
              <span>Guardados ({favorites.length})</span>
            </button>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="p-5 sm:p-6 bg-slate-50/80 border-b border-slate-200 space-y-4">
          {/* Quick Seeds Row */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="nick-seed-input"
                className="block text-xs font-bold uppercase tracking-wider text-slate-600"
              >
                Tu palabra o inicial (opcional)
              </label>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <span>Ideas rápidas:</span>
                {QUICK_SEEDS.map((seed) => (
                  <button
                    key={seed}
                    type="button"
                    onClick={() => {
                      setSeedWord(seed);
                      setActiveNickLabTarget(null);
                      const newBatch = generateNicksBatch({
                        seedWord: seed,
                        style: selectedStyle,
                        lengthFilter,
                        batchSize: 12,
                      });
                      setNicksList(newBatch);
                    }}
                    className="px-2 py-0.5 bg-white border border-slate-200 rounded-md font-mono text-[11px] font-semibold text-slate-700 hover:border-rose-400 hover:text-rose-600 transition-colors"
                  >
                    {seed}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <input
                id="nick-seed-input"
                type="text"
                value={seedWord}
                onChange={(e) => setSeedWord(e.target.value)}
                placeholder="Nova, Shadow, Vex, Luna, Kael..."
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all font-mono"
                maxLength={25}
              />
              {seedWord && (
                <button
                  type="button"
                  onClick={() => setSeedWord("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  aria-label="Limpiar palabra"
                >
                  <ClearIcon size={16} />
                </button>
              )}
            </div>

            {seedWord.length > 10 && (
              <p className="text-xs text-amber-700 mt-1.5 font-medium">
                ℹ️ Puedes continuar, pero una palabra más corta suele crear combinaciones más compactas.
              </p>
            )}
          </div>

          {/* Filters Row: Style & Length Filters */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-2">
            {/* Style Selector */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Estilo
                </span>
                {selectedStyle !== "todos" && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedStyle("todos");
                      setActiveNickLabTarget(null);
                      const newBatch = generateNicksBatch({
                        seedWord,
                        style: "todos",
                        lengthFilter,
                        batchSize: 12,
                      });
                      setNicksList(newBatch);
                    }}
                    className="text-xs text-rose-600 hover:text-rose-700 font-semibold"
                  >
                    Restablecer
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Estilo de nicks">
                {NICKS_STYLES.map((cat) => {
                  const isActive = selectedStyle === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      role="radio"
                      aria-checked={isActive}
                      onClick={() => {
                        setSelectedStyle(cat.id);
                        setActiveNickLabTarget(null);
                        const newBatch = generateNicksBatch({
                          seedWord,
                          style: cat.id,
                          lengthFilter,
                          batchSize: 12,
                        });
                        setNicksList(newBatch);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
                        isActive
                          ? "bg-slate-900 text-white shadow-slate-900/20 scale-[1.02]"
                          : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                      }`}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Length Selector */}
            <div className="lg:col-span-4">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Longitud
              </span>
              <div className="flex items-center bg-white border border-slate-300 rounded-xl p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => {
                    setLengthFilter("all");
                    setActiveNickLabTarget(null);
                    const newBatch = generateNicksBatch({
                      seedWord,
                      style: selectedStyle,
                      lengthFilter: "all",
                      batchSize: 12,
                    });
                    setNicksList(newBatch);
                  }}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    lengthFilter === "all"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Cualquiera
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLengthFilter("3-5");
                    setActiveNickLabTarget(null);
                    const newBatch = generateNicksBatch({
                      seedWord,
                      style: selectedStyle,
                      lengthFilter: "3-5",
                      batchSize: 12,
                    });
                    setNicksList(newBatch);
                  }}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    lengthFilter === "3-5"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  3–5 letras
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLengthFilter("6-9");
                    setActiveNickLabTarget(null);
                    const newBatch = generateNicksBatch({
                      seedWord,
                      style: selectedStyle,
                      lengthFilter: "6-9",
                      batchSize: 12,
                    });
                    setNicksList(newBatch);
                  }}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    lengthFilter === "6-9"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  6–9 letras
                </button>
              </div>
            </div>
          </div>

          {/* Primary Action Row: Generar Nicks Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleGenerate}
              className="w-full py-3 px-4 bg-slate-900 hover:bg-rose-600 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-slate-900/10"
            >
              <SparklesIcon size={16} />
              <span>Generar nicks</span>
            </button>
          </div>

          {/* Active Nick Lab Banner ("Variar") */}
          {activeNickLabTarget && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between gap-3 animate-fadeIn">
              <div className="flex items-center gap-2">
                <span className="text-xl">🧬</span>
                <div>
                  <span className="text-xs font-bold text-rose-950">
                    Nick Lab: Variaciones para &quot;{activeNickLabTarget}&quot;
                  </span>
                  <p className="text-[11px] text-rose-700">
                    Mostrando alternativas tácticas con prefijos, sufijos y mutaciones gamer (x{activeNickLabTarget}, {activeNickLabTarget}X, {activeNickLabTarget}7...).
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleGenerate}
                className="px-3 py-1 bg-white hover:bg-rose-100 text-rose-800 border border-rose-300 text-xs font-semibold rounded-lg transition-colors flex-shrink-0"
              >
                Ver todos
              </button>
            </div>
          )}
        </div>

        {/* Results Grid (12 compact items) */}
        <div className="p-5 sm:p-6 bg-white min-h-[380px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {nicksList.map((item) => {
              const isCopied = copiedId === item.id;
              const hasFavorited = isFavorited(item.cleanName);

              return (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl border border-slate-200/90 bg-white hover:border-rose-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {/* Top Bar: Category Label & Favorite */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60 truncate">
                      {item.categoryLabel}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleToggleFavorite(item)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        hasFavorited
                          ? "text-rose-600 bg-rose-50"
                          : "text-slate-300 hover:text-rose-500 hover:bg-slate-50"
                      }`}
                      aria-label={`Guardar ${item.cleanName} en favoritos`}
                      title={hasFavorited ? "Guardado en favoritos" : "Guardar favorito"}
                    >
                      {hasFavorited ? (
                        <HeartIcon size={16} className="fill-current text-rose-600" />
                      ) : (
                        <HeartOutlineIcon size={16} />
                      )}
                    </button>
                  </div>

                  {/* Center Typography: Nick Display */}
                  <div className="py-2.5">
                    <div
                      onClick={() => handleCopy(item.id, item.name)}
                      className="font-mono text-xl sm:text-2xl font-black text-slate-900 tracking-wide break-all select-all cursor-pointer hover:text-rose-600 transition-colors"
                      title="Haz clic para copiar inmediatamente"
                    >
                      {item.name}
                    </div>
                  </div>

                  {/* Actions: Copiar | Variar | Personalizar */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5">
                    {/* Copiar */}
                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, item.name)}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        isCopied
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-slate-900 hover:bg-rose-600 text-white shadow-sm hover:shadow"
                      }`}
                      aria-label={`Copiar ${item.name}`}
                    >
                      {isCopied ? (
                        <>
                          <CheckIcon size={14} />
                          <span>✓ Copiado</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon size={14} />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>

                    {/* Variar (Nick Lab) */}
                    <button
                      type="button"
                      onClick={() => handleVariar(item)}
                      className="py-2 px-2.5 rounded-xl text-xs font-semibold bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors flex items-center gap-1"
                      title="Nick Lab: generar variaciones tácticas"
                      aria-label={`Variar ${item.cleanName}`}
                    >
                      <span>🧬</span>
                      <span className="hidden sm:inline">Variar</span>
                    </button>

                    {/* Personalizar */}
                    <button
                      type="button"
                      onClick={() => setCustomizingName(item.cleanName)}
                      className="py-2 px-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1"
                      title="Personalizar estilo o letras"
                      aria-label={`Personalizar ${item.cleanName}`}
                    >
                      <span>⚙️</span>
                      <span className="hidden sm:inline">Estilo</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Regenerate Batch Footer */}
          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <button
              type="button"
              onClick={handleGenerate}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors shadow-sm"
            >
              <span>🎲</span>
              <span>Generar otra tanda de nicks</span>
            </button>
          </div>
        </div>
      </div>

      {/* Customizer Modal */}
      {customizingName && (
        <NicksCustomizerModal
          initialName={customizingName}
          isOpen={Boolean(customizingName)}
          onClose={() => setCustomizingName(null)}
          onCopySuccess={(text) => {
            setAriaLiveAnnouncement(`${text} copiado al portapapeles`);
          }}
        />
      )}

      {/* Favorites Modal */}
      {isFavoritesModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-rose-900 to-slate-900 text-white">
              <div className="flex items-center gap-2">
                <span className="text-xl">❤️</span>
                <h3 className="text-lg font-bold">
                  Nicks Guardados ({favorites.length})
                </h3>
              </div>
              <button
                onClick={() => setIsFavoritesModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors"
                aria-label="Cerrar modal"
              >
                <ClearIcon size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-3 flex-1">
              {favorites.length === 0 ? (
                <div className="text-center py-10 text-slate-400 space-y-2">
                  <span className="text-4xl block">🤍</span>
                  <p className="text-sm font-medium text-slate-600">No tienes nicks guardados todavía.</p>
                  <p className="text-xs text-slate-400">
                    Haz clic en el corazón de cualquier tarjeta para guardar ideas que quieras comparar.
                  </p>
                </div>
              ) : (
                favorites.map((fav) => (
                  <div
                    key={fav.id}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-2 hover:bg-white hover:border-rose-200 transition-all"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-base font-bold text-slate-900 block truncate">
                        {fav.name}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {fav.charLength} caracteres
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          setIsFavoritesModalOpen(false);
                          setActiveNickLabTarget(fav.name);
                          const variations = getNickLabVariations(fav.name);
                          setNicksList(variations);
                        }}
                        className="px-2.5 py-1.5 text-xs font-semibold bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg transition-colors"
                      >
                        Variar
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopy(fav.id, fav.name)}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-rose-600 text-white transition-colors"
                      >
                        Copiar
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const updated = favorites.filter((f) => f.id !== fav.id);
                          saveFavorites(updated);
                        }}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition-colors"
                        aria-label={`Eliminar ${fav.name}`}
                      >
                        <ClearIcon size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {favorites.length > 0 && (
              <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => saveFavorites([])}
                  className="text-slate-500 hover:text-rose-600 font-medium transition-colors"
                >
                  Vaciar lista
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    const allText = favorites.map((f) => f.name).join("\n");
                    const ok = await copyText(allText);
                    if (ok) {
                      setAriaLiveAnnouncement("Todos los nicks guardados copiados");
                      alert("¡Todos los nicks guardados han sido copiados!");
                    }
                  }}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-semibold transition-colors"
                >
                  Copiar todos
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
