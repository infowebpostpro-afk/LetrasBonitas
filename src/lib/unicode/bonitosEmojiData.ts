// Curated Beautiful/Cute Emojis Dataset for LetrasBonitas (/emojis/bonitos/)
// Specifically curated for visual charm, sweetness, romance, nature, and cute reactions.

export type BonitoCategoryId =
  | 'todos'
  | 'amor'
  | 'flores'
  | 'brillos'
  | 'cute'
  | 'naturaleza'
  | 'luna'
  | 'animales'
  | 'comida'
  | 'playa'
  | 'celebracion'
  | 'soft';

export interface BonitoCategory {
  id: BonitoCategoryId;
  label: string;
  icon: string;
}

export interface BonitoEmoji {
  id: string;
  char: string;
  name: string;
  keywords: string[];
  categories: BonitoCategoryId[];
  featured?: boolean;
}

export interface BonitoCombo {
  id: string;
  combo: string;
  name: string;
  category: BonitoCategoryId;
}

export const BONITO_CATEGORIES: BonitoCategory[] = [
  { id: 'todos', label: 'Todos', icon: '🌐' },
  { id: 'amor', label: 'Amor', icon: '💕' },
  { id: 'flores', label: 'Flores', icon: '🌸' },
  { id: 'brillos', label: 'Brillos', icon: '✨' },
  { id: 'cute', label: 'Cute', icon: '🎀' },
  { id: 'naturaleza', label: 'Naturaleza', icon: '🦋' },
  { id: 'luna', label: 'Luna', icon: '🌙' },
  { id: 'animales', label: 'Animales', icon: '🐰' },
  { id: 'comida', label: 'Comida', icon: '🍓' },
  { id: 'playa', label: 'Playa', icon: '🌊' },
  { id: 'celebracion', label: 'Celebración', icon: '🎉' },
  { id: 'soft', label: 'Soft', icon: '☁️' },
];

