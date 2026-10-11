"use client";

import React, { useState, useMemo, useId } from "react";
import { copyText } from "@/lib/clipboard";
import {
  toSuperscriptLower,
  toSuperscriptUpper,
  SUPERSCRIPT_NUMBERS,
} from "@/lib/unicode/smallLetterMappings";

type ConverterMode = "lower" | "upper";
type LabelPosition = "before" | "after";

interface AlphabetChar {
  glyph: string;
  latin: string;
  code: string;
  isMissing?: boolean;
  note?: string;
}

const SUPERSCRIPT_LOWER_ALPHABET: AlphabetChar[] = [
  { glyph: "ᵃ", latin: "a", code: "U+1D43" },
  { glyph: "ᵇ", latin: "b", code: "U+1D47" },
  { glyph: "ᶜ", latin: "c", code: "U+1D9C" },
  { glyph: "ᵈ", latin: "d", code: "U+1D48" },
  { glyph: "ᵉ", latin: "e", code: "U+1D49" },
  { glyph: "ᶠ", latin: "f", code: "U+1DA0" },
  { glyph: "ᵍ", latin: "g", code: "U+1D4D" },
  { glyph: "ʰ", latin: "h", code: "U+02B0" },
  { glyph: "ⁱ", latin: "i", code: "U+2071" },
  { glyph: "ʲ", latin: "j", code: "U+02B2" },
  { glyph: "ᵏ", latin: "k", code: "U+1D4F" },
  { glyph: "ˡ", latin: "l", code: "U+02E1" },
  { glyph: "ᵐ", latin: "m", code: "U+1D50" },
  { glyph: "ⁿ", latin: "n", code: "U+207F" },
  { glyph: "ᵒ", latin: "o", code: "U+1D52" },
  { glyph: "ᵖ", latin: "p", code: "U+1D56" },
  { glyph: "q", latin: "q", code: "Sin superíndice", isMissing: true, note: "Unicode no tiene superíndice q" },
  { glyph: "ʳ", latin: "r", code: "U+02B3" },
  { glyph: "ˢ", latin: "s", code: "U+02E2" },
  { glyph: "ᵗ", latin: "t", code: "U+1D57" },
  { glyph: "ᵘ", latin: "u", code: "U+1D58" },
  { glyph: "ᵛ", latin: "v", code: "U+1D5B" },
  { glyph: "ʷ", latin: "w", code: "U+02B7" },
  { glyph: "ˣ", latin: "x", code: "U+02E3" },
  { glyph: "ʸ", latin: "y", code: "U+02B8" },
  { glyph: "ᶻ", latin: "z", code: "U+1DBB" },
];

const SUPERSCRIPT_UPPER_ALPHABET: AlphabetChar[] = [
  { glyph: "ᴬ", latin: "A", code: "U+1D2C" },
  { glyph: "ᴮ", latin: "B", code: "U+1D2E" },
  { glyph: "ᶜ", latin: "C", code: "U+1D9C" },
  { glyph: "ᴰ", latin: "D", code: "U+1D30" },
  { glyph: "ᴱ", latin: "E", code: "U+1D31" },
  { glyph: "ᶠ", latin: "F", code: "U+1DA0" },
  { glyph: "ᴳ", latin: "G", code: "U+1D33" },
  { glyph: "ᴴ", latin: "H", code: "U+1D34" },
  { glyph: "ᴵ", latin: "I", code: "U+1D35" },
  { glyph: "ᴶ", latin: "J", code: "U+1D36" },
  { glyph: "ᴷ", latin: "K", code: "U+1D37" },
  { glyph: "ᴸ", latin: "L", code: "U+1D38" },
  { glyph: "ᴹ", latin: "M", code: "U+1D39" },
  { glyph: "ᴺ", latin: "N", code: "U+1D3A" },
  { glyph: "ᴼ", latin: "O", code: "U+1D3C" },
  { glyph: "ᴾ", latin: "P", code: "U+1D3E" },
  { glyph: "Q", latin: "Q", code: "Sin superíndice", isMissing: true, note: "Unicode no tiene superíndice Q" },
  { glyph: "ᴿ", latin: "R", code: "U+1D3F" },
  { glyph: "ˢ", latin: "S", code: "U+02E2" },
  { glyph: "ᵀ", latin: "T", code: "U+1D40" },
  { glyph: "ᵁ", latin: "U", code: "U+1D41" },
  { glyph: "ⱽ", latin: "V", code: "U+2C7D" },
  { glyph: "ᵂ", latin: "W", code: "U+1D42" },
  { glyph: "ˣ", latin: "X", code: "U+02E3" },
  { glyph: "ʸ", latin: "Y", code: "U+02B8" },
  { glyph: "ᶻ", latin: "Z", code: "U+1DBB" },
];

