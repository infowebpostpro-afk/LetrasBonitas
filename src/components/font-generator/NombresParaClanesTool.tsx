'use client';

import React, { useState, useEffect } from 'react';
import {
  ClanItem,
  ClanStyle,
  STARTER_CLANES,
  generateClanBatch,
  getMoreLikeThisClan,
} from '@/lib/gamingNames/clanesJuegosData';
import { ClanShortlistModal } from './ClanShortlistModal';
import { ClanCustomizerModal } from './ClanCustomizerModal';
import { copyText } from '@/lib/clipboard';

const STYLES: { id: ClanStyle; label: string; icon: string }[] = [
  { id: 'todos', label: 'Todos', icon: '⚡' },
  { id: 'competitivo', label: 'Competitivo', icon: '🏆' },
  { id: 'epico', label: 'Épico', icon: '⚔️' },
  { id: 'oscuro', label: 'Oscuro', icon: '🌑' },
  { id: 'futurista', label: 'Futurista', icon: '🤖' },
  { id: 'divertido', label: 'Divertido', icon: '🎮' },
  { id: 'corto', label: 'Corto', icon: '✨' },
  { id: 'original', label: 'Original', icon: '🔥' },
];

export const NombresParaClanesTool: React.FC = () => {
  const [activeStyle, setActiveStyle] = useState<ClanStyle>('todos');
  const [seedConcept, setSeedConcept] = useState<string>('');
  const [clanItems, setClanItems] = useState<ClanItem[]>(STARTER_CLANES);
  const [selectedTags, setSelectedTags] = useState<Record<string, string>>({});
  
  // Finalists / Shortlist state
  const [shortlist, setShortlist] = useState<{ item: ClanItem; selectedTag: string }[]>([]);
  const [isShortlistOpen, setIsShortlistOpen] = useState(false);

  // Customizer modal state
  const [customizingItem, setCustomizingItem] = useState<ClanItem | null>(null);

  // Toast / Live status feedback
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Initialize selected TAGs from starter clan primaryTags
  useEffect(() => {
    setSelectedTags(prev => {
      const initialTags: Record<string, string> = {};
      clanItems.forEach(item => {
        if (!prev[item.id]) {
          initialTags[item.id] = item.primaryTag;
        }
      });
      return { ...initialTags, ...prev };
    });
  }, [clanItems]);

  // Load shortlist from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('clan_shortlist_v1');
      if (saved) {
        setShortlist(JSON.parse(saved));
      }
    } catch {
      // LocalStorage not available or parse error
    }
  }, []);

  // Save shortlist to localStorage
  const saveShortlist = (newList: { item: ClanItem; selectedTag: string }[]) => {
    setShortlist(newList);
    try {
      localStorage.setItem('clan_shortlist_v1', JSON.stringify(newList));
    } catch {
      // Ignore
    }
  };

  const handleSelectTag = (itemId: string, tag: string) => {
    setSelectedTags(prev => ({ ...prev, [itemId]: tag }));
    setLiveAnnouncement(`TAG ${tag} seleccionada`);
  };

  const handleGenerate = (style = activeStyle, seed = seedConcept) => {
    const newBatch = generateClanBatch(style, seed, 12);
    setClanItems(newBatch);
    setLiveAnnouncement(`Se han generado 12 nombres para clan`);
  };

  const handleStyleChange = (style: ClanStyle) => {
    setActiveStyle(style);
    handleGenerate(style, seedConcept);
  };

  const handleMoreLikeThis = (item: ClanItem) => {
    const variants = getMoreLikeThisClan(item);
    if (variants.length > 0) {
      setClanItems(variants);
      setLiveAnnouncement(`Mostrando 6 variaciones relacionadas con ${item.name}`);
      // Scroll smoothly to top of results
      const resultsEl = document.getElementById('clan-results-grid');
      if (resultsEl) {
        resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCopyName = async (name: string, id: string) => {
    try {
      const ok = await copyText(name);
      if (ok) {
        setCopyFeedback(`name-${id}`);
        setLiveAnnouncement(`Nombre ${name} copiado`);
        setTimeout(() => setCopyFeedback(null), 1800);
      }
    } catch {
      // Fallback
    }
  };

  const handleCopyTag = async (tag: string, id: string) => {
    try {
      const ok = await copyText(`[${tag}]`);
      if (ok) {
        setCopyFeedback(`tag-${id}`);
        setLiveAnnouncement(`TAG [${tag}] copiada`);
        setTimeout(() => setCopyFeedback(null), 1800);
      }
    } catch {
      // Fallback
    }
  };

  const handleCopyIdentity = async (name: string, tag: string, id: string) => {
    try {
      const ok = await copyText(`${name} [${tag}]`);
      if (ok) {
        setCopyFeedback(`all-${id}`);
        setLiveAnnouncement(`Identidad completa ${name} [${tag}] copiada`);
        setTimeout(() => setCopyFeedback(null), 1800);
      }
    } catch {
      // Fallback
    }
  };

  const toggleFinalist = (item: ClanItem) => {
    const currentTag = selectedTags[item.id] || item.primaryTag;
    const exists = shortlist.some(s => s.item.id === item.id);

    if (exists) {
      const updated = shortlist.filter(s => s.item.id !== item.id);
      saveShortlist(updated);
      setLiveAnnouncement(`${item.name} eliminado de finalistas`);
    } else {
      const updated = [...shortlist, { item, selectedTag: currentTag }];
      saveShortlist(updated);
      setLiveAnnouncement(`${item.name} guardado en finalistas`);
    }
  };

  const isFinalist = (id: string) => shortlist.some(s => s.item.id === id);

  return (
    <section
      aria-label="Generador de Nombres para Clanes y TAGs"
      className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-7 shadow-2xl relative mb-12"
    >
      {/* Invisible live region for screen readers */}
      <div aria-live="polite" className="sr-only">
        {liveAnnouncement}
      </div>

      {/* Hero Badge & Shortlist Quick Access */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xl shadow-inner">
            🛡️
          </div>
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 block">
              IDENTIDAD DE EQUIPO & TAG BUILDER
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Generador de Nombres para Clanes
            </h2>
          </div>
        </div>

        {/* Shortlist Floating Button */}
        <button
          onClick={() => setIsShortlistOpen(true)}
          className="self-start sm:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700/60 text-slate-200 hover:text-white transition-all text-xs font-semibold shadow-sm"
        >
          <span>⭐</span>
          <span>Finalistas para Votar</span>
          <span className="ml-1 px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
            {shortlist.length}
          </span>
        </button>
      </div>

      {/* Input & Generator Controls */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Seed Idea Input */}
        <div className="md:col-span-8 flex flex-col gap-1.5">
          <label htmlFor="clan-concept-input" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <span>💡</span>
            <span>Idea para tu clan (opcional):</span>
          </label>
          <div className="relative flex items-center">
            <input
              id="clan-concept-input"
              type="text"
              value={seedConcept}
              onChange={e => setSeedConcept(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleGenerate()}
              placeholder="Ej: Lobos, Nova, Furia, Eclipse, Dragón, Titán..."
              className="w-full bg-slate-950/80 border border-slate-700/80 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
            {seedConcept && (
              <button
                onClick={() => {
                  setSeedConcept('');
                  handleGenerate(activeStyle, '');
                }}
                className="absolute right-3 text-slate-400 hover:text-white p-1 text-xs"
                title="Limpiar idea"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Generate / Regenerate Button */}
        <div className="md:col-span-4 flex items-end">
          <button
            onClick={() => handleGenerate()}
            className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-sm shadow-lg shadow-cyan-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>⚔️</span>
            <span>Crear Nombres</span>
          </button>
        </div>
      </div>

      {/* Style Filters */}
      <div className="mt-6">
        <label className="text-xs font-semibold text-slate-400 mb-2 block">
          Filtrar por personalidad o estilo:
        </label>
        <div className="flex flex-wrap gap-2">
          {STYLES.map(style => (
            <button
              key={style.id}
              onClick={() => handleStyleChange(style.id)}
              aria-pressed={activeStyle === style.id}
              className={`text-xs px-3.5 py-2 rounded-xl font-medium transition-all flex items-center gap-1.5 ${
                activeStyle === style.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-[1.02]'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60 hover:text-white'
              }`}
            >
              <span>{style.icon}</span>
              <span>{style.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid - 12 Clan Cards */}
      <div id="clan-results-grid" className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-2">
            <span>🛡️</span>
            <span>
              {clanItems.length} Identidades Colectivas {seedConcept ? `con "${seedConcept}"` : ''}
            </span>
          </div>
          <button
            onClick={() => handleGenerate()}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
          >
            <span>🔄</span>
            <span>Nuevas combinaciones</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clanItems.map(item => {
            const currentTag = selectedTags[item.id] || item.primaryTag;
            const fullIdentity = `${item.name} [${currentTag}]`;
            const isSaved = isFinalist(item.id);

            return (
              <div
                key={item.id}
                className="bg-slate-950/70 border border-slate-800 hover:border-slate-700/90 rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-cyan-900/10"
              >
                {/* Top: Name & Star Finalist */}
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-black text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                          {item.name.length} caracteres
                        </span>
                        <span className="text-slate-700">·</span>
                        <span className="text-[10px] capitalize text-slate-400 font-medium">
                          {item.style}
                        </span>
                      </div>
                    </div>

                    {/* Star finalist bookmark */}
                    <button
                      onClick={() => toggleFinalist(item)}
                      title={isSaved ? 'Quitar de finalistas' : 'Guardar para votar'}
                      aria-label={`Guardar ${item.name} en finalistas`}
                      className={`p-2 rounded-xl text-sm transition-all ${
                        isSaved
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                          : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/80'
                      }`}
                    >
                      {isSaved ? '★' : '☆'}
                    </button>
                  </div>

                  {/* Active TAG Display & Alternatives */}
                  <div className="mt-3.5 p-2.5 bg-slate-900/90 rounded-xl border border-slate-800/80">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-semibold text-slate-400">
                        TAG elegida:
                      </span>
                      <span className="font-mono text-xs font-black text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/50">
                        [{currentTag}]
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-slate-500 mr-0.5">Siglas:</span>
                      {item.altTags.map(alt => (
                        <button
                          key={alt}
                          onClick={() => handleSelectTag(item.id, alt)}
                          className={`text-[11px] font-mono font-bold px-2 py-1 rounded transition-colors ${
                            currentTag === alt
                              ? 'bg-cyan-500 text-slate-950 shadow-sm'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                          }`}
                        >
                          [{alt}]
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-4 pt-3 border-t border-slate-900/80 flex flex-col gap-2">
                  {/* Primary Copy: Name + TAG */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleCopyIdentity(item.name, currentTag, item.id)}
                      className={`text-xs py-2 px-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-1 ${
                        copyFeedback === `all-${item.id}`
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-sm'
                      }`}
                    >
                      {copyFeedback === `all-${item.id}` ? '✓ ¡Copiado!' : '📋 Copiar Todo'}
                    </button>

                    <button
                      onClick={() => handleCopyTag(currentTag, item.id)}
                      className={`text-xs py-2 px-2.5 rounded-xl font-semibold transition-all border ${
                        copyFeedback === `tag-${item.id}`
                          ? 'bg-emerald-500 text-white border-emerald-500'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-700/60'
                      }`}
                    >
                      {copyFeedback === `tag-${item.id}` ? '✓ TAG' : `Copiar [${currentTag}]`}
                    </button>
                  </div>

                  {/* Refinement Actions: Más como este & Personalizar */}
                  <div className="flex items-center justify-between gap-2 pt-1 text-[11px]">
                    <button
                      onClick={() => handleMoreLikeThis(item)}
                      className="text-cyan-400 hover:text-cyan-300 font-medium hover:underline flex items-center gap-1"
                    >
                      <span>✨</span>
                      <span>Más como este</span>
                    </button>

                    <button
                      onClick={() => setCustomizingItem(item)}
                      className="text-slate-400 hover:text-slate-200 font-medium hover:underline flex items-center gap-1"
                    >
                      <span>🎨</span>
                      <span>Estilizar</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modals */}
      <ClanShortlistModal
        isOpen={isShortlistOpen}
        onClose={() => setIsShortlistOpen(false)}
        shortlist={shortlist}
        onRemove={id => {
          const updated = shortlist.filter(s => s.item.id !== id);
          saveShortlist(updated);
        }}
        onClear={() => saveShortlist([])}
      />

      <ClanCustomizerModal
        isOpen={Boolean(customizingItem)}
        onClose={() => setCustomizingItem(null)}
        clanItem={customizingItem}
        activeTag={customizingItem ? selectedTags[customizingItem.id] || customizingItem.primaryTag : ''}
      />
    </section>
  );
};
