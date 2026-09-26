import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
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
      {
        '@type': 'FAQPage',
        '@id': 'https://letrasbonits.com/simbolos/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Cómo puedo copiar un símbolo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Busca el carácter que quieras y pulsa sobre él. Se copiará automáticamente al portapapeles y se añadirá al campo de texto superior.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Puedo combinar varios símbolos?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Haz clic en varios símbolos sucesivamente para armar tu secuencia y pulsa Copiar Todo.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Puedo poner mi nombre entre símbolos?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Escribe tu nombre en el campo de texto superior y selecciona los símbolos que quieras colocar alrededor.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Los símbolos son imágenes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Son caracteres tipográficos de la norma Unicode, lo que permite copiarlos y pegarlos como texto plano en cualquier aplicación compatible.',
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

      {/* ═══ COMPACT SAAS HERO (Consistent with all website pages) ═══ */}
      <header className="hero-saas hero-saas--compact">
        <div className="hero-saas__watermark-right" aria-hidden="true">
          ♡ ★ ✦
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Símbolos', href: '/simbolos/' },
            ]}
          />
          <span className="hero-saas__badge">✦ BIBLIOTECA DE SÍMBOLOS</span>
          <h1 className="hero-saas__title">
            Símbolos para <span className="gradient-text-cyan">Copiar y Pegar</span>
          </h1>
          <p className="hero-saas__lead">
            Explora y copia símbolos bonitos, emojis, corazones, estrellas y flechas. Haz clic en cualquier símbolo para copiarlo al instante.
          </p>
        </div>
      </header>

      {/* ═══ PRIMARY INTERACTIVE TOOL DIRECTLY UNDER HERO ═══ */}
      <SimbolosWorkspaceTool />

      {/* ═══ SPECIALIZED ROUTING SUGGESTIONS ═══ */}
      <div className="prose-card mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 m-0">
              <span>🎯</span>
              <span>¿Buscas símbolos optimizados para un entorno específico?</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1 m-0">
              Esta es nuestra biblioteca general. Si buscas símbolos específicos para tu juego o red social favorita:
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <Link
              href="/simbolos/bonitos/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 transition-colors"
            >
              Símbolos Bonitos
            </Link>
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
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Conversor de Letras
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ COMPLETE MASTER ARTICLE & SEO CONTENT ═══ */}
      <article className="prose-section" aria-label="Guía completa sobre símbolos para copiar y pegar">
        {/* Section 1: Intro */}
        <section className="prose-card">
          <h2>Símbolos Bonitos para Copiar y Pegar</h2>
          <p>
            Encontrar el símbolo exacto puede ser difícil cuando no aparece en el teclado de tu ordenador o teléfono. Tal vez recuerdas que era una estrella, un corazón, una corona o una flecha, pero no sabes cómo escribirlo ni dónde encontrarlo rápidamente.
          </p>
          <p>
            Con el selector de <Link href="/" className="text-indigo-600 hover:underline font-semibold">LetrasBonitas</Link> puedes explorar cientos de caracteres organizados por categoría, buscar exactamente lo que necesitas y copiarlo con un solo clic. También puedes escribir tu propio texto para armar una combinación lista para redes sociales, biografías o nombres de usuario.
          </p>
        </section>

        {/* Section 2: Showcase Examples */}
        <section className="prose-card">
          <h2>Ejemplos de Símbolos por Estilo</h2>
          <p>
            Aquí tienes algunos ejemplos de los tipos de símbolos que puedes encontrar y copiar directamente desde nuestra herramienta:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-2">
            {[
              { title: 'Corazones', symbols: '♡ ♥ ❤ ❥ ❣ ❦ ღ ෆ', color: 'bg-rose-50 border-rose-200 text-rose-700' },
              { title: 'Estrellas & Brillos', symbols: '★ ☆ ✦ ✧ ✩ ✰ ⋆ ⟡', color: 'bg-amber-50 border-amber-200 text-amber-700' },
              { title: 'Flores & Naturaleza', symbols: '✿ ❀ ❁ ✾ ❃ ⚘ ❋', color: 'bg-pink-50 border-pink-200 text-pink-700' },
              { title: 'Lunas & Cielo', symbols: '☾ ☽ ☼ ☀ ☁ ☄ ⚡', color: 'bg-sky-50 border-sky-200 text-sky-700' },
              { title: 'Flechas & Puntos', symbols: '→ ← ↑ ↓ ↗ ↘ ➜ ➤', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
              { title: 'Coronas & Realeza', symbols: '♔ ♕ ♚ ♛ ⚜ 👑', color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
              { title: 'Caras & Emociones', symbols: '😊 😍 🤩 😎 🥳 😈', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
              { title: 'Comida & Bebida', symbols: '🍕 🍔 🍩 🍰 🍦 ☕', color: 'bg-orange-50 border-orange-200 text-orange-700' },
            ].map(card => (
              <div key={card.title} className={`p-4 rounded-xl border ${card.color} transition-all`}>
                <h3 className="text-xs uppercase font-bold mb-1 tracking-wider">{card.title}</h3>
                <p className="text-lg font-bold tracking-wider m-0 text-slate-800">{card.symbols}</p>
              </div>
            ))}
          </div>

          <p>
            No tienes que seleccionar caracteres manualmente con el cursor ni memorizar códigos difíciles. Simplemente toca cualquier tarjeta y el carácter estará copiado en tu portapapeles al instante.
          </p>
        </section>

        {/* Section 3: Categories Breakdown */}
        <section className="prose-card">
          <h2>Encuentra Símbolos por Categoría</h2>
          <p>
            Una biblioteca amplia resulta verdaderamente útil cuando puedes encontrar lo que buscas en cuestión de segundos. Por eso en LetrasBonitas organizamos todos los símbolos según su forma y uso:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            {[
              {
                title: 'Corazones',
                content: 'Los corazones funcionan como una decoración limpia y dulce alrededor de un nombre, una frase o una biografía (ej. ♡ ♥ ❤ ❥ ❦ ღ). Puedes usarlos solos (♡), alrededor de texto (♡ Sofía ♡) o combinados con destellos (✦ ♡ Sofía ♡ ✦).',
              },
              {
                title: 'Estrellas y destellos',
                content: 'Las estrellas son ideales cuando buscas una apariencia brillante y aesthetic (ej. ★ ☆ ✦ ✧ ✩ ✰ ⋆ ⟡). Una estrella sólida como ★ produce un impacto diferente a un destello ligero como ✧. Prueba ambos estilos alrededor de tu texto.',
              },
              {
                title: 'Flechas',
                content: 'Las flechas sirven tanto de adorno como para indicar dirección (ej. → ← ↑ ↓ ↗ ↘ ➜ ➤). Son perfectas para listas en biografías (✦ Inicio → Planes → Contacto) o para destacar enlaces.',
              },
              {
                title: 'Flores y plantas',
                content: 'Para una estética suave y primaveral puedes usar ✿ ❀ ❁ ✾ ❃ ⚘. Una flor pequeña suele ser suficiente para dar encanto sin sobrecargar la lectura del texto.',
              },
              {
                title: 'Lunas y cielo',
                content: 'Los símbolos astronómicos combinan excelente con nombres nocturnos y minimalistas (ej. ☾ ☽ ☼ ☀ ☁ ⚡). Prueba opciones como ☾ Luna ☽ o ✦ ☾ Nova ☽ ✦.',
              },
              {
                title: 'Coronas y realeza',
                content: 'Figuras de ajedrez y coronas heráldicas como ♔ ♕ ♚ ♛ ⚜ 👑 aportan autoridad y elegancia a los apodos (ej. ♛ Carlos ♛).',
              },
              {
                title: 'Símbolos para gaming',
                content: 'Para jugadores que buscan decorar su nick de Free Fire, Roblox o Discord (亗 ⚔ ☠ ⌖ ☣). Recuerda siempre verificar que el juego acepte el carácter antes de guardar tu nombre definitivo.',
              },
              {
                title: 'Caras y Kaomojis',
                content: 'Los emojis clásicos (😊 😍 😎 🥳) y las caritas japonesas Kaomoji (ฅ^•ﻌ•^ฅ, (｡♥‿♥｡), ദ്ദി(˵ •̀ ᴗ - ˵ )) transmiten emociones únicas que no se logran con texto simple.',
              },
            ].map((section, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 m-0 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" />
                  {section.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed m-0">{section.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Step by step instructions */}
        <section className="prose-card">
          <h2>Cómo Usar el Selector de Símbolos</h2>
          <p>El funcionamiento es rápido, directo y pensado para no perder tiempo:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-2">
            {[
              { step: '01', icon: '🔍', title: 'Busca o elige', desc: 'Escribe una palabra en el buscador (ej. estrella, fuego, flor) o pulsa en una de las categorías.' },
              { step: '02', icon: '📋', title: 'Copia con 1 clic', desc: 'Toca cualquier tarjeta. El símbolo se copiará de inmediato a tu portapapeles y se añadirá al campo superior.' },
              { step: '03', icon: '✏️', title: 'Personaliza tu texto', desc: 'Escribe tu nombre o apodo en el campo de texto para ver cómo luce rodeado de los símbolos elegidos.' },
              { step: '04', icon: '✨', title: 'Copia el conjunto', desc: 'Pulsa Copiar Todo para llevarte la frase completa con todos sus adornos lista para pegar.' },
              { step: '05', icon: '🚀', title: 'Pega donde quieras', desc: 'Abre Instagram, WhatsApp, TikTok, tu juego favorito o Word y pega el texto directamente.' },
            ].map(item => (
              <div key={item.step} className="p-4 rounded-xl bg-slate-50 border border-slate-200 relative overflow-hidden">
                <span className="absolute top-2 right-3 text-3xl font-black text-slate-200/80">{item.step}</span>
                <span className="text-2xl block mb-1">{item.icon}</span>
                <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 m-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Ideas for names */}
        <section className="prose-card">
          <h2>Ideas para Decorar Nombres y Biografías</h2>
          <p>
            No hace falta saturar el texto para lograr una apariencia atractiva. Aquí tienes algunas estructuras recomendadas:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
            {[
              { title: 'Enmarcado simétrico', desc: 'Coloca el mismo símbolo a ambos lados', examples: '『Carlos』 · ♡ Ana ♡ · ✦ Nova ✦' },
              { title: 'Separador de palabras', desc: 'Separa tus gustos o aficiones en la bio', examples: 'Música ✦ Viajes ✦ Fotografía ✦ Café' },
              { title: 'Destello sutil', desc: 'Un detalle ligero al principio o al final', examples: '✧ Novedad · ★ Mi Perfil · 🌸 Hola a todos' },
              { title: 'Patrones estéticos', desc: 'Secuencias decorativas para separar párrafos', examples: '✦ ♡ ☾ ♡ ✦ · ─── ⋆⋅☆⋅⋆ ───' },
            ].map(idea => (
              <div key={idea.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">{idea.title}</h3>
                <p className="text-xs text-slate-500 m-0 mb-2">{idea.desc}</p>
                <p className="text-sm font-bold text-indigo-700 font-mono m-0 bg-white p-2 rounded-lg border border-slate-200">{idea.examples}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Symbols vs Chars vs Emojis */}
        <section className="prose-card">
          <h2>Diferencia entre Símbolos, Caracteres y Emojis</h2>
          <p>
            Aunque en el lenguaje cotidiano a menudo se utilizan como sinónimos, existen diferencias técnicas útiles de entender:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
            {[
              { title: 'Carácter', icon: 'Aa', desc: 'La unidad básica de texto en la codificación Unicode. Abarca letras del alfabeto latino, signos de puntuación y glifos internacionales.' },
              { title: 'Símbolo de Texto', icon: '★', desc: 'Caracteres tipográficos como ★, ♡, → o ♛. Se comportan exactamente como texto plano y adoptan el color y tamaño de la fuente donde los pegues.' },
              { title: 'Emoji', icon: '🎨', desc: 'Ideogramas pictográficos a color (🍕, 😊, ⚽). Su diseño visual depende del fabricante de tu teléfono o sistema operativo (Apple, Google, Microsoft).' },
            ].map(item => (
              <div key={item.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-2xl block mb-1">{item.icon}</span>
                <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 m-0 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section className="prose-card">
          <h2>Preguntas Frecuentes sobre Símbolos</h2>

          <div className="space-y-3 my-2">
            {[
              { q: '¿Cómo puedo copiar un símbolo?', a: 'Haz clic en cualquier tarjeta de símbolo y se copiará automáticamente al portapapeles. Después ve a tu red social o aplicación y dale a Pegar.' },
              { q: '¿Puedo armar una combinación con mi nombre?', a: 'Sí. Escribe tu nombre en el campo superior y pulsa los símbolos que quieras agregar alrededor. Al terminar, presiona Copiar Todo.' },
              { q: '¿Los símbolos funcionan en Instagram y TikTok?', a: 'Sí. La gran mayoría de estos símbolos son caracteres Unicode estándar aceptados en la biografía, el nombre y los comentarios de Instagram, TikTok, WhatsApp y Facebook.' },
              { q: '¿Por qué algunos símbolos se ven como cuadros vacíos?', a: 'Si ves un cuadro vacío o un signo de interrogación, significa que la aplicación o dispositivo no cuenta con esa fuente específica instalada. Te recomendamos elegir un símbolo más popular como ★, ♡ o ✦.' },
              { q: '¿Es necesario descargar o instalar alguna fuente?', a: 'No. Todos los caracteres funcionan directamente desde el navegador sin descargar nada ni instalar aplicaciones.' },
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

        {/* Section 8: Final Call to Action */}
        <section className="prose-card">
          <h2>Explora, Copia y Personaliza</h2>
          <p>
            No pierdas tiempo buscando caracteres en menús ocultos de tu teclado. Usa nuestra biblioteca interactiva para encontrar símbolos aesthetic, emojis, flechas y corazones en segundos.
          </p>
          <p>
            Si además quieres cambiar la tipografía de tus palabras a letras cursivas, negritas o góticas, puedes probar nuestro <Link href="/conversor-de-letras/" className="text-indigo-600 hover:underline font-semibold">conversor de letras</Link> para combinar fuentes bonitas con tus símbolos favoritos.
          </p>
        </section>
      </article>
    </main>
  );
}
