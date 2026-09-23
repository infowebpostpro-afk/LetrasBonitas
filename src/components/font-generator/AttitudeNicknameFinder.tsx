"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  ATTITUDE_VIBES,
  ATTITUDE_NICKNAMES_DATABASE,
  AttitudeVibe,
  AttitudeNicknameItem,
  getAttitudeRemix,
  formatSmallCaps,
  formatMathematicalBold,
} from "@/lib/freeFire/attitudeNicknamesData";
import { AttitudeCustomizerModal } from "./AttitudeCustomizerModal";
import { AttitudeSavedModal, SavedCandidateItem } from "./AttitudeSavedModal";
import {
  CopyIcon,
  CheckIcon,
  SearchIcon,
  HeartIcon,
  HeartOutlineIcon,
  ClearIcon,
  SparklesIcon,
} from "@/components/ui/Icons";

export const AttitudeNicknameFinder: React.FC = () => {
  const [selectedVibe, setSelectedVibe] = useState<AttitudeVibe>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [displayStyle, setDisplayStyle] = useState<"all" | "clean" | "styled" | "decorated">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [ariaLiveAnnouncement, setAriaLiveAnnouncement] = useState<string>("");
  
  // Customizer modal state
  const [customizingName, setCustomizingName] = useState<string | null>(null);

  // Favorites state
  const [favorites, setFavorites] = useState<SavedCandidateItem[]>([]);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState<boolean>(false);

  // Semantic Remix state ("More Like This")
  const [activeRemixTarget, setActiveRemixTarget] = useState<AttitudeNicknameItem | null>(null);

  // Shuffle seed
  const [shuffleOrder, setShuffleOrder] = useState<number[]>([]);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("letrasbonitas_attitude_favorites");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  const saveFavorites = (items: SavedCandidateItem[]) => {
    setFavorites(items);
    try {
      localStorage.setItem("letrasbonitas_attitude_favorites", JSON.stringify(items));
    } catch {
      // ignore
    }
  };

  const handleToggleFavorite = (item: AttitudeNicknameItem) => {
    const exists = favorites.some((f) => f.id === item.id);
    let updated: SavedCandidateItem[];
    if (exists) {
      updated = favorites.filter((f) => f.id !== item.id);
      setAriaLiveAnnouncement(`${item.name} removed from saved candidates`);
    } else {
      const newFav: SavedCandidateItem = {
        id: item.id,
        name: item.name,
        vibe: item.tags.join(" · "),
        savedAt: Date.now(),
      };
      updated = [newFav, ...favorites];
      setAriaLiveAnnouncement(`${item.name} saved to candidate list`);
    }
    saveFavorites(updated);
  };

  const isFavorited = useCallback(
    (id: string) => favorites.some((f) => f.id === id),
    [favorites]
  );

  // Shuffle handler
  const handleShuffle = () => {
    const indices = Array.from({ length: ATTITUDE_NICKNAMES_DATABASE.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setShuffleOrder(indices);
    setActiveRemixTarget(null);
    setAriaLiveAnnouncement("Nickname suggestions shuffled");
  };

  // Filtered dataset
  const displayedItems = useMemo(() => {
    let list = [...ATTITUDE_NICKNAMES_DATABASE];

    // If a remix is active, show only remixed items
    if (activeRemixTarget) {
      return getAttitudeRemix(activeRemixTarget, ATTITUDE_NICKNAMES_DATABASE);
    }

    // Apply shuffle order if present and no active search
    if (shuffleOrder.length === list.length && !searchQuery) {
      list = shuffleOrder.map((idx) => list[idx]);
    }

    // Vibe filter
    if (selectedVibe !== "all") {
      list = list.filter((item) => item.vibe === selectedVibe);
    }

    // Search query filter or custom name injector
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      const filtered = list.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q)) ||
          item.prefixWord.toLowerCase().includes(q) ||
          item.suffixWord.toLowerCase().includes(q)
      );

      // If user typed a custom word that's not in the database, inject it as the first dynamic card!
      if (!list.some((item) => item.name.toLowerCase() === q)) {
        const customItem: AttitudeNicknameItem = {
          id: `custom-${Date.now()}`,
          name: searchQuery.trim(),
          vibe: selectedVibe !== "all" ? selectedVibe : "confident",
          tags: ["Custom Input", "Personalized"],
          prefixWord: searchQuery.trim(),
          suffixWord: "",
          meaning: "Your custom attitude word ready for styling",
        };
        return [customItem, ...filtered];
      }

      return filtered;
    }

    return list;
  }, [selectedVibe, searchQuery, shuffleOrder, activeRemixTarget]);

  // Format text according to current display toggle
  const getRenderedText = (item: AttitudeNicknameItem) => {
    if (displayStyle === "clean") return item.name;
    if (displayStyle === "styled") return formatSmallCaps(item.name);
    if (displayStyle === "decorated") return `乂${formatSmallCaps(item.name)}乂`;

    // Default "all" mode: balanced visual presentation
    // Show small-caps with subtle decoration if it has an id index
    const charCode = item.name.charCodeAt(0) % 3;
    if (charCode === 0) return formatSmallCaps(item.name);
    if (charCode === 1) return `『${formatSmallCaps(item.name)}』`;
    return item.name;
  };

  const handleCopy = async (id: string, text: string, name: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setAriaLiveAnnouncement(`${name} copied to clipboard`);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedId(id);
      setAriaLiveAnnouncement(`${name} copied to clipboard`);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleRemix = (item: AttitudeNicknameItem) => {
    setActiveRemixTarget(item);
    setSearchQuery("");
    setAriaLiveAnnouncement(`Showing related attitude concepts for ${item.name}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      {/* ARIA Live Region */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {ariaLiveAnnouncement}
      </div>

      {/* Main Tool Container */}
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
        {/* Tool Header Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950 px-6 py-6 sm:py-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold mb-3 border border-rose-500/30">
              <SparklesIcon size={14} />
              <span>Vibe Engine & Semantic Remix</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              Attitude Free Fire Nickname Finder
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Pick a persona vibe, discover bold concepts, remix related ideas, and customize the visual intensity for your game profile.
            </p>
          </div>

          {/* Quick Stats & Favorites Trigger */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-4 text-slate-400">
              <span>{displayedItems.length} names available</span>
              <span>•</span>
              <span>100% Free & Instant Copy</span>
            </div>

            <button
              type="button"
              onClick={() => setIsSavedModalOpen(true)}
              className="px-3.5 py-1.5 rounded-full bg-rose-600/30 hover:bg-rose-600 text-rose-200 hover:text-white border border-rose-500/40 font-semibold flex items-center gap-1.5 transition-all shadow-sm"
              aria-label={`View ${favorites.length} saved candidates`}
            >
              <HeartIcon size={14} className="text-rose-400 fill-current" />
              <span>Saved Candidates ({favorites.length})</span>
            </button>
          </div>
        </div>

        {/* Controls Section */}
        <div className="p-5 sm:p-6 bg-slate-50/70 border-b border-slate-200 space-y-4">
          {/* Vibe Selection Filters */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                1. Choose Your Vibe
              </span>
              {selectedVibe !== "all" && (
                <button
                  type="button"
                  onClick={() => setSelectedVibe("all")}
                  className="text-xs text-rose-600 hover:text-rose-700 font-semibold"
                >
                  Reset Vibe
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Attitude Vibes">
              {ATTITUDE_VIBES.map((v) => {
                const isActive = selectedVibe === v.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    role="radio"
                    aria-checked={isActive}
                    onClick={() => {
                      setSelectedVibe(v.id);
                      setActiveRemixTarget(null);
                      setAriaLiveAnnouncement(`Filter set to ${v.label}`);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
                      isActive
                        ? "bg-slate-900 text-white shadow-slate-900/20 scale-[1.02]"
                        : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                    }`}
                  >
                    <span>{v.icon}</span>
                    <span>{v.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search, Custom Word Input & Actions Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-2">
            {/* Search Input */}
            <div className="md:col-span-7 relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <SearchIcon size={18} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeRemixTarget) setActiveRemixTarget(null);
                }}
                placeholder="Search words (e.g. Viper, Shadow, Void) or type your own concept..."
                className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <ClearIcon size={16} />
                </button>
              )}
            </div>

            {/* Look Selector (Clean vs Styled vs Decorated) */}
            <div className="md:col-span-3 flex items-center bg-white border border-slate-300 rounded-xl p-1">
              <button
                type="button"
                onClick={() => setDisplayStyle("all")}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  displayStyle === "all"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Mixed
              </button>
              <button
                type="button"
                onClick={() => setDisplayStyle("clean")}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  displayStyle === "clean"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Clean
              </button>
              <button
                type="button"
                onClick={() => setDisplayStyle("decorated")}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  displayStyle === "decorated"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Decorated
              </button>
            </div>

            {/* Shuffle Button */}
            <div className="md:col-span-2">
              <button
                type="button"
                onClick={handleShuffle}
                className="w-full h-full py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <span>🎲</span>
                <span>Shuffle</span>
              </button>
            </div>
          </div>

          {/* Active Semantic Remix Banner */}
          {activeRemixTarget && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between gap-3 animate-fadeIn">
              <div className="flex items-center gap-2">
                <span className="text-lg">🔄</span>
                <div>
                  <span className="text-xs font-bold text-rose-950">
                    More Like &quot;{activeRemixTarget.name}&quot;
                  </span>
                  <p className="text-[11px] text-rose-700">
                    Showing semantically related combinations sharing prefix, suffix, or &quot;{activeRemixTarget.tags.join(" · ")}&quot; vibe.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveRemixTarget(null)}
                className="px-3 py-1 bg-white hover:bg-rose-100 text-rose-800 border border-rose-300 text-xs font-semibold rounded-lg transition-colors flex-shrink-0"
              >
                Show All
              </button>
            </div>
          )}
        </div>

        {/* Results Grid */}
        <div className="p-5 sm:p-6 bg-white min-h-[360px]">
          {displayedItems.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <span className="text-4xl block">🔍</span>
              <h3 className="text-base font-bold text-slate-800">No matching attitude names</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We couldn&apos;t find an existing match for &quot;{searchQuery}&quot;. Try typing your word into the customizer directly to format it!
              </p>
              <button
                type="button"
                onClick={() => setCustomizingName(searchQuery || "DarkViper")}
                className="px-4 py-2 bg-slate-900 hover:bg-rose-600 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
              >
                Customize &quot;{searchQuery || "DarkViper"}&quot; Now
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {displayedItems.map((item) => {
                const rendered = getRenderedText(item);
                const isCopied = copiedId === item.id;
                const hasFavorited = isFavorited(item.id);

                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl border border-slate-200/90 bg-white hover:border-rose-400 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    {/* Top Row: Vibe Tags & Favorite */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleToggleFavorite(item)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          hasFavorited
                            ? "text-rose-600 bg-rose-50"
                            : "text-slate-300 hover:text-rose-500 hover:bg-slate-50"
                        }`}
                        aria-label={`Save ${item.name} to candidates`}
                        title={hasFavorited ? "Saved in candidates" : "Save candidate"}
                      >
                        {hasFavorited ? (
                          <HeartIcon size={16} className="fill-current text-rose-600" />
                        ) : (
                          <HeartOutlineIcon size={16} />
                        )}
                      </button>
                    </div>

                    {/* Nickname Typography Preview */}
                    <div className="py-2.5">
                      <div
                        onClick={() => handleCopy(item.id, rendered, item.name)}
                        className="font-mono text-xl sm:text-2xl font-black text-slate-900 tracking-wide break-all select-all cursor-pointer hover:text-rose-600 transition-colors"
                        title="Click to copy immediately"
                      >
                        {rendered}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {item.meaning}
                      </p>
                    </div>

                    {/* Action Buttons: COPY | CUSTOMIZE | MORE LIKE THIS */}
                    <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5">
                      {/* Copy */}
                      <button
                        type="button"
                        onClick={() => handleCopy(item.id, rendered, item.name)}
                        className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                          isCopied
                            ? "bg-emerald-600 text-white shadow-sm"
                            : "bg-slate-900 hover:bg-rose-600 text-white shadow-sm hover:shadow"
                        }`}
                        aria-label={`Copy ${rendered}`}
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

                      {/* Customize */}
                      <button
                        type="button"
                        onClick={() => setCustomizingName(item.name)}
                        className="py-2 px-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1"
                        title="Customize styles & base word"
                        aria-label={`Customize ${item.name}`}
                      >
                        <span>⚙️</span>
                        <span className="hidden sm:inline">Customize</span>
                      </button>

                      {/* More Like This (Remix) */}
                      <button
                        type="button"
                        onClick={() => handleRemix(item)}
                        className="py-2 px-2.5 rounded-xl text-xs font-semibold bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors flex items-center gap-1"
                        title="Find semantically related concepts (Remix)"
                        aria-label={`More like ${item.name}`}
                      >
                        <span>🔄</span>
                        <span className="hidden sm:inline">Remix</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Customizer Modal */}
      {customizingName && (
        <AttitudeCustomizerModal
          initialName={customizingName}
          isOpen={Boolean(customizingName)}
          onClose={() => setCustomizingName(null)}
          onCopySuccess={(text) => {
            setAriaLiveAnnouncement(`${text} copied to clipboard`);
          }}
        />
      )}

      {/* Saved Candidates Modal */}
      <AttitudeSavedModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        favorites={favorites}
        onRemoveFavorite={(id) => {
          const updated = favorites.filter((f) => f.id !== id);
          saveFavorites(updated);
        }}
        onClearAll={() => saveFavorites([])}
        onOpenCustomizer={(name) => setCustomizingName(name)}
      />
    </div>
  );
};
