'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Emoji,
  EmojiCategory,
  EMOJIS,
  searchEmojis,
  applySkinTone,
  SKIN_TONES,
} from '@/lib/unicode/emojiData';
import { copyText } from '@/lib/clipboard';

type ViewTab = 'catalogo' | 'recientes' | 'favoritos';

interface SelectedEmojiItem {
  uid: string;
  char: string;
  nameEs: string;
}

const CATEGORIES_SPEC = [
  { id: 'todos' as const, icon: '🌐', label: 'Todos' },
  { id: 'caras-emociones' as const, icon: '😀', label: 'Caras' },
  { id: 'personas-cuerpo' as const, icon: '👋', label: 'Personas' },
  { id: 'animales-naturaleza' as const, icon: '🐶', label: 'Animales y naturaleza' },
  { id: 'comida-bebida' as const, icon: '🍕', label: 'Comida y bebida' },
  { id: 'viajes-lugares' as const, icon: '✈️', label: 'Viajes y lugares' },
  { id: 'actividades' as const, icon: '⚽', label: 'Actividades' },
  { id: 'objetos' as const, icon: '💡', label: 'Objetos' },
  { id: 'simbolos' as const, icon: '❤️', label: 'Símbolos' },
  { id: 'banderas' as const, icon: '🇲🇽', label: 'Banderas' },
] as const;

const PAGE_SIZE = 96;

