import { charCount } from "@/lib/unicode";
import { smallCaps, fraktur, boldFraktur, doubleStruck } from "@/lib/unicode/mappings/alphabets";

export type ApodoStyle =
  | "todos"
  | "epico"
  | "oscuro"
  | "competitivo"
  | "gracioso"
  | "aesthetic"
  | "fantasia"
  | "corto";

export interface ApodoStyleConfig {
  id: ApodoStyle;
  label: string;
  icon: string;
  description: string;
}

export const APODOS_STYLES: ApodoStyleConfig[] = [
  { id: "todos", label: "Todos", icon: "🎮", description: "Mezcla de todos los estilos gamer" },
  { id: "epico", label: "Épico", icon: "🔥", description: "Poderoso, legendario y titánico" },
  { id: "oscuro", label: "Oscuro", icon: "🌑", description: "Sombras, noche, misterio y vacío" },
  { id: "competitivo", label: "Competitivo", icon: "⚡", description: "Directo, rápido y tryhard" },
  { id: "gracioso", label: "Gracioso", icon: "🥑", description: "Humor, troll y combinaciones divertidas" },
  { id: "aesthetic", label: "Aesthetic", icon: "🌸", description: "Suave, visual, floral y cósmico" },
  { id: "fantasia", label: "Fantasía", icon: "✨", description: "Mágico, mitológico y rúnico" },
  { id: "corto", label: "Corto", icon: "🎯", description: "De 3 a 5 letras, limpio y directo" },
];

export interface ApodoCardItem {
  id: string;
  name: string;
  cleanName: string;
  style: Exclude<ApodoStyle, "todos">;
  dnaTag: string;
  charLength: number;
}

export const APODOS_STARTER_LIST: ApodoCardItem[] = [
  { id: "start-1", name: "ShadowFox", cleanName: "ShadowFox", style: "oscuro", dnaTag: "Oscuro · Ágil", charLength: 9 },
  { id: "start-2", name: "NovaX", cleanName: "NovaX", style: "competitivo", dnaTag: "Competitivo · Directo", charLength: 5 },
  { id: "start-3", name: "PixelRex", cleanName: "PixelRex", style: "gracioso", dnaTag: "Gracioso · Retro", charLength: 8 },
  { id: "start-4", name: "LunaByte", cleanName: "LunaByte", style: "aesthetic", dnaTag: "Aesthetic · Tech", charLength: 8 },
  { id: "start-5", name: "GhostAce", cleanName: "GhostAce", style: "oscuro", dnaTag: "Oscuro · Preciso", charLength: 8 },
  { id: "start-6", name: "IronWolf", cleanName: "IronWolf", style: "epico", dnaTag: "Épico · Fuerte", charLength: 8 },
  { id: "start-7", name: "Nyx", cleanName: "Nyx", style: "corto", dnaTag: "Corto · Mitológico", charLength: 3 },
  { id: "start-8", name: "Vex", cleanName: "Vex", style: "corto", dnaTag: "Corto · Rápido", charLength: 3 },
  { id: "start-9", name: "PolloPro", cleanName: "PolloPro", style: "gracioso", dnaTag: "Gracioso · Meme", charLength: 8 },
  { id: "start-10", name: "PrimeAce", cleanName: "PrimeAce", style: "competitivo", dnaTag: "Competitivo · Elite", charLength: 8 },
  { id: "start-11", name: "AstralX", cleanName: "AstralX", style: "fantasia", dnaTag: "Fantasía · Cósmico", charLength: 7 },
  { id: "start-12", name: "DonPixel", cleanName: "DonPixel", style: "gracioso", dnaTag: "Gracioso · Clásico", charLength: 8 },
];

export interface StyleVocabulary {
  starters: string[];
  finishers: string[];
  standalones: string[];
  dnaLabels: string[];
}

