import type { FontCategoryId, FontStyle } from "./types";
import {
  composeTransforms,
  createAlternatingCombiningTransform,
  createCaseTransform,
  createCombiningTransform,
  createFrameTransform,
  createInterleaveTransform,
  createMappingTransform,
  createReverseTransform,
  createSafeTransform,
  createSpacingTransform,
  createUpsideDownTransform,
  createWrapperTransform,
} from "./transforms";
import * as maps from "./mappings/alphabets";

type StyleDef = Omit<FontStyle, "transform"> & {
  transform: FontStyle["transform"];
};

function style(def: StyleDef): FontStyle {
  return {
    ...def,
    transform: createSafeTransform(def.transform),
  };
}

type FrameDef = {
  id: string;
  name: string;
  left: string;
  right: string;
  category: FontStyle["category"];
  tags: string[];
  popularity: number;
  compatibility?: FontStyle["compatibility"];
};

type WrapperDef = {
  id: string;
  name: string;
  prefix: string;
  suffix?: string;
  category: FontStyle["category"];
  tags: string[];
  popularity: number;
};

const FRAMES: FrameDef[] = [
  { id: "frame-star", name: "Estrellas", left: "★", right: "★", category: "decorative", tags: ["estrella", "decorativa"], popularity: 88 },
  { id: "frame-star-outline", name: "Estrellas Contorno", left: "☆", right: "☆", category: "decorative", tags: ["estrella"], popularity: 72 },
  { id: "frame-sparkle", name: "Destellos", left: "✦", right: "✦", category: "decorative", tags: ["destello", "aesthetic"], popularity: 86 },
  { id: "frame-sparkle-soft", name: "Destellos Suaves", left: "✧", right: "✧", category: "aesthetic", tags: ["destello", "aesthetic"], popularity: 80 },
  { id: "frame-sparkles", name: "Brillos", left: "✨", right: "✨", category: "aesthetic", tags: ["brillo", "aesthetic"], popularity: 90 },
  { id: "frame-heart", name: "Corazones", left: "♥", right: "♥", category: "kawaii", tags: ["corazon", "kawaii"], popularity: 92 },
  { id: "frame-heart-outline", name: "Corazones Contorno", left: "♡", right: "♡", category: "kawaii", tags: ["corazon"], popularity: 85 },
  { id: "frame-heart-double", name: "Doble Corazón", left: "💕", right: "💕", category: "kawaii", tags: ["corazon", "kawaii"], popularity: 84 },
  { id: "frame-broken-heart", name: "Corazón Roto", left: "💔", right: "💔", category: "decorative", tags: ["corazon"], popularity: 60 },
  { id: "frame-flower", name: "Flores", left: "❀", right: "❀", category: "kawaii", tags: ["flor", "kawaii"], popularity: 78 },
  { id: "frame-blossom", name: "Flor de Cerezo", left: "🌸", right: "🌸", category: "kawaii", tags: ["flor", "kawaii"], popularity: 82 },
  { id: "frame-rose", name: "Rosas", left: "🌹", right: "🌹", category: "decorative", tags: ["flor"], popularity: 74 },
  { id: "frame-javanese", name: "Marco Ornamental", left: "꧁", right: "꧂", category: "decorative", tags: ["marco", "ornamental"], popularity: 83 },
  { id: "frame-tibetan", name: "Marco Tibetano", left: "༺", right: "༻", category: "decorative", tags: ["marco"], popularity: 70 },
  { id: "frame-corner", name: "Esquinas", left: "「", right: "」", category: "aesthetic", tags: ["corchete", "aesthetic"], popularity: 81 },
  { id: "frame-corner-white", name: "Esquinas Blancas", left: "『", right: "』", category: "aesthetic", tags: ["corchete"], popularity: 76 },
  { id: "frame-lenticular", name: "Corchetes Lenticulares", left: "【", right: "】", category: "decorative", tags: ["corchete"], popularity: 79 },
  { id: "frame-double-angle", name: "Ángulos Dobles", left: "《", right: "》", category: "decorative", tags: ["corchete"], popularity: 68 },
  { id: "frame-angle", name: "Ángulos", left: "〈", right: "〉", category: "decorative", tags: ["corchete"], popularity: 64 },
  { id: "frame-white-lenticular", name: "Lenticulares Blancos", left: "〘", right: "〙", category: "decorative", tags: ["corchete"], popularity: 62 },
  { id: "frame-tortoise", name: "Corchetes Tortuga", left: "〔", right: "〕", category: "decorative", tags: ["corchete"], popularity: 58 },
  { id: "frame-heavy-angle", name: "Ángulos Fuertes", left: "❮", right: "❯", category: "gaming", tags: ["gaming", "corchete"], popularity: 77 },
  { id: "frame-double-bracket", name: "Doble Corchete", left: "⟦", right: "⟧", category: "gaming", tags: ["gaming"], popularity: 71 },
  { id: "frame-arrow-right", name: "Flecha Derecha", left: "➤ ", right: "", category: "symbols", tags: ["flecha"], popularity: 66 },
  { id: "frame-arrows", name: "Flechas", left: "⟵", right: "⟶", category: "symbols", tags: ["flecha"], popularity: 69 },
  { id: "frame-double-arrow", name: "Flecha Doble", left: "«", right: "»", category: "symbols", tags: ["flecha"], popularity: 73 },
  { id: "frame-heavy-arrow", name: "Flecha Pesada", left: "➔ ", right: " ➔", category: "symbols", tags: ["flecha"], popularity: 65 },
  { id: "frame-lines", name: "Líneas", left: "━", right: "━", category: "decorative", tags: ["linea"], popularity: 61 },
  { id: "frame-dots", name: "Puntos", left: "·", right: "·", category: "aesthetic", tags: ["punto", "minimal"], popularity: 67 },
  { id: "frame-diamond", name: "Diamantes", left: "◆", right: "◆", category: "decorative", tags: ["diamante"], popularity: 75 },
  { id: "frame-diamond-outline", name: "Diamantes Contorno", left: "◇", right: "◇", category: "decorative", tags: ["diamante"], popularity: 63 },
  { id: "frame-music", name: "Notas", left: "♪", right: "♫", category: "decorative", tags: ["musica"], popularity: 70 },
  { id: "frame-crown", name: "Corona", left: "♛", right: "♛", category: "gaming", tags: ["gaming", "corona"], popularity: 87 },
  { id: "frame-skull", name: "Calavera", left: "☠", right: "☠", category: "gaming", tags: ["dark", "gaming"], popularity: 68 },
  { id: "frame-fire", name: "Fuego", left: "🔥", right: "🔥", category: "gaming", tags: ["gaming", "fuego"], popularity: 89 },
  { id: "frame-lightning", name: "Rayo", left: "⚡", right: "⚡", category: "gaming", tags: ["gaming"], popularity: 80 },
  { id: "frame-moon", name: "Luna", left: "☾", right: "☽", category: "aesthetic", tags: ["aesthetic", "luna"], popularity: 74 },
  { id: "frame-sun", name: "Sol", left: "☀", right: "☀", category: "decorative", tags: ["sol"], popularity: 59 },
  { id: "frame-cloud", name: "Nube", left: "☁", right: "☁", category: "kawaii", tags: ["kawaii"], popularity: 57 },
  { id: "frame-wave", name: "Ola", left: "≈", right: "≈", category: "aesthetic", tags: ["onda"], popularity: 55 },
  { id: "frame-tilde", name: "Tildes", left: "⁓", right: "⁓", category: "aesthetic", tags: ["tilde"], popularity: 54 },
  { id: "frame-bar", name: "Barras", left: "▌", right: "▐", category: "gaming", tags: ["gaming"], popularity: 72 },
  { id: "frame-block", name: "Bloques", left: "█", right: "█", category: "gaming", tags: ["gaming"], popularity: 64 },
  { id: "frame-slash", name: "Barras Diagonales", left: "⁄", right: "⁄", category: "symbols", tags: ["barra"], popularity: 52 },
  { id: "frame-pipe", name: "Tuberías", left: "|", right: "|", category: "symbols", tags: ["barra"], popularity: 50 },
  { id: "frame-paren-fancy", name: "Paréntesis Decorativos", left: "⎛", right: "⎞", category: "decorative", tags: ["parentesis"], popularity: 56 },
  { id: "frame-curly", name: "Llaves", left: "{", right: "}", category: "symbols", tags: ["llave"], popularity: 58 },
  { id: "frame-square", name: "Corchetes", left: "[", right: "]", category: "symbols", tags: ["corchete"], popularity: 60 },
  { id: "frame-round", name: "Paréntesis", left: "(", right: ")", category: "symbols", tags: ["parentesis"], popularity: 62 },
  { id: "frame-angle-ascii", name: "Menor Mayor", left: "<", right: ">", category: "symbols", tags: ["angulo"], popularity: 53 },
  { id: "frame-kawaii-face", name: "Caritas", left: "(´∀｀)", right: "(´∀｀)", category: "kawaii", tags: ["kawaii", "cara"], popularity: 76 },
  { id: "frame-kawaii-bear", name: "Ositos", left: "ʕ•ᴥ•ʔ", right: "ʕ•ᴥ•ʔ", category: "kawaii", tags: ["kawaii"], popularity: 73 },
  { id: "frame-kawaii-blush", name: "Sonrojo", left: "(⁄ ⁄•⁄ω⁄•⁄ ⁄)", right: "", category: "kawaii", tags: ["kawaii"], popularity: 71 },
  { id: "frame-gaming-xp", name: "Nivel XP", left: "【Lv.】", right: "", category: "gaming", tags: ["gaming"], popularity: 69 },
  { id: "frame-gaming-clan", name: "Clan", left: "〈〈", right: "〉〉", category: "gaming", tags: ["gaming", "clan"], popularity: 78 },
  { id: "frame-gaming-tag", name: "Etiqueta Gamer", left: "『", right: "』ツ", category: "gaming", tags: ["gaming"], popularity: 75 },
  { id: "frame-aesthetic-dots", name: "Puntos Aesthetic", left: "···", right: "···", category: "aesthetic", tags: ["aesthetic"], popularity: 77 },
  { id: "frame-aesthetic-dash", name: "Guiones Aesthetic", left: "—", right: "—", category: "aesthetic", tags: ["aesthetic"], popularity: 70 },
  { id: "frame-vintage", name: "Vintage", left: "❦", right: "❦", category: "elegant", tags: ["vintage", "elegante"], popularity: 66 },
  { id: "frame-ornament", name: "Ornamento", left: "❧", right: "❧", category: "elegant", tags: ["elegante"], popularity: 64 },
  { id: "frame-quill", name: "Pluma", left: "✎", right: "✎", category: "elegant", tags: ["elegante"], popularity: 61 },
  { id: "frame-ribbon", name: "Lazo", left: "🎀", right: "🎀", category: "kawaii", tags: ["kawaii"], popularity: 79 },
  { id: "frame-star-emoji", name: "Estrella Emoji", left: "⭐", right: "⭐", category: "decorative", tags: ["estrella"], popularity: 85 },
  { id: "frame-glow-star", name: "Estrella Brillante", left: "🌟", right: "🌟", category: "decorative", tags: ["estrella"], popularity: 83 },
  { id: "frame-four-star", name: "Estrella Cuatro Puntas", left: "✦", right: "✧", category: "decorative", tags: ["estrella"], popularity: 68 },
  { id: "frame-peace", name: "Paz", left: "☮", right: "☮", category: "symbols", tags: ["simbolo"], popularity: 48 },
  { id: "frame-yin-yang", name: "Yin Yang", left: "☯", right: "☯", category: "symbols", tags: ["simbolo"], popularity: 55 },
  { id: "frame-infinity", name: "Infinito", left: "∞", right: "∞", category: "symbols", tags: ["simbolo"], popularity: 57 },
  { id: "frame-cross", name: "Cruz", left: "✝", right: "✝", category: "symbols", tags: ["simbolo"], popularity: 45 },
  { id: "frame-anchor", name: "Ancla", left: "⚓", right: "⚓", category: "symbols", tags: ["simbolo"], popularity: 46 },
  { id: "frame-plane", name: "Avión", left: "✈", right: "✈", category: "symbols", tags: ["simbolo"], popularity: 44 },
  { id: "frame-coffee", name: "Café", left: "☕", right: "☕", category: "decorative", tags: ["emoji"], popularity: 58 },
  { id: "frame-leaf", name: "Hoja", left: "🍃", right: "🍃", category: "aesthetic", tags: ["naturaleza"], popularity: 62 },
  { id: "frame-snow", name: "Nieve", left: "❄", right: "❄", category: "decorative", tags: ["nieve"], popularity: 51 },
  { id: "frame-butterfly", name: "Mariposa", left: "🦋", right: "🦋", category: "kawaii", tags: ["kawaii"], popularity: 72 },
  { id: "frame-cat", name: "Gato", left: "🐱", right: "🐱", category: "kawaii", tags: ["kawaii"], popularity: 74 },
  { id: "frame-ghost", name: "Fantasma", left: "👻", right: "👻", category: "gaming", tags: ["gaming"], popularity: 67 },
  { id: "frame-robot", name: "Robot", left: "🤖", right: "🤖", category: "gaming", tags: ["tech", "gaming"], popularity: 63 },
  { id: "frame-alien", name: "Alien", left: "👽", right: "👽", category: "rare", tags: ["alien", "rara"], popularity: 59 },
  { id: "frame-cyber", name: "Ciber", left: "⟨/", right: "/⟩", category: "gaming", tags: ["cyber", "tech"], popularity: 76 },
  { id: "frame-tech", name: "Tech", left: "‹‹", right: "››", category: "gaming", tags: ["tech"], popularity: 65 },
  { id: "frame-retro", name: "Retro", left: "◆◇", right: "◇◆", category: "decorative", tags: ["retro"], popularity: 60 },
  { id: "frame-bow", name: "Lazo Suave", left: "ฅ", right: "ฅ", category: "kawaii", tags: ["kawaii"], popularity: 56 },
  { id: "frame-note", name: "Nota", left: "♪˚", right: "˚♪", category: "decorative", tags: ["musica"], popularity: 54 },
  { id: "frame-bubble-soft", name: "Burbuja Soft", left: "∘", right: "∘", category: "bubble", tags: ["burbuja"], popularity: 57 },
  { id: "frame-game-pad", name: "Mando", left: "🎮", right: "🎮", category: "gaming", tags: ["gaming"], popularity: 73 },
  { id: "frame-trophy", name: "Trofeo", left: "🏆", right: "🏆", category: "gaming", tags: ["gaming"], popularity: 71 },
  { id: "frame-diamond-emoji", name: "Gema", left: "💎", right: "💎", category: "decorative", tags: ["diamante"], popularity: 69 },
  { id: "frame-rainbow", name: "Arcoíris", left: "🌈", right: "🌈", category: "kawaii", tags: ["kawaii"], popularity: 68 },
  { id: "frame-unicorn", name: "Unicornio", left: "🦄", right: "🦄", category: "kawaii", tags: ["kawaii"], popularity: 66 },
  { id: "frame-sword", name: "Espada", left: "⚔", right: "⚔", category: "gaming", tags: ["gaming", "dark"], popularity: 64 },
  { id: "frame-shield", name: "Escudo", left: "🛡", right: "🛡", category: "gaming", tags: ["gaming"], popularity: 62 },
  { id: "frame-crystal", name: "Cristal", left: "✧･ﾟ", right: "･ﾟ✧", category: "aesthetic", tags: ["aesthetic"], popularity: 75 },
  { id: "frame-soft-brackets", name: "Corchetes Soft", left: "˗ˏˋ", right: "ˎˊ˗", category: "aesthetic", tags: ["aesthetic"], popularity: 78 },
  { id: "frame-angel", name: "Ángel", left: "ʚ", right: "ɞ", category: "kawaii", tags: ["kawaii"], popularity: 61 },
  { id: "frame-vintage-book", name: "Libro Vintage", left: "❝", right: "❞", category: "elegant", tags: ["elegante", "vintage"], popularity: 59 },
];

