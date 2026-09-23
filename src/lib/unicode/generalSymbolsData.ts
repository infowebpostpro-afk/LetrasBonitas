export type MasterSymbolCategory =
  | 'todos'
  | 'corazones'
  | 'estrellas'
  | 'aesthetic'
  | 'flechas'
  | 'flores'
  | 'lunas'
  | 'coronas'
  | 'marcos'
  | 'separadores'
  | 'musica'
  | 'marcas'
  | 'zodiaco'
  | 'gaming'
  | 'matematicos';

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
  category: 'aesthetic' | 'enmarcado' | 'separador' | 'gaming';
}

export const MASTER_CATEGORIES: { id: MasterSymbolCategory; label: string; icon: string }[] = [
  { id: 'todos', label: 'Todos', icon: '✨' },
  { id: 'corazones', label: 'Corazones', icon: '♡' },
  { id: 'estrellas', label: 'Estrellas', icon: '★' },
  { id: 'aesthetic', label: 'Aesthetic', icon: '✦' },
  { id: 'flechas', label: 'Flechas', icon: '→' },
  { id: 'flores', label: 'Flores', icon: '✿' },
  { id: 'lunas', label: 'Lunas y Cielo', icon: '☾' },
  { id: 'coronas', label: 'Coronas', icon: '♛' },
  { id: 'marcos', label: 'Marcos', icon: '『』' },
  { id: 'separadores', label: 'Separadores', icon: '•' },
  { id: 'musica', label: 'Música', icon: '♪' },
  { id: 'marcas', label: 'Marcas', icon: '✓' },
  { id: 'zodiaco', label: 'Zodiaco', icon: '♈' },
  { id: 'gaming', label: 'Gaming', icon: '🎮' },
  { id: 'matematicos', label: 'Matemáticos', icon: '±' },
];