export const APODO_VOCABULARIES: Record<Exclude<ApodoStyle, "todos">, StyleVocabulary> = {
  epico: {
    starters: ["Titan", "Ares", "Furia", "Kaos", "Rex", "Blaze", "Omega", "Vortex", "Iron", "Magnus", "Ragnar", "Dominus", "Goliath", "Colossus"],
    finishers: ["Rex", "Storm", "Wrath", "Prime", "God", "Valkyr", "Magnus", "Kaos", "Fury", "Slayer", "Overlord", "Force", "Strike", "Blade"],
    standalones: ["TitanRex", "AresStorm", "FuriaKaos", "OmegaWrath", "IronValkyr", "BlazeMagnus", "VortexPrime", "RagnarX", "DominusGod", "KaosSlayer", "TitanGod", "IronPrime"],
    dnaLabels: ["Épico · Titánico", "Épico · Legendario", "Épico · Feroz", "Épico · Poderoso"],
  },
  oscuro: {
    starters: ["Shadow", "Dark", "Night", "Void", "Ghost", "Grim", "Nox", "Sombra", "Umbra", "Black", "Abyss", "Dusk", "Silent"],
    finishers: ["Lynx", "Fox", "Raven", "Wolf", "Ace", "Nova", "Fang", "Soul", "X", "Viper", "Specter", "Mist", "Blade", "Echo"],
    standalones: ["ShadowLynx", "DarkLynx", "NightRaven", "VoidX", "GhostAce", "BlackNova", "NightFang", "SilentVoid", "ShadowFox", "VoidLynx", "NoxWolf", "AbyssAce"],
    dnaLabels: ["Oscuro · Sombras", "Oscuro · Nocturno", "Oscuro · Sigiloso", "Oscuro · Misterio"],
  },
  competitivo: {
    starters: ["Prime", "Alpha", "Rapid", "Clutch", "Apex", "Rush", "Blitz", "Zero", "Rank", "Velo", "Flex", "Pro", "Hyper", "Tempo"],
    finishers: ["Ace", "Vex", "Rex", "X", "Aim", "Shot", "Scope", "Drift", "Strike", "Core", "Dash", "Sync", "Mode", "Lock"],
    standalones: ["PrimeX", "Vortex", "ZeroAim", "RazeX", "ClutchFox", "AlphaVex", "IronAce", "RapidX", "PrimeAce", "RushZero", "ApexNox", "VeloX"],
    dnaLabels: ["Competitivo · Tryhard", "Competitivo · Preciso", "Competitivo · Rápido", "Competitivo · Clutch"],
  },
  gracioso: {
    starters: ["Don", "Tio", "Pixel", "Noob", "Pollo", "Papa", "Pan", "Pato", "Taco", "Manco", "Señor", "Casi", "Modo"],
    finishers: ["Pro", "Lag", "Loco", "Ninja", "Crit", "Respawn", "ConCafe", "VIP", "Bot", "Gamer", "Fail", "GG", "Lover", "XD"],
    standalones: ["DonPixel", "PolloPro", "PanNinja", "TioLag", "PapaCrit", "NoobConCafe", "PixelLoco", "SeñorRespawn", "PatoPro", "MancoVIP", "TacoRush", "CasiPro"],
    dnaLabels: ["Gracioso · Casual", "Gracioso · Meme", "Gracioso · Irónico", "Gracioso · Divertido"],
  },
  aesthetic: {
    starters: ["Luna", "Nova", "Bloom", "Aura", "Soft", "Sky", "Nube", "Lila", "Star", "Lumi", "Velvet", "Iris", "Pastel", "Honey"],
    finishers: ["Bloom", "Sky", "Vibe", "Lila", "Rose", "Aura", "Moon", "Glow", "Cloud", "Sun", "Mist", "Star", "Petal", "Fae"],
    standalones: ["LunaBloom", "SoftNova", "AuraSky", "MoonVibe", "NubeLila", "NovaRose", "VelvetSky", "IrisGlow", "PastelMoon", "CloudAura", "SweetNova", "StarLuna"],
    dnaLabels: ["Aesthetic · Visual", "Aesthetic · Suave", "Aesthetic · Floral", "Aesthetic · Cósmico"],
  },
  fantasia: {
    starters: ["Luna", "Nova", "Star", "Moon", "Mystic", "Rune", "Astral", "Velvet", "Arcano", "Kael", "Draco", "Zephyr", "Elden", "Frost"],
    finishers: ["Vex", "Fae", "Lynx", "Fox", "Nova", "Wolf", "X", "Moon", "Blade", "Mage", "Aura", "Lore", "Wing", "Spire"],
    standalones: ["LunaVex", "NovaFae", "StarLynx", "MoonFox", "MysticNova", "RuneWolf", "AstralX", "VelvetMoon", "KaelRune", "DracoVex", "ArcanoV", "ZephyrMyth"],
    dnaLabels: ["Fantasía · Mágico", "Fantasía · Mítico", "Fantasía · Rúnico", "Fantasía · Astral"],
  },
  corto: {
    starters: ["El", "i", "Mr", "X", "Z", "V", "K", "D"],
    finishers: ["7", "X", "0", "9", "Z", "K", "Q", "V"],
    standalones: ["Nyx", "Rexo", "Vex", "Ziro", "Kiro", "Nox", "Lynx", "Nova", "Zyn", "Raze", "Rux", "Kael", "Lux", "Jax", "Zen", "Neo", "Rex", "Sky", "Ash", "Kai"],
    dnaLabels: ["Corto · 3 letras", "Corto · 4 letras", "Corto · 5 letras", "Corto · Compacto"],
  },
};

