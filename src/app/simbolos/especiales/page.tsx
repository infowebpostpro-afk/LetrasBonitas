import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { EspecialesSymbolsTool } from '@/components/font-generator/EspecialesSymbolsTool';
import { CONFUSABLE_PAIRS } from '@/lib/unicode/especialesSymbolsData';

export const metadata: Metadata = {
  title: 'Símbolos Especiales para Copiar y Pegar | LetrasBonitas',
  description:
    'Encuentra símbolos especiales para copiar y pegar: matemáticos, flechas, monedas, marcas, formas y más. Busca un carácter y cópialo al instante.',
  alternates: {
    canonical: 'https://letrasbonits.com/simbolos/especiales/',
  },
  openGraph: {
    title: 'Símbolos Especiales para Copiar y Pegar | LetrasBonitas',
    description:
      'Busca y copia símbolos especiales, matemáticos, flechas, monedas, marcas y otros caracteres Unicode desde una colección organizada.',
    url: 'https://letrasbonits.com/simbolos/especiales/',
    siteName: 'LetrasBonitas',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Símbolos Especiales para Copiar y Pegar | LetrasBonitas',
    description:
      'Busca y copia símbolos especiales, matemáticos, flechas, monedas, marcas y otros caracteres Unicode desde una colección organizada.',
  },
};

