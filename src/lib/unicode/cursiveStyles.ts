import type { CursiveCategoryId, CursiveStyle } from "./cursiveTypes";
import {
  composeTransforms,
  createCombiningTransform,
  createFrameTransform,
  createInterleaveTransform,
  createMappingTransform,
  createSafeTransform,
  createSpacingTransform,
  createWrapperTransform,
  type CharMap,
} from "./transforms";
import {
  boldItalicSerif,
  boldScript,
  italicSerif,
  script,
  smallCaps,
} from "./mappings/alphabets";

type StyleDef = Omit<CursiveStyle, "transform"> & {
  transform: CursiveStyle["transform"];
};

function style(def: StyleDef): CursiveStyle {
  return {
    ...def,
    transform: createSafeTransform(def.transform),
  };
}

const mapScript = createMappingTransform(script);
const mapBoldScript = createMappingTransform(boldScript);
const mapItalic = createMappingTransform(italicSerif);
const mapBoldItalic = createMappingTransform(boldItalicSerif);
const mapSmallCaps = createMappingTransform(smallCaps);

/** Alternate between two script mappings (deterministic). */
function createMixedTransform(a: CharMap, b: CharMap): (text: string) => string {
  return createSafeTransform((text) => {
    let i = 0;
    return text.replace(/\S/gu, (ch) => {
      const m = i % 2 === 0 ? a : b;
      i += 1;
      return m[ch] ?? ch;
    });
  });
}

type Ornament = {
  key: string;
  label: string;
  left: string;
  right: string;
  tags: string[];
};

const ORNAMENTS: Ornament[] = [
  { key: "stars", label: "Estrellas", left: "★", right: "★", tags: ["estrella"] },
  { key: "stars-soft", label: "Estrellas Suaves", left: "☆", right: "☆", tags: ["estrella"] },
  { key: "sparkle", label: "Destellos", left: "✦", right: "✦", tags: ["destello", "brillo"] },
  { key: "sparkle-soft", label: "Destellos Suaves", left: "✧", right: "✧", tags: ["destello"] },
  { key: "sparkles", label: "Brillos", left: "✨", right: "✨", tags: ["brillo"] },
  { key: "heart", label: "Corazones", left: "♥", right: "♥", tags: ["corazon", "romantica"] },
  { key: "heart-soft", label: "Corazones Suaves", left: "♡", right: "♡", tags: ["corazon", "romantica"] },
  { key: "heart-mini", label: "Mini Corazones", left: "ღ", right: "ღ", tags: ["corazon", "romantica"] },
  { key: "flower", label: "Flores", left: "❀", right: "❀", tags: ["flor", "romantica"] },
  { key: "blossom", label: "Pétalos", left: "❁", right: "❁", tags: ["flor"] },
  { key: "ornament", label: "Ornamento", left: "❦", right: "❦", tags: ["elegante", "vintage"] },
  { key: "flourish", label: "Adorno", left: "❧", right: "❧", tags: ["elegante"] },
  { key: "javanese", label: "Marco Ornamental", left: "꧁", right: "꧂", tags: ["marco", "caligrafica"] },
  { key: "tibetan", label: "Marco Clásico", left: "༺", right: "༻", tags: ["marco", "vintage"] },
  { key: "corner", label: "Esquinas", left: "「", right: "」", tags: ["corchete", "aesthetic"] },
  { key: "corner-white", label: "Esquinas Blancas", left: "『", right: "』", tags: ["corchete"] },
  { key: "lenticular", label: "Lenticulares", left: "【", right: "】", tags: ["corchete"] },
  { key: "double-angle", label: "Ángulos", left: "《", right: "》", tags: ["corchete"] },
  { key: "angle", label: "Ángulos Finos", left: "〈", right: "〉", tags: ["corchete"] },
  { key: "white-lenticular", label: "Lenticulares Blancos", left: "〘", right: "〙", tags: ["corchete"] },
  { key: "diamond", label: "Diamantes", left: "◆", right: "◆", tags: ["diamante"] },
  { key: "diamond-soft", label: "Diamantes Suaves", left: "◇", right: "◇", tags: ["diamante"] },
  { key: "dot", label: "Puntos", left: "·", right: "·", tags: ["punto", "minimal"] },
  { key: "soft-dot", label: "Puntos Soft", left: "˚", right: "˚", tags: ["punto", "aesthetic"] },
  { key: "aesthetic", label: "Aesthetic Soft", left: "·˚", right: "˚·", tags: ["aesthetic"] },
  { key: "dreamy", label: "Soñador", left: "✧˖°", right: "°˖✧", tags: ["aesthetic", "soñador"] },
  { key: "moon", label: "Luna", left: "☾", right: "☽", tags: ["luna", "aesthetic"] },
  { key: "arrow", label: "Flechas", left: "⟵", right: "⟶", tags: ["flecha"] },
  { key: "line", label: "Líneas", left: "━", right: "━", tags: ["linea"] },
  { key: "tilde", label: "Tildes", left: "~", right: "~", tags: ["tilde", "aesthetic"] },
  { key: "quotes", label: "Comillas", left: "❝", right: "❞", tags: ["elegante", "vintage"] },
  { key: "star-mini", label: "Estrellitas", left: "⋆", right: "⋆", tags: ["estrella", "aesthetic"] },
  { key: "heart-emoji", label: "Corazón Emoji", left: "💕", right: "💕", tags: ["corazon", "romantica"] },
  { key: "ribbon", label: "Lazo", left: "🎀", right: "🎀", tags: ["romantica"] },
  { key: "crown", label: "Corona", left: "♛", right: "♛", tags: ["lujo", "gaming"] },
  { key: "fire", label: "Fuego", left: "🔥", right: "🔥", tags: ["gaming"] },
  { key: "clan", label: "Clan", left: "〈〈", right: "〉〉", tags: ["gaming", "nick"] },
  { key: "cyber", label: "Ciber", left: "⟨/", right: "/⟩", tags: ["gaming", "tech"] },
  { key: "bio", label: "Bio", left: "✦ ", right: " ✦", tags: ["instagram", "bio", "social"] },
  { key: "status", label: "Estado", left: "˚₊· ", right: " ·₊˚", tags: ["social", "status"] },
];

