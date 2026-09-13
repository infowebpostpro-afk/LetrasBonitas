"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import {
  fontStyles,
  getStylesByCategory,
  searchStyles,
} from "@/lib/unicode";
import type { CategoryOption } from "@/lib/unicode/cursiveTypes";
import { FontGenerator } from "./FontGenerator";
import type { GeneratorStyle } from "./FontGenerator";

const USE_CASES = [
  { id: "bio", label: "Bio", icon: "✨", sample: "✨ Digital Creator\n📍 México\n📩 Contacto en el enlace" },
  { id: "nombre", label: "Nombre", icon: "👤", sample: "Sara López ✨" },
  { id: "caption", label: "Caption", icon: "📝", sample: "Coleccionando momentos mágicos ✨❤️" },
  { id: "perfil", label: "Perfil", icon: "🌟", sample: "Mi Estilo Único" },
  { id: "publicacion", label: "Publicación", icon: "📸", sample: "Nueva foto en el perfil 📸" },
] as const;

const QUICK_CURSIVE_EXAMPLES = [
  "Mi Instagram 📸",
  "Digital Creator ✨",
  "Love yourself ❤️",
  "Creative Mind 🎨",
  "Mi estilo 🌟",
  "Hola mundo 🕊️",
] as const;

const CURSIVE_CATEGORIES: CategoryOption[] = [
  { id: "all", label: "Todas las cursivas" },
  { id: "favorites", label: "Favoritos" },
  { id: "script", label: "Cursivas Script" },
  { id: "handwritten", label: "Manuscritas" },
  { id: "italic", label: "Itálicas" },
  { id: "elegant", label: "Elegantes" },
  { id: "aesthetic", label: "Aesthetic" },
];

// Pre-filter the 300+ registry down to cursive & script-oriented styles
function getCursiveInstagramStyles(): GeneratorStyle[] {
  const cursiveKeywords = [
    "script",
    "cursiva",
    "italic",
    "italica",
    "calligraphy",
    "caligrafia",
    "handwritten",
    "manuscrita",
    "cursive",
    "subscript",
    "superscript",
    "elegant",
    "elegante",
    "aesthetic",
    "swirl",
    "fraktur",
    "gothic",
  ];

  return (fontStyles as GeneratorStyle[]).filter((style) => {
    const cat = style.category.toLowerCase();
    const name = style.name.toLowerCase();
    const tags = style.tags.map((t) => t.toLowerCase());

    return (
      cursiveKeywords.some((kw) => cat.includes(kw)) ||
      cursiveKeywords.some((kw) => name.includes(kw)) ||
      tags.some((tag) => cursiveKeywords.some((kw) => tag.includes(kw)))
    );
  });
}

const DEFAULT_TEXT = "Mi estilo para Instagram ✨";

