export type ClanStyle =
  | 'todos'
  | 'competitivo'
  | 'epico'
  | 'oscuro'
  | 'futurista'
  | 'divertido'
  | 'corto'
  | 'original';

export interface ClanItem {
  id: string;
  name: string;
  style: ClanStyle;
  primaryTag: string;
  altTags: string[];
  description?: string;
}

// 12 curated starter clan identities (matching article examples)
export const STARTER_CLANES: ClanItem[] = [
  {
    id: 'clan-1',
    name: 'Legión Nova',
    style: 'epico',
    primaryTag: 'LNV',
    altTags: ['LNV', 'LGN', 'NVA'],
    description: 'Fuerza estelar organizada para dominar partidas.',
  },
  {
    id: 'clan-2',
    name: 'Código Alfa',
    style: 'competitivo',
    primaryTag: 'CDA',
    altTags: ['CDA', 'CAL', 'CAX'],
    description: 'Estrategia táctica y coordinación impecable.',
  },
  {
    id: 'clan-3',
    name: 'Lobos de Neón',
    style: 'original',
    primaryTag: 'LDN',
    altTags: ['LDN', 'LBN', 'NEO'],
    description: 'Agresividad nocturna con estilo cyberpunk.',
  },
  {
    id: 'clan-4',
    name: 'Orden Zenith',
    style: 'competitivo',
    primaryTag: 'OZN',
    altTags: ['OZN', 'ORD', 'ZNT'],
    description: 'Cima competitiva donde solo los mejores permanecen.',
  },
  {
    id: 'clan-5',
    name: 'Furia Polar',
    style: 'original',
    primaryTag: 'FPL',
    altTags: ['FPL', 'FUR', 'POL'],
    description: 'Impacto gélido y resistencia constante.',
  },
  {
    id: 'clan-6',
    name: 'Centinelas Zero',
    style: 'futurista',
    primaryTag: 'CZR',
    altTags: ['CZR', 'CEN', 'ZER'],
    description: 'Defensa impenetrable y contraataque quirúrgico.',
  },
  {
    id: 'clan-7',
    name: 'Eclipse Crew',
    style: 'oscuro',
    primaryTag: 'ECC',
    altTags: ['ECC', 'ECL', 'CRW'],
    description: 'Aparición silenciosa cuando cae la noche.',
  },
  {
    id: 'clan-8',
    name: 'Titanes X',
    style: 'epico',
    primaryTag: 'TTX',
    altTags: ['TTX', 'TIT', 'TNX'],
    description: 'Poder bruto y liderazgo colosal en el mapa.',
  },
  {
    id: 'clan-9',
    name: 'Nexo Salvaje',
    style: 'original',
    primaryTag: 'NXS',
    altTags: ['NXS', 'NEX', 'SLV'],
    description: 'Unión indomable y reflejos puros.',
  },
  {
    id: 'clan-10',
    name: 'Guardianes Nova',
    style: 'epico',
    primaryTag: 'GNV',
    altTags: ['GNV', 'GRD', 'NOV'],
    description: 'Protectores de la victoria con fuego astral.',
  },
  {
    id: 'clan-11',
    name: 'Vortex Elite',
    style: 'competitivo',
    primaryTag: 'VTX',
    altTags: ['VTX', 'VOR', 'ELT'],
    description: 'Torbellino competitivo sin margen para el error.',
  },
  {
    id: 'clan-12',
    name: 'Dominio Lunar',
    style: 'oscuro',
    primaryTag: 'DML',
    altTags: ['DML', 'DOM', 'LUN'],
    description: 'Control absoluto del campo de batalla nocturno.',
  },
];

