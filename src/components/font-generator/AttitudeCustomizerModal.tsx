"use client";

import React, { useState, useId } from "react";
import { generateAttitudeStyles } from "@/lib/freeFire/attitudeNicknamesData";
import { CopyIcon, CheckIcon, ClearIcon } from "@/components/ui/Icons";

interface AttitudeCustomizerModalProps {
  initialName: string;
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess?: (copiedText: string) => void;
}

export const AttitudeCustomizerModal: React.FC<AttitudeCustomizerModalProps> = ({
  initialName,
  isOpen,
  onClose,
  onCopySuccess,
}) => {
  const [baseWord, setBaseWord] = useState<string>(initialName);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const titleId = useId();

  // Keep state synced when modal re-opens with new name
  React.useEffect(() => {
    setBaseWord(initialName);
  }, [initialName]);

  if (!isOpen) return null;

  const styles = generateAttitudeStyles(baseWord || "DarkViper");

  const variations = [
    {
      id: "clean",
      category: "Clean",
      badge: "Base Word",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-300",
      description: "Direct base word without symbols or special glyphs. 100% universal readability.",
      text: styles.clean,
    },
    {
      id: "bold-smallcaps",
      category: "Bold / Light Style",
      badge: "Small Caps",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      description: "Subtle small-caps letters for a sleek, modern attitude look.",
      text: styles.boldSmallCaps,
    },
    {
      id: "math-bold",
      category: "Bold / Light Style",
      badge: "Math Bold",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description: "High-contrast bold lettering that stands out in lobbies.",
      text: styles.mathBold,
    },
    {
      id: "framed",
      category: "Decorated",
      badge: "Framed",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      description: "Clean Japanese corner brackets framing the name neatly.",
      text: styles.framedBracket,
    },
    {
      id: "samurai",
      category: "Decorated",
      badge: "Samurai X",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      description: "Classic tactical cross markers for a decisive battlefield feel.",
      text: styles.decoratedSamurai,
    },
    {
      id: "crown",
      category: "Decorated",
      badge: "King Crown",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      description: "Royal Free Fire insignia framing the small-caps base.",
      text: styles.decoratedCrown,
    },
    {
      id: "ribbon",
      category: "Decorated",
      badge: "Star Ribbon",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      description: "Balanced star flourishes flanking the nickname.",
      text: styles.decoratedRibbon,
    },
  ];

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      if (onCopySuccess) onCopySuccess(text);
      setTimeout(() => setCopiedId(null), 2200);
    } catch {
      // Clipboard fallback
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedId(id);
      if (onCopySuccess) onCopySuccess(text);
      setTimeout(() => setCopiedId(null), 2200);
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
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⚙️</span>
              <h3 id={titleId} className="text-lg font-bold">
                Customize Attitude Nickname
              </h3>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Personalize base text and choose your visual treatment intensity.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors"
            aria-label="Close modal"
          >
            <ClearIcon size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Base Name Input Box */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <label
              htmlFor="customizer-base-word"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Base Word or Concept
            </label>
            <div className="flex gap-2">
              <input
                id="customizer-base-word"
                type="text"
                value={baseWord}
                onChange={(e) => setBaseWord(e.target.value)}
                placeholder="Type your nickname concept..."
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-shadow text-base"
                maxLength={20}
              />
              {baseWord && (
                <button
                  type="button"
                  onClick={() => setBaseWord("")}
                  className="px-3 py-2 text-xs font-medium text-slate-500 bg-white border border-slate-300 rounded-lg hover:text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-1.5">
              Edit the text above to immediately re-generate all styles.
            </p>
          </div>

          {/* Fallback Notice */}
          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <span className="text-base flex-shrink-0 mt-0.5">⚠️</span>
            <div>
              <span className="font-semibold">Display Tip:</span> Unicode rendering depends on device and font support. If any special character shows as a box (□) inside Free Fire, simply use the <strong>Clean</strong> version as a guaranteed fallback.
            </div>
          </div>

          {/* Treatment Cards Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Style Treatments
            </h4>

            <div className="space-y-2.5">
              {variations.map((item) => {
                const isCopied = copiedId === item.id;
                return (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-rose-300 hover:shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}
                        >
                          {item.badge}
                        </span>
                        <span className="text-xs text-slate-400">({item.category})</span>
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
                          : "bg-slate-900 hover:bg-rose-600 text-white shadow-sm hover:shadow"
                      }`}
                      aria-label={`Copy ${item.text}`}
                    >
                      {isCopied ? (
                        <>
                          <CheckIcon size={14} />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon size={14} />
                          <span>Copy</span>
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
          <span>Test in Free Fire before final confirmation</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-medium transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
