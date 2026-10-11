"use client";

import React, { useState, useMemo, useId } from "react";
import { copyText } from "@/lib/clipboard";
import {
  MANUSCRITA_STYLES,
  MANUSCRITA_ALPHABETS,
  ManuscritaCategory,
} from "@/lib/unicode/manuscritasData";

export function ManuscritasGenerator() {
  const [inputText, setInputText] = useState<string>("Letras Bonitas");
  const [selectedCategory, setSelectedCategory] = useState<ManuscritaCategory>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [comparedIds, setComparedIds] = useState<string[]>([]);
  const [activeAlphabetTab, setActiveAlphabetTab] = useState<string>("elegante");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [manualCopyText, setManualCopyText] = useState<string | null>(null);

  const inputId = useId();
  const searchInputId = useId();

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2200);
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
    if (comparedIds.includes(id)) {
      setComparedIds((prev) => prev.filter((item) => item !== id));
    } else {
      if (comparedIds.length >= 3) {
        showToast("Puedes comparar un máximo de 3 estilos a la vez.");
        return;
      }
      setComparedIds((prev) => [...prev, id]);
    }
  };

  const clearComparison = () => setComparedIds([]);

  const activeInput = useMemo(() => {
    return inputText || "Letras Bonitas";
  }, [inputText]);

  const filteredStyles = useMemo(() => {
    return MANUSCRITA_STYLES.filter((s) => {
      const matchesCategory =
        selectedCategory === "todos" ? true : s.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const comparedModels = useMemo(() => {
    return MANUSCRITA_STYLES.filter((s) => comparedIds.includes(s.id));
  }, [comparedIds]);

  const activeAlphabet = useMemo(() => {
    return (
      MANUSCRITA_ALPHABETS.find((a) => a.id === activeAlphabetTab) ||
      MANUSCRITA_ALPHABETS[0]
    );
  }, [activeAlphabetTab]);

  const categories: { key: ManuscritaCategory; label: string }[] = [
    { key: "todos", label: "Todos" },
    { key: "caligraficos", label: "Caligráficos" },
    { key: "inclinados", label: "Inclinados" },
    { key: "decorados", label: "Decorados" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10">
      {/* ═══ INPUT ═══ */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
        <label
          htmlFor={inputId}
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Escribe tu texto
        </label>
        <input
          id={inputId}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Escribe un nombre o una frase"
          className="w-full text-lg sm:text-xl px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors"
          maxLength={80}
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      {/* ═══ CATEGORY CHIPS ═══ */}
      <div className="flex flex-wrap gap-2 items-center">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
              selectedCategory === cat.key
                ? "bg-purple-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            aria-pressed={selectedCategory === cat.key}
          >
            {cat.label}
          </button>
        ))}

        {/* Search */}
        <div className="ml-auto w-full sm:w-auto mt-2 sm:mt-0">
          <label htmlFor={searchInputId} className="sr-only">
            Buscar estilos
          </label>
          <input
            id={searchInputId}
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar estilo..."
            className="w-full sm:w-52 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>

      {/* ═══ RESULTS GRID ═══ */}
      {filteredStyles.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg font-medium">No se encontraron estilos.</p>
          <p className="text-sm mt-1">Prueba otro filtro o término de búsqueda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStyles.map((style) => {
            const transformed = style.transform(activeInput);
            const isCopied = copiedId === style.id;
            const isCompared = comparedIds.includes(style.id);

            return (
              <div
                key={style.id}
                className={`bg-white rounded-xl p-5 border transition-all ${
                  isCompared
                    ? "border-purple-400 ring-2 ring-purple-200"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{style.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                      {style.description}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleCompare(style.id)}
                    className={`ml-2 flex-shrink-0 p-1.5 rounded-md text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                      isCompared
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-50 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                    }`}
                    aria-label={
                      isCompared
                        ? `Quitar ${style.name} de la comparación`
                        : `Añadir ${style.name} a la comparación`
                    }
                    title={isCompared ? "Quitar de comparar" : "Comparar"}
                  >
                    {isCompared ? "✓" : "⇔"}
                  </button>
                </div>

                <div
                  className="text-lg sm:text-xl font-mono break-all min-h-[2.5rem] flex items-center text-gray-900 mb-4 select-all"
                  aria-live="polite"
                >
                  {transformed}
                </div>

                <button
                  onClick={() => handleCopy(style.id, transformed)}
                  className={`w-full py-2 px-4 rounded-lg text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                    isCopied
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100"
                  }`}
                >
                  {isCopied ? "Copiado ✓" : "Copiar"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* ═══ COMPARISON TRAY ═══ */}
      {comparedModels.length > 0 && (
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-purple-200 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-gray-900">
              Comparación ({comparedModels.length}/3)
            </h3>
            <button
              onClick={clearComparison}
              className="text-sm text-purple-600 hover:text-purple-800 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded px-2 py-1"
            >
              Limpiar
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comparedModels.map((style) => {
              const transformed = style.transform(activeInput);
              const isCopied = copiedId === `cmp-${style.id}`;

              return (
                <div
                  key={`cmp-${style.id}`}
                  className="bg-purple-50 rounded-lg p-4 border border-purple-100"
                >
                  <p className="text-xs font-bold text-purple-700 mb-2">{style.name}</p>
                  <div className="text-lg font-mono break-all min-h-[2rem] text-gray-900 mb-3 select-all">
                    {transformed}
                  </div>
                  <button
                    onClick={() => handleCopy(`cmp-${style.id}`, transformed)}
                    className={`w-full py-1.5 px-3 rounded text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                      isCopied
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : "bg-white text-purple-700 border border-purple-200 hover:bg-purple-100"
                    }`}
                  >
                    {isCopied ? "Copiado ✓" : "Copiar"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══ ALPHABET REFERENCE ═══ */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Abecedario de letras manuscritas
        </h3>

        {/* Alphabet Tabs */}
        <div className="flex flex-wrap gap-2 mb-5" role="tablist" aria-label="Seleccionar abecedario">
          {MANUSCRITA_ALPHABETS.map((abc) => (
            <button
              key={abc.id}
              role="tab"
              aria-selected={activeAlphabetTab === abc.id}
              onClick={() => setActiveAlphabetTab(abc.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                activeAlphabetTab === abc.id
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {abc.name}
            </button>
          ))}
        </div>

        {/* Active Alphabet Display */}
        {activeAlphabet && (
          <div role="tabpanel" className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                Mayúsculas:
              </p>
              <p className="font-mono text-gray-900 tracking-wider break-all text-sm sm:text-base">
                {activeAlphabet.uppercase}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                Minúsculas:
              </p>
              <p className="font-mono text-gray-900 tracking-wider break-all text-sm sm:text-base">
                {activeAlphabet.lowercase}
              </p>
            </div>
            <button
              onClick={() =>
                handleCopy(
                  `abc-${activeAlphabet.id}`,
                  `${activeAlphabet.uppercase}\n${activeAlphabet.lowercase}`
                )
              }
              className={`mt-2 py-2 px-4 rounded-lg text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                copiedId === `abc-${activeAlphabet.id}`
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100"
              }`}
            >
              {copiedId === `abc-${activeAlphabet.id}` ? "Copiado ✓" : "Copiar abecedario"}
            </button>
          </div>
        )}
      </div>

      {/* ═══ TOAST ═══ */}
      {toastMessage && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-lg text-sm font-medium z-50 animate-fade-in"
          role="status"
          aria-live="polite"
        >
          {toastMessage}
        </div>
      )}

      {/* ═══ MANUAL COPY FALLBACK MODAL ═══ */}
      {manualCopyText && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Copiar texto manualmente"
        >
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Copiar manualmente</h4>
            <p className="text-sm text-gray-600 mb-3">
              Selecciona el texto de abajo y utiliza la función de copiar de tu dispositivo.
            </p>
            <textarea
              readOnly
              value={manualCopyText}
              className="w-full p-3 border border-gray-300 rounded-lg text-sm font-mono bg-gray-50 resize-none"
              rows={3}
              onFocus={(e) => e.target.select()}
            />
            <button
              onClick={() => setManualCopyText(null)}
              className="mt-4 w-full py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
