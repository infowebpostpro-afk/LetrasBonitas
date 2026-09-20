export type LibraryCategory =
  | "all"
  | "destacados"
  | "cool"
  | "gamer"
  | "pro"
  | "aesthetic"
  | "elegantes"
  | "cursivos"
  | "goticos"
  | "simbolos"
  | "minimalistas"
  | "divertidos"
  | "intimidantes"
  | "royal"
  | "favoritos";

export interface LibraryCategoryFilter {
  id: LibraryCategory;
  label: string;
  icon: string;
}

export const LIBRARY_CATEGORIES: LibraryCategoryFilter[] = [
  { id: "all", label: "Todos", icon: "✨" },
  { id: "destacados", label: "Destacados", icon: "⭐" },
  { id: "cool", label: "Cool", icon: "🔥" },
  { id: "gamer", label: "Gamer", icon: "🎮" },
  { id: "pro", label: "Pro", icon: "🏆" },
  { id: "goticos", label: "Góticos", icon: "⚔️" },
  { id: "intimidantes", label: "Intimidantes", icon: "☠️" },
  { id: "royal", label: "Royal", icon: "👑" },
  { id: "aesthetic", label: "Aesthetic", icon: "✦" },
  { id: "cursivos", label: "Cursivos", icon: "✍️" },
  { id: "elegantes", label: "Elegantes", icon: "💎" },
  { id: "simbolos", label: "Con símbolos", icon: "⚡" },
  { id: "minimalistas", label: "Minimalistas", icon: "▫️" },
  { id: "divertidos", label: "Divertidos", icon: "😜" },
  { id: "favoritos", label: "Favoritos", icon: "♥" },
];

export interface FreeFireLibraryItem {
  id: string;
  name: string;
  baseText: string;
  category: LibraryCategory;
  tags: string[];
  featured?: boolean;
}

