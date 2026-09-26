'use client';

import React, { useState, useEffect, useMemo, useRef, useTransition } from 'react';
import {
  BonitoSymbol,
  BonitoCategory,
  BONITO_CATEGORIES,
  BONITO_SYMBOLS,
  BONITO_READY_COMBOS,
  searchBonitosSymbols,
} from '@/lib/unicode/bonitosSymbolsData';
import { copyText } from '@/lib/clipboard';

type ViewMode = 'simbolos' | 'combos' | 'favoritos' | 'recientes';
type ComboFilter = 'todos' | 'nombres' | 'bios' | 'separadores';

const INITIAL_VISIBLE_COUNT = 48;
const LOAD_MORE_STEP = 36;

export const BonitosSymbolsTool: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('simbolos');
  const [activeCategory, setActiveCategory] = useState<BonitoCategory>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [comboFilter, setComboFilter] = useState<ComboFilter>('todos');
  const [visibleLimit, setVisibleLimit] = useState<number>(INITIAL_VISIBLE_COUNT);
  const [, startTransition] = useTransition();

  // "Crea tu combinación" state
  const [comboText, setComboText] = useState<string>('');

  // Feedback states
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');

  // Favorites & Recents in LocalStorage
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentSymbols, setRecentSymbols] = useState<string[]>([]);

  const comboInputRef = useRef<HTMLInputElement>(null);

  // Load favorites & recents on mount
  useEffect(() => {
    try {
      const favs = localStorage.getItem('master_bonitos_favs_v1');
      if (favs) setFavorites(JSON.parse(favs));
      const rec = localStorage.getItem('master_bonitos_recents_v1');
      if (rec) setRecentSymbols(JSON.parse(rec));
    } catch {
      // Storage unavailable
    }
  }, []);

  const saveFavorites = (list: string[]) => {
    setFavorites(list);
    try {
      localStorage.setItem('master_bonitos_favs_v1', JSON.stringify(list));
    } catch {
      // Ignore
    }
  };

  const registerRecent = (symbolChar: string) => {
    const updated = [symbolChar, ...recentSymbols.filter(c => c !== symbolChar)].slice(0, 30);
    setRecentSymbols(updated);
    try {
      localStorage.setItem('master_bonitos_recents_v1', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 1800);
  };

  const toggleFavorite = (e: React.MouseEvent, symbolChar: string) => {
    e.stopPropagation();
    if (favorites.includes(symbolChar)) {
      saveFavorites(favorites.filter(c => c !== symbolChar));
      setLiveAnnouncement(`Símbolo ${symbolChar} eliminado de favoritos`);
      showToast(`Eliminado de favoritos: ${symbolChar}`);
    } else {
      saveFavorites([...favorites, symbolChar]);
      setLiveAnnouncement(`Símbolo ${symbolChar} guardado en favoritos`);
      showToast(`Guardado en favoritos: ${symbolChar}`);
    }
  };

  // 1-Tap Copy Single Symbol
  const handleCopySymbol = async (symbolChar: string, symbolName: string) => {
    try {
      const ok = await copyText(symbolChar);
      if (!ok) {
        showToast(`Error al copiar: ${symbolChar}`);
        return;
      }
      setCopiedItem(symbolChar);
      registerRecent(symbolChar);
      const msg = `¡Copiado ${symbolChar} al portapapeles!`;
      setLiveAnnouncement(`Símbolo ${symbolName} copiado al portapapeles`);
      showToast(msg);
      setTimeout(() => setCopiedItem(null), 1200);
    } catch {
      showToast(`Error al copiar: ${symbolChar}`);
    }
  };

  // Add symbol to "Crea tu combinación" without copying
  const handleAddToCombination = (e: React.MouseEvent, symbolChar: string, symbolName: string) => {
    e.stopPropagation();
    setComboText(prev => (prev ? `${prev} ${symbolChar}` : symbolChar));
    setLiveAnnouncement(`Símbolo ${symbolName} añadido a la combinación`);
    showToast(`Añadido a combinación: ${symbolChar}`);
    if (comboInputRef.current) {
      comboInputRef.current.focus();
    }
  };

  // Copy entire combination
  const handleCopyCombination = async () => {
    if (!comboText.trim()) return;
    try {
      const ok = await copyText(comboText);
      if (!ok) {
        showToast('Error al copiar combinación');
        return;
      }
      setCopiedItem('COMBINATION');
      setLiveAnnouncement('Combinación completa copiada al portapapeles');
      showToast('¡Combinación copiada al portapapeles!');
      setTimeout(() => setCopiedItem(null), 1200);
    } catch {
      showToast('Error al copiar combinación');
    }
  };

  // Clear combination
  const handleClearCombination = () => {
    setComboText('');
    if (comboInputRef.current) {
      comboInputRef.current.focus();
    }
  };

  // Reset pagination on category or search query change
  useEffect(() => {
    setVisibleLimit(INITIAL_VISIBLE_COUNT);
  }, [activeCategory, searchQuery, viewMode]);

  // Compute displayed symbols
  const filteredSymbols = useMemo(() => {
    return searchBonitosSymbols(searchQuery, activeCategory);
  }, [searchQuery, activeCategory]);

  const displayedSymbols: BonitoSymbol[] = useMemo(() => {
    if (viewMode === 'favoritos') {
      return BONITO_SYMBOLS.filter(s => favorites.includes(s.symbol));
    }
    if (viewMode === 'recientes') {
      return recentSymbols.map(sym => {
        const found = BONITO_SYMBOLS.find(s => s.symbol === sym);
        if (found) return found;
        return {
          id: `rec-${sym}`,
          symbol: sym,
          name: 'Símbolo reciente',
          categories: ['todos' as BonitoCategory],
          tags: [],
          aliases: [],
        };
      });
    }
    return filteredSymbols;
  }, [viewMode, favorites, recentSymbols, filteredSymbols]);

  const visibleSymbols = useMemo(() => {
    return displayedSymbols.slice(0, visibleLimit);
  }, [displayedSymbols, visibleLimit]);

  // Compute ready combos
  const displayedCombos = useMemo(() => {
    if (comboFilter === 'todos') return BONITO_READY_COMBOS;
    return BONITO_READY_COMBOS.filter(c => c.useCase === comboFilter);
  }, [comboFilter]);

  return (
    <div className="font-generator mb-10" style={{ minWidth: 0, maxWidth: '100%', overflow: 'hidden' }} aria-label="Herramienta de Símbolos Bonitos">
      {/* Invisible screen-reader live region */}
      <div aria-live="polite" className="sr-only">
        {liveAnnouncement}
      </div>

      {/* Floating Native Toast Notification */}
      <div className={`toast${toastMessage ? ' is-visible' : ''}`} role="status" aria-live="polite">
        {toastMessage}
      </div>

      {/* ═══ COMBINATION BUILDER ("Crea tu combinación") ═══ */}
      <section className="tool-panel" style={{ minWidth: 0, maxWidth: '100%' }} aria-labelledby="combo-builder-label">
        <label id="combo-builder-label" htmlFor="bonito-combo-input" className="font-input__label">
          <span className="font-input__label-icon">🎨</span>
          <span>Crea tu combinación (añade símbolos con <strong>+</strong> o escribe tu propio texto):</span>
        </label>

        <div style={{ position: 'relative', width: '100%', marginBottom: 'var(--space-3)' }}>
          <input
            id="bonito-combo-input"
            ref={comboInputRef}
            type="text"
            value={comboText}
            onChange={e => setComboText(e.target.value)}
            placeholder="Ejemplo: ♡ ✦ Tu texto ☾"
            style={{
              width: '100%',
              minHeight: '52px',
              padding: '0 2.5rem 0 1rem',
              fontSize: '1.15rem',
              borderRadius: 'var(--radius-md)',
              border: '1.5px solid var(--color-border)',
              background: 'var(--color-surface-2)',
              color: 'var(--color-ink)',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          {comboText && (
            <button
              type="button"
              onClick={handleClearCombination}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--color-muted)',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                padding: '4px',
              }}
              title="Borrar combinación"
              aria-label="Borrar combinación"
            >
              ✕
            </button>
          )}
        </div>

        {/* Input Meta & Actions */}
        <div className="font-input__meta">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span id="combo-count" className="font-input__count" style={{ padding: '0.35rem 0.65rem', borderRadius: 'var(--radius-sm)' }}>
              {comboText.length} caracteres
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
              💡 Pulsa <strong>Copiar</strong> para llevarte un símbolo directo, o <strong>+</strong> para agregarlo aquí.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {comboText && (
              <button
                type="button"
                className="btn btn--ghost btn--sm"
                onClick={handleClearCombination}
                title="Limpiar combinación"
              >
                Limpiar
              </button>
            )}

            <button
              type="button"
              onClick={handleCopyCombination}
              disabled={!comboText.trim()}
              className={`btn ${comboText.trim() ? 'btn--gradient' : 'btn--ghost'} btn--sm`}
              style={{ fontWeight: 700, padding: '0.5rem 1.1rem' }}
              aria-label="Copiar combinación personalizada"
            >
              <span>{copiedItem === 'COMBINATION' ? '✓ ¡Copiado!' : '📋 Copiar combinación'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ═══ TOOLBAR: SEARCH & CATEGORY FILTERS ═══ */}
      <div className="toolbar tool-panel" style={{ minWidth: 0, maxWidth: '100%', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: '100%' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            {/* Semantic Search Input */}
            <div className="font-search" style={{ flex: '1 1 260px', minWidth: '220px' }}>
              <span className="font-search__icon" aria-hidden="true">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={e => {
                  const val = e.target.value;
                  startTransition(() => {
                    setSearchQuery(val);
                    if (viewMode !== 'simbolos') setViewMode('simbolos');
                  });
                }}
                placeholder="Busca corazón, estrella, flor, flecha, música..."
                className="font-search__input"
                aria-label="Buscar símbolos bonitos"
              />
            </div>

            {/* View Mode Switcher */}
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }} role="tablist" aria-label="Vistas de símbolos bonitos">
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewMode === 'simbolos'}
                onClick={() => { setViewMode('simbolos'); setSearchQuery(''); }}
              >
                ✦ Símbolos ({BONITO_SYMBOLS.length})
              </button>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewMode === 'combos'}
                onClick={() => setViewMode('combos')}
              >
                ✨ Combinaciones bonitas ({BONITO_READY_COMBOS.length})
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
            <div className="font-filters" role="toolbar" aria-label="Categorías de símbolos bonitos" style={{ width: '100%', minWidth: 0 }}>
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
                    }}
                  >
                    <span>{cat.icon}</span> {cat.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Results meta bar */}
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
                Ver todos los símbolos
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ═══ CONTENT AREA ═══ */}
      {viewMode === 'combos' ? (
        /* READY COMBOS VIEW */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Sub-filters for ready combos */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {[
              { id: 'todos', label: 'Todos los combos' },
              { id: 'nombres', label: 'Para nombres' },
              { id: 'bios', label: 'Para bios' },
              { id: 'separadores', label: 'Para separar texto' },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                className="font-filters__chip"
                aria-pressed={comboFilter === tab.id}
                onClick={() => setComboFilter(tab.id as ComboFilter)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
            {displayedCombos.map(item => {
              const isCopied = copiedItem === item.combo;
              return (
                <div
                  key={item.id}
                  className={`font-card${isCopied ? ' is-copied' : ''}`}
                  style={{
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="font-card__name">{item.name}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>{item.useCase}</span>
                  </div>

                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--color-ink)',
                      textAlign: 'center',
                      margin: '0.5rem 0',
                      userSelect: 'all',
                    }}
                  >
                    {item.combo}
                  </p>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={() => handleCopySymbol(item.combo, item.name)}
                      className={`btn ${isCopied ? 'btn--success' : 'btn--gradient'}`}
                      style={{ flex: 1, minHeight: '34px', fontSize: '0.8rem' }}
                      aria-label={`Copiar combinación ${item.name}`}
                    >
                      {isCopied ? '✓ ¡Copiado!' : 'Copiar'}
                    </button>
                    <button
                      type="button"
                      onClick={e => handleAddToCombination(e, item.combo, item.name)}
                      className="btn btn--ghost"
                      style={{ minHeight: '34px', padding: '0 0.75rem', fontSize: '0.9rem' }}
                      title="Añadir a la combinación"
                      aria-label={`Añadir combinación ${item.name} a la combinación`}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* SYMBOLS GRID VIEW */
        <div>
          {displayedSymbols.length === 0 ? (
            <div className="tool-panel" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>🔍</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-ink)', margin: '0 0 0.4rem' }}>
                {viewMode === 'favoritos'
                  ? 'Aún no tienes favoritos'
                  : `No encontramos símbolos para "${searchQuery}"`}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', margin: '0 0 1rem' }}>
                {viewMode === 'favoritos'
                  ? 'Toca la estrella ★ en cualquier tarjeta para guardarlo aquí.'
                  : 'Prueba otra palabra o explora las categorías de símbolos bonitos.'}
              </p>
              <button
                type="button"
                className="btn btn--gradient btn--sm"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('todos');
                  setViewMode('simbolos');
                }}
              >
                Ver todos los símbolos
              </button>
            </div>
          ) : (
            <>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
                  gap: '0.65rem',
                }}
              >
                {visibleSymbols.map(item => {
                  const isCopied = copiedItem === item.symbol;
                  const isFav = favorites.includes(item.symbol);

                  return (
                    <div
                      key={item.id}
                      className={`font-card${isCopied ? ' is-copied' : ''}`}
                      style={{
                        padding: '0.5rem 0.35rem 0.4rem',
                        minHeight: '94px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        position: 'relative',
                        userSelect: 'none',
                      }}
                    >
                      {/* Favorite Button */}
                      <button
                        type="button"
                        onClick={e => toggleFavorite(e, item.symbol)}
                        style={{
                          position: 'absolute',
                          top: '3px',
                          right: '4px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '2px',
                          fontSize: '0.75rem',
                          color: isFav ? 'var(--color-yellow)' : 'var(--color-ghost)',
                          lineHeight: 1,
                        }}
                        title={isFav ? `Quitar ${item.name} de favoritos` : `Guardar ${item.name} en favoritos`}
                        aria-label={isFav ? `Quitar ${item.name} de favoritos` : `Guardar ${item.name} en favoritos`}
                      >
                        ★
                      </button>

                      {/* Large Symbol Display */}
                      <div
                        onClick={() => handleCopySymbol(item.symbol, item.name)}
                        style={{
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          cursor: 'pointer',
                        }}
                        title={`Toca para copiar ${item.symbol}`}
                      >
                        <span
                          style={{
                            fontSize: '1.65rem',
                            lineHeight: 1,
                            color: 'var(--color-ink)',
                          }}
                        >
                          {item.symbol}
                        </span>
                      </div>

                      {/* Symbol Label */}
                      <span
                        style={{
                          fontSize: '0.625rem',
                          color: 'var(--color-muted)',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          maxWidth: '100%',
                          textAlign: 'center',
                          marginBottom: '4px',
                        }}
                      >
                        {item.name}
                      </span>

                      {/* 2-Action Split: [Copiar] and [+] */}
                      <div style={{ display: 'flex', gap: '3px', width: '100%' }}>
                        <button
                          type="button"
                          onClick={() => handleCopySymbol(item.symbol, item.name)}
                          className={`btn ${isCopied ? 'btn--success' : 'btn--ghost'}`}
                          style={{
                            flex: 1,
                            minHeight: '26px',
                            padding: '0 2px',
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            borderRadius: '4px',
                          }}
                          aria-label={`Copiar símbolo ${item.name}`}
                          title={`Copiar símbolo ${item.name}`}
                        >
                          {isCopied ? '✓' : 'Copiar'}
                        </button>
                        <button
                          type="button"
                          onClick={e => handleAddToCombination(e, item.symbol, item.name)}
                          className="btn btn--ghost"
                          style={{
                            width: '26px',
                            minHeight: '26px',
                            padding: 0,
                            fontSize: '0.85rem',
                            fontWeight: 800,
                            borderRadius: '4px',
                            color: 'var(--color-brand)',
                          }}
                          aria-label={`Añadir símbolo ${item.name} a la combinación`}
                          title={`Añadir ${item.symbol} a la combinación`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Progressive Loading ("Mostrar más") */}
              {visibleLimit < displayedSymbols.length && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                  <button
                    type="button"
                    className="btn btn--gradient"
                    onClick={() => setVisibleLimit(prev => prev + LOAD_MORE_STEP)}
                    aria-label="Mostrar más símbolos bonitos"
                  >
                    Mostrar más símbolos ({displayedSymbols.length - visibleLimit} restantes)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};
