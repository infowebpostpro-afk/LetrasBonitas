'use client';

import React, { useState } from 'react';
import { ClanItem } from '@/lib/gamingNames/clanesJuegosData';

interface ClanShortlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  shortlist: { item: ClanItem; selectedTag: string }[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export const ClanShortlistModal: React.FC<ClanShortlistModalProps> = ({
  isOpen,
  onClose,
  shortlist,
  onRemove,
  onClear,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [allCopied, setAllCopied] = useState(false);

  if (!isOpen) return null;

  const copySingle = async (name: string, tag: string, id: string) => {
    try {
      await navigator.clipboard.writeText(`${name} [${tag}]`);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // Fallback
    }
  };

  const copyAll = async () => {
    try {
      const listText = shortlist
        .map((entry, idx) => `${idx + 1}. ${entry.item.name} [${entry.selectedTag}]`)
        .join('\n');
      const textToCopy = `🎮 Opciones Finalistas para el Clan:\n${listText}\n\n¿Cuál votamos?`;
      await navigator.clipboard.writeText(textToCopy);
      setAllCopied(true);
      setTimeout(() => setAllCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="shortlist-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg shadow-2xl p-6 relative overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <h3 id="shortlist-modal-title" className="text-lg font-bold text-white">
                Finalistas del Clan
              </h3>
              <span className="text-xs bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                {shortlist.length} {shortlist.length === 1 ? 'opción' : 'opciones'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Compara candidatos con tu equipo para votar en Discord o WhatsApp.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar ventana de finalistas"
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800/80 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="py-4 overflow-y-auto space-y-3 flex-1">
          {shortlist.length === 0 ? (
            <div className="text-center py-10 px-4 text-slate-400">
              <span className="text-3xl block mb-2">⭐</span>
              <p className="text-sm font-medium text-slate-300">Aún no has guardado ningún finalista.</p>
              <p className="text-xs text-slate-500 mt-1">
                Haz clic en el icono de estrella o &ldquo;Guardar&rdquo; en cualquier tarjeta para agregarlo a la lista de votación.
              </p>
            </div>
          ) : (
            shortlist.map((entry, idx) => (
              <div
                key={entry.item.id}
                className="flex items-center justify-between p-3.5 bg-slate-800/70 border border-slate-700/60 rounded-xl hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-400 w-5 text-center">
                    {idx + 1}.
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-base">
                        {entry.item.name}
                      </span>
                      <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-1.5 py-0.5 rounded">
                        [{entry.selectedTag}]
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 capitalize">
                      Estilo: {entry.item.style}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copySingle(entry.item.name, entry.selectedTag, entry.item.id)}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-700/80 hover:bg-cyan-600 text-slate-200 hover:text-white font-medium transition-colors flex items-center gap-1"
                    title="Copiar nombre y TAG"
                  >
                    {copiedId === entry.item.id ? '✓' : 'Copiar'}
                  </button>
                  <button
                    onClick={() => onRemove(entry.item.id)}
                    className="text-xs p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-700/50 transition-colors"
                    title="Eliminar de finalistas"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {shortlist.length > 0 && (
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={onClear}
              className="text-xs text-slate-400 hover:text-red-400 transition-colors"
            >
              Vaciar finalistas
            </button>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={copyAll}
                className="w-full sm:w-auto text-xs px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5"
              >
                {allCopied ? '✓ ¡Lista Copiada!' : '📋 Copiar Todos para Votar'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
