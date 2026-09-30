// Curated Aesthetic Emoji & Combo Dataset for LetrasBonitas
// Provides controlled theme palettes, aesthetic symbols, and ready-made combinations

export type AestheticVibeId =
  | 'coquette'
  | 'soft'
  | 'celestial'
  | 'dark-academia'
  | 'cottagecore'
  | 'y2k'
  | 'dark'
  | 'ocean'
  | 'nature'
  | 'romantic'
  | 'minimal';

export interface AestheticVibe {
  id: AestheticVibeId;
  name: string;
  icon: string;
  description: string;
  emojis: string[];
  symbols: string[];
  combos: string[];
  tags: string[];
}

export interface ReadyComboItem {
  id: string;
  combo: string;
  vibe: AestheticVibeId;
  vibeName: string;
  tags: string[];
}

export const AESTHETIC_VIBES: AestheticVibe[] = [
  {
    id: 'coquette',
    name: 'Coquette',
    icon: '🎀',
    description: 'Estética delicada, lazos, romance vintage y tonos suaves.',
    emojis: ['🎀', '🩰', '🤍', '🦢', '🕯️', '💌', '🌷', '🪞', '🩷', '🍰', '🪽', '🍓', '🌸'],
    symbols: ['୨୧', '𐙚', '♡', '⋆', '✧', 'ʚɞ', '˚₊·'],
    combos: [
      '🎀 🩰 🤍',
      '🦢 🎀 🕯️',
      '💌 🌷 🩷',
      '🎀 🪞 🦢',
      '🤍 🩰 🌸',
      '୨୧ 🎀 🤍 ୨୧',
      '🎀 🩰 🤍 🦢',
      '𐙚 🎀 🩰 𐙚',
      '🍰 🎀 🩰 🩷',
      '🪞 🌷 🕯️ 🦢',
    ],
    tags: ['lazo', 'coquette', 'rosa', 'ballet', 'cisne', 'tierno', 'chica', 'vintage'],
  },
  {
    id: 'soft',
    name: 'Soft y Cute',
    icon: '🌸',
    description: 'Tonos pasteles, ositos, nubes, flores y dulzura visual.',
    emojis: ['🌸', '🧸', '🫧', '☁️', '🩷', '🌷', '🍓', '🐰', '🤍', '🦋', '✨', '🍰', '🧁'],
    symbols: ['❀', '⋆', '✿', '｡:°', '♡', '⋆｡°✩', '˗ˏˋ ♡ ˎˊ˗'],
    combos: [
      '🌸 🧸 🫧',
      '☁️ 🩷 🌷',
      '🍓 🎀 🧸',
      '🌷 🐰 🤍',
      '🦋 🌸 ✨',
      '☁️ 🧸 🌸',
      '🌸 🫧 🩷 🌷',
      '🧸 🍓 🍰 🌸',
      '🐰 ☁️ 🫧 🌷',
      '🌸 ⋆ 🧸 ⋆ 🌸',
    ],
    tags: ['soft', 'cute', 'oso', 'nube', 'flores', 'dulce', 'tierno', 'pastel'],
  },
  {
    id: 'celestial',
    name: 'Celestial',
    icon: '🌙',
    description: 'Lunas, estrellas, planetas, galaxias y noche mágica.',
    emojis: ['🌙', '⭐', '✨', '🪐', '☁️', '💫', '🌌', '🔮', '🦋', '🌠', '🌑', '🪽'],
    symbols: ['☾', '⋆', '✦', '✧', '⋆｡°✩', '✩', '★', '༊*·˚'],
    combos: [
      '🌙 ✨ 🪐',
      '☁️ 🌙 ⭐',
      '🌌 💫 🌙',
      '🔮 ✨ 🪐',
      '🌙 🦋 ✨',
      '☾ ⋆ ✦ ✨',
      '🪐 🌙 ✨ 💫',
      '☁️ 🌙 🪐 🌌',
      '⭐ 🌙 🔮 ✨',
      '⋆｡°✩ 🌙 🪐 ✩°｡⋆',
    ],
    tags: ['luna', 'estrellas', 'cielo', 'noche', 'planeta', 'espacio', 'galaxia', 'magia'],
  },
  {
    id: 'dark-academia',
    name: 'Dark Academia',
    icon: '📚',
    description: 'Libros, café, velas, lluvia, arquitectura y estudio clásico.',
    emojis: ['📚', '☕', '🕯️', '🖋️', '🦉', '🏛️', '🌧️', '🖤', '📜', '📖', '🕰️', '♟️', '🎻'],
    symbols: ['†', '·', '✒', '❖', '⚜', '✧'],
    combos: [
      '📚 ☕ 🕯️',
      '📖 🖋️ 🌧️',
      '🏛️ 📚 🕯️',
      '☕ 📜 🖤',
      '🦉 📖 🌙',
      '📚 🕰️ 🕯️ ☕',
      '🏛️ 📜 🖋️ 📖',
      '🌧️ ☕ 📚 ♟️',
      '🎻 📖 🕯️ 🏛️',
      '☕ 📚 🏛️ 🌧️',
    ],
    tags: ['libros', 'estudiar', 'cafe', 'vela', 'lluvia', 'clasico', 'escritura', 'museo'],
  },
  {
    id: 'cottagecore',
    name: 'Cottagecore',
    icon: '🍄',
    description: 'Naturaleza rural, setas, cestas campestres, té y flores silvestres.',
    emojis: ['🍄', '🌿', '🧺', '🌻', '🐝', '🍓', '🌾', '🫖', '🌼', '🐌', '🍞', '🍯', '🐸', '🪵'],
    symbols: ['☘', '✿', '𓇢𓆸', 'ꕥ', '❀', '⋆'],
    combos: [
      '🍄 🌿 🧺',
      '🌻 🐝 🌾',
      '🍓 🌿 🫖',
      '🌼 🧺 🐌',
      '🍞 🌻 🍯',
      '🍄 🧺 🌼 🌿',
      '🐝 🌻 🍯 🧺',
      '🫖 🍓 🌿 🍞',
      '🌾 🍄 🌻 🫖',
      '🐸 🍄 🌿 🧺',
    ],
    tags: ['campo', 'setas', 'flores', 'naturaleza', 'miel', 'abeja', 'te', 'bosque'],
  },
  {
    id: 'y2k',
    name: 'Y2K',
    icon: '🪩',
    description: 'Estética retro digital, discoteca, nostalgia de los 2000s y brillo.',
    emojis: ['🪩', '💿', '🎧', '📸', '⭐', '💖', '👾', '💫', '🕶️', '💅', '🛸', '⚡'],
    symbols: ['★', '✦', '✮', '˚₊·', '✰', '✧'],
    combos: [
      '🪩 💿 ⭐',
      '🎧 💖 📸',
      '💿 🩷 ✨',
      '👾 ⭐ 🎧',
      '🪩 💫 💖',
      '💿 🪩 🎧 ⭐',
      '💖 📸 🎧 🪩',
      '⭐ 🛸 💿 👾',
      '🎧 🪩 🕶️ 💿',
      '★ 🪩 💿 💖 ★',
    ],
    tags: ['disco', 'cd', 'camara', 'musica', 'retro', '2000', 'brillo', 'cyber'],
  },
  {
    id: 'dark',
    name: 'Dark',
    icon: '🖤',
    description: 'Corazones negros, cadenas, lunas sombrías y flores marchitas.',
    emojis: ['🖤', '🌙', '🥀', '⛓️', '🌑', '🦇', '🔮', '🌧️', '🕷️', '🕯️', '💀', '🗡️'],
    symbols: ['†', '☠', '☾', '🕷', '⛓', '❖'],
    combos: [
      '🖤 🌙 🥀',
      '⛓️ 🖤 🌑',
      '🥀 🕯️ 🖤',
      '🦇 🌙 🖤',
      '🔮 🖤 🌧️',
      '🌑 🦇 🖤',
      '⛓️ 🖤 🥀 🌙',
      '💀 🖤 🕯️ 🥀',
      '🦇 ⛓️ 🖤 🌑',
      '† 🖤 🥀 ⛓️ †',
    ],
    tags: ['negro', 'oscuro', 'goth', 'luna', 'rosa marchita', 'cadena', 'misterio'],
  },
  {
    id: 'ocean',
    name: 'Ocean',
    icon: '🌊',
    description: 'Olas, conchas, delfines, agua cristalina y brisa marina.',
    emojis: ['🐚', '🌊', '🫧', '🐬', '🪸', '🦢', '☀️', '🏝️', '🐠', '🐋', '🥥', '💙'],
    symbols: ['𓇼', '𓆉', '∘°', '≋', '✧', '⋆'],
    combos: [
      '🐚 🌊 🫧',
      '🌊 🐬 💙',
      '🫧 🐚 🪸',
      '🐬 🫧 🌊 🐚',
      '🏝️ 🌊 ☀️ 🐚',
      '💙 🫧 🌊',
      '🐠 🪸 🫧 🐬',
      '🐚 𓇼 🫧 🌊',
      '🌊 🐋 💙 🫧',
      '☀️ 🏝️ 🐚 🌊',
    ],
    tags: ['mar', 'playa', 'agua', 'delfin', 'concha', 'azul', 'verano', 'olas'],
  },
  {
    id: 'nature',
    name: 'Nature',
    icon: '🌿',
    description: 'Hojas verdes, té verde, plantas, frescura botánica y calma.',
    emojis: ['🌿', '🍃', '🍀', '🌱', '🐢', '🍵', '🌲', '🌸', '🍂', '🌵', '🪴', '🎋'],
    symbols: ['☘', '⚘', '𓇢', '🌱', '❀', '·'],
    combos: [
      '🌿 🍵 🍃',
      '🍀 🌱 🐢',
      '🍃 🌿 ☁️',
      '🌱 🍃 🌿 🍵',
      '🌲 🌿 🍃 🍀',
      '🪴 🍵 🌿 🍃',
      '🎋 🌱 🍀 🍵',
      '🌿 ☘ 🍃 🍵',
      '🐢 🍃 🌿 🌱',
      '🌸 🌿 🍃 🪴',
    ],
    tags: ['verde', 'planta', 'hoja', 'te', 'calma', 'botanica', 'fresco', 'zen'],
  },
  {
    id: 'romantic',
    name: 'Romantic',
    icon: '💕',
    description: 'Cartas de amor, rosas rojas, flechas de cupido y romance.',
    emojis: ['💌', '🌹', '💖', '🏹', '🌷', '💍', '🍫', '🥂', '🕊️', '💕', '💋', '❤️'],
    symbols: ['♡', '❦', '❧', 'ʚɞ', 'ღ', '♥'],
    combos: [
      '💌 🌷 🩷',
      '🎀 💌 🌷',
      '🌹 🕊️ 🤍',
      '💌 🏹 💖',
      '🌷 🍫 💌 💕',
      '🥂 🌹 💌 🕊️',
      '💍 💌 🌹 💖',
      '♡ 💌 🌹 🕊️ ♡',
      '🏹 💕 💌 🌷',
      '💋 🌹 💖 💌',
    ],
    tags: ['amor', 'carta', 'rosa', 'romance', 'pareja', 'san valentin', 'corazon'],
  },
  {
    id: 'minimal',
    name: 'Minimal',
    icon: '✨',
    description: 'Combinaciones cortas, equilibradas, limpias y directas.',
    emojis: ['🤍', '✨', '🌙', '☁️', '🎀', '🌿', '🪐', '🫧', '🕯️', '🕊️'],
    symbols: ['·', '⋆', '♡', '✦', '✧', '—'],
    combos: [
      '🤍 ✨',
      '🌙 ☁️',
      '🎀 🤍',
      '🌿 ☁️',
      '🪐 ✨',
      '⋆ 🌙',
      '♡ 🎀',
      '✦ 🤍',
      '☁️ 🤍',
      '🕊️ ✨',
      '🫧 🤍',
      '🕯️ ✨',
    ],
    tags: ['minimalista', 'simple', 'corto', 'dos emojis', 'limpio', 'elegante'],
  },
];

