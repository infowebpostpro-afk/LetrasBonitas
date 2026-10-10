"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  GAMING_CATEGORIES,
  GamingCategory,
  generateGamingNamesBatch,
  generateSimilarNames,
  generateVariations,
  NameLength,
  NameType,
  SymbolLevel,
  SymbolPosition,
  SeedStrength,
} from "@/lib/gamingNames/gamingNameData";
import { GamingNameCustomizerModal } from "./GamingNameCustomizerModal";
import {
  HeartIcon,
  HeartOutlineIcon,
  CopyIcon,
  CheckIcon,
  ClearIcon,
  SparklesIcon,
  LockIcon,
  UnlockIcon,
} from "@/components/ui/Icons";
import { copyText } from "@/lib/clipboard";

interface GeneratedNameItem {
  id: string;
  name: string;
  cleanName: string;
  charLength: number;
  category: GamingCategory;
  locked?: boolean;
}

interface FavoriteItem {
  id: string;
  name: string;
  charLength: number;
}

interface RecentItem {
  id: string;
  name: string;
  cleanName: string;
  charLength: number;
  timestamp: number;
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
  const [showRecentModal, setShowRecentModal] = useState<boolean>(false);
  const [recentNames, setRecentNames] = useState<RecentItem[]>([]);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState<boolean>(false);
  const [nameLength, setNameLength] = useState<NameLength>("medio");
  const [nameType, setNameType] = useState<NameType>("aleatorio");
  const [symbolLevel, setSymbolLevel] = useState<SymbolLevel>("ninguno");
  const [symbolPosition, setSymbolPosition] = useState<SymbolPosition>("aleatorio");
  const [seedStrength, setSeedStrength] = useState<SeedStrength>("equilibrado");
  const [resultQuantity, setResultQuantity] = useState<number>(12);
  const [lockedNames, setLockedNames] = useState<Set<string>>(new Set());
  const [showVariationsFor, setShowVariationsFor] = useState<string | null>(null);
  const [showSimilarFor, setShowSimilarFor] = useState<string | null>(null);
  const [variationsList, setVariationsList] = useState<string[]>([]);
  const [similarList, setSimilarList] = useState<string[]>([]);

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

  // Load recent names from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("letrasbonitas_gaming_recent");
      if (stored) {
        setRecentNames(JSON.parse(stored));
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

  const saveRecent = (recent: RecentItem[]) => {
    setRecentNames(recent);
    try {
      localStorage.setItem("letrasbonitas_gaming_recent", JSON.stringify(recent));
    } catch {
      // Ignore
    }
  };

  const addToRecent = (name: string, cleanName: string, charLength: number) => {
    const newItem: RecentItem = {
      id: `${Date.now()}-${cleanName}`,
      name,
      cleanName,
      charLength,
      timestamp: Date.now(),
    };
    const updated = [newItem, ...recentNames.filter(r => r.cleanName !== cleanName)].slice(0, 30);
    saveRecent(updated);
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

  // Handler to generate a new batch
  const generateNewBatch = useCallback(() => {
    const batch = generateGamingNamesBatch({
      baseWord: inputText,
      category: activeCategory,
      withStyle,
      batchSize: resultQuantity,
      length: nameLength,
      nameType,
      symbolLevel,
      symbolPosition,
      seedStrength,
    });

    const items: GeneratedNameItem[] = batch.map((item, idx) => ({
      id: `item-${Date.now()}-${idx}-${item.cleanName}`,
      name: item.name,
      cleanName: item.cleanName,
      charLength: item.charLength,
      category: item.category,
      locked: lockedNames.has(item.cleanName),
    }));

    // Add to recent history
    for (const item of batch) {
      addToRecent(item.name, item.cleanName, item.charLength);
    }

    setNamesList(items);
  }, [inputText, activeCategory, withStyle, resultQuantity, nameLength, nameType, symbolLevel, symbolPosition, seedStrength, lockedNames, addToRecent]);

  // Initial load generation
  useEffect(() => {
    generateNewBatch();
  }, [generateNewBatch]);

  // Copy handler with independent card state and aria announcement
  const handleCopy = async (id: string, text: string) => {
    try {
      const ok = await copyText(text);
      if (ok) {
        setCopiedId(id);
        setAriaLiveAnnouncement(`Nombre ${text} copiado al portapapeles`);
        setTimeout(() => {
          setCopiedId((curr) => (curr === id ? null : curr));
        }, 1800);
      }
    } catch {
      // Fallback
    }
  };

  // Lock handler
  const handleToggleLock = (cleanName: string) => {
    const newLocked = new Set(lockedNames);
    if (newLocked.has(cleanName)) {
      newLocked.delete(cleanName);
      setAriaLiveAnnouncement(`Nombre ${cleanName} desbloqueado`);
    } else {
      newLocked.add(cleanName);
      setAriaLiveAnnouncement(`Nombre ${cleanName} bloqueado`);
    }
    setLockedNames(newLocked);
  };

  // Generate similar names
  const handleGenerateSimilar = (cleanName: string) => {
    const similar = generateSimilarNames(cleanName, 8);
    setSimilarList(similar);
    setShowSimilarFor(cleanName);
  };

  // Generate variations
  const handleGenerateVariations = (cleanName: string) => {
    const variations = generateVariations(cleanName, 6);
    setVariationsList(variations);
    setShowVariationsFor(cleanName);
  };

  // Surprise me handler
  const handleSurpriseMe = () => {
    const randomCategory = GAMING_CATEGORIES[Math.floor(Math.random() * GAMING_CATEGORIES.length)].id as GamingCategory;
    const lengths: NameLength[] = ["corto", "medio", "largo"];
    const randomLength = lengths[Math.floor(Math.random() * lengths.length)];
    const types: NameType[] = ["nick", "alias", "nombre", "clan", "aleatorio"];
    const randomType = types[Math.floor(Math.random() * types.length)];

    setActiveCategory(randomCategory);
    setNameLength(randomLength);
    setNameType(randomType);
    setInputText("");
    generateNewBatch();
  };

  // Quick chip click handler
  const handleQuickChip = (chip: string) => {
    setInputText(chip);
    generateNewBatch();
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
                Crea tu nombre para juegos
              </h2>
            </div>

            {/* Favorites & Recent Counter Buttons */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              {recentNames.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowRecentModal(true)}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-semibold transition-colors"
                  aria-label={`Ver ${recentNames.length} nombres recientes`}
                >
                  <span>🕐</span>
                  <span>Recientes ({recentNames.length})</span>
                </button>
              )}
              {favorites.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowFavoritesModal(true)}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold transition-colors"
                  aria-label={`Ver ${favorites.length} nombres favoritos`}
                >
                  <HeartIcon size={14} className="text-rose-500" />
                  <span>Favoritos ({favorites.length})</span>
                </button>
              )}
            </div>
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

