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
import type { FontCategoryId } from "@/lib/unicode/types";

export interface HubUseCase {
  id: string;
  label: string;
  icon: string;
  text: string;
}

export interface HubFontGeneratorProps {
  storagePrefix: string;
  defaultCategory?: FontCategoryId;
  defaultExample?: string;
  searchPlaceholder?: string;
  quickExamples?: string[];
  useCases?: HubUseCase[];
}

export function HubFontGenerator({
  storagePrefix,
  defaultCategory = "popular",
  defaultExample = "Escribe tu texto aquí",
  searchPlaceholder = "Buscar estilo (ej: cursiva, gótica, aesthetic, negrita)...",
  quickExamples,
  useCases,
}: HubFontGeneratorProps) {
  const [inputText, setInputText] = useState<string>(defaultExample);
  const [activeUseCase, setActiveUseCase] = useState<string>(
    useCases && useCases.length > 0 ? useCases[0].id : ""
  );

  const handleSelectUseCase = useCallback(
    (uc: HubUseCase) => {
      setActiveUseCase(uc.id);
      setInputText(uc.text);
    },
    []
  );

  const handleSelectExample = useCallback((exampleText: string) => {
    setInputText(exampleText);
  }, []);

  return (
    <div className="hub-font-generator w-full">
      {useCases && useCases.length > 0 && (
        <section className="use-case-section" aria-label="Selecciona un caso de uso">
          <div className="use-case-bar__header">
            <span className="quick-example-label">¿Para qué quieres usar tus letras?</span>
          </div>
          <div className="use-case-bar" role="tablist" aria-label="Atajos de uso">
            {useCases.map((uc) => {
              const isActive = activeUseCase === uc.id;
              return (
                <button
                  key={uc.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`use-case-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => handleSelectUseCase(uc)}
                >
                  <span>{uc.icon}</span>
                  <span>{uc.label}</span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {quickExamples && quickExamples.length > 0 && (
        <div className="quick-examples-bar" aria-label="Ejemplos rápidos de texto">
          <span className="quick-example-label">Prueba un ejemplo:</span>
          {quickExamples.map((ex) => (
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
      )}

      <section aria-label="Generador interactivo de fuentes">
        <FontGenerator
          key={inputText}
          styles={fontStyles as GeneratorStyle[]}
          categories={FONT_CATEGORIES}
          favoritesStorageKey={`letrasbonitas:${storagePrefix}:favorites`}
          recentCopiedStorageKey={`letrasbonitas:${storagePrefix}:recent-copied`}
          defaultCategory={defaultCategory}
          defaultExample={inputText}
          searchPlaceholder={searchPlaceholder}
          filterStyles={(styles, category, favorites) =>
            getStylesByCategory(
              styles as typeof fontStyles,
              category as Parameters<typeof getStylesByCategory>[1],
              favorites
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
