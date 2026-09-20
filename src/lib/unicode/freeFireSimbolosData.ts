export type SymbolCategory =
  | "all"
  | "populares"
  | "cool"
  | "gamer"
  | "aesthetic"
  | "estrellas"
  | "corazones"
  | "coronas"
  | "flechas"
  | "espadas"
  | "calaveras"
  | "animales"
  | "alas"
  | "lineas"
  | "separadores"
  | "decorativos"
  | "minimalistas"
  | "especiales"
  | "favoritos"
  | "recientes";

export interface SymbolCategoryFilter {
  id: SymbolCategory;
  label: string;
  icon: string;
}

export const SYMBOL_CATEGORIES: SymbolCategoryFilter[] = [
  { id: "all", label: "Todos", icon: "✨" },
  { id: "populares", label: "Populares", icon: "🔥" },
  { id: "gamer", label: "Gamer", icon: "🎮" },
  { id: "coronas", label: "Coronas", icon: "👑" },
  { id: "alas", label: "Alas", icon: "꧁" },
  { id: "espadas", label: "Espadas", icon: "⚔️" },
  { id: "calaveras", label: "Calaveras", icon: "☠️" },
  { id: "estrellas", label: "Estrellas", icon: "★" },
  { id: "aesthetic", label: "Aesthetic", icon: "✦" },
  { id: "corazones", label: "Corazones", icon: "♥" },
  { id: "flechas", label: "Flechas", icon: "➔" },
  { id: "animales", label: "Animales", icon: "🐉" },
  { id: "lineas", label: "Líneas", icon: "丨" },
  { id: "separadores", label: "Separadores", icon: "々" },
  { id: "decorativos", label: "Decorativos", icon: "✿" },
  { id: "minimalistas", label: "Minimalistas", icon: "▫️" },
  { id: "especiales", label: "Especiales", icon: "☯️" },
  { id: "recientes", label: "Recientes", icon: "🕒" },
  { id: "favoritos", label: "Favoritos", icon: "♥" },
];

export interface SymbolItem {
  id: string;
  symbol: string;
  name: string;
  category: SymbolCategory;
  tags: string[];
  featured?: boolean;
}

