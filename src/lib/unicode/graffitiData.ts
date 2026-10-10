import {
  boldSerif,
  sansBold,
  sansBoldItalic,
  boldFraktur,
  fraktur,
  doubleStruck,
  circled,
  negativeCircled,
  squared,
  negativeSquared,
  fullwidth,
  smallCaps,
  monospace,
} from "./mappings/alphabets";
import {
  createMappingTransform,
  createSafeTransform,
  createCombiningTransform,
} from "./transforms";

export type GraffitiCategory =
  | "urbano"
  | "bloque"
  | "burbuja"
  | "gotica"
  | "tags";

export interface GraffitiStyleItem {
  id: string;
  name: string;
  category: GraffitiCategory;
  tags: string[];
  transform: (text: string) => string;
  compatibility: "high" | "medium";
  description: string;
  example: string;
}

export const GRAFFITI_STYLES: GraffitiStyleItem[] = [
  {
    id: "graffiti-heavy-bold",
    name: "Street Bold Urbano",
    category: "urbano",
    tags: ["bold", "street", "sans", "fuerte"],
    transform: createSafeTransform(createMappingTransform(sansBold)),
    compatibility: "high",
    description: "Trazos gruesos inspirados en rotuladores de punta ancha para murales urbanos.",
    example: "𝗚𝗥𝗔𝗙𝗙𝗜𝗧𝗜",
  },
  {
    id: "graffiti-wild-fraktur",
    name: "Wild Fraktur Callejero",
    category: "gotica",
    tags: ["fraktur", "gotica", "tag", "wild"],
    transform: createSafeTransform(createMappingTransform(boldFraktur)),
    compatibility: "high",
    description: "Estilo gotico pesado habitual en firmas chicanas y muralismo clasico.",
    example: "𝕲𝕽𝕬𝕱𝕱𝕴𝕿𝕴",
  },
  {
    id: "graffiti-outline-double",
    name: "Outline Doble Trazo",
    category: "bloque",
    tags: ["outline", "hueco", "doble"],
    transform: createSafeTransform(createMappingTransform(doubleStruck)),
    compatibility: "high",
    description: "Efecto de contorno abierto que emula las letras perfiladas antes del relleno con aerosol.",
    example: "𝔾ℝ𝔸𝔽𝔽𝕀𝕋𝕀",
  },
  {
    id: "graffiti-bubble-circle",
    name: "Bubble Pompa Circulada",
    category: "burbuja",
    tags: ["bubble", "circulo", "redondo"],
    transform: createSafeTransform(createMappingTransform(circled)),
    compatibility: "high",
    description: "Inspirado en el clasico estilo throw-up con letras infladas y formas circulares.",
    example: "ⓖⓡⓐⓕⓕⓘⓣⓘ",
  },
  {
    id: "graffiti-bubble-black",
    name: "Bubble Sombra Negra",
    category: "burbuja",
    tags: ["bubble", "negro", "relleno"],
    transform: createSafeTransform(createMappingTransform(negativeCircled)),
    compatibility: "high",
    description: "Circulos rellenos oscuros de alto impacto que imitan fondos negros de graffiti.",
    example: "🅖🅡🅐🅕🅕🅘🅣🅘",
  },
  {
    id: "graffiti-block-square",
    name: "Block Letter Cuadrado",
    category: "bloque",
    tags: ["block", "cuadrado", "monumental"],
    transform: createSafeTransform(createMappingTransform(squared)),
    compatibility: "high",
    description: "Letras rectangulares solidas de gran legibilidad y presencia imponente.",
    example: "🄶🅁🄰🄵🄵🄸🅃🄸",
  },
  {
    id: "graffiti-block-solid",
    name: "Block Solido Rotulado",
    category: "bloque",
    tags: ["block", "solido", "negativo"],
    transform: createSafeTransform(createMappingTransform(negativeSquared)),
    compatibility: "high",
    description: "Cuadros invertidos de estilo pesado para titulares y nombres de gran visibilidad.",
    example: "🅶🆁🅰🅵🅵🅸🆃🅸",
  },
  {
    id: "graffiti-fullwidth-wide",
    name: "Wide Mural Ancho",
    category: "urbano",
    tags: ["wide", "ancho", "espaciado"],
    transform: createSafeTransform(createMappingTransform(fullwidth)),
    compatibility: "high",
    description: "Letras ensanchadas que ocupan todo el ancho visual, emulando piezas monumentales en vagones.",
    example: "ＧＲＡＦＦＩＴＩ",
  },
  {
    id: "graffiti-fraktur-classic",
    name: "Chicano Blackletter",
    category: "gotica",
    tags: ["fraktur", "chicano", "blackletter"],
    transform: createSafeTransform(createMappingTransform(fraktur)),
    compatibility: "high",
    description: "Trazos quebrados y elegantes nacidos de la fusion entre caligrafia europea y arte de la calle.",
    example: "𝔊𝔯𝔞𝔣𝔣𝔦𝔱𝔦",
  },
  {
    id: "graffiti-smallcaps-tag",
    name: "Small Caps Tag",
    category: "urbano",
    tags: ["caps", "pequeno", "tag"],
    transform: createSafeTransform(createMappingTransform(smallCaps)),
    compatibility: "high",
    description: "Mayusculas reducidas uniformes, ideales para apodos cortos y firmas limpias.",
    example: "ɢʀᴀғғɪᴛɪ",
  },
  {
    id: "graffiti-monospace-tag",
    name: "Stencil Monospace",
    category: "bloque",
    tags: ["stencil", "plantilla", "mono"],
    transform: createSafeTransform(createMappingTransform(monospace)),
    compatibility: "high",
    description: "Espaciado uniforme que recuerda a plantillas de aerosol industriales.",
    example: "𝙶𝚁𝙰𝙵𝙵𝙸𝚃𝙸",
  },
  {
    id: "graffiti-italic-street",
    name: "Inclinado Dinamico Flow",
    category: "urbano",
    tags: ["italic", "inclinado", "dinamico"],
    transform: createSafeTransform(createMappingTransform(sansBoldItalic)),
    compatibility: "high",
    description: "Inclinacion agresiva hacia delante que sugiere velocidad y trazo continuo.",
    example: "𝙂𝙍𝘼𝙁𝙁𝙄𝙏𝙄",
  },
  {
    id: "graffiti-shadow-serif",
    name: "Classic Roller Serif",
    category: "urbano",
    tags: ["serif", "roller", "pesado"],
    transform: createSafeTransform(createMappingTransform(boldSerif)),
    compatibility: "high",
    description: "Estilo rotulado con rodillo habitual en azoteas y grandes muros.",
    example: "𝐆𝐑𝐀𝐅𝐅𝐈𝐓𝗜",
  },
  {
    id: "graffiti-crown-tag",
    name: "Tag Corona King Crew",
    category: "tags",
    tags: ["corona", "king", "crew", "tag"],
    transform: (text) => {
      const base = createSafeTransform(createMappingTransform(boldFraktur))(text);
      return `👑 ${base} 👑`;
    },
    compatibility: "high",
    description: "La corona es el simbolo iconico del grafitero consagrado en la cultura hip-hop.",
    example: "👑 𝕲𝖗𝖆𝖋𝖋𝖎𝖙𝖎 👑",
  },
  {
    id: "graffiti-star-tag",
    name: "Tag Estrellas Street",
    category: "tags",
    tags: ["estrella", "decorado", "firma"],
    transform: (text) => {
      const base = createSafeTransform(createMappingTransform(sansBoldItalic))(text);
      return `★ ${base} ★`;
    },
    compatibility: "high",
    description: "Estrellas urbanas que enmarcan firmas y apodos de estilo old school.",
    example: "★ 𝙂𝙍𝘼𝙁𝙁𝙄𝙏𝙄 ★",
  },
  {
    id: "graffiti-fire-tag",
    name: "Burner Fire Tag",
    category: "tags",
    tags: ["fuego", "flama", "burner"],
    transform: (text) => {
      const base = createSafeTransform(createMappingTransform(boldFraktur))(text);
      return `🔥 ${base} 🔥`;
    },
    compatibility: "high",
    description: "En el argot del graffiti, un burner es una pieza magistral que arrasa visualmente.",
    example: "🔥 𝕲𝖗𝖆𝖋𝖋𝖎𝖙𝖎 🔥",
  },
  {
    id: "graffiti-skull-tag",
    name: "Tag Calavera Underground",
    category: "tags",
    tags: ["calavera", "underground", "dark"],
    transform: (text) => {
      const base = createSafeTransform(createMappingTransform(sansBold))(text);
      return `☠ ${base} ☠`;
    },
    compatibility: "high",
    description: "Simbolos oscuros para clanes de videojuegos y firmas de estilo hardcore.",
    example: "☠ 𝗚𝗥𝗔𝗙𝗙𝗜𝗧𝗜 ☠",
  },
  {
    id: "graffiti-bracket-box",
    name: "Caja Brackets Heavy",
    category: "bloque",
    tags: ["brackets", "caja", "recuadro"],
    transform: (text) => {
      const base = createSafeTransform(createMappingTransform(doubleStruck))(text);
      return `【 ${base} 】`;
    },
    compatibility: "high",
    description: "Corchetes asiaticos macizos que delimitan el apodo como un bloque sellado.",
    example: "【 𝔾𝕣𝕒𝕗𝕗𝕚𝕥𝕚 】",
  },
  {
    id: "graffiti-wings-tag",
    name: "Alas Urbanas Legend",
    category: "tags",
    tags: ["alas", "flair", "legend"],
    transform: (text) => {
      const base = createSafeTransform(createMappingTransform(sansBold))(text);
      return `꧁ ${base} ꧂`;
    },
    compatibility: "high",
    description: "Remates curvados ornamentales para destacar apodos en perfiles sociales.",
    example: "꧁ 𝗚𝗥𝗔𝗙𝗙𝗜𝗧𝗜 ꧂",
  },
  {
    id: "graffiti-slash-strike",
    name: "Tachado Street Slash",
    category: "urbano",
    tags: ["tachado", "corte", "slash"],
    transform: createSafeTransform(createCombiningTransform(["\u0336"])),
    compatibility: "high",
    description: "Efecto de linea cruzada horizontal simulando un trazo de marcador sobre la palabra.",
    example: "G̶R̶A̶F̶F̶I̶T̶I̶",
  },
];

