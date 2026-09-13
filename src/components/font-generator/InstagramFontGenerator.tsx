"use client";

import { useCallback, useState } from "react";
import {
  FONT_CATEGORIES,
  fontStyles,
  getStylesByCategory,
  searchStyles,
} from "@/lib/unicode";
import { FontGenerator } from "./FontGenerator";
import type { GeneratorStyle } from "./FontGenerator";

const USE_CASES = [
  { id: "bio", label: "Bio", icon: "✨", placeholder: "Escribe tu texto para la bio de Instagram..." },
  { id: "nombre", label: "Nombre", icon: "👤", placeholder: "Escribe tu nombre o apodo para Instagram..." },
  { id: "caption", label: "Caption", icon: "📝", placeholder: "Escribe la descripción de tu publicación..." },
  { id: "publicacion", label: "Publicación", icon: "📸", placeholder: "Escribe el texto de tu post de Instagram..." },
  { id: "comentario", label: "Comentario", icon: "💬", placeholder: "Escribe un comentario destacado..." },
  { id: "username", label: "Username", icon: "⚡", placeholder: "Escribe tu nombre de usuario para Instagram..." },
] as const;

const QUICK_EXAMPLES = [
  "Mi Bio 🌟",
  "Mi Nombre ✨",
  "Hello Instagram 📸",
  "Love ❤️",
  "Creator 🎨",
  "Gaming 🎮",
] as const;

const DEFAULT_EXAMPLE = "Mi Bio para Instagram";

export function InstagramFontGenerator() {
  const [activeUseCase, setActiveUseCase] = useState<string>("bio");
  const [inputText, setInputText] = useState<string>(DEFAULT_EXAMPLE);

  const selectedUseCaseObj = USE_CASES.find((uc) => uc.id === activeUseCase) ?? USE_CASES[0];

  const handleSelectUseCase = useCallback((id: string) => {
    setActiveUseCase(id);
  }, []);

  const handleSelectExample = useCallback((exampleText: string) => {
    setInputText(exampleText);
  }, []);

  return (
    <div className="instagram-font-generator">
      {/* ───── Instagram Use Case Bar ───── */}
      <section className="use-case-section" aria-label="Selecciona tu uso de Instagram">
        <div className="use-case-bar__header">
          <span className="quick-example-label">¿Para qué quieres usar tus letras?</span>
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
      <div className="quick-examples-bar" aria-label="Ejemplos rápidos de texto">
        <span className="quick-example-label">Prueba un ejemplo:</span>
        {QUICK_EXAMPLES.map((ex) => (
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

      {/* ───── Core Font Generator Engine ───── */}
      <section aria-label="Generador de fuentes para Instagram">
        <FontGenerator
          key={inputText}
          styles={fontStyles as GeneratorStyle[]}
          categories={FONT_CATEGORIES}
          favoritesStorageKey="letrasbonitas:instagram:favorites"
          recentCopiedStorageKey="letrasbonitas:instagram:recent-copied"
          defaultCategory="all"
          defaultExample={inputText}
          searchPlaceholder={`Buscar estilo para ${selectedUseCaseObj.label.toLowerCase()} (ej: cursiva, gotica, aesthetic)...`}
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
