/**
 * Letras Pequeñas Unicode Mappings & Transform Utilities
 * Complete, authoritative Unicode mappings for:
 * 1. Versalitas (Small Caps)
 * 2. Superíndice (Superscript lowercase and numbers)
 * 3. Mayúsculas Arriba (Superscript uppercase / raised letters)
 * 4. Subíndice (Subscript lowercase and numbers)
 *
 * Fully verified against Unicode Standards.
 */

// ── 1. MAPPINGS PRIMARIOS ──

export const SMALL_CAPS_MAP: Record<string, string> = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ",
  i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ",
  q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x",
  y: "ʏ", z: "ᴢ",
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ғ", G: "ɢ", H: "ʜ",
  I: "ɪ", J: "ᴊ", K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ",
  Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ", U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x",
  Y: "ʏ", Z: "ᴢ",
};

export const SUPERSCRIPT_LOWER_MAP: Record<string, string> = {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ",
  i: "ⁱ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ",
  q: "q", r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ",
  y: "ʸ", z: "ᶻ",
  A: "ᵃ", B: "ᵇ", C: "ᶜ", D: "ᵈ", E: "ᵉ", F: "ᶠ", G: "ᵍ", H: "ʰ",
  I: "ⁱ", J: "ʲ", K: "ᵏ", L: "ˡ", M: "ᵐ", N: "ⁿ", O: "ᵒ", P: "ᵖ",
  Q: "q", R: "ʳ", S: "ˢ", T: "ᵗ", U: "ᵘ", V: "ᵛ", W: "ʷ", X: "ˣ",
  Y: "ʸ", Z: "ᶻ",
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽", ")": "⁾",
};

export const SUPERSCRIPT_UPPER_MAP: Record<string, string> = {
  a: "ᴬ", b: "ᴮ", c: "ᶜ", d: "ᴰ", e: "ᴱ", f: "ᶠ", g: "ᴳ", h: "ᴴ",
  i: "ᴵ", j: "ᴶ", k: "ᴷ", l: "ᴸ", m: "ᴹ", n: "ᴺ", o: "ᴼ", p: "ᴾ",
  q: "Q", r: "ᴿ", s: "ˢ", t: "ᵀ", u: "ᵁ", v: "ⱽ", w: "ᵂ", x: "ˣ",
  y: "ʸ", z: "ᶻ",
  A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ",
  I: "ᴵ", J: "ᴶ", K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ",
  Q: "Q", R: "ᴿ", S: "ˢ", T: "ᵀ", U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ",
  Y: "ʸ", Z: "ᶻ",
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽", ")": "⁾",
};

export const SUBSCRIPT_MAP: Record<string, string> = {
  a: "ₐ", e: "ₑ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ",
  n: "ₙ", o: "ₒ", p: "ₚ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ", v: "ᵥ",
  x: "ₓ",
  A: "ₐ", E: "ₑ", H: "ₕ", I: "ᵢ", J: "ⱼ", K: "ₖ", L: "ₗ", M: "ₘ",
  N: "ₙ", O: "ₒ", P: "ₚ", R: "ᵣ", S: "ₛ", T: "ₜ", U: "ᵤ", V: "ᵥ",
  X: "ₓ",
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄",
  "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉",
  "+": "₊", "-": "₋", "=": "₌", "(": "₍", ")": "₎",
};

export const SUPERSCRIPT_NUMBERS: Record<string, string> = {
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽", ")": "⁾",
};

export const SUBSCRIPT_NUMBERS: Record<string, string> = {
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄",
  "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉",
  "+": "₊", "-": "₋", "=": "₌", "(": "₍", ")": "₎",
};

// Caracteres que faltan en superíndice / subíndice oficial Unicode
export const MISSING_SUPERSCRIPT_LETTERS = new Set(["q", "Q"]);
export const MISSING_SUBSCRIPT_LETTERS = new Set(["b", "c", "d", "f", "g", "q", "w", "y", "z", "B", "C", "D", "F", "G", "Q", "W", "Y", "Z"]);

// ── 2. NORMALIZACIÓN OPCIONAL DE TILDES ──

