import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SimbolosWorkspaceTool } from '@/components/font-generator/SimbolosWorkspaceTool';

export const metadata: Metadata = {
  title: 'Símbolos para Copiar y Pegar ♡ ★ ✦ → | LetrasBonitas',
  description:
    'Encuentra símbolos bonitos para copiar y pegar. Busca corazones, estrellas, flechas, flores y más, o crea tu propia combinación en segundos.',
  alternates: {
    canonical: 'https://letrasbonits.com/simbolos/',
  },
  openGraph: {
    title: 'Símbolos para Copiar y Pegar | LetrasBonitas',
    description:
      'Explora símbolos, busca por categoría, combina tus favoritos y copia el resultado con un toque.',
    url: 'https://letrasbonits.com/simbolos/',
    siteName: 'LetrasBonitas',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Símbolos para Copiar y Pegar ♡ ★ ✦ → | LetrasBonitas',
    description:
      'Biblioteca de símbolos para copiar y pegar, buscador por categorías y constructor de combinaciones.',
  },
};

export default function SimbolosPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://letrasbonits.com/simbolos/#webpage',
        url: 'https://letrasbonits.com/simbolos/',
        name: 'Símbolos para Copiar y Pegar',
        description:
          'Explora símbolos para copiar y pegar, busca por categoría, combina tus favoritos y crea decoraciones para nombres y texto.',
        isPartOf: {
          '@type': 'WebSite',
          name: 'LetrasBonitas',
          url: 'https://letrasbonits.com/',
        },
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://letrasbonits.com/simbolos/#tool',
        name: 'Selector de Símbolos de LetrasBonitas',
        url: 'https://letrasbonits.com/simbolos/',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        browserRequirements:
          'Requires JavaScript for interactive copying, favorites and combinations',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://letrasbonits.com/simbolos/#breadcrumb',
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
            name: 'Símbolos',
            item: 'https://letrasbonits.com/simbolos/',
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
            <li className="text-cyan-400 font-semibold" aria-current="page">
              Símbolos
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-8 sm:mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
            <span>✦ ♡ ★</span>
            <span>Biblioteca y Combinador de Símbolos</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Símbolos para Copiar y Pegar
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Encuentra emojis populares, caritas kaomoji, corazones, estrellas, flechas, flores, símbolos aesthetic y más. Toca cualquier símbolo o emoji para copiarlo al instante, o usa <strong>+ Añadir</strong> para preparar tu combinación personalizada con tu propio texto.
          </p>
        </header>

        {/* Interactive Tool Component */}
        <SimbolosWorkspaceTool />

        {/* Specialized Routing Banner */}
        <section className="my-10 p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>🎯</span>
              <span>¿Buscas símbolos optimizados para un entorno específico?</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Esta es nuestra biblioteca general. Si necesitas decoraciones adaptadas a una plataforma concreta:
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <Link
              href="/letras-para-instagram/simbolos-para-instagram/"
              className="text-xs px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white font-semibold border border-slate-700 transition-colors"
            >
              Símbolos para Instagram
            </Link>
            <Link
              href="/nombres-para-free-fire/simbolos/"
              className="text-xs px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white font-semibold border border-slate-700 transition-colors"
            >
              Símbolos para Free Fire
            </Link>
            <Link
              href="/conversor-de-letras/"
              className="text-xs px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold border border-slate-700 transition-colors"
            >
              Conversor de Letras
            </Link>
          </div>
        </section>

        {/* Main Publication-Ready Article */}
        <article className="prose prose-invert prose-cyan max-w-none mt-12 space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <div className="border-b border-slate-800/80 pb-8">
            <p>
              Encontrar el símbolo exacto puede ser difícil cuando no aparece en el teclado. Tal vez recuerdas que era una estrella, un corazón, una corona o una flecha, pero no sabes cómo escribirlo ni dónde buscarlo.
            </p>
            <p className="mt-4">
              Con el selector de <Link href="/" className="text-cyan-400 hover:underline">LetrasBonitas</Link> puedes explorar símbolos por categoría, buscar el que necesitas y copiarlo con un toque. También puedes añadir varios a <strong>Mi combinación</strong>, escribir tu propio texto y preparar una decoración completa antes de copiarla.
            </p>
          </div>

          {/* Section 2: Ready examples */}
          <div className="border-b border-slate-800/80 pb-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Símbolos bonitos para copiar y pegar
            </h2>
            <p>
              Aquí tienes algunos ejemplos de los tipos de símbolos que puedes explorar con la herramienta:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                <h3 className="text-xs uppercase font-bold text-cyan-400 mb-1">Corazones</h3>
                <p className="text-xl font-bold text-white tracking-wider">♡ ♥ ❤ ❥ ❣ ❦ ღ ෆ</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                <h3 className="text-xs uppercase font-bold text-cyan-400 mb-1">Estrellas y destellos</h3>
                <p className="text-xl font-bold text-white tracking-wider">★ ☆ ✦ ✧ ✩ ✰ ⋆ ⟡</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                <h3 className="text-xs uppercase font-bold text-cyan-400 mb-1">Flores</h3>
                <p className="text-xl font-bold text-white tracking-wider">✿ ❀ ❁ ✾ ❃ ⚘ ❋</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                <h3 className="text-xs uppercase font-bold text-cyan-400 mb-1">Lunas y cielo</h3>
                <p className="text-xl font-bold text-white tracking-wider">☾ ☽ ☼ ☀ ☁ ☄ ⚡</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                <h3 className="text-xs uppercase font-bold text-cyan-400 mb-1">Flechas</h3>
                <p className="text-xl font-bold text-white tracking-wider">→ ← ↑ ↓ ↗ ↘ ➜ ➤</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                <h3 className="text-xs uppercase font-bold text-cyan-400 mb-1">Coronas y realeza</h3>
                <p className="text-xl font-bold text-white tracking-wider">♔ ♕ ♚ ♛ ⚜ 👑</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                <h3 className="text-xs uppercase font-bold text-cyan-400 mb-1">Marcos</h3>
                <p className="text-xl font-bold text-white tracking-wider">『 』 【 】 ꧁ ꧂</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                <h3 className="text-xs uppercase font-bold text-cyan-400 mb-1">Separadores</h3>
                <p className="text-xl font-bold text-white tracking-wider">• ─ ━ │ ┊ ｡･:*:･ﾟ</p>
              </div>
            </div>

            <p>
              No tienes que seleccionar manualmente un carácter con el cursor. Busca una categoría, toca <strong>Copiar</strong> y después pégalo donde quieras probarlo. Si quieres construir algo más elaborado, utiliza <strong>+ Añadir</strong> en lugar de copiar cada elemento por separado.
            </p>
          </div>

          {/* Section 3: Categories Breakdown */}
          <div className="border-b border-slate-800/80 pb-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Encuentra símbolos por categoría
            </h2>
            <p>
              Una biblioteca grande resulta útil solamente cuando puedes encontrar lo que buscas rápidamente. Por eso LetrasBonitas organiza los caracteres según su apariencia y uso habitual.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Corazones</h3>
              <p>
                Los corazones pueden funcionar como una decoración sencilla alrededor de un nombre, una frase corta o una sección de una biografía (ej. <code>♡ ♥ ❤ ❥ ❦ ღ</code>). Puedes utilizarlos solos (<code>♡</code>), alrededor de texto (<code>♡ Sofía ♡</code>) o combinados con otros elementos (<code>✦ ♡ Sofía ♡ ✦</code>).
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Estrellas y destellos</h3>
              <p>
                Las estrellas son ideales cuando buscas una decoración brillante, limpia o aesthetic (ej. <code>★ ☆ ✦ ✧ ✩ ✰ ⋆ ⟡</code>). Una estrella sólida como <code>★</code> produce una apariencia diferente a un destello ligero como <code>✧</code>. Prueba ambos estilos alrededor de tu texto antes de decidir.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Flechas</h3>
              <p>
                Las flechas sirven tanto como decoración como para indicar dirección (ej. <code>→ ← ↑ ↓ ↗ ↘ ➜ ➤</code>). También pueden funcionar como separadores de perfil (<em>Nombre → Perfil</em>) o dentro de una línea descriptiva (<code>✦ Inicio → Ideas → Final ✦</code>).
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Flores</h3>
              <p>
                Para una apariencia suave o decorativa puedes explorar <code>✿ ❀ ❁ ✾ ❃ ⚘</code>. Por ejemplo, <code>✿ Luna ✿</code> o <code>❀ Sofía ♡</code>. No necesitas utilizar muchas flores al mismo tiempo; una decoración pequeña suele ser mucho más fácil de leer.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Lunas y cielo</h3>
              <p>
                Los símbolos relacionados con luna, sol y cielo combinan a la perfección con estilos nocturnos, minimalistas o aesthetic (ej. <code>☾ ☽ ☼ ☀ ☁</code>). Prueba opciones como <code>☾ Luna ☽</code> o <code>✦ ☾ Nova ☽ ✦</code>.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Coronas</h3>
              <p>
                Entre los símbolos con apariencia real o heráldica puedes encontrar piezas de ajedrez y coronas como <code>♔ ♕ ♚ ♛ ⚜</code>. Por ejemplo: <code>♛ Alex ♛</code>. Una corona también puede combinarse con un marco, aunque conviene evitar añadir tantos elementos que el nombre resulte difícil de reconocer.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Marcos y separadores</h3>
              <p>
                Los marcos permiten colocar un nombre o una palabra entre dos caracteres destacados: <code>『Luna』</code>, <code>【Nova】</code> o <code>꧁Alex꧂</code>. Por su parte, los separadores (<code>• ─ ━ │ ┊</code>) ayudan a estructurar información en líneas de biografía: <em>Luna ✦ Música ✦ Viajes</em>.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Símbolos para gaming</h3>
              <p>
                Los jugadores suelen buscar caracteres que puedan colocar alrededor de un nick o utilizar como detalle visual (<code>亗 ⚔ ☠ ⌖ ☣</code>). En lugar de elegir una decoración solamente porque parece compleja, comprueba primero tres cosas: que puedas leer el nombre, que el juego acepte los caracteres y que el resultado siga viéndose correctamente después de pegarlo.
              </p>
              <p className="text-xs text-slate-400">
                Si tu objetivo es específicamente Free Fire, te sugerimos revisar nuestra colección especializada de <Link href="/nombres-para-free-fire/simbolos/" className="text-cyan-400 hover:underline">símbolos para Free Fire</Link>.
              </p>
            </div>
          </div>

          {/* Section 4: How to use */}
          <div className="border-b border-slate-800/80 pb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Cómo usar el selector de símbolos
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-slate-300">
              <li><strong>Busca o elige una categoría:</strong> Escribe una palabra como <em>corazón</em>, <em>estrella</em>, <em>flor</em>, <em>flecha</em> o <em>corona</em>, o pulsa en las categorías disponibles.</li>
              <li><strong>Copia el símbolo:</strong> Cuando solo necesites un carácter individual, pulsa <strong>Copiar</strong>. El navegador lo transferirá inmediatamente a tu portapapeles.</li>
              <li><strong>Añádelo a una combinación:</strong> Si quieres utilizar varios caracteres juntos, pulsa <strong>+ Añadir</strong>. Puedes añadir <code>✦</code>, luego <code>♡</code> y finalmente <code>☾</code> para formar <code>✦ ♡ ☾</code>.</li>
              <li><strong>Añade texto si lo necesitas:</strong> Escribe tu nombre o apodo en el campo de vista previa para ver cómo se integra con los símbolos (ej. <em>Sofía</em> → <code>✦ ♡ Sofía ☾</code>).</li>
              <li><strong>Copia el resultado completo:</strong> Pulsa <strong>Copiar todo</strong> para llevarte la composición terminada sin tener que ir y venir de una aplicación a otra.</li>
            </ol>
          </div>

          {/* Section 5: Combination Builder */}
          <div className="border-b border-slate-800/80 pb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Crea tu propia combinación de símbolos
            </h2>
            <p>
              Una colección sirve para descubrir caracteres; un constructor sirve para convertir esos caracteres en algo útil. Imagina que encuentras <code>✦</code>, <code>☾</code> y <code>♡</code>. En lugar de copiarlos por separado, agrégalos a <strong>Mi combinación</strong>.
            </p>
            <p>
              Si introduces el nombre <em>Luna</em>, puedes probar al vuelo: <code>✦ Luna ☾</code>, <code>♡ Luna ♡</code>, <code>☾ ✦ Luna ✦ ☽</code> o <code>『Luna』</code>. El mejor resultado no siempre es el que tiene más adornos: si el texto es importante, procura que se mantenga perfectamente legible.
            </p>
          </div>

          {/* Section 6: Decoration Ideas */}
          <div className="border-b border-slate-800/80 pb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ideas para decorar nombres y texto
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>Enmarcar un nombre:</strong> Usa dos caracteres alrededor del texto (<code>『Carlos』</code>, <code>♡ Ana ♡</code>, <code>✦ Nova ✦</code>).</li>
              <li><strong>Crear un separador de intereses:</strong> Utiliza un carácter entre palabras (<em>Música ✦ Viajes ✦ Café</em> o <em>Gaming • Clips • Directos</em>).</li>
              <li><strong>Destacar una palabra o estado:</strong> Aplica una decoración ligera (<code>✧ Nuevo ✧</code>, <code>★ Favorito ★</code>).</li>
              <li><strong>Crear secuencias decorativas:</strong> Prueba patrones puros como <code>✦ ♡ ☾ ♡ ✦</code> o <code>❀ ✧ ❀</code>.</li>
            </ul>
          </div>

          {/* Section 7: Symbols vs Special Chars vs Emoji */}
          <div className="border-b border-slate-800/80 pb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Símbolos, caracteres especiales y emoji: cuál es la diferencia
            </h2>
            <p>
              En Internet estas palabras se mezclan con frecuencia, pero no siempre significan técnicamente lo mismo:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>Carácter:</strong> Es una unidad de texto representada dentro de un sistema de codificación. Unicode asigna códigos únicos a una enorme variedad de letras, signos y símbolos internacionales.</li>
              <li><strong>Símbolo de texto:</strong> Caracteres tipográficos como <code>★</code>, <code>♡</code>, <code>→</code> o <code>♛</code> que se comportan como texto estándar.</li>
              <li><strong>Emoji:</strong> Elementos pensados para una representación pictográfica colorida. Algunos caracteres admiten tanto presentación de texto como presentación de emoji según el sistema o los selectores de variación aplicados.</li>
            </ul>
            <p>
              Para la mayoría de los usuarios la diferencia práctica es clara: en esta biblioteca puedes buscar caracteres que se pueden seleccionar, copiar y pegar como texto plano en casi cualquier aplicación.
            </p>
          </div>

          {/* Section 8: Why symbols look different */}
          <div className="border-b border-slate-800/80 pb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Por qué algunos símbolos se ven diferentes
            </h2>
            <p>
              Copiar un carácter no significa copiar una imagen estática. El mismo carácter Unicode puede renderizarse con sutiles diferencias visuales según el sistema operativo (iOS, Android, Windows, macOS), la aplicación utilizada y el catálogo de fuentes tipográficas instaladas.
            </p>
            <p>
              Esto explica por qué un corazón o una estrella puede verse ligeramente más estilizado en un teléfono móvil que en un ordenador de sobremesa. Por esta razón, LetrasBonitas no promete que cada símbolo se verá exactamente igual en todos los dispositivos: la mejor prueba es copiar el símbolo y comprobarlo directamente en la app donde quieras publicarlo.
            </p>
          </div>

          {/* Section 9: Empty boxes troubleshooting */}
          <div className="border-b border-slate-800/80 pb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Qué hacer si un símbolo no aparece correctamente
            </h2>
            <p>
              Si al pegar un símbolo ves un recuadro vacío (missing glyph), un signo de interrogación o un carácter extraño, suele deberse a que la aplicación de destino no soporta ese carácter específico. Aplica estas soluciones:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-slate-300">
              <li><strong>Usa una alternativa más común:</strong> Si un adorno exótico falla, prueba con una estrella o corazón estándar (<code>★</code>, <code>♡</code>).</li>
              <li><strong>Conserva siempre una versión sin decoración:</strong> Si preparas un nombre importante, ten a mano una versión en texto plano.</li>
              <li><strong>Prueba directamente en el campo final:</strong> El comportamiento puede diferir entre el navegador web y el cliente de un juego o red social.</li>
              <li><strong>Reduce la combinación:</strong> Prueba los caracteres uno por uno para detectar cuál de ellos causa el conflicto.</li>
            </ol>
          </div>

          {/* Section 10: Readability */}
          <div className="border-b border-slate-800/80 pb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Usa símbolos sin perder legibilidad
            </h2>
            <p>
              Más decoración no significa automáticamente un resultado superior. Compara <code>✦ Luna ✦</code> con una combinación saturada de diez signos alrededor de la misma palabra: la primera deja absolutamente claro el nombre, mientras que la segunda entorpece la lectura.
            </p>
            <p>
              Una regla práctica es comenzar con una estructura simétrica o minimalista (<em>Minimalista:</em> <code>✦ Luna</code>; <em>Simétrico:</em> <code>✦ Luna ✦</code>; <em>Enmarcado:</em> <code>『Luna』</code>) y agregar elementos complementarios solo si aportan valor estético real.
            </p>
          </div>

          {/* Section 11: FAQs */}
          <div className="border-b border-slate-800/80 pb-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Preguntas frecuentes sobre símbolos
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Cómo puedo copiar un símbolo?</h3>
                <p className="text-slate-300 text-sm">
                  Busca el carácter que quieras y pulsa <strong>Copiar</strong>. Después abre la aplicación donde quieras utilizarlo y pega el contenido del portapapeles.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Puedo combinar varios símbolos?</h3>
                <p className="text-slate-300 text-sm">
                  Sí. Utiliza <strong>+ Añadir</strong> para enviar cada carácter a <em>Mi combinación</em>. Allí puedes construir una secuencia completa y copiarla con un solo clic.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Puedo poner mi nombre entre símbolos?</h3>
                <p className="text-slate-300 text-sm">
                  Sí. Escribe tu nombre en el campo de texto de vista previa y combina los caracteres que quieras alrededor. Por ejemplo, Luna puede convertirse en <code>✦ Luna ✦</code> o <code>『Luna』</code>.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Los símbolos son imágenes?</h3>
                <p className="text-slate-300 text-sm">
                  No. Los elementos de esta biblioteca son caracteres tipográficos de texto de la norma Unicode, no archivos de imagen. Su representación gráfica depende del entorno y las fuentes disponibles.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Los símbolos se ven iguales en todos los dispositivos?</h3>
                <p className="text-slate-300 text-sm">
                  No necesariamente. La apariencia exacta puede variar según las fuentes, el sistema operativo y el soporte tipográfico del dispositivo o aplicación.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Por qué aparece un cuadro en lugar del símbolo?</h3>
                <p className="text-slate-300 text-sm">
                  Indica que el software de destino no dispone del glifo necesario para mostrar ese carácter. Prueba con un símbolo más convencional de la misma categoría.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Todos los símbolos funcionan en nombres de usuario?</h3>
                <p className="text-slate-300 text-sm">
                  No se debe asumir. Cada red social y videojuego establece sus propias reglas de validación de caracteres permitidos. Comprueba el resultado directamente antes de registrar un nombre importante.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">¿Dónde encuentro símbolos para Instagram o Free Fire?</h3>
                <p className="text-slate-300 text-sm">
                  Para fines específicos de biografías de Instagram te recomendamos visitar nuestra sección de <Link href="/letras-para-instagram/simbolos-para-instagram/" className="text-cyan-400 hover:underline">símbolos para Instagram</Link>, y para el juego Free Fire visita <Link href="/nombres-para-free-fire/simbolos/" className="text-cyan-400 hover:underline">símbolos para Free Fire</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Section 12: Conclusion */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
              Encuentra, combina y copia
            </h2>
            <p>
              No necesitas recorrer listas interminables cada vez que busques un corazón, una estrella o una flecha. Utiliza el buscador o las categorías para llegar al símbolo exacto que necesitas y pulsa <strong>Copiar</strong>.
            </p>
            <p className="mt-3">
              Cuando quieras un resultado más elaborado, usa <strong>+ Añadir</strong> para armar tu propia combinación y pruébala con tu texto antes de copiarla. Si más tarde quieres estilizar las letras de tu texto, puedes pasarlo por nuestro <Link href="/conversor-de-letras/" className="text-cyan-400 hover:underline">conversor de letras</Link> sin perder nunca la versión sencilla como respaldo.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
