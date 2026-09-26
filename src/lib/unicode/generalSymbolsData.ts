export type MasterSymbolCategory =
  | 'todos'
  | 'emojis'
  | 'kaomoji'
  | 'aesthetic'
  | 'corazones'
  | 'estrellas'
  | 'flores'
  | 'lunas'
  | 'flechas'
  | 'coronas'
  | 'marcos'
  | 'separadores'
  | 'gaming'
  | 'manos'
  | 'animales'
  | 'musica'
  | 'marcas'
  | 'zodiaco'
  | 'matematicos'
  | 'caras'
  | 'comida'
  | 'deportes'
  | 'transporte'
  | 'banderas';

export interface GeneralSymbol {
  id: string;
  char: string;
  name: string;
  category: MasterSymbolCategory;
  tags: string[];
}

export interface ReadyCombo {
  id: string;
  combo: string;
  name: string;
  category: 'aesthetic' | 'enmarcado' | 'separador' | 'gaming' | 'kaomoji';
}

export const MASTER_CATEGORIES: { id: MasterSymbolCategory; label: string; icon: string }[] = [
  { id: 'todos', label: 'Todos', icon: '✨' },
  { id: 'emojis', label: 'Emojis Populares', icon: '😍' },
  { id: 'kaomoji', label: 'Kaomoji & Caritas', icon: 'ฅ^•ﻌ•^ฅ' },
  { id: 'aesthetic', label: 'Aesthetic & Coquette', icon: '୨୧' },
  { id: 'corazones', label: 'Corazones', icon: '💖' },
  { id: 'estrellas', label: 'Estrellas & Brillos', icon: '★' },
  { id: 'flores', label: 'Flores & Plantas', icon: '🌸' },
  { id: 'lunas', label: 'Lunas & Cielo', icon: '🌙' },
  { id: 'flechas', label: 'Flechas', icon: '➔' },
  { id: 'coronas', label: 'Coronas & Realeza', icon: '👑' },
  { id: 'marcos', label: 'Marcos & Bordes', icon: '『』' },
  { id: 'separadores', label: 'Separadores', icon: '━' },
  { id: 'gaming', label: 'Gaming & Nicks', icon: '🎮' },
  { id: 'manos', label: 'Manos & Gestos', icon: '✌️' },
  { id: 'caras', label: 'Caras & Emociones', icon: '😊' },
  { id: 'animales', label: 'Animales', icon: '🐾' },
  { id: 'comida', label: 'Comida & Bebida', icon: '🍕' },
  { id: 'deportes', label: 'Deportes & Actividades', icon: '⚽' },
  { id: 'transporte', label: 'Viajes & Transporte', icon: '✈️' },
  { id: 'musica', label: 'Música', icon: '🎵' },
  { id: 'marcas', label: 'Marcas & Checks', icon: '✔' },
  { id: 'zodiaco', label: 'Zodiaco', icon: '♈' },
  { id: 'matematicos', label: 'Matemáticos', icon: '±' },
  { id: 'banderas', label: 'Banderas', icon: '🏁' },
];

