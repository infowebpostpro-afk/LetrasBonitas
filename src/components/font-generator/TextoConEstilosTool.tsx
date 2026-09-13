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

export function TextoConEstilosTool() {
  return (
    <div className="texto-con-estilos-tool">
      {/* ───── Main Interactive Font Generator ───── */}
      <section aria-label="Generador de texto con estilos">
        <FontGenerator
          styles={fontStyles as GeneratorStyle[]}
          categories={FONT_CATEGORIES}
          favoritesStorageKey="letrasbonitas:texto-estilos:favorites"
          recentCopiedStorageKey="letrasbonitas:texto-estilos:recent-copied"
          defaultCategory="all"
          defaultExample={TOOL_CONFIG.defaultExample}
          searchPlaceholder="Buscar estilo de texto (ej: negrita, gotica, aesthetic, gaming)..."
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
