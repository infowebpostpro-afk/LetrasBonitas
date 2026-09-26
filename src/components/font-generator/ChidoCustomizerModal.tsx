'use client';

import React, { useState } from 'react';
import { ChidoItem } from '@/lib/gamingNames/nombresChidosData';
import { copyText } from '@/lib/clipboard';

interface ChidoCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  chidoItem: ChidoItem | null;
}

export const ChidoCustomizerModal: React.FC<ChidoCustomizerModalProps> = ({
  isOpen,
  onClose,
  chidoItem,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen || !chidoItem) return null;

  const name = chidoItem.name;

  const variants = [
    {
      id: 'clean',
      title: 'Versión Sencilla (Texto Plano)',
      description: 'Garantiza máxima compatibilidad. Si el juego prohíbe símbolos, usa esta opción.',
      output: name,
    },
    {
      id: 'tactical-caps',
      title: 'Mayúsculas Tácticas',
      description: 'Sobria e impactante, resalta en los marcadores de bajas.',
      output: name.toUpperCase(),
    },
    {
      id: 'brackets-esport',
      title: 'Enmarcado Esport',
      description: 'Brackets limpios para delimitar tu gamertag.',
      output: `『${name}』`,
    },
    {
      id: 'stars',
      title: 'Destello Astral',
      description: 'Toque estético con estrellas sutiles.',
      output: `✦ ${name} ✦`,
    },
    {
      id: 'crown',
      title: 'Corona Competitiva',
      description: 'Símbolo de corona para jugadores que buscan intimidar.',
      output: `亗 ${name} 亗`,
    },
  ];

  const handleCopy = async (text: string, id: string) => {
    try {
      const ok = await copyText(text);
      if (ok) {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 1800);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="chido-customizer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl shadow-2xl p-6 relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🎨</span>
              <h3 id="chido-customizer-title" className="text-lg font-bold text-white">
                Personalizar: {name}
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Prueba diferentes presentaciones y conserva siempre el respaldo sencillo.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar personalizador"
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800/80 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Pro Tip on Compatibility */}
        <div className="my-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-start gap-2.5">
          <span className="text-amber-400 text-sm mt-0.5">💡</span>
          <p className="text-xs text-amber-200/90 leading-relaxed">
            <strong>Consejo:</strong> Primero valida que te guste el nombre <em>{name}</em> sin adornos. La decoración es secundaria y algunos juegos no admiten símbolos especiales.
          </p>
        </div>

        {/* Variants List */}
        <div className="py-2 overflow-y-auto space-y-3 flex-1">
          {variants.map(v => (
            <div
              key={v.id}
              className="p-4 bg-slate-800/70 border border-slate-700/60 rounded-xl hover:border-cyan-500/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-0.5">
                  {v.title}
                </span>
                <span className="text-base sm:text-lg font-bold text-white tracking-wide block">
                  {v.output}
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5 block">
                  {v.description}
                </span>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={() => handleCopy(v.output, v.id)}
                  className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all shadow-sm flex items-center gap-1.5 ${
                    copiedId === v.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-cyan-500/20'
                  }`}
                >
                  {copiedId === v.id ? '✓ ¡Copiado!' : 'Copiar'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="text-xs px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors"
          >
            Listo
          </button>
        </div>
      </div>
    </div>
  );
};
