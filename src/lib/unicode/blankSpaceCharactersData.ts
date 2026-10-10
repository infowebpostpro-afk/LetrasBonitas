import { splitGraphemes } from "./unicodeUtils";

export type SpacingWidthType = "zero" | "narrow" | "normal" | "wide" | "full" | "cell";

export interface BlankSpaceCharacter {
  id: string;
  codePoint: string;
  char: string;
  name: string;
  spanishName: string;
  category: "Espacio tipografico" | "Caracter en blanco especial" | "Espacio de ancho cero";
  unicodeGeneralCategory: string;
  widthType: SpacingWidthType;
  widthLabel: string;
  widthDescription: string;
  whiteSpaceProperty: boolean;
  htmlEntity: string;
  description: string;
  recommendedFor: string[];
}

export const BLANK_SPACE_CHARACTERS: BlankSpaceCharacter[] = [
  {
    id: "hangul-filler",
    codePoint: "U+3164",
    char: "\u3164",
    name: "HANGUL FILLER",
    spanishName: "Relleno Hangul",
    category: "Caracter en blanco especial",
    unicodeGeneralCategory: "Lo (Letter, Other)",
    widthType: "full",
    widthLabel: "Ancho completo (Letra)",
    widthDescription: "Ocupa el ancho completo de un caracter alfabético estándar sin mostrar trazo visible.",
    whiteSpaceProperty: false,
    htmlEntity: "&#12644;",
    description:
      "Caracter de relleno del bloque Hangul coreano. Clasificado técnicamente como letra (Lo) y no como espacio ordinario, por lo que evade la eliminación automática por trim() en la mayoría de juegos y aplicaciones.",
    recommendedFor: ["Nicks en Free Fire", "Apodos en juegos", "Nombres en blanco", "Evitar trim()"],
  },
  {
    id: "braille-blank",
    codePoint: "U+2800",
    char: "\u2800",
    name: "BRAILLE PATTERN BLANK",
    spanishName: "Patrón Braille vacío",
    category: "Caracter en blanco especial",
    unicodeGeneralCategory: "So (Symbol, Other)",
    widthType: "cell",
    widthLabel: "Ancho de celda Braille",
    widthDescription: "Ocupa el espacio fijo equivalente a una celda de puntos Braille sin relieve.",
    whiteSpaceProperty: false,
    htmlEntity: "&#10240;",
    description:
      "Matriz de 6 u 8 puntos Braille sin relieve activo. Unicode lo clasifica como símbolo (So). Visualmente se percibe como un espacio fijo, pero los sistemas lo interpretan como un glifo no vacío.",
    recommendedFor: ["Mensajes vacíos en WhatsApp", "Biografías de Instagram", "Líneas en blanco"],
  },
  {
    id: "em-space",
    codePoint: "U+2003",
    char: "\u2003",
    name: "EM SPACE",
    spanishName: "Espacio em (ancho)",
    category: "Espacio tipografico",
    unicodeGeneralCategory: "Zs (Separator, Space)",
    widthType: "wide",
    widthLabel: "Ancho amplio (1 em)",
    widthDescription: "Ancho igual al tamaño nominal en puntos de la fuente tipográfica.",
    whiteSpaceProperty: true,
    htmlEntity: "&#8195;",
    description:
      "Espacio tipográfico amplio, equivalente a un cuadratín (el ancho de una M mayúscula tradicional). Aporta una distancia estética notable entre palabras o símbolos.",
    recommendedFor: ["Separación destacada", "Sangrías en biografías", "Diseño tipográfico"],
  },
  {
    id: "no-break-space",
    codePoint: "U+00A0",
    char: "\u00A0",
    name: "NO-BREAK SPACE",
    spanishName: "Espacio indivisible",
    category: "Espacio tipografico",
    unicodeGeneralCategory: "Zs (Separator, Space)",
    widthType: "normal",
    widthLabel: "Ancho normal (1 espacio)",
    widthDescription: "Misma anchura que la barra espaciadora, pero impide saltos de línea.",
    whiteSpaceProperty: true,
    htmlEntity: "&nbsp;",
    description:
      "Espacio que une dos términos en una sola línea visual sin permitir que el procesador de texto o navegador los divida en un salto de línea automático.",
    recommendedFor: ["Cifras con monedas o unidades", "Nombres compuestos", "Maquetación web"],
  },
  {
    id: "thin-space",
    codePoint: "U+2009",
    char: "\u2009",
    name: "THIN SPACE",
    spanishName: "Espacio fino",
    category: "Espacio tipografico",
    unicodeGeneralCategory: "Zs (Separator, Space)",
    widthType: "narrow",
    widthLabel: "Ancho estrecho (1/5 em)",
    widthDescription: "Separación sutil, notablemente más estrecha que la barra espaciadora ordinaria.",
    whiteSpaceProperty: true,
    htmlEntity: "&#8201;",
    description:
      "Espacio tipográfico reducido equivalente aproximadamente a una quinta o sexta parte de un em. Ideal para separar símbolos matemáticos o signos de puntuación sin generar huecos excesivos.",
    recommendedFor: ["Separación entre símbolos", "Puntuación estética", "Fórmulas y números"],
  },
  {
    id: "normal-space",
    codePoint: "U+0020",
    char: " ",
    name: "SPACE",
    spanishName: "Espacio normal",
    category: "Espacio tipografico",
    unicodeGeneralCategory: "Zs (Separator, Space)",
    widthType: "normal",
    widthLabel: "Ancho normal estándar",
    widthDescription: "El espacio estándar generado por la barra espaciadora del teclado.",
    whiteSpaceProperty: true,
    htmlEntity: "&#32;",
    description:
      "El espacio clásico de la codificación ASCII y Unicode. Separa palabras en cualquier idioma. En formularios web suele ser susceptible de normalización o borrado en extremos de campo.",
    recommendedFor: ["Redacción general", "Separación estándar de texto"],
  },
  {
    id: "zero-width-space",
    codePoint: "U+200B",
    char: "\u200B",
    name: "ZERO WIDTH SPACE",
    spanishName: "Espacio de ancho cero",
    category: "Espacio de ancho cero",
    unicodeGeneralCategory: "Cf (Other, Format)",
    widthType: "zero",
    widthLabel: "0 píxeles (sin anchura)",
    widthDescription: "No añade ninguna distancia visual entre los caracteres contiguos.",
    whiteSpaceProperty: false,
    htmlEntity: "&#8203;",
    description:
      "Caracter de formato invisible que no genera hueco visual pero indica a los motores de renderizado un punto permisible de corte de línea en palabras largas.",
    recommendedFor: ["Puntos de corte sin hueco", "Cadenas técnicas", "Evitar desbordamientos"],
  },
];

