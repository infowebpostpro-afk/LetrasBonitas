import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { EmojiSearchTool } from '@/components/font-generator/EmojiSearchTool';

export const metadata: Metadata = {
  title: 'Emojis para Copiar y Pegar | LetrasBonitas',
  description:
    'Busca emojis por nombre, emoción o categoría. Explora caras, animales, comida, símbolos, banderas y más, y copia tus favoritos con un toque.',
  alternates: {
    canonical: 'https://letrasbonits.com/emojis/',
  },
  openGraph: {
    title: 'Emojis para Copiar y Pegar | LetrasBonitas',
    description:
      'Encuentra emojis por nombre, emoción o categoría, crea combinaciones y copia tus favoritos fácilmente.',
    url: 'https://letrasbonits.com/emojis/',
    siteName: 'LetrasBonitas',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emojis para Copiar y Pegar | LetrasBonitas',
    description:
      'Buscador de emojis con búsqueda por emoción, categorías y combinaciones múltiples.',
  },
};

export default function EmojisPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://letrasbonits.com/emojis/#webpage',
        url: 'https://letrasbonits.com/emojis/',
        name: 'Emojis para Copiar y Pegar',
        description:
          'Busca emojis por nombre, emoción o categoría, crea combinaciones y copia tus favoritos fácilmente.',
        isPartOf: {
          '@type': 'WebSite',
          name: 'LetrasBonitas',
          url: 'https://letrasbonits.com/',
        },
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://letrasbonits.com/emojis/#tool',
        name: 'Buscador de Emojis de LetrasBonitas',
        url: 'https://letrasbonits.com/emojis/',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        browserRequirements:
          'Requires JavaScript for interactive copying, favorites and combinations',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://letrasbonits.com/emojis/#breadcrumb',
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
            name: 'Emojis',
            item: 'https://letrasbonits.com/emojis/',
          },
        ],
      },
    ],
  };

  return (
    <main className="page-shell">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ COMPACT SAAS HERO ═══ */}
      <header className="hero-saas hero-saas--compact">
        <div className="hero-saas__watermark-right" aria-hidden="true">
          😂 ❤️ 🔥
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Emojis', href: '/emojis/' },
            ]}
          />
          <span className="hero-saas__badge">🌐 BUSCADOR DE EMOJIS</span>
          <h1 className="hero-saas__title">
            Emojis para <span className="gradient-text-cyan">Copiar y Pegar</span>
          </h1>
          <p className="hero-saas__lead">
            Busca emojis por nombre, emoción o categoría y cópialos con un toque. Crea combinaciones, guarda tus favoritos y encuentra el emoji perfecto para cada mensaje.
          </p>
        </div>
      </header>

      {/* ═══ PRIMARY INTERACTIVE TOOL ═══ */}
      <EmojiSearchTool />

      {/* ═══ SPECIALIZED ROUTING SUGGESTIONS ═══ */}
      <div className="prose-card mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 m-0">
              <span>🎯</span>
              <span>¿Buscas emojis con un estilo específico?</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1 m-0">
              Esta es nuestra biblioteca general. Si buscas selecciones temáticas:
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <Link
              href="/emojis/bonitos/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 transition-colors"
            >
              Emojis Bonitos
            </Link>
            <Link
              href="/emojis/aesthetic/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors"
            >
              Emojis Aesthetic
            </Link>
            <Link
              href="/simbolos/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
            >
              Símbolos
            </Link>
            <Link
              href="/conversor-de-letras/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Conversor de Letras
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ COMPLETE MASTER ARTICLE & SEO CONTENT ═══ */}
      <article className="prose-section" aria-label="Guía completa sobre emojis para copiar y pegar">
        {/* Section 1: Intro */}
        <section className="prose-card">
          <h2>Emojis para Copiar y Pegar</h2>
          <p>
            A veces sabes exactamente lo que quieres expresar, pero no recuerdas dónde está el emoji o ni siquiera sabes cómo se llama. Buscar uno por uno en el teclado puede ser lento, especialmente cuando quieres algo específico como una reacción, un animal, una bandera o una emoción concreta.
          </p>
          <p>
            Con nuestro buscador de emojis puedes explorar por categorías o escribir palabras como <code>amor</code>, <code>risa</code>, <code>fiesta</code>, <code>triste</code>, <code>perro</code> o <code>comida</code>. Encuentra el emoji que mejor encaje con tu mensaje, cópialo con un toque o añade varios a tu combinación.
          </p>
        </section>

        {/* Section 2: How to use */}
        <section className="prose-card">
          <h2>Cómo usar nuestro buscador de emojis</h2>
          <p>
            Puedes encontrar un emoji de dos maneras.
          </p>
          <p>
            Si ya sabes lo que buscas, escribe una palabra en el buscador. Por ejemplo:
          </p>
          <ul>
            <li><code>amor</code></li>
            <li><code>feliz</code></li>
            <li><code>llorar</code></li>
            <li><code>cumpleaños</code></li>
            <li><code>fuego</code></li>
            <li><code>gato</code></li>
            <li><code>viaje</code></li>
          </ul>
          <p>
            También puedes explorar las categorías si todavía no tienes un emoji concreto en mente.
          </p>
          <p>
            Cuando encuentres el que quieres, pulsa Copiar. El emoji quedará listo para pegarlo en otro campo de texto.
          </p>
          <p>
            Si quieres preparar varios juntos, añádelos a Tu combinación y pulsa Copiar todo.
          </p>
        </section>

        {/* Section 3: Categories */}
        <section className="prose-card">
          <h2>Explora emojis por categorías</h2>
          <p>
            Organizar los emojis por categorías hace que sea mucho más fácil encontrar una opción cuando no sabes su nombre.
          </p>

          <h3>Caras y emociones</h3>
          <p>
            Las caras ayudan a expresar reacciones y estados de ánimo.
          </p>
          <p>
            Algunos ejemplos son:
          </p>
          <p>
            😀 😃 😂 🤣 😊 🥰 😍 😎 🥳 🥺 😢 😭 😡 🤔
          </p>
          <p>
            Puedes buscar por la emoción que quieres comunicar, no solo por el nombre exacto.
          </p>
          <p>
            Por ejemplo, una búsqueda de <code>risa</code> puede mostrar varias opciones porque 😂, 🤣 y 😆 expresan ideas relacionadas, aunque no sean el mismo emoji.
          </p>

          <h3>Personas y gestos</h3>
          <p>
            Aquí aparecen manos, gestos, personas, actividades y otras representaciones relacionadas con el cuerpo humano.
          </p>
          <p>
            Ejemplos:
          </p>
          <p>
            👋 👍 👎 👌 ✌️ 🤞 🙌 👏 🙏 💪
          </p>
          <p>
            Algunos emojis de esta categoría admiten modificadores de tono de piel. Cuando exista una variante compatible, puedes elegirla desde el selector correspondiente.
          </p>

          <h3>Animales y naturaleza</h3>
          <p>
            Esta categoría reúne animales, plantas, elementos naturales y fenómenos relacionados con el clima.
          </p>
          <p>
            Ejemplos:
          </p>
          <p>
            🐶 🐱 🦁 🐼 🦋 🌸 🌻 🌙 ⭐ 🌈 🔥
          </p>
          <p>
            Puedes buscar directamente por palabras como <code>perro</code>, <code>gato</code>, <code>mariposa</code>, <code>flor</code>, <code>luna</code> o <code>fuego</code>.
          </p>

          <h3>Comida y bebida</h3>
          <p>
            Aquí encontrarás frutas, comidas, bebidas, postres y utensilios relacionados.
          </p>
          <p>
            Ejemplos:
          </p>
          <p>
            🍎 🍓 🍕 🍔 🌮 🍰 ☕ 🧋 🍿
          </p>
          <p>
            Estos emojis pueden servir para hablar de una comida, indicar un plan o simplemente dar contexto visual a un mensaje.
          </p>

          <h3>Actividades</h3>
          <p>
            Incluye deportes, juegos, premios, música, arte y otras actividades.
          </p>
          <p>
            Ejemplos:
          </p>
          <p>
            ⚽ 🏀 🎮 🎯 🏆 🎨 🎸 🎤
          </p>
          <p>
            Si buscas una actividad concreta, prueba directamente su nombre en el buscador.
          </p>

          <h3>Viajes y lugares</h3>
          <p>
            Esta categoría incluye transportes, edificios, mapas, paisajes y lugares.
          </p>
          <p>
            Ejemplos:
          </p>
          <p>
            ✈️ 🚗 🚆 🚀 🏠 🏖️ 🏔️ 🌍
          </p>
          <p>
            Puede ser útil para mensajes relacionados con vacaciones, desplazamientos, destinos o planes de viaje.
          </p>

          <h3>Objetos</h3>
          <p>
            Los objetos cubren una colección muy amplia de elementos cotidianos.
          </p>
          <p>
            Ejemplos:
          </p>
          <p>
            📱 💻 📷 🎧 💡 🎁 📚 🔑
          </p>
          <p>
            En lugar de recorrer toda la categoría, normalmente es más rápido buscar el nombre del objeto.
          </p>

          <h3>Símbolos</h3>
          <p>
            Algunos emoji representan corazones, señales, botones, advertencias, formas y otros símbolos.
          </p>
          <p>
            Ejemplos:
          </p>
          <p>
            ❤️ 💕 💯 ✅ ❌ ⚠️ ♻️ ❓
          </p>
          <p>
            Esta categoría no debe confundirse con una colección completa de caracteres especiales. Muchos símbolos de texto no son emoji y pueden tener una presentación diferente.
          </p>

          <h3>Banderas</h3>
          <p>
            Las banderas incluyen países, regiones y otras secuencias de bandera admitidas por Unicode.
          </p>
          <p>
            Puedes buscarlas por el nombre asociado cuando esté disponible en nuestro buscador.
          </p>
        </section>

        {/* Section 4: Finding emojis without knowing the name */}
        <section className="prose-card">
          <h2>Cómo encontrar un emoji cuando no sabes su nombre</h2>
          <p>
            No necesitas conocer el nombre técnico.
          </p>
          <p>
            Piensa en lo que quieres decir.
          </p>
          <p>
            Si quieres expresar cariño, prueba:
          </p>
          <p>
            <code>amor</code>
          </p>
          <p>
            Si estás celebrando algo:
          </p>
          <p>
            <code>fiesta</code>
          </p>
          <p>
            Si quieres reaccionar a algo divertido:
          </p>
          <p>
            <code>risa</code>
          </p>
          <p>
            Si estás decepcionado:
          </p>
          <p>
            <code>triste</code>
          </p>
          <p>
            Si hablas de dinero:
          </p>
          <p>
            <code>dinero</code>
          </p>
          <p>
            El buscador utiliza nombres y palabras relacionadas para acercarte al resultado que buscas.
          </p>
          <p>
            También puedes escribir el propio emoji si quieres encontrar información o alternativas relacionadas.
          </p>
        </section>

        {/* Section 5: Search by emotion */}
        <section className="prose-card">
          <h2>Busca por emoción, no solo por nombre</h2>
          <p>
            Las conversaciones no siempre empiezan pensando en un objeto concreto. Muchas veces pensamos primero en una emoción.
          </p>
          <p>
            Por eso búsquedas como estas pueden ser más útiles:
          </p>
          <ul>
            <li><code>feliz</code></li>
            <li><code>enojado</code></li>
            <li><code>triste</code></li>
            <li><code>amor</code></li>
            <li><code>nervioso</code></li>
            <li><code>confundido</code></li>
            <li><code>celebrar</code></li>
          </ul>
          <p>
            Una misma emoción puede tener varios resultados.
          </p>
          <p>
            Por ejemplo, <code>feliz</code> puede relacionarse con 😀, 😄, 😊, 🥳 o 🤩. No significan exactamente lo mismo, así que conviene elegir según el tono del mensaje.
          </p>
        </section>

        {/* Section 6: What is an emoji */}
        <section className="prose-card">
          <h2>Qué es un emoji</h2>
          <p>
            Un emoji es un carácter o una secuencia de caracteres que puede representarse visualmente como una cara, persona, objeto, animal, símbolo, bandera u otro pictograma.
          </p>
          <p>
            Unicode estandariza los caracteres y secuencias utilizados para representar emoji, pero no obliga a todos los fabricantes a dibujarlos exactamente de la misma forma.
          </p>
          <p>
            Por eso lo que copias es el carácter o la secuencia correspondiente, no una captura de la imagen que ves en esta página.
          </p>
        </section>

        {/* Section 7: What emojis mean */}
        <section className="prose-card">
          <h2>Qué significan los emojis</h2>
          <p>
            El significado de un emoji depende tanto de su concepto básico como del contexto.
          </p>
          <ul>
            <li>😂 suele asociarse con una risa intensa.</li>
            <li>❤️ suele comunicar amor, cariño o afecto.</li>
            <li>🎉 se relaciona con celebraciones.</li>
            <li>😢 puede expresar tristeza.</li>
            <li>👍 puede comunicar aprobación o confirmación.</li>
          </ul>
          <p>
            Sin embargo, el contexto, la relación entre las personas y la cultura de una comunidad pueden cambiar cómo se interpreta un mensaje.
          </p>
          <p>
            Por eso una descripción debe servir como orientación, no como una regla absoluta sobre lo que una persona quiere decir.
          </p>
        </section>

        {/* Section 8: Platform differences */}
        <section className="prose-card">
          <h2>Por qué un emoji puede verse diferente en otro dispositivo</h2>
          <p>
            El carácter que copias puede ser el mismo aunque su diseño visual cambie.
          </p>
          <p>
            Apple, Google, Microsoft y otros proveedores pueden utilizar diseños distintos para representar un mismo emoji.
          </p>
          <p>
            Unicode define los caracteres y las secuencias, pero los proveedores controlan sus propios diseños visuales.
          </p>
          <p>
            Por esta razón, un emoji puede tener pequeños cambios de color, forma, expresión o detalle cuando pasa de un dispositivo a otro.
          </p>
          <p>
            También puede ocurrir que un emoji reciente todavía no tenga soporte completo en un sistema antiguo.
          </p>
          <p>
            Si la apariencia exacta es importante, comprueba el resultado en el dispositivo o aplicación donde realmente se utilizará.
          </p>
        </section>

        {/* Section 9: Skin tones */}
        <section className="prose-card">
          <h2>Emojis con diferentes tonos de piel</h2>
          <p>
            Algunos emojis relacionados con personas y partes del cuerpo admiten modificadores de tono de piel.
          </p>
          <p>
            Por ejemplo, una mano puede aparecer en diferentes variantes cuando esa secuencia está admitida.
          </p>
          <p>
            No todos los emojis aceptan estos modificadores.
          </p>
          <p>
            Nuestro selector debe mostrar opciones de tono únicamente cuando el emoji correspondiente las admite, en lugar de crear variantes artificiales.
          </p>
        </section>

        {/* Section 10: Multi-code-point emojis */}
        <section className="prose-card">
          <h2>Algunos emojis están formados por varias partes</h2>
          <p>
            Lo que visualmente parece un solo emoji no siempre corresponde a un único punto de código.
          </p>
          <p>
            Unicode también utiliza secuencias para representar determinados emojis.
          </p>
          <p>
            Esto ocurre, por ejemplo, con diferentes tipos de banderas, variantes con modificadores y otras composiciones.
          </p>
          <p>
            Para el usuario, lo importante es que al pulsar Copiar se conserve la secuencia completa.
          </p>
          <p>
            Por eso no conviene editar o separar manualmente un emoji complejo carácter por carácter.
          </p>
        </section>

        {/* Section 11: Emoji vs emoticon vs kaomoji */}
        <section className="prose-card">
          <h2>Emoji, emoticono y kaomoji: no son exactamente lo mismo</h2>
          <p>
            Aunque se utilizan para expresar emociones o decorar mensajes, no son idénticos.
          </p>
          <p>
            Un emoji puede ser:
          </p>
          <p>
            😂
          </p>
          <p>
            Un emoticono utiliza caracteres del teclado para formar una expresión, por ejemplo:
          </p>
          <p>
            :D
          </p>
          <p>
            Un kaomoji suele construir una expresión más compleja con caracteres de texto, por ejemplo:
          </p>
          <p>
            (｡•́‿•̀｡)
          </p>
          <p>
            También existen símbolos de texto como:
          </p>
          <p>
            ★ ✦ ♡ →
          </p>
          <p>
            que pueden parecer decorativos pero no deben tratarse automáticamente como emojis.
          </p>
          <p>
            Separar estas colecciones ayuda a encontrar más rápido el tipo de elemento que realmente necesitas.
          </p>
        </section>

        {/* Section 12: Choosing emojis wisely */}
        <section className="prose-card">
          <h2>Cómo elegir emojis sin hacer difícil de leer tu mensaje</h2>
          <p>
            Los emojis funcionan mejor cuando complementan el texto en lugar de sustituir información importante sin necesidad.
          </p>
          <p>
            Un emoji puede ayudar a indicar el tono:
          </p>
          <p>
            Gracias 😊
          </p>
          <p>
            se percibe visualmente distinto de:
          </p>
          <p>
            Gracias.
          </p>
          <p>
            Pero una larga secuencia de emojis puede hacer que el mensaje resulte más difícil de interpretar.
          </p>
          <p>
            Para mensajes importantes:
          </p>
          <ul>
            <li>Mantén la información esencial también en texto.</li>
            <li>Utiliza emojis relacionados con el contexto.</li>
            <li>Evita llenar cada palabra de símbolos.</li>
            <li>Recuerda que el diseño puede variar entre dispositivos.</li>
            <li>No asumas que todas las personas interpretarán una reacción exactamente igual.</li>
          </ul>
          <p>
            Para una bio, caption o mensaje informal puedes ser más creativo, siempre que el resultado siga siendo legible.
          </p>
        </section>

        {/* Section 13: FAQs */}
        <section className="prose-card">
          <h2>Preguntas frecuentes</h2>

          <div className="space-y-3 my-2">
            {[
              { 
                q: '¿Cómo copiar un emoji?', 
                a: 'Busca o explora hasta encontrar el emoji que quieres y pulsa Copiar. Después pégalo desde el portapapeles en el campo de texto donde quieras utilizarlo.' 
              },
              { 
                q: '¿Puedo copiar varios emojis juntos?', 
                a: 'Sí. Añade los emojis que quieras a Tu combinación y pulsa Copiar todo.' 
              },
              { 
                q: '¿Cómo encuentro un emoji si no sé cómo se llama?', 
                a: 'Busca por una emoción, objeto o idea relacionada. Por ejemplo, prueba amor, triste, fiesta, perro, dinero o viaje.' 
              },
              { 
                q: '¿Por qué un emoji se ve diferente en iPhone y Android?', 
                a: 'Las plataformas pueden utilizar diseños gráficos diferentes para representar los mismos caracteres o secuencias emoji. Por eso la apariencia puede cambiar aunque el contenido copiado corresponda al mismo emoji.' 
              },
              { 
                q: '¿Todos los emojis permiten cambiar el tono de piel?', 
                a: 'No. Los modificadores de tono de piel solo se aplican a determinados emojis compatibles.' 
              },
              { 
                q: '¿Por qué un emoji nuevo no aparece correctamente?', 
                a: 'El dispositivo, sistema operativo, fuente o aplicación puede no tener todavía soporte para ese emoji. En esos casos puede aparecer un cuadro, un símbolo de sustitución o una representación diferente.' 
              },
              { 
                q: '¿Emoji y emoticono significan lo mismo?', 
                a: 'No exactamente. Un emoji utiliza caracteres o secuencias definidos para representación emoji, mientras que un emoticono crea expresiones utilizando caracteres de texto, como :) o :D.' 
              },
              { 
                q: '¿Los emojis funcionan en todas las aplicaciones?', 
                a: 'No conviene asumir compatibilidad universal. El soporte y la apariencia pueden variar según el sistema, la aplicación y su versión.' 
              },
              { 
                q: '¿Puedo buscar emojis en español?', 
                a: 'Sí. El buscador está pensado para encontrar emojis mediante nombres, emociones y palabras relacionadas en español.' 
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm m-0 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">?</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-xs pl-7 m-0">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 14: Final CTA */}
        <section className="prose-card">
          <h2>Encuentra el emoji que quieres expresar</h2>
          <p>
            Utiliza el buscador cuando tengas una idea concreta y las categorías cuando quieras explorar. Si necesitas varios emojis, añádelos a tu combinación y cópialos juntos.
          </p>
          <p>
            Cuando dudes entre varias opciones, piensa primero en el tono que quieres comunicar. Elegir un emoji por su significado y contexto suele producir un mensaje más claro que añadir muchos únicamente por decoración.
          </p>
          <p>
            Si además quieres cambiar la tipografía de tus palabras a letras cursivas, negritas o góticas, puedes probar nuestro <Link href="/conversor-de-letras/" className="text-indigo-600 hover:underline font-semibold">conversor de letras</Link> para combinar fuentes bonitas con tus emojis favoritos.
          </p>
        </section>
      </article>
    </main>
  );
}
