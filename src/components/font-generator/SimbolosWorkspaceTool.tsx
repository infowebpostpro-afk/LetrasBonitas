'use client';

import React, { useState, useEffect } from 'react';
import {
  GeneralSymbol,
  MasterSymbolCategory,
  MASTER_CATEGORIES,
  GENERAL_SYMBOLS,
  READY_COMBOS,
  searchMasterSymbols,
} from '@/lib/unicode/generalSymbolsData';

type ViewTab = 'simbolos' | 'combos' | 'favoritos' | 'recientes';
type DecoratorLayout = 'simetrico' | 'enmarcado' | 'prefijo' | 'sufijo';
type GridDensity = 'comodo' | 'compacto';

const QUICK_TRENDING_CHIPS = [
  { label: '✨ Populares', query: '', cat: 'emojis' as MasterSymbolCategory },
  { label: 'ฅ^•ﻌ•^ฅ Kaomojis', query: '', cat: 'kaomoji' as MasterSymbolCategory },
  { label: '୨୧ Coquette', query: '', cat: 'aesthetic' as MasterSymbolCategory },
  { label: '💖 Corazones', query: '', cat: 'corazones' as MasterSymbolCategory },
  { label: '★ Estrellas', query: '', cat: 'estrellas' as MasterSymbolCategory },
  { label: '🎮 Gamer', query: '', cat: 'gaming' as MasterSymbolCategory },
  { label: '🌸 Flores', query: '', cat: 'flores' as MasterSymbolCategory },
  { label: '🔥 Fuego', query: 'fuego', cat: 'todos' as MasterSymbolCategory },
  { label: '👑 Coronas', query: '', cat: 'coronas' as MasterSymbolCategory },
  { label: '🌙 Lunas', query: '', cat: 'lunas' as MasterSymbolCategory },
  { label: '✌️ Manos', query: '', cat: 'manos' as MasterSymbolCategory },
];

