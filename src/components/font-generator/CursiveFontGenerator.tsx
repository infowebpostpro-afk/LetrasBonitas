"use client";

import { FontGenerator } from "@/components/font-generator/FontGenerator";
import {
  CURSIVE_CATEGORIES,
  CURSIVE_TOOL_CONFIG,
} from "@/lib/unicode/cursiveTypes";
import {
  cursiveStyles,
  getCursiveStylesByCategory,
  searchCursiveStyles,
} from "@/lib/unicode/cursiveStyles";
import type { CursiveCategoryId } from "@/lib/unicode/cursiveTypes";

export function CursiveFontGenerator() {
  return (
    <FontGenerator
      styles={cursiveStyles}
      categories={CURSIVE_CATEGORIES}
      favoritesStorageKey={CURSIVE_TOOL_CONFIG.favoritesStorageKey}
      recentCopiedStorageKey={CURSIVE_TOOL_CONFIG.recentCopiedStorageKey}
      defaultCategory="popular"
      defaultExample={CURSIVE_TOOL_CONFIG.defaultExample}
      searchPlaceholder="Buscar estilos..."
      filterStyles={(styles, category, favorites) =>
        getCursiveStylesByCategory(
          styles as typeof cursiveStyles,
          category as CursiveCategoryId,
          favorites,
        )
      }
      searchStyles={(styles, query) =>
        searchCursiveStyles(styles as typeof cursiveStyles, query)
      }
    />
  );
}
