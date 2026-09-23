'use client';

import React, { useState } from 'react';
import { ChidoItem } from '@/lib/gamingNames/nombresChidosData';

interface ChidoFavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: ChidoItem[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export const ChidoFavoritesModal: React.FC<ChidoFavoritesModalProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemove,
  onClear,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [allCopied, setAllCopied] = useState(false);

  if (!isOpen) return null;

  const copySingle = async (name: string, id: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // Fallback
    }
  };

  const copyAll = async () => {
    try {
      const listText = favorites
        .map((item, idx) => `${idx + 1}. ${item.name} (${item.name.length} letras - ${item.vibe})`)
        .join('\n');
      const textToCopy = `🎮 Mis Nombres Gamer Favoritos:\n${listText}\n\nCreados en LetrasBonitas`;
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
      aria-labelledby="chido-favorites-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg shadow-2xl p-6 relative overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⭐</span>
              <h3 id="chido-favorites-title" className="text-lg font-bold text-white">
                Mis Nombres Finalistas
              </h3>
              <span className="text-xs bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                {favorites.length} {favorites.length === 1 ? 'nombre' : 'nombres'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Compara tus mejores opciones y aplica la prueba de los 5 segundos antes de decidir.
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

        {/* 5-Second Test Reminder */}
        <div className="my-3 p-3 bg-cyan-950/40 border border-cyan-800/50 rounded-xl">
          <p className="text-[11px] text-cyan-200/90 leading-relaxed">
            <strong>Prueba de 5 segundos:</strong> ¿Cuál lees más rápido? ¿Cuál pronuncias sin explicarlo? ¿Cuál recordarás mañana?
          </p>
        </div>

        {/* Content */}
        <div className="py-2 overflow-y-auto space-y-2.5 flex-1">
          {favorites.length === 0 ? (
            <div className="text-center py-10 px-4 text-slate-400">
              <span className="text-3xl block mb-2">🏷️</span>
              <p className="text-sm font-medium text-slate-300">No tienes ningún nombre guardado aún.</p>
              <p className="text-xs text-slate-500 mt-1">
                Haz clic en el icono de estrella (☆) en cualquier tarjeta para añadirlo a tus finalistas.
              </p>
            </div>
          ) : (
            favorites.map((item, idx) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-slate-800/70 border border-slate-700/60 rounded-xl hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-400 w-5 text-center">
                    {idx + 1}.
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-base">
                        {item.name}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-700/60 px-1.5 py-0.5 rounded">
                        {item.name.length} chars
                      </span>
                    </div>
                    <span className="text-[11px] text-cyan-400 capitalize">
                      Vibra: {item.vibe}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copySingle(item.name, item.id)}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-700/80 hover:bg-cyan-600 text-slate-200 hover:text-white font-medium transition-colors"
                  >
                    {copiedId === item.id ? '✓' : 'Copiar'}
                  </button>
                  <button
                    onClick={() => onRemove(item.id)}
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
        {favorites.length > 0 && (
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={onClear}
              className="text-xs text-slate-400 hover:text-red-400 transition-colors"
            >
              Vaciar finalistas
            </button>
            <button
              onClick={copyAll}
              className="w-full sm:w-auto text-xs px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5"
            >
              {allCopied ? '✓ ¡Lista Copiada!' : '📋 Copiar Todos'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
