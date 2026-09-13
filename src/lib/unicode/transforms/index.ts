import {
  isEmojiLike,
  isWhitespace,
  mapGraphemes,
  reverseGraphemes,
  splitGraphemes,
} from "../unicodeUtils";
import { TOOL_CONFIG } from "../types";

export type CharMap = Record<string, string>;

export function createMappingTransform(mapping: CharMap): (text: string) => string {
  return (text: string) =>
    mapGraphemes(text, (g) => {
      if (isEmojiLike(g) || isWhitespace(g)) return g;
      if (mapping[g] !== undefined) return mapping[g];
      // Base letter only (strip combining for lookup of accented letters)
      const base = g.normalize("NFD")[0] ?? g;
      if (mapping[g] === undefined && mapping[base] !== undefined && g.length > 1) {
        // Preserve accents as combining marks after mapped base when possible
        const rest = g.normalize("NFD").slice(1);
        return mapping[base] + rest;
      }
      return g;
    });
}

export function createWrapperTransform(
  prefix: string,
  suffix: string = prefix,
): (text: string) => string {
  return (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return `${prefix} ${suffix}`.trim();
    return `${prefix} ${trimmed} ${suffix}`;
  };
}

export function createFrameTransform(
  left: string,
  right: string,
): (text: string) => string {
  return (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return `${left}${right}`;
    return `${left}${trimmed}${right}`;
  };
}

export function createInterleaveTransform(separator: string): (text: string) => string {
  return (text: string) =>
    splitGraphemes(text)
      .filter((g) => !isWhitespace(g) || g === " ")
      .join(separator);
}

export function createCombiningTransform(
  marks: string[],
  options?: { perChar?: number; position?: "after" | "around" },
): (text: string) => string {
  const perChar = Math.min(
    options?.perChar ?? marks.length,
    TOOL_CONFIG.maxCombiningMarksPerCharacter,
  );
  const selected = marks.slice(0, perChar);

  return (text: string) =>
    mapGraphemes(text, (g) => {
      if (isEmojiLike(g) || isWhitespace(g)) return g;
      return g + selected.join("");
    });
}

export function createAlternatingCombiningTransform(
  markSets: string[][],
): (text: string) => string {
  return (text: string) => {
    let i = 0;
    return mapGraphemes(text, (g) => {
      if (isEmojiLike(g) || isWhitespace(g)) return g;
      const marks = markSets[i % markSets.length] ?? [];
      i += 1;
      return g + marks.slice(0, TOOL_CONFIG.maxCombiningMarksPerCharacter).join("");
    });
  };
}

export function createReverseTransform(): (text: string) => string {
  return (text: string) => reverseGraphemes(text);
}

export function createUpsideDownTransform(mapping: CharMap): (text: string) => string {
  return (text: string) => {
    const flipped = mapGraphemes(text, (g) => {
      if (isEmojiLike(g)) return g;
      if (mapping[g] !== undefined) return mapping[g];
      const lower = g.toLowerCase();
      if (mapping[lower] !== undefined) return mapping[lower];
      return g;
    });
    return reverseGraphemes(flipped);
  };
}

export function composeTransforms(
  ...fns: Array<(text: string) => string>
): (text: string) => string {
  return (text: string) => fns.reduce((acc, fn) => fn(acc), text);
}

export function createSafeTransform(
  transform: (text: string) => string,
  fallback: (text: string) => string = (t) => t,
): (text: string) => string {
  return (text: string) => {
    try {
      const result = transform(text);
      if (typeof result !== "string") return fallback(text);
      return result;
    } catch {
      return fallback(text);
    }
  };
}

export function createSpacingTransform(spacer: string): (text: string) => string {
  return (text: string) =>
    mapGraphemes(text, (g, i, all) => {
      if (i === all.length - 1) return g;
      if (isWhitespace(g)) return g;
      return g + spacer;
    });
}

export function createCaseTransform(
  mode: "upper" | "lower" | "title" | "alternating",
): (text: string) => string {
  return (text: string) => {
    if (mode === "upper") return text.toLocaleUpperCase("es");
    if (mode === "lower") return text.toLocaleLowerCase("es");
    if (mode === "title") {
      return text.replace(/\S+/gu, (word) => {
        const chars = splitGraphemes(word);
        if (!chars.length) return word;
        return chars[0].toLocaleUpperCase("es") + chars.slice(1).join("").toLocaleLowerCase("es");
      });
    }
    let toggle = true;
    return mapGraphemes(text, (g) => {
      if (isWhitespace(g) || isEmojiLike(g)) return g;
      const out = toggle ? g.toLocaleUpperCase("es") : g.toLocaleLowerCase("es");
      toggle = !toggle;
      return out;
    });
  };
}
