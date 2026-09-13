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

/* ─── Core styles available in the alphabet style selector ─── */

const ALPHABET_STYLE_IDS = [
  "cursive-mathematical-script",
  "cursive-bold-script",
  "cursive-light-script",
  "cursive-bold-light-script",
  "cursive-elegant-script",
  "cursive-calligraphy",
  "cursive-handwritten",
  "cursive-signature-style",
] as const;

function getAlphabetStyles(): CursiveStyle[] {
  return ALPHABET_STYLE_IDS
    .map((id) => cursiveStyles.find((s) => s.id === id))
    .filter((s): s is CursiveStyle => s !== undefined);
}

/* ─── Component ─── */

const MAX_CHARS = CURSIVE_TOOL_CONFIG.maxCharacters;
const DEFAULT_TEXT = "Letras Bonitas";

export function AbecedarioCursivoTool() {
  /* --- Alphabet grid state --- */
  const alphabetStyles = useMemo(getAlphabetStyles, []);
  const [selectedStyleId, setSelectedStyleId] = useState<string>(ALPHABET_STYLE_IDS[0]);

  const selectedTransform = useMemo(() => {
    const style = alphabetStyles.find((s) => s.id === selectedStyleId);
    return style?.transform ?? alphabetStyles[0]?.transform ?? ((t: string) => t);
  }, [selectedStyleId, alphabetStyles]);

  /* --- Text generator state --- */
  const [text, setText] = useState("");
  const [generatorStyleId, setGeneratorStyleId] = useState<string>(ALPHABET_STYLE_IDS[0]);
  const [copiedGenerator, setCopiedGenerator] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const generatorTransform = useMemo(() => {
    const style = alphabetStyles.find((s) => s.id === generatorStyleId);
    return style?.transform ?? alphabetStyles[0]?.transform ?? ((t: string) => t);
  }, [generatorStyleId, alphabetStyles]);

  const sourceText = text.trim() ? text : DEFAULT_TEXT;

  const generatedOutput = useMemo(() => {
    try {
      return generatorTransform(sourceText);
    } catch {
      return sourceText;
    }
  }, [generatorTransform, sourceText]);

  /* --- Toast auto-clear --- */
  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 1800);
    return () => window.clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    if (!copiedGenerator) return;
    const t = window.setTimeout(() => setCopiedGenerator(false), 1800);
    return () => window.clearTimeout(t);
  }, [copiedGenerator]);

  /* --- Handlers --- */
  const showToast = useCallback((msg: string) => setToast(msg), []);

  const handleTextChange = useCallback(
    (next: string) => setText(truncateGraphemes(next, MAX_CHARS)),
    [],
  );

  const handleCopyOutput = useCallback(async () => {
    const ok = await copyText(generatedOutput);
    if (ok) {
      setCopiedGenerator(true);
      setToast("Copiado ✓");
    } else {
      setToast("No se pudo copiar");
    }
  }, [generatedOutput]);

  const count = charCount(text);
  const nearLimit = count >= MAX_CHARS * 0.9;

  return (
    <div className="abecedario-tool">
      {/* ───── Comprehensive Font Generator (Primary Tool) ───── */}
      <section aria-labelledby="style-explorer-heading">
        <h2 id="style-explorer-heading" className="section-heading section-heading--lg">
          Explora {cursiveStyles.length}+ estilos cursivos y convierte tu texto
        </h2>
        <p className="section-subheading">
          Escribe tu texto, filtra por categoría y copia el estilo que más te guste con un solo toque.
        </p>
        <FontGenerator
          value={text}
          onChange={handleTextChange}
          styles={cursiveStyles}
          categories={CURSIVE_CATEGORIES}
          favoritesStorageKey={CURSIVE_TOOL_CONFIG.favoritesStorageKey}
          recentCopiedStorageKey={CURSIVE_TOOL_CONFIG.recentCopiedStorageKey}
          defaultCategory="popular"
          defaultExample={DEFAULT_TEXT}
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

      {/* ───── Alphabet style selector & Grid ───── */}
      <section aria-labelledby="abc-style-label" style={{ marginTop: "3rem" }}>
        <h2 id="abc-style-label" className="section-heading section-heading--lg">
          Abecedario Cursivo Completo (A-Z)
        </h2>
        <p className="section-subheading">
          Selecciona un estilo tipográfico y copia cualquier letra individual del alfabeto cursivo.
        </p>
        <div className="tool-panel alphabet-style-selector" style={{ marginBottom: "1rem" }}>
          <label htmlFor="abc-style-select" className="font-input__label">
            Estilo del abecedario
          </label>
          <select
            id="abc-style-select"
            className="text-generator-mini__select"
            value={selectedStyleId}
            onChange={(e) => setSelectedStyleId(e.target.value)}
          >
            {alphabetStyles.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <AlphabetGrid transform={selectedTransform} toast={showToast} />
      </section>

      {/* ───── Internal links ───── */}
      <nav className="internal-links" aria-label="Páginas relacionadas">
        <div className="internal-links__header">
          <span className="internal-links__eyebrow">✨ HERRAMIENTAS RELACIONADAS</span>
          <h2 className="section-heading">Explora más estilos cursivos</h2>
        </div>
        <div className="internal-links__grid">
          <Link href="/letras-cursivas/" className="internal-link-card">
            <div className="internal-link-card__icon">✍️</div>
            <div className="internal-link-card__body">
              <div className="internal-link-card__title-row">
                <span className="internal-link-card__title">Letras Cursivas</span>
                <span className="internal-link-card__arrow">→</span>
              </div>
              <p className="internal-link-card__desc">Colección completa de fuentes y estilos cursivos para copiar y pegar.</p>
            </div>
          </Link>
          <Link href="/letras-cursivas/letras-cursivas-para-copiar-y-pegar/" className="internal-link-card">
            <div className="internal-link-card__icon">📋</div>
            <div className="internal-link-card__body">
              <div className="internal-link-card__title-row">
                <span className="internal-link-card__title">Copiar y Pegar</span>
                <span className="internal-link-card__arrow">→</span>
              </div>
              <p className="internal-link-card__desc">Utilidad de conversión de texto cursivo directo al portapapeles.</p>
            </div>
          </Link>
          <Link href="/letras-cursivas/letras-cursivas-elegantes/" className="internal-link-card">
            <div className="internal-link-card__icon">💎</div>
            <div className="internal-link-card__body">
              <div className="internal-link-card__title-row">
                <span className="internal-link-card__title">Cursivas Elegantes</span>
                <span className="internal-link-card__arrow">→</span>
              </div>
              <p className="internal-link-card__desc">Estilos caligráficos finos y sofisticados para nombres y biografías.</p>
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
