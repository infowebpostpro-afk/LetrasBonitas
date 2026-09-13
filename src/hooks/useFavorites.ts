"use client";

import { useCallback, useEffect, useState } from "react";

export function useFavorites(storageKey: string) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as unknown;
        if (Array.isArray(parsed)) {
          setFavorites(parsed.filter((x): x is string => typeof x === "string"));
        }
      }
    } catch {
      // ignore corrupt storage
    }
    setReady(true);
  }, [storageKey]);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(favorites));
    } catch {
      // ignore quota errors
    }
  }, [favorites, ready, storageKey]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  const isFavorite = useCallback(
    (id: string) => favorites.includes(id),
    [favorites],
  );

  return {
    favorites,
    favoriteSet: new Set(favorites),
    toggleFavorite,
    isFavorite,
    ready,
  };
}
