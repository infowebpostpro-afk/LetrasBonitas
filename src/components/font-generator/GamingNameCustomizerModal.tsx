"use client";

import React, { useState, useEffect, useRef } from "react";
import { GAMING_DECORATION_PRESETS } from "@/lib/gamingNames/gamingNameData";
import { charCount } from "@/lib/unicode";
import { CheckIcon, CopyIcon } from "@/components/ui/Icons";
import { copyText } from "@/lib/clipboard";

interface GamingNameCustomizerModalProps {
  name: string;
  isOpen: boolean;
  onClose: () => void;
}

export const GamingNameCustomizerModal: React.FC<GamingNameCustomizerModalProps> = ({
  name,
  isOpen,
  onClose,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Click outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleCopy = async (id: string, text: string) => {
    try {
      const ok = await copyText(text);
      if (ok) {
        setCopiedId(id);
        setTimeout(() => {
          setCopiedId((curr) => (curr === id ? null : curr));
        }, 1800);
      }
    } catch {
      // Fallback
    }
  };

  if (!isOpen || !name) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-customizer-title"
    >
      <div
        ref={modalRef}
        className="w-full max-w-2xl max-h-[85vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div>
            <h2 id="modal-customizer-title" className="text-lg font-bold text-slate-900">
              Personalizar: <span className="text-teal-600 font-mono">{name}</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Prueba diferentes estilos visuales y símbolos para tu nick
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors"
            aria-label="Cerrar personalizador"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content / Variants List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GAMING_DECORATION_PRESETS.map((preset) => {
              const decorated = preset.apply(name);
              const count = charCount(decorated);
              const isCopied = copiedId === preset.id;

              return (
                <div
                  key={preset.id}
                  className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-teal-50/40 border border-slate-200/80 hover:border-teal-300 rounded-xl transition-all group"
                >
                  <div className="min-w-0 pr-3">
                    <span className="text-[11px] font-medium text-slate-600 block uppercase tracking-wider">
                      {preset.name}
                    </span>
                    <span className="text-base font-semibold text-slate-800 break-all select-all font-sans block mt-0.5">
                      {decorated}
                    </span>
                    <span className="text-[11px] text-slate-600 block mt-1">
                      {count} caracteres
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(preset.id, decorated)}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      isCopied
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "bg-white text-slate-700 border border-slate-200 shadow-sm hover:border-teal-500 hover:text-teal-700 active:scale-95"
                    }`}
                    aria-label={`Copiar estilo ${preset.name} para ${decorated}`}
                  >
                    {isCopied ? (
                      <>
                        <CheckIcon size={14} className="text-white" />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon size={14} />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Consejo: Comprueba si tu juego acepta símbolos antes de cambiar el nombre.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium rounded-lg transition-colors text-xs"
          >
            Listo
          </button>
        </div>
      </div>
    </div>
  );
};
