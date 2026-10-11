/**
 * Modelos de Letras Curation Data & Transformations
 * Curated list of 40+ distinct, premium letter models for:
 * /tipos-de-letras/modelos-de-letras/
 * Categories: Sencillos, Elegantes, Aesthetic, Decorados
 */

import * as maps from "./mappings/alphabets";
import { createMappingTransform, createCombiningTransform, createSafeTransform } from "./transforms";

export type ModeloCategory = "todos" | "sencillos" | "elegantes" | "aesthetic" | "decorados";

export interface LetraModelo {
  id: string;
  name: string;
  category: "sencillos" | "elegantes" | "aesthetic" | "decorados";
  description: string;
  tags: string[];
  transform: (text: string) => string;
  samplePreview: string; // Preview of "Luna"
}

// Transform helpers
function applyMap(text: string, map: Record<string, string>): string {
  const mapper = createMappingTransform(map);
  return mapper(text);
}

function applyCombining(text: string, mark: string): string {
  const combiner = createCombiningTransform([mark]);
  return combiner(text);
}

export const CURATED_MODELOS: LetraModelo[] = [
  // ── CATEGORÍA: SENCILLOS ──
  {
    id: "negrita-serif",
    name: "Negrita Serif",
    category: "sencillos",
    description: "Trazo grueso clásico con serifa, ideal para encabezados y nombres destacados.",
    tags: ["negrita", "serif", "gruesa"],
    transform: (t) => applyMap(t, maps.boldSerif),
    samplePreview: "𝐋𝐮𝐧𝐚",
  },
  {
    id: "negrita-moderna",
    name: "Negrita Moderna (Sans)",
    category: "sencillos",
    description: "Líneas rectas, modernas y contundentes sin remates ornamentales.",
    tags: ["negrita", "sans", "moderna"],
    transform: (t) => applyMap(t, maps.sansBold),
    samplePreview: "𝗟𝘂𝗻𝗮",
  },
  {
    id: "cursiva-simple",
    name: "Cursiva Simple",
    category: "sencillos",
    description: "Inclinación sutil y fluida inspirada en la tipografía editorial itálica.",
    tags: ["cursiva", "italica", "simple"],
    transform: (t) => applyMap(t, maps.italicSerif),
    samplePreview: "𝐿𝑢𝑛𝑎",
  },
  {
    id: "cursiva-negrita",
    name: "Cursiva Negrita",
    category: "sencillos",
    description: "Fusión de peso visual grueso con inclinación caligráfica clásica.",
    tags: ["cursiva", "negrita", "fuerte"],
    transform: (t) => applyMap(t, maps.boldItalicSerif),
    samplePreview: "𝑳𝒖𝒏𝒂",
  },
  {
    id: "sans-limpia",
    name: "Sans Limpia",
    category: "sencillos",
    description: "Tipografía de palo seco minimalista, ordenada y de excelente legibilidad.",
    tags: ["sans", "minimalista", "limpia"],
    transform: (t) => applyMap(t, maps.sansSerif),
    samplePreview: "𝖫𝗎𝗇𝖺",
  },
  {
    id: "sans-italica",
    name: "Sans Itálica",
    category: "sencillos",
    description: "Forma moderna inclinada sin serifa, fresca y aerodinámica.",
    tags: ["sans", "italica", "moderna"],
    transform: (t) => applyMap(t, maps.sansItalic),
    samplePreview: "𝘓𝘶𝘯𝘢",
  },
  {
    id: "maquina-escribir",
    name: "Máquina de Escribir",
    category: "sencillos",
    description: "Estilo monoespaciado tipo máquina de escribir o código retro.",
    tags: ["monoespaciado", "retro", "tecleado"],
    transform: (t) => applyMap(t, maps.monospace),
    samplePreview: "𝙻𝚞𝚗𝚊",
  },
  {
    id: "versalitas-pequenas",
    name: "Versalitas Pequeñas",
    category: "sencillos",
    description: "Mayúsculas compactas del tamaño de las minúsculas normales.",
    tags: ["versalitas", "small caps", "pequenas"],
    transform: (t) => applyMap(t, maps.smallCaps),
    samplePreview: "ʟᴜɴᴀ",
  },
  {
    id: "invertida-upside",
    name: "Invertida (Boca Abajo)",
    category: "sencillos",
    description: "Caracteres rotados 180 grados para un efecto visual curioso y divertido.",
    tags: ["invertida", "boca abajo", "curiosa"],
    transform: (t) => {
      const mapper = createMappingTransform(maps.upsideDown);
      return Array.from(mapper(t)).reverse().join("");
    },
    samplePreview: "ɐunꞀ",
  },
  {
    id: "sans-negrita-italica",
    name: "Sans Negrita Itálica",
    category: "sencillos",
    description: "Máxima presencia con inclinación dinámica moderna.",
    tags: ["sans", "negrita", "italica"],
    transform: (t) => applyMap(t, maps.sansBoldItalic),
    samplePreview: "𝙇𝙪𝙣𝙖",
  },

  // ── CATEGORÍA: ELEGANTES ──
  {
    id: "doble-trazo",
    name: "Doble Trazo (Blackboard)",
    category: "elegantes",
    description: "Contorno doble matemático hueco, distinguido y sofisticado.",
    tags: ["doble trazo", "blackboard", "elegante"],
    transform: (t) => applyMap(t, maps.doubleStruck),
    samplePreview: "𝕃𝕦𝕟𝕒",
  },
  {
    id: "cursiva-script",
    name: "Cursiva Script",
    category: "elegantes",
    description: "Trazos ornamentales caligráficos fluidos para cartas y nombres finos.",
    tags: ["script", "caligrafica", "elegante"],
    transform: (t) => applyMap(t, maps.script),
    samplePreview: "𝓛𝓾𝓷𝓪",
  },
  {
    id: "cursiva-negrita-script",
    name: "Cursiva Manuscrita Gruesa",
    category: "elegantes",
    description: "Script caligráfico de mayor grosor para títulos prominentes.",
    tags: ["script", "manuscrita", "gruesa"],
    transform: (t) => applyMap(t, maps.boldScript),
    samplePreview: " Celesta",
  },
  {
    id: "gotica-clasica",
    name: "Gótica Clásica (Fraktur)",
    category: "elegantes",
    description: "Letras medievales tradicionales de estilo germánico con trazos angulares.",
    tags: ["gotica", "fraktur", "medieval"],
    transform: (t) => applyMap(t, maps.fraktur),
    samplePreview: "𝔏𝔲𝔫𝔞",
  },
  {
    id: "gotica-negrita",
    name: "Gótica Negrita",
    category: "elegantes",
    description: "Versión de alto contraste y peso denso de las letras góticas.",
    tags: ["gotica", "negrita", "fuerte"],
    transform: (t) => applyMap(t, maps.boldFraktur),
    samplePreview: "𝕷𝖚𝖓𝖆",
  },
  {
    id: "marco-javanese-elegante",
    name: "Marco Ornamental Clásico",
    category: "elegantes",
    description: "Envoltura simétrica de filigrana real para nombres prestigiosos.",
    tags: ["marco", "filigrana", "real"],
    transform: (t) => `꧁ ${applyMap(t, maps.boldSerif)} ꧂`,
    samplePreview: "꧁ 𝐋𝐮𝐧𝐚 ꧂",
  },
  {
    id: "esquinas-finas",
    name: "Esquinas Japonesas",
    category: "elegantes",
    description: "Delimitadores zen discretos con tipografía de doble trazo.",
    tags: ["esquinas", "zen", "minimal"],
    transform: (t) => `「 ${applyMap(t, maps.doubleStruck)} 」`,
    samplePreview: "「 𝕃𝕦𝕟𝕒 」",
  },
  {
    id: "adorno-central",
    name: "Adorno de Florón",
    category: "elegantes",
    description: "Curvatura sutil al principio y al final con cursiva artística.",
    tags: ["floron", "adorno", "script"],
    transform: (t) => `꧔ ${applyMap(t, maps.script)} ꧔`,
    samplePreview: "꧔ 𝓛𝓾𝓷𝓪 ꧔",
  },
  {
    id: "doble-angulo",
    name: "Ángulos Nobles",
    category: "elegantes",
    description: "Enmarcado con dobles ángulos estilizados para dedicatorias.",
    tags: ["angulos", "noble", "dedicatoria"],
    transform: (t) => `《 ${applyMap(t, maps.script)} 》`,
    samplePreview: "《 𝓛𝓾𝓷𝓪 》",
  },
  {
    id: "serif-espaciada",
    name: "Serif Espaciada Editorial",
    category: "elegantes",
    description: "Espaciado rítmico entre caracteres para un efecto de lujo editorial.",
    tags: ["espaciada", "editorial", "lujo"],
    transform: (t) => Array.from(applyMap(t, maps.boldSerif)).join(" "),
    samplePreview: "𝐋 𝐮 𝐧 𝐚",
  },

  // ── CATEGORÍA: AESTHETIC ──
  {
    id: "aesthetic-fullwidth",
    name: "Aesthetic Ancho Completo (Vaporwave)",
    category: "aesthetic",
    description: "Letras ensanchadas orientales de estilo retro-digital y vaporwave.",
    tags: ["fullwidth", "vaporwave", "ancho"],
    transform: (t) => applyMap(t, maps.fullwidth),
    samplePreview: "Ｌｕｎａ",
  },
  {
    id: "circulos-blancos",
    name: "Letras en Círculos Blancos",
    category: "aesthetic",
    description: "Cada carácter contenido dentro de un círculo claro con borde.",
    tags: ["circulos", "redondas", "burbuja"],
    transform: (t) => applyMap(t, maps.circled),
    samplePreview: "Ⓛⓤⓝⓐ",
  },
  {
    id: "circulos-negros",
    name: "Letras en Círculos Negros",
    category: "aesthetic",
    description: "Glifos blancos sobre fondo de círculo oscuro de alto impacto.",
    tags: ["circulos", "negros", "invertidas"],
    transform: (t) => applyMap(t, maps.negativeCircled),
    samplePreview: "🅛🅤🅝🅐",
  },
  {
    id: "cuadrados-blancos",
    name: "Letras en Cuadrados Claros",
    category: "aesthetic",
    description: "Encuadre geométrico cuadrado limpio para iniciales y títulos.",
    tags: ["cuadrados", "geometria", "moderna"],
    transform: (t) => applyMap(t, maps.squared),
    samplePreview: "🄻🅄🄽🄰",
  },
  {
    id: "cuadrados-negros",
    name: "Letras en Cuadrados Negros",
    category: "aesthetic",
    description: "Letras inscritas en bloques oscuros para etiquetas visibles.",
    tags: ["cuadrados", "bloque", "oscuro"],
    transform: (t) => applyMap(t, maps.negativeSquared),
    samplePreview: "🅻🆄🅽🅰",
  },
  {
    id: "destellos-suaves",
    name: "Destellos Suaves",
    category: "aesthetic",
    description: "Estilo delicado rodeado de chispas estrelladas tenues.",
    tags: ["destellos", "estrellas", "suave"],
    transform: (t) => `✧ ${t} ✧`,
    samplePreview: "✧ Luna ✧",
  },
  {
    id: "destellos-magicos",
    name: "Destellos Mágicos",
    category: "aesthetic",
    description: "Cuatro puntas brillantes para destacar una palabra clave.",
    tags: ["magia", "brillo", "destello"],
    transform: (t) => `✦ ${applyMap(t, maps.boldSerif)} ✦`,
    samplePreview: "✦ 𝐋𝐮𝐧𝐚 ✦",
  },
  {
    id: "estrellitas-kawaii",
    name: "Cielo de Estrellas",
    category: "aesthetic",
    description: "Marco ornamental con constelaciones y estrellas luminosas.",
    tags: ["estrellas", "cielo", "kawaii"],
    transform: (t) => `⋆｡°✩ ${t} ✩°｡⋆`,
    samplePreview: "⋆｡°✩ Luna ✩°｡⋆",
  },
  {
    id: "corazones-minimal",
    name: "Corazones Minimalistas",
    category: "aesthetic",
    description: "Símbolos de corazón delicados con versalitas o texto limpio.",
    tags: ["corazon", "romantico", "minimal"],
    transform: (t) => `♡ ${t} ♡`,
    samplePreview: "♡ Luna ♡",
  },
  {
    id: "puntos-vaporwave",
    name: "Espaciado con Puntos",
    category: "aesthetic",
    description: "Puntos medianos intercalados entre cada letra para un ritmo relajado.",
    tags: ["puntos", "intercalado", "chill"],
    transform: (t) => Array.from(t).join(" · "),
    samplePreview: "L · u · n · a",
  },
  {
    id: "ondas-zen",
    name: "Ondas Suaves Zen",
    category: "aesthetic",
    description: "Espirales marinas y de brisa alrededor del nombre.",
    tags: ["ondas", "viento", "zen"],
    transform: (t) => `༄ ${t} ༄`,
    samplePreview: "༄ Luna ༄",
  },
  {
    id: "alas-angelicales",
    name: "Alas Angelicales",
    category: "aesthetic",
    description: "Diseño tierno con alas de ángel o mariposa simétricas.",
    tags: ["alas", "angel", "mariposa"],
    transform: (t) => `ʚ ${applyMap(t, maps.script)} ɞ`,
    samplePreview: "ʚ 𝓛𝓾𝓷𝓪 ɞ",
  },

  // ── CATEGORÍA: DECORADOS ──
  {
    id: "marco-tibetano",
    name: "Marco Tibetano Imperial",
    category: "decorados",
    description: "Símbolos sagrados de apertura y cierre para títulos épicos.",
    tags: ["tibetano", "imperial", "marco"],
    transform: (t) => `༺ ${applyMap(t, maps.boldSerif)} ༻`,
    samplePreview: "༺ 𝐋𝐮𝐧𝐚 ༻",
  },
  {
    id: "corchetes-japoneses-blancos",
    name: "Corchetes Japoneses Huecos",
    category: "decorados",
    description: "Encuadre estilizado oriental muy popular en títulos y bios.",
    tags: ["japones", "corchetes", "titulos"],
    transform: (t) => `『 ${applyMap(t, maps.boldSerif)} 』`,
    samplePreview: "『 𝐋𝐮𝐧𝐚 』",
  },
  {
    id: "doble-corchete-gamer",
    name: "Doble Corchete Gamer",
    category: "decorados",
    description: "Estructura simétrica contundente para apodos de videojuegos.",
    tags: ["gamer", "corchetes", "duro"],
    transform: (t) => `⟦ ${applyMap(t, maps.sansBold)} ⟧`,
    samplePreview: "⟦ 𝗟𝘂𝗻𝗮 ⟧",
  },
  {
    id: "flores-sakura",
    name: "Flores de Sakura",
    category: "decorados",
    description: "Decoración floral clásica primaveral para dedicatorias de amistad.",
    tags: ["sakura", "flores", "primavera"],
    transform: (t) => `❀ ${t} ❀`,
    samplePreview: "❀ Luna ❀",
  },
  {
    id: "corazones-dobles",
    name: "Doble Corazón Rosado",
    category: "decorados",
    description: "Diseño afectuoso con dos corazones flotantes.",
    tags: ["corazon", "amor", "emotivo"],
    transform: (t) => `💕 ${applyMap(t, maps.script)} 💕`,
    samplePreview: "💕 𝓛𝓾𝓷𝓪 💕",
  },
  {
    id: "fuego-insano",
    name: "Llamas de Fuego",
    category: "decorados",
    description: "Intensidad visual y energía para jugadores competitivos.",
    tags: ["fuego", "insano", "gamer"],
    transform: (t) => `🔥 ${applyMap(t, maps.sansBold)} 🔥`,
    samplePreview: "🔥 𝗟𝘂𝗻𝗮 🔥",
  },
  {
    id: "rayo-electrico",
    name: "Rayo Eléctrico",
    category: "decorados",
    description: "Símbolo de velocidad e impacto para clanes y nicks.",
    tags: ["rayo", "energia", "clan"],
    transform: (t) => `⚡ ${applyMap(t, maps.sansBold)} ⚡`,
    samplePreview: "⚡ 𝗟𝘂𝗻𝗮 ⚡",
  },
  {
    id: "corona-real",
    name: "Corona de Rey / Reina",
    category: "decorados",
    description: "Distintivo de liderazgo y prestigio para capitanes de equipo.",
    tags: ["corona", "rey", "reina"],
    transform: (t) => `👑 ${applyMap(t, maps.boldSerif)} 👑`,
    samplePreview: "👑 𝐋𝐮𝐧𝐚 👑",
  },
  {
    id: "lazos-coquette",
    name: "Lazos Coquette",
    category: "decorados",
    description: "Lazos ornamentales estéticos en tendencia para perfiles coquette.",
    tags: ["lazo", "coquette", "tierno"],
    transform: (t) => `୨୧ ${applyMap(t, maps.script)} ୨୧`,
    samplePreview: "୨୧ 𝓛𝓾𝓷𝓪 ୨୧",
  },
  {
    id: "espadas-combate",
    name: "Espadas Cruzadas",
    category: "decorados",
    description: "Emblema de batalla para escuadras de rol y shooters.",
    tags: ["espadas", "combate", "gaming"],
    transform: (t) => `⚔️ ${applyMap(t, maps.sansBold)} ⚔️`,
    samplePreview: "⚔️ 𝗟𝘂𝗻𝗮 ⚔️",
  },
  {
    id: "tachado-ondulado",
    name: "Tachado Ondulado",
    category: "decorados",
    description: "Línea combinatoria que atraviesa suavemente el texto.",
    tags: ["tachado", "onda", "glitch"],
    transform: (t) => applyCombining(t, "\u0334"),
    samplePreview: "L̴u̴n̴a̴",
  },
  {
    id: "subrayado-doble",
    name: "Subrayado Doble",
    category: "decorados",
    description: "Doble trazo inferior continuo bajo cada carácter.",
    tags: ["subrayado", "doble", "linea"],
    transform: (t) => applyCombining(t, "\u0333"),
    samplePreview: "L̳u̳n̳a̳",
  },
];

