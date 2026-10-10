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
  | "epico"
  | "minimalista"
  | "misterioso"
  | "pro"
  | "cute";

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
  { id: "minimalista", name: "Minimalista", icon: "⬜", description: "Limpio, simple, elegante y directo" },
  { id: "misterioso", name: "Misterioso", icon: "👁", description: "Enigmático, secreto, oculto y profundo" },
  { id: "pro", name: "Pro", icon: "🏆", description: "Profesional, serio, calculador y experto" },
  { id: "cute", name: "Cute", icon: "🐱", description: "Tierno, kawaii, dulce y adorable" },
];

export interface GamingVocabulary {
  prefixes: string[];
  suffixes: string[];
  standalones: string[];
  compoundsA: string[];
  compoundsB: string[];
}

export type NameLength = "corto" | "medio" | "largo";
export type NameType = "nick" | "alias" | "nombre" | "clan" | "aleatorio";
export type SymbolLevel = "ninguno" | "ligero" | "decorado";
export type SymbolPosition = "inicio" | "final" | "ambos" | "aleatorio";
export type SeedStrength = "poco" | "equilibrado" | "mucho";

export const VOCABULARIES: Record<Exclude<GamingCategory, "todos">, GamingVocabulary> = {
  competitivo: {
    prefixes: ["Apex", "Rush", "Clutch", "Vex", "Blitz", "Rank", "Zero", "Ace", "Kryp", "Raze", "Flex", "Pro", "Snipe", "Flux", "Pulse", "Nex", "Jolt", "Havoc", "Drift", "Shift", "Echo"],
    suffixes: ["X", "Rank", "Clutch", "Zero", "Pro", "Rush", "Aim", "Vex", "Velo", "Flex", "7", "99", "God", "Mode", "Prime", "King", "Elite", "Ace", "Top", "Pro", "Tryhard", "Sweat"],
    standalones: [
      "ClutchX", "VexRank", "RushZero", "ApexNox", "RazeX", "RankVex",
      "Blitz7", "ZeroRush", "KrypX", "NovaClutch", "AceBlitz", "FlexAim",
      "VeloX", "AimGod", "TempoRush", "ScopeVex", "DriftPro", "HavocZero",
      "JoltX", "PulsePro", "NexRush", "FluxAce", "ShiftVex", "EchoPrime"
    ],
    compoundsA: ["Apex", "Rush", "Clutch", "Vex", "Blitz", "Rank", "Zero", "Ace", "Kryp", "Raze", "Fast", "Hyper", "Velo", "Snipe", "Flux", "Pulse", "Nex", "Jolt", "Havoc", "Drift", "Shift", "Echo"],
    compoundsB: ["Aim", "Shot", "Scope", "Drift", "Strike", "Drop", "Core", "Fire", "Zone", "Dash", "Lock", "Sync", "Hit", "Fire", "Shot", "Strike", "Kill", "Rush", "Wipe", "Ace", "Pro", "God"]
  },
  oscuro: {
    prefixes: ["Nox", "Dark", "Void", "Sombra", "Ghost", "Grim", "Night", "Umbra", "Shade", "Noir", "Abyss", "Necro", "Eclipse", "Wraith", "Shadow", "Crimson", "Blood", "Dusk", "Tomb", "Crypt"],
    suffixes: ["Nox", "Void", "Sombra", "Raven", "Eclipse", "Noir", "Vex", "Zero", "Night", "X", "Dark", "Grim", "Shade", "Soul", "Wraith", "Bane", "Curse", "Doom", "Fate", "Lost"],
    standalones: [
      "NoxLobo", "VoidRaven", "SombraX", "DarkNova", "CuervoNox", "EclipseV",
      "NocheZero", "GhostVex", "LoboVoid", "SombraNox", "GrimNox", "VexShadow",
      "AbyssLobo", "UmbraX", "ShadeRaven", "NecroVex", "NoxCuervo", "DarkEclipse",
      "WraithX", "ShadowBane", "CrimsonSoul", "BloodMoon", "DuskRaven", "CryptNox"
    ],
    compoundsA: ["Nox", "Void", "Sombra", "Dark", "Ghost", "Grim", "Umbra", "Night", "Shade", "Noir", "Abyss", "Eclipse", "Wraith", "Shadow", "Crimson", "Blood", "Dusk", "Tomb", "Crypt"],
    compoundsB: ["Raven", "Wolf", "Crow", "Soul", "Fang", "Blade", "Haze", "Ash", "Bane", "Mist", "Wraith", "Bane", "Curse", "Doom", "Fate", "Lost", "Void", "Tomb", "Crypt", "Grave"]
  },
  fantasia: {
    prefixes: ["Rune", "Draco", "Astral", "Arcano", "Kael", "Lunar", "Aether", "Myth", "Zephyr", "Elden", "Frost", "Chrono", "Celestial", "Mystic", " arcane", "Solar", "Lunar", "Stellar", "Void", "Ethereal"],
    suffixes: ["Rune", "Draco", "Mage", "Moon", "Myth", "Blade", "Frost", "Aura", "Vex", "Star", "Fable", "Lore", "Wing", "Song", "Tale", "Spell", "Rift", "Gate", "Weaver", "Sage"],
    standalones: [
      "KaelRune", "DracoVex", "AstralNox", "RuneWolf", "AetherX", "NyraMoon",
      "ArcanoV", "NovaRune", "KaelDraco", "LunarMage", "ZephyrMyth", "AstralBlade",
      "FrostNyra", "EldenRune", "ChronoMage", "MythicKael", "RuneArcano", "DracoMoon",
      "CelestialRune", "MysticBlade", "SolarMage", "StellarNova", "EtherealMoon", "VoidWeaver"
    ],
    compoundsA: ["Astral", "Rune", "Draco", "Arcano", "Kael", "Nyra", "Aether", "Zephyr", "Frost", "Elden", "Solar", "Lunar", "Stellar", "Celestial", "Mystic", "Ethereal", "Void"],
    compoundsB: ["Mage", "Moon", "Blade", "Myth", "Song", "Spire", "Tale", "Glow", "Heart", "Veil", "Rift", "Spell", "Gate", "Weaver", "Sage", "Keeper", "Lord", "Knight", "Warden"]
  },
  aesthetic: {
    prefixes: ["Luna", "Nova", "Bloom", "Aura", "Soft", "Sky", "Nube", "Lila", "Star", "Lumi", "Velvet", "Iris", "Pastel", "Dream", "Cloud", "Mist", "Haze", "Glow", "Chill", "Calm"],
    suffixes: ["Bloom", "Sky", "Vibe", "Lila", "Rose", "Aura", "Moon", "Glow", "Cloud", "Sun", "Mist", "Star", "Petal", "Dew", "Light", "Ray", "Wave", "Shine", "Soft", "Sweet"],
    standalones: [
      "LunaBloom", "SoftNova", "AuraSky", "MoonVibe", "NubeLila", "NovaRose",
      "Lumi", "Auri", "NilaMoon", "StarLuna", "VelvetSky", "IrisGlow",
      "PastelMoon", "CloudAura", "SweetNova", "GlowLila", "SoftPetal", "AuraVibe",
      "DreamSky", "MistLuna", "HazeStar", "GlowRose", "ChillMoon", "CalmCloud"
    ],
    compoundsA: ["Luna", "Nova", "Soft", "Aura", "Nube", "Star", "Lumi", "Velvet", "Iris", "Candy", "Sweet", "Dream", "Cloud", "Mist", "Haze", "Glow", "Chill", "Calm"],
    compoundsB: ["Bloom", "Sky", "Vibe", "Rose", "Moon", "Glow", "Petal", "Cloud", "Shine", "Haze", "Wish", "Dew", "Light", "Ray", "Wave", "Soft", "Sweet", "Dream"]
  },
  divertido: {
    prefixes: ["Pato", "Taco", "Manco", "Don", "PanCon", "NoEra", "Casi", "Modo", "Pixel", "Pollo", "Queso", "Señor", "Lag", "Glitch", "Bug", "Meme", "Troll", "Pro", "Noob", "Tryhard"],
    suffixes: ["Pro", "Rush", "VIP", "Lag", "Clutch", "Papa", "Taco", "Bot", "Gamer", "Fail", "GG", "Pato", "Lover", "XD", "LOL", "EZ", "AFK", "BRB", "GG", "WP", "Noob", "Main"],
    standalones: [
      "PatoPro", "TacoRush", "MancoVIP", "DonPixel", "PanConLag", "PatoClutch",
      "NoEraYo", "CasiPro", "ModoPapa", "PixelTaco", "PolloGamer", "QuesoFrito",
      "SeñorBot", "LagMaster", "MancoGod", "PatoVolador", "TacoLover", "PanConQueso",
      "GlitchPro", "MemeLord", "TrollKing", "EZMode", "AFKBoss", "NoobMaster"
    ],
    compoundsA: ["Pato", "Taco", "Manco", "Pixel", "Pollo", "Queso", "Llama", "Waffle", "Churro", "Tortilla", "Frijol", "Lag", "Glitch", "Bug", "Meme", "Troll"],
    compoundsB: ["Pro", "Rush", "Lag", "Bot", "VIP", "Clutch", "God", "Master", "King", "Fail", "Player", "Gamer", "XD", "LOL", "EZ", "AFK", "BRB", "GG", "WP", "Noob"]
  },
  corto: {
    prefixes: ["El", "i", "Mr", "X", "Z", "V", "Neo", "Pro", "Max", "Dr", "Kai", "Jax", "Vex", "Nyx", "Zen"],
    suffixes: ["7", "X", "0", "9", "Z", "K", "Q", "V", "Pro", "X", "7", "0", "9", "Z", "K", "Q"],
    standalones: [
      "Nyx", "Vex", "Kiro", "Nox", "Zyn", "Rux",
      "Nova", "Kael", "Raze", "Ziro", "Lux", "Jax",
      "Zen", "Neo", "Rex", "Sky", "Ash", "Kai",
      "Dax", "Voz", "Tor", "Cid", "Val", "Rik",
      "Fox", "Jay", "Lee", "Max", "Roy", "Tim"
    ],
    compoundsA: ["Nyx", "Vex", "Nox", "Zyn", "Rux", "Kiro", "Jax", "Kai", "Zen", "Lux", "Neo", "Pro", "Max", "Dr", "Fox", "Jay", "Lee", "Roy", "Tim"],
    compoundsB: ["X", "7", "Z", "0", "9", "K", "Q", "V", "Pro", "X", "7", "0", "9", "Z", "K", "Q"]
  },
  epico: {
    prefixes: ["Titan", "Ares", "Furia", "Kaos", "Rex", "Blaze", "Omega", "Vortex", "Iron", "Magnus", "Ragnar", "Dominus", "Coloss", "Immortal", "Legendary", "Storm", "Thunder", "Phoenix", "Dragon", "Onyx"],
    suffixes: ["Rex", "Storm", "Wrath", "Prime", "God", "Valkyr", "Magnus", "Kaos", "Fury", "Slayer", "Overlord", "Force", "King", "Lord", "Master", "Legend", "Titan", "Dragon", "Phoenix", "Onyx"],
    standalones: [
      "TitanRex", "AresStorm", "FuriaKaos", "OmegaWrath", "IronValkyr", "BlazeMagnus",
      "VortexPrime", "RagnarX", "DominusGod", "ThunderColoss", "KaosSlayer", "AresFury",
      "RexTitan", "OmegaStorm", "ValkyrPrime", "StormWrath", "FuriaRex", "TitanGod",
      "ColossRex", "ImmortalStorm", "LegendaryBlaze", "PhoenixGod", "DragonLord", "OnyxPrime"
    ],
    compoundsA: ["Titan", "Ares", "Furia", "Kaos", "Rex", "Blaze", "Omega", "Vortex", "Iron", "Magnus", "Ragnar", "Dominus", "Thunder", "Coloss", "Immortal", "Legendary", "Storm", "Phoenix", "Dragon", "Onyx"],
    compoundsB: ["Storm", "Wrath", "Prime", "God", "Valkyr", "Magnus", "Slayer", "Force", "Fang", "Bane", "Strike", "Shield", "King", "Lord", "Master", "Legend", "Titan", "Dragon", "Phoenix", "Onyx"]
  },
  minimalista: {
    prefixes: ["Neo", "Pro", "Max", "Dr", "Pure", "Raw", "True", "Real", "One", "All", "Solo", "Only"],
    suffixes: ["X", "Pro", "One", "Raw", "Pure", "Zen", "X", "Pro", "One", "Raw", "Pure", "Zen"],
    standalones: [
      "Neo", "Pro", "Max", "Dr", "Zen", "One",
      "Raw", "Pure", "True", "Real", "Solo", "Only",
      "Core", "Base", "Root", "Main", "Key", "Top"
    ],
    compoundsA: ["Neo", "Pro", "Max", "Dr", "Pure", "Raw", "True", "Real", "One", "All", "Solo", "Only", "Core", "Base", "Root", "Main", "Key", "Top"],
    compoundsB: ["X", "Pro", "One", "Raw", "Pure", "Zen", "Core", "Base", "Root", "Main", "Key", "Top", "Max", "Dr", "True", "Real"]
  },
  misterioso: {
    prefixes: ["Cipher", "Enigma", "Phantom", "Shadow", "Ghost", "Mist", "Haze", "Crypt", "Vault", "Secret", "Hidden", "Silent", "Whisper", "Echo", "Phantom", "Specter", "Wraith", "Shade", "Umbra", "Noir"],
    suffixes: ["X", "Code", "Key", "Lock", "Vault", "Crypt", "Secret", "Ghost", "Phantom", "Mist", "Haze", "Shadow", "Silent", "Whisper", "Echo", "Specter", "Wraith", "Shade", "Umbra", "Noir"],
    standalones: [
      "CipherX", "EnigmaCode", "PhantomKey", "ShadowLock", "GhostVault", "MistCrypt",
      "HazeSecret", "HiddenGhost", "SilentPhantom", "WhisperShadow", "EchoMist", "SpecterHaze",
      "WraithX", "ShadeKey", "UmbraLock", "NoirVault", "CipherSecret", "EnigmaPhantom"
    ],
    compoundsA: ["Cipher", "Enigma", "Phantom", "Shadow", "Ghost", "Mist", "Haze", "Crypt", "Vault", "Secret", "Hidden", "Silent", "Whisper", "Echo", "Specter", "Wraith", "Shade", "Umbra", "Noir"],
    compoundsB: ["X", "Code", "Key", "Lock", "Vault", "Crypt", "Secret", "Ghost", "Phantom", "Mist", "Haze", "Shadow", "Silent", "Whisper", "Echo", "Specter", "Wraith", "Shade", "Umbra", "Noir"]
  },
  pro: {
    prefixes: ["Pro", "Elite", "Master", "Legend", "Prime", "Apex", "Champ", "King", "Lord", "Boss", "Ace", "Top", "Best", "Guru", "Expert", "Veteran", "Seasoned", "Ranked", "Diamond", "Challenger"],
    suffixes: ["Pro", "Elite", "Master", "God", "King", "Lord", "Boss", "Ace", "Top", "Best", "Guru", "Expert", "X", "Pro", "Elite", "Master", "God", "King", "Lord", "Boss"],
    standalones: [
      "ProX", "EliteGod", "MasterKing", "LegendLord", "PrimeBoss", "ApexAce",
      "ChampTop", "KingBest", "LordGuru", "BossExpert", "AceX", "TopPro",
      "BestElite", "GuruMaster", "ExpertLegend", "VeteranPrime", "RankedGod", "DiamondKing"
    ],
    compoundsA: ["Pro", "Elite", "Master", "Legend", "Prime", "Apex", "Champ", "King", "Lord", "Boss", "Ace", "Top", "Best", "Guru", "Expert", "Veteran", "Seasoned", "Ranked", "Diamond", "Challenger"],
    compoundsB: ["Pro", "Elite", "Master", "God", "King", "Lord", "Boss", "Ace", "Top", "Best", "Guru", "Expert", "X", "Pro", "Elite", "Master", "God", "King", "Lord", "Boss"]
  },
  cute: {
    prefixes: ["Sweet", "Cute", "Kawaii", "Lovely", "Cherry", "Berry", "Peach", "Mochi", "Angel", "Bunny", "Kitty", "Puppy", "Star", "Moon", "Cloud", "Dream", "Love", "Heart", "Sparkle", "Glitter"],
    suffixes: ["Bear", "Bunny", "Kitty", "Puppy", "Star", "Moon", "Cloud", "Dream", "Love", "Heart", "Angel", "Fairy", "Wing", "Sparkle", "Glitter", "Berry", "Peach", "Mochi", "Cherry", "Sweet"],
    standalones: [
      "SweetBear", "CuteBunny", "KawaiiKitty", "LovelyPuppy", "CherryStar", "BerryMoon",
      "PeachCloud", "MochiDream", "AngelLove", "BunnyHeart", "KittyFairy", "PuppyWing",
      "StarSparkle", "MoonGlitter", "CloudAngel", "DreamBear", "LoveBunny", "HeartKitty"
    ],
    compoundsA: ["Sweet", "Cute", "Kawaii", "Lovely", "Cherry", "Berry", "Peach", "Mochi", "Angel", "Bunny", "Kitty", "Puppy", "Star", "Moon", "Cloud", "Dream", "Love", "Heart", "Sparkle", "Glitter"],
    compoundsB: ["Bear", "Bunny", "Kitty", "Puppy", "Star", "Moon", "Cloud", "Dream", "Love", "Heart", "Angel", "Fairy", "Wing", "Sparkle", "Glitter", "Berry", "Peach", "Mochi", "Cherry", "Sweet"]
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

// Symbol library for decoration
const SYMBOL_PREFIXES = ["亗", "乂", "✦", "⚡", "★", "彡", "꧁", "♛", "☠", "✿", "『", "【", "※", "✧", "✴", "✳", "❖", "❂", "✡", "✦"];
const SYMBOL_SUFFIXES = ["亗", "乂", "✦", "⚡", "★", "彡", "꧂", "♛", "☠", "✿", "』", "】", "※", "✧", "✴", "✳", "❖", "❂", "✡", "✦"];

function applySymbols(text: string, level: SymbolLevel, position: SymbolPosition): string {
  if (level === "ninguno") return text;

  const pickPrefix = () => SYMBOL_PREFIXES[Math.floor(Math.random() * SYMBOL_PREFIXES.length)];
  const pickSuffix = () => SYMBOL_SUFFIXES[Math.floor(Math.random() * SYMBOL_SUFFIXES.length)];

  switch (level) {
    case "ligero":
      switch (position) {
        case "inicio":
          return `${pickPrefix()}${text}`;
        case "final":
          return `${text}${pickSuffix()}`;
        case "ambos":
          return `${pickPrefix()}${text}${pickSuffix()}`;
        case "aleatorio":
          const rand = Math.random();
          if (rand < 0.33) return `${pickPrefix()}${text}`;
          if (rand < 0.66) return `${text}${pickSuffix()}`;
          return `${pickPrefix()}${text}${pickSuffix()}`;
      }
      break;
    case "decorado":
      switch (position) {
        case "inicio":
          return `${pickPrefix()} ${text}`;
        case "final":
          return `${text} ${pickSuffix()}`;
        case "ambos":
          return `${pickPrefix()} ${text} ${pickSuffix()}`;
        case "aleatorio":
          const rand2 = Math.random();
          if (rand2 < 0.33) return `${pickPrefix()} ${text}`;
          if (rand2 < 0.66) return `${text} ${pickSuffix()}`;
          return `${pickPrefix()} ${text} ${pickSuffix()}`;
      }
      break;
  }
  return text;
}

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
 * Enhanced Name Generator Logic
 * Produces exactly batchSize unique names with multiple generation patterns,
 * length control, type control, symbol control, and seed strength.
 */
export function generateGamingNamesBatch(params: {
  baseWord?: string;
  category: GamingCategory;
  withStyle?: boolean;
  batchSize?: number;
  length?: NameLength;
  nameType?: NameType;
  symbolLevel?: SymbolLevel;
  symbolPosition?: SymbolPosition;
  seedStrength?: SeedStrength;
}): Array<{ name: string; cleanName: string; charLength: number; category: GamingCategory }> {
  const {
    baseWord = "",
    category = "todos",
    withStyle = false,
    batchSize = 12,
    length = "medio",
    nameType = "aleatorio",
    symbolLevel = "ninguno",
    symbolPosition = "aleatorio",
    seedStrength = "equilibrado"
  } = params;

  const rawBase = formatBaseWord(baseWord);
  const results: Array<{ name: string; cleanName: string; charLength: number; category: GamingCategory }> = [];
  const seenClean = new Set<string>();

  // Determine active categories to draw from
  const targetCategories: Exclude<GamingCategory, "todos">[] =
    category === "todos"
      ? ["competitivo", "oscuro", "fantasia", "aesthetic", "divertido", "corto", "epico", "minimalista", "misterioso", "pro", "cute"]
      : [category as Exclude<GamingCategory, "todos">];

  function pickCategory(): Exclude<GamingCategory, "todos"> {
    return pickRandom(targetCategories);
  }

  // Length preferences
  function meetsLengthPreference(candidate: string): boolean {
    const len = candidate.length;
    switch (length) {
      case "corto":
        return len >= 3 && len <= 7;
      case "medio":
        return len >= 6 && len <= 11;
      case "largo":
        return len >= 10 && len <= 16;
      default:
        return true;
    }
  }

  function pickRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Generation patterns
  function generateSeedBased(seed: string, vocab: GamingVocabulary): string[] {
    const candidates: string[] = [];
    const prefix = pickRandom(vocab.prefixes);
    const suffix = pickRandom(vocab.suffixes);

    // Pattern A: Seed + Suffix
    candidates.push(`${seed}${suffix}`);

    // Pattern B: Prefix + Seed
    candidates.push(`${prefix}${seed}`);

    // Pattern C: Seed + Short modifier
    const shortMods = ["X", "7", "Z", "V", "0", "9", "Pro", "X", "V"];
    candidates.push(`${seed}${pickRandom(shortMods)}`);

    // Pattern D: Prefix + Seed + Short modifier
    candidates.push(`${prefix}${seed}${pickRandom(["X", "7", "Z", "V"])}`);

    // Pattern E: Seed + Compound B
    candidates.push(`${seed}${pickRandom(vocab.compoundsB)}`);

    // Pattern F: Modified seed (phonetic variations)
    if (seed.length > 2) {
      const seedLower = seed.toLowerCase();
      const suffixesX = ["x", "ex", "ix", "ox", "a", "o", "e"];
      candidates.push(`${seed}${pickRandom(suffixesX)}`);
      candidates.push(`${seed.slice(0, -1)}${pickRandom(suffixesX)}`);
    }

    // Pattern G: Seed compression (shorten seed)
    if (seed.length > 4) {
      candidates.push(`${seed.slice(0, 3)}${pickRandom(["X", "x", "Z", "V"])}`);
      candidates.push(`${seed.slice(0, 4)}`);
    }

    // Pattern H: Compound A + Seed
    candidates.push(`${pickRandom(vocab.compoundsA)}${seed}`);

    return candidates;
  }

  function generateRandomNames(vocab: GamingVocabulary): string[] {
    const candidates: string[] = [];

    // Pattern I: Standalone names
    if (vocab.standalones.length > 0) {
      candidates.push(pickRandom(vocab.standalones));
    }

    // Pattern J: Compound A + Compound B
    candidates.push(`${pickRandom(vocab.compoundsA)}${pickRandom(vocab.compoundsB)}`);

    // Pattern K: Prefix + Suffix
    candidates.push(`${pickRandom(vocab.prefixes)}${pickRandom(vocab.suffixes)}`);

    // Pattern L: Prefix + random compound
    candidates.push(`${pickRandom(vocab.prefixes)}${pickRandom(vocab.compoundsB)}`);

    // Pattern M: Random compound + suffix
    candidates.push(`${pickRandom(vocab.compoundsA)}${pickRandom(vocab.suffixes)}`);

    // Pattern N: Prefix + number suffix
    const numbers = ["7", "99", "X", "0", "9", "77", "88", "66"];
    candidates.push(`${pickRandom(vocab.prefixes)}${pickRandom(numbers)}`);

    // Pattern O: Compound + number
    candidates.push(`${pickRandom(vocab.compoundsA)}${pickRandom(numbers)}`);

    return candidates;
  }

  function generateSimilarTo(base: string, vocab: GamingVocabulary): string[] {
    const candidates: string[] = [];

    // Extract word parts from base
    const parts = base.split(/(?=[A-Z])/).filter(p => p.length > 1);
    if (parts.length === 0) parts.push(base);

    // Vary prefixes
    for (const part of parts) {
      if (part.length > 2) {
        candidates.push(`${pickRandom(vocab.prefixes)}${part}`);
        candidates.push(`${part}${pickRandom(vocab.suffixes)}`);
      }
    }

    // Phonetic variations
    if (base.length > 3) {
      const baseLower = base.toLowerCase();
      const endings = ["x", "ex", "ix", "ox", "a", "o", "e", "us", "is", "os"];
      candidates.push(`${base.slice(0, -1)}${pickRandom(endings)}`);
    }

    return candidates;
  }

  // Internal scoring
  function scoreCandidate(candidate: string, category: GamingCategory): number {
    let score = 0;

    // Length appropriateness
    const len = candidate.length;
    if (length === "corto" && len >= 3 && len <= 7) score += 10;
    if (length === "medio" && len >= 6 && len <= 11) score += 10;
    if (length === "largo" && len >= 10 && len <= 16) score += 10;

    // Pronounceability (simple heuristic)
    const vowels = (candidate.match(/[aeiouAEIOU]/g) || []).length;
    const consonants = len - vowels;
    if (vowels > 0 && consonants > 0 && vowels / len > 0.2 && vowels / len < 0.6) score += 5;

    // Not too repetitive
    const charCounts: Record<string, number> = {};
    for (const char of candidate) {
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
    const maxRepeat = Math.max(...Object.values(charCounts));
    if (maxRepeat <= 2) score += 5;
    if (maxRepeat >= 4) score -= 10;

    // Visual balance (avoid all caps or all lowercase in compounds)
    if (/[A-Z][a-z]/.test(candidate)) score += 3;

    // Seed relevance
    if (rawBase && candidate.toLowerCase().includes(rawBase.toLowerCase())) {
      score += seedStrength === "mucho" ? 15 : seedStrength === "equilibrado" ? 8 : 3;
    }

    return score;
  }

  let attempts = 0;
  const maxAttempts = 500; // Increased for more diversity

  while (results.length < batchSize && attempts < maxAttempts) {
    attempts++;
    const currentCat = pickCategory();
    const vocab = VOCABULARIES[currentCat];

    let candidates: string[] = [];

    // Decide generation strategy based on seed strength and type
    const useSeed = rawBase && (seedStrength !== "poco" || Math.random() < 0.4);

    if (useSeed) {
      // Seed-based generation
      const seedCandidates = generateSeedBased(rawBase, vocab);
      candidates = seedCandidates;
    } else {
      // Random generation
      candidates = generateRandomNames(vocab);
    }

    // Shuffle candidates to avoid bias
    candidates = candidates.sort(() => Math.random() - 0.5);

    // Process candidates
    for (const candidate of candidates) {
      if (results.length >= batchSize) break;

      const trimmedClean = candidate.trim();
      if (!trimmedClean || seenClean.has(trimmedClean.toLowerCase())) continue;
      if (!meetsLengthPreference(trimmedClean)) continue;

      // Score and filter
      const score = scoreCandidate(trimmedClean, currentCat);
      if (score < 0) continue; // Reject obviously bad candidates

      seenClean.add(trimmedClean.toLowerCase());

      // Apply symbols based on level and position
      let finalDisplayName = trimmedClean;
      if (symbolLevel !== "ninguno") {
        finalDisplayName = applySymbols(trimmedClean, symbolLevel, symbolPosition);
      } else if (withStyle) {
        // Legacy withStyle toggle
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
  }

  // Sort by score (descending) for better quality first
  results.sort((a, b) => {
    const scoreA = a.category === "todos" ? 0 : scoreCandidate(a.cleanName, a.category as Exclude<GamingCategory, "todos">);
    const scoreB = b.category === "todos" ? 0 : scoreCandidate(b.cleanName, b.category as Exclude<GamingCategory, "todos">);
    return scoreB - scoreA;
  });

  // Fallback in case of extreme collision
  if (results.length < batchSize) {
    const fallbackList = [
      "NoxLobo", "ClutchX", "NovaRush", "VexZero", "VoidRaven", "AuraSky",
      "PatoPro", "TitanRex", "Nyx", "KaelRune", "SombraX", "DracoMoon",
      "ZenPro", "CipherX", "SweetBear", "EliteGod", "Neo", "RuneWolf"
    ];
    for (const fb of fallbackList) {
      if (results.length >= batchSize) break;
      if (!seenClean.has(fb.toLowerCase())) {
        seenClean.add(fb.toLowerCase());
        let display = fb;
        if (symbolLevel !== "ninguno") {
          display = applySymbols(fb, symbolLevel, symbolPosition);
        } else if (withStyle) {
          display = `『${fb}』`;
        }
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

/**
 * Generate similar names to a given base name
 */
export function generateSimilarNames(baseName: string, count: number = 8): string[] {
  const results: string[] = [];
  const seen = new Set<string>();
  const categories: Exclude<GamingCategory, "todos">[] = ["competitivo", "oscuro", "fantasia", "aesthetic", "divertido", "corto", "epico", "minimalista", "misterioso", "pro", "cute"];

  const pickRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

  function generateSimilarTo(seed: string, vocab: GamingVocabulary): string[] {
    const candidates: string[] = [];

    // Extract word parts from base
    const parts = seed.split(/(?=[A-Z])/).filter(p => p.length > 1);
    if (parts.length === 0) parts.push(seed);

    // Vary prefixes
    for (const part of parts) {
      if (part.length > 2) {
        candidates.push(`${pickRandom(vocab.prefixes)}${part}`);
        candidates.push(`${part}${pickRandom(vocab.suffixes)}`);
      }
    }

    // Phonetic variations
    if (baseName.length > 3) {
      const baseLower = baseName.toLowerCase();
      const endings = ["x", "ex", "ix", "ox", "a", "o", "e", "us", "is", "os"];
      candidates.push(`${baseName.slice(0, -1)}${pickRandom(endings)}`);
    }

    return candidates;
  }

  let attempts = 0;
  const maxAttempts = 100;

  while (results.length < count && attempts < maxAttempts) {
    attempts++;
    const cat = pickRandom(categories);
    const vocab = VOCABULARIES[cat];
    const similar = generateSimilarTo(baseName, vocab);

    for (const candidate of similar) {
      if (results.length >= count) break;
      const clean = candidate.trim();
      if (!clean || seen.has(clean.toLowerCase())) continue;

      seen.add(clean.toLowerCase());
      results.push(clean);
    }
  }

  return results;
}

/**
 * Generate variations of a specific name
 */
export function generateVariations(baseName: string, count: number = 6): string[] {
  const results: string[] = [];
  const seen = new Set<string>();

  const pickRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

  const modifiers = ["X", "7", "Z", "V", "0", "9", "Pro", "x", "ex", "ix", "ox", "us", "is", "os"];
  const prefixes = ["Neo", "Dark", "Shadow", "Nova", "Ultra", "Super", "Hyper", "Mega", "Pro", "Elite"];
  const suffixes = ["X", "Pro", "Prime", "Elite", "King", "God", "Master", "Lord", "Boss", "Ace"];

  // Variations
  results.push(`${baseName}${pickRandom(modifiers)}`);
  results.push(`${pickRandom(prefixes)}${baseName}`);
  results.push(`${baseName}${pickRandom(suffixes)}`);
  results.push(`${pickRandom(prefixes)}${baseName}${pickRandom(modifiers)}`);

  // Phonetic compression
  if (baseName.length > 4) {
    results.push(`${baseName.slice(0, 3)}${pickRandom(modifiers)}`);
    results.push(`${baseName.slice(0, 4)}`);
  }

  // Remove duplicates
  return [...new Set(results)].slice(0, count);
}
