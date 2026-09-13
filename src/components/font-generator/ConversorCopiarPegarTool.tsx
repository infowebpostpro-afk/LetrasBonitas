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

export function ConversorCopiarPegarTool() {
  return (
    <div className="conversor-copiar-pegar-tool">
      {/* ───── Main Interactive Converter (Input in Hero Section) ───── */}
      <section aria-label="Generador de letras para copiar y pegar">
        <FontGenerator
          styles={fontStyles as GeneratorStyle[]}
          categories={FONT_CATEGORIES}
          favoritesStorageKey="letrasbonitas:conversor-copiar:favorites"
          recentCopiedStorageKey="letrasbonitas:conversor-copiar:recent-copied"
          defaultCategory="all"
          defaultExample={TOOL_CONFIG.defaultExample}
          searchPlaceholder="Buscar estilo para copiar (ej: negrita, gotica, aesthetic, gaming)..."
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
