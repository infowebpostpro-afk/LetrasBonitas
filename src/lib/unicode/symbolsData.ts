export type SymbolCategory =
  | "all"
  | "favorites"
  | "corazones"
  | "estrellas"
  | "flechas"
  | "flores"
  | "aesthetic"
  | "decorativos"
  | "lineas"
  | "separadores"
  | "formas"
  | "especiales";

export type InstagramSymbol = {
  id: string;
  symbol: string;
  name: string;
  category: SymbolCategory;
  tags: string[];
  featured?: boolean;
};

export const SYMBOL_CATEGORIES: { id: SymbolCategory; label: string; icon: string }[] = [
  { id: "all", label: "Todos", icon: "✨" },
  { id: "favorites", label: "Favoritos", icon: "♥" },
  { id: "corazones", label: "Corazones", icon: "♡" },
  { id: "estrellas", label: "Estrellas", icon: "✦" },
  { id: "flechas", label: "Flechas", icon: "➜" },
  { id: "flores", label: "Flores", icon: "❀" },
  { id: "aesthetic", label: "Aesthetic", icon: "✧" },
  { id: "decorativos", label: "Decorativos", icon: "༺" },
  { id: "lineas", label: "Líneas", icon: "─" },
  { id: "separadores", label: "Separadores", icon: "•" },
  { id: "formas", label: "Formas", icon: "◇" },
  { id: "especiales", label: "Especiales", icon: "⚡" },
];

