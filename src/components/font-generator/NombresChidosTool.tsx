'use client';

import React, { useState, useEffect } from 'react';
import {
  ChidoItem,
  ChidoVibe,
  STARTER_CHIDOS,
  generateChidosBatch,
  getMoreLikeThisChido,
  refineKeepPart,
  splitChidoName,
} from '@/lib/gamingNames/nombresChidosData';
import { ChidoCustomizerModal } from './ChidoCustomizerModal';
import { ChidoFavoritesModal } from './ChidoFavoritesModal';

const VIBES: { id: ChidoVibe; label: string; icon: string }[] = [
  { id: 'todos', label: 'Todos', icon: '⚡' },
  { id: 'competitivo', label: 'Competitivo', icon: '🔥' },
  { id: 'corto', label: 'Corto', icon: '🏷️' },
  { id: 'aesthetic', label: 'Aesthetic', icon: '🌙' },
  { id: 'epico', label: 'Épico', icon: '👑' },
  { id: 'oscuro', label: 'Oscuro', icon: '💀' },
  { id: 'gracioso', label: 'Gracioso', icon: '😂' },
];

export const NombresChidosTool: React.FC = () => {
  const [activeVibe, setActiveVibe] = useState<ChidoVibe>('todos');
  const [seedWord, setSeedWord] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [chidoItems, setChidoItems] = useState<ChidoItem[]>(STARTER_CHIDOS);

  // Favorites state
  const [favorites, setFavorites] = useState<ChidoItem[]>([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  // Customizer state
  const [customizingItem, setCustomizingItem] = useState<ChidoItem | null>(null);

  // Announcements and copy feedback
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('chido_favorites_v1');
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  const saveFavorites = (newList: ChidoItem[]) => {
    setFavorites(newList);
    try {
      localStorage.setItem('chido_favorites_v1', JSON.stringify(newList));
    } catch {
      // Ignore
    }
  };

  const toggleFavorite = (item: ChidoItem) => {
    const exists = favorites.some(f => f.id === item.id);
    if (exists) {
      const updated = favorites.filter(f => f.id !== item.id);
      saveFavorites(updated);
      setLiveAnnouncement(`${item.name} eliminado de finalistas`);
    } else {
      const updated = [...favorites, item];
      saveFavorites(updated);
      setLiveAnnouncement(`${item.name} guardado en finalistas`);
    }
  };

  const isFavorite = (id: string) => favorites.some(f => f.id === id);

  const handleGenerate = (vibe = activeVibe, seed = seedWord) => {
    const newBatch = generateChidosBatch(vibe, seed, 12);
    setChidoItems(newBatch);
    setLiveAnnouncement(`Se han generado 12 nombres chidos estilo ${vibe}`);
  };

  const handleVibeChange = (vibe: ChidoVibe) => {
    setActiveVibe(vibe);
    handleGenerate(vibe, seedWord);
  };

  const handleSurpriseMe = () => {
    const randomVibes = VIBES.filter(v => v.id !== 'todos');
    const randomVibe = randomVibes[Math.floor(Math.random() * randomVibes.length)].id;
    setActiveVibe(randomVibe);
    setSeedWord('');
    const newBatch = generateChidosBatch(randomVibe, '', 12);
    setChidoItems(newBatch);
    setLiveAnnouncement(`Generadas 12 opciones sorpresa en categoría ${randomVibe}`);
  };

  const handleMoreLikeThis = (item: ChidoItem) => {
    const variants = getMoreLikeThisChido(item);
    if (variants.length > 0) {
      setChidoItems(variants);
      setLiveAnnouncement(`Mostrando 6 variantes relacionadas con ${item.name}`);
      const grid = document.getElementById('chidos-results-grid');
      if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleKeepPart = (item: ChidoItem, part: 'prefix' | 'suffix') => {
    const variants = refineKeepPart(item, part);
    if (variants.length > 0) {
      setChidoItems(variants);
      const { prefix, suffix } = splitChidoName(item.name);
      const kept = part === 'prefix' ? prefix : suffix;
      setLiveAnnouncement(`Generadas nuevas variantes manteniendo "${kept}"`);
      const grid = document.getElementById('chidos-results-grid');
      if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopy = async (name: string, id: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedId(id);
      setLiveAnnouncement(`Nombre ${name} copiado al portapapeles`);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // Fallback
    }
  };

  // Filter visible items if user types in search box
  const visibleItems = chidoItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      aria-label="Generador de Nombres Chidos para Juegos"
      className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-7 shadow-2xl relative mb-12"
    >
      {/* Invisible screen-reader live region */}
      <div aria-live="polite" className="sr-only">
        {liveAnnouncement}
      </div>

      {/* Hero Badge & Finalists Trigger */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xl shadow-inner">
            🎮
          </div>
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 block">
              IDENTIDAD GAMER & DESCUBRIMIENTO POR VIBRA
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Generador de Nombres Chidos para Juegos
            </h2>
          </div>
        </div>

        {/* Finalists Button */}
        <button
          onClick={() => setIsFavoritesOpen(true)}
          className="self-start sm:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700/60 text-slate-200 hover:text-white transition-all text-xs font-semibold shadow-sm"
        >
          <span>⭐</span>
          <span>Finalistas</span>
          <span className="ml-1 px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
            {favorites.length}
          </span>
        </button>
      </div>

      {/* Generator Controls */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Seed Word Input */}
        <div className="md:col-span-8 flex flex-col gap-1.5">
          <label htmlFor="chido-seed-input" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <span>💡</span>
            <span>Palabra opcional para tu nombre:</span>
          </label>
          <div className="relative flex items-center">
            <input
              id="chido-seed-input"
              type="text"
              value={seedWord}
              maxLength={24}
              onChange={e => setSeedWord(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleGenerate()}
              placeholder="Ej: Nova, Lobo, Luna, Rayo, Kiro, Dragón..."
              className="w-full bg-slate-950/80 border border-slate-700/80 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
            {seedWord && (
              <button
                onClick={() => {
                  setSeedWord('');
                  handleGenerate(activeVibe, '');
                }}
                className="absolute right-3 text-slate-400 hover:text-white p-1 text-xs"
                title="Limpiar palabra"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Generate & Surprise Me Buttons */}
        <div className="md:col-span-4 flex items-end gap-2">
          <button
            onClick={() => handleGenerate()}
            className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-sm shadow-lg shadow-cyan-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
          >
            <span>⚡</span>
            <span>Crear Nombres</span>
          </button>
          <button
            onClick={handleSurpriseMe}
            className="py-3 px-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white text-sm font-semibold transition-colors"
            title="Sorpréndeme con una vibra aleatoria"
          >
            🎲
          </button>
        </div>
      </div>

      {/* Vibe Selection */}
      <div className="mt-6">
        <label className="text-xs font-semibold text-slate-400 mb-2 block">
          ¿Qué vibra buscas para tu nombre gamer?
        </label>
        <div className="flex flex-wrap gap-2">
          {VIBES.map(vibe => (
            <button
              key={vibe.id}
              onClick={() => handleVibeChange(vibe.id)}
              aria-pressed={activeVibe === vibe.id}
              className={`text-xs px-3.5 py-2 rounded-xl font-medium transition-all flex items-center gap-1.5 ${
                activeVibe === vibe.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-[1.02]'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60 hover:text-white'
              }`}
            >
              <span>{vibe.icon}</span>
              <span>{vibe.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search Filter Within Current Results */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Filtrar ideas mostradas..."
            className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1.5 text-slate-400 hover:text-white text-xs"
            >
              ✕
            </button>
          )}
        </div>

        <button
          onClick={() => handleGenerate()}
          className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors self-end sm:self-auto"
        >
          <span>🔄</span>
          <span>Nuevas combinaciones</span>
        </button>
      </div>

      {/* Results Grid - 12 Cards */}
      <div id="chidos-results-grid" className="mt-4">
        {visibleItems.length === 0 ? (
          <div className="py-12 text-center text-slate-400 bg-slate-950/40 rounded-2xl border border-slate-800">
            <p className="text-sm font-medium">No hay nombres que coincidan con &ldquo;{searchQuery}&rdquo;.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-2 text-xs text-cyan-400 hover:underline"
            >
              Limpiar búsqueda
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleItems.map(item => {
              const { prefix, suffix } = splitChidoName(item.name);
              const isSaved = isFavorite(item.id);

              return (
                <div
                  key={item.id}
                  className="bg-slate-950/70 border border-slate-800 hover:border-slate-700/90 rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-cyan-900/10"
                >
                  {/* Top: Vibe, Name, Chars & Favorite */}
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
                            {item.vibe}
                          </span>
                          <span className="text-[10px] text-slate-500 font-semibold">
                            {item.name.length} caracteres
                          </span>
                        </div>
                        <h3 className="text-xl font-black text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                          {item.name}
                        </h3>
                      </div>

                      {/* Bookmark Favorite */}
                      <button
                        onClick={() => toggleFavorite(item)}
                        title={isSaved ? 'Quitar de finalistas' : 'Guardar en finalistas'}
                        aria-label={`Guardar ${item.name} en favoritos`}
                        className={`p-2 rounded-xl text-sm transition-all ${
                          isSaved
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                            : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/80'
                        }`}
                      >
                        {isSaved ? '★' : '☆'}
                      </button>
                    </div>

                    {/* Tip or Readability evaluation */}
                    {item.tip && (
                      <p className="text-[11px] text-slate-400 mt-2">
                        {item.tip}
                      </p>
                    )}
                  </div>

                  {/* Component refinement buttons: Keep Prefix or Suffix */}
                  <div className="mt-3.5 pt-3 border-t border-slate-900/80">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mb-2">
                      <span>✂️ Mantener:</span>
                      <button
                        onClick={() => handleKeepPart(item, 'prefix')}
                        className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-cyan-300 font-mono font-medium transition-colors"
                        title={`Generar combinaciones conservando "${prefix}"`}
                      >
                        &ldquo;{prefix}&rdquo;
                      </button>
                      {suffix && (
                        <button
                          onClick={() => handleKeepPart(item, 'suffix')}
                          className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-cyan-300 font-mono font-medium transition-colors"
                          title={`Generar combinaciones conservando "${suffix}"`}
                        >
                          &ldquo;{suffix}&rdquo;
                        </button>
                      )}
                    </div>

                    {/* Primary Copy & Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleCopy(item.name, item.id)}
                        className={`text-xs py-2 px-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-1 ${
                          copiedId === item.id
                            ? 'bg-emerald-500 text-white'
                            : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-sm'
                        }`}
                      >
                        {copiedId === item.id ? '✓ ¡Copiado!' : '📋 Copiar'}
                      </button>

                      <button
                        onClick={() => handleMoreLikeThis(item)}
                        className="text-xs py-2 px-2 rounded-xl font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors flex items-center justify-center gap-1"
                        title="Crear variantes relacionadas con este concepto"
                      >
                        <span>✨</span>
                        <span>Más como este</span>
                      </button>
                    </div>

                    {/* Secondary: Estilizar */}
                    <div className="flex justify-end pt-2 text-[11px]">
                      <button
                        onClick={() => setCustomizingItem(item)}
                        className="text-slate-400 hover:text-cyan-300 font-medium hover:underline flex items-center gap-1"
                      >
                        <span>🎨</span>
                        <span>Personalizar / Símbolos</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modals */}
      <ChidoFavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onRemove={id => {
          const updated = favorites.filter(f => f.id !== id);
          saveFavorites(updated);
        }}
        onClear={() => saveFavorites([])}
      />

      <ChidoCustomizerModal
        isOpen={Boolean(customizingItem)}
        onClose={() => setCustomizingItem(null)}
        chidoItem={customizingItem}
      />
    </section>
  );
};