const WRAPPERS: WrapperDef[] = [
  { id: "wrap-hearts-trail", name: "Rastro de Corazones", prefix: "♥˙˙˙", suffix: "˙˙˙♥", category: "kawaii", tags: ["corazon", "kawaii"], popularity: 70 },
  { id: "wrap-star-trail", name: "Rastro de Estrellas", prefix: "★彡", suffix: "彡★", category: "decorative", tags: ["estrella"], popularity: 68 },
  { id: "wrap-aesthetic-soft", name: "Aesthetic Suave", prefix: "·˚", suffix: "˚·", category: "aesthetic", tags: ["aesthetic"], popularity: 82 },
  { id: "wrap-sparkle-trail", name: "Rastro Brillante", prefix: "✧˖°", suffix: "°˖✧", category: "aesthetic", tags: ["aesthetic", "brillo"], popularity: 84 },
  { id: "wrap-flower-trail", name: "Rastro Floral", prefix: "❀.ೃ࿔", suffix: "ೃ࿔.❀", category: "kawaii", tags: ["flor", "kawaii"], popularity: 77 },
  { id: "wrap-wave-soft", name: "Onda Suave", prefix: "༄", suffix: "༄", category: "aesthetic", tags: ["onda"], popularity: 61 },
  { id: "wrap-dark-edges", name: "Bordes Oscuros", prefix: "‡", suffix: "‡", category: "gothic", tags: ["dark", "gotica"], popularity: 64 },
  { id: "wrap-bullet", name: "Viñetas", prefix: "•", suffix: "•", category: "symbols", tags: ["punto"], popularity: 55 },
  { id: "wrap-triple-dot", name: "Triple Punto", prefix: "⋯", suffix: "⋯", category: "aesthetic", tags: ["punto"], popularity: 58 },
  { id: "wrap-slash-gamer", name: "Slash Gamer", prefix: "//", suffix: "//", category: "gaming", tags: ["gaming"], popularity: 72 },
  { id: "wrap-hash-gamer", name: "Hash Gamer", prefix: "#", suffix: "#", category: "gaming", tags: ["gaming"], popularity: 66 },
  { id: "wrap-at-gamer", name: "Arroba Gamer", prefix: "@", suffix: "", category: "gaming", tags: ["gaming"], popularity: 60 },
  { id: "wrap-plus", name: "Plus", prefix: "+", suffix: "+", category: "symbols", tags: ["simbolo"], popularity: 48 },
  { id: "wrap-equals", name: "Igual", prefix: "=", suffix: "=", category: "symbols", tags: ["simbolo"], popularity: 47 },
  { id: "wrap-tilde-soft", name: "Tilde Suave", prefix: "~", suffix: "~", category: "aesthetic", tags: ["tilde"], popularity: 63 },
  { id: "wrap-kawaii-stars", name: "Estrellitas Kawaii", prefix: "⋆｡˚", suffix: "˚｡⋆", category: "kawaii", tags: ["kawaii", "estrella"], popularity: 80 },
  { id: "wrap-dark-gothic", name: "Gótica Envuelta", prefix: "✠", suffix: "✠", category: "gothic", tags: ["gotica"], popularity: 58 },
  { id: "wrap-bubble-dots", name: "Puntos Burbuja", prefix: "˚º✩", suffix: "✩º˚", category: "bubble", tags: ["burbuja"], popularity: 65 },
  { id: "wrap-neon", name: "Neón", prefix: "✧˖*°", suffix: "°*˖✧", category: "aesthetic", tags: ["neon", "aesthetic"], popularity: 74 },
  { id: "wrap-gamer-x", name: "Gamer X", prefix: "✘", suffix: "✘", category: "gaming", tags: ["gaming"], popularity: 59 },
  { id: "wrap-elegant-flourish", name: "Adorno Elegante", prefix: "꧔", suffix: "꧔", category: "elegant", tags: ["elegante"], popularity: 57 },
  { id: "wrap-rare-alien", name: "Alien Soft", prefix: "◌", suffix: "◌", category: "rare", tags: ["rara", "alien"], popularity: 49 },
  { id: "wrap-mini-hearts", name: "Mini Corazones", prefix: "ღ", suffix: "ღ", category: "kawaii", tags: ["corazon", "kawaii"], popularity: 76 },
];

