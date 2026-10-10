import { splitGraphemes } from "./unicodeUtils";

export type InvisibleCategory =
  | "Ancho cero"
  | "Visualmente vacio"
  | "Formato y control"
  | "Espacio tipografico";

export interface UnicodeInvisibleEntry {
  id: string;
  codePoint: string;
  char: string;
  name: string;
  spanishName: string;
  category: InvisibleCategory;
  unicodeGeneralCategory: string;
  hasWidth: boolean;
  widthDescription: string;
  whiteSpaceProperty: boolean;
  htmlEntity: string;
  description: string;
  commonUse: string;
  limitation: string;
}

export const UNICODE_INVISIBLE_LIBRARY: UnicodeInvisibleEntry[] = [
  // ── 1. Caracteres de ancho cero (0 píxeles) ──
  {
    id: "zero-width-space",
    codePoint: "U+200B",
    char: "\u200B",
    name: "ZERO WIDTH SPACE",
    spanishName: "Espacio de ancho cero",
    category: "Ancho cero",
    unicodeGeneralCategory: "Cf (Other, Format)",
    hasWidth: false,
    widthDescription: "0 píxeles (sin anchura visual)",
    whiteSpaceProperty: false,
    htmlEntity: "&#8203;",
    description:
      "Caracter invisible concebido para permitir saltos de línea suaves dentro de palabras largas sin insertar ningún espacio visual entre las letras.",
    commonUse: "División de palabras largas, microformato invisible y pruebas de software.",
    limitation: "No separa visualmente las palabras; las letras contiguas se ven pegadas.",
  },
  {
    id: "zero-width-non-joiner",
    codePoint: "U+200C",
    char: "\u200C",
    name: "ZERO WIDTH NON-JOINER",
    spanishName: "No-unidor de ancho cero (ZWNJ)",
    category: "Ancho cero",
    unicodeGeneralCategory: "Cf (Other, Format)",
    hasWidth: false,
    widthDescription: "0 píxeles (sin anchura visual)",
    whiteSpaceProperty: false,
    htmlEntity: "&#8204;",
    description:
      "Evita que los caracteres contiguos se unan en ligaduras tipográficas o formas cursivas en alfabetos complejos como el árabe, persa o devanagari.",
    commonUse: "Control tipográfico de ligaduras y separación interna de morfemas.",
    limitation: "En el alfabeto latino no produce ningún cambio visual perceptible.",
  },
  {
    id: "zero-width-joiner",
    codePoint: "U+200D",
    char: "\u200D",
    name: "ZERO WIDTH JOINER",
    spanishName: "Unidor de ancho cero (ZWJ)",
    category: "Ancho cero",
    unicodeGeneralCategory: "Cf (Other, Format)",
    hasWidth: false,
    widthDescription: "0 píxeles (sin anchura visual)",
    whiteSpaceProperty: false,
    htmlEntity: "&#8205;",
    description:
      "Fuerza la unión de glifos en una sola representación gráfica. Es el pegamento Unicode utilizado para combinar emojis compuestos (familias, tonos de piel o profesiones).",
    commonUse: "Composición de secuencias complejas de emojis y ligaduras avanzadas.",
    limitation: "Si el sistema no soporta la secuencia combinada, puede mostrar glifos separados.",
  },
  {
    id: "word-joiner",
    codePoint: "U+2060",
    char: "\u2060",
    name: "WORD JOINER",
    spanishName: "Unidor de palabras (WJ)",
    category: "Ancho cero",
    unicodeGeneralCategory: "Cf (Other, Format)",
    hasWidth: false,
    widthDescription: "0 píxeles (sin anchura visual)",
    whiteSpaceProperty: false,
    htmlEntity: "&#8288;",
    description:
      "Caracter de ancho cero que impide terminantemente cualquier salto de línea entre los dos caracteres adyacentes. Es la versión recomendada y moderna de U+FEFF.",
    commonUse: "Mantener siglas, símbolos o fórmulas matemáticas indivisibles en un salto de línea.",
    limitation: "Completamente imperceptible a simple vista; requiere un inspector para ser detectado.",
  },
  {
    id: "zero-width-no-break-space",
    codePoint: "U+FEFF",
    char: "\uFEFF",
    name: "ZERO WIDTH NO-BREAK SPACE",
    spanishName: "Marca de orden de bytes (BOM)",
    category: "Ancho cero",
    unicodeGeneralCategory: "Cf (Other, Format)",
    hasWidth: false,
    widthDescription: "0 píxeles (sin anchura visual)",
    whiteSpaceProperty: false,
    htmlEntity: "&#65279;",
    description:
      "Utilizado históricamente como marca de orden de bytes (Byte Order Mark) al inicio de archivos UTF-16 o UTF-8. No añade ancho visual.",
    commonUse: "Encabezados de codificación en archivos informáticos.",
    limitation: "Unicode desaconseja su empleo dentro de textos como unidor de palabras; use U+2060 en su lugar.",
  },

  // ── 2. Caracteres que parecen vacíos (con ancho de glifo/bloque) ──
  {
    id: "hangul-filler",
    codePoint: "U+3164",
    char: "\u3164",
    name: "HANGUL FILLER",
    spanishName: "Relleno Hangul",
    category: "Visualmente vacio",
    unicodeGeneralCategory: "Lo (Letter, Other)",
    hasWidth: true,
    widthDescription: "Ancho completo de carácter ideográfico",
    whiteSpaceProperty: false,
    htmlEntity: "&#12644;",
    description:
      "Caracter de relleno del bloque Hangul de la escritura coreana. Al estar clasificado en Unicode como letra y no como espacio ordinario, no es eliminado por la función trim() en la mayoría de videojuegos y redes.",
    commonUse: "Nombres invisibles en Free Fire, apodos de Discord, biografías y perfiles.",
    limitation: "Fuentes muy antiguas o sistemas sin soporte de fuentes CJK pueden mostrar un glifo rectangular (tofu).",
  },
  {
    id: "braille-blank",
    codePoint: "U+2800",
    char: "\u2800",
    name: "BRAILLE PATTERN BLANK",
    spanishName: "Patrón Braille vacío",
    category: "Visualmente vacio",
    unicodeGeneralCategory: "So (Symbol, Other)",
    hasWidth: true,
    widthDescription: "Ancho fijo de celda Braille",
    whiteSpaceProperty: false,
    htmlEntity: "&#10240;",
    description:
      "Matriz de 6 u 8 puntos Braille sin relieve activo. Se clasifica como símbolo (So) y no como espacio en blanco. Visualmente aparece como un hueco limpio pero el sistema lo procesa como contenido válido.",
    commonUse: "Mensajes vacíos en WhatsApp, saltos de línea estéticos en Instagram y comentarios limpios.",
    limitation: "Algunos lectores de pantalla pueden verbalizarlo como patrón Braille vacío.",
  },
  {
    id: "hangul-choseong-filler",
    codePoint: "U+115F",
    char: "\u115F",
    name: "HANGUL CHOSEONG FILLER",
    spanishName: "Relleno Choseong Hangul",
    category: "Visualmente vacio",
    unicodeGeneralCategory: "Lo (Letter, Other)",
    hasWidth: true,
    widthDescription: "Ancho de consonante inicial Hangul",
    whiteSpaceProperty: false,
    htmlEntity: "&#4447;",
    description:
      "Caracter de relleno arcaico utilizado en la composición silábica del alfabeto coreano para indicar la ausencia de consonante inicial en sílabas antiguas.",
    commonUse: "Alternativa a U+3164 en plataformas con filtros específicos.",
    limitation: "Menor compatibilidad de fuentes que U+3164; puede colapsar en ciertos navegadores.",
  },
  {
    id: "hangul-jungseong-filler",
    codePoint: "U+1160",
    char: "\u1160",
    name: "HANGUL JUNGSEONG FILLER",
    spanishName: "Relleno Jungseong Hangul",
    category: "Visualmente vacio",
    unicodeGeneralCategory: "Lo (Letter, Other)",
    hasWidth: true,
    widthDescription: "Ancho de vocal intermedia Hangul",
    whiteSpaceProperty: false,
    htmlEntity: "&#4448;",
    description:
      "Caracter de relleno utilizado en la composición silábica para indicar la ausencia de vocal medial en estructuras de texto coreano arcaico.",
    commonUse: "Uso experimental en validadores de texto rígidos.",
    limitation: "Soporte desigual en plataformas móviles convencionales.",
  },

  // ── 3. Caracteres de formato y guionado ──
  {
    id: "soft-hyphen",
    codePoint: "U+00AD",
    char: "\u00AD",
    name: "SOFT HYPHEN",
    spanishName: "Guion discrecional (SHY)",
    category: "Formato y control",
    unicodeGeneralCategory: "Cf (Other, Format)",
    hasWidth: false,
    widthDescription: "Invisible en línea, visible (-) al quebrar",
    whiteSpaceProperty: false,
    htmlEntity: "&shy;",
    description:
      "Marca un punto de separación silábica donde el procesador de texto puede cortar una palabra con un guion si llega al final del renglón. Permanece invisible si la palabra cabe completa.",
    commonUse: "Maquetación web y justificación de texto en columnas estrechas.",
    limitation: "Si la palabra se divide en un salto de línea, se mostrará un guion visual.",
  },

  // ── 4. Espacios tipográficos relacionados (etiquetados con claridad) ──
  {
    id: "no-break-space",
    codePoint: "U+00A0",
    char: "\u00A0",
    name: "NO-BREAK SPACE",
    spanishName: "Espacio indivisible (NBSP)",
    category: "Espacio tipografico",
    unicodeGeneralCategory: "Zs (Separator, Space)",
    hasWidth: true,
    widthDescription: "Ancho estándar de espacio normal",
    whiteSpaceProperty: true,
    htmlEntity: "&nbsp;",
    description:
      "Espacio tipográfico que prohíbe el salto de línea automático en ese punto. Mantiene unidos elementos contiguos como cifras y unidades.",
    commonUse: "Cantidades numéricas (ej. 100 km), títulos y diseño web editorial.",
    limitation: "Es un espacio genuino (Zs), por lo que las funciones trim() pueden eliminarlo.",
  },
  {
    id: "em-space",
    codePoint: "U+2003",
    char: "\u2003",
    name: "EM SPACE",
    spanishName: "Espacio em (cuadratín)",
    category: "Espacio tipografico",
    unicodeGeneralCategory: "Zs (Separator, Space)",
    hasWidth: true,
    widthDescription: "Ancho amplio igual al tamaño de fuente (1 em)",
    whiteSpaceProperty: true,
    htmlEntity: "&#8195;",
    description:
      "Espacio tipográfico amplio cuyo ancho es idéntico al cuerpo tipográfico de la letra (tradicionalmente el ancho de una M mayúscula).",
    commonUse: "Sangrías visuales en biografías y maquetación de texto estilizado.",
    limitation: "Reconocido formalmente como espacio en blanco; susceptible a normalización.",
  },
  {
    id: "ideographic-space",
    codePoint: "U+3000",
    char: "\u3000",
    name: "IDEOGRAPHIC SPACE",
    spanishName: "Espacio ideográfico (CJK)",
    category: "Espacio tipografico",
    unicodeGeneralCategory: "Zs (Separator, Space)",
    hasWidth: true,
    widthDescription: "Ancho completo idéntico a un kanji o carácter CJK",
    whiteSpaceProperty: true,
    htmlEntity: "&#12288;",
    description:
      "Espacio de ancho completo tradicionalmente empleado en textos chinos, japoneses y coreanos para alinear columnas con caracteres ideográficos.",
    commonUse: "Espaciado uniforme en textos orientales y sangrías amplias.",
    limitation: "Posee la propiedad White_Space=Yes en Unicode.",
  },
];