type BaseDef = {
  key: string;
  name: string;
  category: CursiveStyle["category"];
  tags: string[];
  popularity: number;
  transform: (text: string) => string;
  supportsNumbers?: boolean;
};

function buildCoreStyles(): CursiveStyle[] {
  const bases: BaseDef[] = [
    {
      key: "mathematical-script",
      name: "Cursiva Matemática",
      category: "script",
      tags: ["cursiva", "script", "matematica"],
      popularity: 100,
      transform: mapScript,
    },
    {
      key: "bold-script",
      name: "Cursiva Negrita",
      category: "script",
      tags: ["cursiva", "negrita", "script"],
      popularity: 98,
      transform: mapBoldScript,
    },
    {
      key: "light-script",
      name: "Cursiva Fina",
      category: "script",
      tags: ["cursiva", "fina", "ligera"],
      popularity: 94,
      transform: mapItalic,
      supportsNumbers: false,
    },
    {
      key: "bold-light-script",
      name: "Cursiva Negrita Fina",
      category: "script",
      tags: ["cursiva", "negrita", "fina"],
      popularity: 90,
      transform: mapBoldItalic,
      supportsNumbers: false,
    },
    {
      key: "classic-script",
      name: "Cursiva Clásica",
      category: "script",
      tags: ["cursiva", "clasica"],
      popularity: 92,
      transform: composeTransforms(mapScript, createFrameTransform("‹", "›")),
    },
    {
      key: "formal-script",
      name: "Cursiva Formal",
      category: "elegant",
      tags: ["cursiva", "formal", "elegante"],
      popularity: 88,
      transform: composeTransforms(mapBoldScript, createFrameTransform("«", "»")),
    },
    {
      key: "elegant-script",
      name: "Cursiva Elegante",
      category: "elegant",
      tags: ["cursiva", "elegante"],
      popularity: 96,
      transform: composeTransforms(mapScript, createWrapperTransform("✦", "✦")),
    },
    {
      key: "decorative-script",
      name: "Cursiva Decorativa",
      category: "decorative",
      tags: ["cursiva", "decorativa"],
      popularity: 91,
      transform: composeTransforms(mapScript, createFrameTransform("꧁", "꧂")),
    },
    {
      key: "calligraphy",
      name: "Caligráfica",
      category: "calligraphy",
      tags: ["caligrafica", "cursiva"],
      popularity: 95,
      transform: composeTransforms(mapBoldScript, createWrapperTransform("❧", "❧")),
    },
    {
      key: "bold-calligraphy",
      name: "Caligráfica Negrita",
      category: "calligraphy",
      tags: ["caligrafica", "negrita"],
      popularity: 89,
      transform: composeTransforms(mapBoldScript, createFrameTransform("༺", "༻")),
    },
    {
      key: "soft-calligraphy",
      name: "Caligrafía Suave",
      category: "calligraphy",
      tags: ["caligrafica", "suave"],
      popularity: 86,
      transform: composeTransforms(mapItalic, createWrapperTransform("˚", "˚")),
    },
    {
      key: "luxury-calligraphy",
      name: "Caligrafía de Lujo",
      category: "calligraphy",
      tags: ["caligrafica", "lujo", "elegante"],
      popularity: 87,
      transform: composeTransforms(mapBoldScript, createWrapperTransform("♛", "♛")),
    },
    {
      key: "modern-calligraphy",
      name: "Caligrafía Moderna",
      category: "calligraphy",
      tags: ["caligrafica", "moderna"],
      popularity: 84,
      transform: composeTransforms(mapBoldItalic, createFrameTransform("「", "」")),
    },
    {
      key: "artistic-calligraphy",
      name: "Caligrafía Artística",
      category: "calligraphy",
      tags: ["caligrafica", "artistica"],
      popularity: 82,
      transform: composeTransforms(mapScript, createWrapperTransform("❁", "❁")),
    },
    {
      key: "handwritten",
      name: "Manuscrita",
      category: "handwritten",
      tags: ["manuscrita", "escritura"],
      popularity: 93,
      transform: composeTransforms(mapItalic, createFrameTransform("˗", "˗")),
      supportsNumbers: false,
    },
    {
      key: "flowing-handwriting",
      name: "Manuscrita Fluida",
      category: "handwritten",
      tags: ["manuscrita", "fluida"],
      popularity: 85,
      transform: composeTransforms(mapItalic, createSpacingTransform(" ")),
      supportsNumbers: false,
    },
    {
      key: "signature-style",
      name: "Estilo Firma",
      category: "handwritten",
      tags: ["firma", "manuscrita"],
      popularity: 88,
      transform: composeTransforms(mapScript, createCombiningTransform(["\u0332"])),
    },
    {
      key: "casual-handwriting",
      name: "Manuscrita Casual",
      category: "handwritten",
      tags: ["manuscrita", "casual"],
      popularity: 80,
      transform: composeTransforms(mapItalic, createWrapperTransform("·", "·")),
      supportsNumbers: false,
    },
    {
      key: "personal-handwriting",
      name: "Manuscrita Personal",
      category: "handwritten",
      tags: ["manuscrita", "personal"],
      popularity: 78,
      transform: createMixedTransform(script, italicSerif),
    },
    {
      key: "mixed-script-bold",
      name: "Cursiva Mixta",
      category: "special",
      tags: ["mixto", "cursiva", "especial"],
      popularity: 76,
      transform: createMixedTransform(script, boldScript),
    },
  ];

  return bases.map((b) =>
    style({
      id: `cursive-${b.key}`,
      name: b.name,
      category: b.category,
      tags: b.tags,
      popularity: b.popularity,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: b.supportsNumbers ?? true,
      supportsAccents: true,
      transform: b.transform,
    }),
  );
}