export const GENERAL_SYMBOLS: GeneralSymbol[] = [
  // ── Corazones ──
  { id: 'c-1', char: '♡', name: 'Corazón Contorno', category: 'corazones', tags: ['corazon', 'amor', 'romance', 'linea', 'aesthetic', 'pareja'] },
  { id: 'c-2', char: '♥', name: 'Corazón Sólido', category: 'corazones', tags: ['corazon', 'amor', 'negro', 'relleno', 'pareja'] },
  { id: 'c-3', char: '❤', name: 'Corazón Rojo Clásico', category: 'corazones', tags: ['corazon', 'rojo', 'pasion'] },
  { id: 'c-4', char: '❥', name: 'Corazón Girado', category: 'corazones', tags: ['corazon', 'decorativo', 'elegante'] },
  { id: 'c-5', char: '❣', name: 'Exclamación Corazón', category: 'corazones', tags: ['corazon', 'exclamacion', 'alerta'] },
  { id: 'c-6', char: '❦', name: 'Corazón Floral / Hiedra', category: 'corazones', tags: ['corazon', 'flor', 'vintage'] },
  { id: 'c-7', char: 'ღ', name: 'Corazón Georgiano', category: 'corazones', tags: ['corazon', 'aesthetic', 'suave', 'curva'] },
  { id: 'c-8', char: 'ෆ', name: 'Corazón Manzana', category: 'corazones', tags: ['corazon', 'cute', 'kawaii', 'coreano'] },
  { id: 'c-9', char: 'დ', name: 'Corazón Doble Curva', category: 'corazones', tags: ['corazon', 'amor', 'suave'] },

  // ── Estrellas y Destellos ──
  { id: 'e-1', char: '★', name: 'Estrella Negra Sólida', category: 'estrellas', tags: ['estrella', 'brillo', 'noche', 'cielo', 'rating'] },
  { id: 'e-2', char: '☆', name: 'Estrella Contorno', category: 'estrellas', tags: ['estrella', 'linea', 'cielo'] },
  { id: 'e-3', char: '✦', name: 'Destello Cuatro Puntas Sólido', category: 'estrellas', tags: ['estrella', 'destello', 'brillo', 'sparkle', 'aesthetic'] },
  { id: 'e-4', char: '✧', name: 'Destello Cuatro Puntas Hueco', category: 'estrellas', tags: ['estrella', 'destello', 'brillo', 'sparkle', 'aesthetic'] },
  { id: 'e-5', char: '✩', name: 'Estrella Redondeada', category: 'estrellas', tags: ['estrella', 'decoracion'] },
  { id: 'e-6', char: '✰', name: 'Estrella Sombría', category: 'estrellas', tags: ['estrella', 'destello'] },
  { id: 'e-7', char: '⋆', name: 'Estrella Minúscula', category: 'estrellas', tags: ['estrella', 'pequena', 'polvo', 'aesthetic'] },
  { id: 'e-8', char: '⟡', name: 'Diamante Astral', category: 'estrellas', tags: ['estrella', 'diamante', 'rombo', 'brillo'] },
  { id: 'e-9', char: '✬', name: 'Estrella Pin', category: 'estrellas', tags: ['estrella'] },
  { id: 'e-10', char: '✯', name: 'Estrella Militar', category: 'estrellas', tags: ['estrella', 'rango'] },

  // ── Aesthetic & Destellos ──
  { id: 'a-1', char: '୨୧', name: 'Lazo Coquette', category: 'aesthetic', tags: ['lazo', 'coquette', 'cute', 'kawaii', 'aesthetic', 'mono'] },
  { id: 'a-2', char: 'ʚ', name: 'Ala Izquierda', category: 'aesthetic', tags: ['ala', 'angel', 'aesthetic'] },
  { id: 'a-3', char: 'ɞ', name: 'Ala Derecha', category: 'aesthetic', tags: ['ala', 'angel', 'aesthetic'] },
  { id: 'a-4', char: '₊˚⊹', name: 'Polvo de Estrellas', category: 'aesthetic', tags: ['brillo', 'polvo', 'nube', 'aesthetic'] },
  { id: 'a-5', char: '౨ৎ', name: 'Mariposa Pequeña', category: 'aesthetic', tags: ['mariposa', 'coquette', 'cute'] },
  { id: 'a-6', char: '☕', name: 'Taza de Café', category: 'aesthetic', tags: ['cafe', 'relax', 'aesthetic'] },
  { id: 'a-7', char: '༉‧₊˚', name: 'Onda Cósmica', category: 'aesthetic', tags: ['onda', 'brillo', 'magia'] },
  { id: 'a-8', char: '𓆩', name: 'Guarda Ala Izquierda', category: 'aesthetic', tags: ['ala', 'dark', 'aesthetic'] },
  { id: 'a-9', char: '𓆪', name: 'Guarda Ala Derecha', category: 'aesthetic', tags: ['ala', 'dark', 'aesthetic'] },

  // ── Flechas ──
  { id: 'f-1', char: '→', name: 'Flecha Derecha', category: 'flechas', tags: ['flecha', 'derecha', 'siguiente', 'direccion'] },
  { id: 'f-2', char: '←', name: 'Flecha Izquierda', category: 'flechas', tags: ['flecha', 'izquierda', 'atras'] },
  { id: 'f-3', char: '↑', name: 'Flecha Arriba', category: 'flechas', tags: ['flecha', 'arriba', 'subir'] },
  { id: 'f-4', char: '↓', name: 'Flecha Abajo', category: 'flechas', tags: ['flecha', 'abajo', 'bajar'] },
  { id: 'f-5', char: '↗', name: 'Flecha Diagonal Arriba Derecha', category: 'flechas', tags: ['flecha', 'diagonal'] },
  { id: 'f-6', char: '↘', name: 'Flecha Diagonal Abajo Derecha', category: 'flechas', tags: ['flecha', 'diagonal'] },
  { id: 'f-7', char: '➜', name: 'Flecha Gruesa', category: 'flechas', tags: ['flecha', 'fuerte', 'negrita'] },
  { id: 'f-8', char: '➤', name: 'Flecha Triángulo', category: 'flechas', tags: ['flecha', 'play', 'boton'] },
  { id: 'f-9', char: '➳', name: 'Flecha Pluma', category: 'flechas', tags: ['flecha', 'arco', 'vintage', 'amor', 'cupido'] },
  { id: 'f-10', char: '⇄', name: 'Flechas Dobles Opuestas', category: 'flechas', tags: ['flecha', 'cambio', 'intercambio'] },

  // ── Flores ──
  { id: 'fl-1', char: '✿', name: 'Flor Blanca Cinco Pétalos', category: 'flores', tags: ['flor', 'naturaleza', 'primavera', 'suave'] },
  { id: 'fl-2', char: '❀', name: 'Flor Blanca Contorno', category: 'flores', tags: ['flor', 'cerezo', 'japon'] },
  { id: 'fl-3', char: '❁', name: 'Flor de Ocho Pétalos', category: 'flores', tags: ['flor', 'mandala'] },
  { id: 'fl-4', char: '✾', name: 'Flor Silvestre', category: 'flores', tags: ['flor'] },
  { id: 'fl-5', char: '❃', name: 'Trébol Floral', category: 'flores', tags: ['flor', 'hoja'] },
  { id: 'fl-6', char: '⚘', name: 'Rosa con Tallo', category: 'flores', tags: ['flor', 'rosa', 'planta'] },
  { id: 'fl-7', char: '❋', name: 'Flor Asterisco', category: 'flores', tags: ['flor', 'brillo'] },
  { id: 'fl-8', char: '𖤣𖥧', name: 'Jardín Botánico', category: 'flores', tags: ['flor', 'plantas', 'bosque'] },

  // ── Lunas y Cielo ──
  { id: 'l-1', char: '☾', name: 'Luna Creciente', category: 'lunas', tags: ['luna', 'noche', 'cielo', 'nocturno', 'espacio', 'aesthetic'] },
  { id: 'l-2', char: '☽', name: 'Luna Menguante', category: 'lunas', tags: ['luna', 'noche', 'cielo', 'nocturno'] },
  { id: 'l-3', char: '☼', name: 'Sol con Rayos', category: 'lunas', tags: ['sol', 'dia', 'luz', 'calor'] },
  { id: 'l-4', char: '☀', name: 'Sol Negro', category: 'lunas', tags: ['sol', 'brillo'] },
  { id: 'l-5', char: '☁', name: 'Nube', category: 'lunas', tags: ['nube', 'cielo', 'clima', 'lluvia'] },
  { id: 'l-6', char: '☄', name: 'Cometa', category: 'lunas', tags: ['cometa', 'espacio', 'meteoro', 'fuego'] },
  { id: 'l-7', char: '⚡', name: 'Rayo Eléctrico', category: 'lunas', tags: ['rayo', 'tormenta', 'energia', 'electricidad', 'gaming'] },

  // ── Coronas & Realeza ──
  { id: 'cr-1', char: '♔', name: 'Rey Blanco', category: 'coronas', tags: ['corona', 'rey', 'ajedrez', 'realeza'] },
  { id: 'cr-2', char: '♕', name: 'Reina Blanca', category: 'coronas', tags: ['corona', 'reina', 'realeza', 'mujer'] },
  { id: 'cr-3', char: '♚', name: 'Rey Negro', category: 'coronas', tags: ['corona', 'rey', 'negro', 'lider'] },
  { id: 'cr-4', char: '♛', name: 'Reina Negra', category: 'coronas', tags: ['corona', 'reina', 'realeza'] },
  { id: 'cr-5', char: '⚜', name: 'Flor de Lis', category: 'coronas', tags: ['corona', 'realeza', 'heraldica', 'francia', 'emblema'] },
  { id: 'cr-6', char: '👑', name: 'Corona Dorada', category: 'coronas', tags: ['corona', 'oro', 'rey', 'campeon'] },

  // ── Marcos & Brackets ──
  { id: 'm-1', char: '『 』', name: 'Corchetes Asiáticos Esport', category: 'marcos', tags: ['marco', 'esport', 'bracket', 'japones', 'nombre'] },
  { id: 'm-2', char: '「 」', name: 'Comillas Esquina', category: 'marcos', tags: ['marco', 'texto', 'cita'] },
  { id: 'm-3', char: '【 】', name: 'Lente Corchetes', category: 'marcos', tags: ['marco', 'tag', 'clan'] },
  { id: 'm-4', char: '〖 〗', name: 'Lente Hueco', category: 'marcos', tags: ['marco', 'decoracion'] },
  { id: 'm-5', char: '꧁ ꧂', name: 'Alas Reales Marco', category: 'marcos', tags: ['marco', 'alas', 'elegante', 'arabesco', 'freefire'] },
  { id: 'm-6', char: '༺ ༻', name: 'Adorno Tibetano', category: 'marcos', tags: ['marco', 'adorno', 'tribal'] },
  { id: 'm-7', char: '〔 〕', name: 'Corchetes Tortuga', category: 'marcos', tags: ['marco', 'limpio'] },

  // ── Separadores & Líneas ──
  { id: 's-1', char: '•', name: 'Punto Medio / Bullet', category: 'separadores', tags: ['separador', 'punto', 'lista', 'bio'] },
  { id: 's-2', char: '─', name: 'Línea Continua Fina', category: 'separadores', tags: ['separador', 'linea', 'guion'] },
  { id: 's-3', char: '━', name: 'Línea Continua Gruesa', category: 'separadores', tags: ['separador', 'linea', 'gruesa'] },
  { id: 's-4', char: '│', name: 'Barra Vertical Fina', category: 'separadores', tags: ['separador', 'barra', 'pipe'] },
  { id: 's-5', char: '┊', name: 'Línea de Puntos Vertical', category: 'separadores', tags: ['separador', 'puntos'] },
  { id: 's-6', char: '｡･:*:･ﾟ', name: 'Divisor Estelar', category: 'separadores', tags: ['separador', 'brillo', 'estrellas'] },
  { id: 's-7', char: '✦ ── ✦', name: 'Separador de Destellos', category: 'separadores', tags: ['separador', 'destello'] },

  // ── Música ──
  { id: 'mu-1', char: '♪', name: 'Nota Musical Simple', category: 'musica', tags: ['musica', 'nota', 'cancion', 'sonido'] },
  { id: 'mu-2', char: '♫', name: 'Doble Nota Musical', category: 'musica', tags: ['musica', 'notas', 'ritmo'] },
  { id: 'mu-3', char: '♬', name: 'Corchea Doble', category: 'musica', tags: ['musica', 'audio'] },
  { id: 'mu-4', char: '♭', name: 'Bemol', category: 'musica', tags: ['musica', 'tono'] },
  { id: 'mu-5', char: '♮', name: 'Becuadro', category: 'musica', tags: ['musica'] },
  { id: 'mu-6', char: '♯', name: 'Sostenido', category: 'musica', tags: ['musica', 'hashtag'] },

  // ── Marcas & Verificados ──
  { id: 'mr-1', char: '✓', name: 'Check Simple', category: 'marcas', tags: ['marca', 'check', 'verificado', 'listo', 'correcto'] },
  { id: 'mr-2', char: '✔', name: 'Check Grueso', category: 'marcas', tags: ['marca', 'check', 'ok', 'aprobado'] },
  { id: 'mr-3', char: '✕', name: 'Cruz Multiplicación', category: 'marcas', tags: ['marca', 'cruz', 'cancelar', 'no'] },
  { id: 'mr-4', char: '✖', name: 'Cruz Gruesa', category: 'marcas', tags: ['marca', 'error', 'cerrar'] },
  { id: 'mr-5', char: '✗', name: 'Equis de Votación', category: 'marcas', tags: ['marca', 'voto'] },
  { id: 'mr-6', char: '©', name: 'Copyright', category: 'marcas', tags: ['marca', 'derechos', 'legal'] },
  { id: 'mr-7', char: '®', name: 'Marca Registrada', category: 'marcas', tags: ['marca', 'registro'] },
  { id: 'mr-8', char: '™', name: 'Trade Mark', category: 'marcas', tags: ['marca', 'logo'] },

  // ── Zodiaco ──
  { id: 'z-1', char: '♈', name: 'Aries', category: 'zodiaco', tags: ['zodiaco', 'aries', 'signo', 'horoscopo', 'fuego'] },
  { id: 'z-2', char: '♉', name: 'Tauro', category: 'zodiaco', tags: ['zodiaco', 'tauro', 'tierra'] },
  { id: 'z-3', char: '♊', name: 'Géminis', category: 'zodiaco', tags: ['zodiaco', 'geminis', 'aire'] },
  { id: 'z-4', char: '♋', name: 'Cáncer', category: 'zodiaco', tags: ['zodiaco', 'cancer', 'agua'] },
  { id: 'z-5', char: '♌', name: 'Leo', category: 'zodiaco', tags: ['zodiaco', 'leo', 'fuego', 'leon'] },
  { id: 'z-6', char: '♍', name: 'Virgo', category: 'zodiaco', tags: ['zodiaco', 'virgo', 'tierra'] },
  { id: 'z-7', char: '♎', name: 'Libra', category: 'zodiaco', tags: ['zodiaco', 'libra', 'balanza', 'aire'] },
  { id: 'z-8', char: '♏', name: 'Escorpio', category: 'zodiaco', tags: ['zodiaco', 'escorpio', 'agua'] },
  { id: 'z-9', char: '♐', name: 'Sagitario', category: 'zodiaco', tags: ['zodiaco', 'sagitario', 'fuego'] },
  { id: 'z-10', char: '♑', name: 'Capricornio', category: 'zodiaco', tags: ['zodiaco', 'capricornio', 'tierra'] },
  { id: 'z-11', char: '♒', name: 'Acuario', category: 'zodiaco', tags: ['zodiaco', 'acuario', 'aire'] },
  { id: 'z-12', char: '♓', name: 'Piscis', category: 'zodiaco', tags: ['zodiaco', 'piscis', 'agua'] },

  // ── Gaming & Especiales ──
  { id: 'g-1', char: '亗', name: 'Corona Esport Clan', category: 'gaming', tags: ['gaming', 'corona', 'clan', 'freefire', 'esport', 'lider'] },
  { id: 'g-2', char: '⚔', name: 'Espadas Cruzadas', category: 'gaming', tags: ['gaming', 'espadas', 'combate', 'pelea', 'guerra'] },
  { id: 'g-3', char: '☠', name: 'Calavera y Huesos', category: 'gaming', tags: ['gaming', 'calavera', 'muerte', 'peligro', 'toxic'] },
  { id: 'g-4', char: '☯', name: 'Yin Yang', category: 'gaming', tags: ['gaming', 'equilibrio', 'zen', 'filosofia'] },
  { id: 'g-5', char: '☣', name: 'Riesgo Biológico', category: 'gaming', tags: ['gaming', 'biohazard', 'peligro', 'nuclear'] },
  { id: 'g-6', char: '☢', name: 'Radiación Nuclear', category: 'gaming', tags: ['gaming', 'nuclear', 'radioactivo'] },
  { id: 'g-7', char: '⌖', name: 'Mira Telescópica / Crosshair', category: 'gaming', tags: ['gaming', 'mira', 'sniper', 'aim', 'fps'] },
  { id: 'g-8', char: '☥', name: 'Cruz Ansada Ankh', category: 'gaming', tags: ['gaming', 'ankh', 'egipto', 'vida'] },

  // ── Matemáticos ──
  { id: 'mt-1', char: '±', name: 'Más Menos', category: 'matematicos', tags: ['matematicas', 'mas', 'menos'] },
  { id: 'mt-2', char: '×', name: 'Multiplicación', category: 'matematicos', tags: ['matematicas', 'por'] },
  { id: 'mt-3', char: '÷', name: 'División', category: 'matematicos', tags: ['matematicas', 'entre'] },
  { id: 'mt-4', char: '≠', name: 'No Igual / Distinto', category: 'matematicos', tags: ['matematicas', 'diferente'] },
  { id: 'mt-5', char: '≈', name: 'Aproximado', category: 'matematicos', tags: ['matematicas', 'casi'] },
  { id: 'mt-6', char: '≤', name: 'Menor o Igual', category: 'matematicos', tags: ['matematicas'] },
  { id: 'mt-7', char: '≥', name: 'Mayor o Igual', category: 'matematicos', tags: ['matematicas'] },
  { id: 'mt-8', char: '∞', name: 'Infinito', category: 'matematicos', tags: ['matematicas', 'infinito', 'siempre', 'eterno'] },
  { id: 'mt-9', char: '√', name: 'Raíz Cuadrada', category: 'matematicos', tags: ['matematicas', 'raiz'] },
  { id: 'mt-10', char: 'π', name: 'Pi', category: 'matematicos', tags: ['matematicas', 'pi'] },
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
];

export function searchMasterSymbols(query: string, category: MasterSymbolCategory): GeneralSymbol[] {
  const clean = query.trim().toLowerCase();

  return GENERAL_SYMBOLS.filter(item => {
    const matchesCategory = category === 'todos' || item.category === category;
    if (!matchesCategory) return false;
    if (!clean) return true;

    const charMatch = item.char.includes(clean);
    const nameMatch = item.name.toLowerCase().includes(clean);
    const tagMatch = item.tags.some(t => t.toLowerCase().includes(clean));

    return charMatch || nameMatch || tagMatch;
  });
}
