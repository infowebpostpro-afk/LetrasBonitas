export type InsaneCategory =
  | "all"
  | "destacados"
  | "agresivos"
  | "intimidantes"
  | "oscuros"
  | "gamer"
  | "pro"
  | "cool"
  | "aesthetic"
  | "simbolos"
  | "goticos"
  | "elegantes"
  | "minimalistas"
  | "favoritos";

export type NameStyleType = "simple" | "decorado" | "unicode_avanzado";

export interface InsaneCategoryFilter {
  id: InsaneCategory;
  label: string;
  icon: string;
}

export const INSANE_CATEGORIES: InsaneCategoryFilter[] = [
  { id: "all", label: "Todos", icon: "🔥" },
  { id: "destacados", label: "Destacados", icon: "⭐" },
  { id: "agresivos", label: "Agresivos", icon: "⚡" },
  { id: "intimidantes", label: "Intimidantes", icon: "☠️" },
  { id: "oscuros", label: "Oscuros", icon: "🌑" },
  { id: "gamer", label: "Gamer", icon: "🎮" },
  { id: "pro", label: "Pro", icon: "🏆" },
  { id: "cool", label: "Cool", icon: "😎" },
  { id: "aesthetic", label: "Aesthetic", icon: "✦" },
  { id: "simbolos", label: "Con símbolos", icon: "⚔️" },
  { id: "goticos", label: "Góticos", icon: "✝️" },
  { id: "elegantes", label: "Elegantes", icon: "💎" },
  { id: "minimalistas", label: "Minimalistas", icon: "▫️" },
  { id: "favoritos", label: "Favoritos", icon: "♥" },
];

export interface InsaneNameItem {
  id: string;
  name: string;
  baseText: string;
  category: InsaneCategory;
  tags: string[];
  style: NameStyleType;
  featured?: boolean;
}