function buildCombiningVariants(): CursiveStyle[] {
  const marks: Array<{
    id: string;
    name: string;
    category: CursiveStyle["category"];
    marks: string[];
    tags: string[];
    popularity: number;
    base: (t: string) => string;
  }> = [
    {
      id: "script-underline",
      name: "Cursiva Subrayada",
      category: "script",
      marks: ["\u0332"],
      tags: ["subrayado", "cursiva"],
      popularity: 83,
      base: mapScript,
    },
    {
      id: "script-double-underline",
      name: "Cursiva Doble Subrayado",
      category: "decorative",
      marks: ["\u0333"],
      tags: ["subrayado", "cursiva"],
      popularity: 72,
      base: mapScript,
    },
    {
      id: "script-wavy",
      name: "Cursiva Ondulada",
      category: "decorative",
      marks: ["\u0330"],
      tags: ["onda", "cursiva"],
      popularity: 74,
      base: mapScript,
    },
    {
      id: "script-overline",
      name: "Cursiva Sobrerayada",
      category: "decorative",
      marks: ["\u0305"],
      tags: ["sobrerayado", "cursiva"],
      popularity: 68,
      base: mapScript,
    },
    {
      id: "script-strike",
      name: "Cursiva Tachada",
      category: "special",
      marks: ["\u0336"],
      tags: ["tachado", "cursiva"],
      popularity: 65,
      base: mapScript,
    },
    {
      id: "bold-script-underline",
      name: "Cursiva Negrita Subrayada",
      category: "script",
      marks: ["\u0332"],
      tags: ["subrayado", "negrita"],
      popularity: 79,
      base: mapBoldScript,
    },
    {
      id: "bold-script-wavy",
      name: "Cursiva Negrita Ondulada",
      category: "decorative",
      marks: ["\u0330"],
      tags: ["onda", "negrita"],
      popularity: 70,
      base: mapBoldScript,
    },
    {
      id: "italic-underline",
      name: "Manuscrita Subrayada",
      category: "handwritten",
      marks: ["\u0332"],
      tags: ["manuscrita", "subrayado"],
      popularity: 77,
      base: mapItalic,
    },
    {
      id: "italic-dot-below",
      name: "Manuscrita con Puntos",
      category: "handwritten",
      marks: ["\u0323"],
      tags: ["manuscrita", "punto"],
      popularity: 64,
      base: mapItalic,
    },
    {
      id: "script-low-line",
      name: "Cursiva Línea Baja",
      category: "script",
      marks: ["\u0331"],
      tags: ["subrayado", "cursiva"],
      popularity: 66,
      base: mapScript,
    },
    {
      id: "script-double-overline",
      name: "Cursiva Doble Sobrerayado",
      category: "special",
      marks: ["\u033f"],
      tags: ["sobrerayado"],
      popularity: 58,
      base: mapScript,
    },
    {
      id: "script-slash-strike",
      name: "Cursiva Tachado Diagonal",
      category: "special",
      marks: ["\u0338"],
      tags: ["tachado"],
      popularity: 56,
      base: mapScript,
    },
    {
      id: "calligraphy-underline",
      name: "Caligráfica Subrayada",
      category: "calligraphy",
      marks: ["\u0332"],
      tags: ["caligrafica", "subrayado"],
      popularity: 75,
      base: mapBoldScript,
    },
    {
      id: "script-diaeresis",
      name: "Cursiva con Diéresis",
      category: "special",
      marks: ["\u0308"],
      tags: ["especial", "acento"],
      popularity: 54,
      base: mapScript,
    },
  ];

  return marks.map((m) =>
    style({
      id: `cursive-${m.id}`,
      name: m.name,
      category: m.category,
      tags: m.tags,
      popularity: m.popularity,
      compatibility: "medium",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      combining: true,
      transform: composeTransforms(m.base, createCombiningTransform(m.marks)),
    }),
  );
}

