import { charCount } from "@/lib/unicode";
import { fraktur, boldFraktur, doubleStruck } from "@/lib/unicode/mappings/alphabets";

export type GamingCategory =
  | "todos"
  | "competitivo"
  | "oscuro"
  | "fantasia"
  | "aesthetic"
  | "divertido"
  | "corto"
  | "epico";

export interface GamingCategoryConfig {
  id: GamingCategory;
  name: string;
  icon: string;
  description: string;
}

export const GAMING_CATEGORIES: GamingCategoryConfig[] = [
  { id: "todos", name: "Todos", icon: "🎮", description: "Mezcla equilibrada de todos los estilos" },
  { id: "competitivo", name: "Competitivo", icon: "⚡", description: "Rápido, tryhard, directo y agresivo" },
  { id: "oscuro", name: "Oscuro", icon: "🌑", description: "Sombras, noche, misterio y vacío" },
  { id: "fantasia", name: "Fantasía", icon: "✨", description: "Mágico, mitológico, astral y rúnico" },
  { id: "aesthetic", name: "Aesthetic", icon: "🌸", description: "Minimalista, visual, suave y celestial" },
  { id: "divertido", name: "Divertido", icon: "🥑", description: "Humor, ironía, troll y memes gamers" },
  { id: "corto", name: "Corto", icon: "🎯", description: "De 3 a 5 letras, limpio y memorable" },
  { id: "epico", name: "Épico", icon: "🔥", description: "Poderoso, titánico, legendario e implacable" },
];

export interface GamingVocabulary {
  prefixes: string[];
  suffixes: string[];
  standalones: string[];
  compoundsA: string[];
  compoundsB: string[];
}

