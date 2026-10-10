"use client";

import React, { useState, useEffect, useRef } from "react";
import { GAMING_DECORATION_PRESETS } from "@/lib/gamingNames/gamingNameData";
import { charCount } from "@/lib/unicode";
import { CheckIcon, CopyIcon, HeartIcon, HeartOutlineIcon } from "@/components/ui/Icons";
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
  const [selectedPresetId, setSelectedPresetId] = useState<string>("clean");
  const [customizedName, setCustomizedName] = useState<string>(name);
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Load favorites to check if current name is favorited
  useEffect(() => {
    try {
      const stored = localStorage.getItem("letrasbonitas_gaming_favorites");
      if (stored) {
        const favorites = JSON.parse(stored);
        setIsFavorited(favorites.some((f: { name: string }) => f.name === customizedName));
      }
    } catch {
      // Ignore
    }
  }, [customizedName]);

  // Update customizedName when preset changes
  useEffect(() => {
    const preset = GAMING_DECORATION_PRESETS.find(p => p.id === selectedPresetId);
    if (preset) {
      setCustomizedName(preset.apply(name));
    }
  }, [selectedPresetId, name]);

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

  const handleToggleFavorite = () => {
    try {
      const stored = localStorage.getItem("letrasbonitas_gaming_favorites");
      let favorites = stored ? JSON.parse(stored) : [];

      if (isFavorited) {
        favorites = favorites.filter((f: { name: string }) => f.name !== customizedName);
        setIsFavorited(false);
      } else {
        favorites.unshift({
          id: `${Date.now()}-${customizedName}`,
          name: customizedName,
          charLength: charCount(customizedName),
        });
        setIsFavorited(true);
      }

      localStorage.setItem("letrasbonitas_gaming_favorites", JSON.stringify(favorites));
    } catch {
      // Ignore
    }
  };

  if (!isOpen || !name) return null;

  const selectedPreset = GAMING_DECORATION_PRESETS.find(p => p.id === selectedPresetId);
  const currentCharCount = charCount(customizedName);

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
        className="w-full max-w-3xl max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
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

        {/* Live Preview Section */}
        <div className="p-6 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
          <div className="flex flex-col items-center justify-center space-y-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Vista previa</span>
            <div className="text-3xl font-bold text-slate-900 text-center break-all select-all font-sans p-4 bg-white rounded-2xl border-2 border-teal-200 shadow-sm min-w-[300px]">
              {customizedName}
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1 font-mono bg-slate-100 px-2 py-1 rounded-md">
                {currentCharCount} caracteres
              </span>
              {selectedPreset && (
                <span className="text-slate-500">
                  Estilo: {selectedPreset.name}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content / Variants List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {GAMING_DECORATION_PRESETS.map((preset) => {
              const decorated = preset.apply(name);
              const count = charCount(decorated);
              const isSelected = selectedPresetId === preset.id;

              return (
                <div
                  key={preset.id}
                  onClick={() => setSelectedPresetId(preset.id)}
                  className={`flex items-center justify-between p-3.5 rounded-xl transition-all cursor-pointer border-2 ${
                    isSelected
                      ? "bg-teal-50 border-teal-500 ring-2 ring-teal-200"
                      : "bg-slate-50 border-slate-200/80 hover:border-teal-300 hover:bg-teal-50/40"
                  }`}
                >
                  <div className="min-w-0 pr-3">
                    <span className="text-[11px] font-medium text-slate-600 block uppercase tracking-wider">
                      {preset.name}
                    </span>
                    <span className="text-sm font-semibold text-slate-800 break-all select-all font-sans block mt-0.5">
                      {decorated}
                    </span>
                    <span className="text-[11px] text-slate-600 block mt-1">
                      {count} caracteres
                    </span>
                  </div>

                  {isSelected && (
                    <div className="flex-shrink-0 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleToggleFavorite}
              className="p-2 text-slate-400 hover:text-rose-500 transition-colors"
              aria-label={isFavorited ? "Eliminar de favoritos" : "Guardar en favoritos"}
            >
              {isFavorited ? (
                <HeartIcon size={18} className="text-rose-500" />
              ) : (
                <HeartOutlineIcon size={18} className="text-slate-400" />
              )}
            </button>
            <span className="text-xs text-slate-500">
              {isFavorited ? "Guardado en favoritos" : "Guardar en favoritos"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 hidden sm:inline">
              Consejo: Comprueba si tu juego acepta símbolos
            </span>
            <button
              type="button"
              onClick={() => handleCopy(`preview-${selectedPresetId}`, customizedName)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-teal-700/20 transition-all"
            >
              {copiedId === `preview-${selectedPresetId}` ? (
                <>
                  <CheckIcon size={16} className="text-white" />
                  <span>Copiado</span>
                </>
              ) : (
                <>
                  <CopyIcon size={16} />
                  <span>Copiar</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-xl transition-colors text-sm"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