function buildSpacingVariants(): CursiveStyle[] {
  return [
    style({
      id: "cursive-spaced",
      name: "Cursiva Espaciada",
      category: "aesthetic",
      tags: ["espacio", "aesthetic", "cursiva"],
      popularity: 81,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: composeTransforms(mapScript, createSpacingTransform(" ")),
    }),
    style({
      id: "cursive-wide",
      name: "Cursiva Ancha",
      category: "aesthetic",
      tags: ["espacio", "ancha", "cursiva"],
      popularity: 73,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: composeTransforms(mapScript, createSpacingTransform("  ")),
    }),
    style({
      id: "cursive-dot-spaced",
      name: "Cursiva con Puntos",
      category: "decorative",
      tags: ["punto", "cursiva"],
      popularity: 71,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: composeTransforms(mapScript, createInterleaveTransform("·")),
    }),
    style({
      id: "cursive-heart-sep",
      name: "Cursiva Separador Corazón",
      category: "romantic",
      tags: ["corazon", "romantica", "separador"],
      popularity: 78,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createInterleaveTransform(" ♡ ")),
    }),
    style({
      id: "cursive-star-sep",
      name: "Cursiva Separador Estrella",
      category: "decorative",
      tags: ["estrella", "separador"],
      popularity: 69,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createInterleaveTransform(" ★ ")),
    }),
    style({
      id: "cursive-bold-spaced",
      name: "Cursiva Negrita Espaciada",
      category: "aesthetic",
      tags: ["espacio", "negrita"],
      popularity: 76,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: composeTransforms(mapBoldScript, createSpacingTransform(" ")),
    }),
  ];
}

