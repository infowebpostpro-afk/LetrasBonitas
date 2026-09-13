"use client";

import { memo } from "react";
import { CheckIcon, HeartIcon, HeartOutlineIcon, CopyIcon } from "@/components/ui/Icons";

type FontCardProps = {
  id: string;
  name: string;
  preview: string;
  isFavorite: boolean;
  isCopied: boolean;
  onCopy: (id: string, text: string) => void;
  onToggleFavorite: (id: string) => void;
};

function FontCardComponent({
  id,
  name,
  preview,
  isFavorite,
  isCopied,
  onCopy,
  onToggleFavorite,
}: FontCardProps) {
  return (
    <article className={`font-card${isCopied ? " is-copied" : ""}`}>
      <div className="font-card__top">
        <span className="font-card__name">{name}</span>
        <button
          type="button"
          className="btn btn--icon font-card__fav"
          aria-label={isFavorite ? `Quitar ${name} de favoritos` : `Guardar ${name} en favoritos`}
          aria-pressed={isFavorite}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(id);
          }}
        >
          {isFavorite ? <HeartIcon /> : <HeartOutlineIcon />}
        </button>
      </div>

      <button
        type="button"
        className="font-card__preview"
        onClick={() => onCopy(id, preview)}
        aria-label={`Copiar estilo ${name}`}
      >
        {preview}
      </button>

      <div className="font-card__actions">
        <span className="font-card__copy-label" aria-live="polite">
          {isCopied ? (
            <>
              <CheckIcon /> ¡Copiado!
            </>
          ) : (
            <>
              <CopyIcon size={14} /> Toca para copiar
            </>
          )}
        </span>
        <button
          type="button"
          className={`btn ${isCopied ? "btn--success" : "btn--primary"} btn--sm`}
          onClick={() => onCopy(id, preview)}
        >
          {isCopied ? "✓ Copiado" : "Copiar"}
        </button>
      </div>
    </article>
  );
}

export const FontCard = memo(FontCardComponent);
