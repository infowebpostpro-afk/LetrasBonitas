'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  GeneralSymbol,
  MasterSymbolCategory,
  MASTER_CATEGORIES,
  GENERAL_SYMBOLS,
  READY_COMBOS,
  searchMasterSymbols,
} from '@/lib/unicode/generalSymbolsData';
import { copyText } from '@/lib/clipboard';

type ViewMode = 'simbolos' | 'combos' | 'favoritos' | 'recientes';

export const SimbolosWorkspaceTool: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('simbolos');
  const [activeCategory, setActiveCategory] = useState<MasterSymbolCategory>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Text accumulator & clipboard box
  const [currentText, setCurrentText] = useState<string>('');
  
  // Feedback states
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');

  // Favorites & Recents in LocalStorage
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentSymbols, setRecentSymbols] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  // Load favorites & recents on mount
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
    const updated = [char, ...recentSymbols.filter(c => c !== char)].slice(0, 36);
    setRecentSymbols(updated);
    try {
      localStorage.setItem('master_symbols_recents_v2', JSON.stringify(updated));
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
      setLiveAnnouncement(`Símbolo ${char} eliminado de favoritos`);
      showToast(`Eliminado de favoritos: ${char}`);
    } else {
      saveFavorites([...favorites, char]);
      setLiveAnnouncement(`Símbolo ${char} guardado en favoritos`);
      showToast(`Guardado en favoritos: ${char}`);
    }
  };

  // 1-Click: Copies to clipboard AND appends to the workspace input
  const handleSymbolClick = async (char: string, name?: string) => {
    try {
      const ok = await copyText(char);
      setCopiedItem(char);
      registerRecent(char);
      
      // Also add to the input box so the user can easily build a combo or see their copied item
      setCurrentText(prev => prev + char);
      
      if (ok) {
        const msg = `¡Copiado ${char} al portapapeles!`;
        setLiveAnnouncement(`Símbolo ${name || char} copiado al portapapeles`);
        showToast(msg);
      } else {
        showToast(`Añadido: ${char}`);
      }
      setTimeout(() => setCopiedItem(null), 1200);
    } catch {
      // Fallback
      setCurrentText(prev => prev + char);
      showToast(`Añadido: ${char}`);
    }
  };

  // Copy everything in the text box
  const handleCopyAll = async () => {
    if (!currentText) return;
    try {
      const ok = await copyText(currentText);
      if (!ok) {
        showToast('Error al copiar');
        return;
      }
      setCopiedItem('ALL');
      setLiveAnnouncement('Texto completo copiado al portapapeles');
      showToast('¡Texto copiado al portapapeles!');
      setTimeout(() => setCopiedItem(null), 1200);
    } catch {
      showToast('Error al copiar');
    }
  };

  // Clear text box
  const handleClear = () => {
    setCurrentText('');
    if (inputRef.current) inputRef.current.focus();
  };

  // Paste from clipboard into text box
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setCurrentText(prev => prev + text);
      showToast('Texto pegado');
    } catch {
      // Fallback
    }
  };

  // Compute displayed symbols
  const filteredSymbols = useMemo(() => {
    return searchMasterSymbols(searchQuery, activeCategory);
  }, [searchQuery, activeCategory]);

  const displayedSymbols: GeneralSymbol[] = useMemo(() => {
    if (viewMode === 'favoritos') {
      return GENERAL_SYMBOLS.filter(s => favorites.includes(s.char));
    }
    if (viewMode === 'recientes') {
      return recentSymbols.map(char => {
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
    return filteredSymbols;
  }, [viewMode, favorites, recentSymbols, filteredSymbols]);

  // Categories list with active counts
  const categoryPills = useMemo(() => {
    return MASTER_CATEGORIES.map(cat => ({
      ...cat,
      count: cat.id === 'todos' 
        ? GENERAL_SYMBOLS.length 
        : GENERAL_SYMBOLS.filter(s => s.category === cat.id).length
    }));
  }, []);

  return (
    <div className="font-generator mb-10" style={{ minWidth: 0, maxWidth: '100%' }} aria-label="Herramienta de Símbolos para Copiar y Pegar">
      {/* Invisible screen-reader live region */}
      <div aria-live="polite" className="sr-only">
        {liveAnnouncement}
      </div>

      {/* Floating Native Toast Notification */}
      <div className={`toast${toastMessage ? ' is-visible' : ''}`} role="status" aria-live="polite">
        {toastMessage}
      </div>

      {/* ═══ TOP WORKSPACE: TEXT & ACCUMULATOR BOX (STICKY) ═══ */}
      <section className="tool-panel tool-panel--sticky-workspace" aria-labelledby="symbol-workspace-label">
        <label id="symbol-workspace-label" htmlFor="symbol-workspace-input" className="font-input__label">
          <span className="font-input__label-icon">✍️</span>
          <span>Escribe tu texto o haz clic en los símbolos para copiarlos al instante:</span>
        </label>

        <div style={{ position: 'relative', width: '100%', marginBottom: 'var(--space-2)' }}>
          <input
            id="symbol-workspace-input"
            ref={inputRef}
            type="text"
            value={currentText}
            onChange={e => setCurrentText(e.target.value)}
            placeholder="Escribe aquí tu nombre o toca cualquier símbolo para añadirlo..."
            className="workspace-sticky-input"
          />
          {currentText && (
            <button
              type="button"
              onClick={handleClear}
              className="workspace-clear-btn"
              title="Borrar texto"
              aria-label="Borrar texto"
            >
              ✕
            </button>
          )}
        </div>

        {/* Input Meta & Primary Actions Bar */}
        <div className="font-input__meta workspace-sticky-meta">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span id="font-input-count" className="font-input__count" style={{ padding: '0.35rem 0.65rem', borderRadius: 'var(--radius-sm)' }}>
              {currentText.length} caracteres
            </span>
            <span className="workspace-sticky-tip" style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
              💡 Toca cualquier símbolo: se copia al portapapeles y se agrega aquí.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              onClick={handlePaste}
              title="Pegar texto del portapapeles"
            >
              📋 Pegar
            </button>

            {currentText && (
              <button
                type="button"
                className="btn btn--ghost btn--sm"
                onClick={handleClear}
                title="Limpiar campo"
              >
                Limpiar
              </button>
            )}

            <button
              type="button"
              onClick={handleCopyAll}
              disabled={!currentText}
              className={`btn ${currentText ? 'btn--gradient' : 'btn--ghost'} btn--sm`}
              style={{ fontWeight: 700, padding: '0.5rem 1rem' }}
            >
              <span>{copiedItem === 'ALL' ? '✓ ¡Copiado!' : '✨ Copiar Todo'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ═══ TOOLBAR: SEARCH & CATEGORY FILTERS ═══ */}
      <div className="toolbar tool-panel" style={{ minWidth: 0, maxWidth: '100%', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: '100%' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            {/* Search Input */}
            <div className="font-search" style={{ flex: '1 1 260px', minWidth: '220px' }}>
              <span className="font-search__icon" aria-hidden="true">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  if (viewMode !== 'simbolos') setViewMode('simbolos');
                }}
                placeholder="Buscar símbolo o emoji... (ej. estrella, corazón, fuego)"
                className="font-search__input"
              />
            </div>

            {/* View Mode Switcher */}
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewMode === 'simbolos'}
                onClick={() => { setViewMode('simbolos'); setSearchQuery(''); }}
              >
                ✦ Símbolos & Emojis
              </button>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewMode === 'combos'}
                onClick={() => setViewMode('combos')}
              >
                ✨ Combinaciones ({READY_COMBOS.length})
              </button>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewMode === 'favoritos'}
                onClick={() => setViewMode('favoritos')}
              >
                ★ Favoritos ({favorites.length})
              </button>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewMode === 'recientes'}
                onClick={() => setViewMode('recientes')}
              >
                🕒 Recientes
              </button>
            </div>
          </div>

          {/* Category Chips (when in 'simbolos' mode) */}
          {viewMode === 'simbolos' && (
            <div className="font-filters" role="toolbar" aria-label="Categorías de símbolos" style={{ width: '100%', minWidth: 0 }}>
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
              {displayedSymbols.length} {displayedSymbols.length === 1 ? 'símbolo' : 'símbolos'}
              {searchQuery ? ` para "${searchQuery}"` : ''}
            </span>
            {(searchQuery || activeCategory !== 'todos' || viewMode !== 'simbolos') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('todos');
                  setViewMode('simbolos');
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
      {viewMode === 'combos' ? (
        /* READY COMBOS VIEW */
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
          {READY_COMBOS.map(item => {
            const isCopied = copiedItem === item.combo;
            return (
              <div
                key={item.id}
                onClick={() => handleSymbolClick(item.combo, item.name)}
                className={`font-card${isCopied ? ' is-copied' : ''}`}
                style={{ padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.75rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="font-card__name">{item.name}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>{item.category}</span>
                </div>

                <p style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', textAlign: 'center', margin: '0.5rem 0' }}>
                  {item.combo}
                </p>

                <button
                  type="button"
                  className={`btn ${isCopied ? 'btn--success' : 'btn--ghost'}`}
                  style={{ width: '100%', minHeight: '34px', fontSize: '0.8rem' }}
                >
                  {isCopied ? '✓ ¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        /* SYMBOLS GRID VIEW */
        <div>
          {displayedSymbols.length === 0 ? (
            <div className="tool-panel" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>🔍</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-ink)', margin: '0 0 0.4rem' }}>
                {viewMode === 'favoritos' ? 'Aún no tienes favoritos' : 'No se encontraron símbolos'}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', margin: 0 }}>
                {viewMode === 'favoritos'
                  ? 'Toca la estrella ★ en cualquier símbolo para guardarlo aquí.'
                  : 'Prueba otra palabra de búsqueda o pulsa Restablecer filtros.'}
              </p>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(78px, 1fr))',
                gap: '0.6rem',
              }}
            >
              {displayedSymbols.map(item => {
                const isCopied = copiedItem === item.char;
                const isFav = favorites.includes(item.char);

                return (
                  <div
                    key={item.id}
                    onClick={() => handleSymbolClick(item.char, item.name)}
                    className={`font-card${isCopied ? ' is-copied' : ''}`}
                    style={{
                      padding: '0.6rem 0.4rem',
                      minHeight: '84px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      userSelect: 'none',
                    }}
                    title={`Haz clic para copiar ${item.char} (${item.name})`}
                  >
                    {/* Favorite Star Button */}
                    <button
                      type="button"
                      onClick={e => toggleFavorite(e, item.char)}
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
                      }}
                      title={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                    >
                      ★
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
                            fontSize: '1.75rem',
                            lineHeight: 1,
                            color: 'var(--color-ink)',
                            margin: 'auto 0',
                          }}
                        >
                          {item.char}
                        </span>
                        <span
                          style={{
                            fontSize: '0.65rem',
                            color: 'var(--color-muted)',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            maxWidth: '100%',
                            textAlign: 'center',
                            marginTop: '4px',
                          }}
                        >
                          {item.name}
                        </span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