export const VOCABULARIES: Record<Exclude<GamingCategory, "todos">, GamingVocabulary> = {
  competitivo: {
    prefixes: ["Apex", "Rush", "Clutch", "Vex", "Blitz", "Rank", "Zero", "Ace", "Kryp", "Raze", "Flex", "Pro"],
    suffixes: ["X", "Rank", "Clutch", "Zero", "Pro", "Rush", "Aim", "Vex", "Velo", "Flex", "7", "99", "God", "Mode", "Prime"],
    standalones: [
      "ClutchX", "VexRank", "RushZero", "ApexNox", "RazeX", "RankVex",
      "Blitz7", "ZeroRush", "KrypX", "NovaClutch", "AceBlitz", "FlexAim",
      "VeloX", "AimGod", "TempoRush", "ScopeVex", "DriftPro", "HavocZero"
    ],
    compoundsA: ["Apex", "Rush", "Clutch", "Vex", "Blitz", "Rank", "Zero", "Ace", "Kryp", "Raze", "Fast", "Hyper", "Velo"],
    compoundsB: ["Aim", "Shot", "Scope", "Drift", "Strike", "Drop", "Core", "Fire", "Zone", "Dash", "Lock", "Sync"]
  },
  oscuro: {
    prefixes: ["Nox", "Dark", "Void", "Sombra", "Ghost", "Grim", "Night", "Umbra", "Shade", "Noir", "Abyss", "Necro"],
    suffixes: ["Nox", "Void", "Sombra", "Raven", "Eclipse", "Noir", "Vex", "Zero", "Night", "X", "Dark", "Grim", "Shade", "Soul"],
    standalones: [
      "NoxLobo", "VoidRaven", "SombraX", "DarkNova", "CuervoNox", "EclipseV",
      "NocheZero", "GhostVex", "LoboVoid", "SombraNox", "GrimNox", "VexShadow",
      "AbyssLobo", "UmbraX", "ShadeRaven", "NecroVex", "NoxCuervo", "DarkEclipse"
    ],
    compoundsA: ["Nox", "Void", "Sombra", "Dark", "Ghost", "Grim", "Umbra", "Night", "Shade", "Noir", "Abyss"],
    compoundsB: ["Raven", "Wolf", "Crow", "Soul", "Fang", "Blade", "Haze", "Ash", "Bane", "Mist", "Wraith"]
  },
  fantasia: {
    prefixes: ["Rune", "Draco", "Astral", "Arcano", "Kael", "Lunar", "Aether", "Myth", "Zephyr", "Elden", "Frost", "Chrono"],
    suffixes: ["Rune", "Draco", "Mage", "Moon", "Myth", "Blade", "Frost", "Aura", "Vex", "Star", "Fable", "Lore", "Wing"],
    standalones: [
      "KaelRune", "DracoVex", "AstralNox", "RuneWolf", "AetherX", "NyraMoon",
      "ArcanoV", "NovaRune", "KaelDraco", "LunarMage", "ZephyrMyth", "AstralBlade",
      "FrostNyra", "EldenRune", "ChronoMage", "MythicKael", "RuneArcano", "DracoMoon"
    ],
    compoundsA: ["Astral", "Rune", "Draco", "Arcano", "Kael", "Nyra", "Aether", "Zephyr", "Frost", "Elden", "Solar"],
    compoundsB: ["Mage", "Moon", "Blade", "Myth", "Song", "Spire", "Tale", "Glow", "Heart", "Veil", "Rift"]
  },
  aesthetic: {
    prefixes: ["Luna", "Nova", "Bloom", "Aura", "Soft", "Sky", "Nube", "Lila", "Star", "Lumi", "Velvet", "Iris", "Pastel"],
    suffixes: ["Bloom", "Sky", "Vibe", "Lila", "Rose", "Aura", "Moon", "Glow", "Cloud", "Sun", "Mist", "Star", "Petal"],
    standalones: [
      "LunaBloom", "SoftNova", "AuraSky", "MoonVibe", "NubeLila", "NovaRose",
      "Lumi", "Auri", "NilaMoon", "StarLuna", "VelvetSky", "IrisGlow",
      "PastelMoon", "CloudAura", "SweetNova", "GlowLila", "SoftPetal", "AuraVibe"
    ],
    compoundsA: ["Luna", "Nova", "Soft", "Aura", "Nube", "Star", "Lumi", "Velvet", "Iris", "Candy", "Sweet"],
    compoundsB: ["Bloom", "Sky", "Vibe", "Rose", "Moon", "Glow", "Petal", "Cloud", "Shine", "Haze", "Wish"]
  },
  divertido: {
    prefixes: ["Pato", "Taco", "Manco", "Don", "PanCon", "NoEra", "Casi", "Modo", "Pixel", "Pollo", "Queso", "Señor"],
    suffixes: ["Pro", "Rush", "VIP", "Lag", "Clutch", "Papa", "Taco", "Bot", "Gamer", "Fail", "GG", "Pato", "Lover", "XD"],
    standalones: [
      "PatoPro", "TacoRush", "MancoVIP", "DonPixel", "PanConLag", "PatoClutch",
      "NoEraYo", "CasiPro", "ModoPapa", "PixelTaco", "PolloGamer", "QuesoFrito",
      "SeñorBot", "LagMaster", "MancoGod", "PatoVolador", "TacoLover", "PanConQueso"
    ],
    compoundsA: ["Pato", "Taco", "Manco", "Pixel", "Pollo", "Queso", "Llama", "Waffle", "Churro", "Tortilla", "Frijol"],
    compoundsB: ["Pro", "Rush", "Lag", "Bot", "VIP", "Clutch", "God", "Master", "King", "Fail", "Player"]
  },
  corto: {
    prefixes: ["El", "i", "Mr", "X", "Z", "V"],
    suffixes: ["7", "X", "0", "9", "Z", "K"],
    standalones: [
      "Nyx", "Vex", "Kiro", "Nox", "Zyn", "Rux",
      "Nova", "Kael", "Raze", "Ziro", "Lux", "Jax",
      "Zen", "Neo", "Rex", "Sky", "Ash", "Kai",
      "Dax", "Voz", "Tor", "Cid", "Val", "Rik"
    ],
    compoundsA: ["Nyx", "Vex", "Nox", "Zyn", "Rux", "Kiro", "Jax", "Kai", "Zen", "Lux"],
    compoundsB: ["X", "7", "Z", "0", "9", "K", "Q", "V"]
  },
  epico: {
    prefixes: ["Titan", "Ares", "Furia", "Kaos", "Rex", "Blaze", "Omega", "Vortex", "Iron", "Magnus", "Ragnar", "Dominus"],
    suffixes: ["Rex", "Storm", "Wrath", "Prime", "God", "Valkyr", "Magnus", "Kaos", "Fury", "Slayer", "Overlord", "Force"],
    standalones: [
      "TitanRex", "AresStorm", "FuriaKaos", "OmegaWrath", "IronValkyr", "BlazeMagnus",
      "VortexPrime", "RagnarX", "DominusGod", "ThunderColoss", "KaosSlayer", "AresFury",
      "RexTitan", "OmegaStorm", "ValkyrPrime", "StormWrath", "FuriaRex", "TitanGod"
    ],
    compoundsA: ["Titan", "Ares", "Furia", "Kaos", "Rex", "Blaze", "Omega", "Vortex", "Iron", "Magnus", "Ragnar", "Dominus", "Thunder"],
    compoundsB: ["Storm", "Wrath", "Prime", "God", "Valkyr", "Magnus", "Slayer", "Force", "Fang", "Bane", "Strike", "Shield"]
  }
};

