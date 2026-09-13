"use client";

import { FontGenerator } from "@/components/font-generator/FontGenerator";
import {
  TOOL_CONFIG,
  FONT_CATEGORIES,
  fontStyles,
  getStylesByCategory,
  searchStyles,
} from "@/lib/unicode";

export function HomeFontGenerator() {
  return (
    <FontGenerator
      styles={fontStyles}
      categories={FONT_CATEGORIES}
      favoritesStorageKey={TOOL_CONFIG.favoritesStorageKey}
      recentCopiedStorageKey={TOOL_CONFIG.recentCopiedStorageKey}
      defaultCategory="popular"
      filterStyles={(styles, category, favorites) =>
        getStylesByCategory(
          styles as typeof fontStyles,
          category as Parameters<typeof getStylesByCategory>[1],
          favorites,
        )
      }
      searchStyles={(styles, query) =>
        searchStyles(styles as typeof fontStyles, query)
      }
    />
  );
}
