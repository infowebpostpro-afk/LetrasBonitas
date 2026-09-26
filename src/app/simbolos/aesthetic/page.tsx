import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AestheticSymbolsTool } from '@/components/font-generator/AestheticSymbolsTool';

export const metadata: Metadata = {
  title: 'Símbolos Aesthetic para Copiar y Pegar | LetrasBonitas',
  description:
    'Explora símbolos aesthetic para copiar y pegar: corazones, estrellas, brillos, flores, lazos y combos. Busca, combina y copia tus favoritos.',
  alternates: {
    canonical: 'https://letrasbonits.com/simbolos/aesthetic/',
  },
  openGraph: {
    title: 'Símbolos Aesthetic para Copiar y Pegar | LetrasBonitas',
    description:
      'Busca símbolos aesthetic, copia tus favoritos o combina corazones, estrellas, brillos, flores y lazos en segundos.',
    url: 'https://letrasbonits.com/simbolos/aesthetic/',
    siteName: 'LetrasBonitas',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Símbolos Aesthetic para Copiar y Pegar | LetrasBonitas',
    description:
      'Busca símbolos aesthetic, copia tus favoritos o combina corazones, estrellas, brillos, flores y lazos en segundos.',
  },
};

export default function SimbolosAestheticPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://letrasbonits.com/simbolos/aesthetic/#webpage',
        url: 'https://letrasbonits.com/simbolos/aesthetic/',
        name: 'Símbolos Aesthetic para Copiar y Pegar',
        description:
          'Explora símbolos aesthetic para copiar y pegar: corazones, estrellas, brillos, flores, lazos y combos. Busca, combina y copia tus favoritos.',
        isPartOf: {
          '@type': 'WebSite',
          name: 'LetrasBonitas',
          url: 'https://letrasbonits.com/',
        },
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://letrasbonits.com/simbolos/aesthetic/#tool',
        name: 'Selector de Símbolos Aesthetic de LetrasBonitas',
        url: 'https://letrasbonits.com/simbolos/aesthetic/',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        browserRequirements:
          'Requires JavaScript for interactive copying, favorites and combination builder',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://letrasbonits.com/simbolos/aesthetic/#breadcrumb',
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
            name: 'Símbolos Aesthetic',
            item: 'https://letrasbonits.com/simbolos/aesthetic/',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://letrasbonits.com/simbolos/aesthetic/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Cómo copiar un símbolo aesthetic?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Busca el símbolo que quieras y pulsa Copiar. Cuando aparezca la confirmación Copiado, puedes pegarlo en otro campo de texto.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Puedo combinar varios símbolos?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Pulsa el botón + junto a cada símbolo para añadirlo a Mi combinación. Puedes editar la composición, escribir tu propio texto y copiar todo junto al final.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Qué significa aesthetic?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'En este contexto, aesthetic se utiliza de forma informal para describir una apariencia visual cuidada o asociada a determinados estilos. No representa una categoría técnica de Unicode.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Los símbolos son imágenes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Los elementos de esta colección se copian como texto Unicode, no como archivos de imagen. Su representación visual depende del entorno y las fuentes disponibles.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Necesito instalar una fuente?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No necesitas instalar una fuente para copiar el carácter desde LetrasBonitas. Sin embargo, la forma en que se muestra después depende de las fuentes del dispositivo de destino.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Por qué un símbolo cambia cuando lo pego?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La representación visual puede variar entre fuentes, dispositivos, sistemas y aplicaciones. Algunos caracteres también admiten distintas presentaciones de texto o emoji.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Funcionan los símbolos aesthetic en todos los nombres de usuario?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No se debe asumir. Cada plataforma establece sus propias reglas para sus campos de nombre, usuario, bio y otros textos. Prueba el símbolo directamente antes de guardar un cambio importante.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cuál es la diferencia entre un símbolo y un combo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Un símbolo puede ser un elemento individual como un corazón o una estrella. Un combo reúne varios elementos para que puedas copiar una composición completa.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Puedo añadir mi nombre entre los símbolos?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Añade los símbolos a Mi combinación y escribe tu nombre o texto entre ellos para armar tu decoración personalizada.',
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
          ♡ ✦ ୨୧
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Símbolos', href: '/simbolos/' },
              { label: 'Símbolos Aesthetic', href: '/simbolos/aesthetic/' },
            ]}
          />
          <span className="hero-saas__badge">✦ BIBLIOTECA DE SÍMBOLOS AESTHETIC</span>
          <h1 className="hero-saas__title">
            Símbolos Aesthetic para <span className="gradient-text-cyan">Copiar y Pegar</span>
          </h1>
          <p className="hero-saas__lead">
            Encuentra corazones, estrellas, brillos, flores, lazos y otros símbolos. Toca uno para copiarlo o combínalos para crear tu propio estilo.
          </p>
        </div>
      </header>

      {/* ═══ INTERACTIVE AESTHETIC PICKER & COMBINATION BUILDER TOOL ═══ */}
      <AestheticSymbolsTool />

      {/* ═══ CONTEXTUAL ROUTING SUGGESTIONS ═══ */}
      <div className="prose-card mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 m-0">
              <span>🎯</span>
              <span>¿Buscas símbolos adaptados a otra plataforma o letras con estilo?</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1 m-0">
              Esta página está especializada en símbolos decorativos aesthetic. Explora nuestras colecciones complementarias:
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
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
              href="/nombres-para-free-fire/simbolos/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors"
            >
              Símbolos para Free Fire
            </Link>
            <Link
              href="/conversor-de-letras/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors"
            >
              Conversor de Letras
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ COMPLETE MASTER ARTICLE CONTENT ═══ */}
      <article className="prose-section" aria-label="Guía completa sobre símbolos aesthetic para copiar y pegar">
        {/* Intro */}
        <section className="prose-card">
          <h2>Símbolos Aesthetic para Copiar y Pegar</h2>
          <p>
            Encontrar un símbolo bonito parece sencillo hasta que tienes que recorrer listas enormes de caracteres sin saber dónde está el corazón, la estrella, el lazo o el separador que buscas. Copiar varios elementos por separado también se vuelve incómodo cuando quieres decorar un nombre o preparar una bio.
          </p>
          <p>
            Aquí puedes buscar <strong>símbolos aesthetic para copiar y pegar</strong>, explorar categorías y copiar cualquier opción con un toque. Si quieres crear algo propio, añade varios símbolos a <strong>Mi combinación</strong>, escribe tu texto entre ellos y copia el resultado completo.
          </p>
        </section>

        {/* Section: Cómo copiar y combinar */}
        <section className="prose-card">
          <h2>Cómo copiar y combinar símbolos aesthetic</h2>
          <p>
            La forma más rápida es tocar <strong>Copiar</strong> junto al símbolo que quieras. El carácter se guarda en el portapapeles para que puedas pegarlo en otro campo de texto.
          </p>
          <p>
            Si necesitas más de un símbolo, utiliza el botón <strong>+</strong>.
          </p>
          <p>Por ejemplo, puedes añadir:</p>
          <div className="flex items-center gap-2 font-mono text-base font-bold text-indigo-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span>୨୧</span>
            <span className="text-slate-400 text-xs font-normal">luego</span>
            <span>♡</span>
            <span className="text-slate-400 text-xs font-normal">y finalmente</span>
            <span>✦</span>
          </div>
          <p>
            En <strong>Mi combinación</strong> puedes ordenar o editar el resultado y añadir tu propio texto:
          </p>
          <div className="font-mono text-base font-bold text-slate-900 bg-indigo-50/60 p-3 rounded-xl border border-indigo-200">
            ୨୧ Luna ♡ ✦
          </div>
          <p>
            Cuando esté listo, pulsa <strong>Copiar combinación</strong>. También puedes utilizar el buscador si ya sabes qué quieres. Prueba palabras como corazón, estrella, luna, flor, lazo, brillo o separador.
          </p>
        </section>

        {/* Section: Tipos de símbolos aesthetic */}
        <section className="prose-card">
          <h2>Tipos de símbolos aesthetic</h2>
          <p>
            No existe un único tipo de símbolo aesthetic. El término se utiliza de forma informal para agrupar muchos caracteres y combinaciones decorativas que producen diferentes estilos visuales.
          </p>
          <p>
            En lugar de recorrer una lista completa, utiliza las categorías de la herramienta para reducir las opciones:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Corazones, lazos y detalles cute
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0 mb-2">
                Los corazones y lazos funcionan bien cuando buscas una apariencia suave, romántica, cute o coquette (ej. ♡, ♥, ❥, ღ, ୨୧, 𐙚). También puedes utilizarlos como marco:
              </p>
              <p className="text-xs font-mono font-bold text-indigo-700 bg-white p-2 rounded-lg border border-slate-200 m-0">
                ♡ Luna ♡ · ୨୧ Sofía ୨୧ · 𐙚 nombre 𐙚
              </p>
              <p className="text-xs text-slate-500 mt-2 m-0">
                Un símbolo sencillo suele dejar el texto más legible que una cadena muy larga de adornos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Estrellas, brillos y lunas
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0 mb-2">
                Las estrellas y destellos son algunos de los elementos más versátiles (ej. ✦, ✧, ★, ☆, ⋆, ⊹, ☾, ☽). Puedes colocarlos antes o después de una palabra:
              </p>
              <p className="text-xs font-mono font-bold text-indigo-700 bg-white p-2 rounded-lg border border-slate-200 m-0">
                ✦ Luna · Nova ✧ · ⋆ nombre ⋆ · ☾ noche ☽
              </p>
              <p className="text-xs text-slate-500 mt-2 m-0">
                Las lunas combinan especialmente bien con composiciones celestiales, nocturnas o minimalistas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Flores y naturaleza
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0 mb-2">
                Para un estilo floral o suave puedes explorar ✿, ❀, ❁, ⚘, ☘. Una flor también puede funcionar como viñeta:
              </p>
              <p className="text-xs font-mono font-bold text-indigo-700 bg-white p-2 rounded-lg border border-slate-200 m-0">
                ✿ música · ✿ fotografía · ✿ viajes
              </p>
              <p className="text-xs text-slate-500 mt-2 m-0">
                Así el símbolo no solamente decora, también ayuda a separar visualmente la información.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                Separadores, flechas y marcos
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0 mb-2">
                Los separadores son útiles cuando quieres estructurar varias partes de una bio, mensaje o descripción:
              </p>
              <p className="text-xs font-mono font-bold text-indigo-700 bg-white p-2 rounded-lg border border-slate-200 m-0">
                ──── ♡ ──── · ✦ ─── ✦ · 「 nombre 」 · ꒰ nombre ꒱
              </p>
              <p className="text-xs text-slate-500 mt-2 m-0">
                Las flechas pueden conectar ideas (música → diseño → viajes) y los marcos permiten rodear una palabra destacada.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Combinaciones aesthetic para copiar */}
        <section className="prose-card">
          <h2>Combinaciones aesthetic para copiar</h2>
          <p>
            Un símbolo individual es útil cuando solo necesitas un detalle. Un combo ahorra tiempo cuando quieres una composición completa:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">Para nombres</h3>
              <p className="text-xs text-slate-500 m-0 mb-2">Sustituye nombre por tu propio texto antes de copiar:</p>
              <div className="space-y-1 font-mono text-xs font-bold text-indigo-800 bg-white p-2 rounded-lg border border-slate-200">
                <p className="m-0">♡ nombre ♡</p>
                <p className="m-0">✦ nombre ✦</p>
                <p className="m-0">୨୧ nombre ୨୧</p>
                <p className="m-0">☾ nombre ☽</p>
                <p className="m-0">『 nombre 』 · ꒰ nombre ꒱</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">Para bios</h3>
              <p className="text-xs text-slate-500 m-0 mb-2">Usa pequeños elementos como viñetas en tu perfil:</p>
              <div className="space-y-1 font-mono text-xs font-bold text-indigo-800 bg-white p-2 rounded-lg border border-slate-200">
                <p className="m-0">✦ sobre mí</p>
                <p className="m-0">♡ música</p>
                <p className="m-0">☾ sueños</p>
                <p className="m-0">──── ✦ ────</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">Para separar texto</h3>
              <p className="text-xs text-slate-500 m-0 mb-2">Opciones limpias cuando un campo no tiene formato:</p>
              <div className="space-y-1 font-mono text-xs font-bold text-indigo-800 bg-white p-2 rounded-lg border border-slate-200">
                <p className="m-0">• • • · ⋆ ⋆ ⋆</p>
                <p className="m-0">✦ ─── ✦ · ♡ ─── ♡</p>
                <p className="m-0">⋆｡°✩ · ──── ♡ ────</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">Minimalistas y coquette</h3>
              <p className="text-xs text-slate-500 m-0 mb-2">Elegancia discreta y estética coquette dulce:</p>
              <div className="space-y-1 font-mono text-xs font-bold text-indigo-800 bg-white p-2 rounded-lg border border-slate-200">
                <p className="m-0">· ♡ · · ˚ ✦ ˚ · ⋆ ☾ ⋆</p>
                <p className="m-0">୨୧ nombre ୨୧</p>
                <p className="m-0">𐙚 ♡ 𐙚 · ୨୧ ⋆ ♡ ⋆ ୨୧</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Símbolo individual o combo */}
        <section className="prose-card">
          <h2>Símbolo individual o combo: cuál te conviene</h2>
          <p>
            Elige un <strong>símbolo individual</strong> cuando quieres añadir un detalle concreto a un texto que ya tienes escrito. Por ejemplo: <code>Luna ✦</code>.
          </p>
          <p>
            Elige un <strong>combo</strong> cuando necesitas una decoración completa: <code>୨୧ Luna ୨୧</code>.
          </p>
          <p>
            El generador permite trabajar de las dos formas: el botón <strong>Copiar</strong> sirve para llevarte inmediatamente un símbolo, mientras que el botón <strong>+</strong> sirve para construir una combinación sin abandonar la página. Esto evita tener que copiar, cambiar de aplicación, pegar, regresar y repetir el proceso varias veces.
          </p>
        </section>

        {/* Section: Cómo crear combinación sin sobrecargar */}
        <section className="prose-card">
          <h2>Cómo crear una combinación aesthetic sin sobrecargar el texto</h2>
          <p>
            Más símbolos no significan automáticamente un resultado más bonito. Sigue este proceso sencillo:
          </p>
          <ol className="list-decimal pl-6 space-y-1 text-slate-700">
            <li>1. Empieza con una palabra simple: <code>Luna</code>.</li>
            <li>2. Añade un elemento sutil: <code>Luna ✦</code>.</li>
            <li>3. Después prueba un marco sencillo: <code>♡ Luna ✦</code>.</li>
          </ol>
          <p>
            Si el resultado ya comunica el estilo que buscas, no necesitas seguir añadiendo caracteres. También conviene mantener una familia visual (por ejemplo, <code>☾ Luna ⋆</code> mantiene una idea celestial coherente). En cambio, mezclar corazones, cruces, flores, flechas, estrellas y varios marcos al mismo tiempo puede hacer que el texto pierda claridad.
          </p>
        </section>

        {/* Section: Qué son realmente estos símbolos */}
        <section className="prose-card">
          <h2>Qué son realmente estos símbolos</h2>
          <p>
            Muchos de los signos que puedes copiar en esta página son <strong>caracteres Unicode</strong>. Unicode asigna códigos estandarizados a caracteres utilizados por sistemas informáticos de todo el mundo.
          </p>
          <p>
            Dentro del estándar existen diferentes bloques que incluyen símbolos, formas geométricas, flechas, dingbats y signos musicales. Por ejemplo:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-700">
            <li><code>★</code> es un carácter Unicode estándar (U+2605).</li>
            <li><code>♡</code> es un carácter Unicode de Miscellaneous Symbols (U+2661).</li>
            <li><code>☾</code> es un carácter de cuarto menguante (U+263E).</li>
          </ul>
          <p>
            Esto es completamente diferente a descargar una imagen o instalar una fuente tipográfica nueva en tu ordenador: al pulsar Copiar, estás copiando <strong>texto plano universal</strong>.
          </p>
        </section>

        {/* Section: Símbolos aesthetic y emojis no siempre son lo mismo */}
        <section className="prose-card">
          <h2>Símbolos aesthetic y emojis no siempre son lo mismo</h2>
          <p>
            Aunque en conversaciones cotidianas se mezclen palabras como símbolo, icono y emoji, técnicamente no siempre representan lo mismo:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-700">
            <li>Un símbolo como <code>☆</code> se muestra como un carácter de texto tradicional.</li>
            <li>Un emoji como <code>🌟</code> normalmente recibe una representación pictográfica colorida.</li>
          </ul>
          <p>
            Unicode define secuencias de presentación específicas para determinados caracteres. Por eso, dos cadenas que parecen representar la misma idea pueden mostrarse de manera diferente dependiendo de los selectores incluidos en el sistema operativo. Para una estética limpia y minimalista, suele ser más práctico comenzar con los símbolos de texto monocromáticos que aparecen en esta colección.
          </p>
        </section>

        {/* Section: Por qué un símbolo puede verse diferente */}
        <section className="prose-card">
          <h2>Por qué un símbolo puede verse diferente al pegarlo</h2>
          <p>
            Unicode define el código del carácter, pero la apariencia final depende de cómo lo representa el dispositivo, sistema operativo (iOS, Android, Windows, macOS), navegador, aplicación y catálogo tipográfico instalado.
          </p>
          <p>
            Por eso un corazón, una estrella o un signo decorativo puede verse ligeramente diferente después de pegarlo en otra aplicación. También puede ocurrir que un campo permita texto normal pero restrinja determinados caracteres especiales. Antes de utilizar una combinación como nombre permanente en un perfil importante, pruébala directamente en el lugar donde quieras guardarla.
          </p>
        </section>

        {/* Section: Qué hacer si aparece un cuadro vacío */}
        <section className="prose-card">
          <h2>Qué hacer si aparece un cuadro vacío</h2>
          <p>
            A veces un carácter aparece como un rectángulo o recuadro vacío (glifo no encontrado). Esto significa que el entorno que intenta mostrarlo no dispone de la fuente adecuada para representar ese carácter concreto.
          </p>
          <p>Si esto te ocurre, aplica estas recomendaciones prácticas:</p>
          <ul className="list-disc pl-6 space-y-1 text-slate-700">
            <li><strong>Prueba en otro dispositivo:</strong> comprueba si en el móvil de destino se visualiza bien.</li>
            <li><strong>Sustitúyelo por una alternativa clásica:</strong> elige símbolos más universales como <code>✦</code>, <code>♡</code>, <code>★</code>, <code>☆</code> o <code>☾</code> en lugar de glifos sumamente inusuales.</li>
            <li><strong>Conserva una versión sencilla:</strong> ten siempre a mano tu nombre en texto plano sin adornos por si la plataforma no admite caracteres decorativos.</li>
          </ul>
        </section>

        {/* Section: Dónde puedes usar símbolos aesthetic */}
        <section className="prose-card">
          <h2>Dónde puedes usar símbolos aesthetic</h2>
          <p>
            Puedes probar estos símbolos en cualquier campo que permita introducir texto, pero cada plataforma decide qué caracteres acepta. Los usos más comunes incluyen:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-2 text-xs font-semibold text-slate-700">
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Nombres visibles</span>
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Biografías (bio)</span>
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Descripciones</span>
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Captions de fotos</span>
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Estados de WhatsApp</span>
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Mensajes de chat</span>
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Títulos de notas</span>
            <span className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">Nicks de juegos</span>
          </div>
          <p>
            Recuerda que no se debe confundir un nombre visible con un nombre de usuario (handle o ID). Una red social puede permitir muchos adornos en tu nombre visible y restringir estrictamente los símbolos en tu nombre de usuario.
          </p>
        </section>

        {/* Section: Símbolos aesthetic y letras aesthetic: no son la misma herramienta */}
        <section className="prose-card">
          <h2>Símbolos aesthetic y letras aesthetic: no son la misma herramienta</h2>
          <p>
            Los <strong>símbolos aesthetic</strong> son caracteres como <code>♡</code>, <code>✦</code>, <code>☾</code> o <code>❀</code> que puedes colocar al lado de tus palabras.
          </p>
          <p>
            En cambio, las <strong>letras aesthetic</strong> transforman las letras del alfabeto de una palabra utilizando otros alfabetos tipográficos (como cursivas, góticas o negritas).
          </p>
          <p>
            Por ejemplo, si buscas decorar la palabra <em>Luna</em> con símbolos obtendrás <code>♡ Luna ✦</code>, mientras que si buscas transformar las letras obtendrás <code>𝓛𝓾𝓷𝓪</code> o <code>𝐿𝓊𝓃𝒶</code>. Separar estas dos funciones mantiene cada herramienta rápida y sencilla de usar. Si deseas transformar las letras de tus palabras, puedes utilizar nuestro <Link href="/conversor-de-letras/" className="text-indigo-600 hover:underline font-semibold">conversor de letras</Link>.
          </p>
        </section>

        {/* Section: Preguntas frecuentes */}
        <section className="prose-card">
          <h2>Preguntas frecuentes sobre símbolos aesthetic</h2>

          <div className="space-y-3 my-2">
            {[
              {
                q: '¿Cómo copiar un símbolo aesthetic?',
                a: 'Busca el símbolo que quieras y pulsa Copiar. Cuando aparezca la confirmación Copiado, puedes pegarlo en otro campo de texto.',
              },
              {
                q: '¿Puedo combinar varios símbolos?',
                a: 'Sí. Pulsa el botón + junto a cada símbolo para añadirlo a Mi combinación. Puedes editar la composición, escribir tu propio texto y copiar todo junto al final.',
              },
              {
                q: '¿Qué significa aesthetic?',
                a: 'En este contexto, aesthetic se utiliza de forma informal para describir una apariencia visual cuidada o asociada a determinados estilos. No representa una categoría técnica de Unicode. Por eso una colección aesthetic puede reunir corazones, estrellas, flores, lunas, lazos y otros caracteres procedentes de diferentes partes del estándar.',
              },
              {
                q: '¿Los símbolos son imágenes?',
                a: 'Los elementos de esta colección se copian como texto Unicode, no como archivos de imagen. Su representación gráfica depende del dispositivo, la fuente y el entorno donde los pegues.',
              },
              {
                q: '¿Necesito instalar una fuente?',
                a: 'No necesitas instalar ninguna fuente para copiar el carácter desde LetrasBonitas. Sin embargo, la forma en que se muestra después depende del soporte tipográfico del dispositivo o app de destino.',
              },
              {
                q: '¿Por qué un símbolo cambia cuando lo pego?',
                a: 'La representación visual puede variar entre fuentes, dispositivos, sistemas y aplicaciones. Algunos caracteres también admiten distintas presentaciones de texto o emoji según el sistema operativo.',
              },
              {
                q: '¿Funcionan los símbolos aesthetic en todos los nombres de usuario?',
                a: 'No se debe asumir. Cada plataforma establece sus propias reglas para sus campos de nombre, usuario, bio y otros textos. Prueba el símbolo directamente antes de guardar un cambio importante.',
              },
              {
                q: '¿Cuál es la diferencia entre un símbolo y un combo?',
                a: 'Un símbolo puede ser un elemento individual como un corazón (♡). Un combo reúne varios elementos (por ejemplo ୨୧ ♡ ୨୧) para que puedas copiar una composición completa.',
              },
              {
                q: '¿Puedo añadir mi nombre entre los símbolos?',
                a: 'Sí. Añade los símbolos a Mi combinación y escribe tu nombre o texto entre ellos. Por ejemplo: ✦ Luna ♡.',
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

        {/* Section: Encuentra y combina tus símbolos favoritos */}
        <section className="prose-card">
          <h2>Encuentra y combina tus símbolos favoritos</h2>
          <p>
            Si solo necesitas un corazón, una estrella o un brillo, utiliza el buscador y copia el resultado directamente con un clic. Cuando quieras algo más personal, añade varios elementos a <strong>Mi combinación</strong> y construye la composición alrededor de tu propio texto.
          </p>
          <p>
            Mantén también una versión sencilla cuando vayas a utilizar símbolos en nombres o perfiles importantes. La apariencia y los caracteres permitidos pueden cambiar entre aplicaciones, así que el mejor resultado es el que conserva su claridad después de pegarlo en el lugar donde realmente vas a usarlo.
          </p>
        </section>
      </article>
    </main>
  );
}