const COMBINING_STYLES: Array<{
  id: string;
  name: string;
  marks: string[];
  category: FontStyle["category"];
  tags: string[];
  popularity: number;
  perChar?: number;
}> = [
  { id: "strike-single", name: "Tachado", marks: ["\u0336"], category: "glitch", tags: ["tachado"], popularity: 78 },
  { id: "strike-short", name: "Tachado Corto", marks: ["\u0335"], category: "glitch", tags: ["tachado"], popularity: 62 },
  { id: "strike-long", name: "Tachado Largo", marks: ["\u0336", "\u0336"], category: "glitch", tags: ["tachado"], popularity: 58, perChar: 2 },
  { id: "strike-slash", name: "Tachado Diagonal", marks: ["\u0338"], category: "glitch", tags: ["tachado"], popularity: 64 },
  { id: "strike-double", name: "Doble Tachado", marks: ["\u0336", "\u0337"], category: "glitch", tags: ["tachado"], popularity: 56, perChar: 2 },
  { id: "underline-single", name: "Subrayado", marks: ["\u0332"], category: "decorative", tags: ["subrayado"], popularity: 80 },
  { id: "underline-double", name: "Doble Subrayado", marks: ["\u0333"], category: "decorative", tags: ["subrayado"], popularity: 70 },
  { id: "underline-low", name: "Línea Baja", marks: ["\u0331"], category: "decorative", tags: ["subrayado"], popularity: 60 },
  { id: "overline-single", name: "Sobrerayado", marks: ["\u0305"], category: "decorative", tags: ["sobrerayado"], popularity: 66 },
  { id: "overline-double", name: "Doble Sobrerayado", marks: ["\u033f"], category: "decorative", tags: ["sobrerayado"], popularity: 54 },
  { id: "wavy-underline", name: "Subrayado Ondulado", marks: ["\u0330"], category: "decorative", tags: ["onda", "subrayado"], popularity: 72 },
  { id: "wavy-strike", name: "Tachado Ondulado", marks: ["\u0334"], category: "glitch", tags: ["onda", "tachado"], popularity: 58 },
  { id: "dot-below", name: "Punto Inferior", marks: ["\u0323"], category: "decorative", tags: ["punto"], popularity: 52 },
  { id: "dot-above", name: "Punto Superior", marks: ["\u0307"], category: "decorative", tags: ["punto"], popularity: 53 },
  { id: "diaeresis", name: "Diéresis", marks: ["\u0308"], category: "decorative", tags: ["acento"], popularity: 50 },
  { id: "tilde-combining", name: "Tilde Combinante", marks: ["\u0303"], category: "decorative", tags: ["tilde"], popularity: 51 },
  { id: "ring-above", name: "Anillo Superior", marks: ["\u030a"], category: "decorative", tags: ["anillo"], popularity: 49 },
  { id: "caron", name: "Carón", marks: ["\u030c"], category: "decorative", tags: ["acento"], popularity: 47 },
  { id: "breve", name: "Breve", marks: ["\u0306"], category: "decorative", tags: ["acento"], popularity: 46 },
  { id: "macron", name: "Macrón", marks: ["\u0304"], category: "decorative", tags: ["acento"], popularity: 48 },
  { id: "glitch-light", name: "Glitch Ligero", marks: ["\u0301", "\u0315"], category: "glitch", tags: ["glitch"], popularity: 74, perChar: 2 },
  { id: "glitch-top", name: "Glitch Superior", marks: ["\u030d", "\u030e", "\u0311"], category: "glitch", tags: ["glitch"], popularity: 68, perChar: 3 },
  { id: "glitch-bottom", name: "Glitch Inferior", marks: ["\u0316", "\u0317", "\u031e"], category: "glitch", tags: ["glitch"], popularity: 67, perChar: 3 },
  { id: "glitch-mixed", name: "Glitch Mixto", marks: ["\u0300", "\u0315", "\u0321"], category: "glitch", tags: ["glitch"], popularity: 71, perChar: 3 },
  { id: "glitch-heavy", name: "Glitch Intenso", marks: ["\u030d", "\u0315", "\u031b", "\u0321"], category: "glitch", tags: ["glitch"], popularity: 65, perChar: 4 },
  { id: "zalgo-light", name: "Zalgo Ligero", marks: ["\u030d", "\u0316"], category: "glitch", tags: ["zalgo", "glitch"], popularity: 69, perChar: 2 },
  { id: "zalgo-medium", name: "Zalgo Medio", marks: ["\u030d", "\u0315", "\u0316"], category: "glitch", tags: ["zalgo"], popularity: 63, perChar: 3 },
  { id: "zalgo-heavy", name: "Zalgo Intenso", marks: ["\u030d", "\u0311", "\u0315", "\u0316"], category: "glitch", tags: ["zalgo"], popularity: 55, perChar: 4 },
  { id: "shadow-below", name: "Sombra Inferior", marks: ["\u0332", "\u0332"], category: "decorative", tags: ["sombra"], popularity: 57, perChar: 2 },
  { id: "cross-marks", name: "Marcas Cruzadas", marks: ["\u0338", "\u0336"], category: "glitch", tags: ["tachado"], popularity: 54, perChar: 2 },
];

