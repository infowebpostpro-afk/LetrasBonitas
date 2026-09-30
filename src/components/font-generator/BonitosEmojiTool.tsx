'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  BonitoCategoryId,
  BONITO_CATEGORIES,
  BONITO_EMOJIS,
  COMBOS_BONITOS,
  searchBonitos,
  BonitoEmoji,
} from '@/lib/unicode/bonitosEmojiData';
import { copyText } from '@/lib/clipboard';

type ViewFilter = 'todos' | 'recientes' | 'favoritos';

export const BonitosEmojiTool: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<BonitoCategoryId>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewFilter, setViewFilter] = useState<ViewFilter>('todos');

  // Progressive rendering limit for fast initial paint
  const [visibleLimit, setVisibleLimit] = useState<number>(36);

  // Feedback states
  const [copiedChar, setCopiedChar] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');

  // Favorites & Recents in LocalStorage
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentEmojis, setRecentEmojis] = useState<string[]>([]);

  // Load from LocalStorage
  useEffect(() => {
    try {
      const favs = localStorage.getItem('bonitos_favs_v1');
      if (favs) setFavorites(JSON.parse(favs));
      const rec = localStorage.getItem('bonitos_recents_v1');
      if (rec) setRecentEmojis(JSON.parse(rec));
    } catch {
      // Storage unavailable
    }
  }, []);

  const saveFavorites = (list: string[]) => {
    setFavorites(list);
    try {
      localStorage.setItem('bonitos_favs_v1', JSON.stringify(list));
    } catch {
      // Ignore
    }
  };

  const registerRecent = (char: string) => {
    const updated = [char, ...recentEmojis.filter(c => c !== char)].slice(0, 18);
    setRecentEmojis(updated);
    try {
      localStorage.setItem('bonitos_recents_v1', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 1800);
  };

  const handleCopy = async (char: string, label: string = 'Emoji') => {
    try {
      const ok = await copyText(char);
      if (ok) {
        setCopiedChar(char);
        registerRecent(char);
        setLiveAnnouncement(`Emoji ${label} copiado`);
        showToast(`✓ ¡Copiado ${char}!`);
        setTimeout(() => setCopiedChar(null), 1200);
      } else {
        showToast('Error al copiar');
      }
    } catch {
      showToast('Error al copiar');
    }
  };

  const toggleFavorite = (e: React.MouseEvent, char: string, name: string) => {
    e.stopPropagation();
    if (favorites.includes(char)) {
      saveFavorites(favorites.filter(c => c !== char));
      setLiveAnnouncement(`${name} eliminado de favoritos`);
      showToast('Eliminado de favoritos');
    } else {
      saveFavorites([...favorites, char]);
      setLiveAnnouncement(`${name} guardado en favoritos`);
      showToast('♥ Guardado en favoritos');
    }
  };

  // Filter emojis
  const filteredEmojis = useMemo(() => {
    return searchBonitos(searchQuery, activeCategory);
  }, [searchQuery, activeCategory]);

  const displayedEmojis: BonitoEmoji[] = useMemo(() => {
    if (viewFilter === 'favoritos') {
      return BONITO_EMOJIS.filter(e => favorites.includes(e.char));
    }
    if (viewFilter === 'recientes') {
      return recentEmojis.map(char => {
        const found = BONITO_EMOJIS.find(e => e.char === char);
        if (found) return found;
        return {
          id: `rec-${char}`,
          char,
          name: 'Emoji reciente',
          keywords: [],
          categories: ['todos' as BonitoCategoryId],
        };
      });
    }
    return filteredEmojis;
  }, [viewFilter, favorites, recentEmojis, filteredEmojis]);

  // Emojis sliced for progressive disclosure
  const visibleEmojis = useMemo(() => {
    return displayedEmojis.slice(0, visibleLimit);
  }, [displayedEmojis, visibleLimit]);

  return (
    <div className="font-generator mb-10" style={{ minWidth: 0, maxWidth: '100%' }} aria-label="Selector de Emojis Bonitos">
      {/* Screen-reader Live Region */}
      <div aria-live="polite" className="sr-only">
        {liveAnnouncement}
      </div>

      {/* Floating Native Toast Notification */}
      <div className={`toast${toastMessage ? ' is-visible' : ''}`} role="status" aria-live="polite">
        {toastMessage}
      </div>

      {/* ═══ DISCOVERY TOOLBAR: SEARCH & CATEGORY FILTERS ═══ */}
      <div className="toolbar tool-panel mb-6" style={{ minWidth: 0, maxWidth: '100%', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: '100%' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            {/* Search Input */}
            <div className="font-search" style={{ flex: '1 1 280px', minWidth: '220px' }}>
              <span className="font-search__icon" aria-hidden="true">🔍</span>
              <input
                type="search"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  if (viewFilter !== 'todos') setViewFilter('todos');
                }}
                placeholder="Busca amor, flores, luna, rosa, cute..."
                className="font-search__input"
                aria-label="Buscar emojis bonitos"
                id="buscar-emojis-bonitos-input"
              />
            </div>

            {/* Quick Views Switcher */}
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewFilter === 'todos'}
                onClick={() => {
                  setViewFilter('todos');
                  setSearchQuery('');
                }}
              >
                🌐 Galería ({displayedEmojis.length})
              </button>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewFilter === 'recientes'}
                onClick={() => setViewFilter('recientes')}
              >
                🕒 Recientes ({recentEmojis.length})
              </button>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewFilter === 'favoritos'}
                onClick={() => setViewFilter('favoritos')}
              >
                ♥ Favoritos ({favorites.length})
              </button>
            </div>
          </div>

          {/* Category Chips */}
          {viewFilter === 'todos' && (
            <div className="font-filters" role="toolbar" aria-label="Categorías de emojis bonitos">
              {BONITO_CATEGORIES.map(cat => {
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
                      setVisibleLimit(36);
                    }}
                  >
                    <span>{cat.icon}</span> {cat.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Search Result Counter & Reset */}
          <div className="results-meta">
            <span>
              {displayedEmojis.length} {displayedEmojis.length === 1 ? 'emoji bonito' : 'emojis bonitos'}
              {searchQuery ? ` para "${searchQuery}"` : ''}
            </span>
            {(searchQuery || activeCategory !== 'todos' || viewFilter !== 'todos') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('todos');
                  setViewFilter('todos');
                  setVisibleLimit(36);
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

      {/* ═══ EMOJIS GRID ═══ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))', gap: '0.65rem' }}>
        {displayedEmojis.length === 0 ? (
          <div className="tool-panel" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem 1.5rem' }}>
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>🔍</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.4rem', color: 'var(--color-ink)' }}>
              {viewFilter === 'favoritos' ? 'Aún no tienes favoritos' : 'No encontramos emojis para esa búsqueda'}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', margin: 0 }}>
              {viewFilter === 'favoritos'
                ? 'Toca el corazón ♡ en cualquier emoji para guardarlo aquí.'
                : 'Prueba otra palabra como amor, flores, rosa, cute o luna.'}
            </p>
          </div>
        ) : (
          visibleEmojis.map(emoji => {
            const isCopied = copiedChar === emoji.char;
            const isFav = favorites.includes(emoji.char);

            return (
              <button
                key={emoji.id}
                type="button"
                className="font-card"
                style={{
                  padding: '0.75rem 0.4rem',
                  minHeight: '94px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  cursor: 'pointer',
                  userSelect: 'none',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-md)',
                  width: '100%',
                }}
                onClick={() => handleCopy(emoji.char, emoji.name)}
                aria-label={`Copiar emoji ${emoji.name} ${emoji.char}`}
                title={`Haz clic para copiar ${emoji.char} (${emoji.name})`}
              >
                {/* Favorite Heart Button */}
                <span
                  role="button"
                  tabIndex={0}
                  onClick={e => toggleFavorite(e, emoji.char, emoji.name)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFavorite(e as unknown as React.MouseEvent, emoji.char, emoji.name);
                    }
                  }}
                  style={{
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    padding: '2px',
                    fontSize: '0.85rem',
                    color: isFav ? 'var(--color-brand, #ec4899)' : 'var(--color-ghost, #94a3b8)',
                    lineHeight: 1,
                    zIndex: 2,
                    cursor: 'pointer',
                  }}
                  title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                  aria-label={isFav ? `Quitar ${emoji.name} de favoritos` : `Añadir ${emoji.name} a favoritos`}
                >
                  {isFav ? '♥' : '♡'}
                </span>

                {/* Copied Overlay Feedback */}
                {isCopied ? (
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ color: 'var(--color-brand)', fontWeight: 800, fontSize: '1.2rem' }}>✓</span>
                    <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-brand)', marginTop: '2px' }}>
                      Copiado
                    </span>
                  </div>
                ) : (
                  <>
                    <span style={{ fontSize: '2.1rem', lineHeight: 1, margin: 'auto 0' }}>
                      {emoji.char}
                    </span>
                    <span
                      style={{
                        fontSize: '0.62rem',
                        color: 'var(--color-muted)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '100%',
                        textAlign: 'center',
                        marginTop: '4px',
                      }}
                    >
                      {emoji.name}
                    </span>
                  </>
                )}
              </button>
            );
          })
        )}
      </div>

      {/* Progressive Load Button */}
      {visibleEmojis.length < displayedEmojis.length && (
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button
            type="button"
            onClick={() => setVisibleLimit(prev => prev + 36)}
            className="btn btn--outline"
            style={{ fontWeight: 600, padding: '0.6rem 1.5rem' }}
          >
            Mostrar más emojis ({displayedEmojis.length - visibleEmojis.length} restantes)
          </button>
        </div>
      )}

      {/* ═══ COMBOS BONITOS (USEFUL COMPACT SECONDARY SECTION) ═══ */}
      <section className="tool-panel mt-10" style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)' }} aria-labelledby="combos-bonitos-title">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
          <div>
            <h3 id="combos-bonitos-title" style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: 'var(--color-ink)' }}>
              🌸 Pequeñas Combinaciones Bonitas
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', margin: '0.2rem 0 0 0' }}>
              Pares y tríos de emojis listos para copiar con un toque.
            </p>
          </div>

          <Link
            href="/emojis/aesthetic/"
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            ¿Buscas combinaciones por estilo? Explora Emojis Aesthetic →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.6rem', marginTop: '0.75rem' }}>
          {COMBOS_BONITOS.map(combo => {
            const isCopied = copiedChar === combo.combo;
            return (
              <div
                key={combo.id}
                style={{
                  padding: '0.75rem',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                }}
              >
                <div>
                  <span style={{ fontSize: '1.25rem', display: 'block', lineHeight: 1.2 }}>
                    {combo.combo}
                  </span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--color-muted)' }}>
                    {combo.name}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(combo.combo, combo.name)}
                  className={`btn ${isCopied ? 'btn--success' : 'btn--outline'} btn--sm`}
                  style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem', fontWeight: 700 }}
                  aria-label={`Copiar combo ${combo.name}: ${combo.combo}`}
                >
                  {isCopied ? '✓' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
