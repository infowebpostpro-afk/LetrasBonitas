"use client";

import { memo } from "react";
import { CheckIcon } from "@/components/ui/Icons";

type AlphabetLetterCardProps = {
  original: string;
  cursive: string;
  isCopied: boolean;
  onCopy: (letter: string, cursive: string) => void;
};

function AlphabetLetterCardComponent({
  original,
  cursive,
  isCopied,
  onCopy,
}: AlphabetLetterCardProps) {
  return (
    <button
      type="button"
      className={`alphabet-card${isCopied ? " is-copied" : ""}`}
      onClick={() => onCopy(original, cursive)}
      aria-label={`Copiar letra ${original} en cursiva: ${cursive}`}
    >
      <span className="alphabet-card__original">{original}</span>
      <span className="alphabet-card__cursive">{cursive}</span>
      <span className="alphabet-card__copy" aria-live="polite">
        {isCopied ? (
          <>
            <CheckIcon size={14} /> Copiado
          </>
        ) : (
          "Copiar"
        )}
      </span>
    </button>
  );
}

export const AlphabetLetterCard = memo(AlphabetLetterCardComponent);