function buildCoreStyles(): FontStyle[] {
  const map = (
    id: string,
    name: string,
    category: FontStyle["category"],
    mapping: Record<string, string>,
    tags: string[],
    popularity: number,
    extras?: Partial<FontStyle>,
  ): FontStyle =>
    style({
      id,
      name,
      category,
      tags,
      popularity,
      compatibility: extras?.compatibility ?? "high",
      supportsLatin: true,
      supportsNumbers: Object.keys(mapping).some((k) => /\d/.test(k)),
      supportsAccents: extras?.supportsAccents ?? true,
      transform: createMappingTransform(mapping),
      ...extras,
    });

  return [
    map("bold-serif", "Negrita Serif", "bold", maps.boldSerif, ["negrita", "serif", "bold"], 100),
    map("italic-serif", "Cursiva Serif", "cursive", maps.italicSerif, ["cursiva", "italic", "serif"], 98),
    map("bold-italic-serif", "Negrita Cursiva", "bold", maps.boldItalicSerif, ["negrita", "cursiva"], 94),
    map("script", "Cursiva Script", "cursive", maps.script, ["cursiva", "script", "elegante"], 99),
    map("bold-script", "Cursiva Negrita", "cursive", maps.boldScript, ["cursiva", "negrita", "script"], 96),
    map("fraktur", "Gótica", "gothic", maps.fraktur, ["gotica", "fraktur", "gothic"], 95),
    map("bold-fraktur", "Gótica Negrita", "gothic", maps.boldFraktur, ["gotica", "negrita"], 91),
    map("double-struck", "Doble Trazo", "elegant", maps.doubleStruck, ["doble", "blackboard", "elegante"], 93),
    map("sans-serif", "Sans", "elegant", maps.sansSerif, ["sans", "limpia"], 82),
    map("sans-bold", "Negrita Sans", "bold", maps.sansBold, ["negrita", "sans"], 97),
    map("sans-italic", "Cursiva Sans", "cursive", maps.sansItalic, ["cursiva", "sans"], 88),
    map("sans-bold-italic", "Negrita Cursiva Sans", "bold", maps.sansBoldItalic, ["negrita", "cursiva", "sans"], 86),
    map("monospace", "Monoespaciada", "elegant", maps.monospace, ["mono", "codigo", "tech"], 84),
    map("fullwidth", "Ancho Completo", "aesthetic", maps.fullwidth, ["ancho", "fullwidth", "aesthetic"], 92, { compatibility: "high" }),
    map("small-caps", "Versalitas", "small", maps.smallCaps, ["pequeña", "versalitas", "smallcaps"], 89, { supportsNumbers: false }),
    map("superscript", "Superíndice", "small", maps.superscript, ["pequeña", "superindice"], 76),
    map("subscript", "Subíndice", "small", maps.subscript, ["pequeña", "subindice"], 74, { compatibility: "medium" }),
    map("circled", "Burbujas", "bubble", maps.circled, ["burbuja", "circulo"], 94),
    map("negative-circled", "Burbujas Negras", "bubble", maps.negativeCircled, ["burbuja", "negativo"], 87, { compatibility: "medium" }),
    map("squared", "Cuadradas", "bubble", maps.squared, ["cuadrado", "caja"], 85, { compatibility: "medium" }),
    map("negative-squared", "Cuadradas Negras", "bubble", maps.negativeSquared, ["cuadrado", "negativo"], 81, { compatibility: "medium" }),
    map("parenthesized", "Entre Paréntesis", "bubble", maps.parenthesized, ["parentesis", "burbuja"], 70, { compatibility: "medium" }),
    map("tiny", "Mini Texto", "small", maps.tiny, ["pequeña", "mini", "tiny"], 83, { supportsNumbers: false }),
    map("regional", "Letras Regionales", "rare", maps.regional, ["rara", "regional", "bandera"], 48, { compatibility: "low", supportsNumbers: false }),
    map("greek-look", "Estilo Griego", "rare", maps.greekLook, ["griego", "rara"], 55, { compatibility: "medium", supportsNumbers: false, supportsAccents: false }),
    map("cyrillic-look", "Estilo Cirílico", "rare", maps.cyrillicLook, ["cirilico", "rara"], 54, { compatibility: "medium", supportsNumbers: false, supportsAccents: false }),
  ];
}

