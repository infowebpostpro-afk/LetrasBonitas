"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  cursiveStyles,
  getCursiveStylesByCategory,
  searchCursiveStyles,
} from "@/lib/unicode/cursiveStyles";
import {
  CURSIVE_CATEGORIES,
  CURSIVE_TOOL_CONFIG,
} from "@/lib/unicode/cursiveTypes";
import type { CursiveCategoryId, CursiveStyle } from "@/lib/unicode/cursiveTypes";
import { charCount, truncateGraphemes } from "@/lib/unicode";
import { copyText } from "@/lib/clipboard";
import { CheckIcon } from "@/components/ui/Icons";
import { AlphabetGrid } from "./AlphabetGrid";
import { FontGenerator } from "./FontGenerator";

/* ─── Top styles shown immediately in the copy panel ─── */

const TOP_STYLE_IDS = [
  "cursive-mathematical-script",
  "cursive-bold-script",
  "cursive-elegant-script",
  "cursive-calligraphy",
  "cursive-handwritten",
  "cursive-instagram",
  "cursive-aesthetic",
  "cursive-romantic",
] as const;

function getTopStyles(): CursiveStyle[] {
  return TOP_STYLE_IDS
    .map((id) => cursiveStyles.find((s) => s.id === id))
    .filter((s): s is CursiveStyle => s !== undefined);
}

/* ─── Default alphabet transform ─── */

function getDefaultTransform(): (text: string) => string {
  const style = cursiveStyles.find((s) => s.id === "cursive-mathematical-script");
  return style?.transform ?? ((t: string) => t);
}

/* ─── Component ─── */

const MAX_CHARS = CURSIVE_TOOL_CONFIG.maxCharacters;
const DEFAULT_TEXT = "Letras Bonitas";

