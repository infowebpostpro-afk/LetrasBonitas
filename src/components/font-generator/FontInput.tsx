"use client";

import { TOOL_CONFIG, charCount, truncateGraphemes } from "@/lib/unicode";
import { SparklesIcon, PasteIcon, ClearIcon } from "@/components/ui/Icons";

type FontInputProps = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

export function FontInput({ value, onChange, onClear }: FontInputProps) {
  const count = charCount(value);
  const nearLimit = count >= TOOL_CONFIG.maxCharacters * 0.9;

  const handleChange = (next: string) => {
    onChange(truncateGraphemes(next, TOOL_CONFIG.maxCharacters));
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      handleChange(text);
    } catch {
      // Permission denied — user can still use Ctrl/Cmd+V
    }
  };

  return (
    <section className="tool-panel" aria-labelledby="font-input-label">
      <label id="font-input-label" className="font-input__label" htmlFor="font-input">
        <SparklesIcon size={16} className="font-input__label-icon" />
        Escribe tu texto
      </label>
      <textarea
        id="font-input"
        className="font-input__textarea"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={TOOL_CONFIG.defaultExample}
        rows={4}
        spellCheck
        autoCapitalize="sentences"
        autoComplete="off"
        aria-describedby="font-input-count"
      />
      <div className="font-input__meta">
        <span
          id="font-input-count"
          className={`font-input__count${nearLimit ? " is-near-limit" : ""}`}
        >
          {count} / {TOOL_CONFIG.maxCharacters}
        </span>
        <div className="font-input__actions">
          <button type="button" className="btn btn--ghost btn--sm" onClick={onClear} disabled={!value}>
            <ClearIcon size={14} /> Limpiar
          </button>
          <button type="button" className="btn btn--ghost btn--sm" onClick={handlePaste}>
            <PasteIcon size={14} /> Pegar
          </button>
        </div>
      </div>
    </section>
  );
}