export const EmojiCopyWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ViewTab>('catalogo');
  const [activeCategory, setActiveCategory] = useState<EmojiCategory | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  // Multi-emoji Selection Tray
  const [selectedList, setSelectedList] = useState<SelectedEmojiItem[]>([]);

  // Skin tone state per emoji ID (or active tone popup)
  const [activeTonePickerId, setActiveTonePickerId] = useState<string | null>(null);
  const [selectedTones, setSelectedTones] = useState<Record<string, string>>({});

  // Feedback states
  const [copiedChar, setCopiedChar] = useState<string | null>(null);
  const [copiedTray, setCopiedTray] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');

  // Favorites & Recents in LocalStorage
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recents, setRecents] = useState<string[]>([]);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const tonePickerRef = useRef<HTMLDivElement>(null);

  // Load favorites & recents on mount
  useEffect(() => {
    try {
      const favs = localStorage.getItem('emoji_favs_v2');
      if (favs) setFavorites(JSON.parse(favs));
      const rec = localStorage.getItem('emoji_rec_v2');
      if (rec) setRecents(JSON.parse(rec));
    } catch {
      // Storage unavailable
    }
  }, []);

  // Close tone picker on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (tonePickerRef.current && !tonePickerRef.current.contains(e.target as Node)) {
        setActiveTonePickerId(null);
      }
    };
    if (activeTonePickerId) {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [activeTonePickerId]);

  // Reset page count on filter or search change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [searchQuery, activeCategory, activeTab]);

  const saveFavorites = (list: string[]) => {
    setFavorites(list);
    try {
      localStorage.setItem('emoji_favs_v2', JSON.stringify(list));
    } catch {
      // Ignore
    }
  };

  const registerRecent = (char: string) => {
    const updated = [char, ...recents.filter(c => c !== char)].slice(0, 36);
    setRecents(updated);
    try {
      localStorage.setItem('emoji_rec_v2', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 1800);
  };

  const toggleFavorite = (e: React.MouseEvent, emoji: Emoji) => {
    e.stopPropagation();
    const char = emoji.char;
    if (favorites.includes(char)) {
      const updated = favorites.filter(c => c !== char);
      saveFavorites(updated);
      setLiveAnnouncement(`Emoji ${emoji.nameEs} eliminado de favoritos`);
      showToast('Eliminado de favoritos');
    } else {
      const updated = [...favorites, char];
      saveFavorites(updated);
      setLiveAnnouncement(`Emoji ${emoji.nameEs} guardado en favoritos`);
      showToast('Guardado en favoritos');
    }
  };

  // Resolve active character for emoji (with chosen skin tone if supported)
  const getDisplayChar = (emoji: Emoji): string => {
    const tone = selectedTones[emoji.id];
    if (tone && emoji.skinToneSupport) {
      return applySkinTone(emoji, tone);
    }
    return emoji.char;
  };

  // 1-Tap Copy on emoji
  const handleEmojiClick = async (emoji: Emoji) => {
    const charToCopy = getDisplayChar(emoji);
    try {
      const ok = await copyText(charToCopy);
      setCopiedChar(charToCopy);
      registerRecent(charToCopy);

      if (ok) {
        setLiveAnnouncement(`Emoji ${charToCopy} copiado al portapapeles`);
        showToast(`¡Copiado ${charToCopy}!`);
      } else {
        showToast(`Copiado: ${charToCopy}`);
      }
      setTimeout(() => setCopiedChar(null), 1200);
    } catch {
      showToast(`Copiado: ${charToCopy}`);
    }
  };

  // Add to Multi-Emoji Selection Tray
  const handleAddToSelection = (e: React.MouseEvent, emoji: Emoji) => {
    e.stopPropagation();
    const charToAdd = getDisplayChar(emoji);
    const newItem: SelectedEmojiItem = {
      uid: `${emoji.id}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      char: charToAdd,
      nameEs: emoji.nameEs,
    };
    setSelectedList(prev => [...prev, newItem]);
    setLiveAnnouncement(`Emoji ${emoji.nameEs} añadido a tu selección`);
    showToast(`Añadido: ${charToAdd}`);
  };

  // Remove individual emoji from tray
  const handleRemoveFromTray = (uid: string, char: string) => {
    setSelectedList(prev => prev.filter(item => item.uid !== uid));
    setLiveAnnouncement(`Emoji ${char} quitado de la selección`);
  };

  // Clear entire selection tray
  const handleClearTray = () => {
    setSelectedList([]);
    setLiveAnnouncement('Selección de emojis eliminada');
    showToast('Selección vaciada');
  };

  // Copy entire selection tray
  const handleCopySelection = async () => {
    if (selectedList.length === 0) return;
    const combined = selectedList.map(item => item.char).join('');
    try {
      const ok = await copyText(combined);
      if (ok) {
        setCopiedTray(true);
        setLiveAnnouncement(`${selectedList.length} emojis copiados al portapapeles`);
        showToast(`¡${selectedList.length} emojis copiados!`);
        // Register each in recents
        selectedList.forEach(item => registerRecent(item.char));
        setTimeout(() => setCopiedTray(false), 1500);
      } else {
        showToast('Error al copiar');
      }
    } catch {
      showToast('Error al copiar');
    }
  };

  // Filtered dataset
  const filteredEmojis = useMemo(() => {
    return searchEmojis(searchQuery, activeCategory);
  }, [searchQuery, activeCategory]);

  const displayedEmojis: Emoji[] = useMemo(() => {
    if (activeTab === 'favoritos') {
      return EMOJIS.filter(e => favorites.includes(e.char));
    }
    if (activeTab === 'recientes') {
      return recents.map(char => {
        const found = EMOJIS.find(e => e.char === char);
        if (found) return found;
        return {
          id: `rec-${char}`,
          char,
          nameEs: 'Emoji reciente',
          aliases: [],
          emotions: [],
          category: 'caras-emociones',
          skinToneSupport: false,
        };
      });
    }
    return filteredEmojis;
  }, [activeTab, favorites, recents, filteredEmojis]);

  const paginatedEmojis = useMemo(() => {
    return displayedEmojis.slice(0, visibleCount);
  }, [displayedEmojis, visibleCount]);

  const hasMore = visibleCount < displayedEmojis.length;

  return (
    <div className="font-generator mb-10" style={{ minWidth: 0, maxWidth: '100%' }} aria-label="Área de trabajo de emojis">
      {/* Invisible screen-reader live region */}
      <div aria-live="polite" className="sr-only">
        {liveAnnouncement}
      </div>

      {/* Floating Native Toast */}
      <div className={`toast${toastMessage ? ' is-visible' : ''}`} role="status" aria-live="polite">
        {toastMessage}
      </div>

      {/* ═══ SIGNATURE FEATURE: MULTI-EMOJI SELECTION TRAY ═══ */}
      {selectedList.length > 0 && (
        <section
          className="tool-panel tool-panel--sticky-workspace mb-4"
          aria-labelledby="tray-title"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))',
            borderColor: 'var(--color-brand)',
            boxShadow: '0 8px 24px -4px rgba(79, 70, 229, 0.15)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.25rem' }}>✨</span>
              <h2 id="tray-title" style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: 'var(--color-ink)' }}>
                Tu selección
              </h2>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.15rem 0.6rem',
                  borderRadius: '999px',
                  background: 'var(--color-brand-light, #e0e7ff)',
                  color: 'var(--color-brand)',
                }}
              >
                {selectedList.length} {selectedList.length === 1 ? 'emoji seleccionado' : 'emojis seleccionados'}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={handleClearTray}
                className="btn btn--ghost btn--sm"
                title="Vaciar selección"
                aria-label="Vaciar selección de emojis"
              >
                Limpiar
              </button>
              <button
                type="button"
                onClick={handleCopySelection}
                className={`btn ${copiedTray ? 'btn--success' : 'btn--gradient'} btn--sm`}
                style={{ fontWeight: 800, minWidth: '150px' }}
                aria-label={`Copiar ${selectedList.length} emojis seleccionados`}
              >
                <span>{copiedTray ? '✓ ¡Copiado!' : `Copiar selección (${selectedList.length})`}</span>
              </button>
            </div>
          </div>

          {/* Selected Emoji Items Chips */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.4rem',
              padding: '0.75rem',
              background: 'var(--color-bg-alt, #f8fafc)',
              borderRadius: 'var(--radius-md, 8px)',
              border: '1px solid var(--color-border, #e2e8f0)',
              minHeight: '52px',
            }}
          >
            {selectedList.map(item => (
              <span
                key={item.uid}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.3rem 0.55rem',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  fontSize: '1.25rem',
                  lineHeight: 1,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                }}
                title={item.nameEs}
              >
                <span>{item.char}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveFromTray(item.uid, item.char)}
                  aria-label={`Quitar ${item.nameEs} de la selección`}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    color: '#94a3b8',
                    lineHeight: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  ✕
                </button>
              </span>
            ))}
          </div>

          <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
              💡 Toca el botón <strong>+</strong> en cualquier emoji para sumarlo a este grupo y copiarlos todos juntos.
            </span>
          </div>
        </section>
      )}

      {/* ═══ CONTROLS TOOLBAR: SEARCH & TABS ═══ */}
      <div className="toolbar tool-panel mb-4" style={{ minWidth: 0, maxWidth: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            {/* Search Input */}
            <div className="font-search" style={{ flex: '1 1 280px', minWidth: '220px' }}>
              <label htmlFor="buscar-emojis-workspace" className="sr-only">
                Buscar emojis
              </label>
              <span className="font-search__icon" aria-hidden="true">🔍</span>
              <input
                ref={searchInputRef}
                type="search"
                id="buscar-emojis-workspace"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  if (activeTab !== 'catalogo') setActiveTab('catalogo');
                }}
                placeholder="Busca corazón, feliz, perro, fuego, España..."
                className="font-search__input"
                aria-label="Buscar emojis"
                autoComplete="off"
              />
            </div>

            {/* View Tab Switcher */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }} role="tablist" aria-label="Vistas de emojis">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'catalogo'}
                className="font-filters__chip"
                onClick={() => { setActiveTab('catalogo'); setSearchQuery(''); }}
              >
                🌐 Catálogo
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'recientes'}
                className="font-filters__chip"
                onClick={() => setActiveTab('recientes')}
              >
                🕒 Recientes ({recents.length})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'favoritos'}
                className="font-filters__chip"
                onClick={() => setActiveTab('favoritos')}
              >
                ★ Favoritos ({favorites.length})
              </button>
            </div>
          </div>

          {/* Category Chips (when in 'catalogo' view) */}
          {activeTab === 'catalogo' && (
            <div className="font-filters" role="toolbar" aria-label="Categorías de emojis" style={{ width: '100%', minWidth: 0 }}>
              {CATEGORIES_SPEC.map(cat => {
                const isActive = activeCategory === cat.id && !searchQuery;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className="font-filters__chip"
                    aria-pressed={isActive}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSearchQuery('');
                    }}
                  >
                    <span>{cat.icon}</span> {cat.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Results meta and quick reset */}
          <div className="results-meta">
            <span>
              {displayedEmojis.length} {displayedEmojis.length === 1 ? 'emoji' : 'emojis'}
              {searchQuery ? ` para "${searchQuery}"` : ''}
            </span>
            {(searchQuery || activeCategory !== 'todos' || activeTab !== 'catalogo') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('todos');
                  setActiveTab('catalogo');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-brand)',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                }}
              >
                Restablecer filtros
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ═══ EMOJI GRID ═══ */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(76px, 1fr))',
          gap: '0.55rem',
        }}
      >
        {displayedEmojis.length === 0 ? (
          <div
            className="tool-panel"
            style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '3rem 1.5rem',
            }}
          >
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>🔍</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-ink)', margin: '0 0 0.4rem' }}>
              {activeTab === 'favoritos'
                ? 'Aún no has guardado emojis favoritos'
                : activeTab === 'recientes'
                ? 'No hay emojis copiados recientemente'
                : 'No se encontraron emojis'}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', margin: 0 }}>
              {activeTab === 'favoritos'
                ? 'Pulsa la estrella ★ en cualquier emoji para añadirlo a esta lista rápida.'
                : activeTab === 'recientes'
                ? 'Toca cualquier emoji para copiarlo y aparecerá aquí automáticamente.'
                : 'Prueba a buscar palabras como amor, feliz, risa, perro, comida, fuego o España.'}
            </p>
          </div>
        ) : (
          paginatedEmojis.map(emoji => {
            const displayChar = getDisplayChar(emoji);
            const isCopied = copiedChar === displayChar;
            const isFav = favorites.includes(emoji.char);
            const isToneOpen = activeTonePickerId === emoji.id;

            return (
              <div
                key={emoji.id}
                role="button"
                tabIndex={0}
                className={`font-card${isCopied ? ' is-selected' : ''}`}
                style={{
                  padding: '0.55rem 0.35rem 0.45rem',
                  minHeight: '84px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                  userSelect: 'none',
                  cursor: 'pointer',
                  borderRadius: '10px',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                }}
                onClick={() => handleEmojiClick(emoji)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleEmojiClick(emoji);
                  }
                }}
                aria-label={`Copiar emoji ${emoji.nameEs}`}
                title={`Haz clic para copiar ${displayChar} (${emoji.nameEs})`}
              >
                {/* Top Action Row: Add to Tray (+) and Favorite (★) */}
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    lineHeight: 1,
                  }}
                >
                  {/* + Add to Selection Tray Button */}
                  <button
                    type="button"
                    onClick={e => handleAddToSelection(e, emoji)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '2px 4px',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: 'var(--color-brand)',
                      lineHeight: 1,
                      borderRadius: '4px',
                    }}
                    aria-label={`Añadir ${emoji.nameEs} a la selección`}
                    title="Añadir a la selección (+)"
                  >
                    +
                  </button>

                  {/* Skin Tone or Details indicator if supported */}
                  {emoji.skinToneSupport ? (
                    <button
                      type="button"
                      onClick={e => {
                        e.stopPropagation();
                        setActiveTonePickerId(isToneOpen ? null : emoji.id);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '1px 2px',
                        fontSize: '0.65rem',
                        lineHeight: 1,
                        opacity: 0.8,
                      }}
                      aria-label={`Elegir tono de piel para ${emoji.nameEs}`}
                      title="Elegir tono de piel"
                    >
                      👋🏻
                    </button>
                  ) : null}

                  {/* Favorite Star Button */}
                  <button
                    type="button"
                    onClick={e => toggleFavorite(e, emoji)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '2px 4px',
                      fontSize: '0.8rem',
                      color: isFav ? 'var(--color-yellow, #eab308)' : 'var(--color-ghost, #cbd5e1)',
                      lineHeight: 1,
                    }}
                    aria-label={isFav ? `Quitar ${emoji.nameEs} de favoritos` : `Guardar ${emoji.nameEs} en favoritos`}
                    title={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                  >
                    ★
                  </button>
                </div>

                {/* Center: Emoji Character or Copied Feedback */}
                {isCopied ? (
                  <div style={{ textAlign: 'center', margin: 'auto 0' }}>
                    <span style={{ color: 'var(--color-brand)', fontWeight: 800, fontSize: '1.25rem' }}>✓</span>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        color: 'var(--color-brand)',
                        marginTop: '2px',
                      }}
                    >
                      Copiado
                    </span>
                  </div>
                ) : (
                  <span
                    style={{
                      fontSize: '1.9rem',
                      lineHeight: 1,
                      margin: 'auto 0',
                    }}
                  >
                    {displayChar}
                  </span>
                )}

                {/* Bottom: Truncated Spanish Name */}
                <span
                  style={{
                    fontSize: '0.6rem',
                    color: 'var(--color-muted)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '100%',
                    textAlign: 'center',
                  }}
                >
                  {emoji.nameEs}
                </span>

                {/* Skin Tone Selector Popup */}
                {isToneOpen && (
                  <div
                    ref={tonePickerRef}
                    onClick={e => e.stopPropagation()}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 20,
                      background: '#ffffff',
                      border: '1px solid var(--color-border, #cbd5e1)',
                      borderRadius: '8px',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                      padding: '0.35rem',
                      display: 'flex',
                      gap: '0.25rem',
                      marginTop: '4px',
                    }}
                    role="dialog"
                    aria-label={`Tonos de piel para ${emoji.nameEs}`}
                  >
                    {SKIN_TONES.map(tone => {
                      const toneVariant = tone.char ? applySkinTone(emoji, tone.char) : emoji.char;
                      const isCurrent = (selectedTones[emoji.id] || '') === tone.char;

                      return (
                        <button
                          key={tone.char || 'default'}
                          type="button"
                          onClick={() => {
                            setSelectedTones(prev => ({ ...prev, [emoji.id]: tone.char }));
                            setActiveTonePickerId(null);
                          }}
                          style={{
                            fontSize: '1.2rem',
                            padding: '0.2rem 0.3rem',
                            background: isCurrent ? 'var(--color-brand-light, #e0e7ff)' : 'transparent',
                            border: isCurrent ? '1px solid var(--color-brand)' : '1px solid transparent',
                            borderRadius: '4px',
                            cursor: 'pointer',
                          }}
                          title={tone.label}
                          aria-label={`Tono ${tone.label}`}
                        >
                          {toneVariant}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* ═══ PROGRESSIVE LOAD MORE BUTTON ═══ */}
      {hasMore && (
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button
            type="button"
            className="btn btn--outline"
            onClick={() => setVisibleCount(prev => prev + PAGE_SIZE)}
            style={{ fontWeight: 600, padding: '0.6rem 1.5rem' }}
          >
            Cargar más emojis ({displayedEmojis.length - visibleCount} restantes)
          </button>
        </div>
      )}

      {/* ═══ MOBILE BOTTOM STICKY TRAY (WHEN ACTIVE) ═══ */}
      {selectedList.length > 0 && (
        <div
          className="mobile-sticky-tray"
          style={{
            position: 'fixed',
            bottom: 'env(safe-area-inset-bottom, 12px)',
            left: '12px',
            right: '12px',
            zIndex: 40,
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            borderRadius: '16px',
            padding: '0.65rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}>
            <span style={{ fontSize: '1.3rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '160px' }}>
              {selectedList.map(i => i.char).join('')}
            </span>
            <span style={{ fontSize: '0.75rem', opacity: 0.8, whiteSpace: 'nowrap' }}>
              ({selectedList.length})
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
            <button
              type="button"
              onClick={handleClearTray}
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '0.4rem 0.65rem',
                fontSize: '0.75rem',
                cursor: 'pointer',
              }}
            >
              Limpiar
            </button>
            <button
              type="button"
              onClick={handleCopySelection}
              style={{
                background: copiedTray ? '#10b981' : 'linear-gradient(135deg, #6366f1, #ec4899)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '0.4rem 0.85rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {copiedTray ? '✓ Copiado' : `Copiar (${selectedList.length})`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
