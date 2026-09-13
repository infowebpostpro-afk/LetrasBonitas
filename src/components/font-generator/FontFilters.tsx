"use client";

import type { CategoryOption } from "@/lib/unicode/cursiveTypes";

type FontFiltersProps = {
  categories: CategoryOption[];
  active: string;
  onChange: (id: string) => void;
  favoriteCount: number;
};

export function FontFilters({
  categories,
  active,
  onChange,
  favoriteCount,
}: FontFiltersProps) {
  return (
    <div className="font-filters" role="toolbar" aria-label="Categorías de estilos">
      {categories.map((cat) => {
        if (cat.id === "favorites" && favoriteCount === 0 && active !== "favorites") {
          return null;
        }
        const label =
          cat.id === "favorites" ? `${cat.label} (${favoriteCount})` : cat.label;
        return (
          <button
            key={cat.id}
            type="button"
            className="font-filters__chip"
            aria-pressed={active === cat.id}
            onClick={() => onChange(cat.id)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