export const INSTAGRAM_SYMBOLS: InstagramSymbol[] = [
  // ── Corazones ──
  { id: "heart-solid", symbol: "♥", name: "Corazón Negro", category: "corazones", tags: ["corazon", "amor", "negro"], featured: true },
  { id: "heart-outline", symbol: "♡", name: "Corazón Contorno", category: "corazones", tags: ["corazon", "linea", "aesthetic"], featured: true },
  { id: "heart-red", symbol: "❤", name: "Corazón Rojo", category: "corazones", tags: ["corazon", "rojo"], featured: true },
  { id: "heart-suit", symbol: "❥", name: "Corazón Decorativo", category: "corazones", tags: ["corazon", "estilo"] },
  { id: "heart-exclamation", symbol: "❣", name: "Exclamación Corazón", category: "corazones", tags: ["corazon", "exclamacion"] },
  { id: "heart-curved", symbol: "ღ", name: "Corazón Curvo", category: "corazones", tags: ["corazon", "aesthetic"] },
  { id: "heart-sparkle", symbol: "💖", name: "Corazón Brillante", category: "corazones", tags: ["corazon", "brillo", "emoji"], featured: true },
  { id: "heart-double", symbol: "💕", name: "Doble Corazón", category: "corazones", tags: ["corazon", "pareja"], featured: true },
  { id: "heart-revolving", symbol: "💞", name: "Corazones Giratorios", category: "corazones", tags: ["corazon"] },
  { id: "heart-arrow", symbol: "💘", name: "Corazón con Flecha", category: "corazones", tags: ["corazon", "cupido"] },
  { id: "heart-ribbon", symbol: "💝", name: "Corazón Regalo", category: "corazones", tags: ["corazon", "regalo"] },
  { id: "heart-growing", symbol: "💗", name: "Corazón Creciente", category: "corazones", tags: ["corazon"] },
  { id: "heart-white", symbol: "🤍", name: "Corazón Blanco", category: "corazones", tags: ["corazon", "blanco", "aesthetic"] },
  { id: "heart-brown", symbol: "🤎", name: "Corazón Café", category: "corazones", tags: ["corazon", "cafe"] },
  { id: "heart-purple", symbol: "💜", name: "Corazón Morado", category: "corazones", tags: ["corazon", "morado"] },

  // ── Estrellas y Destellos ──
  { id: "star-solid", symbol: "★", name: "Estrella Rellena", category: "estrellas", tags: ["estrella", "destello"], featured: true },
  { id: "star-outline", symbol: "☆", name: "Estrella Contorno", category: "estrellas", tags: ["estrella", "linea"], featured: true },
  { id: "star-sparkle-4", symbol: "✦", name: "Destello Cuatro Puntas", category: "estrellas", tags: ["destello", "brillo", "aesthetic"], featured: true },
  { id: "star-sparkle-soft", symbol: "✧", name: "Destello Suave", category: "estrellas", tags: ["destello", "aesthetic"], featured: true },
  { id: "star-circled", symbol: "✪", name: "Estrella en Círculo", category: "estrellas", tags: ["estrella"] },
  { id: "star-open-center", symbol: "✩", name: "Estrella Centro Abierto", category: "estrellas", tags: ["estrella"] },
  { id: "star-sharp", symbol: "✫", name: "Estrella Afilada", category: "estrellas", tags: ["estrella"] },
  { id: "star-shadowed", symbol: "✬", name: "Estrella Sombreada", category: "estrellas", tags: ["estrella"] },
  { id: "star-heavy-outline", symbol: "✭", name: "Estrella Gruesa Contorno", category: "estrellas", tags: ["estrella"] },
  { id: "star-four-point-heavy", symbol: "✮", name: "Estrella 4 Puntas Gruesa", category: "estrellas", tags: ["estrella"] },
  { id: "star-pinwheel", symbol: "✯", name: "Estrella Hélice", category: "estrellas", tags: ["estrella"] },
  { id: "star-outlined-heavy", symbol: "✰", name: "Estrella Brillante Gruesa", category: "estrellas", tags: ["estrella"] },
  { id: "sparkles-emoji", symbol: "✨", name: "Brillos Sparkles", category: "estrellas", tags: ["brillo", "emoji", "magia"], featured: true },
  { id: "star-glowing", symbol: "🌟", name: "Estrella Brillante", category: "estrellas", tags: ["estrella", "brillo"] },
  { id: "star-shooting", symbol: "💫", name: "Estrella Fugaz", category: "estrellas", tags: ["estrella", "fugaz"] },
  { id: "star-eight-point", symbol: "✴", name: "Estrella Ocho Puntas", category: "estrellas", tags: ["estrella"] },
  { id: "star-six-point", symbol: "✶", name: "Estrella Seis Puntas", category: "estrellas", tags: ["estrella"] },
  { id: "star-heavy", symbol: "✸", name: "Estrella Explosión", category: "estrellas", tags: ["estrella"] },
  { id: "star-burst", symbol: "✹", name: "Estrella Ráfaga", category: "estrellas", tags: ["estrella"] },

  // ── Flores ──
  { id: "flower-outline", symbol: "✿", name: "Flor Rellena Suave", category: "flores", tags: ["flor", "nature"], featured: true },
  { id: "flower-simple", symbol: "❀", name: "Flor Contorno", category: "flores", tags: ["flor", "linea"], featured: true },
  { id: "flower-gear", symbol: "❁", name: "Flor Floral", category: "flores", tags: ["flor"] },
  { id: "flower-variant-1", symbol: "❃", name: "Flor Pétalos Grandes", category: "flores", tags: ["flor"] },
  { id: "flower-variant-2", symbol: "❋", name: "Flor Estrella", category: "flores", tags: ["flor"] },
  { id: "flower-variant-3", symbol: "❊", name: "Flor Copo", category: "flores", tags: ["flor"] },
  { id: "flower-variant-4", symbol: "❉", name: "Flor Decorativa", category: "flores", tags: ["flor"] },
  { id: "flower-cherry", symbol: "🌸", name: "Flor de Cerezo", category: "flores", tags: ["flor", "sakura", "aesthetic"], featured: true },
  { id: "flower-daisy", symbol: "🌼", name: "Margarita", category: "flores", tags: ["flor", "margarita"] },
  { id: "flower-tulip", symbol: "🌷", name: "Tulipán", category: "flores", tags: ["flor", "tulipan"] },
  { id: "flower-hibiscus", symbol: "🌺", name: "Hibisco", category: "flores", tags: ["flor", "tropical"] },
  { id: "flower-rosette", symbol: "🏵", name: "Roseta", category: "flores", tags: ["flor"] },
  { id: "clover-four", symbol: "🍀", name: "Trébol 4 Hojas", category: "flores", tags: ["trebol", "suerte"] },
  { id: "clover-three", symbol: "☘", name: "Trébol 3 Hojas", category: "flores", tags: ["trebol"] },
  { id: "clover-suit", symbol: "♧", name: "Trébol Contorno", category: "flores", tags: ["trebol"] },

  // ── Flechas ──
  { id: "arrow-right-simple", symbol: "→", name: "Flecha Derecha Simple", category: "flechas", tags: ["flecha", "derecha"] },
  { id: "arrow-left-simple", symbol: "←", name: "Flecha Izquierda Simple", category: "flechas", tags: ["flecha"] },
  { id: "arrow-up-simple", symbol: "↑", name: "Flecha Arriba", category: "flechas", tags: ["flecha"] },
  { id: "arrow-down-simple", symbol: "↓", name: "Flecha Abajo", category: "flechas", tags: ["flecha", "enlace"], featured: true },
  { id: "arrow-up-right", symbol: "↗", name: "Flecha Diagonal Arriba Der", category: "flechas", tags: ["flecha"] },
  { id: "arrow-down-right", symbol: "↘", name: "Flecha Diagonal Abajo Der", category: "flechas", tags: ["flecha"] },
  { id: "arrow-down-left", symbol: "↙", name: "Flecha Diagonal Abajo Izq", category: "flechas", tags: ["flecha"] },
  { id: "arrow-up-left", symbol: "↖", name: "Flecha Diagonal Arriba Izq", category: "flechas", tags: ["flecha"] },
  { id: "arrow-right-bold", symbol: "➜", name: "Flecha Derecha Gruesa", category: "flechas", tags: ["flecha", "derecha", "enlace"], featured: true },
  { id: "arrow-right-pointer", symbol: "➤", name: "Flecha Triángulo", category: "flechas", tags: ["flecha"] },
  { id: "arrow-feather", symbol: "➳", name: "Flecha Pluma", category: "flechas", tags: ["flecha", "aesthetic"] },
  { id: "arrow-feather-thin", symbol: "➵", name: "Flecha Pluma Fina", category: "flechas", tags: ["flecha"] },
  { id: "finger-down-emoji", symbol: "👇", name: "Mano Señalando Abajo", category: "flechas", tags: ["flecha", "mano", "cta", "emoji"], featured: true },
  { id: "arrow-right-thin", symbol: "➔", name: "Flecha Fina", category: "flechas", tags: ["flecha"] },
  { id: "arrow-double-right", symbol: "≫", name: "Doble Flecha", category: "flechas", tags: ["flecha", "doble"] },
  { id: "arrow-curved-down", symbol: "⤵", name: "Flecha Curva Abajo", category: "flechas", tags: ["flecha", "abajo", "bio"], featured: true },
  { id: "arrow-curved-right", symbol: "↪", name: "Flecha Curva Derecha", category: "flechas", tags: ["flecha"] },
  { id: "arrow-double-head", symbol: "⇄", name: "Flechas Intercambio", category: "flechas", tags: ["flecha"] },

  // ── Separadores ──
  { id: "sep-bullet-big", symbol: "•", name: "Punto Medio", category: "separadores", tags: ["punto", "bio", "separador"], featured: true },
  { id: "sep-bullet-small", symbol: "·", name: "Punto Volado", category: "separadores", tags: ["punto", "minimalista", "separador"], featured: true },
  { id: "sep-pipe", symbol: "│", name: "Barra Vertical Fina", category: "separadores", tags: ["barra", "bio", "separador"], featured: true },
  { id: "sep-pipe-heavy", symbol: "┃", name: "Barra Vertical Gruesa", category: "separadores", tags: ["barra", "separador"] },
  { id: "sep-pipe-thin", symbol: "❘", name: "Barra Recta Fina", category: "separadores", tags: ["barra"] },
  { id: "sep-pipe-medium", symbol: "❙", name: "Barra Recta Media", category: "separadores", tags: ["barra"] },
  { id: "sep-dashed-pipe", symbol: "┆", name: "Barra Punteada 3", category: "separadores", tags: ["barra"] },
  { id: "sep-dotted-pipe", symbol: "┊", name: "Barra Punteada 4", category: "separadores", tags: ["barra"] },
  { id: "sep-bullet-white", symbol: "◦", name: "Punto Blanco", category: "separadores", tags: ["punto", "circulo"] },
  { id: "sep-diamond-dot", symbol: "❖", name: "Diamante Flor", category: "separadores", tags: ["diamante"], featured: true },
  { id: "sep-double-pipe", symbol: "║", name: "Doble Barra Vertical", category: "separadores", tags: ["barra"] },

  // ── Aesthetic & Cielo ──
  { id: "aesthetic-moon-outline", symbol: "☾", name: "Luna Contorno", category: "aesthetic", tags: ["luna", "noche", "aesthetic"], featured: true },
  { id: "aesthetic-moon-right", symbol: "☽", name: "Luna Creciente Der", category: "aesthetic", tags: ["luna", "noche"] },
  { id: "aesthetic-sun-rays", symbol: "☼", name: "Sol con Rayos", category: "aesthetic", tags: ["sol", "dia"] },
  { id: "aesthetic-sun-solid", symbol: "☀", name: "Sol Relleno", category: "aesthetic", tags: ["sol"] },
  { id: "aesthetic-cloud-simple", symbol: "☁", name: "Nube Contorno", category: "aesthetic", tags: ["nube"] },
  { id: "aesthetic-comet", symbol: "☄", name: "Cometa", category: "aesthetic", tags: ["cielo", "cometa"] },
  { id: "aesthetic-ribbon", symbol: "୨୧", name: "Lazo Ribbon Aesthetic", category: "aesthetic", tags: ["lazo", "coquette", "aesthetic"], featured: true },
  { id: "aesthetic-degree", symbol: "˚", name: "Punto Alto Ring", category: "aesthetic", tags: ["minimalista", "aesthetic"] },
  { id: "aesthetic-sparkle-mini", symbol: "⊹", name: "Destello Mini", category: "aesthetic", tags: ["destello", "aesthetic"] },
  { id: "aesthetic-star-small", symbol: "⋆", name: "Estrella Mini", category: "aesthetic", tags: ["estrella", "aesthetic"] },
  { id: "aesthetic-curly-wave", symbol: "⌇", name: "Onda Vertical", category: "aesthetic", tags: ["linea", "wave"] },
  { id: "aesthetic-flower-cute", symbol: "ꕤ", name: "Flor Cute Aesthetic", category: "aesthetic", tags: ["flor", "aesthetic"], featured: true },
  { id: "aesthetic-moon-emoji", symbol: "🌙", name: "Luna Creciente Emoji", category: "aesthetic", tags: ["luna", "noche", "emoji"] },
  { id: "aesthetic-sun-emoji", symbol: "☀️", name: "Sol Emoji", category: "aesthetic", tags: ["sol", "emoji"] },
  { id: "aesthetic-cloud-emoji", symbol: "☁️", name: "Nube Emoji", category: "aesthetic", tags: ["nube"] },
  { id: "aesthetic-dove", symbol: "🕊️", name: "Paloma Paz", category: "aesthetic", tags: ["paloma", "paz"] },
  { id: "aesthetic-butterfly", symbol: "🦋", name: "Mariposa", category: "aesthetic", tags: ["mariposa", "aesthetic"], featured: true },
  { id: "aesthetic-planet", symbol: "🪐", name: "Planeta con Anillo", category: "aesthetic", tags: ["espacio", "planeta"] },
  { id: "aesthetic-angel", symbol: "👼", name: "Ángel", category: "aesthetic", tags: ["angel"] },
  { id: "aesthetic-crown", symbol: "👑", name: "Corona", category: "aesthetic", tags: ["corona", "king", "queen"], featured: true },
  { id: "aesthetic-diamond", symbol: "💎", name: "Gema Diamante", category: "aesthetic", tags: ["diamante", "lujo"], featured: true },
  { id: "aesthetic-fire", symbol: "🔥", name: "Fuego", category: "aesthetic", tags: ["fuego", "trending"], featured: true },

  // ── Cruces & Decorativos ──
  { id: "cross-dagger", symbol: "†", name: "Daga Cruz", category: "decorativos", tags: ["cruz", "goth"] },
  { id: "cross-double-dagger", symbol: "‡", name: "Doble Daga", category: "decorativos", tags: ["cruz"] },
  { id: "cross-latin", symbol: "✝", name: "Cruz Latina", category: "decorativos", tags: ["cruz"] },
  { id: "cross-outline", symbol: "✞", name: "Cruz Contorno", category: "decorativos", tags: ["cruz"] },
  { id: "cross-shadowed", symbol: "✟", name: "Cruz Sombreada", category: "decorativos", tags: ["cruz"] },
  { id: "cross-maltese", symbol: "✠", name: "Cruz de Malta", category: "decorativos", tags: ["cruz"] },
  { id: "dec-wing-left", symbol: "༺", name: "Ala Decorativa Izq", category: "decorativos", tags: ["ala", "decorativo"], featured: true },
  { id: "dec-wing-right", symbol: "༻", name: "Ala Decorativa Der", category: "decorativos", tags: ["ala", "decorativo"], featured: true },
  { id: "dec-bracket-left", symbol: "【", name: "Corchete Grueso Izq", category: "decorativos", tags: ["corchete", "marco"] },
  { id: "dec-bracket-right", symbol: "】", name: "Corchete Grueso Der", category: "decorativos", tags: ["corchete", "marco"] },
  { id: "dec-corner-top-left", symbol: "◤", name: "Esquina Triángulo Izq", category: "decorativos", tags: ["esquina"] },
  { id: "dec-corner-top-right", symbol: "◥", name: "Esquina Triángulo Der", category: "decorativos", tags: ["esquina"] },
  { id: "dec-curly-left", symbol: "꧁", name: "Rizo Elegante Izq", category: "decorativos", tags: ["rizo", "elegante", "marco"], featured: true },
  { id: "dec-curly-right", symbol: "꧂", name: "Rizo Elegante Der", category: "decorativos", tags: ["rizo", "elegante", "marco"], featured: true },

  // ── Líneas ──
  { id: "line-dash-heavy", symbol: "━━━━━━", name: "Línea Gruesa", category: "lineas", tags: ["linea", "separador"], featured: true },
  { id: "line-dash-light", symbol: "──────", name: "Línea Fina", category: "lineas", tags: ["linea", "separador"] },
  { id: "line-dots", symbol: "••••••••", name: "Línea de Puntos", category: "separadores", tags: ["puntos", "separador"] },
  { id: "line-wave", symbol: "〰〰〰〰", name: "Ondas", category: "lineas", tags: ["onda", "mar"] },

  // ── Formas & Minimalistas ──
  { id: "shape-diamond-solid", symbol: "◆", name: "Diamante Relleno", category: "formas", tags: ["diamante", "forma"] },
  { id: "shape-diamond-outline", symbol: "◇", name: "Diamante Contorno", category: "formas", tags: ["diamante"] },
  { id: "shape-square-solid", symbol: "■", name: "Cuadrado Relleno", category: "formas", tags: ["cuadrado"] },
  { id: "shape-square-outline", symbol: "□", name: "Cuadrado Contorno", category: "formas", tags: ["cuadrado"] },
  { id: "shape-circle-solid", symbol: "●", name: "Círculo Relleno", category: "formas", tags: ["circulo"] },
  { id: "shape-circle-outline", symbol: "○", name: "Círculo Contorno", category: "formas", tags: ["circulo"] },
  { id: "shape-triangle-up", symbol: "▲", name: "Triángulo Arriba", category: "formas", tags: ["triangulo"] },
  { id: "shape-triangle-down", symbol: "▼", name: "Triángulo Abajo", category: "formas", tags: ["triangulo"] },

  // ── Especiales & Gaming ──
  { id: "spec-lightning", symbol: "⚡", name: "Rayo Energetico", category: "especiales", tags: ["rayo", "energia", "gaming"], featured: true },
  { id: "spec-check", symbol: "✔", name: "Check Marca", category: "especiales", tags: ["check", "verificado"], featured: true },
  { id: "spec-cross", symbol: "✖", name: "Cruz X", category: "especiales", tags: ["cruz"] },
  { id: "spec-infinity", symbol: "∞", name: "Infinito", category: "especiales", tags: ["infinito", "eterno"], featured: true },
  { id: "spec-peace", symbol: "☮", name: "Símbolo Paz", category: "especiales", tags: ["paz"] },
  { id: "spec-yin-yang", symbol: "☯", name: "Yin Yang", category: "especiales", tags: ["yinyang", "equilibrio"] },
];

export function filterSymbolsByCategory(
  symbols: InstagramSymbol[],
  category: SymbolCategory,
  favoritesSet: Set<string>,
): InstagramSymbol[] {
  if (category === "all") return symbols;
  if (category === "favorites") {
    return symbols.filter((s) => favoritesSet.has(s.id));
  }
  return symbols.filter((s) => s.category === category);
}

export function searchSymbols(
  symbols: InstagramSymbol[],
  query: string,
): InstagramSymbol[] {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return symbols;

  return symbols.filter((s) => {
    const nameMatch = s.name.toLowerCase().includes(cleanQuery);
    const symbolMatch = s.symbol.includes(cleanQuery);
    const tagMatch = s.tags.some((t) => t.toLowerCase().includes(cleanQuery));
    const catMatch = s.category.toLowerCase().includes(cleanQuery);
    return nameMatch || symbolMatch || tagMatch || catMatch;
  });
}