export function removeSpanishAccents(str: string): string {
  return str
    .replace(/[áäàâ]/g, "a")
    .replace(/[éëèê]/g, "e")
    .replace(/[íïìî]/g, "i")
    .replace(/[óöòô]/g, "o")
    .replace(/[úüùû]/g, "u")
    .replace(/[ÁÄÀÂ]/g, "A")
    .replace(/[ÉËÈÊ]/g, "E")
    .replace(/[ÍÏÌÎ]/g, "I")
    .replace(/[ÓÖÒÔ]/g, "O")
    .replace(/[ÚÜÙÛ]/g, "U")
    .replace(/ñ/g, "n")
    .replace(/Ñ/g, "N");
}

// ── 3. FUNCIONES DE CONVERSIÓN PURAS ──

export function toSmallCaps(text: string, stripAccents = false): string {
  const source = stripAccents ? removeSpanishAccents(text) : text;
  return Array.from(source)
    .map((ch) => SMALL_CAPS_MAP[ch] || ch)
    .join("");
}

export function toSuperscriptLower(text: string, stripAccents = false): string {
  const source = stripAccents ? removeSpanishAccents(text) : text;
  return Array.from(source)
    .map((ch) => SUPERSCRIPT_LOWER_MAP[ch] || ch)
    .join("");
}

export function toSuperscriptUpper(text: string, stripAccents = false): string {
  const source = stripAccents ? removeSpanishAccents(text) : text;
  return Array.from(source)
    .map((ch) => SUPERSCRIPT_UPPER_MAP[ch] || ch)
    .join("");
}

export function toSubscript(text: string, stripAccents = false): string {
  const source = stripAccents ? removeSpanishAccents(text) : text;
  return Array.from(source)
    .map((ch) => SUBSCRIPT_MAP[ch] || ch)
    .join("");
}

// Detección de caracteres no convertibles para advertencia no intrusiva
export function checkUnconvertedLetters(
  text: string,
  style: "smallcaps" | "suplower" | "supupper" | "subscript"
): string[] {
  const unmapped: string[] = [];
  const seen = new Set<string>();

  for (const ch of text) {
    if (seen.has(ch) || /\s/.test(ch)) continue;

    let hasDirect = false;
    if (style === "smallcaps") {
      hasDirect = ch in SMALL_CAPS_MAP;
    } else if (style === "suplower") {
      hasDirect = ch in SUPERSCRIPT_LOWER_MAP && !MISSING_SUPERSCRIPT_LETTERS.has(ch);
    } else if (style === "supupper") {
      hasDirect = ch in SUPERSCRIPT_UPPER_MAP && !MISSING_SUPERSCRIPT_LETTERS.has(ch);
    } else if (style === "subscript") {
      hasDirect = ch in SUBSCRIPT_MAP && !MISSING_SUBSCRIPT_LETTERS.has(ch);
    }

    if (!hasDirect && /[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]/.test(ch)) {
      unmapped.push(ch);
      seen.add(ch);
    }
  }

  return unmapped;
}

// ── 4. LIBRERÍA DE CARACTERES INDIVIDUALES (ABECEDARIO) ──

export interface SmallCharItem {
  glyph: string;
  latin: string;
  category: "versalitas" | "suplower" | "supupper" | "subscript" | "numsup" | "numsub";
  unicodeCode: string;
  isMissing?: boolean;
  note?: string;
}