function buildSpecialStyles(): FontStyle[] {
  return [
    style({
      id: "upside-down",
      name: "Al Revés",
      category: "rare",
      tags: ["reves", "upside", "rara"],
      popularity: 88,
      compatibility: "medium",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: false,
      transform: createUpsideDownTransform(maps.upsideDown),
    }),
    style({
      id: "reverse",
      name: "Invertido",
      category: "rare",
      tags: ["invertido", "reverse", "rara"],
      popularity: 79,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: createReverseTransform(),
    }),
    style({
      id: "spaced",
      name: "Espaciado",
      category: "aesthetic",
      tags: ["espacio", "aesthetic"],
      popularity: 81,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: createSpacingTransform(" "),
    }),
    style({
      id: "double-spaced",
      name: "Doble Espacio",
      category: "aesthetic",
      tags: ["espacio", "aesthetic"],
      popularity: 68,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: createSpacingTransform("  "),
    }),
    style({
      id: "dot-spaced",
      name: "Con Puntos",
      category: "aesthetic",
      tags: ["punto", "aesthetic"],
      popularity: 72,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: createInterleaveTransform("·"),
    }),
    style({
      id: "dash-spaced",
      name: "Con Guiones",
      category: "decorative",
      tags: ["guion"],
      popularity: 60,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: createInterleaveTransform("-"),
    }),
    style({
      id: "underscore-spaced",
      name: "Con Guion Bajo",
      category: "gaming",
      tags: ["gaming", "guion"],
      popularity: 71,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: createInterleaveTransform("_"),
    }),
    style({
      id: "slash-spaced",
      name: "Con Barras",
      category: "gaming",
      tags: ["gaming"],
      popularity: 64,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: createInterleaveTransform("/"),
    }),
    style({
      id: "upper-case",
      name: "Mayúsculas",
      category: "elegant",
      tags: ["mayusculas"],
      popularity: 75,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: createCaseTransform("upper"),
    }),
    style({
      id: "lower-case",
      name: "Minúsculas",
      category: "elegant",
      tags: ["minusculas"],
      popularity: 70,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: createCaseTransform("lower"),
    }),
    style({
      id: "title-case",
      name: "Tipo Título",
      category: "elegant",
      tags: ["titulo"],
      popularity: 67,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: createCaseTransform("title"),
    }),
    style({
      id: "alternating-case",
      name: "Mayúsculas Alternas",
      category: "glitch",
      tags: ["alterno", "glitch"],
      popularity: 73,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: createCaseTransform("alternating"),
    }),
    style({
      id: "glitch-alt-marks",
      name: "Glitch Alterno",
      category: "glitch",
      tags: ["glitch"],
      popularity: 66,
      compatibility: "medium",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      combining: true,
      transform: createAlternatingCombiningTransform([
        ["\u030d"],
        ["\u0316"],
        ["\u030d", "\u0316"],
      ]),
    }),
  ];
}

