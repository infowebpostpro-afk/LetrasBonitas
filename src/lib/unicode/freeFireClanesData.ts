export type ClanCategory =
  | "all"
  | "destacados"
  | "cool"
  | "gamer"
  | "pro"
  | "elite"
  | "guerreros"
  | "poderosos"
  | "oscuros"
  | "aesthetic"
  | "elegantes"
  | "divertidos"
  | "cortos"
  | "simbolos"
  | "minimalistas"
  | "favoritos";

export type ClanStyleType =
  | "cool"
  | "gamer"
  | "elite"
  | "oscuro"
  | "minimalista"
  | "aesthetic"
  | "poderoso";

export interface ClanCategoryFilter {
  id: ClanCategory;
  label: string;
  icon: string;
}

export const CLAN_CATEGORIES: ClanCategoryFilter[] = [
  { id: "all", label: "Todos", icon: "✨" },
  { id: "destacados", label: "Destacados", icon: "⭐" },
  { id: "cool", label: "Cool", icon: "🔥" },
  { id: "gamer", label: "Gamer", icon: "🎮" },
  { id: "pro", label: "Pro", icon: "🏆" },
  { id: "elite", label: "Élite", icon: "💎" },
  { id: "guerreros", label: "Guerreros", icon: "⚔️" },
  { id: "poderosos", label: "Poderosos", icon: "⚡" },
  { id: "oscuros", label: "Oscuros", icon: "🌑" },
  { id: "aesthetic", label: "Aesthetic", icon: "✦" },
  { id: "elegantes", label: "Elegantes", icon: "👑" },
  { id: "divertidos", label: "Divertidos", icon: "😜" },
  { id: "cortos", label: "Cortos", icon: "🎯" },
  { id: "simbolos", label: "Con símbolos", icon: "🌀" },
  { id: "minimalistas", label: "Minimalistas", icon: "▫️" },
  { id: "favoritos", label: "Favoritos", icon: "♥" },
];

export interface ClanItem {
  id: string;
  name: string;
  baseName: string;
  category: ClanCategory;
  tags: string[];
  style: ClanStyleType;
  featured?: boolean;
}

