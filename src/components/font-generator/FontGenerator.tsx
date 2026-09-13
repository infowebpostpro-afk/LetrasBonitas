"use client";

import { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import { TOOL_CONFIG } from "@/lib/unicode";
import type { CategoryOption } from "@/lib/unicode/cursiveTypes";
import { copyText } from "@/lib/clipboard";
import { useFavorites } from "@/hooks/useFavorites";
import { FontInput } from "./FontInput";
import { FontSearch } from "./FontSearch";
import { FontFilters } from "./FontFilters";
import { FontResults } from "./FontResults";

const INITIAL_VISIBLE = 48;
const LOAD_MORE_STEP = 48;

export type GeneratorStyle = {
  id: string;
  name: string;
  category: string;
  tags: string[];
  transform: (text: string) => string;
  popularity: number;
  compatibility: "high" | "medium" | "low";
  supportsLatin: boolean;
  supportsNumbers: boolean;
  supportsAccents: boolean;
};

type FontGeneratorProps = {
  styles: GeneratorStyle[];
  categories: CategoryOption[];
  favoritesStorageKey: string;
  recentCopiedStorageKey: string;
  defaultCategory?: string;
  defaultExample?: string;
  searchPlaceholder?: string;
  filterStyles: (
    styles: GeneratorStyle[],
    category: string,
    favoriteIds: Set<string>,
  ) => GeneratorStyle[];
  searchStyles: (styles: GeneratorStyle[], query: string) => GeneratorStyle[];
};

export function FontGenerator({
  styles,
  categories,
  favoritesStorageKey,
  recentCopiedStorageKey,
  defaultCategory = "popular",
  defaultExample = TOOL_CONFIG.defaultExample,
  searchPlaceholder = "Buscar estilo...",
  filterStyles,
  searchStyles: searchFn,
}: FontGeneratorProps) {
  const [text, setText] = useState<string>(defaultExample);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(defaultCategory);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [isPending, startTransition] = useTransition();
  const { favoriteSet, toggleFavorite, favorites } = useFavorites(favoritesStorageKey);

  const sourceText = text.trim() ? text : defaultExample;

  const filtered = useMemo(() => {
    const byCategory = filterStyles(styles, category, favoriteSet);
    return searchFn(byCategory, query);
  }, [styles, category, query, favoriteSet, filterStyles, searchFn]);

  const visibleStyles = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount],
  );

  const previews = useMemo(() => {
    const map = new Map<string, string>();
    for (const style of visibleStyles) {
      try {
        map.set(style.id, style.transform(sourceText));
      } catch {
        map.set(style.id, sourceText);
      }
    }
    return map;
  }, [visibleStyles, sourceText]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [category, query]);

  useEffect(() => {
    if (!toast && !copiedId) return;
    const t = window.setTimeout(() => {
      setToast(null);
      setCopiedId(null);
    }, 1800);
    return () => window.clearTimeout(t);
  }, [toast, copiedId]);

  const handleCopy = useCallback(
    async (id: string, value: string) => {
      const ok = await copyText(value);
      if (!ok) {
        setToast("No se pudo copiar");
        return;
      }
      setCopiedId(id);
      setToast("Copiado ✓");
      try {
        const raw = localStorage.getItem(recentCopiedStorageKey);
        const prev = raw ? (JSON.parse(raw) as string[]) : [];
        const next = [id, ...prev.filter((x) => x !== id)].slice(
          0,
          TOOL_CONFIG.recentCopiedLimit,
        );
        localStorage.setItem(recentCopiedStorageKey, JSON.stringify(next));
      } catch {
        // ignore
      }
    },
    [recentCopiedStorageKey],
  );

  const handleCategory = (id: string) => {
    startTransition(() => setCategory(id));
  };

  const handleSearch = (value: string) => {
    startTransition(() => setQuery(value));
  };

  const resetFilters = () => {
    setCategory("all");
    setQuery("");
  };

  const emptyTitle =
    category === "favorites"
      ? "Aún no hay favoritos"
      : "No se encontraron estilos.";
  const emptyDescription =
    category === "favorites"
      ? "Toca el corazón en cualquier estilo para guardarlo aquí."
      : "Prueba otra búsqueda o vuelve a Todos.";

  return (
    <div className="font-generator">
      <FontInput value={text} onChange={setText} onClear={() => setText("")} />

      <div className="toolbar tool-panel">
        <FontSearch
          value={query}
          onChange={handleSearch}
          placeholder={searchPlaceholder}
        />
        <FontFilters
          categories={categories}
          active={category}
          onChange={handleCategory}
          favoriteCount={favorites.length}
        />
        <div className="results-meta">
          <span>
            {filtered.length} estilo{filtered.length === 1 ? "" : "s"}
            {isPending ? " · actualizando…" : ""}
          </span>
          {(query || category !== "all") && (
            <button type="button" onClick={resetFilters}>
              Restablecer filtros
            </button>
          )}
        </div>
      </div>

      <FontResults
        styles={visibleStyles}
        previews={previews}
        favorites={favoriteSet}
        copiedId={copiedId}
        onCopy={handleCopy}
        onToggleFavorite={toggleFavorite}
        emptyTitle={emptyTitle}
        emptyDescription={emptyDescription}
        onResetFilters={
          category === "favorites" && favorites.length === 0
            ? undefined
            : resetFilters
        }
      />

      {visibleCount < filtered.length ? (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "0.5rem" }}>
          <button
            type="button"
            className="btn btn--gradient"
            onClick={() => setVisibleCount((n) => n + LOAD_MORE_STEP)}
          >
            Ver más estilos ({filtered.length - visibleCount} restantes)
          </button>
        </div>
      ) : null}

      <div
        className={`toast${toast ? " is-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </div>
  );
}
