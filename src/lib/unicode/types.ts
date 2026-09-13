export type FontCategoryId =
  | "all"
  | "popular"
  | "favorites"
  | "cursive"
  | "elegant"
  | "bold"
  | "gothic"
  | "aesthetic"
  | "bubble"
  | "small"
  | "decorative"
  | "symbols"
  | "gaming"
  | "kawaii"
  | "glitch"
  | "rare";

export type Compatibility = "high" | "medium" | "low";

export type FallbackStrategy = "preserve" | "asciiFallback" | "removeCombining" | "replace";

export type FontStyle = {
  id: string;
  name: string;
  category: Exclude<FontCategoryId, "all" | "popular" | "favorites">;
  tags: string[];
  transform: (text: string) => string;
  popularity: number;
  compatibility: Compatibility;
  supportsLatin: boolean;
  supportsNumbers: boolean;
  supportsAccents: boolean;
  decorative?: boolean;
  combining?: boolean;
};

export type FontCategory = {
  id: FontCategoryId;
  label: string;
};

export const TOOL_CONFIG = {
  maxCharacters: 500,
  maxCombiningMarksPerCharacter: 4,
  defaultExample: "Letras Bonitas",
  favoritesStorageKey: "letrasbonitas:favorites",
  recentCopiedStorageKey: "letrasbonitas:recent-copied",
  recentCopiedLimit: 10,
  minStylesRequired: 300,
} as const;
