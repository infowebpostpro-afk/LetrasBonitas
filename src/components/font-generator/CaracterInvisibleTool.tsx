"use client";

import React, { useState, useId, useMemo } from "react";
import { copyText } from "@/lib/clipboard";
import {
  UNICODE_INVISIBLE_LIBRARY,
  DEFAULT_CARACTER_INVISIBLE,
  UnicodeInvisibleEntry,
  InvisibleCategory,
  inspectTextDetailed,
  generateCharacterSequence,
} from "@/lib/unicode/caracterInvisibleData";

type ActiveTab = "quick" | "library" | "inspector" | "generator";

export function CaracterInvisibleTool() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("quick");

  // Active selected character across the tool
  const [selectedChar, setSelectedChar] = useState<UnicodeInvisibleEntry>(DEFAULT_CARACTER_INVISIBLE);

  // ── SECTION A: Quick Copy State ──
  const [quickCopied, setQuickCopied] = useState(false);
  const [showManualQuick, setShowManualQuick] = useState(false);
  const [quickManualCopied, setQuickManualCopied] = useState(false);

  // ── SECTION B: Library Category Filter ──
  const [categoryFilter, setCategoryFilter] = useState<string>("todos");

  // ── SECTION C: Inspector & Detector State ──
  const [inspectorText, setInspectorText] = useState<string>("Hola\u200BMundo \u3164");
  const [cleanCopied, setCleanCopied] = useState(false);

  // ── SECTION D: Generator State ──
  const [genQuantity, setGenQuantity] = useState<number>(10);
  const [genQuantityInput, setGenQuantityInput] = useState<string>("10");
  const [genError, setGenError] = useState<string>("");
  const [genCopied, setGenCopied] = useState(false);
  const [showGenManual, setShowGenManual] = useState(false);
  const [genManualCopied, setGenManualCopied] = useState(false);

  // Accessible IDs
  const quickFallbackInputId = useId();
  const inspectorTextareaId = useId();
  const genQuantityInputId = useId();
  const genFallbackInputId = useId();

  // Handlers for Section A
  const handleQuickCopy = async () => {
    const success = await copyText(selectedChar.char);
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

  // Handlers for Section C (Inspector)
  const inspectionResult = useMemo(() => {
    return inspectTextDetailed(inspectorText);
  }, [inspectorText]);

  const handleCopyCleanText = async () => {
    if (!inspectionResult.cleanedText) return;
    const success = await copyText(inspectionResult.cleanedText);
    if (success) {
      setCleanCopied(true);
      setTimeout(() => setCleanCopied(false), 2400);
    }
  };

  // Handlers for Section D (Generator)
  const handleQuantityChange = (valStr: string) => {
    setGenQuantityInput(valStr);
    const parsed = Number(valStr);
    if (!valStr.trim() || isNaN(parsed) || !Number.isInteger(parsed) || parsed < 1 || parsed > 500) {
      setGenError("Introduce un número entero entre 1 y 500.");
    } else {
      setGenError("");
      setGenQuantity(parsed);
    }
  };

  const handlePresetClick = (num: number) => {
    setGenQuantity(num);
    setGenQuantityInput(String(num));
    setGenError("");
  };

  const generatedSequence = useMemo(() => {
    if (genError) return "";
    return generateCharacterSequence(selectedChar.char, genQuantity);
  }, [selectedChar.char, genQuantity, genError]);

  const generatedBytes = useMemo(() => {
    if (!generatedSequence) return 0;
    if (typeof TextEncoder !== "undefined") {
      return new TextEncoder().encode(generatedSequence).length;
    }
    return generatedSequence.length * 3;
  }, [generatedSequence]);

  const handleGenCopy = async () => {
    if (!generatedSequence) return;
    const success = await copyText(generatedSequence);
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

  // Filtered library
  const filteredLibrary = useMemo(() => {
    if (categoryFilter === "todos") return UNICODE_INVISIBLE_LIBRARY;
    return UNICODE_INVISIBLE_LIBRARY.filter((item) => item.category === categoryFilter);
  }, [categoryFilter]);

  return (
    <div className="w-full max-w-4xl mx-auto my-6 space-y-6">
      {/* ── SaaS Navigation Bar ── */}
      <nav
        aria-label="Herramientas de carácter invisible"
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
          onClick={() => setActiveTab("library")}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1.5 ${
            activeTab === "library"
              ? "bg-white text-teal-800 shadow-sm font-semibold border border-slate-200/60"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          Biblioteca ({UNICODE_INVISIBLE_LIBRARY.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("inspector")}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1.5 ${
            activeTab === "inspector"
              ? "bg-white text-teal-800 shadow-sm font-semibold border border-slate-200/60"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          Inspector y Detector
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
      </nav>

      {/* ── SECTION A: Copiar Carácter Invisible (Active when 'quick') ── */}
      {activeTab === "quick" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200/60">
                1 Clic para Copiar
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                Copiar Carácter Invisible
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Copia un carácter invisible individual. El carácter activo actual es{" "}
                <span className="font-semibold text-slate-800">{selectedChar.spanishName}</span> ({selectedChar.codePoint}).
              </p>
            </div>

            {/* Quick Picker Dropdown */}
            <div className="flex items-center gap-2 self-start sm:self-center">
              <label htmlFor="quick-char-select" className="text-xs font-medium text-slate-500">
                Carácter:
              </label>
              <select
                id="quick-char-select"
                value={selectedChar.id}
                onChange={(e) => {
                  const match = UNICODE_INVISIBLE_LIBRARY.find((c) => c.id === e.target.value);
                  if (match) setSelectedChar(match);
                }}
                className="text-xs font-semibold text-teal-900 bg-teal-50/80 border border-teal-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {UNICODE_INVISIBLE_LIBRARY.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.spanishName} ({c.codePoint})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Character Data Card */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-500 block">Nombre oficial:</span>
              <span className="font-mono font-bold text-slate-800 truncate block">{selectedChar.name}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Punto de código:</span>
              <span className="font-mono font-bold text-teal-700 block">{selectedChar.codePoint}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Categoría:</span>
              <span className="font-medium text-slate-800 block">{selectedChar.category}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Anchura visual:</span>
              <span className="font-medium text-indigo-700 block">{selectedChar.widthDescription}</span>
            </div>
          </div>

          {/* Big CTA Copy Button */}
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
                  <span>¡Carácter copiado!</span>
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copiar carácter invisible</span>
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
                <span className="text-[11px] text-amber-700">Toca el campo y presiona Copiar</span>
              </div>
              <div className="flex gap-2">
                <input
                  id={quickFallbackInputId}
                  type="text"
                  readOnly
                  value={selectedChar.char}
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

          {/* Explanation Card */}
          <div className="p-4 bg-teal-50/50 rounded-2xl border border-teal-100/80 text-xs text-slate-600 space-y-2">
            <p className="font-semibold text-teal-950">
              Sobre {selectedChar.spanishName} ({selectedChar.codePoint}):
            </p>
            <p className="leading-relaxed">{selectedChar.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
              <div>
                <strong className="text-slate-700">Uso habitual:</strong> {selectedChar.commonUse}
              </div>
              <div>
                <strong className="text-slate-700">Limitación:</strong> {selectedChar.limitation}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── SECTION B: Biblioteca de Caracteres (Active when 'library') ── */}
      {activeTab === "library" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-slate-100">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                Catálogo Oficial Unicode
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                Biblioteca de Caracteres Invisibles
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Explora cada carácter invisible, conoce sus especificaciones técnicas y cópialo directamente con un toque.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
              {[
                { label: "Todos", val: "todos" },
                { label: "Ancho Cero", val: "Ancho cero" },
                { label: "Visualmente Vacíos", val: "Visualmente vacio" },
                { label: "Formato", val: "Formato y control" },
                { label: "Espacios", val: "Espacio tipografico" },
              ].map((pill) => (
                <button
                  key={pill.val}
                  type="button"
                  onClick={() => setCategoryFilter(pill.val)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    categoryFilter === pill.val
                      ? "bg-indigo-600 text-white shadow-2xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLibrary.map((item) => {
              const isSelected = selectedChar.id === item.id;
              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? "bg-teal-50/50 border-teal-500 ring-2 ring-teal-500/20 shadow-sm"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900">{item.spanishName}</span>
                        <code className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                          {item.codePoint}
                        </code>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                        {item.category}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-500 font-mono">
                      Oficial: <span className="font-semibold text-slate-700">{item.name}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="p-2.5 bg-slate-50 rounded-xl space-y-1 text-[11px] text-slate-600 border border-slate-100">
                      <div>
                        <strong className="text-slate-800">Anchura:</strong> {item.widthDescription}
                      </div>
                      <div>
                        <strong className="text-slate-800">Uso:</strong> {item.commonUse}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedChar(item)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        isSelected
                          ? "bg-teal-600 text-white"
                          : "text-slate-600 bg-slate-100 hover:bg-slate-200"
                      }`}
                    >
                      {isSelected ? "Activo" : "Seleccionar"}
                    </button>

                    <button
                      type="button"
                      onClick={async () => {
                        setSelectedChar(item);
                        const success = await copyText(item.char);
                        if (success) {
                          alert(`¡${item.spanishName} (${item.codePoint}) copiado!`);
                        }
                      }}
                      className="px-3 py-1 rounded-lg text-xs font-bold text-teal-800 bg-teal-100/70 hover:bg-teal-200/80 transition-colors"
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

      {/* ── SECTION C: Inspector y Detector (Active when 'inspector') ── */}
      {activeTab === "inspector" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/60">
              Detector y Diagnóstico
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              Detectar Caracteres Invisibles en un Texto
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Pega cualquier texto sospechoso para descubrir si contiene caracteres invisibles, espacios de ancho cero o formatos ocultos entre las letras.
            </p>
          </div>

          {/* Textarea Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor={inspectorTextareaId} className="text-xs font-bold text-slate-700">
                Pega tu texto en este recuadro:
              </label>
              {inspectorText && (
                <button
                  type="button"
                  onClick={() => setInspectorText("")}
                  className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
                >
                  Limpiar campo
                </button>
              )}
            </div>

            <textarea
              id={inspectorTextareaId}
              rows={4}
              value={inspectorText}
              onChange={(e) => setInspectorText(e.target.value)}
              placeholder="Pega aquí el texto que deseas analizar..."
              className="w-full bg-slate-50/70 border border-slate-300 rounded-2xl p-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
            />
          </div>

          {/* Live Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-500 block">Puntos de código:</span>
              <span className="font-mono font-bold text-slate-800">{inspectionResult.totalCodePoints}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Bytes UTF-8:</span>
              <span className="font-mono font-bold text-slate-800">{inspectionResult.totalUtf8Bytes}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Invisibles detectados:</span>
              <span className={`font-bold ${inspectionResult.totalInvisibleChars > 0 ? "text-purple-700" : "text-slate-700"}`}>
                {inspectionResult.totalInvisibleChars}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">Letras visibles:</span>
              <span className="font-medium text-slate-800">{inspectionResult.totalVisibleChars}</span>
            </div>
          </div>

          {/* Visual Token Map */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Mapa Visual de Caracteres (Token por Token):
              </span>
              <span className="text-[11px] text-slate-500">
                {inspectionResult.tokens.length} unidades analizadas
              </span>
            </div>

            {inspectionResult.tokens.length === 0 ? (
              <p className="text-xs text-slate-400 italic">No hay caracteres para mostrar.</p>
            ) : (
              <div className="flex flex-wrap gap-1.5 p-3 bg-white rounded-xl border border-slate-200 max-h-48 overflow-y-auto">
                {inspectionResult.tokens.map((token, idx) => {
                  if (token.isInvisible && token.entry) {
                    return (
                      <span
                        key={idx}
                        title={`Posición ${token.index + 1}: ${token.entry.spanishName} (${token.codePointHex})`}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-100 border border-purple-300 text-purple-900 font-mono text-xs font-bold shadow-2xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                        {token.codePointHex}
                      </span>
                    );
                  }
                  if (token.isNormalSpace) {
                    return (
                      <span
                        key={idx}
                        title={`Posición ${token.index + 1}: Espacio normal`}
                        className="inline-block px-1.5 py-0.5 rounded bg-slate-100 text-slate-400 text-xs font-mono"
                      >
                        ␣
                      </span>
                    );
                  }
                  return (
                    <span
                      key={idx}
                      title={`Posición ${token.index + 1}: ${token.text} (${token.codePointHex})`}
                      className="inline-block px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 text-xs font-medium"
                    >
                      {token.text}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {/* Detected Occurrences Breakdown */}
          {inspectionResult.detectedOccurrencesSummary.length > 0 && (
            <div className="p-4 bg-purple-50/70 rounded-2xl border border-purple-200/80 space-y-2">
              <span className="text-xs font-bold text-purple-950 block">
                Resumen de caracteres invisibles encontrados:
              </span>
              <div className="flex flex-wrap gap-2">
                {inspectionResult.detectedOccurrencesSummary.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-purple-300 rounded-xl text-xs font-medium text-purple-900 shadow-2xs"
                  >
                    <span className="font-bold text-purple-700">{item.count}×</span>
                    <span>{item.entry.spanishName}</span>
                    <code className="font-mono text-[11px] text-slate-500">({item.entry.codePoint})</code>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Clean Text Action */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  Copiar texto limpio (sin caracteres invisibles):
                </span>
                <span className="text-[11px] text-slate-500">
                  Conserva los espacios normales y elimina automáticamente los caracteres invisibles u ocultos.
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyCleanText}
                disabled={!inspectionResult.cleanedText}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                  cleanCopied
                    ? "bg-emerald-600 text-white"
                    : "bg-purple-600 hover:bg-purple-700 text-white shadow-2xs"
                }`}
              >
                {cleanCopied ? "¡Copiado limpio!" : "Copiar texto limpio"}
              </button>
            </div>

            {inspectionResult.totalInvisibleChars > 0 && (
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-mono text-slate-700 truncate">
                {inspectionResult.cleanedText || "(texto vacío tras limpiar)"}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── SECTION D: Generador de Caracteres (Active when 'generator') ── */}
      {activeTab === "generator" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                Repetición Controlada
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                Generador de Caracteres Invisibles
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Genera múltiples repeticiones de{" "}
                <span className="font-semibold text-slate-800">{selectedChar.spanishName}</span> ({selectedChar.codePoint}).
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setGenQuantity(10);
                setGenQuantityInput("10");
                setGenError("");
                setShowGenManual(false);
              }}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 self-start sm:self-center px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50"
            >
              Restablecer
            </button>
          </div>

          {/* Zero-width notice */}
          {!selectedChar.hasWidth && (
            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 leading-relaxed">
              <strong>Nota sobre anchura:</strong> {selectedChar.spanishName} es un carácter de ancho cero (0 píxeles). Generar 10 o 50 repeticiones no aumentará la anchura visual en pantalla; las letras seguirán viéndose juntas, aunque se almacenen múltiples bytes en memoria.
            </div>
          )}

          {/* Presets and Custom Input */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor={genQuantityInputId} className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Cantidad a generar:
              </label>
              <span className="text-xs text-slate-500">Rango: 1 a 500</span>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap gap-2">
              {[1, 5, 10, 20, 50, 100].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handlePresetClick(preset)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    genQuantity === preset && !genError
                      ? "bg-teal-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {preset} {preset === 1 ? "carácter" : "caracteres"}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 items-center pt-2">
              <input
                id={genQuantityInputId}
                type="number"
                min={1}
                max={500}
                value={genQuantityInput}
                onChange={(e) => handleQuantityChange(e.target.value)}
                placeholder="1 - 500"
                className={`w-32 px-3 py-2 text-sm font-semibold rounded-xl border focus:outline-none focus:ring-2 ${
                  genError
                    ? "border-red-400 focus:ring-red-400 text-red-600"
                    : "border-slate-300 focus:ring-teal-500 text-slate-800"
                }`}
              />
              {genError && (
                <span className="text-xs font-semibold text-red-600">{genError}</span>
              )}
            </div>
          </div>

          {/* Generator Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-500 block">Puntos de código:</span>
              <span className="font-mono font-bold text-slate-800">{genError ? 0 : genQuantity}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Bytes UTF-8:</span>
              <span className="font-mono font-bold text-slate-800">{generatedBytes} bytes</span>
            </div>
            <div>
              <span className="text-slate-500 block">Carácter activo:</span>
              <span className="font-medium text-slate-800">{selectedChar.codePoint}</span>
            </div>
          </div>

          {/* Copy Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              disabled={Boolean(genError)}
              onClick={handleGenCopy}
              className={`flex-1 py-3.5 px-6 rounded-2xl text-base font-bold text-white shadow-md transition-all duration-200 flex items-center justify-center gap-2.5 ${
                genError
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
                  <span>¡{genQuantity} caracteres copiados!</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copiar {genQuantity} caracteres</span>
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

          {/* Manual Fallback */}
          {showGenManual && (
            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl space-y-3">
              <span className="text-xs font-bold text-amber-900 block">
                Selección manual del bloque generado:
              </span>
              <textarea
                id={genFallbackInputId}
                readOnly
                rows={3}
                value={generatedSequence}
                className="w-full bg-white border border-amber-300 rounded-xl p-3 text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="button"
                onClick={handleManualGenSelect}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition-colors"
              >
                {genManualCopied ? "¡Texto seleccionado!" : "Seleccionar todo"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