export const GENERAL_SYMBOLS: GeneralSymbol[] = [
  // ══════════════════════════════════════════════════════════════
  // ── EMOJIS POPULARES ──
  // ══════════════════════════════════════════════════════════════
  { id: 'em-1', char: '✨', name: 'Destellos Mágicos', category: 'emojis', tags: ['brillo', 'destellos', 'magia', 'aesthetic', 'estrellas', 'clean'] },
  { id: 'em-2', char: '💖', name: 'Corazón Brillante', category: 'emojis', tags: ['corazon', 'amor', 'brillo', 'rosa', 'cute'] },
  { id: 'em-3', char: '🔥', name: 'Fuego / Candela', category: 'emojis', tags: ['fuego', 'llama', 'insano', 'hot', 'fuerza', 'gaming'] },
  { id: 'em-4', char: '🥺', name: 'Carita Suplicante', category: 'emojis', tags: ['carita', 'ojitos', 'triste', 'tierno', 'cute', 'favor'] },
  { id: 'em-5', char: '🥰', name: 'Carita Enamorada', category: 'emojis', tags: ['carita', 'amor', 'corazones', 'feliz', 'pareja'] },
  { id: 'em-6', char: '💀', name: 'Calavera Clásica', category: 'emojis', tags: ['calavera', 'muerte', 'risa', 'humor', 'dark', 'gaming'] },
  { id: 'em-7', char: '👑', name: 'Corona Imperial', category: 'emojis', tags: ['corona', 'rey', 'reina', 'oro', 'lider', 'victoria'] },
  { id: 'em-8', char: '🎀', name: 'Lazo Rosa Coquette', category: 'emojis', tags: ['lazo', 'coquette', 'rosa', 'cute', 'kawaii', 'cinta'] },
  { id: 'em-9', char: '🍒', name: 'Cerezas Rojas', category: 'emojis', tags: ['cereza', 'fruta', 'rojo', 'aesthetic', 'verano'] },
  { id: 'em-10', char: '🍓', name: 'Fresa Dulce', category: 'emojis', tags: ['fresa', 'fruta', 'dulce', 'cute', 'comida'] },
  { id: 'em-11', char: '🧸', name: 'Osito de Peluche', category: 'emojis', tags: ['oso', 'peluche', 'tierno', 'juguete', 'cute'] },
  { id: 'em-12', char: '⚡', name: 'Rayo Eléctrico', category: 'emojis', tags: ['rayo', 'energia', 'trueno', 'rapido', 'flash', 'gaming'] },
  { id: 'em-13', char: '💫', name: 'Estrella Giratoria', category: 'emojis', tags: ['estrella', 'mareo', 'brillo', 'universo', 'destello'] },
  { id: 'em-14', char: '💎', name: 'Diamante Precioso', category: 'emojis', tags: ['diamante', 'joya', 'riqueza', 'brillante', 'lujo'] },
  { id: 'em-15', char: '🧿', name: 'Ojo Turco de Protección', category: 'emojis', tags: ['ojo', 'turco', 'proteccion', 'amuleto', 'suerte', 'azul'] },
  { id: 'em-16', char: '🔮', name: 'Bola de Cristal', category: 'emojis', tags: ['bola', 'cristal', 'magia', 'futuro', 'misterio', 'bruja'] },
  { id: 'em-17', char: '🫧', name: 'Burbujas de Agua', category: 'emojis', tags: ['burbuja', 'agua', 'limpio', 'jabon', 'aesthetic'] },
  { id: 'em-18', char: '🕯️', name: 'Vela Encendida', category: 'emojis', tags: ['vela', 'luz', 'calma', 'noche', 'misterio', 'aesthetic'] },
  { id: 'em-19', char: '🪄', name: 'Varita Mágica', category: 'emojis', tags: ['varita', 'magia', 'hechizo', 'fantasia', 'estrella'] },
  { id: 'em-20', char: '🌹', name: 'Rosa Roja', category: 'emojis', tags: ['rosa', 'flor', 'amor', 'romance', 'pasion'] },
  { id: 'em-21', char: '🦋', name: 'Mariposa Azul', category: 'emojis', tags: ['mariposa', 'azul', 'naturaleza', 'aesthetic', 'alas'] },
  { id: 'em-22', char: '🕊️', name: 'Paloma de la Paz', category: 'emojis', tags: ['paloma', 'paz', 'pajaro', 'ave', 'blanco', 'libertad'] },
  { id: 'em-23', char: '💌', name: 'Carta de Amor', category: 'emojis', tags: ['carta', 'correo', 'mensaje', 'amor', 'corazon', 'sobre'] },
  { id: 'em-24', char: '💋', name: 'Marca de Beso', category: 'emojis', tags: ['beso', 'labios', 'rojo', 'coqueto', 'amor'] },
  { id: 'em-25', char: '☕', name: 'Taza de Café Caliente', category: 'emojis', tags: ['cafe', 'taza', 'desayuno', 'caliente', 'aesthetic'] },
  { id: 'em-26', char: '🧋', name: 'Boba Tea / Té Perlas', category: 'emojis', tags: ['te', 'boba', 'bebida', 'dulce', 'cute'] },
  { id: 'em-27', char: '🎯', name: 'Diana en el Blanco', category: 'emojis', tags: ['diana', 'blanco', 'tiro', 'punteria', 'sniper', 'gaming'] },
  { id: 'em-28', char: '🎲', name: 'Dado de Juego', category: 'emojis', tags: ['dado', 'juego', 'azar', 'suerte', 'casino'] },
  { id: 'em-29', char: '🎧', name: 'Auriculares de Música', category: 'emojis', tags: ['auriculares', 'musica', 'audio', 'gamer', 'cancion'] },
  { id: 'em-30', char: '🪐', name: 'Planeta Saturno', category: 'emojis', tags: ['planeta', 'saturno', 'espacio', 'galaxia', 'cosmos'] },
  { id: 'em-31', char: '🕶️', name: 'Gafas de Sol Oscuras', category: 'emojis', tags: ['gafas', 'lentes', 'pro', 'cool', 'estilo'] },
  { id: 'em-32', char: '🧸', name: 'Peluche Mimoso', category: 'emojis', tags: ['peluche', 'tierno', 'abrazo'] },
  { id: 'em-33', char: '🖤', name: 'Corazón Negro Dark', category: 'emojis', tags: ['corazon', 'negro', 'dark', 'goth', 'aesthetic'] },
  { id: 'em-34', char: '🤍', name: 'Corazón Blanco Puro', category: 'emojis', tags: ['corazon', 'blanco', 'paz', 'puro', 'clean'] },
  { id: 'em-35', char: '💜', name: 'Corazón Morado Violeta', category: 'emojis', tags: ['corazon', 'morado', 'violeta', 'bts', 'aesthetic'] },
  { id: 'em-36', char: '💙', name: 'Corazón Azul Océano', category: 'emojis', tags: ['corazon', 'azul', 'mar', 'confianza'] },
  { id: 'em-37', char: '💚', name: 'Corazón Verde Vida', category: 'emojis', tags: ['corazon', 'verde', 'naturaleza', 'vida'] },
  { id: 'em-38', char: '💛', name: 'Corazón Amarillo Sol', category: 'emojis', tags: ['corazon', 'amarillo', 'amistad', 'sol'] },
  { id: 'em-39', char: '🧡', name: 'Corazón Naranja Fuego', category: 'emojis', tags: ['corazon', 'naranja', 'calidez', 'energia'] },
  { id: 'em-40', char: '🤎', name: 'Corazón Marrón Café', category: 'emojis', tags: ['corazon', 'marron', 'chocolate', 'tierra'] },

  // ══════════════════════════════════════════════════════════════
  // ── KAOMOJI & CARITAS JAPONESAS ──
  // ══════════════════════════════════════════════════════════════
  { id: 'km-1', char: '(｡♥‿♥｡)', name: 'Enamorado Kaomoji', category: 'kaomoji', tags: ['kaomoji', 'carita', 'amor', 'ojos corazon', 'tierno'] },
  { id: 'km-2', char: '(˘͈ᵕ˘͈)', name: 'Satisfecho Tierno', category: 'kaomoji', tags: ['kaomoji', 'feliz', 'tierno', 'cute', 'sonrisa'] },
  { id: 'km-3', char: 'ฅ^•ﻌ•^ฅ', name: 'Gatito con Patitas', category: 'kaomoji', tags: ['kaomoji', 'gato', 'animal', 'kawaii', 'patas', 'minino'] },
  { id: 'km-4', char: '(๑>ᴗ<๑)', name: 'Emocionado Feliz', category: 'kaomoji', tags: ['kaomoji', 'emocion', 'alegria', 'entusiasmo'] },
  { id: 'km-5', char: '( ˘ ³˘)♥', name: 'Lanzando Beso', category: 'kaomoji', tags: ['kaomoji', 'beso', 'corazon', 'mimos', 'amor'] },
  { id: 'km-6', char: '(｡•̀ᴗ-)✧', name: 'Guiño de Confianza', category: 'kaomoji', tags: ['kaomoji', 'guino', 'brillo', 'confianza', 'pro'] },
  { id: 'km-7', char: '٩(◕‿◕｡)۶', name: 'Brazos Arriba Festejo', category: 'kaomoji', tags: ['kaomoji', 'festejo', 'brazos', 'feliz', 'victoria'] },
  { id: 'km-8', char: '( ˶• ༝ •˶)', name: 'Tímido Bonito', category: 'kaomoji', tags: ['kaomoji', 'timido', 'sonrojado', 'kawaii', 'cute'] },
  { id: 'km-9', char: '(╥﹏╥)', name: 'Llorando Dramático', category: 'kaomoji', tags: ['kaomoji', 'llanto', 'triste', 'lagrimas', 'drama'] },
  { id: 'km-10', char: '(ง\'̀-\'́)ง', name: 'Puños de Pelea', category: 'kaomoji', tags: ['kaomoji', 'pelea', 'boxeo', 'fuerza', 'lucha', 'gaming'] },
  { id: 'km-11', char: '¯\\_(ツ)_/¯', name: 'Encogiéndose de Hombros', category: 'kaomoji', tags: ['kaomoji', 'shrug', 'duda', 'despreocupado', 'ironia'] },
  { id: 'km-12', char: '(づ｡◕‿‿◕｡)づ', name: 'Abrazo Suave', category: 'kaomoji', tags: ['kaomoji', 'abrazo', 'tierno', 'carino', 'hug'] },
  { id: 'km-13', char: '(⁄ ⁄•⁄ω⁄•⁄ ⁄)', name: 'Ultra Sonrojado', category: 'kaomoji', tags: ['kaomoji', 'sonrojo', 'verguenza', 'anime', 'cute'] },
  { id: 'km-14', char: 'ʕ•ᴥ•ʔ', name: 'Osito Dulce', category: 'kaomoji', tags: ['kaomoji', 'osito', 'animal', 'kawaii', 'oso'] },
  { id: 'km-15', char: '(✿◠‿◠)', name: 'Flor en el Cabello', category: 'kaomoji', tags: ['kaomoji', 'flor', 'paz', 'sonrisa', 'amable'] },
  { id: 'km-16', char: '( •̀ ω •́ )✧', name: 'Decidido y Firme', category: 'kaomoji', tags: ['kaomoji', 'decidido', 'firme', 'seguro', 'motivado'] },
  { id: 'km-17', char: '(╯°□°）╯︵ ┻━┻', name: 'Voltear Mesa Rage', category: 'kaomoji', tags: ['kaomoji', 'furia', 'enojo', 'mesa', 'rage', 'gaming'] },
  { id: 'km-18', char: '┬─┬ノ( º _ ºノ)', name: 'Acomodar la Mesa', category: 'kaomoji', tags: ['kaomoji', 'calma', 'mesa', 'orden', 'paz'] },
  { id: 'km-19', char: '(｡•́︿•̀｡)', name: 'Triste Triste', category: 'kaomoji', tags: ['kaomoji', 'triste', 'pena', 'depre'] },
  { id: 'km-20', char: '(◕‿◕)♡', name: 'Sonrisa con Corazón', category: 'kaomoji', tags: ['kaomoji', 'amor', 'sonrisa', 'afecto'] },
  { id: 'km-21', char: '(づ￣ ³￣)づ', name: 'Abrazo con Piquito', category: 'kaomoji', tags: ['kaomoji', 'beso', 'abrazo', 'mimos'] },
  { id: 'km-22', char: '(｡╯︵╰｡)', name: 'Apenado', category: 'kaomoji', tags: ['kaomoji', 'pena', 'disculpa', 'triste'] },
  { id: 'km-23', char: '(っ˘̩╭╮˘̩)っ', name: 'Llorando Necesita Abrazo', category: 'kaomoji', tags: ['kaomoji', 'llanto', 'abrazo', 'consolacion'] },
  { id: 'km-24', char: '(o´▽`o)', name: 'Alegre Simple', category: 'kaomoji', tags: ['kaomoji', 'feliz', 'alegria', 'amigos'] },
  { id: 'km-25', char: 'ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧', name: 'Pulgar Arriba Épico', category: 'kaomoji', tags: ['kaomoji', 'pulgar', 'aprobado', 'pro', 'bien'] },

  // ══════════════════════════════════════════════════════════════
  // ── AESTHETIC & COQUETTE ──
  // ══════════════════════════════════════════════════════════════
  { id: 'a-1', char: '୨୧', name: 'Lazo Coquette Clásico', category: 'aesthetic', tags: ['lazo', 'coquette', 'cute', 'kawaii', 'aesthetic', 'mono', 'cinta'] },
  { id: 'a-2', char: '౨ৎ', name: 'Mariposa Pequeña Coquette', category: 'aesthetic', tags: ['mariposa', 'coquette', 'cute', 'aesthetic', 'lazo'] },
  { id: 'a-3', char: 'ʚ', name: 'Ala Izquierda Querubín', category: 'aesthetic', tags: ['ala', 'angel', 'querubin', 'aesthetic', 'blanco'] },
  { id: 'a-4', char: 'ɞ', name: 'Ala Derecha Querubín', category: 'aesthetic', tags: ['ala', 'angel', 'querubin', 'aesthetic'] },
  { id: 'a-5', char: '𓆩', name: 'Guarda Ala Izquierda Dark', category: 'aesthetic', tags: ['ala', 'dark', 'goth', 'aesthetic', 'demonio'] },
  { id: 'a-6', char: '𓆪', name: 'Guarda Ala Derecha Dark', category: 'aesthetic', tags: ['ala', 'dark', 'goth', 'aesthetic'] },
  { id: 'a-7', char: 'ᡣ𐭩', name: 'Moño Tierno Mini', category: 'aesthetic', tags: ['mono', 'coquette', 'cute', 'lazo', 'aesthetic'] },
  { id: 'a-8', char: 'ᯓ', name: 'Viento Ligero / Rush', category: 'aesthetic', tags: ['viento', 'rush', 'aesthetic', 'movimiento'] },
  { id: 'a-9', char: '𖦹', name: 'Espiral Hipnótica', category: 'aesthetic', tags: ['espiral', 'remolino', 'aesthetic', 'mareo'] },
  { id: 'a-10', char: '˚ ༘ ೀ', name: 'Destello Líquido', category: 'aesthetic', tags: ['brillo', 'destello', 'gota', 'aesthetic'] },
  { id: 'a-11', char: '₊˚⊹', name: 'Polvo de Estrellas', category: 'aesthetic', tags: ['brillo', 'polvo', 'nube', 'aesthetic', 'hadas'] },
  { id: 'a-12', char: '༉‧₊˚', name: 'Onda Cósmica', category: 'aesthetic', tags: ['onda', 'brillo', 'magia', 'estrellas'] },
  { id: 'a-13', char: '⋆｡˚ ☁︎ ｡⋆', name: 'Nube entre Estrellas', category: 'aesthetic', tags: ['nube', 'cielo', 'estrellas', 'aesthetic'] },
  { id: 'a-14', char: '𓍢ִ໋', name: 'Corona de Hojitas Mini', category: 'aesthetic', tags: ['hoja', 'planta', 'nature', 'aesthetic'] },
  { id: 'a-15', char: '✧˚. ༘⋆', name: 'Destellos en Cadena', category: 'aesthetic', tags: ['destello', 'cadena', 'brillo', 'magico'] },
  { id: 'a-16', char: '𐙚', name: 'Lazo Grande Esculpido', category: 'aesthetic', tags: ['lazo', 'mono', 'coquette', 'cinta', 'regalo'] },
  { id: 'a-17', char: 'ᕱ⑅ᕱ', name: 'Conejito Coquette', category: 'aesthetic', tags: ['conejito', 'conejo', 'lazo', 'kawaii', 'cute'] },
  { id: 'a-18', char: '⁺◟', name: 'Comilla Elevada Cute', category: 'aesthetic', tags: ['adorno', 'comilla', 'curva'] },
  { id: 'a-19', char: '˗ˏˋ', name: 'Comilla Resplandor Izquierda', category: 'aesthetic', tags: ['resplandor', 'rayos', 'destello'] },
  { id: 'a-20', char: 'ˎˊ˗', name: 'Comilla Resplandor Derecha', category: 'aesthetic', tags: ['resplandor', 'rayos', 'destello'] },
  { id: 'a-21', char: '𓆩♡𓆪', name: 'Corazón con Alas Enmarcado', category: 'aesthetic', tags: ['corazon', 'alas', 'angel', 'dark', 'aesthetic'] },

  // ══════════════════════════════════════════════════════════════
  // ── CORAZONES & AMOR ──
  // ══════════════════════════════════════════════════════════════
  { id: 'c-1', char: '♡', name: 'Corazón Contorno Fino', category: 'corazones', tags: ['corazon', 'amor', 'romance', 'linea', 'aesthetic', 'pareja'] },
  { id: 'c-2', char: '♥', name: 'Corazón Negro Sólido', category: 'corazones', tags: ['corazon', 'amor', 'negro', 'relleno', 'pareja'] },
  { id: 'c-3', char: '❤', name: 'Corazón Rojo Clásico', category: 'corazones', tags: ['corazon', 'rojo', 'pasion'] },
  { id: 'c-4', char: '❥', name: 'Corazón Girado Estilizado', category: 'corazones', tags: ['corazon', 'decorativo', 'elegante'] },
  { id: 'c-5', char: '❣', name: 'Exclamación Corazón', category: 'corazones', tags: ['corazon', 'exclamacion', 'alerta'] },
  { id: 'c-6', char: '❦', name: 'Corazón Floral Hiedra', category: 'corazones', tags: ['corazon', 'flor', 'vintage'] },
  { id: 'c-7', char: 'ღ', name: 'Corazón Georgiano Suave', category: 'corazones', tags: ['corazon', 'aesthetic', 'suave', 'curva'] },
  { id: 'c-8', char: 'ෆ', name: 'Corazón Manzana Kawaii', category: 'corazones', tags: ['corazon', 'cute', 'kawaii', 'coreano'] },
  { id: 'c-9', char: 'დ', name: 'Corazón Doble Curva', category: 'corazones', tags: ['corazon', 'amor', 'suave'] },
  { id: 'c-10', char: 'ꨄ', name: 'Corazón Árabe Calligráfico', category: 'corazones', tags: ['corazon', 'caligrafia', 'elegante', 'arabigo'] },
  { id: 'c-11', char: '𖹭', name: 'Corazón Contorno Anguloso', category: 'corazones', tags: ['corazon', 'linea', 'aesthetic'] },
  { id: 'c-12', char: 'ﮩـﮩﮩـ', name: 'Latido Electrocardiograma', category: 'corazones', tags: ['latido', 'vida', 'electro', 'pulso', 'medico'] },
  { id: 'c-13', char: '💓', name: 'Corazón Latiendo', category: 'corazones', tags: ['corazon', 'latido', 'vibracion', 'amor'] },
  { id: 'c-14', char: '💗', name: 'Corazón Creciente', category: 'corazones', tags: ['corazon', 'crecimiento', 'rosa', 'ternura'] },
  { id: 'c-15', char: '💞', name: 'Corazones Giratorios', category: 'corazones', tags: ['corazones', 'giro', 'duo', 'pareja'] },
  { id: 'c-16', char: '💕', name: 'Dos Corazones Flotantes', category: 'corazones', tags: ['dos', 'corazones', 'amor', 'flotar'] },
  { id: 'c-17', char: '💘', name: 'Corazón con Flecha de Cupido', category: 'corazones', tags: ['flecha', 'cupido', 'flechazo', 'enamorado'] },
  { id: 'c-18', char: '💝', name: 'Corazón con Lazo de Regalo', category: 'corazones', tags: ['regalo', 'caja', 'lazo', 'sorpresa'] },
  { id: 'c-19', char: '💔', name: 'Corazón Roto', category: 'corazones', tags: ['corazon', 'roto', 'desamor', 'triste', 'sad'] },
  { id: 'c-20', char: '❤️‍🔥', name: 'Corazón en Llamas', category: 'corazones', tags: ['corazon', 'fuego', 'pasion', 'ardiente'] },
  { id: 'c-21', char: '❤️‍🩹', name: 'Corazón Vendado en Cura', category: 'corazones', tags: ['venda', 'cura', 'sanacion', 'recuperacion'] },

  // ══════════════════════════════════════════════════════════════
  // ── ESTRELLAS & DESTIELLOS ──
  // ══════════════════════════════════════════════════════════════
  { id: 'e-1', char: '★', name: 'Estrella Negra Sólida', category: 'estrellas', tags: ['estrella', 'brillo', 'noche', 'cielo', 'rating'] },
  { id: 'e-2', char: '☆', name: 'Estrella Contorno Fino', category: 'estrellas', tags: ['estrella', 'linea', 'cielo', 'hueca'] },
  { id: 'e-3', char: '✦', name: 'Destello Cuatro Puntas Sólido', category: 'estrellas', tags: ['estrella', 'destello', 'brillo', 'sparkle', 'aesthetic'] },
  { id: 'e-4', char: '✧', name: 'Destello Cuatro Puntas Hueco', category: 'estrellas', tags: ['estrella', 'destello', 'brillo', 'sparkle', 'aesthetic'] },
  { id: 'e-5', char: '✩', name: 'Estrella Redondeada', category: 'estrellas', tags: ['estrella', 'decoracion', 'suave'] },
  { id: 'e-6', char: '✰', name: 'Estrella Sombría', category: 'estrellas', tags: ['estrella', 'destello', 'borde'] },
  { id: 'e-7', char: '⋆', name: 'Estrella Minúscula', category: 'estrellas', tags: ['estrella', 'pequena', 'polvo', 'aesthetic'] },
  { id: 'e-8', char: '⟡', name: 'Diamante Astral', category: 'estrellas', tags: ['estrella', 'diamante', 'rombo', 'brillo'] },
  { id: 'e-9', char: '✬', name: 'Estrella Pin Central', category: 'estrellas', tags: ['estrella', 'decorativa'] },
  { id: 'e-10', char: '✯', name: 'Estrella Militar Resaltada', category: 'estrellas', tags: ['estrella', 'rango', 'militar'] },
  { id: 'e-11', char: '✮', name: 'Estrella con Sombra Superior', category: 'estrellas', tags: ['estrella', 'sombra'] },
  { id: 'e-12', char: '✶', name: 'Estrella Seis Puntas Negra', category: 'estrellas', tags: ['estrella', 'seis', 'magia'] },
  { id: 'e-13', char: '✷', name: 'Estrella Ocho Puntas Negra', category: 'estrellas', tags: ['estrella', 'ocho', 'sol'] },
  { id: 'e-14', char: '✸', name: 'Estrella Ocho Puntas Gruesa', category: 'estrellas', tags: ['estrella', 'explosion', 'comic'] },
  { id: 'e-15', char: '✹', name: 'Estrella Doce Puntas', category: 'estrellas', tags: ['sol', 'rayos', 'estrella', 'brillo'] },
  { id: 'e-16', char: '✺', name: 'Flor Astral de Dieciséis Rayos', category: 'estrellas', tags: ['fuegos', 'artificiales', 'brillo'] },
  { id: 'e-17', char: '✻', name: 'Lágrima Asterisco', category: 'estrellas', tags: ['asterisco', 'flor', 'estrella'] },
  { id: 'e-18', char: '✼', name: 'Asterisco Suave Redondo', category: 'estrellas', tags: ['asterisco', 'flor'] },
  { id: 'e-19', char: '⭐', name: 'Estrella Dorada Emoji', category: 'estrellas', tags: ['estrella', 'amarillo', 'oro', 'premio'] },
  { id: 'e-20', char: '🌟', name: 'Estrella Brillante Resplandor', category: 'estrellas', tags: ['estrella', 'resplandor', 'oro', 'brillo'] },
  { id: 'e-21', char: '🌠', name: 'Estrella Fugaz', category: 'estrellas', tags: ['estrella', 'fugaz', 'deseo', 'cielo', 'noche'] },
  { id: 'e-22', char: '⋆⁺₊⋆', name: 'Constelación de Puntos', category: 'estrellas', tags: ['constelacion', 'estrellas', 'cielo', 'aesthetic'] },

  // ══════════════════════════════════════════════════════════════
  // ── FLORES & PLANTAS ──
  // ══════════════════════════════════════════════════════════════
  { id: 'fl-1', char: '✿', name: 'Flor Blanca Cinco Pétalos', category: 'flores', tags: ['flor', 'naturaleza', 'primavera', 'suave'] },
  { id: 'fl-2', char: '❀', name: 'Flor Cerezo Japonesa', category: 'flores', tags: ['flor', 'cerezo', 'japon', 'sakura', 'linea'] },
  { id: 'fl-3', char: '❁', name: 'Flor de Ocho Pétalos Mandala', category: 'flores', tags: ['flor', 'mandala', 'simetria'] },
  { id: 'fl-4', char: '✾', name: 'Flor Silvestre', category: 'flores', tags: ['flor', 'campo'] },
  { id: 'fl-5', char: '❃', name: 'Trébol Floral Cuatro Hojas', category: 'flores', tags: ['flor', 'trebol', 'suerte', 'hoja'] },
  { id: 'fl-6', char: '⚘', name: 'Rosa con Tallo Clásica', category: 'flores', tags: ['flor', 'rosa', 'tallo', 'planta'] },
  { id: 'fl-7', char: '❋', name: 'Flor Asterisco Gruesa', category: 'flores', tags: ['flor', 'brillo', 'nieve'] },
  { id: 'fl-8', char: '𖤣𖥧', name: 'Jardín Botánico Silvestre', category: 'flores', tags: ['flor', 'plantas', 'bosque', 'cottagecore'] },
  { id: 'fl-9', char: '🌸', name: 'Flor de Cerezo Sakura', category: 'flores', tags: ['sakura', 'rosa', 'cerezo', 'japon', 'primavera'] },
  { id: 'fl-10', char: '💮', name: 'Sello Blanco Flor Blanca', category: 'flores', tags: ['flor', 'sello', 'japon', 'examen'] },
  { id: 'fl-11', char: '🏵️', name: 'Roseta Floral Dorada', category: 'flores', tags: ['roseta', 'medalla', 'adorno'] },
  { id: 'fl-12', char: '🌺', name: 'Flor de Hibisco Tropical', category: 'flores', tags: ['hibisco', 'tropical', 'playa', 'hawaiana'] },
  { id: 'fl-13', char: '🌻', name: 'Girasol Amarillo Radiante', category: 'flores', tags: ['girasol', 'sol', 'amarillo', 'verano'] },
  { id: 'fl-14', char: '🌼', name: 'Margarita Amarilla', category: 'flores', tags: ['margarita', 'blanco', 'primavera', 'campo'] },
  { id: 'fl-15', char: '🌷', name: 'Tulipán Rosa Elegante', category: 'flores', tags: ['tulipan', 'holanda', 'elegante', 'primavera'] },
  { id: 'fl-16', char: '🌱', name: 'Brote Verde Nuevo', category: 'flores', tags: ['brote', 'planta', 'inicio', 'crecimiento'] },
  { id: 'fl-17', char: '🌿', name: 'Hierba Aromática', category: 'flores', tags: ['hierba', 'hoja', 'verde', 'naturaleza'] },
  { id: 'fl-18', char: '☘️', name: 'Trébol de Tres Hojas', category: 'flores', tags: ['trebol', 'irlanda', 'verde'] },
  { id: 'fl-19', char: '🍀', name: 'Trébol de Cuatro Hojas Buena Suerte', category: 'flores', tags: ['trebol', 'suerte', 'cuatro', 'fortuna'] },
  { id: 'fl-20', char: '🍃', name: 'Hojas al Viento', category: 'flores', tags: ['hoja', 'viento', 'otono', 'brisa'] },
  { id: 'fl-21', char: '🍂', name: 'Hojas Secas Caídas', category: 'flores', tags: ['hoja', 'otono', 'marron', 'bosque'] },
  { id: 'fl-22', char: '🍄', name: 'Seta Mágica del Bosque', category: 'flores', tags: ['hongo', 'seta', 'rojo', 'cottagecore', 'mario'] },

  // ══════════════════════════════════════════════════════════════
  // ── LUNAS, SOL & CIELO ──
  // ══════════════════════════════════════════════════════════════
  { id: 'l-1', char: '☾', name: 'Luna Creciente Fina', category: 'lunas', tags: ['luna', 'noche', 'cielo', 'nocturno', 'espacio', 'aesthetic'] },
  { id: 'l-2', char: '☽', name: 'Luna Menguante Fina', category: 'lunas', tags: ['luna', 'noche', 'cielo', 'nocturno'] },
  { id: 'l-3', char: '☼', name: 'Sol con Rayos Abierto', category: 'lunas', tags: ['sol', 'dia', 'luz', 'calor', 'verano'] },
  { id: 'l-4', char: '☀', name: 'Sol Negro Sólido', category: 'lunas', tags: ['sol', 'brillo', 'radiante'] },
  { id: 'l-5', char: '☁', name: 'Nube Sólida', category: 'lunas', tags: ['nube', 'cielo', 'clima', 'lluvia'] },
  { id: 'l-6', char: '☄', name: 'Cometa Espacial', category: 'lunas', tags: ['cometa', 'espacio', 'meteoro', 'fuego'] },
  { id: 'l-7', char: '🌙', name: 'Luna Nueva Amarilla', category: 'lunas', tags: ['luna', 'amarillo', 'noche', 'islam', 'cielo'] },
  { id: 'l-8', char: '🌕', name: 'Luna Llena Brillante', category: 'lunas', tags: ['luna', 'llena', 'oro', 'noche', 'lobo'] },
  { id: 'l-9', char: '🌘', name: 'Luna Menguante Detallada', category: 'lunas', tags: ['fase', 'lunar', 'menguante'] },
  { id: 'l-10', char: '🌑', name: 'Luna Nueva Oscura', category: 'lunas', tags: ['luna', 'oscura', 'eclipse'] },
  { id: 'l-11', char: '⛅', name: 'Sol Detrás de Nube', category: 'lunas', tags: ['sol', 'nube', 'clima', 'parcial'] },
  { id: 'l-12', char: '⛈️', name: 'Nube con Rayo y Lluvia', category: 'lunas', tags: ['tormenta', 'rayo', 'lluvia', 'tempestad'] },
  { id: 'l-13', char: '🌈', name: 'Arcoíris Completo', category: 'lunas', tags: ['arcoiris', 'colores', 'cielo', 'suerte'] },
  { id: 'l-14', char: '❄️', name: 'Copo de Nieve', category: 'lunas', tags: ['nieve', 'frio', 'invierno', 'hielo', 'copo'] },

  // ══════════════════════════════════════════════════════════════
  // ── FLECHAS & DIRECCIÓN ──
  // ══════════════════════════════════════════════════════════════
  { id: 'f-1', char: '→', name: 'Flecha Derecha Estándar', category: 'flechas', tags: ['flecha', 'derecha', 'siguiente', 'direccion'] },
  { id: 'f-2', char: '←', name: 'Flecha Izquierda Estándar', category: 'flechas', tags: ['flecha', 'izquierda', 'atras'] },
  { id: 'f-3', char: '↑', name: 'Flecha Arriba', category: 'flechas', tags: ['flecha', 'arriba', 'subir', 'top'] },
  { id: 'f-4', char: '↓', name: 'Flecha Abajo', category: 'flechas', tags: ['flecha', 'abajo', 'bajar'] },
  { id: 'f-5', char: '↗', name: 'Flecha Diagonal Arriba Derecha', category: 'flechas', tags: ['flecha', 'diagonal', 'crecimiento'] },
  { id: 'f-6', char: '↘', name: 'Flecha Diagonal Abajo Derecha', category: 'flechas', tags: ['flecha', 'diagonal'] },
  { id: 'f-7', char: '➜', name: 'Flecha Gruesa Curvada', category: 'flechas', tags: ['flecha', 'fuerte', 'negrita'] },
  { id: 'f-8', char: '➤', name: 'Flecha Triángulo Play', category: 'flechas', tags: ['flecha', 'play', 'boton'] },
  { id: 'f-9', char: '➳', name: 'Flecha Pluma Cupido', category: 'flechas', tags: ['flecha', 'arco', 'vintage', 'amor', 'cupido'] },
  { id: 'f-10', char: '⇄', name: 'Flechas Dobles Opuestas', category: 'flechas', tags: ['flecha', 'cambio', 'intercambio'] },
  { id: 'f-11', char: '⇅', name: 'Flechas Verticales Dobles', category: 'flechas', tags: ['flecha', 'arriba', 'abajo'] },
  { id: 'f-12', char: '➲', name: 'Flecha Circular Pro', category: 'flechas', tags: ['flecha', 'circulo', 'boton'] },
  { id: 'f-13', char: '➥', name: 'Flecha Curva Hacia Abajo', category: 'flechas', tags: ['flecha', 'curva', 'respuesta'] },
  { id: 'f-14', char: '➡', name: 'Flecha Negra Bloque', category: 'flechas', tags: ['flecha', 'bloque', 'negro'] },
  { id: 'f-15', char: '➷', name: 'Flecha Pluma Diagonal', category: 'flechas', tags: ['flecha', 'diagonal', 'pluma'] },

  // ══════════════════════════════════════════════════════════════
  // ── CORONAS & REALEZA ──
  // ══════════════════════════════════════════════════════════════
  { id: 'cr-1', char: '♔', name: 'Rey Ajedrez Blanco', category: 'coronas', tags: ['corona', 'rey', 'ajedrez', 'realeza'] },
  { id: 'cr-2', char: '♕', name: 'Reina Ajedrez Blanca', category: 'coronas', tags: ['corona', 'reina', 'realeza', 'mujer'] },
  { id: 'cr-3', char: '♚', name: 'Rey Ajedrez Negro', category: 'coronas', tags: ['corona', 'rey', 'negro', 'lider'] },
  { id: 'cr-4', char: '♛', name: 'Reina Ajedrez Negra', category: 'coronas', tags: ['corona', 'reina', 'realeza'] },
  { id: 'cr-5', char: '⚜', name: 'Flor de Lis Heráldica', category: 'coronas', tags: ['corona', 'realeza', 'heraldica', 'francia', 'emblema'] },
  { id: 'cr-6', char: '👑', name: 'Corona de Oro Real', category: 'coronas', tags: ['corona', 'oro', 'rey', 'campeon', 'lider'] },
  { id: 'cr-7', char: '🤴', name: 'Príncipe Real', category: 'coronas', tags: ['principe', 'hombre', 'corona'] },
  { id: 'cr-8', char: '👸', name: 'Princesa Hermosa', category: 'coronas', tags: ['princesa', 'mujer', 'tiara'] },
  { id: 'cr-9', char: '🏰', name: 'Castillo Medieval', category: 'coronas', tags: ['castillo', 'fortaleza', 'reino'] },
  { id: 'cr-10', char: '𓋹', name: 'Llave de Vida Anj Egipcia', category: 'coronas', tags: ['egipto', 'faraon', 'realeza'] },

  // ══════════════════════════════════════════════════════════════
  // ── MARCOS & BORDES ──
  // ══════════════════════════════════════════════════════════════
  { id: 'm-1', char: '『 』', name: 'Corchetes Asiáticos Esport', category: 'marcos', tags: ['marco', 'esport', 'bracket', 'japones', 'nombre'] },
  { id: 'm-2', char: '「 」', name: 'Comillas Ángulo Esquina', category: 'marcos', tags: ['marco', 'texto', 'cita', 'esquinas'] },
  { id: 'm-3', char: '【 】', name: 'Lente Corchetes Negros', category: 'marcos', tags: ['marco', 'tag', 'clan', 'destacado'] },
  { id: 'm-4', char: '〖 〗', name: 'Lente Corchetes Huecos', category: 'marcos', tags: ['marco', 'decoracion'] },
  { id: 'm-5', char: '꧁ ꧂', name: 'Alas Reales Arabescas', category: 'marcos', tags: ['marco', 'alas', 'elegante', 'arabesco', 'freefire', 'clan'] },
  { id: 'm-6', char: '༺ ༻', name: 'Alas Ornamentales Tibetanas', category: 'marcos', tags: ['marco', 'adorno', 'tribal', 'elegante'] },
  { id: 'm-7', char: '〔 〕', name: 'Corchetes Caparazón', category: 'marcos', tags: ['marco', 'limpio', 'zen'] },
  { id: 'm-8', char: '〘 〙', name: 'Corchetes Dobles Blancos', category: 'marcos', tags: ['marco', 'doble', 'tag'] },
  { id: 'm-9', char: '《 》', name: 'Paréntesis Doble Ángulo', category: 'marcos', tags: ['marco', 'libro', 'titulo'] },
  { id: 'm-10', char: '⦅ ⦆', name: 'Paréntesis Blancos', category: 'marcos', tags: ['marco', 'curvo'] },

  // ══════════════════════════════════════════════════════════════
  // ── SEPARADORES & LÍNEAS ──
  // ══════════════════════════════════════════════════════════════
  { id: 's-1', char: '•', name: 'Punto Medio Bullet', category: 'separadores', tags: ['separador', 'punto', 'lista', 'bio'] },
  { id: 's-2', char: '─', name: 'Línea Continua Fina', category: 'separadores', tags: ['separador', 'linea', 'guion'] },
  { id: 's-3', char: '━', name: 'Línea Continua Gruesa', category: 'separadores', tags: ['separador', 'linea', 'gruesa'] },
  { id: 's-4', char: '│', name: 'Barra Vertical Fina Pipe', category: 'separadores', tags: ['separador', 'barra', 'pipe'] },
  { id: 's-5', char: '┊', name: 'Línea de Puntos Vertical', category: 'separadores', tags: ['separador', 'puntos'] },
  { id: 's-6', char: '｡･:*:･ﾟ', name: 'Divisor Estelar Mágico', category: 'separadores', tags: ['separador', 'brillo', 'estrellas'] },
  { id: 's-7', char: '✦ ── ✦', name: 'Destellos con Línea Central', category: 'separadores', tags: ['separador', 'destello'] },
  { id: 's-8', char: '═', name: 'Línea Doble Horizontal', category: 'separadores', tags: ['separador', 'doble', 'borde'] },
  { id: 's-9', char: '║', name: 'Línea Doble Vertical', category: 'separadores', tags: ['separador', 'columna'] },
  { id: 's-10', char: 'ˏˋ°•*⁀➷', name: 'Flecha Resplandor Separador', category: 'separadores', tags: ['separador', 'flecha', 'aesthetic'] },

  // ══════════════════════════════════════════════════════════════
  // ── GAMING & NICKS ──
  // ══════════════════════════════════════════════════════════════
  { id: 'g-1', char: '亗', name: 'Corona Clan Esport', category: 'gaming', tags: ['gaming', 'corona', 'clan', 'freefire', 'esport', 'lider'] },
  { id: 'g-2', char: '⚔', name: 'Espadas Cruzadas de Combate', category: 'gaming', tags: ['gaming', 'espadas', 'combate', 'pelea', 'guerra'] },
  { id: 'g-3', char: '☠', name: 'Calavera con Huesos Cruzados', category: 'gaming', tags: ['gaming', 'calavera', 'muerte', 'peligro', 'toxic'] },
  { id: 'g-4', char: '☯', name: 'Yin Yang Armonía', category: 'gaming', tags: ['gaming', 'equilibrio', 'zen', 'filosofia'] },
  { id: 'g-5', char: '☣', name: 'Riesgo Biológico Tóxico', category: 'gaming', tags: ['gaming', 'biohazard', 'peligro', 'nuclear'] },
  { id: 'g-6', char: '☢', name: 'Radiación Nuclear', category: 'gaming', tags: ['gaming', 'nuclear', 'radioactivo', 'alerta'] },
  { id: 'g-7', char: '⌖', name: 'Crosshair / Mira Sniper', category: 'gaming', tags: ['gaming', 'mira', 'sniper', 'aim', 'fps'] },
  { id: 'g-8', char: '☬', name: 'Emblema Khanda Guerrero', category: 'gaming', tags: ['gaming', 'guerrero', 'simbolo', 'clan'] },
  { id: 'g-9', char: '☥', name: 'Cruz Ansada Ankh', category: 'gaming', tags: ['gaming', 'ankh', 'egipto', 'vida'] },
  { id: 'g-10', char: '🎮', name: 'Mando de Videojuegos', category: 'gaming', tags: ['gaming', 'control', 'consola', 'playstation', 'xbox'] },
  { id: 'g-11', char: '🕹️', name: 'Palanca Joystick Arcade', category: 'gaming', tags: ['gaming', 'arcade', 'retro', 'joystick'] },
  { id: 'g-12', char: '👾', name: 'Monstruo Pixel Alien', category: 'gaming', tags: ['gaming', 'alien', 'space invaders', 'pixel', 'retro'] },
  { id: 'g-13', char: '🏆', name: 'Trofeo del Campeón', category: 'gaming', tags: ['trofeo', 'copa', 'ganador', 'oro', 'torneo'] },
  { id: 'g-14', char: '🥇', name: 'Medalla de Primer Lugar', category: 'gaming', tags: ['oro', 'primer', 'lugar', 'ganador', 'campeon'] },
  { id: 'g-15', char: '🥷', name: 'Ninja de las Sombras', category: 'gaming', tags: ['ninja', 'sigilo', 'asesino', 'katana'] },
  { id: 'g-16', char: '🗡️', name: 'Daga Afilada', category: 'gaming', tags: ['daga', 'cuchillo', 'arma', 'combate'] },
  { id: 'g-17', char: '🛡️', name: 'Escudo Protector', category: 'gaming', tags: ['escudo', 'defensa', 'tanque', 'armadura'] },
  { id: 'g-18', char: '🩸', name: 'Gota de Sangre', category: 'gaming', tags: ['sangre', 'red', 'herida', 'vampiro'] },

  // ══════════════════════════════════════════════════════════════
  // ── MANOS & GESTOS ──
  // ══════════════════════════════════════════════════════════════
  { id: 'mn-1', char: '✌️', name: 'Mano Victoria / Paz', category: 'manos', tags: ['paz', 'victoria', 'dos', 'foto', 'saludo'] },
  { id: 'mn-2', char: '🤞', name: 'Dedos Cruzados Buena Suerte', category: 'manos', tags: ['suerte', 'esperanza', 'deseo'] },
  { id: 'mn-3', char: '🤙', name: 'Mano Shaka / Llámame', category: 'manos', tags: ['shaka', 'surf', 'llamame', 'cool', 'chill'] },
  { id: 'mn-4', char: '🤟', name: 'Gesto Te Quiero / Rock', category: 'manos', tags: ['amor', 'te quiero', 'rock', 'metal'] },
  { id: 'mn-5', char: '🤘', name: 'Cuernos del Rock', category: 'manos', tags: ['rock', 'metal', 'musica', 'fiesta'] },
  { id: 'mn-6', char: '🤌', name: 'Dedos Juntos Italiano', category: 'manos', tags: ['italiano', 'que dices', 'gesto', 'chef'] },
  { id: 'mn-7', char: '🤏', name: 'Mano Pellizco / Un Poco', category: 'manos', tags: ['poco', 'chiquito', 'casi'] },
  { id: 'mn-8', char: '👍', name: 'Pulgar Arriba Like', category: 'manos', tags: ['like', 'bien', 'ok', 'aprobado', 'positivo'] },
  { id: 'mn-9', char: '👎', name: 'Pulgar Abajo Dislike', category: 'manos', tags: ['dislike', 'mal', 'no', 'rechazado'] },
  { id: 'mn-10', char: '👏', name: 'Aplausos Bravo', category: 'manos', tags: ['aplausos', 'bravo', 'felicitaciones', 'ovacion'] },
  { id: 'mn-11', char: '🙌', name: 'Manos Arriba Celebración', category: 'manos', tags: ['manos', 'celebracion', 'alabanza', 'hurra'] },
  { id: 'mn-12', char: '🤝', name: 'Apretón de Manos Trato Hecho', category: 'manos', tags: ['trato', 'acuerdo', 'negocio', 'pacto'] },
  { id: 'mn-13', char: '🙏', name: 'Manos Rezando / Gracias', category: 'manos', tags: ['gracias', 'rezo', 'oracion', 'por favor', 'namaste'] },
  { id: 'mn-14', char: '💅', name: 'Uñas Pintadas Glamour', category: 'manos', tags: ['unas', 'glamour', 'diva', 'aesthetic', 'coquette'] },
  { id: 'mn-15', char: '💪', name: 'Bíceps Fuerte Fuerza', category: 'manos', tags: ['fuerza', 'musculo', 'gym', 'motivacion', 'fitness'] },

  // ══════════════════════════════════════════════════════════════
  // ── ANIMALES & MASCOTAS ──
  // ══════════════════════════════════════════════════════════════
  { id: 'an-1', char: '🐾', name: 'Huellas de Patas', category: 'animales', tags: ['huellas', 'patas', 'perro', 'gato', 'mascota'] },
  { id: 'an-2', char: '🐱', name: 'Carita de Gato', category: 'animales', tags: ['gato', 'gatito', 'michi', 'felino'] },
  { id: 'an-3', char: '🐶', name: 'Carita de Perro', category: 'animales', tags: ['perro', 'perrito', 'cachorro', 'can'] },
  { id: 'an-4', char: '🐰', name: 'Conejito Blanco', category: 'animales', tags: ['conejo', 'tierno', 'kawaii', 'cute'] },
  { id: 'an-5', char: '🦊', name: 'Zorro Astuto', category: 'animales', tags: ['zorro', 'animal', 'naranja', 'astuto'] },
  { id: 'an-6', char: '🐼', name: 'Oso Panda', category: 'animales', tags: ['panda', 'oso', 'bambu', 'cute'] },
  { id: 'an-7', char: '🐨', name: 'Koala Tierno', category: 'animales', tags: ['koala', 'australia', 'eucalipto'] },
  { id: 'an-8', char: '🦁', name: 'León Salvaje', category: 'animales', tags: ['leon', 'rey', 'selva', 'fuerza'] },
  { id: 'an-9', char: '🐺', name: 'Lobo Solitario', category: 'animales', tags: ['lobo', 'noche', 'luna', 'alfa'] },
  { id: 'an-10', char: '🦇', name: 'Murciélago Vampiro', category: 'animales', tags: ['murcielago', 'noche', 'halloween', 'dark'] },

  // ══════════════════════════════════════════════════════════════
  // ── MÚSICA & AUDIO ──
  // ══════════════════════════════════════════════════════════════
  { id: 'mu-1', char: '♪', name: 'Nota Musical Simple', category: 'musica', tags: ['musica', 'nota', 'cancion', 'sonido'] },
  { id: 'mu-2', char: '♫', name: 'Doble Nota Musical', category: 'musica', tags: ['musica', 'notas', 'ritmo'] },
  { id: 'mu-3', char: '♬', name: 'Corchea Doble con Barra', category: 'musica', tags: ['musica', 'audio', 'melodia'] },
  { id: 'mu-4', char: '♭', name: 'Bemol Musical', category: 'musica', tags: ['musica', 'tono'] },
  { id: 'mu-5', char: '♮', name: 'Becuadro Musical', category: 'musica', tags: ['musica'] },
  { id: 'mu-6', char: '♯', name: 'Sostenido / Sharp', category: 'musica', tags: ['musica', 'hashtag', 'sharp'] },
  { id: 'mu-7', char: '🎵', name: 'Nota Musical Azul', category: 'musica', tags: ['nota', 'musica', 'cancion', 'audio'] },
  { id: 'mu-8', char: '🎶', name: 'Notas Musicales Volando', category: 'musica', tags: ['musica', 'melodia', 'cantar'] },
  { id: 'mu-9', char: '🎸', name: 'Guitarra Eléctrica Rock', category: 'musica', tags: ['guitarra', 'rock', 'instrumento', 'concierto'] },
  { id: 'mu-10', char: '🎹', name: 'Teclado de Piano', category: 'musica', tags: ['piano', 'teclas', 'clasica', 'musica'] },

  // ══════════════════════════════════════════════════════════════
  // ── MARCAS & CHECKS ──
  // ══════════════════════════════════════════════════════════════
  { id: 'mr-1', char: '✓', name: 'Check Simple Fino', category: 'marcas', tags: ['marca', 'check', 'verificado', 'listo', 'correcto'] },
  { id: 'mr-2', char: '✔', name: 'Check Grueso Sólido', category: 'marcas', tags: ['marca', 'check', 'ok', 'aprobado'] },
  { id: 'mr-3', char: '✅', name: 'Check Verde en Botón', category: 'marcas', tags: ['check', 'verde', 'listo', 'completado', 'exito'] },
  { id: 'mr-4', char: '✕', name: 'Cruz Multiplicación Fina', category: 'marcas', tags: ['marca', 'cruz', 'cancelar', 'no'] },
  { id: 'mr-5', char: '✖', name: 'Cruz Gruesa de Cierre', category: 'marcas', tags: ['marca', 'error', 'cerrar'] },
  { id: 'mr-6', char: '❌', name: 'Cruz Roja de Rechazo', category: 'marcas', tags: ['cruz', 'rojo', 'error', 'prohibido', 'falso'] },
  { id: 'mr-7', char: '©', name: 'Copyright Derechos Reservados', category: 'marcas', tags: ['marca', 'derechos', 'legal'] },
  { id: 'mr-8', char: '®', name: 'Marca Registrada Oficial', category: 'marcas', tags: ['marca', 'registro', 'oficial'] },
  { id: 'mr-9', char: '™', name: 'Trade Mark Comercial', category: 'marcas', tags: ['marca', 'logo', 'empresa'] },
  { id: 'mr-10', char: '💯', name: 'Cien Puntos Perfecto', category: 'marcas', tags: ['100', 'cien', 'perfecto', 'pro', 'nota'] },

  // ══════════════════════════════════════════════════════════════
  // ── ZODIACO & ASTROLOGÍA ──
  // ══════════════════════════════════════════════════════════════
  { id: 'z-1', char: '♈', name: 'Aries', category: 'zodiaco', tags: ['zodiaco', 'aries', 'signo', 'horoscopo', 'fuego'] },
  { id: 'z-2', char: '♉', name: 'Tauro', category: 'zodiaco', tags: ['zodiaco', 'tauro', 'tierra', 'toro'] },
  { id: 'z-3', char: '♊', name: 'Géminis', category: 'zodiaco', tags: ['zodiaco', 'geminis', 'aire', 'gemelos'] },
  { id: 'z-4', char: '♋', name: 'Cáncer', category: 'zodiaco', tags: ['zodiaco', 'cancer', 'agua', 'cangrejo'] },
  { id: 'z-5', char: '♌', name: 'Leo', category: 'zodiaco', tags: ['zodiaco', 'leo', 'fuego', 'leon'] },
  { id: 'z-6', char: '♍', name: 'Virgo', category: 'zodiaco', tags: ['zodiaco', 'virgo', 'tierra'] },
  { id: 'z-7', char: '♎', name: 'Libra', category: 'zodiaco', tags: ['zodiaco', 'libra', 'balanza', 'aire'] },
  { id: 'z-8', char: '♏', name: 'Escorpio', category: 'zodiaco', tags: ['zodiaco', 'escorpio', 'agua'] },
  { id: 'z-9', char: '♐', name: 'Sagitario', category: 'zodiaco', tags: ['zodiaco', 'sagitario', 'fuego', 'centauro'] },
  { id: 'z-10', char: '♑', name: 'Capricornio', category: 'zodiaco', tags: ['zodiaco', 'capricornio', 'tierra'] },
  { id: 'z-11', char: '♒', name: 'Acuario', category: 'zodiaco', tags: ['zodiaco', 'acuario', 'aire', 'agua'] },
  { id: 'z-12', char: '♓', name: 'Piscis', category: 'zodiaco', tags: ['zodiaco', 'piscis', 'agua', 'peces'] },

  // ══════════════════════════════════════════════════════════════
  // ── MATEMÁTICOS & FORMAS ──
  // ══════════════════════════════════════════════════════════════
  { id: 'mt-1', char: '±', name: 'Más Menos', category: 'matematicos', tags: ['matematicas', 'mas', 'menos'] },
  { id: 'mt-2', char: '×', name: 'Signo Multiplicación', category: 'matematicos', tags: ['matematicas', 'por', 'multiplicar'] },
  { id: 'mt-3', char: '÷', name: 'Signo División', category: 'matematicos', tags: ['matematicas', 'entre', 'dividir'] },
  { id: 'mt-4', char: '≠', name: 'Distinto / No Igual', category: 'matematicos', tags: ['matematicas', 'diferente', 'desigual'] },
  { id: 'mt-5', char: '≈', name: 'Aproximado / Casi', category: 'matematicos', tags: ['matematicas', 'casi', 'aproximacion'] },
  { id: 'mt-6', char: '≤', name: 'Menor o Igual', category: 'matematicos', tags: ['matematicas'] },
  { id: 'mt-7', char: '≥', name: 'Mayor o Igual', category: 'matematicos', tags: ['matematicas'] },
  { id: 'mt-8', char: '∞', name: 'Símbolo Infinito', category: 'matematicos', tags: ['matematicas', 'infinito', 'siempre', 'eterno', 'amor'] },
  { id: 'mt-9', char: '√', name: 'Raíz Cuadrada', category: 'matematicos', tags: ['matematicas', 'raiz'] },
  { id: 'mt-10', char: 'π', name: 'Número Pi', category: 'matematicos', tags: ['matematicas', 'pi', 'constante'] },
  { id: 'mt-11', char: '∑', name: 'Sumatoria', category: 'matematicos', tags: ['matematicas', 'suma', 'sigma'] },
  { id: 'mt-12', char: '∫', name: 'Integral', category: 'matematicos', tags: ['matematicas', 'calculo', 'integral'] },

  // ══════════════════════════════════════════════════════════════
  // ── CARAS & EMOCIONES ──
  // ══════════════════════════════════════════════════════════════
  { id: 'ca-1', char: '😊', name: 'Sonrisa Feliz Cálida', category: 'caras', tags: ['carita', 'feliz', 'sonrisa', 'contento'] },
  { id: 'ca-2', char: '😂', name: 'Risa con Lágrimas', category: 'caras', tags: ['risa', 'carcajada', 'lagrimas', 'humor'] },
  { id: 'ca-3', char: '🤣', name: 'Rodando de Risa', category: 'caras', tags: ['risa', 'suelo', 'humor', 'comedia'] },
  { id: 'ca-4', char: '😍', name: 'Ojos de Corazón', category: 'caras', tags: ['enamorado', 'corazones', 'amor', 'encantado'] },
  { id: 'ca-5', char: '🤩', name: 'Ojos de Estrella', category: 'caras', tags: ['estrella', 'impresionado', 'wow', 'asombro'] },
  { id: 'ca-6', char: '😎', name: 'Cara con Gafas Cool', category: 'caras', tags: ['cool', 'gafas', 'lentes', 'pro', 'estilo'] },
  { id: 'ca-7', char: '🤗', name: 'Abrazo Virtual', category: 'caras', tags: ['abrazo', 'carino', 'hug', 'tierno'] },
  { id: 'ca-8', char: '😇', name: 'Angelito Inocente', category: 'caras', tags: ['angel', 'inocente', 'halo', 'bueno'] },
  { id: 'ca-9', char: '😈', name: 'Diablito Travieso', category: 'caras', tags: ['diablo', 'travieso', 'cuernos', 'dark'] },
  { id: 'ca-10', char: '🤪', name: 'Loco Zany', category: 'caras', tags: ['loco', 'zany', 'gracioso', 'divertido'] },
  { id: 'ca-11', char: '😜', name: 'Guiño con Lengua', category: 'caras', tags: ['guino', 'lengua', 'broma', 'coqueto'] },
  { id: 'ca-12', char: '🥳', name: 'Festejo con Gorrito', category: 'caras', tags: ['fiesta', 'celebrar', 'cumpleanos', 'gorrito'] },
  { id: 'ca-13', char: '😭', name: 'Llanto Fuerte', category: 'caras', tags: ['llanto', 'triste', 'lagrimas', 'dramatico'] },
  { id: 'ca-14', char: '🥱', name: 'Bostezo Sueño', category: 'caras', tags: ['bostezo', 'sueno', 'aburrido', 'cansado'] },
  { id: 'ca-15', char: '😤', name: 'Cara Humo Enojado', category: 'caras', tags: ['enojo', 'humo', 'frustracion', 'rabia'] },
  { id: 'ca-16', char: '🫠', name: 'Derretido de Calor', category: 'caras', tags: ['derretido', 'calor', 'flojo', 'relax'] },
  { id: 'ca-17', char: '🫡', name: 'Saludo Militar', category: 'caras', tags: ['saludo', 'militar', 'respeto', 'sir'] },
  { id: 'ca-18', char: '🫣', name: 'Tapándose un Ojo', category: 'caras', tags: ['timido', 'curiosidad', 'ojo', 'peek'] },
  { id: 'ca-19', char: '😏', name: 'Sonrisa Pícara', category: 'caras', tags: ['picaro', 'coqueto', 'malicioso', 'travesura'] },
  { id: 'ca-20', char: '🙄', name: 'Ojos Rodando', category: 'caras', tags: ['ojos', 'rodando', 'ironico', 'drama'] },

  // ══════════════════════════════════════════════════════════════
  // ── COMIDA & BEBIDA ──
  // ══════════════════════════════════════════════════════════════
  { id: 'co-1', char: '🍕', name: 'Pizza Deliciosa', category: 'comida', tags: ['pizza', 'comida', 'italiano', 'rico'] },
  { id: 'co-2', char: '🍔', name: 'Hamburguesa Jugosa', category: 'comida', tags: ['hamburguesa', 'burger', 'comida', 'rapida'] },
  { id: 'co-3', char: '🍟', name: 'Papas Fritas Crujientes', category: 'comida', tags: ['papas', 'fritas', 'snack', 'comida'] },
  { id: 'co-4', char: '🌮', name: 'Taco Mexicano', category: 'comida', tags: ['taco', 'mexico', 'comida', 'salsa'] },
  { id: 'co-5', char: '🍣', name: 'Sushi Japonés', category: 'comida', tags: ['sushi', 'japon', 'pescado', 'comida'] },
  { id: 'co-6', char: '🍰', name: 'Pastel de Fresa', category: 'comida', tags: ['pastel', 'tarta', 'dulce', 'postre'] },
  { id: 'co-7', char: '🧁', name: 'Cupcake Decorado', category: 'comida', tags: ['cupcake', 'dulce', 'decoracion', 'cute'] },
  { id: 'co-8', char: '🍩', name: 'Dona Glaseada', category: 'comida', tags: ['dona', 'donut', 'dulce', 'chocolate'] },
  { id: 'co-9', char: '🍦', name: 'Helado de Cucurucho', category: 'comida', tags: ['helado', 'verano', 'dulce', 'frio'] },
  { id: 'co-10', char: '🍪', name: 'Galleta con Chispas', category: 'comida', tags: ['galleta', 'cookie', 'chocolate', 'dulce'] },
  { id: 'co-11', char: '🍫', name: 'Barra de Chocolate', category: 'comida', tags: ['chocolate', 'dulce', 'cacao', 'snack'] },
  { id: 'co-12', char: '🥤', name: 'Vaso con Popote', category: 'comida', tags: ['refresco', 'bebida', 'vaso', 'popote'] },
  { id: 'co-13', char: '🍷', name: 'Copa de Vino Tinto', category: 'comida', tags: ['vino', 'copa', 'brindis', 'elegante'] },
  { id: 'co-14', char: '🥂', name: 'Brindis Champaña', category: 'comida', tags: ['brindis', 'champana', 'fiesta', 'celebrar'] },
  { id: 'co-15', char: '🍿', name: 'Palomitas de Cine', category: 'comida', tags: ['palomitas', 'cine', 'pelicula', 'snack'] },

  // ══════════════════════════════════════════════════════════════
  // ── DEPORTES & ACTIVIDADES ──
  // ══════════════════════════════════════════════════════════════
  { id: 'dp-1', char: '⚽', name: 'Balón de Fútbol', category: 'deportes', tags: ['futbol', 'balon', 'gol', 'deporte'] },
  { id: 'dp-2', char: '🏀', name: 'Balón de Básquetbol', category: 'deportes', tags: ['basquetbol', 'nba', 'canasta', 'deporte'] },
  { id: 'dp-3', char: '🏈', name: 'Balón de Fútbol Americano', category: 'deportes', tags: ['americano', 'nfl', 'touchdown', 'deporte'] },
  { id: 'dp-4', char: '⚾', name: 'Pelota de Béisbol', category: 'deportes', tags: ['beisbol', 'pelota', 'bat', 'deporte'] },
  { id: 'dp-5', char: '🎾', name: 'Pelota de Tenis', category: 'deportes', tags: ['tenis', 'raqueta', 'deporte', 'pelota'] },
  { id: 'dp-6', char: '🏐', name: 'Balón de Voleibol', category: 'deportes', tags: ['voleibol', 'playa', 'red', 'deporte'] },
  { id: 'dp-7', char: '🎱', name: 'Bola 8 Billar', category: 'deportes', tags: ['billar', 'pool', 'ocho', 'deporte'] },
  { id: 'dp-8', char: '🏋️', name: 'Levantamiento de Pesas', category: 'deportes', tags: ['pesas', 'gym', 'fitness', 'fuerza'] },
  { id: 'dp-9', char: '🧗', name: 'Escalada en Roca', category: 'deportes', tags: ['escalada', 'montaña', 'aventura', 'deporte'] },
  { id: 'dp-10', char: '🏄', name: 'Surf en la Ola', category: 'deportes', tags: ['surf', 'playa', 'ola', 'mar'] },
  { id: 'dp-11', char: '⛷️', name: 'Esquí en Nieve', category: 'deportes', tags: ['esqui', 'nieve', 'invierno', 'montaña'] },
  { id: 'dp-12', char: '🏊', name: 'Nadando en el Agua', category: 'deportes', tags: ['nadar', 'piscina', 'agua', 'deporte'] },
  { id: 'dp-13', char: '🚴', name: 'Ciclismo Veloz', category: 'deportes', tags: ['bicicleta', 'ciclismo', 'deporte', 'velocidad'] },
  { id: 'dp-14', char: '🥊', name: 'Guante de Boxeo', category: 'deportes', tags: ['boxeo', 'pelea', 'lucha', 'deporte'] },
  { id: 'dp-15', char: '🏹', name: 'Arco y Flecha', category: 'deportes', tags: ['arco', 'flecha', 'tiro', 'punteria'] },

  // ══════════════════════════════════════════════════════════════
  // ── VIAJES & TRANSPORTE ──
  // ══════════════════════════════════════════════════════════════
  { id: 'tr-1', char: '✈️', name: 'Avión Despegando', category: 'transporte', tags: ['avion', 'viaje', 'vuelo', 'vacaciones'] },
  { id: 'tr-2', char: '🚀', name: 'Cohete Espacial', category: 'transporte', tags: ['cohete', 'espacio', 'rapido', 'lanzamiento'] },
  { id: 'tr-3', char: '🚗', name: 'Coche Rojo', category: 'transporte', tags: ['coche', 'carro', 'auto', 'conducir'] },
  { id: 'tr-4', char: '🏍️', name: 'Moto Deportiva', category: 'transporte', tags: ['moto', 'velocidad', 'motocicleta', 'deporte'] },
  { id: 'tr-5', char: '🚢', name: 'Barco Crucero', category: 'transporte', tags: ['barco', 'crucero', 'mar', 'viaje'] },
  { id: 'tr-6', char: '🚂', name: 'Tren Locomotora', category: 'transporte', tags: ['tren', 'locomotora', 'viaje', 'ferrocarril'] },
  { id: 'tr-7', char: '🗺️', name: 'Mapa del Mundo', category: 'transporte', tags: ['mapa', 'mundo', 'viaje', 'explorar'] },
  { id: 'tr-8', char: '🏔️', name: 'Montaña Nevada', category: 'transporte', tags: ['montaña', 'nieve', 'aventura', 'naturaleza'] },
  { id: 'tr-9', char: '🏖️', name: 'Playa Tropical', category: 'transporte', tags: ['playa', 'sombrilla', 'vacaciones', 'verano'] },
  { id: 'tr-10', char: '🗼', name: 'Torre Eiffel', category: 'transporte', tags: ['torre', 'paris', 'francia', 'viaje'] },
  { id: 'tr-11', char: '🎡', name: 'Noria Rueda de la Fortuna', category: 'transporte', tags: ['noria', 'parque', 'diversiones', 'feria'] },
  { id: 'tr-12', char: '⛵', name: 'Velero en el Mar', category: 'transporte', tags: ['velero', 'barco', 'mar', 'viento'] },

  // ══════════════════════════════════════════════════════════════
  // ── BANDERAS & SÍMBOLOS NACIONALES ──
  // ══════════════════════════════════════════════════════════════
  { id: 'bn-1', char: '🏁', name: 'Bandera a Cuadros', category: 'banderas', tags: ['bandera', 'carrera', 'meta', 'final'] },
  { id: 'bn-2', char: '🏳️', name: 'Bandera Blanca Paz', category: 'banderas', tags: ['bandera', 'blanca', 'paz', 'rendirse'] },
  { id: 'bn-3', char: '🏴', name: 'Bandera Negra Pirata', category: 'banderas', tags: ['bandera', 'negra', 'pirata', 'rebel'] },
  { id: 'bn-4', char: '🚩', name: 'Bandera Roja Triangular', category: 'banderas', tags: ['bandera', 'roja', 'alerta', 'señal'] },
  { id: 'bn-5', char: '🏳️‍🌈', name: 'Bandera Arcoíris', category: 'banderas', tags: ['bandera', 'arcoiris', 'pride', 'diversidad'] },
  { id: 'bn-6', char: '🎌', name: 'Banderas Cruzadas', category: 'banderas', tags: ['bandera', 'cruzadas', 'celebracion', 'japon'] },
  { id: 'bn-7', char: '⚑', name: 'Banderín Negro Sólido', category: 'banderas', tags: ['bandera', 'solido', 'negro'] },
  { id: 'bn-8', char: '⚐', name: 'Banderín Blanco Hueco', category: 'banderas', tags: ['bandera', 'hueco', 'blanco'] },
];

