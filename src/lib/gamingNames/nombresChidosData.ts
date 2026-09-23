export type ChidoVibe =
  | 'todos'
  | 'competitivo'
  | 'corto'
  | 'aesthetic'
  | 'epico'
  | 'oscuro'
  | 'gracioso';

export interface ChidoItem {
  id: string;
  name: string;
  vibe: ChidoVibe;
  prefix: string;
  suffix: string;
  tip?: string;
}

// 12 Curated starter identities matching user intent and article examples
export const STARTER_CHIDOS: ChidoItem[] = [
  {
    id: 'chido-1',
    name: 'NovaFuria',
    vibe: 'competitivo',
    prefix: 'Nova',
    suffix: 'Furia',
    tip: 'Potente · Impacto competitivo directo',
  },
  {
    id: 'chido-2',
    name: 'RayoVex',
    vibe: 'competitivo',
    prefix: 'Rayo',
    suffix: 'Vex',
    tip: 'Velocidad · Fácil de pronunciar en partidas',
  },
  {
    id: 'chido-3',
    name: 'TitanZero',
    vibe: 'competitivo',
    prefix: 'Titan',
    suffix: 'Zero',
    tip: 'Sólido · Gran presencia en el feed de bajas',
  },
  {
    id: 'chido-4',
    name: 'LunaNexa',
    vibe: 'aesthetic',
    prefix: 'Luna',
    suffix: 'Nexa',
    tip: 'Visual · Estética suave y armónica',
  },
  {
    id: 'chido-5',
    name: 'AuraNova',
    vibe: 'aesthetic',
    prefix: 'Aura',
    suffix: 'Nova',
    tip: 'Elegante · Resalta sin necesidad de símbolos',
  },
  {
    id: 'chido-6',
    name: 'FenixNova',
    vibe: 'epico',
    prefix: 'Fenix',
    suffix: 'Nova',
    tip: 'Legendario · Tono mitológico y renacimiento',
  },
  {
    id: 'chido-7',
    name: 'GuardianNox',
    vibe: 'epico',
    prefix: 'Guardian',
    suffix: 'Nox',
    tip: 'Imponente · Ideal para RPG o shooters tácticos',
  },
  {
    id: 'chido-8',
    name: 'SombraNox',
    vibe: 'oscuro',
    prefix: 'Sombra',
    suffix: 'Nox',
    tip: 'Misterioso · Identidad nocturna y sigilosa',
  },
  {
    id: 'chido-9',
    name: 'EclipseZero',
    vibe: 'oscuro',
    prefix: 'Eclipse',
    suffix: 'Zero',
    tip: 'Minimalista oscuro · Fácil de recordar',
  },
  {
    id: 'chido-10',
    name: 'CasiPro',
    vibe: 'gracioso',
    prefix: 'Casi',
    suffix: 'Pro',
    tip: 'Humor gamer · Desenlace divertido y memorable',
  },
  {
    id: 'chido-11',
    name: 'PanConLag',
    vibe: 'gracioso',
    prefix: 'PanCon',
    suffix: 'Lag',
    tip: 'Cómico · Identidad relajada para amigos',
  },
  {
    id: 'chido-12',
    name: 'KiroVex',
    vibe: 'corto',
    prefix: 'Kiro',
    suffix: 'Vex',
    tip: 'Compacto · Rápido de leer y escribir',
  },
];

// Rich vocabulary for prefixes by vibe
const PREFIXES_BY_VIBE: Record<ChidoVibe, string[]> = {
  todos: ['Nova', 'Rayo', 'Titan', 'Nexo', 'Luna', 'Aura', 'Fenix', 'Sombra', 'Kiro', 'Draco', 'Casi', 'Zero'],
  competitivo: ['Nova', 'Rayo', 'Titan', 'Nexo', 'Filo', 'Vortex', 'Draco', 'Pulso', 'Furia', 'Alpha', 'Clutch', 'Apex'],
  corto: ['Nox', 'Vex', 'Kiro', 'Zyn', 'Kael', 'Ryu', 'Nexo', 'Vanta', 'Zenix', 'Auron', 'Nyx', 'Lumi'],
  aesthetic: ['Luna', 'Aura', 'Bruma', 'Neo', 'Cielo', 'Vibe', 'Sol', 'Nube', 'Lila', 'Seda', 'Miel', 'Oasis'],
  epico: ['Fenix', 'Titan', 'Guardian', 'Reino', 'Dragon', 'Legado', 'Imperio', 'Eclipse', 'Corona', 'Cruzada', 'Valquiria', 'Mito'],
  oscuro: ['Sombra', 'Noche', 'Eclipse', 'Cuervo', 'Alma', 'Reino', 'Nox', 'Void', 'Espectro', 'Abismo', 'Ceniza', 'Veneno'],
  gracioso: ['Casi', 'PanCon', 'Sin', 'Modo', 'NoEra', 'Don', 'Ping', 'Ultima', 'Otro', 'Señor', 'Team', 'Lagarto'],
};

