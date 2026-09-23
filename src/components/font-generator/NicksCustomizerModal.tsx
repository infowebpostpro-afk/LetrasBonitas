"use client";

import React, { useState, useId, useEffect } from "react";
import { generateNickStyles } from "@/lib/gamingNames/nicksJuegosData";
import { CopyIcon, CheckIcon, ClearIcon } from "@/components/ui/Icons";

interface NicksCustomizerModalProps {
  initialName: string;
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess?: (copiedText: string) => void;
}

export const NicksCustomizerModal: React.FC<NicksCustomizerModalProps> = ({
  initialName,
  isOpen,
  onClose,
  onCopySuccess,
}) => {
  const [baseWord, setBaseWord] = useState<string>(initialName);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const titleId = useId();

  useEffect(() => {
    setBaseWord(initialName);
  }, [initialName]);

  if (!isOpen) return null;

  const styles = generateNickStyles(baseWord || "NovaX");

  const variations = [
    {
      id: "clean",
      tier: "Limpio",
      badge: "Base Gamer Tag",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-300",
      description: "Nick original sin símbolos ni caracteres raros. 100% aceptado en todos los juegos.",
      text: styles.clean,
    },
    {
      id: "small-caps",
      tier: "Letras estilizadas",
      badge: "Mayúsculas Pequeñas",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      description: "Letras en formato small-caps compacto y limpio.",
      text: styles.smallCaps,
    },
    {
      id: "gothic",
      tier: "Letras estilizadas",
      badge: "Gótico Fraktur",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      description: "Estilo medieval y oscuro para nicks competitivos y tryhard.",
      text: styles.gothic,
    },
    {
      id: "framed",
      tier: "Decorado",
      badge: "Corchetes Ninja",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      description: "Enmarca tu gamer tag con corchetes japoneses discretos.",
      text: styles.framedBracket,
    },
    {
      id: "sparkles",
      tier: "Decorado",
      badge: "Destellos",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      description: "Añade estrellas sutiles a los extremos del nick.",
      text: styles.sparkles,
    },
    {
      id: "swords",
      tier: "Decorado",
      badge: "Samurái",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      description: "Aspas tácticas a los lados del nombre.",
      text: styles.swords,
    },
  ];

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      if (onCopySuccess) onCopySuccess(text);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedId(id);
      if (onCopySuccess) onCopySuccess(text);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col animate-scaleUp">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-950 via-slate-900 to-purple-950 text-white">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⚙️</span>
              <h3 id={titleId} className="text-lg font-bold">
                Personalizar Nick Gamer
              </h3>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Edita la palabra base y compara cómo se ve limpia o estilizada.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors"
            aria-label="Cerrar modal"
          >
            <ClearIcon size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Base Input */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <label
              htmlFor="nick-edit-input"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Palabra o Nick Base
            </label>
            <div className="flex gap-2">
              <input
                id="nick-edit-input"
                type="text"
                value={baseWord}
                onChange={(e) => setBaseWord(e.target.value)}
                placeholder="Escribe tu nick..."
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow text-base font-mono"
                maxLength={20}
              />
              {baseWord && (
                <button
                  type="button"
                  onClick={() => setBaseWord("")}
                  className="px-3 py-2 text-xs font-medium text-slate-500 bg-white border border-slate-300 rounded-lg hover:text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  Borrar
                </button>
              )}
            </div>
          </div>

          {/* Compatibility Alert */}
          <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <span className="text-base flex-shrink-0 mt-0.5">⚠️</span>
            <div>
              <span className="font-semibold">Aviso de compatibilidad:</span> Ciertas fuentes o videojuegos no aceptan letras Unicode decoradas y pueden mostrar cuadros (□). Si esto sucede en tu juego, utiliza la versión <strong>Limpia</strong> como alternativa segura.
            </div>
          </div>

          {/* Style Tiers */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Opciones de presentación
            </h4>

            <div className="space-y-2.5">
              {variations.map((item) => {
                const isCopied = copiedId === item.id;
                return (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-purple-300 hover:shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}
                        >
                          {item.badge}
                        </span>
                        <span className="text-xs text-slate-400">({item.tier})</span>
                      </div>
                      <div className="font-mono text-lg font-bold text-slate-900 tracking-wide break-all select-all">
                        {item.text}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, item.text)}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all flex-shrink-0 ${
                        isCopied
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-slate-900 hover:bg-purple-600 text-white shadow-sm hover:shadow"
                      }`}
                      aria-label={`Copiar ${item.text}`}
                    >
                      {isCopied ? (
                        <>
                          <CheckIcon size={14} />
                          <span>✓ Copiado</span>
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
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Prueba tu nick en el juego antes de confirmar</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-medium transition-colors"
          >
            Listo
          </button>
        </div>
      </div>
    </div>
  );
};
