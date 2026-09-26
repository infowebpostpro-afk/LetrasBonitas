"use client";

import React, { useState, useId } from "react";
import { CopyIcon, CheckIcon, ClearIcon } from "@/components/ui/Icons";
import { copyText } from "@/lib/clipboard";

export interface SavedCandidateItem {
  id: string;
  name: string;
  vibe: string;
  savedAt: number;
}

interface AttitudeSavedModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: SavedCandidateItem[];
  onRemoveFavorite: (id: string) => void;
  onClearAll: () => void;
  onOpenCustomizer: (name: string) => void;
}

export const AttitudeSavedModal: React.FC<AttitudeSavedModalProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onClearAll,
  onOpenCustomizer,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState<boolean>(false);
  const titleId = useId();

  if (!isOpen) return null;

  const handleCopy = async (id: string, text: string) => {
    try {
      const ok = await copyText(text);
      if (ok) {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      }
    } catch {
      // Fallback
    }
  };

  const handleCopyAll = async () => {
    if (favorites.length === 0) return;
    const allText = favorites.map((f) => f.name).join("\n");
    try {
      const ok = await copyText(allText);
      if (ok) {
        setCopiedAll(true);
        setTimeout(() => setCopiedAll(false), 2000);
      }
    } catch {
      // fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col animate-scaleUp">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-rose-900 to-slate-900 text-white">
          <div className="flex items-center gap-2">
            <span className="text-xl">❤️</span>
            <h3 id={titleId} className="text-lg font-bold">
              Saved Candidate Nicknames ({favorites.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors"
            aria-label="Close modal"
          >
            <ClearIcon size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {favorites.length === 0 ? (
            <div className="text-center py-10 text-slate-400 space-y-2">
              <span className="text-4xl block">🤍</span>
              <p className="text-sm font-medium text-slate-600">No saved candidates yet.</p>
              <p className="text-xs text-slate-400">
                Click the heart icon on any nickname card to save ideas here while browsing.
              </p>
            </div>
          ) : (
            favorites.map((item) => {
              const isCopied = copiedId === item.id;
              return (
                <div
                  key={item.id}
                  className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-2 hover:bg-white hover:border-rose-200 transition-all"
                >
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-base font-bold text-slate-900 block truncate">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Vibe: {item.vibe}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenCustomizer(item.name);
                      }}
                      className="px-2.5 py-1.5 text-xs font-semibold bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg transition-colors"
                      title="Customize this nickname"
                    >
                      Customize
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, item.name)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                        isCopied
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-900 hover:bg-rose-600 text-white"
                      }`}
                    >
                      {isCopied ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
                      <span>{isCopied ? "Copied" : "Copy"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onRemoveFavorite(item.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                      title="Remove from saved"
                      aria-label={`Remove ${item.name} from favorites`}
                    >
                      <ClearIcon size={16} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {favorites.length > 0 && (
          <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={onClearAll}
              className="text-slate-500 hover:text-rose-600 font-medium transition-colors"
            >
              Clear All
            </button>
            <button
              type="button"
              onClick={handleCopyAll}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              {copiedAll ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
              <span>{copiedAll ? "All Copied!" : "Copy All Names"}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