// Rich vocabulary for suffixes by vibe
const SUFFIXES_BY_VIBE: Record<ChidoVibe, string[]> = {
  todos: ['Furia', 'Vex', 'Zero', 'Rush', 'Nox', 'X', 'Nexa', 'Nova', 'Zen', 'Lunar', 'Pro', 'Lag'],
  competitivo: ['Furia', 'Vex', 'Zero', 'Rush', 'Nox', 'X', 'Strike', 'Core', 'Aim', 'Prime', 'Pro', 'Shot'],
  corto: ['', 'X', 'Z', '9', '7', 'K', 'V', 'R', 'O', 'S'],
  aesthetic: ['Nexa', 'Nova', 'Zen', 'Luna', 'Lila', 'Vanta', 'Brisa', 'Luz', 'Rose', 'Glow', 'Wave', 'Sky'],
  epico: ['Nova', 'Lunar', 'Nox', 'Solar', 'Vanta', 'Zen', 'Real', 'Fenix', 'Zero', 'Astra', 'Storm', 'Blade'],
  oscuro: ['Nox', 'Feral', 'Zero', 'Vanta', 'Umbrio', 'Eterno', 'Cero', 'Nocturna', 'Nexo', 'Void', 'Gloom', 'Shadow'],
  gracioso: ['Pro', 'Lag', 'Aim', 'Siesta', 'Yo', 'Respawn', 'Alto', 'Gano', 'Vida', 'Bot', 'Fail', 'Queso'],
};

// Component-level split: helper to isolate words
export function splitChidoName(name: string): { prefix: string; suffix: string } {
  // If camelCase or PascalCase (e.g. NovaFuria -> Nova, Furia)
  const matches = name.match(/^[A-Z][a-z0-9]*/);
  if (matches && matches[0] && matches[0].length < name.length) {
    const prefix = matches[0];
    const suffix = name.slice(prefix.length);
    return { prefix, suffix };
  }
  // If space separated
  const parts = name.split(/\s+/);
  if (parts.length >= 2) {
    return { prefix: parts[0], suffix: parts.slice(1).join(' ') };
  }
  return { prefix: name, suffix: '' };
}

// "Más como este" mutation: Generates 6 related variations around the concept
export function getMoreLikeThisChido(item: ChidoItem): ChidoItem[] {
  const { prefix, suffix } = splitChidoName(item.name);
  const results: ChidoItem[] = [];
  const vibe = item.vibe;
  const prefixes = PREFIXES_BY_VIBE[vibe] || PREFIXES_BY_VIBE.todos;
  const suffixes = SUFFIXES_BY_VIBE[vibe] || SUFFIXES_BY_VIBE.todos;

  // 1. Keep prefix, swap suffix (e.g. NovaFuria -> NovaRush, NovaZen, NovaVex)
  const newSuffixes = suffixes
    .filter(s => s && s.toLowerCase() !== suffix.toLowerCase())
    .slice(0, 3);

  for (const s of newSuffixes) {
    results.push({
      id: `more-pre-${Math.random().toString(36).substring(2, 7)}`,
      name: `${prefix}${s}`,
      vibe,
      prefix,
      suffix: s,
      tip: `Variante conservando "${prefix}"`,
    });
  }

  // 2. Keep suffix, swap prefix (e.g. NovaFuria -> RayoFuria, FuriaNova, NexoFuria)
  if (suffix) {
    // Inverted version
    results.push({
      id: `more-inv-${Math.random().toString(36).substring(2, 7)}`,
      name: `${suffix}${prefix}`,
      vibe,
      prefix: suffix,
      suffix: prefix,
      tip: `Inversión rítmica de palabras`,
    });

    const newPrefixes = prefixes
      .filter(p => p.toLowerCase() !== prefix.toLowerCase())
      .slice(0, 2);

    for (const p of newPrefixes) {
      results.push({
        id: `more-suf-${Math.random().toString(36).substring(2, 7)}`,
        name: `${p}${suffix}`,
        vibe,
        prefix: p,
        suffix,
        tip: `Variante conservando "${suffix}"`,
      });
    }
  } else {
    // Single word short name: expand with crisp endings
    const crispEndings = ['X', 'Zero', 'Rush', 'Zen'];
    for (const e of crispEndings) {
      results.push({
        id: `more-end-${Math.random().toString(36).substring(2, 7)}`,
        name: `${prefix}${e}`,
        vibe,
        prefix,
        suffix: e,
        tip: `Expansión táctica de "${prefix}"`,
      });
    }
  }

  return results.slice(0, 6);
}

