import { buildAlphabetMapping } from "../unicodeUtils";
import type { CharMap } from "../transforms";

/** Mathematical Alphanumeric Symbols — real Unicode mappings. */

export const boldSerif: CharMap = buildAlphabetMapping({
  upperStart: 0x1d400,
  lowerStart: 0x1d41a,
  digitStart: 0x1d7ce,
});

export const italicSerif: CharMap = buildAlphabetMapping({
  upperStart: 0x1d434,
  lowerStart: 0x1d44e,
  lowerExceptions: { h: "ℎ" }, // U+210E
});

export const boldItalicSerif: CharMap = buildAlphabetMapping({
  upperStart: 0x1d468,
  lowerStart: 0x1d482,
});

export const script: CharMap = buildAlphabetMapping({
  upperStart: 0x1d49c,
  lowerStart: 0x1d4b6,
  upperExceptions: {
    B: "ℬ",
    E: "ℰ",
    F: "ℱ",
    H: "ℋ",
    I: "ℐ",
    L: "ℒ",
    M: "ℳ",
    R: "ℛ",
  },
  lowerExceptions: {
    e: "ℯ",
    g: "ℊ",
    o: "ℴ",
  },
});

export const boldScript: CharMap = buildAlphabetMapping({
  upperStart: 0x1d4d0,
  lowerStart: 0x1d4ea,
});

export const fraktur: CharMap = buildAlphabetMapping({
  upperStart: 0x1d504,
  lowerStart: 0x1d51e,
  upperExceptions: {
    C: "ℭ",
    H: "ℌ",
    I: "ℑ",
    R: "ℜ",
    Z: "ℨ",
  },
});

export const boldFraktur: CharMap = buildAlphabetMapping({
  upperStart: 0x1d56c,
  lowerStart: 0x1d586,
});

export const doubleStruck: CharMap = buildAlphabetMapping({
  upperStart: 0x1d538,
  lowerStart: 0x1d552,
  digitStart: 0x1d7d8,
  upperExceptions: {
    C: "ℂ",
    H: "ℍ",
    N: "ℕ",
    P: "ℙ",
    Q: "ℚ",
    R: "ℝ",
    Z: "ℤ",
  },
});

export const sansSerif: CharMap = buildAlphabetMapping({
  upperStart: 0x1d5a0,
  lowerStart: 0x1d5ba,
  digitStart: 0x1d7e2,
});

export const sansBold: CharMap = buildAlphabetMapping({
  upperStart: 0x1d5d4,
  lowerStart: 0x1d5ee,
  digitStart: 0x1d7ec,
});

export const sansItalic: CharMap = buildAlphabetMapping({
  upperStart: 0x1d608,
  lowerStart: 0x1d622,
});

export const sansBoldItalic: CharMap = buildAlphabetMapping({
  upperStart: 0x1d63c,
  lowerStart: 0x1d656,
});

export const monospace: CharMap = buildAlphabetMapping({
  upperStart: 0x1d670,
  lowerStart: 0x1d68a,
  digitStart: 0x1d7f6,
});

export const fullwidth: CharMap = (() => {
  const map: CharMap = {};
  for (let i = 33; i <= 126; i += 1) {
    map[String.fromCharCode(i)] = String.fromCodePoint(0xff00 + i - 0x20);
  }
  map[" "] = "\u3000";
  return map;
})();

export const smallCaps: CharMap = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ",
  i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ",
  q: "ǫ", r: "ʀ", s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x",
  y: "ʏ", z: "ᴢ",
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ғ", G: "ɢ", H: "ʜ",
  I: "ɪ", J: "ᴊ", K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ",
  Q: "ǫ", R: "ʀ", S: "s", T: "ᴛ", U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x",
  Y: "ʏ", Z: "ᴢ",
};

export const superscript: CharMap = {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ",
  i: "ⁱ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ",
  q: "q", r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ",
  y: "ʸ", z: "ᶻ",
  A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ",
  I: "ᴵ", J: "ᴶ", K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ",
  Q: "Q", R: "ᴿ", S: "ˢ", T: "ᵀ", U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ",
  Y: "ʸ", Z: "ᶻ",
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽", ")": "⁾",
};