/**
 * Text transformation helpers for Apodos
 */
export function toSmallCaps(text: string): string {
  if (!text) return "";
  return Array.from(text)
    .map((char) => smallCaps[char] ?? char)
    .join("");
}

export function toGothic(text: string): string {
  if (!text) return "";
  return Array.from(text)
    .map((char) => fraktur[char] ?? char)
    .join("");
}

export function toBoldFraktur(text: string): string {
  if (!text) return "";
  return Array.from(text)
    .map((char) => boldFraktur[char] ?? char)
    .join("");
}

export function toDoubleStruck(text: string): string {
  if (!text) return "";
  return Array.from(text)
    .map((char) => doubleStruck[char] ?? char)
    .join("");
}

export interface ApodoCustomStyles {
  clean: string;
  smallCaps: string;
  gothic: string;
  doubleStruck: string;
  framedBracket: string;
  angelWings: string;
  crownKing: string;
  swordsSamurai: string;
  starRibbon: string;
}

export function generateApodoStyles(baseName: string): ApodoCustomStyles {
  const clean = baseName.trim() || "ShadowFox";
  const sc = toSmallCaps(clean);
  const got = toGothic(clean);
  const ds = toDoubleStruck(clean);

  return {
    clean,
    smallCaps: sc,
    gothic: got,
    doubleStruck: ds,
    framedBracket: `『${sc}』`,
    angelWings: `꧁${sc}꧂`,
    crownKing: `亗 ${sc} 亗`,
    swordsSamurai: `乂${sc}乂`,
    starRibbon: `╰★${sc}★╮`,
  };
}

/**
 * Semantic Refinement Engine ("Más como este"):
 * If user likes "ShadowLynx", produces semantically adjacent choices:
 * ShadowFox, NightLynx, DarkLynx, VoidLynx, ShadowX
 */
export function getMoreLikeThisApodo(
  item: ApodoCardItem | { name: string; style?: ApodoStyle }
): ApodoCardItem[] {
  const name = item.name.trim();
  const catKey = (item.style && item.style !== "todos" ? item.style : "oscuro") as Exclude<ApodoStyle, "todos">;
  const vocab = APODO_VOCABULARIES[catKey] || APODO_VOCABULARIES.oscuro;

  // Split name into prefix and suffix
  const camelMatch = name.match(/([A-ZÁÉÍÓÚÑa-záéíóúñ][a-záéíóúñ0-9]+|[A-ZÁÉÍÓÚÑ]+)/g);
  let prefix = "";
  let suffix = "";

  if (camelMatch && camelMatch.length >= 2) {
    prefix = camelMatch[0];
    suffix = camelMatch.slice(1).join("");
  } else {
    prefix = name;
  }

  const results: ApodoCardItem[] = [];
  const seen = new Set<string>([name.toLowerCase()]);

  // Strategy 1: Keep prefix, change suffix
  for (const altSuffix of vocab.finishers) {
    const candidate = `${prefix}${altSuffix}`;
    if (!seen.has(candidate.toLowerCase())) {
      seen.add(candidate.toLowerCase());
      results.push({
        id: `remix-${Date.now()}-${candidate}`,
        name: candidate,
        cleanName: candidate,
        style: catKey,
        dnaTag: `${vocab.dnaLabels[0]} · Derivado`,
        charLength: charCount(candidate),
      });
      if (results.length >= 3) break;
    }
  }

  // Strategy 2: Keep suffix, change prefix
  if (suffix) {
    for (const altPrefix of vocab.starters) {
      const candidate = `${altPrefix}${suffix}`;
      if (!seen.has(candidate.toLowerCase())) {
        seen.add(candidate.toLowerCase());
        results.push({
          id: `remix-${Date.now()}-${candidate}`,
          name: candidate,
          cleanName: candidate,
          style: catKey,
          dnaTag: `${vocab.dnaLabels[1]} · Afín`,
          charLength: charCount(candidate),
        });
        if (results.length >= 6) break;
      }
    }
  }

  // Strategy 3: Add short modifiers
  const shortMods = ["X", "Ace", "Nova", "Zero", "Pro"];
  for (const mod of shortMods) {
    const candidate = `${prefix}${mod}`;
    if (!seen.has(candidate.toLowerCase())) {
      seen.add(candidate.toLowerCase());
      results.push({
        id: `remix-${Date.now()}-${candidate}`,
        name: candidate,
        cleanName: candidate,
        style: catKey,
        dnaTag: `${vocab.dnaLabels[2]} · Variante`,
        charLength: charCount(candidate),
      });
      if (results.length >= 8) break;
    }
  }

  return results.slice(0, 8);
}