// Rich vocabulary for generating clan identities
const PREFIXES_BY_STYLE: Record<ClanStyle, string[]> = {
  todos: ['Legión', 'Código', 'Orden', 'Vortex', 'Nexo', 'Titanes', 'Lobos', 'Furia', 'Centinelas', 'Dominio', 'Imperio', 'Escuadra'],
  competitivo: ['Código', 'Fuerza', 'Orden', 'Vortex', 'Dominio', 'Centinelas', 'Legión', 'Escuadra', 'Nexo', 'Comando', 'Sector', 'Alianza'],
  epico: ['Legión', 'Reyes', 'Guardianes', 'Titanes', 'Imperio', 'Hijos', 'Señores', 'Dinastía', 'Cruzada', 'Orden', 'Corona', 'Fénix'],
  oscuro: ['Orden', 'Legión', 'Eclipse', 'Sombra', 'Cuervos', 'Nexo', 'Centinelas', 'Espectros', 'Velo', 'Círculo', 'Hermandad', 'Abismo'],
  futurista: ['Centinelas', 'Código', 'Nexo', 'Vortex', 'Ciber', 'Protocolo', 'Matriz', 'Sector', 'Unidad', 'Núcleo', 'Sintéticos', 'Vector'],
  divertido: ['Los Sin', 'Ping', 'Casi', 'No Fue', 'Modo', 'Los', 'Team', 'Última', 'Sin', 'Respawn', 'Patrulla', 'Operación'],
  corto: ['Nova', 'Nexo', 'Vortex', 'Zenith', 'Eclipse', 'Furia', 'Titan', 'Sombra', 'Legión', 'Aurora', 'Apex', 'Karma'],
  original: ['Lobos', 'Código', 'Furia', 'Orden', 'Nexo', 'Aurora', 'Titanes', 'Centinelas', 'Legión', 'Vórtice', 'Clan', 'Pulso'],
};

const SUFFIXES_BY_STYLE: Record<ClanStyle, string[]> = {
  todos: ['Nova', 'Alfa', 'de Neón', 'Zenith', 'Polar', 'Zero', 'Crew', 'X', 'Salvaje', 'Elite', 'Lunar', 'Prime'],
  competitivo: ['Alfa', 'Zenith', 'Elite', 'Delta', 'Prime', 'Vanta', 'Alpha', 'Pro', 'Apex', 'Strike', 'Optic', 'Core'],
  epico: ['Nova', 'del Fénix', 'del Norte', 'de Ceniza', 'del Trueno', 'del Caos', 'Astral', 'del Vacío', 'Supremo', 'Eterno', 'Solar', 'Imperial'],
  oscuro: ['Nox', 'Umbra', 'Negro', 'Void', 'Vanta', 'del Vacío', 'Oscuro', 'Nocturno', 'Eclipse', 'Gótico', 'Sombra', 'Mórbido'],
  futurista: ['Zero', 'Neón', 'Cyber', 'Matrix', 'Volt', 'Nova', 'Pulse', 'Syn', 'Glitch', 'Nexus', 'Quantum', 'Byte'],
  divertido: ['Plan', 'Alto', 'Pro', 'Lag', 'Siesta', 'Despistados', 'Improviso', 'Ronda', 'Estrategia', 'Club', 'Pancake', 'Tacos'],
  corto: ['X', 'Z', 'Prime', 'Pro', 'V', 'K', 'Neo', 'One', 'Max', 'Plus', 'Air', 'Red'],
  original: ['de Neón', 'Lunar', 'Polar', 'Prisma', 'Salvaje', 'Vanta', 'Zero', 'Solar', 'Naranja', 'Violeta', 'Aqua', 'Esmeralda'],
};

