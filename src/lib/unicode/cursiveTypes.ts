import type { Compatibility } from "./types";

/** Categories for the /letras-cursivas/ tool. */
export type CursiveCategoryId =
  | "all"
  | "popular"
  | "favorites"
  | "script"
  | "calligraphy"
  | "handwritten"
  | "elegant"
  | "decorative"
  | "aesthetic"
  | "romantic"
  | "vintage"
  | "social"
  | "gaming"
  | "special";

export type CursiveStyle = {
  id: string;
  name: string;
  category: Exclude<CursiveCategoryId, "all" | "popular" | "favorites">;
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

export type CategoryOption = {
  id: string;
  label: string;
};

export const CURSIVE_TOOL_CONFIG = {
  maxCharacters: 500,
  defaultExample: "Letras Bonitas",
  favoritesStorageKey: "letrasbonitas:cursive:favorites",
  recentCopiedStorageKey: "letrasbonitas:cursive:recent-copied",
  recentCopiedLimit: 10,
  minStylesRequired: 100,
} as const;

export const CURSIVE_CATEGORIES: CategoryOption[] = [
  { id: "all", label: "Todos" },
  { id: "popular", label: "Populares" },
  { id: "favorites", label: "Favoritos" },
  { id: "script", label: "Cursivas" },
  { id: "calligraphy", label: "Caligráficas" },
  { id: "handwritten", label: "Manuscritas" },
  { id: "elegant", label: "Elegantes" },
  { id: "decorative", label: "Decorativas" },
  { id: "aesthetic", label: "Aesthetic" },
  { id: "romantic", label: "Románticas" },
  { id: "vintage", label: "Vintage" },
  { id: "social", label: "Social" },
  { id: "gaming", label: "Gaming" },
  { id: "special", label: "Especiales" },
];
