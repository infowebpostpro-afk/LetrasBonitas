import { Metadata } from "next";
import Link from "next/link";
import { ApodosParaJuegosTool } from "@/components/font-generator/ApodosParaJuegosTool";

export const metadata: Metadata = {
  title: "Apodos para Juegos: Generador de Nicks Gamer",
  description:
    "Crea apodos para juegos por estilo. Encuentra nicks cortos, oscuros, graciosos, competitivos y de fantasía, personalízalos y copia tu favorito.",
  alternates: {
    canonical: "https://letrasbonits.com/nombres-para-juegos/apodos/",
  },
  openGraph: {
    title: "Apodos para Juegos | LetrasBonitas",
    description:
      "Encuentra un apodo gamer según tu estilo, personaliza las ideas que te gusten y copia el resultado.",
    url: "https://letrasbonits.com/nombres-para-juegos/apodos/",
    siteName: "LetrasBonitas",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apodos para Juegos: Generador de Nicks Gamer",
    description:
      "Crea apodos para juegos por estilo. Encuentra nicks cortos, oscuros, graciosos, competitivos y de fantasía, personalízalos y copia tu favorito.",
  },
};

export default function ApodosParaJuegosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://letrasbonits.com/nombres-para-juegos/apodos/#webpage",
        url: "https://letrasbonits.com/nombres-para-juegos/apodos/",
        name: "Apodos para Juegos",
        description:
          "Genera apodos para juegos por estilo, personaliza tus ideas favoritas y copia el resultado.",
        inLanguage: "es-ES",
        isPartOf: {
          "@type": "WebSite",
          name: "LetrasBonitas",
          url: "https://letrasbonits.com/",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/nombres-para-juegos/apodos/#breadcrumb",
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
          {
            "@type": "ListItem",
            position: 3,
            name: "Apodos para Juegos",
            item: "https://letrasbonits.com/nombres-para-juegos/apodos/",
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

      <main className="min-h-screen bg-slate-50/70 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="w-full bg-white border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
            <nav className="flex items-center gap-2 text-xs font-medium text-slate-500" aria-label="Migas de pan">
              <Link href="/" className="hover:text-purple-600 transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/nombres-para-juegos/" className="hover:text-purple-600 transition-colors">
                Nombres para Juegos
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold">Apodos para Juegos</span>
            </nav>
          </div>
        </div>

        {/* Page Hero Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold mb-3">
            <span>🎮 APODOS GAMER</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Apodos para Juegos
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Encuentra un apodo gamer que encaje con tu estilo. Elige una categoría, genera ideas y copia o personaliza tu favorita.
          </p>
        </header>

        {/* Primary Interactive Discovery Tool */}
        <section className="py-4" aria-label="Generador de Apodos para Juegos">
          <ApodosParaJuegosTool />
        </section>

        {/* Supporting Editorial Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10">
          <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed">
            {/* Intro PAS Section */}
            <div className="space-y-4 border-b border-slate-100 pb-6">
              <p className="text-base sm:text-lg text-slate-800 font-medium">
                Elegir un apodo parece fácil hasta que empiezas a ver las mismas combinaciones una y otra vez. Quizá quieres algo corto, oscuro, gracioso o competitivo, pero una lista enorme de nombres aleatorios no siempre ayuda a encontrar uno que realmente encaje contigo.
              </p>
              <p>
                Usa el generador de arriba para elegir un estilo y descubrir ideas. Puedes añadir tu nombre, una inicial o una palabra favorita si quieres resultados más personales. Cuando encuentres uno que te guste, cópialo, edítalo o busca más opciones parecidas.
              </p>
            </div>

            {/* Section: Cómo encontrar un apodo que realmente te guste */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-purple-600 pl-3">
                Cómo encontrar un apodo que realmente te guste
              </h2>
              <p>
                Empieza por decidir qué quieres transmitir. No necesitas saber el apodo exacto; basta con tener una dirección.
              </p>
              <p>
                Por ejemplo, si quieres algo oscuro, puedes empezar con palabras relacionadas con sombras, noche, fantasmas o misterio. Si prefieres algo divertido, la combinación puede ser más inesperada y menos seria. El generador organiza las ideas por estilo para que no tengas que revisar cientos de opciones sin orden.
              </p>
              <p>
                Cuando encuentres un resultado que casi te convence, no lo descartes inmediatamente. Usa <strong>Más como este (Similar)</strong> para mantener parte de la idea y cambiar el resto.
              </p>

              <div className="bg-purple-50/80 p-5 rounded-2xl border border-purple-200/80 space-y-2">
                <div className="text-xs uppercase tracking-wider font-bold text-purple-900">
                  Ejemplo de refinamiento semántico:
                </div>
                <div className="font-mono text-sm text-purple-950 font-bold">
                  ShadowLynx &nbsp;→&nbsp; ShadowFox &nbsp;•&nbsp; NightLynx &nbsp;•&nbsp; DarkLynx &nbsp;•&nbsp; VoidLynx &nbsp;•&nbsp; ShadowX
                </div>
                <p className="text-xs text-purple-800 pt-1">
                  Así puedes refinar una buena idea en lugar de empezar desde cero cada vez.
                </p>
              </div>
            </section>

            {/* Section: Ideas de apodos según tu estilo */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-purple-600 pl-3">
                Ideas de apodos según tu estilo
              </h2>
              <p>
                No existe un único tipo de apodo gamer. El mejor punto de partida depende de la personalidad que quieras dar a tu nombre dentro del juego.
              </p>

              {/* H3: Apodos cortos */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span>🎯</span>
                  <span>Apodos cortos</span>
                </h3>
                <p>
                  Los apodos cortos son útiles cuando quieres algo fácil de leer, escribir y recordar.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Nyx", "Rexo", "Vex", "Ziro", "Kiro", "Nox", "Lynx", "Nova", "Zyn", "Raze"].map((name) => (
                    <code key={name} className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-mono text-sm font-semibold">
                      {name}
                    </code>
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  No necesitas añadir números o símbolos si el nombre ya funciona por sí solo. También puedes introducir una palabra propia en el generador y seleccionar <strong>Corto</strong> para buscar combinaciones más compactas.
                </p>
              </div>

              {/* H3: Apodos oscuros */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span>🌑</span>
                  <span>Apodos oscuros</span>
                </h3>
                <p>
                  Un apodo oscuro puede utilizar conceptos relacionados con la noche, las sombras, el vacío o el misterio.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["ShadowFox", "DarkLynx", "NightRaven", "VoidX", "GhostAce", "BlackNova", "NightFang", "SilentVoid"].map((name) => (
                    <code key={name} className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-mono text-sm font-semibold">
                      {name}
                    </code>
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  Prueba a combinar una palabra de ambiente con una palabra corta:
                  <br />
                  <span className="font-mono text-xs text-slate-800 font-bold">
                    Night + Wolf → NightWolf &nbsp;•&nbsp; Void + Ace → VoidAce &nbsp;•&nbsp; Shadow + X → ShadowX
                  </span>
                  <br />
                  La idea principal debería entenderse incluso antes de añadir letras especiales.
                </p>
              </div>

              {/* H3: Apodos graciosos */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span>🥑</span>
                  <span>Apodos graciosos</span>
                </h3>
                <p>
                  No todos los nombres gamer tienen que sonar serios. Un apodo gracioso puede funcionar mediante una combinación inesperada:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["DonPixel", "PolloPro", "PanNinja", "TioLag", "PapaCrit", "NoobConCafe", "PixelLoco", "SeñorRespawn"].map((name) => (
                    <code key={name} className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-mono text-sm font-semibold">
                      {name}
                    </code>
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  El humor suele funcionar mejor cuando el nombre sigue siendo fácil de reconocer. Si una combinación te gusta pero no es exactamente lo que buscas, edítala directamente o genera otras similares.
                </p>
              </div>

              {/* H3: Apodos competitivos */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span>⚡</span>
                  <span>Apodos competitivos</span>
                </h3>
                <p>
                  Para un estilo más competitivo puedes probar palabras cortas y fuertes:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["PrimeX", "Vortex", "ZeroAim", "RazeX", "ClutchFox", "AlphaVex", "IronAce", "RapidX"].map((name) => (
                    <code key={name} className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-mono text-sm font-semibold">
                      {name}
                    </code>
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  No hace falta llenar el nombre de símbolos para darle una apariencia fuerte. En muchos casos, una palabra clara puede transmitir mejor la idea.
                </p>
              </div>

              {/* H3: Apodos aesthetic y de fantasía */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span>🌸</span>
                  <span>Apodos aesthetic y de fantasía</span>
                </h3>
                <p>
                  Si buscas algo más suave, creativo o inspirado en mundos de fantasía, prueba conceptos relacionados con estrellas, luna, magia, naturaleza o criaturas imaginarias:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["LunaVex", "NovaFae", "StarLynx", "MoonFox", "MysticNova", "RuneWolf", "AstralX", "VelvetMoon"].map((name) => (
                    <code key={name} className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-mono text-sm font-semibold">
                      {name}
                    </code>
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  Después puedes probar una versión con letras diferentes si quieres cambiar su apariencia visual.
                </p>
              </div>
            </section>

            {/* Section: Crea tu propio apodo gamer */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-purple-600 pl-3">
                Crea tu propio apodo gamer
              </h2>
              <p>
                No tienes que elegir un nombre completo de una lista. También puedes construir uno a partir de pequeñas piezas. Una fórmula sencilla es:
              </p>
              <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 text-center font-bold text-purple-950 text-base">
                palabra de estilo + palabra de identidad
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3">Estilo</th>
                      <th className="px-4 py-3">Palabras iniciales</th>
                      <th className="px-4 py-3">Palabras para combinar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-slate-900">Oscuro</td>
                      <td className="px-4 py-2.5">Dark, Night, Void, Shadow</td>
                      <td className="px-4 py-2.5">Wolf, Lynx, Ace, X</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-slate-900">Competitivo</td>
                      <td className="px-4 py-2.5">Prime, Alpha, Rapid, Clutch</td>
                      <td className="px-4 py-2.5">Ace, Vex, Rex, X</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-slate-900">Fantasía</td>
                      <td className="px-4 py-2.5">Mystic, Rune, Astral, Moon</td>
                      <td className="px-4 py-2.5">Fox, Nova, Fae, Wolf</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-slate-900">Divertido</td>
                      <td className="px-4 py-2.5">Don, Tio, Pixel, Noob</td>
                      <td className="px-4 py-2.5">Pro, Lag, Loco, Ninja</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm font-mono font-medium text-slate-800 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>• Shadow + Fox → <strong>ShadowFox</strong></div>
                <div>• Prime + Ace → <strong>PrimeAce</strong></div>
                <div>• Astral + Wolf → <strong>AstralWolf</strong></div>
              </div>

              <p>
                También puedes introducir una palabra personal. Si escribes <code>Luna</code>, el generador puede utilizarla como punto de partida para producir diferentes combinaciones en lugar de inventar todo desde cero. La clave es usar el resultado como una idea editable, no como una decisión obligatoria.
              </p>
            </section>

            {/* Section: Primero el apodo, después las letras */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-purple-600 pl-3">
                Primero el apodo, después las letras
              </h2>
              <p>
                Elegir un apodo y cambiar su estilo visual son dos tareas diferentes.
              </p>
              <p>
                Supongamos que eliges: <strong>NightWolf</strong>. Ese es el apodo base.
              </p>
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
                <div>• Después puedes cambiar su apariencia: <code className="font-bold text-slate-900">NɪɢʜᴛWᴏʟғ</code> o <code className="font-bold text-slate-900">𝕹𝖎𝖌𝖍𝖙𝖂𝖔𝖑𝖋</code></div>
                <div>• O añadir decoración: <code className="font-bold text-slate-900">꧁NɪɢʜᴛWᴏʟғ꧂</code></div>
              </div>
              <p>
                El significado básico sigue siendo NightWolf. Lo que cambia es su presentación. Por eso conviene encontrar primero una combinación que te guste incluso en texto normal. Después puedes probar letras y símbolos sin perder de vista el nombre original.
              </p>
              <p>
                Si ya tienes decidido tu apodo y solamente quieres cambiar las letras, utiliza nuestro{" "}
                <Link
                  href="/conversor-de-letras/"
                  className="font-semibold text-purple-600 hover:text-purple-700 underline underline-offset-2"
                >
                  conversor de letras
                </Link>{" "}
                en lugar de generar otro nombre desde cero.
              </p>
            </section>

            {/* Section: Apodos limpios o decorados */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-purple-600 pl-3">
                Apodos limpios o decorados
              </h2>
              <p>
                Más decoración no significa automáticamente un mejor apodo. Compara estas versiones:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3">Tipo</th>
                      <th className="px-4 py-3">Ejemplo</th>
                      <th className="px-4 py-3">Características</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-slate-900">Limpio</td>
                      <td className="px-4 py-2.5 font-mono font-bold text-slate-900">ShadowFox</td>
                      <td className="px-4 py-2.5 text-xs text-slate-600">Fácil de reconocer y escribir. Máxima legibilidad.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-slate-900">Letras diferentes</td>
                      <td className="px-4 py-2.5 font-mono font-bold text-slate-900">SʜᴀᴅᴏᴡFᴏx</td>
                      <td className="px-4 py-2.5 text-xs text-slate-600">Transformación ligera sin añadir demasiados elementos.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-slate-900">Estilo gótico</td>
                      <td className="px-4 py-2.5 font-mono font-bold text-slate-900">𝕾𝖍𝖆𝖉𝖔𝖜𝕱𝖔𝖝</td>
                      <td className="px-4 py-2.5 text-xs text-slate-600">Estética medieval con personalidad marcada.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-slate-900">Decorado</td>
                      <td className="px-4 py-2.5 font-mono font-bold text-slate-900">꧁SʜᴀᴅᴏᴡFᴏx꧂</td>
                      <td className="px-4 py-2.5 text-xs text-slate-600">Destaca visualmente en la sala, pero usa caracteres especiales.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                No existe una opción correcta para todos los casos. Elige según el lugar donde quieras utilizar el apodo y comprueba siempre el resultado después de pegarlo. Si buscas símbolos específicos para añadir manualmente, echa un vistazo a nuestra colección de{" "}
                <Link
                  href="/nombres-para-free-fire/simbolos/"
                  className="font-semibold text-purple-600 hover:text-purple-700 underline underline-offset-2"
                >
                  símbolos para Free Fire y juegos
                </Link>
                .
              </p>
            </section>

            {/* Section: Qué hacer si una letra o símbolo no se ve bien */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-purple-600 pl-3">
                Qué hacer si una letra o símbolo no se ve bien
              </h2>
              <p>
                Las letras estilizadas que puedes copiar y pegar suelen utilizar caracteres Unicode. Su apariencia depende de los caracteres utilizados y del soporte disponible en el dispositivo, la fuente y la aplicación donde se muestran.
              </p>
              <p>
                Por eso una combinación que se ve correctamente en el navegador puede verse de otra forma en otro entorno. Si aparece un cuadro, un carácter extraño o una parte del nombre no se representa como esperabas, prueba una versión más sencilla:
              </p>

              <div className="bg-slate-900 text-white p-5 rounded-2xl font-mono text-center space-y-2 border border-slate-800">
                <div className="text-slate-400 text-xs">Versión muy decorada:</div>
                <div className="text-base text-purple-300 font-bold">꧁𝕹𝖎𝖌𝖍𝖙𝖂𝖔𝖑𝖋꧂</div>
                <div className="text-slate-500 text-xs">↓ quitar símbolos externos</div>
                <div className="text-slate-400 text-xs">Versión gótica:</div>
                <div className="text-base text-indigo-300 font-bold">𝕹𝖎𝖌𝖍𝖙𝖂𝖔𝖑𝖋</div>
                <div className="text-slate-500 text-xs">↓ cambiar a mayúsculas pequeñas</div>
                <div className="text-slate-400 text-xs">Versión small caps:</div>
                <div className="text-base text-teal-300 font-bold">NɪɢʜᴛWᴏʟғ</div>
                <div className="text-slate-500 text-xs">↓ texto normal garantizado</div>
                <div className="text-slate-400 text-xs">Versión limpia:</div>
                <div className="text-lg text-emerald-300 font-black">NightWolf</div>
              </div>

              <p>
                Conservar el apodo base te da una alternativa limpia cuando una decoración concreta no funciona en el lugar donde quieres utilizarla.
              </p>
            </section>

            {/* Section: Preguntas sobre apodos para juegos (FAQ) */}
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-purple-600 pl-3">
                Preguntas sobre apodos para juegos
              </h2>

              <div className="space-y-3.5">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    ¿Cómo puedo crear un buen apodo para un juego?
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Empieza por elegir un estilo, por ejemplo oscuro, gracioso, competitivo, corto o de fantasía. Genera varias ideas y conserva las partes que te gusten. Después puedes editar la combinación y, si quieres, cambiar sus letras o añadir símbolos.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    ¿Puedo crear un apodo usando mi propio nombre?
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Sí. Introduce tu nombre, inicial o palabra favorita en el campo opcional del generador. La herramienta puede utilizar esa palabra como base para crear nuevas combinaciones.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    ¿Un apodo gamer necesita símbolos?
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    No. Un nombre como <strong>ShadowFox</strong> o <strong>PrimeAce</strong> puede funcionar sin decoración. Los símbolos son una opción visual adicional, no una parte obligatoria de un apodo gamer.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    ¿Por qué algunas letras especiales aparecen como cuadros?
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Puede ocurrir cuando el sistema, la aplicación o las fuentes disponibles no tienen soporte adecuado para determinados caracteres Unicode. Si sucede, prueba una transformación más sencilla o utiliza la versión normal del apodo.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    ¿Cómo sé si un apodo está disponible en mi juego?
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    La disponibilidad de un nombre depende del propio servicio o juego y puede cambiar cuando otro usuario lo registra. Este generador crea ideas y permite copiarlas, pero no debe presentarse como un comprobador de disponibilidad en servidores externos.
                  </p>
                </div>
              </div>
            </section>

            {/* Concluding Box: Encuentra una idea y hazla tuya */}
            <section className="bg-purple-50/70 p-6 sm:p-8 rounded-2xl border border-purple-200 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-purple-950">
                Encuentra una idea y hazla tuya
              </h2>
              <p className="text-sm sm:text-base text-purple-900">
                No necesitas revisar cientos de nombres hasta encontrar uno perfecto por casualidad. Empieza con un estilo, genera una pequeña selección y utiliza <strong>Más como este</strong> cuando encuentres una idea que vaya en la dirección correcta.
              </p>
              <p className="text-sm sm:text-base text-purple-900">
                Cuando el apodo base ya te guste, decide si realmente necesita decoración. Guarda siempre una versión sencilla y comprueba el resultado en el juego o plataforma donde quieras utilizarlo antes de elegir la versión definitiva.
              </p>
              <div className="pt-2">
                <a
                  href="#top"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-800 uppercase tracking-wider"
                >
                  <span>↑ Subir al Generador de Apodos</span>
                </a>
              </div>
            </section>

            {/* Related Tools Internal Links */}
            <section className="pt-4 border-t border-slate-100">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Otras herramientas de nombres y letras
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <Link
                  href="/nombres-para-juegos/"
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all font-semibold text-slate-800 flex items-center justify-between"
                >
                  <span>Nombres para Juegos</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/nombres-para-free-fire/"
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all font-semibold text-slate-800 flex items-center justify-between"
                >
                  <span>Nombres para Free Fire</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/conversor-de-letras/"
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all font-semibold text-slate-800 flex items-center justify-between"
                >
                  <span>Conversor de Letras</span>
                  <span>→</span>
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