/** Curated ornament × base combinations — not a full cartesian product. */
function buildOrnamentCombos(): CursiveStyle[] {
  type Combo = {
    baseKey: string;
    baseName: string;
    base: (t: string) => string;
    category: CursiveStyle["category"];
    ornamentKeys: string[];
    popularityStart: number;
  };

  const combos: Combo[] = [
    {
      baseKey: "script",
      baseName: "Cursiva",
      base: mapScript,
      category: "decorative",
      ornamentKeys: [
        "stars", "stars-soft", "sparkle", "sparkle-soft", "sparkles",
        "heart", "heart-soft", "heart-mini", "flower", "blossom",
        "ornament", "flourish", "javanese", "tibetan", "corner",
        "corner-white", "lenticular", "diamond", "dot", "soft-dot",
        "aesthetic", "dreamy", "moon", "arrow", "line", "quotes",
        "star-mini", "heart-emoji", "ribbon",
      ],
      popularityStart: 88,
    },
    {
      baseKey: "bold",
      baseName: "Cursiva Negrita",
      base: mapBoldScript,
      category: "elegant",
      ornamentKeys: [
        "sparkle", "ornament", "javanese", "tibetan", "quotes",
        "crown", "lenticular", "diamond", "flourish", "corner",
      ],
      popularityStart: 84,
    },
    {
      baseKey: "italic",
      baseName: "Manuscrita",
      base: mapItalic,
      category: "handwritten",
      ornamentKeys: [
        "soft-dot", "heart-soft", "flower", "aesthetic", "tilde",
        "dreamy", "star-mini", "dot",
      ],
      popularityStart: 80,
    },
    {
      baseKey: "calli",
      baseName: "Caligráfica",
      base: mapBoldScript,
      category: "calligraphy",
      ornamentKeys: [
        "javanese", "tibetan", "ornament", "flourish", "quotes",
        "double-angle", "angle", "white-lenticular",
      ],
      popularityStart: 82,
    },
  ];

  const ornamentMap = new Map(ORNAMENTS.map((o) => [o.key, o]));
  const out: CursiveStyle[] = [];

  for (const combo of combos) {
    let pop = combo.popularityStart;
    for (const key of combo.ornamentKeys) {
      const orn = ornamentMap.get(key);
      if (!orn) continue;

      let category = combo.category;
      if (orn.tags.includes("romantica")) category = "romantic";
      else if (orn.tags.includes("aesthetic")) category = "aesthetic";
      else if (orn.tags.includes("vintage") || orn.tags.includes("elegante")) {
        if (combo.baseKey === "bold" || combo.baseKey === "calli") category = "elegant";
        else if (key === "tibetan" || key === "quotes" || key === "ornament") category = "vintage";
      } else if (orn.tags.includes("gaming")) category = "gaming";
      else if (orn.tags.includes("social") || orn.tags.includes("instagram")) category = "social";

      out.push(
        style({
          id: `cursive-${combo.baseKey}-${orn.key}`,
          name: `${combo.baseName} ${orn.label}`,
          category,
          tags: ["cursiva", ...orn.tags],
          popularity: pop,
          compatibility: "high",
          supportsLatin: true,
          supportsNumbers: true,
          supportsAccents: true,
          decorative: true,
          transform: composeTransforms(combo.base, createFrameTransform(orn.left, orn.right)),
        }),
      );
      pop = Math.max(45, pop - 1);
    }
  }

  return out;
}

