"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  cursiveStyles,
  getCursiveStylesByCategory,
  searchCursiveStyles,
} from "@/lib/unicode/cursiveStyles";
import { CURSIVE_TOOL_CONFIG } from "@/lib/unicode/cursiveTypes";
import type { CategoryOption, CursiveCategoryId, CursiveStyle } from "@/lib/unicode/cursiveTypes";
import { charCount, truncateGraphemes } from "@/lib/unicode";
import { copyText } from "@/lib/clipboard";
import { CheckIcon, ClearIcon, CopyIcon, PasteIcon, SparklesIcon } from "@/components/ui/Icons";
import { AlphabetGrid } from "./AlphabetGrid";
import { FontGenerator, type GeneratorStyle } from "./FontGenerator";

/* ─── Highlights / Top Popular Elegant Styles ─── */

const POPULAR_ELEGANT_CONFIG: Array<{ id: string; badge: string }> = [
  { id: "cursive-mathematical-script", badge: "✦ Cursiva Clásica" },
  { id: "cursive-bold-script", badge: "★ Negrita Elegante" },
  { id: "cursive-light-script", badge: "✧ Cursiva Fina" },
  { id: "cursive-bold-light-script", badge: "✦ Negrita Fina" },
  { id: "cursive-elegant-script", badge: "✨ Cursiva de Lujo" },
  { id: "cursive-formal-script", badge: "❖ Cursiva Formal" },
  { id: "cursive-calligraphy", badge: "❧ Caligráfica" },
  { id: "cursive-bold-calligraphy", badge: "༺ Caligrafía Intensa" },
  { id: "cursive-luxury-calligraphy", badge: "♛ Caligrafía Real" },
  { id: "cursive-handwritten", badge: "˗ Manuscrita Fina" },
  { id: "cursive-signature-style", badge: "✍ Estilo Firma" },
  { id: "cursive-soft-calligraphy", badge: "˚ Caligrafía Suave" },
];

function getPopularElegantStyles(): Array<{ style: CursiveStyle; badge: string }> {
  const result: Array<{ style: CursiveStyle; badge: string }> = [];
  for (const item of POPULAR_ELEGANT_CONFIG) {
    const s = cursiveStyles.find((style) => style.id === item.id);
    if (s) {
      result.push({ style: s, badge: item.badge });
    }
  }
  return result;
}

/* ─── Custom Categories for Elegant Cursive Tool ─── */

export const ELEGANT_CATEGORIES: CategoryOption[] = [
  { id: "all", label: "Todas" },
  { id: "popular", label: "Populares" },
  { id: "favorites", label: "Favoritos" },
  { id: "elegant", label: "Elegantes" },
  { id: "script", label: "Cursivas" },
  { id: "calligraphy", label: "Caligráficas" },
  { id: "handwritten", label: "Manuscritas" },
  { id: "aesthetic", label: "Aesthetic" },
  { id: "delicate", label: "Delicadas" },
  { id: "signature", label: "Signature" },
  { id: "decorative", label: "Decorativas" },
  { id: "symbols", label: "Con Símbolos" },
  { id: "underlined", label: "Subrayadas" },
  { id: "spaced", label: "Espaciadas" },
];

/* ─── Custom Filter logic for Elegant Page ─── */

