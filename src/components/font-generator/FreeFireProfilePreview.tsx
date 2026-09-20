"use client";

import React, { useState } from "react";
import { copyText } from "@/lib/clipboard";

interface FreeFireProfilePreviewProps {
  nickname: string;
}

export const FreeFireProfilePreview: React.FC<FreeFireProfilePreviewProps> = ({ nickname }) => {
  const [copied, setCopied] = useState(false);

  const displayNick = nickname.trim() || "꧁Sʜᴀᴅᴏᴡ꧂";

  const handleCopy = async () => {
    const success = await copyText(displayNick);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-xl overflow-hidden relative">
      {/* Background glow accents */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
            Vista Previa del Perfil
          </span>
        </div>
        <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-teal-300 border border-slate-700">
          NIVEL 75
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
        {/* Generic Gaming Avatar */}
        <div className="relative shrink-0">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-teal-600 via-indigo-600 to-purple-600 flex items-center justify-center text-2xl shadow-inner border-2 border-teal-400/40">
            🎮
          </div>
          <span className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded-full border border-slate-900">
            PRO
          </span>
        </div>

        {/* Player Info & Nickname */}
        <div className="flex-1 text-center sm:text-left min-w-0 w-full">
          <div className="text-xs text-slate-400 mb-1 flex items-center justify-center sm:justify-start gap-1">
            <span>CLAN:</span>
            <span className="text-amber-400 font-semibold">亗 LEGENDS 亗</span>
          </div>

          <div className="text-lg sm:text-2xl font-black tracking-wide text-teal-300 break-all py-1">
            {displayNick}
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 mt-1 text-[11px] text-slate-400">
            <span>Rango: Heroico</span>
            <span>•</span>
            <span>Honor: 100</span>
          </div>
        </div>

        {/* Action button inside preview */}
        <div className="shrink-0 w-full sm:w-auto">
          <button
            onClick={handleCopy}
            className={`w-full sm:w-auto min-h-[44px] px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
              copied
                ? "bg-emerald-600 text-white"
                : "bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold shadow-md hover:shadow-teal-500/20 active:scale-95"
            }`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>¡Copiado!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                <span>Copiar Apodo</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
