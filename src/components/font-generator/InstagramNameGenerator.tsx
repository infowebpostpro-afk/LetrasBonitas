"use client";

import { useCallback, useMemo, useState } from "react";
import {
  FONT_CATEGORIES,
  fontStyles,
  getStylesByCategory,
  searchStyles,
} from "@/lib/unicode";
import { FontGenerator } from "./FontGenerator";
import type { GeneratorStyle } from "./FontGenerator";

const NAME_TYPE_CHIPS = [
  { id: "nombre", label: "Nombre", sample: "Sara López ✨" },
  { id: "apodo", label: "Apodo", sample: "Sari 🌸" },
  { id: "gamer", label: "Gamer", sample: "Alex Gamer 🎮" },
  { id: "creator", label: "Creator", sample: "Valeria Creator 🎨" },
  { id: "aesthetic", label: "Aesthetic", sample: "Luna 🌙" },
  { id: "marca", label: "Marca", sample: "Studio Design 💼" },
] as const;

const QUICK_NAME_EXAMPLES = [
  "Sofia ✨",
  "Alex 🎮",
  "Luna 🌙",
  "Carlos 🔥",
  "Valeria 📸",
  "Creator 🎨",
  "Gamer ⚡",
  "Dreamer 🕊️",
] as const;

const DEFAULT_NAME = "Sara López ✨";

export function InstagramNameGenerator() {
  const [activeChip, setActiveChip] = useState<string>("nombre");
  const [inputText, setInputText] = useState<string>(DEFAULT_NAME);

  // Transformed preview for profile card
  const previewTransformedName = useMemo(() => {
    const scriptStyle = fontStyles.find((s) => s.id === "script") ?? fontStyles[0];
    try {
      return scriptStyle.transform(inputText.trim() ? inputText : DEFAULT_NAME);
    } catch {
      return inputText;
    }
  }, [inputText]);

  // Derived handle preview
  const previewHandle = useMemo(() => {
    const clean = inputText
      .toLowerCase()
      .replace(/[^a-z0-9_]/g, "_")
      .replace(/_+/g, "_")
      .replace(/^_+|_+$/g, "");
    return `@${clean || "tu_nombre"}`;
  }, [inputText]);

  const handleSelectChip = useCallback((chip: typeof NAME_TYPE_CHIPS[number]) => {
    setActiveChip(chip.id);
    setInputText(chip.sample);
  }, []);

  const handleSelectExample = useCallback((exampleName: string) => {
    setInputText(exampleName);
  }, []);

  return (
    <div className="instagram-name-generator">
      {/* ───── Name Type Chips & Quick Examples ───── */}
      <section aria-label="Filtros de tipo de nombre" style={{ marginBottom: "1rem" }}>
        <div className="use-case-bar__header" style={{ marginBottom: "0.5rem" }}>
          <span className="quick-example-label">Estilo de nombre:</span>
        </div>
        <div className="bio-chip-group" role="tablist" aria-label="Tipos de nombre">
          {NAME_TYPE_CHIPS.map((chip) => {
            const isActive = activeChip === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`use-case-btn ${isActive ? "is-active" : ""}`}
                onClick={() => handleSelectChip(chip)}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        <div className="quick-examples-bar" aria-label="Prueba un nombre rápido">
          <span className="quick-example-label">Prueba un nombre:</span>
          {QUICK_NAME_EXAMPLES.map((nameEx) => (
            <button
              key={nameEx}
              type="button"
              className="quick-example-pill"
              onClick={() => handleSelectExample(nameEx)}
            >
              {nameEx}
            </button>
          ))}
        </div>
      </section>

      {/* ───── Social Profile Name Preview Card ───── */}
      <div className="name-editor-grid" aria-label="Vista previa de nombre en perfil">
        <div className="name-profile-card">
          <div className="name-profile-card__avatar">
            {(inputText.trim()[0] || "S").toUpperCase()}
          </div>
          <div className="name-profile-card__body">
            <span className="name-profile-card__label">Vista previa en perfil</span>
            <div className="name-profile-card__display-name">
              {previewTransformedName}
            </div>
            <span className="name-profile-card__handle">{previewHandle}</span>
          </div>
        </div>

        <div className="bio-profile-hint text-muted" style={{ fontSize: "0.85rem", padding: "0.5rem" }}>
          💡 <strong>Consejo para tu nombre:</strong> Los nombres en Instagram permiten caracteres Unicode decorativos. Haz clic en «Copiar» en cualquier estilo y pégalo en el campo Nombre de tu perfil.
        </div>
      </div>

      {/* ───── Main Engine Playground ───── */}
      <section aria-label="Generador de fuentes para nombres">
        <FontGenerator
          key={inputText}
          styles={fontStyles as GeneratorStyle[]}
          categories={FONT_CATEGORIES}
          favoritesStorageKey="letrasbonitas:instagram-nombres:favorites"
          recentCopiedStorageKey="letrasbonitas:instagram-nombres:recent-copied"
          defaultCategory="all"
          defaultExample={inputText}
          searchPlaceholder="Buscar estilo para tu nombre (ej: cursiva, negrita, gotica, aesthetic)..."
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
    </div>
  );
}