export const subscript: CharMap = {
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

export const circled: CharMap = {
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ",
  i: "ⓘ", j: "ⓙ", k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ",
  q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ", u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ",
  y: "ⓨ", z: "ⓩ",
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ",
  I: "Ⓘ", J: "Ⓙ", K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ",
  Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ", U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ",
  Y: "Ⓨ", Z: "Ⓩ",
  "0": "⓪", "1": "①", "2": "②", "3": "③", "4": "④",
  "5": "⑤", "6": "⑥", "7": "⑦", "8": "⑧", "9": "⑨",
};

export const negativeCircled: CharMap = {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗",
  I: "🅘", J: "🅙", K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟",
  Q: "🅠", R: "🅡", S: "🅢", T: "🅣", U: "🅤", V: "🅥", W: "🅦", X: "🅧",
  Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗",
  i: "🅘", j: "🅙", k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟",
  q: "🅠", r: "🅡", s: "🅢", t: "🅣", u: "🅤", v: "🅥", w: "🅦", x: "🅧",
  y: "🅨", z: "🅩",
  "0": "⓿", "1": "❶", "2": "❷", "3": "❸", "4": "❹",
  "5": "❺", "6": "❻", "7": "❼", "8": "❽", "9": "❾",
};

export const squared: CharMap = {
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷",
  i: "🄸", j: "🄹", k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿",
  q: "🅀", r: "🅁", s: "🅂", t: "🅃", u: "🅄", v: "🅅", w: "🅆", x: "🅇",
  y: "🅈", z: "🅉",
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷",
  I: "🄸", J: "🄹", K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿",
  Q: "🅀", R: "🅁", S: "🅂", T: "🅃", U: "🅄", V: "🅅", W: "🅆", X: "🅇",
  Y: "🅈", Z: "🅉",
};

export const negativeSquared: CharMap = {
  A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷",
  I: "🅸", J: "🅹", K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿",
  Q: "🆀", R: "🆁", S: "🆂", T: "🆃", U: "🆄", V: "🆅", W: "🆆", X: "🆇",
  Y: "🆈", Z: "🆉",
  a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷",
  i: "🅸", j: "🅹", k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿",
  q: "🆀", r: "🆁", s: "🆂", t: "🆃", u: "🆄", v: "🆅", w: "🆆", x: "🆇",
  y: "🆈", z: "🆉",
};

export const parenthesized: CharMap = {
  a: "⒜", b: "⒝", c: "⒞", d: "⒟", e: "⒠", f: "⒡", g: "⒢", h: "⒣",
  i: "⒤", j: "⒥", k: "⒦", l: "⒧", m: "⒨", n: "⒩", o: "⒪", p: "⒫",
  q: "⒬", r: "⒭", s: "⒮", t: "⒯", u: "⒰", v: "⒱", w: "⒲", x: "⒳",
  y: "⒴", z: "⒵",
  A: "⒜", B: "⒝", C: "⒞", D: "⒟", E: "⒠", F: "⒡", G: "⒢", H: "⒣",
  I: "⒤", J: "⒥", K: "⒦", L: "⒧", M: "⒨", N: "⒩", O: "⒪", P: "⒫",
  Q: "⒬", R: "⒭", S: "⒮", T: "⒯", U: "⒰", V: "⒱", W: "⒲", X: "⒳",
  Y: "⒴", Z: "⒵",
  "1": "⑴", "2": "⑵", "3": "⑶", "4": "⑷", "5": "⑸",
  "6": "⑹", "7": "⑺", "8": "⑻", "9": "⑼", "0": "0",
};

export const upsideDown: CharMap = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ",
  i: "ᴉ", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d",
  q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x",
  y: "ʎ", z: "z",
  A: "∀", B: "𐐒", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "Ⅎ", G: "⅁", H: "H",
  I: "I", J: "ſ", K: "⋊", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ",
  Q: "Ò", R: "ᴚ", S: "S", T: "⊥", U: "∩", V: "Λ", W: "M", X: "X",
  Y: "⅄", Z: "Z",
  "0": "0", "1": "Ɩ", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ",
  "5": "ϛ", "6": "9", "7": "ㄥ", "8": "8", "9": "6",
  "?": "¿", "!": "¡", ".": "˙", ",": "'", "'": ",",
  '"': "„", "(": ")", ")": "(", "[": "]", "]": "[",
  "{": "}", "}": "{", "<": ">", ">": "<",
};

/** Regional Indicator A–Z for enclosed “flag letter” look (decorative). */
export const regional: CharMap = (() => {
  const map: CharMap = {};
  for (let i = 0; i < 26; i += 1) {
    const letter = String.fromCodePoint(0x1f1e6 + i);
    map[String.fromCharCode(65 + i)] = letter;
    map[String.fromCharCode(97 + i)] = letter;
  }
  return map;
})();

export const tiny: CharMap = {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ",
  i: "ⁱ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ",
  q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ",
  y: "ʸ", z: "ᶻ",
  A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ",
  I: "ᴵ", J: "ᴶ", K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ",
  Q: "Q", R: "ᴿ", S: "ˢ", T: "ᵀ", U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ",
  Y: "ʸ", Z: "ᶻ",
};

export const greekLook: CharMap = {
  a: "α", b: "в", c: "¢", d: "∂", e: "є", f: "ƒ", g: "g", h: "н",
  i: "ι", j: "נ", k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ",
  q: "q", r: "я", s: "ѕ", t: "т", u: "υ", v: "ν", w: "ω", x: "χ",
  y: "у", z: "z",
  A: "Α", B: "Β", C: "Ϲ", D: "Ⅾ", E: "Ε", F: "Ϝ", G: "Ԍ", H: "Η",
  I: "Ι", J: "Ј", K: "Κ", L: "Ⅼ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ",
  Q: "Q", R: "Ɍ", S: "Ѕ", T: "Τ", U: "Υ", V: "Ѵ", W: "Ԝ", X: "Χ",
  Y: "Υ", Z: "Ζ",
};

export const cyrillicLook: CharMap = {
  a: "а", b: "б", c: "с", d: "д", e: "е", f: "ф", g: "г", h: "һ",
  i: "і", j: "ј", k: "к", l: "л", m: "м", n: "п", o: "о", p: "р",
  q: "ԛ", r: "г", s: "ѕ", t: "т", u: "џ", v: "ѵ", w: "ш", x: "х",
  y: "у", z: "з",
  A: "А", B: "Б", C: "С", D: "Д", E: "Е", F: "Ф", G: "Г", H: "Н",
  I: "І", J: "Ј", K: "К", L: "Л", M: "М", N: "И", O: "О", P: "Р",
  Q: "Ԛ", R: "Я", S: "Ѕ", T: "Т", U: "Ц", V: "Ѵ", W: "Ш", X: "Х",
  Y: "У", Z: "З",
};