export interface GraffitiAlphabetEntry {
  letter: string;
  name: string;
  tip: string;
  blockChar: string;
  bubbleChar: string;
  gothicChar: string;
}

export const GRAFFITI_ALPHABET: GraffitiAlphabetEntry[] = [
  { letter: "A", name: "Letra A", tip: "En bubble se dibuja con arco exterior inflado y ojo central circular.", blockChar: "🅰", bubbleChar: "Ⓐ", gothicChar: "𝕬" },
  { letter: "B", name: "Letra B", tip: "Doble lobulo redondeado; en block se usa corte angular en la interseccion.", blockChar: "🅱", bubbleChar: "Ⓑ", gothicChar: "𝕭" },
  { letter: "C", name: "Letra C", tip: "Curva abierta con remates ensanchados en los extremos superior e inferior.", blockChar: "🅲", bubbleChar: "Ⓒ", gothicChar: "𝕮" },
  { letter: "D", name: "Letra D", tip: "Asta recta vertical con un gran arco expansivo que domina la composicion.", blockChar: "🅳", bubbleChar: "Ⓓ", gothicChar: "𝕯" },
  { letter: "E", name: "Letra E", tip: "Los tres brazos horizontales admiten cortes diagonales y flechas decorativas.", blockChar: "🅴", bubbleChar: "Ⓔ", gothicChar: "𝕰" },
  { letter: "F", name: "Letra F", tip: "Similar a la E pero con la base libre, permitiendo sombras 3D profundas.", blockChar: "🅵", bubbleChar: "Ⓕ", gothicChar: "𝕱" },
  { letter: "G", name: "Letra G", tip: "Curva semicircular con remate hacia adentro que cierra la estructura con peso.", blockChar: "🅶", bubbleChar: "Ⓖ", gothicChar: "𝕲" },
  { letter: "H", name: "Letra H", tip: "Dos columnas verticales unidas por un puente central personalizable.", blockChar: "🅷", bubbleChar: "Ⓗ", gothicChar: "𝕳" },
  { letter: "I", name: "Letra I", tip: "Columna recta que puede transformarse con puntos en estrella o flechas en la cabeza.", blockChar: "🅸", bubbleChar: "Ⓘ", gothicChar: "𝕴" },
  { letter: "J", name: "Letra J", tip: "Descenso vertical con gancho curvo pronunciado hacia la izquierda.", blockChar: "🅹", bubbleChar: "Ⓙ", gothicChar: "𝕵" },
  { letter: "K", name: "Letra K", tip: "Una de las letras mas dinamicas gracias al cruce de sus brazos diagonales.", blockChar: "🅺", bubbleChar: "Ⓚ", gothicChar: "𝕶" },
  { letter: "L", name: "Letra L", tip: "Angulo recto cuya base se puede alargar bajo las letras siguientes.", blockChar: "🅻", bubbleChar: "Ⓛ", gothicChar: "𝕷" },
  { letter: "M", name: "Letra M", tip: "Doble cumbre simetrica; excelente para situar en el centro de una pieza.", blockChar: "🅼", bubbleChar: "Ⓜ", gothicChar: "𝕸" },
  { letter: "N", name: "Letra N", tip: "Diagonal firme que conecta las dos astas verticales con fluidez.", blockChar: "🅽", bubbleChar: "Ⓝ", gothicChar: "𝕹" },
  { letter: "Ñ", name: "Letra Ñ", tip: "Estructura de la N coronada por la virgulilla que admite formas de corona o nube.", blockChar: "Ñ", bubbleChar: "Ñ", gothicChar: "Ñ" },
  { letter: "O", name: "Letra O", tip: "Circulo u ovalo perfecto para integrar destellos blancos de brillo o pupilas.", blockChar: "🅾", bubbleChar: "Ⓞ", gothicChar: "𝕺" },
  { letter: "P", name: "Letra P", tip: "Lobulo superior amplio sostenido por un mastil vertical esbelto.", blockChar: "🅿", bubbleChar: "Ⓟ", gothicChar: "𝕻" },
  { letter: "Q", name: "Letra Q", tip: "Cuerpo circular completado por una cola dinamica que rompe hacia la derecha.", blockChar: "🆀", bubbleChar: "Ⓠ", gothicChar: "𝕼" },
  { letter: "R", name: "Letra R", tip: "Letra clave del hip-hop con lobulo superior y pata diagonal estilizada.", blockChar: "🆁", bubbleChar: "Ⓡ", gothicChar: "𝕽" },
  { letter: "S", name: "Letra S", tip: "La reina del flow: doble curva ondulada con balanceo superior e inferior.", blockChar: "🆂", bubbleChar: "Ⓢ", gothicChar: "𝕾" },
  { letter: "T", name: "Letra T", tip: "Travesano horizontal dominante apoyado sobre un soporte vertical central.", blockChar: "🆃", bubbleChar: "Ⓣ", gothicChar: "𝕿" },
  { letter: "U", name: "Letra U", tip: "Canal semicircular con base curva y bordes verticales simetricos.", blockChar: "🆄", bubbleChar: "Ⓤ", gothicChar: "𝖀" },
  { letter: "V", name: "Letra V", tip: "Vertice angular inferior hacia donde convergen ambas lineas diagonales.", blockChar: "🆅", bubbleChar: "Ⓥ", gothicChar: "𝖁" },
  { letter: "W", name: "Letra W", tip: "Gran volumen visual con cuadruple apoyo superior e inferior.", blockChar: "🆆", bubbleChar: "Ⓦ", gothicChar: "𝖂" },
  { letter: "X", name: "Letra X", tip: "Cruce simetrico en aspa muy versatil para incorporar remates de flecha.", blockChar: "🆇", bubbleChar: "Ⓧ", gothicChar: "𝖃" },
  { letter: "Y", name: "Letra Y", tip: "Caliz superior bifurcado que descarga sobre un mastil vertical inferior.", blockChar: "🆈", bubbleChar: "Ⓨ", gothicChar: "𝖄" },
  { letter: "Z", name: "Letra Z", tip: "Lineas horizontales en zig-zag conectadas por una diagonal energica.", blockChar: "🆉", bubbleChar: "Ⓩ", gothicChar: "𝖅" },
];

export const PRESET_NAMES = [
  "Alex",
  "Sofía",
  "Diego",
  "Luna",
  "Mateo",
  "Valentina",
  "Carlos",
  "Leo",
  "King",
  "Shadow",
  "Toxic",
  "Ghost",
  "Hunter",
  "Graffiti",
  "Urban",
  "Crew",
];

export const GRAFFITI_PRESETS = PRESET_NAMES;

export const GRAFFITI_CATEGORIES: { id: GraffitiCategory; label: string }[] = [
  { id: "urbano", label: "Urbano" },
  { id: "bloque", label: "Bloque" },
  { id: "burbuja", label: "Burbuja" },
  { id: "gotica", label: "Gótica" },
  { id: "tags", label: "Tags" },
];

export function transformGraffitiText(text: string, styleId: string): string {
  const style = GRAFFITI_STYLES.find((s) => s.id === styleId);
  if (!style) return text;
  return style.transform(text);
}
