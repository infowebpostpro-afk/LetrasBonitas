"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import { copyText } from "@/lib/clipboard";
import { useFavorites } from "@/hooks/useFavorites";
import { CheckIcon } from "@/components/ui/Icons";
import {
  INSTAGRAM_SYMBOLS,
  SYMBOL_CATEGORIES,
  filterSymbolsByCategory,
  searchSymbols,
} from "@/lib/unicode/symbolsData";
import type { InstagramSymbol, SymbolCategory } from "@/lib/unicode/symbolsData";
import { FontSearch } from "./FontSearch";

const INITIAL_VISIBLE = 48;
const LOAD_MORE_STEP = 48;

const FAVORITES_KEY = "letrasbonitas:instagram-simbolos:favorites";

const QUICK_INSERT_SYMBOLS = ["♡", "✦", "✨", "❀", "🌙", "➜", "🦋", "👑", "💎", "🔥", "⚡", "•"];

export function InstagramSymbolsExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<SymbolCategory>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [collection, setCollection] = useState<string[]>([]);
  const [composerText, setComposerText] = useState("Hola ");
  const [isPending, startTransition] = useTransition();

  const { favoriteSet, toggleFavorite, favorites } = useFavorites(FAVORITES_KEY);

  // Filtered symbols list
  const filtered = useMemo(() => {
    const byCategory = filterSymbolsByCategory(INSTAGRAM_SYMBOLS, category, favoriteSet);
    return searchSymbols(byCategory, query);
  }, [category, query, favoriteSet]);

  const visibleSymbols = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount],
  );

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [category, query]);

  useEffect(() => {
    if (!toast && !copiedId) return;
    const t = window.setTimeout(() => {
      setToast(null);
      setCopiedId(null);
    }, 1800);
    return () => window.clearTimeout(t);
  }, [toast, copiedId]);

  // 1-Tap copy individual symbol
  const handleCopySymbol = useCallback(async (symbolObj: InstagramSymbol) => {
    const ok = await copyText(symbolObj.symbol);
    if (ok) {
      setCopiedId(symbolObj.id);
      setToast(`Símbolo ${symbolObj.symbol} copiado ✓`);
    } else {
      setToast("No se pudo copiar");
    }
  }, []);

  // Multi-symbol collection toggle
  const handleAddToCollection = useCallback((sym: string) => {
    setCollection((prev) => [...prev, sym]);
  }, []);

  const handleCopyCollection = useCallback(async () => {
    if (collection.length === 0) return;
    const joined = collection.join(" ");
    const ok = await copyText(joined);
    if (ok) {
      setToast("¡Combinación de símbolos copiada! ✓");
    } else {
      setToast("No se pudo copiar");
    }
  }, [collection]);

  // Composer symbol insertion
  const handleInsertIntoComposer = useCallback((sym: string) => {
    setComposerText((prev) => prev + sym);
  }, []);

  const handleCopyComposer = useCallback(async () => {
    if (!composerText.trim()) return;
    const ok = await copyText(composerText);
    if (ok) {
      setToast("¡Texto con símbolos copiado! ✓");
    } else {
      setToast("No se pudo copiar");
    }
  }, [composerText]);

  const handleCategoryChange = (id: SymbolCategory) => {
    startTransition(() => setCategory(id));
  };

  const handleSearchChange = (val: string) => {
    startTransition(() => setQuery(val));
  };

  const resetFilters = () => {
    setCategory("all");
    setQuery("");
  };

  return (
    <div className="instagram-symbols-explorer">
      {/* ───── Multi-Symbol Collection Bar (If symbols are added) ───── */}
      {collection.length > 0 && (
        <div className="symbol-collection-bar" role="region" aria-label="Tu selección de símbolos">
          <div className="symbol-collection-bar__list">
            <span style={{ fontSize: "0.85rem", fontWeight: 700, marginRight: "0.5rem" }}>
              Tu selección:
            </span>
            {collection.map((sym, idx) => (
              <span key={`${sym}-${idx}`}>{sym}</span>
            ))}
          </div>
          <div className="symbol-collection-bar__actions">
            <button
              type="button"
              className="btn btn--secondary btn--sm"
              onClick={handleCopyCollection}
            >
              Copiar todo ({collection.length})
            </button>
            <button
              type="button"
              className="btn btn--outline btn--sm"
              style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.4)" }}
              onClick={() => setCollection([])}
            >
              Limpiar
            </button>
          </div>
        </div>
      )}

      {/* ───── Toolbar Search & Category Filters ───── */}
      <div className="toolbar tool-panel" style={{ marginBottom: "1.5rem" }}>
        <FontSearch
          value={query}
          onChange={handleSearchChange}
          placeholder="Buscar símbolos (ej: corazón, estrella, flecha, aesthetic)..."
        />

        {/* Category horizontal filter pills */}
        <div className="category-filters" role="tablist" aria-label="Categorías de símbolos">
          {SYMBOL_CATEGORIES.map((cat) => {
            const isActive = category === cat.id;
            const count = cat.id === "favorites" ? favorites.length : undefined;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`category-pill ${isActive ? "is-active" : ""}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                {count !== undefined && <span className="category-pill__count">{count}</span>}
              </button>
            );
          })}
        </div>

        <div className="results-meta">
          <span>
            {filtered.length} símbolo{filtered.length === 1 ? "" : "s"}
            {isPending ? " · actualizando…" : ""}
          </span>
          {(query || category !== "all") && (
            <button type="button" onClick={resetFilters}>
              Restablecer filtros
            </button>
          )}
        </div>
      </div>

      {/* ───── Symbol Grid ───── */}
      <section aria-label="Biblioteca de símbolos">
        {filtered.length === 0 ? (
          <div className="empty-state">
            <h3>
              {category === "favorites"
                ? "Aún no tienes símbolos favoritos"
                : "No se encontraron símbolos"}
            </h3>
            <p>
              {category === "favorites"
                ? "Toca la estrella en cualquier símbolo para guardarlo aquí."
                : "Prueba con otro término o borra la búsqueda."}
            </p>
            <button type="button" className="btn btn--secondary" onClick={resetFilters}>
              Ver todos los símbolos
            </button>
          </div>
        ) : (
          <div className="symbol-grid">
            {visibleSymbols.map((item) => {
              const isCopied = copiedId === item.id;
              const isFav = favoriteSet.has(item.id);

              return (
                <div
                  key={item.id}
                  className={`symbol-card ${isCopied ? "is-copied" : ""}`}
                  onClick={() => handleCopySymbol(item)}
                  title={`Toca para copiar ${item.name}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleCopySymbol(item);
                    }
                  }}
                >
                  <button
                    type="button"
                    className={`symbol-card__fav-btn ${isFav ? "is-favorite" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.id);
                    }}
                    aria-label={isFav ? "Quitar de favoritos" : "Añadir a favoritos"}
                  >
                    {isFav ? "★" : "☆"}
                  </button>

                  <div className="symbol-card__char">{item.symbol}</div>
                  <div className="symbol-card__name">
                    {isCopied ? (
                      <span style={{ color: "var(--color-success-ink, #047857)", fontWeight: 700 }}>
                        <CheckIcon size={12} /> Copiado
                      </span>
                    ) : (
                      item.name
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {visibleCount < filtered.length && (
          <div style={{ display: "flex", justifyContent: "center", margin: "1.5rem 0" }}>
            <button
              type="button"
              className="btn btn--gradient"
              onClick={() => setVisibleCount((n) => n + LOAD_MORE_STEP)}
            >
              Ver más símbolos ({filtered.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </section>

      {/* ───── Custom Text + Symbol Composer ───── */}
      <section className="symbol-composer-card" aria-label="Combina texto y símbolos">
        <h2 className="section-heading">Combina Texto y Símbolos</h2>
        <p className="section-subheading">
          Escribe tu texto e inserta símbolos directamente para copiar la frase completa.
        </p>

        <div style={{ marginBottom: "0.5rem" }}>
          <span className="quick-example-label">Insertar símbolo rápido:</span>
          <div className="symbol-composer__quick-symbols">
            {QUICK_INSERT_SYMBOLS.map((sym) => (
              <button
                key={sym}
                type="button"
                className="symbol-insert-pill"
                onClick={() => handleInsertIntoComposer(sym)}
                title={`Insertar ${sym}`}
              >
                {sym}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <input
            type="text"
            className="font-input-shell__textarea"
            style={{ minHeight: "48px", height: "48px", resize: "none" }}
            value={composerText}
            onChange={(e) => setComposerText(e.target.value)}
            placeholder="Escribe tu texto..."
          />

          <button
            type="button"
            className="btn btn--primary"
            style={{ alignSelf: "flex-start" }}
            onClick={handleCopyComposer}
          >
            Copiar texto completo
          </button>
        </div>
      </section>

      {/* ───── Contextual Silo Navigation ───── */}
      <nav className="internal-links" aria-label="Navegación del silo Instagram" style={{ marginTop: "3.5rem" }}>
        <div className="internal-links__header">
          <span className="internal-links__eyebrow">✨ EXPLORA OTROS RECURSOS DE INSTAGRAM</span>
          <h2 className="section-heading">Herramientas Recomendadas</h2>
        </div>
        <div className="internal-links__grid">
          <Link href="/letras-para-instagram/" className="internal-link-card">
            <div className="internal-link-card__icon">📸</div>
            <div className="internal-link-card__body">
              <div className="internal-link-card__title-row">
                <span className="internal-link-card__title">Letras para Instagram</span>
                <span className="internal-link-card__arrow">→</span>
              </div>
              <p className="internal-link-card__desc">Herramienta principal para generar letras bonitas para tu perfil de Instagram.</p>
            </div>
          </Link>

          <Link href="/letras-para-instagram/letras-para-bio/" className="internal-link-card">
            <div className="internal-link-card__icon">✨</div>
            <div className="internal-link-card__body">
              <div className="internal-link-card__title-row">
                <span className="internal-link-card__title">Letras para Bio</span>
                <span className="internal-link-card__arrow">→</span>
              </div>
              <p className="internal-link-card__desc">Crea biografías de Instagram con fuentes elegantes, emojis y saltos de línea.</p>
            </div>
          </Link>

          <Link href="/letras-para-instagram/letras-para-nombres/" className="internal-link-card">
            <div className="internal-link-card__icon">👤</div>
            <div className="internal-link-card__body">
              <div className="internal-link-card__title-row">
                <span className="internal-link-card__title">Letras para Nombres</span>
                <span className="internal-link-card__arrow">→</span>
              </div>
              <p className="internal-link-card__desc">Transforma tu nombre de perfil o apodo con tipografías estéticas.</p>
            </div>
          </Link>

          <Link href="/conversor-de-letras/" className="internal-link-card">
            <div className="internal-link-card__icon">🔤</div>
            <div className="internal-link-card__body">
              <div className="internal-link-card__title-row">
                <span className="internal-link-card__title">Conversor de Letras</span>
                <span className="internal-link-card__arrow">→</span>
              </div>
              <p className="internal-link-card__desc">Explora el catálogo general con más de 300 estilos tipográficos.</p>
            </div>
          </Link>
        </div>
      </nav>

      {/* Toast Notification */}
      {toast && (
        <div className="toast is-visible" role="status" aria-live="polite">
          {toast}
        </div>
      )}
    </div>
  );
}