              {/* Surprise Me Button */}
              <button
                type="button"
                onClick={handleSurpriseMe}
                className="flex items-center justify-center gap-2 px-4 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-2xl border border-slate-300 transition-all cursor-pointer"
                title="Generar combinaciones aleatorias"
              >
                <span>🎲</span>
                <span className="hidden sm:inline">Sorpréndeme</span>
              </button>
            </div>

            {/* Quick helper note */}
            <p className="text-xs text-slate-600 flex items-center gap-1.5">
              <span>💡</span>
              <span>
                {inputText.trim()
                  ? `Generando combinaciones inspiradas en "${inputText.trim()}".`
                  : "Escribe una palabra o genera ideas desde cero."}
              </span>
            </p>

            {/* Quick idea chips (empty state helper) */}
            {!inputText && namesList.length === 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-slate-500">Ideas rápidas:</span>
                {["Lobo", "Luna", "Shadow", "Fuego", "Alex", "Dragón", "Nova"].map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => handleQuickChip(chip)}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-teal-100 text-slate-600 hover:text-teal-700 text-xs font-medium rounded-lg transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Style Chips & Compact Controls */}
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

            {/* Compact Controls */}
            <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0">
              {/* Length Control */}
              <div className="flex items-center gap-1.5 bg-slate-100/80 px-2 py-1.5 rounded-xl border border-slate-200/60">
                <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wide">Longitud</span>
                {(["corto", "medio", "largo"] as NameLength[]).map((len) => (
                  <button
                    key={len}
                    type="button"
                    onClick={() => setNameLength(len)}
                    aria-pressed={nameLength === len}
                    className={`px-2 py-0.5 rounded-lg text-[11px] font-medium transition-all ${
                      nameLength === len
                        ? "bg-teal-600 text-white"
                        : "text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {len.charAt(0).toUpperCase() + len.slice(1)}
                  </button>
                ))}
              </div>

              {/* Symbol Toggle */}
              <div className="flex items-center gap-2 bg-slate-100/80 px-2 py-1.5 rounded-xl border border-slate-200/60">
                <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wide">Símbolos</span>
                {(["ninguno", "ligero", "decorado"] as SymbolLevel[]).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setSymbolLevel(level)}
                    aria-pressed={symbolLevel === level}
                    className={`px-2 py-0.5 rounded-lg text-[11px] font-medium transition-all ${
                      symbolLevel === level
                        ? "bg-teal-600 text-white"
                        : "text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>

              {/* Advanced Options Toggle */}
              <button
                type="button"
                onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  showAdvancedOptions
                    ? "bg-teal-600 text-white"
                    : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 border border-slate-200/60"
                }`}
              >
                {showAdvancedOptions ? "Menos opciones" : "Más opciones"}
              </button>
            </div>
          </div>

          {/* Advanced Options (Collapsible) */}
          {showAdvancedOptions && (
            <div className="pt-4 border-t border-slate-200/60 space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Tipo de nombre */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Tipo de nombre</label>
                  <div className="flex flex-wrap gap-1.5">
                    {(["nick", "alias", "nombre", "clan", "aleatorio"] as NameType[]).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setNameType(type)}
                        aria-pressed={nameType === type}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                          nameType === type
                            ? "bg-slate-900 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Posición de símbolos */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Posición de símbolos</label>
                  <div className="flex flex-wrap gap-1.5">
                    {(["inicio", "final", "ambos", "aleatorio"] as SymbolPosition[]).map((pos) => (
                      <button
                        key={pos}
                        type="button"
                        onClick={() => setSymbolPosition(pos)}
                        aria-pressed={symbolPosition === pos}
                        disabled={symbolLevel === "ninguno"}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                          symbolPosition === pos
                            ? "bg-slate-900 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        } ${symbolLevel === "ninguno" ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        {pos.charAt(0).toUpperCase() + pos.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Usar mi palabra */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Usar mi palabra</label>
                  <div className="flex flex-wrap gap-1.5">
                    {(["poco", "equilibrado", "mucho"] as SeedStrength[]).map((strength) => (
                      <button
                        key={strength}
                        type="button"
                        onClick={() => setSeedStrength(strength)}
                        aria-pressed={seedStrength === strength}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                          seedStrength === strength
                            ? "bg-slate-900 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {strength.charAt(0).toUpperCase() + strength.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Result quantity */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Cantidad</label>
                  <div className="flex gap-1.5">
                    {[12, 24, 48].map((qty) => (
                      <button
                        key={qty}
                        type="button"
                        onClick={() => setResultQuantity(qty)}
                        aria-pressed={resultQuantity === qty}
                        className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                          resultQuantity === qty
                            ? "bg-slate-900 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {qty}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Generated Results Grid */}
        <div className="p-5 sm:p-7 bg-slate-50/50">
          {namesList.length === 0 ? (
            <div className="text-center py-12 px-4">
              <p className="text-sm text-slate-500">
                Elige un estilo o pulsa &quot;Generar nombres&quot; para recibir ideas al instante. No necesitas escribir tu nombre.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {namesList.map((item) => {
                  const isCopied = copiedId === item.id;
                  const isFav = isFavorited(item.name);
                  const isLocked = item.locked;

                  return (
                    <div
                      key={item.id}
                      className={`flex flex-col justify-between p-4 bg-white rounded-2xl border transition-all group ${
                        isLocked
                          ? "border-teal-400 ring-2 ring-teal-200"
                          : "border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-300/80"
                      }`}
                    >
                      {/* Top Row: Character Count, Lock & Favorite */}
                      <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded-md text-slate-600">
                            {item.charLength} caracteres
                          </span>
                          {isLocked && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-teal-600">
                              <LockIcon size={12} />
                              Fijado
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleToggleLock(item.cleanName)}
                            className="p-1 text-slate-300 hover:text-teal-600 transition-colors"
                            aria-label={isLocked ? "Desbloquear nombre" : "Bloquear nombre"}
                          >
                            {isLocked ? (
                              <LockIcon size={14} className="text-teal-600" />
                            ) : (
                              <UnlockIcon size={14} className="text-slate-400 group-hover:text-slate-500" />
                            )}
                          </button>
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
                      </div>

                      {/* Nickname Display */}
                      <div className="my-1.5">
                        <p className="text-lg font-bold text-slate-900 tracking-wide font-sans break-all select-all group-hover:text-teal-700 transition-colors">
                          {item.name}
                        </p>
                      </div>

                      {/* Actions: Copiar, Personalizar, Similar, Variaciones */}
                      <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => handleCopy(item.id, item.name)}
                          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-bold rounded-xl transition-all ${
                            isCopied
                              ? "bg-emerald-600 text-white shadow-sm"
                              : "bg-slate-900 hover:bg-teal-700 text-white shadow-sm active:scale-95"
                          }`}
                          aria-label={`Copiar nick ${item.name}`}
                        >
                          {isCopied ? (
                            <>
                              <CheckIcon size={14} className="text-white" />
                              <span>✓</span>
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
                          className="px-2 py-2 bg-slate-100 hover:bg-slate-200/90 text-slate-700 hover:text-slate-900 text-xs font-semibold rounded-xl transition-colors active:scale-95"
                          aria-label={`Personalizar estilo para ${item.cleanName}`}
                          title="Personalizar"
                        >
                          ✨
                        </button>

                        <button
                          type="button"
                          onClick={() => handleGenerateSimilar(item.cleanName)}
                          className="px-2 py-2 bg-slate-100 hover:bg-slate-200/90 text-slate-700 hover:text-slate-900 text-xs font-semibold rounded-xl transition-colors active:scale-95"
                          aria-label={`Generar nombres similares a ${item.cleanName}`}
                          title="Generar similares"
                        >
                          🔁
                        </button>

                        <button
                          type="button"
                          onClick={() => handleGenerateVariations(item.cleanName)}
                          className="px-2 py-2 bg-slate-100 hover:bg-slate-200/90 text-slate-700 hover:text-slate-900 text-xs font-semibold rounded-xl transition-colors active:scale-95"
                          aria-label={`Generar variaciones de ${item.cleanName}`}
                          title="Variaciones"
                        >
                          🎲
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Regenerate footer bar */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 pt-4 border-t border-slate-200/80">
                <span>¿No encuentras el ideal? Pulsa abajo para recibir más combinaciones.</span>
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
            </>
          )}
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

      {/* Recent Names Modal */}
      {showRecentModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowRecentModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="recent-modal-title"
        >
          <div
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-2">
                <span>🕐</span>
                <h3 id="recent-modal-title" className="text-base font-bold text-slate-900">
                  Generados Recientemente ({recentNames.length})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowRecentModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-4 space-y-2">
              {recentNames.length === 0 ? (
                <p className="text-xs text-slate-600 text-center py-6">
                  No has generado nombres todavía.
                </p>
              ) : (
                recentNames.map((recent) => {
                  const isCopied = copiedId === recent.id;
                  return (
                    <div
                      key={recent.id}
                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200/80"
                    >
                      <div>
                        <p className="text-sm font-bold text-slate-800">{recent.name}</p>
                        <span className="text-[11px] text-slate-600">{recent.charLength} caracteres</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleCopy(recent.id, recent.name)}
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
                            const updated = recentNames.filter((r) => r.id !== recent.id);
                            saveRecent(updated);
                          }}
                          className="p-1.5 text-slate-400 hover:text-rose-600"
                          title="Eliminar de recientes"
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
              {recentNames.length > 0 && (
                <button
                  type="button"
                  onClick={() => saveRecent([])}
                  className="text-rose-600 hover:underline font-medium"
                >
                  Limpiar historial
                </button>
              )}
              <button
                type="button"
                onClick={() => setShowRecentModal(false)}
                className="ml-auto px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Similar Names Modal */}
      {showSimilarFor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowSimilarFor(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="similar-modal-title"
        >
          <div
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-teal-50/50">
              <div>
                <h3 id="similar-modal-title" className="text-base font-bold text-slate-900">
                  Nombres Similares a &quot;{showSimilarFor}&quot;
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">Inspirados en estilo y estructura</p>
              </div>
              <button
                type="button"
                onClick={() => setShowSimilarFor(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-4 space-y-2">
              {similarList.length === 0 ? (
                <p className="text-xs text-slate-600 text-center py-6">
                  No se pudieron generar nombres similares.
                </p>
              ) : (
                similarList.map((name, idx) => {
                  const tempId = `similar-${idx}`;
                  const isCopied = copiedId === tempId;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-teal-50/40 rounded-xl border border-slate-200/80"
                    >
                      <p className="text-sm font-bold text-slate-800">{name}</p>
                      <button
                        type="button"
                        onClick={() => handleCopy(tempId, name)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                          isCopied
                            ? "bg-emerald-600 text-white"
                            : "bg-white text-slate-700 border border-slate-200 hover:border-teal-500"
                        }`}
                      >
                        {isCopied ? "✓ Copiado" : "Copiar"}
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setShowSimilarFor(null)}
                className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Variations Modal */}
      {showVariationsFor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowVariationsFor(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="variations-modal-title"
        >
          <div
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-purple-50/50">
              <div>
                <h3 id="variations-modal-title" className="text-base font-bold text-slate-900">
                  Variaciones de &quot;{showVariationsFor}&quot;
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">Modificaciones del nombre base</p>
              </div>
              <button
                type="button"
                onClick={() => setShowVariationsFor(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-4 space-y-2">
              {variationsList.length === 0 ? (
                <p className="text-xs text-slate-600 text-center py-6">
                  No se pudieron generar variaciones.
                </p>
              ) : (
                variationsList.map((name, idx) => {
                  const tempId = `variation-${idx}`;
                  const isCopied = copiedId === tempId;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-purple-50/40 rounded-xl border border-slate-200/80"
                    >
                      <p className="text-sm font-bold text-slate-800">{name}</p>
                      <button
                        type="button"
                        onClick={() => handleCopy(tempId, name)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                          isCopied
                            ? "bg-emerald-600 text-white"
                            : "bg-white text-slate-700 border border-slate-200 hover:border-teal-500"
                        }`}
                      >
                        {isCopied ? "✓ Copiado" : "Copiar"}
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setShowVariationsFor(null)}
                className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg"
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