export const SimbolosWorkspaceTool: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ViewTab>('simbolos');
  const [activeCategory, setActiveCategory] = useState<MasterSymbolCategory>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [gridDensity, setGridDensity] = useState<GridDensity>('comodo');

  // Combination Builder State
  const [builderSymbols, setBuilderSymbols] = useState<string[]>([]);
  const [previewUserText, setPreviewUserText] = useState<string>('');
  const [decoratorLayout, setDecoratorLayout] = useState<DecoratorLayout>('simetrico');

  // Favorites & Recents in LocalStorage
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentSymbols, setRecentSymbols] = useState<string[]>([]);

  // Feedback notifications
  const [copiedChar, setCopiedChar] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const favs = localStorage.getItem('master_symbols_favorites_v2');
      if (favs) setFavorites(JSON.parse(favs));
      const rec = localStorage.getItem('master_symbols_recents_v2');
      if (rec) setRecentSymbols(JSON.parse(rec));
    } catch {
      // Storage unavailable
    }
  }, []);

  const saveFavorites = (list: string[]) => {
    setFavorites(list);
    try {
      localStorage.setItem('master_symbols_favorites_v2', JSON.stringify(list));
    } catch {
      // Ignore
    }
  };

  const registerRecent = (char: string) => {
    const updated = [char, ...recentSymbols.filter(c => c !== char)].slice(0, 24);
    setRecentSymbols(updated);
    try {
      localStorage.setItem('master_symbols_recents_v2', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 2000);
  };

  const toggleFavorite = (e: React.MouseEvent, char: string) => {
    e.stopPropagation();
    if (favorites.includes(char)) {
      saveFavorites(favorites.filter(c => c !== char));
      setLiveAnnouncement(`Símbolo ${char} eliminado de favoritos`);
      showToast(`Eliminado de favoritos: ${char}`);
    } else {
      saveFavorites([...favorites, char]);
      setLiveAnnouncement(`Símbolo ${char} guardado en favoritos`);
      showToast(`Guardado en favoritos: ${char}`);
    }
  };

  // 1-Tap Copy Single Symbol
  const handleCopySymbol = async (char: string, name?: string) => {
    try {
      await navigator.clipboard.writeText(char);
      setCopiedChar(char);
      registerRecent(char);
      const msg = `¡Copiado ${char} al portapapeles!`;
      setLiveAnnouncement(`Símbolo ${name || char} copiado al portapapeles`);
      showToast(msg);
      setTimeout(() => setCopiedChar(null), 1500);
    } catch {
      // Fallback
    }
  };

  // Append to "Mi combinación"
  const handleAddToCombination = (e: React.MouseEvent, char: string) => {
    e.stopPropagation();
    setBuilderSymbols(prev => [...prev, char]);
    registerRecent(char);
    setLiveAnnouncement(`Símbolo ${char} añadido a tu combinación`);
    showToast(`Añadido a combinación: ${char}`);
  };

  const handleRemoveBuilderSymbol = (index: number) => {
    setBuilderSymbols(prev => prev.filter((_, idx) => idx !== index));
    setLiveAnnouncement(`Símbolo eliminado de la combinación`);
  };

  const handleClearCombination = () => {
    setBuilderSymbols([]);
    setLiveAnnouncement(`Combinación vaciada`);
    showToast('Combinación vaciada');
  };

  // Live output preview text calculation
  const getPreviewResult = () => {
    const hasSymbols = builderSymbols.length > 0;
    const hasText = previewUserText.trim().length > 0;

    if (!hasSymbols && !hasText) {
      return '(Toca "+ Añadir" en cualquier símbolo o escribe tu texto)';
    }

    if (!hasText) {
      return builderSymbols.join(' ');
    }

    const text = previewUserText.trim();
    if (!hasSymbols) return text;

    if (decoratorLayout === 'prefijo') {
      return `${builderSymbols.join(' ')} ${text}`;
    }

    if (decoratorLayout === 'sufijo') {
      return `${text} ${builderSymbols.join(' ')}`;
    }

    if (decoratorLayout === 'enmarcado') {
      const left = builderSymbols[0] || '『';
      const right = builderSymbols[1] || builderSymbols[0] || '』';
      return `${left} ${text} ${right}`;
    }

    // Default: Simetrico
    if (builderSymbols.length === 1) {
      return `${builderSymbols[0]} ${text} ${builderSymbols[0]}`;
    }
    const mid = Math.ceil(builderSymbols.length / 2);
    const left = builderSymbols.slice(0, mid).join(' ');
    const right = builderSymbols.slice(mid).join(' ');
    return `${left} ${text} ${right}`;
  };

  // Copy Full Combination with Text
  const handleCopyFullCombination = async () => {
    const output = getPreviewResult();
    if (!output || output.startsWith('(')) return;

    try {
      await navigator.clipboard.writeText(output);
      setCopiedChar('combination-full');
      setLiveAnnouncement(`Combinación "${output}" copiada`);
      showToast(`¡Combinación copiada: ${output}!`);
      setTimeout(() => setCopiedChar(null), 1800);
    } catch {
      // Fallback
    }
  };

  // Compute filtered symbols based on query and category
  const filteredSymbols = searchMasterSymbols(searchQuery, activeCategory);

  // Compute items for the active tab
  let displayedItems: GeneralSymbol[] = [];
  if (activeTab === 'simbolos') {
    displayedItems = filteredSymbols;
  } else if (activeTab === 'favoritos') {
    displayedItems = GENERAL_SYMBOLS.filter(s => favorites.includes(s.char));
  } else if (activeTab === 'recientes') {
    displayedItems = recentSymbols.map(char => {
      const found = GENERAL_SYMBOLS.find(s => s.char === char);
      if (found) return found;
      return {
        id: `rec-${char}`,
        char,
        name: 'Símbolo reciente',
        category: 'todos' as MasterSymbolCategory,
        tags: [],
      };
    });
  }

  return (
    <section
      aria-label="Biblioteca y Workspace de Símbolos"
      className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-7 shadow-2xl relative mb-12 backdrop-blur-sm"
    >
      {/* Invisible screen-reader live region */}
      <div aria-live="polite" className="sr-only">
        {liveAnnouncement}
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 border border-cyan-400 text-white px-5 py-2.5 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2.5 animate-bounce">
          <span className="text-cyan-400 text-base">✨</span>
          <span className="text-xs sm:text-sm font-bold tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* Header bar: Tabs & View switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-widest text-cyan-400 mb-1">
            <span>✨</span> BIBLIOTECA & CONSTRUCTOR PRO
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Explorador de Símbolos, Emojis y Combinaciones
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Toca cualquier tarjeta para copiar directamente, o pulsa <strong className="text-cyan-300">+</strong> para crear tu combinación.
          </p>
        </div>

        {/* View Mode Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950/90 border border-slate-800 rounded-2xl self-start md:self-auto shadow-inner">
          <button
            onClick={() => setActiveTab('simbolos')}
            className={`text-xs px-3.5 py-1.5 rounded-xl font-bold transition-all ${
              activeTab === 'simbolos'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ✦ Símbolos & Emojis
          </button>
          <button
            onClick={() => setActiveTab('combos')}
            className={`text-xs px-3.5 py-1.5 rounded-xl font-bold transition-all ${
              activeTab === 'combos'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Combinaciones ({READY_COMBOS.length})
          </button>
          <button
            onClick={() => setActiveTab('favoritos')}
            className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1 ${
              activeTab === 'favoritos'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="text-amber-400">★</span>
            <span>Favoritos ({favorites.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('recientes')}
            className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all ${
              activeTab === 'recientes'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Recientes
          </button>
        </div>
      </div>

      {/* Persistent "Mi combinación" Workspace Bar */}
      <div className="my-6 p-4 sm:p-5 bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-950 border border-cyan-500/40 rounded-2xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg animate-pulse">🎨</span>
                <span className="text-xs font-black uppercase tracking-wider text-cyan-300">
                  Mi combinación & Creador de Decoraciones
                </span>
                {builderSymbols.length > 0 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold">
                    {builderSymbols.length} {builderSymbols.length === 1 ? 'símbolo' : 'símbolos'}
                  </span>
                )}
              </div>

              {/* Symmetrical decorator style selector */}
              {previewUserText.trim() && (
                <div className="flex items-center gap-1 bg-slate-950/80 p-0.5 rounded-lg border border-slate-800 text-[10px]">
                  <span className="text-slate-500 px-1 font-semibold">Estilo:</span>
                  <button
                    onClick={() => setDecoratorLayout('simetrico')}
                    className={`px-2 py-0.5 rounded ${
                      decoratorLayout === 'simetrico' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    Simétrico
                  </button>
                  <button
                    onClick={() => setDecoratorLayout('enmarcado')}
                    className={`px-2 py-0.5 rounded ${
                      decoratorLayout === 'enmarcado' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    Enmarcado
                  </button>
                  <button
                    onClick={() => setDecoratorLayout('prefijo')}
                    className={`px-2 py-0.5 rounded ${
                      decoratorLayout === 'prefijo' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    Prefijo
                  </button>
                  <button
                    onClick={() => setDecoratorLayout('sufijo')}
                    className={`px-2 py-0.5 rounded ${
                      decoratorLayout === 'sufijo' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    Sufijo
                  </button>
                </div>
              )}
            </div>

            {/* Active Symbol Bubbles */}
            <div className="flex flex-wrap items-center gap-1.5 min-h-[42px] p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl">
              {builderSymbols.length === 0 ? (
                <span className="text-xs text-slate-500 italic flex items-center gap-1">
                  <span>💡</span> Toca el botón <strong>+</strong> en cualquier símbolo o emoji para añadirlo aquí...
                </span>
              ) : (
                builderSymbols.map((s, idx) => (
                  <span
                    key={`${s}-${idx}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-cyan-950/90 to-blue-950/90 border border-cyan-500/40 text-cyan-200 text-sm font-black shadow-sm hover:border-cyan-400 transition-all"
                  >
                    <span>{s}</span>
                    <button
                      onClick={() => handleRemoveBuilderSymbol(idx)}
                      className="text-slate-400 hover:text-red-400 text-xs transition-colors p-0.5"
                      title="Quitar este símbolo"
                      aria-label={`Quitar símbolo ${s}`}
                    >
                      ✕
                    </button>
                  </span>
                ))
              )}
            </div>

            {/* User Text Preview Input & Output Preview */}
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-2 flex-1">
                <input
                  id="symbol-text-preview"
                  type="text"
                  value={previewUserText}
                  onChange={e => setPreviewUserText(e.target.value)}
                  placeholder="Escribe tu nombre o texto (ej. Sofía, Alex, Luna)..."
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 shadow-inner"
                />
                {previewUserText && (
                  <button
                    onClick={() => setPreviewUserText('')}
                    className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded-lg bg-slate-800"
                    title="Borrar texto"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Live Preview Display */}
              <div className="flex items-center gap-2 bg-slate-950/90 px-3.5 py-1.5 rounded-xl border border-slate-700/80">
                <span className="text-[11px] text-slate-500 uppercase font-bold whitespace-nowrap">Vista:</span>
                <span className="font-extrabold text-white text-sm tracking-wide select-all text-cyan-300">
                  {getPreviewResult()}
                </span>
              </div>
            </div>
          </div>

          {/* Builder Action Buttons */}
          <div className="flex items-center gap-2 self-end lg:self-center shrink-0">
            {builderSymbols.length > 0 && (
              <button
                onClick={handleClearCombination}
                className="text-xs px-3 py-2.5 rounded-xl text-slate-400 hover:text-red-400 hover:bg-slate-800/80 border border-transparent hover:border-red-900/50 transition-colors"
                title="Vaciar combinación"
              >
                🗑️ Limpiar
              </button>
            )}
            <button
              onClick={handleCopyFullCombination}
              disabled={builderSymbols.length === 0 && !previewUserText.trim()}
              className={`text-xs px-5 py-2.5 rounded-xl font-black transition-all shadow-lg flex items-center gap-2 ${
                copiedChar === 'combination-full'
                  ? 'bg-emerald-500 text-white scale-105'
                  : builderSymbols.length === 0 && !previewUserText.trim()
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-60'
                  : 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-black shadow-cyan-500/25 active:scale-95'
              }`}
            >
              <span>{copiedChar === 'combination-full' ? '✓' : '📋'}</span>
              <span>{copiedChar === 'combination-full' ? '¡Copiado!' : 'Copiar Combinación'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area based on Tab */}
      {activeTab === 'combos' ? (
        /* Ready-Made Combinations View */
        <div className="mt-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">
              {READY_COMBOS.length} Combinaciones Preparadas para Nombres, Biografías y Nicks
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {READY_COMBOS.map(item => (
              <div
                key={item.id}
                onClick={() => handleCopySymbol(item.combo, item.name)}
                className="p-4 bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 rounded-2xl flex flex-col justify-between gap-3 group transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-900/10 cursor-pointer"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider block mb-1">
                    {item.name}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white tracking-wide block group-hover:text-cyan-200 transition-colors select-all">
                    {item.combo}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-900">
                  <span className="text-[11px] text-slate-500 group-hover:text-slate-400">
                    Toca para copiar
                  </span>
                  <span
                    className={`text-xs px-3 py-1 rounded-lg font-bold transition-all ${
                      copiedChar === item.combo
                        ? 'bg-emerald-500 text-white'
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-slate-950'
                    }`}
                  >
                    {copiedChar === item.combo ? '✓ Copiado' : 'Copiar'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Symbols & Emojis Explorer View (also used by Favoritos & Recientes) */
        <div>
          {/* Search Input, Quick Filters & Category Bar (Visible on 'simbolos' tab) */}
          {activeTab === 'simbolos' && (
            <div className="space-y-3.5 mt-4">
              {/* Search Bar with Quick Density Switcher */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3.5 top-3.5 text-slate-400 text-sm">🔍</span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Busca corazón, estrella, fuego, flor, carita, flecha, corona, gamer..."
                    className="w-full bg-slate-950/90 border border-slate-700/80 rounded-2xl pl-10 pr-10 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all shadow-inner"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white text-xs p-1"
                      title="Limpiar búsqueda"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Density Switcher */}
                <div className="flex items-center gap-1 bg-slate-950/80 p-1 border border-slate-800 rounded-2xl self-end sm:self-auto">
                  <button
                    onClick={() => setGridDensity('comodo')}
                    className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all ${
                      gridDensity === 'comodo'
                        ? 'bg-slate-800 text-cyan-300 shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title="Vista de tarjetas con nombres"
                  >
                    🖼️ Tarjetas
                  </button>
                  <button
                    onClick={() => setGridDensity('compacto')}
                    className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all ${
                      gridDensity === 'compacto'
                        ? 'bg-slate-800 text-cyan-300 shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title="Vista de teclado compacto tipo emoji picker"
                  >
                    ⚡ Compacto
                  </button>
                </div>
              </div>

              {/* Trending Shortcut Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] text-slate-500 uppercase font-black mr-1">Rápido:</span>
                {QUICK_TRENDING_CHIPS.map(chip => (
                  <button
                    key={chip.label}
                    onClick={() => {
                      setActiveCategory(chip.cat);
                      setSearchQuery(chip.query);
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-slate-950/70 hover:bg-cyan-950/50 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors font-medium"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              {/* Category Pills Bar */}
              <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-800/80">
                {MASTER_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSearchQuery('');
                    }}
                    aria-pressed={activeCategory === cat.id}
                    className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5 ${
                      activeCategory === cat.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black shadow-md shadow-cyan-500/20 scale-[1.02]'
                        : 'bg-slate-950/70 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <span className="text-sm">{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results Grid */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-400">
                {displayedItems.length} {displayedItems.length === 1 ? 'símbolo encontrado' : 'símbolos encontrados'}
                {searchQuery ? ` para "${searchQuery}"` : ''}
              </span>
              <span className="text-[11px] text-cyan-400 font-medium hidden sm:inline">
                💡 1 toque = copiar directamente
              </span>
            </div>

            {displayedItems.length === 0 ? (
              <div className="py-12 text-center text-slate-400 bg-slate-950/40 rounded-2xl border border-slate-800">
                <span className="text-4xl block mb-2">🔍</span>
                <p className="text-sm font-bold text-white">No encontramos símbolos para &ldquo;{searchQuery}&rdquo;</p>
                <p className="text-xs text-slate-400 mt-1">
                  Prueba con términos como <em>fuego</em>, <em>corazón</em>, <em>estrella</em>, <em>mariposa</em>, <em>rosa</em> o <em>corona</em>.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('todos');
                  }}
                  className="mt-3 text-xs px-3.5 py-1.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors"
                >
                  Ver todos los símbolos
                </button>
              </div>
            ) : gridDensity === 'compacto' ? (
              /* Compact Emoji-Keyboard / Picker Grid */
              <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-1.5">
                {displayedItems.map(item => {
                  const isCopied = copiedChar === item.char;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleCopySymbol(item.char, item.name)}
                      className={`h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-150 relative group ${
                        isCopied
                          ? 'bg-emerald-500 text-white scale-110 shadow-lg shadow-emerald-500/30'
                          : 'bg-slate-950/70 hover:bg-slate-800 border border-slate-800/80 hover:border-cyan-400/60 hover:scale-110 hover:shadow-md'
                      }`}
                      title={`${item.name} (Toca para copiar)`}
                      aria-label={`Copiar ${item.name}`}
                    >
                      <span className="select-all">{item.char}</span>
                      {/* Mini + overlay button */}
                      <button
                        onClick={e => handleAddToCombination(e, item.char)}
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-black hidden group-hover:flex items-center justify-center shadow-md hover:scale-110"
                        title="Añadir a mi combinación"
                        aria-label={`Añadir ${item.name}`}
                      >
                        +
                      </button>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Comfortable Attractive Card Grid */
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {displayedItems.map(item => {
                  const isFav = favorites.includes(item.char);
                  const isCopied = copiedChar === item.char;

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleCopySymbol(item.char, item.name)}
                      className={`p-3.5 rounded-2xl flex flex-col items-center justify-between transition-all duration-150 relative group cursor-pointer border ${
                        isCopied
                          ? 'bg-emerald-950/70 border-emerald-500 shadow-lg shadow-emerald-500/20 scale-[1.02]'
                          : 'bg-slate-950/80 hover:bg-slate-800/90 border-slate-800/90 hover:border-cyan-400/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10'
                      }`}
                      title={`Toca para copiar ${item.name}`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleCopySymbol(item.char, item.name);
                        }
                      }}
                    >
                      {/* Top Action Bar: Favorite & Quick Add Button */}
                      <div className="w-full flex items-center justify-between gap-1 mb-1">
                        <button
                          onClick={e => toggleFavorite(e, item.char)}
                          className={`text-xs p-1 rounded-md transition-colors ${
                            isFav ? 'text-amber-400 scale-110' : 'text-slate-600 hover:text-slate-300'
                          }`}
                          title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                          aria-label={`Favorito ${item.name}`}
                        >
                          {isFav ? '★' : '☆'}
                        </button>

                        <button
                          onClick={e => handleAddToCombination(e, item.char)}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 hover:bg-cyan-500 text-slate-400 hover:text-slate-950 font-bold border border-slate-800 hover:border-cyan-400 transition-all flex items-center gap-0.5"
                          title="Añadir a mi combinación"
                          aria-label={`Añadir ${item.name} a combinación`}
                        >
                          <span>+</span>
                          <span className="text-[10px]">Añadir</span>
                        </button>
                      </div>

                      {/* Prominent Large Character Display */}
                      <div className="py-2.5 flex items-center justify-center min-h-[64px] text-center w-full">
                        <span
                          className={`font-black tracking-tight select-all transition-transform duration-150 group-hover:scale-115 ${
                            item.char.length > 2
                              ? 'text-base sm:text-lg text-cyan-200'
                              : 'text-3xl sm:text-4xl text-white group-hover:text-cyan-300'
                          }`}
                        >
                          {item.char}
                        </span>
                      </div>

                      {/* Bottom Info & Instant Feedback */}
                      <div className="w-full text-center mt-1 pt-1.5 border-t border-slate-900/80">
                        {isCopied ? (
                          <span className="text-[11px] font-black text-emerald-400 animate-pulse flex items-center justify-center gap-1">
                            <span>✓</span> ¡Copiado!
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-400 group-hover:text-cyan-300 font-medium truncate block max-w-full">
                            {item.name}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
