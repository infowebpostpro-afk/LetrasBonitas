import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { NombresParaClanesTool } from '@/components/font-generator/NombresParaClanesTool';

export const metadata: Metadata = {
  title: 'Nombres para Clanes: Generador de Nombres y TAGs',
  description:
    'Crea nombres para clanes competitivos, épicos, cortos y originales. Genera una TAG, guarda tus favoritos y copia la identidad de tu equipo.',
  alternates: {
    canonical: 'https://letrasbonits.com/nombres-para-juegos/nombres-para-clanes/',
  },
  openGraph: {
    title: 'Nombres para Clanes y TAGs | LetrasBonitas',
    description:
      'Genera nombres para tu clan, crea TAGs relacionadas y encuentra una identidad que represente a todo tu equipo.',
    url: 'https://letrasbonits.com/nombres-para-juegos/nombres-para-clanes/',
    siteName: 'LetrasBonitas',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nombres para Clanes: Generador de Nombres y TAGs',
    description:
      'Crea nombres para clanes competitivos, épicos, cortos y originales con TAG personalizada.',
  },
};

export default function NombresParaClanesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://letrasbonits.com/nombres-para-juegos/nombres-para-clanes/#webpage',
        url: 'https://letrasbonits.com/nombres-para-juegos/nombres-para-clanes/',
        name: 'Nombres para Clanes',
        description:
          'Genera nombres para clanes, crea una TAG relacionada, explora estilos y copia la identidad de tu equipo.',
        isPartOf: {
          '@type': 'WebSite',
          name: 'LetrasBonitas',
          url: 'https://letrasbonits.com/',
        },
      },
      {
        '@type': 'WebApplication',
        name: 'Generador de Nombres para Clanes y TAGs',
        url: 'https://letrasbonits.com/nombres-para-juegos/nombres-para-clanes/',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: 'https://letrasbonits.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Nombres para Juegos',
            item: 'https://letrasbonits.com/nombres-para-juegos/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Nombres para Clanes',
            item: 'https://letrasbonits.com/nombres-para-juegos/nombres-para-clanes/',
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Ruta de navegación" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Inicio
              </Link>
            </li>
            <li className="text-slate-600">/</li>
            <li>
              <Link href="/nombres-para-juegos/" className="hover:text-cyan-400 transition-colors">
                Nombres para Juegos
              </Link>
            </li>
            <li className="text-slate-600">/</li>
            <li className="text-cyan-400 font-semibold" aria-current="page">
              Nombres para Clanes
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-8 sm:mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
            <span>🛡️</span>
            <span>Identidad Colectiva Gaming</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Nombres para Clanes
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Crea nombres para tu clan y genera una TAG que combine con la identidad de tu equipo. 
            Filtra por estilos, genera siglas alternativas y guarda finalistas para votar con tus compañeros.
          </p>
        </header>

        {/* Interactive Tool Component */}
        <NombresParaClanesTool />

        {/* Contextual Silo Navigation Banner */}
        <section className="my-10 p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>🎮</span>
              <span>¿Buscas una identidad individual para tu jugador?</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Un clan representa al equipo completo. Si lo que necesitas es tu propio gamertag o apodo:
            </p>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <Link
              href="/nombres-para-juegos/nicks/"
              className="w-full sm:w-auto text-center text-xs px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white font-semibold border border-slate-700 transition-colors"
            >
              Nicks para Juegos
            </Link>
            <Link
              href="/nombres-para-juegos/apodos/"
              className="w-full sm:w-auto text-center text-xs px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white font-semibold border border-slate-700 transition-colors"
            >
              Apodos para Juegos
            </Link>
          </div>
        </section>

        {/* Main Article Content */}
        <article className="prose prose-invert prose-cyan max-w-none mt-12 space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <div className="border-b border-slate-800/80 pb-8">
            <p>
              Encontrar un nombre para un clan puede parecer sencillo hasta que todo el grupo empieza a proponer ideas. Una persona quiere algo competitivo, otra prefiere un nombre épico y alguien más quiere una opción corta que pueda recordarse fácilmente.
            </p>
            <p className="mt-4">
              El generador de arriba te ayuda a reducir ese problema. Puedes elegir un estilo, añadir una palabra relacionada con vuestro grupo y obtener nombres acompañados de posibles TAG. Cuando encuentres una buena dirección, puedes crear variaciones, guardar finalistas y copiar la combinación que prefieras.
            </p>
          </div>

          {/* Section 2: Ideas to copy and customize */}
          <div className="border-b border-slate-800/80 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
              Nombres para clanes para copiar y personalizar
            </h2>
            <p className="mb-4">
              Si todavía no tienes una idea concreta, empieza con nombres sencillos que puedas modificar:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
              {[
                { name: 'Legión Nova', tag: 'LNV' },
                { name: 'Código Alfa', tag: 'CDA' },
                { name: 'Lobos de Neón', tag: 'LDN' },
                { name: 'Orden Zenith', tag: 'OZN' },
                { name: 'Furia Polar', tag: 'FPL' },
                { name: 'Centinelas Zero', tag: 'CZR' },
                { name: 'Eclipse Crew', tag: 'ECC' },
                { name: 'Titanes X', tag: 'TTX' },
                { name: 'Nexo Salvaje', tag: 'NXS' },
                { name: 'Guardianes Nova', tag: 'GNV' },
                { name: 'Vortex Elite', tag: 'VTX' },
                { name: 'Dominio Lunar', tag: 'DML' },
              ].map(item => (
                <div
                  key={item.name}
                  className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between"
                >
                  <span className="font-semibold text-white">{item.name}</span>
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/70 border border-cyan-800/50 px-2 py-0.5 rounded">
                    [{item.tag}]
                  </span>
                </div>
              ))}
            </div>

            <p>
              No es necesario copiar una propuesta exactamente como aparece. Por ejemplo, <strong>Legión Nova</strong> puede convertirse en <em>Legión Nox</em>, <em>Legión Vanta</em>, <em>Legión Eclipse</em>, <em>Orden Nova</em>, <em>Guardianes Nova</em> o <em>Nova Legion</em>. Lo importante es encontrar primero una dirección que represente al grupo.
            </p>
          </div>

          {/* Section 3: How to create a good clan name */}
          <div className="border-b border-slate-800/80 pb-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Cómo crear un buen nombre para tu clan
            </h2>
            <p>
              Un nombre de clan representa al equipo completo. Por eso conviene pensar primero en la personalidad del grupo y después en los adornos.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Define la personalidad del equipo</h3>
              <p>
                Pregúntate qué queréis transmitir. Puede ser competición, estrategia, humor, amistad, velocidad, fuerza, misterio, fantasía, tecnología o caos. Un grupo competitivo probablemente buscará un tono diferente al de cinco amigos que juegan principalmente para divertirse.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li><strong>Código Alfa:</strong> transmite organización y orden militar.</li>
                <li><strong>Furia X:</strong> transmite energía agresiva y ritmo acelerado.</li>
                <li><strong>Los Sin Plan:</strong> transmite desenfado, comedia y diversión.</li>
                <li><strong>Orden Prisma:</strong> tiene un tono más creativo y misterioso.</li>
              </ul>
              <p>
                No existe una categoría correcta para todos. El estilo tiene que encajar con vuestro grupo.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Elige una palabra base</h3>
              <p>
                Puedes empezar con una sola palabra: <em>Nova</em>, <em>Lobos</em>, <em>Furia</em>, <em>Eclipse</em>, <em>Nexo</em>, <em>Sombra</em>, <em>Código</em>, <em>Titanes</em>, <em>Aurora</em> o <em>Vortex</em>. Después úsala como base para crear nuevas combinaciones.
              </p>
              <p>
                Por ejemplo, <strong>Nova</strong> puede convertirse en: <em>Legión Nova</em>, <em>Nova Crew</em>, <em>Dominio Nova</em>, <em>Guardianes Nova</em> o <em>Código Nova</em>. Esta técnica es mucho más útil que revisar una lista enorme sin ninguna relación con vuestro estilo.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Combina dos conceptos</h3>
              <p>
                Una fórmula sencilla y efectiva es: <code>[concepto principal] + [segunda idea]</code>.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>Lobos + Neón → <strong>Lobos de Neón</strong></li>
                <li>Código + Lunar → <strong>Código Lunar</strong></li>
                <li>Furia + Polar → <strong>Furia Polar</strong></li>
                <li>Orden + Prisma → <strong>Orden Prisma</strong></li>
              </ul>
              <p>
                También puedes invertir el orden (por ejemplo, Nova + Guardianes → <strong>Guardianes Nova</strong>). Prueba varias estructuras antes de decidir; a veces una pequeña modificación cambia completamente el ritmo y la fuerza del nombre.
              </p>
            </div>
          </div>

          {/* Section 4: Names by Style */}
          <div className="border-b border-slate-800/80 pb-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ideas de nombres según el estilo
            </h2>
            <p>
              Los filtros del generador sirven para empezar desde la personalidad concreta que queréis transmitir en el juego.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Nombres competitivos</h3>
                <p className="text-xs text-slate-400 mb-3">Para escuadras tácticas enfocadas en torneos y ranking:</p>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Fuerza Delta [FDT], Código Alfa [CDA], Orden Zenith [OZN], Vortex Elite [VTX], Dominio Nova [DMN], Centinelas Prime, Legión Prime, Escuadra Vanta, Nexo Alpha, Titanes X.
                </p>
              </div>

              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Nombres épicos</h3>
                <p className="text-xs text-slate-400 mb-3">Tono fantástico y legendario para mundos inmersivos:</p>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Reyes del Eclipse, Guardianes del Reino, Legión del Fénix, Titanes del Norte, Orden de Ceniza, Hijos del Trueno, Imperio del Caos, Guardianes de Nova, Legión Astral, Orden del Vacío.
                </p>
              </div>

              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Nombres cortos</h3>
                <p className="text-xs text-slate-400 mb-3">Identidades compactas que facilitan abreviaturas y TAGs:</p>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Nova, Nexo, Vortex [VTX], Zenith [ZNT], Eclipse, Furia, Titan, Sombra, Legión [LGN], Aurora. <em>Comprueba siempre el límite de caracteres del juego.</em>
                </p>
              </div>

              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Nombres oscuros</h3>
                <p className="text-xs text-slate-400 mb-3">Identidad basada en sombra, misterio y noche:</p>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Orden Nox, Legión Umbra, Eclipse Negro, Guardianes Void, Sombra Vanta, Código Nox, Cuervos del Vacío, Nexo Oscuro, Orden Nocturna, Legión Eclipse.
                </p>
              </div>

              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Nombres originales</h3>
                <p className="text-xs text-slate-400 mb-3">Mezclas de conceptos inesperados sin caer en clichés:</p>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Eclipse Naranja, Código Lunar, Lobos de Neón, Orden Prisma, Furia Polar, Nexo Salvaje, Aurora Vanta, Centinelas Zero, Titanes Prisma, Legión Solar.
                </p>
              </div>

              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Nombres graciosos</h3>
                <p className="text-xs text-slate-400 mb-3">Para amigos que juegan exclusivamente a pasarlo bien:</p>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Los Sin Plan, Ping Alto, Casi Pro, No Fue Lag, Modo Siesta, Los Despistados, Team Improviso, Última Ronda, Sin Estrategia, Respawn Club.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Smart TAG creation */}
          <div className="border-b border-slate-800/80 pb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Cómo crear una TAG que tenga relación con el nombre
            </h2>
            <p>
              Una TAG es una etiqueta o abreviatura corta que puede representar al clan cuando el juego o comunidad donde participas utiliza este tipo de identificador. No tiene que limitarse mecánicamente a las tres primeras letras.
            </p>
            <p>
              Supongamos que el nombre de vuestro equipo es <strong>Legión Nova</strong>. Una primera posibilidad evidente sería <code>[LNV]</code>, pero también podríais probar <code>[LGN]</code>, <code>[LNA]</code> o <code>[NVA]</code>. Por eso nuestra herramienta ofrece múltiples alternativas para cada nombre generado.
            </p>
            <p>
              Otro ejemplo: <strong>Código Alfa</strong> puede dar lugar a <code>[CDA]</code>, <code>[CAL]</code> o <code>[CAX]</code>. Elige una opción que tus compañeros recuerden al instante y que siga siendo fácil de relacionar con el nombre completo.
            </p>
          </div>

          {/* Section 6: Workflow from idea to team identity */}
          <div className="border-b border-slate-800/80 pb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              De una idea a una identidad de equipo
            </h2>
            <p>
              El generador no debería obligarte a empezar desde cero cada vez. Si por ejemplo ves <strong>Orden Zenith</strong> y te gusta &ldquo;Zenith&rdquo; pero no &ldquo;Orden&rdquo;, en lugar de descartar la idea utiliza el botón <strong>Más como este</strong>.
            </p>
            <p>
              Podrás explorar variantes inmediatas como: <em>Legión Zenith</em>, <em>Código Zenith</em>, <em>Guardianes Zenith</em> o <em>Dominio Zenith</em>. De igual forma puedes conservar &ldquo;Orden&rdquo; y probar <em>Orden Nova</em>, <em>Orden Nox</em> o <em>Orden Vanta</em>. Así identificas qué palabra resuena con el equipo y cambias únicamente la que no te convence.
            </p>
          </div>

          {/* Section 7: Group decision workflow */}
          <div className="border-b border-slate-800/80 pb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Cómo elegir entre varios nombres cuando sois un grupo
            </h2>
            <p>
              Elegir un nombre colectivo tiene una dificultad que no existe con un nick personal: varias personas tienen que convivir con la decisión. En lugar de discutir sobre decenas de propuestas dispersas en el chat, reduce primero las opciones guardándolas en <strong>Finalistas</strong>:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-slate-300">
              <li>Guarda entre 3 y 5 nombres favoritos usando el icono de estrella (★).</li>
              <li>Abre la ventana de <strong>Finalistas</strong> y haz clic en <em>&ldquo;Copiar Todos para Votar&rdquo;</em>.</li>
              <li>Pega la lista formateada en vuestro grupo de Discord o WhatsApp.</li>
              <li>Pide a cada miembro que vote por dos opciones; las dos más votadas pasan a desempate final.</li>
            </ol>
            <p>
              Reducir primero la lista a un puñado de candidatos concretos con su respectiva TAG es la forma más rápida de alcanzar consenso sin debates interminables.
            </p>
          </div>

          {/* Section 8: Differences between Clan Name, TAG, and Nick */}
          <div className="border-b border-slate-800/80 pb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Nombre del clan y nick del jugador no son lo mismo
            </h2>
            <p>
              Aunque estos términos suelen aparecer en el mismo contexto, cumplen funciones diferentes dentro de la experiencia de juego:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-3">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">Nombre del Clan</span>
                <span className="font-bold text-white text-base block mb-1">Legión Nova</span>
                <p className="text-xs text-slate-400">Identifica al grupo completo, escuadra o hermandad.</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">TAG de Clan</span>
                <span className="font-mono font-bold text-white text-base block mb-1">[LNV]</span>
                <p className="text-xs text-slate-400">Abreviatura o sigla corta colectiva de 3 a 4 letras.</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">Nick Individual</span>
                <span className="font-bold text-white text-base block mb-1">RayoZen</span>
                <p className="text-xs text-slate-400">Identidad individual del jugador dentro del equipo.</p>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              En una partida competitiva, la combinación completa se mostraría típicamente como <code>[LNV] RayoZen</code>.
            </p>
          </div>

          {/* Section 9: Customization & Plain-name backup */}
          <div className="border-b border-slate-800/80 pb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Antes de decorar el nombre, guarda una versión sencilla
            </h2>
            <p>
              Una vez elegido el nombre base, puedes probar presentaciones estilizadas como <code>LEGIÓN NOVA</code>, <code>『Legión Nova』</code> o <code>亗 Legión Nova 亗</code>. Sin embargo, la decoración debe ser siempre el último paso.
            </p>
            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-200/90 text-xs sm:text-sm leading-relaxed">
              <strong>Importante sobre compatibilidad:</strong> Los caracteres decorativos Unicode no se representan necesariamente igual en todos los videojuegos ni en todas las plataformas. Algunos juegos muestran símbolos no soportados como recuadros en blanco (missing glyphs) o directamente impiden el registro del clan. Guarda siempre una versión limpia en texto plano como respaldo seguro.
            </div>
          </div>

          {/* Section 10: FAQs */}
          <div className="border-b border-slate-800/80 pb-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Preguntas frecuentes sobre nombres para clanes
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Qué nombre puedo ponerle a mi clan?</h3>
                <p className="text-slate-300 text-sm">
                  Empieza por la personalidad del grupo. Si sois competitivos, puedes explorar nombres como Código Alfa u Orden Zenith. Si buscáis humor, opciones como Ping Alto o Los Sin Plan siguen una dirección diferente. Utiliza los filtros del generador para reducir las ideas.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Cómo puedo crear un nombre de clan original?</h3>
                <p className="text-slate-300 text-sm">
                  Elige una palabra relacionada con vuestro grupo y combínala con un segundo concepto menos previsible. Por ejemplo, Eclipse + Naranja crea Eclipse Naranja, mientras que Código + Lunar produce Código Lunar.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Qué es una TAG de clan?</h3>
                <p className="text-slate-300 text-sm">
                  Es una etiqueta o abreviatura corta asociada al grupo cuando el juego o comunidad utiliza este tipo de sistema. Por ejemplo, Legión Nova podría utilizar LNV como una posible TAG.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿El generador comprueba si el nombre está disponible?</h3>
                <p className="text-slate-300 text-sm">
                  No. LetrasBonitas crea y combina ideas, pero no consulta las cuentas, clanes o servidores de todos los videojuegos. Comprueba el nombre directamente en el servicio o juego donde quieras registrarlo.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Es mejor un nombre corto?</h3>
                <p className="text-slate-300 text-sm">
                  Un nombre corto puede ser fácil de leer y permite crear abreviaturas compactas, pero no existe una longitud ideal para todos los juegos. Comprueba las reglas del servicio donde vayas a crear el clan.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Puedo utilizar símbolos en el nombre?</h3>
                <p className="text-slate-300 text-sm">
                  Puedes crear versiones decoradas para probar diferentes estilos, pero la representación y aceptación de caracteres especiales puede variar según el juego, aplicación, sistema y fuente. Conserva siempre una versión sencilla.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Un nombre de clan es lo mismo que un nick?</h3>
                <p className="text-slate-300 text-sm">
                  No. El nombre del clan representa al grupo, mientras que el nick representa normalmente a un jugador individual. Una TAG puede servir como etiqueta colectiva cuando el sistema utilizado la admite.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Cómo podemos elegir un nombre entre todos?</h3>
                <p className="text-slate-300 text-sm">
                  Guarda unas pocas opciones como finalistas y pide a cada miembro que seleccione sus favoritas. Reducir primero la lista suele ser más práctico que comparar decenas de nombres al mismo tiempo.
                </p>
              </div>
            </div>
          </div>

          {/* Section 11: Closing */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
              Crea una identidad que represente a todo el equipo
            </h2>
            <p>
              No necesitas encontrar el nombre definitivo en la primera generación. Empieza por una temática, compara varias propuestas y utiliza <strong>Más como este</strong> cuando encuentres una dirección interesante.
            </p>
            <p className="mt-3">
              Después reduce las opciones a unos pocos finalistas, elige una TAG relacionada y comprueba las reglas del juego donde vais a utilizarla. Cuando la identidad base esté decidida, puedes experimentar con letras y símbolos en nuestro <Link href="/" className="text-cyan-400 hover:underline">conversor de letras</Link> sin perder nunca una versión sencilla del nombre.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
