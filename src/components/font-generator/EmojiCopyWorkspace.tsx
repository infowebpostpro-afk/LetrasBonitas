'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Emoji,
  EmojiCategory,
  EMOJI_CATEGORIES,
  EMOJIS,
  searchEmojis,
  applySkinTone,
  SKIN_TONES,
} from '@/lib/unicode/emojiData';
import { copyText } from '@/lib/clipboard';

type ViewMode = 'todos' | 'recientes' | 'favoritos';

interface SelectedEmojiItem {
  id: string;
  char: string;
  nameEs: string;
}

export const EmojiCopyWorkspace: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('todos');
  const [activeCategory, setActiveCategory] = useState<EmojiCategory | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkinTone, setSelectedSkinTone] = useState<string>('');

  // Multi-emoji selection tray
  const [tray, setTray] = useState<SelectedEmojiItem[]>([]);

  // Feedback states
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [copiedTray, setCopiedTray] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');

  // Local storage lists
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recents, setRecents] = useState<string[]>([]);

  // Pagination for initial render performance
  const [displayLimit, setDisplayLimit] = useState<number>(96);

  const inputRef = useRef<HTMLInputElement>(null);

  // Load favorites & recents on mount
  useEffect(() => {
    try {
      const favs = localStorage.getItem('emoji_workspace_favorites_v1');
      if (favs) setFavorites(JSON.parse(favs));
      const rec = localStorage.getItem('emoji_workspace_recents_v1');
      if (rec) setRecents(JSON.parse(rec));
    } catch {
      // Storage unavailable
    }
  }, []);

  const saveFavorites = (list: string[]) => {
    setFavorites(list);
    try {
      localStorage.setItem('emoji_workspace_favorites_v1', JSON.stringify(list));
    } catch {
      // Ignore
    }
  };

  const registerRecent = (char: string) => {
    const updated = [char, ...recents.filter(c => c !== char)].slice(0, 30);
    setRecents(updated);
    try {
      localStorage.setItem('emoji_workspace_recents_v1', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 1800);
  };

  const toggleFavorite = (e: React.MouseEvent, char: string, nameEs: string) => {
    e.stopPropagation();
    if (favorites.includes(char)) {
      saveFavorites(favorites.filter(c => c !== char));
      setLiveAnnouncement(`Emoji ${char} eliminado de favoritos`);
      showToast('Eliminado de favoritos');
    } else {
      saveFavorites([...favorites, char]);
      setLiveAnnouncement(`Emoji ${char} guardado en favoritos`);
      showToast('Guardado en favoritos');
    }
  };

  // Direct 1-tap copy
  const handleDirectCopy = async (emoji: Emoji) => {
    const charToCopy = selectedSkinTone && emoji.skinToneSupport
      ? applySkinTone(emoji, selectedSkinTone)
      : emoji.char;

    const ok = await copyText(charToCopy);
    if (ok) {
      setCopiedItem(charToCopy);
      registerRecent(charToCopy);
      setLiveAnnouncement(`Emoji ${charToCopy} copiado al portapapeles`);
      showToast(`¡Copiado ${charToCopy}!`);
      setTimeout(() => setCopiedItem(null), 1800);
    }
  };

  // Add to selection tray
  const handleAddToTray = (e: React.MouseEvent, emoji: Emoji) => {
    e.stopPropagation();
    const charToAdd = selectedSkinTone && emoji.skinToneSupport
      ? applySkinTone(emoji, selectedSkinTone)
      : emoji.char;

    const newItem: SelectedEmojiItem = {
      id: `${emoji.id}-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      char: charToAdd,
      nameEs: emoji.nameEs,
    };

    setTray(prev => [...prev, newItem]);
    setLiveAnnouncement(`Añadido ${charToAdd} a la selección. Total: ${tray.length + 1} emojis.`);
    showToast(`Añadido ${charToAdd} a selección`);
  };

  // Remove single item from tray
  const handleRemoveFromTray = (id: string, char: string) => {
    setTray(prev => prev.filter(item => item.id !== id));
    setLiveAnnouncement(`Emoji ${char} quitado de la selección.`);
  };

  // Clear entire tray
  const handleClearTray = () => {
    setTray([]);
    setLiveAnnouncement('Selección de emojis vaciada.');
    showToast('Selección borrada');
  };

  // Copy entire tray
  const handleCopyTray = async () => {
    if (tray.length === 0) return;
    const combinedString = tray.map(item => item.char).join('');
    const ok = await copyText(combinedString);
    if (ok) {
      setCopiedTray(true);
      tray.forEach(item => registerRecent(item.char));
      setLiveAnnouncement(`${tray.length} emojis copiados al portapapeles: ${combinedString}`);
      showToast(`¡${tray.length} emojis copiados!`);
      setTimeout(() => setCopiedTray(false), 2000);
    }
  };

  // Filtered emojis
  const filteredEmojis = useMemo(() => {
    if (viewMode === 'recientes') {
      return recents
        .map(char => EMOJIS.find(e => e.char === char))
        .filter((e): e is Emoji => Boolean(e));
    }

    if (viewMode === 'favoritos') {
      return favorites
        .map(char => EMOJIS.find(e => e.char === char))
        .filter((e): e is Emoji => Boolean(e));
    }

    return searchEmojis(searchQuery, activeCategory);
  }, [viewMode, searchQuery, activeCategory, recents, favorites]);

  // Displayed slice
  const displayedEmojis = useMemo(() => {
    if (searchQuery || viewMode !== 'todos') {
      return filteredEmojis;
    }
    return filteredEmojis.slice(0, displayLimit);
  }, [filteredEmojis, searchQuery, viewMode, displayLimit]);

  const hasMore = viewMode === 'todos' && !searchQuery && displayLimit < filteredEmojis.length;

  return (
    <div className="font-generator mb-10" style={{ minWidth: 0, maxWidth: '100%' }} aria-label="Área de trabajo de Emojis">
      {/* Invisible screen-reader live region */}
      <div aria-live="polite" className="sr-only">
        {liveAnnouncement}
      </div>

      {/* Floating Toast Notification */}
      <div className={`toast${toastMessage ? ' is-visible' : ''}`} role="status" aria-live="polite">
        {toastMessage}
      </div>

      {/* ═══ SIGNATURE WORKSPACE: MULTI-EMOJI SELECTION TRAY (STICKY) ═══ */}
      {tray.length > 0 && (
        <section
          className="tool-panel tool-panel--sticky-workspace"
          aria-labelledby="tray-heading"
          style={{
            position: 'sticky',
            top: '1rem',
            zIndex: 40,
            background: 'var(--color-surface, #ffffff)',
            border: '2px solid var(--color-brand, #4f46e5)',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            borderRadius: 'var(--radius-lg, 12px)',
            marginBottom: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 id="tray-heading" style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>📋</span>
              <span>Tu selección</span>
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-brand, #4f46e5)', background: 'var(--color-brand-light, #eef2ff)', padding: '0.15rem 0.5rem', borderRadius: '999px' }}>
                {tray.length} {tray.length === 1 ? 'emoji' : 'emojis'}
              </span>
            </h2>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <button
                type="button"
                className="btn btn--ghost btn--sm"
                onClick={handleClearTray}
                title="Limpiar toda la selección"
                style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
              >
                Limpiar
              </button>

              <button
                type="button"
                onClick={handleCopyTray}
                className={`btn ${copiedTray ? 'btn--success' : 'btn--gradient'} btn--sm`}
                style={{ fontWeight: 700, padding: '0.45rem 1rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <span>{copiedTray ? '✓ ¡Copiado!' : '📋 Copiar selección'}</span>
              </button>
            </div>
          </div>

          {/* Chips Tray with individual remove */}
          <div
            style={{
              padding: '0.5rem 0.75rem',
              background: 'var(--color-bg-alt, #f8fafc)',
              borderRadius: 'var(--radius-md, 8px)',
              border: '1px solid var(--color-border, #e2e8f0)',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.4rem',
              maxHeight: '140px',
              overflowY: 'auto',
            }}
          >
            {tray.map(item => (
              <span
                key={item.id}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.25rem 0.5rem',
                  background: 'white',
                  borderRadius: '6px',
                  border: '1px solid var(--color-border, #e2e8f0)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                  fontSize: '1.25rem',
                  lineHeight: 1,
                }}
              >
                <span>{item.char}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveFromTray(item.id, item.char)}
                  aria-label={`Quitar ${item.nameEs} de la selección`}
                  title={`Quitar ${item.nameEs}`}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--color-muted, #94a3b8)',
                    fontSize: '0.9rem',
                    lineHeight: 1,
                    padding: '0 0.15rem',
                    marginLeft: '0.15rem',
                  }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          <p style={{ margin: '0.35rem 0 0', fontSize: '0.75rem', color: 'var(--color-muted, #64748b)' }}>
            💡 Toca el botón <strong>+</strong> en cualquier emoji para añadirlo a esta bandeja.
          </p>
        </section>
      )}

      {/* ═══ SEARCH & CATEGORY CONTROLS ═══ */}
      <div className="toolbar tool-panel" style={{ minWidth: 0, maxWidth: '100%', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: '100%' }}>
          
          {/* Top Bar: Search Input & Views */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            
            {/* Search Input */}
            <div className="font-search" style={{ flex: '1 1 280px', minWidth: '220px' }}>
              <span className="font-search__icon" aria-hidden="true">🔍</span>
              <input
                ref={inputRef}
                type="search"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  if (viewMode !== 'todos') setViewMode('todos');
                }}
                placeholder="Busca corazón, feliz, perro, fuego, España..."
                className="font-search__input"
                aria-label="Buscar emojis"
                id="buscar-emojis-workspace"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--color-muted)',
                    fontSize: '1rem',
                  }}
                  aria-label="Borrar búsqueda"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode Chips (Todos / Recientes / Favoritos) */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewMode === 'todos'}
                onClick={() => setViewMode('todos')}
              >
                🌐 Catálogo
              </button>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewMode === 'recientes'}
                onClick={() => setViewMode('recientes')}
              >
                🕒 Recientes ({recents.length})
              </button>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewMode === 'favoritos'}
                onClick={() => setViewMode('favoritos')}
              >
                ★ Favoritos ({favorites.length})
              </button>
            </div>
          </div>

          {/* Skin Tone Modifier Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '0.25rem', borderTop: '1px solid var(--color-border)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-muted)' }}>
              Tono de piel:
            </span>
            <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
              {SKIN_TONES.map(tone => {
                const isSelected = selectedSkinTone === tone.char;
                return (
                  <button
                    key={tone.label}
                    type="button"
                    onClick={() => setSelectedSkinTone(tone.char)}
                    aria-label={`Seleccionar tono de piel ${tone.label}`}
                    title={tone.label}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: isSelected ? '2px solid var(--color-brand)' : '1px solid var(--color-border)',
                      background: isSelected ? 'var(--color-brand-light, #eef2ff)' : 'transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      lineHeight: 1,
                    }}
                  >
                    {tone.char ? `👋${tone.char}` : '👋'}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Chips (in Todos mode) */}
          {viewMode === 'todos' && (
            <div className="font-filters" role="toolbar" aria-label="Categorías de emojis" style={{ width: '100%', minWidth: 0 }}>
              {EMOJI_CATEGORIES.map(cat => {
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
                      setDisplayLimit(96);
                    }}
                  >
                    <span>{cat.icon}</span> {cat.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Results count & reset */}
          <div className="results-meta">
            <span>
              {filteredEmojis.length} {filteredEmojis.length === 1 ? 'emoji' : 'emojis'}
              {searchQuery ? ` para "${searchQuery}"` : ''}
            </span>
            {(searchQuery || activeCategory !== 'todos' || viewMode !== 'todos') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('todos');
                  setViewMode('todos');
                  setDisplayLimit(96);
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(92px, 1fr))',
          gap: '0.6rem',
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
              {viewMode === 'favoritos' ? 'Aún no tienes favoritos' : 'No encontramos emojis'}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', margin: 0 }}>
              {viewMode === 'favoritos'
                ? 'Toca la estrella ★ en cualquier emoji para guardarlo aquí.'
                : 'Prueba otra palabra en español, una emoción o cambia de categoría.'}
            </p>
          </div>
        ) : (
          displayedEmojis.map(emoji => {
            const charWithSkin = selectedSkinTone && emoji.skinToneSupport
              ? applySkinTone(emoji, selectedSkinTone)
              : emoji.char;
            const isCopied = copiedItem === charWithSkin;
            const isFav = favorites.includes(emoji.char);

            return (
              <div
                key={emoji.id}
                role="button"
                tabIndex={0}
                className="font-card"
                style={{
                  padding: '0.6rem 0.4rem',
                  minHeight: '94px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                  userSelect: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                }}
                onClick={() => handleDirectCopy(emoji)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleDirectCopy(emoji);
                  }
                }}
                aria-label={`Copiar emoji ${emoji.nameEs}`}
                title={`Haz clic para copiar ${charWithSkin} (${emoji.nameEs})`}
              >
                {/* Favorite Star Button */}
                <button
                  type="button"
                  onClick={e => toggleFavorite(e, emoji.char, emoji.nameEs)}
                  style={{
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px',
                    fontSize: '0.8rem',
                    color: isFav ? 'var(--color-yellow, #eab308)' : 'var(--color-ghost, #cbd5e1)',
                    lineHeight: 1,
                    zIndex: 2,
                  }}
                  aria-label={isFav ? `Quitar ${emoji.nameEs} de favoritos` : `Guardar ${emoji.nameEs} en favoritos`}
                  title={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                >
                  ★
                </button>

                {/* Add to Tray Button (+) */}
                <button
                  type="button"
                  onClick={e => handleAddToTray(e, emoji)}
                  style={{
                    position: 'absolute',
                    top: '4px',
                    left: '4px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'var(--color-brand-light, #eef2ff)',
                    color: 'var(--color-brand, #4f46e5)',
                    border: '1px solid var(--color-brand, #4f46e5)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    lineHeight: 1,
                    zIndex: 2,
                    padding: 0,
                  }}
                  aria-label={`Añadir ${emoji.nameEs} a la selección`}
                  title="Añadir a la selección para copiar juntos"
                >
                  +
                </button>

                {/* Emoji Character Large */}
                <span
                  style={{
                    fontSize: '2rem',
                    lineHeight: 1.1,
                    marginTop: '0.4rem',
                    marginBottom: '0.2rem',
                  }}
                >
                  {charWithSkin}
                </span>

                {/* Action Feedback Badge */}
                <div style={{ width: '100%', textAlign: 'center' }}>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      display: 'inline-block',
                      padding: '0.1rem 0.35rem',
                      borderRadius: '4px',
                      background: isCopied ? 'var(--color-green-light, #dcfce7)' : 'transparent',
                      color: isCopied ? 'var(--color-green, #16a34a)' : 'var(--color-muted, #64748b)',
                    }}
                  >
                    {isCopied ? '✓ Copiado' : 'Copiar'}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Load More Button for large catalogs */}
      {hasMore && (
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button
            type="button"
            className="btn btn--outline"
            onClick={() => setDisplayLimit(prev => prev + 96)}
            style={{ fontWeight: 600 }}
          >
            Cargar más emojis ({filteredEmojis.length - displayLimit} restantes)
          </button>
        </div>
      )}
    </div>
  );
};
