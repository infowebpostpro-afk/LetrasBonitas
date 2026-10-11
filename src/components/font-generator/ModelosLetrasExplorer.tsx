"use client";

import React, { useState, useMemo, useId, useEffect } from "react";
import { copyText } from "@/lib/clipboard";
import {
  CURATED_MODELOS,
  ALPHABET_MODEL_EXAMPLES,
  LetraModelo,
  ModeloCategory,
} from "@/lib/unicode/modelosLetrasData";
import { removeSpanishAccents } from "@/lib/unicode/smallLetterMappings";

export function ModelosLetrasExplorer() {
  const [inputText, setInputText] = useState<string>("Letras Bonitas");
  const [selectedCategory, setSelectedCategory] = useState<ModeloCategory>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [stripAccents, setStripAccents] = useState<boolean>(false);
  const [comparedModelIds, setComparedModelIds] = useState<string[]>([]);
  const [activeAlphabetTab, setActiveAlphabetTab] = useState<string>("negrita");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [manualCopyText, setManualCopyText] = useState<string | null>(null);

  const inputId = useId();
  const searchInputId = useId();

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

  const toggleCompare = (id: string) => {
    if (comparedModelIds.includes(id)) {
      setComparedModelIds((prev) => prev.filter((item) => item !== id));
    } else {
      if (comparedModelIds.length >= 3) {
        showToast("Puedes comparar un máximo de 3 modelos a la vez.");
        return;
      }
      setComparedModelIds((prev) => [...prev, id]);
    }
  };

  const clearComparison = () => {
    setComparedModelIds([]);
  };

  // Processed text for transforms
  const activeInput = useMemo(() => {
    const raw = inputText || "Letras Bonitas";
    return stripAccents ? removeSpanishAccents(raw) : raw;
  }, [inputText, stripAccents]);

  // Filtered models
  const filteredModelos = useMemo(() => {
    return CURATED_MODELOS.filter((m) => {
      const matchesCategory =
        selectedCategory === "todos" ? true : m.category === selectedCategory;

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Models being compared
  const comparedModels = useMemo(() => {
    return CURATED_MODELOS.filter((m) => comparedModelIds.includes(m.id));
  }, [comparedModelIds]);

  // Current active alphabet example
  const activeAlphabet = useMemo(() => {
    return (
      ALPHABET_MODEL_EXAMPLES.find((a) => a.id === activeAlphabetTab) ||
      ALPHABET_MODEL_EXAMPLES[0]
    );
  }, [activeAlphabetTab]);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10">
      {/* ═══════════════════════════════════════════════
          PANEL DE ENTRADA Y CONTROLES DEL EXPLORADOR
          ═══════════════════════════════════════════════ */}
      <div className="bg-surface rounded-2xl border border-border shadow-md p-5 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Explorador Interactivo
            </span>
            <h2 className="text-xl md:text-2xl font-black text-ink tracking-tight">
              Escribe tu nombre o texto
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setInputText("")}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-border bg-surface-2 hover:bg-surface-3 transition-colors text-ink-soft cursor-pointer"
            >
              Borrar
            </button>
            <button
              type="button"
              onClick={() => handleCopy("quick-first", CURATED_MODELOS[0].transform(activeInput))}
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-brand text-white hover:bg-brand-hover transition-colors cursor-pointer shadow-sm"
            >
              Copiar Primer Modelo
            </button>
          </div>
        </div>

        {/* Input Textarea */}
        <div className="space-y-2">
          <textarea
            id={inputId}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe tu nombre, frase o título..."
            rows={2}
            className="w-full text-lg md:text-xl font-medium p-4 rounded-xl border border-border bg-surface-2 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all resize-none text-ink placeholder:text-muted"
          />
        </div>

        {/* Barra de Búsqueda y Normalización */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="relative">
            <label htmlFor={searchInputId} className="sr-only">
              Buscar modelo por nombre o estilo
            </label>
            <input
              id={searchInputId}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar modelo (ej. cursiva, gótica, estrellas, doble trazo...)"
              className="w-full text-sm p-3 rounded-xl border border-border bg-surface-2 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand text-ink"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-ink cursor-pointer"
              >
                Limpiar
              </button>
            )}
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-surface-2 border border-border text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-ink-soft">
              <input
                type="checkbox"
                checked={stripAccents}
                onChange={(e) => setStripAccents(e.target.checked)}
                className="w-4 h-4 accent-brand cursor-pointer rounded"
              />
              <span>Normalizar tildes (mayor compatibilidad de fuentes)</span>
            </label>
            <span className="text-muted">
              Caracteres: <strong className="text-ink">{activeInput.length}</strong>
            </span>
          </div>
        </div>

        {/* Filtros de Categorías */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs text-muted">
            <span className="font-bold uppercase tracking-wider">Filtrar por familia visual:</span>
            <span>{filteredModelos.length} modelos disponibles</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "todos", label: "Todos los Modelos" },
              { id: "sencillos", label: "Sencillos" },
              { id: "elegantes", label: "Elegantes" },
              { id: "aesthetic", label: "Aesthetic" },
              { id: "decorados", label: "Decorados" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as ModeloCategory)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-brand text-white shadow-sm"
                    : "bg-surface-2 hover:bg-surface-3 text-ink-soft border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BANDEJA DE COMPARACIÓN (COMPARA HASTA 3 MODELOS CARA A CARA)
          ═══════════════════════════════════════════════════════════════ */}
      {comparedModels.length > 0 && (
        <div className="bg-surface rounded-2xl border-2 border-brand/40 shadow-lg p-5 md:p-7 space-y-4 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Comparador Cara a Cara
              </span>
              <h3 className="text-lg md:text-xl font-black text-ink">
                Comparando {comparedModels.length} de 3 modelos seleccionados
              </h3>
            </div>
            <button
              type="button"
              onClick={clearComparison}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-border bg-surface-2 hover:bg-surface-3 text-muted hover:text-ink cursor-pointer self-start sm:self-auto"
            >
              Limpiar comparación
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {comparedModels.map((m) => {
              const result = m.transform(activeInput);
              const isCopied = copiedId === `compare-${m.id}`;

              return (
                <div
                  key={`compare-${m.id}`}
                  className="p-4 rounded-xl bg-surface-2 border border-border flex flex-col justify-between gap-3 relative"
                >
                  <button
                    type="button"
                    onClick={() => toggleCompare(m.id)}
                    className="absolute top-2 right-2 text-muted hover:text-red-500 text-sm p-1 cursor-pointer"
                    title="Quitar de comparación"
                    aria-label={`Quitar ${m.name}`}
                  >
                    ×
                  </button>
                  <div className="pr-6">
                    <span className="text-xs font-bold text-ink block">{m.name}</span>
                    <span className="text-[10px] text-muted capitalize">{m.category}</span>
                  </div>

                  <div className="font-bold text-ink text-xl select-all break-words py-2 min-h-[3rem]">
                    {result}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(`compare-${m.id}`, result)}
                    className={`w-full py-2 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                      isCopied
                        ? "bg-emerald-600 text-white"
                        : "bg-brand text-white hover:bg-brand-hover shadow-xs"
                    }`}
                  >
                    {isCopied ? "✓ ¡Copiado!" : "Copiar Este Modelo"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          GALERÍA DE MODELOS CURADOS (30-50 OPCIONES DISTINGUIBLES)
          ═══════════════════════════════════════════════════════════════ */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg md:text-xl font-extrabold text-ink tracking-tight">
            Modelos de Letras Listos para Copiar
          </h3>
          <span className="text-xs text-muted">
            Mostrando {filteredModelos.length} diseños
          </span>
        </div>

        {filteredModelos.length === 0 ? (
          <div className="text-center py-12 bg-surface rounded-2xl border border-border text-muted space-y-2">
            <p className="text-sm font-semibold">No se encontraron modelos con ese criterio.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("todos");
              }}
              className="text-xs text-brand font-bold underline cursor-pointer"
            >
              Ver todos los modelos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredModelos.map((m) => {
              const result = m.transform(activeInput);
              const isCopied = copiedId === m.id;
              const isCompared = comparedModelIds.includes(m.id);

              return (
                <div
                  key={m.id}
                  className={`bg-surface rounded-2xl border transition-all p-4 md:p-5 flex flex-col justify-between gap-3 shadow-xs hover:shadow-md ${
                    isCompared
                      ? "border-brand ring-2 ring-brand/20"
                      : "border-border hover:border-brand-soft"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-border pb-2.5">
                    <div>
                      <span className="font-bold text-ink text-sm block">{m.name}</span>
                      <span className="text-[10px] text-muted capitalize">{m.category}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleCompare(m.id)}
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border transition-colors cursor-pointer ${
                        isCompared
                          ? "bg-brand text-white border-brand"
                          : "bg-surface-2 text-muted border-border hover:text-ink"
                      }`}
                    >
                      {isCompared ? "✓ Comparando" : "+ Comparar"}
                    </button>
                  </div>

                  <div className="font-bold text-ink text-xl md:text-2xl select-all break-words py-2 min-h-[3.25rem] flex items-center">
                    {result}
                  </div>

                  <div className="pt-2 border-t border-border flex items-center justify-between gap-2">
                    <span className="text-[11px] text-muted truncate max-w-[170px]" title={m.description}>
                      {m.description}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(m.id, result)}
                      className={`px-3.5 py-1.5 rounded-xl font-bold text-xs transition-colors cursor-pointer shrink-0 ${
                        isCopied
                          ? "bg-emerald-600 text-white"
                          : "bg-brand text-white hover:bg-brand-hover shadow-xs"
                      }`}
                    >
                      {isCopied ? "✓ Copiado" : "Copiar"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECCIÓN: MODELOS DE LETRAS DEL ABECEDARIO COMPLETO (A-Z)
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-surface rounded-2xl border border-border shadow-md p-5 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Referencia A-Z
            </span>
            <h3 className="text-xl md:text-2xl font-black text-ink tracking-tight">
              Modelos de Letras del Abecedario
            </h3>
            <p className="text-xs text-muted mt-1">
              Explora el alfabeto completo en los estilos más representativos y copia letras individuales.
            </p>
          </div>
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-2 border border-border overflow-x-auto scrollbar-thin">
            {ALPHABET_MODEL_EXAMPLES.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setActiveAlphabetTab(a.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeAlphabetTab === a.id
                    ? "bg-brand text-white shadow-xs"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {a.name}
              </button>
            ))}
          </div>
        </div>

        {/* Visualización del Abecedario Activo */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-surface-2 border border-border space-y-2">
            <div className="flex justify-between items-center text-xs text-muted">
              <span className="font-bold uppercase tracking-wider">Mayúsculas:</span>
              <button
                type="button"
                onClick={() => handleCopy(`abc-upper-${activeAlphabet.id}`, activeAlphabet.uppercase)}
                className="text-xs text-brand font-bold underline cursor-pointer"
              >
                Copiar fila completa
              </button>
            </div>
            <div className="font-bold text-ink text-lg md:text-xl font-mono tracking-wider select-all break-words">
              {activeAlphabet.uppercase}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface-2 border border-border space-y-2">
            <div className="flex justify-between items-center text-xs text-muted">
              <span className="font-bold uppercase tracking-wider">Minúsculas:</span>
              <button
                type="button"
                onClick={() => handleCopy(`abc-lower-${activeAlphabet.id}`, activeAlphabet.lowercase)}
                className="text-xs text-brand font-bold underline cursor-pointer"
              >
                Copiar fila completa
              </button>
            </div>
            <div className="font-bold text-ink text-lg md:text-xl font-mono tracking-wider select-all break-words">
              {activeAlphabet.lowercase}
            </div>
          </div>
        </div>
      </div>

      {/* ── Modal de Copia Manual (Fallback) ── */}
      {manualCopyText !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-surface rounded-2xl border border-border p-6 max-w-md w-full shadow-2xl space-y-4">
            <h3 className="font-extrabold text-ink text-base">Copia tu modelo manualmente</h3>
            <p className="text-xs text-muted">
              Tu navegador restringió el acceso directo al portapapeles. Selecciona y copia el texto del recuadro a continuación:
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
