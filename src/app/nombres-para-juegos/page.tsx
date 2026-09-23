import { Metadata } from "next";
import Link from "next/link";
import { GamingNameGenerator } from "@/components/font-generator/GamingNameGenerator";

export const metadata: Metadata = {
  title: "Nombres para Juegos: Generador de Nicks Gamer | LetrasBonitas",
  description:
    "Crea nombres para juegos por estilo, personaliza tu nick y copia tu favorito. Encuentra ideas cortas, épicas, oscuras, aesthetic y más.",
  alternates: {
    canonical: "https://letrasbonits.com/nombres-para-juegos/",
  },
  openGraph: {
    title: "Nombres para Juegos y Nicks Gamer | LetrasBonitas",
    description:
      "Genera ideas de nombres gamer, elige un estilo, personaliza tu nick y copia tu favorito en segundos.",
    url: "https://letrasbonits.com/nombres-para-juegos/",
    siteName: "LetrasBonitas",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nombres para Juegos: Generador de Nicks Gamer",
    description:
      "Genera ideas de nombres gamer, elige un estilo, personaliza tu nick y copia tu favorito en segundos.",
  },
};

export default function NombresParaJuegosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://letrasbonits.com/nombres-para-juegos/#webpage",
        url: "https://letrasbonits.com/nombres-para-juegos/",
        name: "Nombres para Juegos: Generador de Nicks Gamer",
        description:
          "Crea nombres para juegos por estilo, personaliza tu nick y copia tu favorito. Encuentra ideas cortas, épicas, oscuras, aesthetic y más.",
        inLanguage: "es-ES",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/nombres-para-juegos/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://letrasbonits.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Nombres para Juegos",
            item: "https://letrasbonits.com/nombres-para-juegos/",
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": "https://letrasbonits.com/nombres-para-juegos/#webapp",
        name: "Generador de Nombres para Juegos",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        url: "https://letrasbonits.com/nombres-para-juegos/",
        description:
          "Herramienta gamer para generar ideas de nicks por estilo, personalizarlos con letras y símbolos, y copiarlos directamente.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://letrasbonits.com/nombres-para-juegos/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo crear un nombre para juegos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Empieza con una palabra que te guste o genera ideas desde cero. Elige un estilo, combina palabras cortas y compara varias opciones antes de copiar una. Intenta que el resultado sea reconocible, fácil de leer y apropiado para el juego donde quieres utilizarlo.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué nombre me puedo poner en un juego?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Puedes utilizar un apodo inventado, una palabra corta, una combinación de dos conceptos o una variación de tu nombre. Por ejemplo, NoxLobo, NovaRush, Lumi, Vex7 o RuneWolf. Comprueba siempre las reglas del juego antes de elegir la versión definitiva.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo hacer un nombre gamer original?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "En lugar de copiar un nick popular exactamente, combina dos elementos que tengan sentido para ti. Puedes mezclar un animal, color, concepto, palabra de fantasía, acción o número corto. El generador puede ayudarte a explorar combinaciones sin tener que inventarlas una por una.",
            },
          },
          {
            "@type": "Question",
            name: "¿Es mejor un nombre corto?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No siempre, pero los nombres cortos suelen ser más fáciles de leer y recordar. También dejan espacio para añadir otros elementos cuando una plataforma establece un límite de longitud.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo utilizar letras bonitas en mi nombre de juego?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depende del juego y del campo donde quieras utilizar el texto. Algunos servicios aceptan una gama amplia de caracteres y otros aplican reglas más estrictas. Prueba primero el nombre dentro del campo correspondiente y conserva una versión sencilla como alternativa.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué algunos nombres con símbolos no funcionan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Los videojuegos y servicios pueden restringir qué caracteres aceptan. Además, algunos estilos que parecen fuentes diferentes son en realidad caracteres Unicode distintos. Que tu navegador pueda mostrarlos no garantiza que otro servicio los permita.",
            },
          },
          {
            "@type": "Question",
            name: "¿Los nombres generados están disponibles?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El generador crea ideas, pero no consulta las bases de datos de cuentas de cada videojuego. Por tanto, un resultado puede estar ocupado. Si ocurre, genera otra variante o modifica una parte del nombre.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50/60 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="w-full bg-white border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
            <nav className="flex items-center gap-2 text-xs font-medium text-slate-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-teal-600 transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold">Nombres para Juegos</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nombres para Juegos: Generador de Nicks Gamer
          </h1>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Encuentra ideas para tu nick, elige un estilo y copia tu favorito. También puedes escribir una palabra para crear nombres inspirados en ella.
          </p>
        </header>

        {/* Interactive Tool Component */}
        <section className="py-2" aria-label="Generador de Nombres Gamer">
          <GamingNameGenerator />
        </section>

        {/* Supporting SEO & Educational Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 space-y-10">
          <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-8 text-slate-700 leading-relaxed text-base">
            {/* Introduction */}
            <div className="space-y-4">
              <p>
                Encontrar un buen nombre para un juego parece fácil hasta que intentas elegir uno. Muchos nombres ya están ocupados, otros son demasiado largos y algunos se ven bien en una lista, pero no encajan con el estilo que quieres mostrar dentro del juego.
              </p>
              <p>
                Con el generador de <Link href="/" className="text-teal-600 hover:text-teal-700 font-semibold underline underline-offset-2">LetrasBonitas</Link> puedes partir de cero o escribir una palabra que te guste. Elige un estilo, genera diferentes ideas y copia la que mejor represente tu identidad como jugador.
              </p>
            </div>

            {/* Section: Cómo usar */}
            <section className="space-y-5 pt-4 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Cómo usar el generador de nombres para juegos
              </h2>
              <p>
                El generador está pensado para dos situaciones. Puedes pedir ideas completamente nuevas o utilizar tu propio nombre, apodo o palabra como punto de partida.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <span className="w-8 h-8 rounded-xl bg-teal-600 text-white font-bold text-sm flex items-center justify-center">1</span>
                  <h3 className="text-lg font-bold text-slate-900">Elige un estilo</h3>
                  <p className="text-sm text-slate-600">
                    Empieza seleccionando el tipo de nombre que buscas: competitivo, oscuro, corto, fantasía, aesthetic, épico o divertido. La categoría filtra el vocabulario de forma inteligente.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <span className="w-8 h-8 rounded-xl bg-teal-600 text-white font-bold text-sm flex items-center justify-center">2</span>
                  <h3 className="text-lg font-bold text-slate-900">Añade una palabra</h3>
                  <p className="text-sm text-slate-600">
                    Este paso es opcional. Puedes escribir ideas como <code>Lobo</code>, <code>Luna</code> o <code>Alex</code>. Si lo dejas vacío, el generador creará nombres desde cero.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <span className="w-8 h-8 rounded-xl bg-teal-600 text-white font-bold text-sm flex items-center justify-center">3</span>
                  <h3 className="text-lg font-bold text-slate-900">Genera, compara y copia</h3>
                  <p className="text-sm text-slate-600">
                    Pulsa “Generar nombres” para recibir una selección. Compara cómo suena y cómo se lee. Cuando encuentres tu favorito, cópialo con un solo toque o pulsa “Personalizar”.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Ideas por estilo */}
            <section className="space-y-6 pt-6 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Ideas de nombres para juegos por estilo
              </h2>
              <p>
                No existe un único tipo de nick gamer. Un nombre que funciona para un juego competitivo puede sentirse fuera de lugar en un RPG de fantasía. Por eso es más útil elegir primero una dirección y después generar variaciones.
              </p>

              {/* Sub-estilos en tarjetas limpias */}
              <div className="space-y-6">
                {/* Cortos */}
                <div className="bg-slate-50/70 p-5 sm:p-6 rounded-2xl border border-slate-200/80 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span>🎯</span> Nombres cortos
                  </h3>
                  <p className="text-sm text-slate-600">
                    Los nombres cortos son fáciles de leer y dejan más espacio si después quieres añadir números, iniciales u otros elementos.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-sm">
                    {["Nyx", "Vex", "Kiro", "Nox", "Zyn", "Rux", "Nova", "Kael", "Raze", "Ziro"].map((name) => (
                      <span key={name} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-semibold shadow-xs">
                        {name}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 pt-1">
                    Un nombre corto también puede servir como base. Por ejemplo, Nox puede convertirse en <code>Nox7</code>, <code>NoxVex</code> o una versión decorada si la plataforma donde juegas admite esos caracteres.
                  </p>
                </div>

                {/* Competitivos */}
                <div className="bg-slate-50/70 p-5 sm:p-6 rounded-2xl border border-slate-200/80 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span>⚡</span> Nombres competitivos
                  </h3>
                  <p className="text-sm text-slate-600">
                    Si quieres una identidad más enfocada en partidas competitivas, busca palabras breves, fuertes y fáciles de reconocer.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-sm">
                    {["ClutchX", "VexRank", "RushZero", "ApexNox", "RazeX", "RankVex", "Blitz7", "ZeroRush", "KrypX", "NovaClutch"].map((name) => (
                      <span key={name} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-semibold shadow-xs">
                        {name}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 pt-1">
                    No necesitas llenar el nombre de símbolos para que parezca gamer. Un nick limpio puede ser más fácil de leer en una partida, una lista de amigos o un marcador.
                  </p>
                </div>

                {/* Oscuros */}
                <div className="bg-slate-50/70 p-5 sm:p-6 rounded-2xl border border-slate-200/80 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span>🌑</span> Nombres oscuros
                  </h3>
                  <p className="text-sm text-slate-600">
                    Este estilo combina conceptos relacionados con sombras, noche, vacío, misterio y criaturas.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-sm">
                    {["NoxLobo", "VoidRaven", "SombraX", "DarkNova", "CuervoNox", "EclipseV", "NocheZero", "GhostVex", "LoboVoid", "SombraNox"].map((name) => (
                      <span key={name} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-semibold shadow-xs">
                        {name}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 pt-1">
                    Por ejemplo, si escribes <code>Luna</code>, una categoría oscura puede inspirar combinaciones como <code>LunaNox</code>, <code>DarkLuna</code> o <code>LunaVoid</code>.
                  </p>
                </div>

                {/* Fantasía */}
                <div className="bg-slate-50/70 p-5 sm:p-6 rounded-2xl border border-slate-200/80 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span>✨</span> Nombres de fantasía
                  </h3>
                  <p className="text-sm text-slate-600">
                    Los juegos de rol, aventura y mundos fantásticos permiten nombres con una sensación diferente.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-sm">
                    {["KaelRune", "DracoVex", "AstralNox", "RuneWolf", "AetherX", "NyraMoon", "ArcanoV", "NovaRune", "KaelDraco", "LunarMage"].map((name) => (
                      <span key={name} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-semibold shadow-xs">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Aesthetic */}
                <div className="bg-slate-50/70 p-5 sm:p-6 rounded-2xl border border-slate-200/80 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span>🌸</span> Nombres aesthetic
                  </h3>
                  <p className="text-sm text-slate-600">
                    Un nombre aesthetic suele buscar una apariencia más suave, minimalista o visual.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-sm">
                    {["LunaBloom", "SoftNova", "AuraSky", "MoonVibe", "NubeLila", "NovaRose", "Lumi", "Auri", "NilaMoon", "StarLuna"].map((name) => (
                      <span key={name} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-semibold shadow-xs">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divertidos */}
                <div className="bg-slate-50/70 p-5 sm:p-6 rounded-2xl border border-slate-200/80 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span>🥑</span> Nombres divertidos
                  </h3>
                  <p className="text-sm text-slate-600">
                    No todos los nicks tienen que sonar peligrosos. Un nombre inesperado puede ser mucho más fácil de recordar.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-sm">
                    {["PatoPro", "TacoRush", "MancoVIP", "DonPixel", "PanConLag", "PatoClutch", "NoEraYo", "CasiPro", "ModoPapa", "PixelTaco"].map((name) => (
                      <span key={name} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-semibold shadow-xs">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Cómo elegir un buen nombre */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Cómo elegir un buen nombre para un juego
              </h2>
              <p>
                Un buen nombre gamer no se define por la cantidad de símbolos que contiene. Lo importante es que encaje contigo y con el lugar donde quieres utilizarlo.
              </p>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-base">Checklist antes de elegir:</h3>
                <ul className="space-y-2.5 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-600 font-bold">✓</span>
                    <span><strong>Que sea reconocible:</strong> Si alguien juega contigo hoy, debería poder reconocer tu nick mañana.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-600 font-bold">✓</span>
                    <span><strong>Que se pueda leer:</strong> Una combinación muy decorada puede llamar la atención, pero también puede hacer que las letras sean difíciles de distinguir.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-600 font-bold">✓</span>
                    <span><strong>Que tenga una longitud razonable:</strong> Cada plataforma puede establecer sus propias reglas para los nombres.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-600 font-bold">✓</span>
                    <span><strong>Que funcione con tu estilo:</strong> Un jugador competitivo puede preferir algo corto. Un personaje de fantasía puede admitir un nombre más elaborado.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-600 font-bold">✓</span>
                    <span><strong>Que no dependa de decoración para tener personalidad:</strong> Primero busca una buena idea. Después decide si realmente necesita símbolos o letras diferentes.</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-slate-500">
                También evita incluir información privada que no quieras mostrar públicamente. Un nick no necesita contener tu nombre completo, fecha de nacimiento, teléfono u otros datos personales.
              </p>
            </section>

            {/* Section: Normal o Decorado */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Nombre normal o nombre decorado: ¿cuál elegir?
              </h2>
              <p>
                Un nombre normal utiliza letras, números u otros caracteres sencillos. Un nombre decorado puede incorporar símbolos o caracteres Unicode con formas visuales diferentes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <span className="text-xs text-slate-500 block mb-1 uppercase font-semibold">Normal</span>
                  <code className="text-base font-bold text-slate-900 font-sans">LoboNox</code>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <span className="text-xs text-slate-500 block mb-1 uppercase font-semibold">Decorado</span>
                  <code className="text-base font-bold text-slate-900 font-sans">『LoboNox』</code>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <span className="text-xs text-slate-500 block mb-1 uppercase font-semibold">Estilizado</span>
                  <code className="text-base font-bold text-slate-900 font-sans">𝕷𝖔𝖇𝖔𝕹𝖔𝖝</code>
                </div>
              </div>

              <p>
                No son necesariamente equivalentes para una plataforma. Unicode permite representar una enorme variedad de caracteres, pero que un carácter exista en Unicode no significa que cualquier videojuego tenga que aceptarlo en un nombre de usuario. Cada servicio puede aplicar sus propias reglas.
              </p>
              <p>
                Si buscas transformar nombres con cientos de estilos de tipografías y alfabetos especiales, puedes visitar el conversor principal de <Link href="/" className="text-teal-600 hover:text-teal-700 font-semibold underline underline-offset-2">letras bonitas</Link>.
              </p>
            </section>

            {/* Section: Antes de copiarlo */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Antes de copiarlo, comprueba las reglas de tu juego
              </h2>
              <p>
                No existe una regla universal para los nombres de todos los videojuegos. Un juego puede limitar la longitud a 12 o 16 caracteres. Otro puede rechazar determinados símbolos. Incluso dentro de un mismo ecosistema puede haber diferencias entre un nombre de cuenta, un nombre visible y un gamertag.
              </p>
              <p>
                Por eso en LetrasBonitas preferimos darte el conteo exacto de caracteres del resultado en lugar de hacer falsas promesas de compatibilidad universal.
              </p>

              <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2 text-sm text-amber-950">
                <p className="font-bold flex items-center gap-1.5 text-amber-900">
                  <span>⚠️</span> Si un nombre decorado es rechazado por tu juego, prueba en este orden:
                </p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Quita los símbolos exteriores.</li>
                  <li>Prueba la versión sin decoración (texto limpio).</li>
                  <li>Reduce la longitud eliminando sufijos.</li>
                  <li>Elimina caracteres especiales poco comunes.</li>
                  <li>Comprueba las reglas oficiales de la plataforma o videojuego.</li>
                </ol>
              </div>
            </section>

            {/* Section: Si está ocupado */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                ¿Qué hacer si tu nombre ya está ocupado?
              </h2>
              <p>
                Encontrar una buena idea no garantiza que esté disponible. Los nombres populares suelen tener muchas variaciones en uso. En lugar de añadir una larga serie de números aleatorios que arruinen la estética, intenta cambiar una sola parte:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-center">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono font-semibold">LoboNox</div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono font-semibold">LoboVex</div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono font-semibold">LoboX</div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono font-semibold">NoxLobo</div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono font-semibold">LoboNova</div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono font-semibold">Lobo7</div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono font-semibold">LoboZero</div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono font-semibold">LoboRush</div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-sm space-y-2 mt-4">
                <p className="font-semibold text-slate-900">Fórmulas prácticas de combinación:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div>• <strong>Animal + Concepto:</strong> LoboNox, RavenVoid</div>
                  <div>• <strong>Concepto + Acción:</strong> NovaRush, ClutchAim</div>
                  <div>• <strong>Palabra + Letra:</strong> SombraX, KaelZ</div>
                  <div>• <strong>Palabra + Número corto:</strong> Vex7, Nox99</div>
                </div>
              </div>
            </section>

            {/* Section: Distintos tipos de juegos & Contextual Link */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Nombres para distintos tipos de juegos
              </h2>
              <p>
                El género del juego también puede ayudarte a encontrar ideas:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Shooters y FPS:</strong> Nombres cortos, competitivos, oscuros o relacionados con velocidad y precisión (ej. <em>ClutchX, ApexAim, RushZero</em>).</li>
                <li><strong>Juegos de rol y MMORPG:</strong> Nombres inventados, mágicos, medievales o de fantasía (ej. <em>KaelRune, DracoVex, AstralNox</em>).</li>
                <li><strong>Battle Royale:</strong> Nicks competitivos con identidad fácil de reconocer en el feed de eliminaciones.</li>
                <li><strong>Juegos casuales o sociales:</strong> Nombres divertidos, sencillos o con vibra aesthetic.</li>
              </ul>
              <div className="p-4 bg-teal-50/70 border border-teal-200/80 rounded-2xl text-sm text-teal-900">
                🎮 ¿Buscas específicamente un apodo para Free Fire? Consulta nuestra sección dedicada a{" "}
                <Link href="/nombres-para-free-fire/" className="font-bold underline text-teal-700 hover:text-teal-800">
                  Nombres para Free Fire
                </Link>
                , donde encontrarás estilos insanos, nombres para clanes y combinaciones optimizadas para ese juego.
              </div>
              <div className="p-4 bg-purple-50/70 border border-purple-200/80 rounded-2xl text-sm text-purple-900 mt-3">
                ⚡ ¿Buscas inspiración rápida y personalización por estilos? Visita nuestro generador especializado de{" "}
                <Link href="/nombres-para-juegos/apodos/" className="font-bold underline text-purple-700 hover:text-purple-800">
                  Apodos para Juegos
                </Link>
                , donde puedes filtrar por categorías (oscuros, graciosos, competitivos, etc.) y refinar combinaciones con la función de apodos similares.
              </div>
              <div className="p-4 bg-rose-50/70 border border-rose-200/80 rounded-2xl text-sm text-rose-900 mt-3">
                🎯 ¿Prefieres un gamer tag corto y compacto (3 a 5 letras)? Entra en{" "}
                <Link href="/nombres-para-juegos/nicks/" className="font-bold underline text-rose-700 hover:text-rose-800">
                  Nicks para Juegos
                </Link>
                , con filtros por longitud exacta y la herramienta Nick Lab para crear variaciones tácticas al instante.
              </div>
              <div className="p-4 bg-cyan-50/70 border border-cyan-200/80 rounded-2xl text-sm text-cyan-900 mt-3">
                🛡️ ¿Estás formando un equipo, guild o escuadra? Descubre{" "}
                <Link href="/nombres-para-juegos/nombres-para-clanes/" className="font-bold underline text-cyan-700 hover:text-cyan-800">
                  Nombres para Clanes
                </Link>
                , para crear identidades colectivas, generar 3 opciones de TAGs o siglas y guardar una lista de finalistas para votar con tu grupo.
              </div>
              <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl text-sm text-emerald-900 mt-3">
                ✨ ¿Quieres nombres gamer con una vibra atractiva y moderna? Explora{" "}
                <Link href="/nombres-para-juegos/nombres-chidos/" className="font-bold underline text-emerald-700 hover:text-emerald-800">
                  Nombres Chidos para Juegos
                </Link>
                , con filtros por estilo (competitivo, aesthetic, épico, oscuro, etc.) y la función de mantener mitades para refinar tu idea favorita.
              </div>
            </section>

            {/* Section: FAQ */}
            <section className="space-y-5 pt-6 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Preguntas frecuentes sobre nombres para juegos
              </h2>

              <div className="space-y-4">
                <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900">¿Cómo crear un nombre para juegos?</h3>
                  <p className="text-sm text-slate-600">
                    Empieza con una palabra que te guste o genera ideas desde cero. Elige un estilo, combina palabras cortas y compara varias opciones antes de copiar una. Intenta que el resultado sea reconocible, fácil de leer y apropiado para el juego donde quieres utilizarlo.
                  </p>
                </div>

                <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900">¿Qué nombre me puedo poner en un juego?</h3>
                  <p className="text-sm text-slate-600">
                    Puedes utilizar un apodo inventado, una palabra corta, una combinación de dos conceptos o una variación de tu nombre. Por ejemplo, NoxLobo, NovaRush, Lumi, Vex7 o RuneWolf. Comprueba siempre las reglas del juego antes de elegir la versión definitiva.
                  </p>
                </div>

                <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900">¿Cómo hacer un nombre gamer original?</h3>
                  <p className="text-sm text-slate-600">
                    En lugar de copiar un nick popular exactamente, combina dos elementos que tengan sentido para ti. Puedes mezclar un animal, color, concepto, palabra de fantasía, acción o número corto. El generador puede ayudarte a explorar combinaciones sin tener que inventarlas una por una.
                  </p>
                </div>

                <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900">¿Es mejor un nombre corto?</h3>
                  <p className="text-sm text-slate-600">
                    No siempre, pero los nombres cortos suelen ser más fáciles de leer y recordar. También dejan espacio para añadir otros elementos cuando una plataforma establece un límite de longitud.
                  </p>
                </div>

                <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900">¿Puedo utilizar letras bonitas en mi nombre de juego?</h3>
                  <p className="text-sm text-slate-600">
                    Depende del juego y del campo donde quieras utilizar el texto. Algunos servicios aceptan una gama amplia de caracteres y otros aplican reglas más estrictas. Prueba primero el nombre dentro del campo correspondiente y conserva una versión sencilla como alternativa.
                  </p>
                </div>

                <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900">¿Por qué algunos nombres con símbolos no funcionan?</h3>
                  <p className="text-sm text-slate-600">
                    Los videojuegos y servicios pueden restringir qué caracteres aceptan. Además, algunos estilos que parecen fuentes diferentes son en realidad caracteres Unicode distintos. Que tu navegador pueda mostrarlos no garantiza que otro servicio los permita.
                  </p>
                </div>

                <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900">¿Los nombres generados están disponibles?</h3>
                  <p className="text-sm text-slate-600">
                    El generador crea ideas, pero no consulta las bases de datos de cuentas de cada videojuego. Por tanto, un resultado puede estar ocupado. Si ocurre, genera otra variante o modifica una parte del nombre.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Conclusión */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Crea un nombre que realmente quieras usar
              </h2>
              <p>
                Una lista enorme puede darte inspiración, pero un generador es más útil cuando quieres pasar de una idea general a un nick propio. Empieza por el estilo que buscas, añade una palabra si ya tienes una idea y genera varias opciones antes de elegir.
              </p>
              <p>
                Prioriza primero un nombre que se lea bien y sea fácil de recordar. Después puedes personalizar su apariencia con letras o símbolos si el juego donde vas a utilizarlo los acepta. Así la decoración complementa tu identidad gamer en lugar de sustituirla.
              </p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