// Color Palettes
export const AESTHETIC_COLOR_PALETTES = [
  {
    id: 'rosa',
    name: 'Rosa',
    colorHex: '#f472b6',
    emojis: ['🎀', '🩷', '🌸', '🌷', '🍓', '🦩', '💕', '💗', '🩰', '🍰'],
    combos: ['🎀 🩷 🌸', '🍓 🎀 🌷', '🩰 🌸 🩷', '🌷 🦩 🎀 🩷'],
  },
  {
    id: 'blanco',
    name: 'Blanco',
    colorHex: '#e2e8f0',
    emojis: ['🤍', '☁️', '🕊️', '🦢', '🫧', '🪽', '🕯️', '🐇', '❄️', '🐚'],
    combos: ['🤍 🦢 ☁️', '🕊️ 🤍 🫧', '☁️ 🪽 🤍', '🦢 🤍 🕯️ 🫧'],
  },
  {
    id: 'azul',
    name: 'Azul',
    colorHex: '#38bdf8',
    emojis: ['💙', '🌊', '🫐', '🐬', '🌀', '🧊', '🫧', '🐳', '🌧️', '💎'],
    combos: ['🌊 🐬 💙', '🫐 🧊 💙', '💙 🫧 🌊', '🐬 🫧 🌊 💙'],
  },
  {
    id: 'negro',
    name: 'Negro',
    colorHex: '#334155',
    emojis: ['🖤', '🌑', '🦇', '🕷️', '🥀', '⛓️', '💀', '🕶️', '🐈‍⬛', '♟️'],
    combos: ['🖤 🥀 🌙', '🌑 🦇 🖤', '⛓️ 🖤 🥀', '🦇 🖤 ⛓️ 🌑'],
  },
  {
    id: 'verde',
    name: 'Verde',
    colorHex: '#4ade80',
    emojis: ['🌿', '🍃', '🍀', '🌱', '🐢', '🍵', '🌲', '🍏', '🥑', '🐸'],
    combos: ['🌿 🍵 🍃', '🍀 🌱 🐢', '🍃 🌿 ☁️', '🌱 🍃 🌿 🍵'],
  },
] as const;

