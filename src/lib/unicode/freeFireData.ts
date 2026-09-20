export type FreeFireCategory =
  | "all"
  | "cursivos"
  | "negritas"
  | "goticos"
  | "elegantes"
  | "minimalistas"
  | "simbolos"
  | "cool"
  | "pro"
  | "gamer"
  | "aesthetic"
  | "favoritos";

export interface FreeFireCategoryFilter {
  id: FreeFireCategory;
  label: string;
  icon: string;
}

export const FREE_FIRE_CATEGORIES: FreeFireCategoryFilter[] = [
  { id: "all", label: "Todos", icon: "✨" },
  { id: "gamer", label: "Gamer", icon: "🎮" },
  { id: "pro", label: "Pro", icon: "🏆" },
  { id: "cool", label: "Cool", icon: "🔥" },
  { id: "simbolos", label: "Con símbolos", icon: "⚡" },
  { id: "goticos", label: "Góticos", icon: "⚔️" },
  { id: "negritas", label: "Negritas", icon: "💪" },
  { id: "cursivos", label: "Cursivos", icon: "✍️" },
  { id: "elegantes", label: "Elegantes", icon: "👑" },
  { id: "aesthetic", label: "Aesthetic", icon: "✦" },
  { id: "minimalistas", label: "Minimalistas", icon: "▫️" },
  { id: "favoritos", label: "Favoritos", icon: "♥" },
];

export interface FreeFireDecoration {
  id: string;
  name: string;
  prefix: string;
  suffix: string;
  category: "gamer" | "pro" | "symbols" | "goticos" | "aesthetic" | "minimalistas" | "cool";
}

export const FREE_FIRE_DECORATIONS: FreeFireDecoration[] = [
  { id: "javanese-classic", name: "Alas Clásicas", prefix: "꧁", suffix: "꧂", category: "gamer" },
  { id: "king-crown", name: "Corona de Rey", prefix: "亗", suffix: "亗", category: "pro" },
  { id: "tibetan-wings", name: "Alas Tibetanas", prefix: "༺", suffix: "༻", category: "gamer" },
  { id: "cross-death", name: "Cruz de Batalla", prefix: "༒", suffix: "༒", category: "goticos" },
  { id: "samurai-x", name: "Samurái X", prefix: "乂", suffix: "乂", category: "gamer" },
  { id: "katana-me", name: "Katana Me", prefix: "メ", suffix: "メ", category: "gamer" },
  { id: "corner-white", name: "Corchetes Especiales", prefix: "『", suffix: "』", category: "minimalistas" },
  { id: "corner-dark", name: "Esquinas Japonesas", prefix: "「", suffix: "」", category: "minimalistas" },
  { id: "smile-tsu", name: "Sonrisa Tsu", prefix: "ツ", suffix: "ツ", category: "cool" },
  { id: "shime-suffix", name: "Lanza Shime", prefix: "〆", suffix: "", category: "cool" },
  { id: "noma-repeat", name: "Repetición Noma", prefix: "々", suffix: "々", category: "aesthetic" },
  { id: "star-solid", name: "Estrella Pro", prefix: "★", suffix: "★", category: "pro" },
  { id: "star-hollow", name: "Estrella Hueca", prefix: "☆", suffix: "☆", category: "aesthetic" },
  { id: "lightning-flash", name: "Rayo Pro", prefix: "⚡", suffix: "⚡", category: "pro" },
  { id: "swords-crossed", name: "Espadas Cruzadas", prefix: "⚔️", suffix: "⚔️", category: "goticos" },
  { id: "skull-dark", name: "Calavera Clan", prefix: "☠️", suffix: "☠️", category: "goticos" },
  { id: "crown-royal", name: "Corona Real", prefix: "👑", suffix: "👑", category: "pro" },
  { id: "sparkle-soft", name: "Destello Suave", prefix: "✦", suffix: "✦", category: "aesthetic" },
  { id: "fire-hot", name: "Fuego Insano", prefix: "🔥", suffix: "🔥", category: "cool" },
  { id: "wing-combo", name: "Doble Ala", prefix: "꧁༺", suffix: "༻꧂", category: "gamer" },
  { id: "king-bracket", name: "Rey Corchete", prefix: "亗『", suffix: "』亗", category: "pro" },
  { id: "cross-bracket", name: "Cruz Corchete", prefix: "༒『", suffix: "』༒", category: "goticos" },
  { id: "star-ribbon", name: "Estrella Cinta", prefix: "╰★", suffix: "★╮", category: "pro" },
  { id: "diamond-blue", name: "Diamante Sólido", prefix: "◆", suffix: "◆", category: "minimalistas" },
  { id: "target-bullseye", name: "Sniper Target", prefix: "🎯", suffix: "🎯", category: "gamer" },
  { id: "yin-yang", name: "Yin Yang Balance", prefix: "☯️", suffix: "☯️", category: "cool" },
  { id: "heavy-brackets", name: "Lenticulares Pro", prefix: "【", suffix: "】", category: "minimalistas" },
];