export const DEFAULT_CARACTER_INVISIBLE = UNICODE_INVISIBLE_LIBRARY.find(
  (c) => c.codePoint === "U+3164"
)!;

// Lookup map for fast detection
const LOOKUP_MAP = new Map<string, UnicodeInvisibleEntry>();
for (const entry of UNICODE_INVISIBLE_LIBRARY) {
  LOOKUP_MAP.set(entry.char, entry);
}

export interface DetectedInvisibleCharacter {
  entry: UnicodeInvisibleEntry;
  codePoint: string;
  char: string;
  zeroBasedIndex: number;
  oneBasedIndex: number;
}

export interface InspectionToken {
  text: string;
  codePointHex: string;
  isInvisible: boolean;
  isNormalSpace: boolean;
  entry?: UnicodeInvisibleEntry;
  index: number;
}

export interface InspectorDetailedResult {
  rawText: string;
  totalCodePoints: number;
  totalUtf8Bytes: number;
  totalGraphemes: number;
  totalInvisibleChars: number;
  totalNormalSpaces: number;
  totalVisibleChars: number;
  detectedCharacters: DetectedInvisibleCharacter[];
  detectedOccurrencesSummary: { entry: UnicodeInvisibleEntry; count: number }[];
  tokens: InspectionToken[];
  cleanedText: string;
}