export const DEFAULT_BLANK_SPACE = BLANK_SPACE_CHARACTERS[0]; // U+3164

export interface BlankSpaceDetectedOccurrence {
  character: BlankSpaceCharacter;
  count: number;
}

export interface BlankSpaceInspectionToken {
  text: string;
  isBlankOrSpecial: boolean;
  charInfo?: BlankSpaceCharacter;
}

export interface BlankSpaceInspectionResult {
  rawText: string;
  totalCodePoints: number;
  totalUtf8Bytes: number;
  totalGraphemes: number;
  totalBlankChars: number;
  totalVisibleChars: number;
  blankOccurrences: BlankSpaceDetectedOccurrence[];
  tokens: BlankSpaceInspectionToken[];
}

const BLANK_SPACE_MAP = new Map<string, BlankSpaceCharacter>();
for (const item of BLANK_SPACE_CHARACTERS) {
  BLANK_SPACE_MAP.set(item.char, item);
}

/**
 * Analyzes pasted text specifically for spacing and blank-looking Unicode characters.
 */
export function inspectBlankSpaceText(text: string): BlankSpaceInspectionResult {
  const codePoints = Array.from(text);
  const totalCodePoints = codePoints.length;

  let totalUtf8Bytes = 0;
  if (typeof TextEncoder !== "undefined") {
    totalUtf8Bytes = new TextEncoder().encode(text).length;
  } else {
    totalUtf8Bytes = Buffer.from(text, "utf-8").length;
  }

  const graphemes = splitGraphemes(text);
  const totalGraphemes = graphemes.length;

  let totalBlankChars = 0;
  let totalVisibleChars = 0;
  const countMap = new Map<string, number>();
  const tokens: BlankSpaceInspectionToken[] = [];

  for (const cp of codePoints) {
    const blankChar = BLANK_SPACE_MAP.get(cp);
    if (blankChar) {
      totalBlankChars += 1;
      countMap.set(blankChar.codePoint, (countMap.get(blankChar.codePoint) || 0) + 1);
      tokens.push({
        text: cp,
        isBlankOrSpecial: true,
        charInfo: blankChar,
      });
    } else {
      totalVisibleChars += 1;
      tokens.push({
        text: cp,
        isBlankOrSpecial: false,
      });
    }
  }

  const blankOccurrences: BlankSpaceDetectedOccurrence[] = [];
  for (const item of BLANK_SPACE_CHARACTERS) {
    const count = countMap.get(item.codePoint);
    if (count && count > 0) {
      blankOccurrences.push({
        character: item,
        count,
      });
    }
  }

  return {
    rawText: text,
    totalCodePoints,
    totalUtf8Bytes,
    totalGraphemes,
    totalBlankChars,
    totalVisibleChars,
    blankOccurrences,
    tokens,
  };
}

/**
 * Generates an exact quantity of blank space characters,
 * with optional multiline support.
 */
export function generateBlankSpaceSequence(
  char: string,
  count: number,
  multiline = false,
  perLine = 10
): { text: string; codePointCount: number; lineCount: number } {
  if (count <= 0 || !Number.isInteger(count)) {
    return { text: "", codePointCount: 0, lineCount: 0 };
  }

  if (!multiline || perLine <= 0) {
    return {
      text: char.repeat(count),
      codePointCount: count,
      lineCount: 1,
    };
  }

  const lines: string[] = [];
  let remaining = count;
  while (remaining > 0) {
    const take = Math.min(remaining, perLine);
    lines.push(char.repeat(take));
    remaining -= take;
  }

  const text = lines.join("\n");
  // Total code points includes newline characters
  const totalCodePoints = Array.from(text).length;

  return {
    text,
    codePointCount: totalCodePoints,
    lineCount: lines.length,
  };
}