export const FREE_FIRE_CLANES_ITEMS: ClanItem[] = [
  // Destacados & Élite / Pro
  { id: "clan-01", name: "亗 SHADOW SQUAD 亗", baseName: "SHADOW SQUAD", category: "elite", tags: ["shadow", "squad", "king"], style: "cool", featured: true },
  { id: "clan-02", name: "『TITAN LEGENDS』", baseName: "TITAN LEGENDS", category: "pro", tags: ["titan", "legends"], style: "elite", featured: true },
  { id: "clan-03", name: "乂DARK GUERREROS乂", baseName: "DARK GUERREROS", category: "guerreros", tags: ["dark", "guerreros", "x"], style: "gamer", featured: true },
  { id: "clan-04", name: "꧁ELITE FORCE꧂", baseName: "ELITE FORCE", category: "poderosos", tags: ["elite", "force", "wings"], style: "poderoso", featured: true },
  { id: "clan-05", name: "★ NOVA WARRIORS ★", baseName: "NOVA WARRIORS", category: "cool", tags: ["nova", "warriors", "star"], style: "cool", featured: true },
  { id: "clan-06", name: "☠ GHOST ARMY ☠", baseName: "GHOST ARMY", category: "oscuros", tags: ["ghost", "army", "skull"], style: "oscuro", featured: true },
  { id: "clan-07", name: "👑 ROYAL SQUAD 👑", baseName: "ROYAL SQUAD", category: "elegantes", tags: ["royal", "squad", "crown"], style: "elite", featured: true },
  { id: "clan-08", name: "⚡ FIRE KINGS ⚡", baseName: "FIRE KINGS", category: "poderosos", tags: ["fire", "kings", "lightning"], style: "poderoso", featured: true },
  { id: "clan-09", name: "『 VIPERS TEAM 』", baseName: "VIPERS TEAM", category: "pro", tags: ["vipers", "team"], style: "elite", featured: true },
  { id: "clan-10", name: "✦ AESTHETIC CLAN ✦", baseName: "AESTHETIC CLAN", category: "aesthetic", tags: ["aesthetic", "sparkle"], style: "aesthetic", featured: true },
  { id: "clan-11", name: "メ KATANA SQUAD メ", baseName: "KATANA SQUAD", category: "gamer", tags: ["katana", "squad"], style: "gamer", featured: true },
  { id: "clan-12", name: "亗 ÁNGELES NEGROS 亗", baseName: "ÁNGELES NEGROS", category: "oscuros", tags: ["angeles", "negros", "accent"], style: "cool", featured: true },

  // Guerreros & Poderosos
  { id: "clan-13", name: "⚔️ GUERREROS DE ELITE ⚔️", baseName: "GUERREROS DE ELITE", category: "guerreros", tags: ["guerreros", "swords"], style: "gamer" },
  { id: "clan-14", name: "⚡ ALPHA TEAM ⚡", baseName: "ALPHA TEAM", category: "poderosos", tags: ["alpha", "lightning"], style: "poderoso" },
  { id: "clan-15", name: "『 DRAGON SQUAD 』", baseName: "DRAGON SQUAD", category: "elite", tags: ["dragon", "squad"], style: "elite" },
  { id: "clan-16", name: "╰★ IMPERIO REAL ★╮", baseName: "IMPERIO REAL", category: "elegantes", tags: ["imperio", "real"], style: "cool" },
  { id: "clan-17", name: "☠️ VENOM ARMY ☠️", baseName: "VENOM ARMY", category: "oscuros", tags: ["venom", "army"], style: "oscuro" },
  { id: "clan-18", name: "亗 MATRIX LEGENDS 亗", baseName: "MATRIX LEGENDS", category: "pro", tags: ["matrix", "king"], style: "cool" },
  { id: "clan-19", name: "乂 VALKYRIE CLAN 乂", baseName: "VALKYRIE CLAN", category: "gamer", tags: ["valkyrie", "x"], style: "gamer" },
  { id: "clan-20", name: "꧁ PODER MÁXIMO ꧂", baseName: "PODER MÁXIMO", category: "poderosos", tags: ["poder", "maximo", "accent"], style: "poderoso" },

  // Aesthetic & Minimalistas
  { id: "clan-21", name: "✦ NEBULA SQUAD ✦", baseName: "NEBULA SQUAD", category: "aesthetic", tags: ["nebula", "aesthetic"], style: "aesthetic" },
  { id: "clan-22", name: "▫️ ZERO FORCE ▫️", baseName: "ZERO FORCE", category: "minimalistas", tags: ["zero", "force"], style: "minimalista" },
  { id: "clan-23", name: "「 SILENCE TEAM 」", baseName: "SILENCE TEAM", category: "minimalistas", tags: ["silence", "brackets"], style: "minimalista" },
  { id: "clan-24", name: "☾ MOONLIGHT CLAN ☾", baseName: "MOONLIGHT CLAN", category: "aesthetic", tags: ["moonlight", "moon"], style: "aesthetic" },
  { id: "clan-25", name: "• BLACK SQUAD •", baseName: "BLACK SQUAD", category: "minimalistas", tags: ["black", "dot"], style: "minimalista" },
  { id: "clan-26", name: "々 APEX WARRIORS 々", baseName: "APEX WARRIORS", category: "gamer", tags: ["apex", "noma"], style: "minimalista" },

  // Cortos & Divertidos
  { id: "clan-27", name: "亗 KINGS 亗", baseName: "KINGS", category: "cortos", tags: ["kings", "short"], style: "cool" },
  { id: "clan-28", name: "乂 NOX 乂", baseName: "NOX", category: "cortos", tags: ["nox", "short"], style: "gamer" },
  { id: "clan-29", name: "『 REX 』", baseName: "REX", category: "cortos", tags: ["rex", "short"], style: "elite" },
  { id: "clan-30", name: "😜 NOOB SQUAD 😜", baseName: "NOOB SQUAD", category: "divertidos", tags: ["noob", "fun"], style: "cool" },
  { id: "clan-31", name: "🍗 PANCHO TEAM 🍗", baseName: "PANCHO TEAM", category: "divertidos", tags: ["pancho", "fun"], style: "cool" },
  { id: "clan-32", name: "🍌 BANANA FORCE 🍌", baseName: "BANANA FORCE", category: "divertidos", tags: ["banana", "fun"], style: "cool" },

  // Con Caracteres Españoles y Más Variedad
  { id: "clan-33", name: "👑 ÁNGELES DE FUEGO 👑", baseName: "ÁNGELES DE FUEGO", category: "elegantes", tags: ["angeles", "fuego", "accent"], style: "elite" },
  { id: "clan-34", name: "⚡ ESCUADRÓN AZTECA ⚡", baseName: "ESCUADRÓN AZTECA", category: "poderosos", tags: ["escuadron", "azteca", "accent"], style: "poderoso" },
  { id: "clan-35", name: "⚔️ CLAN ÑANDÚ ⚔️", baseName: "CLAN ÑANDÚ", category: "guerreros", tags: ["clan", "nandu", "accent"], style: "gamer" },
  { id: "clan-36", name: "亗 JOSÉ & WARRIORS 亗", baseName: "JOSÉ & WARRIORS", category: "cool", tags: ["jose", "accent"], style: "cool" },
  { id: "clan-37", name: "『 ÚLTIMA LEGIÓN 』", baseName: "ÚLTIMA LEGIÓN", category: "pro", tags: ["ultima", "legion", "accent"], style: "elite" },
  { id: "clan-38", name: "☠️ CLAN RAMÓN ☠️", baseName: "CLAN RAMÓN", category: "oscuros", tags: ["ramon", "accent"], style: "oscuro" },
  { id: "clan-39", name: "╰★ ÍCARO FORCE ★╮", baseName: "ÍCARO FORCE", category: "cool", tags: ["icaro", "accent"], style: "cool" },
  { id: "clan-40", name: "💎 CUMBRE ÉLITE 💎", baseName: "CUMBRE ÉLITE", category: "elite", tags: ["cumbre", "elite", "accent"], style: "elite" },

  // Mas nombres de clanes grupales
  { id: "clan-41", name: "亗 DISCIPLES OF WAR 亗", baseName: "DISCIPLES OF WAR", category: "guerreros", tags: ["disciples", "war"], style: "cool" },
  { id: "clan-42", name: "乂 BLOODLINE 乂", baseName: "BLOODLINE", category: "oscuros", tags: ["bloodline", "x"], style: "gamer" },
  { id: "clan-43", name: "『 SYNDICATE 』", baseName: "SYNDICATE", category: "pro", tags: ["syndicate", "brackets"], style: "elite" },
  { id: "clan-44", name: "⚡ THUNDER SQUAD ⚡", baseName: "THUNDER SQUAD", category: "poderosos", tags: ["thunder", "squad"], style: "poderoso" },
  { id: "clan-45", name: "☠️ REAPERS ARMY ☠️", baseName: "REAPERS ARMY", category: "oscuros", tags: ["reapers", "army"], style: "oscuro" },
  { id: "clan-46", name: "╰★ OMEGA TEAM ★╮", baseName: "OMEGA TEAM", category: "cool", tags: ["omega", "team"], style: "cool" },
  { id: "clan-47", name: "💎 DIAMOND FORCE 💎", baseName: "DIAMOND FORCE", category: "elegantes", tags: ["diamond", "force"], style: "elite" },
  { id: "clan-48", name: "⚔️ SPARTAN CLAN ⚔️", baseName: "SPARTAN CLAN", category: "guerreros", tags: ["spartan", "clan"], style: "gamer" },
  { id: "clan-49", name: "༒ INFAMOUS SQUAD ༒", baseName: "INFAMOUS SQUAD", category: "oscuros", tags: ["infamous", "squad"], style: "oscuro" },
  { id: "clan-50", name: "☣️ TOXIC GUERREROS ☣️", baseName: "TOXIC GUERREROS", category: "guerreros", tags: ["toxic", "guerreros"], style: "oscuro" },
  { id: "clan-51", name: "🔥 INFERNO KINGS 🔥", baseName: "INFERNO KINGS", category: "cool", tags: ["inferno", "kings"], style: "cool" },
  { id: "clan-52", name: "╰🖤 BLACK HEARTS 🖤╮", baseName: "BLACK HEARTS", category: "oscuros", tags: ["black", "hearts"], style: "oscuro" },
  { id: "clan-53", name: "꧁ CHAOS FORCE ꧂", baseName: "CHAOS FORCE", category: "poderosos", tags: ["chaos", "force"], style: "poderoso" },
  { id: "clan-54", name: "亗 VICTORY SQUAD 亗", baseName: "VICTORY SQUAD", category: "pro", tags: ["victory", "squad"], style: "cool" },
  { id: "clan-55", name: "⚔️ THRASHERS CLAN ⚔️", baseName: "THRASHERS CLAN", category: "guerreros", tags: ["thrashers", "clan"], style: "gamer" },
  { id: "clan-56", name: "👑 EMPERORS LEGION 👑", baseName: "EMPERORS LEGION", category: "elegantes", tags: ["emperors", "legion"], style: "elite" },
  { id: "clan-57", name: "『 DOOM TEAM 』", baseName: "DOOM TEAM", category: "oscuros", tags: ["doom", "team"], style: "elite" },
  { id: "clan-58", name: "⚡ FLASH FORCE ⚡", baseName: "FLASH FORCE", category: "poderosos", tags: ["flash", "force"], style: "poderoso" },
  { id: "clan-59", name: "🎯 TARGET SQUAD 🎯", baseName: "TARGET SQUAD", category: "gamer", tags: ["target", "squad"], style: "gamer" },
  { id: "clan-60", name: "╰🖤 DARKNESS ARMY 🖤╮", baseName: "DARKNESS ARMY", category: "oscuros", tags: ["darkness", "army"], style: "oscuro" },
];

export const CLAN_STYLE_LABELS: Record<ClanStyleType, string> = {
  cool: "Estilo Cool",
  gamer: "Estilo Gamer",
  elite: "Estilo Élite",
  oscuro: "Estilo Oscuro",
  minimalista: "Minimalista",
  aesthetic: "Aesthetic",
  poderoso: "Poderoso",
};