export const BONITO_EMOJIS: BonitoEmoji[] = [
  // ── AMOR Y CORAZONES ──
  {
    id: 'b-corazon-rosa',
    char: '🩷',
    name: 'Corazón rosa',
    keywords: ['corazon', 'rosa', 'amor', 'tierno', 'cute', 'pink heart', 'cariño', 'bonito'],
    categories: ['amor', 'cute', 'soft'],
    featured: true,
  },
  {
    id: 'b-corazon-rojo',
    char: '❤️',
    name: 'Corazón rojo',
    keywords: ['corazon', 'amor', 'rojo', 'pasion', 'romance', 'love', 'cariño', 'clasico'],
    categories: ['amor'],
    featured: true,
  },
  {
    id: 'b-dos-corazones',
    char: '💕',
    name: 'Dos corazones',
    keywords: ['corazones', 'amor', 'pareja', 'rosa', 'cariño', 'cute', 'love'],
    categories: ['amor', 'cute'],
    featured: true,
  },
  {
    id: 'b-corazon-creciente',
    char: '💗',
    name: 'Corazón creciente',
    keywords: ['corazon', 'rosa', 'latido', 'amor', 'emocion', 'palpitar'],
    categories: ['amor'],
  },
  {
    id: 'b-corazon-brillante',
    char: '💖',
    name: 'Corazón brillante',
    keywords: ['corazon', 'brillo', 'destellos', 'rosa', 'amor', 'sparkle', 'cute'],
    categories: ['amor', 'brillos', 'cute'],
  },
  {
    id: 'b-corazon-flecha',
    char: '💘',
    name: 'Corazón con flecha',
    keywords: ['cupido', 'flecha', 'enamorado', 'amor', 'flechazo', 'romance'],
    categories: ['amor'],
  },
  {
    id: 'b-corazon-lazo',
    char: '💝',
    name: 'Corazón con lazo',
    keywords: ['regalo', 'lazo', 'caja', 'amor', 'especial', 'san valentin'],
    categories: ['amor', 'cute'],
  },
  {
    id: 'b-carta-amor',
    char: '💌',
    name: 'Carta de amor',
    keywords: ['carta', 'sobre', 'mensaje', 'amor', 'romantico', 'corazon'],
    categories: ['amor', 'cute'],
  },
  {
    id: 'b-cara-corazones',
    char: '🥰',
    name: 'Cara con corazones',
    keywords: ['enamorado', 'tierno', 'amor', 'sonrisa', 'cariño', 'feliz', 'cute'],
    categories: ['amor', 'cute'],
    featured: true,
  },
  {
    id: 'b-cara-ojos-corazon',
    char: '😍',
    name: 'Cara con ojos de corazón',
    keywords: ['enamorado', 'me encanta', 'admiracion', 'amor', 'love'],
    categories: ['amor'],
  },
  {
    id: 'b-cara-beso',
    char: '😘',
    name: 'Cara lanzando beso',
    keywords: ['beso', 'muac', 'amor', 'cariño', 'kiss'],
    categories: ['amor'],
  },
  {
    id: 'b-corazon-blanco',
    char: '🤍',
    name: 'Corazón blanco',
    keywords: ['corazon', 'blanco', 'paz', 'puro', 'minimalista', 'soft', 'clean'],
    categories: ['amor', 'soft'],
    featured: true,
  },
  {
    id: 'b-manos-corazon',
    char: '🫶',
    name: 'Manos en corazón',
    keywords: ['manos', 'corazon', 'gracias', 'amor', 'cariño', 'aprecio'],
    categories: ['amor', 'cute'],
  },

  // ── FLORES Y NATURALEZA ──
  {
    id: 'b-flor-cerezo',
    char: '🌸',
    name: 'Flor de cerezo',
    keywords: ['flor', 'cerezo', 'sakura', 'rosa', 'primavera', 'japon', 'cute', 'bonito'],
    categories: ['flores', 'cute', 'soft'],
    featured: true,
  },
  {
    id: 'b-tulipan',
    char: '🌷',
    name: 'Tulipán',
    keywords: ['tulipan', 'flor', 'rosa', 'primavera', 'jardin', 'elegante', 'bonito'],
    categories: ['flores', 'naturaleza'],
    featured: true,
  },
  {
    id: 'b-rosa',
    char: '🌹',
    name: 'Rosa',
    keywords: ['rosa', 'flor', 'rojo', 'romance', 'amor', 'pasion', 'jardin'],
    categories: ['flores', 'amor'],
    featured: true,
  },
  {
    id: 'b-hibisco',
    char: '🌺',
    name: 'Hibisco',
    keywords: ['hibisco', 'flor', 'tropical', 'verano', 'hawaiana', 'playa'],
    categories: ['flores', 'playa'],
  },
  {
    id: 'b-girasol',
    char: '🌻',
    name: 'Girasol',
    keywords: ['girasol', 'flor', 'amarillo', 'sol', 'alegria', 'verano', 'campo'],
    categories: ['flores', 'naturaleza'],
  },
  {
    id: 'b-margarita',
    char: '🌼',
    name: 'Flor blanca',
    keywords: ['margarita', 'flor', 'blanca', 'amarillo', 'simple', 'campo', 'primavera'],
    categories: ['flores', 'naturaleza', 'soft'],
  },
  {
    id: 'b-loto',
    char: '🪷',
    name: 'Flor de loto',
    keywords: ['loto', 'flor', 'zen', 'paz', 'agua', 'meditacion', 'rosa'],
    categories: ['flores', 'soft'],
  },
  {
    id: 'b-ramo-flores',
    char: '💐',
    name: 'Ramo de flores',
    keywords: ['ramo', 'flores', 'regalo', 'cumpleaños', 'felicidades', 'primavera'],
    categories: ['flores', 'celebracion'],
  },
  {
    id: 'b-jacinto',
    char: '🪻',
    name: 'Jacinto / Flor lila',
    keywords: ['jacinto', 'flor', 'morado', 'lila', 'lavanda', 'primavera'],
    categories: ['flores', 'soft'],
  },
  {
    id: 'b-trebol',
    char: '🍀',
    name: 'Trébol de 4 hojas',
    keywords: ['trebol', 'suerte', 'verde', 'naturaleza', 'deseo', 'fortuna'],
    categories: ['naturaleza'],
  },
  {
    id: 'b-hoja-viento',
    char: '🍃',
    name: 'Hojas al viento',
    keywords: ['hojas', 'verde', 'viento', 'fresco', 'arbol', 'naturaleza'],
    categories: ['naturaleza', 'soft'],
  },
  {
    id: 'b-hierba',
    char: '🌿',
    name: 'Hierba / Rama',
    keywords: ['hierba', 'rama', 'verde', 'planta', 'botanica', 'calma', 'te'],
    categories: ['naturaleza', 'soft'],
    featured: true,
  },

  // ── ESTRELLAS Y BRILLOS ──
  {
    id: 'b-destellos',
    char: '✨',
    name: 'Brillos / Destellos',
    keywords: ['brillo', 'destellos', 'sparkle', 'magia', 'nuevo', 'limpio', 'estrellas', 'cute'],
    categories: ['brillos', 'cute'],
    featured: true,
  },
  {
    id: 'b-estrella-amarilla',
    char: '⭐',
    name: 'Estrella',
    keywords: ['estrella', 'amarillo', 'cielo', 'noche', 'exito', 'favorito', 'star'],
    categories: ['brillos', 'luna'],
    featured: true,
  },
  {
    id: 'b-estrella-brillante',
    char: '🌟',
    name: 'Estrella brillante',
    keywords: ['estrella', 'brillante', 'resplandor', 'dorado', 'cielo', 'luz'],
    categories: ['brillos', 'luna'],
  },
  {
    id: 'b-estrella-fugaz',
    char: '💫',
    name: 'Estrella mareada / Giro',
    keywords: ['estrella', 'giro', 'magia', 'efecto', 'destello', 'movimiento'],
    categories: ['brillos'],
  },
  {
    id: 'b-sol',
    char: '☀️',
    name: 'Sol brillante',
    keywords: ['sol', 'dia', 'luz', 'calor', 'verano', 'playa', 'brillante'],
    categories: ['brillos', 'playa'],
  },
  {
    id: 'b-estrella-disparada',
    char: '🌠',
    name: 'Estrella fugaz',
    keywords: ['estrella fugaz', 'deseo', 'noche', 'cielo', 'meteoro', 'magia'],
    categories: ['brillos', 'luna'],
  },

  // ── CUTE, TIERNO Y SOFT ──
  {
    id: 'b-lazo-rosa',
    char: '🎀',
    name: 'Lazo rosa',
    keywords: ['lazo', 'coquette', 'rosa', 'cute', 'regalo', 'tierno', 'chica', 'ribbon'],
    categories: ['cute', 'soft'],
    featured: true,
  },
  {
    id: 'b-oso-peluche',
    char: '🧸',
    name: 'Oso de peluche',
    keywords: ['oso', 'peluche', 'tierno', 'cute', 'juguete', 'suave', 'abrazo', 'teddy'],
    categories: ['cute', 'soft'],
    featured: true,
  },
  {
    id: 'b-zapatilla-ballet',
    char: '🩰',
    name: 'Zapatilla de ballet',
    keywords: ['ballet', 'zapatillas', 'coquette', 'danza', 'rosa', 'elegante', 'baile'],
    categories: ['cute'],
  },
  {
    id: 'b-mariposa',
    char: '🦋',
    name: 'Mariposa',
    keywords: ['mariposa', 'azul', 'naturaleza', 'transformacion', 'volar', 'cute', 'bonito'],
    categories: ['cute', 'naturaleza'],
    featured: true,
  },
  {
    id: 'b-burbujas',
    char: '🫧',
    name: 'Burbujas',
    keywords: ['burbujas', 'agua', 'jabon', 'aire', 'limpio', 'soft', 'cute'],
    categories: ['cute', 'soft', 'playa'],
  },
  {
    id: 'b-espejo',
    char: '🪞',
    name: 'Espejo de mano',
    keywords: ['espejo', 'coquette', 'reflejo', 'belleza', 'vintage', 'maquillaje'],
    categories: ['cute'],
  },
  {
    id: 'b-vela',
    char: '🕯️',
    name: 'Vela encendida',
    keywords: ['vela', 'luz', 'calidez', 'fuego', 'noche', 'paz', 'vintage'],
    categories: ['cute', 'soft'],
  },
  {
    id: 'b-alas',
    char: '🪽',
    name: 'Ala blanca',
    keywords: ['ala', 'angel', 'blanco', 'volar', 'paz', 'cielo', 'suave'],
    categories: ['cute', 'soft'],
  },
  {
    id: 'b-cisne',
    char: '🦢',
    name: 'Cisne',
    keywords: ['cisne', 'elegante', 'blanco', 'ave', 'lago', 'coquette', 'paz'],
    categories: ['cute', 'animales'],
  },

  // ── LUNA Y CIELO ──
  {
    id: 'b-luna-creciente',
    char: '🌙',
    name: 'Luna creciente',
    keywords: ['luna', 'noche', 'cielo', 'dormir', 'sueño', 'magia', 'celestial', 'moon'],
    categories: ['luna'],
    featured: true,
  },
  {
    id: 'b-luna-cuarto',
    char: '🌛',
    name: 'Luna con cara creciente',
    keywords: ['luna', 'cara', 'noche', 'cuento', 'sueño', 'magia'],
    categories: ['luna'],
  },
  {
    id: 'b-luna-menguante',
    char: '🌜',
    name: 'Luna con cara menguante',
    keywords: ['luna', 'cara', 'noche', 'misterio', 'cielo'],
    categories: ['luna'],
  },
  {
    id: 'b-luna-nueva-cara',
    char: '🌚',
    name: 'Luna nueva con cara',
    keywords: ['luna', 'negro', 'misterio', 'gracioso', 'ironia', 'noche'],
    categories: ['luna'],
  },
  {
    id: 'b-nube',
    char: '☁️',
    name: 'Nube blanca',
    keywords: ['nube', 'cielo', 'blanco', 'soft', 'suave', 'lluvia', 'clima'],
    categories: ['luna', 'soft'],
  },
  {
    id: 'b-planeta',
    char: '🪐',
    name: 'Planeta con anillos',
    keywords: ['planeta', 'saturno', 'espacio', 'galaxia', 'celestial', 'universo'],
    categories: ['luna'],
  },
  {
    id: 'b-via-lactea',
    char: '🌌',
    name: 'Vía Láctea / Noche estrellada',
    keywords: ['galaxia', 'universo', 'noche', 'estrellas', 'espacio', 'celestial'],
    categories: ['luna'],
  },

  // ── ANIMALES BONITOS ──
  {
    id: 'b-conejo',
    char: '🐰',
    name: 'Cara de conejo',
    keywords: ['conejo', 'bunny', 'tierno', 'cute', 'blanco', 'orejas', 'pascua'],
    categories: ['animales', 'cute'],
    featured: true,
  },
  {
    id: 'b-gato',
    char: '🐱',
    name: 'Cara de gato',
    keywords: ['gato', 'gatito', 'michi', 'cat', 'mascota', 'cute', 'tierno'],
    categories: ['animales', 'cute'],
    featured: true,
  },
  {
    id: 'b-perro',
    char: '🐶',
    name: 'Cara de perro',
    keywords: ['perro', 'perrito', 'dog', 'cachorro', 'mascota', 'tierno', 'amigo'],
    categories: ['animales', 'cute'],
  },
  {
    id: 'b-hamster',
    char: '🐹',
    name: 'Hámster',
    keywords: ['hamster', 'roedor', 'pequeño', 'tierno', 'cute', 'mejillas'],
    categories: ['animales', 'cute'],
  },
  {
    id: 'b-panda',
    char: '🐼',
    name: 'Panda',
    keywords: ['panda', 'oso', 'bambu', 'blanco y negro', 'tierno', 'cute', 'china'],
    categories: ['animales', 'cute'],
  },
  {
    id: 'b-oso',
    char: '🐻',
    name: 'Oso pardo',
    keywords: ['oso', 'marron', 'bosque', 'tierno', 'bear'],
    categories: ['animales'],
  },
  {
    id: 'b-koala',
    char: '🐨',
    name: 'Koala',
    keywords: ['koala', 'australia', 'eucalipto', 'dormir', 'cute', 'tierno'],
    categories: ['animales', 'cute'],
  },
  {
    id: 'b-zorro',
    char: '🦊',
    name: 'Zorro',
    keywords: ['zorro', 'naranja', 'bosque', 'astuto', 'otono', 'cute'],
    categories: ['animales'],
  },
  {
    id: 'b-pollito',
    char: '🐣',
    name: 'Pollito saliendo del cascarón',
    keywords: ['pollito', 'bebe', 'amarillo', 'cascaron', 'cute', 'tierno'],
    categories: ['animales', 'cute'],
  },
  {
    id: 'b-abeja',
    char: '🐝',
    name: 'Abeja',
    keywords: ['abeja', 'miel', 'flores', 'jardin', 'primavera', 'naturaleza'],
    categories: ['animales', 'naturaleza'],
  },
  {
    id: 'b-delfin',
    char: '🐬',
    name: 'Delfín',
    keywords: ['delfin', 'mar', 'agua', 'playa', 'azul', 'oceano', 'inteligente'],
    categories: ['animales', 'playa'],
  },

  // ── COMIDA BONITA ──
  {
    id: 'b-fresa',
    char: '🍓',
    name: 'Fresa',
    keywords: ['fresa', 'fruta', 'rojo', 'dulce', 'strawberry', 'cute', 'postre'],
    categories: ['comida', 'cute'],
    featured: true,
  },
  {
    id: 'b-pastel',
    char: '🍰',
    name: 'Tarta de fresa',
    keywords: ['pastel', 'tarta', 'fresa', 'dulce', 'postre', 'cumpleaños', 'cake'],
    categories: ['comida', 'cute', 'celebracion'],
  },
  {
    id: 'b-cupcake',
    char: '🧁',
    name: 'Magdalena / Cupcake',
    keywords: ['cupcake', 'magdalena', 'dulce', 'postre', 'fiesta', 'crema'],
    categories: ['comida', 'cute', 'celebracion'],
  },
  {
    id: 'b-te-burbujas',
    char: '🧋',
    name: 'Té de burbujas / Boba',
    keywords: ['boba', 'bubble tea', 'te', 'bebida', 'dulce', 'tapioca'],
    categories: ['comida', 'cute'],
  },
  {
    id: 'b-te-verde',
    char: '🍵',
    name: 'Taza de té verde',
    keywords: ['te', 'matcha', 'verde', 'calma', 'caliente', 'zen'],
    categories: ['comida', 'naturaleza', 'soft'],
  },
  {
    id: 'b-cereza',
    char: '🍒',
    name: 'Cerezas',
    keywords: ['cerezas', 'fruta', 'rojo', 'par', 'dulce', 'cherry'],
    categories: ['comida', 'cute'],
  },
  {
    id: 'b-melocoton',
    char: '🍑',
    name: 'Melocotón',
    keywords: ['melocoton', 'fruta', 'dulce', 'rosa', 'peach'],
    categories: ['comida'],
  },
  {
    id: 'b-helado',
    char: '🍦',
    name: 'Helado suave',
    keywords: ['helado', 'postre', 'cono', 'verano', 'dulce', 'crema'],
    categories: ['comida', 'playa'],
  },

  // ── PLAYA Y VERANO ──
  {
    id: 'b-ola',
    char: '🌊',
    name: 'Ola de mar',
    keywords: ['ola', 'mar', 'agua', 'playa', 'oceano', 'azul', 'verano'],
    categories: ['playa', 'naturaleza'],
    featured: true,
  },
  {
    id: 'b-concha',
    char: '🐚',
    name: 'Concha marina',
    keywords: ['concha', 'playa', 'mar', 'arena', 'oceano', 'caracol', 'verano'],
    categories: ['playa', 'cute'],
    featured: true,
  },
  {
    id: 'b-isla',
    char: '🏝️',
    name: 'Isla desierta con palmera',
    keywords: ['isla', 'playa', 'palmera', 'vacaciones', 'tropical', 'verano'],
    categories: ['playa'],
  },
  {
    id: 'b-palmera',
    char: '🌴',
    name: 'Palmera',
    keywords: ['palmera', 'playa', 'tropical', 'verano', 'calor', 'isla'],
    categories: ['playa', 'naturaleza'],
  },
  {
    id: 'b-coral',
    char: '🪸',
    name: 'Coral marino',
    keywords: ['coral', 'mar', 'arrecife', 'oceano', 'fondo marino', 'rosa'],
    categories: ['playa', 'naturaleza'],
  },
  {
    id: 'b-bebida-tropical',
    char: '🍹',
    name: 'Cóctel tropical',
    keywords: ['coctel', 'bebida', 'verano', 'playa', 'vacaciones', 'fiesta'],
    categories: ['playa', 'celebracion'],
  },

  // ── CELEBRACIÓN ──
  {
    id: 'b-confeti',
    char: '🎉',
    name: 'Cañón de confeti',
    keywords: ['confeti', 'fiesta', 'celebracion', 'cumpleaños', 'felicidades', 'alegria'],
    categories: ['celebracion'],
    featured: true,
  },
  {
    id: 'b-tarta-cumple',
    char: '🎂',
    name: 'Tarta de cumpleaños',
    keywords: ['tarta', 'cumpleaños', 'pastel', 'velas', 'fiesta', 'celebrar'],
    categories: ['celebracion', 'comida'],
  },
  {
    id: 'b-champan',
    char: '🍾',
    name: 'Botella de champán',
    keywords: ['champan', 'brindis', 'celebracion', 'fiesta', 'vino'],
    categories: ['celebracion'],
  },
  {
    id: 'b-regalo',
    char: '🎁',
    name: 'Caja de regalo',
    keywords: ['regalo', 'caja', 'lazo', 'sorpresa', 'navidad', 'cumpleaños'],
    categories: ['celebracion', 'cute'],
  },
  {
    id: 'b-globo',
    char: '🎈',
    name: 'Globo rojo',
    keywords: ['globo', 'fiesta', 'cumpleaños', 'volar', 'celebracion'],
    categories: ['celebracion'],
  },
];