const SUPERSCRIPT_DIGITS: AlphabetChar[] = [
  { glyph: "⁰", latin: "0", code: "U+2070" },
  { glyph: "¹", latin: "1", code: "U+00B9" },
  { glyph: "²", latin: "2", code: "U+00B2" },
  { glyph: "³", latin: "3", code: "U+00B3" },
  { glyph: "⁴", latin: "4", code: "U+2074" },
  { glyph: "⁵", latin: "5", code: "U+2075" },
  { glyph: "⁶", latin: "6", code: "U+2076" },
  { glyph: "⁷", latin: "7", code: "U+2077" },
  { glyph: "⁸", latin: "8", code: "U+2078" },
  { glyph: "⁹", latin: "9", code: "U+2079" },
  { glyph: "⁺", latin: "+", code: "U+207A" },
  { glyph: "⁻", latin: "-", code: "U+207B" },
  { glyph: "⁼", latin: "=", code: "U+207C" },
  { glyph: "⁽", latin: "(", code: "U+207D" },
  { glyph: "⁾", latin: ")", code: "U+207E" },
];

const NICK_PRESETS = [
  { label: "PRO", name: "Shadow", pos: "before" as LabelPosition, style: "upper" as ConverterMode },
  { label: "GOD", name: "Alex", pos: "before" as LabelPosition, style: "upper" as ConverterMode },
  { label: "MVP", name: "Luna", pos: "before" as LabelPosition, style: "upper" as ConverterMode },
  { label: "KING", name: "Leo", pos: "before" as LabelPosition, style: "upper" as ConverterMode },
  { label: "FF", name: "Valkiria", pos: "before" as LabelPosition, style: "upper" as ConverterMode },
  { label: "TM", name: "Darkness", pos: "before" as LabelPosition, style: "upper" as ConverterMode },
  { label: "pro", name: "Mateo", pos: "before" as LabelPosition, style: "lower" as ConverterMode },
  { label: "2026", name: "Luna", pos: "after" as LabelPosition, style: "upper" as ConverterMode },
];

