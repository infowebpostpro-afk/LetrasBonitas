"use client";

import React, { useState, useMemo, useEffect, useId } from "react";
import { copyText } from "@/lib/clipboard";
import {
  toSmallCaps,
  toSuperscriptLower,
  toSuperscriptUpper,
  toSubscript,
  checkUnconvertedLetters,
  INDIVIDUAL_SMALL_CHARACTERS,
  SMALL_LETTER_STYLES,
  SmallCharItem,
} from "@/lib/unicode/smallLetterMappings";

type FilterCategory = "todos" | "clasicas" | "arriba" | "abajo" | "aesthetic" | "gaming" | "minimalistas" | "decoradas" | "favoritos";
type CharTab = "versalitas" | "suplower" | "supupper" | "subscript" | "numsup" | "numsub";

export function SmallLettersGenerator() {
  const [inputText, setInputText] = useState<string>("Letras Bonitas");
  const [stripAccents, setStripAccents] = useState<boolean>(false);
  const [previewSize, setPreviewSize] = useState<number>(22);
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("todos");
  const [activeCharTab, setActiveCharTab] = useState<CharTab>("versalitas");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Manual copy fallback modal state
  const [manualCopyText, setManualCopyText] = useState<string | null>(null);

  const inputId = useId();
  const sliderId = useId();

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lb_small_favorites");
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("lb_small_favorites", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  const handleCopy = async (id: string, text: string) => {
    const ok = await copyText(text);
    if (ok) {
      setCopiedId(id);
      showToast("¡Texto copiado con éxito!");
      setTimeout(() => setCopiedId(null), 2000);
    } else {
      setManualCopyText(text);
    }
  };

  const handleCharCopy = async (charItem: SmallCharItem) => {
    const ok = await copyText(charItem.glyph);
    if (ok) {
      showToast(`Copiado: ${charItem.glyph}`);
    } else {
      setManualCopyText(charItem.glyph);
    }
  };

  // Warning check for unsupported letters in current text
  const unconvertedLetters = useMemo(() => {
    if (!inputText) return [];
    return checkUnconvertedLetters(inputText, "subscript");
  }, [inputText]);

  // Main 4 styles
  const mainFourStyles = useMemo(() => {
    return [
      {
        id: "main-versalitas",
        title: "Versalitas (Small Caps)",
        tag: "Clásico",
        text: toSmallCaps(inputText || "Letras Bonitas", stripAccents),
      },
      {
        id: "main-suplower",
        title: "Letras Arriba (Superíndice)",
        tag: "Para Nicks",
        text: toSuperscriptLower(inputText || "Letras Bonitas", stripAccents),
      },
      {
        id: "main-supupper",
        title: "Mayúsculas Arriba",
        tag: "Para Clanes",
        text: toSuperscriptUpper(inputText || "Letras Bonitas", stripAccents),
      },
      {
        id: "main-subscript",
        title: "Letras Abajo (Subíndice)",
        tag: "Científico",
        text: toSubscript(inputText || "Letras Bonitas", stripAccents),
      },
    ];
  }, [inputText, stripAccents]);

  // Filtered extended styles
  const filteredExtendedStyles = useMemo(() => {
    return SMALL_LETTER_STYLES.filter((style) => {
      if (activeCategory === "favoritos") {
        return favorites.includes(style.id);
      }
      if (activeCategory === "todos") return true;
      return style.category === activeCategory;
    });
  }, [activeCategory, favorites]);

  // Characters for active char tab
  const filteredChars = useMemo(() => {
    return INDIVIDUAL_SMALL_CHARACTERS.filter((c) => c.category === activeCharTab);
  }, [activeCharTab]);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* ── SECCIÓN DE ENTRADA Y CONTROLES PRINCIPALES ── */}
      <div className="bg-surface rounded-2xl border border-border shadow-md p-5 md:p-7 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <label htmlFor={inputId} className="text-sm font-bold uppercase tracking-wider text-muted">
            Escribe tu texto aquí
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setInputText("")}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-border bg-surface-2 hover:bg-surface-3 transition-colors text-ink-soft cursor-pointer"
              title="Borrar texto actual"
            >
              Borrar
            </button>
            <button
              type="button"
              onClick={() => handleCopy("quick-primary", mainFourStyles[0].text)}
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-brand text-white hover:bg-brand-hover transition-colors cursor-pointer shadow-sm"
              title="Copiar primer resultado"
            >
              Copiar Versalitas
            </button>
          </div>
        </div>

        <div className="relative">
          <textarea
            id={inputId}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe tu nombre, frase o clan..."
            rows={2}
            className="w-full text-lg md:text-xl font-medium p-4 rounded-xl border border-border bg-surface-2 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all resize-none text-ink placeholder:text-muted"
          />
        </div>

        {/* Barra de opciones de control */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 border-t border-border text-sm">
          {/* Ajuste de tamaño de vista previa */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-xs text-muted">
              <label htmlFor={sliderId}>Vista previa: {previewSize}px</label>
              <span className="text-[11px] text-faint">Solo visual</span>
            </div>
            <input
              id={sliderId}
              type="range"
              min={16}
              max={36}
              value={previewSize}
              onChange={(e) => setPreviewSize(Number(e.target.value))}
              className="w-full accent-brand cursor-pointer"
            />
            <p className="text-[11px] text-muted italic">
              El tamaño de la vista previa no cambia el texto copiado.
            </p>
          </div>

          {/* Toggle de eliminación de tildes */}
          <div className="flex items-center justify-between sm:justify-start gap-3 bg-surface-2 p-2.5 rounded-xl border border-border">
            <label className="text-xs font-medium text-ink-soft cursor-pointer flex-1" htmlFor="accent-toggle">
              Normalizar tildes (mayor compatibilidad)
            </label>
            <input
              id="accent-toggle"
              type="checkbox"
              checked={stripAccents}
              onChange={(e) => setStripAccents(e.target.checked)}
              className="w-4 h-4 accent-brand cursor-pointer rounded"
            />
          </div>

          {/* Contador y Estado */}
          <div className="flex items-center justify-between bg-surface-2 p-2.5 rounded-xl border border-border text-xs text-muted">
            <span>Caracteres: <strong className="text-ink">{inputText.length}</strong></span>
            <span>Palabras: <strong className="text-ink">{inputText.trim() ? inputText.trim().split(/\s+/).length : 0}</strong></span>
          </div>
        </div>

        {/* Aviso no intrusivo si hay letras sin subíndice */}
        {unconvertedLetters.length > 0 && (
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
            <span className="font-bold text-amber-600 dark:text-amber-400">ℹ️ Nota:</span>
            <span>
              Algunas letras como <strong>{unconvertedLetters.slice(0, 5).join(", ")}</strong> no tienen una versión pequeña oficial en subíndice dentro de Unicode y se conservaron sin cambios.
            </span>
          </div>
        )}
      </div>

      {/* ── CUATRO RESULTADOS PRINCIPALES (ABOVE-THE-FOLD) ── */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-extrabold text-ink tracking-tight">
            Estilos de Letras Pequeñas Principales
          </h2>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-light text-brand">
            4 Formatos Esenciales
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mainFourStyles.map((item) => {
            const isCopied = copiedId === item.id;
            const isFav = favorites.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-surface rounded-2xl border border-border hover:border-brand-soft shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between gap-4"
              >
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-ink text-sm md:text-base">{item.title}</span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-surface-2 text-muted">
                      {item.tag}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleFavorite(item.id)}
                    className="text-muted hover:text-amber-500 transition-colors p-1 cursor-pointer"
                    title={isFav ? "Quitar de favoritos" : "Guardar en favoritos"}
                    aria-label={`Favorito ${item.title}`}
                  >
                    <span className="text-lg leading-none">{isFav ? "★" : "☆"}</span>
                  </button>
                </div>

                <div
                  className="font-medium text-ink overflow-x-auto py-2 px-1 select-all break-words"
                  style={{ fontSize: `${previewSize}px`, minHeight: "3rem" }}
                >
                  {item.text || "-"}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-[11px] text-muted">
                    {item.text.length} caracteres
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(item.id, item.text)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isCopied
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "bg-brand text-white hover:bg-brand-hover shadow-sm"
                    }`}
                  >
                    <span>{isCopied ? "✓ ¡Copiado!" : "Copiar"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── FILTROS Y BIBLIOTECA EXTENDIDA (PHASE 7 & 10) ── */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="text-lg md:text-xl font-extrabold text-ink tracking-tight">
            Biblioteca Extendida de Diseños y Decoraciones
          </h2>
          <span className="text-xs text-muted">
            Mostrando {filteredExtendedStyles.length} estilos
          </span>
        </div>

        {/* Barra de pestañas / chips de filtro */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {[
            { id: "todos", label: "Todos" },
            { id: "clasicas", label: "Clásicas" },
            { id: "arriba", label: "Arriba" },
            { id: "abajo", label: "Abajo" },
            { id: "aesthetic", label: "Aesthetic" },
            { id: "gaming", label: "Gaming" },
            { id: "minimalistas", label: "Minimalistas" },
            { id: "decoradas", label: "Decoradas" },
            { id: "favoritos", label: `Favoritos (${favorites.length})` },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as FilterCategory)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-brand text-white shadow-sm"
                  : "bg-surface border border-border text-ink-soft hover:bg-surface-2"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cuadrícula de estilos extendidos */}
        {filteredExtendedStyles.length === 0 ? (
          <div className="text-center py-12 bg-surface rounded-2xl border border-border text-muted">
            <p className="text-sm font-semibold">No hay estilos en esta categoría.</p>
            {activeCategory === "favoritos" && (
              <p className="text-xs text-faint mt-1">
                Haz clic en la estrella ☆ de cualquier estilo para guardarlo aquí.
              </p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredExtendedStyles.map((style) => {
              const textResult = style.generate(inputText || "Letras Bonitas", stripAccents);
              const isCopied = copiedId === style.id;
              const isFav = favorites.includes(style.id);

              return (
                <div
                  key={style.id}
                  className="bg-surface rounded-2xl border border-border hover:border-brand-soft shadow-xs hover:shadow-md transition-all p-4 flex flex-col justify-between gap-3"
                >
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-ink text-xs">{style.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-surface-2 text-muted">
                        {style.badge}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(style.id)}
                      className="text-muted hover:text-amber-500 transition-colors cursor-pointer"
                      title={isFav ? "Quitar de favoritos" : "Guardar en favoritos"}
                      aria-label={`Favorito ${style.name}`}
                    >
                      <span className="text-base leading-none">{isFav ? "★" : "☆"}</span>
                    </button>
                  </div>

                  <div
                    className="font-medium text-ink overflow-x-auto py-2 px-1 select-all break-words"
                    style={{ fontSize: `${previewSize}px`, minHeight: "2.75rem" }}
                  >
                    {textResult}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-[10px] text-muted truncate max-w-[150px]">
                      {style.description}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(style.id, textResult)}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        isCopied
                          ? "bg-emerald-600 text-white"
                          : "bg-surface-2 hover:bg-surface-3 text-ink-soft border border-border"
                      }`}
                    >
                      <span>{isCopied ? "✓ Copiado" : "Copiar"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── ABECEDARIO DE LETRAS PEQUEÑAS (PHASE 8) ── */}
      <div className="bg-surface rounded-2xl border border-border shadow-md p-5 md:p-7 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
          <div>
            <h2 className="text-lg md:text-xl font-extrabold text-ink tracking-tight">
              Abecedario de Letras Pequeñas y Números Unicode
            </h2>
            <p className="text-xs text-muted mt-1">
              Haz clic en cualquier letra o número para copiarlo individualmente al portapapeles.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-2 text-ink-soft self-start sm:self-auto">
            1 Clic para Copiar
          </span>
        </div>

        {/* Pestañas de abecedario */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {[
            { id: "versalitas", label: "Versalitas (A-Z)" },
            { id: "suplower", label: "Superíndice (a-z)" },
            { id: "supupper", label: "Mayúsculas Arriba (A-Z)" },
            { id: "subscript", label: "Subíndice (a-z)" },
            { id: "numsup", label: "Números Arriba (0-9)" },
            { id: "numsub", label: "Números Abajo (0-9)" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCharTab(tab.id as CharTab)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCharTab === tab.id
                  ? "bg-brand text-white shadow-sm"
                  : "bg-surface-2 border border-border text-ink-soft hover:bg-surface-3"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cuadrícula de caracteres */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-13 gap-2.5">
          {filteredChars.map((item, idx) => (
            <button
              key={`${item.category}-${item.latin}-${idx}`}
              type="button"
              onClick={() => handleCharCopy(item)}
              title={
                item.isMissing
                  ? `${item.note || "Sin carácter nativo"}. Clic para copiar.`
                  : `${item.latin} → ${item.glyph} (${item.unicodeCode}). Clic para copiar.`
              }
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all cursor-pointer group text-center ${
                item.isMissing
                  ? "bg-surface-2/60 border-dashed border-border hover:border-amber-400"
                  : "bg-surface-2 border-border hover:border-brand hover:bg-surface-3 shadow-2xs hover:shadow-xs"
              }`}
            >
              <span className="text-xl md:text-2xl font-bold text-ink group-hover:scale-115 transition-transform">
                {item.glyph}
              </span>
              <span className="text-[10px] text-muted font-medium mt-1">
                {item.latin}
              </span>
              <span className="text-[9px] text-faint truncate max-w-full">
                {item.isMissing ? "Falta" : item.unicodeCode}
              </span>
            </button>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-surface-2 border border-border text-xs text-muted">
          <p>
            <strong>Transparencia Unicode:</strong> Algunos caracteres (como la <em>q</em> en superíndice o las letras <em>b, c, d, f, g, q, w, y, z</em> en subíndice) no fueron codificados en el estándar Unicode original por carecer de uso en notación fonética o científica clásica. Las casillas marcadas con línea punteada reflejan estas ausencias técnicas oficiales.
          </p>
        </div>
      </div>

      {/* ── MODAL DE COPIA MANUAL (FALLBACK CLIPBOARD) ── */}
      {manualCopyText !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-surface rounded-2xl border border-border p-6 max-w-md w-full shadow-2xl space-y-4">
            <h3 className="font-extrabold text-ink text-base">Copia tu texto manualmente</h3>
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

      {/* ── NOTIFICACIÓN TOAST FLOTANTE ── */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-ink text-white font-bold text-xs shadow-lg flex items-center gap-2 animate-bounce">
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
