/**
 * Letras Manuscritas Data & Transformations
 * Curated manuscript-style Unicode mappings for:
 * /letras-manuscritas/
 * Categories: caligraficos, inclinados, decorados
 */

import * as maps from "./mappings/alphabets";
import { createMappingTransform } from "./transforms";

export type ManuscritaCategory = "todos" | "caligraficos" | "inclinados" | "decorados";

export interface ManuscritaStyle {
  id: string;
  name: string;
  category: "caligraficos" | "inclinados" | "decorados";
  description: string;
  tags: string[];
  transform: (text: string) => string;
  samplePreview: string;
}

function applyMap(text: string, map: Record<string, string>): string {
  const mapper = createMappingTransform(map);
  return mapper(text);
}

export const MANUSCRITA_STYLES: ManuscritaStyle[] = [
  // ── CALIGRAFICOS ──
  {
    id: "manuscrita-elegante",
    name: "Manuscrita Elegante",
    category: "caligraficos",
    description: "Curvas suaves con apariencia caligráfica delicada, ideal para nombres y dedicatorias.",
    tags: ["elegante", "script", "caligrafía", "suave"],
    transform: (t) => applyMap(t, maps.script),
    samplePreview: "ℒ𝓊𝓃𝒶",
  },
  {
    id: "manuscrita-marcada",
    name: "Manuscrita Marcada",
    category: "caligraficos",
    description: "Trazo caligráfico grueso y prominente para nombres con presencia.",
    tags: ["marcada", "script", "negrita", "gruesa"],
    transform: (t) => applyMap(t, maps.boldScript),
    samplePreview: "𝓛𝓾𝓷𝓪",
  },
  {
    id: "caligráfica-serif",
    name: "Caligráfica Serif Fina",
    category: "caligraficos",
    description: "Letras serifadas finas con inclinación sutil, entre manuscrita y editorial.",
    tags: ["serif", "fina", "editorial", "clásica"],
    transform: (t) => applyMap(t, maps.italicSerif),
    samplePreview: "𝐿𝑢𝑛𝑎",
  },
  {
    id: "caligráfica-serif-negrita",
    name: "Caligráfica Serif Gruesa",
    category: "caligraficos",
    description: "Variante de mayor peso visual con serifas e inclinación, transmite firmeza.",
    tags: ["serif", "negrita", "gruesa", "firme"],
    transform: (t) => applyMap(t, maps.boldItalicSerif),
    samplePreview: "𝑳𝒖𝒏𝒂",
  },
  {
    id: "manuscrita-elegante-espaciada",
    name: "Manuscrita Elegante Espaciada",
    category: "caligraficos",
    description: "Caligrafía script con espaciado editorial entre caracteres.",
    tags: ["espaciada", "editorial", "elegante"],
    transform: (t) => Array.from(applyMap(t, maps.script)).join(" "),
    samplePreview: "ℒ 𝓊 𝓃 𝒶",
  },
  {
    id: "manuscrita-marcada-espaciada",
    name: "Manuscrita Marcada Espaciada",
    category: "caligraficos",
    description: "Trazo grueso con separación rítmica para títulos pausados.",
    tags: ["espaciada", "marcada", "título"],
    transform: (t) => Array.from(applyMap(t, maps.boldScript)).join(" "),
    samplePreview: "𝓛 𝓾 𝓷 𝓪",
  },

  // ── INCLINADOS ──
  {
    id: "inclinada-suave",
    name: "Inclinada Suave",
    category: "inclinados",
    description: "Inclinación sutil y limpia, alternativa discreta a los modelos caligráficos.",
    tags: ["inclinada", "suave", "simple", "itálica"],
    transform: (t) => applyMap(t, maps.italicSerif),
    samplePreview: "𝐿𝑢𝑛𝑎",
  },
  {
    id: "inclinada-negrita",
    name: "Inclinada Negrita",
    category: "inclinados",
    description: "Inclinación con trazo grueso para mayor presencia visual.",
    tags: ["inclinada", "negrita", "gruesa"],
    transform: (t) => applyMap(t, maps.boldItalicSerif),
    samplePreview: "𝑳𝒖𝒏𝒂",
  },
  {
    id: "inclinada-sans",
    name: "Inclinada Moderna (Sans)",
    category: "inclinados",
    description: "Líneas modernas e inclinadas sin serifas, aspecto digital limpio.",
    tags: ["sans", "moderna", "inclinada"],
    transform: (t) => applyMap(t, maps.sansItalic),
    samplePreview: "𝘓𝘶𝘯𝘢",
  },
  {
    id: "inclinada-sans-negrita",
    name: "Inclinada Moderna Gruesa",
    category: "inclinados",
    description: "Combinación de inclinación moderna y trazo grueso sin serifas.",
    tags: ["sans", "negrita", "moderna", "inclinada"],
    transform: (t) => applyMap(t, maps.sansBoldItalic),
    samplePreview: "𝙇𝙪𝙣𝙖",
  },

  // ── DECORADOS ──
  {
    id: "manuscrita-corazon",
    name: "Manuscrita con Corazón",
    category: "decorados",
    description: "Letras caligráficas enmarcadas con corazones delicados.",
    tags: ["corazón", "romántico", "decorado"],
    transform: (t) => `♡ ${applyMap(t, maps.script)} ♡`,
    samplePreview: "♡ ℒ𝓊𝓃𝒶 ♡",
  },
  {
    id: "manuscrita-estrellas",
    name: "Manuscrita con Estrellas",
    category: "decorados",
    description: "Destellos suaves alrededor de la escritura caligráfica.",
    tags: ["estrellas", "destellos", "decorado"],
    transform: (t) => `✧ ${applyMap(t, maps.boldScript)} ✧`,
    samplePreview: "✧ 𝓛𝓾𝓷𝓪 ✧",
  },
  {
    id: "manuscrita-flores",
    name: "Manuscrita con Flores",
    category: "decorados",
    description: "Decoración floral primaveral con letras caligráficas.",
    tags: ["flores", "primavera", "decorado"],
    transform: (t) => `❀ ${applyMap(t, maps.script)} ❀`,
    samplePreview: "❀ ℒ𝓊𝓃𝒶 ❀",
  },
  {
    id: "manuscrita-corchetes",
    name: "Manuscrita con Corchetes Japoneses",
    category: "decorados",
    description: "Corchetes estilizados orientales para presentar nombres manuscritos.",
    tags: ["corchetes", "japonés", "título"],
    transform: (t) => `『${applyMap(t, maps.boldScript)}』`,
    samplePreview: "『𝓛𝓾𝓷𝓪』",
  },
  {
    id: "manuscrita-mariposas",
    name: "Manuscrita con Mariposas",
    category: "decorados",
    description: "Diseño tierno con alas de mariposa simétricas.",
    tags: ["mariposa", "tierno", "decorado"],
    transform: (t) => `ʚ ${applyMap(t, maps.script)} ɞ`,
    samplePreview: "ʚ ℒ𝓊𝓃𝒶 ɞ",
  },
  {
    id: "manuscrita-marco-ornamental",
    name: "Manuscrita con Marco Ornamental",
    category: "decorados",
    description: "Filigrana clásica con escritura caligráfica gruesa.",
    tags: ["marco", "filigrana", "ornamental"],
    transform: (t) => `꧁ ${applyMap(t, maps.boldScript)} ꧂`,
    samplePreview: "꧁ 𝓛𝓾𝓷𝓪 ꧂",
  },
  {
    id: "manuscrita-tibetana",
    name: "Manuscrita con Marco Tibetano",
    category: "decorados",
    description: "Símbolos sagrados simétricos para una presentación prestigiosa.",
    tags: ["tibetano", "sagrado", "marco"],
    transform: (t) => `༺ ${applyMap(t, maps.boldScript)} ༻`,
    samplePreview: "༺ 𝓛𝓾𝓷𝓪 ༻",
  },
  {
    id: "manuscrita-cielo-estrellas",
    name: "Manuscrita Cielo Estrellado",
    category: "decorados",
    description: "Constelaciones y estrellas luminosas alrededor de la caligrafía.",
    tags: ["cielo", "estrellas", "kawaii"],
    transform: (t) => `⋆｡°✩ ${applyMap(t, maps.script)} ✩°｡⋆`,
    samplePreview: "⋆｡°✩ ℒ𝓊𝓃𝒶 ✩°｡⋆",
  },
];