// Smart TAG generator: creates 3 distinct, sensible acronyms/abbreviations for any clan name
export function generateClanTags(name: string): string[] {
  // Normalize string (remove accents, punctuation)
  const clean = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .replace(/[^A-Z0-9\s]/g, '')
    .trim();

  const words = clean.split(/\s+/).filter(w => !['DE', 'DEL', 'LOS', 'LAS', 'EL', 'LA'].includes(w));
  const fullWords = clean.split(/\s+/);
  const tags = new Set<string>();

  if (words.length >= 3) {
    // 3 or more significant words: First letters
    tags.add((words[0][0] + words[1][0] + words[2][0]).slice(0, 3));
    // First 2 letters of word 1 + first of word 2
    if (words[0].length >= 2) tags.add((words[0].slice(0, 2) + words[1][0]).slice(0, 3));
    // First letter of word 1 + first 2 of word 2
    if (words[1].length >= 2) tags.add((words[0][0] + words[1].slice(0, 2)).slice(0, 3));
  } else if (words.length === 2) {
    const w1 = words[0];
    const w2 = words[1];
    // Option A: 1st letter of w1 + first 2 of w2 (e.g., L + NV = LNV)
    tags.add(w1[0] + (w2.slice(0, 2)));
    // Option B: Consonants of w1 or first 3 letters of w1 (e.g., LGN)
    const w1Consonants = w1.replace(/[AEIOU]/g, '');
    if (w1Consonants.length >= 3) {
      tags.add(w1Consonants.slice(0, 3));
    } else {
      tags.add(w1.slice(0, 3));
    }
    // Option C: First 3 letters of w2 or consonants of w2 (e.g., NVA)
    if (w2.length >= 3) {
      tags.add(w2.slice(0, 3));
    } else {
      tags.add(w1.slice(0, 2) + w2[0]);
    }
    // Fallback: 2 letters of w1 + 1 letter of w2
    tags.add(w1.slice(0, 2) + w2[0]);
  } else if (words.length === 1) {
    const w = words[0];
    // Consonants only
    const consonants = w.replace(/[AEIOU]/g, '');
    if (consonants.length >= 3) {
      tags.add(consonants.slice(0, 3));
    }
    // First 3 chars
    tags.add(w.slice(0, 3));
    // First letter + last 2 letters or letters 1, 3, last
    if (w.length >= 4) {
      tags.add(w[0] + w[Math.floor(w.length / 2)] + w[w.length - 1]);
    }
  }

  // Ensure every tag is 3-4 chars and uppercase
  const candidateList = Array.from(tags)
    .map(t => t.padEnd(3, 'X').slice(0, 4))
    .filter((t, idx, arr) => arr.indexOf(t) === idx);

  // Guarantee exactly 3 options
  while (candidateList.length < 3) {
    const base = candidateList[0] || 'CLN';
    candidateList.push(base.slice(0, 2) + String.fromCharCode(65 + candidateList.length));
  }

  return candidateList.slice(0, 3);
}

// "Más como este" mutation logic: preserves one word/concept and swaps the other
export function getMoreLikeThisClan(item: ClanItem): ClanItem[] {
  const words = item.name.split(' ');
  const relatedList: ClanItem[] = [];

  const styleList = PREFIXES_BY_STYLE[item.style] || PREFIXES_BY_STYLE.todos;
  const suffixList = SUFFIXES_BY_STYLE[item.style] || SUFFIXES_BY_STYLE.todos;

  if (words.length >= 2) {
    const firstWord = words[0];
    const rest = words.slice(1).join(' ');

    // 1. Keep first word, change second
    const newSuffixes = suffixList.filter(s => !s.toLowerCase().includes(rest.toLowerCase())).slice(0, 3);
    for (const suf of newSuffixes) {
      const newName = `${firstWord} ${suf}`;
      const altTags = generateClanTags(newName);
      relatedList.push({
        id: `rel-${Math.random().toString(36).substring(2, 8)}`,
        name: newName,
        style: item.style,
        primaryTag: altTags[0],
        altTags,
        description: `Variante conservando '${firstWord}'`,
      });
    }

    // 2. Keep second word, change prefix
    const newPrefixes = styleList.filter(p => !p.toLowerCase().includes(firstWord.toLowerCase())).slice(0, 3);
    for (const pre of newPrefixes) {
      const newName = `${pre} ${rest}`;
      const altTags = generateClanTags(newName);
      relatedList.push({
        id: `rel-${Math.random().toString(36).substring(2, 8)}`,
        name: newName,
        style: item.style,
        primaryTag: altTags[0],
        altTags,
        description: `Variante conservando '${rest}'`,
      });
    }
  } else {
    // Single word name: add strong prefixes or suffixes
    const partnerPrefixes = ['Legión', 'Orden', 'Dominio', 'Vortex'];
    for (const pre of partnerPrefixes) {
      const newName = `${pre} ${item.name}`;
      const altTags = generateClanTags(newName);
      relatedList.push({
        id: `rel-${Math.random().toString(36).substring(2, 8)}`,
        name: newName,
        style: item.style,
        primaryTag: altTags[0],
        altTags,
        description: `Expansión con '${pre}'`,
      });
    }
  }

  return relatedList.slice(0, 6);
}

