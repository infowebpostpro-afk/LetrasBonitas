import { Metadata } from "next";
import Link from "next/link";
import { NicksParaJuegosTool } from "@/components/font-generator/NicksParaJuegosTool";

export const metadata: Metadata = {
  title: "Nicks para Juegos: Generador de Nicks Gamer",
  description:
    "Crea nicks para juegos cortos, pro, oscuros, aesthetic y originales. Elige la longitud, personaliza ideas y copia tu nick gamer favorito.",
  alternates: {
    canonical: "https://letrasbonits.com/nombres-para-juegos/nicks/",
  },
  openGraph: {
    title: "Nicks para Juegos | LetrasBonitas",
    description:
      "Genera nicks gamer por estilo y longitud, crea variaciones y copia la idea que más te guste.",
    url: "https://letrasbonits.com/nombres-para-juegos/nicks/",
    siteName: "LetrasBonitas",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicks para Juegos: Generador de Nicks Gamer",
    description:
      "Crea nicks para juegos cortos, pro, oscuros, aesthetic y originales. Elige la longitud, personaliza ideas y copia tu nick gamer favorito.",
  },
};

export default function NicksParaJuegosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://letrasbonits.com/nombres-para-juegos/nicks/#webpage",
        url: "https://letrasbonits.com/nombres-para-juegos/nicks/",
        name: "Nicks para Juegos",
        description:
          "Genera nicks para juegos por estilo y longitud, crea variaciones y copia tu nick gamer favorito.",
        inLanguage: "es-ES",
        isPartOf: {
          "@type": "WebSite",
          name: "LetrasBonitas",
          url: "https://letrasbonits.com/",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/nombres-para-juegos/nicks/#breadcrumb",
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
            name: "Nicks para Juegos",
            item: "https://letrasbonits.com/nombres-para-juegos/nicks/",
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
              <Link href="/" className="hover:text-rose-600 transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/nombres-para-juegos/" className="hover:text-rose-600 transition-colors">
                Nombres para Juegos
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold">Nicks para Juegos</span>
            </nav>
          </div>
        </div>

        {/* Page Hero Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold mb-3">
            <span>🎮 GENERADOR DE NICKS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Nicks para Juegos
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Crea nicks gamer cortos, pro, oscuros y originales. Elige un estilo, personaliza una idea y copia tu favorito.
          </p>
        </header>

        {/* Primary Interactive Discovery Tool */}
        <section className="py-4" aria-label="Generador de Nicks para Juegos">
          <NicksParaJuegosTool />
        </section>

        {/* Supporting Editorial Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10">
          <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed">
            {/* Intro PAS Section */}
            <div className="space-y-4 border-b border-slate-100 pb-6">
              <p className="text-base sm:text-lg text-slate-800 font-medium">
                Encontrar un nick que realmente te guste puede llevar más tiempo de lo esperado. Los nombres sencillos pueden parecer demasiado comunes, mientras que añadir números y símbolos al azar puede terminar creando algo difícil de leer o recordar.
              </p>
              <p>
                El generador de arriba te ayuda a empezar con una dirección clara. Elige el estilo y la longitud, añade una palabra si quieres personalizar los resultados y genera una pequeña selección. Cuando encuentres una idea prometedora, puedes copiarla, crear variaciones o cambiar su apariencia.
              </p>
            </div>

            {/* Section: Nicks para juegos para copiar y personalizar */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-rose-600 pl-3">
                Nicks para juegos para copiar y personalizar
              </h2>
              <p>
                Si todavía no tienes ninguna idea, puedes empezar con un nick sencillo:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Vex", "Nox", "Kael", "Rift", "Aero", "NovaX", "RazeX", "Nexo", "ZeroV", "DarkNox", "VexNova", "AeroZ"].map(
                  (nick) => (
                    <code
                      key={nick}
                      className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-lg text-slate-800 font-mono text-sm font-semibold"
                    >
                      {nick}
                    </code>
                  )
                )}
              </div>
              <p>
                No tienes que utilizar una sugerencia exactamente como aparece. Por ejemplo, <strong>Nova</strong> puede convertirse en:
              </p>
              <div className="p-4 bg-rose-50/80 rounded-2xl border border-rose-200/80 flex flex-wrap gap-2 font-mono text-sm font-bold text-rose-950">
                <span>xNova</span> • <span>NovaX</span> • <span>Nova7</span> • <span>NovaZ</span> • <span>iNova</span>
              </div>
              <p className="text-sm text-slate-600">
                La herramienta está pensada para que una buena idea sea el punto de partida, no el final obligatorio.
              </p>
            </section>

            {/* Section: Cómo crear un nick gamer */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-rose-600 pl-3">
                Cómo crear un nick gamer
              </h2>
              <p>
                Un buen proceso empieza con una identidad sencilla y después añade solo los detalles necesarios.
              </p>

              {/* H3: Empieza con una palabra base */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span>1️⃣</span>
                  <span>Empieza con una palabra base</span>
                </h3>
                <p>
                  Piensa en una palabra que te guste o que represente algo de tu estilo. Puede ser: <code>Nova</code>, <code>Lobo</code>, <code>Nox</code>, <code>Fuego</code>, <code>Rift</code>, <code>Kael</code>. También puedes utilizar una parte de tu nombre, una inicial o una palabra inventada.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200">
                  <div>Nova + X → NovaX</div>
                  <div>Nox + Vex → NoxVex</div>
                  <div>Rift + Z → RiftZ</div>
                  <div>Aero + X → AeroX</div>
                </div>
                <p className="text-xs text-slate-500">
                  No necesitas añadir muchas piezas. Una combinación compacta suele ser más fácil de reconocer que una cadena larga de palabras, números y símbolos.
                </p>
              </div>

              {/* H3: Decide la longitud */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span>2️⃣</span>
                  <span>Decide la longitud</span>
                </h3>
                <p>
                  La longitud puede cambiar mucho la sensación de un nick.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-900 block">De 3 a 5 caracteres (Compactos):</span>
                    <p className="font-mono text-xs text-slate-600">Vex, Nox, Nyx, Kael, Rift</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-900 block">De 6 a 9 caracteres (Específicos):</span>
                    <p className="font-mono text-xs text-slate-600">NovaRex, DarkNox, AeroVex, RiftNova</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  No existe una longitud perfecta para todos los juegos. Usa el filtro de longitud como una forma de encontrar el estilo visual que prefieres, no como una garantía de compatibilidad con un videojuego concreto.
                </p>
              </div>

              {/* H3: Añade un detalle propio */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span>3️⃣</span>
                  <span>Añade un detalle propio</span>
                </h3>
                <p>
                  Cuando la base ya funciona, modifica solo una parte. Por ejemplo, <strong>Vex</strong> puede transformarse en:
                </p>
                <div className="flex flex-wrap gap-2 text-sm font-mono font-bold text-slate-800">
                  <span className="px-2 py-1 bg-white border border-slate-200 rounded">xVex</span>
                  <span className="px-2 py-1 bg-white border border-slate-200 rounded">VexX</span>
                  <span className="px-2 py-1 bg-white border border-slate-200 rounded">Vex7</span>
                  <span className="px-2 py-1 bg-white border border-slate-200 rounded">iVex</span>
                  <span className="px-2 py-1 bg-white border border-slate-200 rounded">VexZ</span>
                </div>
                <p className="text-xs text-slate-500">
                  Un pequeño cambio puede ser suficiente para hacer que una idea se sienta más personal.
                </p>
              </div>
            </section>

            {/* Section: Ideas según tu estilo */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-rose-600 pl-3">
                Ideas según tu estilo
              </h2>
              <p>
                El mismo tipo de nick no funciona para todos. Por eso el generador separa las ideas por intención:
              </p>

              {/* H3: Nicks cortos */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>🎯</span>
                  <span>Nicks cortos</span>
                </h3>
                <p className="text-sm">Si quieres algo ultra compacto y limpio:</p>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs font-bold text-slate-800 pt-1">
                  {["Vex", "Nox", "Nyx", "Zyn", "Kael", "Rift", "Aero", "Lux", "Volt", "Onyx"].map((n) => (
                    <span key={n} className="px-2 py-1 bg-white border rounded">
                      {n}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 pt-1">
                  Puedes utilizar uno directamente o abrir <strong>Variar</strong> para mantener la base y explorar alternativas.
                </p>
              </div>

              {/* H3: Nicks pro */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>🏆</span>
                  <span>Nicks pro</span>
                </h3>
                <p className="text-sm">Para una apariencia más competitiva:</p>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs font-bold text-slate-800 pt-1">
                  {["xNova", "ApexZ", "PrimeX", "AeroX", "Vortex", "ReflexZ", "RiftX", "ZeroV", "RushX", "VexPro"].map(
                    (n) => (
                      <span key={n} className="px-2 py-1 bg-white border rounded">
                        {n}
                      </span>
                    )
                  )}
                </div>
                <p className="text-xs text-slate-500 pt-1">
                  Un nick competitivo no necesita afirmar que eres mejor jugador. El objetivo de esta categoría es simplemente ofrecer nombres con una apariencia corta y enérgica.
                </p>
              </div>

              {/* H3: Nicks originales */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>💡</span>
                  <span>Nicks originales</span>
                </h3>
                <p className="text-sm">Una forma sencilla de obtener ideas menos genéricas es unir conceptos que normalmente no aparecen juntos:</p>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs font-bold text-slate-800 pt-1">
                  {["NubeFeral", "PixelNox", "FuegoZen", "EcoVex", "AstroRift", "NovaFeral", "LoboPixel", "RayoNox", "NexoLunar", "AeroFuria"].map(
                    (n) => (
                      <span key={n} className="px-2 py-1 bg-white border rounded">
                        {n}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* H3: Nicks oscuros */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>🌑</span>
                  <span>Nicks oscuros</span>
                </h3>
                <p className="text-sm">Si prefieres una identidad relacionada con noche, sombras o misterio:</p>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs font-bold text-slate-800 pt-1">
                  {["Noctis", "Umbra", "Abyss", "GhostX", "VoidX", "DarkVex", "NightNox", "ShadowZ", "GrimNova", "VoidRift"].map(
                    (n) => (
                      <span key={n} className="px-2 py-1 bg-white border rounded">
                        {n}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* H3: Nicks aesthetic */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>🌸</span>
                  <span>Nicks aesthetic</span>
                </h3>
                <p className="text-sm">Para algo más suave o visual:</p>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs font-bold text-slate-800 pt-1">
                  {["Lumina", "AuroraX", "NovaMoon", "VelvetX", "Aether", "SakuraX", "MoonVex", "CloudNova", "EchoZen", "SolarX"].map(
                    (n) => (
                      <span key={n} className="px-2 py-1 bg-white border rounded">
                        {n}
                      </span>
                    )
                  )}
                </div>
              </div>
            </section>

            {/* Section: De una idea a tu nick final */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-rose-600 pl-3">
                De una idea a tu nick final
              </h2>
              <p>
                No siempre necesitas seguir generando nombres completamente nuevos. Supongamos que aparece <strong>Rift</strong>: te gusta la base, pero quieres algo diferente.
              </p>
              <p>
                Pulsa <strong>Variar</strong> y conserva la parte que funciona:
              </p>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-wrap gap-2 text-sm font-mono font-bold text-slate-900">
                <span>xRift</span> • <span>RiftX</span> • <span>Rift7</span> • <span>RiftZ</span> • <span>iRift</span> • <span>RiftNova</span>
              </div>
              <p>
                Si después te gusta <code>RiftX</code>, puedes copiarlo directamente o abrir el personalizador. Este proceso evita perder una buena idea cada vez que pulsas el botón para generar otra tanda.
              </p>
            </section>

            {/* Section: Qué hacer si tu nick ya está ocupado */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-rose-600 pl-3">
                Qué hacer si tu nick ya está ocupado
              </h2>
              <p>
                Que otra persona ya utilice una combinación no significa que tengas que abandonar la idea. Empieza con cambios pequeños:
              </p>
              <p>
                Si quieres <code>Nova</code>, prueba: <code>xNova</code>, <code>NovaX</code>, <code>Nova7</code> o <code>NovaZ</code>. También puedes añadir una segunda palabra corta: <code>NovaRift</code>, <code>NovaVex</code>, <code>NovaNox</code>.
              </p>
              <p>
                Evita añadir una larga secuencia aleatoria de números únicamente para conseguir una variante. Si modificas demasiadas partes, el resultado puede dejar de parecerse al nick que querías originalmente.
              </p>
              <p className="text-sm text-slate-500">
                La herramienta genera ideas. No consulta las cuentas o servidores de cada videojuego, por lo que la disponibilidad final debe comprobarse en el servicio donde quieras utilizar el nombre.
              </p>
            </section>

            {/* Section: Nick limpio o decorado */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-rose-600 pl-3">
                Nick limpio o decorado
              </h2>
              <p>
                Crear el nick y decorar el nick son dos tareas diferentes.
              </p>
              <p>
                Por ejemplo, <code>NovaX</code> es el nick base. Después puedes probar otras presentaciones:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-sm font-mono font-bold">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 block font-sans">Limpio</span>
                  NovaX
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 block font-sans">Small Caps</span>
                  ɴᴏᴠᴀx
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 block font-sans">Gótico</span>
                  𝕹𝖔𝖛𝖆𝖃
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 block font-sans">Enmarcado</span>
                  『NovaX』
                </div>
              </div>
              <p>
                El nombre sigue siendo reconocible como NovaX, pero cambia su presentación visual. Por eso es mejor elegir primero una buena base. Si NovaX no te gusta en texto normal, añadir símbolos probablemente no resolverá el problema principal.
              </p>
              <p>
                Cuando ya tengas una base que te convenza, puedes utilizar nuestro{" "}
                <Link
                  href="/conversor-de-letras/"
                  className="font-semibold text-rose-600 hover:text-rose-700 underline underline-offset-2"
                >
                  conversor de letras
                </Link>{" "}
                para cambiar las letras de tu nick con cientos de alfabetos diferentes.
              </p>
            </section>

            {/* Section: Por qué algunos caracteres pueden verse diferentes */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-rose-600 pl-3">
                Por qué algunos caracteres pueden verse diferentes
              </h2>
              <p>
                Muchas letras decorativas y símbolos que se pueden copiar y pegar utilizan caracteres Unicode. Que un carácter exista en Unicode no significa que todas las aplicaciones, fuentes o sistemas lo representen exactamente de la misma manera. Si falta soporte para un carácter, puede aparecer un símbolo de sustitución o un cuadro (□).
              </p>
              <p>
                Por eso conviene conservar siempre una versión sencilla:
              </p>

              <div className="bg-slate-900 text-white p-5 rounded-2xl font-mono text-center space-y-2 border border-slate-800">
                <div className="text-slate-400 text-xs">Versión muy decorada:</div>
                <div className="text-base text-rose-300 font-bold">『𝕹𝖔𝖛𝖆𝖃』</div>
                <div className="text-slate-500 text-xs">↓ quitar marcos</div>
                <div className="text-slate-400 text-xs">Versión gótica:</div>
                <div className="text-base text-amber-300 font-bold">𝕹𝖔𝖛𝖆𝖃</div>
                <div className="text-slate-500 text-xs">↓ cambiar a small caps</div>
                <div className="text-slate-400 text-xs">Versión small caps:</div>
                <div className="text-base text-teal-300 font-bold">ɴᴏᴠᴀx</div>
                <div className="text-slate-500 text-xs">↓ texto normal 100% compatible</div>
                <div className="text-lg text-emerald-300 font-black">NovaX</div>
              </div>

              <p>
                Si una versión decorada no funciona donde quieres utilizarla, vuelve a una variante más simple.
              </p>
            </section>

            {/* Section: Preguntas frecuentes sobre nicks para juegos */}
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-l-4 border-rose-600 pl-3">
                Preguntas frecuentes sobre nicks para juegos
              </h2>

              <div className="space-y-3.5">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    ¿Qué es un nick para juegos?
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Un nick es el nombre o identificador que utilizas para representarte dentro de un juego o comunidad. Dependiendo del servicio, puede corresponder a un nombre visible, un nombre de usuario u otro tipo de identificador.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    ¿Cómo puedo crear un nick original?
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Empieza con una palabra que te guste y modifica solo una parte. Puedes añadir una letra, combinarla con otra palabra corta o probar una variación relacionada. El generador también permite partir de una palabra propia.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    ¿Es mejor un nick corto?
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Depende de lo que busques. Un nick corto ocupa menos espacio visual y puede ser fácil de reconocer. Uno algo más largo permite expresar una idea más específica. También debes respetar las reglas del juego o servicio donde quieras utilizarlo.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    ¿Puedo usar mi nombre para crear un nick?
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Sí. Puedes introducir tu nombre, inicial o una palabra relacionada contigo como base y generar combinaciones alrededor de ella.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    ¿Los nicks generados están disponibles?
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    No necesariamente. LetrasBonitas genera ideas, pero no consulta en tiempo real las cuentas de cada juego. Comprueba la disponibilidad directamente en el servicio donde quieras utilizar el nick.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    ¿Puedo añadir letras bonitas a mi nick?
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Sí. Primero crea o selecciona el nick base. Después puedes probar versiones con diferentes caracteres y decoraciones mediante las herramientas de estilos de LetrasBonitas.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    ¿Por qué una letra especial no aparece en mi juego?
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Las aplicaciones y fuentes no tienen el mismo soporte para todos los caracteres. Si una versión no aparece correctamente, prueba una transformación más sencilla o utiliza el nick en texto normal.
                  </p>
                </div>
              </div>
            </section>

            {/* Concluding Box: Crea un nick que puedas reconocer como tuyo */}
            <section className="bg-rose-50/70 p-6 sm:p-8 rounded-2xl border border-rose-200 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-rose-950">
                Crea un nick que puedas reconocer como tuyo
              </h2>
              <p className="text-sm sm:text-base text-rose-900">
                No necesitas encontrar una combinación perfecta en el primer intento. Empieza con una palabra o estilo, limita la longitud y compara una pequeña selección de resultados.
              </p>
              <p className="text-sm sm:text-base text-rose-900">
                Cuando una idea vaya en la dirección correcta, utiliza <strong>Variar</strong> en lugar de descartarla. Después de decidir el nick base, prueba las decoraciones que quieras y conserva también una versión sencilla para tener una alternativa fácil de usar.
              </p>
              <div className="pt-2">
                <a
                  href="#top"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 hover:text-rose-800 uppercase tracking-wider"
                >
                  <span>↑ Subir al Generador de Nicks</span>
                </a>
              </div>
            </section>

            {/* Related Tools Internal Links */}
            <section className="pt-4 border-t border-slate-100">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Explora más generadores de nombres y nicks
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <Link
                  href="/nombres-para-juegos/apodos/"
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-rose-300 hover:bg-rose-50/50 transition-all font-semibold text-slate-800 flex items-center justify-between"
                >
                  <span>Apodos para Juegos</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/nombres-para-juegos/"
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-rose-300 hover:bg-rose-50/50 transition-all font-semibold text-slate-800 flex items-center justify-between"
                >
                  <span>Nombres para Juegos</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/nombres-para-free-fire/"
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-rose-300 hover:bg-rose-50/50 transition-all font-semibold text-slate-800 flex items-center justify-between"
                >
                  <span>Nombres para Free Fire</span>
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