export interface FreeFireSymbolItem {
  id: string;
  symbol: string;
  name: string;
  category: "gamer" | "coronas" | "estrellas" | "armas" | "aesthetic" | "corazones" | "separadores";
}

export const FREE_FIRE_SYMBOLS: FreeFireSymbolItem[] = [
  // Gamer & Clan
  { id: "sym-1", symbol: "亗", name: "Corona Rey", category: "coronas" },
  { id: "sym-2", symbol: "꧁", name: "Ala Izquierda", category: "gamer" },
  { id: "sym-3", symbol: "꧂", name: "Ala Derecha", category: "gamer" },
  { id: "sym-4", symbol: "༺", name: "Ala Tibetana Izq", category: "gamer" },
  { id: "sym-5", symbol: "༻", name: "Ala Tibetana Der", category: "gamer" },
  { id: "sym-6", symbol: "༒", name: "Cruz Gótica", category: "gamer" },
  { id: "sym-7", symbol: "乂", name: "Samurái X", category: "gamer" },
  { id: "sym-8", symbol: "メ", name: "Katana Me", category: "gamer" },
  { id: "sym-9", symbol: "ツ", name: "Tsu Gamer", category: "gamer" },
  { id: "sym-10", symbol: "〆", name: "Shime Lanza", category: "gamer" },
  { id: "sym-11", symbol: "々", name: "Noma Clan", category: "gamer" },
  { id: "sym-12", symbol: "👑", name: "Corona Rey Emoji", category: "coronas" },
  { id: "sym-13", symbol: "♛", name: "Reina Negra", category: "coronas" },
  { id: "sym-14", symbol: "♔", name: "Rey Blanco", category: "coronas" },

  // Armas & Batalla
  { id: "sym-15", symbol: "⚔️", name: "Espadas", category: "armas" },
  { id: "sym-16", symbol: "☠️", name: "Calavera", category: "armas" },
  { id: "sym-17", symbol: "🎯", name: "Mira Target", category: "armas" },
  { id: "sym-18", symbol: "⚡", name: "Rayo Veloz", category: "armas" },
  { id: "sym-19", symbol: "🔥", name: "Fuego", category: "armas" },
  { id: "sym-20", symbol: "💥", name: "Explosión", category: "armas" },
  { id: "sym-21", symbol: "☣️", name: "Biohazard", category: "armas" },
  { id: "sym-22", symbol: "☢️", name: "Radiactivo", category: "armas" },

  // Estrellas & Brillos
  { id: "sym-23", symbol: "★", name: "Estrella Sólida", category: "estrellas" },
  { id: "sym-24", symbol: "☆", name: "Estrella Línea", category: "estrellas" },
  { id: "sym-25", symbol: "✦", name: "Destello 4 Puntas", category: "estrellas" },
  { id: "sym-26", symbol: "✧", name: "Destello Suave", category: "estrellas" },
  { id: "sym-27", symbol: "✨", name: "Sparkles", category: "estrellas" },
  { id: "sym-28", symbol: "✪", name: "Estrella Círculo", category: "estrellas" },

  // Aesthetic & Símbolos
  { id: "sym-29", symbol: "『", name: "Corchete Izq", category: "aesthetic" },
  { id: "sym-30", symbol: "』", name: "Corchete Der", category: "aesthetic" },
  { id: "sym-31", symbol: "「", name: "Esquina Izq", category: "aesthetic" },
  { id: "sym-32", symbol: "」", name: "Esquina Der", category: "aesthetic" },
  { id: "sym-33", symbol: "【", name: "Bloque Izq", category: "aesthetic" },
  { id: "sym-34", symbol: "】", name: "Bloque Der", category: "aesthetic" },
  { id: "sym-35", symbol: "☯️", name: "Yin Yang", category: "aesthetic" },
  { id: "sym-36", symbol: "☾", name: "Luna", category: "aesthetic" },

  // Corazones
  { id: "sym-37", symbol: "♥", name: "Corazón Negro", category: "corazones" },
  { id: "sym-38", symbol: "♡", name: "Corazón Blanco", category: "corazones" },
  { id: "sym-39", symbol: "❣", name: "Exclamación Corazón", category: "corazones" },

  // Separadores
  { id: "sym-40", symbol: "•", name: "Punto Central", category: "separadores" },
  { id: "sym-41", symbol: "丨", name: "Línea Vertical", category: "separadores" },
  { id: "sym-42", symbol: "々", name: "Onda", category: "separadores" },
  { id: "sym-43", symbol: "–", name: "Guion En", category: "separadores" },
];

export const RANDOM_BASE_NAMES = [
  "Shadow",
  "Ninja",
  "Valkyrie",
  "Phantom",
  "Specter",
  "José",
  "Ángel",
  "Titan",
  "Beast",
  "Apex",
  "Viper",
  "Dragon",
  "Ghost",
  "Hunter",
  "Striker",
  "Raven",
  "Slayer",
  "Psycho",
  "Demon",
  "Kratos",
  "Zero",
  "Venom",
  "Legend",
  "Sniper",
  "Matrix",
  "Vortex",
];