function buildComposedStyles(): FontStyle[] {
  const bold = createMappingTransform(maps.sansBold);
  const scriptFn = createMappingTransform(maps.script);
  const frakturFn = createMappingTransform(maps.fraktur);
  const fullwidthFn = createMappingTransform(maps.fullwidth);
  const smallCapsFn = createMappingTransform(maps.smallCaps);
  const doubleStruckFn = createMappingTransform(maps.doubleStruck);
  const monoFn = createMappingTransform(maps.monospace);

  const composed: Array<{
    id: string;
    name: string;
    category: FontStyle["category"];
    tags: string[];
    popularity: number;
    transform: FontStyle["transform"];
    compatibility?: FontStyle["compatibility"];
  }> = [
    {
      id: "aesthetic-fullwidth-sparkle",
      name: "Aesthetic Ancho",
      category: "aesthetic",
      tags: ["aesthetic", "ancho"],
      popularity: 91,
      transform: composeTransforms(fullwidthFn, createWrapperTransform("✧", "✧")),
    },
    {
      id: "aesthetic-fullwidth-hearts",
      name: "Aesthetic Corazones",
      category: "aesthetic",
      tags: ["aesthetic", "corazon"],
      popularity: 88,
      transform: composeTransforms(fullwidthFn, createWrapperTransform("♡", "♡")),
    },
    {
      id: "aesthetic-spaced-fullwidth",
      name: "Aesthetic Espaciado",
      category: "aesthetic",
      tags: ["aesthetic", "espacio"],
      popularity: 85,
      transform: composeTransforms(fullwidthFn, createSpacingTransform(" ")),
    },
    {
      id: "cursive-stars",
      name: "Cursiva con Estrellas",
      category: "cursive",
      tags: ["cursiva", "estrella"],
      popularity: 90,
      transform: composeTransforms(scriptFn, createWrapperTransform("★", "★")),
    },
    {
      id: "cursive-hearts",
      name: "Cursiva con Corazones",
      category: "cursive",
      tags: ["cursiva", "corazon"],
      popularity: 89,
      transform: composeTransforms(scriptFn, createWrapperTransform("♥", "♥")),
    },
    {
      id: "cursive-elegant-frame",
      name: "Cursiva Elegante",
      category: "elegant",
      tags: ["cursiva", "elegante"],
      popularity: 87,
      transform: composeTransforms(scriptFn, createFrameTransform("꧁", "꧂")),
    },
    {
      id: "gothic-dark-frame",
      name: "Gótica Oscura",
      category: "gothic",
      tags: ["gotica", "dark"],
      popularity: 86,
      transform: composeTransforms(frakturFn, createFrameTransform("【", "】")),
    },
    {
      id: "gothic-skull",
      name: "Gótica Calavera",
      category: "gothic",
      tags: ["gotica", "dark"],
      popularity: 72,
      transform: composeTransforms(frakturFn, createWrapperTransform("☠", "☠")),
    },
    {
      id: "bold-fire",
      name: "Negrita Fuego",
      category: "gaming",
      tags: ["negrita", "gaming", "fuego"],
      popularity: 88,
      transform: composeTransforms(bold, createWrapperTransform("🔥", "🔥")),
    },
    {
      id: "bold-crown",
      name: "Negrita Corona",
      category: "gaming",
      tags: ["negrita", "gaming"],
      popularity: 87,
      transform: composeTransforms(bold, createWrapperTransform("♛", "♛")),
    },
    {
      id: "bold-clan",
      name: "Negrita Clan",
      category: "gaming",
      tags: ["negrita", "gaming", "clan"],
      popularity: 84,
      transform: composeTransforms(bold, createFrameTransform("〈〈", "〉〉")),
    },
    {
      id: "smallcaps-gaming",
      name: "Versalitas Gaming",
      category: "gaming",
      tags: ["pequeña", "gaming"],
      popularity: 80,
      transform: composeTransforms(smallCapsFn, createFrameTransform("『", "』")),
    },
    {
      id: "double-struck-elegant",
      name: "Doble Trazo Elegante",
      category: "elegant",
      tags: ["doble", "elegante"],
      popularity: 83,
      transform: composeTransforms(doubleStruckFn, createWrapperTransform("✦", "✦")),
    },
    {
      id: "mono-tech",
      name: "Mono Tech",
      category: "gaming",
      tags: ["mono", "tech"],
      popularity: 77,
      transform: composeTransforms(monoFn, createFrameTransform("⟨", "⟩")),
    },
    {
      id: "mono-cyber",
      name: "Mono Cyber",
      category: "gaming",
      tags: ["mono", "cyber"],
      popularity: 75,
      transform: composeTransforms(monoFn, createFrameTransform("</", "/>")),
    },
    {
      id: "script-underline",
      name: "Cursiva Subrayada",
      category: "cursive",
      tags: ["cursiva", "subrayado"],
      popularity: 78,
      transform: composeTransforms(scriptFn, createCombiningTransform(["\u0332"])),
    },
    {
      id: "bold-strike",
      name: "Negrita Tachada",
      category: "glitch",
      tags: ["negrita", "tachado"],
      popularity: 65,
      transform: composeTransforms(bold, createCombiningTransform(["\u0336"])),
    },
    {
      id: "fullwidth-brackets",
      name: "Ancho con Corchetes",
      category: "aesthetic",
      tags: ["ancho", "aesthetic"],
      popularity: 79,
      transform: composeTransforms(fullwidthFn, createFrameTransform("【", "】")),
    },
    {
      id: "fullwidth-kawaii",
      name: "Ancho Kawaii",
      category: "kawaii",
      tags: ["ancho", "kawaii"],
      popularity: 82,
      transform: composeTransforms(fullwidthFn, createWrapperTransform("❀", "❀")),
    },
    {
      id: "smallcaps-stars",
      name: "Versalitas Estrellas",
      category: "small",
      tags: ["pequeña", "estrella"],
      popularity: 74,
      transform: composeTransforms(smallCapsFn, createWrapperTransform("☆", "☆")),
    },
    {
      id: "fraktur-underline",
      name: "Gótica Subrayada",
      category: "gothic",
      tags: ["gotica", "subrayado"],
      popularity: 70,
      transform: composeTransforms(frakturFn, createCombiningTransform(["\u0332"])),
    },
    {
      id: "script-sparkle",
      name: "Cursiva Destellos",
      category: "cursive",
      tags: ["cursiva", "brillo"],
      popularity: 86,
      transform: composeTransforms(scriptFn, createWrapperTransform("✨", "✨")),
    },
    {
      id: "bold-sparkle",
      name: "Negrita Destellos",
      category: "bold",
      tags: ["negrita", "brillo"],
      popularity: 81,
      transform: composeTransforms(bold, createWrapperTransform("✨", "✨")),
    },
    {
      id: "upside-framed",
      name: "Al Revés Enmarcado",
      category: "rare",
      tags: ["reves", "rara"],
      popularity: 61,
      compatibility: "medium",
      transform: composeTransforms(
        createUpsideDownTransform(maps.upsideDown),
        createFrameTransform("⟦", "⟧"),
      ),
    },
    {
      id: "reverse-stars",
      name: "Invertido Estrellas",
      category: "rare",
      tags: ["invertido", "rara"],
      popularity: 58,
      transform: composeTransforms(createReverseTransform(), createWrapperTransform("★", "★")),
    },
    {
      id: "italic-hearts",
      name: "Cursiva Corazón Soft",
      category: "cursive",
      tags: ["cursiva", "corazon"],
      popularity: 84,
      transform: composeTransforms(
        createMappingTransform(maps.italicSerif),
        createWrapperTransform("♡", "♡"),
      ),
    },
    {
      id: "bold-italic-frame",
      name: "Negrita Cursiva Marco",
      category: "bold",
      tags: ["negrita", "cursiva"],
      popularity: 76,
      transform: composeTransforms(
        createMappingTransform(maps.boldItalicSerif),
        createFrameTransform("「", "」"),
      ),
    },
    {
      id: "circled-stars",
      name: "Burbujas Estrellas",
      category: "bubble",
      tags: ["burbuja", "estrella"],
      popularity: 80,
      transform: composeTransforms(
        createMappingTransform(maps.circled),
        createWrapperTransform("☆", "☆"),
      ),
    },
    {
      id: "squared-gaming",
      name: "Cuadradas Gaming",
      category: "gaming",
      tags: ["cuadrado", "gaming"],
      popularity: 73,
      transform: composeTransforms(
        createMappingTransform(maps.squared),
        createFrameTransform("【", "】"),
      ),
    },
    {
      id: "tiny-kawaii",
      name: "Mini Kawaii",
      category: "kawaii",
      tags: ["pequeña", "kawaii"],
      popularity: 77,
      transform: composeTransforms(
        createMappingTransform(maps.tiny),
        createWrapperTransform("˚", "˚"),
      ),
    },
    {
      id: "superscript-framed",
      name: "Superíndice Marco",
      category: "small",
      tags: ["pequeña", "superindice"],
      popularity: 62,
      transform: composeTransforms(
        createMappingTransform(maps.superscript),
        createFrameTransform("˹", "˺"),
      ),
    },
    {
      id: "monospace-underline",
      name: "Mono Subrayada",
      category: "elegant",
      tags: ["mono", "subrayado"],
      popularity: 61,
      transform: composeTransforms(monoFn, createCombiningTransform(["\u0332"])),
    },
    {
      id: "sans-wavy",
      name: "Sans Ondulado",
      category: "elegant",
      tags: ["sans", "onda"],
      popularity: 59,
      transform: composeTransforms(
        createMappingTransform(maps.sansSerif),
        createCombiningTransform(["\u0330"]),
      ),
    },
    {
      id: "bold-script-sparkle",
      name: "Script Negrita Brillo",
      category: "cursive",
      tags: ["cursiva", "negrita", "brillo"],
      popularity: 85,
      transform: composeTransforms(
        createMappingTransform(maps.boldScript),
        createWrapperTransform("✦", "✦"),
      ),
    },
    {
      id: "fraktur-arrows",
      name: "Gótica Flechas",
      category: "gothic",
      tags: ["gotica", "flecha"],
      popularity: 68,
      transform: composeTransforms(frakturFn, createFrameTransform("⟵", "⟶")),
    },
    {
      id: "double-struck-gaming",
      name: "Doble Trazo Gaming",
      category: "gaming",
      tags: ["doble", "gaming"],
      popularity: 74,
      transform: composeTransforms(doubleStruckFn, createFrameTransform("〈", "〉")),
    },
    {
      id: "fullwidth-wave",
      name: "Ancho Onda",
      category: "aesthetic",
      tags: ["ancho", "onda"],
      popularity: 71,
      transform: composeTransforms(fullwidthFn, createWrapperTransform("≈", "≈")),
    },
    {
      id: "smallcaps-underline",
      name: "Versalitas Subrayadas",
      category: "small",
      tags: ["pequeña", "subrayado"],
      popularity: 63,
      transform: composeTransforms(smallCapsFn, createCombiningTransform(["\u0332"])),
    },
    {
      id: "negative-circled-frame",
      name: "Burbujas Negras Marco",
      category: "bubble",
      tags: ["burbuja", "negativo"],
      popularity: 69,
      compatibility: "medium",
      transform: composeTransforms(
        createMappingTransform(maps.negativeCircled),
        createFrameTransform("【", "】"),
      ),
    },
  ];

  return composed.map((c) =>
    style({
      id: c.id,
      name: c.name,
      category: c.category,
      tags: c.tags,
      popularity: c.popularity,
      compatibility: c.compatibility ?? "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: c.transform,
    }),
  );
}

