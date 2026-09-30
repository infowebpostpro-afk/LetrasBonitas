import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BonitosEmojiTool } from '@/components/font-generator/BonitosEmojiTool';

export const metadata: Metadata = {
  title: 'Emojis Bonitos para Copiar y Pegar | LetrasBonitas',
  description:
    'Encuentra emojis bonitos y lindos por tema, emoción o estilo. Busca corazones, flores, estrellas, emojis cute y más, y cópialos con un toque.',
  alternates: {
    canonical: 'https://letrasbonits.com/emojis/bonitos/',
  },
  openGraph: {
    title: 'Emojis Bonitos y Lindos para Copiar | LetrasBonitas',
    description:
      'Explora emojis bonitos por categoría, encuentra tus favoritos y copia corazones, flores, estrellas, animales y mucho más.',
    url: 'https://letrasbonits.com/emojis/bonitos/',
    siteName: 'LetrasBonitas',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emojis Bonitos para Copiar y Pegar | LetrasBonitas',
    description:
      'Selector de emojis bonitos y lindos: corazones, flores, brillos, animales y estética cute.',
  },
};

export default function BonitosEmojisPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://letrasbonits.com/emojis/bonitos/#webpage',
        url: 'https://letrasbonits.com/emojis/bonitos/',
        name: 'Emojis Bonitos para Copiar y Pegar',
        description:
          'Encuentra emojis bonitos y lindos por tema, emoción o estilo. Busca corazones, flores, estrellas, emojis cute y más, y cópialos con un toque.',
        isPartOf: {
          '@type': 'WebSite',
          name: 'LetrasBonitas',
          url: 'https://letrasbonits.com/',
        },
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://letrasbonits.com/emojis/bonitos/#tool',
        name: 'Selector de Emojis Bonitos de LetrasBonitas',
        url: 'https://letrasbonits.com/emojis/bonitos/',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        browserRequirements:
          'Requires JavaScript for interactive filtering, favorites, and one-click copying',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://letrasbonits.com/emojis/bonitos/#breadcrumb',
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
            name: 'Emojis Bonitos',
            item: 'https://letrasbonits.com/emojis/bonitos/',
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
          🌸 🦋 🩷 ✨ 🎀
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Emojis', href: '/emojis/' },
              { label: 'Emojis Bonitos', href: '/emojis/bonitos/' },
            ]}
          />
          <span className="hero-saas__badge">🌸 SELECCIÓN CUIDADA</span>
          <h1 className="hero-saas__title">
            Emojis Bonitos para <span className="gradient-text-cyan">Copiar y Pegar</span>
          </h1>
          <p className="hero-saas__lead">
            Encuentra emojis lindos por tema, emoción o estilo y cópialos con un toque. Explora corazones, flores, estrellas, animales tiernos y combinaciones sencillas.
          </p>
        </div>
      </header>

      {/* ═══ PRIMARY INTERACTIVE TOOL ═══ */}
      <BonitosEmojiTool />

      {/* ═══ SILO NAVIGATION CALLOUT ═══ */}
      <div className="prose-card mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 m-0">
              <span>🎯</span>
              <span>Otras colecciones que te pueden gustar</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1 m-0">
              Combina emojis bonitos con combinaciones de estilo y caracteres decorativos:
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <Link
              href="/emojis/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
            >
              Todos los Emojis
            </Link>
            <Link
              href="/emojis/aesthetic/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors"
            >
              Emojis Aesthetic
            </Link>
            <Link
              href="/simbolos/bonitos/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 transition-colors"
            >
              Símbolos Bonitos
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
      <article className="prose-section" aria-label="Guía completa sobre emojis bonitos para copiar y pegar">
        {/* Section 1: Intro */}
        <section className="prose-card">
          <h2>Emojis Bonitos para Copiar y Pegar</h2>
          <p>
            A veces sabes que quieres añadir algo bonito a un mensaje, una bio o una publicación, pero recorrer todo el teclado de emojis no ayuda demasiado. Hay muchas opciones y encontrar justo el corazón, la flor, la mariposa o el detalle que tenías en mente puede llevar más tiempo del necesario.
          </p>
          <p>
            Nuestro selector de emojis bonitos reúne opciones visualmente agradables y las organiza por temas fáciles de entender. Busca una palabra como amor, flores, luna o cute, explora las categorías y copia el emoji que mejor encaje con tu mensaje.
          </p>
        </section>

        {/* Section 2: Encuentra emojis bonitos por categoría */}
        <section className="prose-card">
          <h2>Encuentra emojis bonitos por categoría</h2>
          <p>
            No necesitas conocer el nombre exacto de un emoji. Puedes empezar por el tipo de imagen o sensación que estás buscando.
          </p>

          <h3>Amor y corazones</h3>
          <p>
            Los corazones y otros emojis relacionados con cariño pueden servir para mensajes románticos, amistosos o simplemente afectuosos.
          </p>
          <p>
            Ejemplos: ❤️ 🩷 💕 💗 💖 💘 💝 💌 🥰 😍
          </p>
          <p>
            Si quieres algo sencillo, un solo corazón puede ser suficiente. Si buscas un detalle más expresivo, prueba combinaciones cortas como: <code>🩷 🌸</code>, <code>💌 💕</code>, <code>🎀 🩷</code> o <code>🥰 💖</code>. El color y el contexto pueden cambiar la sensación que transmite cada opción, así que elige pensando en el mensaje completo.
          </p>

          <h3>Flores y naturaleza</h3>
          <p>
            Las flores son útiles cuando buscas algo alegre, delicado o relacionado con naturaleza.
          </p>
          <p>
            Ejemplos: 🌸 🌷 🌹 🌺 🌻 🌼 🪷 💐 🪻
          </p>
          <p>
            También puedes combinar flores con elementos naturales: <code>🌷 🦋</code>, <code>🌸 🍃</code>, <code>🌻 🐝</code> o <code>🪷 🌿</code>. Si buscas una flor concreta, escribe su nombre en el buscador. También puedes probar términos más amplios como naturaleza o jardín.
          </p>

          <h3>Estrellas y brillos</h3>
          <p>
            Para celebraciones, mensajes positivos o pequeños detalles visuales puedes explorar: ✨ ⭐ 🌟 💫 ☀️
          </p>
          <p>
            Algunas combinaciones sencillas son: <code>✨ 🤍</code>, <code>🌟 💛</code>, <code>🌙 ✨</code> o <code>💫 🩷</code>. Un brillo puede acompañar una palabra o una frase sin ocupar demasiado espacio.
          </p>

          <h3>Emojis cute</h3>
          <p>
            La palabra &quot;cute&quot; suele utilizarse para cosas que se perciben como tiernas, dulces o adorables.
          </p>
          <p>
            En esta categoría puedes encontrar opciones como: 🎀 🧸 🐰 🐱 🐣 🍓 🌸 🩷 🦋
          </p>
          <p>
            Por ejemplo: <code>🎀 🧸</code>, <code>🐰 🌸</code>, <code>🍓 🩷</code> o <code>🦋 🤍</code>. No todos los usuarios interpretan lo &quot;cute&quot; exactamente igual. Por eso la categoría sirve como punto de partida y no como una definición estricta.
          </p>

          <h3>Luna y cielo</h3>
          <p>
            Si buscas una sensación relacionada con la noche, los sueños o el cielo, prueba: 🌙 🌛 🌜 🌌 ⭐ ✨ ☁️ 🪐
          </p>
          <p>
            Algunas opciones cortas: <code>🌙 ✨</code>, <code>☁️ 🌙</code>, <code>🪐 ⭐</code> o <code>🌌 💫</code>. Para combinaciones más elaboradas y organizadas por estética, puedes explorar nuestra colección de <Link href="/emojis/aesthetic/" className="text-indigo-600 hover:underline font-semibold">emojis aesthetic</Link>.
          </p>

          <h3>Animales bonitos</h3>
          <p>
            Los animales pueden aportar una sensación tierna, divertida o relacionada con naturaleza.
          </p>
          <p>
            Prueba: 🐰 🐱 🐶 🐹 🐼 🐻 🐨 🦊 🦋 🐝 🐬
          </p>
          <p>
            Puedes buscarlos por nombre (conejo, gato, perro, panda, mariposa, delfín) o por conceptos relacionados como animal, cute o naturaleza.
          </p>

          <h3>Playa y verano</h3>
          <p>
            Para publicaciones, mensajes o recuerdos relacionados con mar, vacaciones y días soleados puedes explorar: 🌊 🐚 ☀️ 🏝️ 🐬 🪸 🍹 🌴
          </p>
          <p>
            Ejemplos: <code>🐚 🌊</code>, <code>☀️ 🌴</code>, <code>🐬 🫧</code> o <code>🏝️ ☀️</code>. La mejor opción depende de lo que realmente quieras comunicar. Una foto del mar puede necesitar solamente 🌊, mientras que una publicación de vacaciones puede admitir una combinación más expresiva.
          </p>
        </section>

        {/* Section 3: Cómo encontrar el emoji bonito que buscas */}
        <section className="prose-card">
          <h2>Cómo encontrar el emoji bonito que buscas</h2>
          <p>
            Nuestro selector está pensado para que puedas buscar por ideas, no solamente por el nombre exacto de cada emoji.
          </p>

          <h3>Busca por emoción</h3>
          <p>
            Si quieres expresar cariño, puedes escribir <code>amor</code>. Si quieres algo alegre, escribe <code>feliz</code>. Para una sensación tranquila, prueba <code>calma</code>. El buscador puede mostrar varias opciones relacionadas para que compares antes de copiar.
          </p>

          <h3>Busca por objeto o tema</h3>
          <p>
            También puedes buscar algo visual como <code>flor</code>, <code>mariposa</code>, <code>luna</code>, <code>estrella</code>, <code>playa</code> o <code>gato</code>. Esto resulta útil cuando sabes qué quieres mostrar pero no quieres recorrer todas las categorías.
          </p>

          <h3>Guarda tus favoritos</h3>
          <p>
            Si utilizas los mismos emojis con frecuencia, puedes marcarlos como favoritos tocando el corazón ♡. Así puedes volver a encontrar rápidamente ese corazón, mariposa, flor o estrella que utilizas habitualmente sin tener que repetir la búsqueda. Los favoritos se guardan localmente en tu navegador sin necesidad de registrarte.
          </p>
        </section>

        {/* Section 4: Emojis bonitos para copiar en segundos */}
        <section className="prose-card">
          <h2>Emojis bonitos para copiar en segundos</h2>
          <p>
            Cuando encuentres una opción que te guste, pulsa Copiar. Por ejemplo, al tocar 🦋 el carácter se enviará a tu portapapeles. Después puedes pegarlo en WhatsApp, Instagram, TikTok o cualquier campo de texto compatible.
          </p>
          <p>
            La herramienta también muestra los emojis copiados recientemente para que puedas volver a utilizarlos sin repetir la búsqueda. No necesitas descargar una imagen para realizar esta acción: el selector copia el emoji como texto nativo Unicode.
          </p>
        </section>

        {/* Section 5: Un solo emoji o una combinación corta */}
        <section className="prose-card">
          <h2>Un solo emoji o una combinación corta</h2>
          <p>
            Más elementos no siempre son necesarios. Un solo emoji puede comunicar claramente una idea: <code>🌹</code>, <code>🦋</code>, <code>🌙</code>, <code>🎀</code> o <code>✨</code>.
          </p>
          <p>
            En otros casos puedes combinar dos o tres: <code>🌷 🦋</code>, <code>🌙 ✨</code>, <code>🎀 🩷 🌸</code> o <code>🐚 🌊 ☀️</code>.
          </p>
          <p>
            Piensa primero en el mensaje. Si simplemente quieres acompañar una frase, una sola opción puede funcionar. Si quieres crear una pequeña decoración visual, una combinación corta puede darte más posibilidades. Para construir composiciones completas por estilo, te recomendamos utilizar nuestra herramienta especializada en <Link href="/emojis/aesthetic/" className="text-indigo-600 hover:underline font-semibold">emojis aesthetic</Link>.
          </p>
        </section>

        {/* Section 6: Bonito, cute y aesthetic: cómo los organizamos */}
        <section className="prose-card">
          <h2>Bonito, cute y aesthetic: cómo los organizamos</h2>
          <p>
            Estos términos pueden solaparse en conversaciones cotidianas, pero en LetrasBonitas nos ayudan a organizar herramientas con objetivos diferentes:
          </p>
          <ul>
            <li><strong>Emojis bonitos:</strong> Una selección amplia de emojis que alguien puede querer por su apariencia, ternura o capacidad de decorar un mensaje sin sobrecargar.</li>
            <li><strong>Cute:</strong> Una categoría más específica relacionada con una apariencia tierna, dulce o adorable (lazos, ositos, conejos, fresas).</li>
            <li><strong>Aesthetic:</strong> Combinaciones organizadas alrededor de una estética o ambiente visual concreto, por ejemplo coquette, celestial, dark academia o cottagecore.</li>
          </ul>
          <p>
            Estas etiquetas no son categorías oficiales de Unicode. Son formas prácticas de organizar la colección para que sea más fácil explorarla y encontrar lo que buscas en segundos.
          </p>
        </section>

        {/* Section 7: Ideas para usar emojis bonitos */}
        <section className="prose-card">
          <h2>Ideas para usar emojis bonitos</h2>
          <p>
            Los emojis pueden acompañar distintos tipos de texto. La cantidad y el estilo que convienen dependen del contexto:
          </p>

          <h3>Mensajes</h3>
          <p>
            En un mensaje personal puedes utilizar un emoji para reforzar el tono:
          </p>
          <ul>
            <li>Que tengas un día bonito 🌸</li>
            <li>Buenas noches 🌙</li>
            <li>Muchas gracias 🩷</li>
            <li>Nos vemos pronto ✨</li>
          </ul>
          <p>
            El texto sigue comunicando la idea principal y el emoji añade un detalle visual cálido.
          </p>

          <h3>Bios y perfiles</h3>
          <p>
            En una bio puedes utilizar uno o varios emojis para separar ideas o destacar intereses:
          </p>
          <p>
            <code>Fotografía 📸 | Viajes 🌍 | Café ☕</code>
          </p>
          <p>
            O una opción más decorativa: <code>🌸 libros · café · fotografía ✨</code>. Comprueba siempre cómo se ve el resultado dentro de la aplicación donde vas a utilizarlo.
          </p>

          <h3>Captions y publicaciones</h3>
          <p>
            Puedes elegir emojis relacionados directamente con la imagen o tema de la publicación:
          </p>
          <ul>
            <li>Flores: <code>🌸 🌷 🦋</code></li>
            <li>Playa: <code>🌊 🐚 ☀️</code></li>
            <li>Noche: <code>🌙 ✨ ☁️</code></li>
            <li>Celebración: <code>🎉 🥳 ✨</code></li>
          </ul>
          <p>
            Elegir por contexto suele producir un resultado más claro que añadir muchos emojis sin relación.
          </p>
        </section>

        {/* Section 8: Plataformas y diferencias */}
        <section className="prose-card">
          <h2>Por qué un emoji puede verse diferente después de copiarlo</h2>
          <p>
            El carácter que copias puede mostrarse con un diseño visual algo diferente según el sistema o aplicación que lo represente. Por eso un corazón, una cara o una flor puede tener pequeñas diferencias visuales entre iOS, Android, Windows o navegadores web.
          </p>
          <p>
            También puede ocurrir que un emoji reciente no se muestre correctamente en software antiguo o en un entorno que todavía no admita esa secuencia. Si la apariencia es importante para ti, copia el emoji y comprueba el resultado directamente en la aplicación donde piensas utilizarlo.
          </p>
        </section>

        {/* Section 9: Emoji, símbolo y emoticono */}
        <section className="prose-card">
          <h2>Emoji, símbolo y emoticono no son lo mismo</h2>
          <p>
            Aunque visualmente pueden utilizarse para decorar texto, no conviene mezclar todos estos términos:
          </p>
          <ul>
            <li><strong>Emoji:</strong> Un carácter o secuencia estandarizada por Unicode (por ejemplo: 🦋, 🌸, 🩷).</li>
            <li><strong>Símbolo decorativo:</strong> Un carácter de texto como ♡, ✦ o ☆ (visita nuestra sección de <Link href="/simbolos/bonitos/" className="text-indigo-600 hover:underline font-semibold">símbolos bonitos</Link> para ver la colección completa).</li>
            <li><strong>Emoticono tradicional:</strong> Se escribe utilizando caracteres del teclado, por ejemplo :) o :D. También existen kaomojis japoneses más elaborados.</li>
          </ul>
          <p>
            En LetrasBonitas separamos estas categorías para que puedas utilizar la herramienta adecuada según lo que estés buscando.
          </p>
        </section>

        {/* Section 10: FAQs */}
        <section className="prose-card">
          <h2>Preguntas frecuentes</h2>

          <div className="space-y-3 my-2">
            {[
              {
                q: '¿Cómo copiar emojis bonitos?',
                a: 'Busca o selecciona un emoji y pulsa Copiar. Después pégalo en el campo de texto donde quieras utilizarlo.',
              },
              {
                q: '¿Dónde puedo encontrar emojis lindos?',
                a: 'Puedes utilizar las categorías de esta página o buscar palabras como amor, flores, cute, mariposa, luna, estrella o playa.',
              },
              {
                q: '¿Qué emojis son bonitos para una bio?',
                a: 'Depende del estilo de tu perfil. 🌸, 🦋, ✨, 🌙, 🎀, 🤍 y 🩷 son ejemplos que pueden utilizarse en distintos contextos. Elige los que tengan relación con tu texto o personalidad visual.',
              },
              {
                q: '¿Qué emojis puedo usar para amor?',
                a: 'Puedes explorar ❤️, 🩷, 💕, 💗, 💖, 💘, 💝, 💌, 🥰 y otros relacionados. La mejor opción depende del tono y de la persona a la que diriges el mensaje.',
              },
              {
                q: '¿Cuáles son emojis cute?',
                a: '🎀, 🧸, 🐰, 🐱, 🍓, 🌸, 🩷 y 🦋 son ejemplos que pueden encajar en una colección cute. "Cute" es una etiqueta de estilo, no una categoría técnica oficial.',
              },
              {
                q: '¿Puedo copiar varios emojis juntos?',
                a: 'Sí. Puedes copiar una combinación preparada en nuestra sección de combos o copiar varios emojis individualmente y colocarlos juntos en tu texto.',
              },
              {
                q: '¿Por qué un emoji se ve diferente en otro teléfono?',
                a: 'El diseño visual puede variar según la plataforma, aplicación y versión del sistema. El carácter puede ser el mismo aunque su dibujo cambie.',
              },
              {
                q: '¿Los emojis bonitos funcionan en todas las aplicaciones?',
                a: 'No conviene asumir compatibilidad universal. Muchas aplicaciones modernas admiten emojis, pero la apariencia y el soporte de determinadas secuencias pueden variar. Comprueba el resultado en la aplicación donde vas a utilizarlo.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm m-0 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-pink-100 text-pink-700 flex items-center justify-center text-xs font-black shrink-0">?</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-xs pl-7 m-0">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 11: Final CTA */}
        <section className="prose-card">
          <h2>Encuentra el emoji que encaje con tu mensaje</h2>
          <p>
            No necesitas recorrer cientos de opciones cada vez que quieres añadir un detalle bonito. Empieza por una emoción, un objeto o una categoría, compara varias opciones y copia la que mejor represente lo que quieres decir.
          </p>
          <p>
            Si solo necesitas un emoji, mantén la elección sencilla. Si buscas una composición visual completa, visita nuestro <Link href="/emojis/aesthetic/" className="text-indigo-600 hover:underline font-semibold">generador de emojis aesthetic</Link> para explorar combinaciones con estilo propio.
          </p>
        </section>
      </article>
    </main>
  );
}