export function CursiveInstagramGenerator() {
  const cursiveStylesList = useMemo(getCursiveInstagramStyles, []);

  const [activeUseCase, setActiveUseCase] = useState<string>("bio");
  const [inputText, setInputText] = useState<string>(DEFAULT_TEXT);

  // Transformed preview using script or mathematical script style
  const transformedPreview = useMemo(() => {
    const target = cursiveStylesList.find((s) => s.id === "script") ?? cursiveStylesList[0];
    try {
      return target ? target.transform(inputText.trim() ? inputText : DEFAULT_TEXT) : inputText;
    } catch {
      return inputText;
    }
  }, [inputText, cursiveStylesList]);

  const handleSelectUseCase = useCallback((id: string) => {
    setActiveUseCase(id);
    const found = USE_CASES.find((u) => u.id === id);
    if (found) setInputText(found.sample);
  }, []);

  const handleSelectExample = useCallback((exampleText: string) => {
    setInputText(exampleText);
  }, []);

  return (
    <div className="cursive-instagram-generator">
      {/* ───── Instagram Use-Case Bar ───── */}
      <section className="use-case-section" aria-label="Selecciona uso de Instagram">
        <div className="use-case-bar__header">
          <span className="quick-example-label">¿Dónde quieres usar tu letra cursiva?</span>
        </div>
        <div className="use-case-bar" role="tablist" aria-label="Atajos por uso de Instagram">
          {USE_CASES.map((uc) => {
            const isActive = activeUseCase === uc.id;
            return (
              <button
                key={uc.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`use-case-btn ${isActive ? "is-active" : ""}`}
                onClick={() => handleSelectUseCase(uc.id)}
              >
                <span>{uc.icon}</span>
                <span>{uc.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ───── Quick Example Phrases Bar ───── */}
      <div className="quick-examples-bar" aria-label="Ejemplos rápidos de letra cursiva">
        <span className="quick-example-label">Prueba un ejemplo:</span>
        {QUICK_CURSIVE_EXAMPLES.map((ex) => (
          <button
            key={ex}
            type="button"
            className="quick-example-pill"
            onClick={() => handleSelectExample(ex)}
          >
            {ex}
          </button>
        ))}
      </div>

      {/* ───── Before / After Comparison Showcase & Profile Preview ───── */}
      <div className="cursiva-comparison-grid" aria-label="Comparativa antes y después">
        <div className="cursiva-comparison-card">
          <span className="cursiva-comparison-card__label">Texto Original</span>
          <div className="cursiva-comparison-card__content">
            {inputText.trim() || DEFAULT_TEXT}
          </div>
        </div>

        <div className="cursiva-comparison-card" style={{ borderColor: "var(--color-brand)" }}>
          <span className="cursiva-comparison-card__label" style={{ color: "var(--color-brand)" }}>
            Resultado Cursiva (Unicode)
          </span>
          <div className="cursiva-comparison-card__content">
            {transformedPreview}
          </div>
        </div>
      </div>

      {/* ───── Main Cursive Generator Playground ───── */}
      <section aria-label="Generador de letras cursivas para Instagram">
        <FontGenerator
          value={inputText}
          onChange={setInputText}
          styles={cursiveStylesList}
          categories={CURSIVE_CATEGORIES}
          favoritesStorageKey="letrasbonitas:instagram-cursivas:favorites"
          recentCopiedStorageKey="letrasbonitas:instagram-cursivas:recent-copied"
          defaultCategory="all"
          defaultExample={DEFAULT_TEXT}
          searchPlaceholder="Buscar estilo cursivo (ej: script, manuscrita, italica, elegante)..."
          filterStyles={(styles, category, favorites) =>
            getStylesByCategory(
              styles as typeof fontStyles,
              category as Parameters<typeof getStylesByCategory>[1],
              favorites,
            ) as GeneratorStyle[]
          }
          searchStyles={(styles, query) =>
            searchStyles(styles as typeof fontStyles, query) as GeneratorStyle[]
          }
        />
      </section>

      {/* ───── Contextual Silo Navigation ───── */}
      <nav className="internal-links" aria-label="Navegación del silo Instagram" style={{ marginTop: "3.5rem" }}>
        <div className="internal-links__header">
          <span className="internal-links__eyebrow">✨ EXPLORA OTROS CONVERSORES Y ESTILOS</span>
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

          <Link href="/letras-para-instagram/simbolos-para-instagram/" className="internal-link-card">
            <div className="internal-link-card__icon">♡</div>
            <div className="internal-link-card__body">
              <div className="internal-link-card__title-row">
                <span className="internal-link-card__title">Símbolos para Instagram</span>
                <span className="internal-link-card__arrow">→</span>
              </div>
              <p className="internal-link-card__desc">Biblioteca de símbolos bonitos y decorativos con copia en 1 tap.</p>
            </div>
          </Link>

          <Link href="/letras-cursivas/" className="internal-link-card">
            <div className="internal-link-card__icon">✒️</div>
            <div className="internal-link-card__body">
              <div className="internal-link-card__title-row">
                <span className="internal-link-card__title">Letras Cursivas</span>
                <span className="internal-link-card__arrow">→</span>
              </div>
              <p className="internal-link-card__desc">Pillar principal de letras cursivas y alfabetos manuscritos completos.</p>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