export default function SimbolosEspecialesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://letrasbonits.com/simbolos/especiales/#webpage',
        url: 'https://letrasbonits.com/simbolos/especiales/',
        name: 'Símbolos Especiales para Copiar y Pegar',
        description:
          'Encuentra símbolos especiales para copiar y pegar: matemáticos, flechas, monedas, marcas, formas y más. Busca un carácter y cópialo al instante.',
        isPartOf: {
          '@type': 'WebSite',
          name: 'LetrasBonitas',
          url: 'https://letrasbonits.com/',
        },
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://letrasbonits.com/simbolos/especiales/#tool',
        name: 'Biblioteca y Selector de Símbolos Especiales de LetrasBonitas',
        url: 'https://letrasbonits.com/simbolos/especiales/',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        browserRequirements:
          'Requires JavaScript for interactive search, combination builder and character inspection',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://letrasbonits.com/simbolos/especiales/#breadcrumb',
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
            name: 'Símbolos Especiales',
            item: 'https://letrasbonits.com/simbolos/especiales/',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://letrasbonits.com/simbolos/especiales/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Cómo copiar un símbolo especial?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Busca el carácter que necesitas y pulsa Copiar. Después puedes pegarlo desde el portapapeles en otro campo de texto.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Puedo buscar un símbolo sin saber su nombre?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Prueba palabras relacionadas con su significado, como infinito, flecha, copyright, euro, raíz o diferente.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Los símbolos especiales son Unicode?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Muchos de los caracteres ofrecidos por esta herramienta están codificados en Unicode. Unicode contiene numerosos bloques y categorías de caracteres, no una única categoría denominada "símbolos especiales".',
            },
          },
          {
            '@type': 'Question',
            name: '¿Qué significa U+2260?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Es la notación del punto de código Unicode correspondiente al carácter ≠. El prefijo U+ se utiliza para expresar un punto de código Unicode.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Por qué un símbolo no aparece en mi dispositivo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Puede faltar soporte para ese carácter en la fuente o software que está intentando mostrarlo. Prueba otra aplicación, navegador o dispositivo, o utiliza un carácter alternativo más común.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Los símbolos funcionan en todas las aplicaciones?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No se debe asumir compatibilidad universal. Una aplicación puede restringir determinados caracteres y la representación visual también depende del software y las fuentes disponibles.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Un símbolo especial es lo mismo que un emoji?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No necesariamente. Unicode contiene símbolos, letras, signos, emoji y muchas otras clases de caracteres. Algunos caracteres también pueden tener distintas formas de presentación.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Puedo copiar varios símbolos a la vez?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Cuando la herramienta muestre la opción +, añade los caracteres que quieras a tu combinación o selección y utiliza Copiar combinación.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cuál es la diferencia entre un símbolo especial y uno bonito?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '"Especial" describe aquí principalmente caracteres útiles, técnicos o difíciles de introducir desde un teclado normal. "Bonito" se utiliza para una colección centrada principalmente en decoración y apariencia.',
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
          ≠ ∞ © →
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Símbolos', href: '/simbolos/' },
              { label: 'Símbolos Especiales', href: '/simbolos/especiales/' },
            ]}
          />
          <span className="hero-saas__badge">✦ SÍMBOLOS ESPECIALES Y UNICODE</span>
          <h1 className="hero-saas__title">
            Símbolos Especiales para <span className="gradient-text-cyan">Copiar y Pegar</span>
          </h1>
          <p className="hero-saas__lead">
            Encuentra caracteres especiales, matemáticos, flechas, monedas, marcas registradas y otros símbolos poco comunes en tu teclado. Busca por significado o nombre y cópialo con un solo toque.
          </p>
        </div>
      </header>

      {/* ═══ INTERACTIVE ESPECIALES SYMBOL PICKER & BUILDER TOOL ═══ */}
      <EspecialesSymbolsTool />

      {/* ═══ CONTEXTUAL ROUTING SUGGESTIONS ═══ */}
      <div className="prose-card mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 m-0">
              <span>🎯</span>
              <span>¿Buscas estilos específicos o letras con fuentes bonitas?</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1 m-0">
              Esta página está especializada en caracteres funcionales, matemáticos y técnicos. Explora también nuestras otras colecciones:
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <Link
              href="/simbolos/bonitos/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors"
            >
              Símbolos Bonitos
            </Link>
            <Link
              href="/simbolos/aesthetic/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
            >
              Símbolos Aesthetic
            </Link>
            <Link
              href="/simbolos/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Biblioteca General de Símbolos
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
      <article className="prose-section" aria-label="Guía completa sobre símbolos especiales para copiar y pegar">
        {/* Intro */}
        <section className="prose-card">
          <h2>Símbolos Especiales para Copiar y Pegar</h2>
          <p>
            Necesitas un símbolo como <strong>©</strong>, <strong>∞</strong>, <strong>≠</strong>, <strong>→</strong> o <strong>€</strong>, pero no aparece fácilmente en tu teclado. Buscarlo entre listas enormes tampoco ayuda cuando no sabes su nombre exacto.
          </p>
          <p>
            Esta herramienta reúne <strong>símbolos especiales para copiar y pegar</strong> organizados por categorías. Busca por nombre, significado o carácter, encuentra el símbolo que necesitas y pulsa <strong>Copiar</strong> para llevarlo al portapapeles.
          </p>
        </section>

        {/* Section: Cómo usar los símbolos especiales */}
        <section className="prose-card">
          <h2>Cómo usar los símbolos especiales</h2>
          <p>
            Si sabes lo que necesitas, escríbelo en el buscador. Por ejemplo:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-3">
            {[
              { query: 'infinito', result: '∞ (U+221E)' },
              { query: 'copyright', result: '© (U+00A9)' },
              { query: 'euro', result: '€ (U+20AC)' },
              { query: 'flecha derecha', result: '→ ➜ ⇒ ⟶' },
              { query: 'raíz', result: '√ (U+221A)' },
              { query: 'diferente', result: '≠ (U+2260)' },
            ].map(item => (
              <div key={item.query} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-indigo-700 block">Busca: «{item.query}»</span>
                <span className="text-sm font-semibold text-slate-800 font-mono mt-0.5 block">{item.result}</span>
              </div>
            ))}
          </div>
          <p>
            También puedes buscar utilizando el propio carácter (por ejemplo, pegando <strong>∞</strong>) o explorar las categorías cuando todavía no sabes cuál elegir.
          </p>
          <p>
            Cuando encuentres el símbolo correcto, pulsa <strong>Copiar</strong>. Si necesitas varios caracteres a la vez, utiliza <strong>+</strong> para añadirlos a tu combinación y copiarlos juntos.
          </p>
        </section>

        {/* Section: Tipos de símbolos especiales */}
        <section className="prose-card">
          <h2>Tipos de símbolos especiales</h2>
          <p>
            Los caracteres especiales no forman una única categoría visual. Algunos representan operaciones matemáticas, otros monedas, direcciones, marcas, formas o conceptos técnicos.
          </p>

          <div className="space-y-6 mt-4">
            <div>
              <h3>Símbolos matemáticos</h3>
              <p>
                Algunos signos matemáticos habituales son:
              </p>
              <div className="flex flex-wrap gap-2 text-lg font-serif font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
                {['+', '−', '×', '÷', '±', '≠', '≈', '≤', '≥', '∞', '√', '∑', '∏', '∫', '∂', '∇', '∈', '∉', '⊂', '∪', '∩'].map(s => (
                  <span key={s} className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">{s}</span>
                ))}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Estos caracteres pueden servir para operaciones, fórmulas, apuntes y otros textos donde necesites representar relaciones matemáticas con precisión sin recurrir a imágenes.
              </p>
            </div>

            <div>
              <h3>Flechas</h3>
              <p>
                Las flechas son útiles para indicar dirección, movimiento, navegación o una relación de causa-efecto entre elementos.
              </p>
              <div className="flex flex-wrap gap-2 text-lg font-serif font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
                {['→', '←', '↑', '↓', '↔', '↕', '↗', '↘', '⇒', '⇐', '⇔', '➜', '↵', '⟶'].map(s => (
                  <span key={s} className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">{s}</span>
                ))}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                También existen muchas variantes con formas y usos distintos. Si solo necesitas indicar una dirección sencilla, una flecha común como <strong>→</strong> suele ser más fácil de reconocer que una variante poco habitual.
              </p>
            </div>

            <div>
              <h3>Símbolos de moneda</h3>
              <p>
                Entre los caracteres de moneda puedes encontrar:
              </p>
              <div className="flex flex-wrap gap-2 text-lg font-serif font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
                {['$', '€', '£', '¥', '₹', '₩', '₽', '₿', '¢', '฿', '₫', '₺'].map(s => (
                  <span key={s} className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">{s}</span>
                ))}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Cada símbolo representa una moneda o unidad concreta, por lo que no debe elegirse únicamente por su apariencia estética o decorativa.
              </p>
            </div>

            <div>
              <h3>Marcas y signos</h3>
              <p>
                Algunos caracteres aparecen con frecuencia en documentos, productos, publicaciones jurídicas y referencias editoriales:
              </p>
              <div className="flex flex-wrap gap-2 text-lg font-serif font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
                {['©', '®', '™', '℠', '§', '¶', '°', '†', '‡', '№', '℗', '℅', '℮'].map(s => (
                  <span key={s} className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">{s}</span>
                ))}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Estos signos tienen usos específicos. Copiar un carácter correctamente no cambia las reglas legales, editoriales o técnicas que puedan aplicarse a su uso.
              </p>
            </div>

            <div>
              <h3>Formas geométricas</h3>
              <p>
                Las formas pueden funcionar como indicadores, viñetas de listas o elementos de diagramas sencillos:
              </p>
              <div className="flex flex-wrap gap-2 text-lg font-serif font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
                {['●', '○', '■', '□', '▲', '△', '▼', '▽', '◆', '◇', '◉', '◎'].map(s => (
                  <span key={s} className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">{s}</span>
                ))}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Cuando el significado es importante, evita elegir una forma únicamente porque se vea más llamativa. Un círculo relleno suele comunicar activación, mientras que uno vacío indica deselección.
              </p>
            </div>

            <div>
              <h3>Superíndices y subíndices</h3>
              <p>
                Algunos caracteres Unicode pueden mostrarse en una posición elevada o inferior de la línea base:
              </p>
              <div className="flex flex-wrap gap-2 text-lg font-serif font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
                {['⁰', '¹', '²', '³', '⁴', '⁵', 'ⁿ', '⁺', '⁻', '₀', '₁', '₂', '₃', '₄', '₊', '₋'].map(s => (
                  <span key={s} className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">{s}</span>
                ))}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Son indispensables en química (como el subíndice 2 en H₂O) o en matemáticas (como potencias x² o x³). Recuerda que no todas las letras del alfabeto tienen una variante equivalente en Unicode, por lo que estas colecciones no deben tratarse como un sistema completo para transformar cualquier texto.
              </p>
            </div>

            <div>
              <h3>Letras griegas</h3>
              <p>
                Puedes encontrar caracteres del alfabeto griego utilizados frecuentemente en física, matemáticas y ciencia:
              </p>
              <div className="flex flex-wrap gap-2 text-lg font-serif font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
                {['α', 'β', 'γ', 'δ', 'Δ', 'θ', 'λ', 'μ', 'π', 'σ', 'Σ', 'Ω', 'ω'].map(s => (
                  <span key={s} className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">{s}</span>
                ))}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Estas letras pertenecen al alfabeto griego, aunque algunas también se utilizan como símbolos en matemáticas, ciencias y otros campos. No deben describirse simplemente como letras decorativas.
              </p>
            </div>

            <div>
              <h3>Símbolos técnicos y otros caracteres</h3>
              <p>
                Unicode también contiene muchos caracteres utilizados en contextos técnicos, tipográficos y especializados:
              </p>
              <div className="flex flex-wrap gap-2 text-lg font-serif font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
                {['⌘', '⌥', '⇧', '⌃', '⎋', '⌫', '⌂', '⌁', '⚙', '✓', '✔', '✕', '✖'].map(s => (
                  <span key={s} className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">{s}</span>
                ))}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                El significado exacto depende del carácter y del contexto. Por ejemplo, ⌘ representa la tecla Comando en teclados de Mac, mientras que ⌫ representa la tecla de retroceso.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Cómo encontrar un símbolo aunque no sepas su nombre */}
        <section className="prose-card">
          <h2>Cómo encontrar un símbolo aunque no sepas su nombre</h2>
          <p>
            No necesitas conocer el nombre técnico de Unicode. Piensa en lo que representa.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
            <li>Si buscas <strong>«no igual»</strong> o <strong>«diferente»</strong>, la herramienta puede ayudarte a encontrar <strong>≠</strong>.</li>
            <li>Si buscas <strong>«infinito»</strong>, puedes encontrar <strong>∞</strong>.</li>
            <li>Si escribes <strong>«marca registrada»</strong>, puedes llegar a <strong>®</strong>.</li>
            <li>Si buscas <strong>«flecha izquierda»</strong>, puedes obtener <strong>←</strong>.</li>
            <li>Si escribes <strong>«raíz»</strong>, puedes llegar a <strong>√</strong>.</li>
          </ul>
          <p>
            Por eso el buscador debe reconocer términos naturales y sinónimos, no solo nombres técnicos. También puedes explorar una categoría si solo recuerdas la apariencia general del carácter.
          </p>
        </section>

        {/* Section: Qué son los caracteres especiales */}
        <section className="prose-card">
          <h2>Qué son los caracteres especiales</h2>
          <p>
            La expresión «carácter especial» se utiliza de manera amplia para referirse a caracteres que no son las letras y números habituales de un teclado.
          </p>
          <p>
            Puede incluir puntuación, operadores matemáticos, símbolos monetarios, flechas, formas, marcas, letras de otros sistemas de escritura y muchos otros caracteres.
          </p>
          <p>
            Unicode organiza estos elementos en distintos bloques y categorías. Por eso «símbolos especiales» resulta útil como término para buscar una colección, pero no es el nombre de un único bloque técnico que contenga todos ellos.
          </p>
        </section>

        {/* Section: Qué significa U+ en un carácter Unicode */}
        <section className="prose-card">
          <h2>Qué significa U+ en un carácter Unicode</h2>
          <p>
            En esta herramienta puedes encontrar referencias como <strong>U+00A9</strong> o <strong>U+2260</strong>.
          </p>
          <p>
            La notación <strong>U+</strong> seguida de números y letras identifica un punto de código Unicode:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-mono text-indigo-700 font-bold block text-sm">© = U+00A9</span>
              <span className="text-xs text-slate-600 mt-1 block">COPYRIGHT SIGN (Signo de derechos de autor)</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-mono text-indigo-700 font-bold block text-sm">≠ = U+2260</span>
              <span className="text-xs text-slate-600 mt-1 block">NOT EQUAL TO (Desigualdad matemática)</span>
            </div>
          </div>
          <p>
            Esto resulta útil cuando necesitas identificar exactamente un carácter y no solo reconocerlo visualmente. Dos caracteres pueden parecer muy similares y, aun así, tener puntos de código diferentes.
          </p>
        </section>

        {/* Section: Símbolos que parecen iguales pero no son el mismo carácter */}
        <section className="prose-card">
          <h2>Símbolos que parecen iguales pero no son el mismo carácter</h2>
          <p>
            La apariencia puede engañar. En tipografía digital existen caracteres visualmente semejantes que cumplen funciones muy diferentes:
          </p>

          <div className="overflow-x-auto my-4 border border-slate-200 rounded-2xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                  <th className="p-3 font-bold">Carácter</th>
                  <th className="p-3 font-bold">Nombre y Código</th>
                  <th className="p-3 font-bold">No confundir con</th>
                  <th className="p-3 font-bold hidden md:table-cell">Distinción técnica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {CONFUSABLE_PAIRS.map(pair => (
                  <tr key={pair.codeA} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-3 font-serif font-bold text-lg text-indigo-700">
                      {pair.charA}
                    </td>
                    <td className="p-3">
                      <span className="font-bold text-slate-900 block">{pair.nameA}</span>
                      <span className="font-mono text-xs text-slate-500">{pair.codeA}</span>
                    </td>
                    <td className="p-3">
                      <span className="font-serif font-bold text-base text-rose-700 mr-1.5">{pair.charB}</span>
                      <span className="text-xs text-slate-700">{pair.nameB} ({pair.codeB})</span>
                    </td>
                    <td className="p-3 text-xs text-slate-600 leading-relaxed hidden md:table-cell">
                      {pair.explanation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Esto importa cuando el texto se utiliza en búsquedas, programación, nombres, fórmulas o sistemas que comparan caracteres de manera exacta. Si necesitas precisión, consulta el nombre y el código Unicode mostrado junto al símbolo.
          </p>
        </section>

        {/* Section: Cómo escribir caracteres especiales con el teclado */}
        <section className="prose-card">
          <h2>Cómo escribir caracteres especiales con el teclado</h2>
          <p>
            Copiar y pegar es útil cuando utilizas un carácter ocasionalmente, pero los sistemas operativos también ofrecen formas de acceder a caracteres adicionales:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-base font-bold text-slate-900 block mb-1">💻 Windows</span>
              <p className="text-xs text-slate-600 m-0 leading-relaxed">
                En Windows puedes utilizar herramientas integradas para explorar caracteres y símbolos, como el panel de símbolos (<kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-[11px] font-mono">Win</kbd> + <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-[11px] font-mono">.</kbd>) o el Mapa de Caracteres.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-base font-bold text-slate-900 block mb-1">🍎 macOS</span>
              <p className="text-xs text-slate-600 m-0 leading-relaxed">
                En macOS existe un visor de caracteres (<kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-[11px] font-mono">Cmd</kbd> + <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-[11px] font-mono">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-[11px] font-mono">Espacio</kbd>) desde el que puedes buscar e insertar símbolos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-base font-bold text-slate-900 block mb-1">📱 Móviles (iOS / Android)</span>
              <p className="text-xs text-slate-600 m-0 leading-relaxed">
                Los teclados móviles también muestran caracteres adicionales al mantener pulsadas determinadas teclas, aunque no ofrecen acceso directo a todos los símbolos Unicode.
              </p>
            </div>
          </div>

          <p>
            Si utilizas el mismo carácter repetidamente, aprender el método disponible en tu dispositivo puede ser más rápido. Para un carácter ocasional o difícil de encontrar, buscarlo y copiarlo suele ser más sencillo.
          </p>
        </section>

        {/* Section: Por qué algunos símbolos aparecen como cuadros */}
        <section className="prose-card">
          <h2>Por qué algunos símbolos aparecen como cuadros</h2>
          <p>
            Unicode identifica un carácter, pero el dispositivo todavía necesita una fuente capaz de mostrar su forma visual. Si una fuente no incluye el glifo necesario, el sistema puede mostrar un cuadro vacío, un carácter de sustitución u otro indicador.
          </p>
          <p>
            Por eso un símbolo poco común puede verse correctamente en un dispositivo y no mostrarse igual en otro.
          </p>

          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl my-3 text-xs text-amber-900">
            <span className="font-bold block text-sm mb-1">Si ocurre:</span>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prueba el símbolo en el lugar donde realmente quieras utilizarlo.</li>
              <li>Comprueba si aparece correctamente en otro navegador o dispositivo.</li>
              <li>Utiliza una alternativa más común si necesitas máxima legibilidad.</li>
              <li>Evita depender de caracteres muy poco habituales para información esencial.</li>
            </ul>
          </div>
          <p>
            Copiar correctamente un carácter no garantiza que todas las aplicaciones y fuentes lo representen de la misma forma.
          </p>
        </section>

        {/* Section: Símbolos especiales, bonitos y aesthetic: qué diferencia hay */}
        <section className="prose-card">
          <h2>Símbolos especiales, bonitos y aesthetic: qué diferencia hay</h2>
          <p>
            Estas colecciones pueden compartir algunos caracteres, pero responden a necesidades diferentes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200">
              <h3 className="text-sm font-bold text-indigo-900 m-0 mb-1 flex items-center gap-1.5">
                <span>⚡</span>
                <span>Símbolos Especiales</span>
              </h3>
              <p className="text-xs text-indigo-800 m-0 leading-relaxed">
                Los símbolos especiales priorizan caracteres útiles o poco accesibles desde un teclado normal, como operadores matemáticos, monedas, flechas, marcas, formas y signos técnicos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200">
              <h3 className="text-sm font-bold text-rose-900 m-0 mb-1 flex items-center gap-1.5">
                <span>♡</span>
                <span><Link href="/simbolos/bonitos/" className="hover:underline">Símbolos Bonitos</Link></span>
              </h3>
              <p className="text-xs text-rose-800 m-0 leading-relaxed">
                Los símbolos bonitos priorizan la apariencia visual. Allí tienen más sentido corazones, estrellas, flores, marcos y adornos para nombres o textos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200">
              <h3 className="text-sm font-bold text-purple-900 m-0 mb-1 flex items-center gap-1.5">
                <span>✧</span>
                <span><Link href="/simbolos/aesthetic/" className="hover:underline">Símbolos Aesthetic</Link></span>
              </h3>
              <p className="text-xs text-purple-800 m-0 leading-relaxed">
                Los símbolos aesthetic se centran en estilos visuales y combinaciones asociadas a estéticas concretas (minimalistas, celestiales, coquette).
              </p>
            </div>
          </div>

          <p>
            Un carácter puede pertenecer a más de una colección cuando realmente satisface ambos usos. Eso no significa que todas las páginas deban mostrar exactamente la misma biblioteca.
          </p>
        </section>

        {/* Section: Consejos para usar caracteres especiales sin perder legibilidad */}
        <section className="prose-card">
          <h2>Consejos para usar caracteres especiales sin perder legibilidad</h2>
          <p>
            Un símbolo especial puede comunicar una idea con muy poco espacio, pero utilizar demasiados puede dificultar la lectura:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
            <li>Para información importante, utiliza caracteres cuyo significado sea claro.</li>
            <li>En una fórmula, elige el operador correcto (como <strong>×</strong> o <strong>−</strong>).</li>
            <li>En un precio, utiliza el signo de moneda correspondiente (como <strong>€</strong> o <strong>$</strong>).</li>
            <li>En navegación o instrucciones, utiliza flechas fáciles de reconocer (como <strong>→</strong>).</li>
            <li>Si utilizas símbolos únicamente como decoración, comprueba que no oculten el significado del texto.</li>
            <li>También conviene pensar en accesibilidad. Un lector de pantalla puede interpretar caracteres según la información disponible para ese símbolo, por lo que una larga secuencia decorativa puede resultar mucho menos clara que visualmente.</li>
          </ul>
        </section>

        {/* Section: Preguntas frecuentes */}
        <section className="prose-card">
          <h2>Preguntas frecuentes</h2>
          <div className="space-y-3 mt-4">
            {[
              {
                q: '¿Cómo copiar un símbolo especial?',
                a: 'Busca el carácter que necesitas y pulsa Copiar. Después puedes pegarlo desde el portapapeles en otro campo de texto.',
              },
              {
                q: '¿Puedo buscar un símbolo sin saber su nombre?',
                a: 'Sí. Prueba palabras relacionadas con su significado, como infinito, flecha, copyright, euro, raíz o diferente.',
              },
              {
                q: '¿Los símbolos especiales son Unicode?',
                a: 'Muchos de los caracteres ofrecidos por esta herramienta están codificados en Unicode. Unicode contiene numerosos bloques y categorías de caracteres, no una única categoría denominada "símbolos especiales".',
              },
              {
                q: '¿Qué significa U+2260?',
                a: 'Es la notación del punto de código Unicode correspondiente al carácter ≠. El prefijo U+ se utiliza para expresar un punto de código Unicode.',
              },
              {
                q: '¿Por qué un símbolo no aparece en mi dispositivo?',
                a: 'Puede faltar soporte para ese carácter en la fuente o software que está intentando mostrarlo. Prueba otra aplicación, navegador o dispositivo, o utiliza un carácter alternativo más común.',
              },
              {
                q: '¿Los símbolos funcionan en todas las aplicaciones?',
                a: 'No se debe asumir compatibilidad universal. Una aplicación puede restringir determinados caracteres y la representación visual también depende del software y las fuentes disponibles.',
              },
              {
                q: '¿Un símbolo especial es lo mismo que un emoji?',
                a: 'No necesariamente. Unicode contiene símbolos, letras, signos, emoji y muchas otras clases de caracteres. Algunos caracteres también pueden tener distintas formas de presentación.',
              },
              {
                q: '¿Puedo copiar varios símbolos a la vez?',
                a: 'Sí. Cuando la herramienta muestre la opción +, añade los caracteres que quieras a tu selección y utiliza Copiar selección.',
              },
              {
                q: '¿Cuál es la diferencia entre un símbolo especial y uno bonito?',
                a: '"Especial" describe aquí principalmente caracteres útiles, técnicos o difíciles de introducir desde un teclado normal. "Bonito" se utiliza para una colección centrada principalmente en decoración y apariencia.',
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

        {/* Section: Encuentra y copia el símbolo que necesitas */}
        <section className="prose-card">
          <h2>Encuentra y copia el símbolo que necesitas</h2>
          <p>
            Utiliza el buscador cuando sepas qué representa el carácter y las categorías cuando quieras explorar opciones. Consultar el nombre y el código Unicode también puede ayudarte a distinguir símbolos visualmente parecidos.
          </p>
          <p>
            Si necesitas varios caracteres, añádelos a tu selección y cópialos juntos. Para información importante, prioriza siempre el significado, la legibilidad y la compatibilidad sobre una decoración excesiva.
          </p>
          <p>
            Si además quieres cambiar la tipografía de tus palabras a letras cursivas, negritas o góticas, puedes probar nuestro <Link href="/conversor-de-letras/" className="text-indigo-600 hover:underline font-semibold">conversor de letras</Link> para combinar fuentes bonitas con tus símbolos favoritos.
          </p>
        </section>
      </article>
    </main>
  );
}
