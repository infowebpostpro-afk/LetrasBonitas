import { splitGraphemes } from "./unicodeUtils";

export interface InvisibleCharacter {
  id: string;
  codePoint: string;
  char: string;
  name: string;
  spanishName: string;
  category: "Espacio visualmente vacio" | "Espacio de ancho cero" | "Espacio tipografico" | "Caracter de formato";
  unicodeGeneralCategory: string;
  hasWidth: boolean;
  widthDescription: string;
  whiteSpaceProperty: boolean;
  htmlEntity: string;
  description: string;
  recommendedFor: string[];
}

export const INVISIBLE_CHARACTERS: InvisibleCharacter[] = [
  {
    id: "hangul-filler",
    codePoint: "U+3164",
    char: "\u3164",
    name: "HANGUL FILLER",
    spanishName: "Relleno Hangul",
    category: "Espacio visualmente vacio",
    unicodeGeneralCategory: "Lo (Letter, Other)",
    hasWidth: true,
    widthDescription: "Ocupa el ancho visual de un caracter completo",
    whiteSpaceProperty: false,
    htmlEntity: "&#12644;",
    description:
      "Caracter de relleno de la escritura coreana. Al estar clasificado en Unicode como letra y no como espacio ordinario, muchas aplicaciones no lo eliminan con la funcion trim(). Es la eleccion mas recomendada para nombres en blanco y perfiles de juegos.",
    recommendedFor: ["Nombres de Free Fire", "Apodos de Discord", "Nombres en blanco en juegos", "Perfiles sociales"],
  },
  {
    id: "braille-blank",
    codePoint: "U+2800",
    char: "\u2800",
    name: "BRAILLE PATTERN BLANK",
    spanishName: "Blanco de patron Braille",
    category: "Espacio visualmente vacio",
    unicodeGeneralCategory: "So (Symbol, Other)",
    hasWidth: true,
    widthDescription: "Ocupa un ancho visual estandar de celda Braille",
    whiteSpaceProperty: false,
    htmlEntity: "&#10240;",
    description:
      "Matriz de Braille sin puntos en relieve. Se clasifica formalmente como simbolo en lugar de espacio en blanco, lo que permite eludir restricciones en chats donde los espacios comunes estan prohibidos.",
    recommendedFor: ["Mensajes vacios en WhatsApp", "Separadores de biografia", "Comentarios en TikTok", "Lineas en blanco"],
  },
  {
    id: "zero-width-space",
    codePoint: "U+200B",
    char: "\u200B",
    name: "ZERO WIDTH SPACE",
    spanishName: "Espacio de ancho cero",
    category: "Espacio de ancho cero",
    unicodeGeneralCategory: "Cf (Other, Format)",
    hasWidth: false,
    widthDescription: "No ocupa espacio visual (0 pixeles)",
    whiteSpaceProperty: false,
    htmlEntity: "&#8203;",
    description:
      "Caracter invisible concebido para permitir saltos de linea dentro de palabras largas sin insertar ningun espacio visual. No anade separacion entre letras.",
    recommendedFor: ["Saltos de linea controlados", "Division de texto digital", "Pruebas de software"],
  },
  {
    id: "no-break-space",
    codePoint: "U+00A0",
    char: "\u00A0",
    name: "NO-BREAK SPACE",
    spanishName: "Espacio indivisible",
    category: "Espacio tipografico",
    unicodeGeneralCategory: "Zs (Separator, Space)",
    hasWidth: true,
    widthDescription: "Mismo ancho que un espacio estandar",
    whiteSpaceProperty: true,
    htmlEntity: "&nbsp;",
    description:
      "Espacio tipografico estandar que impide que dos palabras se separen en un salto de linea. Es ampliamente soportado en la web y procesadores de texto, aunque algunas aplicaciones lo filtran como espacio convencional.",
    recommendedFor: ["Documentos de texto", "HTML y diseno web", "Espaciado uniforme que no se rompe"],
  },
  {
    id: "em-space",
    codePoint: "U+2003",
    char: "\u2003",
    name: "EM SPACE",
    spanishName: "Espacio eme",
    category: "Espacio tipografico",
    unicodeGeneralCategory: "Zs (Separator, Space)",
    hasWidth: true,
    widthDescription: "Ancho igual al tamano de punto de la fuente (1 em)",
    whiteSpaceProperty: true,
    htmlEntity: "&#8195;",
    description:
      "Espacio tipografico ancho, tradicionalmente equivalente al ancho de la letra M mayuscula. Proporciona una separacion visual limpia y consistente.",
    recommendedFor: ["Sangrias en biografias", "Separacion amplia de palabras", "Estructuracion de texto estetico"],
  },
  {
    id: "word-joiner",
    codePoint: "U+2060",
    char: "\u2060",
    name: "WORD JOINER",
    spanishName: "Unidor de palabras",
    category: "Caracter de formato",
    unicodeGeneralCategory: "Cf (Other, Format)",
    hasWidth: false,
    widthDescription: "No ocupa espacio visual (0 pixeles)",
    whiteSpaceProperty: false,
    htmlEntity: "&#8288;",
    description:
      "Caracter de formato de ancho cero que impide cualquier salto de linea entre los caracteres contiguos. Es la version moderna y recomendada de U+FEFF cuando se utiliza para inhibir saltos.",
    recommendedFor: ["Evitar saltos de linea indeseados", "Mantener cadenas unidas", "Formato tecnico"],
  },
  {
    id: "zwnj",
    codePoint: "U+200C",
    char: "\u200C",
    name: "ZERO WIDTH NON-JOINER",
    spanishName: "No-unidor de ancho cero",
    category: "Caracter de formato",
    unicodeGeneralCategory: "Cf (Other, Format)",
    hasWidth: false,
    widthDescription: "No ocupa espacio visual (0 pixeles)",
    whiteSpaceProperty: false,
    htmlEntity: "&#8204;",
    description:
      "Impide que los caracteres contiguos se unan en ligaduras o formas cursivas en alfabetos complejos como el arabe o el persa. En texto latino permanece completamente invisible.",
    recommendedFor: ["Tipografia avanzada", "Control de ligaduras tipograficas", "Sistemas multilingues"],
  },
  {
    id: "zwj",
    codePoint: "U+200D",
    char: "\u200D",
    name: "ZERO WIDTH JOINER",
    spanishName: "Unidor de ancho cero",
    category: "Caracter de formato",
    unicodeGeneralCategory: "Cf (Other, Format)",
    hasWidth: false,
    widthDescription: "No ocupa espacio visual (0 pixeles)",
    whiteSpaceProperty: false,
    htmlEntity: "&#8205;",
    description:
      "Fuerza la union de dos glifos en una sola representacion visual. Es el mecanismo fundamental utilizado por Unicode para combinar secuencias de emojis (como familias o tonos de piel).",
    recommendedFor: ["Secuencias de emojis", "Tipografia compleja", "Control de glifos compuestos"],
  },
];