function buildThemedStyles(): CursiveStyle[] {
  return [
    style({
      id: "cursive-romantic",
      name: "Cursiva Romántica",
      category: "romantic",
      tags: ["romantica", "corazon", "cursiva"],
      popularity: 90,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createWrapperTransform("♡", "♡")),
    }),
    style({
      id: "cursive-romantic-bold",
      name: "Cursiva Romántica Negrita",
      category: "romantic",
      tags: ["romantica", "negrita"],
      popularity: 85,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapBoldScript, createWrapperTransform("♥", "♥")),
    }),
    style({
      id: "cursive-luxury",
      name: "Cursiva de Lujo",
      category: "elegant",
      tags: ["lujo", "elegante", "cursiva"],
      popularity: 87,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapBoldScript, createFrameTransform("✦ ", " ✦")),
    }),
    style({
      id: "cursive-premium",
      name: "Cursiva Premium",
      category: "elegant",
      tags: ["premium", "elegante"],
      popularity: 84,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createFrameTransform("꧁༺ ", " ༻꧂")),
    }),
    style({
      id: "cursive-vintage",
      name: "Cursiva Vintage",
      category: "vintage",
      tags: ["vintage", "clasica", "cursiva"],
      popularity: 83,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createWrapperTransform("❦", "❦")),
    }),
    style({
      id: "cursive-retro",
      name: "Cursiva Retro",
      category: "vintage",
      tags: ["retro", "vintage"],
      popularity: 74,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapBoldScript, createFrameTransform("❖ ", " ❖")),
    }),
    style({
      id: "cursive-old-style",
      name: "Cursiva Antigua",
      category: "vintage",
      tags: ["vintage", "antigua"],
      popularity: 71,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createFrameTransform("༺✧", "✧༻")),
    }),
    style({
      id: "cursive-aesthetic",
      name: "Cursiva Aesthetic",
      category: "aesthetic",
      tags: ["aesthetic", "cursiva"],
      popularity: 92,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createWrapperTransform("·˚", "˚·")),
    }),
    style({
      id: "cursive-soft-aesthetic",
      name: "Cursiva Soft Aesthetic",
      category: "aesthetic",
      tags: ["aesthetic", "suave"],
      popularity: 88,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapItalic, createWrapperTransform("✧˖°", "°˖✧")),
    }),
    style({
      id: "cursive-minimal-aesthetic",
      name: "Cursiva Minimal",
      category: "aesthetic",
      tags: ["aesthetic", "minimal"],
      popularity: 82,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: composeTransforms(mapScript, createWrapperTransform("·", "·")),
    }),
    style({
      id: "cursive-dreamy",
      name: "Cursiva Soñadora",
      category: "aesthetic",
      tags: ["aesthetic", "soñador"],
      popularity: 86,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createFrameTransform("⋆｡˚", "˚｡⋆")),
    }),
    style({
      id: "cursive-clean",
      name: "Cursiva Limpia",
      category: "aesthetic",
      tags: ["aesthetic", "limpia"],
      popularity: 79,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: composeTransforms(mapScript, createFrameTransform(" ", " ")),
    }),
    style({
      id: "cursive-instagram",
      name: "Cursiva Instagram",
      category: "social",
      tags: ["instagram", "social", "bio"],
      popularity: 94,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createWrapperTransform("✨", "✨")),
    }),
    style({
      id: "cursive-bio",
      name: "Cursiva para Bio",
      category: "social",
      tags: ["bio", "perfil", "social"],
      popularity: 91,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapBoldScript, createFrameTransform("✦ ", " ✦")),
    }),
    style({
      id: "cursive-caption",
      name: "Cursiva para Caption",
      category: "social",
      tags: ["caption", "social"],
      popularity: 84,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createWrapperTransform("˚₊·", "·₊˚")),
    }),
    style({
      id: "cursive-username",
      name: "Cursiva Usuario",
      category: "social",
      tags: ["usuario", "nick", "social"],
      popularity: 80,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapBoldScript, createFrameTransform("『", "』")),
    }),
    style({
      id: "cursive-nickname",
      name: "Cursiva Apodo",
      category: "social",
      tags: ["apodo", "nick"],
      popularity: 77,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createFrameTransform("「", "」")),
    }),
    style({
      id: "cursive-profile",
      name: "Cursiva Perfil",
      category: "social",
      tags: ["perfil", "social"],
      popularity: 83,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createWrapperTransform("♡", "♡")),
    }),
    style({
      id: "cursive-status",
      name: "Cursiva Estado",
      category: "social",
      tags: ["status", "social"],
      popularity: 75,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapItalic, createWrapperTransform("·", "·")),
    }),
    style({
      id: "cursive-gamer",
      name: "Cursiva Gamer",
      category: "gaming",
      tags: ["gaming", "nick", "cursiva"],
      popularity: 78,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapBoldScript, createFrameTransform("【", "】")),
    }),
    style({
      id: "cursive-gamer-clan",
      name: "Cursiva Clan",
      category: "gaming",
      tags: ["gaming", "clan"],
      popularity: 72,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapBoldScript, createFrameTransform("〈〈", "〉〉")),
    }),
    style({
      id: "cursive-gamer-fire",
      name: "Cursiva Fuego",
      category: "gaming",
      tags: ["gaming", "fuego"],
      popularity: 74,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createWrapperTransform("🔥", "🔥")),
    }),
    style({
      id: "cursive-gamer-cyber",
      name: "Cursiva Cyber",
      category: "gaming",
      tags: ["gaming", "cyber"],
      popularity: 68,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapBoldScript, createFrameTransform("</", "/>")),
    }),
    style({
      id: "cursive-dark-aesthetic",
      name: "Cursiva Dark Aesthetic",
      category: "aesthetic",
      tags: ["aesthetic", "dark"],
      popularity: 70,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapBoldScript, createFrameTransform("‡", "‡")),
    }),
    style({
      id: "cursive-thin",
      name: "Cursiva Delgada",
      category: "script",
      tags: ["fina", "delgada", "cursiva"],
      popularity: 81,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: false,
      supportsAccents: true,
      transform: composeTransforms(mapItalic, createCombiningTransform(["\u0304"])),
    }),
    style({
      id: "cursive-small-decor",
      name: "Mini Decorativa",
      category: "special",
      tags: ["pequeña", "decorativa", "especial"],
      popularity: 62,
      compatibility: "medium",
      supportsLatin: true,
      supportsNumbers: false,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapSmallCaps, createWrapperTransform("⋆", "⋆")),
    }),
    style({
      id: "cursive-experimental-mix",
      name: "Cursiva Experimental",
      category: "special",
      tags: ["especial", "experimental", "mixto"],
      popularity: 60,
      compatibility: "medium",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: createMixedTransform(boldScript, italicSerif),
    }),
    style({
      id: "cursive-underscore-sep",
      name: "Cursiva con Guion Bajo",
      category: "gaming",
      tags: ["gaming", "guion"],
      popularity: 66,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: composeTransforms(mapBoldScript, createInterleaveTransform("_")),
    }),
    style({
      id: "cursive-instagram-hearts",
      name: "Cursiva Instagram Corazones",
      category: "social",
      tags: ["instagram", "corazon", "social"],
      popularity: 89,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createWrapperTransform("💕", "💕")),
    }),
    style({
      id: "cursive-tiktok-soft",
      name: "Cursiva Soft Social",
      category: "social",
      tags: ["social", "aesthetic", "soft"],
      popularity: 82,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapBoldItalic, createWrapperTransform("⋆˙", "˙⋆")),
    }),
    style({
      id: "cursive-whatsapp-status",
      name: "Cursiva Estado Social",
      category: "social",
      tags: ["status", "social"],
      popularity: 76,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createFrameTransform("❝", "❞")),
    }),
    style({
      id: "cursive-discord-nick",
      name: "Cursiva Nick Social",
      category: "social",
      tags: ["nick", "social", "usuario"],
      popularity: 73,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapBoldScript, createFrameTransform("˹", "˺")),
    }),
    style({
      id: "cursive-formal-calligraphy",
      name: "Caligrafía Formal",
      category: "calligraphy",
      tags: ["caligrafica", "formal"],
      popularity: 81,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapBoldScript, createFrameTransform("‹‹", "››")),
    }),
    style({
      id: "cursive-classic-calligraphy",
      name: "Caligrafía Clásica",
      category: "calligraphy",
      tags: ["caligrafica", "clasica"],
      popularity: 80,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createFrameTransform("꧁༺", "༻꧂")),
    }),
    style({
      id: "cursive-fine-calligraphy",
      name: "Caligrafía Fina",
      category: "calligraphy",
      tags: ["caligrafica", "fina"],
      popularity: 77,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: false,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapItalic, createWrapperTransform("✎", "✎")),
    }),
    style({
      id: "cursive-artistic-hand",
      name: "Manuscrita Artística",
      category: "handwritten",
      tags: ["manuscrita", "artistica"],
      popularity: 74,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: false,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapItalic, createWrapperTransform("❀", "❀")),
    }),
    style({
      id: "cursive-elegant-hand",
      name: "Manuscrita Elegante",
      category: "handwritten",
      tags: ["manuscrita", "elegante"],
      popularity: 79,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: false,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapItalic, createFrameTransform("༺", "༻")),
    }),
    style({
      id: "cursive-soft-hand",
      name: "Manuscrita Suave",
      category: "handwritten",
      tags: ["manuscrita", "suave"],
      popularity: 72,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: false,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapItalic, createWrapperTransform("˚₊", "₊˚")),
    }),
    style({
      id: "cursive-romantic-flower",
      name: "Cursiva Romántica Floral",
      category: "romantic",
      tags: ["romantica", "flor"],
      popularity: 84,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createWrapperTransform("🌸", "🌸")),
    }),
    style({
      id: "cursive-romantic-sparkle",
      name: "Cursiva Romántica Brillo",
      category: "romantic",
      tags: ["romantica", "brillo"],
      popularity: 83,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapBoldScript, createWrapperTransform("✨♡", "♡✨")),
    }),
    style({
      id: "cursive-vintage-flourish",
      name: "Cursiva Vintage Adorno",
      category: "vintage",
      tags: ["vintage", "adorno"],
      popularity: 70,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapScript, createFrameTransform("☙", "❧")),
    }),
    style({
      id: "cursive-luxury-frame",
      name: "Cursiva Lujo Enmarcada",
      category: "elegant",
      tags: ["lujo", "elegante", "marco"],
      popularity: 85,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: composeTransforms(mapBoldScript, createFrameTransform("❖꧁", "꧂❖")),
    }),
    style({
      id: "cursive-special-wave-sep",
      name: "Cursiva Onda Separada",
      category: "special",
      tags: ["especial", "onda"],
      popularity: 61,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: composeTransforms(mapScript, createInterleaveTransform(" ≈ ")),
    }),
  ];
}

