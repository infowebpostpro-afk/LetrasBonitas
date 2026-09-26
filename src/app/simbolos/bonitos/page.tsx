import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BonitosSymbolsTool } from '@/components/font-generator/BonitosSymbolsTool';

export const metadata: Metadata = {
  title: 'Símbolos Bonitos para Copiar y Pegar | LetrasBonitas',
  description:
    'Encuentra símbolos bonitos para copiar y pegar: corazones, estrellas, flores, flechas, coronas y más. Busca, combina y copia tus favoritos.',
  alternates: {
    canonical: 'https://letrasbonits.com/simbolos/bonitos/',
  },
  openGraph: {
    title: 'Símbolos Bonitos para Copiar y Pegar | LetrasBonitas',
    description:
      'Explora corazones, estrellas, flores, flechas, coronas y otros símbolos bonitos. Busca, combina y copia tus favoritos.',
    url: 'https://letrasbonits.com/simbolos/bonitos/',
    siteName: 'LetrasBonitas',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Símbolos Bonitos para Copiar y Pegar | LetrasBonitas',
    description:
      'Explora corazones, estrellas, flores, flechas, coronas y otros símbolos bonitos. Busca, combina y copia tus favoritos.',
  },
};

export default function SimbolosBonitosPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://letrasbonits.com/simbolos/bonitos/#webpage',
        url: 'https://letrasbonits.com/simbolos/bonitos/',
        name: 'Símbolos Bonitos para Copiar y Pegar',
        description:
          'Encuentra símbolos bonitos para copiar y pegar: corazones, estrellas, flores, flechas, coronas y más. Busca, combina y copia tus favoritos.',
        isPartOf: {
          '@type': 'WebSite',
          name: 'LetrasBonitas',
          url: 'https://letrasbonits.com/',
        },
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://letrasbonits.com/simbolos/bonitos/#tool',
        name: 'Selector de Símbolos Bonitos de LetrasBonitas',
        url: 'https://letrasbonits.com/simbolos/bonitos/',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        browserRequirements:
          'Requires JavaScript for interactive copying, favorites and combination builder',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://letrasbonits.com/simbolos/bonitos/#breadcrumb',
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Símbolos Bonitos',
            item: 'https://letrasbonits.com/simbolos/bonitos/',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://letrasbonits.com/simbolos/bonitos/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Cómo copiar símbolos bonitos?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Busca el símbolo que quieras y pulsa Copiar. Cuando aparezca la confirmación, puedes pegar el carácter desde el portapapeles en otro campo de texto.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Puedo combinar varios símbolos?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Utiliza el botón + para añadir símbolos al creador de combinaciones. Allí puedes añadir también tu propio texto y copiar el resultado completo.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Los símbolos bonitos son imágenes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Los elementos incluidos en esta herramienta se copian como caracteres o secuencias de texto Unicode, no como archivos de imagen.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Necesito instalar una fuente?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No necesitas instalar una fuente para copiar un símbolo desde la página. La representación posterior sí depende de las fuentes y del software disponibles en el dispositivo de destino.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Por qué un símbolo se ve diferente en otro teléfono?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El mismo carácter puede representarse con diseños ligeramente distintos según la fuente, el sistema y la aplicación utilizados para mostrarlo.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Los símbolos funcionan en todas las redes sociales?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No se debe asumir compatibilidad universal. Cada plataforma y cada campo pueden aplicar sus propias reglas. Prueba el carácter en el lugar exacto donde quieras utilizarlo.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cuál es la diferencia entre símbolos bonitos y símbolos aesthetic?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Los símbolos bonitos forman una colección más amplia de caracteres visualmente atractivos y decorativos. Los símbolos aesthetic son una selección más orientada a estilos visuales específicos, como coquette, minimalista, cute o celestial.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Puedo decorar mi nombre?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Puedes utilizar un solo carácter, por ejemplo Luna ✦, colocar símbolos a ambos lados, como ♡ Luna ♡, o utilizar un marco como 『 Luna 』.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Qué hago si no encuentro un símbolo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Utiliza palabras relacionadas en el buscador. Por ejemplo, prueba amor además de corazón, brillo además de estrella o música para encontrar notas musicales. También puedes explorar las categorías.',
            },
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
          ♡ ★ ✿
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Símbolos', href: '/simbolos/' },
              { label: 'Símbolos Bonitos', href: '/simbolos/bonitos/' },
            ]}
          />
          <span className="hero-saas__badge">✦ BIBLIOTECA DE SÍMBOLOS BONITOS</span>
          <h1 className="hero-saas__title">
            Símbolos Bonitos para <span className="gradient-text-cyan">Copiar y Pegar</span>
          </h1>
          <p className="hero-saas__lead">
            Encuentra corazones, estrellas, flores, flechas, coronas y otros símbolos decorativos. Toca uno para copiarlo o crea tu propia combinación.
          </p>
        </div>
      </header>

      {/* ═══ INTERACTIVE BONITOS SYMBOL PICKER & BUILDER TOOL ═══ */}
      <BonitosSymbolsTool />

      {/* ═══ CONTEXTUAL ROUTING SUGGESTIONS ═══ */}
      <div className="prose-card mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 m-0">
              <span>🎯</span>
              <span>¿Buscas estilos específicos o letras con fuentes bonitas?</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1 m-0">
              Esta es nuestra biblioteca general de símbolos decorativos. Explora también nuestras colecciones especializadas:
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <Link
              href="/simbolos/aesthetic/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors"
            >
              Símbolos Aesthetic
            </Link>
            <Link
              href="/simbolos/especiales/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
            >
              Símbolos Especiales
            </Link>
            <Link
              href="/simbolos/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Biblioteca General de Símbolos
            </Link>
            <Link
              href="/letras-para-instagram/simbolos-para-instagram/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
            >
              Símbolos para Instagram
            </Link>
            <Link
              href="/conversor-de-letras/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors"
            >
              Conversor de Letras
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ COMPLETE MASTER ARTICLE CONTENT ═══ */}
      <article className="prose-section" aria-label="Guía completa sobre símbolos bonitos para copiar y pegar">
        {/* Intro */}
        <section className="prose-card">
          <h2>Símbolos Bonitos para Copiar y Pegar</h2>
          <p>
            Encontrar un corazón, una estrella, una flor o un separador bonito puede convertirse en una búsqueda interminable cuando todos los caracteres aparecen mezclados en una sola lista. Y si necesitas varios, copiarlos uno por uno hace el proceso todavía más lento.
          </p>
          <p>
            Aquí puedes explorar <strong>símbolos bonitos para copiar y pegar</strong> organizados por categorías. Busca el que necesitas, toca Copiar para llevarlo al portapapeles o utiliza <strong>+</strong> para añadir varios símbolos y crear tu propia combinación.
          </p>
        </section>

        {/* Section: Cómo usar los símbolos bonitos */}
        <section className="prose-card">
          <h2>Cómo usar los símbolos bonitos</h2>
          <p>
            Si solo necesitas un símbolo, búscalo y pulsa <strong>Copiar</strong>. Por ejemplo:
          </p>
          <div className="flex items-center gap-3 font-mono text-xl font-bold text-indigo-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span>♡</span>
            <span>★</span>
            <span>✿</span>
            <span>☾</span>
            <span>➜</span>
          </div>
          <p>
            Después puedes pegarlo en el campo de texto donde quieras utilizarlo. Si necesitas varios elementos, pulsa <strong>+</strong> junto a cada símbolo para añadirlos a <strong>Crea tu combinación</strong>. Por ejemplo:
          </p>
          <div className="font-mono text-base font-bold text-slate-900 bg-indigo-50/60 p-3 rounded-xl border border-indigo-200">
            ♡ + ✦ + Luna + ☾ puede convertirse en: ♡ ✦ Luna ☾
          </div>
          <p>
            Edita el texto hasta conseguir el resultado que quieres y utiliza <strong>Copiar combinación</strong> para copiarlo completo.
          </p>
        </section>

        {/* Section: Tipos de símbolos bonitos */}
        <section className="prose-card">
          <h2>Tipos de símbolos bonitos</h2>
          <p>
            Los símbolos decorativos pueden transmitir estilos muy diferentes. Utiliza las categorías de la herramienta para encontrar opciones relacionadas sin tener que recorrer toda la colección:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Corazones y detalles románticos
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0 mb-2">
                Los corazones son útiles para nombres, dedicatorias, bios y pequeños detalles decorativos (♡, ♥, ❤, ❥, ❣, ღ). También puedes colocarlos alrededor de una palabra:
              </p>
              <p className="text-xs font-mono font-bold text-indigo-700 bg-white p-2 rounded-lg border border-slate-200 m-0">
                ♡ Luna ♡ · Luna ♡
              </p>
              <p className="text-xs text-slate-500 mt-2 m-0">
                Una decoración sencilla suele mantener mejor la legibilidad.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Estrellas, brillos y lunas
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0 mb-2">
                Las estrellas y destellos funcionan como pequeños acentos visuales (★, ☆, ✦, ✧, ⋆, ✩, ☾, ☽). Por ejemplo:
              </p>
              <p className="text-xs font-mono font-bold text-indigo-700 bg-white p-2 rounded-lg border border-slate-200 m-0">
                ✦ Nova · Luna ☆ · ☾ Luna ⋆
              </p>
              <p className="text-xs text-slate-500 mt-2 m-0">
                Estos caracteres sirven tanto para destacar una palabra como para separar pequeñas partes de un texto.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Flores y naturaleza
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0 mb-2">
                Para una apariencia delicada puedes probar flores y elementos inspirados en la naturaleza (✿, ❀, ❁, ⚘, ☘). Puedes utilizarlos como adorno o como viñetas:
              </p>
              <p className="text-xs font-mono font-bold text-indigo-700 bg-white p-2 rounded-lg border border-slate-200 m-0">
                ✿ Sofía ✿ · ✿ música ✿ viajes ✿ fotografía
              </p>
              <p className="text-xs text-slate-500 mt-2 m-0">
                En este segundo caso, el símbolo también ayuda a organizar visualmente el contenido.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Flechas y símbolos útiles
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0 mb-2">
                Las flechas pueden decorar, pero también cumplen una función práctica (→, ←, ↑, ↓, ➜, ➤). Úsalas para secuencias como música → diseño → fotografía, o caracteres como ✓, ✔, ✗, ∞, ©, ®, ™.
              </p>
              <p className="text-xs text-slate-500 m-0">
                No todos son decorativos en su significado original. Elige cada carácter según el contexto en el que vas a utilizarlo.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Coronas, marcos y separadores
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0 mb-2">
                Las coronas funcionan bien en nombres y nicks (♔, ♕, ♚, ♛). Los marcos rodean palabras (『 nombre 』, 「 nombre 」, ꒰ nombre ꒱) y los separadores dividen secciones:
              </p>
              <p className="text-xs font-mono font-bold text-indigo-700 bg-white p-2 rounded-lg border border-slate-200 m-0">
                ──── ♡ ──── · ✦ ─── ✦ · ⋆ · ⋆ · ⋆
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                Música y otros caracteres decorativos
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0 mb-2">
                Si el contenido está relacionado con música o audio, prueba ♪, ♫, ♬, ♩. También puedes combinarlos:
              </p>
              <p className="text-xs font-mono font-bold text-indigo-700 bg-white p-2 rounded-lg border border-slate-200 m-0">
                ♪ Luna ♫
              </p>
              <p className="text-xs text-slate-500 mt-2 m-0">
                Utiliza el buscador si sabes qué idea quieres representar pero no recuerdas el símbolo exacto.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Combinaciones bonitas para nombres y textos */}
        <section className="prose-card">
          <h2>Combinaciones bonitas para nombres y textos</h2>
          <p>
            No siempre necesitas construir una decoración desde cero. Una estructura sencilla puede adaptarse rápidamente cambiando el texto del centro:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">Para nombres</h3>
              <p className="text-xs text-slate-500 m-0 mb-2">Sustituye nombre por tu texto:</p>
              <div className="space-y-1 font-mono text-xs font-bold text-indigo-800 bg-white p-2 rounded-lg border border-slate-200">
                <p className="m-0">♡ nombre ♡</p>
                <p className="m-0">✦ nombre ✦</p>
                <p className="m-0">★ nombre ★</p>
                <p className="m-0">✿ nombre ✿</p>
                <p className="m-0">☾ nombre ☽</p>
                <p className="m-0">『 nombre 』</p>
                <p className="m-0">♔ nombre ♔</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">Para bios</h3>
              <p className="text-xs text-slate-500 m-0 mb-2">Viñetas para tu perfil:</p>
              <div className="space-y-1 font-mono text-xs font-bold text-indigo-800 bg-white p-2 rounded-lg border border-slate-200">
                <p className="m-0">♡ sobre mí</p>
                <p className="m-0">♪ música</p>
                <p className="m-0">✿ naturaleza</p>
                <p className="m-0">✦ proyectos</p>
                <p className="m-0">──── ✦ ────</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">Para separar texto</h3>
              <p className="text-xs text-slate-500 m-0 mb-2">Divisores discretos:</p>
              <div className="space-y-1 font-mono text-xs font-bold text-indigo-800 bg-white p-2 rounded-lg border border-slate-200">
                <p className="m-0">• • •</p>
                <p className="m-0">⋆ ⋆ ⋆</p>
                <p className="m-0">━ ♡ ━</p>
                <p className="m-0">✦ ─── ✦</p>
                <p className="m-0">♡ · ♡ · ♡</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Cómo decorar un nombre sin hacerlo difícil de leer */}
        <section className="prose-card">
          <h2>Cómo decorar un nombre sin hacerlo difícil de leer</h2>
          <p>
            Empieza siempre con el texto original: <code>Luna</code>. Después añade un solo elemento: <code>Luna ✦</code>. Si quieres más simetría: <code>✦ Luna ✦</code>. También puedes probar un marco: <code>『 Luna 』</code>.
          </p>
          <p>
            Compara las opciones antes de añadir más elementos. Una composición como <code>✦ Luna ♡</code> sigue siendo fácil de identificar. En cambio, añadir muchos caracteres diferentes puede hacer que el nombre sea más difícil de leer, copiar o reconocer. No existe una cantidad universal de símbolos que debas utilizar: depende del texto, el espacio disponible y el lugar donde vas a pegarlo.
          </p>
        </section>

        {/* Section: Símbolos bonitos y símbolos aesthetic: cuál es la diferencia */}
        <section className="prose-card">
          <h2>Símbolos bonitos y símbolos aesthetic: cuál es la diferencia</h2>
          <p>
            Las dos ideas están relacionadas, pero no tienen exactamente el mismo alcance:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-700">
            <li>
              <strong>Símbolos bonitos</strong> es una categoría amplia. Puede incluir corazones, estrellas, flores, flechas, coronas, notas musicales, separadores, marcos, números decorados y otros caracteres visualmente interesantes.
            </li>
            <li>
              <strong>Símbolos aesthetic</strong> suele referirse a una selección más orientada a estilos visuales concretos, por ejemplo composiciones minimalistas, coquette, cute, soft o celestiales.
            </li>
          </ul>
          <p>
            Por ejemplo, <code>✓</code> puede ser un símbolo útil y visualmente limpio, pero no necesariamente forma parte de una composición aesthetic. En cambio, <code>୨୧ ♡ ⋆</code> se utiliza con frecuencia como decoración asociada a estilos aesthetic.
          </p>
          <p>
            Si quieres explorar principalmente combinaciones suaves, coquette o celestiales, puedes visitar nuestra colección especializada de <Link href="/simbolos/aesthetic/" className="text-indigo-600 hover:underline font-semibold">símbolos aesthetic</Link>. Si buscas una biblioteca más amplia de caracteres bonitos y decorativos, esta página es el mejor punto de partida.
          </p>
        </section>

        {/* Section: Qué son estos símbolos y por qué puedes copiarlos */}
        <section className="prose-card">
          <h2>Qué son estos símbolos y por qué puedes copiarlos</h2>
          <p>
            Muchos de los elementos de esta colección son caracteres definidos por Unicode. Eso significa que no estás copiando una captura de pantalla ni descargando una imagen: cuando copias <code>★</code>, el portapapeles recibe un carácter de texto plano. Lo mismo ocurre con caracteres como <code>♡</code>, <code>→</code>, <code>♪</code> o <code>∞</code>.
          </p>
          <p>
            Por eso puedes pegarlos dentro de muchos campos que admiten texto. Sin embargo, que un carácter forme parte de Unicode no significa que todos los servicios tengan que permitirlo en todos sus campos. Una aplicación puede aceptar un símbolo en una descripción y restringirlo en un identificador o nombre de usuario.
          </p>
        </section>

        {/* Section: Símbolo y emoji no significan exactamente lo mismo */}
        <section className="prose-card">
          <h2>Símbolo y emoji no significan exactamente lo mismo</h2>
          <p>
            En conversaciones cotidianas es normal mezclar términos como símbolo, icono y emoji, pero técnicamente pueden representar cosas distintas:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-700">
            <li><code>★</code> es un carácter de estrella que normalmente puede utilizarse como texto plano.</li>
            <li><code>⭐</code> tiene presentación de emoji pictográfico a color.</li>
          </ul>
          <p>
            Algunos caracteres también pueden admitir diferentes formas de presentación. Por eso esta colección no debería describirse simplemente como una lista de emojis: incluye distintos tipos de caracteres y signos que puedes copiar como texto universal.
          </p>
        </section>

        {/* Section: Por qué algunos símbolos cambian al pegarlos */}
        <section className="prose-card">
          <h2>Por qué algunos símbolos cambian al pegarlos</h2>
          <p>
            Unicode identifica los caracteres, pero la apariencia final depende también del software y de las fuentes utilizadas para representarlos. Por eso <code>★</code> puede verse ligeramente diferente entre dos dispositivos aunque siga siendo el mismo carácter.
          </p>
          <p>
            Con caracteres menos comunes, un dispositivo puede incluso no disponer de un glifo adecuado para mostrarlos. Esto es importante si vas a utilizar una decoración en un nombre o perfil que otras personas necesitan reconocer fácilmente. Prueba siempre la combinación en el lugar donde realmente quieras utilizarla.
          </p>
        </section>

        {/* Section: Qué hacer si un símbolo aparece como un cuadro */}
        <section className="prose-card">
          <h2>Qué hacer si un símbolo aparece como un cuadro</h2>
          <p>
            Un rectángulo o cuadro vacío suele indicar que el entorno no puede representar correctamente ese carácter con las fuentes disponibles. Si ocurre, prueba estas opciones:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-700">
            <li>Comprueba el carácter en otro navegador, dispositivo o aplicación.</li>
            <li>Sustitúyelo por un símbolo parecido más convencional.</li>
            <li>Utiliza caracteres más comunes (como <code>♡</code>, <code>★</code>, <code>☆</code>, <code>✦</code> o <code>♪</code>) cuando necesites una visualización consistente.</li>
            <li>Mantén una versión sencilla del texto original sin adornos.</li>
          </ul>
        </section>

        {/* Section: Dónde utilizar símbolos bonitos */}
        <section className="prose-card">
          <h2>Dónde utilizar símbolos bonitos</h2>
          <p>
            Puedes probarlos en campos que acepten texto, por ejemplo:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-2 text-xs font-semibold text-slate-700">
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Nombres visibles</span>
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Biografías (bio)</span>
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Captions de fotos</span>
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Mensajes y chats</span>
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Estados de WhatsApp</span>
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Descripciones de perfil</span>
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Listas y notas</span>
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Nicks de juegos</span>
          </div>
          <p>
            La compatibilidad exacta depende del servicio y del campo concreto. Por eso no es correcto prometer que todos los símbolos funcionan en todos los nombres de usuario, juegos o redes sociales. Si el texto es importante, pégalo primero y comprueba cómo se muestra antes de guardar el cambio.
          </p>
        </section>

        {/* Section: Preguntas frecuentes */}
        <section className="prose-card">
          <h2>Preguntas frecuentes sobre símbolos bonitos</h2>

          <div className="space-y-3 my-2">
            {[
              {
                q: '¿Cómo copiar símbolos bonitos?',
                a: 'Busca el símbolo que quieras y pulsa Copiar. Cuando aparezca la confirmación, puedes pegar el carácter desde el portapapeles en otro campo de texto.',
              },
              {
                q: '¿Puedo combinar varios símbolos?',
                a: 'Sí. Utiliza el botón + para añadir símbolos al creador de combinaciones. Allí puedes añadir también tu propio texto y copiar el resultado completo.',
              },
              {
                q: '¿Los símbolos bonitos son imágenes?',
                a: 'Los elementos incluidos en esta herramienta se copian como caracteres o secuencias de texto Unicode, no como archivos de imagen.',
              },
              {
                q: '¿Necesito instalar una fuente?',
                a: 'No necesitas instalar una fuente para copiar un símbolo desde la página. La representación posterior sí depende de las fuentes y del software disponibles en el dispositivo de destino.',
              },
              {
                q: '¿Por qué un símbolo se ve diferente en otro teléfono?',
                a: 'El mismo carácter puede representarse con diseños ligeramente distintos según la fuente, el sistema y la aplicación utilizados para mostrarlo.',
              },
              {
                q: '¿Los símbolos funcionan en todas las redes sociales?',
                a: 'No se debe asumir compatibilidad universal. Cada plataforma y cada campo pueden aplicar sus propias reglas. Prueba el carácter en el lugar exacto donde quieras utilizarlo.',
              },
              {
                q: '¿Cuál es la diferencia entre símbolos bonitos y símbolos aesthetic?',
                a: 'Los símbolos bonitos forman una colección más amplia de caracteres visualmente atractivos y decorativos. Los símbolos aesthetic son una selección más orientada a estilos visuales específicos, como coquette, minimalista, cute o celestial.',
              },
              {
                q: '¿Puedo decorar mi nombre?',
                a: 'Sí. Puedes utilizar un solo carácter, por ejemplo Luna ✦, colocar símbolos a ambos lados, como ♡ Luna ♡, o utilizar un marco como 『 Luna 』.',
              },
              {
                q: '¿Qué hago si no encuentro un símbolo?',
                a: 'Utiliza palabras relacionadas en el buscador. Por ejemplo, prueba amor además de corazón, brillo además de estrella o música para encontrar notas musicales. También puedes explorar las categorías.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm m-0 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">?</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-xs pl-7 m-0 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Encuentra tu símbolo favorito */}
        <section className="prose-card">
          <h2>Encuentra tu símbolo favorito</h2>
          <p>
            Si ya sabes lo que buscas, utiliza el buscador para encontrarlo rápidamente. Si todavía estás explorando, abre una categoría y compara corazones, estrellas, flores, flechas, coronas, marcos y otros caracteres antes de copiar.
          </p>
          <p>
            Para decorar un nombre o texto completo, empieza con pocos elementos y añade más solo cuando mejoren el resultado. Una combinación bonita también debe seguir siendo fácil de leer.
          </p>
        </section>
      </article>
    </main>
  );
}