function buildMixedLetterStyles(): FontStyle[] {
  // Deterministic mixed styles: alternate between two mappings
  const pairs: Array<{
    id: string;
    name: string;
    category: FontStyle["category"];
    tags: string[];
    popularity: number;
    a: Record<string, string>;
    b: Record<string, string>;
  }> = [
    {
      id: "mixed-bold-italic",
      name: "Mixto Negrita/Cursiva",
      category: "rare",
      tags: ["mixto", "rara"],
      popularity: 67,
      a: maps.sansBold,
      b: maps.italicSerif,
    },
    {
      id: "mixed-script-sans",
      name: "Mixto Script/Sans",
      category: "rare",
      tags: ["mixto", "cursiva"],
      popularity: 64,
      a: maps.script,
      b: maps.sansSerif,
    },
    {
      id: "mixed-gothic-bold",
      name: "Mixto Gótica/Negrita",
      category: "gothic",
      tags: ["mixto", "gotica"],
      popularity: 66,
      a: maps.fraktur,
      b: maps.sansBold,
    },
    {
      id: "mixed-double-mono",
      name: "Mixto Doble/Mono",
      category: "rare",
      tags: ["mixto", "rara"],
      popularity: 55,
      a: maps.doubleStruck,
      b: maps.monospace,
    },
    {
      id: "mixed-fullwidth-bold",
      name: "Mixto Ancho/Negrita",
      category: "aesthetic",
      tags: ["mixto", "aesthetic"],
      popularity: 69,
      a: maps.fullwidth,
      b: maps.sansBold,
    },
  ];

  return pairs.map((p) =>
    style({
      id: p.id,
      name: p.name,
      category: p.category,
      tags: p.tags,
      popularity: p.popularity,
      compatibility: "medium",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      transform: (text) => {
        let i = 0;
        return text.replace(/\S/gu, (ch) => {
          const map = i % 2 === 0 ? p.a : p.b;
          i += 1;
          return map[ch] ?? ch;
        });
      },
    }),
  );
}

/** Extra separator / symbol-only decorative variants to enrich coverage. */
function buildSeparatorStyles(): FontStyle[] {
  const separators: Array<{ id: string; name: string; sep: string; popularity: number }> = [
    { id: "sep-heart", name: "Separador Corazón", sep: " ♥ ", popularity: 70 },
    { id: "sep-star", name: "Separador Estrella", sep: " ★ ", popularity: 68 },
    { id: "sep-sparkle", name: "Separador Destello", sep: " ✦ ", popularity: 66 },
    { id: "sep-flower", name: "Separador Flor", sep: " ❀ ", popularity: 64 },
    { id: "sep-diamond", name: "Separador Diamante", sep: " ◆ ", popularity: 62 },
    { id: "sep-dot", name: "Separador Punto", sep: " • ", popularity: 60 },
    { id: "sep-wave", name: "Separador Onda", sep: " ≈ ", popularity: 58 },
    { id: "sep-arrow", name: "Separador Flecha", sep: " → ", popularity: 63 },
    { id: "sep-pipe", name: "Separador Barra", sep: " | ", popularity: 55 },
    { id: "sep-slash", name: "Separador Diagonal", sep: " / ", popularity: 54 },
    { id: "sep-tilde", name: "Separador Tilde", sep: " ~ ", popularity: 57 },
    { id: "sep-emdash", name: "Separador Raya", sep: " — ", popularity: 56 },
    { id: "sep-triple-dot", name: "Separador Ellipsis", sep: " … ", popularity: 53 },
    { id: "sep-music", name: "Separador Música", sep: " ♪ ", popularity: 59 },
    { id: "sep-peace", name: "Separador Paz", sep: " ☮ ", popularity: 48 },
    { id: "sep-fire", name: "Separador Fuego", sep: " 🔥 ", popularity: 67 },
    { id: "sep-crown", name: "Separador Corona", sep: " ♛ ", popularity: 65 },
    { id: "sep-sparkles", name: "Separador Brillos", sep: " ✨ ", popularity: 72 },
    { id: "sep-leaf", name: "Separador Hoja", sep: " 🍃 ", popularity: 58 },
    { id: "sep-moon", name: "Separador Luna", sep: " ☾ ", popularity: 60 },
  ];

  return separators.map((s) =>
    style({
      id: s.id,
      name: s.name,
      category: "symbols",
      tags: ["separador", "simbolo"],
      popularity: s.popularity,
      compatibility: "high",
      supportsLatin: true,
      supportsNumbers: true,
      supportsAccents: true,
      decorative: true,
      transform: createInterleaveTransform(s.sep),
    }),
  );
}

