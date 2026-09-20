export type ApodoCategory =
  | "all"
  | "destacados"
  | "cortos"
  | "cool"
  | "gamer"
  | "pro"
  | "aesthetic"
  | "divertidos"
  | "elegantes"
  | "cursivos"
  | "goticos"
  | "simbolos"
  | "minimalistas"
  | "originales"
  | "oscuros"
  | "intimidantes"
  | "tiernos"
  | "misteriosos"
  | "royal"
  | "favoritos";

export type ApodoStyleType = "simple" | "decorado" | "unicode_avanzado";

export interface ApodoCategoryFilter {
  id: ApodoCategory;
  label: string;
  icon: string;
}

export const APODO_CATEGORIES: ApodoCategoryFilter[] = [
  { id: "all", label: "Todos", icon: "✨" },
  { id: "destacados", label: "Destacados", icon: "⭐" },
  { id: "cortos", label: "Cortos", icon: "⚡" },
  { id: "cool", label: "Cool", icon: "🔥" },
  { id: "gamer", label: "Gamer", icon: "🎮" },
  { id: "pro", label: "Pro", icon: "🏆" },
  { id: "aesthetic", label: "Aesthetic", icon: "✦" },
  { id: "divertidos", label: "Divertidos", icon: "😜" },
  { id: "elegantes", label: "Elegantes", icon: "💎" },
  { id: "cursivos", label: "Cursivos", icon: "✍️" },
  { id: "goticos", label: "Góticos", icon: "⚔️" },
  { id: "simbolos", label: "Con símbolos", icon: "🌀" },
  { id: "minimalistas", label: "Minimalistas", icon: "▫️" },
  { id: "originales", label: "Originales", icon: "💡" },
  { id: "oscuros", label: "Oscuros", icon: "🌑" },
  { id: "intimidantes", label: "Intimidantes", icon: "☠️" },
  { id: "tiernos", label: "Tiernos", icon: "🌸" },
  { id: "misteriosos", label: "Misteriosos", icon: "🔮" },
  { id: "royal", label: "Royal", icon: "👑" },
  { id: "favoritos", label: "Favoritos", icon: "♥" },
];

export interface ApodoItem {
  id: string;
  name: string;
  baseText: string;
  category: ApodoCategory;
  tags: string[];
  style: ApodoStyleType;
  featured?: boolean;
}

