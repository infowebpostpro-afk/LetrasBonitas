"use client";

import React, { useState, useId, useMemo } from "react";
import { copyText } from "@/lib/clipboard";
import {
  INVISIBLE_CHARACTERS,
  DEFAULT_INVISIBLE_CHARACTER,
  InvisibleCharacter,
  inspectText,
  generateInvisibleSequence,
} from "@/lib/unicode/invisibleCharactersData";

type ToolTab = "quick" | "generator" | "detector";

export function TextoInvisibleTool() {
  const [activeTab, setActiveTab] = useState<ToolTab>("quick");

  // ── Tool A State (Quick Copy) ──
  const [quickSelected, setQuickSelected] = useState<InvisibleCharacter>(DEFAULT_INVISIBLE_CHARACTER);
  const [quickCopied, setQuickCopied] = useState(false);
  const [quickTestText, setQuickTestText] = useState("");
  const [showManualQuick, setShowManualQuick] = useState(false);
  const [quickManualCopied, setQuickManualCopied] = useState(false);

  // ── Tool B State (Generator) ──
  const [genSelected, setGenSelected] = useState<InvisibleCharacter>(DEFAULT_INVISIBLE_CHARACTER);
  const [quantity, setQuantity] = useState<number>(10);
  const [quantityInput, setQuantityInput] = useState<string>("10");
  const [quantityError, setQuantityError] = useState<string>("");
  const [genCopied, setGenCopied] = useState(false);

  // ── Tool C State (Detector) ──
  const [detectorText, setDetectorText] = useState<string>("");

  const quickInputId = useId();
  const genSelectId = useId();
  const genQuantityId = useId();
  const detectorTextareaId = useId();

  // Handlers for Tool A
  const handleQuickCopy = async () => {
    const success = await copyText(quickSelected.char);
    if (success) {
      setQuickCopied(true);
      setTimeout(() => setQuickCopied(false), 2400);
    } else {
      setShowManualQuick(true);
    }
  };

  const handleManualQuickSelect = (elementId: string) => {
    const el = document.getElementById(elementId) as HTMLInputElement | HTMLTextAreaElement | null;
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

  // Quick Test evaluation
  const quickTestInspection = useMemo(() => {
    return inspectText(quickTestText);
  }, [quickTestText]);

  // Handlers for Tool B
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

  const handlePresetClick = (presetNum: number) => {
    setQuantity(presetNum);
    setQuantityInput(String(presetNum));
    setQuantityError("");
  };

  const generatedPayload = quantityError ? "" : generateInvisibleSequence(genSelected.char, quantity);
  const generatedUtf8Bytes = generatedPayload
    ? typeof TextEncoder !== "undefined"
      ? new TextEncoder().encode(generatedPayload).length
      : generatedPayload.length * 3
    : 0;

  const handleGenCopy = async () => {
    if (!generatedPayload) return;
    const success = await copyText(generatedPayload);
    if (success) {
      setGenCopied(true);
      setTimeout(() => setGenCopied(false), 2400);
    }
  };

  // Handlers for Tool C
  const inspection = useMemo(() => inspectText(detectorText), [detectorText]);

  const handleLoadSample = () => {
    setDetectorText("FreeFire\u3164Nick\u28002026\u200B✓");
  };

  const quickPresets = [
    {
      item: INVISIBLE_CHARACTERS[0], // U+3164
      badge: "Más popular",
      label: "Free Fire y Juegos",
      sub: "U+3164 (Relleno Hangul)",
      icon: "🎮",
    },
    {
      item: INVISIBLE_CHARACTERS[1], // U+2800
      badge: "WhatsApp",
      label: "Mensaje Vacío",
      sub: "U+2800 (Blanco Braille)",
      icon: "💬",
    },
    {
      item: INVISIBLE_CHARACTERS[2], // U+200B
      badge: "0 Píxeles",
      label: "Ancho Cero",
      sub: "U+200B (Zero Width)",
      icon: "✂️",
    },
    {
      item: INVISIBLE_CHARACTERS[3], // U+00A0
      badge: "Web / Docs",
      label: "Espacio Indivisible",
      sub: "U+00A0 (No-Break Space)",
      icon: "📄",
    },
  ];

  return (
    <div className="w-full" id="herramienta-texto-invisible">
      {/* ═══ UNIFIED SAAS TOOL CONTAINER ═══ */}
      <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-lg sm:p-7">
        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 pb-3 mb-6 gap-2 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab("quick")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "quick"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
            aria-selected={activeTab === "quick"}
            role="tab"
          >
            <span>⚡</span>
            <span>Copia Rápida</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("generator")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "generator"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
            aria-selected={activeTab === "generator"}
            role="tab"
          >
            <span>🔢</span>
            <span>Generar Cantidad</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("detector")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "detector"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
            aria-selected={activeTab === "detector"}
            role="tab"
          >
            <span>🔍</span>
            <span>Probar y Detectar</span>
          </button>
        </div>

        {/* ═══════════════════════════════════════════════════════
            TAB 1: COPIA RÁPIDA (1 CLIC)
            ═══════════════════════════════════════════════════════ */}
        {activeTab === "quick" && (
          <div className="space-y-6">
            {/* Hero Copy Box */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-50/80 via-white to-slate-50 border border-indigo-100 p-6 text-center shadow-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 mb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Listo para copiar y usar en 1 clic
              </span>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 m-0 mb-2 border-0 p-0">
                {quickSelected.spanishName} ({quickSelected.codePoint})
              </h2>

              <p className="text-sm text-slate-600 max-w-lg mx-auto m-0 mb-6 leading-relaxed">
                {quickSelected.description}
              </p>

              {/* Big Prominent Copy Button */}
              <div className="max-w-md mx-auto">
                <button
                  type="button"
                  onClick={handleQuickCopy}
                  className={`w-full min-h-[56px] flex items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base sm:text-lg font-black text-white shadow-lg transition-all cursor-pointer ${
                    quickCopied
                      ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/30 scale-[1.02]"
                      : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/25 hover:scale-[1.02] active:scale-[0.99]"
                  }`}
                  aria-label={`Copiar espacio invisible ${quickSelected.spanishName}`}
                >
                  {quickCopied ? (
                    <>
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>¡Copiado! Ya puedes pegarlo</span>
                    </>
                  ) : (
                    <>
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                      <span>Copiar Espacio Invisible</span>
                    </>
                  )}
                </button>
              </div>

              {/* Screen reader live update */}
              <div className="sr-only" aria-live="polite">
                {quickCopied && `El carácter invisible ${quickSelected.spanishName} ha sido copiado al portapapeles.`}
              </div>

              {/* Manual Selection Link if clipboard API has restrictions */}
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setShowManualQuick(!showManualQuick)}
                  className="text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors underline cursor-pointer"
                >
                  {showManualQuick ? "Ocultar opción manual" : "¿El botón no copia? Haz clic para copiar manualmente"}
                </button>
              </div>

              {showManualQuick && (
                <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50/80 p-3 max-w-md mx-auto text-left">
                  <p className="text-xs text-amber-900 font-semibold mb-2 m-0">
                    Selección directa: pulsa el botón para resaltar el carácter y usa Ctrl+C / Cmd+C:
                  </p>
                  <div className="flex gap-2">
                    <label htmlFor={quickInputId} className="sr-only">
                      Espacio invisible para copia manual
                    </label>
                    <input
                      id={quickInputId}
                      type="text"
                      readOnly
                      value={quickSelected.char}
                      className="flex-1 rounded-lg border border-amber-300 bg-white px-3 py-1.5 font-mono text-sm select-all"
                    />
                    <button
                      type="button"
                      onClick={() => handleManualQuickSelect(quickInputId)}
                      className="px-3.5 py-1.5 rounded-lg bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      {quickManualCopied ? "¡Listo!" : "Resaltar"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Presets Selection */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                O elige según tu aplicación:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {quickPresets.map(({ item, badge, label, sub, icon }) => {
                  const isSelected = quickSelected.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setQuickSelected(item);
                        setQuickCopied(false);
                      }}
                      className={`flex flex-col p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "border-indigo-600 bg-indigo-50/90 shadow-sm ring-2 ring-indigo-600/20"
                          : "border-slate-200 bg-slate-50/60 hover:bg-slate-100 hover:border-slate-300"
                      }`}
                      aria-pressed={isSelected}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-lg">{icon}</span>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                          {badge}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-slate-900 mt-0.5">{label}</span>
                      <span className="text-xs font-mono text-slate-500 mt-0.5">{sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Instant Quick-Test Input (User verification within seconds) */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <span>🧪</span>
                  <span>Comprobación instantánea</span>
                </span>
                {quickTestText && (
                  <button
                    type="button"
                    onClick={() => setQuickTestText("")}
                    className="text-xs text-rose-600 hover:underline font-semibold cursor-pointer"
                  >
                    Borrar
                  </button>
                )}
              </div>

              <input
                type="text"
                value={quickTestText}
                onChange={(e) => setQuickTestText(e.target.value)}
                placeholder="Pega aquí (Ctrl+V) para comprobar de inmediato que se copió..."
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
              />

              {quickTestText && (
                <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs">
                  {quickTestInspection.totalInvisibleChars > 0 ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                      <span>✓</span>
                      <span>
                        ¡Verificado! Contiene {quickTestInspection.totalInvisibleChars}{" "}
                        {quickTestInspection.totalInvisibleChars === 1 ? "carácter invisible" : "caracteres invisibles"} (
                        {quickTestInspection.invisibleOccurrences.map((o) => o.character.codePoint).join(", ")})
                      </span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold">
                      <span>ℹ</span>
                      <span>No se detectaron caracteres invisibles especiales en el texto pegado.</span>
                    </span>
                  )}
                  <span className="text-slate-500 font-mono">
                    Total bytes: {quickTestInspection.totalUtf8Bytes} B
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════
            TAB 2: GENERADOR POR CANTIDAD
            ═══════════════════════════════════════════════════════ */}
        {activeTab === "generator" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 m-0 mb-1 border-0 p-0">
                Generador de Texto Invisible Multiplicado
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 m-0">
                Genera de 1 a 500 caracteres continuos con un solo clic. Ideal para mensajes largos o separaciones especiales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Controls */}
              <div className="space-y-4">
                <div>
                  <label htmlFor={genSelectId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Tipo de carácter invisible:
                  </label>
                  <select
                    id={genSelectId}
                    value={genSelected.id}
                    onChange={(e) => {
                      const found = INVISIBLE_CHARACTERS.find((c) => c.id === e.target.value);
                      if (found) {
                        setGenSelected(found);
                        setGenCopied(false);
                      }
                    }}
                    className="w-full rounded-xl border border-slate-300 bg-white p-3 text-sm font-semibold text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                  >
                    {INVISIBLE_CHARACTERS.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.spanishName} ({c.codePoint}) {c.hasWidth ? "- Con ancho" : "- Ancho 0px"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Cantidades rápidas sugeridas:
                  </span>
                  <div className="grid grid-cols-6 gap-1.5">
                    {[1, 5, 10, 20, 50, 100].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => handlePresetClick(preset)}
                        className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          quantity === preset && !quantityError
                            ? "bg-indigo-600 text-white shadow-sm"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                        }`}
                      >
                        ×{preset}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor={genQuantityId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    O escribe la cantidad exacta (1 a 500):
                  </label>
                  <input
                    id={genQuantityId}
                    type="number"
                    min={1}
                    max={500}
                    value={quantityInput}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                    className={`w-full rounded-xl border p-3 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 ${
                      quantityError
                        ? "border-rose-400 bg-rose-50/50 focus:ring-rose-500/20"
                        : "border-slate-300 bg-white focus:border-indigo-600 focus:ring-indigo-600/20"
                    }`}
                  />
                  {quantityError && (
                    <p className="mt-1 text-xs font-semibold text-rose-600 m-0">
                      {quantityError}
                    </p>
                  )}
                </div>
              </div>

              {/* Output Preview & Action */}
              <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Resultado generado
                    </span>
                    <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                      {quantityError ? "Error" : `${quantity} caracteres`}
                    </span>
                  </div>

                  <div className="min-h-[85px] rounded-lg border-2 border-dashed border-slate-300 bg-white p-3 font-mono text-sm select-all">
                    {quantityError ? (
                      <span className="text-xs text-rose-500">{quantityError}</span>
                    ) : (
                      <>
                        <span className="text-slate-900 select-all">{generatedPayload}</span>
                        <span className="text-slate-400 text-xs italic pointer-events-none block mt-2 select-none">
                          (Cadena invisible de {quantity} repeticiones lista para copiar)
                        </span>
                      </>
                    )}
                  </div>

                  <div className="mt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>Puntos: <strong>{quantityError ? 0 : quantity}</strong></span>
                    <span>Bytes UTF-8: <strong>{generatedUtf8Bytes} B</strong></span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex gap-2">
                  <button
                    type="button"
                    disabled={Boolean(quantityError)}
                    onClick={handleGenCopy}
                    className={`flex-1 min-h-[46px] flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white shadow transition-all cursor-pointer ${
                      quantityError
                        ? "bg-slate-300 cursor-not-allowed"
                        : genCopied
                        ? "bg-emerald-600"
                        : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
                  >
                    {genCopied ? (
                      <>
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>¡Copiados {quantity} caracteres!</span>
                      </>
                    ) : (
                      <>
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                        <span>Copiar {quantity} caracteres</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════
            TAB 3: DETECTOR E INSPECTOR
            ═══════════════════════════════════════════════════════ */}
        {activeTab === "detector" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 m-0 mb-1 border-0 p-0">
                  Detector e Inspector de Texto Oculto
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 m-0">
                  Pega cualquier texto para revelar de inmediato cuántos caracteres invisibles contiene y en qué posición están.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleLoadSample}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Probar ejemplo
                </button>
                {detectorText && (
                  <button
                    type="button"
                    onClick={() => setDetectorText("")}
                    className="px-3 py-1.5 rounded-lg border border-rose-200 bg-rose-50 text-xs font-semibold text-rose-700 hover:bg-rose-100 transition-colors cursor-pointer"
                  >
                    Limpiar
                  </button>
                )}
              </div>
            </div>

            {/* Textarea */}
            <div>
              <label htmlFor={detectorTextareaId} className="sr-only">
                Texto para analizar
              </label>
              <textarea
                id={detectorTextareaId}
                rows={3}
                value={detectorText}
                onChange={(e) => setDetectorText(e.target.value)}
                placeholder="Pega aquí el texto que quieras analizar (por ejemplo, tu apodo o mensaje)..."
                className="w-full rounded-xl border border-slate-300 p-3.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
              />
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                <span className="block text-xs font-medium text-slate-500">Puntos de código</span>
                <span className="text-lg font-bold text-slate-900 font-mono">{inspection.totalCodePoints}</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                <span className="block text-xs font-medium text-slate-500">Caracteres visibles</span>
                <span className="text-lg font-bold text-slate-900 font-mono">{inspection.totalVisibleChars}</span>
              </div>
              <div className={`rounded-xl border p-3 text-center ${
                inspection.totalInvisibleChars > 0
                  ? "border-amber-300 bg-amber-50 text-amber-900"
                  : "border-slate-200 bg-slate-50 text-slate-900"
              }`}>
                <span className="block text-xs font-medium text-slate-500">Invisibles detectados</span>
                <span className="text-lg font-bold font-mono text-indigo-700">{inspection.totalInvisibleChars}</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                <span className="block text-xs font-medium text-slate-500">Bytes UTF-8</span>
                <span className="text-lg font-bold text-slate-900 font-mono">{inspection.totalUtf8Bytes} B</span>
              </div>
            </div>

            {/* Visual Token Map */}
            {inspection.totalInvisibleChars > 0 ? (
              <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 space-y-3">
                <span className="block text-xs font-bold uppercase tracking-wider text-amber-900">
                  Ubicación de caracteres en tu texto:
                </span>
                <div className="flex flex-wrap items-center gap-1.5 p-3 bg-white rounded-lg border border-amber-200 min-h-[44px]">
                  {inspection.tokens.map((token, idx) => {
                    if (token.isInvisible) {
                      return (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-0.5 rounded bg-amber-100 border border-amber-300 text-xs font-mono font-bold text-amber-900"
                          title={`${token.charInfo?.spanishName} (${token.charInfo?.codePoint})`}
                        >
                          [{token.charInfo?.codePoint}]
                        </span>
                      );
                    }
                    return (
                      <span key={idx} className="text-sm font-sans text-slate-900">
                        {token.text}
                      </span>
                    );
                  })}
                </div>
              </div>
            ) : detectorText.length > 0 ? (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                <span className="text-sm font-semibold text-slate-700">
                  ✓ No se encontraron caracteres invisibles especiales en el texto.
                </span>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