export function CopiarPegarTool() {
  const topStyles = useMemo(getTopStyles, []);
  const defaultTransform = useMemo(getDefaultTransform, []);

  /* --- State --- */
  const [text, setText] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const sourceText = text.trim() ? text : DEFAULT_TEXT;

  /* --- Top results previews --- */
  const topPreviews = useMemo(() => {
    const map = new Map<string, string>();
    for (const style of topStyles) {
      try {
        map.set(style.id, style.transform(sourceText));
      } catch {
        map.set(style.id, sourceText);
      }
    }
    return map;
  }, [topStyles, sourceText]);

  /* --- Toast auto-clear --- */
  useEffect(() => {
    if (!toast && !copiedId) return;
    const t = window.setTimeout(() => {
      setToast(null);
      setCopiedId(null);
    }, 1800);
    return () => window.clearTimeout(t);
  }, [toast, copiedId]);

  /* --- Handlers --- */
  const showToast = useCallback((msg: string) => setToast(msg), []);

  const handleTextChange = useCallback(
    (next: string) => setText(truncateGraphemes(next, MAX_CHARS)),
    [],
  );

  const handleCopy = useCallback(
    async (id: string, value: string) => {
      const ok = await copyText(value);
      if (ok) {
        setCopiedId(id);
        setToast("¡Copiado! ✓");
      } else {
        setToast("No se pudo copiar");
      }
    },
    [],
  );

  const count = charCount(text);
  const nearLimit = count >= MAX_CHARS * 0.9;

  return (
    <div className="copiar-pegar-tool">
      {/* ───── Text input ───── */}
      <section className="tool-panel" aria-labelledby="cp-input-label">
        <label id="cp-input-label" className="font-input__label" htmlFor="cp-input">
          Escribe tu texto
        </label>
        <textarea
          id="cp-input"
          className="font-input__textarea"
          value={text}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder={DEFAULT_TEXT}
          rows={3}
          spellCheck
          autoCapitalize="sentences"
          autoComplete="off"
          aria-describedby="cp-count"
        />
        <div className="font-input__meta">
          <p
            id="cp-count"
            className={`font-input__count${nearLimit ? " is-near-limit" : ""}`}
          >
            {count} / {MAX_CHARS}
          </p>
          <div className="font-input__actions">
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => setText("")}
              disabled={!text}
            >
              Limpiar
            </button>
          </div>
        </div>
      </section>

      {/* ───── Top results — copy-first panel ───── */}
      <section aria-labelledby="top-results-heading">
        <h2 id="top-results-heading" className="section-heading">
          Copia tu texto en cursiva
        </h2>
        <p className="section-subheading">
          Toca cualquier resultado para copiarlo al instante.
        </p>

        <div className="top-results" role="list" aria-label="Resultados cursivos para copiar">
          {topStyles.map((style) => {
            const preview = topPreviews.get(style.id) ?? sourceText;
            const isCopied = copiedId === `top-${style.id}`;
            return (
              <article
                key={style.id}
                className={`top-results__card${isCopied ? " is-copied" : ""}`}
                role="listitem"
              >
                <span className="top-results__card-name">{style.name}</span>
                <button
                  type="button"
                  className="top-results__card-preview"
                  onClick={() => handleCopy(`top-${style.id}`, preview)}
                  aria-label={`Copiar estilo ${style.name}`}
                >
                  {preview}
                </button>
                <div className="top-results__card-actions">
                  <span className="top-results__card-hint" aria-live="polite">
                    {isCopied ? (
                      <>
                        <CheckIcon size={14} /> ¡Copiado!
                      </>
                    ) : (
                      "Toca para copiar"
                    )}
                  </span>
                  <button
                    type="button"
                    className="btn btn--primary"
                    onClick={() => handleCopy(`top-${style.id}`, preview)}
                  >
                    {isCopied ? "¡Copiado!" : "Copiar"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ───── Quick copy alphabet ───── */}
      <section aria-labelledby="cp-alphabet-heading">
        <h2 id="cp-alphabet-heading" className="section-heading section-heading--lg">
          Letras cursivas individuales para copiar
        </h2>
        <p className="section-subheading">
          Copia cualquier letra cursiva de la A a la Z con un toque.
        </p>
        <AlphabetGrid transform={defaultTransform} toast={showToast} />
      </section>

      {/* ───── Full style explorer ───── */}
      <section aria-labelledby="cp-explorer-heading">
        <h2 id="cp-explorer-heading" className="section-heading section-heading--lg">
          {cursiveStyles.length}+ estilos cursivos para copiar
        </h2>
        <p className="section-subheading">
          Explora todos los estilos, filtra por categoría y copia el que más te guste.
        </p>
        <FontGenerator
          styles={cursiveStyles}
          categories={CURSIVE_CATEGORIES}
          favoritesStorageKey={CURSIVE_TOOL_CONFIG.favoritesStorageKey}
          recentCopiedStorageKey={CURSIVE_TOOL_CONFIG.recentCopiedStorageKey}
          defaultCategory="popular"
          defaultExample={sourceText}
          searchPlaceholder="Buscar estilo cursivo..."
          filterStyles={(styles, category, favorites) =>
            getCursiveStylesByCategory(
              styles as CursiveStyle[],
              category as CursiveCategoryId,
              favorites,
            )
          }
          searchStyles={(styles, query) =>
            searchCursiveStyles(styles as CursiveStyle[], query)
          }
        />
      </section>

      {/* ───── Internal links ───── */}
      <nav className="internal-links" aria-label="Páginas relacionadas">
        <div className="internal-links__header">
          <span className="internal-links__eyebrow">✨ HERRAMIENTAS RELACIONADAS</span>
          <h2 className="section-heading">Explora más opciones de texto</h2>
        </div>
        <div className="internal-links__grid">
          <Link href="/letras-cursivas/" className="internal-link-card">
            <div className="internal-link-card__icon">✍️</div>
            <div className="internal-link-card__body">
              <div className="internal-link-card__title-row">
                <span className="internal-link-card__title">Letras Cursivas</span>
                <span className="internal-link-card__arrow">→</span>
              </div>
              <p className="internal-link-card__desc">Explora la colección principal con más de 80 variaciones de escritura cursiva.</p>
            </div>
          </Link>
          <Link href="/letras-cursivas/abecedario-cursivo/" className="internal-link-card">
            <div className="internal-link-card__icon">🔤</div>
            <div className="internal-link-card__body">
              <div className="internal-link-card__title-row">
                <span className="internal-link-card__title">Abecedario Cursivo</span>
                <span className="internal-link-card__arrow">→</span>
              </div>
              <p className="internal-link-card__desc">Alfabeto cursivo completo para referencias de letras de la A a la Z.</p>
            </div>
          </Link>
          <Link href="/letras-cursivas/letras-cursivas-elegantes/" className="internal-link-card">
            <div className="internal-link-card__icon">💎</div>
            <div className="internal-link-card__body">
              <div className="internal-link-card__title-row">
                <span className="internal-link-card__title">Cursivas Elegantes</span>
                <span className="internal-link-card__arrow">→</span>
              </div>
              <p className="internal-link-card__desc">Estilos sofisticados y tipografías finas ideales para bios y perfiles.</p>
            </div>
          </Link>
        </div>
      </nav>

      {/* ───── Toast ───── */}
      <div
        className={`toast${toast ? " is-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </div>
  );
}
