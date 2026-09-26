'use client';

import React, { useState, useEffect, useMemo, useRef, useTransition } from 'react';
import {
  EspecialSymbol,
  EspecialCategory,
  ESPECIAL_CATEGORIES,
  ESPECIAL_SYMBOLS,
  CONFUSABLE_PAIRS,
  searchEspecialesSymbols,
} from '@/lib/unicode/especialesSymbolsData';
import { copyText } from '@/lib/clipboard';

type ViewMode = 'simbolos' | 'favoritos' | 'recientes';

const INITIAL_VISIBLE_COUNT = 48;
const LOAD_MORE_STEP = 36;

export const EspecialesSymbolsTool: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('simbolos');
  const [activeCategory, setActiveCategory] = useState<EspecialCategory>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleLimit, setVisibleLimit] = useState<number>(INITIAL_VISIBLE_COUNT);
  const [, startTransition] = useTransition();

  // Multi-select / combination tray state ("Crea tu combinación")
  const [comboText, setComboText] = useState<string>('');
  const comboInputRef = useRef<HTMLInputElement>(null);

  // Inspector modal state
  const [inspectedSymbol, setInspectedSymbol] = useState<EspecialSymbol | null>(null);

  // Favorites & Recents in LocalStorage
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentSymbols, setRecentSymbols] = useState<string[]>([]);

  // Feedback states
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');

  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Load localStorage on mount
  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem('especiales_favorites');
      if (savedFavs) setFavorites(JSON.parse(savedFavs));
      const savedRecents = localStorage.getItem('especiales_recent_symbols');
      if (savedRecents) setRecentSymbols(JSON.parse(savedRecents));
    } catch {
      // LocalStorage access may fail in private mode
    }
  }, []);

  const showToast = (msg: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToastMessage(msg);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  const registerRecent = (symbolChar: string) => {
    setRecentSymbols(prev => {
      const next = [symbolChar, ...prev.filter(s => s !== symbolChar)].slice(0, 30);
      try {
        localStorage.setItem('especiales_recent_symbols', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const toggleFavorite = (e: React.MouseEvent, symbolChar: string) => {
    e.stopPropagation();
    const isFav = favorites.includes(symbolChar);
    const next = isFav ? favorites.filter(s => s !== symbolChar) : [symbolChar, ...favorites];
    setFavorites(next);
    try {
      localStorage.setItem('especiales_favorites', JSON.stringify(next));
    } catch {
      // ignore
    }
    const msg = isFav
      ? `Eliminado de favoritos: ${symbolChar}`
      : `Guardado en favoritos: ${symbolChar}`;
    setLiveAnnouncement(msg);
    showToast(msg);
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
    setLiveAnnouncement(`Símbolo ${symbolName} añadido a tu combinación`);
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

  // Reset pagination on category, search, or viewMode change
  useEffect(() => {
    setVisibleLimit(INITIAL_VISIBLE_COUNT);
  }, [activeCategory, searchQuery, viewMode]);

  // Filtered symbols based on search and category
  const filteredSymbols = useMemo(() => {
    return searchEspecialesSymbols(searchQuery, activeCategory);
  }, [searchQuery, activeCategory]);

  // Displayed symbols based on active tab viewMode
  const displayedSymbols: EspecialSymbol[] = useMemo(() => {
    if (viewMode === 'favoritos') {
      return ESPECIAL_SYMBOLS.filter(s => favorites.includes(s.symbol));
    }
    if (viewMode === 'recientes') {
      return recentSymbols.map(sym => {
        const found = ESPECIAL_SYMBOLS.find(s => s.symbol === sym);
        if (found) return found;
        return {
          id: `rec-${sym}`,
          symbol: sym,
          nameEs: 'Símbolo reciente',
          nameUnicode: 'RECENT SYMBOL',
          codePoint: 'U+????',
          categories: ['todos' as EspecialCategory],
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

  return (
    <div
      className="font-generator mb-10"
      style={{ minWidth: 0, maxWidth: '100%', overflow: 'hidden' }}
      aria-label="Herramienta de Símbolos Especiales"
    >
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
        <label id="combo-builder-label" htmlFor="especial-combo-input" className="font-input__label">
          <span className="font-input__label-icon">⚡</span>
          <span>Crea tu combinación (añade símbolos con <strong>+</strong> o escribe tu propio texto):</span>
        </label>

        <div style={{ position: 'relative', width: '100%', marginBottom: 'var(--space-3)' }}>
          <input
            id="especial-combo-input"
            ref={comboInputRef}
            type="text"
            value={comboText}
            onChange={e => setComboText(e.target.value)}
            placeholder="Ejemplo: © 2026 LetrasBonitas ® | x ≠ y | E = mc²"
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
                placeholder="Busca infinito, euro, copyright, flecha, raíz, U+2260..."
                className="font-search__input"
                aria-label="Buscar símbolos especiales"
              />
            </div>

            {/* View Mode Switcher */}
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }} role="tablist" aria-label="Vistas de símbolos especiales">
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={viewMode === 'simbolos'}
                onClick={() => { setViewMode('simbolos'); setSearchQuery(''); }}
              >
                ✦ Símbolos ({ESPECIAL_SYMBOLS.length})
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
            <div className="font-filters" role="toolbar" aria-label="Categorías de símbolos especiales" style={{ width: '100%', minWidth: 0 }}>
              {ESPECIAL_CATEGORIES.map(cat => {
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

      {/* ═══ SYMBOLS GRID VIEW ═══ */}
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
                : 'Prueba otra palabra (como infinito, raíz, euro o copyright) o explora las categorías.'}
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
                      minHeight: '98px',
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
                      title={isFav ? `Quitar ${item.nameEs} de favoritos` : `Guardar ${item.nameEs} en favoritos`}
                      aria-label={isFav ? `Quitar ${item.nameEs} de favoritos` : `Guardar ${item.nameEs} en favoritos`}
                    >
                      ★
                    </button>

                    {/* Inspector Trigger (CodePoint) */}
                    <button
                      type="button"
                      onClick={() => setInspectedSymbol(item)}
                      style={{
                        position: 'absolute',
                        top: '4px',
                        left: '4px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '1px 3px',
                        fontSize: '0.55rem',
                        fontFamily: 'monospace',
                        color: 'var(--color-muted)',
                        borderRadius: '3px',
                        lineHeight: 1,
                      }}
                      title={`Ver detalles técnicos (${item.codePoint})`}
                      aria-label={`Ver detalles técnicos de ${item.nameEs}`}
                    >
                      {item.codePoint}
                    </button>

                    {/* Large Symbol Display */}
                    <div
                      onClick={() => handleCopySymbol(item.symbol, item.nameEs)}
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        cursor: 'pointer',
                        marginTop: '10px',
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
                      title={item.nameEs}
                    >
                      {item.nameEs}
                    </span>

                    {/* 2-Action Split: [Copiar] and [+] */}
                    <div style={{ display: 'flex', gap: '3px', width: '100%' }}>
                      <button
                        type="button"
                        onClick={() => handleCopySymbol(item.symbol, item.nameEs)}
                        className={`btn ${isCopied ? 'btn--success' : 'btn--ghost'}`}
                        style={{
                          flex: 1,
                          minHeight: '26px',
                          padding: '0 2px',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          borderRadius: '4px',
                        }}
                        aria-label={`Copiar símbolo ${item.nameEs}`}
                        title={`Copiar símbolo ${item.nameEs}`}
                      >
                        {isCopied ? '✓' : 'Copiar'}
                      </button>
                      <button
                        type="button"
                        onClick={e => handleAddToCombination(e, item.symbol, item.nameEs)}
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
                        aria-label={`Añadir símbolo ${item.nameEs} a la combinación`}
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
                  aria-label="Mostrar más símbolos especiales"
                >
                  Mostrar más símbolos ({displayedSymbols.length - visibleLimit} restantes)
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* ═══ CHARACTER INSPECTOR MODAL ═══ */}
      {inspectedSymbol && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="inspector-modal-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={() => setInspectedSymbol(null)}
        >
          <div
            className="tool-panel"
            style={{
              width: '100%',
              maxWidth: '460px',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-lg)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-surface)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-brand)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Inspector de Caracteres Unicode
                </span>
                <h3 id="inspector-modal-title" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-ink)', margin: '0.2rem 0 0' }}>
                  {inspectedSymbol.nameEs}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInspectedSymbol(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-muted)',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  padding: '4px',
                }}
                aria-label="Cerrar inspector"
              >
                ✕
              </button>
            </div>

            {/* Character detail content */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-2)', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  color: 'var(--color-ink)',
                  border: '1px solid var(--color-border)',
                  flexShrink: 0,
                }}
              >
                {inspectedSymbol.symbol}
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--color-ink)', display: 'flex', flexDirection: 'column', gap: '0.3rem', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--color-muted)' }}>Punto de código:</span>
                  <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--color-brand)' }}>{inspectedSymbol.codePoint}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--color-muted)' }}>Nombre Unicode:</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 600 }}>{inspectedSymbol.nameUnicode}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--color-muted)' }}>Categoría:</span>
                  <span style={{ fontWeight: 700, textTransform: 'capitalize' }}>{inspectedSymbol.categories[0]}</span>
                </div>
              </div>
            </div>

            {/* Confusable warning / note */}
            {inspectedSymbol.confusableWith && (
              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(245, 158, 11, 0.08)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  fontSize: '0.75rem',
                  color: 'var(--color-ink)',
                  marginBottom: '1rem',
                  lineHeight: 1.4,
                }}
              >
                <strong style={{ color: '#b45309', display: 'block', marginBottom: '2px' }}>
                  ⚠️ No confundir con «{inspectedSymbol.confusableWith.symbol}» ({inspectedSymbol.confusableWith.name})
                </strong>
                <span>{inspectedSymbol.confusableWith.distinction}</span>
              </div>
            )}

            {/* Modal Actions */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={() => {
                  handleCopySymbol(inspectedSymbol.symbol, inspectedSymbol.nameEs);
                  setInspectedSymbol(null);
                }}
                className="btn btn--gradient"
                style={{ flex: 1, minHeight: '38px', fontSize: '0.85rem' }}
              >
                Copiar símbolo ({inspectedSymbol.symbol})
              </button>
              <button
                type="button"
                onClick={e => {
                  handleAddToCombination(e, inspectedSymbol.symbol, inspectedSymbol.nameEs);
                  setInspectedSymbol(null);
                }}
                className="btn btn--ghost"
                style={{ minHeight: '38px', fontSize: '0.85rem' }}
              >
                + A combinación
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