export const FREE_FIRE_SIMBOLOS_ITEMS: SymbolItem[] = [
  // Populares & Gamer / Coronas
  { id: "sym-ff-01", symbol: "亗", name: "Corona Rey Japonesa", category: "coronas", tags: ["corona", "rey", "king", "gamer", "popular"], featured: true },
  { id: "sym-ff-02", symbol: "꧁", name: "Ala Izquierda", category: "alas", tags: ["ala", "wing", "izquierda", "gamer", "popular"], featured: true },
  { id: "sym-ff-03", symbol: "꧂", name: "Ala Derecha", category: "alas", tags: ["ala", "wing", "derecha", "gamer", "popular"], featured: true },
  { id: "sym-ff-04", symbol: "༺", name: "Ala Tibetana Izq", category: "alas", tags: ["ala", "tibetana", "gamer"], featured: true },
  { id: "sym-ff-05", symbol: "༻", name: "Ala Tibetana Der", category: "alas", tags: ["ala", "tibetana", "gamer"], featured: true },
  { id: "sym-ff-06", symbol: "༒", name: "Cruz de Batalla Gótica", category: "gamer", tags: ["cruz", "cross", "gotico", "gamer"], featured: true },
  { id: "sym-ff-07", symbol: "乂", name: "Samurái X", category: "gamer", tags: ["samurai", "x", "gamer", "popular"], featured: true },
  { id: "sym-ff-08", symbol: "メ", name: "Katana Me", category: "gamer", tags: ["katana", "me", "gamer", "popular"], featured: true },
  { id: "sym-ff-09", symbol: "ツ", name: "Tsu Smile Gamer", category: "gamer", tags: ["tsu", "smile", "gamer", "popular"], featured: true },
  { id: "sym-10", symbol: "〆", name: "Shime Lanza Spear", category: "gamer", tags: ["shime", "spear", "gamer", "popular"], featured: true },
  { id: "sym-11", symbol: "々", name: "Noma Clan Marker", category: "separadores", tags: ["noma", "clan", "separador"], featured: true },
  { id: "sym-12", symbol: "👑", name: "Corona Rey Gold", category: "coronas", tags: ["corona", "king", "gold", "popular"], featured: true },
  { id: "sym-13", symbol: "♛", name: "Reina Negra Queen", category: "coronas", tags: ["reina", "queen", "corona"], featured: true },
  { id: "sym-14", symbol: "♔", name: "Rey Blanco King", category: "coronas", tags: ["rey", "king", "corona"], featured: true },

  // Espadas & Calaveras
  { id: "sym-15", symbol: "⚔️", name: "Espadas Cruzadas", category: "espadas", tags: ["espadas", "swords", "batalla", "popular"], featured: true },
  { id: "sym-16", symbol: "☠️", name: "Calavera Hazard", category: "calaveras", tags: ["calavera", "skull", "hazard", "popular"], featured: true },
  { id: "sym-17", symbol: "💀", name: "Cráneo Skull", category: "calaveras", tags: ["craneo", "skull"], featured: true },
  { id: "sym-18", symbol: "🎯", name: "Mira Sniper Target", category: "gamer", tags: ["sniper", "mira", "target"], featured: true },
  { id: "sym-19", symbol: "⚡", name: "Rayo Lightning", category: "populares", tags: ["rayo", "lightning", "popular"], featured: true },
  { id: "sym-20", symbol: "🔥", name: "Fuego Fire", category: "populares", tags: ["fuego", "fire", "flame", "popular"], featured: true },
  { id: "sym-21", symbol: "☣️", name: "Biohazard Toxic", category: "calaveras", tags: ["biohazard", "toxic", "hazard"], featured: true },
  { id: "sym-22", symbol: "☢️", name: "Radiactivo Nuke", category: "calaveras", tags: ["radiactivo", "nuke", "hazard"], featured: true },

  // Estrellas & Brillos
  { id: "sym-23", symbol: "★", name: "Estrella Sólida Black Star", category: "estrellas", tags: ["estrella", "star", "popular"], featured: true },
  { id: "sym-24", symbol: "☆", name: "Estrella Hueca White Star", category: "estrellas", tags: ["estrella", "star"], featured: true },
  { id: "sym-25", symbol: "✦", name: "Destello 4 Puntas Sparkle", category: "aesthetic", tags: ["destello", "sparkle", "aesthetic"], featured: true },
  { id: "sym-26", symbol: "✧", name: "Destello Suave Light", category: "aesthetic", tags: ["destello", "sparkle", "aesthetic"], featured: true },
  { id: "sym-27", symbol: "✨", name: "Sparkles Mágicos", category: "estrellas", tags: ["sparkles", "magico"], featured: true },
  { id: "sym-28", symbol: "✪", name: "Estrella Círculo Badge", category: "estrellas", tags: ["estrella", "circle"], featured: true },
  { id: "sym-29", symbol: "✯", name: "Estrella Pin Star", category: "estrellas", tags: ["estrella", "pin"], featured: true },

  // Aesthetic & Marcos
  { id: "sym-30", symbol: "『", name: "Corchete Izquierdo", category: "aesthetic", tags: ["corchete", "marco", "izquierda"], featured: true },
  { id: "sym-31", symbol: "』", name: "Corchete Derecho", category: "aesthetic", tags: ["corchete", "marco", "derecha"], featured: true },
  { id: "sym-32", symbol: "「", name: "Esquina Izquierda", category: "minimalistas", tags: ["esquina", "marco"], featured: true },
  { id: "sym-33", symbol: "」", name: "Esquina Derecha", category: "minimalistas", tags: ["esquina", "marco"], featured: true },
  { id: "sym-34", symbol: "【", name: "Bloque Lenticular Izq", category: "aesthetic", tags: ["bloque", "marco"], featured: true },
  { id: "sym-35", symbol: "】", name: "Bloque Lenticular Der", category: "aesthetic", tags: ["bloque", "marco"], featured: true },
  { id: "sym-36", symbol: "☯️", name: "Yin Yang Balance", category: "especiales", tags: ["yinyang", "balance"], featured: true },
  { id: "sym-37", symbol: "☾", name: "Luna Creciente Moon", category: "aesthetic", tags: ["luna", "moon", "aesthetic"], featured: true },
  { id: "sym-38", symbol: "☀️", name: "Sun Sol", category: "aesthetic", tags: ["sol", "sun"], featured: true },

  // Corazones & Simbolos
  { id: "sym-39", symbol: "♥", name: "Corazón Negro Black Heart", category: "corazones", tags: ["corazon", "heart", "negro"], featured: true },
  { id: "sym-40", symbol: "♡", name: "Corazón Blanco White Heart", category: "corazones", tags: ["corazon", "heart", "blanco"], featured: true },
  { id: "sym-41", symbol: "🖤", name: "Corazón Oscuro Emoji", category: "corazones", tags: ["corazon", "heart"], featured: true },
  { id: "sym-42", symbol: "❣", name: "Exclamación Corazón", category: "corazones", tags: ["corazon", "heart"], featured: true },
  { id: "sym-43", symbol: "💎", name: "Diamante Diamond Gem", category: "cool", tags: ["diamante", "gem", "cool"], featured: true },

  // Separadores & Flechas
  { id: "sym-44", symbol: "•", name: "Punto Central Bullet", category: "separadores", tags: ["punto", "bullet"], featured: true },
  { id: "sym-45", symbol: "丨", name: "Línea Vertical Line", category: "lineas", tags: ["linea", "vertical"], featured: true },
  { id: "sym-46", symbol: "➔", name: "Flecha Derecha Arrow", category: "flechas", tags: ["flecha", "arrow"], featured: true },
  { id: "sym-47", symbol: "╰", name: "Esquina Inferior Cinta", category: "lineas", tags: ["cinta", "esquina"], featured: true },
  { id: "sym-48", symbol: "╮", name: "Esquina Superior Cinta", category: "lineas", tags: ["cinta", "esquina"], featured: true },
  { id: "sym-49", symbol: "➳", name: "Flecha Pluma Arrow", category: "flechas", tags: ["flecha", "pluma"], featured: true },
  { id: "sym-50", symbol: "🐉", name: "Dragón Místico Dragon", category: "animales", tags: ["dragon", "animal"], featured: true },

  // Símbolos Adicionales
  { id: "sym-51", symbol: "🌸", name: "Flor Sakura", category: "decorativos", tags: ["sakura", "flor"] },
  { id: "sym-52", symbol: "✿", name: "Flor Símbolo", category: "decorativos", tags: ["flor", "flower"] },
  { id: "sym-53", symbol: "▫️", name: "Cuadrado Blanco Minimal", category: "minimalistas", tags: ["cuadrado", "minimal"] },
  { id: "sym-54", symbol: "▪️", name: "Cuadrado Negro Minimal", category: "minimalistas", tags: ["cuadrado", "minimal"] },
  { id: "sym-55", symbol: "◆", name: "Rombo Sólido", category: "minimalistas", tags: ["rombo", "diamond"] },
  { id: "sym-56", symbol: "◇", name: "Rombo Línea", category: "minimalistas", tags: ["rombo", "line"] },
  { id: "sym-57", symbol: "🔮", name: "Esfera Mística", category: "especiales", tags: ["orb", "mistico"] },
  { id: "sym-58", symbol: "👹", name: "Máscara Demonio Oni", category: "calaveras", tags: ["oni", "demonio"] },
  { id: "sym-59", symbol: "👺", name: "Máscara Tengu", category: "calaveras", tags: ["tengu", "mascara"] },
  { id: "sym-60", symbol: "🐺", name: "Lobo Wolf", category: "animales", tags: ["lobo", "wolf"] },
  { id: "sym-61", symbol: "🦅", name: "Águila Eagle", category: "animales", tags: ["aguila", "eagle"] },
  { id: "sym-62", symbol: "🦁", name: "León Lion", category: "animales", tags: ["leon", "lion"] },
  { id: "sym-63", symbol: "🐍", name: "Serpiente Snake", category: "animales", tags: ["serpiente", "snake"] },
  { id: "sym-64", symbol: "💥", name: "Explosión Boom", category: "espadas", tags: ["explosion", "boom"] },
  { id: "sym-65", symbol: "🔱", name: "Tridente Poseidón", category: "espadas", tags: ["tridente", "poseidon"] },
  { id: "sym-66", symbol: "➻", name: "Flecha Gruesa", category: "flechas", tags: ["flecha", "arrow"] },
  { id: "sym-67", symbol: "➹", name: "Flecha Diana Target", category: "flechas", tags: ["flecha", "target"] },
  { id: "sym-68", symbol: "⤗", name: "Doble Flecha", category: "flechas", tags: ["flecha", "doble"] },
  { id: "sym-69", symbol: "━", name: "Guion Horizontal Largo", category: "lineas", tags: ["guion", "linea"] },
  { id: "sym-70", symbol: "═", name: "Línea Doble", category: "lineas", tags: ["linea", "doble"] },
];