// Keep one part explicitly: 'prefix' (keep first) or 'suffix' (keep second)
export function refineKeepPart(item: ChidoItem, keep: 'prefix' | 'suffix'): ChidoItem[] {
  const { prefix, suffix } = splitChidoName(item.name);
  const results: ChidoItem[] = [];
  const vibe = item.vibe;
  const prefixes = PREFIXES_BY_VIBE[vibe] || PREFIXES_BY_VIBE.todos;
  const suffixes = SUFFIXES_BY_VIBE[vibe] || SUFFIXES_BY_VIBE.todos;

  if (keep === 'prefix') {
    const freshSuffixes = [...suffixes]
      .filter(s => s && s.toLowerCase() !== suffix.toLowerCase())
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);

    for (const s of freshSuffixes) {
      results.push({
        id: `keep-pre-${Math.random().toString(36).substring(2, 8)}`,
        name: `${prefix}${s}`,
        vibe,
        prefix,
        suffix: s,
        tip: `Conservando la base "${prefix}"`,
      });
    }
  } else {
    const targetSuffix = suffix || prefix;
    const freshPrefixes = [...prefixes]
      .filter(p => p.toLowerCase() !== prefix.toLowerCase())
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);

    for (const p of freshPrefixes) {
      results.push({
        id: `keep-suf-${Math.random().toString(36).substring(2, 8)}`,
        name: `${p}${targetSuffix}`,
        vibe,
        prefix: p,
        suffix: targetSuffix,
        tip: `Conservando el cierre "${targetSuffix}"`,
      });
    }
  }

  return results;
}

// Batch generator
export function generateChidosBatch(
  vibe: ChidoVibe = 'todos',
  seedWord: string = '',
  count: number = 12
): ChidoItem[] {
  const results: ChidoItem[] = [];
  const cleanSeed = seedWord.trim();

  // If user provided a seed word (e.g. Nova, Lobo, Luna, Dragón)
  if (cleanSeed) {
    // Capitalize seed word nicely
    const formattedSeed =
      cleanSeed.charAt(0).toUpperCase() + cleanSeed.slice(1);

    const prefixes = vibe === 'todos' ? PREFIXES_BY_VIBE.todos : PREFIXES_BY_VIBE[vibe];
    const suffixes = vibe === 'todos' ? SUFFIXES_BY_VIBE.todos : SUFFIXES_BY_VIBE[vibe];

    // Half combinations with Seed as Prefix (e.g. [Seed]Furia, [Seed]Zero, [Seed]Rush)
    const shuffledSuffixes = [...suffixes]
      .filter(Boolean)
      .sort(() => 0.5 - Math.random());

    for (let i = 0; i < Math.min(6, shuffledSuffixes.length); i++) {
      const suf = shuffledSuffixes[i];
      results.push({
        id: `seed-pre-${i}-${Date.now()}`,
        name: `${formattedSeed}${suf}`,
        vibe,
        prefix: formattedSeed,
        suffix: suf,
        tip: `Fusión con base "${formattedSeed}"`,
      });
    }

    // Half combinations with Seed as Suffix (e.g. Titan[Seed], Nexo[Seed], Rayo[Seed])
    const shuffledPrefixes = [...prefixes]
      .filter(p => p.toLowerCase() !== cleanSeed.toLowerCase())
      .sort(() => 0.5 - Math.random());

    for (let i = 0; i < Math.min(6, shuffledPrefixes.length); i++) {
      const pre = shuffledPrefixes[i];
      results.push({
        id: `seed-suf-${i}-${Date.now()}`,
        name: `${pre}${formattedSeed}`,
        vibe,
        prefix: pre,
        suffix: formattedSeed,
        tip: `Fusión con cierre "${formattedSeed}"`,
      });
    }

    return results.slice(0, count);
  }

  // If no seed word, generate from curated vocabulary matching vibe
  const activePrefixes = vibe === 'todos' ? PREFIXES_BY_VIBE.todos : PREFIXES_BY_VIBE[vibe];
  const activeSuffixes = vibe === 'todos' ? SUFFIXES_BY_VIBE.todos : SUFFIXES_BY_VIBE[vibe];

  const shuffledPre = [...activePrefixes].sort(() => 0.5 - Math.random());
  const shuffledSuf = [...activeSuffixes].sort(() => 0.5 - Math.random());

  const used = new Set<string>();

  for (let i = 0; i < count * 2; i++) {
    const pre = shuffledPre[i % shuffledPre.length];
    const suf = shuffledSuf[(i * 3 + 1) % shuffledSuf.length];
    
    // For 'corto' vibe, sometimes single word, sometimes short combo
    const name = vibe === 'corto' && !suf ? pre : `${pre}${suf}`;

    if (used.has(name)) continue;
    used.add(name);

    results.push({
      id: `gen-${i}-${Date.now()}`,
      name,
      vibe,
      prefix: pre,
      suffix: suf,
      tip: `Estilo ${vibe} · Fácil de leer`,
    });

    if (results.length >= count) break;
  }

  return results.slice(0, count);
}