/**
 * Normalizes user seed word while preserving accents, tildes, and ñ
 */
export function formatSeedWord(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "";
  // Keep original casing if user capitalized multiple characters (e.g. "MX", "LuNa")
  if (/[A-ZÁÉÍÓÚÑ].*[A-ZÁÉÍÓÚÑ]/.test(trimmed)) {
    return trimmed;
  }
  // Otherwise, capitalize first letter nicely
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

/**
 * Main batch generator for Apodos para Juegos
 */
export function generateApodosBatch(params: {
  seedWord?: string;
  style: ApodoStyle;
  batchSize?: number;
}): ApodoCardItem[] {
  const { seedWord = "", style = "todos", batchSize = 12 } = params;
  const rawSeed = formatSeedWord(seedWord);
  const results: ApodoCardItem[] = [];
  const seen = new Set<string>();

  const activeCategories: Exclude<ApodoStyle, "todos">[] =
    style === "todos"
      ? ["epico", "oscuro", "competitivo", "gracioso", "aesthetic", "fantasia", "corto"]
      : [style as Exclude<ApodoStyle, "todos">];

  function pickRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let attempts = 0;
  const maxAttempts = 300;

  while (results.length < batchSize && attempts < maxAttempts) {
    attempts++;
    const currentCat = pickRandom(activeCategories);
    const vocab = APODO_VOCABULARIES[currentCat];
    let candidate = "";

    if (rawSeed) {
      // User provided a personal word (e.g. Sajid, Luna, Lobo)
      const strategy = Math.floor(Math.random() * 5);
      const prefix = pickRandom(vocab.starters);
      const suffix = pickRandom(vocab.finishers);

      switch (strategy) {
        case 0:
          // Seed + Suffix (e.g., LunaBloom, LoboNox)
          candidate = `${rawSeed}${suffix}`;
          break;
        case 1:
          // Prefix + Seed (e.g., DarkLuna, ShadowLobo)
          candidate = `${prefix}${rawSeed}`;
          break;
        case 2:
          // Seed + Modifier (e.g., LunaX, LoboZero, SajidPro)
          const mods = ["X", "7", "Zero", "Pro", "Rush", "Ace", "Prime", "Vex"];
          candidate = `${rawSeed}${pickRandom(mods)}`;
          break;
        case 3:
          // Prefix + Seed + Modifier (e.g., DarkLunaX)
          candidate = `${prefix}${rawSeed}X`;
          break;
        default:
          candidate = `${rawSeed}${suffix}`;
          break;
      }
    } else {
      // No seed: generate authentic gaming nicknames by category
      const strategy = Math.floor(Math.random() * 3);
      if (strategy === 0 && vocab.standalones.length > 0) {
        candidate = pickRandom(vocab.standalones);
      } else if (strategy === 1) {
        candidate = `${pickRandom(vocab.starters)}${pickRandom(vocab.finishers)}`;
      } else {
        const prefix = pickRandom(vocab.starters);
        const mod = pickRandom(["X", "Ace", "Vex", "Nova", "Zero"]);
        candidate = `${prefix}${mod}`;
      }
    }

    const trimmed = candidate.trim();
    if (!trimmed || seen.has(trimmed.toLowerCase())) continue;
    seen.add(trimmed.toLowerCase());

    const dnaTag = pickRandom(vocab.dnaLabels);

    results.push({
      id: `apodo-${Date.now()}-${results.length}-${trimmed}`,
      name: trimmed,
      cleanName: trimmed,
      style: currentCat,
      dnaTag: `${dnaTag} · ${charCount(trimmed)} caracteres`,
      charLength: charCount(trimmed),
    });
  }

  // Fallback if needed
  if (results.length < batchSize) {
    for (const starter of APODOS_STARTER_LIST) {
      if (results.length >= batchSize) break;
      if (!seen.has(starter.cleanName.toLowerCase())) {
        seen.add(starter.cleanName.toLowerCase());
        results.push({
          ...starter,
          id: `fallback-${starter.id}`,
        });
      }
    }
  }

  return results;
}