function buildMoreDecorativeCombos(): FontStyle[] {
  const bases: Array<{
    key: string;
    label: string;
    fn: (t: string) => string;
    category: FontStyle["category"];
  }> = [
    { key: "script", label: "Script", fn: createMappingTransform(maps.script), category: "cursive" },
    { key: "bold", label: "Negrita", fn: createMappingTransform(maps.sansBold), category: "bold" },
    { key: "fraktur", label: "Gótica", fn: createMappingTransform(maps.fraktur), category: "gothic" },
    { key: "smallcaps", label: "Versalitas", fn: createMappingTransform(maps.smallCaps), category: "small" },
    { key: "fullwidth", label: "Ancho", fn: createMappingTransform(maps.fullwidth), category: "aesthetic" },
    { key: "double", label: "Doble", fn: createMappingTransform(maps.doubleStruck), category: "elegant" },
  ];

  const ornaments: Array<{ key: string; label: string; left: string; right: string; tags: string[] }> = [
    { key: "moon", label: "Luna", left: "☾", right: "☽", tags: ["luna"] },
    { key: "spark", label: "Chispa", left: "⋆", right: "⋆", tags: ["estrella"] },
    { key: "flower2", label: "Pétalo", left: "❁", right: "❁", tags: ["flor"] },
    { key: "heart2", label: "Corazón Soft", left: "❥", right: "❥", tags: ["corazon"] },
    { key: "corner2", label: "Esquina Soft", left: "｢", right: "｣", tags: ["corchete"] },
    { key: "brace", label: "Llave Soft", left: "⦃", right: "⦄", tags: ["llave"] },
    { key: "arrow2", label: "Flecha Soft", left: "▹", right: "◃", tags: ["flecha"] },
    { key: "dot2", label: "Punto Soft", left: "˚", right: "˚", tags: ["punto"] },
  ];

  const out: FontStyle[] = [];
  let pop = 50;

  for (const base of bases) {
    for (const orn of ornaments) {
      out.push(
        style({
          id: `combo-${base.key}-${orn.key}`,
          name: `${base.label} ${orn.label}`,
          category: base.category,
          tags: [...orn.tags, base.key],
          popularity: pop,
          compatibility: "high",
          supportsLatin: true,
          supportsNumbers: true,
          supportsAccents: true,
          decorative: true,
          transform: composeTransforms(base.fn, createFrameTransform(orn.left, orn.right)),
        }),
      );
      pop = Math.max(40, pop - 1);
    }
  }

  return out;
}

export function buildFontStyles(): FontStyle[] {
  const styles: FontStyle[] = [
    ...buildCoreStyles(),
    ...buildSpecialStyles(),
    ...COMBINING_STYLES.map((c) =>
      style({
        id: c.id,
        name: c.name,
        category: c.category,
        tags: c.tags,
        popularity: c.popularity,
        compatibility: "medium",
        supportsLatin: true,
        supportsNumbers: true,
        supportsAccents: true,
        combining: true,
        transform: createCombiningTransform(c.marks, { perChar: c.perChar }),
      }),
    ),
    ...FRAMES.map((f) =>
      style({
        id: f.id,
        name: f.name,
        category: f.category,
        tags: f.tags,
        popularity: f.popularity,
        compatibility: f.compatibility ?? "high",
        supportsLatin: true,
        supportsNumbers: true,
        supportsAccents: true,
        decorative: true,
        transform: createFrameTransform(f.left, f.right),
      }),
    ),
    ...WRAPPERS.map((w) =>
      style({
        id: w.id,
        name: w.name,
        category: w.category,
        tags: w.tags,
        popularity: w.popularity,
        compatibility: "high",
        supportsLatin: true,
        supportsNumbers: true,
        supportsAccents: true,
        decorative: true,
        transform: createWrapperTransform(w.prefix, w.suffix ?? w.prefix),
      }),
    ),
    ...buildComposedStyles(),
    ...buildMixedLetterStyles(),
    ...buildSeparatorStyles(),
    ...buildMoreDecorativeCombos(),
  ];

  // Stable uniqueness by id
  const seen = new Set<string>();
  return styles.filter((s) => {
    if (seen.has(s.id)) return false;
    seen.add(s.id);
    return true;
  });
}

export const fontStyles: FontStyle[] = buildFontStyles();

export const FONT_CATEGORIES: Array<{ id: FontCategoryId; label: string }> = [
  { id: "all", label: "Todos" },
  { id: "popular", label: "Populares" },
  { id: "favorites", label: "Favoritos" },
  { id: "cursive", label: "Cursivas" },
  { id: "elegant", label: "Elegantes" },
  { id: "bold", label: "Negritas" },
  { id: "gothic", label: "Góticas" },
  { id: "aesthetic", label: "Aesthetic" },
  { id: "bubble", label: "Burbujas" },
  { id: "small", label: "Pequeñas" },
  { id: "decorative", label: "Decorativas" },
  { id: "symbols", label: "Símbolos" },
  { id: "gaming", label: "Gaming" },
  { id: "kawaii", label: "Kawaii" },
  { id: "glitch", label: "Glitch" },
  { id: "rare", label: "Raras" },
];

export function getStylesByCategory(
  styles: FontStyle[],
  category: FontCategoryId,
  favoriteIds: Set<string>,
): FontStyle[] {
  if (category === "all") return styles;
  if (category === "popular") {
    return [...styles].sort((a, b) => b.popularity - a.popularity);
  }
  if (category === "favorites") {
    return styles.filter((s) => favoriteIds.has(s.id));
  }
  return styles.filter((s) => s.category === category);
}

export function searchStyles(styles: FontStyle[], query: string): FontStyle[] {
  const q = query.trim().toLowerCase();
  if (!q) return styles;
  return styles.filter((s) => {
    if (s.name.toLowerCase().includes(q)) return true;
    if (s.category.toLowerCase().includes(q)) return true;
    if (s.id.toLowerCase().includes(q)) return true;
    return s.tags.some((t) => t.toLowerCase().includes(q));
  });
}