// Curated small combinations (Combos Bonitos)
export const COMBOS_BONITOS: BonitoCombo[] = [
  { id: 'cb-1', combo: '🎀 🩷 🌸', name: 'Lazo y flor rosa', category: 'cute' },
  { id: 'cb-2', combo: '🌙 ✨ ☁️', name: 'Noche celestial', category: 'luna' },
  { id: 'cb-3', combo: '🦋 🌷 🤍', name: 'Mariposa y tulipán', category: 'naturaleza' },
  { id: 'cb-4', combo: '🍓 🌸 🧸', name: 'Fresa y osito', category: 'cute' },
  { id: 'cb-5', combo: '🐚 🌊 ☀️', name: 'Mar y brisa soleada', category: 'playa' },
  { id: 'cb-6', combo: '🩷 🌸', name: 'Doble encanto rosa', category: 'amor' },
  { id: 'cb-7', combo: '💌 💕', name: 'Carta con cariño', category: 'amor' },
  { id: 'cb-8', combo: '🎀 🩷', name: 'Coquette suave', category: 'cute' },
  { id: 'cb-9', combo: '🥰 💖', name: 'Amor y brillo', category: 'amor' },
  { id: 'cb-10', combo: '🌷 🦋', name: 'Primavera libre', category: 'flores' },
  { id: 'cb-11', combo: '🌸 🍃', name: 'Brisa de cerezo', category: 'flores' },
  { id: 'cb-12', combo: '🌻 🐝', name: 'Girasol y abeja', category: 'naturaleza' },
  { id: 'cb-13', combo: '🪷 🌿', name: 'Loto zen y calma', category: 'soft' },
  { id: 'cb-14', combo: '✨ 🤍', name: 'Brillo puro', category: 'brillos' },
  { id: 'cb-15', combo: '🌟 💛', name: 'Estrella dorada', category: 'brillos' },
  { id: 'cb-16', combo: '💫 🩷', name: 'Destello dulce', category: 'cute' },
  { id: 'cb-17', combo: '🐰 🌸', name: 'Conejito en flor', category: 'animales' },
  { id: 'cb-18', combo: '🐬 🫧', name: 'Delfín y burbujas', category: 'playa' },
];

// Search helper with accent normalization
export function searchBonitos(query: string, category: BonitoCategoryId = 'todos'): BonitoEmoji[] {
  const clean = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

  return BONITO_EMOJIS.filter(emoji => {
    // Category match
    if (category !== 'todos' && !emoji.categories.includes(category)) {
      return false;
    }

    if (!clean) return true;

    // Search query matches emoji char, name or keywords
    if (emoji.char.includes(clean)) return true;

    const cleanName = emoji.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (cleanName.includes(clean)) return true;

    const matchedKeyword = emoji.keywords.some(kw =>
      kw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(clean)
    );
    if (matchedKeyword) return true;

    return false;
  });
}