export function buildCursiveStyles(): CursiveStyle[] {
  const styles: CursiveStyle[] = [
    ...buildCoreStyles(),
    ...buildCombiningVariants(),
    ...buildSpacingVariants(),
    ...buildOrnamentCombos(),
    ...buildThemedStyles(),
  ];

  const seenIds = new Set<string>();
  const seenFingerprints = new Set<string>();
  const samples = ["Letras Bonitas", "Hola Mundo", "Cursive Text 123"];

  return styles.filter((s) => {
    if (seenIds.has(s.id)) return false;
    seenIds.add(s.id);

    const fp = samples.map((input) => {
      try {
        return s.transform(input);
      } catch {
        return "__ERROR__";
      }
    }).join("||");

    if (seenFingerprints.has(fp)) return false;
    seenFingerprints.add(fp);
    return true;
  });
}

export const cursiveStyles: CursiveStyle[] = buildCursiveStyles();

export function getCursiveStylesByCategory(
  styles: CursiveStyle[],
  category: CursiveCategoryId,
  favoriteIds: Set<string>,
): CursiveStyle[] {
  if (category === "all") return styles;
  if (category === "popular") {
    return [...styles].sort((a, b) => b.popularity - a.popularity);
  }
  if (category === "favorites") {
    return styles.filter((s) => favoriteIds.has(s.id));
  }
  return styles.filter((s) => s.category === category);
}