export const INSANE_NAME_ITEMS: InsaneNameItem[] = [
  // Destacados & Intimidantes
  { id: "ins-01", name: "꧁༒☬Shadow☬༒꧂", baseText: "Shadow", category: "intimidantes", tags: ["shadow", "cross", "skull", "dark"], style: "unicode_avanzado", featured: true },
  { id: "ins-02", name: "亗☠Destroyer☠亗", baseText: "Destroyer", category: "agresivos", tags: ["destroyer", "skull", "king", "pro"], style: "decorado", featured: true },
  { id: "ins-03", name: "乂Dark Killer乂", baseText: "Dark Killer", category: "oscuros", tags: ["dark", "killer", "samurai"], style: "decorado", featured: true },
  { id: "ins-04", name: "⚡Pѕycʜo Killer⚡", baseText: "Psycho Killer", category: "agresivos", tags: ["psycho", "lightning", "killer"], style: "unicode_avanzado", featured: true },
  { id: "ins-05", name: "༒𝕱𝖎𝖗𝖊𝕭𝖔𝖞༒", baseText: "FireBoy", category: "goticos", tags: ["fireboy", "gothic", "cross"], style: "unicode_avanzado", featured: true },
  { id: "ins-06", name: "⚔️V e n o m⚔️", baseText: "Venom", category: "intimidantes", tags: ["venom", "swords", "poison"], style: "decorado", featured: true },
  { id: "ins-07", name: "☣️P h a n t o m☣️", baseText: "Phantom", category: "oscuros", tags: ["phantom", "hazard", "ghost"], style: "decorado", featured: true },
  { id: "ins-08", name: "☢️T i t a n☢️", baseText: "Titan", category: "pro", tags: ["titan", "nuke", "giant"], style: "decorado", featured: true },
  { id: "ins-09", name: "꧁༺Demon King༻꧂", baseText: "Demon King", category: "intimidantes", tags: ["demon", "king", "wings"], style: "unicode_avanzado", featured: true },
  { id: "ins-10", name: "╰★V i p e r★╮", baseText: "Viper", category: "gamer", tags: ["viper", "star", "pro"], style: "decorado", featured: true },
  { id: "ins-11", name: "メS l a y e r メ", baseText: "Slayer", category: "agresivos", tags: ["slayer", "katana"], style: "decorado", featured: true },
  { id: "ins-12", name: "👑Кяαтσѕ👑", baseText: "Kratos", category: "pro", tags: ["kratos", "god", "crown"], style: "unicode_avanzado", featured: true },

  // Agresivos & Oscuros
  { id: "ins-13", name: "亗 M a t r i x 亗", baseText: "Matrix", category: "oscuros", tags: ["matrix", "king"], style: "decorado" },
  { id: "ins-14", name: "╰⚔️K i l l e r ⚔️╮", baseText: "Killer", category: "agresivos", tags: ["killer", "swords"], style: "decorado" },
  { id: "ins-15", name: "꧁༒Â n g e l༒꧂", baseText: "Ángel", category: "intimidantes", tags: ["angel", "accent", "cross"], style: "unicode_avanzado" },
  { id: "ins-16", name: "☠️Ñ a n d ú☠️", baseText: "Ñandú", category: "agresivos", tags: ["nandu", "accent", "skull"], style: "decorado" },
  { id: "ins-17", name: "『𝕾𝖍𝖆𝖉𝖔𝖜』", baseText: "Shadow", category: "goticos", tags: ["shadow", "gothic"], style: "unicode_avanzado" },
  { id: "ins-18", name: "⚡Z e u s⚡", baseText: "Zeus", category: "pro", tags: ["zeus", "lightning"], style: "decorado" },
  { id: "ins-19", name: "🎯S n i p e r🎯", baseText: "Sniper", category: "gamer", tags: ["sniper", "target"], style: "decorado" },
  { id: "ins-20", name: "🔥I n f e r n o🔥", baseText: "Inferno", category: "agresivos", tags: ["inferno", "fire"], style: "decorado" },
  { id: "ins-21", name: "╰🖤B l a c k🖤╮", baseText: "Black", category: "oscuros", tags: ["black", "heart"], style: "decorado" },
  { id: "ins-22", name: "꧁༺V a l k y r i e༻꧂", baseText: "Valkyrie", category: "gamer", tags: ["valkyrie", "wings"], style: "unicode_avanzado" },
  { id: "ins-23", name: "亗A l p h a亗", baseText: "Alpha", category: "pro", tags: ["alpha", "king"], style: "decorado" },
  { id: "ins-24", name: "⚔️B e a s t⚔️", baseText: "Beast", category: "agresivos", tags: ["beast", "swords"], style: "decorado" },

  // Goticos & Intimidantes
  { id: "ins-25", name: "༒𝕲𝖍𝖔𝖘𝖙༒", baseText: "Ghost", category: "goticos", tags: ["ghost", "cross"], style: "unicode_avanzado" },
  { id: "ins-26", name: "☠️P u n i s h e r☠️", baseText: "Punisher", category: "intimidantes", tags: ["punisher", "skull"], style: "decorado" },
  { id: "ins-27", name: "『𝕯𝖆𝖗𝖐𝖓𝖊𝖘𝖘』", baseText: "Darkness", category: "goticos", tags: ["darkness", "gothic"], style: "unicode_avanzado" },
  { id: "ins-28", name: "꧁༒B l o o d༒꧂", baseText: "Blood", category: "intimidantes", tags: ["blood", "wings"], style: "unicode_avanzado" },
  { id: "ins-29", name: "☣️V i r u s☣️", baseText: "Virus", category: "agresivos", tags: ["virus", "hazard"], style: "decorado" },
  { id: "ins-30", name: "🖤J o s u é🖤", baseText: "Josué", category: "oscuros", tags: ["josue", "accent", "heart"], style: "decorado" },
  { id: "ins-31", name: "乂N i g h t m a r e乂", baseText: "Nightmare", category: "oscuros", tags: ["nightmare", "x"], style: "decorado" },
  { id: "ins-32", name: "🔥V o r t e x🔥", baseText: "Vortex", category: "cool", tags: ["vortex", "fire"], style: "decorado" },

  // Gamer & Pro
  { id: "ins-33", name: "ツJ o s éツ", baseText: "José", category: "cool", tags: ["jose", "tsu", "accent"], style: "decorado" },
  { id: "ins-34", name: "亗L e g e n d亗", baseText: "Legend", category: "pro", tags: ["legend", "crown"], style: "decorado" },
  { id: "ins-35", name: "々A p e x々", baseText: "Apex", category: "gamer", tags: ["apex", "noma"], style: "simple" },
  { id: "ins-36", name: "〆S h i m e", baseText: "Shime", category: "cool", tags: ["shime", "spear"], style: "simple" },
  { id: "ins-37", name: "「S h a d o w」", baseText: "Shadow", category: "minimalistas", tags: ["shadow", "brackets"], style: "simple" },
  { id: "ins-38", name: "✦N o v a✦", baseText: "Nova", category: "aesthetic", tags: ["nova", "sparkle"], style: "decorado" },
  { id: "ins-39", name: "💎S p e c t e r💎", baseText: "Specter", category: "elegantes", tags: ["specter", "diamond"], style: "decorado" },
  { id: "ins-40", name: "👑K i n g👑", baseText: "King", category: "pro", tags: ["king", "crown"], style: "decorado" },

  // Símbolos & Aesthetic
  { id: "ins-41", name: "⚡B o l t⚡", baseText: "Bolt", category: "simbolos", tags: ["bolt", "lightning"], style: "decorado" },
  { id: "ins-42", name: "☯️S i l e n c e☯️", baseText: "Silence", category: "aesthetic", tags: ["silence", "yinyang"], style: "decorado" },
  { id: "ins-43", name: "☾M o o n l i g h t☽", baseText: "Moonlight", category: "aesthetic", tags: ["moonlight", "moon"], style: "decorado" },
  { id: "ins-44", name: "★R a v e n★", baseText: "Raven", category: "simbolos", tags: ["raven", "star"], style: "decorado" },
  { id: "ins-45", name: "✍️𝒮 𝒽 𝒶 𝒹 𝑜 𝓌✍️", baseText: "Shadow", category: "elegantes", tags: ["shadow", "script"], style: "unicode_avanzado" },
  { id: "ins-46", name: "✦S u n s e t✦", baseText: "Sunset", category: "aesthetic", tags: ["sunset", "star"], style: "decorado" },
  { id: "ins-47", name: "▫️Z e r o▫️", baseText: "Zero", category: "minimalistas", tags: ["zero", "square"], style: "simple" },
  { id: "ins-48", name: "•B l a c k•", baseText: "Black", category: "minimalistas", tags: ["black", "dot"], style: "simple" },

  // Adicionales con Caracteres Españoles y Emojis
  { id: "ins-49", name: "☠️R a m ó n☠️", baseText: "Ramón", category: "intimidantes", tags: ["ramon", "accent", "skull"], style: "decorado" },
  { id: "ins-50", name: "⚡Á n g e l⚡", baseText: "Ángel", category: "agresivos", tags: ["angel", "accent", "lightning"], style: "decorado" },
  { id: "ins-51", name: "👑Í c a r o👑", baseText: "Ícaro", category: "pro", tags: ["icaro", "accent", "crown"], style: "decorado" },
  { id: "ins-52", name: "⚔️Ó s c a r⚔️", baseText: "Óscar", category: "goticos", tags: ["oscar", "accent", "swords"], style: "decorado" },
  { id: "ins-53", name: "亗Ú l t i m o亗", baseText: "Último", category: "pro", tags: ["ultimo", "accent", "king"], style: "decorado" },
  { id: "ins-54", name: "☣️G ü e r o☣️", baseText: "Güero", category: "intimidantes", tags: ["guero", "accent", "hazard"], style: "decorado" },
  { id: "ins-55", name: "╰★N i ñ o★╮", baseText: "Niño", category: "cool", tags: ["nino", "accent", "star"], style: "decorado" },
  { id: "ins-56", name: "꧁༒D e s t r u c t o r༒꧂", baseText: "Destructor", category: "intimidantes", tags: ["destructor", "cross"], style: "unicode_avanzado" },
  { id: "ins-57", name: "亗S a m u r a i亗", baseText: "Samurai", category: "agresivos", tags: ["samurai", "king"], style: "decorado" },
  { id: "ins-58", name: "乂C y b e r乂", baseText: "Cyber", category: "gamer", tags: ["cyber", "x"], style: "decorado" },
  { id: "ins-59", name: "『𝖂𝖆𝖗𝖗𝖎𝖔𝖗』", baseText: "Warrior", category: "goticos", tags: ["warrior", "gothic"], style: "unicode_avanzado" },
  { id: "ins-60", name: "⚡H u n t e r⚡", baseText: "Hunter", category: "agresivos", tags: ["hunter", "lightning"], style: "decorado" },
  { id: "ins-61", name: "☠️G r i m☠️", baseText: "Grim", category: "oscuros", tags: ["grim", "skull"], style: "decorado" },
  { id: "ins-62", name: "╰🖤S o u l🖤╮", baseText: "Soul", category: "oscuros", tags: ["soul", "heart"], style: "decorado" },
  { id: "ins-63", name: "꧁༺V e n g e a n c e༻꧂", baseText: "Vengeance", category: "intimidantes", tags: ["vengeance", "wings"], style: "unicode_avanzado" },
  { id: "ins-64", name: "亗V i c t o r y亗", baseText: "Victory", category: "pro", tags: ["victory", "king"], style: "decorado" },
  { id: "ins-65", name: "⚔️T h r a s h e r⚔️", baseText: "Thrasher", category: "agresivos", tags: ["thrasher", "swords"], style: "decorado" },
  { id: "ins-66", name: "༒𝕾𝖞𝖓𝖉𝖎𝖈𝖆𝖙𝖊༒", baseText: "Syndicate", category: "goticos", tags: ["syndicate", "gothic"], style: "unicode_avanzado" },
  { id: "ins-67", name: "☣️T o x i c☣️", baseText: "Toxic", category: "intimidantes", tags: ["toxic", "hazard"], style: "decorado" },
  { id: "ins-68", name: "🔥O m e g a🔥", baseText: "Omega", category: "agresivos", tags: ["omega", "fire"], style: "decorado" },
  { id: "ins-69", name: "╰★C h a o s★╮", baseText: "Chaos", category: "gamer", tags: ["chaos", "star"], style: "decorado" },
  { id: "ins-70", name: "メS h a d o w メ", baseText: "Shadow", category: "agresivos", tags: ["shadow", "katana"], style: "decorado" },
  { id: "ins-71", name: "👑E m p e r o r👑", baseText: "Emperor", category: "pro", tags: ["emperor", "crown"], style: "decorado" },
  { id: "ins-72", name: "『𝕯𝖔𝖔𝖒』", baseText: "Doom", category: "goticos", tags: ["doom", "gothic"], style: "unicode_avanzado" },
  { id: "ins-73", name: "⚡F l a s h⚡", baseText: "Flash", category: "pro", tags: ["flash", "lightning"], style: "decorado" },
  { id: "ins-74", name: "🎯T a r g e t🎯", baseText: "Target", category: "gamer", tags: ["target", "bullseye"], style: "decorado" },
  { id: "ins-75", name: "╰🖤D a r k n e s s🖤╮", baseText: "Darkness", category: "oscuros", tags: ["darkness", "heart"], style: "decorado" },
  { id: "ins-76", name: "꧁༒O b l i v i o n༒꧂", baseText: "Oblivion", category: "intimidantes", tags: ["oblivion", "cross"], style: "unicode_avanzado" },
  { id: "ins-77", name: "亗R e g i c i d e亗", baseText: "Regicide", category: "pro", tags: ["regicide", "king"], style: "decorado" },
  { id: "ins-78", name: "⚔️C l a s h⚔️", baseText: "Clash", category: "agresivos", tags: ["clash", "swords"], style: "decorado" },
  { id: "ins-79", name: "༒𝕹𝖊𝖈𝖗𝖔𝖒𝖆𝖓𝖈𝖊𝖗༒", baseText: "Necromancer", category: "goticos", tags: ["necromancer", "gothic"], style: "unicode_avanzado" },
  { id: "ins-80", name: "☣️B i o h a z a r d☣️", baseText: "Biohazard", category: "intimidantes", tags: ["biohazard", "hazard"], style: "decorado" },
];

export const INSANE_STYLE_LABELS: Record<NameStyleType, string> = {
  simple: "Estilo simple",
  decorado: "Decorado",
  unicode_avanzado: "Unicode avanzado",
};