// Alphabets for the educational section
export interface ManuscritaAlphabet {
  id: string;
  name: string;
  uppercase: string;
  lowercase: string;
}

export const MANUSCRITA_ALPHABETS: ManuscritaAlphabet[] = [
  {
    id: "elegante",
    name: "Manuscrita Elegante",
    uppercase: "𝒜 ℬ 𝒞 𝒟 ℰ ℱ 𝒢 ℋ ℐ 𝒥 𝒦 ℒ ℳ 𝒩 𝒪 𝒫 𝒬 ℛ 𝒮 𝒯 𝒰 𝒱 𝒲 𝒳 𝒴 𝒵",
    lowercase: "𝒶 𝒷 𝒸 𝒹 ℯ 𝒻 ℊ 𝒽 𝒾 𝒿 𝓀 𝓁 𝓂 𝓃 ℴ 𝓅 𝓆 𝓇 𝓈 𝓉 𝓊 𝓋 𝓌 𝓍 𝓎 𝓏",
  },
  {
    id: "marcada",
    name: "Manuscrita Marcada",
    uppercase: "𝓐 𝓑 𝓒 𝓓 𝓔 𝓕 𝓖 𝓗 𝓘 𝓙 𝓚 𝓛 𝓜 𝓝 𝓞 𝓟 𝓠 𝓡 𝓢 𝓣 𝓤 𝓥 𝓦 𝓧 𝓨 𝓩",
    lowercase: "𝓪 𝓫 𝓬 𝓭 𝓮 𝓯 𝓰 𝓱 𝓲 𝓳 𝓴 𝓵 𝓶 𝓷 𝓸 𝓹 𝓺 𝓻 𝓼 𝓽 𝓾 𝓿 𝔀 𝔁 𝔂 𝔃",
  },
  {
    id: "inclinada-serif",
    name: "Inclinada Serif",
    uppercase: "𝐴 𝐵 𝐶 𝐷 𝐸 𝐹 𝐺 𝐻 𝐼 𝐽 𝐾 𝐿 𝑀 𝑁 𝑂 𝑃 𝑄 𝑅 𝑆 𝑇 𝑈 𝑉 𝑊 𝑋 𝑌 𝑍",
    lowercase: "𝑎 𝑏 𝑐 𝑑 𝑒 𝑓 𝑔 ℎ 𝑖 𝑗 𝑘 𝑙 𝑚 𝑛 𝑜 𝑝 𝑞 𝑟 𝑠 𝑡 𝑢 𝑣 𝑤 𝑥 𝑦 𝑧",
  },
  {
    id: "inclinada-negrita",
    name: "Inclinada Negrita",
    uppercase: "𝑨 𝑩 𝑪 𝑫 𝑬 𝑭 𝑮 𝑯 𝑰 𝑱 𝑲 𝑳 𝑴 𝑵 𝑶 𝑷 𝑸 𝑹 𝑺 𝑻 𝑼 𝑽 𝑾 𝑿 𝒀 𝒁",
    lowercase: "𝒂 𝒃 𝒄 𝒅 𝒆 𝒇 𝒈 𝒉 𝒊 𝒋 𝒌 𝒍 𝒎 𝒏 𝒐 𝒑 𝒒 𝒓 𝒔 𝒕 𝒖 𝒗 𝒘 𝒙 𝒚 𝒛",
  },
];
