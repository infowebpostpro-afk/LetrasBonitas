"use client";

import { FontGenerator } from "@/components/font-generator/FontGenerator";
import {
  FONT_CATEGORIES,
  TOOL_CONFIG,
  fontStyles,
  getStylesByCategory,
  searchStyles,
} from "@/lib/unicode";
import type { GeneratorStyle } from "@/components/font-generator/FontGenerator";

export function ConversorDeLetrasTool() {
  return (
    <div className="conversor-de-letras-tool">
      {/* ───── Main Font Generator Engine ───── */}
      <section aria-label="Herramienta conversor de letras">
        <FontGenerator
          styles={fontStyles as GeneratorStyle[]}
          categories={FONT_CATEGORIES}
          favoritesStorageKey="letrasbonitas:conversor:favorites"
          recentCopiedStorageKey="letrasbonitas:conversor:recent-copied"
          defaultCategory="popular"
          defaultExample={TOOL_CONFIG.defaultExample}
          searchPlaceholder="Buscar estilo (ej: cursiva, gótica, aesthetic, negrita)..."
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
