import { charCount } from "@/lib/unicode";
import { smallCaps, fraktur } from "@/lib/unicode/mappings/alphabets";

export type NickLengthFilter = "all" | "3-5" | "6-9";

export type NickStyle =
  | "todos"
  | "pro"
  | "cortos"
  | "oscuros"
  | "cyber"
  | "aesthetic"
  | "originales";

export interface NickStyleConfig {
  id: NickStyle;
  label: string;
  icon: string;
  description: string;
}

export const NICKS_STYLES: NickStyleConfig[] = [
  { id: "todos", label: "Todos", icon: "🎮", description: "Mezcla de todos los estilos de gamer tags" },
  { id: "pro", label: "Pro", icon: "🏆", description: "Enérgicos, competitivos y directos" },
  { id: "cortos", label: "Cortos", icon: "🎯", description: "De 3 a 5 caracteres, ultralimpios" },
  { id: "oscuros", label: "Oscuros", icon: "🌑", description: "Sombras, noche, vacío y misterio" },
  { id: "cyber", label: "Cyber", icon: "⚡", description: "Futuristas, glitched y tecnológicos" },
  { id: "aesthetic", label: "Aesthetic", icon: "🌸", description: "Suaves, visuales y minimalistas" },
  { id: "originales", label: "Originales", icon: "💡", description: "Combinaciones creativas y no genéricas" },
];

export const QUICK_SEEDS = ["Nova", "Shadow", "Vex", "Luna", "Nox", "Kael"];

export interface NickCardItem {
  id: string;
  name: string;
  cleanName: string;
  style: Exclude<NickStyle, "todos">;
  charLength: number;
  categoryLabel: string;
}

export const NICKS_STARTER_LIST: NickCardItem[] = [
  { id: "nick-1", name: "Vex", cleanName: "Vex", style: "cortos", charLength: 3, categoryLabel: "Corto · 3 letras" },
  { id: "nick-2", name: "Nox", cleanName: "Nox", style: "cortos", charLength: 3, categoryLabel: "Corto · 3 letras" },
  { id: "nick-3", name: "Kael", cleanName: "Kael", style: "cortos", charLength: 4, categoryLabel: "Corto · 4 letras" },
  { id: "nick-4", name: "Rift", cleanName: "Rift", style: "cortos", charLength: 4, categoryLabel: "Corto · 4 letras" },
  { id: "nick-5", name: "Aero", cleanName: "Aero", style: "cortos", charLength: 4, categoryLabel: "Corto · 4 letras" },
  { id: "nick-6", name: "NovaX", cleanName: "NovaX", style: "pro", charLength: 5, categoryLabel: "Pro · 5 letras" },
  { id: "nick-7", name: "RazeX", cleanName: "RazeX", style: "pro", charLength: 5, categoryLabel: "Pro · 5 letras" },
  { id: "nick-8", name: "Nexo", cleanName: "Nexo", style: "originales", charLength: 4, categoryLabel: "Original · 4 letras" },
  { id: "nick-9", name: "ZeroV", cleanName: "ZeroV", style: "pro", charLength: 5, categoryLabel: "Pro · 5 letras" },
  { id: "nick-10", name: "DarkNox", cleanName: "DarkNox", style: "oscuros", charLength: 7, categoryLabel: "Oscuro · 7 letras" },
  { id: "nick-11", name: "VexNova", cleanName: "VexNova", style: "originales", charLength: 7, categoryLabel: "Original · 7 letras" },
  { id: "nick-12", name: "AeroZ", cleanName: "AeroZ", style: "pro", charLength: 5, categoryLabel: "Pro · 5 letras" },
];