/** Quick gaming decoration templates for progressive customization */
export const GAMING_DECORATION_PRESETS: Array<{
  id: string;
  name: string;
  apply: (text: string) => string;
}> = [
  { id: "clean", name: "Texto limpio", apply: (t) => t },
  { id: "crown-king", name: "Corona Imperial", apply: (t) => `亗 ${t} 亗` },
  { id: "brackets-pro", name: "Corchetes Pro", apply: (t) => `『${t}』` },
  { id: "japanese-brackets", name: "Corchetes Ninja", apply: (t) => `【${t}】` },
  { id: "sparkles", name: "Destellos", apply: (t) => `✦${t}✦` },
  { id: "lightning", name: "Relámpagos", apply: (t) => `⚡${t}⚡` },
  { id: "swords", name: "Espadas Cruzadas", apply: (t) => `乂${t}乂` },
  { id: "angel-wings", name: "Alas Insanas", apply: (t) => `꧁${t}꧂` },
  { id: "stars", name: "Estrellas Clásicas", apply: (t) => `★${t}★` },
  { id: "wings-soft", name: "Alas Viento", apply: (t) => `彡${t}彡` },
  { id: "queen-crown", name: "Reina", apply: (t) => `♛${t}♛` },
  { id: "skull", name: "Cráneo", apply: (t) => `☠ ${t} ☠` },
  { id: "flower", name: "Flor Aesthetic", apply: (t) => `✿ ${t} ✿` },
  {
    id: "gothic-fraktur",
    name: "Letras Góticas",
    apply: (t) => applyCharMap(t, fraktur)
  },
  {
    id: "bold-fraktur",
    name: "Gótica Negrita",
    apply: (t) => applyCharMap(t, boldFraktur)
  },
  {
    id: "double-struck",
    name: "Letras Huecas",
    apply: (t) => applyCharMap(t, doubleStruck)
  },
  {
    id: "small-caps",
    name: "Mayúsculas Pequeñas",
    apply: (t) => toSmallCaps(t)
  },
];

function applyCharMap(text: string, map: Record<string, string>): string {
  return Array.from(text)
    .map((char) => map[char] || char)
    .join("");
}

const SMALL_CAPS_MAP: Record<string, string> = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ",
  j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ",
  s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
  á: "á", é: "é", í: "í", ó: "ó", ú: "ú", ñ: "ñ",
};

function toSmallCaps(text: string): string {
  return Array.from(text)
    .map((c) => SMALL_CAPS_MAP[c.toLowerCase()] || c)
    .join("");
}

// Light inline decorations for "Con estilo" batch mode
const QUICK_BATCH_STYLES = [
  (t: string) => `『${t}』`,
  (t: string) => `✦${t}✦`,
  (t: string) => `亗${t}亗`,
  (t: string) => `乂${t}乂`,
  (t: string) => `⚡${t}⚡`,
  (t: string) => `★${t}★`,
  (t: string) => `【${t}】`,
  (t: string) => `彡${t}彡`,
  (t: string) => toSmallCaps(t),
  (t: string) => applyCharMap(t, fraktur),
];

/**
 * Normalizes user input: preserves Spanish accents and characters safely,
 * capitalizes clean words nicely without destroying internal capitalization.
 */