/**
 * Accurately analyzes text for invisible, format, and zero-width Unicode characters.
 * Provides token-level position index, code point details, and a cleaned string option.
 */
export function inspectTextDetailed(text: string): InspectorDetailedResult {
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
  let totalNormalSpaces = 0;
  let totalVisibleChars = 0;

  const detectedCharacters: DetectedInvisibleCharacter[] = [];
  const countMap = new Map<string, number>();
  const tokens: InspectionToken[] = [];
  const cleanChars: string[] = [];

  for (let i = 0; i < codePoints.length; i++) {
    const cp = codePoints[i];
    const codePointHex = "U+" + (cp.codePointAt(0)?.toString(16).toUpperCase().padStart(4, "0") || "");
    const match = LOOKUP_MAP.get(cp);

    if (match) {
      totalInvisibleChars += 1;
      countMap.set(match.codePoint, (countMap.get(match.codePoint) || 0) + 1);
      detectedCharacters.push({
        entry: match,
        codePoint: match.codePoint,
        char: cp,
        zeroBasedIndex: i,
        oneBasedIndex: i + 1,
      });
      tokens.push({
        text: cp,
        codePointHex,
        isInvisible: true,
        isNormalSpace: false,
        entry: match,
        index: i,
      });
      // Excluded from cleaned text
    } else if (cp === " " || cp === "\t" || cp === "\n" || cp === "\r") {
      totalNormalSpaces += 1;
      tokens.push({
        text: cp,
        codePointHex,
        isInvisible: false,
        isNormalSpace: true,
        index: i,
      });
      cleanChars.push(cp);
    } else {
      totalVisibleChars += 1;
      tokens.push({
        text: cp,
        codePointHex,
        isInvisible: false,
        isNormalSpace: false,
        index: i,
      });
      cleanChars.push(cp);
    }
  }

  const detectedOccurrencesSummary: { entry: UnicodeInvisibleEntry; count: number }[] = [];
  for (const entry of UNICODE_INVISIBLE_LIBRARY) {
    const count = countMap.get(entry.codePoint);
    if (count && count > 0) {
      detectedOccurrencesSummary.push({ entry, count });
    }
  }

  return {
    rawText: text,
    totalCodePoints,
    totalUtf8Bytes,
    totalGraphemes,
    totalInvisibleChars,
    totalNormalSpaces,
    totalVisibleChars,
    detectedCharacters,
    detectedOccurrencesSummary,
    tokens,
    cleanedText: cleanChars.join(""),
  };
}

/**
 * Generates an exact repetition sequence for a given character.
 */
export function generateCharacterSequence(char: string, count: number): string {
  if (count <= 0 || !Number.isInteger(count)) return "";
  return char.repeat(count);
}