export const NICKS_DATABASE: Record<Exclude<NickStyle, "todos">, string[]> = {
  pro: [
    "xNova", "ApexZ", "PrimeX", "AeroX", "Vortex", "ReflexZ", "RiftX", "ZeroV", "RushX", "VexPro",
    "ApexNox", "NovaZ", "ClutchX", "FastAim", "HyperZ", "VeloX", "AimGod", "Sync7", "TempoX", "FlexZ"
  ],
  cortos: [
    "Vex", "Nox", "Nyx", "Zyn", "Kael", "Rift", "Aero", "Lux", "Volt", "Onyx",
    "Jax", "Tor", "Kai", "Ash", "Zen", "Neo", "Rex", "Sky", "Rux", "Dax", "Voz", "Cid"
  ],
  oscuros: [
    "Noctis", "Umbra", "Abyss", "GhostX", "VoidX", "DarkVex", "NightNox", "ShadowZ", "GrimNova", "VoidRift",
    "NoxRaven", "DarkWolf", "VoidSoul", "GrimNox", "ShadeX", "BlackNova", "NightFang", "SilentV", "AbyssAce", "NoxLobo"
  ],
  cyber: [
    "PixelNox", "CyberVex", "HexZero", "GlitchZ", "ByteRift", "NeonVolt", "DataX", "Core7",
    "BitNova", "SyncVex", "NanoZ", "VoxelX", "PixelRex", "CyberGhost", "MatrixV", "Pulse7", "GridNox", "NetKael"
  ],
  aesthetic: [
    "Lumina", "AuroraX", "NovaMoon", "VelvetX", "Aether", "SakuraX", "MoonVex", "CloudNova", "EchoZen", "SolarX",
    "LunaBloom", "SoftNova", "AuraSky", "IrisGlow", "PastelZ", "Lumi", "NilaMoon", "AuraVibe", "VelvetSky", "SweetNova"
  ],
  originales: [
    "NubeFeral", "PixelNox", "FuegoZen", "EcoVex", "AstroRift", "NovaFeral", "LoboPixel", "RayoNox", "NexoLunar", "AeroFuria",
    "SolVex", "AlmaRift", "VientoX", "FénixZ", "MundoNox", "LoboNova", "KaelAero", "NovaRex", "RiftZ", "AeroVex"
  ],
};

/**
 * Text styling transformations for Nicks
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

export interface NickCustomStyles {
  clean: string;
  smallCaps: string;
  gothic: string;
  framedBracket: string;
  sparkles: string;
  wings: string;
  swords: string;
}

export function generateNickStyles(baseName: string): NickCustomStyles {
  const clean = baseName.trim() || "NovaX";
  const sc = toSmallCaps(clean);
  const got = toGothic(clean);

  return {
    clean,
    smallCaps: sc,
    gothic: got,
    framedBracket: `『${clean}』`,
    sparkles: `✦${clean}✦`,
    wings: `꧁${sc}꧂`,
    swords: `乂${clean}乂`,
  };
}

/**
 * Nick Lab Engine ("Variar"):
 * Generates tactical gamer-tag mutations for any chosen root handle:
 * e.g., "Nova" -> xNova, NovaX, Nova7, NovaZ, iNova, NovaVX, N0va, NovaR, NovaPro
 */
export function getNickLabVariations(name: string): NickCardItem[] {
  const raw = name.trim();
  if (!raw) return [];

  const variations: string[] = [
    `x${raw}`,
    `${raw}X`,
    `${raw}7`,
    `${raw}Z`,
    `i${raw}`,
    `${raw}VX`,
    raw.replace(/o/gi, "0").replace(/e/gi, "3").replace(/i/gi, "1"),
    `${raw}R`,
    `${raw}Pro`,
    `el${raw}`,
    `${raw}V`,
    `${raw}99`,
    `z${raw}`,
    `${raw}Prime`,
  ];

  const unique = Array.from(new Set(variations.filter((v) => v !== raw)));

  return unique.slice(0, 10).map((variant, idx) => ({
    id: `lab-${Date.now()}-${idx}-${variant}`,
    name: variant,
    cleanName: variant,
    style: "pro",
    charLength: charCount(variant),
    categoryLabel: `Nick Lab · ${charCount(variant)} letras`,
  }));
}

/**
 * Normalizes user input preserving Spanish accents and capitalizations nicely
 */