export const READY_COMBOS: ReadyCombo[] = [
  { id: 'rc-1', combo: '✦ ♡ ☾ ♡ ✦', name: 'Cielo Romántico', category: 'aesthetic' },
  { id: 'rc-2', combo: '୨୧ ✦ Sofía ✦ ୨୧', name: 'Coquette Nombre', category: 'aesthetic' },
  { id: 'rc-3', combo: '『 Carlos 』', name: 'Enmarcado Esport', category: 'enmarcado' },
  { id: 'rc-4', combo: '【 Nova 】', name: 'Corchete Doble', category: 'enmarcado' },
  { id: 'rc-5', combo: '꧁༺ Alex ༻꧂', name: 'Alas Espectaculares', category: 'enmarcado' },
  { id: 'rc-6', combo: '亗 Rey del Norte 亗', name: 'Corona Competitiva', category: 'gaming' },
  { id: 'rc-7', combo: '• ─ ━ ─ •', name: 'Separador Limpio', category: 'separador' },
  { id: 'rc-8', combo: '✧･ﾟ: *✧･ﾟ:*', name: 'Lluvia de Destellos', category: 'aesthetic' },
  { id: 'rc-9', combo: '⚔ Furia Roja ⚔', name: 'Combate Doble', category: 'gaming' },
  { id: 'rc-10', combo: '☾ Luna ☽', name: 'Lunas Gemelas', category: 'aesthetic' },
  { id: 'rc-11', combo: '✿ Luna ✿', name: 'Flores Delicadas', category: 'aesthetic' },
  { id: 'rc-12', combo: 'Música ✦ Viajes ✦ Café', name: 'Bio Separada', category: 'separador' },
  { id: 'rc-13', combo: '⋆｡˚ ☁︎ ｡⋆ Sofía ⋆｡˚ ☁︎ ｡⋆', name: 'Nube Soñadora', category: 'aesthetic' },
  { id: 'rc-14', combo: 'ฅ^•ﻌ•^ฅ Miau', name: 'Michi Saludo', category: 'kaomoji' },
  { id: 'rc-15', combo: '𓆩♡𓆪 Ángel Caído 𓆩♡𓆪', name: 'Alas Dark Corazón', category: 'aesthetic' },
  { id: 'rc-16', combo: '⚡ ᴛᴏxɪᴄ ⚡', name: 'Rayo Tóxico Gamer', category: 'gaming' },
  { id: 'rc-17', combo: '(｡♥‿♥｡) Te Amo (｡♥‿♥｡)', name: 'Amor Kaomoji Puro', category: 'kaomoji' },
  { id: 'rc-18', combo: '౨ৎ Princesa ౨ৎ', name: 'Mariposa Coquette', category: 'aesthetic' },
  { id: 'rc-19', combo: '🔥 ᴅᴇᴀᴛʜ ☠️', name: 'Muerte Ígnea', category: 'gaming' },
  { id: 'rc-20', combo: '✨ 𝒱𝒾𝒷𝑒𝓈 ✨', name: 'Vibras Mágicas', category: 'aesthetic' },
  { id: 'rc-21', combo: '🌸 ♡ Primavera ♡ 🌸', name: 'Florecimiento', category: 'aesthetic' },
  { id: 'rc-22', combo: '💎 ━━ VIP ━━ 💎', name: 'Diamante VIP', category: 'enmarcado' },
  { id: 'rc-23', combo: '🏆 ★ Campeón ★ 🏆', name: 'Campeón Dorado', category: 'gaming' },
  { id: 'rc-24', combo: '✧˚. ༘⋆ 𝒟𝓇𝑒𝒶𝓂𝓈 ✧˚. ༘⋆', name: 'Sueños Cósmicos', category: 'aesthetic' },
  { id: 'rc-25', combo: '《 ☬ Guerrero ☬ 》', name: 'Guerrero Legendario', category: 'gaming' },
  { id: 'rc-26', combo: '🦋 ✦ Libre ✦ 🦋', name: 'Mariposa Libre', category: 'aesthetic' },
  { id: 'rc-27', combo: '♫ ♪ Música ♪ ♫', name: 'Melodía Musical', category: 'aesthetic' },
  { id: 'rc-28', combo: '🔮 ✦ Mística ✦ 🔮', name: 'Poder Místico', category: 'aesthetic' },
  { id: 'rc-29', combo: '🌙 ☆ Noche ☆ 🌙', name: 'Noche Estrellada', category: 'aesthetic' },
  { id: 'rc-30', combo: '⟡ ── ⟡ ── ⟡', name: 'Diamantes en Línea', category: 'separador' },
];

export function searchMasterSymbols(query: string, category: MasterSymbolCategory): GeneralSymbol[] {
  const clean = query.trim().toLowerCase();

  return GENERAL_SYMBOLS.filter(item => {
    const matchesCategory = category === 'todos' || item.category === category;
    if (!matchesCategory) return false;
    if (!clean) return true;

    const charMatch = item.char.toLowerCase().includes(clean);
    const nameMatch = item.name.toLowerCase().includes(clean);
    const tagMatch = item.tags.some(t => t.toLowerCase().includes(clean));

    return charMatch || nameMatch || tagMatch;
  });
}
