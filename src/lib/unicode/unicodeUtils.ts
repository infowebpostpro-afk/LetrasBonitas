/** Unicode-safe helpers for grapheme-aware text transforms. */

const ZWJ = "\u200D";
const VS16 = "\uFE0F";
const SKIN_TONE_START = 0x1f3fb;
const SKIN_TONE_END = 0x1f3ff;

function isSkinTone(code: number): boolean {
  return code >= SKIN_TONE_START && code <= SKIN_TONE_END;
}

function isCombiningMark(code: number): boolean {
  return (
    (code >= 0x0300 && code <= 0x036f) ||
    (code >= 0x1ab0 && code <= 0x1aff) ||
    (code >= 0x1dc0 && code <= 0x1dff) ||
    (code >= 0x20d0 && code <= 0x20ff) ||
    (code >= 0xfe20 && code <= 0xfe2f)
  );
}

/**
 * Split text into user-perceived grapheme clusters when Intl.Segmenter
 * is available; otherwise fall back to code-point iteration that keeps
 * ZWJ emoji sequences and combining marks attached.
 */
export function splitGraphemes(text: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), (s) => s.segment);
  }

  const codePoints = Array.from(text);
  const clusters: string[] = [];
  let i = 0;

  while (i < codePoints.length) {
    let cluster = codePoints[i];
    i += 1;

    while (i < codePoints.length) {
      const next = codePoints[i];
      const code = next.codePointAt(0)!;

      if (next === ZWJ || next === VS16 || isSkinTone(code) || isCombiningMark(code)) {
        cluster += next;
        i += 1;
        if (next === ZWJ && i < codePoints.length) {
          cluster += codePoints[i];
          i += 1;
        }
        continue;
      }
      break;
    }

    clusters.push(cluster);
  }

  return clusters;
}

export function mapGraphemes(
  text: string,
  mapper: (grapheme: string, index: number, all: string[]) => string,
): string {
  const graphemes = splitGraphemes(text);
  return graphemes.map(mapper).join("");
}

export function reverseGraphemes(text: string): string {
  return splitGraphemes(text).reverse().join("");
}

export function isEmojiLike(grapheme: string): boolean {
  if (!grapheme) return false;
  if (/\p{Extended_Pictographic}/u.test(grapheme)) return true;
  if (grapheme.includes(ZWJ)) return true;
  return false;
}

export function isWhitespace(grapheme: string): boolean {
  return /^\s+$/u.test(grapheme);
}

export function charCount(text: string): number {
  return splitGraphemes(text).length;
}

export function truncateGraphemes(text: string, max: number): string {
  const graphemes = splitGraphemes(text);
  if (graphemes.length <= max) return text;
  return graphemes.slice(0, max).join("");
}

/** Build A–Z / a–z / 0–9 mapping from consecutive Unicode ranges + exceptions. */
export function buildAlphabetMapping(options: {
  upperStart?: number;
  lowerStart?: number;
  digitStart?: number;
  upperExceptions?: Partial<Record<string, string>>;
  lowerExceptions?: Partial<Record<string, string>>;
  digitExceptions?: Partial<Record<string, string>>;
}): Record<string, string> {
  const map: Record<string, string> = {};
  const {
    upperStart,
    lowerStart,
    digitStart,
    upperExceptions = {},
    lowerExceptions = {},
    digitExceptions = {},
  } = options;

  if (upperStart !== undefined) {
    for (let i = 0; i < 26; i += 1) {
      const from = String.fromCharCode(65 + i);
      map[from] = upperExceptions[from] ?? String.fromCodePoint(upperStart + i);
    }
  }

  if (lowerStart !== undefined) {
    for (let i = 0; i < 26; i += 1) {
      const from = String.fromCharCode(97 + i);
      map[from] = lowerExceptions[from] ?? String.fromCodePoint(lowerStart + i);
    }
  }

  if (digitStart !== undefined) {
    for (let i = 0; i < 10; i += 1) {
      const from = String(i);
      map[from] = digitExceptions[from] ?? String.fromCodePoint(digitStart + i);
    }
  }

  return map;
}

export const SPANISH_CHARS = [
  "á", "é", "í", "ó", "ú", "ü", "ñ",
  "Á", "É", "Í", "Ó", "Ú", "Ü", "Ñ",
  "¿", "¡",
] as const;