export function formatBaseWord(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "";
  // Keep original capitalization if already mixed/camelCase, otherwise capitalize first letter
  if (trimmed.length === 1) return trimmed.toUpperCase();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

/**
 * Core Name Generator Logic
 * Produces exactly batchSize unique names without duplicates.
 */
export function generateGamingNamesBatch(params: {
  baseWord?: string;
  category: GamingCategory;
  withStyle?: boolean;
  batchSize?: number;
}): Array<{ name: string; cleanName: string; charLength: number; category: GamingCategory }> {
  const { baseWord = "", category = "todos", withStyle = false, batchSize = 12 } = params;
  const rawBase = formatBaseWord(baseWord);
  const results: Array<{ name: string; cleanName: string; charLength: number; category: GamingCategory }> = [];
  const seenClean = new Set<string>();

  // Determine active categories to draw from
  const targetCategories: Exclude<GamingCategory, "todos">[] =
    category === "todos"
      ? ["competitivo", "oscuro", "fantasia", "aesthetic", "divertido", "corto", "epico"]
      : [category as Exclude<GamingCategory, "todos">];

  function pickRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function pickCategory(): Exclude<GamingCategory, "todos"> {
    return pickRandom(targetCategories);
  }

  let attempts = 0;
  const maxAttempts = 200;

  while (results.length < batchSize && attempts < maxAttempts) {
    attempts++;
    const currentCat = pickCategory();
    const vocab = VOCABULARIES[currentCat];
    let candidate = "";

    if (rawBase) {
      // User provided base word: generate personalized variants
      const strategy = Math.floor(Math.random() * 5);
      const prefix = pickRandom(vocab.prefixes);
      const suffix = pickRandom(vocab.suffixes);

      switch (strategy) {
        case 0:
          // UserWord + Suffix (e.g., LoboNox, LunaBloom)
          candidate = `${rawBase}${suffix}`;
          break;
        case 1:
          // Prefix + UserWord (e.g., NoxLobo, DarkLuna)
          candidate = `${prefix}${rawBase}`;
          break;
        case 2:
          // Short number or letter modifier (e.g., Lobo7, LoboX, LoboZero)
          const mods = ["7", "X", "0", "9", "99", "Z", "Pro", "Rush", "Vex", "V", "Prime"];
          candidate = `${rawBase}${pickRandom(mods)}`;
          break;
        case 3:
          // Prefix + UserWord + modifier
          const shortMods = ["X", "7", "Z", "V"];
          candidate = `${prefix}${rawBase}${pickRandom(shortMods)}`;
          break;
        default:
          // UserWord + Compound B (e.g., LoboAim, LoboBlade, LoboSky)
          candidate = `${rawBase}${pickRandom(vocab.compoundsB)}`;
          break;
      }
    } else {
      // Sorpréndeme: pure gaming idea generation
      const strategy = Math.floor(Math.random() * 3);
      if (strategy === 0 && vocab.standalones.length > 0) {
        candidate = pickRandom(vocab.standalones);
      } else if (strategy === 1) {
        // Compound A + Compound B (e.g., ApexAim, VoidRaven, LunaBloom)
        candidate = `${pickRandom(vocab.compoundsA)}${pickRandom(vocab.compoundsB)}`;
      } else {
        // Prefix + Suffix or short modifier
        const prefix = pickRandom(vocab.prefixes);
        const suffix = pickRandom(vocab.suffixes);
        candidate = `${prefix}${suffix}`;
      }
    }

    const trimmedClean = candidate.trim();
    if (!trimmedClean || seenClean.has(trimmedClean.toLowerCase())) {
      continue;
    }

    seenClean.add(trimmedClean.toLowerCase());

    // Apply styling if batch style toggle is enabled
    let finalDisplayName = trimmedClean;
    if (withStyle) {
      const styler = pickRandom(QUICK_BATCH_STYLES);
      finalDisplayName = styler(trimmedClean);
    }

    results.push({
      name: finalDisplayName,
      cleanName: trimmedClean,
      charLength: charCount(finalDisplayName),
      category: currentCat,
    });
  }

  // Fallback in case of extreme collision
  if (results.length < batchSize) {
    const fallbackList = [
      "NoxLobo", "ClutchX", "NovaRush", "VexZero", "VoidRaven", "AuraSky",
      "PatoPro", "TitanRex", "Nyx", "KaelRune", "SombraX", "DracoMoon"
    ];
    for (const fb of fallbackList) {
      if (results.length >= batchSize) break;
      if (!seenClean.has(fb.toLowerCase())) {
        seenClean.add(fb.toLowerCase());
        const display = withStyle ? `『${fb}』` : fb;
        results.push({
          name: display,
          cleanName: fb,
          charLength: charCount(display),
          category: "competitivo",
        });
      }
    }
  }

  return results;
}
