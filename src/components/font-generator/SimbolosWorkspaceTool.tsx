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

export const SimbolosWorkspaceTool: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ViewTab>('simbolos');
  const [activeCategory, setActiveCategory] = useState<MasterSymbolCategory>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Combination Builder State
  const [builderSymbols, setBuilderSymbols] = useState<string[]>([]);
  const [previewUserText, setPreviewUserText] = useState<string>('');
  
  // Favorites & Recents in LocalStorage
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentSymbols, setRecentSymbols] = useState<string[]>([]);

  // Feedback notifications
  const [copiedChar, setCopiedChar] = useState<string | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const favs = localStorage.getItem('master_symbols_favorites_v1');
      if (favs) setFavorites(JSON.parse(favs));
      const rec = localStorage.getItem('master_symbols_recents_v1');
      if (rec) setRecentSymbols(JSON.parse(rec));
    } catch {
      // Storage unavailable
    }
  }, []);

  const saveFavorites = (list: string[]) => {
    setFavorites(list);
    try {
      localStorage.setItem('master_symbols_favorites_v1', JSON.stringify(list));
    } catch {
      // Ignore
    }
  };

  const registerRecent = (char: string) => {
    const updated = [char, ...recentSymbols.filter(c => c !== char)].slice(0, 18);
    setRecentSymbols(updated);
    try {
      localStorage.setItem('master_symbols_recents_v1', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const toggleFavorite = (char: string) => {
    if (favorites.includes(char)) {
      saveFavorites(favorites.filter(c => c !== char));
      setLiveAnnouncement(`Símbolo ${char} eliminado de favoritos`);
    } else {
      saveFavorites([...favorites, char]);
      setLiveAnnouncement(`Símbolo ${char} guardado en favoritos`);
    }
  };

  // 1-Tap Copy Single Symbol
  const handleCopySymbol = async (char: string, name?: string) => {
    try {
      await navigator.clipboard.writeText(char);
      setCopiedChar(char);
      registerRecent(char);
      setLiveAnnouncement(`Símbolo ${name || char} copiado al portapapeles`);
      setTimeout(() => setCopiedChar(null), 1800);
    } catch {
      // Fallback
    }
  };

  // Append to "Mi combinación"
  const handleAddToCombination = (char: string) => {
    setBuilderSymbols(prev => [...prev, char]);
    registerRecent(char);
    setLiveAnnouncement(`Símbolo ${char} añadido a tu combinación`);
  };

  const handleRemoveBuilderSymbol = (index: number) => {
    setBuilderSymbols(prev => prev.filter((_, idx) => idx !== index));
    setLiveAnnouncement(`Símbolo eliminado de la combinación`);
  };

  const handleClearCombination = () => {
    setBuilderSymbols([]);
    setLiveAnnouncement(`Combinación vaciada`);
  };

  // Copy Full Combination with Text
  const handleCopyFullCombination = async () => {
    const symbolsString = builderSymbols.join(' ');
    let output = symbolsString;

    if (previewUserText.trim()) {
      if (builderSymbols.length === 0) {
        output = previewUserText.trim();
      } else if (builderSymbols.length === 1) {
        output = `${builderSymbols[0]} ${previewUserText.trim()} ${builderSymbols[0]}`;
      } else {
        const mid = Math.ceil(builderSymbols.length / 2);
        const left = builderSymbols.slice(0, mid).join(' ');
        const right = builderSymbols.slice(mid).join(' ');
        output = `${left} ${previewUserText.trim()} ${right}`;
      }
    }

    if (!output.trim()) return;

    try {
      await navigator.clipboard.writeText(output);
      setCopiedChar('combination-full');
      setLiveAnnouncement(`Combinación "${output}" copiada`);
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
    displayedItems = recentSymbols
      .map(char => GENERAL_SYMBOLS.find(s => s.char === char) || {
        id: `rec-${char}`,
        char,
        name: 'Símbolo reciente',
        category: 'todos' as MasterSymbolCategory,
        tags: [],
      });
  }

  // Live output preview text calculation
  const getPreviewResult = () => {
    if (builderSymbols.length === 0 && !previewUserText.trim()) {
      return '(Toca "+ Añadir" en cualquier símbolo para empezar)';
    }
    if (previewUserText.trim()) {
      if (builderSymbols.length === 0) return previewUserText.trim();
      if (builderSymbols.length === 1) {
        return `${builderSymbols[0]} ${previewUserText.trim()} ${builderSymbols[0]}`;
      }
      const mid = Math.ceil(builderSymbols.length / 2);
      const left = builderSymbols.slice(0, mid).join(' ');
      const right = builderSymbols.slice(mid).join(' ');
      return `${left} ${previewUserText.trim()} ${right}`;
    }
    return builderSymbols.join(' ');
  };

  return (
    <section
      aria-label="Biblioteca y Constructor de Símbolos"
      className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-7 shadow-2xl relative mb-12"
    >
      {/* Invisible screen-reader live region */}
      <div aria-live="polite" className="sr-only">
        {liveAnnouncement}
      </div>

      {/* Header bar: Tabs & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 block mb-1">
            BIBLIOTECA & CONSTRUCTOR
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Explorador de Símbolos y Combinaciones
          </h2>
        </div>

        {/* View Mode Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950/80 border border-slate-800 rounded-2xl self-start md:self-auto">
          <button
            onClick={() => setActiveTab('simbolos')}
            className={`text-xs px-3.5 py-1.5 rounded-xl font-bold transition-all ${
              activeTab === 'simbolos'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Símbolos
          </button>
          <button
            onClick={() => setActiveTab('combos')}
            className={`text-xs px-3.5 py-1.5 rounded-xl font-bold transition-all ${
              activeTab === 'combos'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Combinaciones
          </button>
          <button
            onClick={() => setActiveTab('favoritos')}
            className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1 ${
              activeTab === 'favoritos'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>♥</span>
            <span>Favoritos ({favorites.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('recientes')}
            className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all ${
              activeTab === 'recientes'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Recientes
          </button>
        </div>
      </div>

      {/* Persistent "Mi combinación" Workspace Bar */}
      <div className="my-6 p-4 sm:p-5 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/30 rounded-2xl shadow-inner">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-base">✨</span>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                Mi combinación & Vista Previa
              </span>
              {builderSymbols.length > 0 && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                  {builderSymbols.length} {builderSymbols.length === 1 ? 'símbolo' : 'símbolos'}
                </span>
              )}
            </div>

            {/* Active Symbol Bubbles */}
            <div className="flex flex-wrap items-center gap-1.5 min-h-[36px] p-2 bg-slate-950/70 border border-slate-800 rounded-xl">
              {builderSymbols.length === 0 ? (
                <span className="text-xs text-slate-500 italic">
                  Toca &ldquo;+ Añadir&rdquo; en cualquier tarjeta para construir tu secuencia...
                </span>
              ) : (
                builderSymbols.map((s, idx) => (
                  <span
                    key={`${s}-${idx}`}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800 text-cyan-200 text-sm font-bold shadow-xs animate-fade-in"
                  >
                    <span>{s}</span>
                    <button
                      onClick={() => handleRemoveBuilderSymbol(idx)}
                      className="text-slate-400 hover:text-red-400 text-xs ml-0.5"
                      title="Quitar este símbolo"
                    >
                      ✕
                    </button>
                  </span>
                ))
              )}
            </div>

            {/* User Text Preview Input */}
            <div className="mt-3 flex items-center gap-2">
              <label htmlFor="symbol-text-preview" className="text-xs text-slate-400 whitespace-nowrap">
                Tu texto (opcional):
              </label>
              <input
                id="symbol-text-preview"
                type="text"
                value={previewUserText}
                onChange={e => setPreviewUserText(e.target.value)}
                placeholder="Ej: Sofía, Carlos, Nova, Luna..."
                className="w-full max-w-xs bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
              {previewUserText && (
                <button
                  onClick={() => setPreviewUserText('')}
                  className="text-slate-400 hover:text-white text-xs px-1.5"
                  title="Borrar texto"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Preview Banner */}
            <div className="mt-2.5 text-xs text-slate-300 flex items-center gap-2">
              <span className="text-slate-500 font-semibold">Resultado final:</span>
              <span className="font-bold text-white text-sm tracking-wide bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                {getPreviewResult()}
              </span>
            </div>
          </div>

          {/* Builder Action Buttons */}
          <div className="flex items-center gap-2 self-end lg:self-center">
            {builderSymbols.length > 0 && (
              <button
                onClick={handleClearCombination}
                className="text-xs px-3 py-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors"
              >
                Borrar
              </button>
            )}
            <button
              onClick={handleCopyFullCombination}
              disabled={builderSymbols.length === 0 && !previewUserText.trim()}
              className={`text-xs px-5 py-2.5 rounded-xl font-bold transition-all shadow-md flex items-center gap-1.5 ${
                copiedChar === 'combination-full'
                  ? 'bg-emerald-500 text-white'
                  : builderSymbols.length === 0 && !previewUserText.trim()
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/20'
              }`}
            >
              {copiedChar === 'combination-full' ? '✓ ¡Copiado!' : '📋 Copiar Todo'}
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
              {READY_COMBOS.length} Combinaciones Preparadas para Nombres y Biografías
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {READY_COMBOS.map(item => (
              <div
                key={item.id}
                className="p-4 bg-slate-950/70 border border-slate-800 hover:border-slate-700/80 rounded-2xl flex flex-col justify-between gap-3 group transition-all"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">
                    {item.name}
                  </span>
                  <span className="text-lg font-bold text-white tracking-wide block group-hover:text-cyan-300 transition-colors">
                    {item.combo}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-900">
                  <button
                    onClick={() => handleCopySymbol(item.combo, item.name)}
                    className={`flex-1 text-xs py-2 rounded-xl font-bold transition-all flex items-center justify-center gap-1 ${
                      copiedChar === item.combo
                        ? 'bg-emerald-500 text-white'
                        : 'bg-cyan-600 hover:bg-cyan-500 text-white'
                    }`}
                  >
                    {copiedChar === item.combo ? '✓ Copiado' : 'Copiar'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Symbols Explorer View (also used by Favoritos & Recientes) */
        <div>
          {/* Search Input & Category Bar (Visible on 'simbolos' tab) */}
          {activeTab === 'simbolos' && (
            <>
              {/* Search Bar */}
              <div className="mt-4 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Busca corazón, estrella, flecha, corona, flor, rayo, cruz, zodiaco..."
                  className="w-full bg-slate-950/80 border border-slate-700/80 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white text-xs"
                    title="Limpiar búsqueda"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Category Pills Bar */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {MASTER_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    aria-pressed={activeCategory === cat.id}
                    className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5 ${
                      activeCategory === cat.id
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-[1.02]'
                        : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60 hover:text-white'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Results Grid */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-400">
                {displayedItems.length} {displayedItems.length === 1 ? 'símbolo encontrado' : 'símbolos encontrados'}
                {searchQuery ? ` para "${searchQuery}"` : ''}
              </span>
            </div>

            {displayedItems.length === 0 ? (
              <div className="py-12 text-center text-slate-400 bg-slate-950/40 rounded-2xl border border-slate-800">
                <span className="text-3xl block mb-2">🔍</span>
                <p className="text-sm font-medium">No se encontraron símbolos para &ldquo;{searchQuery}&rdquo;.</p>
                <p className="text-xs text-slate-500 mt-1">
                  Intenta buscar términos en español como <em>corazón</em>, <em>estrella</em>, <em>flecha</em>, <em>corona</em> o <em>luna</em>.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('todos');
                  }}
                  className="mt-3 text-xs text-cyan-400 hover:underline"
                >
                  Restablecer filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {displayedItems.map(item => {
                  const isFav = favorites.includes(item.char);
                  const isCopied = copiedChar === item.char;

                  return (
                    <div
                      key={item.id}
                      className="p-3 bg-slate-950/80 border border-slate-800 hover:border-cyan-500/60 rounded-2xl flex flex-col justify-between transition-all group shadow-sm hover:shadow-cyan-900/10"
                    >
                      {/* Top: Favorite icon & Name */}
                      <div className="flex items-start justify-between gap-1 mb-2">
                        <span className="text-[10px] text-slate-500 truncate max-w-[85px]" title={item.name}>
                          {item.name}
                        </span>
                        <button
                          onClick={() => toggleFavorite(item.char)}
                          className={`text-xs transition-colors p-0.5 ${
                            isFav ? 'text-amber-400' : 'text-slate-600 hover:text-slate-400'
                          }`}
                          title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                          aria-label={`Favorito ${item.name}`}
                        >
                          {isFav ? '★' : '☆'}
                        </button>
                      </div>

                      {/* Giant Central Symbol */}
                      <div className="py-3 text-center">
                        <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors select-all">
                          {item.char}
                        </span>
                      </div>

                      {/* Dual Action Buttons: Copiar vs + Añadir */}
                      <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-900">
                        <button
                          onClick={() => handleCopySymbol(item.char, item.name)}
                          className={`text-[11px] py-1.5 rounded-lg font-bold transition-all flex items-center justify-center ${
                            isCopied
                              ? 'bg-emerald-500 text-white'
                              : 'bg-cyan-600/90 hover:bg-cyan-500 text-white shadow-xs'
                          }`}
                          title={`Copiar ${item.name}`}
                        >
                          {isCopied ? '✓' : 'Copiar'}
                        </button>

                        <button
                          onClick={() => handleAddToCombination(item.char)}
                          className="text-[11px] py-1.5 rounded-lg font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors flex items-center justify-center"
                          title={`Añadir a mi combinación`}
                        >
                          + Añadir
                        </button>
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