export function RaisedLettersGenerator() {
  // ── Sección 1: Live Converter ──
  const [converterInput, setConverterInput] = useState<string>("hola mundo");
  const [converterMode, setConverterMode] = useState<ConverterMode>("lower");
  const [stripAccents, setStripAccents] = useState<boolean>(false);

  // ── Sección 2: Nick Composer ──
  const [composerLabel, setComposerLabel] = useState<string>("PRO");
  const [composerName, setComposerName] = useState<string>("Shadow");
  const [composerLabelStyle, setComposerLabelStyle] = useState<ConverterMode>("upper");
  const [composerPos, setComposerPos] = useState<LabelPosition>("before");
  const [useInvisibleSpace, setUseInvisibleSpace] = useState<boolean>(false);

  // ── Sección 3: Selector de Biblioteca de Caracteres ──
  const [activePickerTab, setActivePickerTab] = useState<"lower" | "upper" | "digits">("lower");

  // ── Estado de UI y Feedback ──
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [manualCopyText, setManualCopyText] = useState<string | null>(null);

  const convInputId = useId();
  const labelInputId = useId();
  const nameInputId = useId();

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  const handleCopy = async (id: string, text: string) => {
    if (!text) return;
    const ok = await copyText(text);
    if (ok) {
      setCopiedId(id);
      showToast("Texto copiado al portapapeles");
      setTimeout(() => setCopiedId(null), 2000);
    } else {
      setManualCopyText(text);
    }
  };

  // Conversión reactiva
  const converterResult = useMemo(() => {
    const raw = converterInput || "hola mundo";
    if (converterMode === "lower") {
      return toSuperscriptLower(raw, stripAccents);
    }
    return toSuperscriptUpper(raw, stripAccents);
  }, [converterInput, converterMode, stripAccents]);

  // Advertencias sobre caracteres no convertibles
  const unconvertedChars = useMemo(() => {
    const chars: string[] = [];
    const checkText = converterInput.toLowerCase();
    if (checkText.includes("q")) chars.push("q");
    if (checkText.includes("ñ")) chars.push("ñ");
    if (/[áéíóú]/.test(checkText) && !stripAccents) chars.push("tildes (á, é, í, ó, ú)");
    return chars;
  }, [converterInput, stripAccents]);

  // Nickname compuesto
  const composedNick = useMemo(() => {
    const rawLabel = composerLabel.trim();
    const rawName = composerName.trim();
    if (!rawLabel && !rawName) return "";

    const raisedLabel =
      composerLabelStyle === "lower"
        ? toSuperscriptLower(rawLabel, false)
        : toSuperscriptUpper(rawLabel, false);

    const spaceChar = useInvisibleSpace ? "\u3164" : " ";

    if (!rawLabel) return rawName;
    if (!rawName) return raisedLabel;

    return composerPos === "before"
      ? `${raisedLabel}${spaceChar}${rawName}`
      : `${rawName}${spaceChar}${raisedLabel}`;
  }, [composerLabel, composerName, composerLabelStyle, composerPos, useInvisibleSpace]);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10">
      {/* ═══════════════════════════════════════════════
          SECCIÓN 1: CONVERSOR EN VIVO DE LETRAS ARRIBA
          ═══════════════════════════════════════════════ */}
      <div className="bg-surface rounded-2xl border border-border shadow-md p-5 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Herramienta 1: Conversor Directo
            </span>
            <h2 className="text-xl md:text-2xl font-black text-ink tracking-tight">
              Generador de Letras Pequeñas Arriba
            </h2>
          </div>
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-2 border border-border">
            <button
              type="button"
              onClick={() => setConverterMode("lower")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                converterMode === "lower"
                  ? "bg-brand text-white shadow-xs"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              Minúsculas arriba (ʰᵒˡᵃ)
            </button>
            <button
              type="button"
              onClick={() => setConverterMode("upper")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                converterMode === "upper"
                  ? "bg-brand text-white shadow-xs"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              Mayúsculas arriba (ᴴᴼᴸᴬ)
            </button>
          </div>
        </div>

        {/* Input Textarea */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs text-muted">
            <label htmlFor={convInputId} className="font-semibold text-ink-soft">
              Escribe tu texto
            </label>
            <button
              type="button"
              onClick={() => setConverterInput("")}
              className="text-muted hover:text-brand transition-colors cursor-pointer"
            >
              Limpiar casilla
            </button>
          </div>
          <textarea
            id={convInputId}
            value={converterInput}
            onChange={(e) => setConverterInput(e.target.value)}
            placeholder="Escribe palabras, frases o apodos..."
            rows={2}
            className="w-full text-lg md:text-xl font-medium p-4 rounded-xl border border-border bg-surface-2 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all resize-none text-ink placeholder:text-muted"
          />
        </div>

        {/* Opciones y avisos de conversión */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1">
          <label className="flex items-center gap-2 cursor-pointer text-ink-soft">
            <input
              type="checkbox"
              checked={stripAccents}
              onChange={(e) => setStripAccents(e.target.checked)}
              className="w-4 h-4 accent-brand cursor-pointer rounded"
            />
            <span>Normalizar tildes para mayor compatibilidad</span>
          </label>
          <div className="text-muted">
            Longitud: <strong className="text-ink">{converterResult.length}</strong> caracteres
          </div>
        </div>

        {unconvertedChars.length > 0 && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-950 dark:text-amber-200">
            <strong>Transparencia Unicode:</strong> El texto contiene{" "}
            <strong>{unconvertedChars.join(", ")}</strong>. El estándar Unicode no tiene variante superíndice directa para la letra <em>q</em>, y las tildes y la <em>ñ</em> se conservan en su forma original para no alterar la ortografía de tus palabras.
          </div>
        )}

        {/* Tarjeta de Resultado Principal */}
        <div className="p-5 md:p-6 rounded-2xl bg-surface-2 border border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 min-w-0 flex-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-muted">
              Resultado en Superíndice
            </div>
            <div className="font-bold text-ink text-2xl md:text-3xl select-all break-words tracking-wide">
              {converterResult}
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleCopy("conv-result", converterResult)}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer shrink-0 shadow-sm ${
              copiedId === "conv-result"
                ? "bg-emerald-600 text-white"
                : "bg-brand text-white hover:bg-brand-hover"
            }`}
          >
            {copiedId === "conv-result" ? "✓ ¡Copiado!" : "Copiar Resultado"}
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECCIÓN 2: COMPOSITOR DE NOMBRES Y NICKS CON ETIQUETA ELEVADA
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-surface rounded-2xl border border-border shadow-md p-5 md:p-8 space-y-6">
        <div className="border-b border-border pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Herramienta 2: Diseñador para Videojuegos y Bios
          </span>
          <h2 className="text-xl md:text-2xl font-black text-ink tracking-tight">
            Compositor de Nombres con Letras Arriba
          </h2>
          <p className="text-xs text-muted mt-1">
            Combina un prefijo de clan o etiqueta elevada con tu nombre principal de forma limpia y legible.
          </p>
        </div>

        {/* Entradas del Compositor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor={labelInputId} className="text-xs font-bold text-ink-soft uppercase tracking-wider">
              1. Etiqueta o Siglas Elevadas
            </label>
            <input
              id={labelInputId}
              type="text"
              value={composerLabel}
              onChange={(e) => setComposerLabel(e.target.value)}
              placeholder="Ej. PRO, MVP, GOD, TM, 2026..."
              className="w-full p-3.5 rounded-xl border border-border bg-surface-2 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand font-medium text-ink"
            />
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => setComposerLabelStyle("upper")}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                  composerLabelStyle === "upper"
                    ? "bg-brand text-white border-brand"
                    : "bg-surface-2 text-muted border-border hover:text-ink"
                }`}
              >
                Mayúsculas (ᴾᴿᴼ)
              </button>
              <button
                type="button"
                onClick={() => setComposerLabelStyle("lower")}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                  composerLabelStyle === "lower"
                    ? "bg-brand text-white border-brand"
                    : "bg-surface-2 text-muted border-border hover:text-ink"
                }`}
              >
                Minúsculas (ᵖʳᵒ)
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor={nameInputId} className="text-xs font-bold text-ink-soft uppercase tracking-wider">
              2. Nombre Principal (Normal)
            </label>
            <input
              id={nameInputId}
              type="text"
              value={composerName}
              onChange={(e) => setComposerName(e.target.value)}
              placeholder="Ej. Shadow, Alex, Luna, Diego..."
              className="w-full p-3.5 rounded-xl border border-border bg-surface-2 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand font-medium text-ink"
            />
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => setComposerPos("before")}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                  composerPos === "before"
                    ? "bg-brand text-white border-brand"
                    : "bg-surface-2 text-muted border-border hover:text-ink"
                }`}
              >
                Etiqueta Antes (ᴾᴿᴼ Nombre)
              </button>
              <button
                type="button"
                onClick={() => setComposerPos("after")}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                  composerPos === "after"
                    ? "bg-brand text-white border-brand"
                    : "bg-surface-2 text-muted border-border hover:text-ink"
                }`}
              >
                Etiqueta Después (Nombre ᴾᴿᴼ)
              </button>
            </div>
          </div>
        </div>

        {/* Opciones avanzadas de juego */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-surface-2 border border-border text-xs">
          <label className="flex items-center gap-2 cursor-pointer text-ink-soft">
            <input
              type="checkbox"
              checked={useInvisibleSpace}
              onChange={(e) => setUseInvisibleSpace(e.target.checked)}
              className="w-4 h-4 accent-brand cursor-pointer rounded"
            />
            <span>Usar espacio invisible (separador compatible con Free Fire)</span>
          </label>
          <span className="text-muted">
            Límite Free Fire: <strong className={composedNick.length > 12 ? "text-red-500" : "text-emerald-600"}>
              {composedNick.length} / 12 caracteres
            </strong>
          </span>
        </div>

        {/* Tarjeta de Nick Compuesto */}
        <div className="p-5 md:p-6 rounded-2xl bg-surface-2 border border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 min-w-0 flex-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-muted">
              Nombre Compuesto Final
            </div>
            <div className="font-bold text-ink text-2xl md:text-3xl select-all break-words tracking-wide">
              {composedNick || "Escribe una etiqueta y un nombre"}
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleCopy("nick-result", composedNick)}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer shrink-0 shadow-sm ${
              copiedId === "nick-result"
                ? "bg-emerald-600 text-white"
                : "bg-brand text-white hover:bg-brand-hover"
            }`}
          >
            {copiedId === "nick-result" ? "✓ ¡Copiado!" : "Copiar Nombre"}
          </button>
        </div>

        {/* Ejemplos de 1 clic */}
        <div className="space-y-2 pt-2">
          <span className="text-xs font-bold text-muted uppercase tracking-wider">
            Ideas Rápidas de Nombres Listos para Usar:
          </span>
          <div className="flex flex-wrap gap-2">
            {NICK_PRESETS.map((p, idx) => {
              const preview =
                p.pos === "before"
                  ? `${p.style === "upper" ? toSuperscriptUpper(p.label, false) : toSuperscriptLower(p.label, false)} ${p.name}`
                  : `${p.name} ${p.style === "upper" ? toSuperscriptUpper(p.label, false) : toSuperscriptLower(p.label, false)}`;

              return (
                <button
                  key={`preset-${idx}`}
                  type="button"
                  onClick={() => {
                    setComposerLabel(p.label);
                    setComposerName(p.name);
                    setComposerPos(p.pos);
                    setComposerLabelStyle(p.style);
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-surface-2 hover:bg-surface-3 border border-border text-ink-soft cursor-pointer transition-colors"
                >
                  {preview}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════
          SECCIÓN 3: SELECTOR INDIVIDUAL DE ABECEDARIO Y NÚMEROS ARRIBA
          ═════════════════════════════════════════════════════════════════ */}
      <div className="bg-surface rounded-2xl border border-border shadow-md p-5 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Herramienta 3: Biblioteca de Glifos
            </span>
            <h2 className="text-xl md:text-2xl font-black text-ink tracking-tight">
              Abecedario de Letras y Números Arriba
            </h2>
            <p className="text-xs text-muted mt-1">
              Haz clic en cualquier letra o dígito elevado para copiarlo individualmente.
            </p>
          </div>
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-2 border border-border">
            <button
              type="button"
              onClick={() => setActivePickerTab("lower")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activePickerTab === "lower"
                  ? "bg-brand text-white shadow-xs"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              Minúsculas (a-z)
            </button>
            <button
              type="button"
              onClick={() => setActivePickerTab("upper")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activePickerTab === "upper"
                  ? "bg-brand text-white shadow-xs"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              Mayúsculas (A-Z)
            </button>
            <button
              type="button"
              onClick={() => setActivePickerTab("digits")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activePickerTab === "digits"
                  ? "bg-brand text-white shadow-xs"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              Números (0-9)
            </button>
          </div>
        </div>

        {/* Cuadrícula de Glifos */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-13 gap-2.5">
          {(activePickerTab === "lower"
            ? SUPERSCRIPT_LOWER_ALPHABET
            : activePickerTab === "upper"
            ? SUPERSCRIPT_UPPER_ALPHABET
            : SUPERSCRIPT_DIGITS
          ).map((item, idx) => (
            <button
              key={`picker-${activePickerTab}-${item.latin}-${idx}`}
              type="button"
              onClick={() => handleCopy(`char-${item.glyph}`, item.glyph)}
              title={
                item.isMissing
                  ? `${item.note || "Sin carácter nativo"}. Clic para copiar.`
                  : `${item.latin} → ${item.glyph} (${item.code}). Clic para copiar.`
              }
              className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all cursor-pointer group text-center ${
                item.isMissing
                  ? "bg-surface-2/60 border-dashed border-border hover:border-amber-400"
                  : "bg-surface-2 border-border hover:border-brand hover:bg-surface-3 shadow-2xs hover:shadow-xs"
              }`}
            >
              <span className="text-2xl font-bold text-ink group-hover:scale-115 transition-transform">
                {item.glyph}
              </span>
              <span className="text-[10px] text-muted font-medium mt-1">
                {item.latin}
              </span>
              <span className="text-[9px] text-faint truncate max-w-full">
                {item.isMissing ? "Falta" : item.code}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Modal de Copia Manual (Fallback) ── */}
      {manualCopyText !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-surface rounded-2xl border border-border p-6 max-w-md w-full shadow-2xl space-y-4">
            <h3 className="font-extrabold text-ink text-base">Copia tu texto manualmente</h3>
            <p className="text-xs text-muted">
              El navegador bloqueó el portapapeles automático. Selecciona y copia el texto del recuadro a continuación:
            </p>
            <input
              type="text"
              readOnly
              value={manualCopyText}
              autoFocus
              onFocus={(e) => e.target.select()}
              className="w-full p-3 rounded-xl border border-border bg-surface-2 text-ink font-medium select-all"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setManualCopyText(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-brand text-white hover:bg-brand-hover cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Notificación Toast ── */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-ink text-white font-bold text-xs shadow-lg flex items-center gap-2 animate-bounce">
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