function filterElegantStyles(
  styles: GeneratorStyle[],
  category: string,
  favoriteIds: Set<string>,
): GeneratorStyle[] {
  if (category === "all") return styles;
  if (category === "popular") {
    return [...styles].sort((a, b) => b.popularity - a.popularity);
  }
  if (category === "favorites") {
    return styles.filter((s) => favoriteIds.has(s.id));
  }
  if (category === "elegant") {
    return styles.filter((s) => s.category === "elegant" || s.tags.includes("elegante"));
  }
  if (category === "script") {
    return styles.filter((s) => s.category === "script" || s.tags.includes("cursiva"));
  }
  if (category === "calligraphy") {
    return styles.filter((s) => s.category === "calligraphy" || s.tags.includes("caligrafica"));
  }
  if (category === "handwritten") {
    return styles.filter((s) => s.category === "handwritten" || s.tags.includes("manuscrita"));
  }
  if (category === "aesthetic") {
    return styles.filter((s) => s.category === "aesthetic" || s.tags.includes("aesthetic"));
  }
  if (category === "delicate") {
    return styles.filter(
      (s) =>
        s.category === "romantic" ||
        s.tags.includes("fina") ||
        s.tags.includes("suave") ||
        s.tags.includes("delicada") ||
        s.tags.includes("ligera"),
    );
  }
  if (category === "signature") {
    return styles.filter((s) => s.tags.includes("firma") || s.tags.includes("signature"));
  }
  if (category === "decorative") {
    return styles.filter((s) => s.category === "decorative" || s.tags.includes("decorativa"));
  }
  if (category === "symbols") {
    return styles.filter(
      (s) =>
        s.tags.includes("corazon") ||
        s.tags.includes("estrella") ||
        s.tags.includes("flor") ||
        s.tags.includes("marco") ||
        s.tags.includes("brillo") ||
        s.tags.includes("destello"),
    );
  }
  if (category === "underlined") {
    return styles.filter((s) => s.tags.includes("subrayado") || s.tags.includes("linea"));
  }
  if (category === "spaced") {
    return styles.filter((s) => s.tags.includes("espaciado") || s.tags.includes("ancha"));
  }

  return getCursiveStylesByCategory(styles as CursiveStyle[], category as CursiveCategoryId, favoriteIds);
}

const MAX_CHARS = CURSIVE_TOOL_CONFIG.maxCharacters;
const DEFAULT_TEXT = "Letras Bonitas";