// Flattened ready-made gallery items
export const ALL_READY_COMBOS: ReadyComboItem[] = AESTHETIC_VIBES.flatMap(vibe =>
  vibe.combos.map((combo, idx) => ({
    id: `${vibe.id}-${idx}`,
    combo,
    vibe: vibe.id,
    vibeName: vibe.name,
    tags: [...vibe.tags, vibe.id],
  }))
);

// Controlled generator
export function generateAestheticCombo(
  vibeId: AestheticVibeId | 'todos',
  length: number = 3,
  type: 'solo-emojis' | 'emojis-simbolos' = 'solo-emojis'
): string {
  const targetVibe = vibeId === 'todos' 
    ? AESTHETIC_VIBES[Math.floor(Math.random() * AESTHETIC_VIBES.length)]
    : AESTHETIC_VIBES.find(v => v.id === vibeId) || AESTHETIC_VIBES[0];

  const pool = [...targetVibe.emojis];
  const symbolPool = [...targetVibe.symbols];

  const selectedItems: string[] = [];

  // Pick without immediate duplicates
  const emojiCount = type === 'emojis-simbolos' ? Math.max(1, length - 1) : length;

  while (selectedItems.length < emojiCount && pool.length > 0) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    const item = pool.splice(randomIndex, 1)[0];
    selectedItems.push(item);
  }

  // If emojis + symbols, add 1 symbol tastefully (prefix/suffix or inner)
  if (type === 'emojis-simbolos' && symbolPool.length > 0) {
    const randomSymbol = symbolPool[Math.floor(Math.random() * symbolPool.length)];
    if (Math.random() > 0.5) {
      selectedItems.push(randomSymbol);
    } else {
      selectedItems.unshift(randomSymbol);
    }
  }

  return selectedItems.join(' ');
}