export interface SymbolPreset {
  id: string;
  name: string;
  leftSymbol: string;
  rightSymbol: string;
}

export const CLAN_NAME_PRESETS: SymbolPreset[] = [
  { id: "pre-1", name: "亗 Nombre 亗", leftSymbol: "亗", rightSymbol: "亗" },
  { id: "pre-2", name: "乂 Nombre 乂", leftSymbol: "乂", rightSymbol: "乂" },
  { id: "pre-3", name: "★ Nombre ★", leftSymbol: "★", rightSymbol: "★" },
  { id: "pre-4", name: "『Nombre』", leftSymbol: "『", rightSymbol: "』" },
  { id: "pre-5", name: "꧁Nombre꧂", leftSymbol: "꧁", rightSymbol: "꧂" },
  { id: "pre-6", name: "〆Nombre〆", leftSymbol: "〆", rightSymbol: "〆" },
  { id: "pre-7", name: "メNombreメ", leftSymbol: "メ", rightSymbol: "メ" },
  { id: "pre-8", name: "☠️ Nombre ☠️", leftSymbol: "☠️", rightSymbol: "☠️" },
  { id: "pre-9", name: "👑 Nombre 👑", leftSymbol: "👑", rightSymbol: "👑" },
  { id: "pre-10", name: "╰★ Nombre ★╮", leftSymbol: "╰★", rightSymbol: "★╮" },
];
