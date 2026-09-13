"use client";

import { useCallback, useMemo, useState } from "react";
import { AlphabetLetterCard } from "./AlphabetLetterCard";
import { CheckIcon } from "@/components/ui/Icons";
import { copyText } from "@/lib/clipboard";

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz".split("");

type AlphabetGridProps = {
  label: string;
  letters: string[];
  transform: (text: string) => string;
  copiedKey: string | null;
  onLetterCopy: (key: string, value: string) => void;
  copyAllLabel: string;
  onCopyAll: (value: string) => void;
  copyAllCopied: boolean;
};

function AlphabetGridInner({
  label,
  letters,
  transform,
  copiedKey,
  onLetterCopy,
  copyAllLabel,
  onCopyAll,
  copyAllCopied,
}: AlphabetGridProps) {
  const transformed = useMemo(() => {
    return letters.map((letter) => {
      try {
        return transform(letter);
      } catch {
        return letter;
      }
    });
  }, [letters, transform]);

  const allCursive = useMemo(() => transformed.join(" "), [transformed]);

  return (
    <section className="alphabet-section" aria-labelledby={`alphabet-${label}`}>
      <div className="alphabet-section__header">
        <h2 id={`alphabet-${label}`} className="section-heading">
          {label}
        </h2>
        <button
          type="button"
          className={`btn btn--ghost alphabet-actions__btn${copyAllCopied ? " is-copied" : ""}`}
          onClick={() => onCopyAll(allCursive)}
          aria-label={copyAllLabel}
        >
          {copyAllCopied ? (
            <>
              <CheckIcon size={14} /> Copiado
            </>
          ) : (
            copyAllLabel
          )}
        </button>
      </div>

      <div className="alphabet-grid" role="list" aria-label={`Letras ${label}`}>
        {letters.map((letter, i) => (
          <div key={letter} role="listitem">
            <AlphabetLetterCard
              original={letter}
              cursive={transformed[i]}
              isCopied={copiedKey === `${label}-${letter}`}
              onCopy={(orig, cursive) =>
                onLetterCopy(`${label}-${orig}`, cursive)
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}

type Props = {
  transform: (text: string) => string;
  toast: (msg: string) => void;
};

export function AlphabetGrid({ transform, toast }: Props) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState<string | null>(null);

  const clearCopied = useCallback(() => {
    const t = window.setTimeout(() => {
      setCopiedKey(null);
      setCopiedAll(null);
    }, 1800);
    return t;
  }, []);

  const handleLetterCopy = useCallback(
    async (key: string, value: string) => {
      const ok = await copyText(value);
      if (ok) {
        setCopiedKey(key);
        toast("Copiado ✓");
        clearCopied();
      } else {
        toast("No se pudo copiar");
      }
    },
    [toast, clearCopied],
  );

  const handleCopyAll = useCallback(
    async (section: string, value: string) => {
      const ok = await copyText(value);
      if (ok) {
        setCopiedAll(section);
        toast("Copiado ✓");
        clearCopied();
      } else {
        toast("No se pudo copiar");
      }
    },
    [toast, clearCopied],
  );

  const upperTransformed = useMemo(() => {
    return UPPERCASE.map((l) => {
      try {
        return transform(l);
      } catch {
        return l;
      }
    });
  }, [transform]);

  const lowerTransformed = useMemo(() => {
    return LOWERCASE.map((l) => {
      try {
        return transform(l);
      } catch {
        return l;
      }
    });
  }, [transform]);

  const fullAlphabet = useMemo(
    () => [...upperTransformed, ...lowerTransformed].join(" "),
    [upperTransformed, lowerTransformed],
  );

  return (
    <div className="alphabet-grids">
      <AlphabetGridInner
        label="Mayúsculas"
        letters={UPPERCASE}
        transform={transform}
        copiedKey={copiedKey}
        onLetterCopy={handleLetterCopy}
        copyAllLabel="Copiar mayúsculas"
        onCopyAll={(v) => handleCopyAll("upper", v)}
        copyAllCopied={copiedAll === "upper"}
      />

      <AlphabetGridInner
        label="Minúsculas"
        letters={LOWERCASE}
        transform={transform}
        copiedKey={copiedKey}
        onLetterCopy={handleLetterCopy}
        copyAllLabel="Copiar minúsculas"
        onCopyAll={(v) => handleCopyAll("lower", v)}
        copyAllCopied={copiedAll === "lower"}
      />

      <div className="alphabet-actions">
        <button
          type="button"
          className={`btn btn--primary alphabet-actions__btn${copiedAll === "full" ? " is-copied" : ""}`}
          onClick={() => handleCopyAll("full", fullAlphabet)}
        >
          {copiedAll === "full" ? (
            <>
              <CheckIcon size={14} /> Abecedario copiado
            </>
          ) : (
            "Copiar abecedario completo"
          )}
        </button>
      </div>
    </div>
  );
}