// Batch generator
export function generateClanBatch(
  style: ClanStyle = 'todos',
  seedConcept: string = '',
  count: number = 12
): ClanItem[] {
  const results: ClanItem[] = [];
  const cleanSeed = seedConcept.trim();

  // If user entered a seed concept, intelligently build names around it
  if (cleanSeed) {
    const prefixes = style === 'todos' ? PREFIXES_BY_STYLE.todos : PREFIXES_BY_STYLE[style];
    const suffixes = style === 'todos' ? SUFFIXES_BY_STYLE.todos : SUFFIXES_BY_STYLE[style];

    // Seed as Suffix (e.g. Legión [Seed], Orden [Seed])
    const shuffledPrefixes = [...prefixes].sort(() => 0.5 - Math.random());
    for (let i = 0; i < Math.min(6, shuffledPrefixes.length); i++) {
      const name = `${shuffledPrefixes[i]} ${cleanSeed}`;
      const tags = generateClanTags(name);
      results.push({
        id: `seed-pre-${i}-${Date.now()}`,
        name,
        style,
        primaryTag: tags[0],
        altTags: tags,
        description: `Identidad basada en '${cleanSeed}'`,
      });
    }

    // Seed as Prefix (e.g. [Seed] Elite, [Seed] Nova)
    const shuffledSuffixes = [...suffixes].sort(() => 0.5 - Math.random());
    for (let i = 0; i < Math.min(6, shuffledSuffixes.length); i++) {
      const name = `${cleanSeed} ${shuffledSuffixes[i]}`;
      const tags = generateClanTags(name);
      results.push({
        id: `seed-suf-${i}-${Date.now()}`,
        name,
        style,
        primaryTag: tags[0],
        altTags: tags,
        description: `Variante con '${cleanSeed}'`,
      });
    }

    return results.slice(0, count);
  }

  // If no seed concept, generate from curated vocabulary matching style
  const activePrefixes = style === 'todos' ? PREFIXES_BY_STYLE.todos : PREFIXES_BY_STYLE[style];
  const activeSuffixes = style === 'todos' ? SUFFIXES_BY_STYLE.todos : SUFFIXES_BY_STYLE[style];

  const shuffledPre = [...activePrefixes].sort(() => 0.5 - Math.random());
  const shuffledSuf = [...activeSuffixes].sort(() => 0.5 - Math.random());

  const used = new Set<string>();

  for (let i = 0; i < count; i++) {
    const pre = shuffledPre[i % shuffledPre.length];
    const suf = shuffledSuf[(i * 3 + 1) % shuffledSuf.length];
    const name = style === 'corto' && Math.random() > 0.5 ? pre : `${pre} ${suf}`;

    if (used.has(name)) continue;
    used.add(name);

    const tags = generateClanTags(name);
    results.push({
      id: `gen-${i}-${Date.now()}`,
      name,
      style,
      primaryTag: tags[0],
      altTags: tags,
      description: `Identidad estilo ${style}`,
    });
  }

  return results;
}
