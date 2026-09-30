'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Emoji,
  EmojiCategory,
  EMOJI_CATEGORIES,
  EMOJIS,
  searchEmojis,
  getRelatedEmojis,
  applySkinTone,
  SKIN_TONES,
} from '@/lib/unicode/emojiData';
import { copyText } from '@/lib/clipboard';

type ViewMode = 'emojis' | 'recientes' | 'favoritos';

export const EmojiSearchTool: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('emojis');
  const [activeCategory, setActiveCategory] = useState<EmojiCategory | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Multi-emoji combination tray
  const [combination, setCombination] = useState<string>('');
  
  // Selected emoji for details panel
  const [selectedEmoji, setSelectedEmoji] = useState<Emoji | null>(null);
  const [selectedSkinTone, setSelectedSkinTone] = useState<string>('');
  
  // Feedback states
  const [copiedEmoji, setCopiedEmoji] = useState<string | null>(null);
  const [copiedCombination, setCopiedCombination] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');

  // Favorites & Recents in LocalStorage
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentEmojis, setRecentEmojis] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  // Load favorites & recents on mount
  useEffect(() => {
    try {
      const favs = localStorage.getItem('emoji_favorites_v1');
      if (favs) setFavorites(JSON.parse(favs));
      const rec = localStorage.getItem('emoji_recents_v1');
      if (rec) setRecentEmojis(JSON.parse(rec));
    } catch {
      // Storage unavailable
    }
  }, []);

  const saveFavorites = (list: string[]) => {
    setFavorites(list);
    try {
      localStorage.setItem('emoji_favorites_v1', JSON.stringify(list));
    } catch {
      // Ignore
    }
  };

  const registerRecent = (char: string) => {
    const updated = [char, ...recentEmojis.filter(c => c !== char)].slice(0, 24);
    setRecentEmojis(updated);
    try {
      localStorage.setItem('emoji_recents_v1', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 1800);
  };

  const toggleFavorite = (e: React.MouseEvent, char: string) => {
    e.stopPropagation();
    if (favorites.includes(char)) {
      saveFavorites(favorites.filter(c => c !== char));
      setLiveAnnouncement(`Emoji ${char} eliminado de favoritos`);
      showToast(`Eliminado de favoritos`);
    } else {
      saveFavorites([...favorites, char]);
      setLiveAnnouncement(`Emoji ${char} guardado en favoritos`);
      showToast(`Guardado en favoritos`);
    }
  };

  // 1-Click: Copy to clipboard
  const handleEmojiClick = async (emoji: Emoji) => {
    try {
      const charToCopy = selectedSkinTone && emoji.skinToneSupport 
        ? applySkinTone(emoji, selectedSkinTone)
        : emoji.char;
      
      const ok = await copyText(charToCopy);
      setCopiedEmoji(charToCopy);
      registerRecent(charToCopy);
      
      if (ok) {
        const msg = `¡Copiado ${charToCopy}!`;
        setLiveAnnouncement(`Emoji ${emoji.nameEs} copiado al portapapeles`);
        showToast(msg);
      } else {
        showToast(`Añadido: ${charToCopy}`);
      }
      setTimeout(() => setCopiedEmoji(null), 1200);
    } catch {
      // Fallback
      showToast(`Añadido: ${emoji.char}`);
    }
  };

  // Add emoji to combination tray
  const handleAddToCombination = (emoji: Emoji) => {
    const charToAdd = selectedSkinTone && emoji.skinToneSupport 
      ? applySkinTone(emoji, selectedSkinTone)
      : emoji.char;
    
    setCombination(prev => prev + charToAdd);
    setLiveAnnouncement(`Emoji ${emoji.nameEs} añadido a la combinación`);
    showToast(`Añadido a la combinación`);
  };

  // Copy entire combination
  const handleCopyCombination = async () => {
    if (!combination) return;
    try {
      const ok = await copyText(combination);
      if (!ok) {
        showToast('Error al copiar');
        return;
      }
      setCopiedCombination(true);
      setLiveAnnouncement('Combinación copiada al portapapeles');
      showToast('¡Combinación copiada!');
      setTimeout(() => setCopiedCombination(false), 1200);
    } catch {
      showToast('Error al copiar');
    }
  };

  // Clear combination
  const handleClearCombination = () => {
    setCombination('');
  };

  // Compute displayed emojis
  const filteredEmojis = useMemo(() => {
    return searchEmojis(searchQuery, activeCategory);
  }, [searchQuery, activeCategory]);

  const displayedEmojis: Emoji[] = useMemo(() => {
    if (viewMode === 'favoritos') {
      return EMOJIS.filter(e => favorites.includes(e.char));
    }
    if (viewMode === 'recientes') {
      return recentEmojis.map(char => {
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
  }, [viewMode, favorites, recentEmojis, filteredEmojis]);

  // Related emojis for selected emoji
  const relatedEmojis = useMemo(() => {
    if (!selectedEmoji) return [];
    return getRelatedEmojis(selectedEmoji, 6);
  }, [selectedEmoji]);

  // Categories list with counts
  const categoryPills = useMemo(() => {
    return EMOJI_CATEGORIES.map(cat => ({
      ...cat,
      count: cat.id === 'todos' 
        ? EMOJIS.length 
        : EMOJIS.filter(e => e.category === cat.id).length
    }));
  }, []);

  return (
    <div className="font-generator mb-10" style={{ minWidth: 0, maxWidth: '100%' }} aria-label="Buscador de Emojis">
      {/* Invisible screen-reader live region */}
      <div aria-live="polite" className="sr-only">
        {liveAnnouncement}
      </div>

      {/* Floating Native Toast Notification */}
      <div className={`toast${toastMessage ? ' is-visible' : ''}`} role="status" aria-live="polite">
        {toastMessage}
      </div>

      {/* ═══ MULTI-EMOJI COMBINATION TRAY (STICKY) ═══ */}
      {combination && (
        <section className="tool-panel tool-panel--sticky-workspace" aria-labelledby="combination-label">
          <label id="combination-label" className="font-input__label">
            <span className="font-input__label-icon">✨</span>
            <span>Tu combinación</span>
          </label>

          <div style={{ 
            position: 'relative', 
            width: '100%', 
            marginBottom: 'var(--space-2)',
            padding: '1rem',
            background: 'var(--color-bg-alt)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '1.5rem', lineHeight: 1, wordBreak: 'break-all' }}>
              {combination}
            </span>
          </div>

          <div className="font-input__meta workspace-sticky-meta">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span className="workspace-sticky-tip" style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                💡 Toca + en cualquier emoji para añadirlo a tu combinación
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn--ghost btn--sm"
                onClick={handleClearCombination}
                title="Limpiar combinación"
              >
                Limpiar
              </button>

              <button
                type="button"
                onClick={handleCopyCombination}
                className={`btn ${copiedCombination ? 'btn--success' : 'btn--gradient'} btn--sm`}
                style={{ fontWeight: 700, padding: '0.5rem 1rem' }}
              >
                <span>{copiedCombination ? '✓ ¡Copiado!' : '✨ Copiar todo'}</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ═══ TOOLBAR: SEARCH & CATEGORY FILTERS ═══ */}
      <div className="toolbar tool-panel" style={{ minWidth: 0, maxWidth: '100%', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: '100%' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            {/* Search Input */}
            <div className="font-search" style={{ flex: '1 1 260px', minWidth: '220px' }}>
              <span className="font-search__icon" aria-hidden="true">🔍</span>
              <input
                type="search"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  if (viewMode !== 'emojis') setViewMode('emojis');
                }}
                placeholder="Busca amor, risa, perro, fiesta, dinero..."
                className="font-search__input"
                aria-label="Buscar emojis"
                id="buscar-emojis-input"
              />
            </div>

            {/* View Mode Switcher */}
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewMode === 'emojis'}
                onClick={() => { setViewMode('emojis'); setSearchQuery(''); }}
              >
                🌐 Emojis
              </button>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewMode === 'recientes'}
                onClick={() => setViewMode('recientes')}
              >
                🕒 Recientes ({recentEmojis.length})
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

          {/* Category Chips (when in 'emojis' mode) */}
          {viewMode === 'emojis' && (
            <div className="font-filters" role="toolbar" aria-label="Categorías de emojis" style={{ width: '100%', minWidth: 0 }}>
              {categoryPills.map(cat => {
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

          {/* Results count & reset */}
          <div className="results-meta">
            <span>
              {displayedEmojis.length} {displayedEmojis.length === 1 ? 'emoji' : 'emojis'}
              {searchQuery ? ` para "${searchQuery}"` : ''}
            </span>
            {(searchQuery || activeCategory !== 'todos' || viewMode !== 'emojis') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('todos');
                  setViewMode('emojis');
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

      {/* ═══ CONTENT AREA ═══ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(84px, 1fr))', gap: '0.6rem' }}>
        {displayedEmojis.length === 0 ? (
          <div className="tool-panel" style={{ 
            gridColumn: '1 / -1', 
            textAlign: 'center', 
            padding: '3rem 1.5rem' 
          }}>
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>🔍</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-ink)', margin: '0 0 0.4rem' }}>
              {viewMode === 'favoritos' ? 'Aún no tienes favoritos' : 'No encontramos emojis'}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', margin: 0 }}>
              {viewMode === 'favoritos'
                ? 'Toca la estrella ★ en cualquier emoji para guardarlo aquí.'
                : 'Prueba otra palabra, una emoción o una categoría.'}
            </p>
          </div>
        ) : (
          displayedEmojis.map(emoji => {
            const isCopied = copiedEmoji === emoji.char;
            const isFav = favorites.includes(emoji.char);
            const isSelected = selectedEmoji?.id === emoji.id;

            return (
              <div
                key={emoji.id}
                role="button"
                tabIndex={0}
                className={`font-card${isSelected ? ' is-selected' : ''}`}
                style={{
                  padding: '0.6rem 0.4rem',
                  minHeight: '88px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  userSelect: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => handleEmojiClick(emoji)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleEmojiClick(emoji);
                  }
                }}
                aria-label={`Copiar emoji ${emoji.nameEs}`}
                title={`Haz clic para copiar ${emoji.char} (${emoji.nameEs})`}
              >
                {/* Favorite Star Button */}
                <button
                  type="button"
                  onClick={e => toggleFavorite(e, emoji.char)}
                  style={{
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px',
                    fontSize: '0.75rem',
                    color: isFav ? 'var(--color-yellow)' : 'var(--color-ghost)',
                    lineHeight: 1,
                    zIndex: 2,
                  }}
                  aria-label={isFav ? `Quitar ${emoji.nameEs} de favoritos` : `Guardar ${emoji.nameEs} en favoritos`}
                  title={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                >
                  ★
                </button>

                {/* Add to Combination Button */}
                <button
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    handleAddToCombination(emoji);
                  }}
                  style={{
                    position: 'absolute',
                    top: '4px',
                    left: '4px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px',
                    fontSize: '0.75rem',
                    color: 'var(--color-brand)',
                    lineHeight: 1,
                    zIndex: 2,
                  }}
                  aria-label={`Añadir ${emoji.nameEs} a la combinación`}
                  title="Añadir a la combinación"
                >
                  +
                </button>

                {/* Details / Tone Toggle Button */}
                <button
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    if (selectedEmoji?.id === emoji.id) {
                      setSelectedEmoji(null);
                    } else {
                      setSelectedEmoji(emoji);
                      setSelectedSkinTone('');
                    }
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '2px',
                    right: '4px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px',
                    fontSize: '0.65rem',
                    color: isSelected ? 'var(--color-brand)' : 'var(--color-ghost)',
                    lineHeight: 1,
                    zIndex: 2,
                    opacity: emoji.skinToneSupport || isSelected ? 1 : 0.6,
                  }}
                  aria-label={`Ver detalles${emoji.skinToneSupport ? ' y tonos de piel' : ''} de ${emoji.nameEs}`}
                  title={emoji.skinToneSupport ? 'Elegir tono de piel' : 'Ver detalles'}
                >
                  {emoji.skinToneSupport ? '🎨' : 'ℹ️'}
                </button>

                {/* Copied Overlay Feedback */}
                {isCopied ? (
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ color: 'var(--color-brand)', fontWeight: 800, fontSize: '1.1rem' }}>✓</span>
                    <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-brand)', marginTop: '2px' }}>
                      Copiado
                    </span>
                  </div>
                ) : (
                  <>
                    <span
                      style={{
                        fontSize: '2rem',
                        lineHeight: 1,
                        margin: 'auto 0',
                      }}
                    >
                      {emoji.char}
                    </span>
                    <span
                      style={{
                        fontSize: '0.6rem',
                        color: 'var(--color-muted)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '100%',
                        textAlign: 'center',
                        marginTop: '4px',
                      }}
                    >
                      {emoji.nameEs}
                    </span>
                  </>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* ═══ SELECTED EMOJI DETAILS PANEL ═══ */}
      {selectedEmoji && (() => {
        const activeChar = selectedSkinTone && selectedEmoji.skinToneSupport
          ? applySkinTone(selectedEmoji, selectedSkinTone)
          : selectedEmoji.char;

        return (
          <section className="tool-panel" style={{ marginTop: '1.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }} aria-labelledby="emoji-details-label">
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '3rem', lineHeight: 1 }}>{activeChar}</span>
                <div>
                  <h3 id="emoji-details-label" style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.25rem 0' }}>
                    {selectedEmoji.nameEs}
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
                    Categoría: {EMOJI_CATEGORIES.find(c => c.id === selectedEmoji.category)?.label || selectedEmoji.category}
                  </span>
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => handleEmojiClick(selectedEmoji)}
                  className="btn btn--gradient btn--sm"
                  style={{ fontWeight: 700 }}
                >
                  {copiedEmoji === activeChar ? '✓ ¡Copiado!' : `Copiar ${activeChar}`}
                </button>
                <button
                  type="button"
                  onClick={() => handleAddToCombination(selectedEmoji)}
                  className="btn btn--outline btn--sm"
                >
                  + Combinación
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedEmoji(null)}
                  className="btn btn--ghost btn--sm"
                  aria-label="Cerrar panel de detalles"
                >
                  ✕
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)' }}>
              {/* Meaning */}
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 600, margin: '0 0 0.4rem 0', color: 'var(--color-ink)' }}>
                  Significado y emociones
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', margin: 0 }}>
                  {selectedEmoji.emotions.length > 0 
                    ? selectedEmoji.emotions.join(', ')
                    : 'Sin descripción emocional específica'}
                </p>
                {selectedEmoji.aliases.length > 0 && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', marginTop: '0.4rem', marginBottom: 0 }}>
                    Palabras clave: {selectedEmoji.aliases.slice(0, 6).join(', ')}
                  </p>
                )}
              </div>

              {/* Skin Tone Picker (if supported) */}
              {selectedEmoji.skinToneSupport && (
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 600, margin: '0 0 0.4rem 0', color: 'var(--color-ink)' }}>
                    Tonos de piel compatibles
                  </h4>
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                    {SKIN_TONES.map(tone => {
                      const toneVariant = tone.char ? applySkinTone(selectedEmoji, tone.char) : selectedEmoji.char;
                      const isToneActive = selectedSkinTone === tone.char;
                      return (
                        <button
                          key={tone.char}
                          type="button"
                          onClick={() => setSelectedSkinTone(tone.char)}
                          className="font-filters__chip"
                          aria-pressed={isToneActive}
                          style={{ fontSize: '0.85rem', padding: '0.3rem 0.55rem' }}
                          title={`Tono: ${tone.label}`}
                        >
                          <span>{toneVariant}</span>
                          <span style={{ fontSize: '0.7rem', marginLeft: '0.25rem' }}>{tone.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Related Emojis */}
              {relatedEmojis.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 600, margin: '0 0 0.4rem 0', color: 'var(--color-ink)' }}>
                    Emojis relacionados
                  </h4>
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                    {relatedEmojis.map(related => (
                      <button
                        key={related.id}
                        type="button"
                        onClick={() => {
                          setSelectedEmoji(related);
                          setSelectedSkinTone('');
                        }}
                        style={{
                          fontSize: '1.4rem',
                          padding: '0.2rem 0.4rem',
                          background: 'var(--color-bg-alt)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-sm)',
                          cursor: 'pointer',
                        }}
                        title={`${related.nameEs} (toca para ver detalles)`}
                        aria-label={`Ver ${related.nameEs}`}
                      >
                        {related.char}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })()}
    </div>
  );
};
