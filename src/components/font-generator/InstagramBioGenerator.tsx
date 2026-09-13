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

const BIO_USE_CASE_CHIPS = [
  { id: "creador", label: "Creador", template: "✨ Creador Digital\n📍 México\n📩 DM para colabs" },
  { id: "gamer", label: "Gamer", template: "🎮 Gamer & Streamer\n🔥 Clips diarios\n👇 Únete al club" },
  { id: "aesthetic", label: "Aesthetic", template: "🌙 Vibra tranquila\n✨ Arte & estilo\n🕊️ Sé feliz" },
  { id: "negocio", label: "Negocio", template: "💼 Tienda Oficial\n📦 Envíos a todo el país\n👇 Compra aquí" },
  { id: "personal", label: "Personal", template: "🌟 Viviendo al máximo\n📸 Fotografía & viajes\n❤️ Familia" },
  { id: "musica", label: "Música", template: "🎵 Músico & Productor\n🎧 Nuevo track disponible\n👇 Escucha ahora" },
  { id: "fitness", label: "Fitness", template: "🏋️ Trainer & Motivación\n💪 Rutinas diarias\n🥗 Vida sana" },
  { id: "viajes", label: "Viajes", template: "✈️ Coleccionando momentos\n🌍 25 países\n📸 Fotos de ruta" },
] as const;

const QUICK_START_TEMPLATES = [
  "✨ Creador digital",
  "🎮 Gamer | Creator",
  "📸 Capturando momentos",
  "🌙 Vibra tranquila",
  "💻 Tech & creativity",
  "🔥 Sin límites",
] as const;

const DEFAULT_BIO = "✨ Creador Digital\n📍 México\n📩 Contacto en el enlace";

export function InstagramBioGenerator() {
  const [activeChip, setActiveChip] = useState<string>("creador");
  const [inputText, setInputText] = useState<string>(DEFAULT_BIO);

  // Curated preview style (Cursive script or default transformed sample)
  const previewTransformed = useMemo(() => {
    const scriptStyle = fontStyles.find((s) => s.id === "script") ?? fontStyles[0];
    try {
      return scriptStyle.transform(inputText);
    } catch {
      return inputText;
    }
  }, [inputText]);

  const handleSelectChip = useCallback((chip: typeof BIO_USE_CASE_CHIPS[number]) => {
    setActiveChip(chip.id);
    setInputText(chip.template);
  }, []);

  const handleSelectTemplate = useCallback((template: string) => {
    setInputText(template);
  }, []);

  return (
    <div className="instagram-bio-generator">
      {/* ───── Top Use Case Chips & Template Selector ───── */}
      <section aria-label="Filtros de tipo de bio" style={{ marginBottom: "1rem" }}>
        <div className="use-case-bar__header" style={{ marginBottom: "0.5rem" }}>
          <span className="quick-example-label">Elige una plantilla por categoría:</span>
        </div>
        <div className="bio-chip-group" role="tablist" aria-label="Categorías de bio">
          {BIO_USE_CASE_CHIPS.map((chip) => {
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

        <div className="quick-examples-bar" aria-label="Plantillas rápidas de bio">
          <span className="quick-example-label">Prueba una bio rápida:</span>
          {QUICK_START_TEMPLATES.map((tmpl) => (
            <button
              key={tmpl}
              type="button"
              className="quick-example-pill"
              onClick={() => handleSelectTemplate(tmpl)}
            >
              {tmpl}
            </button>
          ))}
        </div>
      </section>

      {/* ───── Social Profile Live Bio Preview Card ───── */}
      <div className="bio-editor-grid" aria-label="Vista previa de biografía de perfil">
        <div className="bio-profile-card">
          <div className="bio-profile-card__header">
            <div className="bio-profile-card__avatar">IG</div>
            <div className="bio-profile-card__info">
              <span className="bio-profile-card__name">Tu Perfil de Instagram</span>
              <span className="bio-profile-card__handle">@tu_usuario</span>
            </div>
          </div>
          <div className="bio-profile-card__content" title="Vista previa de tu biografía">
            {previewTransformed || "Tu biografía estilizada aparecerá aquí..."}
          </div>
        </div>

        <div className="bio-profile-hint text-muted" style={{ fontSize: "0.85rem", padding: "0.5rem" }}>
          💡 <strong>Consejo para tu bio:</strong> Las biografías de Instagram permiten hasta 150 caracteres. Mezcla texto estilizado Unicode con saltos de línea y emojis para un perfil atractivo.
        </div>
      </div>

      {/* ───── Main Engine Playground ───── */}
      <section aria-label="Generador de fuentes para bio">
        <FontGenerator
          value={inputText}
          onChange={setInputText}
          styles={fontStyles as GeneratorStyle[]}
          categories={FONT_CATEGORIES}
          favoritesStorageKey="letrasbonitas:instagram-bio:favorites"
          recentCopiedStorageKey="letrasbonitas:instagram-bio:recent-copied"
          defaultCategory="all"
          defaultExample={DEFAULT_BIO}
          searchPlaceholder="Buscar estilo para tu bio (ej: cursiva, elegante, negrita, gotica)..."
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