export const FREE_FIRE_LIBRARY_ITEMS: FreeFireLibraryItem[] = [
  // Destacados & Pro
  { id: "lib-1", name: "亗 S ʜ ᴀ ᴅ ᴏ ᴡ 亗", baseText: "Shadow", category: "pro", tags: ["shadow", "king", "pro"], featured: true },
  { id: "lib-2", name: "꧁༒N i n j a༒꧂", baseText: "Ninja", category: "gamer", tags: ["ninja", "wings", "cross"], featured: true },
  { id: "lib-3", name: "『𝕾𝖍𝖆𝖉𝖔𝖜』", baseText: "Shadow", category: "goticos", tags: ["gothic", "shadow"], featured: true },
  { id: "lib-4", name: "👑 К я α т σ ѕ 👑", baseText: "Kratos", category: "royal", tags: ["kratos", "crown", "god"], featured: true },
  { id: "lib-5", name: "⚡ P ѕ υ c ʜ o ⚡", baseText: "Psycho", category: "cool", tags: ["psycho", "lightning"], featured: true },
  { id: "lib-6", name: "༺V a l k y r i e༻", baseText: "Valkyrie", category: "gamer", tags: ["valkyrie", "wings"], featured: true },
  { id: "lib-7", name: "☠️ D e m o n ☠️", baseText: "Demon", category: "intimidantes", tags: ["demon", "skull"], featured: true },
  { id: "lib-8", name: "╰★ V i p e r ★╮", baseText: "Viper", category: "pro", tags: ["viper", "star"], featured: true },
  { id: "lib-9", name: "メ S l a y e r メ", baseText: "Slayer", category: "gamer", tags: ["slayer", "katana"], featured: true },
  { id: "lib-10", name: "ツ J o s é ツ", baseText: "José", category: "cool", tags: ["jose", "tsu", "accent"], featured: true },

  // Goticos & Intimidantes
  { id: "lib-11", name: "༒𝕱𝖎𝖗𝖊𝕭𝖔𝖞༒", baseText: "FireBoy", category: "goticos", tags: ["fireboy", "gothic", "cross"] },
  { id: "lib-12", name: "⚔️V e n o m⚔️", baseText: "Venom", category: "intimidantes", tags: ["venom", "swords"] },
  { id: "lib-13", name: "꧁༺D r a g o n༻꧂", baseText: "Dragon", category: "goticos", tags: ["dragon", "wings"] },
  { id: "lib-14", name: "☣️P h a n t o m☣️", baseText: "Phantom", category: "intimidantes", tags: ["phantom", "hazard"] },
  { id: "lib-15", name: "『𝕲𝖍𝖔𝖘𝖙』", baseText: "Ghost", category: "goticos", tags: ["ghost", "brackets"] },
  { id: "lib-16", name: "☢️T i t a n☢️", baseText: "Titan", category: "intimidantes", tags: ["titan", "nuke"] },

  // Royal & Elegantes
  { id: "lib-17", name: "亗 L e g e n d 亗", baseText: "Legend", category: "royal", tags: ["legend", "crown"] },
  { id: "lib-18", name: "♛ 𝓐́ 𝓷 𝓰 𝓮 𝓵 ♛", baseText: "Ángel", category: "elegantes", tags: ["angel", "script", "accent"] },
  { id: "lib-19", name: "👑 K i n g 👑", baseText: "King", category: "royal", tags: ["king", "crown"] },
  { id: "lib-20", name: "💎 S p e c t e r 💎", baseText: "Specter", category: "elegantes", tags: ["specter", "diamond"] },
  { id: "lib-21", name: "亗 M a t r i x 亗", baseText: "Matrix", category: "royal", tags: ["matrix", "king"] },
  { id: "lib-22", name: "〘 𝓐 c 𝓮 〙", baseText: "Ace", category: "elegantes", tags: ["ace", "script"] },

  // Aesthetic & Cursivos
  { id: "lib-23", name: "✦ S ᴜ ɴ s ᴇ ᴛ ✦", baseText: "Sunset", category: "aesthetic", tags: ["sunset", "sparkle"] },
  { id: "lib-24", name: "✧ 𝓝 ̃ 𝓪 𝓷 𝓭 𝓾 ́ ✧", baseText: "Ñandú", category: "cursivos", tags: ["nandu", "script", "accent"] },
  { id: "lib-25", name: "☾ M o o n l i g h t ☽", baseText: "Moonlight", category: "aesthetic", tags: ["moon", "aesthetic"] },
  { id: "lib-26", name: "✍️ 𝒮 𝒽 𝒶 𝒹 𝑜 𝓌 ✍️", baseText: "Shadow", category: "cursivos", tags: ["shadow", "script"] },
  { id: "lib-27", name: "🌸 S a k u r a 🌸", baseText: "Sakura", category: "aesthetic", tags: ["sakura", "flower"] },
  { id: "lib-28", name: "𝓥 𝓲 𝓹 𝓮 𝓻", baseText: "Viper", category: "cursivos", tags: ["viper", "script"] },

  // Gamer & Con Simbolos
  { id: "lib-29", name: "乂 S n i p e r 乂", baseText: "Sniper", category: "gamer", tags: ["sniper", "x"] },
  { id: "lib-30", name: "⚡ B e a s t ⚡", baseText: "Beast", category: "simbolos", tags: ["beast", "lightning"] },
  { id: "lib-31", name: "🎯 H u n t e r 🎯", baseText: "Hunter", category: "gamer", tags: ["hunter", "target"] },
  { id: "lib-32", name: "☯️ V o r t e x ☯️", baseText: "Vortex", category: "simbolos", tags: ["vortex", "yinyang"] },
  { id: "lib-33", name: "々 A p e x 々", baseText: "Apex", category: "gamer", tags: ["apex", "noma"] },
  { id: "lib-34", name: "★ R a v e n ★", baseText: "Raven", category: "simbolos", tags: ["raven", "star"] },

  // Minimalistas & Cool
  { id: "lib-35", name: "「 S h a d o w 」", baseText: "Shadow", category: "minimalistas", tags: ["shadow", "brackets"] },
  { id: "lib-36", name: "🔥 F i r e 🔥", baseText: "Fire", category: "cool", tags: ["fire", "flame"] },
  { id: "lib-37", name: "▫️ Z e r o ▫️", baseText: "Zero", category: "minimalistas", tags: ["zero", "square"] },
  { id: "lib-38", name: "ツ P r o ツ", baseText: "Pro", category: "cool", tags: ["pro", "tsu"] },
  { id: "lib-39", name: "• B l a c k •", baseText: "Black", category: "minimalistas", tags: ["black", "dot"] },
  { id: "lib-40", name: "〆 S h i m e", baseText: "Shime", category: "cool", tags: ["shime", "spear"] },

  // Divertidos & Adicionales
  { id: "lib-41", name: "😜 N o o b K i l l e r 😜", baseText: "NoobKiller", category: "divertidos", tags: ["noob", "fun"] },
  { id: "lib-42", name: "🍗 P a n c h o 🍗", baseText: "Pancho", category: "divertidos", tags: ["pancho", "fun"] },
  { id: "lib-43", name: "🍌 B a n a n a 🍌", baseText: "Banana", category: "divertidos", tags: ["banana", "fun"] },
  { id: "lib-44", name: "亗 M a x 亗", baseText: "Max", category: "pro", tags: ["max", "king"] },
  { id: "lib-45", name: "꧁ M a g i c ꧂", baseText: "Magic", category: "gamer", tags: ["magic", "wings"] },
  { id: "lib-46", name: "『 H e r o 』", baseText: "Hero", category: "pro", tags: ["hero", "brackets"] },
  { id: "lib-47", name: "⚡ Z e u s ⚡", baseText: "Zeus", category: "goticos", tags: ["zeus", "lightning"] },
  { id: "lib-48", name: "👑 P r i n c e 👑", baseText: "Prince", category: "royal", tags: ["prince", "crown"] },
  { id: "lib-49", name: "✦ N o v a ✦", baseText: "Nova", category: "aesthetic", tags: ["nova", "sparkle"] },
  { id: "lib-50", name: "☠️ P u n i s h e r ☠️", baseText: "Punisher", category: "intimidantes", tags: ["punisher", "skull"] },
  { id: "lib-51", name: "⚔️ W a r r i o r ⚔️", baseText: "Warrior", category: "goticos", tags: ["warrior", "swords"] },
  { id: "lib-52", name: "ツ P a b l o ツ", baseText: "Pablo", category: "cool", tags: ["pablo", "tsu"] },
  { id: "lib-53", name: "『 J o s u é 』", baseText: "Josué", category: "minimalistas", tags: ["josue", "accent"] },
  { id: "lib-54", name: "亗 A l p h a 亗", baseText: "Alpha", category: "royal", tags: ["alpha", "king"] },
  { id: "lib-55", name: "꧁ C h a o s ꧂", baseText: "Chaos", category: "gamer", tags: ["chaos", "wings"] },
  { id: "lib-56", name: "🔥 S t o r m 🔥", baseText: "Storm", category: "cool", tags: ["storm", "fire"] },
  { id: "lib-57", name: "✦ N e b u l a ✦", baseText: "Nebula", category: "aesthetic", tags: ["nebula", "sparkle"] },
  { id: "lib-58", name: "💎 R i c h 💎", baseText: "Rich", category: "elegantes", tags: ["rich", "diamond"] },
  { id: "lib-59", name: "🎯 W a l k e r 🎯", baseText: "Walker", category: "gamer", tags: ["walker", "target"] },
  { id: "lib-60", name: "⚡ V o l t ⚡", baseText: "Volt", category: "simbolos", tags: ["volt", "lightning"] },
];
