"use client";

import React, { useEffect, useState, useMemo } from "react";
import { copyText } from "@/lib/clipboard";
import { fontStyles } from "@/lib/unicode";
import { FREE_FIRE_DECORATIONS } from "@/lib/unicode/freeFireData";

interface InsaneVariationModalProps {
  isOpen: boolean;
  baseText: string;
  originalName: string;
  onClose: () => void;
  onCopyNotice?: (text: string) => void;
}

export const InsaneVariationModal: React.FC<InsaneVariationModalProps> = ({
  isOpen,
  baseText,
  originalName,
  onClose,
  onCopyNotice,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Generate 12 instant variations based on baseText or clean name
  const variations = useMemo(() => {
    if (!isOpen) return [];
    const textToTransform =
      baseText.trim() ||
      originalName.replace(/[^\wáéíóúüñÁÉÍÓÚÜÑ\s]/g, "").trim() ||
      "Shadow";

    const list: { id: string; name: string; styleName: string }[] = [];

    // Filter top decorations for intense styles
    const intenseDecorations = [
      { prefix: "꧁༒", suffix: "༒꧂", name: "Alas Góticas Insanas" },
      { prefix: "亗☠", suffix: "☠亗", name: "Corona de Calavera" },
      { prefix: "乂", suffix: "乂", name: "Samurái X" },
      { prefix: "⚡", suffix: "⚡", name: "Rayo Agresivo" },
      { prefix: "༒", suffix: "༒", name: "Cruz de Batalla" },
      { prefix: "『", suffix: "』", name: "Corchetes Especiales" },
      { prefix: "╰★", suffix: "★╮", name: "Estrella Pro" },
      { prefix: "メ", suffix: "メ", name: "Katana Me" },
      { prefix: "👑", suffix: "👑", name: "Corona Real" },
      { prefix: "☣️", suffix: "☣️", name: "Biohazard" },
      { prefix: "⚔️", suffix: "⚔️", name: "Espadas Cruzadas" },
      { prefix: "╰🖤", suffix: "🖤╮", name: "Corazón Oscuro" },
    ];

    const topStyles = fontStyles.filter((s) => s.id !== "original").slice(0, intenseDecorations.length);

    intenseDecorations.forEach((dec, index) => {
      const styleObj = topStyles[index % topStyles.length];
      const styledText = styleObj ? styleObj.transform(textToTransform) : textToTransform;
      const combined = `${dec.prefix}${styledText}${dec.suffix}`;

      list.push({
        id: `insane-var-${index}`,
        name: combined,
        styleName: `${dec.name} (${styleObj?.name || "Original"})`,
      });
    });

    return list;
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 rounded-2xl max-w-xl w-full p-5 sm:p-6 shadow-2xl border border-indigo-900/60 overflow-hidden flex flex-col max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="variation-modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 shrink-0">
          <div>
            <h3 id="variation-modal-title" className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
              <span>🎲</span> Variaciones de &quot;{baseText || originalName}&quot;
            </h3>
            <p className="text-xs text-cyan-300/80 mt-0.5 font-medium">
              Toca cualquier nombre para copiarlo al instante.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Cerrar modal de variaciones"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body: List of variations */}
        <div className="overflow-y-auto space-y-2.5 pr-1 flex-1 scrollbar-thin">
          {variations.map((item) => (
            <div
              key={item.id}
              className="p-3.5 bg-slate-950/90 hover:bg-slate-950 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all flex items-center justify-between gap-3 group"
            >
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-0.5">
                  {item.styleName}
                </span>
                <span className="text-base sm:text-lg font-black text-white break-all select-all">
                  {item.name}
                </span>
              </div>

              <button
                onClick={() => handleCopyVariation(item.id, item.name)}
                className={`shrink-0 min-h-[38px] px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 shadow-md ${
                  copiedId === item.id
                    ? "bg-emerald-500 text-slate-950 font-black"
                    : "bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950"
                }`}
              >
                {copiedId === item.id ? (
                  <>
                    <span>✓</span>
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
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
        <div className="mt-4 pt-3 border-t border-slate-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