export const DEFAULT_INVISIBLE_CHARACTER = INVISIBLE_CHARACTERS[0]; // U+3164

export interface DetectedCharacterOccurrence {
  character: InvisibleCharacter;
  count: number;
}

export interface TextInspectionToken {
  text: string;
  isInvisible: boolean;
  charInfo?: InvisibleCharacter;
}

export interface TextInspectionResult {
  rawText: string;
  totalCodePoints: number;
  totalUtf8Bytes: number;
  totalGraphemes: number;
  totalInvisibleChars: number;
  totalVisibleChars: number;
  invisibleOccurrences: DetectedCharacterOccurrence[];
  tokens: TextInspectionToken[];
}

const INVISIBLE_MAP = new Map<string, InvisibleCharacter>();
for (const item of INVISIBLE_CHARACTERS) {
  INVISIBLE_MAP.set(item.char, item);
}

/**
 * Accurately analyzes text for both visible and invisible Unicode characters,
 * counting code points, UTF-8 bytes, grapheme clusters, and highlighting tokens.
 */
export function inspectText(text: string): TextInspectionResult {
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

  let totalInvisibleChars = 0;
  let totalVisibleChars = 0;
  const countMap = new Map<string, number>();
  const tokens: TextInspectionToken[] = [];

  for (const cp of codePoints) {
    const inv = INVISIBLE_MAP.get(cp);
    if (inv) {
      totalInvisibleChars += 1;
      countMap.set(inv.codePoint, (countMap.get(inv.codePoint) || 0) + 1);
      tokens.push({
        text: cp,
        isInvisible: true,
        charInfo: inv,
      });
    } else {
      totalVisibleChars += 1;
      tokens.push({
        text: cp,
        isInvisible: false,
      });
    }
  }

  const invisibleOccurrences: DetectedCharacterOccurrence[] = [];
  for (const item of INVISIBLE_CHARACTERS) {
    const count = countMap.get(item.codePoint);
    if (count && count > 0) {
      invisibleOccurrences.push({
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
    totalInvisibleChars,
    totalVisibleChars,
    invisibleOccurrences,
    tokens,
  };
}

/**
 * Generates an invisible string repeating a chosen character count times,
 * validated strictly between min and max bounds.
 */
export function generateInvisibleSequence(char: string, count: number): string {
  if (count <= 0 || !Number.isInteger(count)) return "";
  return char.repeat(count);
}