export const INDIVIDUAL_SMALL_CHARACTERS: SmallCharItem[] = [
  // Versalitas A-Z
  { glyph: "ᴀ", latin: "A", category: "versalitas", unicodeCode: "U+1D00" },
  { glyph: "ʙ", latin: "B", category: "versalitas", unicodeCode: "U+1D04" },
  { glyph: "ᴄ", latin: "C", category: "versalitas", unicodeCode: "U+1D05" },
  { glyph: "ᴅ", latin: "D", category: "versalitas", unicodeCode: "U+1D07" },
  { glyph: "ᴇ", latin: "E", category: "versalitas", unicodeCode: "U+1D08" },
  { glyph: "ғ", latin: "F", category: "versalitas", unicodeCode: "U+0262" },
  { glyph: "ɢ", latin: "G", category: "versalitas", unicodeCode: "U+0262" },
  { glyph: "ʜ", latin: "H", category: "versalitas", unicodeCode: "U+029C" },
  { glyph: "ɪ", latin: "I", category: "versalitas", unicodeCode: "U+026A" },
  { glyph: "ᴊ", latin: "J", category: "versalitas", unicodeCode: "U+1D0A" },
  { glyph: "ᴋ", latin: "K", category: "versalitas", unicodeCode: "U+1D0B" },
  { glyph: "ʟ", latin: "L", category: "versalitas", unicodeCode: "U+029F" },
  { glyph: "ᴍ", latin: "M", category: "versalitas", unicodeCode: "U+1D0D" },
  { glyph: "ɴ", latin: "N", category: "versalitas", unicodeCode: "U+0274" },
  { glyph: "ᴏ", latin: "O", category: "versalitas", unicodeCode: "U+1D0F" },
  { glyph: "ᴘ", latin: "P", category: "versalitas", unicodeCode: "U+1D18" },
  { glyph: "ǫ", latin: "Q", category: "versalitas", unicodeCode: "U+01EB" },
  { glyph: "ʀ", latin: "R", category: "versalitas", unicodeCode: "U+0280" },
  { glyph: "ꜱ", latin: "S", category: "versalitas", unicodeCode: "U+A731" },
  { glyph: "ᴛ", latin: "T", category: "versalitas", unicodeCode: "U+1D1B" },
  { glyph: "ᴜ", latin: "U", category: "versalitas", unicodeCode: "U+1D1C" },
  { glyph: "ᴠ", latin: "V", category: "versalitas", unicodeCode: "U+1D20" },
  { glyph: "ᴡ", latin: "W", category: "versalitas", unicodeCode: "U+1D21" },
  { glyph: "x", latin: "X", category: "versalitas", unicodeCode: "U+0078" },
  { glyph: "ʏ", latin: "Y", category: "versalitas", unicodeCode: "U+028F" },
  { glyph: "ᴢ", latin: "Z", category: "versalitas", unicodeCode: "U+1D22" },

  // Superíndice Minúsculas a-z
  { glyph: "ᵃ", latin: "a", category: "suplower", unicodeCode: "U+1D43" },
  { glyph: "ᵇ", latin: "b", category: "suplower", unicodeCode: "U+1D47" },
  { glyph: "ᶜ", latin: "c", category: "suplower", unicodeCode: "U+1D9C" },
  { glyph: "ᵈ", latin: "d", category: "suplower", unicodeCode: "U+1D48" },
  { glyph: "ᵉ", latin: "e", category: "suplower", unicodeCode: "U+1D49" },
  { glyph: "ᶠ", latin: "f", category: "suplower", unicodeCode: "U+1DA0" },
  { glyph: "ᵍ", latin: "g", category: "suplower", unicodeCode: "U+1D4D" },
  { glyph: "ʰ", latin: "h", category: "suplower", unicodeCode: "U+02B0" },
  { glyph: "ⁱ", latin: "i", category: "suplower", unicodeCode: "U+2071" },
  { glyph: "ʲ", latin: "j", category: "suplower", unicodeCode: "U+02B2" },
  { glyph: "ᵏ", latin: "k", category: "suplower", unicodeCode: "U+1D4F" },
  { glyph: "ˡ", latin: "l", category: "suplower", unicodeCode: "U+02E1" },
  { glyph: "ᵐ", latin: "m", category: "suplower", unicodeCode: "U+1D50" },
  { glyph: "ⁿ", latin: "n", category: "suplower", unicodeCode: "U+207F" },
  { glyph: "ᵒ", latin: "o", category: "suplower", unicodeCode: "U+1D52" },
  { glyph: "ᵖ", latin: "p", category: "suplower", unicodeCode: "U+1D56" },
  { glyph: "q", latin: "q", category: "suplower", unicodeCode: "Sin Unicode nativo", isMissing: true, note: "Unicode no tiene superíndice q" },
  { glyph: "ʳ", latin: "r", category: "suplower", unicodeCode: "U+02B3" },
  { glyph: "ˢ", latin: "s", category: "suplower", unicodeCode: "U+02E2" },
  { glyph: "ᵗ", latin: "t", category: "suplower", unicodeCode: "U+1D57" },
  { glyph: "ᵘ", latin: "u", category: "suplower", unicodeCode: "U+1D58" },
  { glyph: "ᵛ", latin: "v", category: "suplower", unicodeCode: "U+1D5B" },
  { glyph: "ʷ", latin: "w", category: "suplower", unicodeCode: "U+02B7" },
  { glyph: "ˣ", latin: "x", category: "suplower", unicodeCode: "U+02E3" },
  { glyph: "ʸ", latin: "y", category: "suplower", unicodeCode: "U+02B8" },
  { glyph: "ᶻ", latin: "z", category: "suplower", unicodeCode: "U+1DBB" },

  // Mayúsculas Arriba A-Z
  { glyph: "ᴬ", latin: "A", category: "supupper", unicodeCode: "U+1D2C" },
  { glyph: "ᴮ", latin: "B", category: "supupper", unicodeCode: "U+1D2E" },
  { glyph: "ᶜ", latin: "C", category: "supupper", unicodeCode: "U+1D9C" },
  { glyph: "ᴰ", latin: "D", category: "supupper", unicodeCode: "U+1D30" },
  { glyph: "ᴱ", latin: "E", category: "supupper", unicodeCode: "U+1D31" },
  { glyph: "ᶠ", latin: "F", category: "supupper", unicodeCode: "U+1DA0" },
  { glyph: "ᴳ", latin: "G", category: "supupper", unicodeCode: "U+1D33" },
  { glyph: "ᴴ", latin: "H", category: "supupper", unicodeCode: "U+1D34" },
  { glyph: "ᴵ", latin: "I", category: "supupper", unicodeCode: "U+1D35" },
  { glyph: "ᴶ", latin: "J", category: "supupper", unicodeCode: "U+1D36" },
  { glyph: "ᴷ", latin: "K", category: "supupper", unicodeCode: "U+1D37" },
  { glyph: "ᴸ", latin: "L", category: "supupper", unicodeCode: "U+1D38" },
  { glyph: "ᴹ", latin: "M", category: "supupper", unicodeCode: "U+1D39" },
  { glyph: "ᴺ", latin: "N", category: "supupper", unicodeCode: "U+1D3A" },
  { glyph: "ᴼ", latin: "O", category: "supupper", unicodeCode: "U+1D3C" },
  { glyph: "ᴾ", latin: "P", category: "supupper", unicodeCode: "U+1D3E" },
  { glyph: "Q", latin: "Q", category: "supupper", unicodeCode: "Sin Unicode nativo", isMissing: true, note: "Unicode no tiene superíndice Q" },
  { glyph: "ᴿ", latin: "R", category: "supupper", unicodeCode: "U+1D3F" },
  { glyph: "ˢ", latin: "S", category: "supupper", unicodeCode: "U+02E2" },
  { glyph: "ᵀ", latin: "T", category: "supupper", unicodeCode: "U+1D40" },
  { glyph: "ᵁ", latin: "U", category: "supupper", unicodeCode: "U+1D41" },
  { glyph: "ⱽ", latin: "V", category: "supupper", unicodeCode: "U+2C7D" },
  { glyph: "ᵂ", latin: "W", category: "supupper", unicodeCode: "U+1D42" },
  { glyph: "ˣ", latin: "X", category: "supupper", unicodeCode: "U+02E3" },
  { glyph: "ʸ", latin: "Y", category: "supupper", unicodeCode: "U+02B8" },
  { glyph: "ᶻ", latin: "Z", category: "supupper", unicodeCode: "U+1DBB" },

  // Subíndice
  { glyph: "ₐ", latin: "a", category: "subscript", unicodeCode: "U+2090" },
  { glyph: "b", latin: "b", category: "subscript", unicodeCode: "Sin subíndice", isMissing: true, note: "Sin carácter subíndice en Unicode" },
  { glyph: "c", latin: "c", category: "subscript", unicodeCode: "Sin subíndice", isMissing: true, note: "Sin carácter subíndice en Unicode" },
  { glyph: "d", latin: "d", category: "subscript", unicodeCode: "Sin subíndice", isMissing: true, note: "Sin carácter subíndice en Unicode" },
  { glyph: "ₑ", latin: "e", category: "subscript", unicodeCode: "U+2091" },
  { glyph: "f", latin: "f", category: "subscript", unicodeCode: "Sin subíndice", isMissing: true, note: "Sin carácter subíndice en Unicode" },
  { glyph: "g", latin: "g", category: "subscript", unicodeCode: "Sin subíndice", isMissing: true, note: "Sin carácter subíndice en Unicode" },
  { glyph: "ₕ", latin: "h", category: "subscript", unicodeCode: "U+2095" },
  { glyph: "ᵢ", latin: "i", category: "subscript", unicodeCode: "U+1D62" },
  { glyph: "ⱼ", latin: "j", category: "subscript", unicodeCode: "U+2C7C" },
  { glyph: "ₖ", latin: "k", category: "subscript", unicodeCode: "U+2096" },
  { glyph: "ₗ", latin: "l", category: "subscript", unicodeCode: "U+2097" },
  { glyph: "ₘ", latin: "m", category: "subscript", unicodeCode: "U+2098" },
  { glyph: "ₙ", latin: "n", category: "subscript", unicodeCode: "U+2099" },
  { glyph: "ₒ", latin: "o", category: "subscript", unicodeCode: "U+2092" },
  { glyph: "ₚ", latin: "p", category: "subscript", unicodeCode: "U+209A" },
  { glyph: "q", latin: "q", category: "subscript", unicodeCode: "Sin subíndice", isMissing: true, note: "Sin carácter subíndice en Unicode" },
  { glyph: "ᵣ", latin: "r", category: "subscript", unicodeCode: "U+1D63" },
  { glyph: "ₛ", latin: "s", category: "subscript", unicodeCode: "U+209B" },
  { glyph: "ₜ", latin: "t", category: "subscript", unicodeCode: "U+209C" },
  { glyph: "ᵤ", latin: "u", category: "subscript", unicodeCode: "U+1D64" },
  { glyph: "ᵥ", latin: "v", category: "subscript", unicodeCode: "U+1D65" },
  { glyph: "w", latin: "w", category: "subscript", unicodeCode: "Sin subíndice", isMissing: true, note: "Sin carácter subíndice en Unicode" },
  { glyph: "ₓ", latin: "x", category: "subscript", unicodeCode: "U+2093" },
  { glyph: "y", latin: "y", category: "subscript", unicodeCode: "Sin subíndice", isMissing: true, note: "Sin carácter subíndice en Unicode" },
  { glyph: "z", latin: "z", category: "subscript", unicodeCode: "Sin subíndice", isMissing: true, note: "Sin carácter subíndice en Unicode" },

  // Números Arriba
  { glyph: "⁰", latin: "0", category: "numsup", unicodeCode: "U+2070" },
  { glyph: "¹", latin: "1", category: "numsup", unicodeCode: "U+00B9" },
  { glyph: "²", latin: "2", category: "numsup", unicodeCode: "U+00B2" },
  { glyph: "³", latin: "3", category: "numsup", unicodeCode: "U+00B3" },
  { glyph: "⁴", latin: "4", category: "numsup", unicodeCode: "U+2074" },
  { glyph: "⁵", latin: "5", category: "numsup", unicodeCode: "U+2075" },
  { glyph: "⁶", latin: "6", category: "numsup", unicodeCode: "U+2076" },
  { glyph: "⁷", latin: "7", category: "numsup", unicodeCode: "U+2077" },
  { glyph: "⁸", latin: "8", category: "numsup", unicodeCode: "U+2078" },
  { glyph: "⁹", latin: "9", category: "numsup", unicodeCode: "U+2079" },

  // Números Abajo
  { glyph: "₀", latin: "0", category: "numsub", unicodeCode: "U+2080" },
  { glyph: "₁", latin: "1", category: "numsub", unicodeCode: "U+2081" },
  { glyph: "₂", latin: "2", category: "numsub", unicodeCode: "U+2082" },
  { glyph: "₃", latin: "3", category: "numsub", unicodeCode: "U+2083" },
  { glyph: "₄", latin: "4", category: "numsub", unicodeCode: "U+2084" },
  { glyph: "₅", latin: "5", category: "numsub", unicodeCode: "U+2085" },
  { glyph: "₆", latin: "6", category: "numsub", unicodeCode: "U+2086" },
  { glyph: "₇", latin: "7", category: "numsub", unicodeCode: "U+2087" },
  { glyph: "₈", latin: "8", category: "numsub", unicodeCode: "U+2088" },
  { glyph: "₉", latin: "9", category: "numsub", unicodeCode: "U+2089" },
];

