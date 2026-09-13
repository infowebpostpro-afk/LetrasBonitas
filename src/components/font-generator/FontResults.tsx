"use client";

import { FontCard } from "./FontCard";

type ResultStyle = {
  id: string;
  name: string;
};

type FontResultsProps = {
  styles: ResultStyle[];
  previews: Map<string, string>;
  favorites: Set<string>;
  copiedId: string | null;
  onCopy: (id: string, text: string) => void;
  onToggleFavorite: (id: string) => void;
  emptyTitle: string;
  emptyDescription: string;
  onResetFilters?: () => void;
};

export function FontResults({
  styles,
  previews,
  favorites,
  copiedId,
  onCopy,
  onToggleFavorite,
  emptyTitle,
  emptyDescription,
  onResetFilters,
}: FontResultsProps) {
  if (styles.length === 0) {
    return (
      <div className="empty-state" role="status">
        <strong>{emptyTitle}</strong>
        <p>{emptyDescription}</p>
        {onResetFilters ? (
          <button type="button" className="btn btn--ghost" onClick={onResetFilters}>
            Ver todos los estilos
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <div className="font-results" role="list" aria-label="Resultados de estilos">
      {styles.map((style) => (
        <div key={style.id} role="listitem">
          <FontCard
            id={style.id}
            name={style.name}
            preview={previews.get(style.id) ?? ""}
            isFavorite={favorites.has(style.id)}
            isCopied={copiedId === style.id}
            onCopy={onCopy}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}
    </div>
  );
}