// Search across aesthetic library
export function searchAestheticContent(query: string): {
  combos: ReadyComboItem[];
  emojis: { char: string; vibeName: string }[];
  symbols: { char: string; vibeName: string }[];
} {
  const clean = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  if (!clean) {
    return {
      combos: ALL_READY_COMBOS,
      emojis: AESTHETIC_VIBES.flatMap(v => v.emojis.slice(0, 4).map(char => ({ char, vibeName: v.name }))),
      symbols: AESTHETIC_VIBES.flatMap(v => v.symbols.slice(0, 3).map(char => ({ char, vibeName: v.name }))),
    };
  }

  // Check color palette match
  const matchedPalette = AESTHETIC_COLOR_PALETTES.find(p => p.id === clean || p.name.toLowerCase() === clean);
  if (matchedPalette) {
    const colorCombos: ReadyComboItem[] = matchedPalette.combos.map((combo, idx) => ({
      id: `color-${matchedPalette.id}-${idx}`,
      combo,
      vibe: 'soft',
      vibeName: matchedPalette.name,
      tags: [matchedPalette.id, 'color'],
    }));
    return {
      combos: colorCombos,
      emojis: matchedPalette.emojis.map(char => ({ char, vibeName: matchedPalette.name })),
      symbols: ['♡', '⋆', '✦', '✧'].map(char => ({ char, vibeName: matchedPalette.name })),
    };
  }

  // General tag / vibe / character search
  const matchedVibes = AESTHETIC_VIBES.filter(v =>
    v.id.includes(clean) ||
    v.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(clean) ||
    v.tags.some(t => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(clean))
  );

  const matchedVibeIds = new Set(matchedVibes.map(v => v.id));

  const filteredCombos = ALL_READY_COMBOS.filter(item =>
    matchedVibeIds.has(item.vibe) ||
    item.combo.includes(clean) ||
    item.tags.some(t => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(clean))
  );

  const matchedEmojis: { char: string; vibeName: string }[] = [];
  const matchedSymbols: { char: string; vibeName: string }[] = [];

  AESTHETIC_VIBES.forEach(vibe => {
    if (matchedVibeIds.has(vibe.id)) {
      vibe.emojis.forEach(e => matchedEmojis.push({ char: e, vibeName: vibe.name }));
      vibe.symbols.forEach(s => matchedSymbols.push({ char: s, vibeName: vibe.name }));
    } else {
      vibe.emojis.forEach(e => {
        if (e.includes(clean)) matchedEmojis.push({ char: e, vibeName: vibe.name });
      });
      vibe.symbols.forEach(s => {
        if (s.includes(clean)) matchedSymbols.push({ char: s, vibeName: vibe.name });
      });
    }
  });

  return {
    combos: filteredCombos,
    emojis: matchedEmojis.filter((val, idx, arr) => arr.findIndex(x => x.char === val.char) === idx),
    symbols: matchedSymbols.filter((val, idx, arr) => arr.findIndex(x => x.char === val.char) === idx),
  };
}
