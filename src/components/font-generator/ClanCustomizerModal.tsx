'use client';

import React, { useState } from 'react';
import { ClanItem } from '@/lib/gamingNames/clanesJuegosData';
import { copyText } from '@/lib/clipboard';

interface ClanCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  clanItem: ClanItem | null;
  activeTag: string;
}

export const ClanCustomizerModal: React.FC<ClanCustomizerModalProps> = ({
  isOpen,
  onClose,
  clanItem,
  activeTag,
}) => {
  const [copiedVariant, setCopiedVariant] = useState<string | null>(null);

  if (!isOpen || !clanItem) return null;

  const name = clanItem.name;
  const tag = activeTag || clanItem.primaryTag;

  const variants = [
    {
      id: 'clean',
      title: 'Versión Sencilla (Máxima Compatibilidad)',
      description: 'Ideal para juegos con filtros estrictos que prohíben símbolos.',
      output: `${name} [${tag}]`,
      tagOnly: `[${tag}]`,
      nameOnly: name,
    },
    {
      id: 'uppercase',
      title: 'Mayúsculas Tácticas',
      description: 'Estilo impactante para tablas de clasificación e esports.',
      output: `${name.toUpperCase()} [${tag}]`,
      tagOnly: `[${tag}]`,
      nameOnly: name.toUpperCase(),
    },
    {
      id: 'brackets',
      title: 'Enmarcado Esport',
      description: 'Bordes estilizados para destacar el nombre completo.',
      output: `『${name}』 [${tag}]`,
      tagOnly: `【${tag}】`,
      nameOnly: `『${name}』`,
    },
    {
      id: 'symbols-stars',
      title: 'Símbolos de Victoria',
      description: 'Con estrellas o destellos para juegos que aceptan caracteres Unicode.',
      output: `✦ ${name} ✦ [${tag}]`,
      tagOnly: `✦${tag}✦`,
      nameOnly: `✦ ${name} ✦`,
    },
    {
      id: 'symbols-crown',
      title: 'Corona Competitiva',
      description: 'Para escuadras líderes con un toque regio.',
      output: `亗 ${name} 亗 [${tag}]`,
      tagOnly: `亗${tag}亗`,
      nameOnly: `亗 ${name} 亗`,
    },
  ];

  const handleCopy = async (text: string, id: string) => {
    try {
      const ok = await copyText(text);
      if (ok) {
        setCopiedVariant(id);
        setTimeout(() => setCopiedVariant(null), 1800);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="customizer-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl shadow-2xl p-6 relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🎨</span>
              <h3 id="customizer-modal-title" className="text-lg font-bold text-white">
                Personalizar: {name}
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              TAG activa: <span className="font-mono text-cyan-400 font-bold">[{tag}]</span> · Elige una presentación para tu escuadra.
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

        {/* Notice on clean backup */}
        <div className="my-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-start gap-2.5">
          <span className="text-amber-400 text-sm mt-0.5">💡</span>
          <p className="text-xs text-amber-200/90 leading-relaxed">
            <strong>Recomendación:</strong> Guarda siempre la <span className="underline">versión sencilla</span>. Si el juego no admite símbolos especiales, podrás usarla sin errores de registro.
          </p>
        </div>

        {/* Variants list */}
        <div className="py-2 overflow-y-auto space-y-3 flex-1">
          {variants.map(v => (
            <div
              key={v.id}
              className="p-4 bg-slate-800/70 border border-slate-700/60 rounded-xl hover:border-cyan-500/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-1">
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
                    copiedVariant === v.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-cyan-500/20'
                  }`}
                >
                  {copiedVariant === v.id ? '✓ ¡Copiado!' : 'Copiar'}
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