// ── 5. VARIACIONES DE ESTILO DINÁMICAS (PHASE 7) ──

export interface SmallStyleCard {
  id: string;
  name: string;
  category: "clasicas" | "arriba" | "abajo" | "aesthetic" | "gaming" | "minimalistas" | "decoradas";
  generate: (text: string, stripAccents: boolean) => string;
  badge: string;
  description: string;
}

export const SMALL_LETTER_STYLES: SmallStyleCard[] = [
  // ── Los 4 Principales (Above-The-Fold) ──
  {
    id: "versalitas-clasica",
    name: "Versalitas (Small Caps)",
    category: "clasicas",
    badge: "Principal",
    description: "Mayúsculas en tamaño reducido, ideales para nombres limpios y perfiles.",
    generate: (t, strip) => toSmallCaps(t, strip),
  },
  {
    id: "letras-arriba",
    name: "Letras Arriba (Superíndice)",
    category: "arriba",
    badge: "Principal",
    description: "Texto flotante elevado, el estilo preferido para Free Fire y tags.",
    generate: (t, strip) => toSuperscriptLower(t, strip),
  },
  {
    id: "mayusculas-arriba",
    name: "Mayúsculas Arriba",
    category: "arriba",
    badge: "Principal",
    description: "Versión elevada de letras en caja alta para siglas y clanes.",
    generate: (t, strip) => toSuperscriptUpper(t, strip),
  },
  {
    id: "letras-abajo",
    name: "Letras Abajo (Subíndice)",
    category: "abajo",
    badge: "Principal",
    description: "Caracteres alineados bajo la línea base con números y letras científicas.",
    generate: (t, strip) => toSubscript(t, strip),
  },

  // ── Categoría Aesthetic ──
  {
    id: "aesthetic-estrellas",
    name: "Aesthetic con Estrellas",
    category: "aesthetic",
    badge: "Aesthetic",
    description: "Versalitas enmarcadas con destellos y estrellas tenues.",
    generate: (t, strip) => `⋆｡°✩ ${toSmallCaps(t, strip)} ✩°｡⋆`,
  },
  {
    id: "aesthetic-destellos",
    name: "Destellos Mágicos",
    category: "aesthetic",
    badge: "Aesthetic",
    description: "Letras pequeñas acompañadas de chispas delicadas.",
    generate: (t, strip) => `✧ ${toSmallCaps(t, strip)} ✧`,
  },
  {
    id: "aesthetic-corazones",
    name: "Corazones Suaves",
    category: "aesthetic",
    badge: "Aesthetic",
    description: "Diseño romántico con corazones minimalistas.",
    generate: (t, strip) => `♡ ${toSmallCaps(t, strip)} ♡`,
  },
  {
    id: "aesthetic-mariposas",
    name: "Alas y Versalitas",
    category: "aesthetic",
    badge: "Aesthetic",
    description: "Marco ornamental con alas de mariposa.",
    generate: (t, strip) => `ʚ ${toSmallCaps(t, strip)} ɞ`,
  },
  {
    id: "aesthetic-flores",
    name: "Flores Sakura",
    category: "aesthetic",
    badge: "Aesthetic",
    description: "Decorado floral sutil para bios de Instagram.",
    generate: (t, strip) => `❀ ${toSmallCaps(t, strip)} ❀`,
  },

  // ── Categoría Gaming ──
  {
    id: "gaming-clan-tm",
    name: "Clan Tag ᵀᴹ",
    category: "gaming",
    badge: "Gaming",
    description: "Versalitas con insignia de marca registrada elevada para Free Fire.",
    generate: (t, strip) => `${toSmallCaps(t, strip)}ᵀᴹ`,
  },
  {
    id: "gaming-clan-ff",
    name: "Etiqueta ᶠᶠ Pro",
    category: "gaming",
    badge: "Gaming",
    description: "Sello de clan con letras minúsculas elevadas.",
    generate: (t, strip) => `[ᶠᶠ] ${toSmallCaps(t, strip)}`,
  },
  {
    id: "gaming-espadas",
    name: "Duelo de Espadas",
    category: "gaming",
    badge: "Gaming",
    description: "Nombre de combate rodeado de espadas cruzadas.",
    generate: (t, strip) => `⚔️ ${toSmallCaps(t, strip)} ⚔️`,
  },
  {
    id: "gaming-rayo",
    name: "Modo Relámpago",
    category: "gaming",
    badge: "Gaming",
    description: "Energía eléctrica para nicks competitivos.",
    generate: (t, strip) => `⚡ ${toSuperscriptUpper(t, strip)} ⚡`,
  },
  {
    id: "gaming-corona",
    name: "Corona de Rey",
    category: "gaming",
    badge: "Gaming",
    description: "Versalitas reales para capitanes de equipo.",
    generate: (t, strip) => `👑 ${toSmallCaps(t, strip)} 👑`,
  },

  // ── Categoría Minimalistas ──
  {
    id: "minimal-corchetes",
    name: "Corchetes Modernos",
    category: "minimalistas",
    badge: "Minimalista",
    description: "Encuadre limpio entre corchetes japoneses.",
    generate: (t, strip) => `⟦ ${toSmallCaps(t, strip)} ⟧`,
  },
  {
    id: "minimal-parentesis",
    name: "Paréntesis Dobles",
    category: "minimalistas",
    badge: "Minimalista",
    description: "Elegante encierro con paréntesis dobles simétricos.",
    generate: (t, strip) => `(( ${toSmallCaps(t, strip)} ))`,
  },
  {
    id: "minimal-barras",
    name: "Columnas Simétricas",
    category: "minimalistas",
    badge: "Minimalista",
    description: "Estilo limpio delimitado por barras verticales.",
    generate: (t, strip) => `| ${toSmallCaps(t, strip)} |`,
  },
  {
    id: "minimal-espaciado",
    name: "Versalitas Espaciadas",
    category: "minimalistas",
    badge: "Minimalista",
    description: "Efecto editorial con un espacio entre cada glifo.",
    generate: (t, strip) => Array.from(toSmallCaps(t, strip)).join(" "),
  },

  // ── Categoría Decoradas ──
  {
    id: "decorada-rombo",
    name: "Rombos Geométrícos",
    category: "decoradas",
    badge: "Decoradas",
    description: "Patrón con diamantes y rombos simétricos.",
    generate: (t, strip) => `◈ ${toSmallCaps(t, strip)} ◈`,
  },
  {
    id: "decorada-lazos",
    name: "Lazo Elegante",
    category: "decoradas",
    badge: "Decoradas",
    description: "Decoración con lazos estilizados para títulos.",
    generate: (t, strip) => `୨୧ ${toSmallCaps(t, strip)} ୨୧`,
  },
  {
    id: "decorada-fuego",
    name: "Llamas Insanas",
    category: "decoradas",
    badge: "Decoradas",
    description: "Intensidad visual para biografías de impacto.",
    generate: (t, strip) => `🔥 ${toSmallCaps(t, strip)} 🔥`,
  },
];
