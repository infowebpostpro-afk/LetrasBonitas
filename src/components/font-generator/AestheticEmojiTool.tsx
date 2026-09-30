'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  AestheticVibeId,
  AESTHETIC_VIBES,
  AESTHETIC_COLOR_PALETTES,
  generateAestheticCombo,
  searchAestheticContent,
  ALL_READY_COMBOS,
  ReadyComboItem,
} from '@/lib/unicode/aestheticEmojiData';
import { copyText } from '@/lib/clipboard';

type ToolTab = 'combinaciones' | 'emojis' | 'simbolos';
type LengthOption = 2 | 3 | 4 | 5;
type StyleType = 'solo-emojis' | 'emojis-simbolos';

export const AestheticEmojiTool: React.FC = () => {
  // Navigation & Filtering
  const [activeTab, setActiveTab] = useState<ToolTab>('combinaciones');
  const [selectedVibe, setSelectedVibe] = useState<AestheticVibeId | 'todos'>('coquette');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Generator State
  const [comboLength, setComboLength] = useState<LengthOption>(3);
  const [styleType, setStyleType] = useState<StyleType>('solo-emojis');
  const [generatedCombo, setGeneratedCombo] = useState<string>('🎀 🩰 🤍');

  // Interactive Custom Builder
  const [isCustomizing, setIsCustomizing] = useState<boolean>(false);
  const [builderItems, setBuilderItems] = useState<string[]>(['🎀', '🩰', '🤍']);
  const [showPaletteDrawer, setShowPaletteDrawer] = useState<'emojis' | 'simbolos' | null>(null);

  // Feedback & Persistence
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentCombos, setRecentCombos] = useState<string[]>([]);

  // Load favorites & recents on mount
  useEffect(() => {
    try {
      const favs = localStorage.getItem('aesthetic_favs_v1');
      if (favs) setFavorites(JSON.parse(favs));
      const rec = localStorage.getItem('aesthetic_recents_v1');
      if (rec) setRecentCombos(JSON.parse(rec));
    } catch {
      // Storage unavailable
    }
  }, []);

  const saveFavorites = (list: string[]) => {
    setFavorites(list);
    try {
      localStorage.setItem('aesthetic_favs_v1', JSON.stringify(list));
    } catch {
      // Ignore
    }
  };

  const registerRecent = (combo: string) => {
    const updated = [combo, ...recentCombos.filter(c => c !== combo)].slice(0, 16);
    setRecentCombos(updated);
    try {
      localStorage.setItem('aesthetic_recents_v1', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 1800);
  };

  const announce = (msg: string) => {
    setLiveAnnouncement(msg);
  };

  // Copy helper
  const handleCopy = async (text: string, label: string = 'Combinación') => {
    if (!text.trim()) return;
    try {
      const ok = await copyText(text);
      if (ok) {
        setCopiedItem(text);
        registerRecent(text);
        announce(`${label} copiada al portapapeles`);
        showToast('✓ ¡Copiado!');
        setTimeout(() => setCopiedItem(null), 1400);
      } else {
        showToast('Error al copiar');
      }
    } catch {
      showToast('Error al copiar');
    }
  };

  // Generate new combination
  const handleGenerate = () => {
    const newCombo = generateAestheticCombo(selectedVibe, comboLength, styleType);
    setGeneratedCombo(newCombo);
    if (isCustomizing) {
      setBuilderItems(newCombo.split(' '));
    }
    announce('Nueva combinación generada');
  };

  // Toggle customization mode
  const handleToggleCustomize = () => {
    if (!isCustomizing) {
      setBuilderItems(generatedCombo.split(' ').filter(Boolean));
      setIsCustomizing(true);
      announce('Modo personalización activado');
    } else {
      setIsCustomizing(false);
    }
  };

  // Builder actions
  const handleRemoveBuilderItem = (index: number) => {
    const updated = builderItems.filter((_, idx) => idx !== index);
    setBuilderItems(updated);
    announce('Elemento eliminado de la combinación');
  };

  const handleMoveBuilderItem = (index: number, direction: 'left' | 'right') => {
    if (direction === 'left' && index === 0) return;
    if (direction === 'right' && index === builderItems.length - 1) return;
    const targetIdx = direction === 'left' ? index - 1 : index + 1;
    const updated = [...builderItems];
    const temp = updated[index];
    updated[index] = updated[targetIdx];
    updated[targetIdx] = temp;
    setBuilderItems(updated);
  };

  const handleAddBuilderItem = (char: string) => {
    if (builderItems.length >= 8) {
      showToast('Máximo 8 elementos en tu combinación');
      return;
    }
    setBuilderItems(prev => [...prev, char]);
    announce(`${char} añadido a la combinación`);
    showToast(`Añadido: ${char}`);
  };

  const currentCustomComboString = useMemo(() => {
    return builderItems.join(' ');
  }, [builderItems]);

  // Current active vibe object
  const currentVibeData = useMemo(() => {
    if (selectedVibe === 'todos') return null;
    return AESTHETIC_VIBES.find(v => v.id === selectedVibe) || null;
  }, [selectedVibe]);

  // Search results
  const searchResults = useMemo(() => {
    return searchAestheticContent(searchQuery);
  }, [searchQuery]);

  // Displayed ready-made combinations
  const displayedCombos = useMemo(() => {
    if (searchQuery) return searchResults.combos;
    if (selectedVibe === 'todos') return ALL_READY_COMBOS;
    return ALL_READY_COMBOS.filter(c => c.vibe === selectedVibe);
  }, [searchQuery, searchResults, selectedVibe]);

  // Curated individual emojis
  const displayedEmojis = useMemo(() => {
    if (searchQuery) return searchResults.emojis;
    if (selectedVibe === 'todos') {
      return AESTHETIC_VIBES.flatMap(v => v.emojis.map(char => ({ char, vibeName: v.name })));
    }
    const vibe = AESTHETIC_VIBES.find(v => v.id === selectedVibe);
    return vibe ? vibe.emojis.map(char => ({ char, vibeName: vibe.name })) : [];
  }, [searchQuery, searchResults, selectedVibe]);

  // Curated symbols
  const displayedSymbols = useMemo(() => {
    if (searchQuery) return searchResults.symbols;
    if (selectedVibe === 'todos') {
      return AESTHETIC_VIBES.flatMap(v => v.symbols.map(char => ({ char, vibeName: v.name })));
    }
    const vibe = AESTHETIC_VIBES.find(v => v.id === selectedVibe);
    return vibe ? vibe.symbols.map(char => ({ char, vibeName: vibe.name })) : [];
  }, [searchQuery, searchResults, selectedVibe]);

  return (
    <div className="font-generator mb-10" style={{ minWidth: 0, maxWidth: '100%' }} aria-label="Generador de Emojis Aesthetic">
      {/* Screen-reader Live Region */}
      <div aria-live="polite" className="sr-only">
        {liveAnnouncement}
      </div>

      {/* Floating Toast Notification */}
      <div className={`toast${toastMessage ? ' is-visible' : ''}`} role="status" aria-live="polite">
        {toastMessage}
      </div>

      {/* ═══ PRIMARY AESTHETIC GENERATOR CARD ═══ */}
      <section className="tool-panel mb-6" style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)' }} aria-labelledby="generator-title">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-brand)' }}>
              ✨ Creador de Estilo
            </span>
            <h2 id="generator-title" style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0.2rem 0 0 0', color: 'var(--color-ink)' }}>
              Generador de Emojis Aesthetic
            </h2>
          </div>

          {/* Quick presets (Paletas de color) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>Color:</span>
            {AESTHETIC_COLOR_PALETTES.map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  setSearchQuery(p.id);
                  setActiveTab('combinaciones');
                  showToast(`Paleta ${p.name}`);
                }}
                className="font-filters__chip"
                style={{
                  padding: '0.25rem 0.55rem',
                  fontSize: '0.75rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
                title={`Ver combinaciones en tono ${p.name}`}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: p.colorHex }} />
                <span>{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 1: Vibe Selection Chips */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.5rem' }}>
            1. Elige tu estética:
          </label>
          <div className="font-filters" role="toolbar" aria-label="Estéticas disponibles">
            <button
              type="button"
              className="font-filters__chip"
              aria-pressed={selectedVibe === 'todos' && !searchQuery}
              onClick={() => {
                setSelectedVibe('todos');
                setSearchQuery('');
              }}
            >
              <span>🌐</span> Todas
            </button>
            {AESTHETIC_VIBES.map(vibe => {
              const isActive = selectedVibe === vibe.id && !searchQuery;
              return (
                <button
                  key={vibe.id}
                  type="button"
                  className="font-filters__chip"
                  aria-pressed={isActive}
                  onClick={() => {
                    setSelectedVibe(vibe.id);
                    setSearchQuery('');
                  }}
                >
                  <span>{vibe.icon}</span> {vibe.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Generator Controls (Length & Type) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', padding: '0.75rem 1rem', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
          {/* Length Control */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ink)' }}>
              Tamaño:
            </span>
            {([2, 3, 4, 5] as LengthOption[]).map(len => (
              <button
                key={len}
                type="button"
                className={`font-filters__chip${comboLength === len ? ' is-active' : ''}`}
                aria-pressed={comboLength === len}
                onClick={() => setComboLength(len)}
                style={{ padding: '0.2rem 0.6rem', fontSize: '0.8rem' }}
              >
                {len}
              </button>
            ))}
          </div>

          {/* Style Mode Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ink)' }}>
              Tipo:
            </span>
            <button
              type="button"
              className={`font-filters__chip${styleType === 'solo-emojis' ? ' is-active' : ''}`}
              aria-pressed={styleType === 'solo-emojis'}
              onClick={() => setStyleType('solo-emojis')}
              style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}
            >
              Solo emojis
            </button>
            <button
              type="button"
              className={`font-filters__chip${styleType === 'emojis-simbolos' ? ' is-active' : ''}`}
              aria-pressed={styleType === 'emojis-simbolos'}
              onClick={() => setStyleType('emojis-simbolos')}
              style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}
            >
              Emojis + símbolos
            </button>
          </div>
        </div>

        {/* Generated Output Showcase */}
        <div style={{
          padding: '1.5rem',
          textAlign: 'center',
          background: 'var(--color-bg)',
          border: '2px dashed var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '1rem',
          minHeight: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
        }}>
          <span style={{ fontSize: '2.5rem', lineHeight: 1.2, letterSpacing: '0.2em', wordBreak: 'break-all' }}>
            {isCustomizing ? currentCustomComboString : generatedCombo}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
            Estética: {currentVibeData ? currentVibeData.name : 'Personalizada'}
          </span>
        </div>

        {/* Main Generator Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => handleCopy(isCustomizing ? currentCustomComboString : generatedCombo)}
            className={`btn ${copiedItem === (isCustomizing ? currentCustomComboString : generatedCombo) ? 'btn--success' : 'btn--gradient'}`}
            style={{ fontWeight: 700, padding: '0.6rem 1.4rem' }}
          >
            <span>{copiedItem === (isCustomizing ? currentCustomComboString : generatedCombo) ? '✓ ¡Copiado!' : '✨ Copiar combinación'}</span>
          </button>

          <button
            type="button"
            onClick={handleGenerate}
            className="btn btn--outline"
            style={{ fontWeight: 600, padding: '0.6rem 1.1rem' }}
          >
            <span>🎲 Otra combinación</span>
          </button>

          <button
            type="button"
            onClick={handleToggleCustomize}
            className={`btn ${isCustomizing ? 'btn--primary' : 'btn--ghost'}`}
            style={{ fontWeight: 600, padding: '0.6rem 1rem' }}
            aria-pressed={isCustomizing}
          >
            <span>{isCustomizing ? '✓ Cerrar edición' : '✏️ Personalizar'}</span>
          </button>
        </div>

        {/* ═══ COMBO BUILDER TRAY (When Personalizar is open) ═══ */}
        {isCustomizing && (
          <div style={{
            marginTop: '1.25rem',
            padding: '1.25rem',
            background: 'var(--color-bg-alt)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0, color: 'var(--color-ink)' }}>
                Editor de combinación ({builderItems.length}/8)
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
                Toca [×] para quitar o [←/→] para mover
              </span>
            </div>

            {/* Individual Item Chips */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1rem', minHeight: '48px' }}>
              {builderItems.length === 0 ? (
                <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)', fontStyle: 'italic' }}>
                  Añade emojis o símbolos para crear tu combinación.
                </span>
              ) : (
                builderItems.map((item, idx) => (
                  <div
                    key={`${item}-${idx}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      padding: '0.4rem 0.6rem',
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{item}</span>

                    {/* Move Left */}
                    {idx > 0 && (
                      <button
                        type="button"
                        onClick={() => handleMoveBuilderItem(idx, 'left')}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.65rem', color: 'var(--color-muted)', padding: '2px' }}
                        aria-label={`Mover ${item} a la izquierda`}
                      >
                        ←
                      </button>
                    )}

                    {/* Move Right */}
                    {idx < builderItems.length - 1 && (
                      <button
                        type="button"
                        onClick={() => handleMoveBuilderItem(idx, 'right')}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.65rem', color: 'var(--color-muted)', padding: '2px' }}
                        aria-label={`Mover ${item} a la derecha`}
                      >
                        →
                      </button>
                    )}

                    {/* Remove */}
                    <button
                      type="button"
                      onClick={() => handleRemoveBuilderItem(idx)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.75rem', color: 'var(--color-red, #ef4444)', padding: '2px', fontWeight: 'bold' }}
                      aria-label={`Eliminar ${item} de la combinación`}
                      title="Quitar"
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Quick Add Buttons & Quick Palette */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                type="button"
                onClick={() => setShowPaletteDrawer(showPaletteDrawer === 'emojis' ? null : 'emojis')}
                className="btn btn--outline btn--sm"
                aria-expanded={showPaletteDrawer === 'emojis'}
              >
                + Añadir emoji
              </button>
              <button
                type="button"
                onClick={() => setShowPaletteDrawer(showPaletteDrawer === 'simbolos' ? null : 'simbolos')}
                className="btn btn--outline btn--sm"
                aria-expanded={showPaletteDrawer === 'simbolos'}
              >
                + Añadir símbolo
              </button>
              <button
                type="button"
                onClick={() => setBuilderItems([])}
                className="btn btn--ghost btn--sm"
                style={{ marginLeft: 'auto' }}
              >
                Limpiar
              </button>
            </div>

            {/* Expanded Inline Palette for Adding Items */}
            {showPaletteDrawer && (
              <div style={{ marginTop: '0.75rem', padding: '0.75rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-muted)', marginBottom: '0.5rem' }}>
                  {showPaletteDrawer === 'emojis' ? 'Toca un emoji para añadirlo:' : 'Toca un símbolo decorativo para añadirlo:'}
                </span>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {(showPaletteDrawer === 'emojis'
                    ? (currentVibeData ? currentVibeData.emojis : AESTHETIC_VIBES[0].emojis)
                    : (currentVibeData ? currentVibeData.symbols : ['♡', '✦', '⋆', '୨୧', '✧', 'ʚɞ'])
                  ).map((char, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleAddBuilderItem(char)}
                      style={{
                        fontSize: showPaletteDrawer === 'emojis' ? '1.5rem' : '1.1rem',
                        padding: '0.3rem 0.5rem',
                        background: 'var(--color-bg-alt)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                      }}
                      title={`Añadir ${char}`}
                    >
                      {char}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* ═══ DISCOVERY TOOLBAR: SEARCH & TABS ═══ */}
      <div className="toolbar tool-panel mb-6" style={{ minWidth: 0, maxWidth: '100%', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: '100%' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            {/* Search Input */}
            <div className="font-search" style={{ flex: '1 1 260px', minWidth: '220px' }}>
              <span className="font-search__icon" aria-hidden="true">🔍</span>
              <input
                type="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar estética, color o emoción... (rosa, luna, dark, coquette)"
                className="font-search__input"
                aria-label="Buscar estética o emoción"
              />
            </div>

            {/* Three Main Tabs */}
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={activeTab === 'combinaciones'}
                onClick={() => setActiveTab('combinaciones')}
              >
                ✨ Combinaciones ({displayedCombos.length})
              </button>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={activeTab === 'emojis'}
                onClick={() => setActiveTab('emojis')}
              >
                🎀 Emojis ({displayedEmojis.length})
              </button>
              <button
                type="button"
                className="font-filters__chip"
                aria-pressed={activeTab === 'simbolos'}
                onClick={() => setActiveTab('simbolos')}
              >
                ♡ Símbolos ({displayedSymbols.length})
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ TAB 1: READY-MADE GALLERY ═══ */}
      {activeTab === 'combinaciones' && (
        <section aria-labelledby="ready-combos-title">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <h3 id="ready-combos-title" style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, color: 'var(--color-ink)' }}>
              Combinaciones de Emojis Aesthetic
            </h3>
            {searchQuery && (
              <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                Resultados para &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>

          {displayedCombos.length === 0 ? (
            <div className="tool-panel" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>🔍</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.4rem' }}>
                No encontramos combinaciones para esa búsqueda
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', margin: 0 }}>
                Prueba otra estética, color o emoción (ejemplo: <code>rosa</code>, <code>luna</code>, <code>dark</code>, <code>amor</code>).
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem' }}>
              {displayedCombos.map(item => {
                const isCopied = copiedItem === item.combo;
                const isFav = favorites.includes(item.combo);

                return (
                  <div
                    key={item.id}
                    className="font-card"
                    style={{
                      padding: '0.85rem 1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '96px',
                      position: 'relative',
                    }}
                  >
                    {/* Top Row: Vibe badge & Favorite */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'capitalize' }}>
                        {item.vibeName}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          if (isFav) {
                            saveFavorites(favorites.filter(c => c !== item.combo));
                            showToast('Eliminado de favoritos');
                          } else {
                            saveFavorites([...favorites, item.combo]);
                            showToast('Guardado en favoritos');
                          }
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '2px',
                          fontSize: '0.85rem',
                          color: isFav ? 'var(--color-yellow, #f59e0b)' : 'var(--color-ghost, #94a3b8)',
                          lineHeight: 1,
                        }}
                        title={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                        aria-label={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                      >
                        ★
                      </button>
                    </div>

                    {/* Middle: Combo text */}
                    <div style={{ margin: '0.2rem 0 0.6rem 0', textAlign: 'center' }}>
                      <span style={{ fontSize: '1.5rem', lineHeight: 1.2, letterSpacing: '0.15em' }}>
                        {item.combo}
                      </span>
                    </div>

                    {/* Bottom: Action buttons */}
                    <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'stretch' }}>
                      <button
                        type="button"
                        onClick={() => handleCopy(item.combo, `Combinación ${item.vibeName}`)}
                        className={`btn ${isCopied ? 'btn--success' : 'btn--gradient'} btn--sm`}
                        style={{ flex: 1, fontWeight: 700 }}
                        aria-label={`Copiar combinación ${item.vibeName}: ${item.combo}`}
                      >
                        <span>{isCopied ? '✓ ¡Copiado!' : 'Copiar'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setBuilderItems(item.combo.split(' '));
                          setIsCustomizing(true);
                          announce(`Combinación cargada en el editor`);
                          showToast('Cargado en el editor');
                          window.scrollTo({ top: 180, behavior: 'smooth' });
                        }}
                        className="btn btn--outline btn--sm"
                        style={{ padding: '0.35rem 0.65rem' }}
                        title="Personalizar esta combinación en el editor"
                        aria-label={`Personalizar combinación ${item.combo}`}
                      >
                        ✏️
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* ═══ TAB 2: INDIVIDUAL AESTHETIC EMOJIS ═══ */}
      {activeTab === 'emojis' && (
        <section aria-labelledby="curated-emojis-title">
          <h3 id="curated-emojis-title" style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 0.75rem 0', color: 'var(--color-ink)' }}>
            Paleta de Emojis Aesthetic Seleccionados
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', marginTop: 0, marginBottom: '1rem' }}>
            Toca cualquier emoji para copiarlo individualmente o añadirlo a tu combinación.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))', gap: '0.5rem' }}>
            {displayedEmojis.map((item, idx) => {
              const isCopied = copiedItem === item.char;
              return (
                <div
                  key={`${item.char}-${idx}`}
                  role="button"
                  tabIndex={0}
                  className="font-card"
                  style={{
                    padding: '0.6rem 0.3rem',
                    minHeight: '76px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    userSelect: 'none',
                    position: 'relative',
                  }}
                  onClick={() => handleCopy(item.char, `Emoji ${item.char}`)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCopy(item.char, `Emoji ${item.char}`);
                    }
                  }}
                  aria-label={`Copiar emoji ${item.char}`}
                  title={`Toca para copiar ${item.char} (${item.vibeName})`}
                >
                  <button
                    type="button"
                    onClick={e => {
                      e.stopPropagation();
                      handleAddBuilderItem(item.char);
                    }}
                    style={{
                      position: 'absolute',
                      top: '2px',
                      left: '3px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      color: 'var(--color-brand)',
                      padding: '2px',
                    }}
                    title="Añadir al editor"
                    aria-label={`Añadir ${item.char} al editor`}
                  >
                    +
                  </button>

                  {isCopied ? (
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-brand)' }}>
                      ✓ Copiado
                    </span>
                  ) : (
                    <>
                      <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{item.char}</span>
                      <span style={{ fontSize: '0.6rem', color: 'var(--color-muted)', marginTop: '4px' }}>
                        {item.vibeName}
                      </span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ═══ TAB 3: DECORATIVE AESTHETIC SYMBOLS ═══ */}
      {activeTab === 'simbolos' && (
        <section aria-labelledby="curated-symbols-title">
          <h3 id="curated-symbols-title" style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 0.75rem 0', color: 'var(--color-ink)' }}>
            Símbolos Decorativos Aesthetic (Unicode)
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', marginTop: 0, marginBottom: '1rem' }}>
            Caracteres de texto decorativos (lazos, estrellas, brillos, corazones) para complementar tus emojis.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))', gap: '0.5rem' }}>
            {displayedSymbols.map((item, idx) => {
              const isCopied = copiedItem === item.char;
              return (
                <div
                  key={`${item.char}-${idx}`}
                  role="button"
                  tabIndex={0}
                  className="font-card"
                  style={{
                    padding: '0.6rem 0.3rem',
                    minHeight: '76px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    userSelect: 'none',
                    position: 'relative',
                  }}
                  onClick={() => handleCopy(item.char, `Símbolo ${item.char}`)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCopy(item.char, `Símbolo ${item.char}`);
                    }
                  }}
                  aria-label={`Copiar símbolo ${item.char}`}
                  title={`Toca para copiar símbolo ${item.char}`}
                >
                  <button
                    type="button"
                    onClick={e => {
                      e.stopPropagation();
                      handleAddBuilderItem(item.char);
                    }}
                    style={{
                      position: 'absolute',
                      top: '2px',
                      left: '3px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      color: 'var(--color-brand)',
                      padding: '2px',
                    }}
                    title="Añadir al editor"
                    aria-label={`Añadir ${item.char} al editor`}
                  >
                    +
                  </button>

                  {isCopied ? (
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-brand)' }}>
                      ✓ Copiado
                    </span>
                  ) : (
                    <>
                      <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{item.char}</span>
                      <span style={{ fontSize: '0.6rem', color: 'var(--color-muted)', marginTop: '4px' }}>
                        {item.vibeName}
                      </span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