export function ElegantCursivaTool() {
  const [text, setText] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const popularItems = useMemo(getPopularElegantStyles, []);
  const sourceText = text.trim() ? text : DEFAULT_TEXT;
  const count = charCount(text);

  /* Toast & copied timeouts */
  useEffect(() => {
    if (!toast && !copiedId) return;
    const t = window.setTimeout(() => {
      setToast(null);
      setCopiedId(null);
    }, 1800);
    return () => window.clearTimeout(t);
  }, [toast, copiedId]);

  const handleTextChange = useCallback((next: string) => {
    setText(truncateGraphemes(next, MAX_CHARS));
  }, []);

  const handlePaste = useCallback(async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      if (clipboardText) {
        handleTextChange(clipboardText);
      }
    } catch {
      // Browser denied clipboard access
    }
  }, [handleTextChange]);

  const handleCopyStyle = useCallback(
    async (id: string, transformedText: string) => {
      const ok = await copyText(transformedText);
      if (ok) {
        setCopiedId(id);
        setToast("¡Texto copiado al portapapeles! ✓");
      }
    },
    [],
  );

  const popularPreviews = useMemo(() => {
    const map = new Map<string, string>();
    for (const item of popularItems) {
      try {
        map.set(item.style.id, item.style.transform(sourceText));
      } catch {
        map.set(item.style.id, sourceText);
      }
    }
    return map;
  }, [popularItems, sourceText]);

  const alphabetTransform = popularItems[0]?.style.transform ?? ((t: string) => t);

  return (
    <div className="copiar-pegar-tool">
      {/* ── Interactive Generator Input Panel ── */}
      <section className="tool-panel font-input-shell" aria-label="Generador de texto cursivo elegante">
        <div className="font-input-shell__header">
          <div className="font-input-shell__title">
            <SparklesIcon className="font-input-shell__icon" size={20} />
            <label htmlFor="text-input-main" className="font-input-shell__label">
              Transformador de Cursivas Elegantes
            </label>
          </div>
          <span className={`font-input-shell__count${count >= MAX_CHARS * 0.9 ? " is-limit" : ""}`}>
            {count} / {MAX_CHARS}
          </span>
        </div>

        <div className="font-input-shell__body">
          <textarea
            id="text-input-main"
            className="font-input-shell__textarea"
            value={text}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder="Escribe tu texto o nombre aquí (ej: María, Elegancia)..."
            rows={3}
            spellCheck
            autoCapitalize="sentences"
            autoComplete="off"
            aria-label="Escribe tu texto para transformar en letras cursivas elegantes"
          />
        </div>

        <div className="font-input-shell__actions">
          <div className="font-input-shell__hints">
            <span className="badge badge--soft">✨ Vista previa en tiempo real</span>
          </div>
          <div className="font-input-shell__btns">
            <button
              type="button"
              className="btn btn--ghost"
              onClick={handlePaste}
              title="Pegar texto guardado en el portapapeles"
            >
              <PasteIcon size={16} /> Pegar
            </button>
            {text && (
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => setText("")}
                title="Limpiar la casilla de entrada"
              >
                <ClearIcon size={16} /> Limpiar
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Toast Floating Notification */}
      <div className={`toast${toast ? " is-visible" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>

      {/* ── Highlighted Popular Elegant Styles ── */}
      <section className="popular-elegant-section" aria-labelledby="popular-elegant-title">
        <div className="section-header">
          <span className="section-header__badge">DESTACADOS</span>
          <h2 id="popular-elegant-title" className="section-heading">
            Estilos Elegantes Destacados
          </h2>
          <p className="section-subheading">
            Los mejores estilos caligráficos, manuscritos y de escritura fina listos para copiar con un solo toque.
          </p>
        </div>

        <div className="top-results" role="list" aria-label="Estilos cursivos elegantes destacados">
          {popularItems.map(({ style, badge }) => {
            const output = popularPreviews.get(style.id) ?? sourceText;
            const isCopied = copiedId === style.id;
            return (
              <div
                key={style.id}
                role="listitem"
                className={`top-results__card${isCopied ? " is-copied" : ""}`}
              >
                <div className="top-results__card-header">
                  <span className="top-results__card-badge">{badge}</span>
                  <span className="top-results__card-name">{style.name}</span>
                </div>
                <button
                  type="button"
                  className="top-results__card-preview"
                  onClick={() => handleCopyStyle(style.id, output)}
                  title={`Haz clic para copiar ${style.name}`}
                  aria-label={`Copiar resultado ${style.name}: ${output}`}
                >
                  {output}
                </button>
                <div className="top-results__card-actions">
                  <button
                    type="button"
                    className={`btn ${isCopied ? "btn--success" : "btn--primary"}`}
                    onClick={() => handleCopyStyle(style.id, output)}
                    aria-label={`Copiar ${style.name}`}
                  >
                    {isCopied ? (
                      <>
                        <CheckIcon size={16} /> ¡Copiado!
                      </>
                    ) : (
                      <>
                        <CopyIcon size={16} /> Copiar
                      </>
                    )}
                  </button>
                  <span className="top-results__card-hint">
                    {isCopied ? "¡Copiado con éxito!" : "Un clic para copiar"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Abecedario Cursivo Elegante Section ── */}
      <AlphabetGrid transform={alphabetTransform} toast={(msg) => setToast(msg)} />

      {/* ── 100+ Styles Full Explorer Section ── */}
      <section className="all-styles-section" aria-labelledby="all-styles-title">
        <div className="section-header">
          <span className="section-header__badge">CATÁLOGO COMPLETO</span>
          <h2 id="all-styles-title" className="section-heading">
            +100 Estilos Cursivos Elegantes
          </h2>
          <p className="section-subheading">
            Explora la colección completa. Filtra por categorías o usa el buscador inteligente.
          </p>
        </div>

        <FontGenerator
          styles={cursiveStyles as GeneratorStyle[]}
          categories={ELEGANT_CATEGORIES}
          favoritesStorageKey="letrasbonitas:elegant:favorites"
          recentCopiedStorageKey="letrasbonitas:elegant:recent-copied"
          defaultCategory="elegant"
          defaultExample={DEFAULT_TEXT}
          searchPlaceholder="Buscar por nombre o tipo (ej: caligráfica, fina, firma)..."
          filterStyles={filterElegantStyles}
          searchStyles={searchCursiveStyles as (styles: GeneratorStyle[], q: string) => GeneratorStyle[]}
        />
      </section>

      {/* ───── Internal links ───── */}
      <nav className="internal-links" aria-label="Páginas relacionadas">
        <div className="internal-links__header">
          <span className="internal-links__eyebrow">✨ HERRAMIENTAS RELACIONADAS</span>
          <h2 className="section-heading">Explora más estilos de texto</h2>
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
          <Link href="/letras-cursivas/letras-cursivas-para-copiar-y-pegar/" className="internal-link-card">
            <div className="internal-link-card__icon">📋</div>
            <div className="internal-link-card__body">
              <div className="internal-link-card__title-row">
                <span className="internal-link-card__title">Copiar y Pegar</span>
                <span className="internal-link-card__arrow">→</span>
              </div>
              <p className="internal-link-card__desc">Herramienta optimizada para transformar y copiar texto al instante.</p>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