// Alfabetos completos para la sección educativa A-Z
export interface AlphabetModelExample {
  id: string;
  name: string;
  uppercase: string;
  lowercase: string;
}

export const ALPHABET_MODEL_EXAMPLES: AlphabetModelExample[] = [
  {
    id: "negrita",
    name: "Negrita",
    uppercase: "𝐀 𝐁 𝐂 𝐃 𝐄 𝐅 𝐆 𝐇 𝐈 𝐉 𝐊 𝐋 𝐌 𝐍 𝐎 𝐏 𝐐 𝐑 𝐒 𝐓 𝐔 𝐕 𝐖 𝐗 𝐘 𝐙",
    lowercase: "𝐚 𝐛 𝐜 𝐝 𝐞 𝐟 𝐠 𝐡 𝐢 𝐣 𝐤 𝐥 𝐦 𝐧 𝐨 𝐩 𝐪 𝐫 𝐬 𝐭 𝐮 𝐯 𝐰 𝐱 𝐲 𝐳",
  },
  {
    id: "cursiva-script",
    name: "Cursiva Decorativa",
    uppercase: "𝓐 𝓑 𝓒 𝓓 𝓔 𝓕 𝓖 𝓗 𝓘 𝓙 𝓚 𝓛 𝓜 𝓝 𝓞 𝓟 𝓠 𝓡 𝓢 𝓣 𝓤 𝓥 𝓦 𝓧 𝓨 𝓩",
    lowercase: "𝓪 𝓫 𝓬 𝓭 𝓮 𝓯 𝓰 𝓱 𝓲 𝓳 𝓴 𝓵 𝓶 𝓷 𝓸 𝓹 𝓺 𝓻 𝓼 𝓽 𝓾 𝓿 𝔀 𝔁 𝔂 𝔃",
  },
  {
    id: "gotica",
    name: "Gótica",
    uppercase: "𝕬 𝕭 𝕮 𝕯 𝕰 𝕱 𝕲 𝕳 𝕴 𝕵 𝕶 𝕷 𝕸 𝕹 𝕺 𝕻 𝕼 𝕽 𝕾 𝕿 𝖀 𝖁 𝖂 𝖃 𝖄 𝖅",
    lowercase: "𝖆 𝖇 𝖈 𝖉 𝖊 𝖋 𝖌 𝖍 𝖎 𝖏 𝖐 𝖑 𝖒 𝖓 𝖔 𝖕 𝖖 𝖗 𝖘 𝖙 𝖚 𝖛 𝖜 𝖝 𝖞 𝖟",
  },
  {
    id: "aesthetic",
    name: "Aesthetic (Ancho)",
    uppercase: "Ａ Ｂ Ｃ Ｄ Ｅ Ｆ Ｇ Ｈ Ｉ Ｊ Ｋ Ｌ Ｍ Ｎ Ｏ Ｐ Ｑ Ｒ Ｓ Ｔ Ｕ Ｖ Ｗ Ｘ Ｙ Ｚ",
    lowercase: "ａ ｂ ｃ ｄ ｅ ｆ ｇ ｈ ｉ ｊ ｋ ｌ ｍ ｎ ｏ ｐ ｑ ｒ ｓ ｔ ｕ ｖ ｗ ｘ ｙ ｚ",
  },
  {
    id: "doble-trazo",
    name: "Doble Trazo",
    uppercase: "𝔸 𝔹 ℂ 𝔻 𝔼 𝔽 𝔾 ℍ 𝕀 𝕁 𝕂 𝕃 𝕄 ℕ 𝕆 ℙ ℚ ℝ 𝕊 𝕋 𝕌 𝕍 𝕎 𝕏 𝕐 ℤ",
    lowercase: "𝕒 𝕓 𝕔 𝕕 𝕖 𝕗 𝕘 𝕙 𝕚 𝕛 𝕜 𝕝 𝕞 𝕟 𝕠 𝕡 𝕢 𝕣 𝕤 𝕥 𝕦 𝕧 𝕨 𝕩 𝕪 𝕫",
  },
  {
    id: "circulos",
    name: "Círculos",
    uppercase: "Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ",
    lowercase: "ⓐ ⓑ ⓒ ⓓ ⓔ ⓕ ⓖ ⓗ ⓘ ⓙ ⓚ ⓛ ⓜ ⓝ ⓞ ⓟ ⓠ ⓡ ⓢ ⓣ ⓤ ⓥ ⓦ ⓧ ⓨ ⓩ",
  },
];
