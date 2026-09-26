"use client";

import React, { useState, useId, useEffect } from "react";
import { generateApodoStyles } from "@/lib/gamingNames/apodosJuegosData";
import { CopyIcon, CheckIcon, ClearIcon } from "@/components/ui/Icons";
import { copyText } from "@/lib/clipboard";

interface ApodosCustomizerModalProps {
  initialName: string;
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess?: (copiedText: string) => void;
}

export const ApodosCustomizerModal: React.FC<ApodosCustomizerModalProps> = ({
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

  const styles = generateApodoStyles(baseWord || "ShadowFox");

  const variations = [
    {
      id: "clean",
      tier: "Limpio",
      badge: "Base Normal",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-300",
      description: "Texto normal sin símbolos especiales. Compatible al 100% con cualquier juego o consola.",
      text: styles.clean,
    },
    {
      id: "small-caps",
      tier: "Letras estilizadas",
      badge: "Mayúsculas Pequeñas",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      description: "Letras en formato small-caps limpio y fácil de leer.",
      text: styles.smallCaps,
    },
    {
      id: "gothic",
      tier: "Letras estilizadas",
      badge: "Gótico Fraktur",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      description: "Estética oscura y medieval para juegos RPG o nicks tryhard.",
      text: styles.gothic,
    },
    {
      id: "double-struck",
      tier: "Letras estilizadas",
      badge: "Letras Huecas",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description: "Caracteres de doble trazo con acabado moderno.",
      text: styles.doubleStruck,
    },
    {
      id: "framed",
      tier: "Decorado",
      badge: "Marco Japonés",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      description: "Corchetes esquineros que encuadran el apodo sin recargarlo.",
      text: styles.framedBracket,
    },
    {
      id: "wings",
      tier: "Decorado",
      badge: "Alas Insanas",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      description: "Alas clásicas de clan para shooters y Battle Royale.",
      text: styles.angelWings,
    },
    {
      id: "crown",
      tier: "Decorado",
      badge: "Corona Imperial",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      description: "Símbolos de corona real a los lados del apodo.",
      text: styles.crownKing,
    },
    {
      id: "swords",
      tier: "Decorado",
      badge: "Espadas Samurái",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "Aspas y espadas de combate para juegos de acción.",
      text: styles.swordsSamurai,
    },
    {
      id: "ribbon",
      tier: "Decorado",
      badge: "Estrellas Cinta",
      badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
      description: "Adornos laterales con estrellas clásicas.",
      text: styles.starRibbon,
    },
  ];

  const handleCopy = async (id: string, text: string) => {
    try {
      const ok = await copyText(text);
      if (ok) {
        setCopiedId(id);
        if (onCopySuccess) onCopySuccess(text);
        setTimeout(() => setCopiedId(null), 2000);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col animate-scaleUp">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-purple-900 via-slate-900 to-indigo-950 text-white">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⚙️</span>
              <h3 id={titleId} className="text-lg font-bold">
                Personalizar Apodo Gamer
              </h3>
            </div>
            <p className="text-xs text-purple-200 mt-0.5">
              Edita la palabra base y elige entre versión limpia, letras estilizadas o decorada.
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
          {/* Base Word Editing Input */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <label
              htmlFor="apodo-edit-input"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Palabra o Apodo Base
            </label>
            <div className="flex gap-2">
              <input
                id="apodo-edit-input"
                type="text"
                value={baseWord}
                onChange={(e) => setBaseWord(e.target.value)}
                placeholder="Escribe tu apodo..."
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow text-base"
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
            <p className="text-xs text-slate-500 mt-1.5">
              Al modificar el texto de arriba, se actualizan todas las variantes en tiempo real.
            </p>
          </div>

          {/* Compatibility Tip */}
          <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <span className="text-base flex-shrink-0 mt-0.5">⚠️</span>
            <div>
              <span className="font-semibold">Consejo de compatibilidad:</span> Los caracteres especiales Unicode dependen de la fuente del juego y del sistema. Si algún símbolo se muestra como un cuadro (□), copia la versión <strong>Limpia</strong> para garantizar que funcione sin problemas.
            </div>
          </div>

          {/* Style Tiers List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Opciones de estilo disponibles
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
          <span>Prueba tu apodo en el juego antes de confirmar el cambio</span>
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
