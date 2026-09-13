"use client";

import {
  FONT_CATEGORIES,
  TOOL_CONFIG,
  fontStyles,
  getStylesByCategory,
  searchStyles,
} from "@/lib/unicode";
import { FontGenerator } from "./FontGenerator";
import type { GeneratorStyle } from "./FontGenerator";

export function ComoCambiarLasLetrasTool() {
  return (
    <div className="como-cambiar-las-letras-tool">
      {/* ───── Main Font Generator Tool ───── */}
      <section aria-label="Cambiador de letras interactivo">
        <FontGenerator
          styles={fontStyles as GeneratorStyle[]}
          categories={FONT_CATEGORIES}
          favoritesStorageKey="letrasbonitas:como-cambiar:favorites"
          recentCopiedStorageKey="letrasbonitas:como-cambiar:recent-copied"
          defaultCategory="all"
          defaultExample={TOOL_CONFIG.defaultExample}
          searchPlaceholder="Buscar forma de cambiar (ej: cursiva, gotica, negrita, aesthetic)..."
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