export function searchCursiveStyles(styles: CursiveStyle[], query: string): CursiveStyle[] {
  const q = query.trim().toLowerCase();
  if (!q) return styles;
  return styles.filter((s) => {
    if (s.name.toLowerCase().includes(q)) return true;
    if (s.category.toLowerCase().includes(q)) return true;
    if (s.id.toLowerCase().includes(q)) return true;
    return s.tags.some((t) => t.toLowerCase().includes(q));
  });
}

export type CursiveRegistryReport = {
  total: number;
  byCategory: Record<string, number>;
  duplicateIds: string[];
  identicalOutputs: Array<{ a: string; b: string }>;
  meetsMinimum: boolean;
};

export function validateCursiveRegistry(
  styles: CursiveStyle[] = cursiveStyles,
): CursiveRegistryReport {
  const byCategory: Record<string, number> = {};
  const idMap = new Map<string, number>();
  const samples = ["Letras Bonitas", "Hola Mundo", "Cursive Text 123"];

  for (const s of styles) {
    byCategory[s.category] = (byCategory[s.category] ?? 0) + 1;
    idMap.set(s.id, (idMap.get(s.id) ?? 0) + 1);
  }

  const fingerprints = new Map<string, string>();
  const identicalOutputs: Array<{ a: string; b: string }> = [];

  for (const s of styles) {
    const fp = samples
      .map((input) => {
        try {
          return s.transform(input);
        } catch {
          return "__ERROR__";
        }
      })
      .join("||");
    const existing = fingerprints.get(fp);
    if (existing) identicalOutputs.push({ a: existing, b: s.id });
    else fingerprints.set(fp, s.id);
  }

  return {
    total: styles.length,
    byCategory,
    duplicateIds: [...idMap.entries()].filter(([, n]) => n > 1).map(([id]) => id),
    identicalOutputs,
    meetsMinimum: styles.length >= 100,
  };
}