export function formatNickSeed(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "";
  if (/[A-ZÁÉÍÓÚÑ].*[A-ZÁÉÍÓÚÑ]/.test(trimmed)) {
    return trimmed;
  }
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

/**
 * Checks if a name complies with the selected length filter
 */
export function matchesLengthFilter(name: string, filter: NickLengthFilter): boolean {
  const len = charCount(name);
  if (filter === "3-5") return len >= 3 && len <= 5;
  if (filter === "6-9") return len >= 6 && len <= 9;
  return true;
}

/**
 * Main batch generator for Nicks para Juegos
 */
export function generateNicksBatch(params: {
  seedWord?: string;
  style: NickStyle;
  lengthFilter: NickLengthFilter;
  batchSize?: number;
}): NickCardItem[] {
  const { seedWord = "", style = "todos", lengthFilter = "all", batchSize = 12 } = params;
  const rawSeed = formatNickSeed(seedWord);
  const results: NickCardItem[] = [];
  const seen = new Set<string>();

  const activeCategories: Exclude<NickStyle, "todos">[] =
    style === "todos"
      ? ["pro", "cortos", "oscuros", "cyber", "aesthetic", "originales"]
      : [style as Exclude<NickStyle, "todos">];

  function pickRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let attempts = 0;
  const maxAttempts = 350;

  while (results.length < batchSize && attempts < maxAttempts) {
    attempts++;
    const currentCat = pickRandom(activeCategories);
    const pool = NICKS_DATABASE[currentCat];
    let candidate = "";

    if (rawSeed) {
      // User provided seed word (e.g. Nova, Shadow, Vex, Luna)
      const strategy = Math.floor(Math.random() * 6);
      const mods = ["X", "7", "Z", "V", "R", "99", "Pro", "Zero", "Rush"];
      const prefixes = ["x", "i", "el", "Dark", "Aero", "Nova", "Zero", "Fast"];

      switch (strategy) {
        case 0:
          candidate = `${rawSeed}${pickRandom(mods)}`;
          break;
        case 1:
          candidate = `${pickRandom(prefixes)}${rawSeed}`;
          break;
        case 2:
          candidate = `x${rawSeed}X`;
          break;
        case 3:
          candidate = `${rawSeed}${pickRandom(["Nox", "Vex", "Rift", "Kael", "Ace", "Fox"])}`;
          break;
        case 4:
          candidate = `${pickRandom(["Nox", "Aero", "Dark", "Volt"])}${rawSeed}`;
          break;
        default:
          candidate = `${rawSeed}${pickRandom(mods)}`;
          break;
      }
    } else {
      // Pick or combine from pool
      const strategy = Math.floor(Math.random() * 3);
      if (strategy === 0) {
        candidate = pickRandom(pool);
      } else if (strategy === 1) {
        const base = pickRandom(pool);
        const mod = pickRandom(["X", "7", "Z", "V"]);
        candidate = `${base}${mod}`;
      } else {
        candidate = pickRandom(pool);
      }
    }

    const trimmed = candidate.trim();
    if (!trimmed || seen.has(trimmed.toLowerCase())) continue;

    // Filter by length
    if (!matchesLengthFilter(trimmed, lengthFilter)) continue;

    seen.add(trimmed.toLowerCase());

    const len = charCount(trimmed);
    const catName = currentCat.charAt(0).toUpperCase() + currentCat.slice(1);

    results.push({
      id: `nick-${Date.now()}-${results.length}-${trimmed}`,
      name: trimmed,
      cleanName: trimmed,
      style: currentCat,
      charLength: len,
      categoryLabel: `${catName} · ${len} caracteres`,
    });
  }

  // Fallback if strict filter yields fewer items
  if (results.length < batchSize) {
    for (const starter of NICKS_STARTER_LIST) {
      if (results.length >= batchSize) break;
      if (!seen.has(starter.cleanName.toLowerCase()) && matchesLengthFilter(starter.cleanName, lengthFilter)) {
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
