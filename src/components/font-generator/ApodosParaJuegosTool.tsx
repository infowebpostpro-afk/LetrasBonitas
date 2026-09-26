"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  APODOS_STYLES,
  APODOS_STARTER_LIST,
  ApodoStyle,
  ApodoCardItem,
  generateApodosBatch,
  getMoreLikeThisApodo,
  toSmallCaps,
} from "@/lib/gamingNames/apodosJuegosData";
import { ApodosCustomizerModal } from "./ApodosCustomizerModal";
import {
  CopyIcon,
  CheckIcon,
  HeartIcon,
  HeartOutlineIcon,
  ClearIcon,
  SparklesIcon,
} from "@/components/ui/Icons";
import { copyText } from "@/lib/clipboard";

interface SavedApodoItem {
  id: string;
  name: string;
  cleanName: string;
  style: string;
  charLength: number;
}

export const ApodosParaJuegosTool: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<ApodoStyle>("todos");
  const [seedWord, setSeedWord] = useState<string>("");
  const [withStyle, setWithStyle] = useState<boolean>(false);
  const [apodosList, setApodosList] = useState<ApodoCardItem[]>(APODOS_STARTER_LIST);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [ariaLiveAnnouncement, setAriaLiveAnnouncement] = useState<string>("");

  // Customizer modal state
  const [customizingName, setCustomizingName] = useState<string | null>(null);

  // Favorites state
  const [favorites, setFavorites] = useState<SavedApodoItem[]>([]);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState<boolean>(false);

  // Semantic refinement ("Más como este")
  const [activeRefinementTarget, setActiveRefinementTarget] = useState<ApodoCardItem | null>(null);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("letrasbonitas_apodos_juegos_favs");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  const saveFavorites = (items: SavedApodoItem[]) => {
    setFavorites(items);
    try {
      localStorage.setItem("letrasbonitas_apodos_juegos_favs", JSON.stringify(items));
    } catch {
      // ignore
    }
  };

  const handleToggleFavorite = (item: ApodoCardItem) => {
    const exists = favorites.some((f) => f.cleanName.toLowerCase() === item.cleanName.toLowerCase());
    let updated: SavedApodoItem[];
    if (exists) {
      updated = favorites.filter((f) => f.cleanName.toLowerCase() !== item.cleanName.toLowerCase());
      setAriaLiveAnnouncement(`${item.cleanName} eliminado de tus apodos guardados`);
    } else {
      const newFav: SavedApodoItem = {
        id: `fav-${Date.now()}-${item.cleanName}`,
        name: item.name,
        cleanName: item.cleanName,
        style: item.style,
        charLength: item.charLength,
      };
      updated = [newFav, ...favorites];
      setAriaLiveAnnouncement(`${item.cleanName} guardado en tus candidatos`);
    }
    saveFavorites(updated);
  };

  const isFavorited = useCallback(
    (cleanName: string) => favorites.some((f) => f.cleanName.toLowerCase() === cleanName.toLowerCase()),
    [favorites]
  );

  // Handler to generate a new batch
  const handleGenerate = useCallback(() => {
    setActiveRefinementTarget(null);
    const newBatch = generateApodosBatch({
      seedWord,
      style: selectedStyle,
      batchSize: 12,
    });
    setApodosList(newBatch);
    setAriaLiveAnnouncement("Nuevos apodos generados");
  }, [seedWord, selectedStyle]);

  // Handler for "Más como este"
  const handleMoreLikeThis = (item: ApodoCardItem) => {
    setActiveRefinementTarget(item);
    const related = getMoreLikeThisApodo(item);
    setApodosList(related);
    setAriaLiveAnnouncement(`Mostrando apodos relacionados con ${item.cleanName}`);
  };

  // One-tap copy
  const handleCopy = async (id: string, text: string, cleanName: string) => {
    try {
      const ok = await copyText(text);
      if (ok) {
        setCopiedId(id);
        setAriaLiveAnnouncement(`${cleanName} copiado al portapapeles`);
        setTimeout(() => setCopiedId(null), 2000);
      }
    } catch {
      // Fallback
    }
  };

  // Get displayed text on card based on withStyle toggle
  const getCardDisplayText = (item: ApodoCardItem) => {
    if (!withStyle) return item.name;
    return toSmallCaps(item.name);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      {/* ARIA Live Region */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {ariaLiveAnnouncement}
      </div>

      {/* Main Tool Card */}
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/90 overflow-hidden">
        {/* Tool Header Gradient */}
        <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 px-6 py-6 sm:py-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold mb-3 border border-purple-500/30">
              <SparklesIcon size={14} />
              <span>Generador Gamer y Personalizador de Nicks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              Generador de Apodos para Juegos
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Elige tu estilo favorito, añade una palabra opcional para personalizar y genera ideas originales para copiar, editar o refinar.
            </p>
          </div>

          {/* Quick info row */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-4 text-slate-400">
              <span>{apodosList.length} apodos mostrados</span>
              <span>•</span>
              <span>100% Gratis y sin registro</span>
            </div>

            <button
              type="button"
              onClick={() => setIsFavoritesModalOpen(true)}
              className="px-3.5 py-1.5 rounded-full bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-500/40 font-semibold flex items-center gap-1.5 transition-all shadow-sm"
              aria-label={`Ver ${favorites.length} apodos guardados`}
            >
              <HeartIcon size={14} className="text-purple-400 fill-current" />
              <span>Guardados ({favorites.length})</span>
            </button>
          </div>
        </div>

        {/* Interactive Controls Form */}
        <div className="p-5 sm:p-6 bg-slate-50/80 border-b border-slate-200 space-y-4">
          {/* 1. Style Selection (Pills) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                1. ¿Qué estilo buscas?
              </span>
              {selectedStyle !== "todos" && (
                <button
                  type="button"
                  onClick={() => setSelectedStyle("todos")}
                  className="text-xs text-purple-600 hover:text-purple-700 font-semibold"
                >
                  Restablecer
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Estilos de apodos">
              {APODOS_STYLES.map((cat) => {
                const isActive = selectedStyle === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="radio"
                    aria-checked={isActive}
                    onClick={() => {
                      setSelectedStyle(cat.id);
                      setActiveRefinementTarget(null);
                      const newBatch = generateApodosBatch({
                        seedWord,
                        style: cat.id,
                        batchSize: 12,
                      });
                      setApodosList(newBatch);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
                      isActive
                        ? "bg-purple-900 text-white shadow-purple-900/20 scale-[1.02]"
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

          {/* 2. Optional Seed Word Input & Generation Controls */}
          <div className="pt-2">
            <label
              htmlFor="apodo-seed-input"
              className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5"
            >
              2. Añade una palabra (opcional)
            </label>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Text Input */}
              <div className="md:col-span-6 relative">
                <input
                  id="apodo-seed-input"
                  type="text"
                  value={seedWord}
                  onChange={(e) => setSeedWord(e.target.value)}
                  placeholder="Tu nombre, inicial o palabra favorita (ej. Sajid, Luna, Wolf)..."
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
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

              {/* Main CTA Button: Generar apodos */}
              <div className="md:col-span-3">
                <button
                  type="button"
                  onClick={handleGenerate}
                  className="w-full h-full py-2.5 px-4 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-700/20"
                >
                  <SparklesIcon size={16} />
                  <span>Generar apodos</span>
                </button>
              </div>

              {/* Limpios vs Con estilo toggle */}
              <div className="md:col-span-3 flex items-center bg-white border border-slate-300 rounded-xl p-1">
                <button
                  type="button"
                  onClick={() => setWithStyle(false)}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    !withStyle
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Limpios
                </button>
                <button
                  type="button"
                  onClick={() => setWithStyle(true)}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    withStyle
                      ? "bg-purple-900 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Con estilo
                </button>
              </div>
            </div>

            {/* Long input guidance warning */}
            {seedWord.length > 12 && (
              <p className="text-xs text-amber-700 mt-2 font-medium">
                ℹ️ Tu palabra es bastante larga ({seedWord.length} letras). Puedes continuar, pero los apodos generados también serán más largos.
              </p>
            )}
          </div>

          {/* Active Refinement Banner ("Más como este") */}
          {activeRefinementTarget && (
            <div className="p-3.5 bg-purple-50 border border-purple-200 rounded-xl flex items-center justify-between gap-3 animate-fadeIn">
              <div className="flex items-center gap-2">
                <span className="text-lg">🔄</span>
                <div>
                  <span className="text-xs font-bold text-purple-950">
                    Ideas relacionadas con &quot;{activeRefinementTarget.cleanName}&quot;
                  </span>
                  <p className="text-[11px] text-purple-700">
                    Mostrando combinaciones afines que comparten raíz, terminación o estilo.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleGenerate}
                className="px-3 py-1 bg-white hover:bg-purple-100 text-purple-800 border border-purple-300 text-xs font-semibold rounded-lg transition-colors flex-shrink-0"
              >
                Ver todos
              </button>
            </div>
          )}
        </div>

        {/* Results Grid (12 items) */}
        <div className="p-5 sm:p-6 bg-white min-h-[380px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {apodosList.map((item) => {
              const display = getCardDisplayText(item);
              const isCopied = copiedId === item.id;
              const hasFavorited = isFavorited(item.cleanName);

              return (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl border border-slate-200/90 bg-white hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {/* Card Top: DNA Tag & Favorite */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60 truncate">
                      {item.dnaTag}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleToggleFavorite(item)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        hasFavorited
                          ? "text-rose-600 bg-rose-50"
                          : "text-slate-300 hover:text-rose-500 hover:bg-slate-50"
                      }`}
                      aria-label={`Guardar ${item.cleanName} en candidatos`}
                      title={hasFavorited ? "Guardado en candidatos" : "Guardar candidato"}
                    >
                      {hasFavorited ? (
                        <HeartIcon size={16} className="fill-current text-rose-600" />
                      ) : (
                        <HeartOutlineIcon size={16} />
                      )}
                    </button>
                  </div>

                  {/* Card Center: Nickname Typography */}
                  <div className="py-2.5">
                    <div
                      onClick={() => handleCopy(item.id, display, item.cleanName)}
                      className="font-mono text-xl sm:text-2xl font-black text-slate-900 tracking-wide break-all select-all cursor-pointer hover:text-purple-600 transition-colors"
                      title="Haz clic para copiar inmediatamente"
                    >
                      {display}
                    </div>
                  </div>

                  {/* Card Bottom Actions: Copiar | Editar | Más como este */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5">
                    {/* Copiar */}
                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, display, item.cleanName)}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        isCopied
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-slate-900 hover:bg-purple-600 text-white shadow-sm hover:shadow"
                      }`}
                      aria-label={`Copiar ${display}`}
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

                    {/* Editar */}
                    <button
                      type="button"
                      onClick={() => setCustomizingName(item.cleanName)}
                      className="py-2 px-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1"
                      title="Editar o decorar este apodo"
                      aria-label={`Editar ${item.cleanName}`}
                    >
                      <span>⚙️</span>
                      <span className="hidden sm:inline">Editar</span>
                    </button>

                    {/* Más como este */}
                    <button
                      type="button"
                      onClick={() => handleMoreLikeThis(item)}
                      className="py-2 px-2.5 rounded-xl text-xs font-semibold bg-purple-50 hover:bg-purple-100 text-purple-700 transition-colors flex items-center gap-1"
                      title="Buscar apodos similares (Más como este)"
                      aria-label={`Más como ${item.cleanName}`}
                    >
                      <span>🔄</span>
                      <span className="hidden sm:inline">Similar</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Regenerate Batch Footer Button */}
          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <button
              type="button"
              onClick={handleGenerate}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors shadow-sm"
            >
              <span>🎲</span>
              <span>Generar otra tanda de 12 apodos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Customizer Modal */}
      {customizingName && (
        <ApodosCustomizerModal
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
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-purple-900 to-slate-900 text-white">
              <div className="flex items-center gap-2">
                <span className="text-xl">❤️</span>
                <h3 className="text-lg font-bold">
                  Apodos Guardados ({favorites.length})
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
                  <p className="text-sm font-medium text-slate-600">No tienes apodos guardados todavía.</p>
                  <p className="text-xs text-slate-400">
                    Haz clic en el corazón de cualquier tarjeta para guardar ideas que te llamen la atención.
                  </p>
                </div>
              ) : (
                favorites.map((fav) => (
                  <div
                    key={fav.id}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-2 hover:bg-white hover:border-purple-200 transition-all"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-base font-bold text-slate-900 block truncate">
                        {fav.cleanName}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium capitalize">
                        Estilo: {fav.style} • {fav.charLength} letras
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          setIsFavoritesModalOpen(false);
                          setCustomizingName(fav.cleanName);
                        }}
                        className="px-2.5 py-1.5 text-xs font-semibold bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg transition-colors"
                      >
                        Editar
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopy(fav.id, fav.cleanName, fav.cleanName)}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-purple-600 text-white transition-colors"
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
                        aria-label={`Eliminar ${fav.cleanName}`}
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
                    const allText = favorites.map((f) => f.cleanName).join("\n");
                    const ok = await copyText(allText);
                    if (ok) {
                      setAriaLiveAnnouncement("Todos los apodos guardados copiados");
                      alert("¡Todos los apodos guardados han sido copiados!");
                    }
                  }}
                  className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-lg font-semibold transition-colors"
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
