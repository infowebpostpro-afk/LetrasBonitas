"use client";

import React, { useState, useId, useMemo } from "react";
import { copyText } from "@/lib/clipboard";
import {
  BLANK_SPACE_CHARACTERS,
  DEFAULT_BLANK_SPACE,
  BlankSpaceCharacter,
  inspectBlankSpaceText,
  generateBlankSpaceSequence,
} from "@/lib/unicode/blankSpaceCharactersData";

type SectionTab = "quick" | "selector" | "generator" | "preview" | "checker";

export function EspacioEnBlancoTool() {
  const [activeTab, setActiveTab] = useState<SectionTab>("quick");

  // Selected space character across the tool
  const [selectedSpace, setSelectedSpace] = useState<BlankSpaceCharacter>(DEFAULT_BLANK_SPACE);

  // ── SECTION A: Quick Copy State ──
  const [quickCopied, setQuickCopied] = useState(false);
  const [showManualQuick, setShowManualQuick] = useState(false);
  const [quickManualCopied, setQuickManualCopied] = useState(false);

  // ── SECTION C: Generator State ──
  const [quantity, setQuantity] = useState<number>(10);
  const [quantityInput, setQuantityInput] = useState<string>("10");
  const [quantityError, setQuantityError] = useState<string>("");
  const [isMultiline, setIsMultiline] = useState<boolean>(false);
  const [charsPerLine, setCharsPerLine] = useState<number>(5);
  const [genCopied, setGenCopied] = useState(false);
  const [genManualCopied, setGenManualCopied] = useState(false);
  const [showGenManual, setShowGenManual] = useState(false);

  // ── SECTION D: Spacing Preview State ──
  const [leftText, setLeftText] = useState<string>("Hola");
  const [rightText, setRightText] = useState<string>("Mundo");
  const [previewCopied, setPreviewCopied] = useState(false);

  // ── SECTION D: Paste Checker State ──
  const [checkerText, setCheckerText] = useState<string>("");

  // Unique IDs for accessibility
  const quickFallbackInputId = useId();
  const genQuantityInputId = useId();
  const genFallbackInputId = useId();
  const leftTextInputId = useId();
  const rightTextInputId = useId();
  const checkerTextareaId = useId();

  // Handlers for Quick Copy
  const handleQuickCopy = async () => {
    const success = await copyText(selectedSpace.char);
    if (success) {
      setQuickCopied(true);
      setTimeout(() => setQuickCopied(false), 2400);
    } else {
      setShowManualQuick(true);
    }
  };

  const handleManualQuickSelect = () => {
    const el = document.getElementById(quickFallbackInputId) as HTMLInputElement | null;
    if (el) {
      el.focus();
      el.select();
      if ("setSelectionRange" in el) {
        el.setSelectionRange(0, el.value.length);
      }
      setQuickManualCopied(true);
      setTimeout(() => setQuickManualCopied(false), 2400);
    }
  };

  // Handlers for Generator
  const handleQuantityChange = (valStr: string) => {
    setQuantityInput(valStr);
    const parsed = Number(valStr);
    if (!valStr.trim() || isNaN(parsed) || !Number.isInteger(parsed) || parsed < 1 || parsed > 500) {
      setQuantityError("Introduce un número entero entre 1 y 500.");
    } else {
      setQuantityError("");
      setQuantity(parsed);
    }
  };

  const handlePresetClick = (num: number) => {
    setQuantity(num);
    setQuantityInput(String(num));
    setQuantityError("");
  };

  const generatedSequence = useMemo(() => {
    if (quantityError) return { text: "", codePointCount: 0, lineCount: 0 };
    return generateBlankSpaceSequence(selectedSpace.char, quantity, isMultiline, charsPerLine);
  }, [selectedSpace.char, quantity, isMultiline, charsPerLine, quantityError]);

  const generatedUtf8Bytes = useMemo(() => {
    if (!generatedSequence.text) return 0;
    if (typeof TextEncoder !== "undefined") {
      return new TextEncoder().encode(generatedSequence.text).length;
    }
    return generatedSequence.text.length * 3;
  }, [generatedSequence.text]);

  const handleGenCopy = async () => {
    if (!generatedSequence.text) return;
    const success = await copyText(generatedSequence.text);
    if (success) {
      setGenCopied(true);
      setTimeout(() => setGenCopied(false), 2400);
    } else {
      setShowGenManual(true);
    }
  };

  const handleManualGenSelect = () => {
    const el = document.getElementById(genFallbackInputId) as HTMLTextAreaElement | null;
    if (el) {
      el.focus();
      el.select();
      if ("setSelectionRange" in el) {
        el.setSelectionRange(0, el.value.length);
      }
      setGenManualCopied(true);
      setTimeout(() => setGenManualCopied(false), 2400);
    }
  };

  const handleResetGenerator = () => {
    setQuantity(10);
    setQuantityInput("10");
    setQuantityError("");
    setIsMultiline(false);
    setCharsPerLine(5);
    setShowGenManual(false);
  };

  // Handlers for Preview
  const previewCombinedText = useMemo(() => {
    return `${leftText}${selectedSpace.char}${rightText}`;
  }, [leftText, selectedSpace.char, rightText]);

  const handlePreviewCopy = async () => {
    const success = await copyText(previewCombinedText);
    if (success) {
      setPreviewCopied(true);
      setTimeout(() => setPreviewCopied(false), 2400);
    }
  };

  // Inspection evaluation for Checker
  const checkerInspection = useMemo(() => {
    return inspectBlankSpaceText(checkerText);
  }, [checkerText]);

  return (
    <div className="w-full max-w-4xl mx-auto my-6 space-y-6">
      {/* ── SaaS Navigation Tabs ── */}
      <nav
        aria-label="Herramientas de espacio en blanco"
        className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80 overflow-x-auto scrollbar-none"
      >
        <button
          type="button"
          onClick={() => setActiveTab("quick")}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1.5 ${
            activeTab === "quick"
              ? "bg-white text-teal-800 shadow-sm font-semibold border border-slate-200/60"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-teal-500" />
          Copiar Rápido
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("selector")}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1.5 ${
            activeTab === "selector"
              ? "bg-white text-teal-800 shadow-sm font-semibold border border-slate-200/60"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          Tipos de Espacio ({BLANK_SPACE_CHARACTERS.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("generator")}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1.5 ${
            activeTab === "generator"
              ? "bg-white text-teal-800 shadow-sm font-semibold border border-slate-200/60"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Generador
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("preview")}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1.5 ${
            activeTab === "preview"
              ? "bg-white text-teal-800 shadow-sm font-semibold border border-slate-200/60"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          Vista Previa
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("checker")}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1.5 ${
            activeTab === "checker"
              ? "bg-white text-teal-800 shadow-sm font-semibold border border-slate-200/60"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          Comprobador
        </button>
      </nav>

      {/* ── SECTION A: Copiar Espacio en Blanco (Active when 'quick') ── */}
      {activeTab === "quick" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200/60">
                1 Clic para Copiar
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                Copiar Espacio en Blanco
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Copia un espacio en blanco de inmediato. El carácter activo por defecto es{" "}
                <span className="font-semibold text-slate-800">{selectedSpace.spanishName}</span> ({selectedSpace.codePoint}), el más efectivo para evitar borrados automáticos.
              </p>
            </div>

            {/* Quick Character Picker Pill */}
            <div className="flex items-center gap-2 self-start sm:self-center">
              <label htmlFor="quick-char-picker" className="text-xs font-medium text-slate-500">
                Tipo:
              </label>
              <select
                id="quick-char-picker"
                value={selectedSpace.id}
                onChange={(e) => {
                  const found = BLANK_SPACE_CHARACTERS.find((c) => c.id === e.target.value);
                  if (found) setSelectedSpace(found);
                }}
                className="text-xs font-semibold text-teal-900 bg-teal-50/80 border border-teal-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {BLANK_SPACE_CHARACTERS.map((char) => (
                  <option key={char.id} value={char.id}>
                    {char.spanishName} ({char.codePoint})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Character Details Pill Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-500 block">Punto de código:</span>
              <span className="font-mono font-bold text-slate-800">{selectedSpace.codePoint}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Categoría Unicode:</span>
              <span className="font-medium text-slate-800 truncate block">{selectedSpace.unicodeGeneralCategory}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Ancho visual:</span>
              <span className="font-medium text-teal-700 block">{selectedSpace.widthLabel}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Propiedad White_Space:</span>
              <span className={`font-semibold ${selectedSpace.whiteSpaceProperty ? "text-amber-600" : "text-emerald-700"}`}>
                {selectedSpace.whiteSpaceProperty ? "Sí (Espacio)" : "No (Glifo especial)"}
              </span>
            </div>
          </div>

          {/* Primary Big CTA Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={handleQuickCopy}
              className={`flex-1 py-4 px-6 rounded-2xl text-base sm:text-lg font-bold text-white shadow-md transition-all duration-200 flex items-center justify-center gap-3 ${
                quickCopied
                  ? "bg-emerald-600 shadow-emerald-200 scale-[0.99]"
                  : "bg-teal-600 hover:bg-teal-700 active:scale-[0.98] shadow-teal-200"
              }`}
            >
              {quickCopied ? (
                <>
                  <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>¡Espacio copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copiar espacio en blanco</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setShowManualQuick(!showManualQuick)}
              className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-800 transition-colors"
            >
              {showManualQuick ? "Ocultar manual" : "Selección manual"}
            </button>
          </div>

          {/* Manual Selection Fallback */}
          {showManualQuick && (
            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900">
                  Respaldo de Selección Manual (si el portapapeles está bloqueado):
                </span>
                <span className="text-[11px] text-amber-700">Toca el campo y pulsa Copiar</span>
              </div>
              <div className="flex gap-2">
                <input
                  id={quickFallbackInputId}
                  type="text"
                  readOnly
                  value={selectedSpace.char}
                  className="flex-1 bg-white border border-amber-300 rounded-xl px-3 py-2 text-sm font-mono text-center text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="button"
                  onClick={handleManualQuickSelect}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  {quickManualCopied ? "¡Seleccionado!" : "Seleccionar"}
                </button>
              </div>
            </div>
          )}

          {/* Quick Explanation Card */}
          <div className="p-4 bg-teal-50/50 rounded-2xl border border-teal-100/80 text-xs text-slate-600 space-y-2">
            <p className="font-semibold text-teal-950">
              ¿Por qué {selectedSpace.spanishName} ({selectedSpace.codePoint})?
            </p>
            <p>{selectedSpace.description}</p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-slate-500 font-medium mr-1">Recomendado para:</span>
              {selectedSpace.recommendedFor.map((item, idx) => (
                <span key={idx} className="bg-white text-teal-800 px-2 py-0.5 rounded-md border border-teal-200/50 text-[11px]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── SECTION B: Tipos de Espacio (Active when 'selector') ── */}
      {activeTab === "selector" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              Comparativa Unicode
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              Elegir Tipo de Espacio en Blanco
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              No todos los espacios en blanco se comportan igual. Haz clic en cualquiera de las siguientes opciones para seleccionarlo y utilizarlo en la herramienta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BLANK_SPACE_CHARACTERS.map((char) => {
              const isSelected = selectedSpace.id === char.id;
              return (
                <div
                  key={char.id}
                  onClick={() => setSelectedSpace(char)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? "bg-teal-50/60 border-teal-500 ring-2 ring-teal-500/20 shadow-sm"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900">{char.spanishName}</span>
                        <code className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                          {char.codePoint}
                        </code>
                      </div>
                      {isSelected && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-600 text-white">
                          Activo
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5 text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-medium">
                        {char.widthLabel}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                        {char.unicodeGeneralCategory}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {char.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100/80 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-500">
                      Entidad: <code className="font-mono text-slate-700">{char.htmlEntity}</code>
                    </span>
                    <button
                      type="button"
                      onClick={async (e) => {
                        e.stopPropagation();
                        setSelectedSpace(char);
                        const success = await copyText(char.char);
                        if (success) {
                          alert(`¡${char.spanishName} (${char.codePoint}) copiado!`);
                        }
                      }}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-semibold text-teal-700 hover:bg-teal-100/60 transition-colors"
                    >
                      Copiar directo
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── SECTION C: Generador de Espacios en Blanco (Active when 'generator') ── */}
      {activeTab === "generator" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                Cantidad a Medida
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                Generador de Espacios en Blanco
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Genera secuencias exactas de espacios con el carácter{" "}
                <span className="font-semibold text-slate-800">{selectedSpace.spanishName}</span> ({selectedSpace.codePoint}).
              </p>
            </div>

            <button
              type="button"
              onClick={handleResetGenerator}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 self-start sm:self-center px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50"
            >
              Restablecer
            </button>
          </div>

          {/* Presets and Custom Quantity */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor={genQuantityInputId} className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Cantidad de espacios:
              </label>
              <span className="text-xs text-slate-500">Rango permitido: 1 a 500</span>
            </div>

            {/* Presets buttons */}
            <div className="flex flex-wrap gap-2">
              {[1, 5, 10, 20, 50, 100].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handlePresetClick(preset)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    quantity === preset && !quantityError
                      ? "bg-teal-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {preset} {preset === 1 ? "espacio" : "espacios"}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="flex gap-2 items-center pt-2">
              <input
                id={genQuantityInputId}
                type="number"
                min={1}
                max={500}
                value={quantityInput}
                onChange={(e) => handleQuantityChange(e.target.value)}
                placeholder="1 - 500"
                className={`w-32 px-3 py-2 text-sm font-semibold rounded-xl border focus:outline-none focus:ring-2 ${
                  quantityError
                    ? "border-red-400 focus:ring-red-400 text-red-600"
                    : "border-slate-300 focus:ring-teal-500 text-slate-800"
                }`}
              />
              {quantityError && (
                <span className="text-xs font-semibold text-red-600">{quantityError}</span>
              )}
            </div>
          </div>

          {/* Advanced Multi-line Option */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isMultiline}
                  onChange={(e) => setIsMultiline(e.target.checked)}
                  className="rounded text-teal-600 focus:ring-teal-500 h-4 w-4"
                />
                <span className="text-xs font-bold text-slate-800">
                  Generar en varias líneas (saltos de línea)
                </span>
              </label>
              {isMultiline && (
                <span className="text-xs text-indigo-700 font-medium">
                  {generatedSequence.lineCount} líneas generadas
                </span>
              )}
            </div>

            {isMultiline && (
              <div className="flex items-center gap-3 pt-2">
                <label className="text-xs text-slate-600">Espacios por línea:</label>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={charsPerLine}
                  onChange={(e) => setCharsPerLine(Math.max(1, Math.min(50, Number(e.target.value) || 1)))}
                  className="w-20 px-2 py-1 text-xs font-bold rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            )}
          </div>

          {/* Live Output Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-500 block">Puntos de código:</span>
              <span className="font-mono font-bold text-slate-800">{generatedSequence.codePointCount}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Bytes UTF-8:</span>
              <span className="font-mono font-bold text-slate-800">{generatedUtf8Bytes} bytes</span>
            </div>
            <div>
              <span className="text-slate-500 block">Carácter utilizado:</span>
              <span className="font-medium text-slate-800">{selectedSpace.codePoint}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Líneas totales:</span>
              <span className="font-medium text-slate-800">{generatedSequence.lineCount}</span>
            </div>
          </div>

          {/* Generator Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              disabled={Boolean(quantityError)}
              onClick={handleGenCopy}
              className={`flex-1 py-3.5 px-6 rounded-2xl text-base font-bold text-white shadow-md transition-all duration-200 flex items-center justify-center gap-2.5 ${
                quantityError
                  ? "bg-slate-300 cursor-not-allowed"
                  : genCopied
                  ? "bg-emerald-600 shadow-emerald-200"
                  : "bg-teal-600 hover:bg-teal-700 active:scale-[0.98] shadow-teal-200"
              }`}
            >
              {genCopied ? (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>¡{quantity} espacios copiados!</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copiar {quantity} espacios</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setShowGenManual(!showGenManual)}
              className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200"
            >
              {showGenManual ? "Ocultar manual" : "Selección manual"}
            </button>
          </div>

          {/* Generator Manual Fallback */}
          {showGenManual && (
            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl space-y-3">
              <span className="text-xs font-bold text-amber-900 block">
                Selección manual de la secuencia generada:
              </span>
              <textarea
                id={genFallbackInputId}
                readOnly
                rows={3}
                value={generatedSequence.text}
                className="w-full bg-white border border-amber-300 rounded-xl p-3 text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="button"
                onClick={handleManualGenSelect}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition-colors"
              >
                {genManualCopied ? "¡Texto seleccionado!" : "Seleccionar todo el bloque"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── SECTION D: Vista Previa (Active when 'preview') ── */}
      {activeTab === "preview" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/60">
              Diferenciador Visual
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              Vista Previa de Espaciado entre Palabras
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Comprueba el comportamiento y ancho visual real del carácter seleccionado entre dos fragmentos de texto visible.
            </p>
          </div>

          {/* Text Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={leftTextInputId} className="text-xs font-bold text-slate-700 block mb-1">
                Texto izquierdo:
              </label>
              <input
                id={leftTextInputId}
                type="text"
                value={leftText}
                onChange={(e) => setLeftText(e.target.value)}
                placeholder="Ejemplo: Hola"
                className="w-full px-3 py-2 text-sm font-semibold rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
              />
            </div>
            <div>
              <label htmlFor={rightTextInputId} className="text-xs font-bold text-slate-700 block mb-1">
                Texto derecho:
              </label>
              <input
                id={rightTextInputId}
                type="text"
                value={rightText}
                onChange={(e) => setRightText(e.target.value)}
                placeholder="Ejemplo: Mundo"
                className="w-full px-3 py-2 text-sm font-semibold rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
              />
            </div>
          </div>

          {/* Visual Container with Boundary Markers */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/90 space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
              Resultado Visual en Tiempo Real:
            </span>

            <div className="p-4 bg-white rounded-xl border border-slate-300 text-center text-lg sm:text-xl font-medium text-slate-900 tracking-normal select-text">
              <span>{leftText}</span>
              <span
                title={`${selectedSpace.spanishName} (${selectedSpace.codePoint})`}
                className="inline-block border-2 border-dashed border-teal-500 bg-teal-50/70 text-teal-800 px-1 mx-0.5 rounded transition-all"
              >
                {selectedSpace.char}
              </span>
              <span>{rightText}</span>
            </div>

            <p className="text-[11px] text-slate-500 text-center">
              * El recuadro discontinuo verde resalta la zona del carácter ({selectedSpace.codePoint} - {selectedSpace.widthLabel}). Este marco visual no se copia.
            </p>
          </div>

          {/* Preview Copy Action */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handlePreviewCopy}
              className={`flex-1 py-3 px-5 rounded-xl text-sm font-bold text-white shadow-sm transition-all ${
                previewCopied
                  ? "bg-emerald-600"
                  : "bg-amber-600 hover:bg-amber-700"
              }`}
            >
              {previewCopied ? "¡Texto con espacio copiado!" : "Copiar texto completo con el espacio"}
            </button>

            <button
              type="button"
              onClick={handleQuickCopy}
              className="py-3 px-5 rounded-xl text-sm font-bold text-teal-800 bg-teal-50 border border-teal-200 hover:bg-teal-100 transition-colors"
            >
              Copiar únicamente el espacio ({selectedSpace.codePoint})
            </button>
          </div>
        </div>
      )}

      {/* ── SECTION D: Comprobador (Active when 'checker') ── */}
      {activeTab === "checker" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/60">
              Verificación Honesta
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              Comprobador de Caracteres en Blanco Pegados
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Pega aquí el contenido copiado para inspeccionar qué caracteres Unicode contiene exactamente y verificar si tiene caracteres especiales.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor={checkerTextareaId} className="text-xs font-bold text-slate-700">
                Pega tu texto en este recuadro:
              </label>
              {checkerText && (
                <button
                  type="button"
                  onClick={() => setCheckerText("")}
                  className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
                >
                  Limpiar campo
                </button>
              )}
            </div>

            <textarea
              id={checkerTextareaId}
              rows={4}
              value={checkerText}
              onChange={(e) => setCheckerText(e.target.value)}
              placeholder="Haz clic aquí y presiona Pegar (Ctrl+V o Mantener pulsado)..."
              className="w-full bg-slate-50/70 border border-slate-300 rounded-2xl p-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Live Checker Inspection Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-500 block">Puntos de código:</span>
              <span className="font-mono font-bold text-slate-800">{checkerInspection.totalCodePoints}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Bytes UTF-8:</span>
              <span className="font-mono font-bold text-slate-800">{checkerInspection.totalUtf8Bytes}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Espacios/Especiales:</span>
              <span className={`font-bold ${checkerInspection.totalBlankChars > 0 ? "text-purple-700" : "text-slate-700"}`}>
                {checkerInspection.totalBlankChars}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">Caracteres visibles:</span>
              <span className="font-medium text-slate-800">{checkerInspection.totalVisibleChars}</span>
            </div>
          </div>

          {/* Detected Occurrences Breakdown */}
          {checkerInspection.blankOccurrences.length > 0 && (
            <div className="p-4 bg-purple-50/60 rounded-2xl border border-purple-200/70 space-y-2">
              <span className="text-xs font-bold text-purple-950 block">
                Caracteres de espacio o especiales detectados:
              </span>
              <div className="flex flex-wrap gap-2">
                {checkerInspection.blankOccurrences.map((occ, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-purple-300 rounded-xl text-xs font-medium text-purple-900 shadow-2xs"
                  >
                    <span className="font-bold text-purple-700">{occ.count}×</span>
                    <span>{occ.character.spanishName}</span>
                    <code className="font-mono text-[11px] text-slate-500">({occ.character.codePoint})</code>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Honesty Disclosure Banner */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-800 block mb-1">
              Nota sobre compatibilidad externa:
            </span>
            Pegar exitosamente tu texto en este comprobador demuestra que el carácter reside intacto en tu portapapeles y navegador. Sin embargo, no garantiza que plataformas externas (juegos o redes sociales con filtros estrictos en sus servidores) no eliminen o sustituyan el carácter al enviarlo.
          </div>
        </div>
      )}
    </div>
  );
}
