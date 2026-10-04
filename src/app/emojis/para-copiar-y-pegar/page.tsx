import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { EmojiCopyWorkspace } from '@/components/font-generator/EmojiCopyWorkspace';

export const metadata: Metadata = {
  title: 'Emojis para Copiar y Pegar | Busca y Copia Emojis',
  description:
    'Busca emojis en español, explora categorías y copia uno o varios en segundos. Encuentra caras, corazones, animales, banderas y muchos más.',
  alternates: {
    canonical: 'https://letrasbonits.com/emojis/para-copiar-y-pegar/',
  },
  openGraph: {
    title: 'Emojis para Copiar y Pegar | LetrasBonitas',
    description:
      'Busca cualquier emoji, explora categorías, guarda favoritos y copia uno o varios emojis rápidamente.',
    url: 'https://letrasbonits.com/emojis/para-copiar-y-pegar/',
    siteName: 'LetrasBonitas',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emojis para Copiar y Pegar | Busca y Copia Emojis',
    description:
      'Busca emojis en español, explora categorías y copia uno o varios en segundos. Encuentra caras, corazones, animales, banderas y muchos más.',
  },
};

export default function EmojisParaCopiarYPegarPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://letrasbonits.com/emojis/para-copiar-y-pegar/#webpage',
        url: 'https://letrasbonits.com/emojis/para-copiar-y-pegar/',
        name: 'Emojis para Copiar y Pegar | Busca y Copia Emojis',
        description:
          'Busca emojis en español, explora categorías y copia uno o varios en segundos. Encuentra caras, corazones, animales, banderas y muchos más.',
        isPartOf: {
          '@type': 'WebSite',
          name: 'LetrasBonitas',
          url: 'https://letrasbonits.com/',
        },
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://letrasbonits.com/emojis/para-copiar-y-pegar/#tool',
        name: 'Área de Trabajo de Emojis para Copiar y Pegar',
        url: 'https://letrasbonits.com/emojis/para-copiar-y-pegar/',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        browserRequirements:
          'Requiere JavaScript para búsqueda interactiva, bandeja multiselección y copiado al portapapeles.',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://letrasbonits.com/emojis/para-copiar-y-pegar/#breadcrumb',
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Emojis para Copiar y Pegar',
            item: 'https://letrasbonits.com/emojis/para-copiar-y-pegar/',
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
          😂 ❤️ 🔥 🎉
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Emojis', href: '/emojis/' },
              { label: 'Emojis para Copiar y Pegar', href: '/emojis/para-copiar-y-pegar/' },
            ]}
          />
          <span className="hero-saas__badge">📋 COPIADO RÁPIDO Y MULTISELECCIÓN</span>
          <h1 className="hero-saas__title">
            Emojis para <span className="gradient-text-cyan">Copiar y Pegar</span>
          </h1>
          <p className="hero-saas__lead">
            Busca cualquier emoji en español, cópialo con un toque o reúne varios y cópialos juntos al portapapeles en un solo clic.
          </p>
        </div>
      </header>

      {/* ═══ PRIMARY TASK-FOCUSED EMOJI WORKSPACE TOOL ═══ */}
      <EmojiCopyWorkspace />

      {/* ═══ SILO NAVIGATION CALLOUT ═══ */}
      <div className="prose-card mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 m-0">
              <span>🎯</span>
              <span>Explora más secciones de nuestro universo emoji</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1 m-0">
              Navega por colecciones temáticas o descubre símbolos y tipografías decorativas:
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <Link
              href="/emojis/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
            >
              Explorar todos los emojis
            </Link>
            <Link
              href="/emojis/bonitos/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 transition-colors"
            >
              Emojis bonitos
            </Link>
            <Link
              href="/emojis/aesthetic/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors"
            >
              Emojis aesthetic
            </Link>
            <Link
              href="/simbolos/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Símbolos para copiar
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ COMPLETE MASTER ARTICLE & TECHNICAL SUPPORTING CONTENT ═══ */}
      <article className="prose-section" aria-label="Guía completa sobre emojis para copiar y pegar">
        {/* Intro */}
        <section className="prose-card">
          <h2>Emojis para Copiar y Pegar</h2>
          <p>
            Encontrar un emoji debería ser rápido, pero no siempre recuerdas su nombre ni sabes en qué parte del teclado está. Si además necesitas varios para un mensaje, una bio o una publicación, buscarlos y copiarlos uno por uno puede resultar incómodo.
          </p>
          <p>
            Aquí puedes buscar emojis en español, explorar categorías y copiar cualquier opción con un toque. Si necesitas más de uno, añádelos a tu selección y copia el grupo completo cuando esté listo.
          </p>
        </section>

        {/* Section: Cómo copiar un emoji */}
        <section className="prose-card">
          <h2>Cómo copiar un emoji</h2>
          <p>
            Utiliza el buscador o explora las categorías hasta encontrar el emoji que necesitas.
          </p>
          <p>
            Por ejemplo, puedes buscar:
          </p>
          <p className="flex flex-wrap gap-2 my-2">
            <span className="px-2.5 py-1 rounded bg-slate-100 font-mono text-xs text-slate-800">amor</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 font-mono text-xs text-slate-800">feliz</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 font-mono text-xs text-slate-800">perro</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 font-mono text-xs text-slate-800">fuego</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 font-mono text-xs text-slate-800">comida</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 font-mono text-xs text-slate-800">España</span>
          </p>
          <p>
            Cuando encuentres el resultado, pulsa Copiar. El emoji quedará disponible en el portapapeles para que puedas pegarlo en otro campo de texto.
          </p>
          <p>
            Si utilizas ciertos emojis con frecuencia, puedes guardarlos en favoritos o volver a encontrarlos en la sección de elementos recientes.
          </p>
        </section>

        {/* Section: Cómo copiar varios emojis a la vez */}
        <section className="prose-card">
          <h2>Cómo copiar varios emojis a la vez</h2>
          <p>
            No tienes que copiar cada emoji por separado.
          </p>
          <p>
            Pulsa Añadir a selección en los resultados que quieras reunir.
          </p>
          <p>
            Por ejemplo:
          </p>
          <p className="text-base font-semibold text-slate-800 my-2">
            😀 + ❤️ + 🎉
          </p>
          <p>
            Tu selección mostrará:
          </p>
          <p className="text-xl font-bold tracking-wider my-2">
            😀 ❤️ 🎉
          </p>
          <p>
            Puedes seguir añadiendo o eliminando elementos hasta conseguir el orden que necesitas. Después pulsa Copiar selección para copiar el grupo completo.
          </p>
          <p>
            Esta opción resulta práctica para mensajes, captions, comentarios, bios y cualquier otro texto donde quieras utilizar varios emojis juntos.
          </p>
        </section>

        {/* Section: Encuentra emojis por categoría */}
        <section className="prose-card">
          <h2>Encuentra emojis por categoría</h2>
          <p>
            Si todavía no sabes exactamente qué buscar, las categorías te permiten explorar opciones relacionadas.
          </p>

          <h3>Caras y emociones</h3>
          <p>
            Aquí encontrarás expresiones relacionadas con alegría, risa, cariño, sorpresa, tristeza, enojo y otras reacciones.
          </p>
          <p className="text-lg tracking-wide my-2">
            😀 😃 😄 😂 😊 🥰 😍 😎 🥳 😢 😭 😡 🤯
          </p>
          <p>
            También puedes buscar directamente una emoción, por ejemplo feliz, triste, amor o enojado.
          </p>

          <h3>Personas, manos y gestos</h3>
          <p>
            Esta categoría reúne personas, partes del cuerpo y gestos.
          </p>
          <p className="text-lg tracking-wide my-2">
            👋 👍 👎 👌 ✌️ 🤞 👏 🙌 🙏 💪 👀
          </p>
          <p>
            Algunos emojis de personas y partes del cuerpo admiten variantes de tono de piel. Cuando existan variantes válidas, la herramienta puede permitirte elegir la que quieras copiar.
          </p>

          <h3>Animales y naturaleza</h3>
          <p>
            Busca animales, plantas y otros elementos relacionados con el mundo natural.
          </p>
          <p className="text-lg tracking-wide my-2">
            🐶 🐱 🐰 🦊 🐼 🦁 🐸 🦋 🐝 🌸 🌳 🌊
          </p>
          <p>
            También puedes buscar directamente: gato, perro, mariposa, flor o árbol.
          </p>

          <h3>Comida y bebida</h3>
          <p>
            Esta categoría incluye frutas, verduras, platos, dulces y bebidas.
          </p>
          <p className="text-lg tracking-wide my-2">
            🍎 🍓 🍉 🍕 🍔 🌮 🍰 🍫 ☕ 🧃
          </p>
          <p>
            Si no sabes dónde está un emoji concreto, prueba simplemente su nombre en el buscador.
          </p>

          <h3>Viajes y lugares</h3>
          <p>
            Aquí puedes encontrar vehículos, edificios, lugares, mapas y elementos relacionados con viajes.
          </p>
          <p className="text-lg tracking-wide my-2">
            🚗 🚕 ✈️ 🚀 🏠 🏖️ 🗽 🗼 🌍
          </p>
          <p>
            Puedes utilizar términos como avión, coche, playa, casa o mundo.
          </p>

          <h3>Actividades y objetos</h3>
          <p>
            Los emojis también representan deportes, juegos, música, herramientas y objetos cotidianos.
          </p>
          <p className="text-lg tracking-wide my-2">
            ⚽ 🏀 🎮 🎸 🎨 📱 💻 📷 🎁
          </p>
          <p>
            Busca por el objeto o actividad que tengas en mente.
          </p>

          <h3>Símbolos</h3>
          <p>
            Dentro del repertorio emoji también existen corazones, señales y otros caracteres que suelen utilizarse para comunicar ideas rápidamente.
          </p>
          <p className="text-lg tracking-wide my-2">
            ❤️ 💔 💯 ✅ ❌ ❓ ⚠️ ♻️
          </p>
          <p>
            Si buscas caracteres decorativos de texto en lugar de emojis, utiliza nuestra colección de <Link href="/simbolos/" className="text-indigo-600 hover:underline font-semibold">símbolos para copiar</Link>.
          </p>

          <h3>Banderas</h3>
          <p>
            Las banderas se utilizan para representar países, regiones y otros identificadores admitidos por el estándar.
          </p>
          <p>
            Puedes buscar por el nombre del país cuando la herramienta disponga de esa anotación.
          </p>
          <p className="text-lg tracking-wide my-2">
            🇲🇽 🇪🇸 🇺🇸 🇦🇷 🇨🇴 🇨🇱
          </p>
        </section>

        {/* Section: Cómo buscar un emoji cuando no sabes su nombre */}
        <section className="prose-card">
          <h2>Cómo buscar un emoji cuando no sabes su nombre</h2>
          <p>
            No siempre necesitas conocer el nombre técnico. Piensa primero en lo que quieres expresar.
          </p>
          <ul className="space-y-1.5 text-sm text-slate-700 my-2">
            <li>Si quieres mostrar cariño, prueba: <strong>amor</strong></li>
            <li>Si quieres algo gracioso: <strong>risa</strong></li>
            <li>Si necesitas una reacción positiva: <strong>feliz</strong></li>
            <li>Si buscas un animal: <strong>perro</strong>, <strong>gato</strong> o <strong>panda</strong></li>
          </ul>
          <p>
            La búsqueda puede utilizar nombres y palabras relacionadas en español para mostrar resultados relevantes. Esto hace que encontrar un emoji sea más natural que recorrer todo el catálogo manualmente.
          </p>
        </section>

        {/* Section: Cómo funcionan los tonos de piel */}
        <section className="prose-card">
          <h2>Cómo funcionan los tonos de piel</h2>
          <p>
            Algunos emojis relacionados con personas, manos y partes del cuerpo admiten modificadores de tono de piel.
          </p>
          <p>
            Por ejemplo, una mano puede tener varias variantes visuales compatibles con el estándar.
          </p>
          <p>
            La herramienta debe mostrar únicamente combinaciones válidas disponibles en sus datos, en lugar de crear variantes de forma arbitraria. No todos los emojis admiten estos modificadores.
          </p>
        </section>

        {/* Section: Por qué algunos emojis están formados por varios caracteres */}
        <section className="prose-card">
          <h2>Por qué algunos emojis están formados por varios caracteres</h2>
          <p>
            Lo que visualmente parece un solo emoji no siempre corresponde a un único punto de código.
          </p>
          <p>
            Unicode también define secuencias que combinan varios elementos para representar determinados emojis. Esto ocurre, por ejemplo, en diferentes tipos de secuencias utilizadas para banderas, modificadores y otras representaciones.
          </p>
          <p>
            Para ti, la experiencia debe seguir siendo sencilla. Al pulsar Copiar, la herramienta copia la secuencia completa necesaria para representar ese emoji. Por eso una herramienta de emojis no debería separar automáticamente cada punto de código como si fuera un elemento independiente.
          </p>
        </section>

        {/* Section: Por qué un emoji puede verse diferente después de pegarlo */}
        <section className="prose-card">
          <h2>Por qué un emoji puede verse diferente después de pegarlo</h2>
          <p>
            Unicode define los caracteres y secuencias, pero su representación visual puede variar entre plataformas e implementaciones.
          </p>
          <p>
            Por eso una cara, un corazón o cualquier otro emoji puede tener pequeñas diferencias de forma, color o detalle después de pegarlo en otro dispositivo o aplicación. Esto no significa necesariamente que hayas copiado un emoji diferente.
          </p>
          <p>
            Si la apariencia exacta es importante para tu mensaje, comprueba el resultado en el lugar donde vas a utilizarlo.
          </p>
        </section>

        {/* Section: Qué hacer si un emoji aparece como un cuadro vacío */}
        <section className="prose-card">
          <h2>Qué hacer si un emoji aparece como un cuadro vacío</h2>
          <p>
            Un cuadro vacío o un carácter que no se representa como esperabas puede indicar que el entorno donde lo pegaste no admite correctamente ese carácter o secuencia.
          </p>
          <p>
            Puedes probar estas opciones:
          </p>
          <ul className="space-y-1.5 text-sm text-slate-700 my-2">
            <li>Comprueba el emoji en otra aplicación.</li>
            <li>Actualiza el sistema o la aplicación cuando sea posible.</li>
            <li>Prueba un emoji más antiguo o común.</li>
            <li>Comprueba que se copió la secuencia completa.</li>
          </ul>
          <p>
            No es correcto prometer que todos los emojis se mostrarán de forma idéntica en todos los dispositivos.
          </p>
        </section>

        {/* Section: Emoji, símbolo y emoticono: diferencias básicas */}
        <section className="prose-card">
          <h2>Emoji, símbolo y emoticono: diferencias básicas</h2>
          <p>
            Estos términos suelen mezclarse, pero no representan exactamente lo mismo.
          </p>
          <ul className="space-y-2 text-sm text-slate-700 my-2">
            <li>
              <strong>Un emoji:</strong> Es una representación pictográfica estandarizada por Unicode, por ejemplo: 😂, ❤️, 🐶 o 🌸.
            </li>
            <li>
              <strong>Un símbolo de texto:</strong> Es un carácter tipográfico o glifo decorativo especial, por ejemplo: ♡, ☆, → o ∞.
            </li>
            <li>
              <strong>Un emoticono tradicional:</strong> Se construye directamente con caracteres y signos de puntuación del teclado, por ejemplo :) o :D. También existen composiciones más complejas como los kaomoji.
            </li>
          </ul>
          <p>
            Separar estos tipos de caracteres ayuda a que encuentres la herramienta adecuada sin tener que recorrer colecciones que no responden a lo que buscas.
          </p>
        </section>

        {/* Section: Preguntas frecuentes */}
        <section className="prose-card">
          <h2>Preguntas frecuentes</h2>
          <div className="space-y-3 my-2">
            {[
              {
                q: '¿Cómo copiar y pegar un emoji?',
                a: 'Busca el emoji, pulsa Copiar y después utiliza la función de pegar en el campo de texto donde quieras colocarlo.',
              },
              {
                q: '¿Puedo copiar varios emojis juntos?',
                a: 'Sí. Añade los emojis que quieras a tu selección y utiliza Copiar selección para llevarte el grupo completo al portapapeles.',
              },
              {
                q: '¿Puedo buscar emojis en español?',
                a: 'Sí. El buscador puede utilizar nombres y términos relacionados en español para ayudarte a encontrar resultados aunque no conozcas el nombre exacto.',
              },
              {
                q: '¿Por qué el mismo emoji se ve diferente en otro dispositivo?',
                a: 'Las plataformas pueden utilizar diseños visuales diferentes para representar un mismo carácter o secuencia emoji. Por eso pueden existir diferencias de apariencia.',
              },
              {
                q: '¿Todos los emojis admiten tonos de piel?',
                a: 'No. Los modificadores de tono de piel se aplican a determinados emojis compatibles.',
              },
              {
                q: '¿Por qué algunos emojis tienen varios caracteres?',
                a: 'Unicode define distintas secuencias emoji. Algunas representaciones que parecen un único emoji están construidas a partir de varios puntos de código que deben conservarse juntos.',
              },
              {
                q: '¿Puedo guardar mis emojis favoritos?',
                a: 'La herramienta puede guardar tus favoritos localmente en el navegador para que puedas volver a encontrarlos sin crear una cuenta.',
              },
              {
                q: '¿Por qué no aparece correctamente un emoji después de pegarlo?',
                a: 'El sistema, la aplicación o el entorno donde lo pegaste puede no admitir correctamente ese carácter o secuencia. Prueba en otro entorno o utiliza una alternativa más ampliamente compatible.',
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

        {/* Section: Final CTA */}
        <section className="prose-card">
          <h2>Busca, selecciona y copia tus emojis</h2>
          <p>
            Si necesitas un solo emoji, utiliza el buscador o las categorías y cópialo directamente. Si quieres varios, añádelos a tu selección y copia el grupo completo cuando esté listo.
          </p>
          <p>
            Empieza por la idea que quieres expresar, no por memorizar nombres técnicos. Una búsqueda como amor, risa, perro, comida o viaje puede ayudarte a llegar al emoji adecuado mucho más rápido.
          </p>
        </section>
      </article>
    </main>
  );
}