export const FREE_FIRE_APODOS_ITEMS: ApodoItem[] = [
  // Destacados & Cortos
  { id: "apo-01", name: "乂Nox乂", baseText: "Nox", category: "cortos", tags: ["nox", "samurai", "short"], style: "decorado", featured: true },
  { id: "apo-02", name: "亗Kiro亗", baseText: "Kiro", category: "cortos", tags: ["kiro", "king", "short"], style: "decorado", featured: true },
  { id: "apo-03", name: "『Rex』", baseText: "Rex", category: "cortos", tags: ["rex", "dino", "short"], style: "simple", featured: true },
  { id: "apo-04", name: "⚡Zod⚡", baseText: "Zod", category: "cortos", tags: ["zod", "lightning", "short"], style: "decorado", featured: true },
  { id: "apo-05", name: "ツJoséツ", baseText: "José", category: "cool", tags: ["jose", "tsu", "accent"], style: "decorado", featured: true },
  { id: "apo-06", name: "👑Ángel👑", baseText: "Ángel", category: "royal", tags: ["angel", "accent", "crown"], style: "decorado", featured: true },
  { id: "apo-07", name: "☠️Ghost☠️", baseText: "Ghost", category: "oscuros", tags: ["ghost", "skull", "dark"], style: "decorado", featured: true },
  { id: "apo-08", name: "╰★Viper★╮", baseText: "Viper", category: "pro", tags: ["viper", "star"], style: "decorado", featured: true },
  { id: "apo-09", name: "メSlayerメ", baseText: "Slayer", category: "gamer", tags: ["slayer", "katana"], style: "decorado", featured: true },
  { id: "apo-10", name: "꧁Ñandú꧂", baseText: "Ñandú", category: "originales", tags: ["nandu", "wings", "accent"], style: "decorado", featured: true },
  { id: "apo-11", name: "✦Nova✦", baseText: "Nova", category: "aesthetic", tags: ["nova", "sparkle"], style: "decorado", featured: true },
  { id: "apo-12", name: "💎Ace💎", baseText: "Ace", category: "elegantes", tags: ["ace", "diamond"], style: "decorado", featured: true },

  // Cortos & Cool
  { id: "apo-13", name: "「Lex」", baseText: "Lex", category: "cortos", tags: ["lex", "brackets"], style: "simple" },
  { id: "apo-14", name: "▫️Fox▫️", baseText: "Fox", category: "minimalistas", tags: ["fox", "square"], style: "simple" },
  { id: "apo-15", name: "🔥Blaze🔥", baseText: "Blaze", category: "cool", tags: ["blaze", "fire"], style: "decorado" },
  { id: "apo-16", name: "╰🖤Ramón🖤╮", baseText: "Ramón", category: "oscuros", tags: ["ramon", "accent", "heart"], style: "decorado" },
  { id: "apo-17", name: "⚡Volt⚡", baseText: "Volt", category: "cortos", tags: ["volt", "lightning"], style: "decorado" },
  { id: "apo-18", name: "々Apex々", baseText: "Apex", category: "gamer", tags: ["apex", "noma"], style: "simple" },
  { id: "apo-19", name: "〆Shime", baseText: "Shime", category: "cool", tags: ["shime", "spear"], style: "simple" },
  { id: "apo-20", name: "『Josué』", baseText: "Josué", category: "cortos", tags: ["josue", "accent"], style: "simple" },
  { id: "apo-21", name: "🎯Hawk🎯", baseText: "Hawk", category: "gamer", tags: ["hawk", "target"], style: "decorado" },
  { id: "apo-22", name: "🌸Sakura🌸", baseText: "Sakura", category: "tiernos", tags: ["sakura", "flower"], style: "decorado" },
  { id: "apo-23", name: "🔮Misty🔮", baseText: "Misty", category: "misteriosos", tags: ["misty", "orb"], style: "decorado" },
  { id: "apo-24", name: "👑Ícaro👑", baseText: "Ícaro", category: "royal", tags: ["icaro", "accent", "crown"], style: "decorado" },

  // Goticos & Unicode Avanzado
  { id: "apo-25", name: "༒𝕹𝖔𝖝༒", baseText: "Nox", category: "goticos", tags: ["nox", "gothic", "cross"], style: "unicode_avanzado" },
  { id: "apo-26", name: "『𝕶𝖎𝖗𝖔』", baseText: "Kiro", category: "goticos", tags: ["kiro", "gothic"], style: "unicode_avanzado" },
  { id: "apo-27", name: "✍️𝒮𝒽𝒶𝒹𝑜𝓌✍️", baseText: "Shadow", category: "cursivos", tags: ["shadow", "script"], style: "unicode_avanzado" },
  { id: "apo-28", name: "✧𝓝𝓸𝔁✧", baseText: "Nox", category: "cursivos", tags: ["nox", "script"], style: "unicode_avanzado" },
  { id: "apo-29", name: "⚔️Óscar⚔️", baseText: "Óscar", category: "goticos", tags: ["oscar", "accent", "swords"], style: "decorado" },
  { id: "apo-30", name: "亗Último亗", baseText: "Último", category: "pro", tags: ["ultimo", "accent", "king"], style: "decorado" },
  { id: "apo-31", name: "☣️Güero☣️", baseText: "Güero", category: "intimidantes", tags: ["guero", "accent", "hazard"], style: "decorado" },
  { id: "apo-32", name: "╰★Niño★╮", baseText: "Niño", category: "divertidos", tags: ["nino", "accent", "star"], style: "decorado" },

  // Divertidos & Tiernos
  { id: "apo-33", name: "😜Noob😜", baseText: "Noob", category: "divertidos", tags: ["noob", "fun"], style: "decorado" },
  { id: "apo-34", name: "🍗Pancho🍗", baseText: "Pancho", category: "divertidos", tags: ["pancho", "fun"], style: "decorado" },
  { id: "apo-35", name: "🍌Banana🍌", baseText: "Banana", category: "divertidos", tags: ["banana", "fun"], style: "decorado" },
  { id: "apo-36", name: "🐱Kitten🐱", baseText: "Kitten", category: "tiernos", tags: ["kitten", "cat"], style: "decorado" },
  { id: "apo-37", name: "🐰Bunny🐰", baseText: "Bunny", category: "tiernos", tags: ["bunny", "rabbit"], style: "decorado" },
  { id: "apo-38", name: "✨Puffy✨", baseText: "Puffy", category: "tiernos", tags: ["puffy", "sparkle"], style: "decorado" },

  // Originales & Simbolos
  { id: "apo-39", name: "🌀Vortex🌀", baseText: "Vortex", category: "simbolos", tags: ["vortex", "swirl"], style: "decorado" },
  { id: "apo-40", name: "☯️Zen☯️", baseText: "Zen", category: "minimalistas", tags: ["zen", "yinyang"], style: "decorado" },
  { id: "apo-41", name: "☾Luna☽", baseText: "Luna", category: "aesthetic", tags: ["luna", "moon"], style: "decorado" },
  { id: "apo-42", name: "★Star★", baseText: "Star", category: "simbolos", tags: ["star", "symbol"], style: "decorado" },
  { id: "apo-43", name: "⚡Bolt⚡", baseText: "Bolt", category: "cortos", tags: ["bolt", "lightning"], style: "decorado" },
  { id: "apo-44", name: "•Dot•", baseText: "Dot", category: "minimalistas", tags: ["dot", "minimal"], style: "simple" },
  { id: "apo-45", name: "亗Max亗", baseText: "Max", category: "cortos", tags: ["max", "king"], style: "decorado" },
  { id: "apo-46", name: "乂Neo乂", baseText: "Neo", category: "cortos", tags: ["neo", "x"], style: "decorado" },
  { id: "apo-47", name: "『Kai』", baseText: "Kai", category: "cortos", tags: ["kai", "brackets"], style: "simple" },
  { id: "apo-48", name: "⚡Leo⚡", baseText: "Leo", category: "cortos", tags: ["leo", "lightning"], style: "decorado" },
  { id: "apo-49", name: "👑Roy👑", baseText: "Roy", category: "cortos", tags: ["roy", "crown"], style: "decorado" },
  { id: "apo-50", name: "☠️Grim☠️", baseText: "Grim", category: "oscuros", tags: ["grim", "skull"], style: "decorado" },

  // Mas apodos variados
  { id: "apo-51", name: "╰★Tito★╮", baseText: "Tito", category: "cortos", tags: ["tito", "star"], style: "decorado" },
  { id: "apo-52", name: "💎Rico💎", baseText: "Rico", category: "elegantes", tags: ["rico", "diamond"], style: "decorado" },
  { id: "apo-53", name: "⚔️Tito⚔️", baseText: "Tito", category: "goticos", tags: ["tito", "swords"], style: "decorado" },
  { id: "apo-54", name: "༒Crux༒", baseText: "Crux", category: "goticos", tags: ["crux", "cross"], style: "decorado" },
  { id: "apo-55", name: "☣️Tox☣️", baseText: "Tox", category: "intimidantes", tags: ["tox", "hazard"], style: "decorado" },
  { id: "apo-56", name: "🔥Ignis🔥", baseText: "Ignis", category: "cool", tags: ["ignis", "fire"], style: "decorado" },
  { id: "apo-57", name: "╰🖤Sombra🖤╮", baseText: "Sombra", category: "oscuros", tags: ["sombra", "heart"], style: "decorado" },
  { id: "apo-58", name: "꧁Alas꧂", baseText: "Alas", category: "originales", tags: ["alas", "wings"], style: "decorado" },
  { id: "apo-59", name: "亗Loro亗", baseText: "Loro", category: "divertidos", tags: ["loro", "king"], style: "decorado" },
  { id: "apo-60", name: "乂Paco乂", baseText: "Paco", category: "cortos", tags: ["paco", "x"], style: "decorado" },
  { id: "apo-61", name: "『Lupe』", baseText: "Lupe", category: "cortos", tags: ["lupe", "brackets"], style: "simple" },
  { id: "apo-62", name: "⚡Raúl⚡", baseText: "Raúl", category: "cortos", tags: ["raul", "accent", "lightning"], style: "decorado" },
  { id: "apo-63", name: "👑Lia👑", baseText: "Lia", category: "cortos", tags: ["lia", "crown"], style: "decorado" },
  { id: "apo-64", name: "☠️Vamp☠️", baseText: "Vamp", category: "oscuros", tags: ["vamp", "skull"], style: "decorado" },
  { id: "apo-65", name: "╰★Milo★╮", baseText: "Milo", category: "cortos", tags: ["milo", "star"], style: "decorado" },
  { id: "apo-66", name: "💎Kiko💎", baseText: "Kiko", category: "cool", tags: ["kiko", "diamond"], style: "decorado" },
  { id: "apo-67", name: "⚔️Ragnar⚔️", baseText: "Ragnar", category: "goticos", tags: ["ragnar", "swords"], style: "decorado" },
  { id: "apo-68", name: "༒Nyx༒", baseText: "Nyx", category: "misteriosos", tags: ["nyx", "cross"], style: "decorado" },
  { id: "apo-69", name: "☣️Bio☣️", baseText: "Bio", category: "cortos", tags: ["bio", "hazard"], style: "decorado" },
  { id: "apo-70", name: "🔥Fuego🔥", baseText: "Fuego", category: "cool", tags: ["fuego", "fire"], style: "decorado" },
  { id: "apo-71", name: "╰🖤Santi🖤╮", baseText: "Santi", category: "cool", tags: ["santi", "heart"], style: "decorado" },
  { id: "apo-72", name: "꧁Gato꧂", baseText: "Gato", category: "divertidos", tags: ["gato", "wings"], style: "decorado" },
  { id: "apo-73", name: "亗Rulo亗", baseText: "Rulo", category: "cortos", tags: ["rulo", "king"], style: "decorado" },
  { id: "apo-74", name: "乂Zero乂", baseText: "Zero", category: "gamer", tags: ["zero", "x"], style: "decorado" },
  { id: "apo-75", name: "『Chico』", baseText: "Chico", category: "originales", tags: ["chico", "brackets"], style: "simple" },
  { id: "apo-76", name: "⚡Pepe⚡", baseText: "Pepe", category: "divertidos", tags: ["pepe", "lightning"], style: "decorado" },
  { id: "apo-77", name: "👑Beto👑", baseText: "Beto", category: "cortos", tags: ["beto", "crown"], style: "decorado" },
  { id: "apo-78", name: "☠️Skull☠️", baseText: "Skull", category: "intimidantes", tags: ["skull", "skull"], style: "decorado" },
  { id: "apo-79", name: "╰★Nico★╮", baseText: "Nico", category: "cortos", tags: ["nico", "star"], style: "decorado" },
  { id: "apo-80", name: "💎Gema💎", baseText: "Gema", category: "elegantes", tags: ["gema", "diamond"], style: "decorado" },
];

export const APODO_STYLE_LABELS: Record<ApodoStyleType, string> = {
  simple: "Estilo simple",
  decorado: "Decorado",
  unicode_avanzado: "Unicode avanzado",
};
