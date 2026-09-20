"use client";

import React, { useEffect, useState, useMemo } from "react";
import { copyText } from "@/lib/clipboard";
import { fontStyles } from "@/lib/unicode";

interface FreeFireApodoVariationModalProps {
  isOpen: boolean;
  baseText: string;
  originalName: string;
  onClose: () => void;
  onCopyNotice?: (text: string) => void;
}

export const FreeFireApodoVariationModal: React.FC<FreeFireApodoVariationModalProps> = ({
  isOpen,
  baseText,
  originalName,
  onClose,
  onCopyNotice,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Generate instant decorated and Unicode variations of baseText
  const variations = useMemo(() => {
    if (!isOpen) return [];
    const textToTransform =
      baseText.trim() ||
      originalName.replace(/[^\wáéíóúüñÁÉÍÓÚÜÑ\s]/g, "").trim() ||
      "Nox";

    const decorationsList = [
      { prefix: "乂", suffix: "乂", name: "Samurái X" },
      { prefix: "亗", suffix: "亗", name: "Corona Rey" },
      { prefix: "『", suffix: "』", name: "Corchetes Especiales" },
      { prefix: "꧁", suffix: "꧂", name: "Alas Clásicas" },
      { prefix: "༒", suffix: "༒", name: "Cruz de Batalla" },
      { prefix: "⚡", suffix: "⚡", name: "Rayo Pro" },
      { prefix: "☠️", suffix: "☠️", name: "Calavera Clan" },
      { prefix: "👑", suffix: "👑", name: "Corona Real" },
      { prefix: "╰★", suffix: "★╮", name: "Estrella Cinta" },
      { prefix: "メ", suffix: "メ", name: "Katana Me" },
      { prefix: "✦", suffix: "✦", name: "Destello Sparkle" },
      { prefix: "╰🖤", suffix: "🖤╮", name: "Corazón Oscuro" },
    ];

    const topStyles = fontStyles.filter((s) => s.id !== "original").slice(0, decorationsList.length);

    return decorationsList.map((dec, index) => {
      const styleObj = topStyles[index % topStyles.length];
      const styledText = styleObj ? styleObj.transform(textToTransform) : textToTransform;
      const combined = `${dec.prefix}${styledText}${dec.suffix}`;

      return {
        id: `apodo-var-${index}`,
        name: combined,
        styleName: `${dec.name} (${styleObj?.name || "Original"})`,
      };
    });
  }, [isOpen, baseText, originalName]);

  if (!isOpen) return null;

  const handleCopyVariation = async (id: string, name: string) => {
    const success = await copyText(name);
    if (success) {
      setCopiedId(id);
      if (onCopyNotice) onCopyNotice(name);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-5 sm:p-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="apodo-modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 shrink-0">
          <div>
            <h3 id="apodo-modal-title" className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>🎲</span> Variaciones de &quot;{baseText || originalName}&quot;
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">
              Haz clic en cualquier variación para copiarla al instante.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Cerrar modal de variaciones"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body: List of variations */}
        <div className="overflow-y-auto space-y-2 pr-1 flex-1 scrollbar-thin">
          {variations.map((item) => (
            <div
              key={item.id}
              className="p-3 bg-slate-50 hover:bg-teal-50/50 rounded-xl border border-slate-200/80 hover:border-teal-300 transition-all flex items-center justify-between gap-3 group"
            >
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                  {item.styleName}
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-900 break-all select-all">
                  {item.name}
                </span>
              </div>

              <button
                onClick={() => handleCopyVariation(item.id, item.name)}
                className={`shrink-0 min-h-[36px] px-3.5 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1.5 shadow-2xs ${
                  copiedId === item.id
                    ? "bg-emerald-600 text-white"
                    : "bg-teal-600 hover:bg-teal-700 text-white active:scale-95"
                }`}
              >
                {copiedId === item.id ? (
                  <>
                    <span>✓</span>
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
